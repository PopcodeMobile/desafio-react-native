'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tcombValidation = require('tcomb-validation');

var _tcombValidation2 = _interopRequireDefault(_tcombValidation);

var _util = require('./util');

var Nil = _tcombValidation2['default'].Nil;
var assert = _tcombValidation2['default'].assert;
var SOURCE = 'tcomb-form';
var noobj = Object.freeze({});
var noarr = Object.freeze([]);
var noop = function noop() {};

function getFormComponent(_x, _x2) {
  var _again = true;

  _function: while (_again) {
    var type = _x,
        options = _x2;
    _again = false;

    if (options.factory) {
      return options.factory;
    }
    if (type.getTcombFormFactory) {
      return type.getTcombFormFactory(options);
    }
    var name = _tcombValidation2['default'].getTypeName(type);
    switch (type.meta.kind) {
      case 'irreducible':
        if (type === _tcombValidation2['default'].Boolean) {
          return Checkbox; // eslint-disable-line no-use-before-define
        } else if (type === _tcombValidation2['default'].Date) {
            return Datetime; // eslint-disable-line no-use-before-define
          }
        return Textbox; // eslint-disable-line no-use-before-define
      case 'struct':
      case 'interface':
        return Struct; // eslint-disable-line no-use-before-define
      case 'list':
        return List; // eslint-disable-line no-use-before-define
      case 'enums':
        return Select; // eslint-disable-line no-use-before-define
      case 'maybe':
      case 'subtype':
        _x = type.meta.type;
        _x2 = options;
        _again = true;
        name = undefined;
        continue _function;

      default:
        _tcombValidation2['default'].fail('[' + SOURCE + '] unsupported kind ' + type.meta.kind + ' for type ' + name);
    }
  }
}

exports.getComponent = getFormComponent;

function sortByText(a, b) {
  return a.text.localeCompare(b.text);
}

function getComparator(order) {
  return ({
    asc: sortByText,
    desc: function desc(a, b) {
      return -sortByText(a, b);
    }
  })[order];
}

var decorators = {

  template: function template(name) {
    return function (Component) {
      Component.prototype.getTemplate = function getTemplate() {
        return this.props.options.template || this.props.ctx.templates[name];
      };
    };
  },

  attrs: function attrs(Component) {
    Component.prototype.getAttrs = function getAttrs() {
      var attrs = _tcombValidation2['default'].mixin({}, this.props.options.attrs);
      attrs.id = this.getId();
      attrs.name = this.getName();
      return attrs;
    };
  },

  templates: function templates(Component) {
    Component.prototype.getTemplates = function getTemplates() {
      return _util.merge(this.props.ctx.templates, this.props.options.templates);
    };
  }

};

exports.decorators = decorators;

