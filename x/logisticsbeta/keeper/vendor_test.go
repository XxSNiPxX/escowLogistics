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

func createNVendor(keeper keeper.Keeper, ctx context.Context, n int) []types.Vendor {
	items := make([]types.Vendor, n)
	for i := range items {
		items[i].Vendorid = strconv.Itoa(i)

		keeper.SetVendor(ctx, items[i])
	}
	return items
}

func TestVendorGet(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	items := createNVendor(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetVendor(ctx,
			item.Vendorid,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestVendorRemove(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	items := createNVendor(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveVendor(ctx,
			item.Vendorid,
		)
		_, found := keeper.GetVendor(ctx,
			item.Vendorid,
		)
		require.False(t, found)
	}
}

func TestVendorGetAll(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	items := createNVendor(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllVendor(ctx)),
	)
}
