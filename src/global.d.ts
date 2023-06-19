import { ClientRequest, IncomingHttpHeaders } from "node:http";

import Emitter from "@smootie/emitter"

declare module "@smootie/fetch" {
  export class Request extends Emitter<SmootieRequest.Events> {
    public constructor();

    public request(url: string, options?: SmootieRequest.RequestOptions): Promise<any>;
    public post(url: string, options?: SmootieRequest.RequestOptions): Promise<any>;
    public put(url: string, options?: SmootieRequest.RequestOptions): Promise<any>;
    public trace(url: string, options?: SmootieRequest.RequestOptions): Promise<any>;
    public patch(url: string, options?: SmootieRequest.RequestOptions): Promise<any>;
    public delete(url: string, options?: SmootieRequest.RequestOptions): Promise<any>;
    public head(url: string, options?: SmootieRequest.RequestOptions): Promise<any>;
    public get(url: string, options?: SmootieRequest.RequestOptions): Promise<any>;
  }

  export default function fetch<R extends SmootieRequest.ResponseTypes = SmootieRequest.ResponseTypes, RKey extends keyof R = keyof R>(url: string, options?: SmootieRequest.FetchOptions): Promise<R[RKey] | Response>;
}

export declare namespace SmootieRequest {

  interface RequestOptions {
    url: string;
    method?: keyof RequestMethodsList;
    headers?: IncomingHttpHeaders;
    data?: any;
  }

  interface RequestMethodsList {
    GET: "GET";
    PUT: "PUT";
    POST: "POST";
    TRACE: "TRACE";
    HEAD: "HEAD";
    PATCH: "PATCH";
    DELETE: "DELETE";
  }


  interface ResponseData {
    data: any,
    status: {
      code: number,
      message?: string
    },
    options: FetchOptions,
    headers: Headers
  }

  interface Events {
    error: (error: Error) => unknown;
    request: (request: ClientRequest) => unknown;
    response: (options: ResponseData) => unknown;
    data: (chunk: any) => unknown;
  }

  interface FetchOptions extends Omit<RequestInit, 'body'> {
    body?: BodyInit | Record<any, any>;
    type?: ResultTypesString;
  }


  interface ResponseTypes {
    json?: { [key: string]: any };
    blob?: Blob;
    buffer?: Buffer;
    text?: string;
  }

  enum ResultTypes {
    JSON = "JSON",
    BUFFER = "BUFFER",
    BLOB = "BLOB",
    TEXT = "TEXT",
    PLAIN = "PLAIN"
  }

  enum RequestMethods {
    GET = "GET",
    PUT = "PUT",
    POST = "POST",
    TRACE = "TRACE",
    HEAD = "HEAD",
    PATCH = "PATCH",
    DELETE = "DELETE"
  }

  type ResultTypesString = "JSON" | "BUFFER" | "BLOB" | "TEXT" | "PLAIN";
}