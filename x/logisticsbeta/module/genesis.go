package logisticsbeta

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/keeper"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	k.SetSystemInfo1(ctx, genState.SystemInfo1)

	// Set if defined
	k.SetSystemInfo2(ctx, genState.SystemInfo2)

	// Set if defined
	k.SetSystemInfo3(ctx, genState.SystemInfo3)

	// Set all the vendor
	for _, elem := range genState.VendorList {
		k.SetVendor(ctx, elem)
	}
	// Set all the purchaser
	for _, elem := range genState.PurchaserList {
		k.SetPurchaser(ctx, elem)
	}
	// Set all the transporter
	for _, elem := range genState.TransporterList {
		k.SetTransporter(ctx, elem)
	}
	// Set if defined

	k.SetSystemInfo4(ctx, genState.SystemInfo4)

	// Set all the trade
	for _, elem := range genState.TradeList {
		k.SetTrade(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	if err := k.SetParams(ctx, genState.Params); err != nil {
		panic(err)
	}
}

// ExportGenesis returns the module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all systemInfo1
	systemInfo1, found := k.GetSystemInfo1(ctx)
	if found {
		genesis.SystemInfo1 = systemInfo1
	}
	// Get all systemInfo2
	systemInfo2, found := k.GetSystemInfo2(ctx)
	if found {
		genesis.SystemInfo2 = systemInfo2
	}
	// Get all systemInfo3
	systemInfo3, found := k.GetSystemInfo3(ctx)
	if found {
		genesis.SystemInfo3 = systemInfo3
	}
	genesis.VendorList = k.GetAllVendor(ctx)
	genesis.PurchaserList = k.GetAllPurchaser(ctx)
	genesis.TransporterList = k.GetAllTransporter(ctx)
	// Get all systemInfo4
	systemInfo4, found := k.GetSystemInfo4(ctx)
	if found {
		genesis.SystemInfo4 = systemInfo4
	}
	genesis.TradeList = k.GetAllTrade(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
