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

func createTestSystemInfo1(keeper keeper.Keeper, ctx context.Context) types.SystemInfo1 {
	item := types.SystemInfo1{}
	keeper.SetSystemInfo1(ctx, item)
	return item
}

func TestSystemInfo1Get(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	item := createTestSystemInfo1(keeper, ctx)
	rst, found := keeper.GetSystemInfo1(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestSystemInfo1Remove(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	createTestSystemInfo1(keeper, ctx)
	keeper.RemoveSystemInfo1(ctx)
	_, found := keeper.GetSystemInfo1(ctx)
	require.False(t, found)
}
