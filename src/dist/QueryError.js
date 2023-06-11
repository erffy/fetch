export default class QueryDefaultError extends Error {
  /**
   * Create new Query Error.
   * @param {string} url 
   * @param {{ code: number, response: any, body: any }} options 
   */
  constructor(url, options) {
    super(`Failed to request '${url}' with code ${options.code}`);

    Object.defineProperties(this, {
      url: {
        value: url,
        writable: false,
        configurable: false
      },

      code: {
        value: options.code,
        writable: false,
        configurable: false
      },

      body: {
        value: options.body,
        writable: false,
        configurable: false
      },

      response: {
        value: options.response,
        writable: false,
        configurable: false
      }
    });
  };

  json() {
    return (JSON.parse(this.body));
  };

  throw() {
    throw this;
  };
};