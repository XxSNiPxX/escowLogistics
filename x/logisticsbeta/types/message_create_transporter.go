package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateTransporter{}

func NewMsgCreateTransporter(creator string, offchainid string) *MsgCreateTransporter {
	return &MsgCreateTransporter{
		Creator:    creator,
		Offchainid: offchainid,
	}
}

func (msg *MsgCreateTransporter) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
