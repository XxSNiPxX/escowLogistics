/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Any {
  "@type"?: string;
}

export interface Status {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: { "@type"?: string }[];
}

export interface PageRequest {
  /** @format byte */
  key?: string;

  /** @format uint64 */
  offset?: string;

  /** @format uint64 */
  limit?: string;
  count_total?: boolean;
  reverse?: boolean;
}

export interface PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export interface QueryAllPurchaserResponse {
  purchaser?: { purchaserid?: string; active?: string; location?: string; walletId?: string; offchainId?: string }[];
  pagination?: { next_key?: string; total?: string };
}

export interface QueryAllTradeResponse {
  trade?: {
    tradeid?: string;
    tradeState?: string;
    purchaserId?: string;
    vendorId?: string;
    transportId?: string;
    commodity?: string;
    purchaserLocation?: string;
    vendorLocation?: string;
    commodityPrice?: string;
    transportPrice?: string;
    vendorTradePending?: boolean;
    vendorTradeAccepted?: boolean;
    vendorTradeRejected?: boolean;
    vendorCommodityDispatched?: boolean;
    transporterTradePending?: boolean;
    transporterTradeAccepted?: boolean;
    transporterTradeRejected?: boolean;
    transporterVendorReached?: boolean;
    transporterCommodityCollected?: boolean;
    transporterPurchaserReached?: boolean;
    transporterCommodityDistributed?: boolean;
    deadline?: string;
  }[];
  pagination?: { next_key?: string; total?: string };
}

export interface QueryAllTransporterResponse {
  transporter?: {
    transporterid?: string;
    active?: string;
    walletId?: string;
    offchainId?: string;
    escrowed?: string;
  }[];
  pagination?: { next_key?: string; total?: string };
}

export interface QueryAllVendorResponse {
  vendor?: {
    vendorid?: string;
    name?: string;
    commodity?: string;
    location?: string;
    walletId?: string;
    offchainId?: string;
  }[];
  pagination?: { next_key?: string; total?: string };
}

export interface QueryGetPurchaserResponse {
  purchaser?: { purchaserid?: string; active?: string; location?: string; walletId?: string; offchainId?: string };
}

export interface QueryGetSystemInfo1Response {
  SystemInfo1?: { nextPurchaser?: string };
}

export interface QueryGetSystemInfo2Response {
  SystemInfo2?: { nextVendor?: string };
}

export interface QueryGetSystemInfo3Response {
  SystemInfo3?: { nextTransporter?: string };
}

export interface QueryGetSystemInfo4Response {
  SystemInfo4?: { nextTrade?: string };
}

export interface QueryGetTradeResponse {
  trade?: {
    tradeid?: string;
    tradeState?: string;
    purchaserId?: string;
    vendorId?: string;
    transportId?: string;
    commodity?: string;
    purchaserLocation?: string;
    vendorLocation?: string;
    commodityPrice?: string;
    transportPrice?: string;
    vendorTradePending?: boolean;
    vendorTradeAccepted?: boolean;
    vendorTradeRejected?: boolean;
    vendorCommodityDispatched?: boolean;
    transporterTradePending?: boolean;
    transporterTradeAccepted?: boolean;
    transporterTradeRejected?: boolean;
    transporterVendorReached?: boolean;
    transporterCommodityCollected?: boolean;
    transporterPurchaserReached?: boolean;
    transporterCommodityDistributed?: boolean;
    deadline?: string;
  };
}

export interface QueryGetTransporterResponse {
  transporter?: { transporterid?: string; active?: string; walletId?: string; offchainId?: string; escrowed?: string };
}

export interface QueryGetVendorResponse {
  vendor?: {
    vendorid?: string;
    name?: string;
    commodity?: string;
    location?: string;
    walletId?: string;
    offchainId?: string;
  };
}

export interface QueryParamsResponse {
  params?: object;
}

export type LogisticsbetaParams = object;

export interface LogisticsbetaPurchaser {
  purchaserid?: string;
  active?: string;
  location?: string;
  walletId?: string;
  offchainId?: string;
}

export interface LogisticsbetaSystemInfo1 {
  /** @format uint64 */
  nextPurchaser?: string;
}

export interface LogisticsbetaSystemInfo2 {
  /** @format uint64 */
  nextVendor?: string;
}

export interface LogisticsbetaSystemInfo3 {
  /** @format uint64 */
  nextTransporter?: string;
}

