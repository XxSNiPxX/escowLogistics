/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "logisticsbeta.logisticsbeta";

export interface SystemInfo2 {
  nextVendor: number;
}

function createBaseSystemInfo2(): SystemInfo2 {
  return { nextVendor: 0 };
}

export const SystemInfo2 = {
  encode(message: SystemInfo2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextVendor !== 0) {
      writer.uint32(8).uint64(message.nextVendor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemInfo2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemInfo2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nextVendor = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SystemInfo2 {
    return { nextVendor: isSet(object.nextVendor) ? Number(object.nextVendor) : 0 };
  },

  toJSON(message: SystemInfo2): unknown {
    const obj: any = {};
    if (message.nextVendor !== 0) {
      obj.nextVendor = Math.round(message.nextVendor);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SystemInfo2>, I>>(base?: I): SystemInfo2 {
    return SystemInfo2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SystemInfo2>, I>>(object: I): SystemInfo2 {
    const message = createBaseSystemInfo2();
    message.nextVendor = object.nextVendor ?? 0;
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
