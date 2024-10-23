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

func (k Keeper) PurchaserAll(ctx context.Context, req *types.QueryAllPurchaserRequest) (*types.QueryAllPurchaserResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var purchasers []types.Purchaser

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	purchaserStore := prefix.NewStore(store, types.KeyPrefix(types.PurchaserKeyPrefix))

	pageRes, err := query.Paginate(purchaserStore, req.Pagination, func(key []byte, value []byte) error {
		var purchaser types.Purchaser
		if err := k.cdc.Unmarshal(value, &purchaser); err != nil {
			return err
		}

		purchasers = append(purchasers, purchaser)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPurchaserResponse{Purchaser: purchasers, Pagination: pageRes}, nil
}

func (k Keeper) Purchaser(ctx context.Context, req *types.QueryGetPurchaserRequest) (*types.QueryGetPurchaserResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	val, found := k.GetPurchaser(
		ctx,
		req.Purchaserid,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetPurchaserResponse{Purchaser: val}, nil
}
