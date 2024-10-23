package keeper_test

import (
	"context"
	"strconv"
	"testing"

	keepertest "github.com/XxSNiPxX/logisticsBeta/testutil/keeper"
	"github.com/XxSNiPxX/logisticsBeta/testutil/nullify"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/keeper"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNTrade(keeper keeper.Keeper, ctx context.Context, n int) []types.Trade {
	items := make([]types.Trade, n)
	for i := range items {
		items[i].Tradeid = strconv.Itoa(i)

		keeper.SetTrade(ctx, items[i])
	}
	return items
}

func TestTradeGet(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	items := createNTrade(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetTrade(ctx,
			item.Tradeid,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestTradeRemove(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	items := createNTrade(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTrade(ctx,
			item.Tradeid,
		)
		_, found := keeper.GetTrade(ctx,
			item.Tradeid,
		)
		require.False(t, found)
	}
}

func TestTradeGetAll(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	items := createNTrade(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllTrade(ctx)),
	)
}
