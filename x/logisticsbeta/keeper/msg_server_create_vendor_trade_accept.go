package keeper

import (
	"context"
	"fmt"

	sdkerrors "cosmossdk.io/errors"

	"strconv"

	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateVendorTradeAccept(goCtx context.Context, msg *types.MsgCreateVendorTradeAccept) (*types.MsgCreateVendorTradeAcceptResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	vendor, foundBefore := k.Keeper.GetVendorByAccount(ctx, msg.Creator)
	if !foundBefore {
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrAccountExists.Error())
	}
	str := strconv.Itoa(int(msg.Tradeid))
	trade, foundBefore := k.Keeper.GetTrade(ctx, str)
	if !foundBefore {
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrAccountExists.Error())
	}
	str = strconv.Itoa(int(trade.VendorId))

	if str != vendor.Vendorid {
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrUnauthorized.Error())
	}
	if trade.TradeState == "inactive" || trade.VendorTradePending == false || trade.VendorTradeAccepted == true || trade.VendorTradeRejected == true || trade.VendorCommodityDispatched == true {
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrWrongTurn.Error())
	}
	trade.VendorTradePending = false

	trade.VendorTradeAccepted = true

	k.Keeper.SetTrade(ctx, trade)
	ctx.EventManager().EmitEvent(
	    sdk.NewEvent(types.TradeVendorAcceptedEventType,
	        sdk.NewAttribute(types.TradeIDEventType, trade.Tradeid),
	    ),
	)
	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateVendorTradeAcceptResponse{
		TradeIndex: trade.Tradeid,
	}, nil
}
