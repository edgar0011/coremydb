"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var HttpException =
/** @class */
function (_super) {
  __extends(HttpException, _super);

  function HttpException(statusCode, message, error) {
    var _this = _super.call(this, message) || this;

    _this.statusCode = statusCode;
    _this.message = message;
    _this.error = error || null;
    return _this;
  }

  return HttpException;
}(Error);

exports["default"] = HttpException;