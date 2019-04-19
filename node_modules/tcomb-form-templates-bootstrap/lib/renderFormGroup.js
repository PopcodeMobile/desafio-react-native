'use strict';

exports.__esModule = true;
exports['default'] = renderFormGroup;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

function renderFormGroup(children, _ref) {
  var path = _ref.path;
  var hasError = _ref.hasError;

  var className = 'form-group-depth-' + path.length;
  if (path.length > 0) {
    className += ' form-group-' + path.join('-');
  }
  return _react2['default'].createElement.apply(null, [_FormGroup2['default'], { className: className, hasError: hasError }].concat(children));
}

module.exports = exports['default'];