import Emitter from "@smootie/emitter";

import http from "node:http";
import https from "node:https";

import RequestError from "./RequestError.js";

/**
 * @extends Emitter<import("../global.js").SmootieRequest.Events>
 */
export default class Request extends Emitter {
  constructor() { 
    super();
  };

  /**
   * Create new Request.
   * @param {string} url 
   * @param {import("../global").SmootieRequest.RequestOptions} options 
   * @returns {Promise<any>}
   */
  async request(url, options = {}) {
    if (typeof url !== "string") (new RequestError(`'${url}' is not String.`, { name: "TypeError" })).throw();

    const { protocol, hostname, port, path } = new URL(url);
    const __module = ((protocol === "https") ? https : http);

    if (!options?.headers || typeof options?.headers !== "object") options.headers = {};

    const __options = {
      method: options?.method ?? "GET",
      headers: { ...options.headers, "x-request-date": (new Date().toISOString()), "host": hostname },
      hostname,
      port,
      path
    };

    const promise = new Promise((resolve, reject) => {
      const request = __module.request(__options, (response) => {
        let __data = null;

        response.on("data", (chunk) => { __data += chunk; this.emit("data", chunk); });
        response.on("end", () => {
          const data = {
            data: __data,
            status: {
              code: response.statusCode,
              message: response.statusMessage
            },
            options,
            headers: response.headers
          };

          this.emit("response", data);

          resolve(data);
        });

        response.on("error", (error) => { this.emit("error", error); reject(error?.message) });
      });

      this.emit("request", request);
      if (options?.data) request.write(options.data);

      request.end();
    });

    return (await promise);
  };

  async get(url, options = {}) {
    const req = await this.request(url, { ...options, method: "GET" });

    return req;
  };

  async post(url, options = {}) {
    const req = await this.request(url, { ...options, method: "POST" });

    return req;
  };

  async patch(url, options = {}) {
    const req = await this.request(url, { ...options, method: "PATCH" });

    return req;
  };

  async post(url, options = {}) {
    const req = await this.request(url, { ...options, method: "PUT" });

    return req;
  };

  async head(url, options = {}) {
    const req = await this.request(url, { ...options, method: "HEAD" });

    return req;
  };

  async trace(url, options = {}) {
    const req = await this.request(url, { ...options, method: "TRACE" });

    return req;
  };

  async delete(url, options = {}) {
    const req = await this.request(url, { ...options, method: "GET" });

    return req;
  };
};