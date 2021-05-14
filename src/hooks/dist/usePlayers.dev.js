"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _apiFirebase = _interopRequireDefault(require("../services/apiFirebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var usePlayers = function usePlayers() {
  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      player = _useState2[0],
      setPlayer = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      players = _useState4[0],
      setPlayers = _useState4[1];

  var createPlayer = function createPlayer(data) {
    var player;
    return regeneratorRuntime.async(function createPlayer$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            player = _objectSpread({}, data, {
              maxScore: 0,
              scores: []
            });
            return _context.abrupt("return", _apiFirebase["default"].post(player).then(function () {
              setPlayer(player);
            })["catch"](function (err) {
              console.log(err);
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var getPlayerInfo = function getPlayerInfo(uuid) {
    return regeneratorRuntime.async(function getPlayerInfo$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _apiFirebase["default"].getOne(uuid).then(function (player) {
              setPlayer(player);
              return player[0];
            })["catch"](function (err) {
              console.log(err);
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  var updatePlayer = function updatePlayer(uuid, data) {
    return regeneratorRuntime.async(function updatePlayer$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _apiFirebase["default"].update(uuid, data).then(function (writeResult) {
              setPlayer(function (prevState) {
                return _objectSpread({}, prevState, {}, data);
              });
            })["catch"](function (err) {
              console.log(err);
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    });
  };

  var updatePlayerScore = function updatePlayerScore(uuid, data) {
    console.log(data);
    getPlayerInfo(uuid).then(function (_data) {
      if (data.maxScore > _data.maxScore) {
        updatePlayer(uuid, data);
      } else {
        updatePlayer(uuid, {
          name: data.name
        });
      }
    });
  };

  var getPlayersScores = function getPlayersScores() {
    return regeneratorRuntime.async(function getPlayersScores$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _apiFirebase["default"].getAll().then(function (_players) {
              setPlayers(_players);
              return players;
            })["catch"](function (err) {
              console.log(err);
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    });
  };

  return {
    createPlayer: createPlayer,
    getPlayerInfo: getPlayerInfo,
    getPlayersScores: getPlayersScores,
    updatePlayer: updatePlayer,
    updatePlayerScore: updatePlayerScore,
    player: player,
    players: players
  };
};

var _default = usePlayers;
exports["default"] = _default;