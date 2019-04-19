'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _getAlert = require('./getAlert');

var _getAlert2 = _interopRequireDefault(_getAlert);

var _renderFieldset = require('./renderFieldset');

var _renderFieldset2 = _interopRequireDefault(_renderFieldset);

function getBreakpoints(breakpoints) {
  var className = {};
  for (var size in breakpoints) {
    if (breakpoints.hasOwnProperty(size)) {
      className['col-' + size + '-' + breakpoints[size]] = true;
    }
  }
  return className;
}

function getCol(breakpoints, content) {
  var className = _classnames2['default'](getBreakpoints(breakpoints));
  return _react2['default'].createElement(
    'div',
    { className: className },
    content
  );
}

function create() {
  var overrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  function list(locals) {
    var children = [];

    if (locals.help) {
      children.push(list.renderHelp(locals));
    }

    if (locals.error && locals.hasError) {
      children.push(list.renderError(locals));
    }

    children = children.concat(locals.items.map(function (item) {
      return item.buttons.length === 0 ? list.renderRowWithoutButtons(item, locals) : list.renderRow(item, locals);
    }));

    if (locals.add) {
      children.push(list.renderAddButton(locals));
    }

    return list.renderFieldset(children, locals);
  }

  list.renderHelp = overrides.renderHelp || function renderHelp(locals) {
    return _getAlert2['default']('info', locals.help);
  };

  list.renderError = overrides.renderError || function renderError(locals) {
    return _getAlert2['default']('danger', locals.error);
  };

  list.renderRowWithoutButtons = overrides.renderRowWithoutButtons || function renderRowWithoutButtons(item /* , locals*/) {
    return _react2['default'].createElement(
      'div',
      { className: 'row', key: item.key },
      getCol({ xs: 12 }, item.input)
    );
  };

  list.renderRowButton = overrides.renderRowButton || function renderRowButton(button) {
    return _react2['default'].createElement(
      'button',
      { key: button.type, type: 'button', className: 'btn btn-default btn-' + button.type, onClick: button.click },
      button.label
    );
  };

  list.renderButtonGroup = overrides.renderButtonGroup || function renderButtonGroup(buttons /* , locals*/) {
    return _react2['default'].createElement(
      'div',
      { className: 'btn-group' },
      buttons.map(list.renderRowButton)
    );
  };

  list.renderRow = overrides.renderRow || function renderRow(row, locals) {
    return _react2['default'].createElement(
      'div',
      { className: 'row' },
      getCol({ sm: 8, xs: 6 }, row.input),
      getCol({ sm: 4, xs: 6 }, list.renderButtonGroup(row.buttons, locals))
    );
  };

  list.renderAddButton = overrides.renderAddButton || function renderAddButton(locals) {
    var button = locals.add;
    return _react2['default'].createElement(
      'div',
      { className: 'row' },
      _react2['default'].createElement(
        'div',
        { className: 'col-lg-12' },
        _react2['default'].createElement(
          'div',
          { style: { marginBottom: '15px' } },
          _react2['default'].createElement(
            'button',
            { type: 'button', className: 'btn btn-default btn-' + button.type, onClick: button.click },
            button.label
          )
        )
      )
    );
  };

  list.renderFieldset = overrides.renderFieldset || _renderFieldset2['default'];

  list.clone = function clone() {
    var newOverrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return create(_extends({}, overrides, newOverrides));
  };

  return list;
}

exports['default'] = create();
module.exports = exports['default'];