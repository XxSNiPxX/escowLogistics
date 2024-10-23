/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Purchaser } from "./purchaser";
import { SystemInfo1 } from "./system_info_1";
import { SystemInfo2 } from "./system_info_2";
import { SystemInfo3 } from "./system_info_3";
import { SystemInfo4 } from "./system_info_4";
import { Trade } from "./trade";
import { Transporter } from "./transporter";
import { Vendor } from "./vendor";

export const protobufPackage = "logisticsbeta.logisticsbeta";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetSystemInfo1Request {
}

export interface QueryGetSystemInfo1Response {
  SystemInfo1: SystemInfo1 | undefined;
}

export interface QueryGetSystemInfo2Request {
}

export interface QueryGetSystemInfo2Response {
  SystemInfo2: SystemInfo2 | undefined;
}

export interface QueryGetSystemInfo3Request {
}

export interface QueryGetSystemInfo3Response {
  SystemInfo3: SystemInfo3 | undefined;
}

export interface QueryGetVendorRequest {
  vendorid: string;
}

export interface QueryGetVendorResponse {
  vendor: Vendor | undefined;
}

export interface QueryAllVendorRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllVendorResponse {
  vendor: Vendor[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPurchaserRequest {
  purchaserid: string;
}

export interface QueryGetPurchaserResponse {
  purchaser: Purchaser | undefined;
}

export interface QueryAllPurchaserRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPurchaserResponse {
  purchaser: Purchaser[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTransporterRequest {
  transporterid: string;
}

export interface QueryGetTransporterResponse {
  transporter: Transporter | undefined;
}

export interface QueryAllTransporterRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTransporterResponse {
  transporter: Transporter[];
  pagination: PageResponse | undefined;
}

export interface QueryGetSystemInfo4Request {
}

export interface QueryGetSystemInfo4Response {
  SystemInfo4: SystemInfo4 | undefined;
}

export interface QueryGetTradeRequest {
  tradeid: string;
}

export interface QueryGetTradeResponse {
  trade: Trade | undefined;
}

export interface QueryAllTradeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTradeResponse {
  trade: Trade[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetSystemInfo1Request(): QueryGetSystemInfo1Request {
  return {};
}

export const QueryGetSystemInfo1Request = {
  encode(_: QueryGetSystemInfo1Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSystemInfo1Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSystemInfo1Request();
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

  fromJSON(_: any): QueryGetSystemInfo1Request {
    return {};
  },

  toJSON(_: QueryGetSystemInfo1Request): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSystemInfo1Request>, I>>(base?: I): QueryGetSystemInfo1Request {
    return QueryGetSystemInfo1Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfo1Request>, I>>(_: I): QueryGetSystemInfo1Request {
    const message = createBaseQueryGetSystemInfo1Request();
    return message;
  },
};

function createBaseQueryGetSystemInfo1Response(): QueryGetSystemInfo1Response {
  return { SystemInfo1: undefined };
}

export const QueryGetSystemInfo1Response = {
  encode(message: QueryGetSystemInfo1Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.SystemInfo1 !== undefined) {
      SystemInfo1.encode(message.SystemInfo1, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSystemInfo1Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSystemInfo1Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.SystemInfo1 = SystemInfo1.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetSystemInfo1Response {
    return { SystemInfo1: isSet(object.SystemInfo1) ? SystemInfo1.fromJSON(object.SystemInfo1) : undefined };
  },

  toJSON(message: QueryGetSystemInfo1Response): unknown {
    const obj: any = {};
    if (message.SystemInfo1 !== undefined) {
      obj.SystemInfo1 = SystemInfo1.toJSON(message.SystemInfo1);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSystemInfo1Response>, I>>(base?: I): QueryGetSystemInfo1Response {
    return QueryGetSystemInfo1Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfo1Response>, I>>(object: I): QueryGetSystemInfo1Response {
    const message = createBaseQueryGetSystemInfo1Response();
    message.SystemInfo1 = (object.SystemInfo1 !== undefined && object.SystemInfo1 !== null)
      ? SystemInfo1.fromPartial(object.SystemInfo1)
      : undefined;
    return message;
  },
};

function createBaseQueryGetSystemInfo2Request(): QueryGetSystemInfo2Request {
  return {};
}

export const QueryGetSystemInfo2Request = {
  encode(_: QueryGetSystemInfo2Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSystemInfo2Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSystemInfo2Request();
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

  fromJSON(_: any): QueryGetSystemInfo2Request {
    return {};
  },

  toJSON(_: QueryGetSystemInfo2Request): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSystemInfo2Request>, I>>(base?: I): QueryGetSystemInfo2Request {
    return QueryGetSystemInfo2Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfo2Request>, I>>(_: I): QueryGetSystemInfo2Request {
    const message = createBaseQueryGetSystemInfo2Request();
    return message;
  },
};

function createBaseQueryGetSystemInfo2Response(): QueryGetSystemInfo2Response {
  return { SystemInfo2: undefined };
}

export const QueryGetSystemInfo2Response = {
  encode(message: QueryGetSystemInfo2Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.SystemInfo2 !== undefined) {
      SystemInfo2.encode(message.SystemInfo2, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSystemInfo2Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSystemInfo2Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.SystemInfo2 = SystemInfo2.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetSystemInfo2Response {
    return { SystemInfo2: isSet(object.SystemInfo2) ? SystemInfo2.fromJSON(object.SystemInfo2) : undefined };
  },

  toJSON(message: QueryGetSystemInfo2Response): unknown {
    const obj: any = {};
    if (message.SystemInfo2 !== undefined) {
      obj.SystemInfo2 = SystemInfo2.toJSON(message.SystemInfo2);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSystemInfo2Response>, I>>(base?: I): QueryGetSystemInfo2Response {
    return QueryGetSystemInfo2Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfo2Response>, I>>(object: I): QueryGetSystemInfo2Response {
    const message = createBaseQueryGetSystemInfo2Response();
    message.SystemInfo2 = (object.SystemInfo2 !== undefined && object.SystemInfo2 !== null)
      ? SystemInfo2.fromPartial(object.SystemInfo2)
      : undefined;
    return message;
  },
};

function createBaseQueryGetSystemInfo3Request(): QueryGetSystemInfo3Request {
  return {};
}

export const QueryGetSystemInfo3Request = {
  encode(_: QueryGetSystemInfo3Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSystemInfo3Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSystemInfo3Request();
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

  fromJSON(_: any): QueryGetSystemInfo3Request {
    return {};
  },

  toJSON(_: QueryGetSystemInfo3Request): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSystemInfo3Request>, I>>(base?: I): QueryGetSystemInfo3Request {
    return QueryGetSystemInfo3Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfo3Request>, I>>(_: I): QueryGetSystemInfo3Request {
    const message = createBaseQueryGetSystemInfo3Request();
    return message;
  },
};

function createBaseQueryGetSystemInfo3Response(): QueryGetSystemInfo3Response {
  return { SystemInfo3: undefined };
}

export const QueryGetSystemInfo3Response = {
  encode(message: QueryGetSystemInfo3Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.SystemInfo3 !== undefined) {
      SystemInfo3.encode(message.SystemInfo3, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSystemInfo3Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSystemInfo3Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.SystemInfo3 = SystemInfo3.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetSystemInfo3Response {
    return { SystemInfo3: isSet(object.SystemInfo3) ? SystemInfo3.fromJSON(object.SystemInfo3) : undefined };
  },

  toJSON(message: QueryGetSystemInfo3Response): unknown {
    const obj: any = {};
    if (message.SystemInfo3 !== undefined) {
      obj.SystemInfo3 = SystemInfo3.toJSON(message.SystemInfo3);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSystemInfo3Response>, I>>(base?: I): QueryGetSystemInfo3Response {
    return QueryGetSystemInfo3Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfo3Response>, I>>(object: I): QueryGetSystemInfo3Response {
    const message = createBaseQueryGetSystemInfo3Response();
    message.SystemInfo3 = (object.SystemInfo3 !== undefined && object.SystemInfo3 !== null)
      ? SystemInfo3.fromPartial(object.SystemInfo3)
      : undefined;
    return message;
  },
};

function createBaseQueryGetVendorRequest(): QueryGetVendorRequest {
  return { vendorid: "" };
}

export const QueryGetVendorRequest = {
  encode(message: QueryGetVendorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vendorid !== "") {
      writer.uint32(10).string(message.vendorid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetVendorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVendorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vendorid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetVendorRequest {
    return { vendorid: isSet(object.vendorid) ? String(object.vendorid) : "" };
  },

  toJSON(message: QueryGetVendorRequest): unknown {
    const obj: any = {};
    if (message.vendorid !== "") {
      obj.vendorid = message.vendorid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetVendorRequest>, I>>(base?: I): QueryGetVendorRequest {
    return QueryGetVendorRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetVendorRequest>, I>>(object: I): QueryGetVendorRequest {
    const message = createBaseQueryGetVendorRequest();
    message.vendorid = object.vendorid ?? "";
    return message;
  },
};

function createBaseQueryGetVendorResponse(): QueryGetVendorResponse {
  return { vendor: undefined };
}

export const QueryGetVendorResponse = {
  encode(message: QueryGetVendorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vendor !== undefined) {
      Vendor.encode(message.vendor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetVendorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVendorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vendor = Vendor.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetVendorResponse {
    return { vendor: isSet(object.vendor) ? Vendor.fromJSON(object.vendor) : undefined };
  },

  toJSON(message: QueryGetVendorResponse): unknown {
    const obj: any = {};
    if (message.vendor !== undefined) {
      obj.vendor = Vendor.toJSON(message.vendor);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetVendorResponse>, I>>(base?: I): QueryGetVendorResponse {
    return QueryGetVendorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetVendorResponse>, I>>(object: I): QueryGetVendorResponse {
    const message = createBaseQueryGetVendorResponse();
    message.vendor = (object.vendor !== undefined && object.vendor !== null)
      ? Vendor.fromPartial(object.vendor)
      : undefined;
    return message;
  },
};

function createBaseQueryAllVendorRequest(): QueryAllVendorRequest {
  return { pagination: undefined };
}

export const QueryAllVendorRequest = {
  encode(message: QueryAllVendorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVendorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVendorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllVendorRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllVendorRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllVendorRequest>, I>>(base?: I): QueryAllVendorRequest {
    return QueryAllVendorRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllVendorRequest>, I>>(object: I): QueryAllVendorRequest {
    const message = createBaseQueryAllVendorRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllVendorResponse(): QueryAllVendorResponse {
  return { vendor: [], pagination: undefined };
}

export const QueryAllVendorResponse = {
  encode(message: QueryAllVendorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vendor) {
      Vendor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVendorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVendorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vendor.push(Vendor.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllVendorResponse {
    return {
      vendor: Array.isArray(object?.vendor) ? object.vendor.map((e: any) => Vendor.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllVendorResponse): unknown {
    const obj: any = {};
    if (message.vendor?.length) {
      obj.vendor = message.vendor.map((e) => Vendor.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllVendorResponse>, I>>(base?: I): QueryAllVendorResponse {
    return QueryAllVendorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllVendorResponse>, I>>(object: I): QueryAllVendorResponse {
    const message = createBaseQueryAllVendorResponse();
    message.vendor = object.vendor?.map((e) => Vendor.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPurchaserRequest(): QueryGetPurchaserRequest {
  return { purchaserid: "" };
}

export const QueryGetPurchaserRequest = {
  encode(message: QueryGetPurchaserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.purchaserid !== "") {
      writer.uint32(10).string(message.purchaserid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPurchaserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPurchaserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.purchaserid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPurchaserRequest {
    return { purchaserid: isSet(object.purchaserid) ? String(object.purchaserid) : "" };
  },

  toJSON(message: QueryGetPurchaserRequest): unknown {
    const obj: any = {};
    if (message.purchaserid !== "") {
      obj.purchaserid = message.purchaserid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPurchaserRequest>, I>>(base?: I): QueryGetPurchaserRequest {
    return QueryGetPurchaserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPurchaserRequest>, I>>(object: I): QueryGetPurchaserRequest {
    const message = createBaseQueryGetPurchaserRequest();
    message.purchaserid = object.purchaserid ?? "";
    return message;
  },
};

function createBaseQueryGetPurchaserResponse(): QueryGetPurchaserResponse {
  return { purchaser: undefined };
}

export const QueryGetPurchaserResponse = {
  encode(message: QueryGetPurchaserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.purchaser !== undefined) {
      Purchaser.encode(message.purchaser, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPurchaserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPurchaserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.purchaser = Purchaser.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPurchaserResponse {
    return { purchaser: isSet(object.purchaser) ? Purchaser.fromJSON(object.purchaser) : undefined };
  },

  toJSON(message: QueryGetPurchaserResponse): unknown {
    const obj: any = {};
    if (message.purchaser !== undefined) {
      obj.purchaser = Purchaser.toJSON(message.purchaser);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPurchaserResponse>, I>>(base?: I): QueryGetPurchaserResponse {
    return QueryGetPurchaserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPurchaserResponse>, I>>(object: I): QueryGetPurchaserResponse {
    const message = createBaseQueryGetPurchaserResponse();
    message.purchaser = (object.purchaser !== undefined && object.purchaser !== null)
      ? Purchaser.fromPartial(object.purchaser)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPurchaserRequest(): QueryAllPurchaserRequest {
  return { pagination: undefined };
}

export const QueryAllPurchaserRequest = {
  encode(message: QueryAllPurchaserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPurchaserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPurchaserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPurchaserRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPurchaserRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPurchaserRequest>, I>>(base?: I): QueryAllPurchaserRequest {
    return QueryAllPurchaserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPurchaserRequest>, I>>(object: I): QueryAllPurchaserRequest {
    const message = createBaseQueryAllPurchaserRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPurchaserResponse(): QueryAllPurchaserResponse {
  return { purchaser: [], pagination: undefined };
}

export const QueryAllPurchaserResponse = {
  encode(message: QueryAllPurchaserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.purchaser) {
      Purchaser.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPurchaserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPurchaserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.purchaser.push(Purchaser.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPurchaserResponse {
    return {
      purchaser: Array.isArray(object?.purchaser) ? object.purchaser.map((e: any) => Purchaser.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPurchaserResponse): unknown {
    const obj: any = {};
    if (message.purchaser?.length) {
      obj.purchaser = message.purchaser.map((e) => Purchaser.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPurchaserResponse>, I>>(base?: I): QueryAllPurchaserResponse {
    return QueryAllPurchaserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPurchaserResponse>, I>>(object: I): QueryAllPurchaserResponse {
    const message = createBaseQueryAllPurchaserResponse();
    message.purchaser = object.purchaser?.map((e) => Purchaser.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetTransporterRequest(): QueryGetTransporterRequest {
  return { transporterid: "" };
}

export const QueryGetTransporterRequest = {
  encode(message: QueryGetTransporterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transporterid !== "") {
      writer.uint32(10).string(message.transporterid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTransporterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTransporterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transporterid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetTransporterRequest {
    return { transporterid: isSet(object.transporterid) ? String(object.transporterid) : "" };
  },

  toJSON(message: QueryGetTransporterRequest): unknown {
    const obj: any = {};
    if (message.transporterid !== "") {
      obj.transporterid = message.transporterid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetTransporterRequest>, I>>(base?: I): QueryGetTransporterRequest {
    return QueryGetTransporterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetTransporterRequest>, I>>(object: I): QueryGetTransporterRequest {
    const message = createBaseQueryGetTransporterRequest();
    message.transporterid = object.transporterid ?? "";
    return message;
  },
};

function createBaseQueryGetTransporterResponse(): QueryGetTransporterResponse {
  return { transporter: undefined };
}

export const QueryGetTransporterResponse = {
  encode(message: QueryGetTransporterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transporter !== undefined) {
      Transporter.encode(message.transporter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTransporterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTransporterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transporter = Transporter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetTransporterResponse {
    return { transporter: isSet(object.transporter) ? Transporter.fromJSON(object.transporter) : undefined };
  },

  toJSON(message: QueryGetTransporterResponse): unknown {
    const obj: any = {};
    if (message.transporter !== undefined) {
      obj.transporter = Transporter.toJSON(message.transporter);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetTransporterResponse>, I>>(base?: I): QueryGetTransporterResponse {
    return QueryGetTransporterResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetTransporterResponse>, I>>(object: I): QueryGetTransporterResponse {
    const message = createBaseQueryGetTransporterResponse();
    message.transporter = (object.transporter !== undefined && object.transporter !== null)
      ? Transporter.fromPartial(object.transporter)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTransporterRequest(): QueryAllTransporterRequest {
  return { pagination: undefined };
}

export const QueryAllTransporterRequest = {
  encode(message: QueryAllTransporterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTransporterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTransporterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllTransporterRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllTransporterRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllTransporterRequest>, I>>(base?: I): QueryAllTransporterRequest {
    return QueryAllTransporterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllTransporterRequest>, I>>(object: I): QueryAllTransporterRequest {
    const message = createBaseQueryAllTransporterRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTransporterResponse(): QueryAllTransporterResponse {
  return { transporter: [], pagination: undefined };
}

export const QueryAllTransporterResponse = {
  encode(message: QueryAllTransporterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transporter) {
      Transporter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTransporterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTransporterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transporter.push(Transporter.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllTransporterResponse {
    return {
      transporter: Array.isArray(object?.transporter)
        ? object.transporter.map((e: any) => Transporter.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllTransporterResponse): unknown {
    const obj: any = {};
    if (message.transporter?.length) {
      obj.transporter = message.transporter.map((e) => Transporter.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllTransporterResponse>, I>>(base?: I): QueryAllTransporterResponse {
    return QueryAllTransporterResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllTransporterResponse>, I>>(object: I): QueryAllTransporterResponse {
    const message = createBaseQueryAllTransporterResponse();
    message.transporter = object.transporter?.map((e) => Transporter.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetSystemInfo4Request(): QueryGetSystemInfo4Request {
  return {};
}

export const QueryGetSystemInfo4Request = {
  encode(_: QueryGetSystemInfo4Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSystemInfo4Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSystemInfo4Request();
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

  fromJSON(_: any): QueryGetSystemInfo4Request {
    return {};
  },

  toJSON(_: QueryGetSystemInfo4Request): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSystemInfo4Request>, I>>(base?: I): QueryGetSystemInfo4Request {
    return QueryGetSystemInfo4Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfo4Request>, I>>(_: I): QueryGetSystemInfo4Request {
    const message = createBaseQueryGetSystemInfo4Request();
    return message;
  },
};

function createBaseQueryGetSystemInfo4Response(): QueryGetSystemInfo4Response {
  return { SystemInfo4: undefined };
}

export const QueryGetSystemInfo4Response = {
  encode(message: QueryGetSystemInfo4Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.SystemInfo4 !== undefined) {
      SystemInfo4.encode(message.SystemInfo4, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSystemInfo4Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSystemInfo4Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.SystemInfo4 = SystemInfo4.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetSystemInfo4Response {
    return { SystemInfo4: isSet(object.SystemInfo4) ? SystemInfo4.fromJSON(object.SystemInfo4) : undefined };
  },

  toJSON(message: QueryGetSystemInfo4Response): unknown {
    const obj: any = {};
    if (message.SystemInfo4 !== undefined) {
      obj.SystemInfo4 = SystemInfo4.toJSON(message.SystemInfo4);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSystemInfo4Response>, I>>(base?: I): QueryGetSystemInfo4Response {
    return QueryGetSystemInfo4Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfo4Response>, I>>(object: I): QueryGetSystemInfo4Response {
    const message = createBaseQueryGetSystemInfo4Response();
    message.SystemInfo4 = (object.SystemInfo4 !== undefined && object.SystemInfo4 !== null)
      ? SystemInfo4.fromPartial(object.SystemInfo4)
      : undefined;
    return message;
  },
};

function createBaseQueryGetTradeRequest(): QueryGetTradeRequest {
  return { tradeid: "" };
}

export const QueryGetTradeRequest = {
  encode(message: QueryGetTradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeid !== "") {
      writer.uint32(10).string(message.tradeid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tradeid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetTradeRequest {
    return { tradeid: isSet(object.tradeid) ? String(object.tradeid) : "" };
  },

  toJSON(message: QueryGetTradeRequest): unknown {
    const obj: any = {};
    if (message.tradeid !== "") {
      obj.tradeid = message.tradeid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetTradeRequest>, I>>(base?: I): QueryGetTradeRequest {
    return QueryGetTradeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetTradeRequest>, I>>(object: I): QueryGetTradeRequest {
    const message = createBaseQueryGetTradeRequest();
    message.tradeid = object.tradeid ?? "";
    return message;
  },
};

function createBaseQueryGetTradeResponse(): QueryGetTradeResponse {
  return { trade: undefined };
}

export const QueryGetTradeResponse = {
  encode(message: QueryGetTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trade !== undefined) {
      Trade.encode(message.trade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trade = Trade.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetTradeResponse {
    return { trade: isSet(object.trade) ? Trade.fromJSON(object.trade) : undefined };
  },

  toJSON(message: QueryGetTradeResponse): unknown {
    const obj: any = {};
    if (message.trade !== undefined) {
      obj.trade = Trade.toJSON(message.trade);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetTradeResponse>, I>>(base?: I): QueryGetTradeResponse {
    return QueryGetTradeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetTradeResponse>, I>>(object: I): QueryGetTradeResponse {
    const message = createBaseQueryGetTradeResponse();
    message.trade = (object.trade !== undefined && object.trade !== null) ? Trade.fromPartial(object.trade) : undefined;
    return message;
  },
};

function createBaseQueryAllTradeRequest(): QueryAllTradeRequest {
  return { pagination: undefined };
}

export const QueryAllTradeRequest = {
  encode(message: QueryAllTradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTradeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllTradeRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllTradeRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllTradeRequest>, I>>(base?: I): QueryAllTradeRequest {
    return QueryAllTradeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllTradeRequest>, I>>(object: I): QueryAllTradeRequest {
    const message = createBaseQueryAllTradeRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTradeResponse(): QueryAllTradeResponse {
  return { trade: [], pagination: undefined };
}

export const QueryAllTradeResponse = {
  encode(message: QueryAllTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.trade) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTradeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trade.push(Trade.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllTradeResponse {
    return {
      trade: Array.isArray(object?.trade) ? object.trade.map((e: any) => Trade.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllTradeResponse): unknown {
    const obj: any = {};
    if (message.trade?.length) {
      obj.trade = message.trade.map((e) => Trade.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllTradeResponse>, I>>(base?: I): QueryAllTradeResponse {
    return QueryAllTradeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllTradeResponse>, I>>(object: I): QueryAllTradeResponse {
    const message = createBaseQueryAllTradeResponse();
    message.trade = object.trade?.map((e) => Trade.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a SystemInfo1 by index. */
  SystemInfo1(request: QueryGetSystemInfo1Request): Promise<QueryGetSystemInfo1Response>;
  /** Queries a SystemInfo2 by index. */
  SystemInfo2(request: QueryGetSystemInfo2Request): Promise<QueryGetSystemInfo2Response>;
  /** Queries a SystemInfo3 by index. */
  SystemInfo3(request: QueryGetSystemInfo3Request): Promise<QueryGetSystemInfo3Response>;
  /** Queries a list of Vendor items. */
  Vendor(request: QueryGetVendorRequest): Promise<QueryGetVendorResponse>;
  VendorAll(request: QueryAllVendorRequest): Promise<QueryAllVendorResponse>;
  /** Queries a list of Purchaser items. */
  Purchaser(request: QueryGetPurchaserRequest): Promise<QueryGetPurchaserResponse>;
  PurchaserAll(request: QueryAllPurchaserRequest): Promise<QueryAllPurchaserResponse>;
  /** Queries a list of Transporter items. */
  Transporter(request: QueryGetTransporterRequest): Promise<QueryGetTransporterResponse>;
  TransporterAll(request: QueryAllTransporterRequest): Promise<QueryAllTransporterResponse>;
  /** Queries a SystemInfo4 by index. */
  SystemInfo4(request: QueryGetSystemInfo4Request): Promise<QueryGetSystemInfo4Response>;
  /** Queries a list of Trade items. */
  Trade(request: QueryGetTradeRequest): Promise<QueryGetTradeResponse>;
  TradeAll(request: QueryAllTradeRequest): Promise<QueryAllTradeResponse>;
}

export const QueryServiceName = "logisticsbeta.logisticsbeta.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.SystemInfo1 = this.SystemInfo1.bind(this);
    this.SystemInfo2 = this.SystemInfo2.bind(this);
    this.SystemInfo3 = this.SystemInfo3.bind(this);
    this.Vendor = this.Vendor.bind(this);
    this.VendorAll = this.VendorAll.bind(this);
    this.Purchaser = this.Purchaser.bind(this);
    this.PurchaserAll = this.PurchaserAll.bind(this);
    this.Transporter = this.Transporter.bind(this);
    this.TransporterAll = this.TransporterAll.bind(this);
    this.SystemInfo4 = this.SystemInfo4.bind(this);
    this.Trade = this.Trade.bind(this);
    this.TradeAll = this.TradeAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  SystemInfo1(request: QueryGetSystemInfo1Request): Promise<QueryGetSystemInfo1Response> {
    const data = QueryGetSystemInfo1Request.encode(request).finish();
    const promise = this.rpc.request(this.service, "SystemInfo1", data);
    return promise.then((data) => QueryGetSystemInfo1Response.decode(_m0.Reader.create(data)));
  }

  SystemInfo2(request: QueryGetSystemInfo2Request): Promise<QueryGetSystemInfo2Response> {
    const data = QueryGetSystemInfo2Request.encode(request).finish();
    const promise = this.rpc.request(this.service, "SystemInfo2", data);
    return promise.then((data) => QueryGetSystemInfo2Response.decode(_m0.Reader.create(data)));
  }

  SystemInfo3(request: QueryGetSystemInfo3Request): Promise<QueryGetSystemInfo3Response> {
    const data = QueryGetSystemInfo3Request.encode(request).finish();
    const promise = this.rpc.request(this.service, "SystemInfo3", data);
    return promise.then((data) => QueryGetSystemInfo3Response.decode(_m0.Reader.create(data)));
  }

  Vendor(request: QueryGetVendorRequest): Promise<QueryGetVendorResponse> {
    const data = QueryGetVendorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Vendor", data);
    return promise.then((data) => QueryGetVendorResponse.decode(_m0.Reader.create(data)));
  }

  VendorAll(request: QueryAllVendorRequest): Promise<QueryAllVendorResponse> {
    const data = QueryAllVendorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "VendorAll", data);
    return promise.then((data) => QueryAllVendorResponse.decode(_m0.Reader.create(data)));
  }

  Purchaser(request: QueryGetPurchaserRequest): Promise<QueryGetPurchaserResponse> {
    const data = QueryGetPurchaserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Purchaser", data);
    return promise.then((data) => QueryGetPurchaserResponse.decode(_m0.Reader.create(data)));
  }

  PurchaserAll(request: QueryAllPurchaserRequest): Promise<QueryAllPurchaserResponse> {
    const data = QueryAllPurchaserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PurchaserAll", data);
    return promise.then((data) => QueryAllPurchaserResponse.decode(_m0.Reader.create(data)));
  }

  Transporter(request: QueryGetTransporterRequest): Promise<QueryGetTransporterResponse> {
    const data = QueryGetTransporterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Transporter", data);
    return promise.then((data) => QueryGetTransporterResponse.decode(_m0.Reader.create(data)));
  }

  TransporterAll(request: QueryAllTransporterRequest): Promise<QueryAllTransporterResponse> {
    const data = QueryAllTransporterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TransporterAll", data);
    return promise.then((data) => QueryAllTransporterResponse.decode(_m0.Reader.create(data)));
  }

  SystemInfo4(request: QueryGetSystemInfo4Request): Promise<QueryGetSystemInfo4Response> {
    const data = QueryGetSystemInfo4Request.encode(request).finish();
    const promise = this.rpc.request(this.service, "SystemInfo4", data);
    return promise.then((data) => QueryGetSystemInfo4Response.decode(_m0.Reader.create(data)));
  }

  Trade(request: QueryGetTradeRequest): Promise<QueryGetTradeResponse> {
    const data = QueryGetTradeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Trade", data);
    return promise.then((data) => QueryGetTradeResponse.decode(_m0.Reader.create(data)));
  }

  TradeAll(request: QueryAllTradeRequest): Promise<QueryAllTradeResponse> {
    const data = QueryAllTradeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TradeAll", data);
    return promise.then((data) => QueryAllTradeResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
