'use strict';

exports.__esModule = true;
exports['default'] = getAlert;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function getAlert(type, message) {
  return _react2['default'].createElement(
    'div',
    { className: 'alert alert-' + type },
    message
  );
}

module.exports = exports['default'];