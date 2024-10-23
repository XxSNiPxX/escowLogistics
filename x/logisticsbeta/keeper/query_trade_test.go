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

func TestTradeQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	msgs := createNTrade(keeper, ctx, 2)
	tests := []struct {
		desc     string
		request  *types.QueryGetTradeRequest
		response *types.QueryGetTradeResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetTradeRequest{
				Tradeid: msgs[0].Tradeid,
			},
			response: &types.QueryGetTradeResponse{Trade: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetTradeRequest{
				Tradeid: msgs[1].Tradeid,
			},
			response: &types.QueryGetTradeResponse{Trade: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetTradeRequest{
				Tradeid: strconv.Itoa(100000),
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
			response, err := keeper.Trade(ctx, tc.request)
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

func TestTradeQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	msgs := createNTrade(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllTradeRequest {
		return &types.QueryAllTradeRequest{
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
			resp, err := keeper.TradeAll(ctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Trade), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Trade),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.TradeAll(ctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Trade), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Trade),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.TradeAll(ctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Trade),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.TradeAll(ctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
