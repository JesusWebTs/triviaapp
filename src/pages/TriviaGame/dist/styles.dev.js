"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeCounterContainerStyled = exports.AnswerContainerStyled = exports.QuestionConttainerStyled = exports.ScoreVarTimeContainerStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  width: 100%;\n  text-align: center;\n  bottom: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 70px;\n  top: 20px;\n  padding: 15px;\n  background-color: white;\n  flex-basis: 70px;\n  flex-shrink: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ScoreVarTimeContainerStyled = _styledComponents["default"].div(_templateObject());

exports.ScoreVarTimeContainerStyled = ScoreVarTimeContainerStyled;

var QuestionConttainerStyled = _styledComponents["default"].div(_templateObject2());

exports.QuestionConttainerStyled = QuestionConttainerStyled;

var AnswerContainerStyled = _styledComponents["default"].div(_templateObject3());

exports.AnswerContainerStyled = AnswerContainerStyled;

var TimeCounterContainerStyled = _styledComponents["default"].div(_templateObject4());

exports.TimeCounterContainerStyled = TimeCounterContainerStyled;