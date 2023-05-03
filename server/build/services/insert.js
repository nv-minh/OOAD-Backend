"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertService = exports.createPricesAndAreas = void 0;
var _models = _interopRequireDefault(require("../models"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _uuid = require("uuid");
var _chothuematbang = _interopRequireDefault(require("../../data/chothuematbang.json"));
var _chothuecanho = _interopRequireDefault(require("../../data/chothuecanho.json"));
var _nhachothue = _interopRequireDefault(require("../../data/nhachothue.json"));
var _chothuephongtro = _interopRequireDefault(require("../../data/chothuephongtro.json"));
var _generateCode = _interopRequireDefault(require("../ultis/generateCode"));
var _data = require("../ultis/data");
var _common = require("../ultis/common");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
require("dotenv").config();
var dataBody = [{
  body: _chothuephongtro["default"].body,
  code: "CTPT"
}, {
  body: _chothuematbang["default"].body,
  code: "CTMB"
}, {
  body: _chothuecanho["default"].body,
  code: "CTCH"
}, {
  body: _nhachothue["default"].body,
  code: "NCT"
}];
var hashPassword = function hashPassword(password) {
  return _bcryptjs["default"].hashSync(password, _bcryptjs["default"].genSaltSync(12));
};
var insertService = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var provinceCodes, labelCodes;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          try {
            provinceCodes = [];
            labelCodes = [];
            dataBody.forEach(function (cate) {
              cate.body.forEach( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(item) {
                  var _item$header, _item$header$class, _item$header2, _item$header2$class, _item$header2$class$c, _item$header3, _item$header3$address, _item$header3$address2, _item$header4, _item$header4$address, _item$header4$address2, _item$mainContent, _item$header5, _item$header5$attribu, _item$header6, _item$header6$attribu, _item$header7, _item$header8, _item$header9, _dataArea$find, _dataPrice$find, _item$header10, _item$header10$attrib, _item$header11, _item$header11$attrib, _item$header12, _item$header12$attrib, _item$header13, _item$header13$attrib, _item$header14, _item$header14$attrib, _item$header15, _item$header15$attrib, _item$overview, _item$overview$conten, _item$overview2, _item$overview2$conte, _item$overview3, _item$overview3$conte, _item$overview4, _item$overview4$conte, _item$overview5, _item$overview5$conte, _item$overview6, _item$overview6$conte, _item$overview7, _item$overview7$conte, _item$contact, _item$contact$content, _item$contact2, _item$contact2$conten, _item$contact3, _item$contact3$conten;
                  var postId, labelCode, provinceCode, attributesId, userId, imagesId, overviewId, desc, currentArea, currentPrice;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        postId = (0, _uuid.v4)();
                        labelCode = (0, _generateCode["default"])(item === null || item === void 0 ? void 0 : (_item$header = item.header) === null || _item$header === void 0 ? void 0 : (_item$header$class = _item$header["class"]) === null || _item$header$class === void 0 ? void 0 : _item$header$class.classType).trim();
                        (labelCodes === null || labelCodes === void 0 ? void 0 : labelCodes.every(function (item) {
                          return (item === null || item === void 0 ? void 0 : item.code) !== labelCode;
                        })) && labelCodes.push({
                          code: labelCode,
                          value: item === null || item === void 0 ? void 0 : (_item$header2 = item.header) === null || _item$header2 === void 0 ? void 0 : (_item$header2$class = _item$header2["class"]) === null || _item$header2$class === void 0 ? void 0 : (_item$header2$class$c = _item$header2$class.classType) === null || _item$header2$class$c === void 0 ? void 0 : _item$header2$class$c.trim()
                        });
                        provinceCode = (0, _generateCode["default"])(item === null || item === void 0 ? void 0 : (_item$header3 = item.header) === null || _item$header3 === void 0 ? void 0 : (_item$header3$address = _item$header3.address) === null || _item$header3$address === void 0 ? void 0 : (_item$header3$address2 = _item$header3$address.split(",")) === null || _item$header3$address2 === void 0 ? void 0 : _item$header3$address2.slice(-1)[0]).trim();
                        (provinceCodes === null || provinceCodes === void 0 ? void 0 : provinceCodes.every(function (item) {
                          return (item === null || item === void 0 ? void 0 : item.code) !== provinceCode;
                        })) && provinceCodes.push({
                          code: provinceCode,
                          value: item === null || item === void 0 ? void 0 : (_item$header4 = item.header) === null || _item$header4 === void 0 ? void 0 : (_item$header4$address = _item$header4.address) === null || _item$header4$address === void 0 ? void 0 : (_item$header4$address2 = _item$header4$address.split(",")) === null || _item$header4$address2 === void 0 ? void 0 : _item$header4$address2.slice(-1)[0].trim()
                        });
                        attributesId = (0, _uuid.v4)();
                        userId = (0, _uuid.v4)();
                        imagesId = (0, _uuid.v4)();
                        overviewId = (0, _uuid.v4)();
                        desc = JSON.stringify(item === null || item === void 0 ? void 0 : (_item$mainContent = item.mainContent) === null || _item$mainContent === void 0 ? void 0 : _item$mainContent.content);
                        currentArea = (0, _common.getNumberFromString)(item === null || item === void 0 ? void 0 : (_item$header5 = item.header) === null || _item$header5 === void 0 ? void 0 : (_item$header5$attribu = _item$header5.attributes) === null || _item$header5$attribu === void 0 ? void 0 : _item$header5$attribu.acreage);
                        currentPrice = (0, _common.getNumberFromString)(item === null || item === void 0 ? void 0 : (_item$header6 = item.header) === null || _item$header6 === void 0 ? void 0 : (_item$header6$attribu = _item$header6.attributes) === null || _item$header6$attribu === void 0 ? void 0 : _item$header6$attribu.price);
                        _context.next = 14;
                        return _models["default"].Post.create({
                          id: postId,
                          title: item === null || item === void 0 ? void 0 : (_item$header7 = item.header) === null || _item$header7 === void 0 ? void 0 : _item$header7.title,
                          star: item === null || item === void 0 ? void 0 : (_item$header8 = item.header) === null || _item$header8 === void 0 ? void 0 : _item$header8.star,
                          labelCode: labelCode,
                          address: item === null || item === void 0 ? void 0 : (_item$header9 = item.header) === null || _item$header9 === void 0 ? void 0 : _item$header9.address,
                          attributesId: attributesId,
                          categoryCode: cate.code,
                          description: desc,
                          userId: userId,
                          overviewId: overviewId,
                          imagesId: imagesId,
                          areaCode: (_dataArea$find = _data.dataArea.find(function (area) {
                            return area.max > currentArea && area.min <= currentArea;
                          })) === null || _dataArea$find === void 0 ? void 0 : _dataArea$find.code,
                          priceCode: (_dataPrice$find = _data.dataPrice.find(function (area) {
                            return area.max > currentPrice && area.min <= currentPrice;
                          })) === null || _dataPrice$find === void 0 ? void 0 : _dataPrice$find.code,
                          provinceCode: provinceCode,
                          priceNumber: (0, _common.getNumberFromStringV2)(item === null || item === void 0 ? void 0 : (_item$header10 = item.header) === null || _item$header10 === void 0 ? void 0 : (_item$header10$attrib = _item$header10.attributes) === null || _item$header10$attrib === void 0 ? void 0 : _item$header10$attrib.price),
                          areaNumber: (0, _common.getNumberFromStringV2)(item === null || item === void 0 ? void 0 : (_item$header11 = item.header) === null || _item$header11 === void 0 ? void 0 : (_item$header11$attrib = _item$header11.attributes) === null || _item$header11$attrib === void 0 ? void 0 : _item$header11$attrib.acreage)
                        });
                      case 14:
                        _context.next = 16;
                        return _models["default"].Attribute.create({
                          id: attributesId,
                          price: item === null || item === void 0 ? void 0 : (_item$header12 = item.header) === null || _item$header12 === void 0 ? void 0 : (_item$header12$attrib = _item$header12.attributes) === null || _item$header12$attrib === void 0 ? void 0 : _item$header12$attrib.price,
                          acreage: item === null || item === void 0 ? void 0 : (_item$header13 = item.header) === null || _item$header13 === void 0 ? void 0 : (_item$header13$attrib = _item$header13.attributes) === null || _item$header13$attrib === void 0 ? void 0 : _item$header13$attrib.acreage,
                          published: item === null || item === void 0 ? void 0 : (_item$header14 = item.header) === null || _item$header14 === void 0 ? void 0 : (_item$header14$attrib = _item$header14.attributes) === null || _item$header14$attrib === void 0 ? void 0 : _item$header14$attrib.published,
                          hashtag: item === null || item === void 0 ? void 0 : (_item$header15 = item.header) === null || _item$header15 === void 0 ? void 0 : (_item$header15$attrib = _item$header15.attributes) === null || _item$header15$attrib === void 0 ? void 0 : _item$header15$attrib.hashtag
                        });
                      case 16:
                        _context.next = 18;
                        return _models["default"].Image.create({
                          id: imagesId,
                          image: JSON.stringify(item === null || item === void 0 ? void 0 : item.images)
                        });
                      case 18:
                        _context.next = 20;
                        return _models["default"].Overview.create({
                          id: overviewId,
                          code: item === null || item === void 0 ? void 0 : (_item$overview = item.overview) === null || _item$overview === void 0 ? void 0 : (_item$overview$conten = _item$overview.content.find(function (i) {
                            return i.name === "Mã tin:";
                          })) === null || _item$overview$conten === void 0 ? void 0 : _item$overview$conten.content,
                          area: item === null || item === void 0 ? void 0 : (_item$overview2 = item.overview) === null || _item$overview2 === void 0 ? void 0 : (_item$overview2$conte = _item$overview2.content.find(function (i) {
                            return i.name === "Khu vực";
                          })) === null || _item$overview2$conte === void 0 ? void 0 : _item$overview2$conte.content,
                          type: item === null || item === void 0 ? void 0 : (_item$overview3 = item.overview) === null || _item$overview3 === void 0 ? void 0 : (_item$overview3$conte = _item$overview3.content.find(function (i) {
                            return i.name === "Loại tin rao:";
                          })) === null || _item$overview3$conte === void 0 ? void 0 : _item$overview3$conte.content,
                          target: item === null || item === void 0 ? void 0 : (_item$overview4 = item.overview) === null || _item$overview4 === void 0 ? void 0 : (_item$overview4$conte = _item$overview4.content.find(function (i) {
                            return i.name === "Đối tượng thuê:";
                          })) === null || _item$overview4$conte === void 0 ? void 0 : _item$overview4$conte.content,
                          bonus: item === null || item === void 0 ? void 0 : (_item$overview5 = item.overview) === null || _item$overview5 === void 0 ? void 0 : (_item$overview5$conte = _item$overview5.content.find(function (i) {
                            return i.name === "Gói tin:";
                          })) === null || _item$overview5$conte === void 0 ? void 0 : _item$overview5$conte.content,
                          created: item === null || item === void 0 ? void 0 : (_item$overview6 = item.overview) === null || _item$overview6 === void 0 ? void 0 : (_item$overview6$conte = _item$overview6.content.find(function (i) {
                            return i.name === "Ngày đăng:";
                          })) === null || _item$overview6$conte === void 0 ? void 0 : _item$overview6$conte.content,
                          expired: item === null || item === void 0 ? void 0 : (_item$overview7 = item.overview) === null || _item$overview7 === void 0 ? void 0 : (_item$overview7$conte = _item$overview7.content.find(function (i) {
                            return i.name === "Ngày hết hạn:";
                          })) === null || _item$overview7$conte === void 0 ? void 0 : _item$overview7$conte.content
                        });
                      case 20:
                        _context.next = 22;
                        return _models["default"].User.create({
                          id: userId,
                          name: item === null || item === void 0 ? void 0 : (_item$contact = item.contact) === null || _item$contact === void 0 ? void 0 : (_item$contact$content = _item$contact.content.find(function (i) {
                            return i.name === "Liên hệ:";
                          })) === null || _item$contact$content === void 0 ? void 0 : _item$contact$content.content,
                          password: hashPassword("123456"),
                          phone: item === null || item === void 0 ? void 0 : (_item$contact2 = item.contact) === null || _item$contact2 === void 0 ? void 0 : (_item$contact2$conten = _item$contact2.content.find(function (i) {
                            return i.name === "Điện thoại:";
                          })) === null || _item$contact2$conten === void 0 ? void 0 : _item$contact2$conten.content,
                          zalo: item === null || item === void 0 ? void 0 : (_item$contact3 = item.contact) === null || _item$contact3 === void 0 ? void 0 : (_item$contact3$conten = _item$contact3.content.find(function (i) {
                            return i.name === "Zalo";
                          })) === null || _item$contact3$conten === void 0 ? void 0 : _item$contact3$conten.content
                        });
                      case 22:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());
            });
            // console.log(provinceCodes);
            provinceCodes === null || provinceCodes === void 0 ? void 0 : provinceCodes.forEach( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(item) {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _models["default"].Province.create(item);
                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }());
            labelCodes === null || labelCodes === void 0 ? void 0 : labelCodes.forEach( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(item) {
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return _models["default"].Label.create(item);
                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }));
              return function (_x3) {
                return _ref4.apply(this, arguments);
              };
            }());
          } catch (error) {
            console.log(error);
          }
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function insertService() {
    return _ref.apply(this, arguments);
  };
}();
exports.insertService = insertService;
var createPricesAndAreas = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          try {
            _data.dataPrice.forEach( /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(item, index) {
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return _models["default"].Price.create({
                        code: item.code,
                        value: item.value,
                        order: index + 1
                      });
                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5);
              }));
              return function (_x4, _x5) {
                return _ref6.apply(this, arguments);
              };
            }());
            _data.dataArea.forEach( /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(item, index) {
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return _models["default"].Area.create({
                        code: item.code,
                        value: item.value,
                        order: index + 1
                      });
                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6);
              }));
              return function (_x6, _x7) {
                return _ref7.apply(this, arguments);
              };
            }());
          } catch (err) {
            console.log(err);
          }
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function createPricesAndAreas() {
    return _ref5.apply(this, arguments);
  };
}();
exports.createPricesAndAreas = createPricesAndAreas;