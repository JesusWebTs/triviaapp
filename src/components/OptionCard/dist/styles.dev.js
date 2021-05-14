"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnswerStyled = exports.AnswerContainerStyled = exports.CardContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  border-radius: 40px;\n  transition: background-color 0.2s linear;\n  font-weight: bold;\n  &:hover {\n    background-color: black;\n    color: white;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: 2px solid black;\n  border-radius: 40px;\n  margin: 10px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  background-color: black;  \n  &::after,\n  &::before {\n    content: \"\";\n    position: absolute;\n    width: 20px;\n    height: 5px;\n    top: 50%;\n    background-color: black;\n    transform: translateX(-100.5%);\n  }\n  &::after {\n    left: 0px;\n  }\n  &:before {\n    right: 0px;\n    transform: translateX(100.5%);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardContainer = _styledComponents["default"].div(_templateObject());

exports.CardContainer = CardContainer;

var AnswerContainerStyled = _styledComponents["default"].button(_templateObject2());

exports.AnswerContainerStyled = AnswerContainerStyled;

var AnswerStyled = _styledComponents["default"].p(_templateObject3());

exports.AnswerStyled = AnswerStyled;