var Component = (function (_React$Component) {
  _inherits(Component, _React$Component);

  _createClass(Component, null, [{
    key: 'transformer',
    value: {
      format: function format(value) {
        return Nil.is(value) ? null : value;
      },
      parse: function parse(value) {
        return value;
      }
    },
    enumerable: true
  }]);

  function Component(props) {
    var _this = this;

    _classCallCheck(this, Component);

    _React$Component.call(this, props);

    this.onChange = function (value) {
      _this.setState({ value: value, isPristine: false }, function () {
        _this.props.onChange(value, _this.props.ctx.path);
      });
    };

    this.typeInfo = _util.getTypeInfo(props.type);
    this.state = {
      isPristine: true,
      hasError: false,
      value: this.getTransformer().format(props.value)
    };
  }

  Component.prototype.getTransformer = function getTransformer() {
    return this.props.options.transformer || this.constructor.transformer;
  };

  Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    var props = this.props;
    var state = this.state;

    var nextPath = Boolean(nextProps.ctx) && nextProps.ctx.path;
    var curPath = Boolean(props.ctx) && props.ctx.path;

    var should = nextState.value !== state.value || nextState.hasError !== state.hasError || nextProps.options !== props.options || nextProps.type !== props.type || _util.isArraysShallowDiffers(nextPath, curPath);

    return should;
  };

  Component.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (props.type !== this.props.type) {
      this.typeInfo = _util.getTypeInfo(props.type);
    }
    var value = this.getTransformer().format(props.value);
    this.setState({ value: value });
  };

  Component.prototype.getValidationOptions = function getValidationOptions() {
    var context = this.props.context || this.props.ctx.context;
    return {
      path: this.props.ctx.path,
      context: _tcombValidation2['default'].mixin(_tcombValidation2['default'].mixin({}, context), { options: this.props.options })
    };
  };

  Component.prototype.getValue = function getValue() {
    return this.getTransformer().parse(this.state.value);
  };

  Component.prototype.isValueNully = function isValueNully() {
    return Nil.is(this.getValue());
  };

  Component.prototype.removeErrors = function removeErrors() {
    this.setState({ hasError: false });
  };

  Component.prototype.validate = function validate() {
    var result = _tcombValidation2['default'].validate(this.getValue(), this.props.type, this.getValidationOptions());
    this.setState({ hasError: !result.isValid() });
    return result;
  };

  Component.prototype.getAuto = function getAuto() {
    return this.props.options.auto || this.props.ctx.auto;
  };

  Component.prototype.getI18n = function getI18n() {
    return this.props.options.i18n || this.props.ctx.i18n;
  };

  Component.prototype.getDefaultLabel = function getDefaultLabel() {
    var label = this.props.ctx.label;
    if (label) {
      var suffix = this.typeInfo.isMaybe ? this.getI18n().optional : this.getI18n().required;
      return label + suffix;
    }
  };

  Component.prototype.getLabel = function getLabel() {
    var label = this.props.options.label || this.props.options.legend;
    if (Nil.is(label) && this.getAuto() === 'labels') {
      label = this.getDefaultLabel();
    }
    return label;
  };

  Component.prototype.getError = function getError() {
    if (this.hasError()) {
      var error = this.props.options.error || this.typeInfo.getValidationErrorMessage;
      if (_tcombValidation2['default'].Function.is(error)) {
        var _getValidationOptions = this.getValidationOptions();

        var path = _getValidationOptions.path;
        var context = _getValidationOptions.context;

        return error(this.getValue(), path, context);
      }
      return error;
    }
  };

  Component.prototype.hasError = function hasError() {
    return this.props.options.hasError || this.state.hasError;
  };

  Component.prototype.getConfig = function getConfig() {
    return _util.merge(this.props.ctx.config, this.props.options.config);
  };

  Component.prototype.getId = function getId() {
    var attrs = this.props.options.attrs || noobj;
    if (attrs.id) {
      return attrs.id;
    }
    if (!this.uid) {
      this.uid = this.props.ctx.uidGenerator.next();
    }
    return this.uid;
  };

  Component.prototype.getName = function getName() {
    return this.props.options.name || this.props.ctx.name || this.getId();
  };

  Component.prototype.getLocals = function getLocals() {
    var options = this.props.options;
    var value = this.state.value;
    return {
      typeInfo: this.typeInfo,
      path: this.props.ctx.path,
      isPristine: this.state.isPristine,
      error: this.getError(),
      hasError: this.hasError(),
      label: this.getLabel(),
      onChange: this.onChange,
      config: this.getConfig(),
      value: value,
      disabled: options.disabled,
      help: options.help,
      context: this.props.ctx.context
    };
  };

  Component.prototype.render = function render() {
    var locals = this.getLocals();
    if (process.env.NODE_ENV !== 'production') {
      // getTemplate is the only required implementation when extending Component
      assert(_tcombValidation2['default'].Function.is(this.getTemplate), '[' + SOURCE + '] missing getTemplate method of component ' + this.constructor.name);
    }
    var template = this.getTemplate();
    return template(locals);
  };

  return Component;
})(_react2['default'].Component);

