'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Breakpoints = require('./Breakpoints');

var _Breakpoints2 = _interopRequireDefault(_Breakpoints);

var _getError = require('./getError');

var _getError2 = _interopRequireDefault(_getError);

var _getHelp = require('./getHelp');

var _getHelp2 = _interopRequireDefault(_getHelp);

var _renderFormGroup = require('./renderFormGroup');

var _renderFormGroup2 = _interopRequireDefault(_renderFormGroup);

var CheckboxConfig = _tcomb2['default'].struct({
  horizontal: _tcomb2['default'].maybe(_Breakpoints2['default'])
}, 'CheckboxConfig');

function create() {
  var overrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  function checkbox(locals) {
    locals.config = checkbox.getConfig(locals);

    var children = locals.config.horizontal ? checkbox.renderHorizontal(locals) : checkbox.renderVertical(locals);

    return checkbox.renderFormGroup(children, locals);
  }

  checkbox.getConfig = overrides.getConfig || function getConfig(locals) {
    return new CheckboxConfig(locals.config || {});
  };

  checkbox.getAttrs = overrides.getAttrs || function getAttrs(locals) {
    var attrs = _tcomb2['default'].mixin({}, locals.attrs);
    attrs.type = 'checkbox';
    attrs.disabled = locals.disabled;
    attrs.checked = locals.value;
    attrs.onChange = function (evt) {
      return locals.onChange(evt.target.checked);
    };
    if (locals.help) {
      attrs['aria-describedby'] = attrs['aria-describedby'] || attrs.id + '-tip';
    }
    return attrs;
  };

  checkbox.renderCheckbox = overrides.renderCheckbox || function renderCheckbox(locals) {
    var attrs = checkbox.getAttrs(locals);
    var className = {
      checkbox: true,
      disabled: attrs.disabled
    };
    return _react2['default'].createElement(
      'div',
      { className: _classnames2['default'](className) },
      _react2['default'].createElement(
        'label',
        { htmlFor: attrs.id },
        _react2['default'].createElement('input', attrs),
        ' ',
        locals.label
      )
    );
  };

  checkbox.renderError = overrides.renderError || function renderError(locals) {
    return _getError2['default'](locals);
  };

  checkbox.renderHelp = overrides.renderHelp || function renderHelp(locals) {
    return _getHelp2['default'](locals);
  };

  checkbox.renderVertical = overrides.renderVertical || function renderVertical(locals) {
    return [checkbox.renderCheckbox(locals), checkbox.renderError(locals), checkbox.renderHelp(locals)];
  };

  checkbox.renderHorizontal = overrides.renderHorizontal || function renderHorizontal(locals) {
    var className = locals.config.horizontal.getOffsetClassName();
    return _react2['default'].createElement(
      'div',
      { className: _classnames2['default'](className) },
      checkbox.renderCheckbox(locals),
      checkbox.renderError(locals),
      checkbox.renderHelp(locals)
    );
  };

  checkbox.renderFormGroup = overrides.renderFormGroup || _renderFormGroup2['default'];

  checkbox.clone = function clone() {
    var newOverrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return create(_extends({}, overrides, newOverrides));
  };

  return checkbox;
}

exports['default'] = create();
module.exports = exports['default'];