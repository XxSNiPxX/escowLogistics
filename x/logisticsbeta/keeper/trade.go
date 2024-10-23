package keeper

import (
	"context"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// SetTrade set a specific trade in the store from its index
func (k Keeper) SetTrade(ctx context.Context, trade types.Trade) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.TradeKeyPrefix))
	b := k.cdc.MustMarshal(&trade)
	store.Set(types.TradeKey(
		trade.Tradeid,
	), b)
}

// GetTrade returns a trade from its index
func (k Keeper) GetTrade(
	ctx context.Context,
	tradeid string,

) (val types.Trade, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.TradeKeyPrefix))

	b := store.Get(types.TradeKey(
		tradeid,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTrade removes a trade from the store
func (k Keeper) RemoveTrade(
	ctx context.Context,
	tradeid string,

) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.TradeKeyPrefix))
	store.Delete(types.TradeKey(
		tradeid,
	))
}

// GetAllTrade returns all trade
func (k Keeper) GetAllTrade(ctx context.Context) (list []types.Trade) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.TradeKeyPrefix))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Trade
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
