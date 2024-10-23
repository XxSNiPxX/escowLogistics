package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		SystemInfo1: SystemInfo1{
			NextPurchaser: uint64(DefaultIndex),
		},
		SystemInfo2: SystemInfo2{
			NextVendor: uint64(DefaultIndex),
		},
		SystemInfo3: SystemInfo3{
			NextTransporter: uint64(DefaultIndex),
		},
		VendorList:      []Vendor{},
		PurchaserList:   []Purchaser{},
		TransporterList: []Transporter{},
		SystemInfo4: SystemInfo4{
			NextTrade: uint64(DefaultIndex),
		},
		TradeList: []Trade{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in vendor
	vendorIndexMap := make(map[string]struct{})

	for _, elem := range gs.VendorList {
		index := string(VendorKey(elem.Vendorid))
		if _, ok := vendorIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for vendor")
		}
		vendorIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in purchaser
	purchaserIndexMap := make(map[string]struct{})

	for _, elem := range gs.PurchaserList {
		index := string(PurchaserKey(elem.Purchaserid))
		if _, ok := purchaserIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for purchaser")
		}
		purchaserIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in transporter
	transporterIndexMap := make(map[string]struct{})

	for _, elem := range gs.TransporterList {
		index := string(TransporterKey(elem.Transporterid))
		if _, ok := transporterIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for transporter")
		}
		transporterIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in trade
	tradeIndexMap := make(map[string]struct{})

	for _, elem := range gs.TradeList {
		index := string(TradeKey(elem.Tradeid))
		if _, ok := tradeIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for trade")
		}
		tradeIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
