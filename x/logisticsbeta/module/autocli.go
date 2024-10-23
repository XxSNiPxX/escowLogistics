package logisticsbeta

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	modulev1 "github.com/XxSNiPxX/logisticsBeta/api/logisticsbeta/logisticsbeta"
)

// AutoCLIOptions implements the autocli.HasAutoCLIConfig interface.
func (am AppModule) AutoCLIOptions() *autocliv1.ModuleOptions {
	return &autocliv1.ModuleOptions{
		Query: &autocliv1.ServiceCommandDescriptor{
			Service: modulev1.Query_ServiceDesc.ServiceName,
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "Params",
					Use:       "params",
					Short:     "Shows the parameters of the module",
				},
				{
					RpcMethod: "SystemInfo1",
					Use:       "show-system-info-1",
					Short:     "show systemInfo1",
				},
				{
					RpcMethod: "SystemInfo2",
					Use:       "show-system-info-2",
					Short:     "show systemInfo2",
				},
				{
					RpcMethod: "SystemInfo3",
					Use:       "show-system-info-3",
					Short:     "show systemInfo3",
				},
				{
					RpcMethod: "VendorAll",
					Use:       "list-vendor",
					Short:     "List all Vendor",
				},
				{
					RpcMethod:      "Vendor",
					Use:            "show-vendor [id]",
					Short:          "Shows a Vendor",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "vendorid"}},
				},
				{
					RpcMethod: "PurchaserAll",
					Use:       "list-purchaser",
					Short:     "List all Purchaser",
				},
				{
					RpcMethod:      "Purchaser",
					Use:            "show-purchaser [id]",
					Short:          "Shows a Purchaser",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "purchaserid"}},
				},
				{
					RpcMethod: "TransporterAll",
					Use:       "list-transporter",
					Short:     "List all Transporter",
				},
				{
					RpcMethod:      "Transporter",
					Use:            "show-transporter [id]",
					Short:          "Shows a Transporter",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "transporterid"}},
				},
				{
					RpcMethod: "SystemInfo4",
					Use:       "show-system-info-4",
					Short:     "show systemInfo4",
				},
				{
					RpcMethod: "TradeAll",
					Use:       "list-trade",
					Short:     "List all Trade",
				},
				{
					RpcMethod:      "Trade",
					Use:            "show-trade [id]",
					Short:          "Shows a Trade",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "tradeid"}},
				},
				// this line is used by ignite scaffolding # autocli/query
			},
		},
		Tx: &autocliv1.ServiceCommandDescriptor{
			Service:              modulev1.Msg_ServiceDesc.ServiceName,
			EnhanceCustomCommand: true, // only required if you want to use the custom command
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "UpdateParams",
					Skip:      true, // skipped because authority gated
				},
				{
					RpcMethod:      "CreateVendor",
					Use:            "create-vendor [name] [offchainid]",
					Short:          "Send a createVendor tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "name"}, {ProtoField: "offchainid"}},
				},
				{
					RpcMethod:      "CreatePurchaser",
					Use:            "create-purchaser [offchainid]",
					Short:          "Send a createPurchaser tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "offchainid"}},
				},
				{
					RpcMethod:      "CreateTransporter",
					Use:            "create-transporter [offchainid]",
					Short:          "Send a createTransporter tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "offchainid"}},
				},
				{
					RpcMethod:      "CreateTrade",
					Use:            "create-trade [purchaserid] [vendorid] [commodity] [purchaserlocation] [vendorlocation] [commodityprice] [transportprice]",
					Short:          "Send a createTrade tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "purchaserid"}, {ProtoField: "vendorid"}, {ProtoField: "commodity"}, {ProtoField: "purchaserlocation"}, {ProtoField: "vendorlocation"}, {ProtoField: "commodityprice"}, {ProtoField: "transportprice"}},
				},
				{
					RpcMethod:      "CreateVendorTradeAccept",
					Use:            "create-vendor-trade-accept [tradeid]",
					Short:          "Send a createVendorTradeAccept tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "tradeid"}},
				},
				{
					RpcMethod:      "CreateVendorTradeReject",
					Use:            "create-vendor-trade-reject [tradeid]",
					Short:          "Send a createVendorTradeReject tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "tradeid"}},
				},
				{
					RpcMethod:      "CreateTransporterTradeAccepted",
					Use:            "create-transporter-trade-accepted [tradeid]",
					Short:          "Send a createTransporterTradeAccepted tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "tradeid"}},
				},
				{
					RpcMethod:      "CreateTransporterTradeRejected",
					Use:            "create-transporter-trade-rejected [tradeid]",
					Short:          "Send a createTransporterTradeRejected tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "tradeid"}},
				},
				{
					RpcMethod:      "CreateTransporterVendorReached",
					Use:            "create-transporter-vendor-reached [tradeid]",
					Short:          "Send a createTransporterVendorReached tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "tradeid"}},
				},
				{
					RpcMethod:      "CreateTransporterPurchaserReached",
					Use:            "create-transporter-purchaser-reached [tradeid]",
					Short:          "Send a createTransporterPurchaserReached tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "tradeid"}},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
