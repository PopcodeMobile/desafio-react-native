'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getAlert = require('./getAlert');

var _getAlert2 = _interopRequireDefault(_getAlert);

var _renderFieldset = require('./renderFieldset');

var _renderFieldset2 = _interopRequireDefault(_renderFieldset);

function create() {
  var overrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  function struct(locals) {
    var children = [];

    if (locals.help) {
      children.push(struct.renderHelp(locals));
    }

    if (locals.error && locals.hasError) {
      children.push(struct.renderError(locals));
    }

    children = children.concat(locals.order.map(function (name) {
      return locals.inputs[name];
    }));

    return struct.renderFieldset(children, locals);
  }

  struct.renderHelp = overrides.renderHelp || function renderHelp(locals) {
    return _getAlert2['default']('info', locals.help);
  };

  struct.renderError = overrides.renderError || function renderError(locals) {
    return _getAlert2['default']('danger', locals.error);
  };

  struct.renderFieldset = overrides.renderFieldset || _renderFieldset2['default'];

  struct.clone = function clone() {
    var newOverrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return create(_extends({}, overrides, newOverrides));
  };

  return struct;
}

exports['default'] = create();
module.exports = exports['default'];