/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "logisticsbeta.logisticsbeta";

export interface Trade {
  tradeid: string;
  tradeState: string;
  purchaserId: number;
  vendorId: number;
  transportId: number;
  commodity: string;
  purchaserLocation: string;
  vendorLocation: string;
  commodityPrice: number;
  transportPrice: number;
  vendorTradePending: boolean;
  vendorTradeAccepted: boolean;
  vendorTradeRejected: boolean;
  vendorCommodityDispatched: boolean;
  transporterTradePending: boolean;
  transporterTradeAccepted: boolean;
  transporterTradeRejected: boolean;
  transporterVendorReached: boolean;
  transporterCommodityCollected: boolean;
  transporterPurchaserReached: boolean;
  transporterCommodityDistributed: boolean;
  deadline: string;
}

function createBaseTrade(): Trade {
  return {
    tradeid: "",
    tradeState: "",
    purchaserId: 0,
    vendorId: 0,
    transportId: 0,
    commodity: "",
    purchaserLocation: "",
    vendorLocation: "",
    commodityPrice: 0,
    transportPrice: 0,
    vendorTradePending: false,
    vendorTradeAccepted: false,
    vendorTradeRejected: false,
    vendorCommodityDispatched: false,
    transporterTradePending: false,
    transporterTradeAccepted: false,
    transporterTradeRejected: false,
    transporterVendorReached: false,
    transporterCommodityCollected: false,
    transporterPurchaserReached: false,
    transporterCommodityDistributed: false,
    deadline: "",
  };
}