export interface LogisticsbetaSystemInfo4 {
  /** @format uint64 */
  nextTrade?: string;
}

export interface LogisticsbetaTrade {
  tradeid?: string;
  tradeState?: string;

  /** @format uint64 */
  purchaserId?: string;

  /** @format uint64 */
  vendorId?: string;

  /** @format uint64 */
  transportId?: string;
  commodity?: string;
  purchaserLocation?: string;
  vendorLocation?: string;

  /** @format uint64 */
  commodityPrice?: string;

  /** @format uint64 */
  transportPrice?: string;
  vendorTradePending?: boolean;
  vendorTradeAccepted?: boolean;
  vendorTradeRejected?: boolean;
  vendorCommodityDispatched?: boolean;
  transporterTradePending?: boolean;
  transporterTradeAccepted?: boolean;
  transporterTradeRejected?: boolean;
  transporterVendorReached?: boolean;
  transporterCommodityCollected?: boolean;
  transporterPurchaserReached?: boolean;
  transporterCommodityDistributed?: boolean;
  deadline?: string;
}

export interface LogisticsbetaTransporter {
  transporterid?: string;
  active?: string;
  walletId?: string;
  offchainId?: string;

  /** @format uint64 */
  escrowed?: string;
}

export interface LogisticsbetaVendor {
  vendorid?: string;
  name?: string;
  commodity?: string;
  location?: string;
  walletId?: string;
  offchainId?: string;
}

export interface MsgCreatePurchaserResponse {
  purchaserIndex?: string;
}

export interface MsgCreateTradeResponse {
  tradeIndex?: string;
}

export interface MsgCreateTransporterPurchaserReachedResponse {
  tradeIndex?: string;
}

export interface MsgCreateTransporterResponse {
  transporterIndex?: string;
}

export interface MsgCreateTransporterTradeAcceptedResponse {
  tradeIndex?: string;
}

export interface MsgCreateTransporterTradeRejectedResponse {
  tradeIndex?: string;
}

export interface MsgCreateTransporterVendorReachedResponse {
  tradeIndex?: string;
}

export interface MsgCreateVendorResponse {
  vendorIndex?: string;
}

export interface MsgCreateVendorTradeAcceptResponse {
  tradeIndex?: string;
}

export interface MsgCreateVendorTradeRejectResponse {
  tradeIndex?: string;
}

export type MsgUpdateParamsResponse = object;

