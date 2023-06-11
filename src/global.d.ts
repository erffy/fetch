import { ResultTypesString } from "@smootie/fetch";

declare module "@smootie/fetch" {
  export class Fetch<R extends ResponseTypes = ResponseTypes> {
    public constructor(targetURL: string, options?: RequestOptions);

    private #url: string;
    private #jsonData?: { [key: string]: any };
    private #blobData?: Blob;
    private #bufferData?: Buffer;
    private #plainData?: Response;
    private #textData?: string;

    public readonly options: RequestOptions;

    public request(type?: ResultTypesString): Promise<this>;
    public getJSON(): R["json"];
    public getBlob(): R["blob"];
    public getBuffer(): R["buffer"];
    public getPlain(): Response;
    public getText(): R["text"];
    public getHeaders(): Array<{ name: string, content: string }>;
    public getResponseType(): ResponseType;
  };

  export default function fetch<R extends ResponseTypes = ResponseTypes>(url: string, options: FetchOptions): Promise<R | Response>;

  export interface RequestOptions extends Omit<RequestInit, 'body'> {
    body?: BodyInit | Record<any, any>;
  };

  export interface FetchOptions extends __FetchOptions {};
  
  export interface ResponseTypes {
    json?: { [key: string]: any };
    blob?: Blob;
    buffer?: Buffer;
    text?: string;
  };

  export type ResultTypesString = __ResultTypesString;

  export enum ResultTypes {
    JSON = "JSON",
    BUFFER = "BUFFER",
    BLOB = "BLOB",
    TEXT = "TEXT",
    PLAIN = "PLAIN"
  };
};

interface __FetchOptions extends Omit<RequestInit, 'body'>, Omit<RequestInit, 'type'> {
  body?: BodyInit | Record<any, any>;
  type?: ResultTypesString;
};

type __ResultTypesString = "JSON" | "BUFFER" | "BLOB" | "TEXT" | "PLAIN";