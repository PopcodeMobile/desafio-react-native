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

var DateConfig = _tcomb2['default'].struct({
  horizontal: _tcomb2['default'].maybe(_Breakpoints2['default'])
}, 'DateConfig');

function range(n) {
  var result = [];
  for (var i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

function padLeft(x, len) {
  var str = String(x);
  var times = len - str.length;
  for (var i = 0; i < times; i++) {
    str = '0' + str;
  }
  return str;
}

function toOption(value, text) {
  return _react2['default'].createElement(
    'option',
    { key: value, value: value + '' },
    text
  );
}

var nullOption = [toOption('', '-')];

var days = nullOption.concat(range(31).map(function (i) {
  return toOption(i, padLeft(i, 2));
}));

var months = nullOption.concat(range(12).map(function (i) {
  return toOption(i - 1, padLeft(i, 2));
}));

function create() {
  var overrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  function date(locals) {
    locals.config = date.getConfig(locals);
    locals.attrs = date.getAttrs(locals);

    var children = locals.config.horizontal ? date.renderHorizontal(locals) : date.renderVertical(locals);

    return date.renderFormGroup(children, locals);
  }

  date.getConfig = overrides.getConfig || function getConfig(locals) {
    return new DateConfig(locals.config || {});
  };

  date.getAttrs = overrides.getAttrs || function getAttrs(locals) {
    return _tcomb2['default'].mixin({}, locals.attrs);
  };

  date.renderLabel = overrides.renderLabel || function renderLabel(locals) {
    return _getLabel2['default']({
      label: locals.label,
      breakpoints: locals.config.horizontal
    });
  };

  date.renderError = overrides.renderError || function renderError(locals) {
    return _getError2['default'](locals);
  };

  date.renderHelp = overrides.renderHelp || function renderHelp(locals) {
    return _getHelp2['default'](locals);
  };

  date.renderDate = overrides.renderDate || function renderDate(locals) {
    var value = locals.value.map(function (x) {
      return x || '';
    });

    function onDayChange(evt) {
      value[2] = evt.target.value === '-' ? null : evt.target.value;
      locals.onChange(value);
    }

    function onMonthChange(evt) {
      value[1] = evt.target.value === '-' ? null : evt.target.value;
      locals.onChange(value);
    }

    function onYearChange(evt) {
      value[0] = evt.target.value.trim() === '' ? null : evt.target.value.trim();
      locals.onChange(value);
    }

    var parts = {
      D: _react2['default'].createElement(
        'li',
        { key: 'D' },
        _react2['default'].createElement(
          'select',
          { disabled: locals.disabled, className: 'form-control', value: value[2], onChange: onDayChange },
          days
        )
      ),
      M: _react2['default'].createElement(
        'li',
        { key: 'M' },
        _react2['default'].createElement(
          'select',
          { disabled: locals.disabled, className: 'form-control', value: value[1], onChange: onMonthChange },
          months
        )
      ),
      YY: _react2['default'].createElement(
        'li',
        { key: 'YY' },
        _react2['default'].createElement('input', { type: 'text', size: '5', disabled: locals.disabled, className: 'form-control', value: value[0], onChange: onYearChange })
      )
    };

    return _react2['default'].createElement(
      'ul',
      { className: 'nav nav-pills' },
      locals.order.map(function (id) {
        return parts[id];
      })
    );
  };

  date.renderVertical = overrides.renderVertical || function renderVertical(locals) {
    return [date.renderLabel(locals), date.renderDate(locals), date.renderError(locals), date.renderHelp(locals)];
  };

  date.renderHorizontal = overrides.renderHorizontal || function renderHorizontal(locals) {
    var label = date.renderLabel(locals);
    var className = label ? locals.config.horizontal.getInputClassName() : locals.config.horizontal.getOffsetClassName();
    return [label, _react2['default'].createElement(
      'div',
      { className: _classnames2['default'](className) },
      date.renderDate(locals),
      date.renderError(locals),
      date.renderHelp(locals)
    )];
  };

  date.renderFormGroup = overrides.renderFormGroup || _renderFormGroup2['default'];

  date.clone = function clone() {
    var newOverrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return create(_extends({}, overrides, newOverrides));
  };

  return date;
}

exports['default'] = create();
module.exports = exports['default'];