/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "logisticsbeta.logisticsbeta";

export interface Vendor {
  vendorid: string;
  name: string;
  commodity: string;
  location: string;
  walletId: string;
  offchainId: string;
}

function createBaseVendor(): Vendor {
  return { vendorid: "", name: "", commodity: "", location: "", walletId: "", offchainId: "" };
}

export const Vendor = {
  encode(message: Vendor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vendorid !== "") {
      writer.uint32(10).string(message.vendorid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.commodity !== "") {
      writer.uint32(26).string(message.commodity);
    }
    if (message.location !== "") {
      writer.uint32(34).string(message.location);
    }
    if (message.walletId !== "") {
      writer.uint32(42).string(message.walletId);
    }
    if (message.offchainId !== "") {
      writer.uint32(50).string(message.offchainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vendor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVendor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vendorid = reader.string();
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

          message.commodity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.location = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.walletId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.offchainId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Vendor {
    return {
      vendorid: isSet(object.vendorid) ? String(object.vendorid) : "",
      name: isSet(object.name) ? String(object.name) : "",
      commodity: isSet(object.commodity) ? String(object.commodity) : "",
      location: isSet(object.location) ? String(object.location) : "",
      walletId: isSet(object.walletId) ? String(object.walletId) : "",
      offchainId: isSet(object.offchainId) ? String(object.offchainId) : "",
    };
  },

  toJSON(message: Vendor): unknown {
    const obj: any = {};
    if (message.vendorid !== "") {
      obj.vendorid = message.vendorid;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.commodity !== "") {
      obj.commodity = message.commodity;
    }
    if (message.location !== "") {
      obj.location = message.location;
    }
    if (message.walletId !== "") {
      obj.walletId = message.walletId;
    }
    if (message.offchainId !== "") {
      obj.offchainId = message.offchainId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Vendor>, I>>(base?: I): Vendor {
    return Vendor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Vendor>, I>>(object: I): Vendor {
    const message = createBaseVendor();
    message.vendorid = object.vendorid ?? "";
    message.name = object.name ?? "";
    message.commodity = object.commodity ?? "";
    message.location = object.location ?? "";
    message.walletId = object.walletId ?? "";
    message.offchainId = object.offchainId ?? "";
    return message;
  },
};

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
