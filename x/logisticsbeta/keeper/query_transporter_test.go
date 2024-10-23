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

func TestTransporterQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	msgs := createNTransporter(keeper, ctx, 2)
	tests := []struct {
		desc     string
		request  *types.QueryGetTransporterRequest
		response *types.QueryGetTransporterResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetTransporterRequest{
				Transporterid: msgs[0].Transporterid,
			},
			response: &types.QueryGetTransporterResponse{Transporter: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetTransporterRequest{
				Transporterid: msgs[1].Transporterid,
			},
			response: &types.QueryGetTransporterResponse{Transporter: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetTransporterRequest{
				Transporterid: strconv.Itoa(100000),
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
			response, err := keeper.Transporter(ctx, tc.request)
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

func TestTransporterQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	msgs := createNTransporter(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllTransporterRequest {
		return &types.QueryAllTransporterRequest{
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
			resp, err := keeper.TransporterAll(ctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Transporter), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Transporter),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.TransporterAll(ctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Transporter), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Transporter),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.TransporterAll(ctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Transporter),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.TransporterAll(ctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
