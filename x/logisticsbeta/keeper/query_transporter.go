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

func (k Keeper) TransporterAll(ctx context.Context, req *types.QueryAllTransporterRequest) (*types.QueryAllTransporterResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var transporters []types.Transporter

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	transporterStore := prefix.NewStore(store, types.KeyPrefix(types.TransporterKeyPrefix))

	pageRes, err := query.Paginate(transporterStore, req.Pagination, func(key []byte, value []byte) error {
		var transporter types.Transporter
		if err := k.cdc.Unmarshal(value, &transporter); err != nil {
			return err
		}

		transporters = append(transporters, transporter)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTransporterResponse{Transporter: transporters, Pagination: pageRes}, nil
}

func (k Keeper) Transporter(ctx context.Context, req *types.QueryGetTransporterRequest) (*types.QueryGetTransporterResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	val, found := k.GetTransporter(
		ctx,
		req.Transporterid,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetTransporterResponse{Transporter: val}, nil
}
