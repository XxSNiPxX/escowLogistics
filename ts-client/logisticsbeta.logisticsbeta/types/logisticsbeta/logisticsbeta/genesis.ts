/* eslint-disable */
import _m0 from "protobufjs/minimal";
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

/** GenesisState defines the logisticsbeta module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params | undefined;
  systemInfo1: SystemInfo1 | undefined;
  systemInfo2: SystemInfo2 | undefined;
  systemInfo3: SystemInfo3 | undefined;
  vendorList: Vendor[];
  purchaserList: Purchaser[];
  transporterList: Transporter[];
  systemInfo4: SystemInfo4 | undefined;
  tradeList: Trade[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    systemInfo1: undefined,
    systemInfo2: undefined,
    systemInfo3: undefined,
    vendorList: [],
    purchaserList: [],
    transporterList: [],
    systemInfo4: undefined,
    tradeList: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.systemInfo1 !== undefined) {
      SystemInfo1.encode(message.systemInfo1, writer.uint32(18).fork()).ldelim();
    }
    if (message.systemInfo2 !== undefined) {
      SystemInfo2.encode(message.systemInfo2, writer.uint32(26).fork()).ldelim();
    }
    if (message.systemInfo3 !== undefined) {
      SystemInfo3.encode(message.systemInfo3, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.vendorList) {
      Vendor.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.purchaserList) {
      Purchaser.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.transporterList) {
      Transporter.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.systemInfo4 !== undefined) {
      SystemInfo4.encode(message.systemInfo4, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.tradeList) {
      Trade.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.systemInfo1 = SystemInfo1.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.systemInfo2 = SystemInfo2.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.systemInfo3 = SystemInfo3.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.vendorList.push(Vendor.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.purchaserList.push(Purchaser.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.transporterList.push(Transporter.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.systemInfo4 = SystemInfo4.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.tradeList.push(Trade.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      systemInfo1: isSet(object.systemInfo1) ? SystemInfo1.fromJSON(object.systemInfo1) : undefined,
      systemInfo2: isSet(object.systemInfo2) ? SystemInfo2.fromJSON(object.systemInfo2) : undefined,
      systemInfo3: isSet(object.systemInfo3) ? SystemInfo3.fromJSON(object.systemInfo3) : undefined,
      vendorList: Array.isArray(object?.vendorList) ? object.vendorList.map((e: any) => Vendor.fromJSON(e)) : [],
      purchaserList: Array.isArray(object?.purchaserList)
        ? object.purchaserList.map((e: any) => Purchaser.fromJSON(e))
        : [],
      transporterList: Array.isArray(object?.transporterList)
        ? object.transporterList.map((e: any) => Transporter.fromJSON(e))
        : [],
      systemInfo4: isSet(object.systemInfo4) ? SystemInfo4.fromJSON(object.systemInfo4) : undefined,
      tradeList: Array.isArray(object?.tradeList) ? object.tradeList.map((e: any) => Trade.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.systemInfo1 !== undefined) {
      obj.systemInfo1 = SystemInfo1.toJSON(message.systemInfo1);
    }
    if (message.systemInfo2 !== undefined) {
      obj.systemInfo2 = SystemInfo2.toJSON(message.systemInfo2);
    }
    if (message.systemInfo3 !== undefined) {
      obj.systemInfo3 = SystemInfo3.toJSON(message.systemInfo3);
    }
    if (message.vendorList?.length) {
      obj.vendorList = message.vendorList.map((e) => Vendor.toJSON(e));
    }
    if (message.purchaserList?.length) {
      obj.purchaserList = message.purchaserList.map((e) => Purchaser.toJSON(e));
    }
    if (message.transporterList?.length) {
      obj.transporterList = message.transporterList.map((e) => Transporter.toJSON(e));
    }
    if (message.systemInfo4 !== undefined) {
      obj.systemInfo4 = SystemInfo4.toJSON(message.systemInfo4);
    }
    if (message.tradeList?.length) {
      obj.tradeList = message.tradeList.map((e) => Trade.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.systemInfo1 = (object.systemInfo1 !== undefined && object.systemInfo1 !== null)
      ? SystemInfo1.fromPartial(object.systemInfo1)
      : undefined;
    message.systemInfo2 = (object.systemInfo2 !== undefined && object.systemInfo2 !== null)
      ? SystemInfo2.fromPartial(object.systemInfo2)
      : undefined;
    message.systemInfo3 = (object.systemInfo3 !== undefined && object.systemInfo3 !== null)
      ? SystemInfo3.fromPartial(object.systemInfo3)
      : undefined;
    message.vendorList = object.vendorList?.map((e) => Vendor.fromPartial(e)) || [];
    message.purchaserList = object.purchaserList?.map((e) => Purchaser.fromPartial(e)) || [];
    message.transporterList = object.transporterList?.map((e) => Transporter.fromPartial(e)) || [];
    message.systemInfo4 = (object.systemInfo4 !== undefined && object.systemInfo4 !== null)
      ? SystemInfo4.fromPartial(object.systemInfo4)
      : undefined;
    message.tradeList = object.tradeList?.map((e) => Trade.fromPartial(e)) || [];
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
