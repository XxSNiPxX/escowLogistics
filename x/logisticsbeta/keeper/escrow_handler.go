package keeper

import (
	"fmt"

	sdkerrors "cosmossdk.io/errors"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k *Keeper) CollectTransporterEscrow(ctx sdk.Context, transporter *types.Transporter) error {

	// Black plays first
	walletid, err := transporter.GetWalletID()
	if err != nil {
		panic(err.Error())
	}
	err = k.bankkeeper.SendCoinsFromAccountToModule(ctx, walletid, types.ModuleName, sdk.NewCoins(transporter.GetEscrowedCoin()))
	if err != nil {
		// to burn.
		panic(fmt.Sprintf("cannot burn coins after a successful send to a module account: %v", err))
		return sdkerrors.Wrapf(err, types.ErrCantPayTransporterEscrow.Error())
	}

	return nil
}
func (k *Keeper) ReturnTransporterEscrow(ctx sdk.Context, transporter *types.Transporter) error {

	// Black plays first
	walletid, err := transporter.GetWalletID()
	if err != nil {
		panic(err.Error())
	}
	err = k.bankkeeper.SendCoinsFromAccountToModule(ctx, walletid, types.ModuleName, sdk.NewCoins(transporter.GetEscrowedCoin()))
	if err != nil {
		return sdkerrors.Wrapf(err, types.ErrCantPayTransporterEscrow.Error())
	}

	return nil
}

func (k *Keeper) CollectPurchaserEscrow(ctx sdk.Context, purchaser *types.Purchaser, trade *types.Trade) error {

	// Black plays first
	walletid, err := purchaser.GetWalletID()
	if err != nil {
		panic(err.Error())
	}
	err = k.bankkeeper.SendCoinsFromAccountToModule(ctx, walletid, types.ModuleName, sdk.NewCoins(trade.GetPurchaserVendorEscrowedCoin()))
	if err != nil {
		// to burn.
		panic(fmt.Sprintf("cannot burn coins after a successful send to a module account: %v", err))
		return sdkerrors.Wrapf(err, types.ErrCantPayTransporterEscrow.Error())
	}
	err = k.bankkeeper.SendCoinsFromAccountToModule(ctx, walletid, types.ModuleName, sdk.NewCoins(trade.GetPurchaserTransporterEscrowedCoin()))
	if err != nil {
		// to burn.
		panic(fmt.Sprintf("cannot burn coins after a successful send to a module account: %v", err))
		return sdkerrors.Wrapf(err, types.ErrCantPayTransporterEscrow.Error())
	}

	return nil
}


func (k *Keeper) PayVendor(ctx sdk.Context, vendor *types.Vendor, trade *types.Trade) error {

	// Black plays first
	walletid, err := vendor.GetWalletID()
	if err != nil {
		panic(err.Error())
	}
	err = k.bankkeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, walletid, sdk.NewCoins(trade.GetPurchaserVendorEscrowedCoin()))
	if err != nil {
		// to burn.
		panic(fmt.Sprintf("cannot burn coins after a successful send to a module account: %v", err))
		return sdkerrors.Wrapf(err, types.ErrCantPayTransporterEscrow.Error())
	}


	return nil
}
func (k *Keeper) PayTransporter(ctx sdk.Context, transporter *types.Transporter, trade *types.Trade) error {

	// Black plays first
	walletid, err := transporter.GetWalletID()
	if err != nil {
		panic(err.Error())
	}
	err = k.bankkeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, walletid, sdk.NewCoins(trade.GetPurchaserTransporterEscrowedCoin()))
	if err != nil {
		// to burn.
		panic(fmt.Sprintf("cannot burn coins after a successful send to a module account: %v", err))
		return sdkerrors.Wrapf(err, types.ErrCantPayTransporterEscrow.Error())
	}


	return nil
}
