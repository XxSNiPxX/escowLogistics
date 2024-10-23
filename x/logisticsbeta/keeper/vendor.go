package keeper

import (
	"context"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// SetVendor set a specific vendor in the store from its index
func (k Keeper) SetVendor(ctx context.Context, vendor types.Vendor) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.VendorKeyPrefix))
	b := k.cdc.MustMarshal(&vendor)
	store.Set(types.VendorKey(
		vendor.Vendorid,
	), b)
}

// GetVendor returns a vendor from its index
func (k Keeper) GetVendor(
	ctx context.Context,
	vendorid string,

) (val types.Vendor, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.VendorKeyPrefix))

	b := store.Get(types.VendorKey(
		vendorid,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveVendor removes a vendor from the store
func (k Keeper) RemoveVendor(
	ctx context.Context,
	vendorid string,

) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.VendorKeyPrefix))
	store.Delete(types.VendorKey(
		vendorid,
	))
}

func (k Keeper) GetVendorByAccount(ctx context.Context, accountstring string) (vendor types.Vendor, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))

	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.VendorKeyPrefix))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Vendor
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.WalletId == accountstring {
			return val, true
		}
	}

	return types.Vendor{}, false
}

// GetAllVendor returns all vendor
func (k Keeper) GetAllVendor(ctx context.Context) (list []types.Vendor) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.VendorKeyPrefix))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Vendor
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
