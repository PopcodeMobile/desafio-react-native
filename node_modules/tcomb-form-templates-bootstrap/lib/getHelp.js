"use strict";

exports.__esModule = true;
exports["default"] = getHelp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function getHelp(_ref) {
  var help = _ref.help;
  var attrs = _ref.attrs;

  if (help) {
    return _react2["default"].createElement(
      "span",
      { className: "help-block", id: attrs.id + "-tip" },
      help
    );
  }
}

module.exports = exports["default"];