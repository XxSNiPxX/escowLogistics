/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "logisticsbeta.logisticsbeta";

export interface SystemInfo1 {
  nextPurchaser: number;
}

function createBaseSystemInfo1(): SystemInfo1 {
  return { nextPurchaser: 0 };
}

export const SystemInfo1 = {
  encode(message: SystemInfo1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextPurchaser !== 0) {
      writer.uint32(8).uint64(message.nextPurchaser);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemInfo1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemInfo1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nextPurchaser = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SystemInfo1 {
    return { nextPurchaser: isSet(object.nextPurchaser) ? Number(object.nextPurchaser) : 0 };
  },

  toJSON(message: SystemInfo1): unknown {
    const obj: any = {};
    if (message.nextPurchaser !== 0) {
      obj.nextPurchaser = Math.round(message.nextPurchaser);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SystemInfo1>, I>>(base?: I): SystemInfo1 {
    return SystemInfo1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SystemInfo1>, I>>(object: I): SystemInfo1 {
    const message = createBaseSystemInfo1();
    message.nextPurchaser = object.nextPurchaser ?? 0;
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
