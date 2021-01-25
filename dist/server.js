"use strict";

var _util = _interopRequireDefault(require("util"));

var _events = require("events");

var _index = _interopRequireDefault(require("./files/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// console.log('import.meta.url', import.meta.url)
console.log('util', _util["default"]);
console.log('EventEmitter', _events.EventEmitter);
console.log('declare eventBus');
var eventBus = new _events.EventEmitter();
console.log('declare eventBus on event handler');
eventBus.on('data', function () {
  for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  console.log('data handler:', rest);
});
var data = {};
var browser = data === null || data === void 0 ? void 0 : data.browser;
console.log('emit event');
eventBus.emit('data', {
  message: ' hello '
});
console.log('emit event emitted');
console.log('eventBus eventNames', eventBus.eventNames()); // console.log('global', global)
// console.log('process', process)

var delayer = function delayer() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('delayer end');
      resolve(666);
    }, 1000);
  });
};

var f = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return delayer();

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function f() {
    return _ref.apply(this, arguments);
  };
}();

f().then(function (result) {
  console.log('result: ', result);
});