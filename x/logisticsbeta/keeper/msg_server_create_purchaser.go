package keeper

import (
	"fmt"

	"context"
	"strconv"

	sdkerrors "cosmossdk.io/errors"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreatePurchaser(goCtx context.Context, msg *types.MsgCreatePurchaser) (*types.MsgCreatePurchaserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	systemInfo1, found := k.Keeper.GetSystemInfo1(ctx)
	if !found {
		panic("SystemInfo not found")
	}
	purchaser,foundBefore := k.Keeper.GetPurchaserByAccount(ctx, msg.Creator)
	fmt.Sprintf("found3: %s",purchaser)
	if foundBefore {
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrAccountExists.Error())
	}
	newIndex := strconv.FormatUint(systemInfo1.NextPurchaser, 10)
	storedPurchaser := types.Purchaser{
		Purchaserid: newIndex,
		Active:      "false",
		Location:    "",
		WalletId:    msg.Creator,
		OffchainId:  msg.Offchainid,
	}
	err := storedPurchaser.Validate()
	if err != nil {
		return nil, err
	}
	k.Keeper.SetPurchaser(ctx, storedPurchaser)
	systemInfo1.NextPurchaser++
	k.Keeper.SetSystemInfo1(ctx, systemInfo1)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreatePurchaserResponse{
		PurchaserIndex: newIndex,
	}, nil
}
