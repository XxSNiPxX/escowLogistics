package keeper

import (
	"context"
	"fmt"

	sdkerrors "cosmossdk.io/errors"

	"strconv"

	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateVendorTradeReject(goCtx context.Context, msg *types.MsgCreateVendorTradeReject) (*types.MsgCreateVendorTradeRejectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	vendor, foundBefore := k.Keeper.GetVendorByAccount(ctx, msg.Creator)
	if !foundBefore {
		panic(fmt.Sprintf("found1: %v"))

		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrAccountExists.Error())
	}
	str := strconv.Itoa(int(msg.Tradeid))
	trade, foundBefore := k.Keeper.GetTrade(ctx, str)
	if !foundBefore {
		panic(fmt.Sprintf("found2: %v"))

		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrAccountExists.Error())
	}
	str = strconv.Itoa(int(trade.VendorId))

	if str != vendor.Vendorid {
		panic(fmt.Sprintf("found3: %v"))

		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrUnauthorized.Error())
	}
	if trade.TradeState == "inactive" || trade.VendorTradePending == false || trade.VendorTradeAccepted == true || trade.VendorTradeRejected == true || trade.VendorCommodityDispatched == true {
		panic(fmt.Sprintf("found4: %v"))

		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrWrongTurn.Error())
	}
	trade.VendorTradePending = false

	trade.VendorTradeRejected = true

	trade.TradeState = "inactive"

	k.Keeper.SetTrade(ctx, trade)
	ctx.EventManager().EmitEvent(
			sdk.NewEvent(types.TradeVendorRejectedEventType,
					sdk.NewAttribute(types.TradeIDEventType, trade.Tradeid),
			),
	)
	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateVendorTradeRejectResponse{TradeIndex: trade.Tradeid}, nil
}
