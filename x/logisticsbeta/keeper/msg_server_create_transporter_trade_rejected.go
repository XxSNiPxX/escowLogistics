package keeper

import (
	"fmt"

	"context"
	"strconv"

	sdkerrors "cosmossdk.io/errors"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateTransporterTradeRejected(goCtx context.Context, msg *types.MsgCreateTransporterTradeRejected) (*types.MsgCreateTransporterTradeRejectedResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	transporter, foundBefore := k.Keeper.GetTransporterByAccount(ctx, msg.Creator)

	if !foundBefore {
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrAccountExists.Error())
	}
	str := strconv.Itoa(int(msg.Tradeid))
	trade, foundBefore := k.Keeper.GetTrade(ctx, str)
	if !foundBefore {
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrAccountExists.Error())
	}

	str = strconv.Itoa(int(trade.TransportId))
	if str != transporter.Transporterid{
		fmt.Println("Error parsing uint:", str)
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrUnauthorized.Error())

	}
	if transporter.Active == "true" || trade.TradeState == "inactive" || trade.VendorTradePending == true || trade.VendorTradeAccepted == false || trade.VendorTradeRejected == true || trade.VendorCommodityDispatched == true || trade.TransporterTradePending == true || trade.TransporterTradeAccepted == false  || trade.TransporterTradeRejected == true|| trade.TransporterVendorReached == true || trade.TransporterPurchaserReached == true|| trade.TransporterCommodityDistributed == true {
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrWrongTurn.Error())
	}
	trade.TransporterTradeAccepted = false
	trade.TransporterTradePending = true
	trade.TransporterTradeRejected = false

	trade.TransportId = 0

	k.Keeper.SetTrade(ctx, trade)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateTransporterTradeRejectedResponse{
		TradeIndex: trade.Tradeid,
	}, nil
}
