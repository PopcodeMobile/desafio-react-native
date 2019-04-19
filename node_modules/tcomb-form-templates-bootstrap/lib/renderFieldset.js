'use strict';

exports.__esModule = true;
exports['default'] = renderFieldset;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function getClassName(locals) {
  var len = locals.path.length;
  var className = 'fieldset fieldset-depth-' + len;
  if (len > 0) {
    className += ' fieldset-' + locals.path.join('-');
  }
  if (locals.className) {
    className += ' ' + _classnames2['default'](locals.className);
  }
  return className;
}

function renderFieldset(children, locals) {
  var legend = locals.label ? _react2['default'].createElement(
    'legend',
    null,
    locals.label
  ) : null;
  var props = {
    className: getClassName(locals),
    disabled: locals.disabled
  };
  return _react2['default'].createElement.apply(null, ['fieldset', props, legend].concat(children));
}

module.exports = exports['default'];