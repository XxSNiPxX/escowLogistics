package keeper

import (
	"fmt"

	"context"
	"strconv"

	sdkerrors "cosmossdk.io/errors"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateTransporter(goCtx context.Context, msg *types.MsgCreateTransporter) (*types.MsgCreateTransporterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	systemInfo3, found := k.Keeper.GetSystemInfo3(ctx)

	if !found {
		panic("SystemInfo not found")
	}
	transporter,foundBefore := k.Keeper.GetTransporterByAccount(ctx, msg.Creator)
	fmt.Sprintf("found3: %s",transporter)

	if foundBefore {
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrAccountExists.Error())
	}
	newIndex := strconv.FormatUint(systemInfo3.NextTransporter, 10)

	storedTransporter := types.Transporter{
		Transporterid: newIndex,
		Active:        "false",
		WalletId:      msg.Creator,
		OffchainId:    msg.Offchainid,
		Escrowed:      500,
	}

	err := storedTransporter.Validate()
	if err != nil {
		return nil, err
	}
	err = k.Keeper.CollectTransporterEscrow(ctx, &storedTransporter)
	if err != nil {
		return nil, err
	}
	k.Keeper.SetTransporter(ctx, storedTransporter)
	systemInfo3.NextTransporter++
	k.Keeper.SetSystemInfo3(ctx, systemInfo3)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateTransporterResponse{
		TransporterIndex: newIndex,
	}, nil
}
