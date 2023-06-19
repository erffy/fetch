import { yellowBright, redBright } from "colorette";

/**
 * @abstract
 */
export default class DefaultError extends Error {
  /**
   * Create new error.
   * @param {string} message 
   * @param {{ name?: string, stack?: string }} options 
   */
  constructor(message, options) {
    super(yellowBright(message));
    
    this.name = redBright(`RequestError[${typeof options?.name === "string" ? options.name : "UnknownError"}]`);

    if (options?.stack) this.stack = options.stack;
  };

  throw() {
    throw this;
  };
};