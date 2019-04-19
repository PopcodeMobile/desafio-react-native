'use strict';

exports.__esModule = true;
exports['default'] = getLabel;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function getLabel(_ref) {
  var label = _ref.label;
  var breakpoints = _ref.breakpoints;
  var htmlFor = _ref.htmlFor;
  var id = _ref.id;

  if (label) {
    var className = breakpoints ? breakpoints.getLabelClassName() : {};
    className['control-label'] = true;
    return _react2['default'].createElement(
      'label',
      { htmlFor: htmlFor, id: id, className: _classnames2['default'](className) },
      label
    );
  }
}

module.exports = exports['default'];