exports.Component = Component;

function toNull(value) {
  return _tcombValidation2['default'].String.is(value) && value.trim() === '' || Nil.is(value) ? null : value;
}

function parseNumber(value) {
  var n = parseFloat(value);
  var isNumeric = value == n; // eslint-disable-line eqeqeq
  return isNumeric ? n : toNull(value);
}

var Textbox = (function (_Component) {
  _inherits(Textbox, _Component);

  function Textbox() {
    _classCallCheck(this, _Textbox);

    _Component.apply(this, arguments);
  }

  Textbox.prototype.getTransformer = function getTransformer() {
    var options = this.props.options;
    if (options.transformer) {
      return options.transformer;
    } else if (this.typeInfo.innerType === _tcombValidation2['default'].Number) {
      return Textbox.numberTransformer;
    }
    return Textbox.transformer;
  };

  Textbox.prototype.getPlaceholder = function getPlaceholder() {
    var attrs = this.props.options.attrs || noobj;
    var placeholder = attrs.placeholder;
    if (Nil.is(placeholder) && this.getAuto() === 'placeholders') {
      placeholder = this.getDefaultLabel();
    }
    return placeholder;
  };

  Textbox.prototype.getLocals = function getLocals() {
    var locals = _Component.prototype.getLocals.call(this);
    locals.attrs = this.getAttrs();
    locals.attrs.placeholder = this.getPlaceholder();
    locals.type = this.props.options.type || 'text';
    return locals;
  };

  _createClass(Textbox, null, [{
    key: 'transformer',
    value: {
      format: function format(value) {
        return Nil.is(value) ? '' : value;
      },
      parse: toNull
    },
    enumerable: true
  }, {
    key: 'numberTransformer',
    value: {
      format: function format(value) {
        return Nil.is(value) ? '' : String(value);
      },
      parse: parseNumber
    },
    enumerable: true
  }]);

  var _Textbox = Textbox;
  Textbox = decorators.template('textbox')(Textbox) || Textbox;
  Textbox = decorators.attrs(Textbox) || Textbox;
  return Textbox;
})(Component);

exports.Textbox = Textbox;

var Checkbox = (function (_Component2) {
  _inherits(Checkbox, _Component2);

  function Checkbox() {
    _classCallCheck(this, _Checkbox);

    _Component2.apply(this, arguments);
  }

  Checkbox.prototype.getLocals = function getLocals() {
    var locals = _Component2.prototype.getLocals.call(this);
    locals.attrs = this.getAttrs();
    // checkboxes must always have a label
    locals.label = locals.label || this.getDefaultLabel();
    return locals;
  };

  _createClass(Checkbox, null, [{
    key: 'transformer',
    value: {
      format: function format(value) {
        return Nil.is(value) ? false : value;
      },
      parse: function parse(value) {
        return value;
      }
    },
    enumerable: true
  }]);

  var _Checkbox = Checkbox;
  Checkbox = decorators.template('checkbox')(Checkbox) || Checkbox;
  Checkbox = decorators.attrs(Checkbox) || Checkbox;
  return Checkbox;
})(Component);

exports.Checkbox = Checkbox;

