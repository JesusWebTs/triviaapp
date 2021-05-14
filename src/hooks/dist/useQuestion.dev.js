"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useQuestion = void 0;

var _react = require("react");

var _helpers = require("../helpers");

var _apiQuestions = require("../services/apiQuestions");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var conn = new _apiQuestions.ApiQuestions({
  uri: "https://opentdb.com/api.php?amount=1"
});

var useQuestion = function useQuestion() {
  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      questionData = _useState2[0],
      setQuestionData = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      question = _useState4[0],
      setQuestion = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      answers = _useState6[0],
      setAnswers = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var getQuestion = function getQuestion() {
    return regeneratorRuntime.async(function getQuestion$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            conn.getQuestions().then(function (res) {
              setLoading(false);
              setQuestionData(res);
              setQuestion((0, _helpers.textFormatter)(res.question));

              var _answers = res.incorrect_answers.map(function (answer) {
                return {
                  answer: (0, _helpers.textFormatter)(answer),
                  correct: false
                };
              });

              _answers.push({
                answer: (0, _helpers.textFormatter)(res.correct_answer),
                correct: true
              });

              var sortedAnswer = (0, _helpers.sortRandomAnswerArray)(_answers);
              setAnswers(sortedAnswer);
            })["catch"](function (err) {
              setLoading(false);
              console.log(err);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  return {
    questionData: questionData,
    getQuestion: getQuestion,
    question: question,
    answers: answers,
    loading: loading
  };
};

exports.useQuestion = useQuestion;