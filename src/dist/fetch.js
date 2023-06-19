import QueryError from "./QueryError.js";
import RequestError from "./RequestError.js";

/**
 * Create new Request.
 * @param {string} url 
 * @param {import("../global.js").__FetchOptions} options 
 * @returns {Promise<unknown>}
 */
export async function fetch(url, options = { type: "JSON" }) {
  let { type } = options;
  type ??= "JSON";

  if (url && typeof url !== "string") (new RequestError(`'${url}' is not String.`, { name: "TypeError" })).throw();

  const __response = (await fetch(url, options));

  if (!__response.ok) (new QueryError(__response.url, { code: __response.status, body: __response.body, response: (await (__response.clone()).text()) })).throw();

  if (type === "BLOB") return (await __response.blob());
  else if (type === "JSON") return (await __response.json());
  else if (type === "BUFFER") return (Buffer.from((await (await __response.blob()).arrayBuffer())));
  else if (type === "PLAIN") return __response;
  else if (type === "TEXT") return (await __response.text());

  else (new RequestError(`'${type}' is not supported.`, { name: "InvalidType" })).throw();
};