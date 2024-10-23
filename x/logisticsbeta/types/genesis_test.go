package types_test

import (
	"testing"

	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	tests := []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				SystemInfo1: &types.SystemInfo1{
					NextPurchaser: 19,
				},
				SystemInfo2: &types.SystemInfo2{
					NextVendor: 67,
				},
				SystemInfo3: &types.SystemInfo3{
					NextTransporter: 14,
				},
				VendorList: []types.Vendor{
					{
						Vendorid: "0",
					},
					{
						Vendorid: "1",
					},
				},
				PurchaserList: []types.Purchaser{
					{
						Purchaserid: "0",
					},
					{
						Purchaserid: "1",
					},
				},
				TransporterList: []types.Transporter{
					{
						Transporterid: "0",
					},
					{
						Transporterid: "1",
					},
				},
				SystemInfo4: &types.SystemInfo4{
					NextOrder: 83,
				},
				TradeList: []types.Trade{
					{
						Tradeid: "0",
					},
					{
						Tradeid: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated vendor",
			genState: &types.GenesisState{
				VendorList: []types.Vendor{
					{
						Vendorid: "0",
					},
					{
						Vendorid: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated purchaser",
			genState: &types.GenesisState{
				PurchaserList: []types.Purchaser{
					{
						Purchaserid: "0",
					},
					{
						Purchaserid: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated transporter",
			genState: &types.GenesisState{
				TransporterList: []types.Transporter{
					{
						Transporterid: "0",
					},
					{
						Transporterid: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated trade",
			genState: &types.GenesisState{
				TradeList: []types.Trade{
					{
						Tradeid: "0",
					},
					{
						Tradeid: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
