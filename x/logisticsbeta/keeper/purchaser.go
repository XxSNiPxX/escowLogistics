package keeper

import (
	"context"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// SetPurchaser set a specific purchaser in the store from its index
func (k Keeper) SetPurchaser(ctx context.Context, purchaser types.Purchaser) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.PurchaserKeyPrefix))
	b := k.cdc.MustMarshal(&purchaser)
	store.Set(types.PurchaserKey(
		purchaser.Purchaserid,
	), b)
}
func (k Keeper) GetPurchaserByAccount(ctx context.Context, accountstring string) (purchaser types.Purchaser,found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))

	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.PurchaserKeyPrefix))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Transporter
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.WalletId == accountstring {
			return purchaser,true
		}
	}

	return types.Purchaser{},false
}

// GetPurchaser returns a purchaser from its index
func (k Keeper) GetPurchaser(
	ctx context.Context,
	purchaserid string,

) (val types.Purchaser, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.PurchaserKeyPrefix))

	b := store.Get(types.PurchaserKey(
		purchaserid,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePurchaser removes a purchaser from the store
func (k Keeper) RemovePurchaser(
	ctx context.Context,
	purchaserid string,

) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.PurchaserKeyPrefix))
	store.Delete(types.PurchaserKey(
		purchaserid,
	))
}

// GetAllPurchaser returns all purchaser
func (k Keeper) GetAllPurchaser(ctx context.Context) (list []types.Purchaser) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.PurchaserKeyPrefix))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Purchaser
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
