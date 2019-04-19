'use strict';

exports.__esModule = true;
exports.getOptionsOfEnum = getOptionsOfEnum;
exports.getTypeInfo = getTypeInfo;
exports.humanize = humanize;
exports.merge = merge;
exports.move = move;
exports.getTypeFromUnion = getTypeFromUnion;
exports.getBaseComponentOptions = getBaseComponentOptions;
exports.getComponentOptions = getComponentOptions;
exports.isArraysShallowDiffers = isArraysShallowDiffers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _tcombValidation = require('tcomb-validation');

var _tcombValidation2 = _interopRequireDefault(_tcombValidation);

function getOptionsOfEnum(type) {
  var enums = type.meta.map;
  return Object.keys(enums).map(function (value) {
    return {
      value: value,
      text: enums[value]
    };
  });
}

function getTypeInfo(type) {
  var innerType = type;
  var isMaybe = false;
  var isSubtype = false;
  var kind = undefined;
  var innerGetValidationErrorMessage = undefined;

  while (innerType) {
    kind = innerType.meta.kind;
    if (_tcombValidation2['default'].Function.is(innerType.getValidationErrorMessage)) {
      innerGetValidationErrorMessage = innerType.getValidationErrorMessage;
    }
    if (kind === 'maybe') {
      isMaybe = true;
      innerType = innerType.meta.type;
      continue;
    }
    if (kind === 'subtype') {
      isSubtype = true;
      innerType = innerType.meta.type;
      continue;
    }
    break;
  }

  var getValidationErrorMessage = innerGetValidationErrorMessage ? function (value, path, context) {
    var result = _tcombValidation2['default'].validate(value, type, { path: path, context: context });
    if (!result.isValid()) {
      for (var i = 0, len = result.errors.length; i < len; i++) {
        if (_tcombValidation2['default'].Function.is(result.errors[i].expected.getValidationErrorMessage)) {
          return result.errors[i].message;
        }
      }
      return innerGetValidationErrorMessage(value, path, context);
    }
  } : undefined;

  return {
    type: type,
    isMaybe: isMaybe,
    isSubtype: isSubtype,
    innerType: innerType,
    getValidationErrorMessage: getValidationErrorMessage
  };
}

// thanks to https://github.com/epeli/underscore.string

function underscored(s) {
  return s.trim().replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function humanize(s) {
  return capitalize(underscored(s).replace(/_id$/, '').replace(/_/g, ' '));
}

function merge(a, b) {
  return _tcombValidation.mixin(_tcombValidation.mixin({}, a), b, true);
}

function move(arr, fromIndex, toIndex) {
  var element = arr.splice(fromIndex, 1)[0];
  arr.splice(toIndex, 0, element);
  return arr;
}

var UIDGenerator = (function () {
  function UIDGenerator(seed) {
    _classCallCheck(this, UIDGenerator);

    this.seed = 'tfid-' + seed + '-';
    this.counter = 0;
  }

  UIDGenerator.prototype.next = function next() {
    return this.seed + this.counter++;
  };

  return UIDGenerator;
})();

exports.UIDGenerator = UIDGenerator;

function containsUnion(_x) {
  var _again = true;

  _function: while (_again) {
    var type = _x;
    _again = false;

    switch (type.meta.kind) {
      case 'union':
        return true;
      case 'maybe':
      case 'subtype':
        _x = type.meta.type;
        _again = true;
        continue _function;

      default:
        return false;
    }
  }
}

function getUnionConcreteType(type, value) {
  var kind = type.meta.kind;
  if (kind === 'union') {
    var concreteType = type.dispatch(value);
    if (process.env.NODE_ENV !== 'production') {
      _tcombValidation2['default'].assert(_tcombValidation2['default'].isType(concreteType), function () {
        return 'Invalid value ' + _tcombValidation2['default'].assert.stringify(value) + ' supplied to ' + _tcombValidation2['default'].getTypeName(type) + ' (no constructor returned by dispatch)';
      });
    }
    return concreteType;
  } else if (kind === 'maybe') {
    var maybeConcrete = _tcombValidation2['default'].maybe(getUnionConcreteType(type.meta.type, value), type.meta.name);
    maybeConcrete.getValidationErrorMessage = type.getValidationErrorMessage;
    maybeConcrete.getTcombFormFactory = type.getTcombFormFactory;
    return maybeConcrete;
  } else if (kind === 'subtype') {
    var subtypeConcrete = _tcombValidation2['default'].subtype(getUnionConcreteType(type.meta.type, value), type.meta.predicate, type.meta.name);
    subtypeConcrete.getValidationErrorMessage = type.getValidationErrorMessage;
    subtypeConcrete.getTcombFormFactory = type.getTcombFormFactory;
    return subtypeConcrete;
  }
}

function getTypeFromUnion(type, value) {
  if (containsUnion(type)) {
    return getUnionConcreteType(type, value);
  }
  return type;
}

function getUnion(_x2) {
  var _again2 = true;

  _function2: while (_again2) {
    var type = _x2;
    _again2 = false;

    if (type.meta.kind === 'union') {
      return type;
    }
    _x2 = type.meta.type;
    _again2 = true;
    continue _function2;
  }
}

function findIndex(arr, element) {
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

function getBaseComponentOptions(options, defaultOptions, value, type) {
  if (_tcombValidation2['default'].Nil.is(options)) {
    return defaultOptions;
  }
  if (_tcombValidation2['default'].Function.is(options)) {
    return options(value);
  }
  if (_tcombValidation2['default'].Array.is(options) && containsUnion(type)) {
    var union = getUnion(type);
    var concreteType = union.dispatch(value);
    var index = findIndex(union.meta.types, concreteType);
    // recurse
    return getComponentOptions(options[index], defaultOptions, value, concreteType); // eslint-disable-line no-use-before-define
  }
  return options;
}

function getComponentOptions(options, defaultOptions, value, type) {
  var opts = getBaseComponentOptions(options, defaultOptions, value, type);
  if (_tcombValidation2['default'].Function.is(type.getTcombFormOptions)) {
    return type.getTcombFormOptions(opts);
  }
  return opts;
}

function isArraysShallowDiffers(array, other) {
  if (array === other) {
    return false;
  }

  var length = array.length;

  if (length !== other.length) {
    return true;
  }

  var index = -1;
  while (++index < length) {
    if (array[index] !== other[index]) {
      return true;
    }
  }

  return false;
}