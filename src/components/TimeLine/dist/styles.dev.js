"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarScoreStyled = exports.ScoreVarTimeStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  transform: translatey(-50%);\n  top: 0;\n  left: ", ";\n  margin: auto;\n  height: 30px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background-color: #00000099;\n  border-radius: 20px;\n  border: 2px solid black;\n  scroll-behavior: none;\n  padding: 0;\n  &:before {\n    border-radius: 20px;\n    content: \"\";\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background: rgb(223, 69, 69);\n    background: linear-gradient(\n      90deg,\n      rgba(223, 69, 69, 1) 0%,\n      rgba(218, 222, 32, 1) 33%,\n      rgba(218, 222, 32, 1) 66%,\n      rgba(30, 207, 14, 1) 100%\n    );\n\n    animation-duration: ", ";\n    animation-name: TimeLine;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n    animation-play-state: ", ";\n    @keyframes TimeLine {\n      0% {\n        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\n      }\n      100% {\n        clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ScoreVarTimeStyled = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var time = _ref.time;
  return "".concat(time, "s");
}, function (_ref2) {
  var selected = _ref2.selected;
  return selected ? "paused" : "running";
});

exports.ScoreVarTimeStyled = ScoreVarTimeStyled;

var StarScoreStyled = _styledComponents["default"].img(_templateObject2(), function (_ref3) {
  var left = _ref3.left;
  return "".concat(left, "%");
});

exports.StarScoreStyled = StarScoreStyled;