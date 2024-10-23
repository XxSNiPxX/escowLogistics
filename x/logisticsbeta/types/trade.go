package types

import (
	"time"

	sdkerrors "cosmossdk.io/errors"
	"cosmossdk.io/math"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (Transporter Transporter) GetWalletID() (wallet sdk.AccAddress, err error) {
	wallet, errWallet := sdk.AccAddressFromBech32(Transporter.WalletId)
	return wallet, sdkerrors.Wrapf(errWallet, ErrInvalidWallet.Error(), Transporter.WalletId)
}

func (Purchaser Purchaser) GetWalletID() (wallet sdk.AccAddress, err error) {
	wallet, errWallet := sdk.AccAddressFromBech32(Purchaser.WalletId)
	return wallet, sdkerrors.Wrapf(errWallet, ErrInvalidWallet.Error(), Purchaser.WalletId)
}
func (Vendor Vendor) GetWalletID() (wallet sdk.AccAddress, err error) {
	wallet, errWallet := sdk.AccAddressFromBech32(Vendor.WalletId)
	return wallet, sdkerrors.Wrapf(errWallet, ErrInvalidWallet.Error(), Vendor.WalletId)
}

func (Transporter Transporter) GetEscrowedCoin() (wager sdk.Coin) {
	return sdk.NewCoin(sdk.DefaultBondDenom, math.NewInt(int64(Transporter.Escrowed)))
}

func (Trade Trade) GetPurchaserVendorEscrowedCoin() (wager sdk.Coin) {
	return sdk.NewCoin(sdk.DefaultBondDenom, math.NewInt(int64(Trade.CommodityPrice)))
}

func (Trade Trade) GetPurchaserTransporterEscrowedCoin() (wager sdk.Coin) {
	return sdk.NewCoin(sdk.DefaultBondDenom, math.NewInt(int64(Trade.TransportPrice)))
}
func (Trade Trade) GetDeadlineAsTime() (deadline time.Time, err error) {
	deadline, errDeadline := time.Parse(DeadlineLayout, Trade.Deadline)
	return deadline, sdkerrors.Wrapf(errDeadline, ErrInvalidDeadline.Error(), Trade.Deadline)
}

func FormatDeadline(deadline time.Time) string {
	return deadline.UTC().Format(DeadlineLayout)
}

func GetNextDeadline(ctx sdk.Context) time.Time {
	return ctx.BlockTime().Add(MaxTurnDuration)
}

func (Transporter Transporter) Validate() (err error) {
	_, err = Transporter.GetWalletID()
	if err != nil {
		return err
	}
	return err
}
func (Vendor Vendor) Validate() (err error) {
	_, err = Vendor.GetWalletID()
	if err != nil {
		return err
	}
	return err
}
func (Purchaser Purchaser) Validate() (err error) {
	_, err = Purchaser.GetWalletID()
	if err != nil {
		return err
	}
	return err
}

func (Trade Trade) Validate() (err error) {
	_, err = Trade.GetDeadlineAsTime()
	return err
}