var Select = (function (_Component3) {
  _inherits(Select, _Component3);

  function Select() {
    _classCallCheck(this, _Select);

    _Component3.apply(this, arguments);
  }

  Select.prototype.getTransformer = function getTransformer() {
    var options = this.props.options;
    if (options.transformer) {
      return options.transformer;
    }
    if (this.isMultiple()) {
      return Select.multipleTransformer;
    }
    return Select.transformer(this.getNullOption());
  };

  Select.prototype.getNullOption = function getNullOption() {
    return this.props.options.nullOption || { value: '', text: '-' };
  };

  Select.prototype.isMultiple = function isMultiple() {
    return this.typeInfo.innerType.meta.kind === 'list';
  };

  Select.prototype.getEnum = function getEnum() {
    return this.isMultiple() ? _util.getTypeInfo(this.typeInfo.innerType.meta.type).innerType : this.typeInfo.innerType;
  };

  Select.prototype.getOptions = function getOptions() {
    var options = this.props.options;
    var items = options.options ? options.options.slice() : _util.getOptionsOfEnum(this.getEnum());
    if (options.order) {
      items.sort(getComparator(options.order));
    }
    var nullOption = this.getNullOption();
    if (!this.isMultiple() && options.nullOption !== false) {
      items.unshift(nullOption);
    }
    return items;
  };

  Select.prototype.getLocals = function getLocals() {
    var locals = _Component3.prototype.getLocals.call(this);
    locals.attrs = this.getAttrs();
    locals.options = this.getOptions();
    locals.isMultiple = this.isMultiple();
    return locals;
  };

  _createClass(Select, null, [{
    key: 'transformer',
    value: function value(nullOption) {
      return {
        format: function format(value) {
          return Nil.is(value) && nullOption ? nullOption.value : value;
        },
        parse: function parse(value) {
          return nullOption && nullOption.value === value ? null : value;
        }
      };
    },
    enumerable: true
  }, {
    key: 'multipleTransformer',
    value: {
      format: function format(value) {
        return Nil.is(value) ? noarr : value;
      },
      parse: function parse(value) {
        return value;
      }
    },
    enumerable: true
  }]);

  var _Select = Select;
  Select = decorators.template('select')(Select) || Select;
  Select = decorators.attrs(Select) || Select;
  return Select;
})(Component);

exports.Select = Select;

var Radio = (function (_Component4) {
  _inherits(Radio, _Component4);

  function Radio() {
    _classCallCheck(this, _Radio);

    _Component4.apply(this, arguments);
  }

  Radio.prototype.getOptions = function getOptions() {
    var options = this.props.options;
    var items = options.options ? options.options.slice() : _util.getOptionsOfEnum(this.typeInfo.innerType);
    if (options.order) {
      items.sort(getComparator(options.order));
    }
    return items;
  };

  Radio.prototype.getLocals = function getLocals() {
    var locals = _Component4.prototype.getLocals.call(this);
    locals.attrs = this.getAttrs();
    locals.options = this.getOptions();
    return locals;
  };

  _createClass(Radio, null, [{
    key: 'transformer',
    value: {
      format: function format(value) {
        return Nil.is(value) ? null : value;
      },
      parse: function parse(value) {
        return value;
      }
    },
    enumerable: true
  }]);

  var _Radio = Radio;
  Radio = decorators.template('radio')(Radio) || Radio;
  Radio = decorators.attrs(Radio) || Radio;
  return Radio;
})(Component);

exports.Radio = Radio;

var defaultDatetimeValue = Object.freeze([null, null, null]);

var Datetime = (function (_Component5) {
  _inherits(Datetime, _Component5);

  function Datetime() {
    _classCallCheck(this, _Datetime);

    _Component5.apply(this, arguments);
  }

  Datetime.prototype.getOrder = function getOrder() {
    return this.props.options.order || ['M', 'D', 'YY'];
  };

  Datetime.prototype.getLocals = function getLocals() {
    var locals = _Component5.prototype.getLocals.call(this);
    locals.attrs = this.getAttrs();
    locals.order = this.getOrder();
    return locals;
  };

  _createClass(Datetime, null, [{
    key: 'transformer',
    value: {
      format: function format(value) {
        if (_tcombValidation2['default'].Array.is(value)) {
          return value;
        } else if (_tcombValidation2['default'].Date.is(value)) {
          return [value.getFullYear(), value.getMonth(), value.getDate()].map(String);
        }
        return defaultDatetimeValue;
      },
      parse: function parse(value) {
        var numbers = value.map(parseNumber);
        if (numbers.every(_tcombValidation2['default'].Number.is)) {
          return new Date(numbers[0], numbers[1], numbers[2]);
        } else if (numbers.every(Nil.is)) {
          return null;
        }
        return numbers;
      }
    },
    enumerable: true
  }]);

  var _Datetime = Datetime;
  Datetime = decorators.template('date')(Datetime) || Datetime;
  Datetime = decorators.attrs(Datetime) || Datetime;
  return Datetime;
})(Component);

