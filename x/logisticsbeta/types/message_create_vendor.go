package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateVendor{}

func NewMsgCreateVendor(creator string, name string, offchainid string) *MsgCreateVendor {
	return &MsgCreateVendor{
		Creator:    creator,
		Name:       name,
		Offchainid: offchainid,
	}
}

func (msg *MsgCreateVendor) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
