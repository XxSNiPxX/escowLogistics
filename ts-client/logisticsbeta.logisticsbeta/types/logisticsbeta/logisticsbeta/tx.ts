/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "logisticsbeta.logisticsbeta";

/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params | undefined;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}

export interface MsgCreateVendor {
  creator: string;
  name: string;
  offchainid: string;
}

export interface MsgCreateVendorResponse {
  vendorIndex: string;
}

export interface MsgCreatePurchaser {
  creator: string;
  offchainid: string;
}

export interface MsgCreatePurchaserResponse {
  purchaserIndex: string;
}

export interface MsgCreateTransporter {
  creator: string;
  offchainid: string;
}

export interface MsgCreateTransporterResponse {
  transporterIndex: string;
}

export interface MsgCreateTrade {
  creator: string;
  purchaserid: number;
  vendorid: number;
  commodity: string;
  purchaserlocation: string;
  vendorlocation: string;
  commodityprice: number;
  transportprice: number;
}

export interface MsgCreateTradeResponse {
  tradeIndex: string;
}

export interface MsgCreateVendorTradeAccept {
  creator: string;
  tradeid: number;
}

export interface MsgCreateVendorTradeAcceptResponse {
  tradeIndex: string;
}

export interface MsgCreateVendorTradeReject {
  creator: string;
  tradeid: number;
}

export interface MsgCreateVendorTradeRejectResponse {
  tradeIndex: string;
}

export interface MsgCreateTransporterTradeAccepted {
  creator: string;
  tradeid: number;
}

export interface MsgCreateTransporterTradeAcceptedResponse {
  tradeIndex: string;
}

export interface MsgCreateTransporterTradeRejected {
  creator: string;
  tradeid: number;
}

export interface MsgCreateTransporterTradeRejectedResponse {
  tradeIndex: string;
}

export interface MsgCreateTransporterVendorReached {
  creator: string;
  tradeid: number;
}

export interface MsgCreateTransporterVendorReachedResponse {
  tradeIndex: string;
}

export interface MsgCreateTransporterPurchaserReached {
  creator: string;
  tradeid: number;
}