export type Params = object;

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title HTTP API Console logisticsbeta.logisticsbeta
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @request GET:/XxSNiPxX/logisticsBeta/logisticsbeta/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<{ params?: object }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/XxSNiPxX/logisticsBeta/logisticsbeta/params`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPurchaserAll
   * @request GET:/XxSNiPxX/logisticsBeta/logisticsbeta/purchaser
   */
  queryPurchaserAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        purchaser?: {
          purchaserid?: string;
          active?: string;
          location?: string;
          walletId?: string;
          offchainId?: string;
        }[];
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/XxSNiPxX/logisticsBeta/logisticsbeta/purchaser`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPurchaser
   * @request GET:/XxSNiPxX/logisticsBeta/logisticsbeta/purchaser/{purchaserid}
   */
  queryPurchaser = (purchaserid: string, params: RequestParams = {}) =>
    this.request<
      {
        purchaser?: {
          purchaserid?: string;
          active?: string;
          location?: string;
          walletId?: string;
          offchainId?: string;
        };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/XxSNiPxX/logisticsBeta/logisticsbeta/purchaser/${purchaserid}`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySystemInfo1
   * @request GET:/XxSNiPxX/logisticsBeta/logisticsbeta/system_info_1
   */
  querySystemInfo1 = (params: RequestParams = {}) =>
    this.request<
      { SystemInfo1?: { nextPurchaser?: string } },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/XxSNiPxX/logisticsBeta/logisticsbeta/system_info_1`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySystemInfo2
   * @request GET:/XxSNiPxX/logisticsBeta/logisticsbeta/system_info_2
   */
  querySystemInfo2 = (params: RequestParams = {}) =>
    this.request<
      { SystemInfo2?: { nextVendor?: string } },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/XxSNiPxX/logisticsBeta/logisticsbeta/system_info_2`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySystemInfo3
   * @request GET:/XxSNiPxX/logisticsBeta/logisticsbeta/system_info_3
   */
  querySystemInfo3 = (params: RequestParams = {}) =>
    this.request<
      { SystemInfo3?: { nextTransporter?: string } },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/XxSNiPxX/logisticsBeta/logisticsbeta/system_info_3`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySystemInfo4
   * @request GET:/XxSNiPxX/logisticsBeta/logisticsbeta/system_info_4
   */
  querySystemInfo4 = (params: RequestParams = {}) =>
    this.request<
      { SystemInfo4?: { nextTrade?: string } },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/XxSNiPxX/logisticsBeta/logisticsbeta/system_info_4`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTradeAll
   * @request GET:/XxSNiPxX/logisticsBeta/logisticsbeta/trade
   */
  queryTradeAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        trade?: {
          tradeid?: string;
          tradeState?: string;
          purchaserId?: string;
          vendorId?: string;
          transportId?: string;
          commodity?: string;
          purchaserLocation?: string;
          vendorLocation?: string;
          commodityPrice?: string;
          transportPrice?: string;
          vendorTradePending?: boolean;
          vendorTradeAccepted?: boolean;
          vendorTradeRejected?: boolean;
          vendorCommodityDispatched?: boolean;
          transporterTradePending?: boolean;
          transporterTradeAccepted?: boolean;
          transporterTradeRejected?: boolean;
          transporterVendorReached?: boolean;
          transporterCommodityCollected?: boolean;
          transporterPurchaserReached?: boolean;
          transporterCommodityDistributed?: boolean;
          deadline?: string;
        }[];
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/XxSNiPxX/logisticsBeta/logisticsbeta/trade`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTrade
   * @request GET:/XxSNiPxX/logisticsBeta/logisticsbeta/trade/{tradeid}
   */
  queryTrade = (tradeid: string, params: RequestParams = {}) =>
    this.request<
      {
        trade?: {
          tradeid?: string;
          tradeState?: string;
          purchaserId?: string;
          vendorId?: string;
          transportId?: string;
          commodity?: string;
          purchaserLocation?: string;
          vendorLocation?: string;
          commodityPrice?: string;
          transportPrice?: string;
          vendorTradePending?: boolean;
          vendorTradeAccepted?: boolean;
          vendorTradeRejected?: boolean;
          vendorCommodityDispatched?: boolean;
          transporterTradePending?: boolean;
          transporterTradeAccepted?: boolean;
          transporterTradeRejected?: boolean;
          transporterVendorReached?: boolean;
          transporterCommodityCollected?: boolean;
          transporterPurchaserReached?: boolean;
          transporterCommodityDistributed?: boolean;
          deadline?: string;
        };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/XxSNiPxX/logisticsBeta/logisticsbeta/trade/${tradeid}`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTransporterAll
   * @request GET:/XxSNiPxX/logisticsBeta/logisticsbeta/transporter
   */
  queryTransporterAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        transporter?: {
          transporterid?: string;
          active?: string;
          walletId?: string;
          offchainId?: string;
          escrowed?: string;
        }[];
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/XxSNiPxX/logisticsBeta/logisticsbeta/transporter`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTransporter
   * @request GET:/XxSNiPxX/logisticsBeta/logisticsbeta/transporter/{transporterid}
   */
  queryTransporter = (transporterid: string, params: RequestParams = {}) =>
    this.request<
      {
        transporter?: {
          transporterid?: string;
          active?: string;
          walletId?: string;
          offchainId?: string;
          escrowed?: string;
        };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/XxSNiPxX/logisticsBeta/logisticsbeta/transporter/${transporterid}`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVendorAll
   * @request GET:/XxSNiPxX/logisticsBeta/logisticsbeta/vendor
   */
  queryVendorAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        vendor?: {
          vendorid?: string;
          name?: string;
          commodity?: string;
          location?: string;
          walletId?: string;
          offchainId?: string;
        }[];
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/XxSNiPxX/logisticsBeta/logisticsbeta/vendor`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVendor
   * @request GET:/XxSNiPxX/logisticsBeta/logisticsbeta/vendor/{vendorid}
   */
  queryVendor = (vendorid: string, params: RequestParams = {}) =>
    this.request<
      {
        vendor?: {
          vendorid?: string;
          name?: string;
          commodity?: string;
          location?: string;
          walletId?: string;
          offchainId?: string;
        };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/XxSNiPxX/logisticsBeta/logisticsbeta/vendor/${vendorid}`,
      method: "GET",
      ...params,
    });
}
