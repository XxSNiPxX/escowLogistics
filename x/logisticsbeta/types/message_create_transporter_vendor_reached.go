package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateTransporterVendorReached{}

func NewMsgCreateTransporterVendorReached(creator string, tradeid uint64) *MsgCreateTransporterVendorReached {
	return &MsgCreateTransporterVendorReached{
		Creator: creator,
		Tradeid: tradeid,
	}
}

func (msg *MsgCreateTransporterVendorReached) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
