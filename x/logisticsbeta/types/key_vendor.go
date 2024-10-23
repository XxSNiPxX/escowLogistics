package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// VendorKeyPrefix is the prefix to retrieve all Vendor
	VendorKeyPrefix = "Vendor/value/"
)

// VendorKey returns the store key to retrieve a Vendor from the index fields
func VendorKey(
	vendorid string,
) []byte {
	var key []byte

	vendoridBytes := []byte(vendorid)
	key = append(key, vendoridBytes...)
	key = append(key, []byte("/")...)

	return key
}
