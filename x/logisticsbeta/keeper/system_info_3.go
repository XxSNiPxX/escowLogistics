package keeper

import (
	"context"

	"cosmossdk.io/store/prefix"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// SetSystemInfo3 set systemInfo3 in the store
func (k Keeper) SetSystemInfo3(ctx context.Context, systemInfo3 types.SystemInfo3) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SystemInfo3Key))
	b := k.cdc.MustMarshal(&systemInfo3)
	store.Set([]byte{0}, b)
}

// GetSystemInfo3 returns systemInfo3
func (k Keeper) GetSystemInfo3(ctx context.Context) (val types.SystemInfo3, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SystemInfo3Key))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSystemInfo3 removes systemInfo3 from the store
func (k Keeper) RemoveSystemInfo3(ctx context.Context) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SystemInfo3Key))
	store.Delete([]byte{0})
}
