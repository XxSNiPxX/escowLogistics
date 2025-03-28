/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "logisticsbeta.logisticsbeta";

export interface Transporter {
  transporterid: string;
  active: string;
  walletId: string;
  offchainId: string;
  escrowed: number;
}

function createBaseTransporter(): Transporter {
  return { transporterid: "", active: "", walletId: "", offchainId: "", escrowed: 0 };
}

export const Transporter = {
  encode(message: Transporter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transporterid !== "") {
      writer.uint32(10).string(message.transporterid);
    }
    if (message.active !== "") {
      writer.uint32(18).string(message.active);
    }
    if (message.walletId !== "") {
      writer.uint32(26).string(message.walletId);
    }
    if (message.offchainId !== "") {
      writer.uint32(34).string(message.offchainId);
    }
    if (message.escrowed !== 0) {
      writer.uint32(40).uint64(message.escrowed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transporter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransporter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transporterid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.active = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.walletId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.offchainId = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.escrowed = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transporter {
    return {
      transporterid: isSet(object.transporterid) ? String(object.transporterid) : "",
      active: isSet(object.active) ? String(object.active) : "",
      walletId: isSet(object.walletId) ? String(object.walletId) : "",
      offchainId: isSet(object.offchainId) ? String(object.offchainId) : "",
      escrowed: isSet(object.escrowed) ? Number(object.escrowed) : 0,
    };
  },

  toJSON(message: Transporter): unknown {
    const obj: any = {};
    if (message.transporterid !== "") {
      obj.transporterid = message.transporterid;
    }
    if (message.active !== "") {
      obj.active = message.active;
    }
    if (message.walletId !== "") {
      obj.walletId = message.walletId;
    }
    if (message.offchainId !== "") {
      obj.offchainId = message.offchainId;
    }
    if (message.escrowed !== 0) {
      obj.escrowed = Math.round(message.escrowed);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Transporter>, I>>(base?: I): Transporter {
    return Transporter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Transporter>, I>>(object: I): Transporter {
    const message = createBaseTransporter();
    message.transporterid = object.transporterid ?? "";
    message.active = object.active ?? "";
    message.walletId = object.walletId ?? "";
    message.offchainId = object.offchainId ?? "";
    message.escrowed = object.escrowed ?? 0;
    return message;
  },
};

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
