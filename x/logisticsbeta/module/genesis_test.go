package logisticsbeta_test

import (
	"testing"

	keepertest "github.com/XxSNiPxX/logisticsBeta/testutil/keeper"
	"github.com/XxSNiPxX/logisticsBeta/testutil/nullify"
	logisticsbeta "github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/module"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		SystemInfo1: &types.SystemInfo1{
			NextPurchaser: 90,
		},
		SystemInfo2: &types.SystemInfo2{
			NextVendor: 4,
		},
		SystemInfo3: &types.SystemInfo3{
			NextTransporter: 77,
		},
		VendorList: []types.Vendor{
			{
				Vendorid: "0",
			},
			{
				Vendorid: "1",
			},
		},
		PurchaserList: []types.Purchaser{
			{
				Purchaserid: "0",
			},
			{
				Purchaserid: "1",
			},
		},
		TransporterList: []types.Transporter{
			{
				Transporterid: "0",
			},
			{
				Transporterid: "1",
			},
		},
		SystemInfo4: &types.SystemInfo4{
			NextOrder: 90,
		},
		TradeList: []types.Trade{
			{
				Tradeid: "0",
			},
			{
				Tradeid: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.LogisticsbetaKeeper(t)
	logisticsbeta.InitGenesis(ctx, k, genesisState)
	got := logisticsbeta.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.SystemInfo1, got.SystemInfo1)
	require.Equal(t, genesisState.SystemInfo2, got.SystemInfo2)
	require.Equal(t, genesisState.SystemInfo3, got.SystemInfo3)
	require.ElementsMatch(t, genesisState.VendorList, got.VendorList)
	require.ElementsMatch(t, genesisState.PurchaserList, got.PurchaserList)
	require.ElementsMatch(t, genesisState.TransporterList, got.TransporterList)
	require.Equal(t, genesisState.SystemInfo4, got.SystemInfo4)
	require.ElementsMatch(t, genesisState.TradeList, got.TradeList)
	// this line is used by starport scaffolding # genesis/test/assert
}
