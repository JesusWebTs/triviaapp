"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonContainerStyled = exports.PlayAgain = exports.Top3Styled = exports.ScoreItemContainerStyled = exports.ScoreItemStyled = exports.ScoreTableStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  gap: 5px;\n  margin: 30px;\n  margin-top: 25px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 140px;\n  height: 50px;\n  border-radius: 5px;\n  color: white;\n  background-color: black;\n  font-size: 20px;\n  cursor: pointer;\n  z-index: 30;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 50px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  overflow-y: scroll;\n  max-height: 90%;\n  text-align: center;\n  padding: 0;\n\n  &::-webkit-scrollbar {\n    -webkit-appearance: none;\n  }\n\n  &::-webkit-scrollbar:vertical {\n    width: 10px;\n  }\n\n  &::-webkit-scrollbar-button:increment,\n  &::-webkit-scrollbar-button {\n    display: none;\n  }\n\n  &::-webkit-scrollbar:horizontal {\n    height: 10px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #797979;\n    border-radius: 20px;\n    border: 2px solid #f1f2f3;\n  }\n\n  &::-webkit-scrollbar-track {\n    border-radius: 10px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  width: 80%;\n  background: black;\n  color: white;\n  margin: auto;\n  border-radius: 10px;\n  text-align: center;\n  list-style: inside decimal;\n  position: relative;\n  padding: 15px;\n  border: 2px solid white;\n  position: relative;\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n  padding: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ScoreTableStyled = _styledComponents["default"].div(_templateObject());

exports.ScoreTableStyled = ScoreTableStyled;

var ScoreItemStyled = _styledComponents["default"].li(_templateObject2(), function (_ref) {
  var own = _ref.own;
  if (own) return "\n    position: sticky;\n    top: 0;\n    bottom: 0;\n    z-index: 30;\n    ";
});

exports.ScoreItemStyled = ScoreItemStyled;

var ScoreItemContainerStyled = _styledComponents["default"].ol(_templateObject3());

exports.ScoreItemContainerStyled = ScoreItemContainerStyled;

var Top3Styled = _styledComponents["default"].img(_templateObject4());

exports.Top3Styled = Top3Styled;

var PlayAgain = _styledComponents["default"].button(_templateObject5());

exports.PlayAgain = PlayAgain;

var ButtonContainerStyled = _styledComponents["default"].div(_templateObject6());

exports.ButtonContainerStyled = ButtonContainerStyled;