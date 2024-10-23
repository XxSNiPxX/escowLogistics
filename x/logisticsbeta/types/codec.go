package types

import (
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
	// this line is used by starport scaffolding # 1
)

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateVendor{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePurchaser{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTransporter{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTrade{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateVendorTradeAccept{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateVendorTradeReject{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTransporterTradeAccepted{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTransporterTradeRejected{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTransporterVendorReached{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTransporterPurchaserReached{},
	)
	// this line is used by starport scaffolding # 3

	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateParams{},
	)
	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}
