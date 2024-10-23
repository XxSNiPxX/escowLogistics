package keeper_test

import (
	"strconv"
	"testing"

	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/XxSNiPxX/logisticsBeta/testutil/keeper"
	"github.com/XxSNiPxX/logisticsBeta/testutil/nullify"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestVendorQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	msgs := createNVendor(keeper, ctx, 2)
	tests := []struct {
		desc     string
		request  *types.QueryGetVendorRequest
		response *types.QueryGetVendorResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetVendorRequest{
				Vendorid: msgs[0].Vendorid,
			},
			response: &types.QueryGetVendorResponse{Vendor: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetVendorRequest{
				Vendorid: msgs[1].Vendorid,
			},
			response: &types.QueryGetVendorResponse{Vendor: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetVendorRequest{
				Vendorid: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Vendor(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestVendorQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	msgs := createNVendor(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllVendorRequest {
		return &types.QueryAllVendorRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.VendorAll(ctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Vendor), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Vendor),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.VendorAll(ctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Vendor), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Vendor),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.VendorAll(ctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Vendor),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.VendorAll(ctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
