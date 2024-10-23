package keeper

import (
	"fmt"

	"context"
	"strconv"

	sdkerrors "cosmossdk.io/errors"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateTrade(goCtx context.Context, msg *types.MsgCreateTrade) (*types.MsgCreateTradeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	systemInfo4, found := k.Keeper.GetSystemInfo4(ctx)

	if !found {
		panic("SystemInfo not found")
	}
	purchaser, found := k.Keeper.GetPurchaser(ctx, strconv.FormatUint(uint64(msg.Purchaserid), 10))
	if !found {
		panic(fmt.Sprintf("found: %v"))
		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrInvalidPurchaser.Error())
	}
	if purchaser.WalletId != msg.Creator {
		panic(fmt.Sprintf("found: %v"))

		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrInvalidPurchaser.Error())
	}
	if purchaser.Active != "false" {
		panic(fmt.Sprintf("found2: %v"))

		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrInvalidPurchaser.Error())
	}
	vendor, found := k.Keeper.GetVendor(ctx, strconv.FormatUint(uint64(msg.Vendorid), 10))
	if !found {
		panic(fmt.Sprintf("found3: %v"))

		return nil, sdkerrors.Wrapf(fmt.Errorf("Error"), types.ErrInvalidVendor.Error())
	}
	newIndex := strconv.FormatUint(systemInfo4.NextTrade, 10)
	vendorid, err := strconv.ParseUint(vendor.Vendorid, 10, 64)
	if err != nil {
		fmt.Println("Error:", err)

	}
	storedTrade := types.Trade{
		Tradeid:                         newIndex,
		TradeState:                      "active",
		PurchaserId:                     msg.Purchaserid,
		VendorId:                        vendorid,
		TransportId:                     0,
		Commodity:                       msg.Commodity,
		PurchaserLocation:               msg.Purchaserlocation,
		VendorLocation:                  msg.Vendorlocation,
		CommodityPrice:                  msg.Commodityprice,
		TransportPrice:                  msg.Transportprice,
		VendorTradePending:              true,
		VendorTradeAccepted:             false,
		VendorTradeRejected:             false,
		VendorCommodityDispatched:       false,
		TransporterTradePending:         true,
		TransporterTradeAccepted:        false,
		TransporterTradeRejected:        false,
		TransporterVendorReached:        false,
		TransporterCommodityCollected:   false,
		TransporterPurchaserReached:     false,
		TransporterCommodityDistributed: false,
		Deadline:                        types.FormatDeadline(types.GetNextDeadline(ctx)),
	}

	err1 := k.Keeper.CollectPurchaserEscrow(ctx, &purchaser, &storedTrade)
	if err1 != nil {
		return nil, err1
	}
	k.Keeper.SetTrade(ctx, storedTrade)
	purchaser.Active="true"
	k.Keeper.SetPurchaser(ctx, purchaser)

	systemInfo4.NextTrade++
	k.Keeper.SetSystemInfo4(ctx, systemInfo4)

	// TODO: Handling the message
	_ = ctx
	ctx.EventManager().EmitEvent(
	    sdk.NewEvent(types.TradeCreateEventType,
	        sdk.NewAttribute(types.TradeVendorEventType, vendor.Vendorid),
	        sdk.NewAttribute(types.TradeIDEventType, newIndex),
	    ),
	)

	return &types.MsgCreateTradeResponse{
		TradeIndex: newIndex,
	}, nil
}
