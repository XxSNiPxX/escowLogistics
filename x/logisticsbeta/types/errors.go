package types

// DONTCOVER

import (
	sdkerrors "cosmossdk.io/errors"
)

// x/logisticsbeta module sentinel errors
var (
	ErrInvalidSigner            = sdkerrors.Register(ModuleName, 1100, "expected gov account as only signer for proposal message")
	ErrSample                   = sdkerrors.Register(ModuleName, 1101, "sample error")
	ErrInvalidWallet            = sdkerrors.Register(ModuleName, 1102, "wallet address is invalid: %s")
	ErrAccountExists            = sdkerrors.Register(ModuleName, 1103, "Account %s already exists")
	ErrTransporterCantEscrow    = sdkerrors.Register(ModuleName, 1104, "Transporter cannot escrow the wager")
	ErrCantPayTransporterEscrow = sdkerrors.Register(ModuleName, 1105, "Can't repay escrow")
	ErrInvalidPurchaser         = sdkerrors.Register(ModuleName, 1106, "purchaser id is invalid: %s")
	ErrInvalidVendor            = sdkerrors.Register(ModuleName, 1107, "vendor id is invalid: %s")
	ErrUnauthorized            = sdkerrors.Register(ModuleName, 11010, "Not authorized : %s")
	ErrWrongTurn            = sdkerrors.Register(ModuleName, 1109, "Not your turn : %s")

	ErrInvalidDeadline = sdkerrors.Register(ModuleName, 1108, "deadline cannot be parsed: %s")
)
