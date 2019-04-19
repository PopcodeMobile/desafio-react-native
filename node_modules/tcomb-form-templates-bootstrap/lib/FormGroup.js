'use strict';

exports.__esModule = true;
exports['default'] = FormGroup;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function FormGroup(props) {
  var className = {
    'form-group': true,
    'has-error': props.hasError
  };
  if (props.className) {
    className[props.className] = true;
  }
  return _react2['default'].createElement(
    'div',
    { className: _classnames2['default'](className) },
    props.children
  );
}

module.exports = exports['default'];