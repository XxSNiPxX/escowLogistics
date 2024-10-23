package keeper

import (
	"context"
	"fmt"
	"strconv"

	sdkerrors "cosmossdk.io/errors"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateVendor(goCtx context.Context, msg *types.MsgCreateVendor) (*types.MsgCreateVendorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	systemInfo2, found := k.Keeper.GetSystemInfo2(ctx)
	if !found {
		panic("SystemInfo not found")
	}
	vendor, foundBefore := k.Keeper.GetVendorByAccount(ctx, msg.Creator)
	fmt.Println("vendor:", vendor)
	if foundBefore {
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrAccountExists.Error())
	}
	newIndex := strconv.FormatUint(systemInfo2.NextVendor, 10)
	storedVendor := types.Vendor{
		Vendorid:   newIndex,
		Name:       msg.Name,
		Commodity:  "",
		Location:   "",
		WalletId:   msg.Creator,
		OffchainId: msg.Offchainid,
	}
	err := storedVendor.Validate()
	if err != nil {
		return nil, err
	}
	k.Keeper.SetVendor(ctx, storedVendor)
	systemInfo2.NextVendor++
	k.Keeper.SetSystemInfo2(ctx, systemInfo2)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateVendorResponse{
		VendorIndex: newIndex,
	}, nil
}
