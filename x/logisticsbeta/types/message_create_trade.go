package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateTrade{}

func NewMsgCreateTrade(creator string, purchaserid uint64, vendorid uint64, commodity string, purchaserlocation string, vendorlocation string, commodityprice uint64, transportprice uint64) *MsgCreateTrade {
	return &MsgCreateTrade{
		Creator:           creator,
		Purchaserid:       purchaserid,
		Vendorid:          vendorid,
		Commodity:         commodity,
		Purchaserlocation: purchaserlocation,
		Vendorlocation:    vendorlocation,
		Commodityprice:    commodityprice,
		Transportprice:    transportprice,
	}
}

func (msg *MsgCreateTrade) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
