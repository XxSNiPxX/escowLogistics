package keeper

import (
	"fmt"

	"context"
	"strconv"

	sdkerrors "cosmossdk.io/errors"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateTransporterPurchaserReached(goCtx context.Context, msg *types.MsgCreateTransporterPurchaserReached) (*types.MsgCreateTransporterPurchaserReachedResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	fmt.Println("HEREEE:1")
	transporter, foundBefore1 := k.Keeper.GetTransporterByAccount(ctx, msg.Creator)

	transporterID, err1 := strconv.ParseUint(transporter.Transporterid, 10, 64)
	fmt.Println("HEREEE:2")
	if err1 != nil {
			// Handle error, e.g., log it or return an error response
			fmt.Println("Error parsing uint:", err1)
			return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrAccountExists.Error())
	}
	if !foundBefore1 {
		fmt.Println("Error parsing uint1:", err1)
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrAccountExists.Error())
	}
	fmt.Println("HEREEE:3")
	str := strconv.Itoa(int(msg.Tradeid))
	trade, foundBefore := k.Keeper.GetTrade(ctx, str)
	fmt.Println("HEREEE:4")
	if !foundBefore {
		fmt.Println("Error parsing uint1.1:", err1)

		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrAccountExists.Error())
	}
	purchaser, found := k.Keeper.GetPurchaser(ctx, strconv.FormatUint(uint64(trade.PurchaserId), 10))
	if !found {
		panic(fmt.Sprintf("found: %v"))
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrInvalidPurchaser.Error())
	}
	if trade.TransportId != transporterID{
		fmt.Println("Error parsing uint2:", err1)
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrUnauthorized.Error())

	}
	str = strconv.Itoa(int(trade.VendorId))

	if transporter.Active =="false" || trade.TradeState == "inactive" || trade.VendorTradePending == true || trade.VendorTradeAccepted == true || trade.VendorTradeRejected == true || trade.VendorCommodityDispatched == false || trade.TransporterTradePending == true|| trade.TransporterTradeAccepted == true  || trade.TransporterTradeRejected == true|| trade.TransporterVendorReached == false || trade.TransporterPurchaserReached == true || trade.TradeState == "completed" || trade.TransporterCommodityDistributed == true  {
		fmt.Println("Error parsing uint3:", err1)

		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrWrongTurn.Error())
	}
	fmt.Println("HEREEE:")

	trade.TransporterPurchaserReached=false
	trade.TransporterCommodityDistributed=true

	trade.TransporterVendorReached = false
	trade.TradeState = "completed"
	fmt.Println("HEREEE22222:",trade.TradeState)
	k.Keeper.SetTrade(ctx, trade)
	transporter.Active ="false"
	purchaser.Active="false"
	k.Keeper.SetTransporter(ctx, transporter)
	k.Keeper.SetPurchaser(ctx, purchaser)

	err := k.Keeper.PayTransporter(ctx, &transporter,&trade)
	fmt.Println("HEREEE4444444:")

	if err != nil {
		fmt.Println("Error parsing uint4:", err1)

		return nil, err
	}

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateTransporterPurchaserReachedResponse{TradeIndex: trade.Tradeid,}, nil
}
