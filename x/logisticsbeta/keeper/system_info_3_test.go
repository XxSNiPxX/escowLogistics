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

func createTestSystemInfo3(keeper keeper.Keeper, ctx context.Context) types.SystemInfo3 {
	item := types.SystemInfo3{}
	keeper.SetSystemInfo3(ctx, item)
	return item
}

func TestSystemInfo3Get(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	item := createTestSystemInfo3(keeper, ctx)
	rst, found := keeper.GetSystemInfo3(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestSystemInfo3Remove(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	createTestSystemInfo3(keeper, ctx)
	keeper.RemoveSystemInfo3(ctx)
	_, found := keeper.GetSystemInfo3(ctx)
	require.False(t, found)
}
