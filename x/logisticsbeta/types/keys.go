package types

const (
	// ModuleName defines the module name
	ModuleName = "logisticsbeta"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_logisticsbeta"
)

var (
	ParamsKey = []byte("p_logisticsbeta")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
