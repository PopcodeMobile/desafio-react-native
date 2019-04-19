'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var Positive = _tcomb2['default'].refinement(_tcomb2['default'].Number, function (n) {
  return n % 1 === 0 && n >= 0;
}, 'Positive');

var Cols = _tcomb2['default'].tuple([Positive, Positive], 'Cols');

var Breakpoints = _tcomb2['default'].struct({
  xs: _tcomb2['default'].maybe(Cols),
  sm: _tcomb2['default'].maybe(Cols),
  md: _tcomb2['default'].maybe(Cols),
  lg: _tcomb2['default'].maybe(Cols)
}, 'Breakpoints');

function getBreakpointsClassName(breakpoints) {
  var className = {};
  for (var size in breakpoints) {
    if (breakpoints.hasOwnProperty(size)) {
      className['col-' + size + '-' + breakpoints[size]] = true;
    }
  }
  return className;
}

function getOffsetsClassName(breakpoints) {
  var className = {};
  for (var size in breakpoints) {
    if (breakpoints.hasOwnProperty(size)) {
      className['col-' + size + '-offset-' + (12 - breakpoints[size])] = true;
    }
  }
  return className;
}

Breakpoints.prototype.getBreakpoints = function getBreakpoints(colIndex) {
  var breakpoints = {};
  for (var size in this) {
    if (this.hasOwnProperty(size) && !_tcomb2['default'].Nil.is(this[size])) {
      breakpoints[size] = this[size][colIndex];
    }
  }
  return breakpoints;
};

Breakpoints.prototype.getLabelClassName = function getLabelClassName() {
  return getBreakpointsClassName(this.getBreakpoints(0));
};

Breakpoints.prototype.getInputClassName = function getInputClassName() {
  return getBreakpointsClassName(this.getBreakpoints(1));
};

Breakpoints.prototype.getOffsetClassName = function getOffsetClassName() {
  return _tcomb2['default'].mixin(getOffsetsClassName(this.getBreakpoints(1)), getBreakpointsClassName(this.getBreakpoints(1)));
};

exports['default'] = Breakpoints;
module.exports = exports['default'];