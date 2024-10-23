package keeper

import (
	"fmt"

	"context"
	"strconv"

	sdkerrors "cosmossdk.io/errors"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateTransporterTradeAccepted(goCtx context.Context, msg *types.MsgCreateTransporterTradeAccepted) (*types.MsgCreateTransporterTradeAcceptedResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	transporter, foundBefore := k.Keeper.GetTransporterByAccount(ctx, msg.Creator)
	fmt.Println("Error parsing uint355:")

	if !foundBefore {
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrAccountExists.Error())
	}
	transporterID, err := strconv.ParseUint(transporter.Transporterid, 10, 64)
	if err != nil {
	    // Handle error, e.g., log it or return an error response
	    fmt.Println("Error parsing uint:", err)
			return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrAccountExists.Error())

	}
	str := strconv.Itoa(int(msg.Tradeid))
	trade, foundBefore := k.Keeper.GetTrade(ctx, str)
	if !foundBefore {
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrAccountExists.Error())
	}
	// str = strconv.Itoa(int(trade.TransportId))
	// if str != transporter.Transporterid{
	// 	fmt.Println("Error parsing uint2:", str,transporterID)
	// 	return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrAccountExists.Error())
	//
	// }
	if transporter.Active == "true" || trade.TradeState == "inactive"||trade.TradeState == "completed" || trade.VendorTradePending == true || trade.VendorTradeAccepted == false || trade.VendorTradeRejected == true || trade.VendorCommodityDispatched == true || trade.TransporterTradePending == false || trade.TransporterTradeAccepted == true || trade.TransporterTradeRejected == true|| trade.TransporterVendorReached == true || trade.TransporterPurchaserReached == true|| trade.TransporterCommodityDistributed == true {
		fmt.Println("Error parsing uint3:", err)
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrWrongTurn.Error())
	}
	trade.TransporterTradeAccepted = true
	trade.TransporterTradePending = false
  trade.TransportId = transporterID
	transporter.Active ="true"
	k.Keeper.SetTransporter(ctx, transporter)

	k.Keeper.SetTrade(ctx, trade)


	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateTransporterTradeAcceptedResponse{
		TradeIndex: trade.Tradeid,
	}, nil
}
