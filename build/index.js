"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Request", {
  enumerable: true,
  get: function get() {
    return _Request["default"];
  }
});
exports["default"] = void 0;
var _Request = _interopRequireDefault(require("./dist/Request.js"));
var _fetch = require("./dist/fetch.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = _fetch.fetch;
exports["default"] = _default;