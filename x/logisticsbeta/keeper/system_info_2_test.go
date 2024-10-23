package keeper_test

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "github.com/XxSNiPxX/logisticsBeta/testutil/keeper"
	"github.com/XxSNiPxX/logisticsBeta/testutil/nullify"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/keeper"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
)

func createTestSystemInfo2(keeper keeper.Keeper, ctx context.Context) types.SystemInfo2 {
	item := types.SystemInfo2{}
	keeper.SetSystemInfo2(ctx, item)
	return item
}

func TestSystemInfo2Get(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	item := createTestSystemInfo2(keeper, ctx)
	rst, found := keeper.GetSystemInfo2(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestSystemInfo2Remove(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	createTestSystemInfo2(keeper, ctx)
	keeper.RemoveSystemInfo2(ctx)
	_, found := keeper.GetSystemInfo2(ctx)
	require.False(t, found)
}
