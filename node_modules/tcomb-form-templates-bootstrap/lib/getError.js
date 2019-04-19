"use strict";

exports.__esModule = true;
exports["default"] = getError;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function getError(_ref) {
  var hasError = _ref.hasError;
  var error = _ref.error;

  if (hasError && error) {
    return _react2["default"].createElement(
      "span",
      { className: "help-block error-block" },
      error
    );
  }
}

module.exports = exports["default"];