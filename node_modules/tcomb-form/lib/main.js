/*! @preserve
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Giulio Canti
 *
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _indexJs = require('./index.js');

var _indexJs2 = _interopRequireDefault(_indexJs);

var _tcombFormTemplatesBootstrap = require('tcomb-form-templates-bootstrap');

var _tcombFormTemplatesBootstrap2 = _interopRequireDefault(_tcombFormTemplatesBootstrap);

var _i18nEn = require('./i18n/en');

var _i18nEn2 = _interopRequireDefault(_i18nEn);

_indexJs2['default'].form.Form.templates = _tcombFormTemplatesBootstrap2['default'];
_indexJs2['default'].form.Form.i18n = _i18nEn2['default'];

exports['default'] = _indexJs2['default'];
module.exports = exports['default'];