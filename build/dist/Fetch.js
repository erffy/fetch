"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__fetch = __fetch;
exports["default"] = void 0;
var _FetchError = _interopRequireDefault(require("./FetchError.js"));
var _QueryError = _interopRequireDefault(require("./QueryError.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _url = /*#__PURE__*/new WeakMap();
var _blobData = /*#__PURE__*/new WeakMap();
var _jsonData = /*#__PURE__*/new WeakMap();
var _bufferData = /*#__PURE__*/new WeakMap();
var _plainData = /*#__PURE__*/new WeakMap();
var _textData = /*#__PURE__*/new WeakMap();
var Fetch = /*#__PURE__*/function () {
  /**
   * Create new Request.
   * @param {string} targetURL 
   * @param {Omit<RequestInit, 'body'>} options
   * @constructor
   */
  function Fetch(targetURL, options) {
    _classCallCheck(this, Fetch);
    /**
     * @type string?
     */
    _classPrivateFieldInitSpec(this, _url, {
      writable: true,
      value: null
    });
    /**
     * @type Blob?
     */
    _classPrivateFieldInitSpec(this, _blobData, {
      writable: true,
      value: null
    });
    /**
     * @type {{}?}
     */
    _classPrivateFieldInitSpec(this, _jsonData, {
      writable: true,
      value: null
    });
    /**
     * @type Buffer?
     */
    _classPrivateFieldInitSpec(this, _bufferData, {
      writable: true,
      value: null
    });
    /**
     * @type Response?
     */
    _classPrivateFieldInitSpec(this, _plainData, {
      writable: true,
      value: null
    });
    /**
     * @type string?
     */
    _classPrivateFieldInitSpec(this, _textData, {
      writable: true,
      value: null
    });
    if (typeof targetURL !== "string") new _FetchError["default"]("'".concat(targetURL, "' is not String."), {
      name: "TypeError"
    })["throw"]();
    targetURL = encodeURI(targetURL);
    _classPrivateFieldSet(this, _url, targetURL);
    Object.defineProperty(this, "options", {
      value: options,
      enumerable: true,
      writable: false,
      configurable: false
    });
  }
  _createClass(Fetch, [{
    key: "request",
    value:
    /**
     * Send request.
     * @param {"JSON" | "BUFFER" | "BLOB" | "TEXT" | "PLAIN"} type
     * @returns {Promise<unknown>}
     */
    function () {
      var _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(type) {
        var _type;
        var __response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              (_type = type) !== null && _type !== void 0 ? _type : type = "JSON";
              if (type && typeof type !== "string") new _FetchError["default"]("'".concat(type, "' is not String."), {
                name: "TypeError"
              })["throw"]();
              _context.next = 4;
              return fetch(_classPrivateFieldGet(this, _url), this.options);
            case 4:
              __response = _context.sent;
              if (__response.ok) {
                _context.next = 15;
                break;
              }
              _context.t0 = _QueryError["default"];
              _context.t1 = __response.url;
              _context.t2 = __response.status;
              _context.t3 = __response.body;
              _context.next = 12;
              return __response.clone().text();
            case 12:
              _context.t4 = _context.sent;
              _context.t5 = {
                code: _context.t2,
                body: _context.t3,
                response: _context.t4
              };
              new _context.t0(_context.t1, _context.t5)["throw"]();
            case 15:
              if (!(type === "BLOB")) {
                _context.next = 25;
                break;
              }
              _context.t6 = _classPrivateFieldSet;
              _context.t7 = this;
              _context.t8 = _blobData;
              _context.next = 21;
              return __response.blob();
            case 21:
              _context.t9 = _context.sent;
              (0, _context.t6)(_context.t7, _context.t8, _context.t9);
              _context.next = 64;
              break;
            case 25:
              if (!(type === "JSON")) {
                _context.next = 35;
                break;
              }
              _context.t10 = _classPrivateFieldSet;
              _context.t11 = this;
              _context.t12 = _jsonData;
              _context.next = 31;
              return __response.json();
            case 31:
              _context.t13 = _context.sent;
              (0, _context.t10)(_context.t11, _context.t12, _context.t13);
              _context.next = 64;
              break;
            case 35:
              if (!(type === "BUFFER")) {
                _context.next = 49;
                break;
              }
              _context.t14 = _classPrivateFieldSet;
              _context.t15 = this;
              _context.t16 = _bufferData;
              _context.t17 = Buffer;
              _context.next = 42;
              return __response.blob();
            case 42:
              _context.next = 44;
              return _context.sent.arrayBuffer();
            case 44:
              _context.t18 = _context.sent;
              _context.t19 = _context.t17.from.call(_context.t17, _context.t18);
              (0, _context.t14)(_context.t15, _context.t16, _context.t19);
              _context.next = 64;
              break;
            case 49:
              if (!(type === "PLAIN")) {
                _context.next = 53;
                break;
              }
              _classPrivateFieldSet(this, _plainData, __response);
              _context.next = 64;
              break;
            case 53:
              if (!(type === "TEXT")) {
                _context.next = 63;
                break;
              }
              _context.t20 = _classPrivateFieldSet;
              _context.t21 = this;
              _context.t22 = _textData;
              _context.next = 59;
              return __response.text();
            case 59:
              _context.t23 = _context.sent;
              (0, _context.t20)(_context.t21, _context.t22, _context.t23);
              _context.next = 64;
              break;
            case 63:
              new _FetchError["default"]("'".concat(type, "' is not supported."), {
                name: "InvalidType"
              })["throw"]();
            case 64:
              return _context.abrupt("return", this);
            case 65:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function request(_x) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "getJSON",
    value:
    /**
     * Get json data of Request.
     * @returns {typeof this.#jsonData}
     */
    function getJSON() {
      if (!_classPrivateFieldGet(this, _jsonData)) new _FetchError["default"]("No json data found.", {
        name: "NotFound"
      })["throw"]();
      return _classPrivateFieldGet(this, _jsonData);
    }
  }, {
    key: "getBlob",
    value:
    /**
     * Get blob data of Request.
     * @returns {typeof this.#blobData}
     */
    function getBlob() {
      if (!_classPrivateFieldGet(this, _blobData)) new _FetchError["default"]("No blob data found.", {
        name: "NotFound"
      })["throw"]();
      return _classPrivateFieldGet(this, _blobData);
    }
  }, {
    key: "getBuffer",
    value:
    /**
     * Get buffer data of Request.
     * @returns {typeof this.#bufferData}
     */
    function getBuffer() {
      if (!_classPrivateFieldGet(this, _bufferData)) new _FetchError["default"]("No buffer data found.", {
        name: "NotFound"
      })["throw"]();
      return _classPrivateFieldGet(this, _bufferData);
    }
  }, {
    key: "getPlain",
    value:
    /**
     * Get plain data of Request. (Response)
     * @returns {typeof this.#plainData}
     */
    function getPlain() {
      if (!_classPrivateFieldGet(this, _plainData)) new _FetchError["default"]("No plain data found.", {
        name: "NotFound"
      })["throw"]();
      return _classPrivateFieldGet(this, _plainData);
    }
  }, {
    key: "getText",
    value:
    /**
     * Get text data of Request.
     * @returns {typeof this.#textData}
     */
    function getText() {
      if (!_classPrivateFieldGet(this, _textData)) new _FetchError["default"]("No text data found.", {
        name: "NotFound"
      })["throw"]();
      return _classPrivateFieldGet(this, _textData);
    }
  }, {
    key: "getHeaders",
    value:
    /**
     * Get headers of Response.
     * @returns {Array<{ name: string, content: string }>}//package.jsona bak 
     */
    function getHeaders() {
      /**
       * @type Response
       */
      var data = this.getPlain();
      var headers = [];
      var _iterator = _createForOfIteratorHelper(data.headers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            name = _step$value[0],
            content = _step$value[1];
          headers.unshift({
            name: name,
            content: content
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return headers;
    }
  }, {
    key: "getStatus",
    value:
    /**
     * Get status code of Response.
     * @returns {number}
     */
    function getStatus() {
      /**
       * @type Response
       */
      var data = this.getPlain();
      return data.status;
    }
  }, {
    key: "getResponseType",
    value:
    /**
     * Get response type of Response.
     * @returns {ResponseType}
     */
    function getResponseType() {
      /**
       * @type Response
       */
      var data = this.getPlain();
      return data.type;
    }
  }]);
  return Fetch;
}();
exports["default"] = Fetch;
;

/**
 * Create new Request.
 * @param {string} url 
 * @param {import("../global").__FetchOptions} options 
 * @returns {Promise<unknown>}
 */
function __fetch(_x2) {
  return _fetch.apply(this, arguments);
}
function _fetch() {
  _fetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
    var _type2;
    var options,
      type,
      __response,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {
            type: "JSON"
          };
          type = options.type;
          (_type2 = type) !== null && _type2 !== void 0 ? _type2 : type = "JSON";
          if (url && typeof url !== "string") new _FetchError["default"]("'".concat(url, "' is not String."), {
            name: "TypeError"
          })["throw"]();
          _context2.next = 6;
          return fetch(url, options);
        case 6:
          __response = _context2.sent;
          if (__response.ok) {
            _context2.next = 17;
            break;
          }
          _context2.t0 = _QueryError["default"];
          _context2.t1 = __response.url;
          _context2.t2 = __response.status;
          _context2.t3 = __response.body;
          _context2.next = 14;
          return __response.clone().text();
        case 14:
          _context2.t4 = _context2.sent;
          _context2.t5 = {
            code: _context2.t2,
            body: _context2.t3,
            response: _context2.t4
          };
          new _context2.t0(_context2.t1, _context2.t5)["throw"]();
        case 17:
          if (!(type === "BLOB")) {
            _context2.next = 23;
            break;
          }
          _context2.next = 20;
          return __response.blob();
        case 20:
          return _context2.abrupt("return", _context2.sent);
        case 23:
          if (!(type === "JSON")) {
            _context2.next = 29;
            break;
          }
          _context2.next = 26;
          return __response.json();
        case 26:
          return _context2.abrupt("return", _context2.sent);
        case 29:
          if (!(type === "BUFFER")) {
            _context2.next = 39;
            break;
          }
          _context2.t6 = Buffer;
          _context2.next = 33;
          return __response.blob();
        case 33:
          _context2.next = 35;
          return _context2.sent.arrayBuffer();
        case 35:
          _context2.t7 = _context2.sent;
          return _context2.abrupt("return", _context2.t6.from.call(_context2.t6, _context2.t7));
        case 39:
          if (!(type === "PLAIN")) {
            _context2.next = 43;
            break;
          }
          return _context2.abrupt("return", __response);
        case 43:
          if (!(type === "TEXT")) {
            _context2.next = 49;
            break;
          }
          _context2.next = 46;
          return __response.text();
        case 46:
          return _context2.abrupt("return", _context2.sent);
        case 49:
          new _FetchError["default"]("'".concat(type, "' is not supported."), {
            name: "InvalidType"
          })["throw"]();
        case 50:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _fetch.apply(this, arguments);
}
;