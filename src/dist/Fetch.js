import FetchError from "./FetchError.js";
import QueryError from "./QueryError.js";

export default class Fetch {
  /**
   * Create new Request.
   * @param {string} targetURL 
   * @param {Omit<RequestInit, 'body'>} options
   * @constructor
   */
  constructor(targetURL, options) {
    if (typeof targetURL !== "string") (new FetchError(`'${targetURL}' is not String.`, { name: "TypeError" })).throw();
    targetURL = encodeURI(targetURL);
    this.#url = targetURL;

    Object.defineProperty(this, "options", { value: options, enumerable: true, writable: false, configurable: false });
  };

  /**
   * @type string?
   */
  #url = null;

  /**
   * @type Blob?
   */
  #blobData = null;

  /**
   * @type {{}?}
   */
  #jsonData = null;

  /**
   * @type Buffer?
   */
  #bufferData = null;

  /**
   * @type Response?
   */
  #plainData = null;

  /**
   * @type string?
   */
  #textData = null;

  /**
   * Send request.
   * @param {"JSON" | "BUFFER" | "BLOB" | "TEXT" | "PLAIN"} type
   * @returns {Promise<unknown>}
   */
  async request(type) {
    type ??= "JSON";
    if (type && typeof type !== "string") (new FetchError(`'${type}' is not String.`, { name: "TypeError" })).throw();

    const __response = (await fetch(this.#url, this.options));

    if (!__response.ok) (new QueryError(__response.url, { code: __response.status, body: __response.body, response: (await (__response.clone()).text()) })).throw();

    if (type === "BLOB") this.#blobData = await __response.blob();
    else if (type === "JSON") this.#jsonData = await __response.json();
    else if (type === "BUFFER") this.#bufferData = Buffer.from((await (await __response.blob()).arrayBuffer()));
    else if (type === "PLAIN") this.#plainData = __response;
    else if (type === "TEXT") this.#textData = await __response.text();

    else (new FetchError(`'${type}' is not supported.`, { name: "InvalidType" })).throw();

    return this;
  };

  /**
   * Get json data of Request.
   * @returns {typeof this.#jsonData}
   */
  getJSON() {
    if (!this.#jsonData) (new FetchError("No json data found.", { name: "NotFound" })).throw();

    return this.#jsonData;
  };

  /**
   * Get blob data of Request.
   * @returns {typeof this.#blobData}
   */
  getBlob() {
    if (!this.#blobData) (new FetchError("No blob data found.", { name: "NotFound" })).throw();

    return this.#blobData;
  };

  /**
   * Get buffer data of Request.
   * @returns {typeof this.#bufferData}
   */
  getBuffer() {
    if (!this.#bufferData) (new FetchError("No buffer data found.", { name: "NotFound" })).throw();

    return this.#bufferData;
  };

  /**
   * Get plain data of Request. (Response)
   * @returns {typeof this.#plainData}
   */
  getPlain() {
    if (!this.#plainData) (new FetchError("No plain data found.", { name: "NotFound" })).throw();

    return this.#plainData;
  };

  /**
   * Get text data of Request.
   * @returns {typeof this.#textData}
   */
  getText() {
    if (!this.#textData) (new FetchError("No text data found.", { name: "NotFound" })).throw();

    return this.#textData;
  };

  /**
   * Get headers of Response.
   * @returns {Array<{ name: string, content: string }>}//package.jsona bak 
   */
  getHeaders() {
    /**
     * @type Response
     */
    const data = this.getPlain();

    let headers = [];
    for (const [name, content] of data.headers) headers.unshift({ name, content });

    return headers;
  };

  /**
   * Get status code of Response.
   * @returns {number}
   */
  getStatus() {
    /**
     * @type Response
     */
    const data = this.getPlain();

    return data.status;
  };

  /**
   * Get response type of Response.
   * @returns {ResponseType}
   */
  getResponseType() {
    /**
     * @type Response
     */
    const data = this.getPlain();

    return data.type;
  };
};

/**
 * Create new Request.
 * @param {string} url 
 * @param {import("../global").__FetchOptions} options 
 * @returns {Promise<unknown>}
 */
export async function __fetch(url, options = { type: "JSON" }) {
  let { type } = options;
  type ??= "JSON";

  if (url && typeof url !== "string") (new FetchError(`'${url}' is not String.`, { name: "TypeError" })).throw();

  const __response = (await fetch(url, options));

  if (!__response.ok) (new QueryError(__response.url, { code: __response.status, body: __response.body, response: (await (__response.clone()).text()) })).throw();

  if (type === "BLOB") return (await __response.blob());
  else if (type === "JSON") return (await __response.json());
  else if (type === "BUFFER") return (Buffer.from((await (await __response.blob()).arrayBuffer())));
  else if (type === "PLAIN") return __response;
  else if (type === "TEXT") return (await __response.text());

  else (new FetchError(`'${type}' is not supported.`, { name: "InvalidType" })).throw();
};