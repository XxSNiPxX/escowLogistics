package keeper

import (
	"context"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// SetTransporter set a specific transporter in the store from its index
func (k Keeper) SetTransporter(ctx context.Context, transporter types.Transporter) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.TransporterKeyPrefix))
	b := k.cdc.MustMarshal(&transporter)
	store.Set(types.TransporterKey(
		transporter.Transporterid,
	), b)
}

// GetTransporter returns a transporter from its index
func (k Keeper) GetTransporter(
	ctx context.Context,
	transporterid string,

) (val types.Transporter, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.TransporterKeyPrefix))

	b := store.Get(types.TransporterKey(
		transporterid,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTransporter removes a transporter from the store
func (k Keeper) RemoveTransporter(
	ctx context.Context,
	transporterid string,

) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.TransporterKeyPrefix))
	store.Delete(types.TransporterKey(
		transporterid,
	))
}
func (k Keeper) GetTransporterByAccount(ctx context.Context, accountstring string) (transporter types.Transporter,found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))

	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.TransporterKeyPrefix))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Transporter
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.WalletId == accountstring {
			return val, true
		}
	}

	return types.Transporter{},false
}

// GetAllTransporter returns all transporter
func (k Keeper) GetAllTransporter(ctx context.Context) (list []types.Transporter) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.TransporterKeyPrefix))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Transporter
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
