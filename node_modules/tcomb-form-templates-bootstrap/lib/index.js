'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _date = require('./date');

var _date2 = _interopRequireDefault(_date);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

var _select = require('./select');

var _select2 = _interopRequireDefault(_select);

var _struct = require('./struct');

var _struct2 = _interopRequireDefault(_struct);

var _textbox = require('./textbox');

var _textbox2 = _interopRequireDefault(_textbox);

exports['default'] = {
  checkbox: _checkbox2['default'],
  date: _date2['default'],
  list: _list2['default'],
  radio: _radio2['default'],
  select: _select2['default'],
  struct: _struct2['default'],
  textbox: _textbox2['default']
};
module.exports = exports['default'];