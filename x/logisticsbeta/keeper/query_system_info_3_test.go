package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/XxSNiPxX/logisticsBeta/testutil/keeper"
	"github.com/XxSNiPxX/logisticsBeta/testutil/nullify"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
)

func TestSystemInfo3Query(t *testing.T) {
	keeper, ctx := keepertest.LogisticsbetaKeeper(t)
	item := createTestSystemInfo3(keeper, ctx)
	tests := []struct {
		desc     string
		request  *types.QueryGetSystemInfo3Request
		response *types.QueryGetSystemInfo3Response
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetSystemInfo3Request{},
			response: &types.QueryGetSystemInfo3Response{SystemInfo3: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.SystemInfo3(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
