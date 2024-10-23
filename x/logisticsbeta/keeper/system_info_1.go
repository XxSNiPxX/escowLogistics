package keeper

import (
	"context"

	"cosmossdk.io/store/prefix"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// SetSystemInfo1 set systemInfo1 in the store
func (k Keeper) SetSystemInfo1(ctx context.Context, systemInfo1 types.SystemInfo1) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SystemInfo1Key))
	b := k.cdc.MustMarshal(&systemInfo1)
	store.Set([]byte{0}, b)
}

// GetSystemInfo1 returns systemInfo1
func (k Keeper) GetSystemInfo1(ctx context.Context) (val types.SystemInfo1, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SystemInfo1Key))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSystemInfo1 removes systemInfo1 from the store
func (k Keeper) RemoveSystemInfo1(ctx context.Context) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SystemInfo1Key))
	store.Delete([]byte{0})
}
