// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: logisticsbeta/logisticsbeta/purchaser.proto

package types

import (
	fmt "fmt"
	proto "github.com/cosmos/gogoproto/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Purchaser struct {
	Purchaserid string `protobuf:"bytes,1,opt,name=purchaserid,proto3" json:"purchaserid,omitempty"`
	Active      string `protobuf:"bytes,2,opt,name=active,proto3" json:"active,omitempty"`
	Location    string `protobuf:"bytes,3,opt,name=location,proto3" json:"location,omitempty"`
	WalletId    string `protobuf:"bytes,4,opt,name=walletId,proto3" json:"walletId,omitempty"`
	OffchainId  string `protobuf:"bytes,5,opt,name=offchainId,proto3" json:"offchainId,omitempty"`
}

func (m *Purchaser) Reset()         { *m = Purchaser{} }
func (m *Purchaser) String() string { return proto.CompactTextString(m) }
func (*Purchaser) ProtoMessage()    {}
func (*Purchaser) Descriptor() ([]byte, []int) {
	return fileDescriptor_cec7601a2377fb55, []int{0}
}
func (m *Purchaser) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Purchaser) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Purchaser.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Purchaser) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Purchaser.Merge(m, src)
}
func (m *Purchaser) XXX_Size() int {
	return m.Size()
}
func (m *Purchaser) XXX_DiscardUnknown() {
	xxx_messageInfo_Purchaser.DiscardUnknown(m)
}

var xxx_messageInfo_Purchaser proto.InternalMessageInfo

func (m *Purchaser) GetPurchaserid() string {
	if m != nil {
		return m.Purchaserid
	}
	return ""
}

func (m *Purchaser) GetActive() string {
	if m != nil {
		return m.Active
	}
	return ""
}

func (m *Purchaser) GetLocation() string {
	if m != nil {
		return m.Location
	}
	return ""
}

func (m *Purchaser) GetWalletId() string {
	if m != nil {
		return m.WalletId
	}
	return ""
}

func (m *Purchaser) GetOffchainId() string {
	if m != nil {
		return m.OffchainId
	}
	return ""
}

func init() {
	proto.RegisterType((*Purchaser)(nil), "logisticsbeta.logisticsbeta.Purchaser")
}

func init() {
	proto.RegisterFile("logisticsbeta/logisticsbeta/purchaser.proto", fileDescriptor_cec7601a2377fb55)
}

var fileDescriptor_cec7601a2377fb55 = []byte{
	// 226 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xd2, 0xce, 0xc9, 0x4f, 0xcf,
	0x2c, 0x2e, 0xc9, 0x4c, 0x2e, 0x4e, 0x4a, 0x2d, 0x49, 0xd4, 0x47, 0xe5, 0x15, 0x94, 0x16, 0x25,
	0x67, 0x24, 0x16, 0xa7, 0x16, 0xe9, 0x15, 0x14, 0xe5, 0x97, 0xe4, 0x0b, 0x49, 0xa3, 0x48, 0xeb,
	0xa1, 0xf0, 0x94, 0xe6, 0x32, 0x72, 0x71, 0x06, 0xc0, 0x34, 0x08, 0x29, 0x70, 0x71, 0xc3, 0x75,
	0x67, 0xa6, 0x48, 0x30, 0x2a, 0x30, 0x6a, 0x70, 0x06, 0x21, 0x0b, 0x09, 0x89, 0x71, 0xb1, 0x25,
	0x26, 0x97, 0x64, 0x96, 0xa5, 0x4a, 0x30, 0x81, 0x25, 0xa1, 0x3c, 0x21, 0x29, 0x2e, 0x8e, 0x9c,
	0xfc, 0xe4, 0xc4, 0x92, 0xcc, 0xfc, 0x3c, 0x09, 0x66, 0xb0, 0x0c, 0x9c, 0x0f, 0x92, 0x2b, 0x4f,
	0xcc, 0xc9, 0x49, 0x2d, 0xf1, 0x4c, 0x91, 0x60, 0x81, 0xc8, 0xc1, 0xf8, 0x42, 0x72, 0x5c, 0x5c,
	0xf9, 0x69, 0x69, 0xc9, 0x19, 0x89, 0x99, 0x79, 0x9e, 0x29, 0x12, 0xac, 0x60, 0x59, 0x24, 0x11,
	0xa7, 0xc0, 0x13, 0x8f, 0xe4, 0x18, 0x2f, 0x3c, 0x92, 0x63, 0x7c, 0xf0, 0x48, 0x8e, 0x71, 0xc2,
	0x63, 0x39, 0x86, 0x0b, 0x8f, 0xe5, 0x18, 0x6e, 0x3c, 0x96, 0x63, 0x88, 0x32, 0x4f, 0xcf, 0x2c,
	0xc9, 0x28, 0x4d, 0xd2, 0x4b, 0xce, 0xcf, 0xd5, 0x8f, 0xa8, 0x08, 0xf6, 0xcb, 0x0c, 0xa8, 0x88,
	0x40, 0x84, 0x84, 0x13, 0x28, 0x24, 0x2a, 0xd0, 0x42, 0xa6, 0xa4, 0xb2, 0x20, 0xb5, 0x38, 0x89,
	0x0d, 0x1c, 0x2c, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x16, 0x81, 0xb3, 0xa6, 0x45, 0x01,
	0x00, 0x00,
}

