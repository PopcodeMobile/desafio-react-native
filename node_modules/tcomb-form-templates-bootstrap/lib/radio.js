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

var _getLabel = require('./getLabel');

var _getLabel2 = _interopRequireDefault(_getLabel);

var _getError = require('./getError');

var _getError2 = _interopRequireDefault(_getError);

var _getHelp = require('./getHelp');

var _getHelp2 = _interopRequireDefault(_getHelp);

var _renderFormGroup = require('./renderFormGroup');

var _renderFormGroup2 = _interopRequireDefault(_renderFormGroup);

var RadioConfig = _tcomb2['default'].struct({
  horizontal: _tcomb2['default'].maybe(_Breakpoints2['default'])
}, 'RadioConfig');

function getRadio(attrs, text, key) {
  var className = _classnames2['default']({
    radio: true,
    disabled: attrs.disabled
  });
  return _react2['default'].createElement(
    'div',
    { key: key, className: className },
    _react2['default'].createElement(
      'label',
      { htmlFor: attrs.id },
      _react2['default'].createElement('input', attrs),
      ' ',
      text
    )
  );
}

function create() {
  var overrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  function radio(locals) {
    locals.config = radio.getConfig(locals);

    var children = locals.config.horizontal ? radio.renderHorizontal(locals) : radio.renderVertical(locals);

    return radio.renderFormGroup(children, locals);
  }

  radio.getConfig = overrides.getConfig || function getConfig(locals) {
    return new RadioConfig(locals.config || {});
  };

  radio.renderRadios = overrides.renderRadios || function renderRadios(locals) {
    var id = locals.attrs.id;
    var onChange = function onChange(evt) {
      return locals.onChange(evt.target.value);
    };
    return locals.options.map(function (option, i) {
      var attrs = _tcomb2['default'].mixin({}, locals.attrs);
      attrs.type = 'radio';
      attrs.checked = option.value === locals.value;
      attrs.disabled = locals.disabled;
      attrs.value = option.value;
      attrs.autoFocus = attrs.autoFocus && i === 0;
      attrs.id = id + '_' + i;
      attrs['aria-describedby'] = attrs['aria-describedby'] || (locals.label ? id : null);
      attrs.onChange = onChange;
      return getRadio(attrs, option.text, option.value);
    });
  };

  radio.renderLabel = overrides.renderLabel || function renderLabel(locals) {
    return _getLabel2['default']({
      label: locals.label,
      htmlFor: locals.attrs.id,
      breakpoints: locals.config.horizontal
    });
  };

  radio.renderError = overrides.renderError || function renderError(locals) {
    return _getError2['default'](locals);
  };

  radio.renderHelp = overrides.renderHelp || function renderHelp(locals) {
    return _getHelp2['default'](locals);
  };

  radio.renderVertical = overrides.renderVertical || function renderVertical(locals) {
    return [radio.renderLabel(locals), radio.renderRadios(locals), radio.renderError(locals), radio.renderHelp(locals)];
  };

  radio.renderHorizontal = overrides.renderHorizontal || function renderHorizontal(locals) {
    var label = radio.renderLabel(locals);
    var className = label ? locals.config.horizontal.getInputClassName() : locals.config.horizontal.getOffsetClassName();
    return [label, _react2['default'].createElement(
      'div',
      { className: _classnames2['default'](className) },
      radio.renderRadios(locals),
      radio.renderError(locals),
      radio.renderHelp(locals)
    )];
  };

  radio.renderFormGroup = overrides.renderFormGroup || _renderFormGroup2['default'];

  radio.clone = function clone() {
    var newOverrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return create(_extends({}, overrides, newOverrides));
  };

  return radio;
}

exports['default'] = create();
module.exports = exports['default'];