package logisticsbeta

import (
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"github.com/XxSNiPxX/logisticsBeta/testutil/sample"
	logisticsbetasimulation "github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/simulation"
	"github.com/XxSNiPxX/logisticsBeta/x/logisticsbeta/types"
)

// avoid unused import issue
var (
	_ = logisticsbetasimulation.FindAccount
	_ = rand.Rand{}
	_ = sample.AccAddress
	_ = sdk.AccAddress{}
	_ = simulation.MsgEntryKind
)

const (
	opWeightMsgCreateVendor = "op_weight_msg_create_vendor"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateVendor int = 100

	opWeightMsgCreatePurchaser = "op_weight_msg_create_purchaser"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreatePurchaser int = 100

	opWeightMsgCreateTransporter = "op_weight_msg_create_transporter"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateTransporter int = 100

	opWeightMsgCreateTrade = "op_weight_msg_create_trade"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateTrade int = 100

	opWeightMsgCreateVendorTradeAccept = "op_weight_msg_create_vendor_trade_accept"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateVendorTradeAccept int = 100

	opWeightMsgCreateVendorTradeReject = "op_weight_msg_create_vendor_trade_reject"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateVendorTradeReject int = 100

	opWeightMsgCreateTransporterTradeAccepted = "op_weight_msg_create_transporter_trade_accepted"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateTransporterTradeAccepted int = 100

	opWeightMsgCreateTransporterTradeRejected = "op_weight_msg_create_transporter_trade_rejected"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateTransporterTradeRejected int = 100

	opWeightMsgCreateTransporterVendorReached = "op_weight_msg_create_transporter_vendor_reached"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateTransporterVendorReached int = 100

	opWeightMsgCreateTransporterPurchaserReached = "op_weight_msg_create_transporter_purchaser_reached"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateTransporterPurchaserReached int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	logisticsbetaGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&logisticsbetaGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ simtypes.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateVendor int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateVendor, &weightMsgCreateVendor, nil,
		func(_ *rand.Rand) {
			weightMsgCreateVendor = defaultWeightMsgCreateVendor
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateVendor,
		logisticsbetasimulation.SimulateMsgCreateVendor(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreatePurchaser int
	simState.AppParams.GetOrGenerate(opWeightMsgCreatePurchaser, &weightMsgCreatePurchaser, nil,
		func(_ *rand.Rand) {
			weightMsgCreatePurchaser = defaultWeightMsgCreatePurchaser
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreatePurchaser,
		logisticsbetasimulation.SimulateMsgCreatePurchaser(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateTransporter int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateTransporter, &weightMsgCreateTransporter, nil,
		func(_ *rand.Rand) {
			weightMsgCreateTransporter = defaultWeightMsgCreateTransporter
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateTransporter,
		logisticsbetasimulation.SimulateMsgCreateTransporter(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateTrade int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateTrade, &weightMsgCreateTrade, nil,
		func(_ *rand.Rand) {
			weightMsgCreateTrade = defaultWeightMsgCreateTrade
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateTrade,
		logisticsbetasimulation.SimulateMsgCreateTrade(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateVendorTradeAccept int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateVendorTradeAccept, &weightMsgCreateVendorTradeAccept, nil,
		func(_ *rand.Rand) {
			weightMsgCreateVendorTradeAccept = defaultWeightMsgCreateVendorTradeAccept
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateVendorTradeAccept,
		logisticsbetasimulation.SimulateMsgCreateVendorTradeAccept(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateVendorTradeReject int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateVendorTradeReject, &weightMsgCreateVendorTradeReject, nil,
		func(_ *rand.Rand) {
			weightMsgCreateVendorTradeReject = defaultWeightMsgCreateVendorTradeReject
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateVendorTradeReject,
		logisticsbetasimulation.SimulateMsgCreateVendorTradeReject(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateTransporterTradeAccepted int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateTransporterTradeAccepted, &weightMsgCreateTransporterTradeAccepted, nil,
		func(_ *rand.Rand) {
			weightMsgCreateTransporterTradeAccepted = defaultWeightMsgCreateTransporterTradeAccepted
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateTransporterTradeAccepted,
		logisticsbetasimulation.SimulateMsgCreateTransporterTradeAccepted(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateTransporterTradeRejected int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateTransporterTradeRejected, &weightMsgCreateTransporterTradeRejected, nil,
		func(_ *rand.Rand) {
			weightMsgCreateTransporterTradeRejected = defaultWeightMsgCreateTransporterTradeRejected
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateTransporterTradeRejected,
		logisticsbetasimulation.SimulateMsgCreateTransporterTradeRejected(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateTransporterVendorReached int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateTransporterVendorReached, &weightMsgCreateTransporterVendorReached, nil,
		func(_ *rand.Rand) {
			weightMsgCreateTransporterVendorReached = defaultWeightMsgCreateTransporterVendorReached
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateTransporterVendorReached,
		logisticsbetasimulation.SimulateMsgCreateTransporterVendorReached(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateTransporterPurchaserReached int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateTransporterPurchaserReached, &weightMsgCreateTransporterPurchaserReached, nil,
		func(_ *rand.Rand) {
			weightMsgCreateTransporterPurchaserReached = defaultWeightMsgCreateTransporterPurchaserReached
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateTransporterPurchaserReached,
		logisticsbetasimulation.SimulateMsgCreateTransporterPurchaserReached(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateVendor,
			defaultWeightMsgCreateVendor,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				logisticsbetasimulation.SimulateMsgCreateVendor(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreatePurchaser,
			defaultWeightMsgCreatePurchaser,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				logisticsbetasimulation.SimulateMsgCreatePurchaser(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateTransporter,
			defaultWeightMsgCreateTransporter,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				logisticsbetasimulation.SimulateMsgCreateTransporter(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateTrade,
			defaultWeightMsgCreateTrade,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				logisticsbetasimulation.SimulateMsgCreateTrade(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateVendorTradeAccept,
			defaultWeightMsgCreateVendorTradeAccept,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				logisticsbetasimulation.SimulateMsgCreateVendorTradeAccept(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateVendorTradeReject,
			defaultWeightMsgCreateVendorTradeReject,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				logisticsbetasimulation.SimulateMsgCreateVendorTradeReject(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateTransporterTradeAccepted,
			defaultWeightMsgCreateTransporterTradeAccepted,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				logisticsbetasimulation.SimulateMsgCreateTransporterTradeAccepted(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateTransporterTradeRejected,
			defaultWeightMsgCreateTransporterTradeRejected,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				logisticsbetasimulation.SimulateMsgCreateTransporterTradeRejected(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateTransporterVendorReached,
			defaultWeightMsgCreateTransporterVendorReached,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				logisticsbetasimulation.SimulateMsgCreateTransporterVendorReached(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateTransporterPurchaserReached,
			defaultWeightMsgCreateTransporterPurchaserReached,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				logisticsbetasimulation.SimulateMsgCreateTransporterPurchaserReached(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