export const Trade = {
  encode(message: Trade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeid !== "") {
      writer.uint32(10).string(message.tradeid);
    }
    if (message.tradeState !== "") {
      writer.uint32(18).string(message.tradeState);
    }
    if (message.purchaserId !== 0) {
      writer.uint32(24).uint64(message.purchaserId);
    }
    if (message.vendorId !== 0) {
      writer.uint32(32).uint64(message.vendorId);
    }
    if (message.transportId !== 0) {
      writer.uint32(40).uint64(message.transportId);
    }
    if (message.commodity !== "") {
      writer.uint32(50).string(message.commodity);
    }
    if (message.purchaserLocation !== "") {
      writer.uint32(58).string(message.purchaserLocation);
    }
    if (message.vendorLocation !== "") {
      writer.uint32(66).string(message.vendorLocation);
    }
    if (message.commodityPrice !== 0) {
      writer.uint32(72).uint64(message.commodityPrice);
    }
    if (message.transportPrice !== 0) {
      writer.uint32(80).uint64(message.transportPrice);
    }
    if (message.vendorTradePending === true) {
      writer.uint32(88).bool(message.vendorTradePending);
    }
    if (message.vendorTradeAccepted === true) {
      writer.uint32(96).bool(message.vendorTradeAccepted);
    }
    if (message.vendorTradeRejected === true) {
      writer.uint32(104).bool(message.vendorTradeRejected);
    }
    if (message.vendorCommodityDispatched === true) {
      writer.uint32(112).bool(message.vendorCommodityDispatched);
    }
    if (message.transporterTradePending === true) {
      writer.uint32(120).bool(message.transporterTradePending);
    }
    if (message.transporterTradeAccepted === true) {
      writer.uint32(128).bool(message.transporterTradeAccepted);
    }
    if (message.transporterTradeRejected === true) {
      writer.uint32(136).bool(message.transporterTradeRejected);
    }
    if (message.transporterVendorReached === true) {
      writer.uint32(144).bool(message.transporterVendorReached);
    }
    if (message.transporterCommodityCollected === true) {
      writer.uint32(152).bool(message.transporterCommodityCollected);
    }
    if (message.transporterPurchaserReached === true) {
      writer.uint32(160).bool(message.transporterPurchaserReached);
    }
    if (message.transporterCommodityDistributed === true) {
      writer.uint32(168).bool(message.transporterCommodityDistributed);
    }
    if (message.deadline !== "") {
      writer.uint32(178).string(message.deadline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tradeid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tradeState = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.purchaserId = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.vendorId = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.transportId = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.commodity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.purchaserLocation = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.vendorLocation = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.commodityPrice = longToNumber(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.transportPrice = longToNumber(reader.uint64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.vendorTradePending = reader.bool();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.vendorTradeAccepted = reader.bool();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.vendorTradeRejected = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.vendorCommodityDispatched = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.transporterTradePending = reader.bool();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.transporterTradeAccepted = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.transporterTradeRejected = reader.bool();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.transporterVendorReached = reader.bool();
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.transporterCommodityCollected = reader.bool();
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.transporterPurchaserReached = reader.bool();
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.transporterCommodityDistributed = reader.bool();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.deadline = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trade {
    return {
      tradeid: isSet(object.tradeid) ? String(object.tradeid) : "",
      tradeState: isSet(object.tradeState) ? String(object.tradeState) : "",
      purchaserId: isSet(object.purchaserId) ? Number(object.purchaserId) : 0,
      vendorId: isSet(object.vendorId) ? Number(object.vendorId) : 0,
      transportId: isSet(object.transportId) ? Number(object.transportId) : 0,
      commodity: isSet(object.commodity) ? String(object.commodity) : "",
      purchaserLocation: isSet(object.purchaserLocation) ? String(object.purchaserLocation) : "",
      vendorLocation: isSet(object.vendorLocation) ? String(object.vendorLocation) : "",
      commodityPrice: isSet(object.commodityPrice) ? Number(object.commodityPrice) : 0,
      transportPrice: isSet(object.transportPrice) ? Number(object.transportPrice) : 0,
      vendorTradePending: isSet(object.vendorTradePending) ? Boolean(object.vendorTradePending) : false,
      vendorTradeAccepted: isSet(object.vendorTradeAccepted) ? Boolean(object.vendorTradeAccepted) : false,
      vendorTradeRejected: isSet(object.vendorTradeRejected) ? Boolean(object.vendorTradeRejected) : false,
      vendorCommodityDispatched: isSet(object.vendorCommodityDispatched)
        ? Boolean(object.vendorCommodityDispatched)
        : false,
      transporterTradePending: isSet(object.transporterTradePending) ? Boolean(object.transporterTradePending) : false,
      transporterTradeAccepted: isSet(object.transporterTradeAccepted)
        ? Boolean(object.transporterTradeAccepted)
        : false,
      transporterTradeRejected: isSet(object.transporterTradeRejected)
        ? Boolean(object.transporterTradeRejected)
        : false,
      transporterVendorReached: isSet(object.transporterVendorReached)
        ? Boolean(object.transporterVendorReached)
        : false,
      transporterCommodityCollected: isSet(object.transporterCommodityCollected)
        ? Boolean(object.transporterCommodityCollected)
        : false,
      transporterPurchaserReached: isSet(object.transporterPurchaserReached)
        ? Boolean(object.transporterPurchaserReached)
        : false,
      transporterCommodityDistributed: isSet(object.transporterCommodityDistributed)
        ? Boolean(object.transporterCommodityDistributed)
        : false,
      deadline: isSet(object.deadline) ? String(object.deadline) : "",
    };
  },

  toJSON(message: Trade): unknown {
    const obj: any = {};
    if (message.tradeid !== "") {
      obj.tradeid = message.tradeid;
    }
    if (message.tradeState !== "") {
      obj.tradeState = message.tradeState;
    }
    if (message.purchaserId !== 0) {
      obj.purchaserId = Math.round(message.purchaserId);
    }
    if (message.vendorId !== 0) {
      obj.vendorId = Math.round(message.vendorId);
    }
    if (message.transportId !== 0) {
      obj.transportId = Math.round(message.transportId);
    }
    if (message.commodity !== "") {
      obj.commodity = message.commodity;
    }
    if (message.purchaserLocation !== "") {
      obj.purchaserLocation = message.purchaserLocation;
    }
    if (message.vendorLocation !== "") {
      obj.vendorLocation = message.vendorLocation;
    }
    if (message.commodityPrice !== 0) {
      obj.commodityPrice = Math.round(message.commodityPrice);
    }
    if (message.transportPrice !== 0) {
      obj.transportPrice = Math.round(message.transportPrice);
    }
    if (message.vendorTradePending === true) {
      obj.vendorTradePending = message.vendorTradePending;
    }
    if (message.vendorTradeAccepted === true) {
      obj.vendorTradeAccepted = message.vendorTradeAccepted;
    }
    if (message.vendorTradeRejected === true) {
      obj.vendorTradeRejected = message.vendorTradeRejected;
    }
    if (message.vendorCommodityDispatched === true) {
      obj.vendorCommodityDispatched = message.vendorCommodityDispatched;
    }
    if (message.transporterTradePending === true) {
      obj.transporterTradePending = message.transporterTradePending;
    }
    if (message.transporterTradeAccepted === true) {
      obj.transporterTradeAccepted = message.transporterTradeAccepted;
    }
    if (message.transporterTradeRejected === true) {
      obj.transporterTradeRejected = message.transporterTradeRejected;
    }
    if (message.transporterVendorReached === true) {
      obj.transporterVendorReached = message.transporterVendorReached;
    }
    if (message.transporterCommodityCollected === true) {
      obj.transporterCommodityCollected = message.transporterCommodityCollected;
    }
    if (message.transporterPurchaserReached === true) {
      obj.transporterPurchaserReached = message.transporterPurchaserReached;
    }
    if (message.transporterCommodityDistributed === true) {
      obj.transporterCommodityDistributed = message.transporterCommodityDistributed;
    }
    if (message.deadline !== "") {
      obj.deadline = message.deadline;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trade>, I>>(base?: I): Trade {
    return Trade.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trade>, I>>(object: I): Trade {
    const message = createBaseTrade();
    message.tradeid = object.tradeid ?? "";
    message.tradeState = object.tradeState ?? "";
    message.purchaserId = object.purchaserId ?? 0;
    message.vendorId = object.vendorId ?? 0;
    message.transportId = object.transportId ?? 0;
    message.commodity = object.commodity ?? "";
    message.purchaserLocation = object.purchaserLocation ?? "";
    message.vendorLocation = object.vendorLocation ?? "";
    message.commodityPrice = object.commodityPrice ?? 0;
    message.transportPrice = object.transportPrice ?? 0;
    message.vendorTradePending = object.vendorTradePending ?? false;
    message.vendorTradeAccepted = object.vendorTradeAccepted ?? false;
    message.vendorTradeRejected = object.vendorTradeRejected ?? false;
    message.vendorCommodityDispatched = object.vendorCommodityDispatched ?? false;
    message.transporterTradePending = object.transporterTradePending ?? false;
    message.transporterTradeAccepted = object.transporterTradeAccepted ?? false;
    message.transporterTradeRejected = object.transporterTradeRejected ?? false;
    message.transporterVendorReached = object.transporterVendorReached ?? false;
    message.transporterCommodityCollected = object.transporterCommodityCollected ?? false;
    message.transporterPurchaserReached = object.transporterPurchaserReached ?? false;
    message.transporterCommodityDistributed = object.transporterCommodityDistributed ?? false;
    message.deadline = object.deadline ?? "";
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
