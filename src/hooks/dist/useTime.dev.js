"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTime = void 0;

var _react = require("react");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var interval;

var useTime = function useTime(_ref) {
  var updateTimeWhen = _ref.updateTimeWhen,
      _ref$baseTime = _ref.baseTime,
      baseTime = _ref$baseTime === void 0 ? 10 : _ref$baseTime,
      cb = _ref.cb,
      isSelected = _ref.isSelected;

  var _useState = (0, _react.useState)(baseTime),
      _useState2 = _slicedToArray(_useState, 2),
      _baseTime = _useState2[0],
      setBaseTime = _useState2[1];

  var _useState3 = (0, _react.useState)(updateTimeWhen),
      _useState4 = _slicedToArray(_useState3, 2),
      _updateTimeWhen = _useState4[0],
      setUpdateTimeWhen = _useState4[1];

  var _useState5 = (0, _react.useState)(_baseTime),
      _useState6 = _slicedToArray(_useState5, 2),
      time = _useState6[0],
      setTime = _useState6[1];

  var realoadInterval = function realoadInterval() {
    stopInterval();
    clearInterval(interval);
    setTime(_baseTime);
    interval = setInterval(function () {
      return setTime(function (prevStime) {
        return prevStime - 1;
      });
    }, 1000);
  };

  var stopInterval = function stopInterval() {
    clearInterval(interval);
  };

  (0, _react.useEffect)(function () {
    realoadInterval();
    setTime(_baseTime);
    return function () {
      clearInterval(interval);
    };
  }, []);
  (0, _react.useEffect)(function () {
    clearInterval();
    realoadInterval();
    setTime(_baseTime);
    return function () {
      clearInterval(interval);
    };
  }, [].concat(_toConsumableArray(_updateTimeWhen), [_baseTime]));
  (0, _react.useEffect)(function () {
    if (time === 0 && cb && !isSelected) {
      cb();
    }

    return function () {};
  }, [time]);
  return {
    time: time,
    baseTime: _baseTime,
    setBaseTime: setBaseTime,
    realoadInterval: realoadInterval,
    stopInterval: stopInterval
  };
};

exports.useTime = useTime;