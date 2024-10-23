package keeper

import (
	"context"

	"cosmossdk.io/store/prefix"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	"github.com/cosmos/cosmos-sdk/runtime"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) TradeAll(ctx context.Context, req *types.QueryAllTradeRequest) (*types.QueryAllTradeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var trades []types.Trade

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	tradeStore := prefix.NewStore(store, types.KeyPrefix(types.TradeKeyPrefix))

	pageRes, err := query.Paginate(tradeStore, req.Pagination, func(key []byte, value []byte) error {
		var trade types.Trade
		if err := k.cdc.Unmarshal(value, &trade); err != nil {
			return err
		}

		trades = append(trades, trade)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTradeResponse{Trade: trades, Pagination: pageRes}, nil
}

func (k Keeper) Trade(ctx context.Context, req *types.QueryGetTradeRequest) (*types.QueryGetTradeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	val, found := k.GetTrade(
		ctx,
		req.Tradeid,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetTradeResponse{Trade: val}, nil
}
