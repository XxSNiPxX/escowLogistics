package keeper

import (
	"fmt"

	"context"
	"strconv"

	sdkerrors "cosmossdk.io/errors"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateTransporterVendorReached(goCtx context.Context, msg *types.MsgCreateTransporterVendorReached) (*types.MsgCreateTransporterVendorReachedResponse, error) {
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
	str = strconv.Itoa(int(trade.VendorId))

	if transporter.Active == "false" || trade.TradeState == "inactive" || trade.VendorTradePending == true || trade.VendorTradeAccepted == false || trade.VendorTradeRejected == true || trade.VendorCommodityDispatched == true || trade.TransporterTradePending == true|| trade.TransporterTradeAccepted == false  || trade.TransporterTradeRejected == true|| trade.TransporterVendorReached == true || trade.TransporterPurchaserReached == true|| trade.TransporterCommodityDistributed == true {
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrUnauthorized.Error())
	}

	vendor, found2 := k.Keeper.GetVendor(ctx, strconv.FormatUint(uint64(trade.VendorId), 10))
	if !found2 {
		panic(fmt.Sprintf("found3: %v"))

		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrInvalidVendor.Error())
	}


	trade.TransporterTradeAccepted = false
	trade.TransporterTradePending = false
	trade.VendorTradeAccepted = false

	trade.VendorCommodityDispatched = true
	trade.TransporterVendorReached = true
	err := k.Keeper.PayVendor(ctx, &vendor,&trade)
	if err != nil {
		return nil, err
	}


	k.Keeper.SetTrade(ctx, trade)


	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateTransporterVendorReachedResponse{TradeIndex: trade.Tradeid,}, nil
}
