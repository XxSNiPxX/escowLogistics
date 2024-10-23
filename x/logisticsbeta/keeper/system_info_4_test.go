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

func createTestSystemInfo4(keeper keeper.Keeper, ctx context.Context) types.SystemInfo4 {
	item := types.SystemInfo4{}
	keeper.SetSystemInfo4(ctx, item)
	return item
}

func TestSystemInfo4Get(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	item := createTestSystemInfo4(keeper, ctx)
	rst, found := keeper.GetSystemInfo4(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestSystemInfo4Remove(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	createTestSystemInfo4(keeper, ctx)
	keeper.RemoveSystemInfo4(ctx)
	_, found := keeper.GetSystemInfo4(ctx)
	require.False(t, found)
}
