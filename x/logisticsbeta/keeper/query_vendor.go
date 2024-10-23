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

func (k Keeper) VendorAll(ctx context.Context, req *types.QueryAllVendorRequest) (*types.QueryAllVendorResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var vendors []types.Vendor

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	vendorStore := prefix.NewStore(store, types.KeyPrefix(types.VendorKeyPrefix))

	pageRes, err := query.Paginate(vendorStore, req.Pagination, func(key []byte, value []byte) error {
		var vendor types.Vendor
		if err := k.cdc.Unmarshal(value, &vendor); err != nil {
			return err
		}

		vendors = append(vendors, vendor)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllVendorResponse{Vendor: vendors, Pagination: pageRes}, nil
}

func (k Keeper) Vendor(ctx context.Context, req *types.QueryGetVendorRequest) (*types.QueryGetVendorResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	val, found := k.GetVendor(
		ctx,
		req.Vendorid,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetVendorResponse{Vendor: val}, nil
}
