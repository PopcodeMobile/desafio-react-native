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

var SelectConfig = _tcomb2['default'].struct({
  horizontal: _tcomb2['default'].maybe(_Breakpoints2['default'])
}, 'SelectConfig');

function getOption(props) {
  return _react2['default'].createElement(
    'option',
    { disabled: props.disabled, value: props.value, key: props.value },
    props.text
  );
}

function getOptGroup(props) {
  var options = props.options.map(getOption);
  return _react2['default'].createElement(
    'optgroup',
    { disabled: props.disabled, label: props.label, key: props.label },
    options
  );
}

function create() {
  var overrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  function select(locals) {
    locals.config = select.getConfig(locals);
    locals.attrs = select.getAttrs(locals);

    var children = locals.config.horizontal ? select.renderHorizontal(locals) : select.renderVertical(locals);

    return select.renderFormGroup(children, locals);
  }

  select.getConfig = overrides.getConfig || function getConfig(locals) {
    return new SelectConfig(locals.config || {});
  };

  select.getAttrs = overrides.getAttrs || function getAttrs(locals) {
    var attrs = _tcomb2['default'].mixin({}, locals.attrs);
    attrs.className = _classnames2['default'](attrs.className);
    attrs.className += (attrs.className ? ' ' : '') + 'form-control';
    attrs.multiple = locals.isMultiple;
    attrs.disabled = locals.disabled;
    attrs.value = locals.value;
    attrs.onChange = function (evt) {
      var value = locals.isMultiple ? Array.prototype.slice.call(evt.target.options).filter(function (option) {
        return option.selected;
      }).map(function (option) {
        return option.value;
      }) : evt.target.value;
      locals.onChange(value);
    };
    if (locals.help) {
      attrs['aria-describedby'] = attrs['aria-describedby'] || attrs.id + '-tip';
    }
    return attrs;
  };

  select.renderOptions = overrides.renderOptions || function renderOptions(locals) {
    return locals.options.map(function (x) {
      return x.label ? getOptGroup(x) : getOption(x);
    });
  };

  select.renderSelect = overrides.renderSelect || function renderSelect(locals) {
    return _react2['default'].createElement(
      'select',
      locals.attrs,
      select.renderOptions(locals)
    );
  };

  select.renderLabel = overrides.renderLabel || function renderLabel(locals) {
    return _getLabel2['default']({
      label: locals.label,
      htmlFor: locals.attrs.id,
      breakpoints: locals.config.horizontal
    });
  };

  select.renderError = overrides.renderError || function renderError(locals) {
    return _getError2['default'](locals);
  };

  select.renderHelp = overrides.renderHelp || function renderHelp(locals) {
    return _getHelp2['default'](locals);
  };

  select.renderVertical = overrides.renderVertical || function renderVertical(locals) {
    return [select.renderLabel(locals), select.renderSelect(locals), select.renderError(locals), select.renderHelp(locals)];
  };

  select.renderHorizontal = overrides.renderHorizontal || function renderHorizontal(locals) {
    var label = select.renderLabel(locals);
    var className = label ? locals.config.horizontal.getInputClassName() : locals.config.horizontal.getOffsetClassName();
    return [label, _react2['default'].createElement(
      'div',
      { className: _classnames2['default'](className) },
      select.renderSelect(locals),
      select.renderError(locals),
      select.renderHelp(locals)
    )];
  };

  select.renderFormGroup = overrides.renderFormGroup || _renderFormGroup2['default'];

  select.clone = function clone() {
    var newOverrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return create(_extends({}, overrides, newOverrides));
  };

  return select;
}

exports['default'] = create();
module.exports = exports['default'];