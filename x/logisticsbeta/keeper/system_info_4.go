package keeper

import (
	"context"

	"cosmossdk.io/store/prefix"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// SetSystemInfo4 set systemInfo4 in the store
func (k Keeper) SetSystemInfo4(ctx context.Context, systemInfo4 types.SystemInfo4) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SystemInfo4Key))
	b := k.cdc.MustMarshal(&systemInfo4)
	store.Set([]byte{0}, b)
}

// GetSystemInfo4 returns systemInfo4
func (k Keeper) GetSystemInfo4(ctx context.Context) (val types.SystemInfo4, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SystemInfo4Key))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSystemInfo4 removes systemInfo4 from the store
func (k Keeper) RemoveSystemInfo4(ctx context.Context) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SystemInfo4Key))
	store.Delete([]byte{0})
}