func (m *Purchaser) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Purchaser) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Purchaser) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.OffchainId) > 0 {
		i -= len(m.OffchainId)
		copy(dAtA[i:], m.OffchainId)
		i = encodeVarintPurchaser(dAtA, i, uint64(len(m.OffchainId)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.WalletId) > 0 {
		i -= len(m.WalletId)
		copy(dAtA[i:], m.WalletId)
		i = encodeVarintPurchaser(dAtA, i, uint64(len(m.WalletId)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Location) > 0 {
		i -= len(m.Location)
		copy(dAtA[i:], m.Location)
		i = encodeVarintPurchaser(dAtA, i, uint64(len(m.Location)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Active) > 0 {
		i -= len(m.Active)
		copy(dAtA[i:], m.Active)
		i = encodeVarintPurchaser(dAtA, i, uint64(len(m.Active)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Purchaserid) > 0 {
		i -= len(m.Purchaserid)
		copy(dAtA[i:], m.Purchaserid)
		i = encodeVarintPurchaser(dAtA, i, uint64(len(m.Purchaserid)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintPurchaser(dAtA []byte, offset int, v uint64) int {
	offset -= sovPurchaser(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Purchaser) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Purchaserid)
	if l > 0 {
		n += 1 + l + sovPurchaser(uint64(l))
	}
	l = len(m.Active)
	if l > 0 {
		n += 1 + l + sovPurchaser(uint64(l))
	}
	l = len(m.Location)
	if l > 0 {
		n += 1 + l + sovPurchaser(uint64(l))
	}
	l = len(m.WalletId)
	if l > 0 {
		n += 1 + l + sovPurchaser(uint64(l))
	}
	l = len(m.OffchainId)
	if l > 0 {
		n += 1 + l + sovPurchaser(uint64(l))
	}
	return n
}

func sovPurchaser(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozPurchaser(x uint64) (n int) {
	return sovPurchaser(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Purchaser) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPurchaser
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Purchaser: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Purchaser: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Purchaserid", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPurchaser
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPurchaser
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPurchaser
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Purchaserid = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Active", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPurchaser
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPurchaser
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPurchaser
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Active = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Location", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPurchaser
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPurchaser
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPurchaser
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Location = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field WalletId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPurchaser
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPurchaser
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPurchaser
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.WalletId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OffchainId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPurchaser
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPurchaser
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPurchaser
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.OffchainId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPurchaser(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPurchaser
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipPurchaser(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowPurchaser
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPurchaser
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPurchaser
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthPurchaser
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupPurchaser
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthPurchaser
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthPurchaser        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowPurchaser          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupPurchaser = fmt.Errorf("proto: unexpected end of group")
)