export interface MsgCreateTransporterPurchaserReachedResponse {
  tradeIndex: string;
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgCreateVendor(): MsgCreateVendor {
  return { creator: "", name: "", offchainid: "" };
}

export const MsgCreateVendor = {
  encode(message: MsgCreateVendor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.offchainid !== "") {
      writer.uint32(26).string(message.offchainid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVendor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVendor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.offchainid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVendor {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      offchainid: isSet(object.offchainid) ? String(object.offchainid) : "",
    };
  },

  toJSON(message: MsgCreateVendor): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.offchainid !== "") {
      obj.offchainid = message.offchainid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateVendor>, I>>(base?: I): MsgCreateVendor {
    return MsgCreateVendor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateVendor>, I>>(object: I): MsgCreateVendor {
    const message = createBaseMsgCreateVendor();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.offchainid = object.offchainid ?? "";
    return message;
  },
};

function createBaseMsgCreateVendorResponse(): MsgCreateVendorResponse {
  return { vendorIndex: "" };
}

export const MsgCreateVendorResponse = {
  encode(message: MsgCreateVendorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vendorIndex !== "") {
      writer.uint32(10).string(message.vendorIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVendorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVendorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vendorIndex = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVendorResponse {
    return { vendorIndex: isSet(object.vendorIndex) ? String(object.vendorIndex) : "" };
  },

  toJSON(message: MsgCreateVendorResponse): unknown {
    const obj: any = {};
    if (message.vendorIndex !== "") {
      obj.vendorIndex = message.vendorIndex;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateVendorResponse>, I>>(base?: I): MsgCreateVendorResponse {
    return MsgCreateVendorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateVendorResponse>, I>>(object: I): MsgCreateVendorResponse {
    const message = createBaseMsgCreateVendorResponse();
    message.vendorIndex = object.vendorIndex ?? "";
    return message;
  },
};

function createBaseMsgCreatePurchaser(): MsgCreatePurchaser {
  return { creator: "", offchainid: "" };
}

export const MsgCreatePurchaser = {
  encode(message: MsgCreatePurchaser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.offchainid !== "") {
      writer.uint32(18).string(message.offchainid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePurchaser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePurchaser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.offchainid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePurchaser {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      offchainid: isSet(object.offchainid) ? String(object.offchainid) : "",
    };
  },

  toJSON(message: MsgCreatePurchaser): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.offchainid !== "") {
      obj.offchainid = message.offchainid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreatePurchaser>, I>>(base?: I): MsgCreatePurchaser {
    return MsgCreatePurchaser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreatePurchaser>, I>>(object: I): MsgCreatePurchaser {
    const message = createBaseMsgCreatePurchaser();
    message.creator = object.creator ?? "";
    message.offchainid = object.offchainid ?? "";
    return message;
  },
};

function createBaseMsgCreatePurchaserResponse(): MsgCreatePurchaserResponse {
  return { purchaserIndex: "" };
}

export const MsgCreatePurchaserResponse = {
  encode(message: MsgCreatePurchaserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.purchaserIndex !== "") {
      writer.uint32(10).string(message.purchaserIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePurchaserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePurchaserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.purchaserIndex = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePurchaserResponse {
    return { purchaserIndex: isSet(object.purchaserIndex) ? String(object.purchaserIndex) : "" };
  },

  toJSON(message: MsgCreatePurchaserResponse): unknown {
    const obj: any = {};
    if (message.purchaserIndex !== "") {
      obj.purchaserIndex = message.purchaserIndex;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreatePurchaserResponse>, I>>(base?: I): MsgCreatePurchaserResponse {
    return MsgCreatePurchaserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreatePurchaserResponse>, I>>(object: I): MsgCreatePurchaserResponse {
    const message = createBaseMsgCreatePurchaserResponse();
    message.purchaserIndex = object.purchaserIndex ?? "";
    return message;
  },
};

function createBaseMsgCreateTransporter(): MsgCreateTransporter {
  return { creator: "", offchainid: "" };
}

export const MsgCreateTransporter = {
  encode(message: MsgCreateTransporter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.offchainid !== "") {
      writer.uint32(18).string(message.offchainid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTransporter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTransporter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.offchainid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransporter {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      offchainid: isSet(object.offchainid) ? String(object.offchainid) : "",
    };
  },

  toJSON(message: MsgCreateTransporter): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.offchainid !== "") {
      obj.offchainid = message.offchainid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateTransporter>, I>>(base?: I): MsgCreateTransporter {
    return MsgCreateTransporter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateTransporter>, I>>(object: I): MsgCreateTransporter {
    const message = createBaseMsgCreateTransporter();
    message.creator = object.creator ?? "";
    message.offchainid = object.offchainid ?? "";
    return message;
  },
};

function createBaseMsgCreateTransporterResponse(): MsgCreateTransporterResponse {
  return { transporterIndex: "" };
}

export const MsgCreateTransporterResponse = {
  encode(message: MsgCreateTransporterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transporterIndex !== "") {
      writer.uint32(10).string(message.transporterIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTransporterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTransporterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transporterIndex = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransporterResponse {
    return { transporterIndex: isSet(object.transporterIndex) ? String(object.transporterIndex) : "" };
  },

  toJSON(message: MsgCreateTransporterResponse): unknown {
    const obj: any = {};
    if (message.transporterIndex !== "") {
      obj.transporterIndex = message.transporterIndex;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateTransporterResponse>, I>>(base?: I): MsgCreateTransporterResponse {
    return MsgCreateTransporterResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateTransporterResponse>, I>>(object: I): MsgCreateTransporterResponse {
    const message = createBaseMsgCreateTransporterResponse();
    message.transporterIndex = object.transporterIndex ?? "";
    return message;
  },
};

function createBaseMsgCreateTrade(): MsgCreateTrade {
  return {
    creator: "",
    purchaserid: 0,
    vendorid: 0,
    commodity: "",
    purchaserlocation: "",
    vendorlocation: "",
    commodityprice: 0,
    transportprice: 0,
  };
}

export const MsgCreateTrade = {
  encode(message: MsgCreateTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.purchaserid !== 0) {
      writer.uint32(16).uint64(message.purchaserid);
    }
    if (message.vendorid !== 0) {
      writer.uint32(24).uint64(message.vendorid);
    }
    if (message.commodity !== "") {
      writer.uint32(34).string(message.commodity);
    }
    if (message.purchaserlocation !== "") {
      writer.uint32(42).string(message.purchaserlocation);
    }
    if (message.vendorlocation !== "") {
      writer.uint32(50).string(message.vendorlocation);
    }
    if (message.commodityprice !== 0) {
      writer.uint32(56).uint64(message.commodityprice);
    }
    if (message.transportprice !== 0) {
      writer.uint32(64).uint64(message.transportprice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTrade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.purchaserid = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.vendorid = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.commodity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.purchaserlocation = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.vendorlocation = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.commodityprice = longToNumber(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.transportprice = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTrade {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      purchaserid: isSet(object.purchaserid) ? Number(object.purchaserid) : 0,
      vendorid: isSet(object.vendorid) ? Number(object.vendorid) : 0,
      commodity: isSet(object.commodity) ? String(object.commodity) : "",
      purchaserlocation: isSet(object.purchaserlocation) ? String(object.purchaserlocation) : "",
      vendorlocation: isSet(object.vendorlocation) ? String(object.vendorlocation) : "",
      commodityprice: isSet(object.commodityprice) ? Number(object.commodityprice) : 0,
      transportprice: isSet(object.transportprice) ? Number(object.transportprice) : 0,
    };
  },

  toJSON(message: MsgCreateTrade): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.purchaserid !== 0) {
      obj.purchaserid = Math.round(message.purchaserid);
    }
    if (message.vendorid !== 0) {
      obj.vendorid = Math.round(message.vendorid);
    }
    if (message.commodity !== "") {
      obj.commodity = message.commodity;
    }
    if (message.purchaserlocation !== "") {
      obj.purchaserlocation = message.purchaserlocation;
    }
    if (message.vendorlocation !== "") {
      obj.vendorlocation = message.vendorlocation;
    }
    if (message.commodityprice !== 0) {
      obj.commodityprice = Math.round(message.commodityprice);
    }
    if (message.transportprice !== 0) {
      obj.transportprice = Math.round(message.transportprice);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateTrade>, I>>(base?: I): MsgCreateTrade {
    return MsgCreateTrade.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateTrade>, I>>(object: I): MsgCreateTrade {
    const message = createBaseMsgCreateTrade();
    message.creator = object.creator ?? "";
    message.purchaserid = object.purchaserid ?? 0;
    message.vendorid = object.vendorid ?? 0;
    message.commodity = object.commodity ?? "";
    message.purchaserlocation = object.purchaserlocation ?? "";
    message.vendorlocation = object.vendorlocation ?? "";
    message.commodityprice = object.commodityprice ?? 0;
    message.transportprice = object.transportprice ?? 0;
    return message;
  },
};

function createBaseMsgCreateTradeResponse(): MsgCreateTradeResponse {
  return { tradeIndex: "" };
}

export const MsgCreateTradeResponse = {
  encode(message: MsgCreateTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeIndex !== "") {
      writer.uint32(10).string(message.tradeIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTradeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tradeIndex = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTradeResponse {
    return { tradeIndex: isSet(object.tradeIndex) ? String(object.tradeIndex) : "" };
  },

  toJSON(message: MsgCreateTradeResponse): unknown {
    const obj: any = {};
    if (message.tradeIndex !== "") {
      obj.tradeIndex = message.tradeIndex;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateTradeResponse>, I>>(base?: I): MsgCreateTradeResponse {
    return MsgCreateTradeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateTradeResponse>, I>>(object: I): MsgCreateTradeResponse {
    const message = createBaseMsgCreateTradeResponse();
    message.tradeIndex = object.tradeIndex ?? "";
    return message;
  },
};

function createBaseMsgCreateVendorTradeAccept(): MsgCreateVendorTradeAccept {
  return { creator: "", tradeid: 0 };
}

export const MsgCreateVendorTradeAccept = {
  encode(message: MsgCreateVendorTradeAccept, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tradeid !== 0) {
      writer.uint32(16).uint64(message.tradeid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVendorTradeAccept {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVendorTradeAccept();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.tradeid = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVendorTradeAccept {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      tradeid: isSet(object.tradeid) ? Number(object.tradeid) : 0,
    };
  },

  toJSON(message: MsgCreateVendorTradeAccept): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.tradeid !== 0) {
      obj.tradeid = Math.round(message.tradeid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateVendorTradeAccept>, I>>(base?: I): MsgCreateVendorTradeAccept {
    return MsgCreateVendorTradeAccept.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateVendorTradeAccept>, I>>(object: I): MsgCreateVendorTradeAccept {
    const message = createBaseMsgCreateVendorTradeAccept();
    message.creator = object.creator ?? "";
    message.tradeid = object.tradeid ?? 0;
    return message;
  },
};

function createBaseMsgCreateVendorTradeAcceptResponse(): MsgCreateVendorTradeAcceptResponse {
  return { tradeIndex: "" };
}

export const MsgCreateVendorTradeAcceptResponse = {
  encode(message: MsgCreateVendorTradeAcceptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeIndex !== "") {
      writer.uint32(10).string(message.tradeIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVendorTradeAcceptResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVendorTradeAcceptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tradeIndex = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVendorTradeAcceptResponse {
    return { tradeIndex: isSet(object.tradeIndex) ? String(object.tradeIndex) : "" };
  },

  toJSON(message: MsgCreateVendorTradeAcceptResponse): unknown {
    const obj: any = {};
    if (message.tradeIndex !== "") {
      obj.tradeIndex = message.tradeIndex;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateVendorTradeAcceptResponse>, I>>(
    base?: I,
  ): MsgCreateVendorTradeAcceptResponse {
    return MsgCreateVendorTradeAcceptResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateVendorTradeAcceptResponse>, I>>(
    object: I,
  ): MsgCreateVendorTradeAcceptResponse {
    const message = createBaseMsgCreateVendorTradeAcceptResponse();
    message.tradeIndex = object.tradeIndex ?? "";
    return message;
  },
};

function createBaseMsgCreateVendorTradeReject(): MsgCreateVendorTradeReject {
  return { creator: "", tradeid: 0 };
}

export const MsgCreateVendorTradeReject = {
  encode(message: MsgCreateVendorTradeReject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tradeid !== 0) {
      writer.uint32(16).uint64(message.tradeid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVendorTradeReject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVendorTradeReject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.tradeid = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVendorTradeReject {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      tradeid: isSet(object.tradeid) ? Number(object.tradeid) : 0,
    };
  },

  toJSON(message: MsgCreateVendorTradeReject): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.tradeid !== 0) {
      obj.tradeid = Math.round(message.tradeid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateVendorTradeReject>, I>>(base?: I): MsgCreateVendorTradeReject {
    return MsgCreateVendorTradeReject.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateVendorTradeReject>, I>>(object: I): MsgCreateVendorTradeReject {
    const message = createBaseMsgCreateVendorTradeReject();
    message.creator = object.creator ?? "";
    message.tradeid = object.tradeid ?? 0;
    return message;
  },
};

function createBaseMsgCreateVendorTradeRejectResponse(): MsgCreateVendorTradeRejectResponse {
  return { tradeIndex: "" };
}

export const MsgCreateVendorTradeRejectResponse = {
  encode(message: MsgCreateVendorTradeRejectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeIndex !== "") {
      writer.uint32(10).string(message.tradeIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVendorTradeRejectResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVendorTradeRejectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tradeIndex = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVendorTradeRejectResponse {
    return { tradeIndex: isSet(object.tradeIndex) ? String(object.tradeIndex) : "" };
  },

  toJSON(message: MsgCreateVendorTradeRejectResponse): unknown {
    const obj: any = {};
    if (message.tradeIndex !== "") {
      obj.tradeIndex = message.tradeIndex;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateVendorTradeRejectResponse>, I>>(
    base?: I,
  ): MsgCreateVendorTradeRejectResponse {
    return MsgCreateVendorTradeRejectResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateVendorTradeRejectResponse>, I>>(
    object: I,
  ): MsgCreateVendorTradeRejectResponse {
    const message = createBaseMsgCreateVendorTradeRejectResponse();
    message.tradeIndex = object.tradeIndex ?? "";
    return message;
  },
};

function createBaseMsgCreateTransporterTradeAccepted(): MsgCreateTransporterTradeAccepted {
  return { creator: "", tradeid: 0 };
}

export const MsgCreateTransporterTradeAccepted = {
  encode(message: MsgCreateTransporterTradeAccepted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tradeid !== 0) {
      writer.uint32(16).uint64(message.tradeid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTransporterTradeAccepted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTransporterTradeAccepted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.tradeid = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransporterTradeAccepted {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      tradeid: isSet(object.tradeid) ? Number(object.tradeid) : 0,
    };
  },

  toJSON(message: MsgCreateTransporterTradeAccepted): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.tradeid !== 0) {
      obj.tradeid = Math.round(message.tradeid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateTransporterTradeAccepted>, I>>(
    base?: I,
  ): MsgCreateTransporterTradeAccepted {
    return MsgCreateTransporterTradeAccepted.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateTransporterTradeAccepted>, I>>(
    object: I,
  ): MsgCreateTransporterTradeAccepted {
    const message = createBaseMsgCreateTransporterTradeAccepted();
    message.creator = object.creator ?? "";
    message.tradeid = object.tradeid ?? 0;
    return message;
  },
};

function createBaseMsgCreateTransporterTradeAcceptedResponse(): MsgCreateTransporterTradeAcceptedResponse {
  return { tradeIndex: "" };
}

export const MsgCreateTransporterTradeAcceptedResponse = {
  encode(message: MsgCreateTransporterTradeAcceptedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeIndex !== "") {
      writer.uint32(10).string(message.tradeIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTransporterTradeAcceptedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTransporterTradeAcceptedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tradeIndex = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransporterTradeAcceptedResponse {
    return { tradeIndex: isSet(object.tradeIndex) ? String(object.tradeIndex) : "" };
  },

  toJSON(message: MsgCreateTransporterTradeAcceptedResponse): unknown {
    const obj: any = {};
    if (message.tradeIndex !== "") {
      obj.tradeIndex = message.tradeIndex;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateTransporterTradeAcceptedResponse>, I>>(
    base?: I,
  ): MsgCreateTransporterTradeAcceptedResponse {
    return MsgCreateTransporterTradeAcceptedResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateTransporterTradeAcceptedResponse>, I>>(
    object: I,
  ): MsgCreateTransporterTradeAcceptedResponse {
    const message = createBaseMsgCreateTransporterTradeAcceptedResponse();
    message.tradeIndex = object.tradeIndex ?? "";
    return message;
  },
};

function createBaseMsgCreateTransporterTradeRejected(): MsgCreateTransporterTradeRejected {
  return { creator: "", tradeid: 0 };
}

export const MsgCreateTransporterTradeRejected = {
  encode(message: MsgCreateTransporterTradeRejected, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tradeid !== 0) {
      writer.uint32(16).uint64(message.tradeid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTransporterTradeRejected {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTransporterTradeRejected();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.tradeid = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransporterTradeRejected {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      tradeid: isSet(object.tradeid) ? Number(object.tradeid) : 0,
    };
  },

  toJSON(message: MsgCreateTransporterTradeRejected): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.tradeid !== 0) {
      obj.tradeid = Math.round(message.tradeid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateTransporterTradeRejected>, I>>(
    base?: I,
  ): MsgCreateTransporterTradeRejected {
    return MsgCreateTransporterTradeRejected.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateTransporterTradeRejected>, I>>(
    object: I,
  ): MsgCreateTransporterTradeRejected {
    const message = createBaseMsgCreateTransporterTradeRejected();
    message.creator = object.creator ?? "";
    message.tradeid = object.tradeid ?? 0;
    return message;
  },
};

function createBaseMsgCreateTransporterTradeRejectedResponse(): MsgCreateTransporterTradeRejectedResponse {
  return { tradeIndex: "" };
}

export const MsgCreateTransporterTradeRejectedResponse = {
  encode(message: MsgCreateTransporterTradeRejectedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeIndex !== "") {
      writer.uint32(10).string(message.tradeIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTransporterTradeRejectedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTransporterTradeRejectedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tradeIndex = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransporterTradeRejectedResponse {
    return { tradeIndex: isSet(object.tradeIndex) ? String(object.tradeIndex) : "" };
  },

  toJSON(message: MsgCreateTransporterTradeRejectedResponse): unknown {
    const obj: any = {};
    if (message.tradeIndex !== "") {
      obj.tradeIndex = message.tradeIndex;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateTransporterTradeRejectedResponse>, I>>(
    base?: I,
  ): MsgCreateTransporterTradeRejectedResponse {
    return MsgCreateTransporterTradeRejectedResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateTransporterTradeRejectedResponse>, I>>(
    object: I,
  ): MsgCreateTransporterTradeRejectedResponse {
    const message = createBaseMsgCreateTransporterTradeRejectedResponse();
    message.tradeIndex = object.tradeIndex ?? "";
    return message;
  },
};

function createBaseMsgCreateTransporterVendorReached(): MsgCreateTransporterVendorReached {
  return { creator: "", tradeid: 0 };
}

export const MsgCreateTransporterVendorReached = {
  encode(message: MsgCreateTransporterVendorReached, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tradeid !== 0) {
      writer.uint32(16).uint64(message.tradeid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTransporterVendorReached {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTransporterVendorReached();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.tradeid = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransporterVendorReached {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      tradeid: isSet(object.tradeid) ? Number(object.tradeid) : 0,
    };
  },

  toJSON(message: MsgCreateTransporterVendorReached): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.tradeid !== 0) {
      obj.tradeid = Math.round(message.tradeid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateTransporterVendorReached>, I>>(
    base?: I,
  ): MsgCreateTransporterVendorReached {
    return MsgCreateTransporterVendorReached.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateTransporterVendorReached>, I>>(
    object: I,
  ): MsgCreateTransporterVendorReached {
    const message = createBaseMsgCreateTransporterVendorReached();
    message.creator = object.creator ?? "";
    message.tradeid = object.tradeid ?? 0;
    return message;
  },
};

function createBaseMsgCreateTransporterVendorReachedResponse(): MsgCreateTransporterVendorReachedResponse {
  return { tradeIndex: "" };
}

export const MsgCreateTransporterVendorReachedResponse = {
  encode(message: MsgCreateTransporterVendorReachedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeIndex !== "") {
      writer.uint32(10).string(message.tradeIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTransporterVendorReachedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTransporterVendorReachedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tradeIndex = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransporterVendorReachedResponse {
    return { tradeIndex: isSet(object.tradeIndex) ? String(object.tradeIndex) : "" };
  },

  toJSON(message: MsgCreateTransporterVendorReachedResponse): unknown {
    const obj: any = {};
    if (message.tradeIndex !== "") {
      obj.tradeIndex = message.tradeIndex;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateTransporterVendorReachedResponse>, I>>(
    base?: I,
  ): MsgCreateTransporterVendorReachedResponse {
    return MsgCreateTransporterVendorReachedResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateTransporterVendorReachedResponse>, I>>(
    object: I,
  ): MsgCreateTransporterVendorReachedResponse {
    const message = createBaseMsgCreateTransporterVendorReachedResponse();
    message.tradeIndex = object.tradeIndex ?? "";
    return message;
  },
};

function createBaseMsgCreateTransporterPurchaserReached(): MsgCreateTransporterPurchaserReached {
  return { creator: "", tradeid: 0 };
}

export const MsgCreateTransporterPurchaserReached = {
  encode(message: MsgCreateTransporterPurchaserReached, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tradeid !== 0) {
      writer.uint32(16).uint64(message.tradeid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTransporterPurchaserReached {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTransporterPurchaserReached();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.tradeid = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransporterPurchaserReached {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      tradeid: isSet(object.tradeid) ? Number(object.tradeid) : 0,
    };
  },

  toJSON(message: MsgCreateTransporterPurchaserReached): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.tradeid !== 0) {
      obj.tradeid = Math.round(message.tradeid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateTransporterPurchaserReached>, I>>(
    base?: I,
  ): MsgCreateTransporterPurchaserReached {
    return MsgCreateTransporterPurchaserReached.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateTransporterPurchaserReached>, I>>(
    object: I,
  ): MsgCreateTransporterPurchaserReached {
    const message = createBaseMsgCreateTransporterPurchaserReached();
    message.creator = object.creator ?? "";
    message.tradeid = object.tradeid ?? 0;
    return message;
  },
};

function createBaseMsgCreateTransporterPurchaserReachedResponse(): MsgCreateTransporterPurchaserReachedResponse {
  return { tradeIndex: "" };
}

export const MsgCreateTransporterPurchaserReachedResponse = {
  encode(message: MsgCreateTransporterPurchaserReachedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeIndex !== "") {
      writer.uint32(10).string(message.tradeIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTransporterPurchaserReachedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTransporterPurchaserReachedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tradeIndex = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransporterPurchaserReachedResponse {
    return { tradeIndex: isSet(object.tradeIndex) ? String(object.tradeIndex) : "" };
  },

  toJSON(message: MsgCreateTransporterPurchaserReachedResponse): unknown {
    const obj: any = {};
    if (message.tradeIndex !== "") {
      obj.tradeIndex = message.tradeIndex;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateTransporterPurchaserReachedResponse>, I>>(
    base?: I,
  ): MsgCreateTransporterPurchaserReachedResponse {
    return MsgCreateTransporterPurchaserReachedResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateTransporterPurchaserReachedResponse>, I>>(
    object: I,
  ): MsgCreateTransporterPurchaserReachedResponse {
    const message = createBaseMsgCreateTransporterPurchaserReachedResponse();
    message.tradeIndex = object.tradeIndex ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  CreateVendor(request: MsgCreateVendor): Promise<MsgCreateVendorResponse>;
  CreatePurchaser(request: MsgCreatePurchaser): Promise<MsgCreatePurchaserResponse>;
  CreateTransporter(request: MsgCreateTransporter): Promise<MsgCreateTransporterResponse>;
  CreateTrade(request: MsgCreateTrade): Promise<MsgCreateTradeResponse>;
  CreateVendorTradeAccept(request: MsgCreateVendorTradeAccept): Promise<MsgCreateVendorTradeAcceptResponse>;
  CreateVendorTradeReject(request: MsgCreateVendorTradeReject): Promise<MsgCreateVendorTradeRejectResponse>;
  CreateTransporterTradeAccepted(
    request: MsgCreateTransporterTradeAccepted,
  ): Promise<MsgCreateTransporterTradeAcceptedResponse>;
  CreateTransporterTradeRejected(
    request: MsgCreateTransporterTradeRejected,
  ): Promise<MsgCreateTransporterTradeRejectedResponse>;
  CreateTransporterVendorReached(
    request: MsgCreateTransporterVendorReached,
  ): Promise<MsgCreateTransporterVendorReachedResponse>;
  CreateTransporterPurchaserReached(
    request: MsgCreateTransporterPurchaserReached,
  ): Promise<MsgCreateTransporterPurchaserReachedResponse>;
}

export const MsgServiceName = "logisticsbeta.logisticsbeta.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateVendor = this.CreateVendor.bind(this);
    this.CreatePurchaser = this.CreatePurchaser.bind(this);
    this.CreateTransporter = this.CreateTransporter.bind(this);
    this.CreateTrade = this.CreateTrade.bind(this);
    this.CreateVendorTradeAccept = this.CreateVendorTradeAccept.bind(this);
    this.CreateVendorTradeReject = this.CreateVendorTradeReject.bind(this);
    this.CreateTransporterTradeAccepted = this.CreateTransporterTradeAccepted.bind(this);
    this.CreateTransporterTradeRejected = this.CreateTransporterTradeRejected.bind(this);
    this.CreateTransporterVendorReached = this.CreateTransporterVendorReached.bind(this);
    this.CreateTransporterPurchaserReached = this.CreateTransporterPurchaserReached.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  CreateVendor(request: MsgCreateVendor): Promise<MsgCreateVendorResponse> {
    const data = MsgCreateVendor.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateVendor", data);
    return promise.then((data) => MsgCreateVendorResponse.decode(_m0.Reader.create(data)));
  }

  CreatePurchaser(request: MsgCreatePurchaser): Promise<MsgCreatePurchaserResponse> {
    const data = MsgCreatePurchaser.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreatePurchaser", data);
    return promise.then((data) => MsgCreatePurchaserResponse.decode(_m0.Reader.create(data)));
  }

  CreateTransporter(request: MsgCreateTransporter): Promise<MsgCreateTransporterResponse> {
    const data = MsgCreateTransporter.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateTransporter", data);
    return promise.then((data) => MsgCreateTransporterResponse.decode(_m0.Reader.create(data)));
  }

  CreateTrade(request: MsgCreateTrade): Promise<MsgCreateTradeResponse> {
    const data = MsgCreateTrade.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateTrade", data);
    return promise.then((data) => MsgCreateTradeResponse.decode(_m0.Reader.create(data)));
  }

  CreateVendorTradeAccept(request: MsgCreateVendorTradeAccept): Promise<MsgCreateVendorTradeAcceptResponse> {
    const data = MsgCreateVendorTradeAccept.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateVendorTradeAccept", data);
    return promise.then((data) => MsgCreateVendorTradeAcceptResponse.decode(_m0.Reader.create(data)));
  }

  CreateVendorTradeReject(request: MsgCreateVendorTradeReject): Promise<MsgCreateVendorTradeRejectResponse> {
    const data = MsgCreateVendorTradeReject.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateVendorTradeReject", data);
    return promise.then((data) => MsgCreateVendorTradeRejectResponse.decode(_m0.Reader.create(data)));
  }

  CreateTransporterTradeAccepted(
    request: MsgCreateTransporterTradeAccepted,
  ): Promise<MsgCreateTransporterTradeAcceptedResponse> {
    const data = MsgCreateTransporterTradeAccepted.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateTransporterTradeAccepted", data);
    return promise.then((data) => MsgCreateTransporterTradeAcceptedResponse.decode(_m0.Reader.create(data)));
  }

  CreateTransporterTradeRejected(
    request: MsgCreateTransporterTradeRejected,
  ): Promise<MsgCreateTransporterTradeRejectedResponse> {
    const data = MsgCreateTransporterTradeRejected.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateTransporterTradeRejected", data);
    return promise.then((data) => MsgCreateTransporterTradeRejectedResponse.decode(_m0.Reader.create(data)));
  }

  CreateTransporterVendorReached(
    request: MsgCreateTransporterVendorReached,
  ): Promise<MsgCreateTransporterVendorReachedResponse> {
    const data = MsgCreateTransporterVendorReached.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateTransporterVendorReached", data);
    return promise.then((data) => MsgCreateTransporterVendorReachedResponse.decode(_m0.Reader.create(data)));
  }

  CreateTransporterPurchaserReached(
    request: MsgCreateTransporterPurchaserReached,
  ): Promise<MsgCreateTransporterPurchaserReachedResponse> {
    const data = MsgCreateTransporterPurchaserReached.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateTransporterPurchaserReached", data);
    return promise.then((data) => MsgCreateTransporterPurchaserReachedResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
