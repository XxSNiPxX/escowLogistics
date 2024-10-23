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

func createNTransporter(keeper keeper.Keeper, ctx context.Context, n int) []types.Transporter {
	items := make([]types.Transporter, n)
	for i := range items {
		items[i].Transporterid = strconv.Itoa(i)

		keeper.SetTransporter(ctx, items[i])
	}
	return items
}

func TestTransporterGet(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	items := createNTransporter(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetTransporter(ctx,
			item.Transporterid,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestTransporterRemove(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	items := createNTransporter(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTransporter(ctx,
			item.Transporterid,
		)
		_, found := keeper.GetTransporter(ctx,
			item.Transporterid,
		)
		require.False(t, found)
	}
}

func TestTransporterGetAll(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	items := createNTransporter(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllTransporter(ctx)),
	)
}
