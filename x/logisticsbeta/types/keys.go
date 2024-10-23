package types

import "time"

const (
	// ModuleName defines the module name
	ModuleName = "logisticsbeta"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_logisticsbeta"
)
const (
    TradeCreateEventType      = "new-trade-created" // Indicates what event type to listen to
    TradeVendorEventType   = "vendor"          // Subsidiary information
    TradeIDEventType = "tradeid"       // What game is relevant
		TradeVendorAcceptedEventType = "vendor-trade-accepted"       // What game is relevant
		TradeVendorRejectedEventType = "vendor-trade-rejected"       // What game is relevant

)

var (
	ParamsKey = []byte("p_logisticsbeta")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	MaxTurnDuration = time.Duration(24 * 3_600 * 1000_000_000) // 1 day
	DeadlineLayout  = "2006-01-02 15:04:05.999999999 +0000 UTC"
)

const (
	SystemInfo1Key = "SystemInfo1/value/"
)

const (
	SystemInfo2Key = "SystemInfo2/value/"
)

const (
	SystemInfo3Key = "SystemInfo3/value/"
)

const (
	SystemInfo4Key = "SystemInfo4/value/"
)
