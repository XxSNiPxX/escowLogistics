package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateVendorTradeReject{}

func NewMsgCreateVendorTradeReject(creator string, tradeid uint64) *MsgCreateVendorTradeReject {
	return &MsgCreateVendorTradeReject{
		Creator: creator,
		Tradeid: tradeid,
	}
}

func (msg *MsgCreateVendorTradeReject) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