exports.Datetime = Datetime;

var ComponentWithChildRefs = (function (_Component6) {
  _inherits(ComponentWithChildRefs, _Component6);

  function ComponentWithChildRefs() {
    var _this2 = this;

    _classCallCheck(this, ComponentWithChildRefs);

    _Component6.apply(this, arguments);

    this.childRefs = {};

    this.setChildRefFor = function (prop) {
      return function (ref) {
        if (ref) {
          _this2.childRefs[prop] = ref;
        } else {
          delete _this2.childRefs[prop];
        }
      };
    };
  }

  return ComponentWithChildRefs;
})(Component);

var Struct = (function (_ComponentWithChildRefs) {
  _inherits(Struct, _ComponentWithChildRefs);

  function Struct() {
    var _this3 = this;

    _classCallCheck(this, _Struct);

    _ComponentWithChildRefs.apply(this, arguments);

    this.onChange = function (fieldName, fieldValue, path, kind) {
      var value = _tcombValidation2['default'].mixin({}, _this3.state.value);
      value[fieldName] = fieldValue;
      _this3.setState({ value: value, isPristine: false }, function () {
        _this3.props.onChange(value, path, kind);
      });
    };
  }

  Struct.prototype.isValueNully = function isValueNully() {
    var _this4 = this;

    return Object.keys(this.childRefs).every(function (key) {
      return _this4.childRefs[key].isValueNully();
    });
  };

  Struct.prototype.removeErrors = function removeErrors() {
    var _this5 = this;

    this.setState({ hasError: false });
    Object.keys(this.childRefs).forEach(function (key) {
      return _this5.childRefs[key].removeErrors();
    });
  };

  Struct.prototype.validate = function validate() {
    var value = {};
    var errors = [];
    var result = undefined;

    if (this.typeInfo.isMaybe && this.isValueNully()) {
      this.removeErrors();
      return new _tcombValidation2['default'].ValidationResult({ errors: [], value: null });
    }

    var props = this.getTypeProps();
    for (var ref in props) {
      if (this.childRefs.hasOwnProperty(ref)) {
        result = this.childRefs[ref].validate();
        errors = errors.concat(result.errors);
        value[ref] = result.value;
      }
    }

    if (errors.length === 0) {
      var InnerType = this.typeInfo.innerType;
      value = this.getTransformer().parse(value);
      value = new InnerType(value);
      if (this.typeInfo.isSubtype) {
        result = _tcombValidation2['default'].validate(value, this.props.type, this.getValidationOptions());
        errors = result.errors;
      }
    }

    this.setState({ hasError: errors.length > 0 });
    return new _tcombValidation2['default'].ValidationResult({ errors: errors, value: value });
  };

  Struct.prototype.getTemplate = function getTemplate() {
    return this.props.options.template || this.getTemplates().struct;
  };

  Struct.prototype.getTypeProps = function getTypeProps() {
    return this.typeInfo.innerType.meta.props;
  };

  Struct.prototype.getOrder = function getOrder() {
    return this.props.options.order || Object.keys(this.getTypeProps());
  };

  Struct.prototype.getInputs = function getInputs() {
    var _props = this.props;
    var options = _props.options;
    var ctx = _props.ctx;

    var props = this.getTypeProps();
    var auto = this.getAuto();
    var i18n = this.getI18n();
    var config = this.getConfig();
    var templates = this.getTemplates();
    var value = this.state.value;
    var inputs = {};

    for (var prop in props) {
      if (props.hasOwnProperty(prop)) {
        var type = props[prop];
        var propValue = value[prop];
        var propType = _util.getTypeFromUnion(type, propValue);
        var fieldsOptions = options.fields || noobj;
        var propOptions = _util.getComponentOptions(fieldsOptions[prop], noobj, propValue, type);
        inputs[prop] = _react2['default'].createElement(getFormComponent(propType, propOptions), {
          key: prop,
          ref: this.setChildRefFor(prop),
          type: propType,
          options: propOptions,
          value: propValue,
          onChange: this.onChange.bind(this, prop),
          ctx: {
            context: ctx.context,
            uidGenerator: ctx.uidGenerator,
            auto: auto,
            config: config,
            name: ctx.name ? ctx.name + '[' + prop + ']' : prop,
            label: _util.humanize(prop),
            i18n: i18n,
            templates: templates,
            path: ctx.path.concat(prop)
          }
        });
      }
    }
    return inputs;
  };

  Struct.prototype.getLocals = function getLocals() {
    var options = this.props.options;
    var locals = _ComponentWithChildRefs.prototype.getLocals.call(this);
    locals.order = this.getOrder();
    locals.inputs = this.getInputs();
    locals.className = options.className;
    return locals;
  };

  _createClass(Struct, null, [{
    key: 'transformer',
    value: {
      format: function format(value) {
        return Nil.is(value) ? noobj : value;
      },
      parse: function parse(value) {
        return value;
      }
    },
    enumerable: true
  }]);

  var _Struct = Struct;
  Struct = decorators.templates(Struct) || Struct;
  return Struct;
})(ComponentWithChildRefs);

