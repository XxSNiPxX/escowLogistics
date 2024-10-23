package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// PurchaserKeyPrefix is the prefix to retrieve all Purchaser
	PurchaserKeyPrefix = "Purchaser/value/"
)

// PurchaserKey returns the store key to retrieve a Purchaser from the index fields
func PurchaserKey(
	purchaserid string,
) []byte {
	var key []byte

	purchaseridBytes := []byte(purchaserid)
	key = append(key, purchaseridBytes...)
	key = append(key, []byte("/")...)

	return key
}
