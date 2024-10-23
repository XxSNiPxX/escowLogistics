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

func TestPurchaserQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	msgs := createNPurchaser(keeper, ctx, 2)
	tests := []struct {
		desc     string
		request  *types.QueryGetPurchaserRequest
		response *types.QueryGetPurchaserResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetPurchaserRequest{
				Purchaserid: msgs[0].Purchaserid,
			},
			response: &types.QueryGetPurchaserResponse{Purchaser: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetPurchaserRequest{
				Purchaserid: msgs[1].Purchaserid,
			},
			response: &types.QueryGetPurchaserResponse{Purchaser: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetPurchaserRequest{
				Purchaserid: strconv.Itoa(100000),
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
			response, err := keeper.Purchaser(ctx, tc.request)
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

func TestPurchaserQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	msgs := createNPurchaser(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllPurchaserRequest {
		return &types.QueryAllPurchaserRequest{
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
			resp, err := keeper.PurchaserAll(ctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Purchaser), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Purchaser),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.PurchaserAll(ctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Purchaser), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Purchaser),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.PurchaserAll(ctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Purchaser),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.PurchaserAll(ctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
