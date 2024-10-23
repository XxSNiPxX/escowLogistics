package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// TransporterKeyPrefix is the prefix to retrieve all Transporter
	TransporterKeyPrefix = "Transporter/value/"
)

// TransporterKey returns the store key to retrieve a Transporter from the index fields
func TransporterKey(
	transporterid string,
) []byte {
	var key []byte

	transporteridBytes := []byte(transporterid)
	key = append(key, transporteridBytes...)
	key = append(key, []byte("/")...)

	return key
}