exports.Struct = Struct;

function toSameLength(value, keys, uidGenerator) {
  if (value.length === keys.length) {
    return keys;
  }
  var ret = [];
  for (var i = 0, len = value.length; i < len; i++) {
    ret[i] = keys[i] || uidGenerator.next();
  }
  return ret;
}

var List = (function (_ComponentWithChildRefs2) {
  _inherits(List, _ComponentWithChildRefs2);

  _createClass(List, null, [{
    key: 'transformer',
    value: {
      format: function format(value) {
        return Nil.is(value) ? noarr : value;
      },
      parse: function parse(value) {
        return value;
      }
    },
    enumerable: true
  }]);

  function List(props) {
    var _this6 = this;

    _classCallCheck(this, _List);

    _ComponentWithChildRefs2.call(this, props);

    this.onChange = function (value, keys, path, kind) {
      var allkeys = toSameLength(value, keys, _this6.props.ctx.uidGenerator);
      _this6.setState({ value: value, keys: allkeys, isPristine: false }, function () {
        _this6.props.onChange(value, path, kind);
      });
    };

    this.addItem = function () {
      var value = _this6.state.value.concat(undefined);
      var keys = _this6.state.keys.concat(_this6.props.ctx.uidGenerator.next());
      _this6.onChange(value, keys, _this6.props.ctx.path.concat(value.length - 1), 'add');
    };

    this.state.keys = this.state.value.map(function () {
      return props.ctx.uidGenerator.next();
    });
  }

  List.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (props.type !== this.props.type) {
      this.typeInfo = _util.getTypeInfo(props.type);
    }
    var value = this.getTransformer().format(props.value);
    this.setState({
      value: value,
      keys: toSameLength(value, this.state.keys, props.ctx.uidGenerator)
    });
  };

  List.prototype.isValueNully = function isValueNully() {
    return this.state.value.length === 0;
  };

  List.prototype.removeErrors = function removeErrors() {
    var _this7 = this;

    this.setState({ hasError: false });
    Object.keys(this.childRefs).forEach(function (key) {
      return _this7.childRefs[key].removeErrors();
    });
  };

  List.prototype.validate = function validate() {
    var value = [];
    var errors = [];
    var result = undefined;

    if (this.typeInfo.isMaybe && this.isValueNully()) {
      this.removeErrors();
      return new _tcombValidation2['default'].ValidationResult({ errors: [], value: null });
    }

    for (var i = 0, len = this.state.value.length; i < len; i++) {
      result = this.childRefs[i].validate();
      errors = errors.concat(result.errors);
      value.push(result.value);
    }

    // handle subtype
    if (this.typeInfo.isSubtype && errors.length === 0) {
      value = this.getTransformer().parse(value);
      result = _tcombValidation2['default'].validate(value, this.props.type, this.getValidationOptions());
      errors = result.errors;
    }

    this.setState({ hasError: errors.length > 0 });
    return new _tcombValidation2['default'].ValidationResult({ errors: errors, value: value });
  };

  List.prototype.onItemChange = function onItemChange(itemIndex, itemValue, path, kind) {
    var value = this.state.value.slice();
    value[itemIndex] = itemValue;
    this.onChange(value, this.state.keys, path, kind);
  };

  List.prototype.removeItem = function removeItem(i) {
    var value = this.state.value.slice();
    value.splice(i, 1);
    var keys = this.state.keys.slice();
    keys.splice(i, 1);
    this.onChange(value, keys, this.props.ctx.path.concat(i), 'remove');
  };

  List.prototype.moveUpItem = function moveUpItem(i) {
    if (i > 0) {
      this.onChange(_util.move(this.state.value.slice(), i, i - 1), _util.move(this.state.keys.slice(), i, i - 1), this.props.ctx.path.concat(i), 'moveUp');
    }
  };

  List.prototype.moveDownItem = function moveDownItem(i) {
    if (i < this.state.value.length - 1) {
      this.onChange(_util.move(this.state.value.slice(), i, i + 1), _util.move(this.state.keys.slice(), i, i + 1), this.props.ctx.path.concat(i), 'moveDown');
    }
  };

  List.prototype.getTemplate = function getTemplate() {
    return this.props.options.template || this.getTemplates().list;
  };

  List.prototype.getItems = function getItems() {
    var _this8 = this;

    var _props2 = this.props;
    var options = _props2.options;
    var ctx = _props2.ctx;

    var auto = this.getAuto();
    var i18n = this.getI18n();
    var config = this.getConfig();
    var templates = this.getTemplates();
    var value = this.state.value;
    return value.map(function (itemValue, i) {
      var type = _this8.typeInfo.innerType.meta.type;
      var itemType = _util.getTypeFromUnion(type, itemValue);
      var itemOptions = _util.getComponentOptions(options.item, noobj, itemValue, type);
      var ItemComponent = getFormComponent(itemType, itemOptions);
      var buttons = [];
      if (!options.disableRemove) {
        buttons.push({
          type: 'remove',
          label: i18n.remove,
          click: _this8.removeItem.bind(_this8, i)
        });
      }
      if (!options.disableOrder) {
        buttons.push({
          type: 'move-up',
          label: i18n.up,
          click: _this8.moveUpItem.bind(_this8, i)
        });
      }
      if (!options.disableOrder) {
        buttons.push({
          type: 'move-down',
          label: i18n.down,
          click: _this8.moveDownItem.bind(_this8, i)
        });
      }
      return {
        input: _react2['default'].createElement(ItemComponent, {
          ref: _this8.setChildRefFor(i),
          type: itemType,
          options: itemOptions,
          value: itemValue,
          onChange: _this8.onItemChange.bind(_this8, i),
          ctx: {
            context: ctx.context,
            uidGenerator: ctx.uidGenerator,
            auto: auto,
            config: config,
            i18n: i18n,
            name: ctx.name ? ctx.name + '[' + i + ']' : String(i),
            templates: templates,
            path: ctx.path.concat(i)
          }
        }),
        key: _this8.state.keys[i],
        buttons: buttons
      };
    });
  };

  List.prototype.getLocals = function getLocals() {
    var options = this.props.options;
    var i18n = this.getI18n();
    var locals = _ComponentWithChildRefs2.prototype.getLocals.call(this);
    locals.add = options.disableAdd ? null : {
      type: 'add',
      label: i18n.add,
      click: this.addItem
    };
    locals.items = this.getItems();
    locals.className = options.className;
    return locals;
  };

  var _List = List;
  List = decorators.templates(List) || List;
  return List;
})(ComponentWithChildRefs);

