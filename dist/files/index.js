"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const dataFile = new URL( 'data.txt', import.meta.url) 
var dataFile = _path["default"].resolve(__dirname, 'data.txt');

var reader = _fs["default"].createReadStream(dataFile, function (err, buffer) {
  console.log('file read: err', err);
  console.log('file read: buffer ', buffer);
});

_fs["default"].readFile(dataFile, function (err, buffer) {
  console.log('file read: err', err);
  console.log('file read: buffer ', buffer);
});

function _default() {}