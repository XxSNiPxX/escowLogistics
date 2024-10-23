package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// PurchaserKeyPrefix is the prefix to retrieve all Purchaser
	TradeKeyPrefix = "Trade/value/"
)

// PurchaserKey returns the store key to retrieve a Purchaser from the index fields
func TradeKey(
	traderid string,
) []byte {
	var key []byte

	tradeidBytes := []byte(traderid)
	key = append(key, tradeidBytes...)
	key = append(key, []byte("/")...)

	return key
}