exports.List = List;

var Form = (function (_React$Component2) {
  _inherits(Form, _React$Component2);

  function Form() {
    var _this9 = this;

    _classCallCheck(this, Form);

    _React$Component2.apply(this, arguments);

    this.inputRef = null;

    this.setInputRef = function (ref) {
      _this9.inputRef = ref;
    };
  }

  Form.prototype.validate = function validate() {
    return this.inputRef.validate();
  };

  Form.prototype.getValue = function getValue() {
    var result = this.validate();
    return result.isValid() ? result.value : null;
  };

  Form.prototype.getComponent = function getComponent(path) {
    var points = _tcombValidation2['default'].String.is(path) ? path.split('.') : path;
    return points.reduce(function (input, name) {
      return input.childRefs[name];
    }, this.inputRef);
  };

  Form.prototype.getSeed = function getSeed() {
    var rii = this._reactInternalInstance;
    if (rii) {
      if (rii._hostContainerInfo) {
        return rii._hostContainerInfo._idCounter;
      }
      if (rii._nativeContainerInfo) {
        return rii._nativeContainerInfo._idCounter;
      }
      if (rii._rootNodeID) {
        return rii._rootNodeID;
      }
    }
    return '0';
  };

  Form.prototype.getUIDGenerator = function getUIDGenerator() {
    this.uidGenerator = this.uidGenerator || new _util.UIDGenerator(this.getSeed());
    return this.uidGenerator;
  };

  Form.prototype.render = function render() {
    var i18n = Form.i18n;
    var templates = Form.templates;

    if (process.env.NODE_ENV !== 'production') {
      assert(_tcombValidation2['default'].isType(this.props.type), '[' + SOURCE + '] missing required prop type');
      assert(_tcombValidation2['default'].maybe(_tcombValidation2['default'].Object).is(this.props.options) || _tcombValidation2['default'].Function.is(this.props.options) || _tcombValidation2['default'].list(_tcombValidation2['default'].maybe(_tcombValidation2['default'].Object)).is(this.props.options), '[' + SOURCE + '] prop options, if specified, must be an object, a function returning the options or a list of options for unions');
      assert(_tcombValidation2['default'].Object.is(templates), '[' + SOURCE + '] missing templates config');
      assert(_tcombValidation2['default'].Object.is(i18n), '[' + SOURCE + '] missing i18n config');
    }

    var value = this.props.value;
    var type = _util.getTypeFromUnion(this.props.type, value);
    var options = _util.getComponentOptions(this.props.options, noobj, value, this.props.type);

    // this is in the render method because I need this._reactInternalInstance._rootNodeID in React ^0.14.0
    // and this._reactInternalInstance._nativeContainerInfo._idCounter in React ^15.0.0
    var uidGenerator = this.getUIDGenerator();

    return _react2['default'].createElement(getFormComponent(type, options), {
      ref: this.setInputRef,
      type: type,
      options: options,
      value: value,
      onChange: this.props.onChange || noop,
      ctx: this.props.ctx || {
        context: this.props.context,
        uidGenerator: uidGenerator,
        auto: 'labels',
        templates: templates,
        i18n: i18n,
        path: []
      }
    });
  };

  return Form;
})(_react2['default'].Component);

exports.Form = Form;