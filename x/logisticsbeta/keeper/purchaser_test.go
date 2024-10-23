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

func createNPurchaser(keeper keeper.Keeper, ctx context.Context, n int) []types.Purchaser {
	items := make([]types.Purchaser, n)
	for i := range items {
		items[i].Purchaserid = strconv.Itoa(i)

		keeper.SetPurchaser(ctx, items[i])
	}
	return items
}

func TestPurchaserGet(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	items := createNPurchaser(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetPurchaser(ctx,
			item.Purchaserid,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestPurchaserRemove(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	items := createNPurchaser(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePurchaser(ctx,
			item.Purchaserid,
		)
		_, found := keeper.GetPurchaser(ctx,
			item.Purchaserid,
		)
		require.False(t, found)
	}
}

func TestPurchaserGetAll(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	items := createNPurchaser(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPurchaser(ctx)),
	)
}
