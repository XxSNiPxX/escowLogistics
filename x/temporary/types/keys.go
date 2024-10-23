package types

const (
	// ModuleName defines the module name
	ModuleName = "temporary"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_temporary"
)

var (
	ParamsKey = []byte("p_temporary")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
