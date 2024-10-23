package keeper

import (
	"context"

	"cosmossdk.io/store/prefix"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// SetSystemInfo2 set systemInfo2 in the store
func (k Keeper) SetSystemInfo2(ctx context.Context, systemInfo2 types.SystemInfo2) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SystemInfo2Key))
	b := k.cdc.MustMarshal(&systemInfo2)
	store.Set([]byte{0}, b)
}

// GetSystemInfo2 returns systemInfo2
func (k Keeper) GetSystemInfo2(ctx context.Context) (val types.SystemInfo2, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SystemInfo2Key))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSystemInfo2 removes systemInfo2 from the store
func (k Keeper) RemoveSystemInfo2(ctx context.Context) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SystemInfo2Key))
	store.Delete([]byte{0})
}
