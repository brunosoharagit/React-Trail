webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createSuper; });
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = Object(_babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return function _createSuperInternal() {
    var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _get; });
/* harmony import */ var _babel_runtime_helpers_esm_superPropBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/superPropBase */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = Object(_babel_runtime_helpers_esm_superPropBase__WEBPACK_IMPORTED_MODULE_0__["default"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread2; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _superPropBase; });
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dom-align/dist-web/index.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-align/dist-web/index.js ***!
  \**************************************************/
/*! exports provided: default, alignElement, alignPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignElement", function() { return alignElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignPoint", function() { return alignPoint; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var vendorPrefix;
var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }

  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }

  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : 'transform';
}
function setTransitionProperty(node, value) {
  var name = getTransitionName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }

  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var arr;
    var match2d = transform.match(matrix2d);

    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, "matrix(".concat(arr.join(','), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, "matrix3d(".concat(arr.join(','), ")"));
    }
  } else {
    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX; // https://stackoverflow.com/a/3485654/3040605

function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line

  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;

  if (_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }

    return undefined;
  }

  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = "".concat(value, "px");
    }

    el.style[name] = value;
    return undefined;
  }

  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.
  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.
  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */


function isWindow(obj) {
  // must use == for ie8

  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }

  if (node.nodeType === 9) {
    return node;
  }

  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');

var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity

  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content

    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out

    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX; // Revert the changed values

    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }

  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }

  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
} // 设置 elem 相对 elem.ownerDocument 的坐标


function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }

  var originalTransition = '';
  var originalOffset = getOffset(elem);

  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }

  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }

  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = "".concat(presetV, "px");
  } // force relayout


  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};

  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];

      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }

  css(elem, originalStyle); // force relayout

  forceRelayout(elem);

  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }

  var ret = {};

  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);

      var _off = offset[_key] - originalOffset[_key];

      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }

  css(elem, ret);
}

function setTransform$1(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };

  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }

  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }

  setTransformXY(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name; // Remember the old values, and insert the new ones

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem); // Revert the old values

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;

  for (j = 0; j < props.length; j++) {
    prop = props[j];

    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;

        if (prop === 'border') {
          cssProp = "".concat(prop).concat(which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }

        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }

  return value;
}

var domUtils = {
  getParent: function getParent(element) {
    var parent = element;

    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);

    return parent;
  }
};
each(['Width', 'Height'], function (name) {
  domUtils["doc".concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max( // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement["scroll".concat(name)], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
  };

  domUtils["viewport".concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
    // backcompat 取 body

    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */

function getWH(elem, name, ex) {
  var extra = ex;

  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;

  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

    cssBoxValue = getComputedStyleX(elem, name);

    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    } // Normalize '', auto, and prepare for extra


    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }

  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }

  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;

  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }

    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }

    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which));
  }

  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119

function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val;
  var elem = args[0]; // in case elem is window
  // elem.offsetWidth === undefined

  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }

  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);

  domUtils["outer".concat(first)] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;

    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);

        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }

        return css(elem, name, val);
      }

      return undefined;
    }

    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }

  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }

    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i;
    var ret = {};

    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }

    var overflow = obj.overflow;

    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }

    return ret;
  },
  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }

    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);

/**
 * 得到会导致元素显示不全的祖先元素
 */

var getParent = utils.getParent;

function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  } // ie 这个也不是完全可行

  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法


  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
  }

  for (parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)) {
    positionStyle = utils.css(parent, 'position');

    if (positionStyle !== 'static') {
      return parent;
    }
  }

  return null;
}

var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;

  for (parent = getParent$1(element); parent && parent !== body; parent = getParent$1(parent)) {
    var positionStyle = utils.css(parent, 'position');

    if (positionStyle === 'fixed') {
      return true;
    }
  }

  return false;
}

/**
 * 获得元素的显示部分的区域
 */

function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement; // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.

  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
      var pos = utils.offset(el); // add border

      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right, // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }

    el = getOffsetParent(el);
  } // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601


  var originalPosition = null;

  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, 'position');

    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight; // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.

  var bodyStyle = window.getComputedStyle(body);

  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }

  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  } // Reset element position after calculate the visible area


  if (element.style) {
    element.style.position = originalPosition;
  }

  if (alwaysByViewport || isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  } // Left edge inside and right edge outside viewport, try to resize it.


  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  } // Right edge outside viewport, try to move it.


  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  } // Top edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  } // Top edge inside and bottom edge outside viewport, try to resize it.


  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  } // Bottom edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return utils.mix(pos, size);
}

function getRegion(node) {
  var offset;
  var w;
  var h;

  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }

  offset.width = w;
  offset.height = h;
  return offset;
}

/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */
function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
  };
}

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n;

  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }

  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}
/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */


function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport); // 当前节点可以被放置的显示区域

  var visibleRect = getVisibleRectForElement(source, alwaysByViewport); // 当前节点所占的区域, left/top/width/height

  var elRegion = getRegion(source); // 将 offset 转换成数值，支持百分比

  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion); // 当前节点将要被放置的位置

  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset); // 当前节点将要所处的区域

  var newElRegion = utils.merge(elRegion, elFuturePos); // 如果可视区域不能完全放置当前节点时允许调整

  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        }); // 偏移量也反下

        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        }); // 偏移量也反下


        var _newOffset = flipOffset(offset, 1);

        var _newTargetOffset = flipOffset(targetOffset, 1);

        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    } // 如果失败，重新计算当前节点将要被放置的位置


    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }

    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect); // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数

    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points; // 重置对应部分的翻转逻辑

      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        });
      }

      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        });
      }

      points = _newPoints2;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    } // 2. 只有指定了可以调整当前方向才调整


    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY; // 确实要调整，甚至可能会调整高度宽度

    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  } // need judge to in case set fixed with in css on height auto element


  if (newElRegion.width !== elRegion.width) {
    utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
  } // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>


  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;

/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight; // Provide default target point

  var points = [align.points[0], 'cc'];
  return doAlign(el, tgtRegion, _objectSpread2({}, align, {
    points: points
  }), pointInView);
}

/* harmony default export */ __webpack_exports__["default"] = (alignElement);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/rc-slider/assets/index.css":
/*!*************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-5-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-5-2!./node_modules/rc-slider/assets/index.css ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".rc-slider {\n  position: relative;\n  height: 14px;\n  padding: 5px 0;\n  width: 100%;\n  border-radius: 6px;\n  touch-action: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-rail {\n  position: absolute;\n  width: 100%;\n  background-color: #e9e9e9;\n  height: 4px;\n  border-radius: 6px;\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #abe2fb;\n}\n.rc-slider-handle {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  margin-top: -5px;\n  cursor: grab;\n  border-radius: 50%;\n  border: solid 2px #96dbfa;\n  background-color: #fff;\n  touch-action: pan-x;\n}\n.rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {\n  border-color: #57c5f7;\n  box-shadow: 0 0 0 5px #96dbfa;\n}\n.rc-slider-handle:focus {\n  outline: none;\n}\n.rc-slider-handle-click-focused:focus {\n  border-color: #96dbfa;\n  box-shadow: unset;\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n}\n.rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-dot-reverse {\n  margin-right: -4px;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  box-shadow: none;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important;\n}\n.rc-slider-vertical {\n  width: 14px;\n  height: 100%;\n  padding: 0 5px;\n}\n.rc-slider-vertical .rc-slider-rail {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-track {\n  left: 5px;\n  bottom: 0;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-handle {\n  margin-left: -5px;\n  touch-action: pan-y;\n}\n.rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 18px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownIn;\n          animation-name: rcSliderTooltipZoomDownIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownOut;\n          animation-name: rcSliderTooltipZoomDownOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-transform: scale(0, 0);\n          transform: scale(0, 0);\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n          animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@-webkit-keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n.rc-slider-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip-hidden {\n  display: none;\n}\n.rc-slider-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-slider-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-slider-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n", "",{"version":3,"sources":["webpack://node_modules/rc-slider/assets/index.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;EACtB,6CAA6C;AAC/C;AACA;EACE,sBAAsB;EACtB,6CAA6C;AAC/C;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,yBAAyB;EACzB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,OAAO;EACP,WAAW;EACX,kBAAkB;EAClB,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,6BAA6B;AAC/B;AACA;EACE,aAAa;AACf;AACA;EACE,qBAAqB;EACrB,iBAAiB;AACnB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;EACrB,2BAA2B;EAC3B,wBAAwB;EACxB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX,yBAAyB;EACzB,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,sBAAsB;AACxB;AACA;;EAEE,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;AACA;;EAEE,8BAA8B;AAChC;AACA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;AACA;EACE,YAAY;EACZ,UAAU;AACZ;AACA;EACE,SAAS;EACT,SAAS;EACT,UAAU;AACZ;AACA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,MAAM;EACN,UAAU;EACV,YAAY;AACd;AACA;EACE,YAAY;EACZ,UAAU;AACZ;AACA;EACE,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;;EAEE,gCAAwB;UAAxB,wBAAwB;EACxB,iCAAyB;UAAzB,yBAAyB;EACzB,yBAAyB;EACzB,oCAA4B;UAA5B,4BAA4B;AAC9B;AACA;EACE,gCAAwB;UAAxB,wBAAwB;EACxB,iCAAyB;UAAzB,yBAAyB;EACzB,yBAAyB;EACzB,oCAA4B;UAA5B,4BAA4B;AAC9B;AACA;;EAEE,iDAAyC;UAAzC,yCAAyC;EACzC,qCAA6B;UAA7B,6BAA6B;AAC/B;AACA;EACE,kDAA0C;UAA1C,0CAA0C;EAC1C,qCAA6B;UAA7B,6BAA6B;AAC/B;AACA;;EAEE,8BAAsB;UAAtB,sBAAsB;EACtB,iEAAyD;UAAzD,yDAAyD;AAC3D;AACA;EACE,yEAAiE;UAAjE,iEAAiE;AACnE;AACA;EACE;IACE,UAAU;IACV,kCAA0B;YAA1B,0BAA0B;IAC1B,8BAAsB;YAAtB,sBAAsB;EACxB;EACA;IACE,kCAA0B;YAA1B,0BAA0B;IAC1B,8BAAsB;YAAtB,sBAAsB;EACxB;AACF;AAVA;EACE;IACE,UAAU;IACV,kCAA0B;YAA1B,0BAA0B;IAC1B,8BAAsB;YAAtB,sBAAsB;EACxB;EACA;IACE,kCAA0B;YAA1B,0BAA0B;IAC1B,8BAAsB;YAAtB,sBAAsB;EACxB;AACF;AACA;EACE;IACE,kCAA0B;YAA1B,0BAA0B;IAC1B,8BAAsB;YAAtB,sBAAsB;EACxB;EACA;IACE,UAAU;IACV,kCAA0B;YAA1B,0BAA0B;IAC1B,8BAAsB;YAAtB,sBAAsB;EACxB;AACF;AAVA;EACE;IACE,kCAA0B;YAA1B,0BAA0B;IAC1B,8BAAsB;YAAtB,sBAAsB;EACxB;EACA;IACE,UAAU;IACV,kCAA0B;YAA1B,0BAA0B;IAC1B,8BAAsB;YAAtB,sBAAsB;EACxB;AACF;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,6CAA6C;AAC/C;AACA;EACE,sBAAsB;EACtB,6CAA6C;AAC/C;AACA;EACE,aAAa;AACf;AACA;EACE,oBAAoB;AACtB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,eAAe;EACf,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,yBAAyB;EACzB,kBAAkB;EAClB,2BAA2B;AAC7B;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,yBAAyB;EACzB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,SAAS;EACT,iBAAiB;EACjB,uBAAuB;EACvB,yBAAyB;AAC3B","sourcesContent":[".rc-slider {\n  position: relative;\n  height: 14px;\n  padding: 5px 0;\n  width: 100%;\n  border-radius: 6px;\n  touch-action: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-rail {\n  position: absolute;\n  width: 100%;\n  background-color: #e9e9e9;\n  height: 4px;\n  border-radius: 6px;\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #abe2fb;\n}\n.rc-slider-handle {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  margin-top: -5px;\n  cursor: grab;\n  border-radius: 50%;\n  border: solid 2px #96dbfa;\n  background-color: #fff;\n  touch-action: pan-x;\n}\n.rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {\n  border-color: #57c5f7;\n  box-shadow: 0 0 0 5px #96dbfa;\n}\n.rc-slider-handle:focus {\n  outline: none;\n}\n.rc-slider-handle-click-focused:focus {\n  border-color: #96dbfa;\n  box-shadow: unset;\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n}\n.rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-dot-reverse {\n  margin-right: -4px;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  box-shadow: none;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important;\n}\n.rc-slider-vertical {\n  width: 14px;\n  height: 100%;\n  padding: 0 5px;\n}\n.rc-slider-vertical .rc-slider-rail {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-track {\n  left: 5px;\n  bottom: 0;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-handle {\n  margin-left: -5px;\n  touch-action: pan-y;\n}\n.rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 18px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  animation-name: rcSliderTooltipZoomDownIn;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  animation-name: rcSliderTooltipZoomDownOut;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  transform: scale(0, 0);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n  100% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n}\n.rc-slider-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip-hidden {\n  display: none;\n}\n.rc-slider-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-slider-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-slider-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/rc-align/es/Align.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-align/es/Align.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var rc_util_es_Dom_isVisible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/Dom/isVisible */ "./node_modules/rc-util/es/Dom/isVisible.js");
/* harmony import */ var dom_align__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-align */ "./node_modules/dom-align/dist-web/index.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "./node_modules/rc-align/es/util.js");
/* harmony import */ var _hooks_useBuffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useBuffer */ "./node_modules/rc-align/es/hooks/useBuffer.js");



/**
 * Removed props:
 *  - childrenProps
 */








function getElement(func) {
  if (typeof func !== 'function') return null;
  return func();
}

function getPoint(point) {
  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(point) !== 'object' || !point) return null;
  return point;
}

var Align = function Align(_ref, ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      target = _ref.target,
      align = _ref.align,
      onAlign = _ref.onAlign,
      monitorWindowResize = _ref.monitorWindowResize,
      _ref$monitorBufferTim = _ref.monitorBufferTime,
      monitorBufferTime = _ref$monitorBufferTim === void 0 ? 0 : _ref$monitorBufferTim;
  var cacheRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({});
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var childNode = react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children); // ===================== Align ======================
  // We save the props here to avoid closure makes props ood

  var forceAlignPropsRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({});
  forceAlignPropsRef.current.disabled = disabled;
  forceAlignPropsRef.current.target = target;
  forceAlignPropsRef.current.onAlign = onAlign;

  var _useBuffer = Object(_hooks_useBuffer__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
    var _forceAlignPropsRef$c = forceAlignPropsRef.current,
        latestDisabled = _forceAlignPropsRef$c.disabled,
        latestTarget = _forceAlignPropsRef$c.target,
        latestOnAlign = _forceAlignPropsRef$c.onAlign;

    if (!latestDisabled && latestTarget) {
      var source = nodeRef.current;
      var result;
      var element = getElement(latestTarget);
      var point = getPoint(latestTarget);
      cacheRef.current.element = element;
      cacheRef.current.point = point; // IE lose focus after element realign
      // We should record activeElement and restore later

      var _document = document,
          activeElement = _document.activeElement; // We only align when element is visible

      if (element && Object(rc_util_es_Dom_isVisible__WEBPACK_IMPORTED_MODULE_4__["default"])(element)) {
        result = Object(dom_align__WEBPACK_IMPORTED_MODULE_5__["alignElement"])(source, element, align);
      } else if (point) {
        result = Object(dom_align__WEBPACK_IMPORTED_MODULE_5__["alignPoint"])(source, point, align);
      }

      Object(_util__WEBPACK_IMPORTED_MODULE_7__["restoreFocus"])(activeElement, source);

      if (latestOnAlign && result) {
        latestOnAlign(source, result);
      }

      return true;
    }

    return false;
  }, monitorBufferTime),
      _useBuffer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useBuffer, 2),
      _forceAlign = _useBuffer2[0],
      cancelForceAlign = _useBuffer2[1]; // ===================== Effect =====================
  // Listen for target updated


  var resizeMonitor = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({
    cancel: function cancel() {}
  }); // Listen for source updated

  var sourceResizeMonitor = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({
    cancel: function cancel() {}
  });
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    var element = getElement(target);
    var point = getPoint(target);

    if (nodeRef.current !== sourceResizeMonitor.current.element) {
      sourceResizeMonitor.current.cancel();
      sourceResizeMonitor.current.element = nodeRef.current;
      sourceResizeMonitor.current.cancel = Object(_util__WEBPACK_IMPORTED_MODULE_7__["monitorResize"])(nodeRef.current, _forceAlign);
    }

    if (cacheRef.current.element !== element || !Object(_util__WEBPACK_IMPORTED_MODULE_7__["isSamePoint"])(cacheRef.current.point, point)) {
      _forceAlign(); // Add resize observer


      if (resizeMonitor.current.element !== element) {
        resizeMonitor.current.cancel();
        resizeMonitor.current.element = element;
        resizeMonitor.current.cancel = Object(_util__WEBPACK_IMPORTED_MODULE_7__["monitorResize"])(element, _forceAlign);
      }
    }
  }); // Listen for disabled change

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (!disabled) {
      _forceAlign();
    } else {
      cancelForceAlign();
    }
  }, [disabled]); // Listen for window resize

  var winResizeRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (monitorWindowResize) {
      if (!winResizeRef.current) {
        winResizeRef.current = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_6__["default"])(window, 'resize', _forceAlign);
      }
    } else if (winResizeRef.current) {
      winResizeRef.current.remove();
      winResizeRef.current = null;
    }
  }, [monitorWindowResize]); // Clear all if unmount

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    return function () {
      resizeMonitor.current.cancel();
      sourceResizeMonitor.current.cancel();
      if (winResizeRef.current) winResizeRef.current.remove();
      cancelForceAlign();
    };
  }, []); // ====================== Ref =======================

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    };
  }); // ===================== Render =====================

  if (react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(childNode)) {
    childNode = react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(childNode, {
      ref: Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__["composeRef"])(childNode.ref, nodeRef)
    });
  }

  return childNode;
};

var RefAlign = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(Align);
RefAlign.displayName = 'Align';
/* harmony default export */ __webpack_exports__["default"] = (RefAlign);

/***/ }),

/***/ "./node_modules/rc-align/es/hooks/useBuffer.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-align/es/hooks/useBuffer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (callback, buffer) {
  var calledRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(false);
  var timeoutRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  function cancelTrigger() {
    window.clearTimeout(timeoutRef.current);
  }

  function trigger(force) {
    if (!calledRef.current || force === true) {
      if (callback() === false) {
        // Not delay since callback cancelled self
        return;
      }

      calledRef.current = true;
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
      }, buffer);
    } else {
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
        trigger();
      }, buffer);
    }
  }

  return [trigger, function () {
    calledRef.current = false;
    cancelTrigger();
  }];
});

/***/ }),

/***/ "./node_modules/rc-align/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-align/es/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Align__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Align */ "./node_modules/rc-align/es/Align.js");
// export this package's api

/* harmony default export */ __webpack_exports__["default"] = (_Align__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-align/es/util.js":
/*!******************************************!*\
  !*** ./node_modules/rc-align/es/util.js ***!
  \******************************************/
/*! exports provided: isSamePoint, restoreFocus, monitorResize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSamePoint", function() { return isSamePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreFocus", function() { return restoreFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monitorResize", function() { return monitorResize; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/rc-util/es/Dom/contains.js");



function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}
function restoreFocus(activeElement, container) {
  // Focus back if is in the container
  if (activeElement !== document.activeElement && Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_2__["default"])(container, activeElement) && typeof activeElement.focus === 'function') {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;

  function onResize(_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
        target = _ref2[0].target;

    if (!document.documentElement.contains(target)) return;

    var _target$getBoundingCl = target.getBoundingClientRect(),
        width = _target$getBoundingCl.width,
        height = _target$getBoundingCl.height;

    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);

    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      // https://webkit.org/blog/9997/resizeobserver-in-webkit/
      Promise.resolve().then(function () {
        callback({
          width: fixedWidth,
          height: fixedHeight
        });
      });
    }

    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }

  var resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"](onResize);

  if (element) {
    resizeObserver.observe(element);
  }

  return function () {
    resizeObserver.disconnect();
  };
}

/***/ }),

/***/ "./node_modules/rc-motion/es/CSSMotion.js":
/*!************************************************!*\
  !*** ./node_modules/rc-motion/es/CSSMotion.js ***!
  \************************************************/
/*! exports provided: genCSSMotion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genCSSMotion", function() { return genCSSMotion; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/Dom/findDOMNode */ "./node_modules/rc-util/es/Dom/findDOMNode.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/motion */ "./node_modules/rc-motion/es/util/motion.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interface */ "./node_modules/rc-motion/es/interface.js");
/* harmony import */ var _hooks_useStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useStatus */ "./node_modules/rc-motion/es/hooks/useStatus.js");
/* harmony import */ var _DomWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DomWrapper */ "./node_modules/rc-motion/es/DomWrapper.js");
/* harmony import */ var _hooks_useStepQueue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hooks/useStepQueue */ "./node_modules/rc-motion/es/hooks/useStepQueue.js");





/* eslint-disable react/default-props-match-prop-types, react/no-multi-comp, react/prop-types */










/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */

function genCSSMotion(config) {
  var transitionSupport = config;

  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(config) === 'object') {
    transitionSupport = config.transitionSupport;
  }

  function isSupportTransition(props) {
    return !!(props.motionName && transitionSupport);
  }

  var CSSMotion = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"](function (props, ref) {
    var _props$visible = props.visible,
        visible = _props$visible === void 0 ? true : _props$visible,
        _props$removeOnLeave = props.removeOnLeave,
        removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
        forceRender = props.forceRender,
        children = props.children,
        motionName = props.motionName,
        leavedClassName = props.leavedClassName,
        eventProps = props.eventProps;
    var supportMotion = isSupportTransition(props); // Ref to the react node, it may be a HTMLElement

    var nodeRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(); // Ref to the dom wrapper in case ref can not pass to HTMLElement

    var wrapperNodeRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

    function getDomElement() {
      try {
        return Object(rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_5__["default"])(nodeRef.current || wrapperNodeRef.current);
      } catch (e) {
        // Only happen when `motionDeadline` trigger but element removed.
        return null;
      }
    }

    var _useStatus = Object(_hooks_useStatus__WEBPACK_IMPORTED_MODULE_10__["default"])(supportMotion, visible, getDomElement, props),
        _useStatus2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useStatus, 4),
        status = _useStatus2[0],
        statusStep = _useStatus2[1],
        statusStyle = _useStatus2[2],
        mergedVisible = _useStatus2[3]; // Record whether content has rended
    // Will return null for un-rendered even when `removeOnLeave={false}`


    var renderedRef = react__WEBPACK_IMPORTED_MODULE_4__["useRef"](mergedVisible);

    if (mergedVisible) {
      renderedRef.current = true;
    } // ====================== Refs ======================


    var originRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(ref);
    originRef.current = ref;
    var setNodeRef = react__WEBPACK_IMPORTED_MODULE_4__["useCallback"](function (node) {
      nodeRef.current = node;
      Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_6__["fillRef"])(originRef.current, node);
    }, []); // ===================== Render =====================

    var motionChildren;

    var mergedProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, eventProps), {}, {
      visible: visible
    });

    if (!children) {
      // No children
      motionChildren = null;
    } else if (status === _interface__WEBPACK_IMPORTED_MODULE_9__["STATUS_NONE"] || !isSupportTransition(props)) {
      // Stable children
      if (mergedVisible) {
        motionChildren = children(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current) {
        motionChildren = children(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender) {
        motionChildren = children(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedProps), {}, {
          style: {
            display: 'none'
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames;

      // In motion
      var statusSuffix;

      if (statusStep === _interface__WEBPACK_IMPORTED_MODULE_9__["STEP_PREPARE"]) {
        statusSuffix = 'prepare';
      } else if (Object(_hooks_useStepQueue__WEBPACK_IMPORTED_MODULE_12__["isActive"])(statusStep)) {
        statusSuffix = 'active';
      } else if (statusStep === _interface__WEBPACK_IMPORTED_MODULE_9__["STEP_START"]) {
        statusSuffix = 'start';
      }

      motionChildren = children(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedProps), {}, {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(Object(_util_motion__WEBPACK_IMPORTED_MODULE_8__["getTransitionName"])(motionName, status), (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, Object(_util_motion__WEBPACK_IMPORTED_MODULE_8__["getTransitionName"])(motionName, "".concat(status, "-").concat(statusSuffix)), statusSuffix), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, motionName, typeof motionName === 'string'), _classNames)),
        style: statusStyle
      }), setNodeRef);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_DomWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
/* harmony default export */ __webpack_exports__["default"] = (genCSSMotion(_util_motion__WEBPACK_IMPORTED_MODULE_8__["supportTransition"]));

/***/ }),

/***/ "./node_modules/rc-motion/es/CSSMotionList.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-motion/es/CSSMotionList.js ***!
  \****************************************************/
/*! exports provided: genCSSMotionList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genCSSMotionList", function() { return genCSSMotionList; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CSSMotion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSMotion */ "./node_modules/rc-motion/es/CSSMotion.js");
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/motion */ "./node_modules/rc-motion/es/util/motion.js");
/* harmony import */ var _util_diff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/diff */ "./node_modules/rc-motion/es/util/diff.js");








/* eslint react/prop-types: 0 */




var MOTION_PROP_NAMES = ['eventProps', 'visible', 'children', 'motionName', 'motionAppear', 'motionEnter', 'motionLeave', 'motionLeaveImmediately', 'motionDeadline', 'removeOnLeave', 'leavedClassName', 'onAppearStart', 'onAppearActive', 'onAppearEnd', 'onEnterStart', 'onEnterActive', 'onEnterEnd', 'onLeaveStart', 'onLeaveActive', 'onLeaveEnd'];
/**
 * Generate a CSSMotionList component with config
 * @param transitionSupport No need since CSSMotionList no longer depends on transition support
 * @param CSSMotion CSSMotion component
 */

function genCSSMotionList(transitionSupport) {
  var CSSMotion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _CSSMotion__WEBPACK_IMPORTED_MODULE_8__["default"];

  var CSSMotionList = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CSSMotionList, _React$Component);

    var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(CSSMotionList);

    function CSSMotionList() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CSSMotionList);

      _this = _super.apply(this, arguments);
      _this.state = {
        keyEntities: []
      };

      _this.removeKey = function (removeKey) {
        _this.setState(function (_ref) {
          var keyEntities = _ref.keyEntities;
          return {
            keyEntities: keyEntities.map(function (entity) {
              if (entity.key !== removeKey) return entity;
              return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, entity), {}, {
                status: _util_diff__WEBPACK_IMPORTED_MODULE_10__["STATUS_REMOVED"]
              });
            })
          };
        });
      };

      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CSSMotionList, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var keyEntities = this.state.keyEntities;

        var _this$props = this.props,
            component = _this$props.component,
            children = _this$props.children,
            _onVisibleChanged = _this$props.onVisibleChanged,
            restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["component", "children", "onVisibleChanged"]);

        var Component = component || react__WEBPACK_IMPORTED_MODULE_7__["Fragment"];
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function (prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](Component, restProps, keyEntities.map(function (_ref2) {
          var status = _ref2.status,
              eventProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["status"]);

          var visible = status === _util_diff__WEBPACK_IMPORTED_MODULE_10__["STATUS_ADD"] || status === _util_diff__WEBPACK_IMPORTED_MODULE_10__["STATUS_KEEP"];
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](CSSMotion, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, motionProps, {
            key: eventProps.key,
            visible: visible,
            eventProps: eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });

              if (!changedVisible) {
                _this2.removeKey(eventProps.key);
              }
            }
          }), children);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = Object(_util_diff__WEBPACK_IMPORTED_MODULE_10__["parseKeys"])(keys);
        var mixedKeyEntities = Object(_util_diff__WEBPACK_IMPORTED_MODULE_10__["diffKeys"])(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function (entity) {
            var prevEntity = keyEntities.find(function (_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            }); // Remove if already mark as removed

            if (prevEntity && prevEntity.status === _util_diff__WEBPACK_IMPORTED_MODULE_10__["STATUS_REMOVED"] && entity.status === _util_diff__WEBPACK_IMPORTED_MODULE_10__["STATUS_REMOVE"]) {
              return false;
            }

            return true;
          })
        };
      }
    }]);

    return CSSMotionList;
  }(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

  CSSMotionList.defaultProps = {
    component: 'div'
  };
  return CSSMotionList;
}
/* harmony default export */ __webpack_exports__["default"] = (genCSSMotionList(_util_motion__WEBPACK_IMPORTED_MODULE_9__["supportTransition"]));

/***/ }),

/***/ "./node_modules/rc-motion/es/DomWrapper.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-motion/es/DomWrapper.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






var DomWrapper = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(DomWrapper, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(DomWrapper);

  function DomWrapper() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DomWrapper);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return DomWrapper;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DomWrapper);

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useDomMotionEvents.js":
/*!***************************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useDomMotionEvents.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/motion */ "./node_modules/rc-motion/es/util/motion.js");



/* harmony default export */ __webpack_exports__["default"] = (function (callback) {
  var cacheElementRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Cache callback

  var callbackRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(callback);
  callbackRef.current = callback; // Internal motion event handler

  var onInternalMotionEnd = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (event) {
    callbackRef.current(event);
  }, []); // Remove events

  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_1__["transitionEndName"], onInternalMotionEnd);
      element.removeEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_1__["animationEndName"], onInternalMotionEnd);
    }
  } // Patch events


  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }

    if (element && element !== cacheElementRef.current) {
      element.addEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_1__["transitionEndName"], onInternalMotionEnd);
      element.addEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_1__["animationEndName"], onInternalMotionEnd); // Save as cache in case dom removed trigger by `motionDeadline`

      cacheElementRef.current = element;
    }
  } // Clean up when removed


  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    return function () {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
});

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");

 // It's safe to use `useLayoutEffect` but the warning is annoying

var useIsomorphicLayoutEffect = Object(rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__["default"])() ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
/* harmony default export */ __webpack_exports__["default"] = (useIsomorphicLayoutEffect);

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useNextFrame.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useNextFrame.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var nextFrameRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);

  function cancelNextFrame() {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"].cancel(nextFrameRef.current);
  }

  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
});

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useState.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useState.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMountStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useMountStatus(defaultValue) {
  var destroyRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultValue),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  function setValue(next) {
    if (!destroyRef.current) {
      setVal(next);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);
  return [val, setValue];
}

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useStatus.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useStatus.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interface */ "./node_modules/rc-motion/es/interface.js");
/* harmony import */ var _useState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useState */ "./node_modules/rc-motion/es/hooks/useState.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js");
/* harmony import */ var _useStepQueue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useStepQueue */ "./node_modules/rc-motion/es/hooks/useStepQueue.js");
/* harmony import */ var _useDomMotionEvents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useDomMotionEvents */ "./node_modules/rc-motion/es/hooks/useDomMotionEvents.js");










function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
      motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
      _ref$motionAppear = _ref.motionAppear,
      motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
      _ref$motionLeave = _ref.motionLeave,
      motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
      motionDeadline = _ref.motionDeadline,
      motionLeaveImmediately = _ref.motionLeaveImmediately,
      onAppearPrepare = _ref.onAppearPrepare,
      onEnterPrepare = _ref.onEnterPrepare,
      onLeavePrepare = _ref.onLeavePrepare,
      onAppearStart = _ref.onAppearStart,
      onEnterStart = _ref.onEnterStart,
      onLeaveStart = _ref.onLeaveStart,
      onAppearActive = _ref.onAppearActive,
      onEnterActive = _ref.onEnterActive,
      onLeaveActive = _ref.onLeaveActive,
      onAppearEnd = _ref.onAppearEnd,
      onEnterEnd = _ref.onEnterEnd,
      onLeaveEnd = _ref.onLeaveEnd,
      onVisibleChanged = _ref.onVisibleChanged;

  // Used for outer render usage to avoid `visible: false & status: none` to render nothing
  var _useState = Object(_useState__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      asyncVisible = _useState2[0],
      setAsyncVisible = _useState2[1];

  var _useState3 = Object(_useState__WEBPACK_IMPORTED_MODULE_5__["default"])(_interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_NONE"]),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = Object(_useState__WEBPACK_IMPORTED_MODULE_5__["default"])(null),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      style = _useState6[0],
      setStyle = _useState6[1];

  var mountedRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
  var deadlineRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var destroyedRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false); // =========================== Dom Node ===========================

  var cacheElementRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  function getDomElement() {
    var element = getElement();
    return element || cacheElementRef.current;
  } // ========================== Motion End ==========================


  var activeRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);

  function onInternalMotionEnd(event) {
    var element = getDomElement();

    if (event && !event.deadline && event.target !== element) {
      // event exists
      // not initiated by deadline
      // transitionEnd not fired by inner elements
      return;
    }

    var canEnd;

    if (status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_APPEAR"] && activeRef.current) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_ENTER"] && activeRef.current) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_LEAVE"] && activeRef.current) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    } // Only update status when `canEnd` and not destroyed


    if (canEnd !== false && !destroyedRef.current) {
      setStatus(_interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_NONE"]);
      setStyle(null);
    }
  }

  var _useDomMotionEvents = Object(_useDomMotionEvents__WEBPACK_IMPORTED_MODULE_8__["default"])(onInternalMotionEnd),
      _useDomMotionEvents2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useDomMotionEvents, 1),
      patchMotionEvents = _useDomMotionEvents2[0]; // ============================= Step =============================


  var eventHandlers = react__WEBPACK_IMPORTED_MODULE_3__["useMemo"](function () {
    var _ref2, _ref3, _ref4;

    switch (status) {
      case 'appear':
        return _ref2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"], onAppearPrepare), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_START"], onAppearStart), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_ACTIVE"], onAppearActive), _ref2;

      case 'enter':
        return _ref3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"], onEnterPrepare), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_START"], onEnterStart), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_ACTIVE"], onEnterActive), _ref3;

      case 'leave':
        return _ref4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"], onLeavePrepare), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_START"], onLeaveStart), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_ACTIVE"], onLeaveActive), _ref4;

      default:
        return {};
    }
  }, [status]);

  var _useStepQueue = Object(_useStepQueue__WEBPACK_IMPORTED_MODULE_7__["default"])(status, function (newStep) {
    // Only prepare step can be skip
    if (newStep === _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"]) {
      var onPrepare = eventHandlers[_interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"]];

      if (!onPrepare) {
        return _useStepQueue__WEBPACK_IMPORTED_MODULE_7__["SkipStep"];
      }

      return onPrepare(getDomElement());
    } // Rest step is sync update


    // Rest step is sync update
    if (step in eventHandlers) {
      var _eventHandlers$step;

      setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
    }

    if (step === _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_ACTIVE"]) {
      // Patch events when motion needed
      patchMotionEvents(getDomElement());

      if (motionDeadline > 0) {
        clearTimeout(deadlineRef.current);
        deadlineRef.current = setTimeout(function () {
          onInternalMotionEnd({
            deadline: true
          });
        }, motionDeadline);
      }
    }

    return _useStepQueue__WEBPACK_IMPORTED_MODULE_7__["DoStep"];
  }),
      _useStepQueue2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useStepQueue, 2),
      startStep = _useStepQueue2[0],
      step = _useStepQueue2[1];

  var active = Object(_useStepQueue__WEBPACK_IMPORTED_MODULE_7__["isActive"])(step);
  activeRef.current = active; // ============================ Status ============================
  // Update with new status

  Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;

    if (!supportMotion) {
      return;
    }

    var nextStatus; // Appear

    if (!isMounted && visible && motionAppear) {
      nextStatus = _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_APPEAR"];
    } // Enter


    if (isMounted && visible && motionEnter) {
      nextStatus = _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_ENTER"];
    } // Leave


    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_LEAVE"];
    } // Update to next status


    if (nextStatus) {
      setStatus(nextStatus);
      startStep();
    }
  }, [visible]); // ============================ Effect ============================
  // Reset when motion changed

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if ( // Cancel appear
    status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_APPEAR"] && !motionAppear || // Cancel enter
    status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_ENTER"] && !motionEnter || // Cancel leave
    status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_LEAVE"] && !motionLeave) {
      setStatus(_interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_NONE"]);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    return function () {
      clearTimeout(deadlineRef.current);
      destroyedRef.current = true;
    };
  }, []); // Trigger `onVisibleChanged`

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (asyncVisible !== undefined && status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_NONE"]) {
      onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
    }
  }, [asyncVisible, status]); // ============================ Styles ============================

  var mergedStyle = style;

  if (eventHandlers[_interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"]] && step === _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_START"]) {
    mergedStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
      transition: 'none'
    }, mergedStyle);
  }

  return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useStepQueue.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useStepQueue.js ***!
  \*********************************************************/
/*! exports provided: SkipStep, DoStep, isActive, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipStep", function() { return SkipStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoStep", function() { return DoStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isActive", function() { return isActive; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interface */ "./node_modules/rc-motion/es/interface.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js");
/* harmony import */ var _useNextFrame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useNextFrame */ "./node_modules/rc-motion/es/hooks/useNextFrame.js");





var STEP_QUEUE = [_interface__WEBPACK_IMPORTED_MODULE_2__["STEP_PREPARE"], _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_START"], _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_ACTIVE"], _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_ACTIVATED"]];
/** Skip current step */

var SkipStep = false;
/** Current step should be update in */

var DoStep = true;
function isActive(step) {
  return step === _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_ACTIVE"] || step === _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_ACTIVATED"];
}
/* harmony default export */ __webpack_exports__["default"] = (function (status, callback) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](_interface__WEBPACK_IMPORTED_MODULE_2__["STEP_NONE"]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      step = _React$useState2[0],
      setStep = _React$useState2[1];

  var _useNextFrame = Object(_useNextFrame__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      _useNextFrame2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useNextFrame, 2),
      nextFrame = _useNextFrame2[0],
      cancelNextFrame = _useNextFrame2[1];

  function startQueue() {
    setStep(_interface__WEBPACK_IMPORTED_MODULE_2__["STEP_PREPARE"]);
  }

  Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    if (step !== _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_NONE"] && step !== _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_ACTIVATED"]) {
      var index = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index + 1];
      var result = callback(step);

      if (result === SkipStep) {
        // Skip when no needed
        setStep(nextStep);
      } else {
        // Do as frame for step update
        nextFrame(function (info) {
          function doNext() {
            // Skip since current queue is ood
            if (info.isCanceled()) return;
            setStep(nextStep);
          }

          if (result === true) {
            doNext();
          } else {
            // Only promise should be async
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
});

/***/ }),

/***/ "./node_modules/rc-motion/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-motion/es/index.js ***!
  \********************************************/
/*! exports provided: CSSMotionList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSMotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSMotion */ "./node_modules/rc-motion/es/CSSMotion.js");
/* harmony import */ var _CSSMotionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSMotionList */ "./node_modules/rc-motion/es/CSSMotionList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSMotionList", function() { return _CSSMotionList__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_CSSMotion__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-motion/es/interface.js":
/*!************************************************!*\
  !*** ./node_modules/rc-motion/es/interface.js ***!
  \************************************************/
/*! exports provided: STATUS_NONE, STATUS_APPEAR, STATUS_ENTER, STATUS_LEAVE, STEP_NONE, STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_NONE", function() { return STATUS_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_APPEAR", function() { return STATUS_APPEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_ENTER", function() { return STATUS_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_LEAVE", function() { return STATUS_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_NONE", function() { return STEP_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_PREPARE", function() { return STEP_PREPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_START", function() { return STEP_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_ACTIVE", function() { return STEP_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_ACTIVATED", function() { return STEP_ACTIVATED; });
var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';

/***/ }),

/***/ "./node_modules/rc-motion/es/util/diff.js":
/*!************************************************!*\
  !*** ./node_modules/rc-motion/es/util/diff.js ***!
  \************************************************/
/*! exports provided: STATUS_ADD, STATUS_KEEP, STATUS_REMOVE, STATUS_REMOVED, wrapKeyToObject, parseKeys, diffKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_ADD", function() { return STATUS_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_KEEP", function() { return STATUS_KEEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_REMOVE", function() { return STATUS_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_REMOVED", function() { return STATUS_REMOVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapKeyToObject", function() { return wrapKeyToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseKeys", function() { return parseKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffKeys", function() { return diffKeys; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
  var keyObj;

  if (key && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(key) === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = {
      key: key
    };
  }

  return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keys.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys); // Check prev keys to insert or keep

  prevKeyObjects.forEach(function (keyObj) {
    var hit = false;

    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];

      if (currentKeyObj.key === keyObj.key) {
        // New added keys should add before current key
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
            return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }

        list.push(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    } // If not hit, it means key is removed


    if (!hit) {
      list.push(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  }); // Add rest to the list

  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
      return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }
  /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */


  var keys = {};
  list.forEach(function (_ref) {
    var key = _ref.key;
    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function (key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function (matchKey) {
    // Remove `STATUS_REMOVE` node.
    list = list.filter(function (_ref2) {
      var key = _ref2.key,
          status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    }); // Update `STATUS_ADD` to `STATUS_KEEP`

    list.forEach(function (node) {
      if (node.key === matchKey) {
        // eslint-disable-next-line no-param-reassign
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}

/***/ }),

/***/ "./node_modules/rc-motion/es/util/motion.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-motion/es/util/motion.js ***!
  \**************************************************/
/*! exports provided: getVendorPrefixes, getVendorPrefixedEventName, supportTransition, animationEndName, transitionEndName, getTransitionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixes", function() { return getVendorPrefixes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixedEventName", function() { return getVendorPrefixedEventName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportTransition", function() { return supportTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationEndName", function() { return animationEndName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEndName", function() { return transitionEndName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionName", function() { return getTransitionName; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");

 // ================= Transition =================
// Event wrapper. Copy from react source code

function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}

function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };

  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }

    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }

  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(Object(rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__["default"])(), typeof window !== 'undefined' ? window : {});
var style = {};

if (Object(rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
  var _document$createEleme = document.createElement('div');

  style = _document$createEleme.style;
}

var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  var prefixMap = vendorPrefixes[eventName];

  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;

    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];

      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }

  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;

  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }

  return "".concat(transitionName, "-").concat(transitionType);
}

/***/ }),

/***/ "./node_modules/rc-slider/assets/index.css":
/*!*************************************************!*\
  !*** ./node_modules/rc-slider/assets/index.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/rc-slider/assets/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/rc-slider/assets/index.css",
      function () {
        content = __webpack_require__(/*! !../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/rc-slider/assets/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/rc-slider/es/Handle.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-slider/es/Handle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Handle; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");












var Handle = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Handle, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(Handle);

  function Handle() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Handle);

    _this = _super.apply(this, arguments);
    _this.state = {
      clickFocused: false
    };

    _this.setHandleRef = function (node) {
      _this.handle = node;
    };

    _this.handleMouseUp = function () {
      if (document.activeElement === _this.handle) {
        _this.setClickFocus(true);
      }
    };

    _this.handleMouseDown = function (e) {
      // avoid selecting text during drag
      // https://github.com/ant-design/ant-design/issues/25010
      e.preventDefault(); // fix https://github.com/ant-design/ant-design/issues/15324

      _this.focus();
    };

    _this.handleBlur = function () {
      _this.setClickFocus(false);
    };

    _this.handleKeyDown = function () {
      _this.setClickFocus(false);
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Handle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // mouseup won't trigger if mouse moved out of handle,
      // so we listen on document here.
      this.onMouseUpListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__["default"])(document, 'mouseup', this.handleMouseUp);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.onMouseUpListener) {
        this.onMouseUpListener.remove();
      }
    }
  }, {
    key: "setClickFocus",
    value: function setClickFocus(focused) {
      this.setState({
        clickFocused: focused
      });
    }
  }, {
    key: "clickFocus",
    value: function clickFocus() {
      this.setClickFocus(true);
      this.focus();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.handle.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.handle.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _ref, _ref2;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          vertical = _this$props.vertical,
          reverse = _this$props.reverse,
          offset = _this$props.offset,
          style = _this$props.style,
          disabled = _this$props.disabled,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value,
          tabIndex = _this$props.tabIndex,
          ariaLabel = _this$props.ariaLabel,
          ariaLabelledBy = _this$props.ariaLabelledBy,
          ariaValueTextFormatter = _this$props.ariaValueTextFormatter,
          restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props, ["prefixCls", "vertical", "reverse", "offset", "style", "disabled", "min", "max", "value", "tabIndex", "ariaLabel", "ariaLabelledBy", "ariaValueTextFormatter"]);

      var className = classnames__WEBPACK_IMPORTED_MODULE_9___default()(this.props.className, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, "".concat(prefixCls, "-handle-click-focused"), this.state.clickFocused));
      var positionStyle = vertical ? (_ref = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, reverse ? 'top' : 'bottom', "".concat(offset, "%")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, reverse ? 'bottom' : 'top', 'auto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, "transform", reverse ? null : "translateY(+50%)"), _ref) : (_ref2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, reverse ? 'right' : 'left', "".concat(offset, "%")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, reverse ? 'left' : 'right', 'auto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, "transform", "translateX(".concat(reverse ? '+' : '-', "50%)")), _ref2);

      var elStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, style), positionStyle);

      var mergedTabIndex = tabIndex || 0;

      if (disabled || tabIndex === null) {
        mergedTabIndex = null;
      }

      var ariaValueText;

      if (ariaValueTextFormatter) {
        ariaValueText = ariaValueTextFormatter(value);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: this.setHandleRef,
        tabIndex: mergedTabIndex
      }, restProps, {
        className: className,
        style: elStyle,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown // aria attribute
        ,
        role: "slider",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-disabled": !!disabled,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-valuetext": ariaValueText
      }));
    }
  }]);

  return Handle;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),

/***/ "./node_modules/rc-slider/es/Range.js":
/*!********************************************!*\
  !*** ./node_modules/rc-slider/es/Range.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_Track__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/Track */ "./node_modules/rc-slider/es/common/Track.js");
/* harmony import */ var _common_createSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/createSlider */ "./node_modules/rc-slider/es/common/createSlider.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-slider/es/utils.js");













var _trimAlignValue = function trimAlignValue(_ref) {
  var value = _ref.value,
      handle = _ref.handle,
      bounds = _ref.bounds,
      props = _ref.props;
  var allowCross = props.allowCross,
      pushable = props.pushable;
  var thershold = Number(pushable);
  var valInRange = _utils__WEBPACK_IMPORTED_MODULE_11__["ensureValueInRange"](value, props);
  var valNotConflict = valInRange;

  if (!allowCross && handle != null && bounds !== undefined) {
    if (handle > 0 && valInRange <= bounds[handle - 1] + thershold) {
      valNotConflict = bounds[handle - 1] + thershold;
    }

    if (handle < bounds.length - 1 && valInRange >= bounds[handle + 1] - thershold) {
      valNotConflict = bounds[handle + 1] - thershold;
    }
  }

  return _utils__WEBPACK_IMPORTED_MODULE_11__["ensureValuePrecision"](valNotConflict, props);
};

var Range = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Range, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(Range);

  function Range(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Range);

    _this = _super.call(this, props);

    _this.positionGetValue = function (position) {
      var bounds = _this.getValue();

      var value = _this.calcValueByPos(position);

      var closestBound = _this.getClosestBound(value);

      var index = _this.getBoundNeedMoving(value, closestBound);

      var prevValue = bounds[index];
      if (value === prevValue) return null;

      var nextBounds = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(bounds);

      nextBounds[index] = value;
      return nextBounds;
    };

    _this.onEnd = function (force) {
      var handle = _this.state.handle;

      _this.removeDocumentEvents();

      if (!handle) {
        _this.dragTrack = false;
      }

      if (handle !== null || force) {
        _this.props.onAfterChange(_this.getValue());
      }

      _this.setState({
        handle: null
      });
    };

    var count = props.count,
        min = props.min,
        max = props.max;
    var initialValue = Array.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(count + 1))).map(function () {
      return min;
    });
    var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
    var value = props.value !== undefined ? props.value : defaultValue;
    var bounds = value.map(function (v, i) {
      return _trimAlignValue({
        value: v,
        handle: i,
        props: props
      });
    });
    var recent = bounds[0] === max ? 0 : bounds.length - 1;
    _this.state = {
      handle: null,
      recent: recent,
      bounds: bounds
    };
    return _this;
  }
  /**
   * [Legacy] Used for inherit other component.
   * It's a bad code style which should be refactor.
   */

  /* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Range, [{
    key: "calcValueByPos",
    value: function calcValueByPos(value) {
      return 0;
    }
  }, {
    key: "getSliderLength",
    value: function getSliderLength() {
      return 0;
    }
  }, {
    key: "calcOffset",
    value: function calcOffset(value) {
      return 0;
    }
  }, {
    key: "saveHandle",
    value: function saveHandle(index, h) {}
  }, {
    key: "removeDocumentEvents",
    value: function removeDocumentEvents() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _this$props = this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          min = _this$props.min,
          max = _this$props.max;

      if (!('min' in this.props || 'max' in this.props)) {
        return;
      }

      if (min === prevProps.min && max === prevProps.max) {
        return;
      }

      var currentValue = value || prevState.bounds;

      if (currentValue.some(function (v) {
        return _utils__WEBPACK_IMPORTED_MODULE_11__["isValueOutOfRange"](v, _this2.props);
      })) {
        var newValues = currentValue.map(function (v) {
          return _utils__WEBPACK_IMPORTED_MODULE_11__["ensureValueInRange"](v, _this2.props);
        });
        onChange(newValues);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);

      if (isNotControlled) {
        this.setState(state);
      } else {
        var controlledState = {};
        ['handle', 'recent'].forEach(function (item) {
          if (state[item] !== undefined) {
            controlledState[item] = state[item];
          }
        });

        if (Object.keys(controlledState).length) {
          this.setState(controlledState);
        }
      }

      var data = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.state), state);

      var changedValue = data.bounds;
      props.onChange(changedValue);
    }
  }, {
    key: "onStart",
    value: function onStart(position) {
      var props = this.props,
          state = this.state;
      var bounds = this.getValue();
      props.onBeforeChange(bounds);
      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;
      var closestBound = this.getClosestBound(value);
      this.prevMovedHandleIndex = this.getBoundNeedMoving(value, closestBound);
      this.setState({
        handle: this.prevMovedHandleIndex,
        recent: this.prevMovedHandleIndex
      });
      var prevValue = bounds[this.prevMovedHandleIndex];
      if (value === prevValue) return;

      var nextBounds = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.bounds);

      nextBounds[this.prevMovedHandleIndex] = value;
      this.onChange({
        bounds: nextBounds
      });
    }
  }, {
    key: "onMove",
    value: function onMove(e, position, dragTrack, startBounds) {
      _utils__WEBPACK_IMPORTED_MODULE_11__["pauseEvent"](e);
      var state = this.state,
          props = this.props;
      var maxValue = props.max || 100;
      var minValue = props.min || 0;

      if (dragTrack) {
        var pos = props.vertical ? -position : position;
        pos = props.reverse ? -pos : pos;
        var max = maxValue - Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(startBounds));
        var min = minValue - Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(startBounds));
        var ratio = Math.min(Math.max(pos / (this.getSliderLength() / 100), min), max);
        var nextBounds = startBounds.map(function (v) {
          return Math.floor(Math.max(Math.min(v + ratio, maxValue), minValue));
        });

        if (state.bounds.map(function (c, i) {
          return c === nextBounds[i];
        }).some(function (c) {
          return !c;
        })) {
          this.onChange({
            bounds: nextBounds
          });
        }

        return;
      }

      var value = this.calcValueByPos(position);
      var oldValue = state.bounds[state.handle];
      if (value === oldValue) return;
      this.moveTo(value);
    }
  }, {
    key: "onKeyboard",
    value: function onKeyboard(e) {
      var _this$props2 = this.props,
          reverse = _this$props2.reverse,
          vertical = _this$props2.vertical;
      var valueMutator = _utils__WEBPACK_IMPORTED_MODULE_11__["getKeyboardValueMutator"](e, vertical, reverse);

      if (valueMutator) {
        _utils__WEBPACK_IMPORTED_MODULE_11__["pauseEvent"](e);
        var state = this.state,
            props = this.props;
        var bounds = state.bounds,
            handle = state.handle;
        var oldValue = bounds[handle === null ? state.recent : handle];
        var mutatedValue = valueMutator(oldValue, props);

        var value = _trimAlignValue({
          value: mutatedValue,
          handle: handle,
          bounds: state.bounds,
          props: props
        });

        if (value === oldValue) return;
        var isFromKeyboardEvent = true;
        this.moveTo(value, isFromKeyboardEvent);
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.state.bounds;
    }
  }, {
    key: "getClosestBound",
    value: function getClosestBound(value) {
      var bounds = this.state.bounds;
      var closestBound = 0;

      for (var i = 1; i < bounds.length - 1; i += 1) {
        if (value >= bounds[i]) {
          closestBound = i;
        }
      }

      if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
        closestBound += 1;
      }

      return closestBound;
    }
  }, {
    key: "getBoundNeedMoving",
    value: function getBoundNeedMoving(value, closestBound) {
      var _this$state = this.state,
          bounds = _this$state.bounds,
          recent = _this$state.recent;
      var boundNeedMoving = closestBound;
      var isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];

      if (isAtTheSamePoint && bounds[recent] === bounds[closestBound]) {
        boundNeedMoving = recent;
      }

      if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
        boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
      }

      return boundNeedMoving;
    }
  }, {
    key: "getLowerBound",
    value: function getLowerBound() {
      return this.state.bounds[0];
    }
  }, {
    key: "getUpperBound",
    value: function getUpperBound() {
      var bounds = this.state.bounds;
      return bounds[bounds.length - 1];
    }
    /**
     * Returns an array of possible slider points, taking into account both
     * `marks` and `step`. The result is cached.
     */

  }, {
    key: "getPoints",
    value: function getPoints() {
      var _this$props3 = this.props,
          marks = _this$props3.marks,
          step = _this$props3.step,
          min = _this$props3.min,
          max = _this$props3.max;
      var cache = this.internalPointsCache;

      if (!cache || cache.marks !== marks || cache.step !== step) {
        var pointsObject = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, marks);

        if (step !== null) {
          for (var point = min; point <= max; point += step) {
            pointsObject[point] = point;
          }
        }

        var points = Object.keys(pointsObject).map(parseFloat);
        points.sort(function (a, b) {
          return a - b;
        });
        this.internalPointsCache = {
          marks: marks,
          step: step,
          points: points
        };
      }

      return this.internalPointsCache.points;
    }
  }, {
    key: "moveTo",
    value: function moveTo(value, isFromKeyboardEvent) {
      var _this3 = this;

      var state = this.state,
          props = this.props;

      var nextBounds = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.bounds);

      var handle = state.handle === null ? state.recent : state.handle;
      nextBounds[handle] = value;
      var nextHandle = handle;

      if (props.pushable !== false) {
        this.pushSurroundingHandles(nextBounds, nextHandle);
      } else if (props.allowCross) {
        nextBounds.sort(function (a, b) {
          return a - b;
        });
        nextHandle = nextBounds.indexOf(value);
      }

      this.onChange({
        recent: nextHandle,
        handle: nextHandle,
        bounds: nextBounds
      });

      if (isFromKeyboardEvent) {
        // known problem: because setState is async,
        // so trigger focus will invoke handler's onEnd and another handler's onStart too early,
        // cause onBeforeChange and onAfterChange receive wrong value.
        // here use setState callback to hack，but not elegant
        this.props.onAfterChange(nextBounds);
        this.setState({}, function () {
          _this3.handlesRefs[nextHandle].focus();
        });
        this.onEnd();
      }
    }
  }, {
    key: "pushSurroundingHandles",
    value: function pushSurroundingHandles(bounds, handle) {
      var value = bounds[handle];
      var pushable = this.props.pushable;
      var threshold = Number(pushable);
      var direction = 0;

      if (bounds[handle + 1] - value < threshold) {
        direction = +1; // push to right
      }

      if (value - bounds[handle - 1] < threshold) {
        direction = -1; // push to left
      }

      if (direction === 0) {
        return;
      }

      var nextHandle = handle + direction;
      var diffToNext = direction * (bounds[nextHandle] - value);

      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // revert to original value if pushing is impossible
        // eslint-disable-next-line no-param-reassign
        bounds[handle] = bounds[nextHandle] - direction * threshold;
      }
    }
  }, {
    key: "pushHandle",
    value: function pushHandle(bounds, handle, direction, amount) {
      var originalValue = bounds[handle];
      var currentValue = bounds[handle];

      while (direction * (currentValue - originalValue) < amount) {
        if (!this.pushHandleOnePoint(bounds, handle, direction)) {
          // can't push handle enough to create the needed `amount` gap, so we
          // revert its position to the original value
          // eslint-disable-next-line no-param-reassign
          bounds[handle] = originalValue;
          return false;
        }

        currentValue = bounds[handle];
      } // the handle was pushed enough to create the needed `amount` gap


      return true;
    }
  }, {
    key: "pushHandleOnePoint",
    value: function pushHandleOnePoint(bounds, handle, direction) {
      var points = this.getPoints();
      var pointIndex = points.indexOf(bounds[handle]);
      var nextPointIndex = pointIndex + direction;

      if (nextPointIndex >= points.length || nextPointIndex < 0) {
        // reached the minimum or maximum available point, can't push anymore
        return false;
      }

      var nextHandle = handle + direction;
      var nextValue = points[nextPointIndex];
      var pushable = this.props.pushable;
      var threshold = Number(pushable);
      var diffToNext = direction * (bounds[nextHandle] - nextValue);

      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // couldn't push next handle, so we won't push this one either
        return false;
      } // push the handle
      // eslint-disable-next-line no-param-reassign


      bounds[handle] = nextValue;
      return true;
    }
  }, {
    key: "trimAlignValue",
    value: function trimAlignValue(value) {
      var _this$state2 = this.state,
          handle = _this$state2.handle,
          bounds = _this$state2.bounds;
      return _trimAlignValue({
        value: value,
        handle: handle,
        bounds: bounds,
        props: this.props
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state3 = this.state,
          handle = _this$state3.handle,
          bounds = _this$state3.bounds;
      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          vertical = _this$props4.vertical,
          included = _this$props4.included,
          disabled = _this$props4.disabled,
          min = _this$props4.min,
          max = _this$props4.max,
          reverse = _this$props4.reverse,
          handleGenerator = _this$props4.handle,
          trackStyle = _this$props4.trackStyle,
          handleStyle = _this$props4.handleStyle,
          tabIndex = _this$props4.tabIndex,
          ariaLabelGroupForHandles = _this$props4.ariaLabelGroupForHandles,
          ariaLabelledByGroupForHandles = _this$props4.ariaLabelledByGroupForHandles,
          ariaValueTextFormatterGroupForHandles = _this$props4.ariaValueTextFormatterGroupForHandles;
      var offsets = bounds.map(function (v) {
        return _this4.calcOffset(v);
      });
      var handleClassName = "".concat(prefixCls, "-handle");
      var handles = bounds.map(function (v, i) {
        var _classNames;

        var mergedTabIndex = tabIndex[i] || 0;

        if (disabled || tabIndex[i] === null) {
          mergedTabIndex = null;
        }

        var dragging = handle === i;
        return handleGenerator({
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, handleClassName, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(handleClassName, "-").concat(i + 1), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(handleClassName, "-dragging"), dragging), _classNames)),
          prefixCls: prefixCls,
          vertical: vertical,
          dragging: dragging,
          offset: offsets[i],
          value: v,
          index: i,
          tabIndex: mergedTabIndex,
          min: min,
          max: max,
          reverse: reverse,
          disabled: disabled,
          style: handleStyle[i],
          ref: function ref(h) {
            return _this4.saveHandle(i, h);
          },
          ariaLabel: ariaLabelGroupForHandles[i],
          ariaLabelledBy: ariaLabelledByGroupForHandles[i],
          ariaValueTextFormatter: ariaValueTextFormatterGroupForHandles[i]
        });
      });
      var tracks = bounds.slice(0, -1).map(function (_, index) {
        var _classNames2;

        var i = index + 1;
        var trackClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-track"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-track-").concat(i), true), _classNames2));
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_Track__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: trackClassName,
          vertical: vertical,
          reverse: reverse,
          included: included,
          offset: offsets[i - 1],
          length: offsets[i] - offsets[i - 1],
          style: trackStyle[index],
          key: i
        });
      });
      return {
        tracks: tracks,
        handles: handles
      };
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (!('value' in props || 'min' in props || 'max' in props)) {
        return null;
      }

      var value = props.value || state.bounds;
      var nextBounds = value.map(function (v, i) {
        return _trimAlignValue({
          value: v,
          handle: i,
          bounds: state.bounds,
          props: props
        });
      });

      if (state.bounds.length === nextBounds.length) {
        if (nextBounds.every(function (v, i) {
          return v === state.bounds[i];
        })) {
          return null;
        }
      } else {
        nextBounds = value.map(function (v, i) {
          return _trimAlignValue({
            value: v,
            handle: i,
            props: props
          });
        });
      }

      return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state), {}, {
        bounds: nextBounds
      });
    }
  }]);

  return Range;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
/* eslint-enable */


Range.displayName = 'Range';
Range.defaultProps = {
  count: 1,
  allowCross: true,
  pushable: false,
  draggableTrack: false,
  tabIndex: [],
  ariaLabelGroupForHandles: [],
  ariaLabelledByGroupForHandles: [],
  ariaValueTextFormatterGroupForHandles: []
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_common_createSlider__WEBPACK_IMPORTED_MODULE_10__["default"])(Range));

/***/ }),

/***/ "./node_modules/rc-slider/es/Slider.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-slider/es/Slider.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");
/* harmony import */ var _common_Track__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/Track */ "./node_modules/rc-slider/es/common/Track.js");
/* harmony import */ var _common_createSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/createSlider */ "./node_modules/rc-slider/es/common/createSlider.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-slider/es/utils.js");











var Slider = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Slider, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(Slider);

  /* eslint-enable */
  function Slider(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Slider);

    _this = _super.call(this, props);

    _this.positionGetValue = function (position) {
      return [];
    };

    _this.onEnd = function (force) {
      var dragging = _this.state.dragging;

      _this.removeDocumentEvents();

      if (dragging || force) {
        _this.props.onAfterChange(_this.getValue());
      }

      _this.setState({
        dragging: false
      });
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;
    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(!('minimumTrackStyle' in props), 'minimumTrackStyle will be deprecated, please use trackStyle instead.');
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(!('maximumTrackStyle' in props), 'maximumTrackStyle will be deprecated, please use railStyle instead.');
    return _this;
  }
  /**
   * [Legacy] Used for inherit other component.
   * It's a bad code style which should be refactor.
   */

  /* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Slider, [{
    key: "calcValueByPos",
    value: function calcValueByPos(value) {
      return 0;
    }
  }, {
    key: "calcOffset",
    value: function calcOffset(value) {
      return 0;
    }
  }, {
    key: "saveHandle",
    value: function saveHandle(index, h) {}
  }, {
    key: "removeDocumentEvents",
    value: function removeDocumentEvents() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value,
          onChange = _this$props.onChange;

      if (!('min' in this.props || 'max' in this.props)) {
        return;
      }

      var theValue = value !== undefined ? value : prevState.value;
      var nextValue = this.trimAlignValue(theValue, this.props);

      if (nextValue === prevState.value) {
        return;
      } // eslint-disable-next-line


      this.setState({
        value: nextValue
      });

      if (!(min === prevProps.min && max === prevProps.max) && _utils__WEBPACK_IMPORTED_MODULE_9__["isValueOutOfRange"](theValue, this.props)) {
        onChange(nextValue);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      var nextState = state.value > this.props.max ? Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state), {}, {
        value: this.props.max
      }) : state;

      if (isNotControlled) {
        this.setState(nextState);
      }

      var changedValue = nextState.value;
      props.onChange(changedValue);
    }
  }, {
    key: "onStart",
    value: function onStart(position) {
      this.setState({
        dragging: true
      });
      var props = this.props;
      var prevValue = this.getValue();
      props.onBeforeChange(prevValue);
      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;
      if (value === prevValue) return;
      this.prevMovedHandleIndex = 0;
      this.onChange({
        value: value
      });
    }
  }, {
    key: "onMove",
    value: function onMove(e, position) {
      _utils__WEBPACK_IMPORTED_MODULE_9__["pauseEvent"](e);
      var oldValue = this.state.value;
      var value = this.calcValueByPos(position);
      if (value === oldValue) return;
      this.onChange({
        value: value
      });
    }
  }, {
    key: "onKeyboard",
    value: function onKeyboard(e) {
      var _this$props2 = this.props,
          reverse = _this$props2.reverse,
          vertical = _this$props2.vertical;
      var valueMutator = _utils__WEBPACK_IMPORTED_MODULE_9__["getKeyboardValueMutator"](e, vertical, reverse);

      if (valueMutator) {
        _utils__WEBPACK_IMPORTED_MODULE_9__["pauseEvent"](e);
        var state = this.state;
        var oldValue = state.value;
        var mutatedValue = valueMutator(oldValue, this.props);
        var value = this.trimAlignValue(mutatedValue);
        if (value === oldValue) return;
        this.onChange({
          value: value
        });
        this.props.onAfterChange(value);
        this.onEnd();
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: "getLowerBound",
    value: function getLowerBound() {
      var minPoint = this.props.startPoint || this.props.min;
      return this.state.value > minPoint ? minPoint : this.state.value;
    }
  }, {
    key: "getUpperBound",
    value: function getUpperBound() {
      if (this.state.value < this.props.startPoint) {
        return this.props.startPoint;
      }

      return this.state.value;
    }
  }, {
    key: "trimAlignValue",
    value: function trimAlignValue(v) {
      var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (v === null) {
        return null;
      }

      var mergedProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props), nextProps);

      var val = _utils__WEBPACK_IMPORTED_MODULE_9__["ensureValueInRange"](v, mergedProps);
      return _utils__WEBPACK_IMPORTED_MODULE_9__["ensureValuePrecision"](val, mergedProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          vertical = _this$props3.vertical,
          included = _this$props3.included,
          disabled = _this$props3.disabled,
          minimumTrackStyle = _this$props3.minimumTrackStyle,
          trackStyle = _this$props3.trackStyle,
          handleStyle = _this$props3.handleStyle,
          tabIndex = _this$props3.tabIndex,
          ariaLabelForHandle = _this$props3.ariaLabelForHandle,
          ariaLabelledByForHandle = _this$props3.ariaLabelledByForHandle,
          ariaValueTextFormatterForHandle = _this$props3.ariaValueTextFormatterForHandle,
          min = _this$props3.min,
          max = _this$props3.max,
          startPoint = _this$props3.startPoint,
          reverse = _this$props3.reverse,
          handleGenerator = _this$props3.handle;
      var _this$state = this.state,
          value = _this$state.value,
          dragging = _this$state.dragging;
      var offset = this.calcOffset(value);
      var handle = handleGenerator({
        className: "".concat(prefixCls, "-handle"),
        prefixCls: prefixCls,
        vertical: vertical,
        offset: offset,
        value: value,
        dragging: dragging,
        disabled: disabled,
        min: min,
        max: max,
        reverse: reverse,
        index: 0,
        tabIndex: tabIndex,
        ariaLabel: ariaLabelForHandle,
        ariaLabelledBy: ariaLabelledByForHandle,
        ariaValueTextFormatter: ariaValueTextFormatterForHandle,
        style: handleStyle[0] || handleStyle,
        ref: function ref(h) {
          return _this2.saveHandle(0, h);
        }
      });
      var trackOffset = startPoint !== undefined ? this.calcOffset(startPoint) : 0;
      var mergedTrackStyle = trackStyle[0] || trackStyle;
      var track = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_Track__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "".concat(prefixCls, "-track"),
        vertical: vertical,
        included: included,
        offset: trackOffset,
        reverse: reverse,
        length: offset - trackOffset,
        style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, minimumTrackStyle), mergedTrackStyle)
      });
      return {
        tracks: track,
        handles: handle
      };
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_createSlider__WEBPACK_IMPORTED_MODULE_8__["default"])(Slider));

/***/ }),

/***/ "./node_modules/rc-slider/es/common/Marks.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-slider/es/common/Marks.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);






var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min,
      onClickLabel = _ref.onClickLabel;
  var marksKeys = Object.keys(marks);
  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = marks[point];
    var markPointIsObject = Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(markPoint) === 'object' && ! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;

    if (!markLabel && markLabel !== 0) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(className, "-text"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(className, "-text-active"), isActive), _classNames));

    var bottomStyle = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginBottom: '-50%'
    }, reverse ? 'top' : 'bottom', "".concat((point - min) / range * 100, "%"));

    var leftStyle = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      transform: "translateX(".concat(reverse ? "50%" : "-50%", ")"),
      msTransform: "translateX(".concat(reverse ? "50%" : "-50%", ")")
    }, reverse ? 'right' : 'left', "".concat((point - min) / range * 100, "%"));

    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style), markPoint.style) : style;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: markClassName,
      style: markStyle,
      key: point,
      onMouseDown: function onMouseDown(e) {
        return onClickLabel(e, point);
      },
      onTouchStart: function onTouchStart(e) {
        return onClickLabel(e, point);
      }
    }, markLabel);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: className
  }, elements);
};

/* harmony default export */ __webpack_exports__["default"] = (Marks);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/SliderTooltip.js":
/*!***********************************************************!*\
  !*** ./node_modules/rc-slider/es/common/SliderTooltip.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-tooltip */ "./node_modules/rc-tooltip/es/index.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");





var SliderTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) {
  var visible = props.visible,
      overlay = props.overlay;
  var innerRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
  var tooltipRef = Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__["composeRef"])(ref, innerRef);
  var rafRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);

  function cancelKeepAlign() {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"].cancel(rafRef.current);
  }

  function keepAlign() {
    rafRef.current = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
      var _innerRef$current;

      (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 ? void 0 : _innerRef$current.forcePopupAlign();
    });
  }

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (visible) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }

    return cancelKeepAlign;
  }, [visible, overlay]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](rc_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: tooltipRef
  }, props));
});
/* harmony default export */ __webpack_exports__["default"] = (SliderTooltip);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/Steps.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-slider/es/common/Steps.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");






var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat).sort(function (a, b) {
    return a - b;
  });

  if (dots && step) {
    for (var i = min; i <= max; i += step) {
      if (points.indexOf(i) === -1) {
        points.push(i);
      }
    }
  }

  return points;
};

var Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;
  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = "".concat(Math.abs(point - min) / range * 100, "%");
    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dotStyle), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reverse ? 'top' : 'bottom', offset)) : Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dotStyle), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reverse ? 'right' : 'left', offset));

    if (isActived) {
      style = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, style), activeDotStyle);
    }

    var pointClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-dot"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-dot-active"), isActived), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-dot-reverse"), reverse), _classNames));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: pointClassName,
      style: style,
      key: point
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "".concat(prefixCls, "-step")
  }, elements);
};

/* harmony default export */ __webpack_exports__["default"] = (Steps);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/Track.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-slider/es/common/Track.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var Track = function Track(props) {
  var _ref, _ref2;

  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      style = props.style;
  var length = props.length,
      offset = props.offset,
      reverse = props.reverse;

  if (length < 0) {
    reverse = !reverse;
    length = Math.abs(length);
    offset = 100 - offset;
  }

  var positonStyle = vertical ? (_ref = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, reverse ? 'top' : 'bottom', "".concat(offset, "%")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, reverse ? 'bottom' : 'top', 'auto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "height", "".concat(length, "%")), _ref) : (_ref2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, reverse ? 'right' : 'left', "".concat(offset, "%")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, reverse ? 'left' : 'right', 'auto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, "width", "".concat(length, "%")), _ref2);

  var elStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style), positonStyle);

  return included ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: className,
    style: elStyle
  }) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Track);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/createSlider.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-slider/es/common/createSlider.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSlider; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Steps */ "./node_modules/rc-slider/es/common/Steps.js");
/* harmony import */ var _Marks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Marks */ "./node_modules/rc-slider/es/common/Marks.js");
/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Handle */ "./node_modules/rc-slider/es/Handle.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils */ "./node_modules/rc-slider/es/utils.js");



















/* eslint-disable @typescript-eslint/no-explicit-any */

function noop() {}

function createSlider(Component) {
  var _a; // eslint-disable-next-line @typescript-eslint/no-unused-vars


  return _a = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(ComponentEnhancer, _Component);

    var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_10__["default"])(ComponentEnhancer);

    function ComponentEnhancer(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ComponentEnhancer);

      _this = _super.call(this, props);

      _this.onDown = function (e, position) {
        var p = position;
        var _this$props = _this.props,
            draggableTrack = _this$props.draggableTrack,
            isVertical = _this$props.vertical;
        var bounds = _this.state.bounds;
        var value = draggableTrack && _this.positionGetValue ? _this.positionGetValue(p) || [] : [];
        var inPoint = _utils__WEBPACK_IMPORTED_MODULE_18__["isEventFromHandle"](e, _this.handlesRefs);
        _this.dragTrack = draggableTrack && bounds.length >= 2 && !inPoint && !value.map(function (n, i) {
          var v = !i ? n >= bounds[i] : true;
          return i === value.length - 1 ? n <= bounds[i] : v;
        }).some(function (c) {
          return !c;
        });

        if (_this.dragTrack) {
          _this.dragOffset = p;
          _this.startBounds = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(bounds);
        } else {
          if (!inPoint) {
            _this.dragOffset = 0;
          } else {
            var handlePosition = _utils__WEBPACK_IMPORTED_MODULE_18__["getHandleCenterPosition"](isVertical, e.target);
            _this.dragOffset = p - handlePosition;
            p = handlePosition;
          }

          _this.onStart(p);
        }
      };

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        _this.removeDocumentEvents();

        var isVertical = _this.props.vertical;
        var position = _utils__WEBPACK_IMPORTED_MODULE_18__["getMousePosition"](isVertical, e);

        _this.onDown(e, position);

        _this.addDocumentMouseEvents();
      };

      _this.onTouchStart = function (e) {
        if (_utils__WEBPACK_IMPORTED_MODULE_18__["isNotTouchEvent"](e)) return;
        var isVertical = _this.props.vertical;
        var position = _utils__WEBPACK_IMPORTED_MODULE_18__["getTouchPosition"](isVertical, e);

        _this.onDown(e, position);

        _this.addDocumentTouchEvents();

        _utils__WEBPACK_IMPORTED_MODULE_18__["pauseEvent"](e);
      };

      _this.onFocus = function (e) {
        var _this$props2 = _this.props,
            onFocus = _this$props2.onFocus,
            vertical = _this$props2.vertical;

        if (_utils__WEBPACK_IMPORTED_MODULE_18__["isEventFromHandle"](e, _this.handlesRefs) && !_this.dragTrack) {
          var handlePosition = _utils__WEBPACK_IMPORTED_MODULE_18__["getHandleCenterPosition"](vertical, e.target);
          _this.dragOffset = 0;

          _this.onStart(handlePosition);

          _utils__WEBPACK_IMPORTED_MODULE_18__["pauseEvent"](e);

          if (onFocus) {
            onFocus(e);
          }
        }
      };

      _this.onBlur = function (e) {
        var onBlur = _this.props.onBlur;

        if (!_this.dragTrack) {
          _this.onEnd();
        }

        if (onBlur) {
          onBlur(e);
        }
      };

      _this.onMouseUp = function () {
        if (_this.handlesRefs[_this.prevMovedHandleIndex]) {
          _this.handlesRefs[_this.prevMovedHandleIndex].clickFocus();
        }
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();

          return;
        }

        var position = _utils__WEBPACK_IMPORTED_MODULE_18__["getMousePosition"](_this.props.vertical, e);

        _this.onMove(e, position - _this.dragOffset, _this.dragTrack, _this.startBounds);
      };

      _this.onTouchMove = function (e) {
        if (_utils__WEBPACK_IMPORTED_MODULE_18__["isNotTouchEvent"](e) || !_this.sliderRef) {
          _this.onEnd();

          return;
        }

        var position = _utils__WEBPACK_IMPORTED_MODULE_18__["getTouchPosition"](_this.props.vertical, e);

        _this.onMove(e, position - _this.dragOffset, _this.dragTrack, _this.startBounds);
      };

      _this.onKeyDown = function (e) {
        if (_this.sliderRef && _utils__WEBPACK_IMPORTED_MODULE_18__["isEventFromHandle"](e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.onClickMarkLabel = function (e, value) {
        e.stopPropagation();

        _this.onChange({
          value: value
        }); // eslint-disable-next-line react/no-unused-state


        _this.setState({
          value: value
        }, function () {
          return _this.onEnd(true);
        });
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      var step = props.step,
          max = props.max,
          min = props.min;
      var isPointDiffEven = isFinite(max - min) ? (max - min) % step === 0 : true; // eslint-disable-line

      Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_14__["default"])(step && Math.floor(step) === step ? isPointDiffEven : true, "Slider[max] - Slider[min] (".concat(max - min, ") should be a multiple of Slider[step] (").concat(step, ")"));
      _this.handlesRefs = {};
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ComponentEnhancer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // Snapshot testing cannot handle refs, so be sure to null-check this.
        this.document = this.sliderRef && this.sliderRef.ownerDocument;
        var _this$props3 = this.props,
            autoFocus = _this$props3.autoFocus,
            disabled = _this$props3.disabled;

        if (autoFocus && !disabled) {
          this.focus();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(ComponentEnhancer.prototype), "componentWillUnmount", this)) Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(ComponentEnhancer.prototype), "componentWillUnmount", this).call(this);
        this.removeDocumentEvents();
      }
    }, {
      key: "getSliderStart",
      value: function getSliderStart() {
        var slider = this.sliderRef;
        var _this$props4 = this.props,
            vertical = _this$props4.vertical,
            reverse = _this$props4.reverse;
        var rect = slider.getBoundingClientRect();

        if (vertical) {
          return reverse ? rect.bottom : rect.top;
        }

        return window.pageXOffset + (reverse ? rect.right : rect.left);
      }
    }, {
      key: "getSliderLength",
      value: function getSliderLength() {
        var slider = this.sliderRef;

        if (!slider) {
          return 0;
        }

        var coords = slider.getBoundingClientRect();
        return this.props.vertical ? coords.height : coords.width;
      }
    }, {
      key: "addDocumentTouchEvents",
      value: function addDocumentTouchEvents() {
        // just work for Chrome iOS Safari and Android Browser
        this.onTouchMoveListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__["default"])(this.document, 'touchmove', this.onTouchMove);
        this.onTouchUpListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__["default"])(this.document, 'touchend', this.onEnd);
      }
    }, {
      key: "addDocumentMouseEvents",
      value: function addDocumentMouseEvents() {
        this.onMouseMoveListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__["default"])(this.document, 'mousemove', this.onMouseMove);
        this.onMouseUpListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__["default"])(this.document, 'mouseup', this.onEnd);
      }
    }, {
      key: "removeDocumentEvents",
      value: function removeDocumentEvents() {
        /* eslint-disable @typescript-eslint/no-unused-expressions */
        this.onTouchMoveListener && this.onTouchMoveListener.remove();
        this.onTouchUpListener && this.onTouchUpListener.remove();
        this.onMouseMoveListener && this.onMouseMoveListener.remove();
        this.onMouseUpListener && this.onMouseUpListener.remove();
        /* eslint-enable no-unused-expressions */
      }
    }, {
      key: "focus",
      value: function focus() {
        var _this$handlesRefs$;

        if (this.props.disabled) {
          return;
        }

        (_this$handlesRefs$ = this.handlesRefs[0]) === null || _this$handlesRefs$ === void 0 ? void 0 : _this$handlesRefs$.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        var _this2 = this;

        if (this.props.disabled) {
          return;
        }

        Object.keys(this.handlesRefs).forEach(function (key) {
          var _this2$handlesRefs$ke, _this2$handlesRefs$ke2;

          (_this2$handlesRefs$ke = _this2.handlesRefs[key]) === null || _this2$handlesRefs$ke === void 0 ? void 0 : (_this2$handlesRefs$ke2 = _this2$handlesRefs$ke.blur) === null || _this2$handlesRefs$ke2 === void 0 ? void 0 : _this2$handlesRefs$ke2.call(_this2$handlesRefs$ke);
        });
      }
    }, {
      key: "calcValue",
      value: function calcValue(offset) {
        var _this$props5 = this.props,
            vertical = _this$props5.vertical,
            min = _this$props5.min,
            max = _this$props5.max;
        var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
        var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
      }
    }, {
      key: "calcValueByPos",
      value: function calcValueByPos(position) {
        var sign = this.props.reverse ? -1 : +1;
        var pixelOffset = sign * (position - this.getSliderStart());
        var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
        return nextValue;
      }
    }, {
      key: "calcOffset",
      value: function calcOffset(value) {
        var _this$props6 = this.props,
            min = _this$props6.min,
            max = _this$props6.max;
        var ratio = (value - min) / (max - min);
        return Math.max(0, ratio * 100);
      }
    }, {
      key: "saveHandle",
      value: function saveHandle(index, handle) {
        this.handlesRefs[index] = handle;
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames;

        var _this$props7 = this.props,
            prefixCls = _this$props7.prefixCls,
            className = _this$props7.className,
            marks = _this$props7.marks,
            dots = _this$props7.dots,
            step = _this$props7.step,
            included = _this$props7.included,
            disabled = _this$props7.disabled,
            vertical = _this$props7.vertical,
            reverse = _this$props7.reverse,
            min = _this$props7.min,
            max = _this$props7.max,
            children = _this$props7.children,
            maximumTrackStyle = _this$props7.maximumTrackStyle,
            style = _this$props7.style,
            railStyle = _this$props7.railStyle,
            dotStyle = _this$props7.dotStyle,
            activeDotStyle = _this$props7.activeDotStyle;

        var _get$call = Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(ComponentEnhancer.prototype), "render", this).call(this),
            tracks = _get$call.tracks,
            handles = _get$call.handles;

        var sliderClassName = classnames__WEBPACK_IMPORTED_MODULE_13___default()(prefixCls, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_classNames, "".concat(prefixCls, "-with-marks"), Object.keys(marks).length), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_classNames, "".concat(prefixCls, "-vertical"), vertical), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_classNames, className, className), _classNames));
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          ref: this.saveSlider,
          className: sliderClassName,
          onTouchStart: disabled ? noop : this.onTouchStart,
          onMouseDown: disabled ? noop : this.onMouseDown,
          onMouseUp: disabled ? noop : this.onMouseUp,
          onKeyDown: disabled ? noop : this.onKeyDown,
          onFocus: disabled ? noop : this.onFocus,
          onBlur: disabled ? noop : this.onBlur,
          style: style
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: "".concat(prefixCls, "-rail"),
          style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, maximumTrackStyle), railStyle)
        }), tracks, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Steps__WEBPACK_IMPORTED_MODULE_15__["default"], {
          prefixCls: prefixCls,
          vertical: vertical,
          reverse: reverse,
          marks: marks,
          dots: dots,
          step: step,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          dotStyle: dotStyle,
          activeDotStyle: activeDotStyle
        }), handles, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Marks__WEBPACK_IMPORTED_MODULE_16__["default"], {
          className: "".concat(prefixCls, "-mark"),
          onClickLabel: disabled ? noop : this.onClickMarkLabel,
          vertical: vertical,
          marks: marks,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          reverse: reverse
        }), children);
      }
    }]);

    return ComponentEnhancer;
  }(Component), _a.displayName = "ComponentEnhancer(".concat(Component.displayName, ")"), _a.defaultProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Component.defaultProps), {}, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(props) {
      var index = props.index,
          restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["index"]);

      delete restProps.dragging;

      if (restProps.value === null) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Handle__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps, {
        key: index
      }));
    },
    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    reverse: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _a;
}

/***/ }),

/***/ "./node_modules/rc-slider/es/createSliderWithTooltip.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-slider/es/createSliderWithTooltip.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSliderWithTooltip; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_SliderTooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/SliderTooltip */ "./node_modules/rc-slider/es/common/SliderTooltip.js");
/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Handle */ "./node_modules/rc-slider/es/Handle.js");











function createSliderWithTooltip(Component) {
  var _a; // eslint-disable-next-line @typescript-eslint/no-unused-vars


  return _a = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ComponentWrapper, _React$Component);

    var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(ComponentWrapper);

    function ComponentWrapper() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ComponentWrapper);

      _this = _super.apply(this, arguments);
      _this.state = {
        visibles: {}
      };

      _this.handleTooltipVisibleChange = function (index, visible) {
        _this.setState(function (prevState) {
          return {
            visibles: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, prevState.visibles), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, index, visible))
          };
        });
      };

      _this.handleWithTooltip = function (_ref) {
        var value = _ref.value,
            dragging = _ref.dragging,
            index = _ref.index,
            disabled = _ref.disabled,
            restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["value", "dragging", "index", "disabled"]);

        var _this$props = _this.props,
            tipFormatter = _this$props.tipFormatter,
            tipProps = _this$props.tipProps,
            handleStyle = _this$props.handleStyle,
            getTooltipContainer = _this$props.getTooltipContainer;

        var _tipProps$prefixCls = tipProps.prefixCls,
            prefixCls = _tipProps$prefixCls === void 0 ? 'rc-slider-tooltip' : _tipProps$prefixCls,
            _tipProps$overlay = tipProps.overlay,
            overlay = _tipProps$overlay === void 0 ? tipFormatter(value) : _tipProps$overlay,
            _tipProps$placement = tipProps.placement,
            placement = _tipProps$placement === void 0 ? 'top' : _tipProps$placement,
            _tipProps$visible = tipProps.visible,
            visible = _tipProps$visible === void 0 ? false : _tipProps$visible,
            restTooltipProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(tipProps, ["prefixCls", "overlay", "placement", "visible"]);

        var handleStyleWithIndex;

        if (Array.isArray(handleStyle)) {
          handleStyleWithIndex = handleStyle[index] || handleStyle[0];
        } else {
          handleStyleWithIndex = handleStyle;
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_common_SliderTooltip__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restTooltipProps, {
          getTooltipContainer: getTooltipContainer,
          prefixCls: prefixCls,
          overlay: overlay,
          placement: placement,
          visible: !disabled && (_this.state.visibles[index] || dragging) || visible,
          key: index
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Handle__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps, {
          style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, handleStyleWithIndex),
          value: value,
          onMouseEnter: function onMouseEnter() {
            return _this.handleTooltipVisibleChange(index, true);
          },
          onMouseLeave: function onMouseLeave() {
            return _this.handleTooltipVisibleChange(index, false);
          }
        })));
      };

      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ComponentWrapper, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
          handle: this.handleWithTooltip
        }));
      }
    }]);

    return ComponentWrapper;
  }(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component), _a.defaultProps = {
    tipFormatter: function tipFormatter(value) {
      return value;
    },
    handleStyle: [{}],
    tipProps: {},
    getTooltipContainer: function getTooltipContainer(node) {
      return node.parentNode;
    }
  }, _a;
}

/***/ }),

/***/ "./node_modules/rc-slider/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-slider/es/index.js ***!
  \********************************************/
/*! exports provided: default, Range, Handle, createSliderWithTooltip, SliderTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./node_modules/rc-slider/es/Slider.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Range */ "./node_modules/rc-slider/es/Range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return _Range__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Handle */ "./node_modules/rc-slider/es/Handle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Handle", function() { return _Handle__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _createSliderWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createSliderWithTooltip */ "./node_modules/rc-slider/es/createSliderWithTooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSliderWithTooltip", function() { return _createSliderWithTooltip__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _common_SliderTooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/SliderTooltip */ "./node_modules/rc-slider/es/common/SliderTooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderTooltip", function() { return _common_SliderTooltip__WEBPACK_IMPORTED_MODULE_4__["default"]; });






var InternalSlider = _Slider__WEBPACK_IMPORTED_MODULE_0__["default"];
InternalSlider.Range = _Range__WEBPACK_IMPORTED_MODULE_1__["default"];
InternalSlider.Handle = _Handle__WEBPACK_IMPORTED_MODULE_2__["default"];
InternalSlider.createSliderWithTooltip = _createSliderWithTooltip__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ __webpack_exports__["default"] = (InternalSlider);


/***/ }),

/***/ "./node_modules/rc-slider/es/utils.js":
/*!********************************************!*\
  !*** ./node_modules/rc-slider/es/utils.js ***!
  \********************************************/
/*! exports provided: isEventFromHandle, isValueOutOfRange, isNotTouchEvent, getClosestPoint, getPrecision, getMousePosition, getTouchPosition, getHandleCenterPosition, ensureValueInRange, ensureValuePrecision, pauseEvent, calculateNextValue, getKeyboardValueMutator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEventFromHandle", function() { return isEventFromHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueOutOfRange", function() { return isValueOutOfRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotTouchEvent", function() { return isNotTouchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosestPoint", function() { return getClosestPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrecision", function() { return getPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMousePosition", function() { return getMousePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchPosition", function() { return getTouchPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHandleCenterPosition", function() { return getHandleCenterPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureValueInRange", function() { return ensureValueInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureValuePrecision", function() { return ensureValuePrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseEvent", function() { return pauseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateNextValue", function() { return calculateNextValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeyboardValueMutator", function() { return getKeyboardValueMutator; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");



function isEventFromHandle(e, handles) {
  try {
    return Object.keys(handles).some(function (key) {
      return e.target === Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(handles[key]);
    });
  } catch (error) {
    return false;
  }
}
function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;
  return value < min || value > max;
}
function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}
function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min,
      max = _ref2.max;
  var points = Object.keys(marks).map(parseFloat);

  if (step !== null) {
    var baseNum = Math.pow(10, getPrecision(step));
    var maxSteps = Math.floor((max * baseNum - min * baseNum) / (step * baseNum));
    var steps = Math.min((val - min) / step, maxSteps);
    var closestStep = Math.round(steps) * step + min;
    points.push(closestStep);
  }

  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(diffs)))];
}
function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;

  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }

  return precision;
}
function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}
function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}
function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : window.pageXOffset + coords.left + coords.width * 0.5;
}
function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }

  if (val >= max) {
    return max;
  }

  return val;
}
function ensureValuePrecision(val, props) {
  var step = props.step;
  var closestPoint = isFinite(getClosestPoint(val, props)) ? getClosestPoint(val, props) : 0; // eslint-disable-line

  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}
function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}
function calculateNextValue(func, value, props) {
  var operations = {
    increase: function increase(a, b) {
      return a + b;
    },
    decrease: function decrease(a, b) {
      return a - b;
    }
  };
  var indexToGet = operations[func](Object.keys(props.marks).indexOf(JSON.stringify(value)), 1);
  var keyToGet = Object.keys(props.marks)[indexToGet];

  if (props.step) {
    return operations[func](value, props.step);
  }

  if (!!Object.keys(props.marks).length && !!props.marks[keyToGet]) {
    return props.marks[keyToGet];
  }

  return value;
}
function getKeyboardValueMutator(e, vertical, reverse) {
  var increase = 'increase';
  var decrease = 'decrease';
  var method = increase;

  switch (e.keyCode) {
    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].UP:
      method = vertical && reverse ? decrease : increase;
      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].RIGHT:
      method = !vertical && reverse ? decrease : increase;
      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].DOWN:
      method = vertical && reverse ? increase : decrease;
      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].LEFT:
      method = !vertical && reverse ? increase : decrease;
      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].END:
      return function (value, props) {
        return props.max;
      };

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].HOME:
      return function (value, props) {
        return props.min;
      };

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].PAGE_UP:
      return function (value, props) {
        return value + props.step * 2;
      };

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].PAGE_DOWN:
      return function (value, props) {
        return value - props.step * 2;
      };

    default:
      return undefined;
  }

  return function (value, props) {
    return calculateNextValue(method, value, props);
  };
}

/***/ }),

/***/ "./node_modules/rc-tooltip/es/Content.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tooltip/es/Content.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Content = function Content(props) {
  var overlay = props.overlay,
      prefixCls = props.prefixCls,
      id = props.id,
      overlayInnerStyle = props.overlayInnerStyle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "".concat(prefixCls, "-inner"),
    id: id,
    role: "tooltip",
    style: overlayInnerStyle
  }, typeof overlay === 'function' ? overlay() : overlay);
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/Tooltip.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tooltip/es/Tooltip.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-trigger */ "./node_modules/rc-trigger/es/index.js");
/* harmony import */ var _placements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./placements */ "./node_modules/rc-tooltip/es/placements.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Content */ "./node_modules/rc-tooltip/es/Content.js");










var Tooltip = function Tooltip(props, ref) {
  var overlayClassName = props.overlayClassName,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
      _props$mouseEnterDela = props.mouseEnterDelay,
      mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      overlayStyle = props.overlayStyle,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-tooltip' : _props$prefixCls,
      children = props.children,
      onVisibleChange = props.onVisibleChange,
      afterVisibleChange = props.afterVisibleChange,
      transitionName = props.transitionName,
      animation = props.animation,
      motion = props.motion,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'right' : _props$placement,
      _props$align = props.align,
      align = _props$align === void 0 ? {} : _props$align,
      _props$destroyTooltip = props.destroyTooltipOnHide,
      destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip,
      defaultVisible = props.defaultVisible,
      getTooltipContainer = props.getTooltipContainer,
      overlayInnerStyle = props.overlayInnerStyle,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle"]);

  var domRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useImperativeHandle"])(ref, function () {
    return domRef.current;
  });

  var extraProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, restProps);

  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }

  var getPopupElement = function getPopupElement() {
    var _props$arrowContent = props.arrowContent,
        arrowContent = _props$arrowContent === void 0 ? null : _props$arrowContent,
        overlay = props.overlay,
        id = props.id;
    return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "".concat(prefixCls, "-arrow"),
      key: "arrow"
    }, arrowContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Content__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: "content",
      prefixCls: prefixCls,
      id: id,
      overlay: overlay,
      overlayInnerStyle: overlayInnerStyle
    })];
  };

  var destroyTooltip = false;
  var autoDestroy = false;

  if (typeof destroyTooltipOnHide === 'boolean') {
    destroyTooltip = destroyTooltipOnHide;
  } else if (destroyTooltipOnHide && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(destroyTooltipOnHide) === 'object') {
    var keepParent = destroyTooltipOnHide.keepParent;
    destroyTooltip = keepParent === true;
    autoDestroy = keepParent === false;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_trigger__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    popupClassName: overlayClassName,
    prefixCls: prefixCls,
    popup: getPopupElement,
    action: trigger,
    builtinPlacements: _placements__WEBPACK_IMPORTED_MODULE_6__["placements"],
    popupPlacement: placement,
    ref: domRef,
    popupAlign: align,
    getPopupContainer: getTooltipContainer,
    onPopupVisibleChange: onVisibleChange,
    afterPopupVisibleChange: afterVisibleChange,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupMotion: motion,
    defaultPopupVisible: defaultVisible,
    destroyPopupOnHide: destroyTooltip,
    autoDestroy: autoDestroy,
    mouseLeaveDelay: mouseLeaveDelay,
    popupStyle: overlayStyle,
    mouseEnterDelay: mouseEnterDelay
  }, extraProps), children);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(Tooltip));

/***/ }),

/***/ "./node_modules/rc-tooltip/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-tooltip/es/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tooltip */ "./node_modules/rc-tooltip/es/Tooltip.js");

/* harmony default export */ __webpack_exports__["default"] = (_Tooltip__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/placements.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-tooltip/es/placements.js ***!
  \**************************************************/
/*! exports provided: placements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};
/* harmony default export */ __webpack_exports__["default"] = (placements);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/Mask.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/Mask.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mask; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js");
/* harmony import */ var _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/legacyUtil */ "./node_modules/rc-trigger/es/utils/legacyUtil.js");






function Mask(props) {
  var prefixCls = props.prefixCls,
      visible = props.visible,
      zIndex = props.zIndex,
      mask = props.mask,
      maskMotion = props.maskMotion,
      maskAnimation = props.maskAnimation,
      maskTransitionName = props.maskTransitionName;

  if (!mask) {
    return null;
  }

  var motion = {};

  if (maskMotion || maskTransitionName || maskAnimation) {
    motion = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
      motionAppear: true
    }, Object(_utils_legacyUtil__WEBPACK_IMPORTED_MODULE_5__["getMotion"])({
      motion: maskMotion,
      prefixCls: prefixCls,
      transitionName: maskTransitionName,
      animation: maskAnimation
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](rc_motion__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, motion, {
    visible: visible,
    removeOnLeave: true
  }), function (_ref) {
    var className = _ref.className;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      style: {
        zIndex: zIndex
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-mask"), className)
    });
  });
}

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/MobilePopupInner.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/MobilePopupInner.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





var MobilePopupInner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function (props, ref) {
  var prefixCls = props.prefixCls,
      visible = props.visible,
      zIndex = props.zIndex,
      children = props.children,
      _props$mobile = props.mobile;
  _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
  var popupClassName = _props$mobile.popupClassName,
      popupStyle = _props$mobile.popupStyle,
      _props$mobile$popupMo = _props$mobile.popupMotion,
      popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo,
      popupRender = _props$mobile.popupRender;
  var elementRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](); // ========================= Refs =========================

  react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"](ref, function () {
    return {
      forceAlign: function forceAlign() {},
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  }); // ======================== Render ========================

  var mergedStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
    zIndex: zIndex
  }, popupStyle);

  var childNode = children; // Wrapper when multiple children

  if (react__WEBPACK_IMPORTED_MODULE_2__["Children"].count(children) > 1) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  } // Mobile support additional render


  if (popupRender) {
    childNode = popupRender(childNode);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](rc_motion__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    visible: visible,
    ref: elementRef,
    removeOnLeave: true
  }, popupMotion), function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, popupClassName, motionClassName);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      ref: motionRef,
      className: mergedClassName,
      style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, motionStyle), mergedStyle)
    }, childNode);
  });
});
MobilePopupInner.displayName = 'MobilePopupInner';
/* harmony default export */ __webpack_exports__["default"] = (MobilePopupInner);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/PopupInner.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/PopupInner.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_align__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-align */ "./node_modules/rc-align/es/index.js");
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _useVisibleStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useVisibleStatus */ "./node_modules/rc-trigger/es/Popup/useVisibleStatus.js");
/* harmony import */ var _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/legacyUtil */ "./node_modules/rc-trigger/es/utils/legacyUtil.js");
/* harmony import */ var _useStretchStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useStretchStyle */ "./node_modules/rc-trigger/es/Popup/useStretchStyle.js");











var PopupInner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function (props, ref) {
  var visible = props.visible,
      prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      children = props.children,
      zIndex = props.zIndex,
      stretch = props.stretch,
      destroyPopupOnHide = props.destroyPopupOnHide,
      align = props.align,
      point = props.point,
      getRootDomNode = props.getRootDomNode,
      getClassNameFromAlign = props.getClassNameFromAlign,
      onAlign = props.onAlign,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onMouseDown = props.onMouseDown,
      onTouchStart = props.onTouchStart;
  var alignRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      alignedClassName = _useState2[0],
      setAlignedClassName = _useState2[1]; // ======================= Measure ========================


  var _useStretchStyle = Object(_useStretchStyle__WEBPACK_IMPORTED_MODULE_9__["default"])(stretch),
      _useStretchStyle2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useStretchStyle, 2),
      stretchStyle = _useStretchStyle2[0],
      measureStretchStyle = _useStretchStyle2[1];

  function doMeasure() {
    if (stretch) {
      measureStretchStyle(getRootDomNode());
    }
  } // ======================== Status ========================


  var _useVisibleStatus = Object(_useVisibleStatus__WEBPACK_IMPORTED_MODULE_7__["default"])(visible, doMeasure),
      _useVisibleStatus2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useVisibleStatus, 2),
      status = _useVisibleStatus2[0],
      goNextStatus = _useVisibleStatus2[1]; // ======================== Aligns ========================


  var prepareResolveRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(); // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align

  function getAlignTarget() {
    if (point) {
      return point;
    }

    return getRootDomNode;
  }

  function forceAlign() {
    var _alignRef$current;

    (_alignRef$current = alignRef.current) === null || _alignRef$current === void 0 ? void 0 : _alignRef$current.forceAlign();
  }

  function onInternalAlign(popupDomNode, matchAlign) {
    if (status === 'align') {
      var nextAlignedClassName = getClassNameFromAlign(matchAlign);
      setAlignedClassName(nextAlignedClassName); // Repeat until not more align needed

      if (alignedClassName !== nextAlignedClassName) {
        Promise.resolve().then(function () {
          forceAlign();
        });
      } else {
        goNextStatus(function () {
          var _prepareResolveRef$cu;

          (_prepareResolveRef$cu = prepareResolveRef.current) === null || _prepareResolveRef$cu === void 0 ? void 0 : _prepareResolveRef$cu.call(prepareResolveRef);
        });
      }

      onAlign === null || onAlign === void 0 ? void 0 : onAlign(popupDomNode, matchAlign);
    }
  } // ======================== Motion ========================


  var motion = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_utils_legacyUtil__WEBPACK_IMPORTED_MODULE_8__["getMotion"])(props));

  ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (eventName) {
    var originHandler = motion[eventName];

    motion[eventName] = function (element, event) {
      goNextStatus();
      return originHandler === null || originHandler === void 0 ? void 0 : originHandler(element, event);
    };
  });

  function onShowPrepare() {
    return new Promise(function (resolve) {
      prepareResolveRef.current = resolve;
    });
  } // Go to stable directly when motion not provided


  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (!motion.motionName && status === 'motion') {
      goNextStatus();
    }
  }, [motion.motionName, status]); // ========================= Refs =========================

  react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"](ref, function () {
    return {
      forceAlign: forceAlign,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  }); // ======================== Render ========================

  var mergedStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, stretchStyle), {}, {
    zIndex: zIndex
  }, style), {}, {
    opacity: status === 'motion' || status === 'stable' || !visible ? undefined : 0,
    pointerEvents: status === 'stable' ? undefined : 'none'
  }); // Align status


  var alignDisabled = true;

  if ((align === null || align === void 0 ? void 0 : align.points) && (status === 'align' || status === 'stable')) {
    alignDisabled = false;
  }

  var childNode = children; // Wrapper when multiple children

  if (react__WEBPACK_IMPORTED_MODULE_3__["Children"].count(children) > 1) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](rc_motion__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    visible: visible,
    ref: elementRef,
    leavedClassName: "".concat(prefixCls, "-hidden")
  }, motion, {
    onAppearPrepare: onShowPrepare,
    onEnterPrepare: onShowPrepare,
    removeOnLeave: destroyPopupOnHide
  }), function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedClassName = classnames__WEBPACK_IMPORTED_MODULE_6___default()(prefixCls, className, alignedClassName, motionClassName);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](rc_align__WEBPACK_IMPORTED_MODULE_4__["default"], {
      target: getAlignTarget(),
      key: "popup",
      ref: alignRef,
      monitorWindowResize: true,
      disabled: alignDisabled,
      align: align,
      onAlign: onInternalAlign
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      ref: motionRef,
      className: mergedClassName,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseDownCapture: onMouseDown,
      onTouchStartCapture: onTouchStart,
      style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, motionStyle), mergedStyle)
    }, childNode));
  });
});
PopupInner.displayName = 'PopupInner';
/* harmony default export */ __webpack_exports__["default"] = (PopupInner);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/index.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/isMobile */ "./node_modules/rc-util/es/isMobile.js");
/* harmony import */ var _Mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Mask */ "./node_modules/rc-trigger/es/Popup/Mask.js");
/* harmony import */ var _PopupInner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PopupInner */ "./node_modules/rc-trigger/es/Popup/PopupInner.js");
/* harmony import */ var _MobilePopupInner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MobilePopupInner */ "./node_modules/rc-trigger/es/Popup/MobilePopupInner.js");










var Popup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"](function (_ref, ref) {
  var visible = _ref.visible,
      mobile = _ref.mobile,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["visible", "mobile"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(visible),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      innerVisible = _useState2[0],
      serInnerVisible = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      inMobile = _useState4[0],
      setInMobile = _useState4[1];

  var cloneProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props), {}, {
    visible: innerVisible
  }); // We check mobile in visible changed here.
  // And this also delay set `innerVisible` to avoid popup component render flash


  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    serInnerVisible(visible);

    if (visible && mobile) {
      setInMobile(Object(rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_5__["default"])());
    }
  }, [visible, mobile]);
  var popupNode = inMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_MobilePopupInner__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cloneProps, {
    mobile: mobile,
    ref: ref
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_PopupInner__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cloneProps, {
    ref: ref
  })); // We can use fragment directly but this may failed some selector usage. Keep as origin logic

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Mask__WEBPACK_IMPORTED_MODULE_6__["default"], cloneProps), popupNode);
});
Popup.displayName = 'Popup';
/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/useStretchStyle.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/useStretchStyle.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (stretch) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
    width: 0,
    height: 0
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      targetSize = _React$useState2[0],
      setTargetSize = _React$useState2[1];

  function measureStretch(element) {
    setTargetSize({
      width: element.offsetWidth,
      height: element.offsetHeight
    });
  } // Merge stretch style


  var style = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    var sizeStyle = {};

    if (stretch) {
      var width = targetSize.width,
          height = targetSize.height; // Stretch with target

      if (stretch.indexOf('height') !== -1 && height) {
        sizeStyle.height = height;
      } else if (stretch.indexOf('minHeight') !== -1 && height) {
        sizeStyle.minHeight = height;
      }

      if (stretch.indexOf('width') !== -1 && width) {
        sizeStyle.width = width;
      } else if (stretch.indexOf('minWidth') !== -1 && width) {
        sizeStyle.minWidth = width;
      }
    }

    return sizeStyle;
  }, [stretch, targetSize]);
  return [style, measureStretch];
});

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/useVisibleStatus.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/useVisibleStatus.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");





var StatusQueue = ['measure', 'align', null, 'motion'];
/* harmony default export */ __webpack_exports__["default"] = (function (visible, doMeasure) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      status = _useState2[0],
      setInternalStatus = _useState2[1];

  var rafRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var destroyRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);

  function setStatus(nextStatus) {
    if (!destroyRef.current) {
      setInternalStatus(nextStatus);
    }
  }

  function cancelRaf() {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"].cancel(rafRef.current);
  }

  function goNextStatus(callback) {
    cancelRaf();
    rafRef.current = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
      // Only align should be manually trigger
      setStatus(function (prev) {
        switch (status) {
          case 'align':
            return 'motion';

          case 'motion':
            return 'stable';

          default:
        }

        return prev;
      });
      callback === null || callback === void 0 ? void 0 : callback();
    });
  } // Init status


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setStatus('measure');
  }, [visible]); // Go next status

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    switch (status) {
      case 'measure':
        doMeasure();
        break;

      default:
    }

    if (status) {
      rafRef.current = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var index, nextStatus;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                index = StatusQueue.indexOf(status);
                nextStatus = StatusQueue[index + 1];

                if (nextStatus && index !== -1) {
                  setStatus(nextStatus);
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    }
  }, [status]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    return function () {
      destroyRef.current = true;
      cancelRaf();
    };
  }, []);
  return [status, goNextStatus];
});

/***/ }),

/***/ "./node_modules/rc-trigger/es/context.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-trigger/es/context.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TriggerContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
/* harmony default export */ __webpack_exports__["default"] = (TriggerContext);

/***/ }),

/***/ "./node_modules/rc-trigger/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/index.js ***!
  \*********************************************/
/*! exports provided: generateTrigger, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTrigger", function() { return generateTrigger; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/rc-util/es/Dom/contains.js");
/* harmony import */ var rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/Dom/findDOMNode */ "./node_modules/rc-util/es/Dom/findDOMNode.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rc-util/es/Portal */ "./node_modules/rc-util/es/Portal.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_alignUtil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/alignUtil */ "./node_modules/rc-trigger/es/utils/alignUtil.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Popup */ "./node_modules/rc-trigger/es/Popup/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./context */ "./node_modules/rc-trigger/es/context.js");




















function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }

  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];
/**
 * Internal usage. Do not use in your code since this will be removed.
 */

function generateTrigger(PortalComponent) {
  var Trigger = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Trigger, _React$Component);

    var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(Trigger);

    function Trigger(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Trigger);

      _this = _super.call(this, props);
      _this.popupRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createRef"]();
      _this.triggerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createRef"]();

      _this.onMouseEnter = function (e) {
        var mouseEnterDelay = _this.props.mouseEnterDelay;

        _this.fireEvents('onMouseEnter', e);

        _this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
      };

      _this.onMouseMove = function (e) {
        _this.fireEvents('onMouseMove', e);

        _this.setPoint(e);
      };

      _this.onMouseLeave = function (e) {
        _this.fireEvents('onMouseLeave', e);

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onPopupMouseEnter = function () {
        _this.clearDelayTimer();
      };

      _this.onPopupMouseLeave = function (e) {
        var _this$popupRef$curren;

        // https://github.com/react-component/trigger/pull/13
        // react bug?
        if (e.relatedTarget && !e.relatedTarget.setTimeout && Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_10__["default"])((_this$popupRef$curren = _this.popupRef.current) === null || _this$popupRef$curren === void 0 ? void 0 : _this$popupRef$curren.getElement(), e.relatedTarget)) {
          return;
        }

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onFocus = function (e) {
        _this.fireEvents('onFocus', e); // incase focusin and focusout


        _this.clearDelayTimer();

        if (_this.isFocusToShow()) {
          _this.focusTime = Date.now();

          _this.delaySetPopupVisible(true, _this.props.focusDelay);
        }
      };

      _this.onMouseDown = function (e) {
        _this.fireEvents('onMouseDown', e);

        _this.preClickTime = Date.now();
      };

      _this.onTouchStart = function (e) {
        _this.fireEvents('onTouchStart', e);

        _this.preTouchTime = Date.now();
      };

      _this.onBlur = function (e) {
        _this.fireEvents('onBlur', e);

        _this.clearDelayTimer();

        if (_this.isBlurToHide()) {
          _this.delaySetPopupVisible(false, _this.props.blurDelay);
        }
      };

      _this.onContextMenu = function (e) {
        e.preventDefault();

        _this.fireEvents('onContextMenu', e);

        _this.setPopupVisible(true, e);
      };

      _this.onContextMenuClose = function () {
        if (_this.isContextMenuToShow()) {
          _this.close();
        }
      };

      _this.onClick = function (event) {
        _this.fireEvents('onClick', event); // focus will trigger click


        if (_this.focusTime) {
          var preTime;

          if (_this.preClickTime && _this.preTouchTime) {
            preTime = Math.min(_this.preClickTime, _this.preTouchTime);
          } else if (_this.preClickTime) {
            preTime = _this.preClickTime;
          } else if (_this.preTouchTime) {
            preTime = _this.preTouchTime;
          }

          if (Math.abs(preTime - _this.focusTime) < 20) {
            return;
          }

          _this.focusTime = 0;
        }

        _this.preClickTime = 0;
        _this.preTouchTime = 0; // Only prevent default when all the action is click.
        // https://github.com/ant-design/ant-design/issues/17043
        // https://github.com/ant-design/ant-design/issues/17291

        if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) {
          event.preventDefault();
        }

        var nextVisible = !_this.state.popupVisible;

        if (_this.isClickToHide() && !nextVisible || nextVisible && _this.isClickToShow()) {
          _this.setPopupVisible(!_this.state.popupVisible, event);
        }
      };

      _this.onPopupMouseDown = function () {
        _this.hasPopupMouseDown = true;
        clearTimeout(_this.mouseDownTimeout);
        _this.mouseDownTimeout = window.setTimeout(function () {
          _this.hasPopupMouseDown = false;
        }, 0);

        if (_this.context) {
          var _this$context;

          (_this$context = _this.context).onPopupMouseDown.apply(_this$context, arguments);
        }
      };

      _this.onDocumentClick = function (event) {
        if (_this.props.mask && !_this.props.maskClosable) {
          return;
        }

        var target = event.target;

        var root = _this.getRootDomNode();

        var popupNode = _this.getPopupDomNode();

        if (!Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_10__["default"])(root, target) && !Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_10__["default"])(popupNode, target) && !_this.hasPopupMouseDown) {
          _this.close();
        }
      };

      _this.getRootDomNode = function () {
        var getTriggerDOMNode = _this.props.getTriggerDOMNode;

        if (getTriggerDOMNode) {
          return getTriggerDOMNode(_this.triggerRef.current);
        }

        try {
          var domNode = Object(rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_11__["default"])(_this.triggerRef.current);

          if (domNode) {
            return domNode;
          }
        } catch (err) {// Do nothing
        }

        return react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.findDOMNode(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
      };

      _this.getPopupClassNameFromAlign = function (align) {
        var className = [];
        var _this$props = _this.props,
            popupPlacement = _this$props.popupPlacement,
            builtinPlacements = _this$props.builtinPlacements,
            prefixCls = _this$props.prefixCls,
            alignPoint = _this$props.alignPoint,
            getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;

        if (popupPlacement && builtinPlacements) {
          className.push(Object(_utils_alignUtil__WEBPACK_IMPORTED_MODULE_16__["getAlignPopupClassName"])(builtinPlacements, prefixCls, align, alignPoint));
        }

        if (getPopupClassNameFromAlign) {
          className.push(getPopupClassNameFromAlign(align));
        }

        return className.join(' ');
      };

      _this.getComponent = function () {
        var _this$props2 = _this.props,
            prefixCls = _this$props2.prefixCls,
            destroyPopupOnHide = _this$props2.destroyPopupOnHide,
            popupClassName = _this$props2.popupClassName,
            onPopupAlign = _this$props2.onPopupAlign,
            popupMotion = _this$props2.popupMotion,
            popupAnimation = _this$props2.popupAnimation,
            popupTransitionName = _this$props2.popupTransitionName,
            popupStyle = _this$props2.popupStyle,
            mask = _this$props2.mask,
            maskAnimation = _this$props2.maskAnimation,
            maskTransitionName = _this$props2.maskTransitionName,
            maskMotion = _this$props2.maskMotion,
            zIndex = _this$props2.zIndex,
            popup = _this$props2.popup,
            stretch = _this$props2.stretch,
            alignPoint = _this$props2.alignPoint,
            mobile = _this$props2.mobile;
        var _this$state = _this.state,
            popupVisible = _this$state.popupVisible,
            point = _this$state.point;

        var align = _this.getPopupAlign();

        var mouseProps = {};

        if (_this.isMouseEnterToShow()) {
          mouseProps.onMouseEnter = _this.onPopupMouseEnter;
        }

        if (_this.isMouseLeaveToHide()) {
          mouseProps.onMouseLeave = _this.onPopupMouseLeave;
        }

        mouseProps.onMouseDown = _this.onPopupMouseDown;
        mouseProps.onTouchStart = _this.onPopupMouseDown;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_Popup__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          prefixCls: prefixCls,
          destroyPopupOnHide: destroyPopupOnHide,
          visible: popupVisible,
          point: alignPoint && point,
          className: popupClassName,
          align: align,
          onAlign: onPopupAlign,
          animation: popupAnimation,
          getClassNameFromAlign: _this.getPopupClassNameFromAlign
        }, mouseProps, {
          stretch: stretch,
          getRootDomNode: _this.getRootDomNode,
          style: popupStyle,
          mask: mask,
          zIndex: zIndex,
          transitionName: popupTransitionName,
          maskAnimation: maskAnimation,
          maskTransitionName: maskTransitionName,
          maskMotion: maskMotion,
          ref: _this.popupRef,
          motion: popupMotion,
          mobile: mobile
        }), typeof popup === 'function' ? popup() : popup);
      };

      _this.attachParent = function (popupContainer) {
        rc_util_es_raf__WEBPACK_IMPORTED_MODULE_9__["default"].cancel(_this.attachId);
        var _this$props3 = _this.props,
            getPopupContainer = _this$props3.getPopupContainer,
            getDocument = _this$props3.getDocument;

        var domNode = _this.getRootDomNode();

        var mountNode;

        if (!getPopupContainer) {
          mountNode = getDocument(_this.getRootDomNode()).body;
        } else if (domNode || getPopupContainer.length === 0) {
          // Compatible for legacy getPopupContainer with domNode argument.
          // If no need `domNode` argument, will call directly.
          // https://codesandbox.io/s/eloquent-mclean-ss93m?file=/src/App.js
          mountNode = getPopupContainer(domNode);
        }

        if (mountNode) {
          mountNode.appendChild(popupContainer);
        } else {
          // Retry after frame render in case parent not ready
          _this.attachId = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
            _this.attachParent(popupContainer);
          });
        }
      };

      _this.getContainer = function () {
        var getDocument = _this.props.getDocument;
        var popupContainer = getDocument(_this.getRootDomNode()).createElement('div'); // Make sure default popup container will never cause scrollbar appearing
        // https://github.com/react-component/trigger/issues/41

        popupContainer.style.position = 'absolute';
        popupContainer.style.top = '0';
        popupContainer.style.left = '0';
        popupContainer.style.width = '100%';

        _this.attachParent(popupContainer);

        return popupContainer;
      };

      _this.setPoint = function (point) {
        var alignPoint = _this.props.alignPoint;
        if (!alignPoint || !point) return;

        _this.setState({
          point: {
            pageX: point.pageX,
            pageY: point.pageY
          }
        });
      };

      _this.handlePortalUpdate = function () {
        if (_this.state.prevPopupVisible !== _this.state.popupVisible) {
          _this.props.afterPopupVisibleChange(_this.state.popupVisible);
        }
      };

      var popupVisible;

      if ('popupVisible' in props) {
        popupVisible = !!props.popupVisible;
      } else {
        popupVisible = !!props.defaultPopupVisible;
      }

      _this.state = {
        prevPopupVisible: popupVisible,
        popupVisible: popupVisible
      };
      ALL_HANDLERS.forEach(function (h) {
        _this["fire".concat(h)] = function (e) {
          _this.fireEvents(h, e);
        };
      });
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Trigger, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var props = this.props;
        var state = this.state; // We must listen to `mousedown` or `touchstart`, edge case:
        // https://github.com/ant-design/ant-design/issues/5804
        // https://github.com/react-component/calendar/issues/250
        // https://github.com/react-component/trigger/issues/50

        if (state.popupVisible) {
          var currentDocument;

          if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
            currentDocument = props.getDocument(this.getRootDomNode());
            this.clickOutsideHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_13__["default"])(currentDocument, 'mousedown', this.onDocumentClick);
          } // always hide on mobile


          if (!this.touchOutsideHandler) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.touchOutsideHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_13__["default"])(currentDocument, 'touchstart', this.onDocumentClick);
          } // close popup when trigger type contains 'onContextMenu' and document is scrolling.


          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.contextMenuOutsideHandler1 = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_13__["default"])(currentDocument, 'scroll', this.onContextMenuClose);
          } // close popup when trigger type contains 'onContextMenu' and window is blur.


          if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
            this.contextMenuOutsideHandler2 = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_13__["default"])(window, 'blur', this.onContextMenuClose);
          }

          return;
        }

        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
        rc_util_es_raf__WEBPACK_IMPORTED_MODULE_9__["default"].cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function getPopupDomNode() {
        var _this$popupRef$curren2;

        // for test
        return ((_this$popupRef$curren2 = this.popupRef.current) === null || _this$popupRef$curren2 === void 0 ? void 0 : _this$popupRef$curren2.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function getPopupAlign() {
        var props = this.props;
        var popupPlacement = props.popupPlacement,
            popupAlign = props.popupAlign,
            builtinPlacements = props.builtinPlacements;

        if (popupPlacement && builtinPlacements) {
          return Object(_utils_alignUtil__WEBPACK_IMPORTED_MODULE_16__["getAlignFromPlacement"])(builtinPlacements, popupPlacement, popupAlign);
        }

        return popupAlign;
      }
      /**
       * @param popupVisible    Show or not the popup element
       * @param event           SyntheticEvent, used for `pointAlign`
       */

    }, {
      key: "setPopupVisible",
      value: function setPopupVisible(popupVisible, event) {
        var alignPoint = this.props.alignPoint;
        var prevPopupVisible = this.state.popupVisible;
        this.clearDelayTimer();

        if (prevPopupVisible !== popupVisible) {
          if (!('popupVisible' in this.props)) {
            this.setState({
              popupVisible: popupVisible,
              prevPopupVisible: prevPopupVisible
            });
          }

          this.props.onPopupVisibleChange(popupVisible);
        } // Always record the point position since mouseEnterDelay will delay the show


        if (alignPoint && event && popupVisible) {
          this.setPoint(event);
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function delaySetPopupVisible(visible, delayS, event) {
        var _this2 = this;

        var delay = delayS * 1000;
        this.clearDelayTimer();

        if (delay) {
          var point = event ? {
            pageX: event.pageX,
            pageY: event.pageY
          } : null;
          this.delayTimer = window.setTimeout(function () {
            _this2.setPopupVisible(visible, point);

            _this2.clearDelayTimer();
          }, delay);
        } else {
          this.setPopupVisible(visible, event);
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function clearDelayTimer() {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function clearOutsideHandler() {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove();
          this.clickOutsideHandler = null;
        }

        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove();
          this.contextMenuOutsideHandler1 = null;
        }

        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove();
          this.contextMenuOutsideHandler2 = null;
        }

        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove();
          this.touchOutsideHandler = null;
        }
      }
    }, {
      key: "createTwoChains",
      value: function createTwoChains(event) {
        var childPros = this.props.children.props;
        var props = this.props;

        if (childPros[event] && props[event]) {
          return this["fire".concat(event)];
        }

        return childPros[event] || props[event];
      }
    }, {
      key: "isClickToShow",
      value: function isClickToShow() {
        var _this$props4 = this.props,
            action = _this$props4.action,
            showAction = _this$props4.showAction;
        return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
      }
    }, {
      key: "isContextMenuToShow",
      value: function isContextMenuToShow() {
        var _this$props5 = this.props,
            action = _this$props5.action,
            showAction = _this$props5.showAction;
        return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
      }
    }, {
      key: "isClickToHide",
      value: function isClickToHide() {
        var _this$props6 = this.props,
            action = _this$props6.action,
            hideAction = _this$props6.hideAction;
        return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
      }
    }, {
      key: "isMouseEnterToShow",
      value: function isMouseEnterToShow() {
        var _this$props7 = this.props,
            action = _this$props7.action,
            showAction = _this$props7.showAction;
        return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function isMouseLeaveToHide() {
        var _this$props8 = this.props,
            action = _this$props8.action,
            hideAction = _this$props8.hideAction;
        return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
      }
    }, {
      key: "isFocusToShow",
      value: function isFocusToShow() {
        var _this$props9 = this.props,
            action = _this$props9.action,
            showAction = _this$props9.showAction;
        return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
      }
    }, {
      key: "isBlurToHide",
      value: function isBlurToHide() {
        var _this$props10 = this.props,
            action = _this$props10.action,
            hideAction = _this$props10.hideAction;
        return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
      }
    }, {
      key: "forcePopupAlign",
      value: function forcePopupAlign() {
        if (this.state.popupVisible) {
          var _this$popupRef$curren3;

          (_this$popupRef$curren3 = this.popupRef.current) === null || _this$popupRef$curren3 === void 0 ? void 0 : _this$popupRef$curren3.forceAlign();
        }
      }
    }, {
      key: "fireEvents",
      value: function fireEvents(type, e) {
        var childCallback = this.props.children.props[type];

        if (childCallback) {
          childCallback(e);
        }

        var callback = this.props[type];

        if (callback) {
          callback(e);
        }
      }
    }, {
      key: "close",
      value: function close() {
        this.setPopupVisible(false);
      }
    }, {
      key: "render",
      value: function render() {
        var popupVisible = this.state.popupVisible;
        var _this$props11 = this.props,
            children = _this$props11.children,
            forceRender = _this$props11.forceRender,
            alignPoint = _this$props11.alignPoint,
            className = _this$props11.className,
            autoDestroy = _this$props11.autoDestroy;
        var child = react__WEBPACK_IMPORTED_MODULE_7__["Children"].only(children);
        var newChildProps = {
          key: 'trigger'
        }; // ============================== Visible Handlers ==============================
        // >>> ContextMenu

        if (this.isContextMenuToShow()) {
          newChildProps.onContextMenu = this.onContextMenu;
        } else {
          newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
        } // >>> Click


        if (this.isClickToHide() || this.isClickToShow()) {
          newChildProps.onClick = this.onClick;
          newChildProps.onMouseDown = this.onMouseDown;
          newChildProps.onTouchStart = this.onTouchStart;
        } else {
          newChildProps.onClick = this.createTwoChains('onClick');
          newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
          newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
        } // >>> Hover(enter)


        if (this.isMouseEnterToShow()) {
          newChildProps.onMouseEnter = this.onMouseEnter; // Point align

          if (alignPoint) {
            newChildProps.onMouseMove = this.onMouseMove;
          }
        } else {
          newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
        } // >>> Hover(leave)


        if (this.isMouseLeaveToHide()) {
          newChildProps.onMouseLeave = this.onMouseLeave;
        } else {
          newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
        } // >>> Focus


        if (this.isFocusToShow() || this.isBlurToHide()) {
          newChildProps.onFocus = this.onFocus;
          newChildProps.onBlur = this.onBlur;
        } else {
          newChildProps.onFocus = this.createTwoChains('onFocus');
          newChildProps.onBlur = this.createTwoChains('onBlur');
        } // =================================== Render ===================================


        var childrenClassName = classnames__WEBPACK_IMPORTED_MODULE_15___default()(child && child.props && child.props.className, className);

        if (childrenClassName) {
          newChildProps.className = childrenClassName;
        }

        var cloneProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, newChildProps);

        if (Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_12__["supportRef"])(child)) {
          cloneProps.ref = Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_12__["composeRef"])(this.triggerRef, child.ref);
        }

        var trigger = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["cloneElement"](child, cloneProps);
        var portal; // prevent unmounting after it's rendered

        if (popupVisible || this.popupRef.current || forceRender) {
          portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](PortalComponent, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent());
        }

        if (!popupVisible && autoDestroy) {
          portal = null;
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_context__WEBPACK_IMPORTED_MODULE_18__["default"].Provider, {
          value: {
            onPopupMouseDown: this.onPopupMouseDown
          }
        }, trigger, portal);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref, prevState) {
        var popupVisible = _ref.popupVisible;
        var newState = {};

        if (popupVisible !== undefined && prevState.popupVisible !== popupVisible) {
          newState.popupVisible = popupVisible;
          newState.prevPopupVisible = prevState.popupVisible;
        }

        return newState;
      }
    }]);

    return Trigger;
  }(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

  Trigger.contextType = _context__WEBPACK_IMPORTED_MODULE_18__["default"];
  Trigger.defaultProps = {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop,
    afterPopupVisibleChange: noop,
    onPopupAlign: noop,
    popupClassName: '',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  };
  return Trigger;
}
/* harmony default export */ __webpack_exports__["default"] = (generateTrigger(rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_14__["default"]));

/***/ }),

/***/ "./node_modules/rc-trigger/es/utils/alignUtil.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-trigger/es/utils/alignUtil.js ***!
  \*******************************************************/
/*! exports provided: getAlignFromPlacement, getAlignPopupClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignFromPlacement", function() { return getAlignFromPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignPopupClassName", function() { return getAlignPopupClassName; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }

  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);

  for (var i = 0; i < placements.length; i += 1) {
    var placement = placements[i];

    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }

  return '';
}

/***/ }),

/***/ "./node_modules/rc-trigger/es/utils/legacyUtil.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-trigger/es/utils/legacyUtil.js ***!
  \********************************************************/
/*! exports provided: getMotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMotion", function() { return getMotion; });
function getMotion(_ref) {
  var prefixCls = _ref.prefixCls,
      motion = _ref.motion,
      animation = _ref.animation,
      transitionName = _ref.transitionName;

  if (motion) {
    return motion;
  }

  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }

  if (transitionName) {
    return {
      motionName: transitionName
    };
  }

  return null;
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/addEventListener.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/addEventListener.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addEventListenerWrap; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.unstable_batchedUpdates ? function run(e) {
    react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.unstable_batchedUpdates(cb, e);
  } : cb;

  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }

  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback);
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/canUseDom.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/canUseDom.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return canUseDom; });
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/contains.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/contains.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
function contains(root, n) {
  if (!root) {
    return false;
  }

  return root.contains(n);
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/findDOMNode.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/findDOMNode.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return findDOMNode; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */

function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }

  return react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.findDOMNode(node);
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/isVisible.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/isVisible.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (element) {
  if (!element) {
    return false;
  }

  if (element.offsetParent) {
    return true;
  }

  if (element.getBBox) {
    var box = element.getBBox();

    if (box.width || box.height) {
      return true;
    }
  }

  if (element.getBoundingClientRect) {
    var _box = element.getBoundingClientRect();

    if (_box.width || _box.height) {
      return true;
    }
  }

  return false;
});

/***/ }),

/***/ "./node_modules/rc-util/es/KeyCode.js":
/*!********************************************!*\
  !*** ./node_modules/rc-util/es/KeyCode.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (KeyCode);

/***/ }),

/***/ "./node_modules/rc-util/es/Portal.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-util/es/Portal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dom_canUseDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");



var Portal = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  var didUpdate = props.didUpdate,
      getContainer = props.getContainer,
      children = props.children;
  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Ref return nothing, only for wrapper check exist

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {
    return {};
  }); // Create container in client side with sync to avoid useEffect not get ref

  var initRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);

  if (!initRef.current && Object(_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_2__["default"])()) {
    containerRef.current = getContainer();
    initRef.current = true;
  } // [Legacy] Used by `rc-trigger`


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    didUpdate === null || didUpdate === void 0 ? void 0 : didUpdate(props);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      var _containerRef$current, _containerRef$current2;

      // [Legacy] This should not be handle by Portal but parent PortalWrapper instead.
      // Since some component use `Portal` directly, we have to keep the logic here.
      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : (_containerRef$current2 = _containerRef$current.parentNode) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(children, containerRef.current) : null;
});
/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "./node_modules/rc-util/es/isMobile.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-util/es/isMobile.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false;
  }

  var agent = navigator.userAgent || navigator.vendor || window.opera;

  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4))) {
    return true;
  }

  return false;
});

/***/ }),

/***/ "./node_modules/rc-util/es/raf.js":
/*!****************************************!*\
  !*** ./node_modules/rc-util/es/raf.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wrapperRaf; });
var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};

var caf = function caf(num) {
  return clearTimeout(num);
};

if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };

  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}

function wrapperRaf(callback) {
  return raf(callback);
}
wrapperRaf.cancel = caf;

/***/ }),

/***/ "./node_modules/rc-util/es/ref.js":
/*!****************************************!*\
  !*** ./node_modules/rc-util/es/ref.js ***!
  \****************************************/
/*! exports provided: fillRef, composeRef, supportRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillRef", function() { return fillRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeRef", function() { return composeRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportRef", function() { return supportRef; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_1__);


function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}
/**
 * Merge refs into one ref function to support ref passing.
 */

function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;

  var type = Object(react_is__WEBPACK_IMPORTED_MODULE_1__["isMemo"])(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type; // Function component node

  if (typeof type === 'function' && !((_type$prototype = type.prototype) === null || _type$prototype === void 0 ? void 0 : _type$prototype.render)) {
    return false;
  } // Class component


  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) === null || _nodeOrComponent$prot === void 0 ? void 0 : _nodeOrComponent$prot.render)) {
    return false;
  }

  return true;
}
/* eslint-enable */

/***/ }),

/***/ "./node_modules/rc-util/es/warning.js":
/*!********************************************!*\
  !*** ./node_modules/rc-util/es/warning.js ***!
  \********************************************/
/*! exports provided: warning, note, resetWarned, call, warningOnce, noteOnce, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "note", function() { return note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetWarned", function() { return resetWarned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningOnce", function() { return warningOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noteOnce", function() { return noteOnce; });
/* eslint-disable no-console */
var warned = {};
function warning(valid, message) {
  // Support uglify
  if ( true && !valid && console !== undefined) {
    console.error("Warning: ".concat(message));
  }
}
function note(valid, message) {
  // Support uglify
  if ( true && !valid && console !== undefined) {
    console.warn("Note: ".concat(message));
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
/* harmony default export */ __webpack_exports__["default"] = (warningOnce);
/* eslint-enable */

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Player/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/PlayerContext */ "./src/contexts/PlayerContext.ts");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\bruno\\Desktop\\Git\\React-Trail\\podcastr-next\\src\\components\\Player\\index.tsx",
    _s = $RefreshSig$();







function Player() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_3__["PlayerContext"]),
      episodeList = _useContext.episodeList,
      currentEpisodeIndex = _useContext.currentEpisodeIndex;

  var episode = episodeList[currentEpisodeIndex];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.playerContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/playing.svg",
        alt: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.currentEpisode,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
        width: 592,
        height: 592,
        src: episode.thumbnail,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.emptyPlayer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Selecione um podcast para ouvir"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.empty : '',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.progress,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slider,
          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rc_slider__WEBPACK_IMPORTED_MODULE_5__["default"], {
            trackStyle: {
              backgroundColor: '#04d361'
            },
            railStyle: {
              backgroundColor: '#9f75ff'
            },
            handleStyle: {
              borderColor: '#04d361',
              borderWidth: 4
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 33
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.emptySlider
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttons,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/shuffle.svg",
            alt: "Aleat\xF3rio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play-previous.svg",
            alt: "Anterior"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.playButton,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play.svg",
            alt: "Tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play-next.svg",
            alt: "Pr\xF3ximo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/repeat.svg",
            alt: "Repetir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

_s(Player, "kPo1aZc1M4GjV4qNj0G1nnc/OLY=");

_c = Player;

var _c;

$RefreshReg$(_c, "Player");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2Rpc3Qtd2ViL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2xpZGVyL2Fzc2V0cy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1hbGlnbi9lcy9BbGlnbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLWFsaWduL2VzL2hvb2tzL3VzZUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLWFsaWduL2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtYWxpZ24vZXMvdXRpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW1vdGlvbi9lcy9DU1NNb3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1tb3Rpb24vZXMvQ1NTTW90aW9uTGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW1vdGlvbi9lcy9Eb21XcmFwcGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbW90aW9uL2VzL2hvb2tzL3VzZURvbU1vdGlvbkV2ZW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW1vdGlvbi9lcy9ob29rcy91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbW90aW9uL2VzL2hvb2tzL3VzZU5leHRGcmFtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW1vdGlvbi9lcy9ob29rcy91c2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW1vdGlvbi9lcy9ob29rcy91c2VTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1tb3Rpb24vZXMvaG9va3MvdXNlU3RlcFF1ZXVlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbW90aW9uL2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbW90aW9uL2VzL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW1vdGlvbi9lcy91dGlsL2RpZmYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1tb3Rpb24vZXMvdXRpbC9tb3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcz9lNjZhIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2xpZGVyL2VzL0hhbmRsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9SYW5nZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9TbGlkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvZXMvY29tbW9uL01hcmtzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2xpZGVyL2VzL2NvbW1vbi9TbGlkZXJUb29sdGlwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2xpZGVyL2VzL2NvbW1vbi9TdGVwcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9jb21tb24vVHJhY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvZXMvY29tbW9uL2NyZWF0ZVNsaWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9jcmVhdGVTbGlkZXJXaXRoVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy91dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2VzL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwL01hc2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwL01vYmlsZVBvcHVwSW5uZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwL1BvcHVwSW5uZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9Qb3B1cC91c2VTdHJldGNoU3R5bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwL3VzZVZpc2libGVTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy91dGlscy9hbGlnblV0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL3V0aWxzL2xlZ2FjeVV0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Eb20vY2FuVXNlRG9tLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Eb20vY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0RvbS9maW5kRE9NTm9kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvRG9tL2lzVmlzaWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvS2V5Q29kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvUG9ydGFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9pc01vYmlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvcmFmLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9yZWYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwvZGlzdC9SZXNpemVPYnNlcnZlci5lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VDb250ZXh0IiwiUGxheWVyQ29udGV4dCIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsImVwaXNvZGUiLCJzdHlsZXMiLCJwbGF5ZXJDb250YWluZXIiLCJjdXJyZW50RXBpc29kZSIsInRodW1ibmFpbCIsInRpdGxlIiwibWVtYmVycyIsImVtcHR5UGxheWVyIiwiZW1wdHkiLCJwcm9ncmVzcyIsInNsaWRlciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJlbXB0eVNsaWRlciIsImJ1dHRvbnMiLCJwbGF5QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQTJFO0FBQzVEO0FBQ2YsaUNBQWlDLDJGQUFnQjtBQUNqRCxDOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVFO0FBQ29CO0FBQ0U7QUFDOUU7QUFDZixrQ0FBa0MsbUdBQXdCO0FBQzFEO0FBQ0EsZ0JBQWdCLHlGQUFjO0FBQzlCOztBQUVBO0FBQ0Esc0JBQXNCLHlGQUFjO0FBQ3BDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsV0FBVyxvR0FBeUI7QUFDcEM7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFxRTtBQUN0RDtBQUNmO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpQkFBaUIsd0ZBQWE7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQXVFO0FBQ3hEO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxrQkFBa0IseUZBQWM7QUFDaEMsQzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsK0JBQStCO0FBQzVFOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQXVFOztBQUV2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBLFFBQVEseUZBQWM7QUFDdEIsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQW1HO0FBQ3BGO0FBQ2Y7QUFDQSxlQUFlLHVHQUE0QjtBQUMzQzs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQXdEO0FBQzZCO0FBQ3RFO0FBQ2YsZUFBZSxpRkFBTztBQUN0QjtBQUNBOztBQUVBLFNBQVMsZ0dBQXFCO0FBQzlCLEM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVFO0FBQ1k7QUFDWTtBQUN0QjtBQUMxRDtBQUNmLFNBQVMseUZBQWMsU0FBUywrRkFBb0IsWUFBWSxxR0FBMEIsWUFBWSwwRkFBZTtBQUNySCxDOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBdUU7QUFDeEQ7QUFDZjtBQUNBLGFBQWEseUZBQWM7QUFDM0I7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2RTtBQUNKO0FBQ3NCO0FBQ2xCO0FBQzlEO0FBQ2YsU0FBUyw0RkFBaUIsU0FBUywwRkFBZSxTQUFTLHFHQUEwQixTQUFTLDRGQUFpQjtBQUMvRyxDOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUEyRTtBQUM1RDtBQUNmO0FBQ0Esb0NBQW9DLDJGQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsMkZBQWdCO0FBQ3RHLEM7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSyxLQUE2QjtBQUNsQztBQUNBO0FBQ0EsRUFBRSxVQUFVLElBQTRFO0FBQ3hGO0FBQ0EsRUFBRSxpQ0FBcUIsRUFBRSxtQ0FBRTtBQUMzQjtBQUNBLEdBQUc7QUFBQSxvR0FBQztBQUNKLEVBQUUsTUFBTSxFQUVOO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ25ERDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0MscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCOztBQUV2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFOztBQUU5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQywwREFBMEQ7O0FBRTFEO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLGtCQUFrQjtBQUMvQjs7QUFFQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLHNFQUFzRSxjQUFjO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSwyQkFBMkIsY0FBYztBQUN6QywyQkFBMkIsY0FBYyxtQkFBbUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLG9EQUFvRDtBQUN2Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFDQUFxQywyQkFBMkI7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtB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QUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxh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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsK0VBQXFCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxzRUFBTyxFOzs7Ozs7Ozs7Ozs7QUM5bUJ0QjtBQUFBO0FBQUE7QUFB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LGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0JBQWtCO0FBQ2pDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxtQ0FBbUMsRUFBRTtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0IsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtB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QTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTZESDs7R0FsRWVyQixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjE4YTJlZjM3OWM3YzVkODI0MmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImltcG9ydCBnZXRQcm90b3R5cGVPZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2ZcIjtcbmltcG9ydCBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdFwiO1xuaW1wb3J0IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7XG4gIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICB2YXIgU3VwZXIgPSBnZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgICAgcmVzdWx0O1xuXG4gICAgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHtcbiAgICAgIHZhciBOZXdUYXJnZXQgPSBnZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcbiAgICAgIHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImltcG9ydCBzdXBlclByb3BCYXNlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zdXBlclByb3BCYXNlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGdldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIHZlbmRvclByZWZpeDtcbnZhciBqc0Nzc01hcCA9IHtcbiAgV2Via2l0OiAnLXdlYmtpdC0nLFxuICBNb3o6ICctbW96LScsXG4gIC8vIElFIGRpZCBpdCB3cm9uZyBhZ2FpbiAuLi5cbiAgbXM6ICctbXMtJyxcbiAgTzogJy1vLSdcbn07XG5cbmZ1bmN0aW9uIGdldFZlbmRvclByZWZpeCgpIHtcbiAgaWYgKHZlbmRvclByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZlbmRvclByZWZpeDtcbiAgfVxuXG4gIHZlbmRvclByZWZpeCA9ICcnO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykuc3R5bGU7XG4gIHZhciB0ZXN0UHJvcCA9ICdUcmFuc2Zvcm0nO1xuXG4gIGZvciAodmFyIGtleSBpbiBqc0Nzc01hcCkge1xuICAgIGlmIChrZXkgKyB0ZXN0UHJvcCBpbiBzdHlsZSkge1xuICAgICAgdmVuZG9yUHJlZml4ID0ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZW5kb3JQcmVmaXg7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25OYW1lKCkge1xuICByZXR1cm4gZ2V0VmVuZG9yUHJlZml4KCkgPyBcIlwiLmNvbmNhdChnZXRWZW5kb3JQcmVmaXgoKSwgXCJUcmFuc2l0aW9uUHJvcGVydHlcIikgOiAndHJhbnNpdGlvblByb3BlcnR5Jztcbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtTmFtZSgpIHtcbiAgcmV0dXJuIGdldFZlbmRvclByZWZpeCgpID8gXCJcIi5jb25jYXQoZ2V0VmVuZG9yUHJlZml4KCksIFwiVHJhbnNmb3JtXCIpIDogJ3RyYW5zZm9ybSc7XG59XG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uUHJvcGVydHkobm9kZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWUgPSBnZXRUcmFuc2l0aW9uTmFtZSgpO1xuXG4gIGlmIChuYW1lKSB7XG4gICAgbm9kZS5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuXG4gICAgaWYgKG5hbWUgIT09ICd0cmFuc2l0aW9uUHJvcGVydHknKSB7XG4gICAgICBub2RlLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm0obm9kZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWUgPSBnZXRUcmFuc2Zvcm1OYW1lKCk7XG5cbiAgaWYgKG5hbWUpIHtcbiAgICBub2RlLnN0eWxlW25hbWVdID0gdmFsdWU7XG5cbiAgICBpZiAobmFtZSAhPT0gJ3RyYW5zZm9ybScpIHtcbiAgICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25Qcm9wZXJ0eShub2RlKSB7XG4gIHJldHVybiBub2RlLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSB8fCBub2RlLnN0eWxlW2dldFRyYW5zaXRpb25OYW1lKCldO1xufVxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtWFkobm9kZSkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKTtcbiAgdmFyIHRyYW5zZm9ybSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoZ2V0VHJhbnNmb3JtTmFtZSgpKTtcblxuICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgdmFyIG1hdHJpeCA9IHRyYW5zZm9ybS5yZXBsYWNlKC9bXjAtOVxcLS4sXS9nLCAnJykuc3BsaXQoJywnKTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogcGFyc2VGbG9hdChtYXRyaXhbMTJdIHx8IG1hdHJpeFs0XSwgMCksXG4gICAgICB5OiBwYXJzZUZsb2F0KG1hdHJpeFsxM10gfHwgbWF0cml4WzVdLCAwKVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xufVxudmFyIG1hdHJpeDJkID0gL21hdHJpeFxcKCguKilcXCkvO1xudmFyIG1hdHJpeDNkID0gL21hdHJpeDNkXFwoKC4qKVxcKS87XG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm1YWShub2RlLCB4eSkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKTtcbiAgdmFyIHRyYW5zZm9ybSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoZ2V0VHJhbnNmb3JtTmFtZSgpKTtcblxuICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgdmFyIGFycjtcbiAgICB2YXIgbWF0Y2gyZCA9IHRyYW5zZm9ybS5tYXRjaChtYXRyaXgyZCk7XG5cbiAgICBpZiAobWF0Y2gyZCkge1xuICAgICAgbWF0Y2gyZCA9IG1hdGNoMmRbMV07XG4gICAgICBhcnIgPSBtYXRjaDJkLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGl0ZW0sIDEwKTtcbiAgICAgIH0pO1xuICAgICAgYXJyWzRdID0geHkueDtcbiAgICAgIGFycls1XSA9IHh5Lnk7XG4gICAgICBzZXRUcmFuc2Zvcm0obm9kZSwgXCJtYXRyaXgoXCIuY29uY2F0KGFyci5qb2luKCcsJyksIFwiKVwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtYXRjaDNkID0gdHJhbnNmb3JtLm1hdGNoKG1hdHJpeDNkKVsxXTtcbiAgICAgIGFyciA9IG1hdGNoM2Quc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoaXRlbSwgMTApO1xuICAgICAgfSk7XG4gICAgICBhcnJbMTJdID0geHkueDtcbiAgICAgIGFyclsxM10gPSB4eS55O1xuICAgICAgc2V0VHJhbnNmb3JtKG5vZGUsIFwibWF0cml4M2QoXCIuY29uY2F0KGFyci5qb2luKCcsJyksIFwiKVwiKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNldFRyYW5zZm9ybShub2RlLCBcInRyYW5zbGF0ZVgoXCIuY29uY2F0KHh5LngsIFwicHgpIHRyYW5zbGF0ZVkoXCIpLmNvbmNhdCh4eS55LCBcInB4KSB0cmFuc2xhdGVaKDApXCIpKTtcbiAgfVxufVxuXG52YXIgUkVfTlVNID0gL1tcXC0rXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVtcXC0rXT9cXGQrfCkvLnNvdXJjZTtcbnZhciBnZXRDb21wdXRlZFN0eWxlWDsgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM0ODU2NTQvMzA0MDYwNVxuXG5mdW5jdGlvbiBmb3JjZVJlbGF5b3V0KGVsZW0pIHtcbiAgdmFyIG9yaWdpbmFsU3R5bGUgPSBlbGVtLnN0eWxlLmRpc3BsYXk7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZWxlbS5vZmZzZXRIZWlnaHQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBvcmlnaW5hbFN0eWxlO1xufVxuXG5mdW5jdGlvbiBjc3MoZWwsIG5hbWUsIHYpIHtcbiAgdmFyIHZhbHVlID0gdjtcblxuICBpZiAoX3R5cGVvZihuYW1lKSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBpIGluIG5hbWUpIHtcbiAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGNzcyhlbCwgaSwgbmFtZVtpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gXCJcIi5jb25jYXQodmFsdWUsIFwicHhcIik7XG4gICAgfVxuXG4gICAgZWwuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGVYKGVsLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UG9zaXRpb24oZWxlbSkge1xuICB2YXIgYm94O1xuICB2YXIgeDtcbiAgdmFyIHk7XG4gIHZhciBkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBkb2NFbGVtID0gZG9jICYmIGRvYy5kb2N1bWVudEVsZW1lbnQ7IC8vIOagueaNriBHQlMg5pyA5paw5pWw5o2u77yMQS1HcmFkZSBCcm93c2VycyDpg73lt7LmlK/mjIEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IOaWueazle+8jOS4jeeUqOWGjeiAg+iZkeS8oOe7n+eahOWunueOsOaWueW8j1xuXG4gIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IC8vIOazqO+8mmpRdWVyeSDov5jogIPomZHlh4/ljrsgZG9jRWxlbS5jbGllbnRMZWZ0L2NsaWVudFRvcFxuICAvLyDkvYbmtYvor5Xlj5HnjrDvvIzov5nmoLflj43ogIzkvJrlr7zoh7TlvZMgaHRtbCDlkowgYm9keSDmnInovrnot50v6L655qGG5qC35byP5pe277yM6I635Y+W55qE5YC85LiN5q2j56GuXG4gIC8vIOatpOWklu+8jGllNiDkvJrlv73nlaUgaHRtbCDnmoQgbWFyZ2luIOWAvO+8jOW5uOi/kOWcsOaYr+ayoeacieiwgeS8muWOu+iuvue9riBodG1sIOeahCBtYXJnaW5cblxuICB4ID0gYm94LmxlZnQ7XG4gIHkgPSBib3gudG9wOyAvLyBJbiBJRSwgbW9zdCBvZiB0aGUgdGltZSwgMiBleHRyYSBwaXhlbHMgYXJlIGFkZGVkIHRvIHRoZSB0b3AgYW5kIGxlZnRcbiAgLy8gZHVlIHRvIHRoZSBpbXBsaWNpdCAyLXBpeGVsIGluc2V0IGJvcmRlci4gIEluIElFNi83IHF1aXJrcyBtb2RlIGFuZFxuICAvLyBJRTYgc3RhbmRhcmRzIG1vZGUsIHRoaXMgYm9yZGVyIGNhbiBiZSBvdmVycmlkZGVuIGJ5IHNldHRpbmcgdGhlXG4gIC8vIGRvY3VtZW50IGVsZW1lbnQncyBib3JkZXIgdG8gemVybyAtLSB0aHVzLCB3ZSBjYW5ub3QgcmVseSBvbiB0aGVcbiAgLy8gb2Zmc2V0IGFsd2F5cyBiZWluZyAyIHBpeGVscy5cbiAgLy8gSW4gcXVpcmtzIG1vZGUsIHRoZSBvZmZzZXQgY2FuIGJlIGRldGVybWluZWQgYnkgcXVlcnlpbmcgdGhlIGJvZHknc1xuICAvLyBjbGllbnRMZWZ0L2NsaWVudFRvcCwgYnV0IGluIHN0YW5kYXJkcyBtb2RlLCBpdCBpcyBmb3VuZCBieSBxdWVyeWluZ1xuICAvLyB0aGUgZG9jdW1lbnQgZWxlbWVudCdzIGNsaWVudExlZnQvY2xpZW50VG9wLiAgU2luY2Ugd2UgYWxyZWFkeSBjYWxsZWRcbiAgLy8gZ2V0Q2xpZW50Qm91bmRpbmdSZWN0IHdlIGhhdmUgYWxyZWFkeSBmb3JjZWQgYSByZWZsb3csIHNvIGl0IGlzIG5vdFxuICAvLyB0b28gZXhwZW5zaXZlIGp1c3QgdG8gcXVlcnkgdGhlbSBhbGwuXG4gIC8vIGllIOS4i+W6lOivpeWHj+WOu+eql+WPo+eahOi+ueahhuWQp++8jOavleern+m7mOiupCBhYnNvbHV0ZSDpg73mmK/nm7jlr7nnqpflj6PlrprkvY3nmoRcbiAgLy8g56qX5Y+j6L655qGG5qCH5YeG5piv6K6+IGRvY3VtZW50RWxlbWVudCAscXVpcmtzIOaXtuiuvue9riBib2R5XG4gIC8vIOacgOWlveemgeatouWcqCBib2R5IOWSjCBodG1sIOS4iui+ueahhiDvvIzkvYYgaWUgPCA5IGh0bWwg6buY6K6k5pyJIDJweCDvvIzlh4/ljrtcbiAgLy8g5L2G5piv6Z2eIGllIOS4jeWPr+iDveiuvue9rueql+WPo+i+ueahhu+8jGJvZHkgaHRtbCDkuZ/kuI3mmK/nqpflj6MgLGllIOWPr+S7pemAmui/hyBodG1sLGJvZHkg6K6+572uXG4gIC8vIOagh+WHhiBpZSDkuIsgZG9jRWxlbS5jbGllbnRUb3Ag5bCx5pivIGJvcmRlci10b3BcbiAgLy8gaWU3IGh0bWwg5Y2z56qX5Y+j6L655qGG5pS55Y+Y5LiN5LqG44CC5rC46L+c5Li6IDJcbiAgLy8g5L2G5qCH5YeGIGZpcmVmb3gvY2hyb21lL2llOSDkuIsgZG9jRWxlbS5jbGllbnRUb3Ag5piv56qX5Y+j6L655qGG77yM5Y2z5L2/6K6+5LqGIGJvcmRlci10b3Ag5Lmf5Li6IDBcblxuICB4IC09IGRvY0VsZW0uY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcbiAgeSAtPSBkb2NFbGVtLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHgsXG4gICAgdG9wOiB5XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbCh3LCB0b3ApIHtcbiAgdmFyIHJldCA9IHdbXCJwYWdlXCIuY29uY2F0KHRvcCA/ICdZJyA6ICdYJywgXCJPZmZzZXRcIildO1xuICB2YXIgbWV0aG9kID0gXCJzY3JvbGxcIi5jb25jYXQodG9wID8gJ1RvcCcgOiAnTGVmdCcpO1xuXG4gIGlmICh0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgIHZhciBkID0gdy5kb2N1bWVudDsgLy8gaWU2LDcsOCBzdGFuZGFyZCBtb2RlXG5cbiAgICByZXQgPSBkLmRvY3VtZW50RWxlbWVudFttZXRob2RdO1xuXG4gICAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICAvLyBxdWlya3MgbW9kZVxuICAgICAgcmV0ID0gZC5ib2R5W21ldGhvZF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCh3KSB7XG4gIHJldHVybiBnZXRTY3JvbGwodyk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcCh3KSB7XG4gIHJldHVybiBnZXRTY3JvbGwodywgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICB2YXIgcG9zID0gZ2V0Q2xpZW50UG9zaXRpb24oZWwpO1xuICB2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcbiAgdmFyIHcgPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgcG9zLmxlZnQgKz0gZ2V0U2Nyb2xsTGVmdCh3KTtcbiAgcG9zLnRvcCArPSBnZXRTY3JvbGxUb3Aodyk7XG4gIHJldHVybiBwb3M7XG59XG4vKipcbiAqIEEgY3J1ZGUgd2F5IG9mIGRldGVybWluaW5nIGlmIGFuIG9iamVjdCBpcyBhIHdpbmRvd1xuICogQG1lbWJlciB1dGlsXG4gKi9cblxuXG5mdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgLy8gbXVzdCB1c2UgPT0gZm9yIGllOFxuXG4gIC8qIGVzbGludCBlcWVxZXE6MCAqL1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiA9PSBvYmoud2luZG93O1xufVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudChub2RlKSB7XG4gIGlmIChpc1dpbmRvdyhub2RlKSkge1xuICAgIHJldHVybiBub2RlLmRvY3VtZW50O1xuICB9XG5cbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQ7XG59XG5cbmZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG5hbWUsIGNzKSB7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gY3M7XG4gIHZhciB2YWwgPSAnJztcbiAgdmFyIGQgPSBnZXREb2N1bWVudChlbGVtKTtcbiAgY29tcHV0ZWRTdHlsZSA9IGNvbXB1dGVkU3R5bGUgfHwgZC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpOyAvLyBodHRwczovL2dpdGh1Yi5jb20va2lzc3l0ZWFtL2tpc3N5L2lzc3Vlcy82MVxuXG4gIGlmIChjb21wdXRlZFN0eWxlKSB7XG4gICAgdmFsID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpIHx8IGNvbXB1dGVkU3R5bGVbbmFtZV07XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgX1JFX05VTV9OT19QWCA9IG5ldyBSZWdFeHAoXCJeKFwiLmNvbmNhdChSRV9OVU0sIFwiKSg/IXB4KVthLXolXSskXCIpLCAnaScpO1xuXG52YXIgUkVfUE9TID0gL14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvO1xudmFyIENVUlJFTlRfU1RZTEUgPSAnY3VycmVudFN0eWxlJztcbnZhciBSVU5USU1FX1NUWUxFID0gJ3J1bnRpbWVTdHlsZSc7XG52YXIgTEVGVCA9ICdsZWZ0JztcbnZhciBQWCA9ICdweCc7XG5cbmZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlSUUoZWxlbSwgbmFtZSkge1xuICAvLyBjdXJyZW50U3R5bGUgbWF5YmUgbnVsbFxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzUyMzEuYXNweFxuICB2YXIgcmV0ID0gZWxlbVtDVVJSRU5UX1NUWUxFXSAmJiBlbGVtW0NVUlJFTlRfU1RZTEVdW25hbWVdOyAvLyDlvZMgd2lkdGgvaGVpZ2h0IOiuvue9ruS4uueZvuWIhuavlOaXtu+8jOmAmui/hyBwaXhlbExlZnQg5pa55byP6L2s5o2i55qEIHdpZHRoL2hlaWdodCDlgLxcbiAgLy8g5LiA5byA5aeL5bCx5aSE55CG5LqGISBDVVNUT01fU1RZTEUuaGVpZ2h0LENVU1RPTV9TVFlMRS53aWR0aCAsY3NzSG9vayDop6PlhrNAMjAxMS0wOC0xOVxuICAvLyDlnKggaWUg5LiL5LiN5a+577yM6ZyA6KaB55u05o6l55SoIG9mZnNldCDmlrnlvI9cbiAgLy8gYm9yZGVyV2lkdGgg562J5YC85Lmf5pyJ6Zeu6aKY77yM5L2G6ICD6JmR5YiwIGJvcmRlcldpZHRoIOiuvuS4uueZvuWIhuavlOeahOamgueOh+W+iOWwj++8jOi/memHjOWwseS4jeiAg+iZkeS6hlxuICAvLyBGcm9tIHRoZSBhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXG4gIC8vIGh0dHA6Ly9lcmlrLmVhZS5uZXQvYXJjaGl2ZXMvMjAwNy8wNy8yNy8xOC41NC4xNS8jY29tbWVudC0xMDIyOTFcbiAgLy8gSWYgd2UncmUgbm90IGRlYWxpbmcgd2l0aCBhIHJlZ3VsYXIgcGl4ZWwgbnVtYmVyXG4gIC8vIGJ1dCBhIG51bWJlciB0aGF0IGhhcyBhIHdlaXJkIGVuZGluZywgd2UgbmVlZCB0byBjb252ZXJ0IGl0IHRvIHBpeGVsc1xuICAvLyBleGNsdWRlIGxlZnQgcmlnaHQgZm9yIHJlbGF0aXZpdHlcblxuICBpZiAoX1JFX05VTV9OT19QWC50ZXN0KHJldCkgJiYgIVJFX1BPUy50ZXN0KG5hbWUpKSB7XG4gICAgLy8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuICAgIHZhciBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gICAgdmFyIGxlZnQgPSBzdHlsZVtMRUZUXTtcbiAgICB2YXIgcnNMZWZ0ID0gZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXTsgLy8gcHJldmVudCBmbGFzaGluZyBvZiBjb250ZW50XG5cbiAgICBlbGVtW1JVTlRJTUVfU1RZTEVdW0xFRlRdID0gZWxlbVtDVVJSRU5UX1NUWUxFXVtMRUZUXTsgLy8gUHV0IGluIHRoZSBuZXcgdmFsdWVzIHRvIGdldCBhIGNvbXB1dGVkIHZhbHVlIG91dFxuXG4gICAgc3R5bGVbTEVGVF0gPSBuYW1lID09PSAnZm9udFNpemUnID8gJzFlbScgOiByZXQgfHwgMDtcbiAgICByZXQgPSBzdHlsZS5waXhlbExlZnQgKyBQWDsgLy8gUmV2ZXJ0IHRoZSBjaGFuZ2VkIHZhbHVlc1xuXG4gICAgc3R5bGVbTEVGVF0gPSBsZWZ0O1xuICAgIGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF0gPSByc0xlZnQ7XG4gIH1cblxuICByZXR1cm4gcmV0ID09PSAnJyA/ICdhdXRvJyA6IHJldDtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGdldENvbXB1dGVkU3R5bGVYID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyBfZ2V0Q29tcHV0ZWRTdHlsZSA6IF9nZXRDb21wdXRlZFN0eWxlSUU7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldERpcmVjdGlvbihkaXIsIG9wdGlvbikge1xuICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4gb3B0aW9uLnVzZUNzc1JpZ2h0ID8gJ3JpZ2h0JyA6IGRpcjtcbiAgfVxuXG4gIHJldHVybiBvcHRpb24udXNlQ3NzQm90dG9tID8gJ2JvdHRvbScgOiBkaXI7XG59XG5cbmZ1bmN0aW9uIG9wcG9zaXRlT2Zmc2V0RGlyZWN0aW9uKGRpcikge1xuICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4gJ3JpZ2h0JztcbiAgfSBlbHNlIGlmIChkaXIgPT09ICdyaWdodCcpIHtcbiAgICByZXR1cm4gJ2xlZnQnO1xuICB9IGVsc2UgaWYgKGRpciA9PT0gJ3RvcCcpIHtcbiAgICByZXR1cm4gJ2JvdHRvbSc7XG4gIH0gZWxzZSBpZiAoZGlyID09PSAnYm90dG9tJykge1xuICAgIHJldHVybiAndG9wJztcbiAgfVxufSAvLyDorr7nva4gZWxlbSDnm7jlr7kgZWxlbS5vd25lckRvY3VtZW50IOeahOWdkOagh1xuXG5cbmZ1bmN0aW9uIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pIHtcbiAgLy8gc2V0IHBvc2l0aW9uIGZpcnN0LCBpbi1jYXNlIHRvcC9sZWZ0IGFyZSBzZXQgZXZlbiBvbiBzdGF0aWMgZWxlbVxuICBpZiAoY3NzKGVsZW0sICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICB9XG5cbiAgdmFyIHByZXNldEggPSAtOTk5O1xuICB2YXIgcHJlc2V0ViA9IC05OTk7XG4gIHZhciBob3Jpem9udGFsUHJvcGVydHkgPSBnZXRPZmZzZXREaXJlY3Rpb24oJ2xlZnQnLCBvcHRpb24pO1xuICB2YXIgdmVydGljYWxQcm9wZXJ0eSA9IGdldE9mZnNldERpcmVjdGlvbigndG9wJywgb3B0aW9uKTtcbiAgdmFyIG9wcG9zaXRlSG9yaXpvbnRhbFByb3BlcnR5ID0gb3Bwb3NpdGVPZmZzZXREaXJlY3Rpb24oaG9yaXpvbnRhbFByb3BlcnR5KTtcbiAgdmFyIG9wcG9zaXRlVmVydGljYWxQcm9wZXJ0eSA9IG9wcG9zaXRlT2Zmc2V0RGlyZWN0aW9uKHZlcnRpY2FsUHJvcGVydHkpO1xuXG4gIGlmIChob3Jpem9udGFsUHJvcGVydHkgIT09ICdsZWZ0Jykge1xuICAgIHByZXNldEggPSA5OTk7XG4gIH1cblxuICBpZiAodmVydGljYWxQcm9wZXJ0eSAhPT0gJ3RvcCcpIHtcbiAgICBwcmVzZXRWID0gOTk5O1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsVHJhbnNpdGlvbiA9ICcnO1xuICB2YXIgb3JpZ2luYWxPZmZzZXQgPSBnZXRPZmZzZXQoZWxlbSk7XG5cbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQgfHwgJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgb3JpZ2luYWxUcmFuc2l0aW9uID0gZ2V0VHJhbnNpdGlvblByb3BlcnR5KGVsZW0pIHx8ICcnO1xuICAgIHNldFRyYW5zaXRpb25Qcm9wZXJ0eShlbGVtLCAnbm9uZScpO1xuICB9XG5cbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQpIHtcbiAgICBlbGVtLnN0eWxlW29wcG9zaXRlSG9yaXpvbnRhbFByb3BlcnR5XSA9ICcnO1xuICAgIGVsZW0uc3R5bGVbaG9yaXpvbnRhbFByb3BlcnR5XSA9IFwiXCIuY29uY2F0KHByZXNldEgsIFwicHhcIik7XG4gIH1cblxuICBpZiAoJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgZWxlbS5zdHlsZVtvcHBvc2l0ZVZlcnRpY2FsUHJvcGVydHldID0gJyc7XG4gICAgZWxlbS5zdHlsZVt2ZXJ0aWNhbFByb3BlcnR5XSA9IFwiXCIuY29uY2F0KHByZXNldFYsIFwicHhcIik7XG4gIH0gLy8gZm9yY2UgcmVsYXlvdXRcblxuXG4gIGZvcmNlUmVsYXlvdXQoZWxlbSk7XG4gIHZhciBvbGQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gIHZhciBvcmlnaW5hbFN0eWxlID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIG9mZnNldCkge1xuICAgIGlmIChvZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFyIGRpciA9IGdldE9mZnNldERpcmVjdGlvbihrZXksIG9wdGlvbik7XG4gICAgICB2YXIgcHJlc2V0ID0ga2V5ID09PSAnbGVmdCcgPyBwcmVzZXRIIDogcHJlc2V0VjtcbiAgICAgIHZhciBvZmYgPSBvcmlnaW5hbE9mZnNldFtrZXldIC0gb2xkW2tleV07XG5cbiAgICAgIGlmIChkaXIgPT09IGtleSkge1xuICAgICAgICBvcmlnaW5hbFN0eWxlW2Rpcl0gPSBwcmVzZXQgKyBvZmY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcmlnaW5hbFN0eWxlW2Rpcl0gPSBwcmVzZXQgLSBvZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY3NzKGVsZW0sIG9yaWdpbmFsU3R5bGUpOyAvLyBmb3JjZSByZWxheW91dFxuXG4gIGZvcmNlUmVsYXlvdXQoZWxlbSk7XG5cbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQgfHwgJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgc2V0VHJhbnNpdGlvblByb3BlcnR5KGVsZW0sIG9yaWdpbmFsVHJhbnNpdGlvbik7XG4gIH1cblxuICB2YXIgcmV0ID0ge307XG5cbiAgZm9yICh2YXIgX2tleSBpbiBvZmZzZXQpIHtcbiAgICBpZiAob2Zmc2V0Lmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICB2YXIgX2RpciA9IGdldE9mZnNldERpcmVjdGlvbihfa2V5LCBvcHRpb24pO1xuXG4gICAgICB2YXIgX29mZiA9IG9mZnNldFtfa2V5XSAtIG9yaWdpbmFsT2Zmc2V0W19rZXldO1xuXG4gICAgICBpZiAoX2tleSA9PT0gX2Rpcikge1xuICAgICAgICByZXRbX2Rpcl0gPSBvcmlnaW5hbFN0eWxlW19kaXJdICsgX29mZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldFtfZGlyXSA9IG9yaWdpbmFsU3R5bGVbX2Rpcl0gLSBfb2ZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNzcyhlbGVtLCByZXQpO1xufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm0kMShlbGVtLCBvZmZzZXQpIHtcbiAgdmFyIG9yaWdpbmFsT2Zmc2V0ID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICB2YXIgb3JpZ2luYWxYWSA9IGdldFRyYW5zZm9ybVhZKGVsZW0pO1xuICB2YXIgcmVzdWx0WFkgPSB7XG4gICAgeDogb3JpZ2luYWxYWS54LFxuICAgIHk6IG9yaWdpbmFsWFkueVxuICB9O1xuXG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0KSB7XG4gICAgcmVzdWx0WFkueCA9IG9yaWdpbmFsWFkueCArIG9mZnNldC5sZWZ0IC0gb3JpZ2luYWxPZmZzZXQubGVmdDtcbiAgfVxuXG4gIGlmICgndG9wJyBpbiBvZmZzZXQpIHtcbiAgICByZXN1bHRYWS55ID0gb3JpZ2luYWxYWS55ICsgb2Zmc2V0LnRvcCAtIG9yaWdpbmFsT2Zmc2V0LnRvcDtcbiAgfVxuXG4gIHNldFRyYW5zZm9ybVhZKGVsZW0sIHJlc3VsdFhZKTtcbn1cblxuZnVuY3Rpb24gc2V0T2Zmc2V0KGVsZW0sIG9mZnNldCwgb3B0aW9uKSB7XG4gIGlmIChvcHRpb24uaWdub3JlU2hha2UpIHtcbiAgICB2YXIgb3JpT2Zmc2V0ID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICAgIHZhciBvTGVmdCA9IG9yaU9mZnNldC5sZWZ0LnRvRml4ZWQoMCk7XG4gICAgdmFyIG9Ub3AgPSBvcmlPZmZzZXQudG9wLnRvRml4ZWQoMCk7XG4gICAgdmFyIHRMZWZ0ID0gb2Zmc2V0LmxlZnQudG9GaXhlZCgwKTtcbiAgICB2YXIgdFRvcCA9IG9mZnNldC50b3AudG9GaXhlZCgwKTtcblxuICAgIGlmIChvTGVmdCA9PT0gdExlZnQgJiYgb1RvcCA9PT0gdFRvcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChvcHRpb24udXNlQ3NzUmlnaHQgfHwgb3B0aW9uLnVzZUNzc0JvdHRvbSkge1xuICAgIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pO1xuICB9IGVsc2UgaWYgKG9wdGlvbi51c2VDc3NUcmFuc2Zvcm0gJiYgZ2V0VHJhbnNmb3JtTmFtZSgpIGluIGRvY3VtZW50LmJvZHkuc3R5bGUpIHtcbiAgICBzZXRUcmFuc2Zvcm0kMShlbGVtLCBvZmZzZXQpO1xuICB9IGVsc2Uge1xuICAgIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVhY2goYXJyLCBmbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGZuKGFycltpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNCb3JkZXJCb3hGbihlbGVtKSB7XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlWChlbGVtLCAnYm94U2l6aW5nJykgPT09ICdib3JkZXItYm94Jztcbn1cblxudmFyIEJPWF9NT0RFTFMgPSBbJ21hcmdpbicsICdib3JkZXInLCAncGFkZGluZyddO1xudmFyIENPTlRFTlRfSU5ERVggPSAtMTtcbnZhciBQQURESU5HX0lOREVYID0gMjtcbnZhciBCT1JERVJfSU5ERVggPSAxO1xudmFyIE1BUkdJTl9JTkRFWCA9IDA7XG5cbmZ1bmN0aW9uIHN3YXAoZWxlbSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIG9sZCA9IHt9O1xuICB2YXIgc3R5bGUgPSBlbGVtLnN0eWxlO1xuICB2YXIgbmFtZTsgLy8gUmVtZW1iZXIgdGhlIG9sZCB2YWx1ZXMsIGFuZCBpbnNlcnQgdGhlIG5ldyBvbmVzXG5cbiAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgb2xkW25hbWVdID0gc3R5bGVbbmFtZV07XG4gICAgICBzdHlsZVtuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2suY2FsbChlbGVtKTsgLy8gUmV2ZXJ0IHRoZSBvbGQgdmFsdWVzXG5cbiAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgc3R5bGVbbmFtZV0gPSBvbGRbbmFtZV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBCTVdpZHRoKGVsZW0sIHByb3BzLCB3aGljaCkge1xuICB2YXIgdmFsdWUgPSAwO1xuICB2YXIgcHJvcDtcbiAgdmFyIGo7XG4gIHZhciBpO1xuXG4gIGZvciAoaiA9IDA7IGogPCBwcm9wcy5sZW5ndGg7IGorKykge1xuICAgIHByb3AgPSBwcm9wc1tqXTtcblxuICAgIGlmIChwcm9wKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgd2hpY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNzc1Byb3AgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKHByb3AgPT09ICdib3JkZXInKSB7XG4gICAgICAgICAgY3NzUHJvcCA9IFwiXCIuY29uY2F0KHByb3ApLmNvbmNhdCh3aGljaFtpXSwgXCJXaWR0aFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjc3NQcm9wID0gcHJvcCArIHdoaWNoW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgKz0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlWChlbGVtLCBjc3NQcm9wKSkgfHwgMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBkb21VdGlscyA9IHtcbiAgZ2V0UGFyZW50OiBmdW5jdGlvbiBnZXRQYXJlbnQoZWxlbWVudCkge1xuICAgIHZhciBwYXJlbnQgPSBlbGVtZW50O1xuXG4gICAgZG8ge1xuICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEgJiYgcGFyZW50Lmhvc3QpIHtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50Lmhvc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlICE9PSAxICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gOSk7XG5cbiAgICByZXR1cm4gcGFyZW50O1xuICB9XG59O1xuZWFjaChbJ1dpZHRoJywgJ0hlaWdodCddLCBmdW5jdGlvbiAobmFtZSkge1xuICBkb21VdGlsc1tcImRvY1wiLmNvbmNhdChuYW1lKV0gPSBmdW5jdGlvbiAocmVmV2luKSB7XG4gICAgdmFyIGQgPSByZWZXaW4uZG9jdW1lbnQ7XG4gICAgcmV0dXJuIE1hdGgubWF4KCAvLyBmaXJlZm94IGNocm9tZSBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0PCBib2R5LnNjcm9sbEhlaWdodFxuICAgIC8vIGllIHN0YW5kYXJkIG1vZGUgOiBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0PiBib2R5LnNjcm9sbEhlaWdodFxuICAgIGQuZG9jdW1lbnRFbGVtZW50W1wic2Nyb2xsXCIuY29uY2F0KG5hbWUpXSwgLy8gcXVpcmtzIDogZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCDmnIDlpKfnrYnkuo7lj6/op4bnqpflj6PlpJrkuIDngrnvvJ9cbiAgICBkLmJvZHlbXCJzY3JvbGxcIi5jb25jYXQobmFtZSldLCBkb21VdGlsc1tcInZpZXdwb3J0XCIuY29uY2F0KG5hbWUpXShkKSk7XG4gIH07XG5cbiAgZG9tVXRpbHNbXCJ2aWV3cG9ydFwiLmNvbmNhdChuYW1lKV0gPSBmdW5jdGlvbiAod2luKSB7XG4gICAgLy8gcGMgYnJvd3NlciBpbmNsdWRlcyBzY3JvbGxiYXIgaW4gd2luZG93LmlubmVyV2lkdGhcbiAgICB2YXIgcHJvcCA9IFwiY2xpZW50XCIuY29uY2F0KG5hbWUpO1xuICAgIHZhciBkb2MgPSB3aW4uZG9jdW1lbnQ7XG4gICAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50UHJvcCA9IGRvY3VtZW50RWxlbWVudFtwcm9wXTsgLy8g5qCH5YeG5qih5byP5Y+WIGRvY3VtZW50RWxlbWVudFxuICAgIC8vIGJhY2tjb21wYXQg5Y+WIGJvZHlcblxuICAgIHJldHVybiBkb2MuY29tcGF0TW9kZSA9PT0gJ0NTUzFDb21wYXQnICYmIGRvY3VtZW50RWxlbWVudFByb3AgfHwgYm9keSAmJiBib2R5W3Byb3BdIHx8IGRvY3VtZW50RWxlbWVudFByb3A7XG4gIH07XG59KTtcbi8qXG4g5b6X5Yiw5YWD57Sg55qE5aSn5bCP5L+h5oGvXG4gQHBhcmFtIGVsZW1cbiBAcGFyYW0gbmFtZVxuIEBwYXJhbSB7U3RyaW5nfSBbZXh0cmFdICAncGFkZGluZycgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmdcbiAnYm9yZGVyJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZyArIGJvcmRlclxuICdtYXJnaW4nIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nICsgYm9yZGVyICsgbWFyZ2luXG4gKi9cblxuZnVuY3Rpb24gZ2V0V0goZWxlbSwgbmFtZSwgZXgpIHtcbiAgdmFyIGV4dHJhID0gZXg7XG5cbiAgaWYgKGlzV2luZG93KGVsZW0pKSB7XG4gICAgcmV0dXJuIG5hbWUgPT09ICd3aWR0aCcgPyBkb21VdGlscy52aWV3cG9ydFdpZHRoKGVsZW0pIDogZG9tVXRpbHMudmlld3BvcnRIZWlnaHQoZWxlbSk7XG4gIH0gZWxzZSBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBuYW1lID09PSAnd2lkdGgnID8gZG9tVXRpbHMuZG9jV2lkdGgoZWxlbSkgOiBkb21VdGlscy5kb2NIZWlnaHQoZWxlbSk7XG4gIH1cblxuICB2YXIgd2hpY2ggPSBuYW1lID09PSAnd2lkdGgnID8gWydMZWZ0JywgJ1JpZ2h0J10gOiBbJ1RvcCcsICdCb3R0b20nXTtcbiAgdmFyIGJvcmRlckJveFZhbHVlID0gbmFtZSA9PT0gJ3dpZHRoJyA/IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggOiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtKTtcbiAgdmFyIGlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3hGbihlbGVtKTtcbiAgdmFyIGNzc0JveFZhbHVlID0gMDtcblxuICBpZiAoYm9yZGVyQm94VmFsdWUgPT09IG51bGwgfHwgYm9yZGVyQm94VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBib3JkZXJCb3hWYWx1ZSA8PSAwKSB7XG4gICAgYm9yZGVyQm94VmFsdWUgPSB1bmRlZmluZWQ7IC8vIEZhbGwgYmFjayB0byBjb21wdXRlZCB0aGVuIHVuIGNvbXB1dGVkIGNzcyBpZiBuZWNlc3NhcnlcblxuICAgIGNzc0JveFZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgbmFtZSk7XG5cbiAgICBpZiAoY3NzQm94VmFsdWUgPT09IG51bGwgfHwgY3NzQm94VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBOdW1iZXIoY3NzQm94VmFsdWUpIDwgMCkge1xuICAgICAgY3NzQm94VmFsdWUgPSBlbGVtLnN0eWxlW25hbWVdIHx8IDA7XG4gICAgfSAvLyBOb3JtYWxpemUgJycsIGF1dG8sIGFuZCBwcmVwYXJlIGZvciBleHRyYVxuXG5cbiAgICBjc3NCb3hWYWx1ZSA9IHBhcnNlRmxvYXQoY3NzQm94VmFsdWUpIHx8IDA7XG4gIH1cblxuICBpZiAoZXh0cmEgPT09IHVuZGVmaW5lZCkge1xuICAgIGV4dHJhID0gaXNCb3JkZXJCb3ggPyBCT1JERVJfSU5ERVggOiBDT05URU5UX0lOREVYO1xuICB9XG5cbiAgdmFyIGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCA9IGJvcmRlckJveFZhbHVlICE9PSB1bmRlZmluZWQgfHwgaXNCb3JkZXJCb3g7XG4gIHZhciB2YWwgPSBib3JkZXJCb3hWYWx1ZSB8fCBjc3NCb3hWYWx1ZTtcblxuICBpZiAoZXh0cmEgPT09IENPTlRFTlRfSU5ERVgpIHtcbiAgICBpZiAoYm9yZGVyQm94VmFsdWVPcklzQm9yZGVyQm94KSB7XG4gICAgICByZXR1cm4gdmFsIC0gZ2V0UEJNV2lkdGgoZWxlbSwgWydib3JkZXInLCAncGFkZGluZyddLCB3aGljaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzc0JveFZhbHVlO1xuICB9IGVsc2UgaWYgKGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCkge1xuICAgIGlmIChleHRyYSA9PT0gQk9SREVSX0lOREVYKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiB2YWwgKyAoZXh0cmEgPT09IFBBRERJTkdfSU5ERVggPyAtZ2V0UEJNV2lkdGgoZWxlbSwgWydib3JkZXInXSwgd2hpY2gpIDogZ2V0UEJNV2lkdGgoZWxlbSwgWydtYXJnaW4nXSwgd2hpY2gpKTtcbiAgfVxuXG4gIHJldHVybiBjc3NCb3hWYWx1ZSArIGdldFBCTVdpZHRoKGVsZW0sIEJPWF9NT0RFTFMuc2xpY2UoZXh0cmEpLCB3aGljaCk7XG59XG5cbnZhciBjc3NTaG93ID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gIGRpc3BsYXk6ICdibG9jaydcbn07IC8vIGZpeCAjMTE5IDogaHR0cHM6Ly9naXRodWIuY29tL2tpc3N5dGVhbS9raXNzeS9pc3N1ZXMvMTE5XG5cbmZ1bmN0aW9uIGdldFdISWdub3JlRGlzcGxheSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgdmFyIHZhbDtcbiAgdmFyIGVsZW0gPSBhcmdzWzBdOyAvLyBpbiBjYXNlIGVsZW0gaXMgd2luZG93XG4gIC8vIGVsZW0ub2Zmc2V0V2lkdGggPT09IHVuZGVmaW5lZFxuXG4gIGlmIChlbGVtLm9mZnNldFdpZHRoICE9PSAwKSB7XG4gICAgdmFsID0gZ2V0V0guYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICBzd2FwKGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhbCA9IGdldFdILmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5lYWNoKFsnd2lkdGgnLCAnaGVpZ2h0J10sIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBmaXJzdCA9IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuXG4gIGRvbVV0aWxzW1wib3V0ZXJcIi5jb25jYXQoZmlyc3QpXSA9IGZ1bmN0aW9uIChlbCwgaW5jbHVkZU1hcmdpbikge1xuICAgIHJldHVybiBlbCAmJiBnZXRXSElnbm9yZURpc3BsYXkoZWwsIG5hbWUsIGluY2x1ZGVNYXJnaW4gPyBNQVJHSU5fSU5ERVggOiBCT1JERVJfSU5ERVgpO1xuICB9O1xuXG4gIHZhciB3aGljaCA9IG5hbWUgPT09ICd3aWR0aCcgPyBbJ0xlZnQnLCAnUmlnaHQnXSA6IFsnVG9wJywgJ0JvdHRvbSddO1xuXG4gIGRvbVV0aWxzW25hbWVdID0gZnVuY3Rpb24gKGVsZW0sIHYpIHtcbiAgICB2YXIgdmFsID0gdjtcblxuICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtKTtcbiAgICAgICAgdmFyIGlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3hGbihlbGVtKTtcblxuICAgICAgICBpZiAoaXNCb3JkZXJCb3gpIHtcbiAgICAgICAgICB2YWwgKz0gZ2V0UEJNV2lkdGgoZWxlbSwgWydwYWRkaW5nJywgJ2JvcmRlciddLCB3aGljaCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3NzKGVsZW0sIG5hbWUsIHZhbCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW0gJiYgZ2V0V0hJZ25vcmVEaXNwbGF5KGVsZW0sIG5hbWUsIENPTlRFTlRfSU5ERVgpO1xuICB9O1xufSk7XG5cbmZ1bmN0aW9uIG1peCh0bywgZnJvbSkge1xuICBmb3IgKHZhciBpIGluIGZyb20pIHtcbiAgICBpZiAoZnJvbS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgdG9baV0gPSBmcm9tW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxudmFyIHV0aWxzID0ge1xuICBnZXRXaW5kb3c6IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gICAgaWYgKG5vZGUgJiYgbm9kZS5kb2N1bWVudCAmJiBub2RlLnNldFRpbWVvdXQpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHZhciBkb2MgPSBub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZTtcbiAgICByZXR1cm4gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIH0sXG4gIGdldERvY3VtZW50OiBnZXREb2N1bWVudCxcbiAgb2Zmc2V0OiBmdW5jdGlvbiBvZmZzZXQoZWwsIHZhbHVlLCBvcHRpb24pIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc2V0T2Zmc2V0KGVsLCB2YWx1ZSwgb3B0aW9uIHx8IHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldE9mZnNldChlbCk7XG4gICAgfVxuICB9LFxuICBpc1dpbmRvdzogaXNXaW5kb3csXG4gIGVhY2g6IGVhY2gsXG4gIGNzczogY3NzLFxuICBjbG9uZTogZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgdmFyIGk7XG4gICAgdmFyIHJldCA9IHt9O1xuXG4gICAgZm9yIChpIGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICByZXRbaV0gPSBvYmpbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG92ZXJmbG93ID0gb2JqLm92ZXJmbG93O1xuXG4gICAgaWYgKG92ZXJmbG93KSB7XG4gICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICByZXQub3ZlcmZsb3dbaV0gPSBvYmoub3ZlcmZsb3dbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuICBtaXg6IG1peCxcbiAgZ2V0V2luZG93U2Nyb2xsTGVmdDogZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsTGVmdCh3KSB7XG4gICAgcmV0dXJuIGdldFNjcm9sbExlZnQodyk7XG4gIH0sXG4gIGdldFdpbmRvd1Njcm9sbFRvcDogZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsVG9wKHcpIHtcbiAgICByZXR1cm4gZ2V0U2Nyb2xsVG9wKHcpO1xuICB9LFxuICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHV0aWxzLm1peChyZXQsIGkgPCAwIHx8IGFyZ3VtZW50cy5sZW5ndGggPD0gaSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfSxcbiAgdmlld3BvcnRXaWR0aDogMCxcbiAgdmlld3BvcnRIZWlnaHQ6IDBcbn07XG5taXgodXRpbHMsIGRvbVV0aWxzKTtcblxuLyoqXG4gKiDlvpfliLDkvJrlr7zoh7TlhYPntKDmmL7npLrkuI3lhajnmoTnpZblhYjlhYPntKBcbiAqL1xuXG52YXIgZ2V0UGFyZW50ID0gdXRpbHMuZ2V0UGFyZW50O1xuXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAodXRpbHMuaXNXaW5kb3coZWxlbWVudCkgfHwgZWxlbWVudC5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IC8vIGllIOi/meS4quS5n+S4jeaYr+WujOWFqOWPr+ihjFxuXG4gIC8qXG4gICA8ZGl2IHN0eWxlPVwid2lkdGg6IDUwcHg7aGVpZ2h0OiAxMDBweDtvdmVyZmxvdzogaGlkZGVuXCI+XG4gICA8ZGl2IHN0eWxlPVwid2lkdGg6IDUwcHg7aGVpZ2h0OiAxMDBweDtwb3NpdGlvbjogcmVsYXRpdmU7XCIgaWQ9XCJkNlwiPlxuICAg5YWD57SgIDYg6auYIDEwMHB4IOWuvSA1MHB4PGJyLz5cbiAgIDwvZGl2PlxuICAgPC9kaXY+XG4gICAqL1xuICAvLyBlbGVtZW50Lm9mZnNldFBhcmVudCBkb2VzIHRoZSByaWdodCB0aGluZyBpbiBpZTcgYW5kIGJlbG93LiBSZXR1cm4gcGFyZW50IHdpdGggbGF5b3V0IVxuICAvLyAgSW4gb3RoZXIgYnJvd3NlcnMgaXQgb25seSBpbmNsdWRlcyBlbGVtZW50cyB3aXRoIHBvc2l0aW9uIGFic29sdXRlLCByZWxhdGl2ZSBvclxuICAvLyBmaXhlZCwgbm90IGVsZW1lbnRzIHdpdGggb3ZlcmZsb3cgc2V0IHRvIGF1dG8gb3Igc2Nyb2xsLlxuICAvLyAgICAgICAgaWYgKFVBLmllICYmIGllTW9kZSA8IDgpIHtcbiAgLy8gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gIC8vICAgICAgICB9XG4gIC8vIOe7n+S4gOeahCBvZmZzZXRQYXJlbnQg5pa55rOVXG5cblxuICB2YXIgZG9jID0gdXRpbHMuZ2V0RG9jdW1lbnQoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBwYXJlbnQ7XG4gIHZhciBwb3NpdGlvblN0eWxlID0gdXRpbHMuY3NzKGVsZW1lbnQsICdwb3NpdGlvbicpO1xuICB2YXIgc2tpcFN0YXRpYyA9IHBvc2l0aW9uU3R5bGUgPT09ICdmaXhlZCcgfHwgcG9zaXRpb25TdHlsZSA9PT0gJ2Fic29sdXRlJztcblxuICBpZiAoIXNraXBTdGF0aWMpIHtcbiAgICByZXR1cm4gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaHRtbCcgPyBudWxsIDogZ2V0UGFyZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgZm9yIChwYXJlbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7IHBhcmVudCAmJiBwYXJlbnQgIT09IGJvZHkgJiYgcGFyZW50Lm5vZGVUeXBlICE9PSA5OyBwYXJlbnQgPSBnZXRQYXJlbnQocGFyZW50KSkge1xuICAgIHBvc2l0aW9uU3R5bGUgPSB1dGlscy5jc3MocGFyZW50LCAncG9zaXRpb24nKTtcblxuICAgIGlmIChwb3NpdGlvblN0eWxlICE9PSAnc3RhdGljJykge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGdldFBhcmVudCQxID0gdXRpbHMuZ2V0UGFyZW50O1xuZnVuY3Rpb24gaXNBbmNlc3RvckZpeGVkKGVsZW1lbnQpIHtcbiAgaWYgKHV0aWxzLmlzV2luZG93KGVsZW1lbnQpIHx8IGVsZW1lbnQubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZG9jID0gdXRpbHMuZ2V0RG9jdW1lbnQoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBwYXJlbnQgPSBudWxsO1xuXG4gIGZvciAocGFyZW50ID0gZ2V0UGFyZW50JDEoZWxlbWVudCk7IHBhcmVudCAmJiBwYXJlbnQgIT09IGJvZHk7IHBhcmVudCA9IGdldFBhcmVudCQxKHBhcmVudCkpIHtcbiAgICB2YXIgcG9zaXRpb25TdHlsZSA9IHV0aWxzLmNzcyhwYXJlbnQsICdwb3NpdGlvbicpO1xuXG4gICAgaWYgKHBvc2l0aW9uU3R5bGUgPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiDojrflvpflhYPntKDnmoTmmL7npLrpg6jliIbnmoTljLrln59cbiAqL1xuXG5mdW5jdGlvbiBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQoZWxlbWVudCwgYWx3YXlzQnlWaWV3cG9ydCkge1xuICB2YXIgdmlzaWJsZVJlY3QgPSB7XG4gICAgbGVmdDogMCxcbiAgICByaWdodDogSW5maW5pdHksXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogSW5maW5pdHlcbiAgfTtcbiAgdmFyIGVsID0gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuICB2YXIgZG9jID0gdXRpbHMuZ2V0RG9jdW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW4gPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7IC8vIERldGVybWluZSB0aGUgc2l6ZSBvZiB0aGUgdmlzaWJsZSByZWN0IGJ5IGNsaW1iaW5nIHRoZSBkb20gYWNjb3VudGluZyBmb3JcbiAgLy8gYWxsIHNjcm9sbGFibGUgY29udGFpbmVycy5cblxuICB3aGlsZSAoZWwpIHtcbiAgICAvLyBjbGllbnRXaWR0aCBpcyB6ZXJvIGZvciBpbmxpbmUgYmxvY2sgZWxlbWVudHMgaW4gaWUuXG4gICAgaWYgKChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01TSUUnKSA9PT0gLTEgfHwgZWwuY2xpZW50V2lkdGggIT09IDApICYmIC8vIGJvZHkgbWF5IGhhdmUgb3ZlcmZsb3cgc2V0IG9uIGl0LCB5ZXQgd2Ugc3RpbGwgZ2V0IHRoZSBlbnRpcmVcbiAgICAvLyB2aWV3cG9ydC4gSW4gc29tZSBicm93c2VycywgZWwub2Zmc2V0UGFyZW50IG1heSBiZVxuICAgIC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgc28gY2hlY2sgZm9yIHRoYXQgdG9vLlxuICAgIGVsICE9PSBib2R5ICYmIGVsICE9PSBkb2N1bWVudEVsZW1lbnQgJiYgdXRpbHMuY3NzKGVsLCAnb3ZlcmZsb3cnKSAhPT0gJ3Zpc2libGUnKSB7XG4gICAgICB2YXIgcG9zID0gdXRpbHMub2Zmc2V0KGVsKTsgLy8gYWRkIGJvcmRlclxuXG4gICAgICBwb3MubGVmdCArPSBlbC5jbGllbnRMZWZ0O1xuICAgICAgcG9zLnRvcCArPSBlbC5jbGllbnRUb3A7XG4gICAgICB2aXNpYmxlUmVjdC50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC50b3AsIHBvcy50b3ApO1xuICAgICAgdmlzaWJsZVJlY3QucmlnaHQgPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5yaWdodCwgLy8gY29uc2lkZXIgYXJlYSB3aXRob3V0IHNjcm9sbEJhclxuICAgICAgcG9zLmxlZnQgKyBlbC5jbGllbnRXaWR0aCk7XG4gICAgICB2aXNpYmxlUmVjdC5ib3R0b20gPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5ib3R0b20sIHBvcy50b3AgKyBlbC5jbGllbnRIZWlnaHQpO1xuICAgICAgdmlzaWJsZVJlY3QubGVmdCA9IE1hdGgubWF4KHZpc2libGVSZWN0LmxlZnQsIHBvcy5sZWZ0KTtcbiAgICB9IGVsc2UgaWYgKGVsID09PSBib2R5IHx8IGVsID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGVsID0gZ2V0T2Zmc2V0UGFyZW50KGVsKTtcbiAgfSAvLyBTZXQgZWxlbWVudCBwb3NpdGlvbiB0byBmaXhlZFxuICAvLyBtYWtlIHN1cmUgYWJzb2x1dGUgZWxlbWVudCBpdHNlbGYgZG9uJ3QgYWZmZWN0IGl0J3MgdmlzaWJsZSBhcmVhXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzc2MDFcblxuXG4gIHZhciBvcmlnaW5hbFBvc2l0aW9uID0gbnVsbDtcblxuICBpZiAoIXV0aWxzLmlzV2luZG93KGVsZW1lbnQpICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDkpIHtcbiAgICBvcmlnaW5hbFBvc2l0aW9uID0gZWxlbWVudC5zdHlsZS5wb3NpdGlvbjtcbiAgICB2YXIgcG9zaXRpb24gPSB1dGlscy5jc3MoZWxlbWVudCwgJ3Bvc2l0aW9uJyk7XG5cbiAgICBpZiAocG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzY3JvbGxYID0gdXRpbHMuZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pO1xuICB2YXIgc2Nyb2xsWSA9IHV0aWxzLmdldFdpbmRvd1Njcm9sbFRvcCh3aW4pO1xuICB2YXIgdmlld3BvcnRXaWR0aCA9IHV0aWxzLnZpZXdwb3J0V2lkdGgod2luKTtcbiAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gdXRpbHMudmlld3BvcnRIZWlnaHQod2luKTtcbiAgdmFyIGRvY3VtZW50V2lkdGggPSBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGg7XG4gIHZhciBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7IC8vIHNjcm9sbFhYWCBvbiBodG1sIGlzIHN5bmMgd2l0aCBib2R5IHdoaWNoIG1lYW5zIG92ZXJmbG93OiBoaWRkZW4gb24gYm9keSBnZXRzIHdyb25nIHNjcm9sbFhYWC5cbiAgLy8gV2Ugc2hvdWxkIGN1dCB0aGlzIG91cnNlbGYuXG5cbiAgdmFyIGJvZHlTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJvZHkpO1xuXG4gIGlmIChib2R5U3R5bGUub3ZlcmZsb3dYID09PSAnaGlkZGVuJykge1xuICAgIGRvY3VtZW50V2lkdGggPSB3aW4uaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGlmIChib2R5U3R5bGUub3ZlcmZsb3dZID09PSAnaGlkZGVuJykge1xuICAgIGRvY3VtZW50SGVpZ2h0ID0gd2luLmlubmVySGVpZ2h0O1xuICB9IC8vIFJlc2V0IGVsZW1lbnQgcG9zaXRpb24gYWZ0ZXIgY2FsY3VsYXRlIHRoZSB2aXNpYmxlIGFyZWFcblxuXG4gIGlmIChlbGVtZW50LnN0eWxlKSB7XG4gICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IG9yaWdpbmFsUG9zaXRpb247XG4gIH1cblxuICBpZiAoYWx3YXlzQnlWaWV3cG9ydCB8fCBpc0FuY2VzdG9yRml4ZWQoZWxlbWVudCkpIHtcbiAgICAvLyBDbGlwIGJ5IHZpZXdwb3J0J3Mgc2l6ZS5cbiAgICB2aXNpYmxlUmVjdC5sZWZ0ID0gTWF0aC5tYXgodmlzaWJsZVJlY3QubGVmdCwgc2Nyb2xsWCk7XG4gICAgdmlzaWJsZVJlY3QudG9wID0gTWF0aC5tYXgodmlzaWJsZVJlY3QudG9wLCBzY3JvbGxZKTtcbiAgICB2aXNpYmxlUmVjdC5yaWdodCA9IE1hdGgubWluKHZpc2libGVSZWN0LnJpZ2h0LCBzY3JvbGxYICsgdmlld3BvcnRXaWR0aCk7XG4gICAgdmlzaWJsZVJlY3QuYm90dG9tID0gTWF0aC5taW4odmlzaWJsZVJlY3QuYm90dG9tLCBzY3JvbGxZICsgdmlld3BvcnRIZWlnaHQpO1xuICB9IGVsc2Uge1xuICAgIC8vIENsaXAgYnkgZG9jdW1lbnQncyBzaXplLlxuICAgIHZhciBtYXhWaXNpYmxlV2lkdGggPSBNYXRoLm1heChkb2N1bWVudFdpZHRoLCBzY3JvbGxYICsgdmlld3BvcnRXaWR0aCk7XG4gICAgdmlzaWJsZVJlY3QucmlnaHQgPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5yaWdodCwgbWF4VmlzaWJsZVdpZHRoKTtcbiAgICB2YXIgbWF4VmlzaWJsZUhlaWdodCA9IE1hdGgubWF4KGRvY3VtZW50SGVpZ2h0LCBzY3JvbGxZICsgdmlld3BvcnRIZWlnaHQpO1xuICAgIHZpc2libGVSZWN0LmJvdHRvbSA9IE1hdGgubWluKHZpc2libGVSZWN0LmJvdHRvbSwgbWF4VmlzaWJsZUhlaWdodCk7XG4gIH1cblxuICByZXR1cm4gdmlzaWJsZVJlY3QudG9wID49IDAgJiYgdmlzaWJsZVJlY3QubGVmdCA+PSAwICYmIHZpc2libGVSZWN0LmJvdHRvbSA+IHZpc2libGVSZWN0LnRvcCAmJiB2aXNpYmxlUmVjdC5yaWdodCA+IHZpc2libGVSZWN0LmxlZnQgPyB2aXNpYmxlUmVjdCA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGFkanVzdEZvclZpZXdwb3J0KGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QsIG92ZXJmbG93KSB7XG4gIHZhciBwb3MgPSB1dGlscy5jbG9uZShlbEZ1dHVyZVBvcyk7XG4gIHZhciBzaXplID0ge1xuICAgIHdpZHRoOiBlbFJlZ2lvbi53aWR0aCxcbiAgICBoZWlnaHQ6IGVsUmVnaW9uLmhlaWdodFxuICB9O1xuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RYICYmIHBvcy5sZWZ0IDwgdmlzaWJsZVJlY3QubGVmdCkge1xuICAgIHBvcy5sZWZ0ID0gdmlzaWJsZVJlY3QubGVmdDtcbiAgfSAvLyBMZWZ0IGVkZ2UgaW5zaWRlIGFuZCByaWdodCBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byByZXNpemUgaXQuXG5cblxuICBpZiAob3ZlcmZsb3cucmVzaXplV2lkdGggJiYgcG9zLmxlZnQgPj0gdmlzaWJsZVJlY3QubGVmdCAmJiBwb3MubGVmdCArIHNpemUud2lkdGggPiB2aXNpYmxlUmVjdC5yaWdodCkge1xuICAgIHNpemUud2lkdGggLT0gcG9zLmxlZnQgKyBzaXplLndpZHRoIC0gdmlzaWJsZVJlY3QucmlnaHQ7XG4gIH0gLy8gUmlnaHQgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cblxuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RYICYmIHBvcy5sZWZ0ICsgc2l6ZS53aWR0aCA+IHZpc2libGVSZWN0LnJpZ2h0KSB7XG4gICAgLy8g5L+d6K+B5bem6L6555WM5ZKM5Y+v6KeG5Yy65Z+f5bem6L6555WM5a+56b2QXG4gICAgcG9zLmxlZnQgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5yaWdodCAtIHNpemUud2lkdGgsIHZpc2libGVSZWN0LmxlZnQpO1xuICB9IC8vIFRvcCBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byBtb3ZlIGl0LlxuXG5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFkgJiYgcG9zLnRvcCA8IHZpc2libGVSZWN0LnRvcCkge1xuICAgIHBvcy50b3AgPSB2aXNpYmxlUmVjdC50b3A7XG4gIH0gLy8gVG9wIGVkZ2UgaW5zaWRlIGFuZCBib3R0b20gZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gcmVzaXplIGl0LlxuXG5cbiAgaWYgKG92ZXJmbG93LnJlc2l6ZUhlaWdodCAmJiBwb3MudG9wID49IHZpc2libGVSZWN0LnRvcCAmJiBwb3MudG9wICsgc2l6ZS5oZWlnaHQgPiB2aXNpYmxlUmVjdC5ib3R0b20pIHtcbiAgICBzaXplLmhlaWdodCAtPSBwb3MudG9wICsgc2l6ZS5oZWlnaHQgLSB2aXNpYmxlUmVjdC5ib3R0b207XG4gIH0gLy8gQm90dG9tIGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIG1vdmUgaXQuXG5cblxuICBpZiAob3ZlcmZsb3cuYWRqdXN0WSAmJiBwb3MudG9wICsgc2l6ZS5oZWlnaHQgPiB2aXNpYmxlUmVjdC5ib3R0b20pIHtcbiAgICAvLyDkv53or4HkuIrovrnnlYzlkozlj6/op4bljLrln5/kuIrovrnnlYzlr7npvZBcbiAgICBwb3MudG9wID0gTWF0aC5tYXgodmlzaWJsZVJlY3QuYm90dG9tIC0gc2l6ZS5oZWlnaHQsIHZpc2libGVSZWN0LnRvcCk7XG4gIH1cblxuICByZXR1cm4gdXRpbHMubWl4KHBvcywgc2l6ZSk7XG59XG5cbmZ1bmN0aW9uIGdldFJlZ2lvbihub2RlKSB7XG4gIHZhciBvZmZzZXQ7XG4gIHZhciB3O1xuICB2YXIgaDtcblxuICBpZiAoIXV0aWxzLmlzV2luZG93KG5vZGUpICYmIG5vZGUubm9kZVR5cGUgIT09IDkpIHtcbiAgICBvZmZzZXQgPSB1dGlscy5vZmZzZXQobm9kZSk7XG4gICAgdyA9IHV0aWxzLm91dGVyV2lkdGgobm9kZSk7XG4gICAgaCA9IHV0aWxzLm91dGVySGVpZ2h0KG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB3aW4gPSB1dGlscy5nZXRXaW5kb3cobm9kZSk7XG4gICAgb2Zmc2V0ID0ge1xuICAgICAgbGVmdDogdXRpbHMuZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pLFxuICAgICAgdG9wOiB1dGlscy5nZXRXaW5kb3dTY3JvbGxUb3Aod2luKVxuICAgIH07XG4gICAgdyA9IHV0aWxzLnZpZXdwb3J0V2lkdGgod2luKTtcbiAgICBoID0gdXRpbHMudmlld3BvcnRIZWlnaHQod2luKTtcbiAgfVxuXG4gIG9mZnNldC53aWR0aCA9IHc7XG4gIG9mZnNldC5oZWlnaHQgPSBoO1xuICByZXR1cm4gb2Zmc2V0O1xufVxuXG4vKipcbiAqIOiOt+WPliBub2RlIOS4iueahCBhbGlnbiDlr7npvZDngrkg55u45a+55LqO6aG16Z2i55qE5Z2Q5qCHXG4gKi9cbmZ1bmN0aW9uIGdldEFsaWduT2Zmc2V0KHJlZ2lvbiwgYWxpZ24pIHtcbiAgdmFyIFYgPSBhbGlnbi5jaGFyQXQoMCk7XG4gIHZhciBIID0gYWxpZ24uY2hhckF0KDEpO1xuICB2YXIgdyA9IHJlZ2lvbi53aWR0aDtcbiAgdmFyIGggPSByZWdpb24uaGVpZ2h0O1xuICB2YXIgeCA9IHJlZ2lvbi5sZWZ0O1xuICB2YXIgeSA9IHJlZ2lvbi50b3A7XG5cbiAgaWYgKFYgPT09ICdjJykge1xuICAgIHkgKz0gaCAvIDI7XG4gIH0gZWxzZSBpZiAoViA9PT0gJ2InKSB7XG4gICAgeSArPSBoO1xuICB9XG5cbiAgaWYgKEggPT09ICdjJykge1xuICAgIHggKz0gdyAvIDI7XG4gIH0gZWxzZSBpZiAoSCA9PT0gJ3InKSB7XG4gICAgeCArPSB3O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiB4LFxuICAgIHRvcDogeVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgcmVmTm9kZVJlZ2lvbiwgcG9pbnRzLCBvZmZzZXQsIHRhcmdldE9mZnNldCkge1xuICB2YXIgcDEgPSBnZXRBbGlnbk9mZnNldChyZWZOb2RlUmVnaW9uLCBwb2ludHNbMV0pO1xuICB2YXIgcDIgPSBnZXRBbGlnbk9mZnNldChlbFJlZ2lvbiwgcG9pbnRzWzBdKTtcbiAgdmFyIGRpZmYgPSBbcDIubGVmdCAtIHAxLmxlZnQsIHAyLnRvcCAtIHAxLnRvcF07XG4gIHJldHVybiB7XG4gICAgbGVmdDogTWF0aC5yb3VuZChlbFJlZ2lvbi5sZWZ0IC0gZGlmZlswXSArIG9mZnNldFswXSAtIHRhcmdldE9mZnNldFswXSksXG4gICAgdG9wOiBNYXRoLnJvdW5kKGVsUmVnaW9uLnRvcCAtIGRpZmZbMV0gKyBvZmZzZXRbMV0gLSB0YXJnZXRPZmZzZXRbMV0pXG4gIH07XG59XG5cbi8qKlxuICogYWxpZ24gZG9tIG5vZGUgZmxleGlibHlcbiAqIEBhdXRob3IgeWltaW5naGVAZ21haWwuY29tXG4gKi9cblxuZnVuY3Rpb24gaXNGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy5sZWZ0IDwgdmlzaWJsZVJlY3QubGVmdCB8fCBlbEZ1dHVyZVBvcy5sZWZ0ICsgZWxSZWdpb24ud2lkdGggPiB2aXNpYmxlUmVjdC5yaWdodDtcbn1cblxuZnVuY3Rpb24gaXNGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy50b3AgPCB2aXNpYmxlUmVjdC50b3AgfHwgZWxGdXR1cmVQb3MudG9wICsgZWxSZWdpb24uaGVpZ2h0ID4gdmlzaWJsZVJlY3QuYm90dG9tO1xufVxuXG5mdW5jdGlvbiBpc0NvbXBsZXRlRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MubGVmdCA+IHZpc2libGVSZWN0LnJpZ2h0IHx8IGVsRnV0dXJlUG9zLmxlZnQgKyBlbFJlZ2lvbi53aWR0aCA8IHZpc2libGVSZWN0LmxlZnQ7XG59XG5cbmZ1bmN0aW9uIGlzQ29tcGxldGVGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy50b3AgPiB2aXNpYmxlUmVjdC5ib3R0b20gfHwgZWxGdXR1cmVQb3MudG9wICsgZWxSZWdpb24uaGVpZ2h0IDwgdmlzaWJsZVJlY3QudG9wO1xufVxuXG5mdW5jdGlvbiBmbGlwKHBvaW50cywgcmVnLCBtYXApIHtcbiAgdmFyIHJldCA9IFtdO1xuICB1dGlscy5lYWNoKHBvaW50cywgZnVuY3Rpb24gKHApIHtcbiAgICByZXQucHVzaChwLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuIG1hcFttXTtcbiAgICB9KSk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBmbGlwT2Zmc2V0KG9mZnNldCwgaW5kZXgpIHtcbiAgb2Zmc2V0W2luZGV4XSA9IC1vZmZzZXRbaW5kZXhdO1xuICByZXR1cm4gb2Zmc2V0O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0T2Zmc2V0KHN0ciwgb2Zmc2V0TGVuKSB7XG4gIHZhciBuO1xuXG4gIGlmICgvJSQvLnRlc3Qoc3RyKSkge1xuICAgIG4gPSBwYXJzZUludChzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKSwgMTApIC8gMTAwICogb2Zmc2V0TGVuO1xuICB9IGVsc2Uge1xuICAgIG4gPSBwYXJzZUludChzdHIsIDEwKTtcbiAgfVxuXG4gIHJldHVybiBuIHx8IDA7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU9mZnNldChvZmZzZXQsIGVsKSB7XG4gIG9mZnNldFswXSA9IGNvbnZlcnRPZmZzZXQob2Zmc2V0WzBdLCBlbC53aWR0aCk7XG4gIG9mZnNldFsxXSA9IGNvbnZlcnRPZmZzZXQob2Zmc2V0WzFdLCBlbC5oZWlnaHQpO1xufVxuLyoqXG4gKiBAcGFyYW0gZWxcbiAqIEBwYXJhbSB0Z3RSZWdpb24g5Y+C54Wn6IqC54K55omA5Y2g55qE5Yy65Z+fOiB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCB9XG4gKiBAcGFyYW0gYWxpZ25cbiAqL1xuXG5cbmZ1bmN0aW9uIGRvQWxpZ24oZWwsIHRndFJlZ2lvbiwgYWxpZ24sIGlzVGd0UmVnaW9uVmlzaWJsZSkge1xuICB2YXIgcG9pbnRzID0gYWxpZ24ucG9pbnRzO1xuICB2YXIgb2Zmc2V0ID0gYWxpZ24ub2Zmc2V0IHx8IFswLCAwXTtcbiAgdmFyIHRhcmdldE9mZnNldCA9IGFsaWduLnRhcmdldE9mZnNldCB8fCBbMCwgMF07XG4gIHZhciBvdmVyZmxvdyA9IGFsaWduLm92ZXJmbG93O1xuICB2YXIgc291cmNlID0gYWxpZ24uc291cmNlIHx8IGVsO1xuICBvZmZzZXQgPSBbXS5jb25jYXQob2Zmc2V0KTtcbiAgdGFyZ2V0T2Zmc2V0ID0gW10uY29uY2F0KHRhcmdldE9mZnNldCk7XG4gIG92ZXJmbG93ID0gb3ZlcmZsb3cgfHwge307XG4gIHZhciBuZXdPdmVyZmxvd0NmZyA9IHt9O1xuICB2YXIgZmFpbCA9IDA7XG4gIHZhciBhbHdheXNCeVZpZXdwb3J0ID0gISEob3ZlcmZsb3cgJiYgb3ZlcmZsb3cuYWx3YXlzQnlWaWV3cG9ydCk7IC8vIOW9k+WJjeiKgueCueWPr+S7peiiq+aUvue9rueahOaYvuekuuWMuuWfn1xuXG4gIHZhciB2aXNpYmxlUmVjdCA9IGdldFZpc2libGVSZWN0Rm9yRWxlbWVudChzb3VyY2UsIGFsd2F5c0J5Vmlld3BvcnQpOyAvLyDlvZPliY3oioLngrnmiYDljaDnmoTljLrln58sIGxlZnQvdG9wL3dpZHRoL2hlaWdodFxuXG4gIHZhciBlbFJlZ2lvbiA9IGdldFJlZ2lvbihzb3VyY2UpOyAvLyDlsIYgb2Zmc2V0IOi9rOaNouaIkOaVsOWAvO+8jOaUr+aMgeeZvuWIhuavlFxuXG4gIG5vcm1hbGl6ZU9mZnNldChvZmZzZXQsIGVsUmVnaW9uKTtcbiAgbm9ybWFsaXplT2Zmc2V0KHRhcmdldE9mZnNldCwgdGd0UmVnaW9uKTsgLy8g5b2T5YmN6IqC54K55bCG6KaB6KKr5pS+572u55qE5L2N572uXG5cbiAgdmFyIGVsRnV0dXJlUG9zID0gZ2V0RWxGdXR1cmVQb3MoZWxSZWdpb24sIHRndFJlZ2lvbiwgcG9pbnRzLCBvZmZzZXQsIHRhcmdldE9mZnNldCk7IC8vIOW9k+WJjeiKgueCueWwhuimgeaJgOWkhOeahOWMuuWfn1xuXG4gIHZhciBuZXdFbFJlZ2lvbiA9IHV0aWxzLm1lcmdlKGVsUmVnaW9uLCBlbEZ1dHVyZVBvcyk7IC8vIOWmguaenOWPr+inhuWMuuWfn+S4jeiDveWujOWFqOaUvue9ruW9k+WJjeiKgueCueaXtuWFgeiuuOiwg+aVtFxuXG4gIGlmICh2aXNpYmxlUmVjdCAmJiAob3ZlcmZsb3cuYWRqdXN0WCB8fCBvdmVyZmxvdy5hZGp1c3RZKSAmJiBpc1RndFJlZ2lvblZpc2libGUpIHtcbiAgICBpZiAob3ZlcmZsb3cuYWRqdXN0WCkge1xuICAgICAgLy8g5aaC5p6c5qiq5ZCR5LiN6IO95pS+5LiLXG4gICAgICBpZiAoaXNGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAvLyDlr7npvZDkvY3nva7lj43kuItcbiAgICAgICAgdmFyIG5ld1BvaW50cyA9IGZsaXAocG9pbnRzLCAvW2xyXS9naSwge1xuICAgICAgICAgIGw6ICdyJyxcbiAgICAgICAgICByOiAnbCdcbiAgICAgICAgfSk7IC8vIOWBj+enu+mHj+S5n+WPjeS4i1xuXG4gICAgICAgIHZhciBuZXdPZmZzZXQgPSBmbGlwT2Zmc2V0KG9mZnNldCwgMCk7XG4gICAgICAgIHZhciBuZXdUYXJnZXRPZmZzZXQgPSBmbGlwT2Zmc2V0KHRhcmdldE9mZnNldCwgMCk7XG4gICAgICAgIHZhciBuZXdFbEZ1dHVyZVBvcyA9IGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCB0Z3RSZWdpb24sIG5ld1BvaW50cywgbmV3T2Zmc2V0LCBuZXdUYXJnZXRPZmZzZXQpO1xuXG4gICAgICAgIGlmICghaXNDb21wbGV0ZUZhaWxYKG5ld0VsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgICAgZmFpbCA9IDE7XG4gICAgICAgICAgcG9pbnRzID0gbmV3UG9pbnRzO1xuICAgICAgICAgIG9mZnNldCA9IG5ld09mZnNldDtcbiAgICAgICAgICB0YXJnZXRPZmZzZXQgPSBuZXdUYXJnZXRPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3ZlcmZsb3cuYWRqdXN0WSkge1xuICAgICAgLy8g5aaC5p6c57q15ZCR5LiN6IO95pS+5LiLXG4gICAgICBpZiAoaXNGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAvLyDlr7npvZDkvY3nva7lj43kuItcbiAgICAgICAgdmFyIF9uZXdQb2ludHMgPSBmbGlwKHBvaW50cywgL1t0Yl0vZ2ksIHtcbiAgICAgICAgICB0OiAnYicsXG4gICAgICAgICAgYjogJ3QnXG4gICAgICAgIH0pOyAvLyDlgY/np7vph4/kuZ/lj43kuItcblxuXG4gICAgICAgIHZhciBfbmV3T2Zmc2V0ID0gZmxpcE9mZnNldChvZmZzZXQsIDEpO1xuXG4gICAgICAgIHZhciBfbmV3VGFyZ2V0T2Zmc2V0ID0gZmxpcE9mZnNldCh0YXJnZXRPZmZzZXQsIDEpO1xuXG4gICAgICAgIHZhciBfbmV3RWxGdXR1cmVQb3MgPSBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgdGd0UmVnaW9uLCBfbmV3UG9pbnRzLCBfbmV3T2Zmc2V0LCBfbmV3VGFyZ2V0T2Zmc2V0KTtcblxuICAgICAgICBpZiAoIWlzQ29tcGxldGVGYWlsWShfbmV3RWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgICBmYWlsID0gMTtcbiAgICAgICAgICBwb2ludHMgPSBfbmV3UG9pbnRzO1xuICAgICAgICAgIG9mZnNldCA9IF9uZXdPZmZzZXQ7XG4gICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gX25ld1RhcmdldE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8g5aaC5p6c5aSx6LSl77yM6YeN5paw6K6h566X5b2T5YmN6IqC54K55bCG6KaB6KKr5pS+572u55qE5L2N572uXG5cblxuICAgIGlmIChmYWlsKSB7XG4gICAgICBlbEZ1dHVyZVBvcyA9IGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCB0Z3RSZWdpb24sIHBvaW50cywgb2Zmc2V0LCB0YXJnZXRPZmZzZXQpO1xuICAgICAgdXRpbHMubWl4KG5ld0VsUmVnaW9uLCBlbEZ1dHVyZVBvcyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3RpbGxGYWlsWCA9IGlzRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCk7XG4gICAgdmFyIGlzU3RpbGxGYWlsWSA9IGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCk7IC8vIOajgOafpeWPjeS4i+WQjueahOS9jee9ruaYr+WQpuWPr+S7peaUvuS4i+S6hu+8jOWmguaenOS7jeeEtuaUvuS4jeS4i++8mlxuICAgIC8vIDEuIOWkjeWOn+S/ruaUuei/h+eahOWumuS9jeWPguaVsFxuXG4gICAgaWYgKGlzU3RpbGxGYWlsWCB8fCBpc1N0aWxsRmFpbFkpIHtcbiAgICAgIHZhciBfbmV3UG9pbnRzMiA9IHBvaW50czsgLy8g6YeN572u5a+55bqU6YOo5YiG55qE57+76L2s6YC76L6RXG5cbiAgICAgIGlmIChpc1N0aWxsRmFpbFgpIHtcbiAgICAgICAgX25ld1BvaW50czIgPSBmbGlwKHBvaW50cywgL1tscl0vZ2ksIHtcbiAgICAgICAgICBsOiAncicsXG4gICAgICAgICAgcjogJ2wnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdGlsbEZhaWxZKSB7XG4gICAgICAgIF9uZXdQb2ludHMyID0gZmxpcChwb2ludHMsIC9bdGJdL2dpLCB7XG4gICAgICAgICAgdDogJ2InLFxuICAgICAgICAgIGI6ICd0J1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcG9pbnRzID0gX25ld1BvaW50czI7XG4gICAgICBvZmZzZXQgPSBhbGlnbi5vZmZzZXQgfHwgWzAsIDBdO1xuICAgICAgdGFyZ2V0T2Zmc2V0ID0gYWxpZ24udGFyZ2V0T2Zmc2V0IHx8IFswLCAwXTtcbiAgICB9IC8vIDIuIOWPquacieaMh+WumuS6huWPr+S7peiwg+aVtOW9k+WJjeaWueWQkeaJjeiwg+aVtFxuXG5cbiAgICBuZXdPdmVyZmxvd0NmZy5hZGp1c3RYID0gb3ZlcmZsb3cuYWRqdXN0WCAmJiBpc1N0aWxsRmFpbFg7XG4gICAgbmV3T3ZlcmZsb3dDZmcuYWRqdXN0WSA9IG92ZXJmbG93LmFkanVzdFkgJiYgaXNTdGlsbEZhaWxZOyAvLyDnoa7lrp7opoHosIPmlbTvvIznlJroh7Plj6/og73kvJrosIPmlbTpq5jluqblrr3luqZcblxuICAgIGlmIChuZXdPdmVyZmxvd0NmZy5hZGp1c3RYIHx8IG5ld092ZXJmbG93Q2ZnLmFkanVzdFkpIHtcbiAgICAgIG5ld0VsUmVnaW9uID0gYWRqdXN0Rm9yVmlld3BvcnQoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCwgbmV3T3ZlcmZsb3dDZmcpO1xuICAgIH1cbiAgfSAvLyBuZWVkIGp1ZGdlIHRvIGluIGNhc2Ugc2V0IGZpeGVkIHdpdGggaW4gY3NzIG9uIGhlaWdodCBhdXRvIGVsZW1lbnRcblxuXG4gIGlmIChuZXdFbFJlZ2lvbi53aWR0aCAhPT0gZWxSZWdpb24ud2lkdGgpIHtcbiAgICB1dGlscy5jc3Moc291cmNlLCAnd2lkdGgnLCB1dGlscy53aWR0aChzb3VyY2UpICsgbmV3RWxSZWdpb24ud2lkdGggLSBlbFJlZ2lvbi53aWR0aCk7XG4gIH1cblxuICBpZiAobmV3RWxSZWdpb24uaGVpZ2h0ICE9PSBlbFJlZ2lvbi5oZWlnaHQpIHtcbiAgICB1dGlscy5jc3Moc291cmNlLCAnaGVpZ2h0JywgdXRpbHMuaGVpZ2h0KHNvdXJjZSkgKyBuZXdFbFJlZ2lvbi5oZWlnaHQgLSBlbFJlZ2lvbi5oZWlnaHQpO1xuICB9IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzE5MFxuICAvLyDnm7jlr7nkuo7lsY/luZXkvY3nva7msqHlj5jvvIzogIwgbGVmdC90b3Ag5Y+Y5LqGXG4gIC8vIOS+i+WmgiA8ZGl2ICdyZWxhdGl2ZSc+PGVsIGFic29sdXRlPjwvZGl2PlxuXG5cbiAgdXRpbHMub2Zmc2V0KHNvdXJjZSwge1xuICAgIGxlZnQ6IG5ld0VsUmVnaW9uLmxlZnQsXG4gICAgdG9wOiBuZXdFbFJlZ2lvbi50b3BcbiAgfSwge1xuICAgIHVzZUNzc1JpZ2h0OiBhbGlnbi51c2VDc3NSaWdodCxcbiAgICB1c2VDc3NCb3R0b206IGFsaWduLnVzZUNzc0JvdHRvbSxcbiAgICB1c2VDc3NUcmFuc2Zvcm06IGFsaWduLnVzZUNzc1RyYW5zZm9ybSxcbiAgICBpZ25vcmVTaGFrZTogYWxpZ24uaWdub3JlU2hha2VcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcG9pbnRzOiBwb2ludHMsXG4gICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXQsXG4gICAgb3ZlcmZsb3c6IG5ld092ZXJmbG93Q2ZnXG4gIH07XG59XG4vKipcbiAqICAyMDEyLTA0LTI2IHlpbWluZ2hlQGdtYWlsLmNvbVxuICogICAtIOS8mOWMluaZuuiDveWvuem9kOeul+azlVxuICogICAtIOaFjueUqCByZXNpemVYWFxuICpcbiAqICAyMDExLTA3LTEzIHlpbWluZ2hlQGdtYWlsLmNvbSBub3RlOlxuICogICAtIOWinuWKoOaZuuiDveWvuem9kO+8jOS7peWPiuWkp+Wwj+iwg+aVtOmAiemhuVxuICoqL1xuXG5mdW5jdGlvbiBpc091dE9mVmlzaWJsZVJlY3QodGFyZ2V0LCBhbHdheXNCeVZpZXdwb3J0KSB7XG4gIHZhciB2aXNpYmxlUmVjdCA9IGdldFZpc2libGVSZWN0Rm9yRWxlbWVudCh0YXJnZXQsIGFsd2F5c0J5Vmlld3BvcnQpO1xuICB2YXIgdGFyZ2V0UmVnaW9uID0gZ2V0UmVnaW9uKHRhcmdldCk7XG4gIHJldHVybiAhdmlzaWJsZVJlY3QgfHwgdGFyZ2V0UmVnaW9uLmxlZnQgKyB0YXJnZXRSZWdpb24ud2lkdGggPD0gdmlzaWJsZVJlY3QubGVmdCB8fCB0YXJnZXRSZWdpb24udG9wICsgdGFyZ2V0UmVnaW9uLmhlaWdodCA8PSB2aXNpYmxlUmVjdC50b3AgfHwgdGFyZ2V0UmVnaW9uLmxlZnQgPj0gdmlzaWJsZVJlY3QucmlnaHQgfHwgdGFyZ2V0UmVnaW9uLnRvcCA+PSB2aXNpYmxlUmVjdC5ib3R0b207XG59XG5cbmZ1bmN0aW9uIGFsaWduRWxlbWVudChlbCwgcmVmTm9kZSwgYWxpZ24pIHtcbiAgdmFyIHRhcmdldCA9IGFsaWduLnRhcmdldCB8fCByZWZOb2RlO1xuICB2YXIgcmVmTm9kZVJlZ2lvbiA9IGdldFJlZ2lvbih0YXJnZXQpO1xuICB2YXIgaXNUYXJnZXROb3RPdXRPZlZpc2libGUgPSAhaXNPdXRPZlZpc2libGVSZWN0KHRhcmdldCwgYWxpZ24ub3ZlcmZsb3cgJiYgYWxpZ24ub3ZlcmZsb3cuYWx3YXlzQnlWaWV3cG9ydCk7XG4gIHJldHVybiBkb0FsaWduKGVsLCByZWZOb2RlUmVnaW9uLCBhbGlnbiwgaXNUYXJnZXROb3RPdXRPZlZpc2libGUpO1xufVxuXG5hbGlnbkVsZW1lbnQuX19nZXRPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQ7XG5hbGlnbkVsZW1lbnQuX19nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQgPSBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQ7XG5cbi8qKlxuICogYHRndFBvaW50YDogeyBwYWdlWCwgcGFnZVkgfSBvciB7IGNsaWVudFgsIGNsaWVudFkgfS5cbiAqIElmIGNsaWVudCBwb3NpdGlvbiBwcm92aWRlZCwgd2lsbCBpbnRlcm5hbCBjb252ZXJ0IHRvIHBhZ2UgcG9zaXRpb24uXG4gKi9cblxuZnVuY3Rpb24gYWxpZ25Qb2ludChlbCwgdGd0UG9pbnQsIGFsaWduKSB7XG4gIHZhciBwYWdlWDtcbiAgdmFyIHBhZ2VZO1xuICB2YXIgZG9jID0gdXRpbHMuZ2V0RG9jdW1lbnQoZWwpO1xuICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIHZhciBzY3JvbGxYID0gdXRpbHMuZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pO1xuICB2YXIgc2Nyb2xsWSA9IHV0aWxzLmdldFdpbmRvd1Njcm9sbFRvcCh3aW4pO1xuICB2YXIgdmlld3BvcnRXaWR0aCA9IHV0aWxzLnZpZXdwb3J0V2lkdGgod2luKTtcbiAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gdXRpbHMudmlld3BvcnRIZWlnaHQod2luKTtcblxuICBpZiAoJ3BhZ2VYJyBpbiB0Z3RQb2ludCkge1xuICAgIHBhZ2VYID0gdGd0UG9pbnQucGFnZVg7XG4gIH0gZWxzZSB7XG4gICAgcGFnZVggPSBzY3JvbGxYICsgdGd0UG9pbnQuY2xpZW50WDtcbiAgfVxuXG4gIGlmICgncGFnZVknIGluIHRndFBvaW50KSB7XG4gICAgcGFnZVkgPSB0Z3RQb2ludC5wYWdlWTtcbiAgfSBlbHNlIHtcbiAgICBwYWdlWSA9IHNjcm9sbFkgKyB0Z3RQb2ludC5jbGllbnRZO1xuICB9XG5cbiAgdmFyIHRndFJlZ2lvbiA9IHtcbiAgICBsZWZ0OiBwYWdlWCxcbiAgICB0b3A6IHBhZ2VZLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9O1xuICB2YXIgcG9pbnRJblZpZXcgPSBwYWdlWCA+PSAwICYmIHBhZ2VYIDw9IHNjcm9sbFggKyB2aWV3cG9ydFdpZHRoICYmIHBhZ2VZID49IDAgJiYgcGFnZVkgPD0gc2Nyb2xsWSArIHZpZXdwb3J0SGVpZ2h0OyAvLyBQcm92aWRlIGRlZmF1bHQgdGFyZ2V0IHBvaW50XG5cbiAgdmFyIHBvaW50cyA9IFthbGlnbi5wb2ludHNbMF0sICdjYyddO1xuICByZXR1cm4gZG9BbGlnbihlbCwgdGd0UmVnaW9uLCBfb2JqZWN0U3ByZWFkMih7fSwgYWxpZ24sIHtcbiAgICBwb2ludHM6IHBvaW50c1xuICB9KSwgcG9pbnRJblZpZXcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhbGlnbkVsZW1lbnQ7XG5leHBvcnQgeyBhbGlnbkVsZW1lbnQsIGFsaWduUG9pbnQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucmMtc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTRweDtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG4ucmMtc2xpZGVyICoge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuLnJjLXNsaWRlci1yYWlsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcXG4gIGhlaWdodDogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4ucmMtc2xpZGVyLXRyYWNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmUyZmI7XFxufVxcbi5yYy1zbGlkZXItaGFuZGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgY3Vyc29yOiBncmFiO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggIzk2ZGJmYTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB0b3VjaC1hY3Rpb246IHBhbi14O1xcbn1cXG4ucmMtc2xpZGVyLWhhbmRsZS1kcmFnZ2luZy5yYy1zbGlkZXItaGFuZGxlLWRyYWdnaW5nLnJjLXNsaWRlci1oYW5kbGUtZHJhZ2dpbmcge1xcbiAgYm9yZGVyLWNvbG9yOiAjNTdjNWY3O1xcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICM5NmRiZmE7XFxufVxcbi5yYy1zbGlkZXItaGFuZGxlOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5yYy1zbGlkZXItaGFuZGxlLWNsaWNrLWZvY3VzZWQ6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjOTZkYmZhO1xcbiAgYm94LXNoYWRvdzogdW5zZXQ7XFxufVxcbi5yYy1zbGlkZXItaGFuZGxlOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzU3YzVmNztcXG59XFxuLnJjLXNsaWRlci1oYW5kbGU6YWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogIzU3YzVmNztcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzU3YzVmNztcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcXG4gIGN1cnNvcjogZ3JhYmJpbmc7XFxufVxcbi5yYy1zbGlkZXItbWFyayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE4cHg7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5yYy1zbGlkZXItbWFyay10ZXh0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuLnJjLXNsaWRlci1tYXJrLXRleHQtYWN0aXZlIHtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXG4ucmMtc2xpZGVyLXN0ZXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4ucmMtc2xpZGVyLWRvdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0ycHg7XFxuICBtYXJnaW4tbGVmdDogLTRweDtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOWU5ZTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnJjLXNsaWRlci1kb3QtYWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogIzk2ZGJmYTtcXG59XFxuLnJjLXNsaWRlci1kb3QtcmV2ZXJzZSB7XFxuICBtYXJnaW4tcmlnaHQ6IC00cHg7XFxufVxcbi5yYy1zbGlkZXItZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcXG59XFxuLnJjLXNsaWRlci1kaXNhYmxlZCAucmMtc2xpZGVyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcbi5yYy1zbGlkZXItZGlzYWJsZWQgLnJjLXNsaWRlci1oYW5kbGUsXFxuLnJjLXNsaWRlci1kaXNhYmxlZCAucmMtc2xpZGVyLWRvdCB7XFxuICBib3JkZXItY29sb3I6ICNjY2M7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5yYy1zbGlkZXItZGlzYWJsZWQgLnJjLXNsaWRlci1tYXJrLXRleHQsXFxuLnJjLXNsaWRlci1kaXNhYmxlZCAucmMtc2xpZGVyLWRvdCB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XFxufVxcbi5yYy1zbGlkZXItdmVydGljYWwge1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuLnJjLXNsaWRlci12ZXJ0aWNhbCAucmMtc2xpZGVyLXJhaWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDRweDtcXG59XFxuLnJjLXNsaWRlci12ZXJ0aWNhbCAucmMtc2xpZGVyLXRyYWNrIHtcXG4gIGxlZnQ6IDVweDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiA0cHg7XFxufVxcbi5yYy1zbGlkZXItdmVydGljYWwgLnJjLXNsaWRlci1oYW5kbGUge1xcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICB0b3VjaC1hY3Rpb246IHBhbi15O1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIC5yYy1zbGlkZXItbWFyayB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAxOHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIC5yYy1zbGlkZXItc3RlcCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNHB4O1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIC5yYy1zbGlkZXItZG90IHtcXG4gIGxlZnQ6IDJweDtcXG4gIG1hcmdpbi1ib3R0b206IC00cHg7XFxufVxcbi5yYy1zbGlkZXItdmVydGljYWwgLnJjLXNsaWRlci1kb3Q6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcXG59XFxuLnJjLXNsaWRlci12ZXJ0aWNhbCAucmMtc2xpZGVyLWRvdDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IC00cHg7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tZW50ZXIsXFxuLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1hcHBlYXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxuICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tbGVhdmUge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxuICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tZW50ZXIucmMtc2xpZGVyLXRvb2x0aXAtem9vbS1kb3duLWVudGVyLWFjdGl2ZSxcXG4ucmMtc2xpZGVyLXRvb2x0aXAtem9vbS1kb3duLWFwcGVhci5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tYXBwZWFyLWFjdGl2ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByY1NsaWRlclRvb2x0aXBab29tRG93bkluO1xcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogcmNTbGlkZXJUb29sdGlwWm9vbURvd25JbjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxuICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xcbn1cXG4ucmMtc2xpZGVyLXRvb2x0aXAtem9vbS1kb3duLWxlYXZlLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1sZWF2ZS1hY3RpdmUge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcmNTbGlkZXJUb29sdGlwWm9vbURvd25PdXQ7XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiByY1NsaWRlclRvb2x0aXBab29tRG93bk91dDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxuICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xcbn1cXG4ucmMtc2xpZGVyLXRvb2x0aXAtem9vbS1kb3duLWVudGVyLFxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tYXBwZWFyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tbGVhdmUge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByY1NsaWRlclRvb2x0aXBab29tRG93bkluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcmNTbGlkZXJUb29sdGlwWm9vbURvd25JbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcmNTbGlkZXJUb29sdGlwWm9vbURvd25PdXQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyByY1NsaWRlclRvb2x0aXBab29tRG93bk91dCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xcbiAgfVxcbn1cXG4ucmMtc2xpZGVyLXRvb2x0aXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTk5OTlweDtcXG4gIHRvcDogLTk5OTlweDtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG4ucmMtc2xpZGVyLXRvb2x0aXAgKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG4ucmMtc2xpZGVyLXRvb2x0aXAtaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC1wbGFjZW1lbnQtdG9wIHtcXG4gIHBhZGRpbmc6IDRweCAwIDhweCAwO1xcbn1cXG4ucmMtc2xpZGVyLXRvb2x0aXAtaW5uZXIge1xcbiAgcGFkZGluZzogNnB4IDJweDtcXG4gIG1pbi13aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM2YzZjO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDRweCAjZDlkOWQ5O1xcbn1cXG4ucmMtc2xpZGVyLXRvb2x0aXAtYXJyb3cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLXBsYWNlbWVudC10b3AgLnJjLXNsaWRlci10b29sdGlwLWFycm93IHtcXG4gIGJvdHRvbTogNHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XFxuICBib3JkZXItd2lkdGg6IDRweCA0cHggMDtcXG4gIGJvcmRlci10b3AtY29sb3I6ICM2YzZjNmM7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvcmMtc2xpZGVyL2Fzc2V0cy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0FB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SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLDhCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLDhCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFVBQVU7SUFDVixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLDhCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7QUFDRjtBQVZBO0VBQ0U7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLDhCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFVBQVU7SUFDVixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLDhCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7QUFDRjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qiw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yYy1zbGlkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbi5yYy1zbGlkZXIgKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG4ucmMtc2xpZGVyLXJhaWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi5yYy1zbGlkZXItdHJhY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiZTJmYjtcXG59XFxuLnJjLXNsaWRlci1oYW5kbGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxuICBjdXJzb3I6IGdyYWI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IHNvbGlkIDJweCAjOTZkYmZhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHRvdWNoLWFjdGlvbjogcGFuLXg7XFxufVxcbi5yYy1zbGlkZXItaGFuZGxlLWRyYWdnaW5nLnJjLXNsaWRlci1oYW5kbGUtZHJhZ2dpbmcucmMtc2xpZGVyLWhhbmRsZS1kcmFnZ2luZyB7XFxuICBib3JkZXItY29sb3I6ICM1N2M1Zjc7XFxuICBib3gtc2hhZG93OiAwIDAgMCA1cHggIzk2ZGJmYTtcXG59XFxuLnJjLXNsaWRlci1oYW5kbGU6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnJjLXNsaWRlci1oYW5kbGUtY2xpY2stZm9jdXNlZDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICM5NmRiZmE7XFxuICBib3gtc2hhZG93OiB1bnNldDtcXG59XFxuLnJjLXNsaWRlci1oYW5kbGU6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjNTdjNWY3O1xcbn1cXG4ucmMtc2xpZGVyLWhhbmRsZTphY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNTdjNWY3O1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjNTdjNWY3O1xcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xcbiAgY3Vyc29yOiBncmFiYmluZztcXG59XFxuLnJjLXNsaWRlci1tYXJrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMThweDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnJjLXNsaWRlci1tYXJrLXRleHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4ucmMtc2xpZGVyLW1hcmstdGV4dC1hY3RpdmUge1xcbiAgY29sb3I6ICM2NjY7XFxufVxcbi5yYy1zbGlkZXItc3RlcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5yYy1zbGlkZXItZG90IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTJweDtcXG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2U5ZTllOTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ucmMtc2xpZGVyLWRvdC1hY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjOTZkYmZhO1xcbn1cXG4ucmMtc2xpZGVyLWRvdC1yZXZlcnNlIHtcXG4gIG1hcmdpbi1yaWdodDogLTRweDtcXG59XFxuLnJjLXNsaWRlci1kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcbn1cXG4ucmMtc2xpZGVyLWRpc2FibGVkIC5yYy1zbGlkZXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuLnJjLXNsaWRlci1kaXNhYmxlZCAucmMtc2xpZGVyLWhhbmRsZSxcXG4ucmMtc2xpZGVyLWRpc2FibGVkIC5yYy1zbGlkZXItZG90IHtcXG4gIGJvcmRlci1jb2xvcjogI2NjYztcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnJjLXNsaWRlci1kaXNhYmxlZCAucmMtc2xpZGVyLW1hcmstdGV4dCxcXG4ucmMtc2xpZGVyLWRpc2FibGVkIC5yYy1zbGlkZXItZG90IHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcXG59XFxuLnJjLXNsaWRlci12ZXJ0aWNhbCB7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIC5yYy1zbGlkZXItcmFpbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNHB4O1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIC5yYy1zbGlkZXItdHJhY2sge1xcbiAgbGVmdDogNXB4O1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDRweDtcXG59XFxuLnJjLXNsaWRlci12ZXJ0aWNhbCAucmMtc2xpZGVyLWhhbmRsZSB7XFxuICBtYXJnaW4tbGVmdDogLTVweDtcXG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XFxufVxcbi5yYy1zbGlkZXItdmVydGljYWwgLnJjLXNsaWRlci1tYXJrIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDE4cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5yYy1zbGlkZXItdmVydGljYWwgLnJjLXNsaWRlci1zdGVwIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA0cHg7XFxufVxcbi5yYy1zbGlkZXItdmVydGljYWwgLnJjLXNsaWRlci1kb3Qge1xcbiAgbGVmdDogMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcXG59XFxuLnJjLXNsaWRlci12ZXJ0aWNhbCAucmMtc2xpZGVyLWRvdDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIC5yYy1zbGlkZXItZG90Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1lbnRlcixcXG4ucmMtc2xpZGVyLXRvb2x0aXAtem9vbS1kb3duLWFwcGVhciB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tbGVhdmUge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbn1cXG4ucmMtc2xpZGVyLXRvb2x0aXAtem9vbS1kb3duLWVudGVyLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1lbnRlci1hY3RpdmUsXFxuLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1hcHBlYXIucmMtc2xpZGVyLXRvb2x0aXAtem9vbS1kb3duLWFwcGVhci1hY3RpdmUge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJjU2xpZGVyVG9vbHRpcFpvb21Eb3duSW47XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1sZWF2ZS5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tbGVhdmUtYWN0aXZlIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiByY1NsaWRlclRvb2x0aXBab29tRG93bk91dDtcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xcbn1cXG4ucmMtc2xpZGVyLXRvb2x0aXAtem9vbS1kb3duLWVudGVyLFxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tYXBwZWFyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tbGVhdmUge1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxufVxcbkBrZXlmcmFtZXMgcmNTbGlkZXJUb29sdGlwWm9vbURvd25JbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHJjU2xpZGVyVG9vbHRpcFpvb21Eb3duT3V0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XFxuICB9XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtOTk5OXB4O1xcbiAgdG9wOiAtOTk5OXB4O1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcCAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLXBsYWNlbWVudC10b3Age1xcbiAgcGFkZGluZzogNHB4IDAgOHB4IDA7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC1pbm5lciB7XFxuICBwYWRkaW5nOiA2cHggMnB4O1xcbiAgbWluLXdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YzZjNmM7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3gtc2hhZG93OiAwIDAgNHB4ICNkOWQ5ZDk7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC1hcnJvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG4ucmMtc2xpZGVyLXRvb2x0aXAtcGxhY2VtZW50LXRvcCAucmMtc2xpZGVyLXRvb2x0aXAtYXJyb3cge1xcbiAgYm90dG9tOiA0cHg7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTRweDtcXG4gIGJvcmRlci13aWR0aDogNHB4IDRweCAwO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzZjNmM2YztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuXG4vKipcbiAqIFJlbW92ZWQgcHJvcHM6XG4gKiAgLSBjaGlsZHJlblByb3BzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlUmVmIH0gZnJvbSBcInJjLXV0aWwvZXMvcmVmXCI7XG5pbXBvcnQgaXNWaXNpYmxlIGZyb20gXCJyYy11dGlsL2VzL0RvbS9pc1Zpc2libGVcIjtcbmltcG9ydCB7IGFsaWduRWxlbWVudCwgYWxpZ25Qb2ludCB9IGZyb20gJ2RvbS1hbGlnbic7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tIFwicmMtdXRpbC9lcy9Eb20vYWRkRXZlbnRMaXN0ZW5lclwiO1xuaW1wb3J0IHsgaXNTYW1lUG9pbnQsIHJlc3RvcmVGb2N1cywgbW9uaXRvclJlc2l6ZSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgdXNlQnVmZmVyIGZyb20gJy4vaG9va3MvdXNlQnVmZmVyJztcblxuZnVuY3Rpb24gZ2V0RWxlbWVudChmdW5jKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIG51bGw7XG4gIHJldHVybiBmdW5jKCk7XG59XG5cbmZ1bmN0aW9uIGdldFBvaW50KHBvaW50KSB7XG4gIGlmIChfdHlwZW9mKHBvaW50KSAhPT0gJ29iamVjdCcgfHwgIXBvaW50KSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHBvaW50O1xufVxuXG52YXIgQWxpZ24gPSBmdW5jdGlvbiBBbGlnbihfcmVmLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgIHRhcmdldCA9IF9yZWYudGFyZ2V0LFxuICAgICAgYWxpZ24gPSBfcmVmLmFsaWduLFxuICAgICAgb25BbGlnbiA9IF9yZWYub25BbGlnbixcbiAgICAgIG1vbml0b3JXaW5kb3dSZXNpemUgPSBfcmVmLm1vbml0b3JXaW5kb3dSZXNpemUsXG4gICAgICBfcmVmJG1vbml0b3JCdWZmZXJUaW0gPSBfcmVmLm1vbml0b3JCdWZmZXJUaW1lLFxuICAgICAgbW9uaXRvckJ1ZmZlclRpbWUgPSBfcmVmJG1vbml0b3JCdWZmZXJUaW0gPT09IHZvaWQgMCA/IDAgOiBfcmVmJG1vbml0b3JCdWZmZXJUaW07XG4gIHZhciBjYWNoZVJlZiA9IFJlYWN0LnVzZVJlZih7fSk7XG4gIHZhciBub2RlUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciBjaGlsZE5vZGUgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTsgLy8gPT09PT09PT09PT09PT09PT09PT09IEFsaWduID09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gV2Ugc2F2ZSB0aGUgcHJvcHMgaGVyZSB0byBhdm9pZCBjbG9zdXJlIG1ha2VzIHByb3BzIG9vZFxuXG4gIHZhciBmb3JjZUFsaWduUHJvcHNSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuICBmb3JjZUFsaWduUHJvcHNSZWYuY3VycmVudC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICBmb3JjZUFsaWduUHJvcHNSZWYuY3VycmVudC50YXJnZXQgPSB0YXJnZXQ7XG4gIGZvcmNlQWxpZ25Qcm9wc1JlZi5jdXJyZW50Lm9uQWxpZ24gPSBvbkFsaWduO1xuXG4gIHZhciBfdXNlQnVmZmVyID0gdXNlQnVmZmVyKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2ZvcmNlQWxpZ25Qcm9wc1JlZiRjID0gZm9yY2VBbGlnblByb3BzUmVmLmN1cnJlbnQsXG4gICAgICAgIGxhdGVzdERpc2FibGVkID0gX2ZvcmNlQWxpZ25Qcm9wc1JlZiRjLmRpc2FibGVkLFxuICAgICAgICBsYXRlc3RUYXJnZXQgPSBfZm9yY2VBbGlnblByb3BzUmVmJGMudGFyZ2V0LFxuICAgICAgICBsYXRlc3RPbkFsaWduID0gX2ZvcmNlQWxpZ25Qcm9wc1JlZiRjLm9uQWxpZ247XG5cbiAgICBpZiAoIWxhdGVzdERpc2FibGVkICYmIGxhdGVzdFRhcmdldCkge1xuICAgICAgdmFyIHNvdXJjZSA9IG5vZGVSZWYuY3VycmVudDtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICB2YXIgZWxlbWVudCA9IGdldEVsZW1lbnQobGF0ZXN0VGFyZ2V0KTtcbiAgICAgIHZhciBwb2ludCA9IGdldFBvaW50KGxhdGVzdFRhcmdldCk7XG4gICAgICBjYWNoZVJlZi5jdXJyZW50LmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgY2FjaGVSZWYuY3VycmVudC5wb2ludCA9IHBvaW50OyAvLyBJRSBsb3NlIGZvY3VzIGFmdGVyIGVsZW1lbnQgcmVhbGlnblxuICAgICAgLy8gV2Ugc2hvdWxkIHJlY29yZCBhY3RpdmVFbGVtZW50IGFuZCByZXN0b3JlIGxhdGVyXG5cbiAgICAgIHZhciBfZG9jdW1lbnQgPSBkb2N1bWVudCxcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gX2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7IC8vIFdlIG9ubHkgYWxpZ24gd2hlbiBlbGVtZW50IGlzIHZpc2libGVcblxuICAgICAgaWYgKGVsZW1lbnQgJiYgaXNWaXNpYmxlKGVsZW1lbnQpKSB7XG4gICAgICAgIHJlc3VsdCA9IGFsaWduRWxlbWVudChzb3VyY2UsIGVsZW1lbnQsIGFsaWduKTtcbiAgICAgIH0gZWxzZSBpZiAocG9pbnQpIHtcbiAgICAgICAgcmVzdWx0ID0gYWxpZ25Qb2ludChzb3VyY2UsIHBvaW50LCBhbGlnbik7XG4gICAgICB9XG5cbiAgICAgIHJlc3RvcmVGb2N1cyhhY3RpdmVFbGVtZW50LCBzb3VyY2UpO1xuXG4gICAgICBpZiAobGF0ZXN0T25BbGlnbiAmJiByZXN1bHQpIHtcbiAgICAgICAgbGF0ZXN0T25BbGlnbihzb3VyY2UsIHJlc3VsdCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSwgbW9uaXRvckJ1ZmZlclRpbWUpLFxuICAgICAgX3VzZUJ1ZmZlcjIgPSBfc2xpY2VkVG9BcnJheShfdXNlQnVmZmVyLCAyKSxcbiAgICAgIF9mb3JjZUFsaWduID0gX3VzZUJ1ZmZlcjJbMF0sXG4gICAgICBjYW5jZWxGb3JjZUFsaWduID0gX3VzZUJ1ZmZlcjJbMV07IC8vID09PT09PT09PT09PT09PT09PT09PSBFZmZlY3QgPT09PT09PT09PT09PT09PT09PT09XG4gIC8vIExpc3RlbiBmb3IgdGFyZ2V0IHVwZGF0ZWRcblxuXG4gIHZhciByZXNpemVNb25pdG9yID0gUmVhY3QudXNlUmVmKHtcbiAgICBjYW5jZWw6IGZ1bmN0aW9uIGNhbmNlbCgpIHt9XG4gIH0pOyAvLyBMaXN0ZW4gZm9yIHNvdXJjZSB1cGRhdGVkXG5cbiAgdmFyIHNvdXJjZVJlc2l6ZU1vbml0b3IgPSBSZWFjdC51c2VSZWYoe1xuICAgIGNhbmNlbDogZnVuY3Rpb24gY2FuY2VsKCkge31cbiAgfSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBnZXRFbGVtZW50KHRhcmdldCk7XG4gICAgdmFyIHBvaW50ID0gZ2V0UG9pbnQodGFyZ2V0KTtcblxuICAgIGlmIChub2RlUmVmLmN1cnJlbnQgIT09IHNvdXJjZVJlc2l6ZU1vbml0b3IuY3VycmVudC5lbGVtZW50KSB7XG4gICAgICBzb3VyY2VSZXNpemVNb25pdG9yLmN1cnJlbnQuY2FuY2VsKCk7XG4gICAgICBzb3VyY2VSZXNpemVNb25pdG9yLmN1cnJlbnQuZWxlbWVudCA9IG5vZGVSZWYuY3VycmVudDtcbiAgICAgIHNvdXJjZVJlc2l6ZU1vbml0b3IuY3VycmVudC5jYW5jZWwgPSBtb25pdG9yUmVzaXplKG5vZGVSZWYuY3VycmVudCwgX2ZvcmNlQWxpZ24pO1xuICAgIH1cblxuICAgIGlmIChjYWNoZVJlZi5jdXJyZW50LmVsZW1lbnQgIT09IGVsZW1lbnQgfHwgIWlzU2FtZVBvaW50KGNhY2hlUmVmLmN1cnJlbnQucG9pbnQsIHBvaW50KSkge1xuICAgICAgX2ZvcmNlQWxpZ24oKTsgLy8gQWRkIHJlc2l6ZSBvYnNlcnZlclxuXG5cbiAgICAgIGlmIChyZXNpemVNb25pdG9yLmN1cnJlbnQuZWxlbWVudCAhPT0gZWxlbWVudCkge1xuICAgICAgICByZXNpemVNb25pdG9yLmN1cnJlbnQuY2FuY2VsKCk7XG4gICAgICAgIHJlc2l6ZU1vbml0b3IuY3VycmVudC5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgcmVzaXplTW9uaXRvci5jdXJyZW50LmNhbmNlbCA9IG1vbml0b3JSZXNpemUoZWxlbWVudCwgX2ZvcmNlQWxpZ24pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7IC8vIExpc3RlbiBmb3IgZGlzYWJsZWQgY2hhbmdlXG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBfZm9yY2VBbGlnbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW5jZWxGb3JjZUFsaWduKCk7XG4gICAgfVxuICB9LCBbZGlzYWJsZWRdKTsgLy8gTGlzdGVuIGZvciB3aW5kb3cgcmVzaXplXG5cbiAgdmFyIHdpblJlc2l6ZVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobW9uaXRvcldpbmRvd1Jlc2l6ZSkge1xuICAgICAgaWYgKCF3aW5SZXNpemVSZWYuY3VycmVudCkge1xuICAgICAgICB3aW5SZXNpemVSZWYuY3VycmVudCA9IGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgX2ZvcmNlQWxpZ24pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAod2luUmVzaXplUmVmLmN1cnJlbnQpIHtcbiAgICAgIHdpblJlc2l6ZVJlZi5jdXJyZW50LnJlbW92ZSgpO1xuICAgICAgd2luUmVzaXplUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgfSwgW21vbml0b3JXaW5kb3dSZXNpemVdKTsgLy8gQ2xlYXIgYWxsIGlmIHVubW91bnRcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNpemVNb25pdG9yLmN1cnJlbnQuY2FuY2VsKCk7XG4gICAgICBzb3VyY2VSZXNpemVNb25pdG9yLmN1cnJlbnQuY2FuY2VsKCk7XG4gICAgICBpZiAod2luUmVzaXplUmVmLmN1cnJlbnQpIHdpblJlc2l6ZVJlZi5jdXJyZW50LnJlbW92ZSgpO1xuICAgICAgY2FuY2VsRm9yY2VBbGlnbigpO1xuICAgIH07XG4gIH0sIFtdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PSBSZWYgPT09PT09PT09PT09PT09PT09PT09PT1cblxuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb3JjZUFsaWduOiBmdW5jdGlvbiBmb3JjZUFsaWduKCkge1xuICAgICAgICByZXR1cm4gX2ZvcmNlQWxpZ24odHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7IC8vID09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09XG5cbiAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkTm9kZSkpIHtcbiAgICBjaGlsZE5vZGUgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGROb2RlLCB7XG4gICAgICByZWY6IGNvbXBvc2VSZWYoY2hpbGROb2RlLnJlZiwgbm9kZVJlZilcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE5vZGU7XG59O1xuXG52YXIgUmVmQWxpZ24gPSBSZWFjdC5mb3J3YXJkUmVmKEFsaWduKTtcblJlZkFsaWduLmRpc3BsYXlOYW1lID0gJ0FsaWduJztcbmV4cG9ydCBkZWZhdWx0IFJlZkFsaWduOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGNhbGxiYWNrLCBidWZmZXIpIHtcbiAgdmFyIGNhbGxlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIHZhciB0aW1lb3V0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIGNhbmNlbFRyaWdnZXIoKSB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJpZ2dlcihmb3JjZSkge1xuICAgIGlmICghY2FsbGVkUmVmLmN1cnJlbnQgfHwgZm9yY2UgPT09IHRydWUpIHtcbiAgICAgIGlmIChjYWxsYmFjaygpID09PSBmYWxzZSkge1xuICAgICAgICAvLyBOb3QgZGVsYXkgc2luY2UgY2FsbGJhY2sgY2FuY2VsbGVkIHNlbGZcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjYWxsZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICBjYW5jZWxUcmlnZ2VyKCk7XG4gICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB9LCBidWZmZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW5jZWxUcmlnZ2VyKCk7XG4gICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHRyaWdnZXIoKTtcbiAgICAgIH0sIGJ1ZmZlcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFt0cmlnZ2VyLCBmdW5jdGlvbiAoKSB7XG4gICAgY2FsbGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICBjYW5jZWxUcmlnZ2VyKCk7XG4gIH1dO1xufSk7IiwiLy8gZXhwb3J0IHRoaXMgcGFja2FnZSdzIGFwaVxuaW1wb3J0IEFsaWduIGZyb20gJy4vQWxpZ24nO1xuZXhwb3J0IGRlZmF1bHQgQWxpZ247IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJztcbmltcG9ydCBjb250YWlucyBmcm9tIFwicmMtdXRpbC9lcy9Eb20vY29udGFpbnNcIjtcbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVQb2ludChwcmV2LCBuZXh0KSB7XG4gIGlmIChwcmV2ID09PSBuZXh0KSByZXR1cm4gdHJ1ZTtcbiAgaWYgKCFwcmV2IHx8ICFuZXh0KSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKCdwYWdlWCcgaW4gbmV4dCAmJiAncGFnZVknIGluIG5leHQpIHtcbiAgICByZXR1cm4gcHJldi5wYWdlWCA9PT0gbmV4dC5wYWdlWCAmJiBwcmV2LnBhZ2VZID09PSBuZXh0LnBhZ2VZO1xuICB9XG5cbiAgaWYgKCdjbGllbnRYJyBpbiBuZXh0ICYmICdjbGllbnRZJyBpbiBuZXh0KSB7XG4gICAgcmV0dXJuIHByZXYuY2xpZW50WCA9PT0gbmV4dC5jbGllbnRYICYmIHByZXYuY2xpZW50WSA9PT0gbmV4dC5jbGllbnRZO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVGb2N1cyhhY3RpdmVFbGVtZW50LCBjb250YWluZXIpIHtcbiAgLy8gRm9jdXMgYmFjayBpZiBpcyBpbiB0aGUgY29udGFpbmVyXG4gIGlmIChhY3RpdmVFbGVtZW50ICE9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGNvbnRhaW5zKGNvbnRhaW5lciwgYWN0aXZlRWxlbWVudCkgJiYgdHlwZW9mIGFjdGl2ZUVsZW1lbnQuZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBhY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtb25pdG9yUmVzaXplKGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIHZhciBwcmV2V2lkdGggPSBudWxsO1xuICB2YXIgcHJldkhlaWdodCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gb25SZXNpemUoX3JlZikge1xuICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDEpLFxuICAgICAgICB0YXJnZXQgPSBfcmVmMlswXS50YXJnZXQ7XG5cbiAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyh0YXJnZXQpKSByZXR1cm47XG5cbiAgICB2YXIgX3RhcmdldCRnZXRCb3VuZGluZ0NsID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB3aWR0aCA9IF90YXJnZXQkZ2V0Qm91bmRpbmdDbC53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3RhcmdldCRnZXRCb3VuZGluZ0NsLmhlaWdodDtcblxuICAgIHZhciBmaXhlZFdpZHRoID0gTWF0aC5mbG9vcih3aWR0aCk7XG4gICAgdmFyIGZpeGVkSGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQpO1xuXG4gICAgaWYgKHByZXZXaWR0aCAhPT0gZml4ZWRXaWR0aCB8fCBwcmV2SGVpZ2h0ICE9PSBmaXhlZEhlaWdodCkge1xuICAgICAgLy8gaHR0cHM6Ly93ZWJraXQub3JnL2Jsb2cvOTk5Ny9yZXNpemVvYnNlcnZlci1pbi13ZWJraXQvXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgIHdpZHRoOiBmaXhlZFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogZml4ZWRIZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwcmV2V2lkdGggPSBmaXhlZFdpZHRoO1xuICAgIHByZXZIZWlnaHQgPSBmaXhlZEhlaWdodDtcbiAgfVxuXG4gIHZhciByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihvblJlc2l6ZSk7XG5cbiAgaWYgKGVsZW1lbnQpIHtcbiAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH07XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVmYXVsdC1wcm9wcy1tYXRjaC1wcm9wLXR5cGVzLCByZWFjdC9uby1tdWx0aS1jb21wLCByZWFjdC9wcm9wLXR5cGVzICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmluZERPTU5vZGUgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2ZpbmRET01Ob2RlXCI7XG5pbXBvcnQgeyBmaWxsUmVmIH0gZnJvbSBcInJjLXV0aWwvZXMvcmVmXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGdldFRyYW5zaXRpb25OYW1lLCBzdXBwb3J0VHJhbnNpdGlvbiB9IGZyb20gJy4vdXRpbC9tb3Rpb24nO1xuaW1wb3J0IHsgU1RBVFVTX05PTkUsIFNURVBfUFJFUEFSRSwgU1RFUF9TVEFSVCB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB1c2VTdGF0dXMgZnJvbSAnLi9ob29rcy91c2VTdGF0dXMnO1xuaW1wb3J0IERvbVdyYXBwZXIgZnJvbSAnLi9Eb21XcmFwcGVyJztcbmltcG9ydCB7IGlzQWN0aXZlIH0gZnJvbSAnLi9ob29rcy91c2VTdGVwUXVldWUnO1xuLyoqXG4gKiBgdHJhbnNpdGlvblN1cHBvcnRgIGlzIHVzZWQgZm9yIG5vbmUgdHJhbnNpdGlvbiB0ZXN0IGNhc2UuXG4gKiBEZWZhdWx0IHdlIHVzZSBicm93c2VyIHRyYW5zaXRpb24gZXZlbnQgc3VwcG9ydCBjaGVjay5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuQ1NTTW90aW9uKGNvbmZpZykge1xuICB2YXIgdHJhbnNpdGlvblN1cHBvcnQgPSBjb25maWc7XG5cbiAgaWYgKF90eXBlb2YoY29uZmlnKSA9PT0gJ29iamVjdCcpIHtcbiAgICB0cmFuc2l0aW9uU3VwcG9ydCA9IGNvbmZpZy50cmFuc2l0aW9uU3VwcG9ydDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VwcG9ydFRyYW5zaXRpb24ocHJvcHMpIHtcbiAgICByZXR1cm4gISEocHJvcHMubW90aW9uTmFtZSAmJiB0cmFuc2l0aW9uU3VwcG9ydCk7XG4gIH1cblxuICB2YXIgQ1NTTW90aW9uID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICB2YXIgX3Byb3BzJHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgICB2aXNpYmxlID0gX3Byb3BzJHZpc2libGUgPT09IHZvaWQgMCA/IHRydWUgOiBfcHJvcHMkdmlzaWJsZSxcbiAgICAgICAgX3Byb3BzJHJlbW92ZU9uTGVhdmUgPSBwcm9wcy5yZW1vdmVPbkxlYXZlLFxuICAgICAgICByZW1vdmVPbkxlYXZlID0gX3Byb3BzJHJlbW92ZU9uTGVhdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfcHJvcHMkcmVtb3ZlT25MZWF2ZSxcbiAgICAgICAgZm9yY2VSZW5kZXIgPSBwcm9wcy5mb3JjZVJlbmRlcixcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgbW90aW9uTmFtZSA9IHByb3BzLm1vdGlvbk5hbWUsXG4gICAgICAgIGxlYXZlZENsYXNzTmFtZSA9IHByb3BzLmxlYXZlZENsYXNzTmFtZSxcbiAgICAgICAgZXZlbnRQcm9wcyA9IHByb3BzLmV2ZW50UHJvcHM7XG4gICAgdmFyIHN1cHBvcnRNb3Rpb24gPSBpc1N1cHBvcnRUcmFuc2l0aW9uKHByb3BzKTsgLy8gUmVmIHRvIHRoZSByZWFjdCBub2RlLCBpdCBtYXkgYmUgYSBIVE1MRWxlbWVudFxuXG4gICAgdmFyIG5vZGVSZWYgPSB1c2VSZWYoKTsgLy8gUmVmIHRvIHRoZSBkb20gd3JhcHBlciBpbiBjYXNlIHJlZiBjYW4gbm90IHBhc3MgdG8gSFRNTEVsZW1lbnRcblxuICAgIHZhciB3cmFwcGVyTm9kZVJlZiA9IHVzZVJlZigpO1xuXG4gICAgZnVuY3Rpb24gZ2V0RG9tRWxlbWVudCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmaW5kRE9NTm9kZShub2RlUmVmLmN1cnJlbnQgfHwgd3JhcHBlck5vZGVSZWYuY3VycmVudCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIE9ubHkgaGFwcGVuIHdoZW4gYG1vdGlvbkRlYWRsaW5lYCB0cmlnZ2VyIGJ1dCBlbGVtZW50IHJlbW92ZWQuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfdXNlU3RhdHVzID0gdXNlU3RhdHVzKHN1cHBvcnRNb3Rpb24sIHZpc2libGUsIGdldERvbUVsZW1lbnQsIHByb3BzKSxcbiAgICAgICAgX3VzZVN0YXR1czIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdHVzLCA0KSxcbiAgICAgICAgc3RhdHVzID0gX3VzZVN0YXR1czJbMF0sXG4gICAgICAgIHN0YXR1c1N0ZXAgPSBfdXNlU3RhdHVzMlsxXSxcbiAgICAgICAgc3RhdHVzU3R5bGUgPSBfdXNlU3RhdHVzMlsyXSxcbiAgICAgICAgbWVyZ2VkVmlzaWJsZSA9IF91c2VTdGF0dXMyWzNdOyAvLyBSZWNvcmQgd2hldGhlciBjb250ZW50IGhhcyByZW5kZWRcbiAgICAvLyBXaWxsIHJldHVybiBudWxsIGZvciB1bi1yZW5kZXJlZCBldmVuIHdoZW4gYHJlbW92ZU9uTGVhdmU9e2ZhbHNlfWBcblxuXG4gICAgdmFyIHJlbmRlcmVkUmVmID0gUmVhY3QudXNlUmVmKG1lcmdlZFZpc2libGUpO1xuXG4gICAgaWYgKG1lcmdlZFZpc2libGUpIHtcbiAgICAgIHJlbmRlcmVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PSBSZWZzID09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gICAgdmFyIG9yaWdpblJlZiA9IHVzZVJlZihyZWYpO1xuICAgIG9yaWdpblJlZi5jdXJyZW50ID0gcmVmO1xuICAgIHZhciBzZXROb2RlUmVmID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIG5vZGVSZWYuY3VycmVudCA9IG5vZGU7XG4gICAgICBmaWxsUmVmKG9yaWdpblJlZi5jdXJyZW50LCBub2RlKTtcbiAgICB9LCBbXSk7IC8vID09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09XG5cbiAgICB2YXIgbW90aW9uQ2hpbGRyZW47XG5cbiAgICB2YXIgbWVyZ2VkUHJvcHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGV2ZW50UHJvcHMpLCB7fSwge1xuICAgICAgdmlzaWJsZTogdmlzaWJsZVxuICAgIH0pO1xuXG4gICAgaWYgKCFjaGlsZHJlbikge1xuICAgICAgLy8gTm8gY2hpbGRyZW5cbiAgICAgIG1vdGlvbkNoaWxkcmVuID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gU1RBVFVTX05PTkUgfHwgIWlzU3VwcG9ydFRyYW5zaXRpb24ocHJvcHMpKSB7XG4gICAgICAvLyBTdGFibGUgY2hpbGRyZW5cbiAgICAgIGlmIChtZXJnZWRWaXNpYmxlKSB7XG4gICAgICAgIG1vdGlvbkNoaWxkcmVuID0gY2hpbGRyZW4oX29iamVjdFNwcmVhZCh7fSwgbWVyZ2VkUHJvcHMpLCBzZXROb2RlUmVmKTtcbiAgICAgIH0gZWxzZSBpZiAoIXJlbW92ZU9uTGVhdmUgJiYgcmVuZGVyZWRSZWYuY3VycmVudCkge1xuICAgICAgICBtb3Rpb25DaGlsZHJlbiA9IGNoaWxkcmVuKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbWVyZ2VkUHJvcHMpLCB7fSwge1xuICAgICAgICAgIGNsYXNzTmFtZTogbGVhdmVkQ2xhc3NOYW1lXG4gICAgICAgIH0pLCBzZXROb2RlUmVmKTtcbiAgICAgIH0gZWxzZSBpZiAoZm9yY2VSZW5kZXIpIHtcbiAgICAgICAgbW90aW9uQ2hpbGRyZW4gPSBjaGlsZHJlbihfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG1lcmdlZFByb3BzKSwge30sIHtcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgfVxuICAgICAgICB9KSwgc2V0Tm9kZVJlZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3Rpb25DaGlsZHJlbiA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgLy8gSW4gbW90aW9uXG4gICAgICB2YXIgc3RhdHVzU3VmZml4O1xuXG4gICAgICBpZiAoc3RhdHVzU3RlcCA9PT0gU1RFUF9QUkVQQVJFKSB7XG4gICAgICAgIHN0YXR1c1N1ZmZpeCA9ICdwcmVwYXJlJztcbiAgICAgIH0gZWxzZSBpZiAoaXNBY3RpdmUoc3RhdHVzU3RlcCkpIHtcbiAgICAgICAgc3RhdHVzU3VmZml4ID0gJ2FjdGl2ZSc7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1c1N0ZXAgPT09IFNURVBfU1RBUlQpIHtcbiAgICAgICAgc3RhdHVzU3VmZml4ID0gJ3N0YXJ0JztcbiAgICAgIH1cblxuICAgICAgbW90aW9uQ2hpbGRyZW4gPSBjaGlsZHJlbihfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG1lcmdlZFByb3BzKSwge30sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGdldFRyYW5zaXRpb25OYW1lKG1vdGlvbk5hbWUsIHN0YXR1cyksIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGdldFRyYW5zaXRpb25OYW1lKG1vdGlvbk5hbWUsIFwiXCIuY29uY2F0KHN0YXR1cywgXCItXCIpLmNvbmNhdChzdGF0dXNTdWZmaXgpKSwgc3RhdHVzU3VmZml4KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBtb3Rpb25OYW1lLCB0eXBlb2YgbW90aW9uTmFtZSA9PT0gJ3N0cmluZycpLCBfY2xhc3NOYW1lcykpLFxuICAgICAgICBzdHlsZTogc3RhdHVzU3R5bGVcbiAgICAgIH0pLCBzZXROb2RlUmVmKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRG9tV3JhcHBlciwge1xuICAgICAgcmVmOiB3cmFwcGVyTm9kZVJlZlxuICAgIH0sIG1vdGlvbkNoaWxkcmVuKTtcbiAgfSk7XG4gIENTU01vdGlvbi5kaXNwbGF5TmFtZSA9ICdDU1NNb3Rpb24nO1xuICByZXR1cm4gQ1NTTW90aW9uO1xufVxuZXhwb3J0IGRlZmF1bHQgZ2VuQ1NTTW90aW9uKHN1cHBvcnRUcmFuc2l0aW9uKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcblxuLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBPcmlnaW5DU1NNb3Rpb24gZnJvbSAnLi9DU1NNb3Rpb24nO1xuaW1wb3J0IHsgc3VwcG9ydFRyYW5zaXRpb24gfSBmcm9tICcuL3V0aWwvbW90aW9uJztcbmltcG9ydCB7IFNUQVRVU19BREQsIFNUQVRVU19LRUVQLCBTVEFUVVNfUkVNT1ZFLCBTVEFUVVNfUkVNT1ZFRCwgZGlmZktleXMsIHBhcnNlS2V5cyB9IGZyb20gJy4vdXRpbC9kaWZmJztcbnZhciBNT1RJT05fUFJPUF9OQU1FUyA9IFsnZXZlbnRQcm9wcycsICd2aXNpYmxlJywgJ2NoaWxkcmVuJywgJ21vdGlvbk5hbWUnLCAnbW90aW9uQXBwZWFyJywgJ21vdGlvbkVudGVyJywgJ21vdGlvbkxlYXZlJywgJ21vdGlvbkxlYXZlSW1tZWRpYXRlbHknLCAnbW90aW9uRGVhZGxpbmUnLCAncmVtb3ZlT25MZWF2ZScsICdsZWF2ZWRDbGFzc05hbWUnLCAnb25BcHBlYXJTdGFydCcsICdvbkFwcGVhckFjdGl2ZScsICdvbkFwcGVhckVuZCcsICdvbkVudGVyU3RhcnQnLCAnb25FbnRlckFjdGl2ZScsICdvbkVudGVyRW5kJywgJ29uTGVhdmVTdGFydCcsICdvbkxlYXZlQWN0aXZlJywgJ29uTGVhdmVFbmQnXTtcbi8qKlxuICogR2VuZXJhdGUgYSBDU1NNb3Rpb25MaXN0IGNvbXBvbmVudCB3aXRoIGNvbmZpZ1xuICogQHBhcmFtIHRyYW5zaXRpb25TdXBwb3J0IE5vIG5lZWQgc2luY2UgQ1NTTW90aW9uTGlzdCBubyBsb25nZXIgZGVwZW5kcyBvbiB0cmFuc2l0aW9uIHN1cHBvcnRcbiAqIEBwYXJhbSBDU1NNb3Rpb24gQ1NTTW90aW9uIGNvbXBvbmVudFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5DU1NNb3Rpb25MaXN0KHRyYW5zaXRpb25TdXBwb3J0KSB7XG4gIHZhciBDU1NNb3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IE9yaWdpbkNTU01vdGlvbjtcblxuICB2YXIgQ1NTTW90aW9uTGlzdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDU1NNb3Rpb25MaXN0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQ1NTTW90aW9uTGlzdCk7XG5cbiAgICBmdW5jdGlvbiBDU1NNb3Rpb25MaXN0KCkge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ1NTTW90aW9uTGlzdCk7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAga2V5RW50aXRpZXM6IFtdXG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5yZW1vdmVLZXkgPSBmdW5jdGlvbiAocmVtb3ZlS2V5KSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgdmFyIGtleUVudGl0aWVzID0gX3JlZi5rZXlFbnRpdGllcztcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5RW50aXRpZXM6IGtleUVudGl0aWVzLm1hcChmdW5jdGlvbiAoZW50aXR5KSB7XG4gICAgICAgICAgICAgIGlmIChlbnRpdHkua2V5ICE9PSByZW1vdmVLZXkpIHJldHVybiBlbnRpdHk7XG4gICAgICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGVudGl0eSksIHt9LCB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiBTVEFUVVNfUkVNT1ZFRFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENTU01vdGlvbkxpc3QsIFt7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIga2V5RW50aXRpZXMgPSB0aGlzLnN0YXRlLmtleUVudGl0aWVzO1xuXG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjb21wb25lbnQgPSBfdGhpcyRwcm9wcy5jb21wb25lbnQsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgX29uVmlzaWJsZUNoYW5nZWQgPSBfdGhpcyRwcm9wcy5vblZpc2libGVDaGFuZ2VkLFxuICAgICAgICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzLCBbXCJjb21wb25lbnRcIiwgXCJjaGlsZHJlblwiLCBcIm9uVmlzaWJsZUNoYW5nZWRcIl0pO1xuXG4gICAgICAgIHZhciBDb21wb25lbnQgPSBjb21wb25lbnQgfHwgUmVhY3QuRnJhZ21lbnQ7XG4gICAgICAgIHZhciBtb3Rpb25Qcm9wcyA9IHt9O1xuICAgICAgICBNT1RJT05fUFJPUF9OQU1FUy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgbW90aW9uUHJvcHNbcHJvcF0gPSByZXN0UHJvcHNbcHJvcF07XG4gICAgICAgICAgZGVsZXRlIHJlc3RQcm9wc1twcm9wXTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZSByZXN0UHJvcHMua2V5cztcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgcmVzdFByb3BzLCBrZXlFbnRpdGllcy5tYXAoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgdmFyIHN0YXR1cyA9IF9yZWYyLnN0YXR1cyxcbiAgICAgICAgICAgICAgZXZlbnRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgW1wic3RhdHVzXCJdKTtcblxuICAgICAgICAgIHZhciB2aXNpYmxlID0gc3RhdHVzID09PSBTVEFUVVNfQUREIHx8IHN0YXR1cyA9PT0gU1RBVFVTX0tFRVA7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENTU01vdGlvbiwgX2V4dGVuZHMoe30sIG1vdGlvblByb3BzLCB7XG4gICAgICAgICAgICBrZXk6IGV2ZW50UHJvcHMua2V5LFxuICAgICAgICAgICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgICAgIGV2ZW50UHJvcHM6IGV2ZW50UHJvcHMsXG4gICAgICAgICAgICBvblZpc2libGVDaGFuZ2VkOiBmdW5jdGlvbiBvblZpc2libGVDaGFuZ2VkKGNoYW5nZWRWaXNpYmxlKSB7XG4gICAgICAgICAgICAgIF9vblZpc2libGVDaGFuZ2VkID09PSBudWxsIHx8IF9vblZpc2libGVDaGFuZ2VkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb25WaXNpYmxlQ2hhbmdlZChjaGFuZ2VkVmlzaWJsZSwge1xuICAgICAgICAgICAgICAgIGtleTogZXZlbnRQcm9wcy5rZXlcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKCFjaGFuZ2VkVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5yZW1vdmVLZXkoZXZlbnRQcm9wcy5rZXkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksIGNoaWxkcmVuKTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhfcmVmMywgX3JlZjQpIHtcbiAgICAgICAgdmFyIGtleXMgPSBfcmVmMy5rZXlzO1xuICAgICAgICB2YXIga2V5RW50aXRpZXMgPSBfcmVmNC5rZXlFbnRpdGllcztcbiAgICAgICAgdmFyIHBhcnNlZEtleU9iamVjdHMgPSBwYXJzZUtleXMoa2V5cyk7XG4gICAgICAgIHZhciBtaXhlZEtleUVudGl0aWVzID0gZGlmZktleXMoa2V5RW50aXRpZXMsIHBhcnNlZEtleU9iamVjdHMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtleUVudGl0aWVzOiBtaXhlZEtleUVudGl0aWVzLmZpbHRlcihmdW5jdGlvbiAoZW50aXR5KSB7XG4gICAgICAgICAgICB2YXIgcHJldkVudGl0eSA9IGtleUVudGl0aWVzLmZpbmQoZnVuY3Rpb24gKF9yZWY1KSB7XG4gICAgICAgICAgICAgIHZhciBrZXkgPSBfcmVmNS5rZXk7XG4gICAgICAgICAgICAgIHJldHVybiBlbnRpdHkua2V5ID09PSBrZXk7XG4gICAgICAgICAgICB9KTsgLy8gUmVtb3ZlIGlmIGFscmVhZHkgbWFyayBhcyByZW1vdmVkXG5cbiAgICAgICAgICAgIGlmIChwcmV2RW50aXR5ICYmIHByZXZFbnRpdHkuc3RhdHVzID09PSBTVEFUVVNfUkVNT1ZFRCAmJiBlbnRpdHkuc3RhdHVzID09PSBTVEFUVVNfUkVNT1ZFKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ1NTTW90aW9uTGlzdDtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIENTU01vdGlvbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBvbmVudDogJ2RpdidcbiAgfTtcbiAgcmV0dXJuIENTU01vdGlvbkxpc3Q7XG59XG5leHBvcnQgZGVmYXVsdCBnZW5DU1NNb3Rpb25MaXN0KHN1cHBvcnRUcmFuc2l0aW9uKTsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgRG9tV3JhcHBlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRG9tV3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihEb21XcmFwcGVyKTtcblxuICBmdW5jdGlvbiBEb21XcmFwcGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEb21XcmFwcGVyKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEb21XcmFwcGVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERvbVdyYXBwZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IERvbVdyYXBwZXI7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYW5pbWF0aW9uRW5kTmFtZSwgdHJhbnNpdGlvbkVuZE5hbWUgfSBmcm9tICcuLi91dGlsL21vdGlvbic7XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHZhciBjYWNoZUVsZW1lbnRSZWYgPSB1c2VSZWYoKTsgLy8gQ2FjaGUgY2FsbGJhY2tcblxuICB2YXIgY2FsbGJhY2tSZWYgPSB1c2VSZWYoY2FsbGJhY2spO1xuICBjYWxsYmFja1JlZi5jdXJyZW50ID0gY2FsbGJhY2s7IC8vIEludGVybmFsIG1vdGlvbiBldmVudCBoYW5kbGVyXG5cbiAgdmFyIG9uSW50ZXJuYWxNb3Rpb25FbmQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjYWxsYmFja1JlZi5jdXJyZW50KGV2ZW50KTtcbiAgfSwgW10pOyAvLyBSZW1vdmUgZXZlbnRzXG5cbiAgZnVuY3Rpb24gcmVtb3ZlTW90aW9uRXZlbnRzKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FbmROYW1lLCBvbkludGVybmFsTW90aW9uRW5kKTtcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmROYW1lLCBvbkludGVybmFsTW90aW9uRW5kKTtcbiAgICB9XG4gIH0gLy8gUGF0Y2ggZXZlbnRzXG5cblxuICBmdW5jdGlvbiBwYXRjaE1vdGlvbkV2ZW50cyhlbGVtZW50KSB7XG4gICAgaWYgKGNhY2hlRWxlbWVudFJlZi5jdXJyZW50ICYmIGNhY2hlRWxlbWVudFJlZi5jdXJyZW50ICE9PSBlbGVtZW50KSB7XG4gICAgICByZW1vdmVNb3Rpb25FdmVudHMoY2FjaGVFbGVtZW50UmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQgIT09IGNhY2hlRWxlbWVudFJlZi5jdXJyZW50KSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZE5hbWUsIG9uSW50ZXJuYWxNb3Rpb25FbmQpO1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZE5hbWUsIG9uSW50ZXJuYWxNb3Rpb25FbmQpOyAvLyBTYXZlIGFzIGNhY2hlIGluIGNhc2UgZG9tIHJlbW92ZWQgdHJpZ2dlciBieSBgbW90aW9uRGVhZGxpbmVgXG5cbiAgICAgIGNhY2hlRWxlbWVudFJlZi5jdXJyZW50ID0gZWxlbWVudDtcbiAgICB9XG4gIH0gLy8gQ2xlYW4gdXAgd2hlbiByZW1vdmVkXG5cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZW1vdmVNb3Rpb25FdmVudHMoY2FjaGVFbGVtZW50UmVmLmN1cnJlbnQpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIFtwYXRjaE1vdGlvbkV2ZW50cywgcmVtb3ZlTW90aW9uRXZlbnRzXTtcbn0pOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNhblVzZURvbSBmcm9tIFwicmMtdXRpbC9lcy9Eb20vY2FuVXNlRG9tXCI7IC8vIEl0J3Mgc2FmZSB0byB1c2UgYHVzZUxheW91dEVmZmVjdGAgYnV0IHRoZSB3YXJuaW5nIGlzIGFubm95aW5nXG5cbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gY2FuVXNlRG9tKCkgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3Q7XG5leHBvcnQgZGVmYXVsdCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByYWYgZnJvbSBcInJjLXV0aWwvZXMvcmFmXCI7XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKCkge1xuICB2YXIgbmV4dEZyYW1lUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIGNhbmNlbE5leHRGcmFtZSgpIHtcbiAgICByYWYuY2FuY2VsKG5leHRGcmFtZVJlZi5jdXJyZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRGcmFtZShjYWxsYmFjaykge1xuICAgIHZhciBkZWxheSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMjtcbiAgICBjYW5jZWxOZXh0RnJhbWUoKTtcbiAgICB2YXIgbmV4dEZyYW1lSWQgPSByYWYoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRlbGF5IDw9IDEpIHtcbiAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgIGlzQ2FuY2VsZWQ6IGZ1bmN0aW9uIGlzQ2FuY2VsZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dEZyYW1lSWQgIT09IG5leHRGcmFtZVJlZi5jdXJyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0RnJhbWUoY2FsbGJhY2ssIGRlbGF5IC0gMSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbmV4dEZyYW1lUmVmLmN1cnJlbnQgPSBuZXh0RnJhbWVJZDtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbmNlbE5leHRGcmFtZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIFtuZXh0RnJhbWUsIGNhbmNlbE5leHRGcmFtZV07XG59KTsiLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU1vdW50U3RhdHVzKGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgZGVzdHJveVJlZiA9IHVzZVJlZihmYWxzZSk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIHZhbCA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRWYWwgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIGZ1bmN0aW9uIHNldFZhbHVlKG5leHQpIHtcbiAgICBpZiAoIWRlc3Ryb3lSZWYuY3VycmVudCkge1xuICAgICAgc2V0VmFsKG5leHQpO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlc3Ryb3lSZWYuY3VycmVudCA9IHRydWU7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gW3ZhbCwgc2V0VmFsdWVdO1xufSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNUQVRVU19BUFBFQVIsIFNUQVRVU19OT05FLCBTVEFUVVNfTEVBVkUsIFNUQVRVU19FTlRFUiwgU1RFUF9QUkVQQVJFLCBTVEVQX1NUQVJULCBTVEVQX0FDVElWRSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgdXNlU3RhdGUgZnJvbSAnLi91c2VTdGF0ZSc7XG5pbXBvcnQgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCBmcm9tICcuL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHVzZVN0ZXBRdWV1ZSwgeyBEb1N0ZXAsIFNraXBTdGVwLCBpc0FjdGl2ZSB9IGZyb20gJy4vdXNlU3RlcFF1ZXVlJztcbmltcG9ydCB1c2VEb21Nb3Rpb25FdmVudHMgZnJvbSAnLi91c2VEb21Nb3Rpb25FdmVudHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3RhdHVzKHN1cHBvcnRNb3Rpb24sIHZpc2libGUsIGdldEVsZW1lbnQsIF9yZWYpIHtcbiAgdmFyIF9yZWYkbW90aW9uRW50ZXIgPSBfcmVmLm1vdGlvbkVudGVyLFxuICAgICAgbW90aW9uRW50ZXIgPSBfcmVmJG1vdGlvbkVudGVyID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRtb3Rpb25FbnRlcixcbiAgICAgIF9yZWYkbW90aW9uQXBwZWFyID0gX3JlZi5tb3Rpb25BcHBlYXIsXG4gICAgICBtb3Rpb25BcHBlYXIgPSBfcmVmJG1vdGlvbkFwcGVhciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkbW90aW9uQXBwZWFyLFxuICAgICAgX3JlZiRtb3Rpb25MZWF2ZSA9IF9yZWYubW90aW9uTGVhdmUsXG4gICAgICBtb3Rpb25MZWF2ZSA9IF9yZWYkbW90aW9uTGVhdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJG1vdGlvbkxlYXZlLFxuICAgICAgbW90aW9uRGVhZGxpbmUgPSBfcmVmLm1vdGlvbkRlYWRsaW5lLFxuICAgICAgbW90aW9uTGVhdmVJbW1lZGlhdGVseSA9IF9yZWYubW90aW9uTGVhdmVJbW1lZGlhdGVseSxcbiAgICAgIG9uQXBwZWFyUHJlcGFyZSA9IF9yZWYub25BcHBlYXJQcmVwYXJlLFxuICAgICAgb25FbnRlclByZXBhcmUgPSBfcmVmLm9uRW50ZXJQcmVwYXJlLFxuICAgICAgb25MZWF2ZVByZXBhcmUgPSBfcmVmLm9uTGVhdmVQcmVwYXJlLFxuICAgICAgb25BcHBlYXJTdGFydCA9IF9yZWYub25BcHBlYXJTdGFydCxcbiAgICAgIG9uRW50ZXJTdGFydCA9IF9yZWYub25FbnRlclN0YXJ0LFxuICAgICAgb25MZWF2ZVN0YXJ0ID0gX3JlZi5vbkxlYXZlU3RhcnQsXG4gICAgICBvbkFwcGVhckFjdGl2ZSA9IF9yZWYub25BcHBlYXJBY3RpdmUsXG4gICAgICBvbkVudGVyQWN0aXZlID0gX3JlZi5vbkVudGVyQWN0aXZlLFxuICAgICAgb25MZWF2ZUFjdGl2ZSA9IF9yZWYub25MZWF2ZUFjdGl2ZSxcbiAgICAgIG9uQXBwZWFyRW5kID0gX3JlZi5vbkFwcGVhckVuZCxcbiAgICAgIG9uRW50ZXJFbmQgPSBfcmVmLm9uRW50ZXJFbmQsXG4gICAgICBvbkxlYXZlRW5kID0gX3JlZi5vbkxlYXZlRW5kLFxuICAgICAgb25WaXNpYmxlQ2hhbmdlZCA9IF9yZWYub25WaXNpYmxlQ2hhbmdlZDtcblxuICAvLyBVc2VkIGZvciBvdXRlciByZW5kZXIgdXNhZ2UgdG8gYXZvaWQgYHZpc2libGU6IGZhbHNlICYgc3RhdHVzOiBub25lYCB0byByZW5kZXIgbm90aGluZ1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgYXN5bmNWaXNpYmxlID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldEFzeW5jVmlzaWJsZSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShTVEFUVVNfTk9ORSksXG4gICAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgICBzdGF0dXMgPSBfdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0U3RhdHVzID0gX3VzZVN0YXRlNFsxXTtcblxuICB2YXIgX3VzZVN0YXRlNSA9IHVzZVN0YXRlKG51bGwpLFxuICAgICAgX3VzZVN0YXRlNiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTUsIDIpLFxuICAgICAgc3R5bGUgPSBfdXNlU3RhdGU2WzBdLFxuICAgICAgc2V0U3R5bGUgPSBfdXNlU3RhdGU2WzFdO1xuXG4gIHZhciBtb3VudGVkUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIGRlYWRsaW5lUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgZGVzdHJveWVkUmVmID0gdXNlUmVmKGZhbHNlKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IERvbSBOb2RlID09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBjYWNoZUVsZW1lbnRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgZnVuY3Rpb24gZ2V0RG9tRWxlbWVudCgpIHtcbiAgICB2YXIgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICByZXR1cm4gZWxlbWVudCB8fCBjYWNoZUVsZW1lbnRSZWYuY3VycmVudDtcbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBNb3Rpb24gRW5kID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgYWN0aXZlUmVmID0gdXNlUmVmKGZhbHNlKTtcblxuICBmdW5jdGlvbiBvbkludGVybmFsTW90aW9uRW5kKGV2ZW50KSB7XG4gICAgdmFyIGVsZW1lbnQgPSBnZXREb21FbGVtZW50KCk7XG5cbiAgICBpZiAoZXZlbnQgJiYgIWV2ZW50LmRlYWRsaW5lICYmIGV2ZW50LnRhcmdldCAhPT0gZWxlbWVudCkge1xuICAgICAgLy8gZXZlbnQgZXhpc3RzXG4gICAgICAvLyBub3QgaW5pdGlhdGVkIGJ5IGRlYWRsaW5lXG4gICAgICAvLyB0cmFuc2l0aW9uRW5kIG5vdCBmaXJlZCBieSBpbm5lciBlbGVtZW50c1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjYW5FbmQ7XG5cbiAgICBpZiAoc3RhdHVzID09PSBTVEFUVVNfQVBQRUFSICYmIGFjdGl2ZVJlZi5jdXJyZW50KSB7XG4gICAgICBjYW5FbmQgPSBvbkFwcGVhckVuZCA9PT0gbnVsbCB8fCBvbkFwcGVhckVuZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25BcHBlYXJFbmQoZWxlbWVudCwgZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBTVEFUVVNfRU5URVIgJiYgYWN0aXZlUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNhbkVuZCA9IG9uRW50ZXJFbmQgPT09IG51bGwgfHwgb25FbnRlckVuZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25FbnRlckVuZChlbGVtZW50LCBldmVudCk7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IFNUQVRVU19MRUFWRSAmJiBhY3RpdmVSZWYuY3VycmVudCkge1xuICAgICAgY2FuRW5kID0gb25MZWF2ZUVuZCA9PT0gbnVsbCB8fCBvbkxlYXZlRW5kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkxlYXZlRW5kKGVsZW1lbnQsIGV2ZW50KTtcbiAgICB9IC8vIE9ubHkgdXBkYXRlIHN0YXR1cyB3aGVuIGBjYW5FbmRgIGFuZCBub3QgZGVzdHJveWVkXG5cblxuICAgIGlmIChjYW5FbmQgIT09IGZhbHNlICYmICFkZXN0cm95ZWRSZWYuY3VycmVudCkge1xuICAgICAgc2V0U3RhdHVzKFNUQVRVU19OT05FKTtcbiAgICAgIHNldFN0eWxlKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfdXNlRG9tTW90aW9uRXZlbnRzID0gdXNlRG9tTW90aW9uRXZlbnRzKG9uSW50ZXJuYWxNb3Rpb25FbmQpLFxuICAgICAgX3VzZURvbU1vdGlvbkV2ZW50czIgPSBfc2xpY2VkVG9BcnJheShfdXNlRG9tTW90aW9uRXZlbnRzLCAxKSxcbiAgICAgIHBhdGNoTW90aW9uRXZlbnRzID0gX3VzZURvbU1vdGlvbkV2ZW50czJbMF07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFN0ZXAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBldmVudEhhbmRsZXJzID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWYyLCBfcmVmMywgX3JlZjQ7XG5cbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSAnYXBwZWFyJzpcbiAgICAgICAgcmV0dXJuIF9yZWYyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgU1RFUF9QUkVQQVJFLCBvbkFwcGVhclByZXBhcmUpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIFNURVBfU1RBUlQsIG9uQXBwZWFyU3RhcnQpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIFNURVBfQUNUSVZFLCBvbkFwcGVhckFjdGl2ZSksIF9yZWYyO1xuXG4gICAgICBjYXNlICdlbnRlcic6XG4gICAgICAgIHJldHVybiBfcmVmMyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3JlZjMsIFNURVBfUFJFUEFSRSwgb25FbnRlclByZXBhcmUpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjMsIFNURVBfU1RBUlQsIG9uRW50ZXJTdGFydCksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMywgU1RFUF9BQ1RJVkUsIG9uRW50ZXJBY3RpdmUpLCBfcmVmMztcblxuICAgICAgY2FzZSAnbGVhdmUnOlxuICAgICAgICByZXR1cm4gX3JlZjQgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9yZWY0LCBTVEVQX1BSRVBBUkUsIG9uTGVhdmVQcmVwYXJlKSwgX2RlZmluZVByb3BlcnR5KF9yZWY0LCBTVEVQX1NUQVJULCBvbkxlYXZlU3RhcnQpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjQsIFNURVBfQUNUSVZFLCBvbkxlYXZlQWN0aXZlKSwgX3JlZjQ7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH0sIFtzdGF0dXNdKTtcblxuICB2YXIgX3VzZVN0ZXBRdWV1ZSA9IHVzZVN0ZXBRdWV1ZShzdGF0dXMsIGZ1bmN0aW9uIChuZXdTdGVwKSB7XG4gICAgLy8gT25seSBwcmVwYXJlIHN0ZXAgY2FuIGJlIHNraXBcbiAgICBpZiAobmV3U3RlcCA9PT0gU1RFUF9QUkVQQVJFKSB7XG4gICAgICB2YXIgb25QcmVwYXJlID0gZXZlbnRIYW5kbGVyc1tTVEVQX1BSRVBBUkVdO1xuXG4gICAgICBpZiAoIW9uUHJlcGFyZSkge1xuICAgICAgICByZXR1cm4gU2tpcFN0ZXA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvblByZXBhcmUoZ2V0RG9tRWxlbWVudCgpKTtcbiAgICB9IC8vIFJlc3Qgc3RlcCBpcyBzeW5jIHVwZGF0ZVxuXG5cbiAgICAvLyBSZXN0IHN0ZXAgaXMgc3luYyB1cGRhdGVcbiAgICBpZiAoc3RlcCBpbiBldmVudEhhbmRsZXJzKSB7XG4gICAgICB2YXIgX2V2ZW50SGFuZGxlcnMkc3RlcDtcblxuICAgICAgc2V0U3R5bGUoKChfZXZlbnRIYW5kbGVycyRzdGVwID0gZXZlbnRIYW5kbGVyc1tzdGVwXSkgPT09IG51bGwgfHwgX2V2ZW50SGFuZGxlcnMkc3RlcCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50SGFuZGxlcnMkc3RlcC5jYWxsKGV2ZW50SGFuZGxlcnMsIGdldERvbUVsZW1lbnQoKSwgbnVsbCkpIHx8IG51bGwpO1xuICAgIH1cblxuICAgIGlmIChzdGVwID09PSBTVEVQX0FDVElWRSkge1xuICAgICAgLy8gUGF0Y2ggZXZlbnRzIHdoZW4gbW90aW9uIG5lZWRlZFxuICAgICAgcGF0Y2hNb3Rpb25FdmVudHMoZ2V0RG9tRWxlbWVudCgpKTtcblxuICAgICAgaWYgKG1vdGlvbkRlYWRsaW5lID4gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoZGVhZGxpbmVSZWYuY3VycmVudCk7XG4gICAgICAgIGRlYWRsaW5lUmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvbkludGVybmFsTW90aW9uRW5kKHtcbiAgICAgICAgICAgIGRlYWRsaW5lOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIG1vdGlvbkRlYWRsaW5lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRG9TdGVwO1xuICB9KSxcbiAgICAgIF91c2VTdGVwUXVldWUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0ZXBRdWV1ZSwgMiksXG4gICAgICBzdGFydFN0ZXAgPSBfdXNlU3RlcFF1ZXVlMlswXSxcbiAgICAgIHN0ZXAgPSBfdXNlU3RlcFF1ZXVlMlsxXTtcblxuICB2YXIgYWN0aXZlID0gaXNBY3RpdmUoc3RlcCk7XG4gIGFjdGl2ZVJlZi5jdXJyZW50ID0gYWN0aXZlOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IFN0YXR1cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFVwZGF0ZSB3aXRoIG5ldyBzdGF0dXNcblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzZXRBc3luY1Zpc2libGUodmlzaWJsZSk7XG4gICAgdmFyIGlzTW91bnRlZCA9IG1vdW50ZWRSZWYuY3VycmVudDtcbiAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgaWYgKCFzdXBwb3J0TW90aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRTdGF0dXM7IC8vIEFwcGVhclxuXG4gICAgaWYgKCFpc01vdW50ZWQgJiYgdmlzaWJsZSAmJiBtb3Rpb25BcHBlYXIpIHtcbiAgICAgIG5leHRTdGF0dXMgPSBTVEFUVVNfQVBQRUFSO1xuICAgIH0gLy8gRW50ZXJcblxuXG4gICAgaWYgKGlzTW91bnRlZCAmJiB2aXNpYmxlICYmIG1vdGlvbkVudGVyKSB7XG4gICAgICBuZXh0U3RhdHVzID0gU1RBVFVTX0VOVEVSO1xuICAgIH0gLy8gTGVhdmVcblxuXG4gICAgaWYgKGlzTW91bnRlZCAmJiAhdmlzaWJsZSAmJiBtb3Rpb25MZWF2ZSB8fCAhaXNNb3VudGVkICYmIG1vdGlvbkxlYXZlSW1tZWRpYXRlbHkgJiYgIXZpc2libGUgJiYgbW90aW9uTGVhdmUpIHtcbiAgICAgIG5leHRTdGF0dXMgPSBTVEFUVVNfTEVBVkU7XG4gICAgfSAvLyBVcGRhdGUgdG8gbmV4dCBzdGF0dXNcblxuXG4gICAgaWYgKG5leHRTdGF0dXMpIHtcbiAgICAgIHNldFN0YXR1cyhuZXh0U3RhdHVzKTtcbiAgICAgIHN0YXJ0U3RlcCgpO1xuICAgIH1cbiAgfSwgW3Zpc2libGVdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBFZmZlY3QgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBSZXNldCB3aGVuIG1vdGlvbiBjaGFuZ2VkXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIC8vIENhbmNlbCBhcHBlYXJcbiAgICBzdGF0dXMgPT09IFNUQVRVU19BUFBFQVIgJiYgIW1vdGlvbkFwcGVhciB8fCAvLyBDYW5jZWwgZW50ZXJcbiAgICBzdGF0dXMgPT09IFNUQVRVU19FTlRFUiAmJiAhbW90aW9uRW50ZXIgfHwgLy8gQ2FuY2VsIGxlYXZlXG4gICAgc3RhdHVzID09PSBTVEFUVVNfTEVBVkUgJiYgIW1vdGlvbkxlYXZlKSB7XG4gICAgICBzZXRTdGF0dXMoU1RBVFVTX05PTkUpO1xuICAgIH1cbiAgfSwgW21vdGlvbkFwcGVhciwgbW90aW9uRW50ZXIsIG1vdGlvbkxlYXZlXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFyVGltZW91dChkZWFkbGluZVJlZi5jdXJyZW50KTtcbiAgICAgIGRlc3Ryb3llZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9O1xuICB9LCBbXSk7IC8vIFRyaWdnZXIgYG9uVmlzaWJsZUNoYW5nZWRgXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYXN5bmNWaXNpYmxlICE9PSB1bmRlZmluZWQgJiYgc3RhdHVzID09PSBTVEFUVVNfTk9ORSkge1xuICAgICAgb25WaXNpYmxlQ2hhbmdlZCA9PT0gbnVsbCB8fCBvblZpc2libGVDaGFuZ2VkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblZpc2libGVDaGFuZ2VkKGFzeW5jVmlzaWJsZSk7XG4gICAgfVxuICB9LCBbYXN5bmNWaXNpYmxlLCBzdGF0dXNdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTdHlsZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBtZXJnZWRTdHlsZSA9IHN0eWxlO1xuXG4gIGlmIChldmVudEhhbmRsZXJzW1NURVBfUFJFUEFSRV0gJiYgc3RlcCA9PT0gU1RFUF9TVEFSVCkge1xuICAgIG1lcmdlZFN0eWxlID0gX29iamVjdFNwcmVhZCh7XG4gICAgICB0cmFuc2l0aW9uOiAnbm9uZSdcbiAgICB9LCBtZXJnZWRTdHlsZSk7XG4gIH1cblxuICByZXR1cm4gW3N0YXR1cywgc3RlcCwgbWVyZ2VkU3R5bGUsIGFzeW5jVmlzaWJsZSAhPT0gbnVsbCAmJiBhc3luY1Zpc2libGUgIT09IHZvaWQgMCA/IGFzeW5jVmlzaWJsZSA6IHZpc2libGVdO1xufSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU1RFUF9QUkVQQVJFLCBTVEVQX0FDVElWRSwgU1RFUF9TVEFSVCwgU1RFUF9BQ1RJVkFURUQsIFNURVBfTk9ORSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCBmcm9tICcuL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHVzZU5leHRGcmFtZSBmcm9tICcuL3VzZU5leHRGcmFtZSc7XG52YXIgU1RFUF9RVUVVRSA9IFtTVEVQX1BSRVBBUkUsIFNURVBfU1RBUlQsIFNURVBfQUNUSVZFLCBTVEVQX0FDVElWQVRFRF07XG4vKiogU2tpcCBjdXJyZW50IHN0ZXAgKi9cblxuZXhwb3J0IHZhciBTa2lwU3RlcCA9IGZhbHNlO1xuLyoqIEN1cnJlbnQgc3RlcCBzaG91bGQgYmUgdXBkYXRlIGluICovXG5cbmV4cG9ydCB2YXIgRG9TdGVwID0gdHJ1ZTtcbmV4cG9ydCBmdW5jdGlvbiBpc0FjdGl2ZShzdGVwKSB7XG4gIHJldHVybiBzdGVwID09PSBTVEVQX0FDVElWRSB8fCBzdGVwID09PSBTVEVQX0FDVElWQVRFRDtcbn1cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoc3RhdHVzLCBjYWxsYmFjaykge1xuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoU1RFUF9OT05FKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgc3RlcCA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRTdGVwID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgX3VzZU5leHRGcmFtZSA9IHVzZU5leHRGcmFtZSgpLFxuICAgICAgX3VzZU5leHRGcmFtZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlTmV4dEZyYW1lLCAyKSxcbiAgICAgIG5leHRGcmFtZSA9IF91c2VOZXh0RnJhbWUyWzBdLFxuICAgICAgY2FuY2VsTmV4dEZyYW1lID0gX3VzZU5leHRGcmFtZTJbMV07XG5cbiAgZnVuY3Rpb24gc3RhcnRRdWV1ZSgpIHtcbiAgICBzZXRTdGVwKFNURVBfUFJFUEFSRSk7XG4gIH1cblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3RlcCAhPT0gU1RFUF9OT05FICYmIHN0ZXAgIT09IFNURVBfQUNUSVZBVEVEKSB7XG4gICAgICB2YXIgaW5kZXggPSBTVEVQX1FVRVVFLmluZGV4T2Yoc3RlcCk7XG4gICAgICB2YXIgbmV4dFN0ZXAgPSBTVEVQX1FVRVVFW2luZGV4ICsgMV07XG4gICAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2soc3RlcCk7XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IFNraXBTdGVwKSB7XG4gICAgICAgIC8vIFNraXAgd2hlbiBubyBuZWVkZWRcbiAgICAgICAgc2V0U3RlcChuZXh0U3RlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEbyBhcyBmcmFtZSBmb3Igc3RlcCB1cGRhdGVcbiAgICAgICAgbmV4dEZyYW1lKGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgZnVuY3Rpb24gZG9OZXh0KCkge1xuICAgICAgICAgICAgLy8gU2tpcCBzaW5jZSBjdXJyZW50IHF1ZXVlIGlzIG9vZFxuICAgICAgICAgICAgaWYgKGluZm8uaXNDYW5jZWxlZCgpKSByZXR1cm47XG4gICAgICAgICAgICBzZXRTdGVwKG5leHRTdGVwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkb05leHQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT25seSBwcm9taXNlIHNob3VsZCBiZSBhc3luY1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkudGhlbihkb05leHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbc3RhdHVzLCBzdGVwXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbmNlbE5leHRGcmFtZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIFtzdGFydFF1ZXVlLCBzdGVwXTtcbn0pOyIsImltcG9ydCBDU1NNb3Rpb24gZnJvbSAnLi9DU1NNb3Rpb24nO1xuaW1wb3J0IENTU01vdGlvbkxpc3QgZnJvbSAnLi9DU1NNb3Rpb25MaXN0JztcbmV4cG9ydCB7IENTU01vdGlvbkxpc3QgfTtcbmV4cG9ydCBkZWZhdWx0IENTU01vdGlvbjsiLCJleHBvcnQgdmFyIFNUQVRVU19OT05FID0gJ25vbmUnO1xuZXhwb3J0IHZhciBTVEFUVVNfQVBQRUFSID0gJ2FwcGVhcic7XG5leHBvcnQgdmFyIFNUQVRVU19FTlRFUiA9ICdlbnRlcic7XG5leHBvcnQgdmFyIFNUQVRVU19MRUFWRSA9ICdsZWF2ZSc7XG5leHBvcnQgdmFyIFNURVBfTk9ORSA9ICdub25lJztcbmV4cG9ydCB2YXIgU1RFUF9QUkVQQVJFID0gJ3ByZXBhcmUnO1xuZXhwb3J0IHZhciBTVEVQX1NUQVJUID0gJ3N0YXJ0JztcbmV4cG9ydCB2YXIgU1RFUF9BQ1RJVkUgPSAnYWN0aXZlJztcbmV4cG9ydCB2YXIgU1RFUF9BQ1RJVkFURUQgPSAnZW5kJzsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuZXhwb3J0IHZhciBTVEFUVVNfQUREID0gJ2FkZCc7XG5leHBvcnQgdmFyIFNUQVRVU19LRUVQID0gJ2tlZXAnO1xuZXhwb3J0IHZhciBTVEFUVVNfUkVNT1ZFID0gJ3JlbW92ZSc7XG5leHBvcnQgdmFyIFNUQVRVU19SRU1PVkVEID0gJ3JlbW92ZWQnO1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBLZXlUb09iamVjdChrZXkpIHtcbiAgdmFyIGtleU9iajtcblxuICBpZiAoa2V5ICYmIF90eXBlb2Yoa2V5KSA9PT0gJ29iamVjdCcgJiYgJ2tleScgaW4ga2V5KSB7XG4gICAga2V5T2JqID0ga2V5O1xuICB9IGVsc2Uge1xuICAgIGtleU9iaiA9IHtcbiAgICAgIGtleToga2V5XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGtleU9iaiksIHt9LCB7XG4gICAga2V5OiBTdHJpbmcoa2V5T2JqLmtleSlcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VLZXlzKCkge1xuICB2YXIga2V5cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gIHJldHVybiBrZXlzLm1hcCh3cmFwS2V5VG9PYmplY3QpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZLZXlzKCkge1xuICB2YXIgcHJldktleXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICB2YXIgY3VycmVudEtleXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdO1xuICB2YXIgbGlzdCA9IFtdO1xuICB2YXIgY3VycmVudEluZGV4ID0gMDtcbiAgdmFyIGN1cnJlbnRMZW4gPSBjdXJyZW50S2V5cy5sZW5ndGg7XG4gIHZhciBwcmV2S2V5T2JqZWN0cyA9IHBhcnNlS2V5cyhwcmV2S2V5cyk7XG4gIHZhciBjdXJyZW50S2V5T2JqZWN0cyA9IHBhcnNlS2V5cyhjdXJyZW50S2V5cyk7IC8vIENoZWNrIHByZXYga2V5cyB0byBpbnNlcnQgb3Iga2VlcFxuXG4gIHByZXZLZXlPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKGtleU9iaikge1xuICAgIHZhciBoaXQgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGkgPSBjdXJyZW50SW5kZXg7IGkgPCBjdXJyZW50TGVuOyBpICs9IDEpIHtcbiAgICAgIHZhciBjdXJyZW50S2V5T2JqID0gY3VycmVudEtleU9iamVjdHNbaV07XG5cbiAgICAgIGlmIChjdXJyZW50S2V5T2JqLmtleSA9PT0ga2V5T2JqLmtleSkge1xuICAgICAgICAvLyBOZXcgYWRkZWQga2V5cyBzaG91bGQgYWRkIGJlZm9yZSBjdXJyZW50IGtleVxuICAgICAgICBpZiAoY3VycmVudEluZGV4IDwgaSkge1xuICAgICAgICAgIGxpc3QgPSBsaXN0LmNvbmNhdChjdXJyZW50S2V5T2JqZWN0cy5zbGljZShjdXJyZW50SW5kZXgsIGkpLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBvYmopLCB7fSwge1xuICAgICAgICAgICAgICBzdGF0dXM6IFNUQVRVU19BRERcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgICBjdXJyZW50SW5kZXggPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgY3VycmVudEtleU9iaiksIHt9LCB7XG4gICAgICAgICAgc3RhdHVzOiBTVEFUVVNfS0VFUFxuICAgICAgICB9KSk7XG4gICAgICAgIGN1cnJlbnRJbmRleCArPSAxO1xuICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IC8vIElmIG5vdCBoaXQsIGl0IG1lYW5zIGtleSBpcyByZW1vdmVkXG5cblxuICAgIGlmICghaGl0KSB7XG4gICAgICBsaXN0LnB1c2goX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBrZXlPYmopLCB7fSwge1xuICAgICAgICBzdGF0dXM6IFNUQVRVU19SRU1PVkVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0pOyAvLyBBZGQgcmVzdCB0byB0aGUgbGlzdFxuXG4gIGlmIChjdXJyZW50SW5kZXggPCBjdXJyZW50TGVuKSB7XG4gICAgbGlzdCA9IGxpc3QuY29uY2F0KGN1cnJlbnRLZXlPYmplY3RzLnNsaWNlKGN1cnJlbnRJbmRleCkubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG9iaiksIHt9LCB7XG4gICAgICAgIHN0YXR1czogU1RBVFVTX0FERFxuICAgICAgfSk7XG4gICAgfSkpO1xuICB9XG4gIC8qKlxuICAgKiBNZXJnZSBzYW1lIGtleSB3aGVuIGl0IHJlbW92ZSBhbmQgYWRkIGFnYWluOlxuICAgKiAgICBbMSAtIGFkZCwgMiAtIGtlZXAsIDEgLSByZW1vdmVdIC0+IFsxIC0ga2VlcCwgMiAtIGtlZXBdXG4gICAqL1xuXG5cbiAgdmFyIGtleXMgPSB7fTtcbiAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGtleSA9IF9yZWYua2V5O1xuICAgIGtleXNba2V5XSA9IChrZXlzW2tleV0gfHwgMCkgKyAxO1xuICB9KTtcbiAgdmFyIGR1cGxpY2F0ZWRLZXlzID0gT2JqZWN0LmtleXMoa2V5cykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4ga2V5c1trZXldID4gMTtcbiAgfSk7XG4gIGR1cGxpY2F0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoS2V5KSB7XG4gICAgLy8gUmVtb3ZlIGBTVEFUVVNfUkVNT1ZFYCBub2RlLlxuICAgIGxpc3QgPSBsaXN0LmZpbHRlcihmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXksXG4gICAgICAgICAgc3RhdHVzID0gX3JlZjIuc3RhdHVzO1xuICAgICAgcmV0dXJuIGtleSAhPT0gbWF0Y2hLZXkgfHwgc3RhdHVzICE9PSBTVEFUVVNfUkVNT1ZFO1xuICAgIH0pOyAvLyBVcGRhdGUgYFNUQVRVU19BRERgIHRvIGBTVEFUVVNfS0VFUGBcblxuICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgaWYgKG5vZGUua2V5ID09PSBtYXRjaEtleSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgbm9kZS5zdGF0dXMgPSBTVEFUVVNfS0VFUDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBsaXN0O1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBjYW5Vc2VET00gZnJvbSBcInJjLXV0aWwvZXMvRG9tL2NhblVzZURvbVwiOyAvLyA9PT09PT09PT09PT09PT09PSBUcmFuc2l0aW9uID09PT09PT09PT09PT09PT09XG4vLyBFdmVudCB3cmFwcGVyLiBDb3B5IGZyb20gcmVhY3Qgc291cmNlIGNvZGVcblxuZnVuY3Rpb24gbWFrZVByZWZpeE1hcChzdHlsZVByb3AsIGV2ZW50TmFtZSkge1xuICB2YXIgcHJlZml4ZXMgPSB7fTtcbiAgcHJlZml4ZXNbc3R5bGVQcm9wLnRvTG93ZXJDYXNlKCldID0gZXZlbnROYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHByZWZpeGVzW1wiV2Via2l0XCIuY29uY2F0KHN0eWxlUHJvcCldID0gXCJ3ZWJraXRcIi5jb25jYXQoZXZlbnROYW1lKTtcbiAgcHJlZml4ZXNbXCJNb3pcIi5jb25jYXQoc3R5bGVQcm9wKV0gPSBcIm1velwiLmNvbmNhdChldmVudE5hbWUpO1xuICBwcmVmaXhlc1tcIm1zXCIuY29uY2F0KHN0eWxlUHJvcCldID0gXCJNU1wiLmNvbmNhdChldmVudE5hbWUpO1xuICBwcmVmaXhlc1tcIk9cIi5jb25jYXQoc3R5bGVQcm9wKV0gPSBcIm9cIi5jb25jYXQoZXZlbnROYW1lLnRvTG93ZXJDYXNlKCkpO1xuICByZXR1cm4gcHJlZml4ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWZW5kb3JQcmVmaXhlcyhkb21TdXBwb3J0LCB3aW4pIHtcbiAgdmFyIHByZWZpeGVzID0ge1xuICAgIGFuaW1hdGlvbmVuZDogbWFrZVByZWZpeE1hcCgnQW5pbWF0aW9uJywgJ0FuaW1hdGlvbkVuZCcpLFxuICAgIHRyYW5zaXRpb25lbmQ6IG1ha2VQcmVmaXhNYXAoJ1RyYW5zaXRpb24nLCAnVHJhbnNpdGlvbkVuZCcpXG4gIH07XG5cbiAgaWYgKGRvbVN1cHBvcnQpIHtcbiAgICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbikpIHtcbiAgICAgIGRlbGV0ZSBwcmVmaXhlcy5hbmltYXRpb25lbmQuYW5pbWF0aW9uO1xuICAgIH1cblxuICAgIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbikpIHtcbiAgICAgIGRlbGV0ZSBwcmVmaXhlcy50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb247XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByZWZpeGVzO1xufVxudmFyIHZlbmRvclByZWZpeGVzID0gZ2V0VmVuZG9yUHJlZml4ZXMoY2FuVXNlRE9NKCksIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge30pO1xudmFyIHN0eWxlID0ge307XG5cbmlmIChjYW5Vc2VET00oKSkge1xuICB2YXIgX2RvY3VtZW50JGNyZWF0ZUVsZW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgc3R5bGUgPSBfZG9jdW1lbnQkY3JlYXRlRWxlbWUuc3R5bGU7XG59XG5cbnZhciBwcmVmaXhlZEV2ZW50TmFtZXMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRWZW5kb3JQcmVmaXhlZEV2ZW50TmFtZShldmVudE5hbWUpIHtcbiAgaWYgKHByZWZpeGVkRXZlbnROYW1lc1tldmVudE5hbWVdKSB7XG4gICAgcmV0dXJuIHByZWZpeGVkRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICB9XG5cbiAgdmFyIHByZWZpeE1hcCA9IHZlbmRvclByZWZpeGVzW2V2ZW50TmFtZV07XG5cbiAgaWYgKHByZWZpeE1hcCkge1xuICAgIHZhciBzdHlsZVByb3BMaXN0ID0gT2JqZWN0LmtleXMocHJlZml4TWFwKTtcbiAgICB2YXIgbGVuID0gc3R5bGVQcm9wTGlzdC5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICB2YXIgc3R5bGVQcm9wID0gc3R5bGVQcm9wTGlzdFtpXTtcblxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcmVmaXhNYXAsIHN0eWxlUHJvcCkgJiYgc3R5bGVQcm9wIGluIHN0eWxlKSB7XG4gICAgICAgIHByZWZpeGVkRXZlbnROYW1lc1tldmVudE5hbWVdID0gcHJlZml4TWFwW3N0eWxlUHJvcF07XG4gICAgICAgIHJldHVybiBwcmVmaXhlZEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG52YXIgaW50ZXJuYWxBbmltYXRpb25FbmROYW1lID0gZ2V0VmVuZG9yUHJlZml4ZWRFdmVudE5hbWUoJ2FuaW1hdGlvbmVuZCcpO1xudmFyIGludGVybmFsVHJhbnNpdGlvbkVuZE5hbWUgPSBnZXRWZW5kb3JQcmVmaXhlZEV2ZW50TmFtZSgndHJhbnNpdGlvbmVuZCcpO1xuZXhwb3J0IHZhciBzdXBwb3J0VHJhbnNpdGlvbiA9ICEhKGludGVybmFsQW5pbWF0aW9uRW5kTmFtZSAmJiBpbnRlcm5hbFRyYW5zaXRpb25FbmROYW1lKTtcbmV4cG9ydCB2YXIgYW5pbWF0aW9uRW5kTmFtZSA9IGludGVybmFsQW5pbWF0aW9uRW5kTmFtZSB8fCAnYW5pbWF0aW9uZW5kJztcbmV4cG9ydCB2YXIgdHJhbnNpdGlvbkVuZE5hbWUgPSBpbnRlcm5hbFRyYW5zaXRpb25FbmROYW1lIHx8ICd0cmFuc2l0aW9uZW5kJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uTmFtZSh0cmFuc2l0aW9uTmFtZSwgdHJhbnNpdGlvblR5cGUpIHtcbiAgaWYgKCF0cmFuc2l0aW9uTmFtZSkgcmV0dXJuIG51bGw7XG5cbiAgaWYgKF90eXBlb2YodHJhbnNpdGlvbk5hbWUpID09PSAnb2JqZWN0Jykge1xuICAgIHZhciB0eXBlID0gdHJhbnNpdGlvblR5cGUucmVwbGFjZSgvLVxcdy9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZVt0eXBlXTtcbiAgfVxuXG4gIHJldHVybiBcIlwiLmNvbmNhdCh0cmFuc2l0aW9uTmFtZSwgXCItXCIpLmNvbmNhdCh0cmFuc2l0aW9uVHlwZSk7XG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTIhLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTIhLi9pbmRleC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0yIS4vaW5kZXguY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gXCJyYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyXCI7XG5cbnZhciBIYW5kbGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEhhbmRsZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIYW5kbGUpO1xuXG4gIGZ1bmN0aW9uIEhhbmRsZSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGFuZGxlKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjbGlja0ZvY3VzZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIF90aGlzLnNldEhhbmRsZVJlZiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5oYW5kbGUgPSBub2RlO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVNb3VzZVVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IF90aGlzLmhhbmRsZSkge1xuICAgICAgICBfdGhpcy5zZXRDbGlja0ZvY3VzKHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8gYXZvaWQgc2VsZWN0aW5nIHRleHQgZHVyaW5nIGRyYWdcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzI1MDEwXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIGZpeCBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNTMyNFxuXG4gICAgICBfdGhpcy5mb2N1cygpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0Q2xpY2tGb2N1cyhmYWxzZSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRDbGlja0ZvY3VzKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEhhbmRsZSwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAvLyBtb3VzZXVwIHdvbid0IHRyaWdnZXIgaWYgbW91c2UgbW92ZWQgb3V0IG9mIGhhbmRsZSxcbiAgICAgIC8vIHNvIHdlIGxpc3RlbiBvbiBkb2N1bWVudCBoZXJlLlxuICAgICAgdGhpcy5vbk1vdXNlVXBMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5vbk1vdXNlVXBMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLm9uTW91c2VVcExpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRDbGlja0ZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldENsaWNrRm9jdXMoZm9jdXNlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNsaWNrRm9jdXNlZDogZm9jdXNlZFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsaWNrRm9jdXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xpY2tGb2N1cygpIHtcbiAgICAgIHRoaXMuc2V0Q2xpY2tGb2N1cyh0cnVlKTtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9jdXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICB0aGlzLmhhbmRsZS5mb2N1cygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJibHVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICB0aGlzLmhhbmRsZS5ibHVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3JlZiwgX3JlZjI7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIHZlcnRpY2FsID0gX3RoaXMkcHJvcHMudmVydGljYWwsXG4gICAgICAgICAgcmV2ZXJzZSA9IF90aGlzJHByb3BzLnJldmVyc2UsXG4gICAgICAgICAgb2Zmc2V0ID0gX3RoaXMkcHJvcHMub2Zmc2V0LFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMuc3R5bGUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBtaW4gPSBfdGhpcyRwcm9wcy5taW4sXG4gICAgICAgICAgbWF4ID0gX3RoaXMkcHJvcHMubWF4LFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcHJvcHMudmFsdWUsXG4gICAgICAgICAgdGFiSW5kZXggPSBfdGhpcyRwcm9wcy50YWJJbmRleCxcbiAgICAgICAgICBhcmlhTGFiZWwgPSBfdGhpcyRwcm9wcy5hcmlhTGFiZWwsXG4gICAgICAgICAgYXJpYUxhYmVsbGVkQnkgPSBfdGhpcyRwcm9wcy5hcmlhTGFiZWxsZWRCeSxcbiAgICAgICAgICBhcmlhVmFsdWVUZXh0Rm9ybWF0dGVyID0gX3RoaXMkcHJvcHMuYXJpYVZhbHVlVGV4dEZvcm1hdHRlcixcbiAgICAgICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3RoaXMkcHJvcHMsIFtcInByZWZpeENsc1wiLCBcInZlcnRpY2FsXCIsIFwicmV2ZXJzZVwiLCBcIm9mZnNldFwiLCBcInN0eWxlXCIsIFwiZGlzYWJsZWRcIiwgXCJtaW5cIiwgXCJtYXhcIiwgXCJ2YWx1ZVwiLCBcInRhYkluZGV4XCIsIFwiYXJpYUxhYmVsXCIsIFwiYXJpYUxhYmVsbGVkQnlcIiwgXCJhcmlhVmFsdWVUZXh0Rm9ybWF0dGVyXCJdKTtcblxuICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXModGhpcy5wcm9wcy5jbGFzc05hbWUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oYW5kbGUtY2xpY2stZm9jdXNlZFwiKSwgdGhpcy5zdGF0ZS5jbGlja0ZvY3VzZWQpKTtcbiAgICAgIHZhciBwb3NpdGlvblN0eWxlID0gdmVydGljYWwgPyAoX3JlZiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgcmV2ZXJzZSA/ICd0b3AnIDogJ2JvdHRvbScsIFwiXCIuY29uY2F0KG9mZnNldCwgXCIlXCIpKSwgX2RlZmluZVByb3BlcnR5KF9yZWYsIHJldmVyc2UgPyAnYm90dG9tJyA6ICd0b3AnLCAnYXV0bycpLCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgXCJ0cmFuc2Zvcm1cIiwgcmV2ZXJzZSA/IG51bGwgOiBcInRyYW5zbGF0ZVkoKzUwJSlcIiksIF9yZWYpIDogKF9yZWYyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgcmV2ZXJzZSA/ICdyaWdodCcgOiAnbGVmdCcsIFwiXCIuY29uY2F0KG9mZnNldCwgXCIlXCIpKSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCByZXZlcnNlID8gJ2xlZnQnIDogJ3JpZ2h0JywgJ2F1dG8nKSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCBcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZVgoXCIuY29uY2F0KHJldmVyc2UgPyAnKycgOiAnLScsIFwiNTAlKVwiKSksIF9yZWYyKTtcblxuICAgICAgdmFyIGVsU3R5bGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0eWxlKSwgcG9zaXRpb25TdHlsZSk7XG5cbiAgICAgIHZhciBtZXJnZWRUYWJJbmRleCA9IHRhYkluZGV4IHx8IDA7XG5cbiAgICAgIGlmIChkaXNhYmxlZCB8fCB0YWJJbmRleCA9PT0gbnVsbCkge1xuICAgICAgICBtZXJnZWRUYWJJbmRleCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBhcmlhVmFsdWVUZXh0O1xuXG4gICAgICBpZiAoYXJpYVZhbHVlVGV4dEZvcm1hdHRlcikge1xuICAgICAgICBhcmlhVmFsdWVUZXh0ID0gYXJpYVZhbHVlVGV4dEZvcm1hdHRlcih2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIHJlZjogdGhpcy5zZXRIYW5kbGVSZWYsXG4gICAgICAgIHRhYkluZGV4OiBtZXJnZWRUYWJJbmRleFxuICAgICAgfSwgcmVzdFByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogZWxTdHlsZSxcbiAgICAgICAgb25CbHVyOiB0aGlzLmhhbmRsZUJsdXIsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24gLy8gYXJpYSBhdHRyaWJ1dGVcbiAgICAgICAgLFxuICAgICAgICByb2xlOiBcInNsaWRlclwiLFxuICAgICAgICBcImFyaWEtdmFsdWVtaW5cIjogbWluLFxuICAgICAgICBcImFyaWEtdmFsdWVtYXhcIjogbWF4LFxuICAgICAgICBcImFyaWEtdmFsdWVub3dcIjogdmFsdWUsXG4gICAgICAgIFwiYXJpYS1kaXNhYmxlZFwiOiAhIWRpc2FibGVkLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLFxuICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBhcmlhTGFiZWxsZWRCeSxcbiAgICAgICAgXCJhcmlhLXZhbHVldGV4dFwiOiBhcmlhVmFsdWVUZXh0XG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhhbmRsZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgSGFuZGxlIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vY29tbW9uL1RyYWNrJztcbmltcG9ydCBjcmVhdGVTbGlkZXIgZnJvbSAnLi9jb21tb24vY3JlYXRlU2xpZGVyJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG52YXIgX3RyaW1BbGlnblZhbHVlID0gZnVuY3Rpb24gdHJpbUFsaWduVmFsdWUoX3JlZikge1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgaGFuZGxlID0gX3JlZi5oYW5kbGUsXG4gICAgICBib3VuZHMgPSBfcmVmLmJvdW5kcyxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcbiAgdmFyIGFsbG93Q3Jvc3MgPSBwcm9wcy5hbGxvd0Nyb3NzLFxuICAgICAgcHVzaGFibGUgPSBwcm9wcy5wdXNoYWJsZTtcbiAgdmFyIHRoZXJzaG9sZCA9IE51bWJlcihwdXNoYWJsZSk7XG4gIHZhciB2YWxJblJhbmdlID0gdXRpbHMuZW5zdXJlVmFsdWVJblJhbmdlKHZhbHVlLCBwcm9wcyk7XG4gIHZhciB2YWxOb3RDb25mbGljdCA9IHZhbEluUmFuZ2U7XG5cbiAgaWYgKCFhbGxvd0Nyb3NzICYmIGhhbmRsZSAhPSBudWxsICYmIGJvdW5kcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGhhbmRsZSA+IDAgJiYgdmFsSW5SYW5nZSA8PSBib3VuZHNbaGFuZGxlIC0gMV0gKyB0aGVyc2hvbGQpIHtcbiAgICAgIHZhbE5vdENvbmZsaWN0ID0gYm91bmRzW2hhbmRsZSAtIDFdICsgdGhlcnNob2xkO1xuICAgIH1cblxuICAgIGlmIChoYW5kbGUgPCBib3VuZHMubGVuZ3RoIC0gMSAmJiB2YWxJblJhbmdlID49IGJvdW5kc1toYW5kbGUgKyAxXSAtIHRoZXJzaG9sZCkge1xuICAgICAgdmFsTm90Q29uZmxpY3QgPSBib3VuZHNbaGFuZGxlICsgMV0gLSB0aGVyc2hvbGQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHV0aWxzLmVuc3VyZVZhbHVlUHJlY2lzaW9uKHZhbE5vdENvbmZsaWN0LCBwcm9wcyk7XG59O1xuXG52YXIgUmFuZ2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJhbmdlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFJhbmdlKTtcblxuICBmdW5jdGlvbiBSYW5nZShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYW5nZSk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgIF90aGlzLnBvc2l0aW9uR2V0VmFsdWUgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgIHZhciBib3VuZHMgPSBfdGhpcy5nZXRWYWx1ZSgpO1xuXG4gICAgICB2YXIgdmFsdWUgPSBfdGhpcy5jYWxjVmFsdWVCeVBvcyhwb3NpdGlvbik7XG5cbiAgICAgIHZhciBjbG9zZXN0Qm91bmQgPSBfdGhpcy5nZXRDbG9zZXN0Qm91bmQodmFsdWUpO1xuXG4gICAgICB2YXIgaW5kZXggPSBfdGhpcy5nZXRCb3VuZE5lZWRNb3ZpbmcodmFsdWUsIGNsb3Nlc3RCb3VuZCk7XG5cbiAgICAgIHZhciBwcmV2VmFsdWUgPSBib3VuZHNbaW5kZXhdO1xuICAgICAgaWYgKHZhbHVlID09PSBwcmV2VmFsdWUpIHJldHVybiBudWxsO1xuXG4gICAgICB2YXIgbmV4dEJvdW5kcyA9IF90b0NvbnN1bWFibGVBcnJheShib3VuZHMpO1xuXG4gICAgICBuZXh0Qm91bmRzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIG5leHRCb3VuZHM7XG4gICAgfTtcblxuICAgIF90aGlzLm9uRW5kID0gZnVuY3Rpb24gKGZvcmNlKSB7XG4gICAgICB2YXIgaGFuZGxlID0gX3RoaXMuc3RhdGUuaGFuZGxlO1xuXG4gICAgICBfdGhpcy5yZW1vdmVEb2N1bWVudEV2ZW50cygpO1xuXG4gICAgICBpZiAoIWhhbmRsZSkge1xuICAgICAgICBfdGhpcy5kcmFnVHJhY2sgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhhbmRsZSAhPT0gbnVsbCB8fCBmb3JjZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkFmdGVyQ2hhbmdlKF90aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhhbmRsZTogbnVsbFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBjb3VudCA9IHByb3BzLmNvdW50LFxuICAgICAgICBtaW4gPSBwcm9wcy5taW4sXG4gICAgICAgIG1heCA9IHByb3BzLm1heDtcbiAgICB2YXIgaW5pdGlhbFZhbHVlID0gQXJyYXkuYXBwbHkodm9pZCAwLCBfdG9Db25zdW1hYmxlQXJyYXkoQXJyYXkoY291bnQgKyAxKSkpLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWluO1xuICAgIH0pO1xuICAgIHZhciBkZWZhdWx0VmFsdWUgPSAnZGVmYXVsdFZhbHVlJyBpbiBwcm9wcyA/IHByb3BzLmRlZmF1bHRWYWx1ZSA6IGluaXRpYWxWYWx1ZTtcbiAgICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkID8gcHJvcHMudmFsdWUgOiBkZWZhdWx0VmFsdWU7XG4gICAgdmFyIGJvdW5kcyA9IHZhbHVlLm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgICAgcmV0dXJuIF90cmltQWxpZ25WYWx1ZSh7XG4gICAgICAgIHZhbHVlOiB2LFxuICAgICAgICBoYW5kbGU6IGksXG4gICAgICAgIHByb3BzOiBwcm9wc1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIHJlY2VudCA9IGJvdW5kc1swXSA9PT0gbWF4ID8gMCA6IGJvdW5kcy5sZW5ndGggLSAxO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaGFuZGxlOiBudWxsLFxuICAgICAgcmVjZW50OiByZWNlbnQsXG4gICAgICBib3VuZHM6IGJvdW5kc1xuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKlxuICAgKiBbTGVnYWN5XSBVc2VkIGZvciBpbmhlcml0IG90aGVyIGNvbXBvbmVudC5cbiAgICogSXQncyBhIGJhZCBjb2RlIHN0eWxlIHdoaWNoIHNob3VsZCBiZSByZWZhY3Rvci5cbiAgICovXG5cbiAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzLCBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5cblxuICBfY3JlYXRlQ2xhc3MoUmFuZ2UsIFt7XG4gICAga2V5OiBcImNhbGNWYWx1ZUJ5UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGNWYWx1ZUJ5UG9zKHZhbHVlKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2xpZGVyTGVuZ3RoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNsaWRlckxlbmd0aCgpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYWxjT2Zmc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGNPZmZzZXQodmFsdWUpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzYXZlSGFuZGxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNhdmVIYW5kbGUoaW5kZXgsIGgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlRG9jdW1lbnRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRG9jdW1lbnRFdmVudHMoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMub25DaGFuZ2UsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wcy52YWx1ZSxcbiAgICAgICAgICBtaW4gPSBfdGhpcyRwcm9wcy5taW4sXG4gICAgICAgICAgbWF4ID0gX3RoaXMkcHJvcHMubWF4O1xuXG4gICAgICBpZiAoISgnbWluJyBpbiB0aGlzLnByb3BzIHx8ICdtYXgnIGluIHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG1pbiA9PT0gcHJldlByb3BzLm1pbiAmJiBtYXggPT09IHByZXZQcm9wcy5tYXgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3VycmVudFZhbHVlID0gdmFsdWUgfHwgcHJldlN0YXRlLmJvdW5kcztcblxuICAgICAgaWYgKGN1cnJlbnRWYWx1ZS5zb21lKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB1dGlscy5pc1ZhbHVlT3V0T2ZSYW5nZSh2LCBfdGhpczIucHJvcHMpO1xuICAgICAgfSkpIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlcyA9IGN1cnJlbnRWYWx1ZS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gdXRpbHMuZW5zdXJlVmFsdWVJblJhbmdlKHYsIF90aGlzMi5wcm9wcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBvbkNoYW5nZShuZXdWYWx1ZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNoYW5nZShzdGF0ZSkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBpc05vdENvbnRyb2xsZWQgPSAhKCd2YWx1ZScgaW4gcHJvcHMpO1xuXG4gICAgICBpZiAoaXNOb3RDb250cm9sbGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNvbnRyb2xsZWRTdGF0ZSA9IHt9O1xuICAgICAgICBbJ2hhbmRsZScsICdyZWNlbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgaWYgKHN0YXRlW2l0ZW1dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZWRTdGF0ZVtpdGVtXSA9IHN0YXRlW2l0ZW1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNvbnRyb2xsZWRTdGF0ZSkubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShjb250cm9sbGVkU3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBkYXRhID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB0aGlzLnN0YXRlKSwgc3RhdGUpO1xuXG4gICAgICB2YXIgY2hhbmdlZFZhbHVlID0gZGF0YS5ib3VuZHM7XG4gICAgICBwcm9wcy5vbkNoYW5nZShjaGFuZ2VkVmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvblN0YXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uU3RhcnQocG9zaXRpb24pIHtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgIHByb3BzLm9uQmVmb3JlQ2hhbmdlKGJvdW5kcyk7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmNhbGNWYWx1ZUJ5UG9zKHBvc2l0aW9uKTtcbiAgICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICB2YXIgY2xvc2VzdEJvdW5kID0gdGhpcy5nZXRDbG9zZXN0Qm91bmQodmFsdWUpO1xuICAgICAgdGhpcy5wcmV2TW92ZWRIYW5kbGVJbmRleCA9IHRoaXMuZ2V0Qm91bmROZWVkTW92aW5nKHZhbHVlLCBjbG9zZXN0Qm91bmQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhhbmRsZTogdGhpcy5wcmV2TW92ZWRIYW5kbGVJbmRleCxcbiAgICAgICAgcmVjZW50OiB0aGlzLnByZXZNb3ZlZEhhbmRsZUluZGV4XG4gICAgICB9KTtcbiAgICAgIHZhciBwcmV2VmFsdWUgPSBib3VuZHNbdGhpcy5wcmV2TW92ZWRIYW5kbGVJbmRleF07XG4gICAgICBpZiAodmFsdWUgPT09IHByZXZWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICB2YXIgbmV4dEJvdW5kcyA9IF90b0NvbnN1bWFibGVBcnJheShzdGF0ZS5ib3VuZHMpO1xuXG4gICAgICBuZXh0Qm91bmRzW3RoaXMucHJldk1vdmVkSGFuZGxlSW5kZXhdID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgICAgYm91bmRzOiBuZXh0Qm91bmRzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Nb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW92ZShlLCBwb3NpdGlvbiwgZHJhZ1RyYWNrLCBzdGFydEJvdW5kcykge1xuICAgICAgdXRpbHMucGF1c2VFdmVudChlKTtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIG1heFZhbHVlID0gcHJvcHMubWF4IHx8IDEwMDtcbiAgICAgIHZhciBtaW5WYWx1ZSA9IHByb3BzLm1pbiB8fCAwO1xuXG4gICAgICBpZiAoZHJhZ1RyYWNrKSB7XG4gICAgICAgIHZhciBwb3MgPSBwcm9wcy52ZXJ0aWNhbCA/IC1wb3NpdGlvbiA6IHBvc2l0aW9uO1xuICAgICAgICBwb3MgPSBwcm9wcy5yZXZlcnNlID8gLXBvcyA6IHBvcztcbiAgICAgICAgdmFyIG1heCA9IG1heFZhbHVlIC0gTWF0aC5tYXguYXBwbHkoTWF0aCwgX3RvQ29uc3VtYWJsZUFycmF5KHN0YXJ0Qm91bmRzKSk7XG4gICAgICAgIHZhciBtaW4gPSBtaW5WYWx1ZSAtIE1hdGgubWluLmFwcGx5KE1hdGgsIF90b0NvbnN1bWFibGVBcnJheShzdGFydEJvdW5kcykpO1xuICAgICAgICB2YXIgcmF0aW8gPSBNYXRoLm1pbihNYXRoLm1heChwb3MgLyAodGhpcy5nZXRTbGlkZXJMZW5ndGgoKSAvIDEwMCksIG1pbiksIG1heCk7XG4gICAgICAgIHZhciBuZXh0Qm91bmRzID0gc3RhcnRCb3VuZHMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5tYXgoTWF0aC5taW4odiArIHJhdGlvLCBtYXhWYWx1ZSksIG1pblZhbHVlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzdGF0ZS5ib3VuZHMubWFwKGZ1bmN0aW9uIChjLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGMgPT09IG5leHRCb3VuZHNbaV07XG4gICAgICAgIH0pLnNvbWUoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICByZXR1cm4gIWM7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgICAgICBib3VuZHM6IG5leHRCb3VuZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gdGhpcy5jYWxjVmFsdWVCeVBvcyhwb3NpdGlvbik7XG4gICAgICB2YXIgb2xkVmFsdWUgPSBzdGF0ZS5ib3VuZHNbc3RhdGUuaGFuZGxlXTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gb2xkVmFsdWUpIHJldHVybjtcbiAgICAgIHRoaXMubW92ZVRvKHZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25LZXlib2FyZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbktleWJvYXJkKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHJldmVyc2UgPSBfdGhpcyRwcm9wczIucmV2ZXJzZSxcbiAgICAgICAgICB2ZXJ0aWNhbCA9IF90aGlzJHByb3BzMi52ZXJ0aWNhbDtcbiAgICAgIHZhciB2YWx1ZU11dGF0b3IgPSB1dGlscy5nZXRLZXlib2FyZFZhbHVlTXV0YXRvcihlLCB2ZXJ0aWNhbCwgcmV2ZXJzZSk7XG5cbiAgICAgIGlmICh2YWx1ZU11dGF0b3IpIHtcbiAgICAgICAgdXRpbHMucGF1c2VFdmVudChlKTtcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIGJvdW5kcyA9IHN0YXRlLmJvdW5kcyxcbiAgICAgICAgICAgIGhhbmRsZSA9IHN0YXRlLmhhbmRsZTtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gYm91bmRzW2hhbmRsZSA9PT0gbnVsbCA/IHN0YXRlLnJlY2VudCA6IGhhbmRsZV07XG4gICAgICAgIHZhciBtdXRhdGVkVmFsdWUgPSB2YWx1ZU11dGF0b3Iob2xkVmFsdWUsIHByb3BzKTtcblxuICAgICAgICB2YXIgdmFsdWUgPSBfdHJpbUFsaWduVmFsdWUoe1xuICAgICAgICAgIHZhbHVlOiBtdXRhdGVkVmFsdWUsXG4gICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgYm91bmRzOiBzdGF0ZS5ib3VuZHMsXG4gICAgICAgICAgcHJvcHM6IHByb3BzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gb2xkVmFsdWUpIHJldHVybjtcbiAgICAgICAgdmFyIGlzRnJvbUtleWJvYXJkRXZlbnQgPSB0cnVlO1xuICAgICAgICB0aGlzLm1vdmVUbyh2YWx1ZSwgaXNGcm9tS2V5Ym9hcmRFdmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYm91bmRzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRDbG9zZXN0Qm91bmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2xvc2VzdEJvdW5kKHZhbHVlKSB7XG4gICAgICB2YXIgYm91bmRzID0gdGhpcy5zdGF0ZS5ib3VuZHM7XG4gICAgICB2YXIgY2xvc2VzdEJvdW5kID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBib3VuZHMubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+PSBib3VuZHNbaV0pIHtcbiAgICAgICAgICBjbG9zZXN0Qm91bmQgPSBpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChNYXRoLmFicyhib3VuZHNbY2xvc2VzdEJvdW5kICsgMV0gLSB2YWx1ZSkgPCBNYXRoLmFicyhib3VuZHNbY2xvc2VzdEJvdW5kXSAtIHZhbHVlKSkge1xuICAgICAgICBjbG9zZXN0Qm91bmQgKz0gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsb3Nlc3RCb3VuZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Qm91bmROZWVkTW92aW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJvdW5kTmVlZE1vdmluZyh2YWx1ZSwgY2xvc2VzdEJvdW5kKSB7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGJvdW5kcyA9IF90aGlzJHN0YXRlLmJvdW5kcyxcbiAgICAgICAgICByZWNlbnQgPSBfdGhpcyRzdGF0ZS5yZWNlbnQ7XG4gICAgICB2YXIgYm91bmROZWVkTW92aW5nID0gY2xvc2VzdEJvdW5kO1xuICAgICAgdmFyIGlzQXRUaGVTYW1lUG9pbnQgPSBib3VuZHNbY2xvc2VzdEJvdW5kICsgMV0gPT09IGJvdW5kc1tjbG9zZXN0Qm91bmRdO1xuXG4gICAgICBpZiAoaXNBdFRoZVNhbWVQb2ludCAmJiBib3VuZHNbcmVjZW50XSA9PT0gYm91bmRzW2Nsb3Nlc3RCb3VuZF0pIHtcbiAgICAgICAgYm91bmROZWVkTW92aW5nID0gcmVjZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNBdFRoZVNhbWVQb2ludCAmJiB2YWx1ZSAhPT0gYm91bmRzW2Nsb3Nlc3RCb3VuZCArIDFdKSB7XG4gICAgICAgIGJvdW5kTmVlZE1vdmluZyA9IHZhbHVlIDwgYm91bmRzW2Nsb3Nlc3RCb3VuZCArIDFdID8gY2xvc2VzdEJvdW5kIDogY2xvc2VzdEJvdW5kICsgMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJvdW5kTmVlZE1vdmluZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TG93ZXJCb3VuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb3dlckJvdW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYm91bmRzWzBdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRVcHBlckJvdW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVwcGVyQm91bmQoKSB7XG4gICAgICB2YXIgYm91bmRzID0gdGhpcy5zdGF0ZS5ib3VuZHM7XG4gICAgICByZXR1cm4gYm91bmRzW2JvdW5kcy5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBwb3NzaWJsZSBzbGlkZXIgcG9pbnRzLCB0YWtpbmcgaW50byBhY2NvdW50IGJvdGhcbiAgICAgKiBgbWFya3NgIGFuZCBgc3RlcGAuIFRoZSByZXN1bHQgaXMgY2FjaGVkLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UG9pbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvaW50cygpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG1hcmtzID0gX3RoaXMkcHJvcHMzLm1hcmtzLFxuICAgICAgICAgIHN0ZXAgPSBfdGhpcyRwcm9wczMuc3RlcCxcbiAgICAgICAgICBtaW4gPSBfdGhpcyRwcm9wczMubWluLFxuICAgICAgICAgIG1heCA9IF90aGlzJHByb3BzMy5tYXg7XG4gICAgICB2YXIgY2FjaGUgPSB0aGlzLmludGVybmFsUG9pbnRzQ2FjaGU7XG5cbiAgICAgIGlmICghY2FjaGUgfHwgY2FjaGUubWFya3MgIT09IG1hcmtzIHx8IGNhY2hlLnN0ZXAgIT09IHN0ZXApIHtcbiAgICAgICAgdmFyIHBvaW50c09iamVjdCA9IF9vYmplY3RTcHJlYWQoe30sIG1hcmtzKTtcblxuICAgICAgICBpZiAoc3RlcCAhPT0gbnVsbCkge1xuICAgICAgICAgIGZvciAodmFyIHBvaW50ID0gbWluOyBwb2ludCA8PSBtYXg7IHBvaW50ICs9IHN0ZXApIHtcbiAgICAgICAgICAgIHBvaW50c09iamVjdFtwb2ludF0gPSBwb2ludDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcG9pbnRzID0gT2JqZWN0LmtleXMocG9pbnRzT2JqZWN0KS5tYXAocGFyc2VGbG9hdCk7XG4gICAgICAgIHBvaW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFBvaW50c0NhY2hlID0ge1xuICAgICAgICAgIG1hcmtzOiBtYXJrcyxcbiAgICAgICAgICBzdGVwOiBzdGVwLFxuICAgICAgICAgIHBvaW50czogcG9pbnRzXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsUG9pbnRzQ2FjaGUucG9pbnRzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtb3ZlVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbW92ZVRvKHZhbHVlLCBpc0Zyb21LZXlib2FyZEV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHZhciBuZXh0Qm91bmRzID0gX3RvQ29uc3VtYWJsZUFycmF5KHN0YXRlLmJvdW5kcyk7XG5cbiAgICAgIHZhciBoYW5kbGUgPSBzdGF0ZS5oYW5kbGUgPT09IG51bGwgPyBzdGF0ZS5yZWNlbnQgOiBzdGF0ZS5oYW5kbGU7XG4gICAgICBuZXh0Qm91bmRzW2hhbmRsZV0gPSB2YWx1ZTtcbiAgICAgIHZhciBuZXh0SGFuZGxlID0gaGFuZGxlO1xuXG4gICAgICBpZiAocHJvcHMucHVzaGFibGUgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMucHVzaFN1cnJvdW5kaW5nSGFuZGxlcyhuZXh0Qm91bmRzLCBuZXh0SGFuZGxlKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcHMuYWxsb3dDcm9zcykge1xuICAgICAgICBuZXh0Qm91bmRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXh0SGFuZGxlID0gbmV4dEJvdW5kcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgIHJlY2VudDogbmV4dEhhbmRsZSxcbiAgICAgICAgaGFuZGxlOiBuZXh0SGFuZGxlLFxuICAgICAgICBib3VuZHM6IG5leHRCb3VuZHNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNGcm9tS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAvLyBrbm93biBwcm9ibGVtOiBiZWNhdXNlIHNldFN0YXRlIGlzIGFzeW5jLFxuICAgICAgICAvLyBzbyB0cmlnZ2VyIGZvY3VzIHdpbGwgaW52b2tlIGhhbmRsZXIncyBvbkVuZCBhbmQgYW5vdGhlciBoYW5kbGVyJ3Mgb25TdGFydCB0b28gZWFybHksXG4gICAgICAgIC8vIGNhdXNlIG9uQmVmb3JlQ2hhbmdlIGFuZCBvbkFmdGVyQ2hhbmdlIHJlY2VpdmUgd3JvbmcgdmFsdWUuXG4gICAgICAgIC8vIGhlcmUgdXNlIHNldFN0YXRlIGNhbGxiYWNrIHRvIGhhY2vvvIxidXQgbm90IGVsZWdhbnRcbiAgICAgICAgdGhpcy5wcm9wcy5vbkFmdGVyQ2hhbmdlKG5leHRCb3VuZHMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLmhhbmRsZXNSZWZzW25leHRIYW5kbGVdLmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uRW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInB1c2hTdXJyb3VuZGluZ0hhbmRsZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaFN1cnJvdW5kaW5nSGFuZGxlcyhib3VuZHMsIGhhbmRsZSkge1xuICAgICAgdmFyIHZhbHVlID0gYm91bmRzW2hhbmRsZV07XG4gICAgICB2YXIgcHVzaGFibGUgPSB0aGlzLnByb3BzLnB1c2hhYmxlO1xuICAgICAgdmFyIHRocmVzaG9sZCA9IE51bWJlcihwdXNoYWJsZSk7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gMDtcblxuICAgICAgaWYgKGJvdW5kc1toYW5kbGUgKyAxXSAtIHZhbHVlIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9ICsxOyAvLyBwdXNoIHRvIHJpZ2h0XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZSAtIGJvdW5kc1toYW5kbGUgLSAxXSA8IHRocmVzaG9sZCkge1xuICAgICAgICBkaXJlY3Rpb24gPSAtMTsgLy8gcHVzaCB0byBsZWZ0XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV4dEhhbmRsZSA9IGhhbmRsZSArIGRpcmVjdGlvbjtcbiAgICAgIHZhciBkaWZmVG9OZXh0ID0gZGlyZWN0aW9uICogKGJvdW5kc1tuZXh0SGFuZGxlXSAtIHZhbHVlKTtcblxuICAgICAgaWYgKCF0aGlzLnB1c2hIYW5kbGUoYm91bmRzLCBuZXh0SGFuZGxlLCBkaXJlY3Rpb24sIHRocmVzaG9sZCAtIGRpZmZUb05leHQpKSB7XG4gICAgICAgIC8vIHJldmVydCB0byBvcmlnaW5hbCB2YWx1ZSBpZiBwdXNoaW5nIGlzIGltcG9zc2libGVcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGJvdW5kc1toYW5kbGVdID0gYm91bmRzW25leHRIYW5kbGVdIC0gZGlyZWN0aW9uICogdGhyZXNob2xkO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwdXNoSGFuZGxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2hIYW5kbGUoYm91bmRzLCBoYW5kbGUsIGRpcmVjdGlvbiwgYW1vdW50KSB7XG4gICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGJvdW5kc1toYW5kbGVdO1xuICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGJvdW5kc1toYW5kbGVdO1xuXG4gICAgICB3aGlsZSAoZGlyZWN0aW9uICogKGN1cnJlbnRWYWx1ZSAtIG9yaWdpbmFsVmFsdWUpIDwgYW1vdW50KSB7XG4gICAgICAgIGlmICghdGhpcy5wdXNoSGFuZGxlT25lUG9pbnQoYm91bmRzLCBoYW5kbGUsIGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAvLyBjYW4ndCBwdXNoIGhhbmRsZSBlbm91Z2ggdG8gY3JlYXRlIHRoZSBuZWVkZWQgYGFtb3VudGAgZ2FwLCBzbyB3ZVxuICAgICAgICAgIC8vIHJldmVydCBpdHMgcG9zaXRpb24gdG8gdGhlIG9yaWdpbmFsIHZhbHVlXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgYm91bmRzW2hhbmRsZV0gPSBvcmlnaW5hbFZhbHVlO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRWYWx1ZSA9IGJvdW5kc1toYW5kbGVdO1xuICAgICAgfSAvLyB0aGUgaGFuZGxlIHdhcyBwdXNoZWQgZW5vdWdoIHRvIGNyZWF0ZSB0aGUgbmVlZGVkIGBhbW91bnRgIGdhcFxuXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwdXNoSGFuZGxlT25lUG9pbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaEhhbmRsZU9uZVBvaW50KGJvdW5kcywgaGFuZGxlLCBkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBwb2ludHMgPSB0aGlzLmdldFBvaW50cygpO1xuICAgICAgdmFyIHBvaW50SW5kZXggPSBwb2ludHMuaW5kZXhPZihib3VuZHNbaGFuZGxlXSk7XG4gICAgICB2YXIgbmV4dFBvaW50SW5kZXggPSBwb2ludEluZGV4ICsgZGlyZWN0aW9uO1xuXG4gICAgICBpZiAobmV4dFBvaW50SW5kZXggPj0gcG9pbnRzLmxlbmd0aCB8fCBuZXh0UG9pbnRJbmRleCA8IDApIHtcbiAgICAgICAgLy8gcmVhY2hlZCB0aGUgbWluaW11bSBvciBtYXhpbXVtIGF2YWlsYWJsZSBwb2ludCwgY2FuJ3QgcHVzaCBhbnltb3JlXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5leHRIYW5kbGUgPSBoYW5kbGUgKyBkaXJlY3Rpb247XG4gICAgICB2YXIgbmV4dFZhbHVlID0gcG9pbnRzW25leHRQb2ludEluZGV4XTtcbiAgICAgIHZhciBwdXNoYWJsZSA9IHRoaXMucHJvcHMucHVzaGFibGU7XG4gICAgICB2YXIgdGhyZXNob2xkID0gTnVtYmVyKHB1c2hhYmxlKTtcbiAgICAgIHZhciBkaWZmVG9OZXh0ID0gZGlyZWN0aW9uICogKGJvdW5kc1tuZXh0SGFuZGxlXSAtIG5leHRWYWx1ZSk7XG5cbiAgICAgIGlmICghdGhpcy5wdXNoSGFuZGxlKGJvdW5kcywgbmV4dEhhbmRsZSwgZGlyZWN0aW9uLCB0aHJlc2hvbGQgLSBkaWZmVG9OZXh0KSkge1xuICAgICAgICAvLyBjb3VsZG4ndCBwdXNoIG5leHQgaGFuZGxlLCBzbyB3ZSB3b24ndCBwdXNoIHRoaXMgb25lIGVpdGhlclxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IC8vIHB1c2ggdGhlIGhhbmRsZVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICAgICAgYm91bmRzW2hhbmRsZV0gPSBuZXh0VmFsdWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidHJpbUFsaWduVmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJpbUFsaWduVmFsdWUodmFsdWUpIHtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGhhbmRsZSA9IF90aGlzJHN0YXRlMi5oYW5kbGUsXG4gICAgICAgICAgYm91bmRzID0gX3RoaXMkc3RhdGUyLmJvdW5kcztcbiAgICAgIHJldHVybiBfdHJpbUFsaWduVmFsdWUoe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICBib3VuZHM6IGJvdW5kcyxcbiAgICAgICAgcHJvcHM6IHRoaXMucHJvcHNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRzdGF0ZTMgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGhhbmRsZSA9IF90aGlzJHN0YXRlMy5oYW5kbGUsXG4gICAgICAgICAgYm91bmRzID0gX3RoaXMkc3RhdGUzLmJvdW5kcztcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzNC5wcmVmaXhDbHMsXG4gICAgICAgICAgdmVydGljYWwgPSBfdGhpcyRwcm9wczQudmVydGljYWwsXG4gICAgICAgICAgaW5jbHVkZWQgPSBfdGhpcyRwcm9wczQuaW5jbHVkZWQsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczQuZGlzYWJsZWQsXG4gICAgICAgICAgbWluID0gX3RoaXMkcHJvcHM0Lm1pbixcbiAgICAgICAgICBtYXggPSBfdGhpcyRwcm9wczQubWF4LFxuICAgICAgICAgIHJldmVyc2UgPSBfdGhpcyRwcm9wczQucmV2ZXJzZSxcbiAgICAgICAgICBoYW5kbGVHZW5lcmF0b3IgPSBfdGhpcyRwcm9wczQuaGFuZGxlLFxuICAgICAgICAgIHRyYWNrU3R5bGUgPSBfdGhpcyRwcm9wczQudHJhY2tTdHlsZSxcbiAgICAgICAgICBoYW5kbGVTdHlsZSA9IF90aGlzJHByb3BzNC5oYW5kbGVTdHlsZSxcbiAgICAgICAgICB0YWJJbmRleCA9IF90aGlzJHByb3BzNC50YWJJbmRleCxcbiAgICAgICAgICBhcmlhTGFiZWxHcm91cEZvckhhbmRsZXMgPSBfdGhpcyRwcm9wczQuYXJpYUxhYmVsR3JvdXBGb3JIYW5kbGVzLFxuICAgICAgICAgIGFyaWFMYWJlbGxlZEJ5R3JvdXBGb3JIYW5kbGVzID0gX3RoaXMkcHJvcHM0LmFyaWFMYWJlbGxlZEJ5R3JvdXBGb3JIYW5kbGVzLFxuICAgICAgICAgIGFyaWFWYWx1ZVRleHRGb3JtYXR0ZXJHcm91cEZvckhhbmRsZXMgPSBfdGhpcyRwcm9wczQuYXJpYVZhbHVlVGV4dEZvcm1hdHRlckdyb3VwRm9ySGFuZGxlcztcbiAgICAgIHZhciBvZmZzZXRzID0gYm91bmRzLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gX3RoaXM0LmNhbGNPZmZzZXQodik7XG4gICAgICB9KTtcbiAgICAgIHZhciBoYW5kbGVDbGFzc05hbWUgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhhbmRsZVwiKTtcbiAgICAgIHZhciBoYW5kbGVzID0gYm91bmRzLm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgdmFyIG1lcmdlZFRhYkluZGV4ID0gdGFiSW5kZXhbaV0gfHwgMDtcblxuICAgICAgICBpZiAoZGlzYWJsZWQgfHwgdGFiSW5kZXhbaV0gPT09IG51bGwpIHtcbiAgICAgICAgICBtZXJnZWRUYWJJbmRleCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZHJhZ2dpbmcgPSBoYW5kbGUgPT09IGk7XG4gICAgICAgIHJldHVybiBoYW5kbGVHZW5lcmF0b3Ioe1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcygoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBoYW5kbGVDbGFzc05hbWUsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KGhhbmRsZUNsYXNzTmFtZSwgXCItXCIpLmNvbmNhdChpICsgMSksIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KGhhbmRsZUNsYXNzTmFtZSwgXCItZHJhZ2dpbmdcIiksIGRyYWdnaW5nKSwgX2NsYXNzTmFtZXMpKSxcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICB2ZXJ0aWNhbDogdmVydGljYWwsXG4gICAgICAgICAgZHJhZ2dpbmc6IGRyYWdnaW5nLFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0c1tpXSxcbiAgICAgICAgICB2YWx1ZTogdixcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICB0YWJJbmRleDogbWVyZ2VkVGFiSW5kZXgsXG4gICAgICAgICAgbWluOiBtaW4sXG4gICAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgICAgcmV2ZXJzZTogcmV2ZXJzZSxcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgc3R5bGU6IGhhbmRsZVN0eWxlW2ldLFxuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczQuc2F2ZUhhbmRsZShpLCBoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFyaWFMYWJlbDogYXJpYUxhYmVsR3JvdXBGb3JIYW5kbGVzW2ldLFxuICAgICAgICAgIGFyaWFMYWJlbGxlZEJ5OiBhcmlhTGFiZWxsZWRCeUdyb3VwRm9ySGFuZGxlc1tpXSxcbiAgICAgICAgICBhcmlhVmFsdWVUZXh0Rm9ybWF0dGVyOiBhcmlhVmFsdWVUZXh0Rm9ybWF0dGVyR3JvdXBGb3JIYW5kbGVzW2ldXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB2YXIgdHJhY2tzID0gYm91bmRzLnNsaWNlKDAsIC0xKS5tYXAoZnVuY3Rpb24gKF8sIGluZGV4KSB7XG4gICAgICAgIHZhciBfY2xhc3NOYW1lczI7XG5cbiAgICAgICAgdmFyIGkgPSBpbmRleCArIDE7XG4gICAgICAgIHZhciB0cmFja0NsYXNzTmFtZSA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzMiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXRyYWNrXCIpLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10cmFjay1cIikuY29uY2F0KGkpLCB0cnVlKSwgX2NsYXNzTmFtZXMyKSk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFjaywge1xuICAgICAgICAgIGNsYXNzTmFtZTogdHJhY2tDbGFzc05hbWUsXG4gICAgICAgICAgdmVydGljYWw6IHZlcnRpY2FsLFxuICAgICAgICAgIHJldmVyc2U6IHJldmVyc2UsXG4gICAgICAgICAgaW5jbHVkZWQ6IGluY2x1ZGVkLFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0c1tpIC0gMV0sXG4gICAgICAgICAgbGVuZ3RoOiBvZmZzZXRzW2ldIC0gb2Zmc2V0c1tpIC0gMV0sXG4gICAgICAgICAgc3R5bGU6IHRyYWNrU3R5bGVbaW5kZXhdLFxuICAgICAgICAgIGtleTogaVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHJhY2tzOiB0cmFja3MsXG4gICAgICAgIGhhbmRsZXM6IGhhbmRsZXNcbiAgICAgIH07XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICAgIGlmICghKCd2YWx1ZScgaW4gcHJvcHMgfHwgJ21pbicgaW4gcHJvcHMgfHwgJ21heCcgaW4gcHJvcHMpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZSB8fCBzdGF0ZS5ib3VuZHM7XG4gICAgICB2YXIgbmV4dEJvdW5kcyA9IHZhbHVlLm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgICAgICByZXR1cm4gX3RyaW1BbGlnblZhbHVlKHtcbiAgICAgICAgICB2YWx1ZTogdixcbiAgICAgICAgICBoYW5kbGU6IGksXG4gICAgICAgICAgYm91bmRzOiBzdGF0ZS5ib3VuZHMsXG4gICAgICAgICAgcHJvcHM6IHByb3BzXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdGF0ZS5ib3VuZHMubGVuZ3RoID09PSBuZXh0Qm91bmRzLmxlbmd0aCkge1xuICAgICAgICBpZiAobmV4dEJvdW5kcy5ldmVyeShmdW5jdGlvbiAodiwgaSkge1xuICAgICAgICAgIHJldHVybiB2ID09PSBzdGF0ZS5ib3VuZHNbaV07XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHRCb3VuZHMgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgICAgICByZXR1cm4gX3RyaW1BbGlnblZhbHVlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2LFxuICAgICAgICAgICAgaGFuZGxlOiBpLFxuICAgICAgICAgICAgcHJvcHM6IHByb3BzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSksIHt9LCB7XG4gICAgICAgIGJvdW5kczogbmV4dEJvdW5kc1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJhbmdlO1xufShSZWFjdC5Db21wb25lbnQpO1xuLyogZXNsaW50LWVuYWJsZSAqL1xuXG5cblJhbmdlLmRpc3BsYXlOYW1lID0gJ1JhbmdlJztcblJhbmdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY291bnQ6IDEsXG4gIGFsbG93Q3Jvc3M6IHRydWUsXG4gIHB1c2hhYmxlOiBmYWxzZSxcbiAgZHJhZ2dhYmxlVHJhY2s6IGZhbHNlLFxuICB0YWJJbmRleDogW10sXG4gIGFyaWFMYWJlbEdyb3VwRm9ySGFuZGxlczogW10sXG4gIGFyaWFMYWJlbGxlZEJ5R3JvdXBGb3JIYW5kbGVzOiBbXSxcbiAgYXJpYVZhbHVlVGV4dEZvcm1hdHRlckdyb3VwRm9ySGFuZGxlczogW11cbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTbGlkZXIoUmFuZ2UpOyIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3YXJuaW5nIGZyb20gXCJyYy11dGlsL2VzL3dhcm5pbmdcIjtcbmltcG9ydCBUcmFjayBmcm9tICcuL2NvbW1vbi9UcmFjayc7XG5pbXBvcnQgY3JlYXRlU2xpZGVyIGZyb20gJy4vY29tbW9uL2NyZWF0ZVNsaWRlcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcblxudmFyIFNsaWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2xpZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFNsaWRlcik7XG5cbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuICBmdW5jdGlvbiBTbGlkZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2xpZGVyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgX3RoaXMucG9zaXRpb25HZXRWYWx1ZSA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkVuZCA9IGZ1bmN0aW9uIChmb3JjZSkge1xuICAgICAgdmFyIGRyYWdnaW5nID0gX3RoaXMuc3RhdGUuZHJhZ2dpbmc7XG5cbiAgICAgIF90aGlzLnJlbW92ZURvY3VtZW50RXZlbnRzKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZyB8fCBmb3JjZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkFmdGVyQ2hhbmdlKF90aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdnaW5nOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCA/IHByb3BzLmRlZmF1bHRWYWx1ZSA6IHByb3BzLm1pbjtcbiAgICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkID8gcHJvcHMudmFsdWUgOiBkZWZhdWx0VmFsdWU7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogX3RoaXMudHJpbUFsaWduVmFsdWUodmFsdWUpLFxuICAgICAgZHJhZ2dpbmc6IGZhbHNlXG4gICAgfTtcbiAgICB3YXJuaW5nKCEoJ21pbmltdW1UcmFja1N0eWxlJyBpbiBwcm9wcyksICdtaW5pbXVtVHJhY2tTdHlsZSB3aWxsIGJlIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgdHJhY2tTdHlsZSBpbnN0ZWFkLicpO1xuICAgIHdhcm5pbmcoISgnbWF4aW11bVRyYWNrU3R5bGUnIGluIHByb3BzKSwgJ21heGltdW1UcmFja1N0eWxlIHdpbGwgYmUgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSByYWlsU3R5bGUgaW5zdGVhZC4nKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFtMZWdhY3ldIFVzZWQgZm9yIGluaGVyaXQgb3RoZXIgY29tcG9uZW50LlxuICAgKiBJdCdzIGEgYmFkIGNvZGUgc3R5bGUgd2hpY2ggc2hvdWxkIGJlIHJlZmFjdG9yLlxuICAgKi9cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMsIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhTbGlkZXIsIFt7XG4gICAga2V5OiBcImNhbGNWYWx1ZUJ5UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGNWYWx1ZUJ5UG9zKHZhbHVlKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FsY09mZnNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjT2Zmc2V0KHZhbHVlKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2F2ZUhhbmRsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzYXZlSGFuZGxlKGluZGV4LCBoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZURvY3VtZW50RXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZURvY3VtZW50RXZlbnRzKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG1pbiA9IF90aGlzJHByb3BzLm1pbixcbiAgICAgICAgICBtYXggPSBfdGhpcyRwcm9wcy5tYXgsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wcy52YWx1ZSxcbiAgICAgICAgICBvbkNoYW5nZSA9IF90aGlzJHByb3BzLm9uQ2hhbmdlO1xuXG4gICAgICBpZiAoISgnbWluJyBpbiB0aGlzLnByb3BzIHx8ICdtYXgnIGluIHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRoZVZhbHVlID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogcHJldlN0YXRlLnZhbHVlO1xuICAgICAgdmFyIG5leHRWYWx1ZSA9IHRoaXMudHJpbUFsaWduVmFsdWUodGhlVmFsdWUsIHRoaXMucHJvcHMpO1xuXG4gICAgICBpZiAobmV4dFZhbHVlID09PSBwcmV2U3RhdGUudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmFsdWU6IG5leHRWYWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghKG1pbiA9PT0gcHJldlByb3BzLm1pbiAmJiBtYXggPT09IHByZXZQcm9wcy5tYXgpICYmIHV0aWxzLmlzVmFsdWVPdXRPZlJhbmdlKHRoZVZhbHVlLCB0aGlzLnByb3BzKSkge1xuICAgICAgICBvbkNoYW5nZShuZXh0VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNoYW5nZShzdGF0ZSkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBpc05vdENvbnRyb2xsZWQgPSAhKCd2YWx1ZScgaW4gcHJvcHMpO1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IHN0YXRlLnZhbHVlID4gdGhpcy5wcm9wcy5tYXggPyBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0YXRlKSwge30sIHtcbiAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMubWF4XG4gICAgICB9KSA6IHN0YXRlO1xuXG4gICAgICBpZiAoaXNOb3RDb250cm9sbGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoYW5nZWRWYWx1ZSA9IG5leHRTdGF0ZS52YWx1ZTtcbiAgICAgIHByb3BzLm9uQ2hhbmdlKGNoYW5nZWRWYWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25TdGFydChwb3NpdGlvbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdnaW5nOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgcHJldlZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgcHJvcHMub25CZWZvcmVDaGFuZ2UocHJldlZhbHVlKTtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuY2FsY1ZhbHVlQnlQb3MocG9zaXRpb24pO1xuICAgICAgdGhpcy5zdGFydFZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgIGlmICh2YWx1ZSA9PT0gcHJldlZhbHVlKSByZXR1cm47XG4gICAgICB0aGlzLnByZXZNb3ZlZEhhbmRsZUluZGV4ID0gMDtcbiAgICAgIHRoaXMub25DaGFuZ2Uoe1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbk1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3ZlKGUsIHBvc2l0aW9uKSB7XG4gICAgICB1dGlscy5wYXVzZUV2ZW50KGUpO1xuICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuY2FsY1ZhbHVlQnlQb3MocG9zaXRpb24pO1xuICAgICAgaWYgKHZhbHVlID09PSBvbGRWYWx1ZSkgcmV0dXJuO1xuICAgICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uS2V5Ym9hcmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlib2FyZChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICByZXZlcnNlID0gX3RoaXMkcHJvcHMyLnJldmVyc2UsXG4gICAgICAgICAgdmVydGljYWwgPSBfdGhpcyRwcm9wczIudmVydGljYWw7XG4gICAgICB2YXIgdmFsdWVNdXRhdG9yID0gdXRpbHMuZ2V0S2V5Ym9hcmRWYWx1ZU11dGF0b3IoZSwgdmVydGljYWwsIHJldmVyc2UpO1xuXG4gICAgICBpZiAodmFsdWVNdXRhdG9yKSB7XG4gICAgICAgIHV0aWxzLnBhdXNlRXZlbnQoZSk7XG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHN0YXRlLnZhbHVlO1xuICAgICAgICB2YXIgbXV0YXRlZFZhbHVlID0gdmFsdWVNdXRhdG9yKG9sZFZhbHVlLCB0aGlzLnByb3BzKTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy50cmltQWxpZ25WYWx1ZShtdXRhdGVkVmFsdWUpO1xuICAgICAgICBpZiAodmFsdWUgPT09IG9sZFZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMub25DaGFuZ2Uoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkFmdGVyQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5vbkVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRMb3dlckJvdW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvd2VyQm91bmQoKSB7XG4gICAgICB2YXIgbWluUG9pbnQgPSB0aGlzLnByb3BzLnN0YXJ0UG9pbnQgfHwgdGhpcy5wcm9wcy5taW47XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZSA+IG1pblBvaW50ID8gbWluUG9pbnQgOiB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRVcHBlckJvdW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVwcGVyQm91bmQoKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSA8IHRoaXMucHJvcHMuc3RhcnRQb2ludCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zdGFydFBvaW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidHJpbUFsaWduVmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJpbUFsaWduVmFsdWUodikge1xuICAgICAgdmFyIG5leHRQcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgIGlmICh2ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgbWVyZ2VkUHJvcHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRoaXMucHJvcHMpLCBuZXh0UHJvcHMpO1xuXG4gICAgICB2YXIgdmFsID0gdXRpbHMuZW5zdXJlVmFsdWVJblJhbmdlKHYsIG1lcmdlZFByb3BzKTtcbiAgICAgIHJldHVybiB1dGlscy5lbnN1cmVWYWx1ZVByZWNpc2lvbih2YWwsIG1lcmdlZFByb3BzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczMucHJlZml4Q2xzLFxuICAgICAgICAgIHZlcnRpY2FsID0gX3RoaXMkcHJvcHMzLnZlcnRpY2FsLFxuICAgICAgICAgIGluY2x1ZGVkID0gX3RoaXMkcHJvcHMzLmluY2x1ZGVkLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMzLmRpc2FibGVkLFxuICAgICAgICAgIG1pbmltdW1UcmFja1N0eWxlID0gX3RoaXMkcHJvcHMzLm1pbmltdW1UcmFja1N0eWxlLFxuICAgICAgICAgIHRyYWNrU3R5bGUgPSBfdGhpcyRwcm9wczMudHJhY2tTdHlsZSxcbiAgICAgICAgICBoYW5kbGVTdHlsZSA9IF90aGlzJHByb3BzMy5oYW5kbGVTdHlsZSxcbiAgICAgICAgICB0YWJJbmRleCA9IF90aGlzJHByb3BzMy50YWJJbmRleCxcbiAgICAgICAgICBhcmlhTGFiZWxGb3JIYW5kbGUgPSBfdGhpcyRwcm9wczMuYXJpYUxhYmVsRm9ySGFuZGxlLFxuICAgICAgICAgIGFyaWFMYWJlbGxlZEJ5Rm9ySGFuZGxlID0gX3RoaXMkcHJvcHMzLmFyaWFMYWJlbGxlZEJ5Rm9ySGFuZGxlLFxuICAgICAgICAgIGFyaWFWYWx1ZVRleHRGb3JtYXR0ZXJGb3JIYW5kbGUgPSBfdGhpcyRwcm9wczMuYXJpYVZhbHVlVGV4dEZvcm1hdHRlckZvckhhbmRsZSxcbiAgICAgICAgICBtaW4gPSBfdGhpcyRwcm9wczMubWluLFxuICAgICAgICAgIG1heCA9IF90aGlzJHByb3BzMy5tYXgsXG4gICAgICAgICAgc3RhcnRQb2ludCA9IF90aGlzJHByb3BzMy5zdGFydFBvaW50LFxuICAgICAgICAgIHJldmVyc2UgPSBfdGhpcyRwcm9wczMucmV2ZXJzZSxcbiAgICAgICAgICBoYW5kbGVHZW5lcmF0b3IgPSBfdGhpcyRwcm9wczMuaGFuZGxlO1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHN0YXRlLnZhbHVlLFxuICAgICAgICAgIGRyYWdnaW5nID0gX3RoaXMkc3RhdGUuZHJhZ2dpbmc7XG4gICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5jYWxjT2Zmc2V0KHZhbHVlKTtcbiAgICAgIHZhciBoYW5kbGUgPSBoYW5kbGVHZW5lcmF0b3Ioe1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGFuZGxlXCIpLFxuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgdmVydGljYWw6IHZlcnRpY2FsLFxuICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBkcmFnZ2luZzogZHJhZ2dpbmcsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgbWluOiBtaW4sXG4gICAgICAgIG1heDogbWF4LFxuICAgICAgICByZXZlcnNlOiByZXZlcnNlLFxuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgICAgICBhcmlhTGFiZWw6IGFyaWFMYWJlbEZvckhhbmRsZSxcbiAgICAgICAgYXJpYUxhYmVsbGVkQnk6IGFyaWFMYWJlbGxlZEJ5Rm9ySGFuZGxlLFxuICAgICAgICBhcmlhVmFsdWVUZXh0Rm9ybWF0dGVyOiBhcmlhVmFsdWVUZXh0Rm9ybWF0dGVyRm9ySGFuZGxlLFxuICAgICAgICBzdHlsZTogaGFuZGxlU3R5bGVbMF0gfHwgaGFuZGxlU3R5bGUsXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnNhdmVIYW5kbGUoMCwgaCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdmFyIHRyYWNrT2Zmc2V0ID0gc3RhcnRQb2ludCAhPT0gdW5kZWZpbmVkID8gdGhpcy5jYWxjT2Zmc2V0KHN0YXJ0UG9pbnQpIDogMDtcbiAgICAgIHZhciBtZXJnZWRUcmFja1N0eWxlID0gdHJhY2tTdHlsZVswXSB8fCB0cmFja1N0eWxlO1xuICAgICAgdmFyIHRyYWNrID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhY2ssIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXRyYWNrXCIpLFxuICAgICAgICB2ZXJ0aWNhbDogdmVydGljYWwsXG4gICAgICAgIGluY2x1ZGVkOiBpbmNsdWRlZCxcbiAgICAgICAgb2Zmc2V0OiB0cmFja09mZnNldCxcbiAgICAgICAgcmV2ZXJzZTogcmV2ZXJzZSxcbiAgICAgICAgbGVuZ3RoOiBvZmZzZXQgLSB0cmFja09mZnNldCxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbWluaW11bVRyYWNrU3R5bGUpLCBtZXJnZWRUcmFja1N0eWxlKVxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFja3M6IHRyYWNrLFxuICAgICAgICBoYW5kbGVzOiBoYW5kbGVcbiAgICAgIH07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNsaWRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2xpZGVyKFNsaWRlcik7IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbnZhciBNYXJrcyA9IGZ1bmN0aW9uIE1hcmtzKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgdmVydGljYWwgPSBfcmVmLnZlcnRpY2FsLFxuICAgICAgcmV2ZXJzZSA9IF9yZWYucmV2ZXJzZSxcbiAgICAgIG1hcmtzID0gX3JlZi5tYXJrcyxcbiAgICAgIGluY2x1ZGVkID0gX3JlZi5pbmNsdWRlZCxcbiAgICAgIHVwcGVyQm91bmQgPSBfcmVmLnVwcGVyQm91bmQsXG4gICAgICBsb3dlckJvdW5kID0gX3JlZi5sb3dlckJvdW5kLFxuICAgICAgbWF4ID0gX3JlZi5tYXgsXG4gICAgICBtaW4gPSBfcmVmLm1pbixcbiAgICAgIG9uQ2xpY2tMYWJlbCA9IF9yZWYub25DbGlja0xhYmVsO1xuICB2YXIgbWFya3NLZXlzID0gT2JqZWN0LmtleXMobWFya3MpO1xuICB2YXIgcmFuZ2UgPSBtYXggLSBtaW47XG4gIHZhciBlbGVtZW50cyA9IG1hcmtzS2V5cy5tYXAocGFyc2VGbG9hdCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSkubWFwKGZ1bmN0aW9uIChwb2ludCkge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBtYXJrUG9pbnQgPSBtYXJrc1twb2ludF07XG4gICAgdmFyIG1hcmtQb2ludElzT2JqZWN0ID0gX3R5cGVvZihtYXJrUG9pbnQpID09PSAnb2JqZWN0JyAmJiAhIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChtYXJrUG9pbnQpO1xuICAgIHZhciBtYXJrTGFiZWwgPSBtYXJrUG9pbnRJc09iamVjdCA/IG1hcmtQb2ludC5sYWJlbCA6IG1hcmtQb2ludDtcblxuICAgIGlmICghbWFya0xhYmVsICYmIG1hcmtMYWJlbCAhPT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGlzQWN0aXZlID0gIWluY2x1ZGVkICYmIHBvaW50ID09PSB1cHBlckJvdW5kIHx8IGluY2x1ZGVkICYmIHBvaW50IDw9IHVwcGVyQm91bmQgJiYgcG9pbnQgPj0gbG93ZXJCb3VuZDtcbiAgICB2YXIgbWFya0NsYXNzTmFtZSA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIi10ZXh0XCIpLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiLXRleHQtYWN0aXZlXCIpLCBpc0FjdGl2ZSksIF9jbGFzc05hbWVzKSk7XG5cbiAgICB2YXIgYm90dG9tU3R5bGUgPSBfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgbWFyZ2luQm90dG9tOiAnLTUwJSdcbiAgICB9LCByZXZlcnNlID8gJ3RvcCcgOiAnYm90dG9tJywgXCJcIi5jb25jYXQoKHBvaW50IC0gbWluKSAvIHJhbmdlICogMTAwLCBcIiVcIikpO1xuXG4gICAgdmFyIGxlZnRTdHlsZSA9IF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWChcIi5jb25jYXQocmV2ZXJzZSA/IFwiNTAlXCIgOiBcIi01MCVcIiwgXCIpXCIpLFxuICAgICAgbXNUcmFuc2Zvcm06IFwidHJhbnNsYXRlWChcIi5jb25jYXQocmV2ZXJzZSA/IFwiNTAlXCIgOiBcIi01MCVcIiwgXCIpXCIpXG4gICAgfSwgcmV2ZXJzZSA/ICdyaWdodCcgOiAnbGVmdCcsIFwiXCIuY29uY2F0KChwb2ludCAtIG1pbikgLyByYW5nZSAqIDEwMCwgXCIlXCIpKTtcblxuICAgIHZhciBzdHlsZSA9IHZlcnRpY2FsID8gYm90dG9tU3R5bGUgOiBsZWZ0U3R5bGU7XG4gICAgdmFyIG1hcmtTdHlsZSA9IG1hcmtQb2ludElzT2JqZWN0ID8gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdHlsZSksIG1hcmtQb2ludC5zdHlsZSkgOiBzdHlsZTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogbWFya0NsYXNzTmFtZSxcbiAgICAgIHN0eWxlOiBtYXJrU3R5bGUsXG4gICAgICBrZXk6IHBvaW50LFxuICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgcmV0dXJuIG9uQ2xpY2tMYWJlbChlLCBwb2ludCk7XG4gICAgICB9LFxuICAgICAgb25Ub3VjaFN0YXJ0OiBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgICByZXR1cm4gb25DbGlja0xhYmVsKGUsIHBvaW50KTtcbiAgICAgIH1cbiAgICB9LCBtYXJrTGFiZWwpO1xuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICB9LCBlbGVtZW50cyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXJrczsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUb29sdGlwIGZyb20gJ3JjLXRvb2x0aXAnO1xuaW1wb3J0IHsgY29tcG9zZVJlZiB9IGZyb20gXCJyYy11dGlsL2VzL3JlZlwiO1xuaW1wb3J0IHJhZiBmcm9tIFwicmMtdXRpbC9lcy9yYWZcIjtcbnZhciBTbGlkZXJUb29sdGlwID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgb3ZlcmxheSA9IHByb3BzLm92ZXJsYXk7XG4gIHZhciBpbm5lclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIHRvb2x0aXBSZWYgPSBjb21wb3NlUmVmKHJlZiwgaW5uZXJSZWYpO1xuICB2YXIgcmFmUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIGNhbmNlbEtlZXBBbGlnbigpIHtcbiAgICByYWYuY2FuY2VsKHJhZlJlZi5jdXJyZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGtlZXBBbGlnbigpIHtcbiAgICByYWZSZWYuY3VycmVudCA9IHJhZihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2lubmVyUmVmJGN1cnJlbnQ7XG5cbiAgICAgIChfaW5uZXJSZWYkY3VycmVudCA9IGlubmVyUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9pbm5lclJlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaW5uZXJSZWYkY3VycmVudC5mb3JjZVBvcHVwQWxpZ24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIGtlZXBBbGlnbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW5jZWxLZWVwQWxpZ24oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FuY2VsS2VlcEFsaWduO1xuICB9LCBbdmlzaWJsZSwgb3ZlcmxheV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgX2V4dGVuZHMoe1xuICAgIHJlZjogdG9vbHRpcFJlZlxuICB9LCBwcm9wcykpO1xufSk7XG5leHBvcnQgZGVmYXVsdCBTbGlkZXJUb29sdGlwOyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSBcInJjLXV0aWwvZXMvd2FybmluZ1wiO1xuXG52YXIgY2FsY1BvaW50cyA9IGZ1bmN0aW9uIGNhbGNQb2ludHModmVydGljYWwsIG1hcmtzLCBkb3RzLCBzdGVwLCBtaW4sIG1heCkge1xuICB3YXJuaW5nKGRvdHMgPyBzdGVwID4gMCA6IHRydWUsICdgU2xpZGVyW3N0ZXBdYCBzaG91bGQgYmUgYSBwb3NpdGl2ZSBudW1iZXIgaW4gb3JkZXIgdG8gbWFrZSBTbGlkZXJbZG90c10gd29yay4nKTtcbiAgdmFyIHBvaW50cyA9IE9iamVjdC5rZXlzKG1hcmtzKS5tYXAocGFyc2VGbG9hdCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG5cbiAgaWYgKGRvdHMgJiYgc3RlcCkge1xuICAgIGZvciAodmFyIGkgPSBtaW47IGkgPD0gbWF4OyBpICs9IHN0ZXApIHtcbiAgICAgIGlmIChwb2ludHMuaW5kZXhPZihpKSA9PT0gLTEpIHtcbiAgICAgICAgcG9pbnRzLnB1c2goaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBvaW50cztcbn07XG5cbnZhciBTdGVwcyA9IGZ1bmN0aW9uIFN0ZXBzKF9yZWYpIHtcbiAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgdmVydGljYWwgPSBfcmVmLnZlcnRpY2FsLFxuICAgICAgcmV2ZXJzZSA9IF9yZWYucmV2ZXJzZSxcbiAgICAgIG1hcmtzID0gX3JlZi5tYXJrcyxcbiAgICAgIGRvdHMgPSBfcmVmLmRvdHMsXG4gICAgICBzdGVwID0gX3JlZi5zdGVwLFxuICAgICAgaW5jbHVkZWQgPSBfcmVmLmluY2x1ZGVkLFxuICAgICAgbG93ZXJCb3VuZCA9IF9yZWYubG93ZXJCb3VuZCxcbiAgICAgIHVwcGVyQm91bmQgPSBfcmVmLnVwcGVyQm91bmQsXG4gICAgICBtYXggPSBfcmVmLm1heCxcbiAgICAgIG1pbiA9IF9yZWYubWluLFxuICAgICAgZG90U3R5bGUgPSBfcmVmLmRvdFN0eWxlLFxuICAgICAgYWN0aXZlRG90U3R5bGUgPSBfcmVmLmFjdGl2ZURvdFN0eWxlO1xuICB2YXIgcmFuZ2UgPSBtYXggLSBtaW47XG4gIHZhciBlbGVtZW50cyA9IGNhbGNQb2ludHModmVydGljYWwsIG1hcmtzLCBkb3RzLCBzdGVwLCBtaW4sIG1heCkubWFwKGZ1bmN0aW9uIChwb2ludCkge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBvZmZzZXQgPSBcIlwiLmNvbmNhdChNYXRoLmFicyhwb2ludCAtIG1pbikgLyByYW5nZSAqIDEwMCwgXCIlXCIpO1xuICAgIHZhciBpc0FjdGl2ZWQgPSAhaW5jbHVkZWQgJiYgcG9pbnQgPT09IHVwcGVyQm91bmQgfHwgaW5jbHVkZWQgJiYgcG9pbnQgPD0gdXBwZXJCb3VuZCAmJiBwb2ludCA+PSBsb3dlckJvdW5kO1xuICAgIHZhciBzdHlsZSA9IHZlcnRpY2FsID8gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkb3RTdHlsZSksIHt9LCBfZGVmaW5lUHJvcGVydHkoe30sIHJldmVyc2UgPyAndG9wJyA6ICdib3R0b20nLCBvZmZzZXQpKSA6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZG90U3R5bGUpLCB7fSwgX2RlZmluZVByb3BlcnR5KHt9LCByZXZlcnNlID8gJ3JpZ2h0JyA6ICdsZWZ0Jywgb2Zmc2V0KSk7XG5cbiAgICBpZiAoaXNBY3RpdmVkKSB7XG4gICAgICBzdHlsZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3R5bGUpLCBhY3RpdmVEb3RTdHlsZSk7XG4gICAgfVxuXG4gICAgdmFyIHBvaW50Q2xhc3NOYW1lID0gY2xhc3NOYW1lcygoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRvdFwiKSwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kb3QtYWN0aXZlXCIpLCBpc0FjdGl2ZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZG90LXJldmVyc2VcIiksIHJldmVyc2UpLCBfY2xhc3NOYW1lcykpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBwb2ludENsYXNzTmFtZSxcbiAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgIGtleTogcG9pbnRcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXN0ZXBcIilcbiAgfSwgZWxlbWVudHMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RlcHM7IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgVHJhY2sgPSBmdW5jdGlvbiBUcmFjayhwcm9wcykge1xuICB2YXIgX3JlZiwgX3JlZjI7XG5cbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGluY2x1ZGVkID0gcHJvcHMuaW5jbHVkZWQsXG4gICAgICB2ZXJ0aWNhbCA9IHByb3BzLnZlcnRpY2FsLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZTtcbiAgdmFyIGxlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IHByb3BzLm9mZnNldCxcbiAgICAgIHJldmVyc2UgPSBwcm9wcy5yZXZlcnNlO1xuXG4gIGlmIChsZW5ndGggPCAwKSB7XG4gICAgcmV2ZXJzZSA9ICFyZXZlcnNlO1xuICAgIGxlbmd0aCA9IE1hdGguYWJzKGxlbmd0aCk7XG4gICAgb2Zmc2V0ID0gMTAwIC0gb2Zmc2V0O1xuICB9XG5cbiAgdmFyIHBvc2l0b25TdHlsZSA9IHZlcnRpY2FsID8gKF9yZWYgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9yZWYsIHJldmVyc2UgPyAndG9wJyA6ICdib3R0b20nLCBcIlwiLmNvbmNhdChvZmZzZXQsIFwiJVwiKSksIF9kZWZpbmVQcm9wZXJ0eShfcmVmLCByZXZlcnNlID8gJ2JvdHRvbScgOiAndG9wJywgJ2F1dG8nKSwgX2RlZmluZVByb3BlcnR5KF9yZWYsIFwiaGVpZ2h0XCIsIFwiXCIuY29uY2F0KGxlbmd0aCwgXCIlXCIpKSwgX3JlZikgOiAoX3JlZjIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCByZXZlcnNlID8gJ3JpZ2h0JyA6ICdsZWZ0JywgXCJcIi5jb25jYXQob2Zmc2V0LCBcIiVcIikpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIHJldmVyc2UgPyAnbGVmdCcgOiAncmlnaHQnLCAnYXV0bycpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIFwid2lkdGhcIiwgXCJcIi5jb25jYXQobGVuZ3RoLCBcIiVcIikpLCBfcmVmMik7XG5cbiAgdmFyIGVsU3R5bGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0eWxlKSwgcG9zaXRvblN0eWxlKTtcblxuICByZXR1cm4gaW5jbHVkZWQgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgc3R5bGU6IGVsU3R5bGVcbiAgfSkgOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhY2s7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2dldCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0XCI7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZlwiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2FkZEV2ZW50TGlzdGVuZXJcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSBcInJjLXV0aWwvZXMvd2FybmluZ1wiO1xuaW1wb3J0IFN0ZXBzIGZyb20gJy4vU3RlcHMnO1xuaW1wb3J0IE1hcmtzIGZyb20gJy4vTWFya3MnO1xuaW1wb3J0IEhhbmRsZSBmcm9tICcuLi9IYW5kbGUnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2xpZGVyKENvbXBvbmVudCkge1xuICB2YXIgX2E7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblxuXG4gIHJldHVybiBfYSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDb21wb25lbnRFbmhhbmNlciwgX0NvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKENvbXBvbmVudEVuaGFuY2VyKTtcblxuICAgIGZ1bmN0aW9uIENvbXBvbmVudEVuaGFuY2VyKHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb25lbnRFbmhhbmNlcik7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgICBfdGhpcy5vbkRvd24gPSBmdW5jdGlvbiAoZSwgcG9zaXRpb24pIHtcbiAgICAgICAgdmFyIHAgPSBwb3NpdGlvbjtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBkcmFnZ2FibGVUcmFjayA9IF90aGlzJHByb3BzLmRyYWdnYWJsZVRyYWNrLFxuICAgICAgICAgICAgaXNWZXJ0aWNhbCA9IF90aGlzJHByb3BzLnZlcnRpY2FsO1xuICAgICAgICB2YXIgYm91bmRzID0gX3RoaXMuc3RhdGUuYm91bmRzO1xuICAgICAgICB2YXIgdmFsdWUgPSBkcmFnZ2FibGVUcmFjayAmJiBfdGhpcy5wb3NpdGlvbkdldFZhbHVlID8gX3RoaXMucG9zaXRpb25HZXRWYWx1ZShwKSB8fCBbXSA6IFtdO1xuICAgICAgICB2YXIgaW5Qb2ludCA9IHV0aWxzLmlzRXZlbnRGcm9tSGFuZGxlKGUsIF90aGlzLmhhbmRsZXNSZWZzKTtcbiAgICAgICAgX3RoaXMuZHJhZ1RyYWNrID0gZHJhZ2dhYmxlVHJhY2sgJiYgYm91bmRzLmxlbmd0aCA+PSAyICYmICFpblBvaW50ICYmICF2YWx1ZS5tYXAoZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgICAgICB2YXIgdiA9ICFpID8gbiA+PSBib3VuZHNbaV0gOiB0cnVlO1xuICAgICAgICAgIHJldHVybiBpID09PSB2YWx1ZS5sZW5ndGggLSAxID8gbiA8PSBib3VuZHNbaV0gOiB2O1xuICAgICAgICB9KS5zb21lKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmV0dXJuICFjO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoX3RoaXMuZHJhZ1RyYWNrKSB7XG4gICAgICAgICAgX3RoaXMuZHJhZ09mZnNldCA9IHA7XG4gICAgICAgICAgX3RoaXMuc3RhcnRCb3VuZHMgPSBfdG9Db25zdW1hYmxlQXJyYXkoYm91bmRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIWluUG9pbnQpIHtcbiAgICAgICAgICAgIF90aGlzLmRyYWdPZmZzZXQgPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlUG9zaXRpb24gPSB1dGlscy5nZXRIYW5kbGVDZW50ZXJQb3NpdGlvbihpc1ZlcnRpY2FsLCBlLnRhcmdldCk7XG4gICAgICAgICAgICBfdGhpcy5kcmFnT2Zmc2V0ID0gcCAtIGhhbmRsZVBvc2l0aW9uO1xuICAgICAgICAgICAgcCA9IGhhbmRsZVBvc2l0aW9uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLm9uU3RhcnQocCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uTW91c2VEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMucmVtb3ZlRG9jdW1lbnRFdmVudHMoKTtcblxuICAgICAgICB2YXIgaXNWZXJ0aWNhbCA9IF90aGlzLnByb3BzLnZlcnRpY2FsO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSB1dGlscy5nZXRNb3VzZVBvc2l0aW9uKGlzVmVydGljYWwsIGUpO1xuXG4gICAgICAgIF90aGlzLm9uRG93bihlLCBwb3NpdGlvbik7XG5cbiAgICAgICAgX3RoaXMuYWRkRG9jdW1lbnRNb3VzZUV2ZW50cygpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzTm90VG91Y2hFdmVudChlKSkgcmV0dXJuO1xuICAgICAgICB2YXIgaXNWZXJ0aWNhbCA9IF90aGlzLnByb3BzLnZlcnRpY2FsO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSB1dGlscy5nZXRUb3VjaFBvc2l0aW9uKGlzVmVydGljYWwsIGUpO1xuXG4gICAgICAgIF90aGlzLm9uRG93bihlLCBwb3NpdGlvbik7XG5cbiAgICAgICAgX3RoaXMuYWRkRG9jdW1lbnRUb3VjaEV2ZW50cygpO1xuXG4gICAgICAgIHV0aWxzLnBhdXNlRXZlbnQoZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkZvY3VzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgb25Gb2N1cyA9IF90aGlzJHByb3BzMi5vbkZvY3VzLFxuICAgICAgICAgICAgdmVydGljYWwgPSBfdGhpcyRwcm9wczIudmVydGljYWw7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRXZlbnRGcm9tSGFuZGxlKGUsIF90aGlzLmhhbmRsZXNSZWZzKSAmJiAhX3RoaXMuZHJhZ1RyYWNrKSB7XG4gICAgICAgICAgdmFyIGhhbmRsZVBvc2l0aW9uID0gdXRpbHMuZ2V0SGFuZGxlQ2VudGVyUG9zaXRpb24odmVydGljYWwsIGUudGFyZ2V0KTtcbiAgICAgICAgICBfdGhpcy5kcmFnT2Zmc2V0ID0gMDtcblxuICAgICAgICAgIF90aGlzLm9uU3RhcnQoaGFuZGxlUG9zaXRpb24pO1xuXG4gICAgICAgICAgdXRpbHMucGF1c2VFdmVudChlKTtcblxuICAgICAgICAgIGlmIChvbkZvY3VzKSB7XG4gICAgICAgICAgICBvbkZvY3VzKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25CbHVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIG9uQmx1ciA9IF90aGlzLnByb3BzLm9uQmx1cjtcblxuICAgICAgICBpZiAoIV90aGlzLmRyYWdUcmFjaykge1xuICAgICAgICAgIF90aGlzLm9uRW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob25CbHVyKSB7XG4gICAgICAgICAgb25CbHVyKGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5oYW5kbGVzUmVmc1tfdGhpcy5wcmV2TW92ZWRIYW5kbGVJbmRleF0pIHtcbiAgICAgICAgICBfdGhpcy5oYW5kbGVzUmVmc1tfdGhpcy5wcmV2TW92ZWRIYW5kbGVJbmRleF0uY2xpY2tGb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghX3RoaXMuc2xpZGVyUmVmKSB7XG4gICAgICAgICAgX3RoaXMub25FbmQoKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHV0aWxzLmdldE1vdXNlUG9zaXRpb24oX3RoaXMucHJvcHMudmVydGljYWwsIGUpO1xuXG4gICAgICAgIF90aGlzLm9uTW92ZShlLCBwb3NpdGlvbiAtIF90aGlzLmRyYWdPZmZzZXQsIF90aGlzLmRyYWdUcmFjaywgX3RoaXMuc3RhcnRCb3VuZHMpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodXRpbHMuaXNOb3RUb3VjaEV2ZW50KGUpIHx8ICFfdGhpcy5zbGlkZXJSZWYpIHtcbiAgICAgICAgICBfdGhpcy5vbkVuZCgpO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdXRpbHMuZ2V0VG91Y2hQb3NpdGlvbihfdGhpcy5wcm9wcy52ZXJ0aWNhbCwgZSk7XG5cbiAgICAgICAgX3RoaXMub25Nb3ZlKGUsIHBvc2l0aW9uIC0gX3RoaXMuZHJhZ09mZnNldCwgX3RoaXMuZHJhZ1RyYWNrLCBfdGhpcy5zdGFydEJvdW5kcyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoX3RoaXMuc2xpZGVyUmVmICYmIHV0aWxzLmlzRXZlbnRGcm9tSGFuZGxlKGUsIF90aGlzLmhhbmRsZXNSZWZzKSkge1xuICAgICAgICAgIF90aGlzLm9uS2V5Ym9hcmQoZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uQ2xpY2tNYXJrTGFiZWwgPSBmdW5jdGlvbiAoZSwgdmFsdWUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBfdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlXG5cblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMub25FbmQodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2F2ZVNsaWRlciA9IGZ1bmN0aW9uIChzbGlkZXIpIHtcbiAgICAgICAgX3RoaXMuc2xpZGVyUmVmID0gc2xpZGVyO1xuICAgICAgfTtcblxuICAgICAgdmFyIHN0ZXAgPSBwcm9wcy5zdGVwLFxuICAgICAgICAgIG1heCA9IHByb3BzLm1heCxcbiAgICAgICAgICBtaW4gPSBwcm9wcy5taW47XG4gICAgICB2YXIgaXNQb2ludERpZmZFdmVuID0gaXNGaW5pdGUobWF4IC0gbWluKSA/IChtYXggLSBtaW4pICUgc3RlcCA9PT0gMCA6IHRydWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgICAgd2FybmluZyhzdGVwICYmIE1hdGguZmxvb3Ioc3RlcCkgPT09IHN0ZXAgPyBpc1BvaW50RGlmZkV2ZW4gOiB0cnVlLCBcIlNsaWRlclttYXhdIC0gU2xpZGVyW21pbl0gKFwiLmNvbmNhdChtYXggLSBtaW4sIFwiKSBzaG91bGQgYmUgYSBtdWx0aXBsZSBvZiBTbGlkZXJbc3RlcF0gKFwiKS5jb25jYXQoc3RlcCwgXCIpXCIpKTtcbiAgICAgIF90aGlzLmhhbmRsZXNSZWZzID0ge307XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENvbXBvbmVudEVuaGFuY2VyLCBbe1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIFNuYXBzaG90IHRlc3RpbmcgY2Fubm90IGhhbmRsZSByZWZzLCBzbyBiZSBzdXJlIHRvIG51bGwtY2hlY2sgdGhpcy5cbiAgICAgICAgdGhpcy5kb2N1bWVudCA9IHRoaXMuc2xpZGVyUmVmICYmIHRoaXMuc2xpZGVyUmVmLm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYXV0b0ZvY3VzID0gX3RoaXMkcHJvcHMzLmF1dG9Gb2N1cyxcbiAgICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMzLmRpc2FibGVkO1xuXG4gICAgICAgIGlmIChhdXRvRm9jdXMgJiYgIWRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmIChfZ2V0KF9nZXRQcm90b3R5cGVPZihDb21wb25lbnRFbmhhbmNlci5wcm90b3R5cGUpLCBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsIHRoaXMpKSBfZ2V0KF9nZXRQcm90b3R5cGVPZihDb21wb25lbnRFbmhhbmNlci5wcm90b3R5cGUpLCBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRFdmVudHMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0U2xpZGVyU3RhcnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTbGlkZXJTdGFydCgpIHtcbiAgICAgICAgdmFyIHNsaWRlciA9IHRoaXMuc2xpZGVyUmVmO1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHZlcnRpY2FsID0gX3RoaXMkcHJvcHM0LnZlcnRpY2FsLFxuICAgICAgICAgICAgcmV2ZXJzZSA9IF90aGlzJHByb3BzNC5yZXZlcnNlO1xuICAgICAgICB2YXIgcmVjdCA9IHNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgICByZXR1cm4gcmV2ZXJzZSA/IHJlY3QuYm90dG9tIDogcmVjdC50b3A7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gd2luZG93LnBhZ2VYT2Zmc2V0ICsgKHJldmVyc2UgPyByZWN0LnJpZ2h0IDogcmVjdC5sZWZ0KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0U2xpZGVyTGVuZ3RoXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2xpZGVyTGVuZ3RoKCkge1xuICAgICAgICB2YXIgc2xpZGVyID0gdGhpcy5zbGlkZXJSZWY7XG5cbiAgICAgICAgaWYgKCFzbGlkZXIpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb29yZHMgPSBzbGlkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnZlcnRpY2FsID8gY29vcmRzLmhlaWdodCA6IGNvb3Jkcy53aWR0aDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWRkRG9jdW1lbnRUb3VjaEV2ZW50c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZERvY3VtZW50VG91Y2hFdmVudHMoKSB7XG4gICAgICAgIC8vIGp1c3Qgd29yayBmb3IgQ2hyb21lIGlPUyBTYWZhcmkgYW5kIEFuZHJvaWQgQnJvd3NlclxuICAgICAgICB0aGlzLm9uVG91Y2hNb3ZlTGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyKHRoaXMuZG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlKTtcbiAgICAgICAgdGhpcy5vblRvdWNoVXBMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXIodGhpcy5kb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5vbkVuZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFkZERvY3VtZW50TW91c2VFdmVudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREb2N1bWVudE1vdXNlRXZlbnRzKCkge1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlTGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyKHRoaXMuZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXBMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXIodGhpcy5kb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLm9uRW5kKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVtb3ZlRG9jdW1lbnRFdmVudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVEb2N1bWVudEV2ZW50cygpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuICAgICAgICB0aGlzLm9uVG91Y2hNb3ZlTGlzdGVuZXIgJiYgdGhpcy5vblRvdWNoTW92ZUxpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLm9uVG91Y2hVcExpc3RlbmVyICYmIHRoaXMub25Ub3VjaFVwTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmVMaXN0ZW5lciAmJiB0aGlzLm9uTW91c2VNb3ZlTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMub25Nb3VzZVVwTGlzdGVuZXIgJiYgdGhpcy5vbk1vdXNlVXBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZm9jdXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgdmFyIF90aGlzJGhhbmRsZXNSZWZzJDtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIChfdGhpcyRoYW5kbGVzUmVmcyQgPSB0aGlzLmhhbmRsZXNSZWZzWzBdKSA9PT0gbnVsbCB8fCBfdGhpcyRoYW5kbGVzUmVmcyQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGhhbmRsZXNSZWZzJC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJibHVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmhhbmRsZXNSZWZzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyJGhhbmRsZXNSZWZzJGtlLCBfdGhpczIkaGFuZGxlc1JlZnMka2UyO1xuXG4gICAgICAgICAgKF90aGlzMiRoYW5kbGVzUmVmcyRrZSA9IF90aGlzMi5oYW5kbGVzUmVmc1trZXldKSA9PT0gbnVsbCB8fCBfdGhpczIkaGFuZGxlc1JlZnMka2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfdGhpczIkaGFuZGxlc1JlZnMka2UyID0gX3RoaXMyJGhhbmRsZXNSZWZzJGtlLmJsdXIpID09PSBudWxsIHx8IF90aGlzMiRoYW5kbGVzUmVmcyRrZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzMiRoYW5kbGVzUmVmcyRrZTIuY2FsbChfdGhpczIkaGFuZGxlc1JlZnMka2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2FsY1ZhbHVlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2FsY1ZhbHVlKG9mZnNldCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHZlcnRpY2FsID0gX3RoaXMkcHJvcHM1LnZlcnRpY2FsLFxuICAgICAgICAgICAgbWluID0gX3RoaXMkcHJvcHM1Lm1pbixcbiAgICAgICAgICAgIG1heCA9IF90aGlzJHByb3BzNS5tYXg7XG4gICAgICAgIHZhciByYXRpbyA9IE1hdGguYWJzKE1hdGgubWF4KG9mZnNldCwgMCkgLyB0aGlzLmdldFNsaWRlckxlbmd0aCgpKTtcbiAgICAgICAgdmFyIHZhbHVlID0gdmVydGljYWwgPyAoMSAtIHJhdGlvKSAqIChtYXggLSBtaW4pICsgbWluIDogcmF0aW8gKiAobWF4IC0gbWluKSArIG1pbjtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjYWxjVmFsdWVCeVBvc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGNWYWx1ZUJ5UG9zKHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBzaWduID0gdGhpcy5wcm9wcy5yZXZlcnNlID8gLTEgOiArMTtcbiAgICAgICAgdmFyIHBpeGVsT2Zmc2V0ID0gc2lnbiAqIChwb3NpdGlvbiAtIHRoaXMuZ2V0U2xpZGVyU3RhcnQoKSk7XG4gICAgICAgIHZhciBuZXh0VmFsdWUgPSB0aGlzLnRyaW1BbGlnblZhbHVlKHRoaXMuY2FsY1ZhbHVlKHBpeGVsT2Zmc2V0KSk7XG4gICAgICAgIHJldHVybiBuZXh0VmFsdWU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNhbGNPZmZzZXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjT2Zmc2V0KHZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbWluID0gX3RoaXMkcHJvcHM2Lm1pbixcbiAgICAgICAgICAgIG1heCA9IF90aGlzJHByb3BzNi5tYXg7XG4gICAgICAgIHZhciByYXRpbyA9ICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKTtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIHJhdGlvICogMTAwKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2F2ZUhhbmRsZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNhdmVIYW5kbGUoaW5kZXgsIGhhbmRsZSkge1xuICAgICAgICB0aGlzLmhhbmRsZXNSZWZzW2luZGV4XSA9IGhhbmRsZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgdmFyIF90aGlzJHByb3BzNyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczcucHJlZml4Q2xzLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHM3LmNsYXNzTmFtZSxcbiAgICAgICAgICAgIG1hcmtzID0gX3RoaXMkcHJvcHM3Lm1hcmtzLFxuICAgICAgICAgICAgZG90cyA9IF90aGlzJHByb3BzNy5kb3RzLFxuICAgICAgICAgICAgc3RlcCA9IF90aGlzJHByb3BzNy5zdGVwLFxuICAgICAgICAgICAgaW5jbHVkZWQgPSBfdGhpcyRwcm9wczcuaW5jbHVkZWQsXG4gICAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzNy5kaXNhYmxlZCxcbiAgICAgICAgICAgIHZlcnRpY2FsID0gX3RoaXMkcHJvcHM3LnZlcnRpY2FsLFxuICAgICAgICAgICAgcmV2ZXJzZSA9IF90aGlzJHByb3BzNy5yZXZlcnNlLFxuICAgICAgICAgICAgbWluID0gX3RoaXMkcHJvcHM3Lm1pbixcbiAgICAgICAgICAgIG1heCA9IF90aGlzJHByb3BzNy5tYXgsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzNy5jaGlsZHJlbixcbiAgICAgICAgICAgIG1heGltdW1UcmFja1N0eWxlID0gX3RoaXMkcHJvcHM3Lm1heGltdW1UcmFja1N0eWxlLFxuICAgICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczcuc3R5bGUsXG4gICAgICAgICAgICByYWlsU3R5bGUgPSBfdGhpcyRwcm9wczcucmFpbFN0eWxlLFxuICAgICAgICAgICAgZG90U3R5bGUgPSBfdGhpcyRwcm9wczcuZG90U3R5bGUsXG4gICAgICAgICAgICBhY3RpdmVEb3RTdHlsZSA9IF90aGlzJHByb3BzNy5hY3RpdmVEb3RTdHlsZTtcblxuICAgICAgICB2YXIgX2dldCRjYWxsID0gX2dldChfZ2V0UHJvdG90eXBlT2YoQ29tcG9uZW50RW5oYW5jZXIucHJvdG90eXBlKSwgXCJyZW5kZXJcIiwgdGhpcykuY2FsbCh0aGlzKSxcbiAgICAgICAgICAgIHRyYWNrcyA9IF9nZXQkY2FsbC50cmFja3MsXG4gICAgICAgICAgICBoYW5kbGVzID0gX2dldCRjYWxsLmhhbmRsZXM7XG5cbiAgICAgICAgdmFyIHNsaWRlckNsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXdpdGgtbWFya3NcIiksIE9iamVjdC5rZXlzKG1hcmtzKS5sZW5ndGgpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGlzYWJsZWRcIiksIGRpc2FibGVkKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXZlcnRpY2FsXCIpLCB2ZXJ0aWNhbCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgY2xhc3NOYW1lLCBjbGFzc05hbWUpLCBfY2xhc3NOYW1lcykpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIHJlZjogdGhpcy5zYXZlU2xpZGVyLFxuICAgICAgICAgIGNsYXNzTmFtZTogc2xpZGVyQ2xhc3NOYW1lLFxuICAgICAgICAgIG9uVG91Y2hTdGFydDogZGlzYWJsZWQgPyBub29wIDogdGhpcy5vblRvdWNoU3RhcnQsXG4gICAgICAgICAgb25Nb3VzZURvd246IGRpc2FibGVkID8gbm9vcCA6IHRoaXMub25Nb3VzZURvd24sXG4gICAgICAgICAgb25Nb3VzZVVwOiBkaXNhYmxlZCA/IG5vb3AgOiB0aGlzLm9uTW91c2VVcCxcbiAgICAgICAgICBvbktleURvd246IGRpc2FibGVkID8gbm9vcCA6IHRoaXMub25LZXlEb3duLFxuICAgICAgICAgIG9uRm9jdXM6IGRpc2FibGVkID8gbm9vcCA6IHRoaXMub25Gb2N1cyxcbiAgICAgICAgICBvbkJsdXI6IGRpc2FibGVkID8gbm9vcCA6IHRoaXMub25CbHVyLFxuICAgICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJhaWxcIiksXG4gICAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbWF4aW11bVRyYWNrU3R5bGUpLCByYWlsU3R5bGUpXG4gICAgICAgIH0pLCB0cmFja3MsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN0ZXBzLCB7XG4gICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgdmVydGljYWw6IHZlcnRpY2FsLFxuICAgICAgICAgIHJldmVyc2U6IHJldmVyc2UsXG4gICAgICAgICAgbWFya3M6IG1hcmtzLFxuICAgICAgICAgIGRvdHM6IGRvdHMsXG4gICAgICAgICAgc3RlcDogc3RlcCxcbiAgICAgICAgICBpbmNsdWRlZDogaW5jbHVkZWQsXG4gICAgICAgICAgbG93ZXJCb3VuZDogdGhpcy5nZXRMb3dlckJvdW5kKCksXG4gICAgICAgICAgdXBwZXJCb3VuZDogdGhpcy5nZXRVcHBlckJvdW5kKCksXG4gICAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgICAgbWluOiBtaW4sXG4gICAgICAgICAgZG90U3R5bGU6IGRvdFN0eWxlLFxuICAgICAgICAgIGFjdGl2ZURvdFN0eWxlOiBhY3RpdmVEb3RTdHlsZVxuICAgICAgICB9KSwgaGFuZGxlcywgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWFya3MsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbWFya1wiKSxcbiAgICAgICAgICBvbkNsaWNrTGFiZWw6IGRpc2FibGVkID8gbm9vcCA6IHRoaXMub25DbGlja01hcmtMYWJlbCxcbiAgICAgICAgICB2ZXJ0aWNhbDogdmVydGljYWwsXG4gICAgICAgICAgbWFya3M6IG1hcmtzLFxuICAgICAgICAgIGluY2x1ZGVkOiBpbmNsdWRlZCxcbiAgICAgICAgICBsb3dlckJvdW5kOiB0aGlzLmdldExvd2VyQm91bmQoKSxcbiAgICAgICAgICB1cHBlckJvdW5kOiB0aGlzLmdldFVwcGVyQm91bmQoKSxcbiAgICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgICBtaW46IG1pbixcbiAgICAgICAgICByZXZlcnNlOiByZXZlcnNlXG4gICAgICAgIH0pLCBjaGlsZHJlbik7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbXBvbmVudEVuaGFuY2VyO1xuICB9KENvbXBvbmVudCksIF9hLmRpc3BsYXlOYW1lID0gXCJDb21wb25lbnRFbmhhbmNlcihcIi5jb25jYXQoQ29tcG9uZW50LmRpc3BsYXlOYW1lLCBcIilcIiksIF9hLmRlZmF1bHRQcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgQ29tcG9uZW50LmRlZmF1bHRQcm9wcyksIHt9LCB7XG4gICAgcHJlZml4Q2xzOiAncmMtc2xpZGVyJyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIG1pbjogMCxcbiAgICBtYXg6IDEwMCxcbiAgICBzdGVwOiAxLFxuICAgIG1hcmtzOiB7fSxcbiAgICBoYW5kbGU6IGZ1bmN0aW9uIGhhbmRsZShwcm9wcykge1xuICAgICAgdmFyIGluZGV4ID0gcHJvcHMuaW5kZXgsXG4gICAgICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJpbmRleFwiXSk7XG5cbiAgICAgIGRlbGV0ZSByZXN0UHJvcHMuZHJhZ2dpbmc7XG5cbiAgICAgIGlmIChyZXN0UHJvcHMudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIYW5kbGUsIF9leHRlbmRzKHt9LCByZXN0UHJvcHMsIHtcbiAgICAgICAga2V5OiBpbmRleFxuICAgICAgfSkpO1xuICAgIH0sXG4gICAgb25CZWZvcmVDaGFuZ2U6IG5vb3AsXG4gICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgb25BZnRlckNoYW5nZTogbm9vcCxcbiAgICBpbmNsdWRlZDogdHJ1ZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgZG90czogZmFsc2UsXG4gICAgdmVydGljYWw6IGZhbHNlLFxuICAgIHJldmVyc2U6IGZhbHNlLFxuICAgIHRyYWNrU3R5bGU6IFt7fV0sXG4gICAgaGFuZGxlU3R5bGU6IFt7fV0sXG4gICAgcmFpbFN0eWxlOiB7fSxcbiAgICBkb3RTdHlsZToge30sXG4gICAgYWN0aXZlRG90U3R5bGU6IHt9XG4gIH0pLCBfYTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9jb21tb24vU2xpZGVyVG9vbHRpcCc7XG5pbXBvcnQgSGFuZGxlIGZyb20gJy4vSGFuZGxlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNsaWRlcldpdGhUb29sdGlwKENvbXBvbmVudCkge1xuICB2YXIgX2E7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblxuXG4gIHJldHVybiBfYSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDb21wb25lbnRXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQ29tcG9uZW50V3JhcHBlcik7XG5cbiAgICBmdW5jdGlvbiBDb21wb25lbnRXcmFwcGVyKCkge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9uZW50V3JhcHBlcik7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdmlzaWJsZXM6IHt9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5oYW5kbGVUb29sdGlwVmlzaWJsZUNoYW5nZSA9IGZ1bmN0aW9uIChpbmRleCwgdmlzaWJsZSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZpc2libGVzOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByZXZTdGF0ZS52aXNpYmxlcyksIHt9LCBfZGVmaW5lUHJvcGVydHkoe30sIGluZGV4LCB2aXNpYmxlKSlcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmhhbmRsZVdpdGhUb29sdGlwID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgICAgICAgIGRyYWdnaW5nID0gX3JlZi5kcmFnZ2luZyxcbiAgICAgICAgICAgIGluZGV4ID0gX3JlZi5pbmRleCxcbiAgICAgICAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJ2YWx1ZVwiLCBcImRyYWdnaW5nXCIsIFwiaW5kZXhcIiwgXCJkaXNhYmxlZFwiXSk7XG5cbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICB0aXBGb3JtYXR0ZXIgPSBfdGhpcyRwcm9wcy50aXBGb3JtYXR0ZXIsXG4gICAgICAgICAgICB0aXBQcm9wcyA9IF90aGlzJHByb3BzLnRpcFByb3BzLFxuICAgICAgICAgICAgaGFuZGxlU3R5bGUgPSBfdGhpcyRwcm9wcy5oYW5kbGVTdHlsZSxcbiAgICAgICAgICAgIGdldFRvb2x0aXBDb250YWluZXIgPSBfdGhpcyRwcm9wcy5nZXRUb29sdGlwQ29udGFpbmVyO1xuXG4gICAgICAgIHZhciBfdGlwUHJvcHMkcHJlZml4Q2xzID0gdGlwUHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgcHJlZml4Q2xzID0gX3RpcFByb3BzJHByZWZpeENscyA9PT0gdm9pZCAwID8gJ3JjLXNsaWRlci10b29sdGlwJyA6IF90aXBQcm9wcyRwcmVmaXhDbHMsXG4gICAgICAgICAgICBfdGlwUHJvcHMkb3ZlcmxheSA9IHRpcFByb3BzLm92ZXJsYXksXG4gICAgICAgICAgICBvdmVybGF5ID0gX3RpcFByb3BzJG92ZXJsYXkgPT09IHZvaWQgMCA/IHRpcEZvcm1hdHRlcih2YWx1ZSkgOiBfdGlwUHJvcHMkb3ZlcmxheSxcbiAgICAgICAgICAgIF90aXBQcm9wcyRwbGFjZW1lbnQgPSB0aXBQcm9wcy5wbGFjZW1lbnQsXG4gICAgICAgICAgICBwbGFjZW1lbnQgPSBfdGlwUHJvcHMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyAndG9wJyA6IF90aXBQcm9wcyRwbGFjZW1lbnQsXG4gICAgICAgICAgICBfdGlwUHJvcHMkdmlzaWJsZSA9IHRpcFByb3BzLnZpc2libGUsXG4gICAgICAgICAgICB2aXNpYmxlID0gX3RpcFByb3BzJHZpc2libGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3RpcFByb3BzJHZpc2libGUsXG4gICAgICAgICAgICByZXN0VG9vbHRpcFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRpcFByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJvdmVybGF5XCIsIFwicGxhY2VtZW50XCIsIFwidmlzaWJsZVwiXSk7XG5cbiAgICAgICAgdmFyIGhhbmRsZVN0eWxlV2l0aEluZGV4O1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZVN0eWxlKSkge1xuICAgICAgICAgIGhhbmRsZVN0eWxlV2l0aEluZGV4ID0gaGFuZGxlU3R5bGVbaW5kZXhdIHx8IGhhbmRsZVN0eWxlWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhhbmRsZVN0eWxlV2l0aEluZGV4ID0gaGFuZGxlU3R5bGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgX2V4dGVuZHMoe30sIHJlc3RUb29sdGlwUHJvcHMsIHtcbiAgICAgICAgICBnZXRUb29sdGlwQ29udGFpbmVyOiBnZXRUb29sdGlwQ29udGFpbmVyLFxuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIG92ZXJsYXk6IG92ZXJsYXksXG4gICAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICAgICAgdmlzaWJsZTogIWRpc2FibGVkICYmIChfdGhpcy5zdGF0ZS52aXNpYmxlc1tpbmRleF0gfHwgZHJhZ2dpbmcpIHx8IHZpc2libGUsXG4gICAgICAgICAga2V5OiBpbmRleFxuICAgICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSGFuZGxlLCBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzLCB7XG4gICAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe30sIGhhbmRsZVN0eWxlV2l0aEluZGV4KSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlVG9vbHRpcFZpc2libGVDaGFuZ2UoaW5kZXgsIHRydWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlVG9vbHRpcFZpc2libGVDaGFuZ2UoaW5kZXgsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENvbXBvbmVudFdyYXBwZXIsIFt7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIGhhbmRsZTogdGhpcy5oYW5kbGVXaXRoVG9vbHRpcFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbXBvbmVudFdyYXBwZXI7XG4gIH0oUmVhY3QuQ29tcG9uZW50KSwgX2EuZGVmYXVsdFByb3BzID0ge1xuICAgIHRpcEZvcm1hdHRlcjogZnVuY3Rpb24gdGlwRm9ybWF0dGVyKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBoYW5kbGVTdHlsZTogW3t9XSxcbiAgICB0aXBQcm9wczoge30sXG4gICAgZ2V0VG9vbHRpcENvbnRhaW5lcjogZnVuY3Rpb24gZ2V0VG9vbHRpcENvbnRhaW5lcihub2RlKSB7XG4gICAgICByZXR1cm4gbm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfSwgX2E7XG59IiwiaW1wb3J0IFNsaWRlciBmcm9tICcuL1NsaWRlcic7XG5pbXBvcnQgUmFuZ2UgZnJvbSAnLi9SYW5nZSc7XG5pbXBvcnQgSGFuZGxlIGZyb20gJy4vSGFuZGxlJztcbmltcG9ydCBjcmVhdGVTbGlkZXJXaXRoVG9vbHRpcCBmcm9tICcuL2NyZWF0ZVNsaWRlcldpdGhUb29sdGlwJztcbmltcG9ydCBTbGlkZXJUb29sdGlwIGZyb20gJy4vY29tbW9uL1NsaWRlclRvb2x0aXAnO1xudmFyIEludGVybmFsU2xpZGVyID0gU2xpZGVyO1xuSW50ZXJuYWxTbGlkZXIuUmFuZ2UgPSBSYW5nZTtcbkludGVybmFsU2xpZGVyLkhhbmRsZSA9IEhhbmRsZTtcbkludGVybmFsU2xpZGVyLmNyZWF0ZVNsaWRlcldpdGhUb29sdGlwID0gY3JlYXRlU2xpZGVyV2l0aFRvb2x0aXA7XG5leHBvcnQgZGVmYXVsdCBJbnRlcm5hbFNsaWRlcjtcbmV4cG9ydCB7IFJhbmdlLCBIYW5kbGUsIGNyZWF0ZVNsaWRlcldpdGhUb29sdGlwLCBTbGlkZXJUb29sdGlwIH07IiwiaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXlcIjtcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBrZXlDb2RlIGZyb20gXCJyYy11dGlsL2VzL0tleUNvZGVcIjtcbmV4cG9ydCBmdW5jdGlvbiBpc0V2ZW50RnJvbUhhbmRsZShlLCBoYW5kbGVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGhhbmRsZXMpLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGUudGFyZ2V0ID09PSBmaW5kRE9NTm9kZShoYW5kbGVzW2tleV0pO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsdWVPdXRPZlJhbmdlKHZhbHVlLCBfcmVmKSB7XG4gIHZhciBtaW4gPSBfcmVmLm1pbixcbiAgICAgIG1heCA9IF9yZWYubWF4O1xuICByZXR1cm4gdmFsdWUgPCBtaW4gfHwgdmFsdWUgPiBtYXg7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNOb3RUb3VjaEV2ZW50KGUpIHtcbiAgcmV0dXJuIGUudG91Y2hlcy5sZW5ndGggPiAxIHx8IGUudHlwZS50b0xvd2VyQ2FzZSgpID09PSAndG91Y2hlbmQnICYmIGUudG91Y2hlcy5sZW5ndGggPiAwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENsb3Nlc3RQb2ludCh2YWwsIF9yZWYyKSB7XG4gIHZhciBtYXJrcyA9IF9yZWYyLm1hcmtzLFxuICAgICAgc3RlcCA9IF9yZWYyLnN0ZXAsXG4gICAgICBtaW4gPSBfcmVmMi5taW4sXG4gICAgICBtYXggPSBfcmVmMi5tYXg7XG4gIHZhciBwb2ludHMgPSBPYmplY3Qua2V5cyhtYXJrcykubWFwKHBhcnNlRmxvYXQpO1xuXG4gIGlmIChzdGVwICE9PSBudWxsKSB7XG4gICAgdmFyIGJhc2VOdW0gPSBNYXRoLnBvdygxMCwgZ2V0UHJlY2lzaW9uKHN0ZXApKTtcbiAgICB2YXIgbWF4U3RlcHMgPSBNYXRoLmZsb29yKChtYXggKiBiYXNlTnVtIC0gbWluICogYmFzZU51bSkgLyAoc3RlcCAqIGJhc2VOdW0pKTtcbiAgICB2YXIgc3RlcHMgPSBNYXRoLm1pbigodmFsIC0gbWluKSAvIHN0ZXAsIG1heFN0ZXBzKTtcbiAgICB2YXIgY2xvc2VzdFN0ZXAgPSBNYXRoLnJvdW5kKHN0ZXBzKSAqIHN0ZXAgKyBtaW47XG4gICAgcG9pbnRzLnB1c2goY2xvc2VzdFN0ZXApO1xuICB9XG5cbiAgdmFyIGRpZmZzID0gcG9pbnRzLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICByZXR1cm4gTWF0aC5hYnModmFsIC0gcG9pbnQpO1xuICB9KTtcbiAgcmV0dXJuIHBvaW50c1tkaWZmcy5pbmRleE9mKE1hdGgubWluLmFwcGx5KE1hdGgsIF90b0NvbnN1bWFibGVBcnJheShkaWZmcykpKV07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJlY2lzaW9uKHN0ZXApIHtcbiAgdmFyIHN0ZXBTdHJpbmcgPSBzdGVwLnRvU3RyaW5nKCk7XG4gIHZhciBwcmVjaXNpb24gPSAwO1xuXG4gIGlmIChzdGVwU3RyaW5nLmluZGV4T2YoJy4nKSA+PSAwKSB7XG4gICAgcHJlY2lzaW9uID0gc3RlcFN0cmluZy5sZW5ndGggLSBzdGVwU3RyaW5nLmluZGV4T2YoJy4nKSAtIDE7XG4gIH1cblxuICByZXR1cm4gcHJlY2lzaW9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdXNlUG9zaXRpb24odmVydGljYWwsIGUpIHtcbiAgcmV0dXJuIHZlcnRpY2FsID8gZS5jbGllbnRZIDogZS5wYWdlWDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3VjaFBvc2l0aW9uKHZlcnRpY2FsLCBlKSB7XG4gIHJldHVybiB2ZXJ0aWNhbCA/IGUudG91Y2hlc1swXS5jbGllbnRZIDogZS50b3VjaGVzWzBdLnBhZ2VYO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEhhbmRsZUNlbnRlclBvc2l0aW9uKHZlcnRpY2FsLCBoYW5kbGUpIHtcbiAgdmFyIGNvb3JkcyA9IGhhbmRsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHZlcnRpY2FsID8gY29vcmRzLnRvcCArIGNvb3Jkcy5oZWlnaHQgKiAwLjUgOiB3aW5kb3cucGFnZVhPZmZzZXQgKyBjb29yZHMubGVmdCArIGNvb3Jkcy53aWR0aCAqIDAuNTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVWYWx1ZUluUmFuZ2UodmFsLCBfcmVmMykge1xuICB2YXIgbWF4ID0gX3JlZjMubWF4LFxuICAgICAgbWluID0gX3JlZjMubWluO1xuXG4gIGlmICh2YWwgPD0gbWluKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuXG4gIGlmICh2YWwgPj0gbWF4KSB7XG4gICAgcmV0dXJuIG1heDtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlVmFsdWVQcmVjaXNpb24odmFsLCBwcm9wcykge1xuICB2YXIgc3RlcCA9IHByb3BzLnN0ZXA7XG4gIHZhciBjbG9zZXN0UG9pbnQgPSBpc0Zpbml0ZShnZXRDbG9zZXN0UG9pbnQodmFsLCBwcm9wcykpID8gZ2V0Q2xvc2VzdFBvaW50KHZhbCwgcHJvcHMpIDogMDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIHJldHVybiBzdGVwID09PSBudWxsID8gY2xvc2VzdFBvaW50IDogcGFyc2VGbG9hdChjbG9zZXN0UG9pbnQudG9GaXhlZChnZXRQcmVjaXNpb24oc3RlcCkpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXVzZUV2ZW50KGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5leHRWYWx1ZShmdW5jLCB2YWx1ZSwgcHJvcHMpIHtcbiAgdmFyIG9wZXJhdGlvbnMgPSB7XG4gICAgaW5jcmVhc2U6IGZ1bmN0aW9uIGluY3JlYXNlKGEsIGIpIHtcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICB9LFxuICAgIGRlY3JlYXNlOiBmdW5jdGlvbiBkZWNyZWFzZShhLCBiKSB7XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfVxuICB9O1xuICB2YXIgaW5kZXhUb0dldCA9IG9wZXJhdGlvbnNbZnVuY10oT2JqZWN0LmtleXMocHJvcHMubWFya3MpLmluZGV4T2YoSlNPTi5zdHJpbmdpZnkodmFsdWUpKSwgMSk7XG4gIHZhciBrZXlUb0dldCA9IE9iamVjdC5rZXlzKHByb3BzLm1hcmtzKVtpbmRleFRvR2V0XTtcblxuICBpZiAocHJvcHMuc3RlcCkge1xuICAgIHJldHVybiBvcGVyYXRpb25zW2Z1bmNdKHZhbHVlLCBwcm9wcy5zdGVwKTtcbiAgfVxuXG4gIGlmICghIU9iamVjdC5rZXlzKHByb3BzLm1hcmtzKS5sZW5ndGggJiYgISFwcm9wcy5tYXJrc1trZXlUb0dldF0pIHtcbiAgICByZXR1cm4gcHJvcHMubWFya3Nba2V5VG9HZXRdO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleWJvYXJkVmFsdWVNdXRhdG9yKGUsIHZlcnRpY2FsLCByZXZlcnNlKSB7XG4gIHZhciBpbmNyZWFzZSA9ICdpbmNyZWFzZSc7XG4gIHZhciBkZWNyZWFzZSA9ICdkZWNyZWFzZSc7XG4gIHZhciBtZXRob2QgPSBpbmNyZWFzZTtcblxuICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIGNhc2Uga2V5Q29kZS5VUDpcbiAgICAgIG1ldGhvZCA9IHZlcnRpY2FsICYmIHJldmVyc2UgPyBkZWNyZWFzZSA6IGluY3JlYXNlO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGtleUNvZGUuUklHSFQ6XG4gICAgICBtZXRob2QgPSAhdmVydGljYWwgJiYgcmV2ZXJzZSA/IGRlY3JlYXNlIDogaW5jcmVhc2U7XG4gICAgICBicmVhaztcblxuICAgIGNhc2Uga2V5Q29kZS5ET1dOOlxuICAgICAgbWV0aG9kID0gdmVydGljYWwgJiYgcmV2ZXJzZSA/IGluY3JlYXNlIDogZGVjcmVhc2U7XG4gICAgICBicmVhaztcblxuICAgIGNhc2Uga2V5Q29kZS5MRUZUOlxuICAgICAgbWV0aG9kID0gIXZlcnRpY2FsICYmIHJldmVyc2UgPyBpbmNyZWFzZSA6IGRlY3JlYXNlO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGtleUNvZGUuRU5EOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLm1heDtcbiAgICAgIH07XG5cbiAgICBjYXNlIGtleUNvZGUuSE9NRTpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy5taW47XG4gICAgICB9O1xuXG4gICAgY2FzZSBrZXlDb2RlLlBBR0VfVVA6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCBwcm9wcykge1xuICAgICAgICByZXR1cm4gdmFsdWUgKyBwcm9wcy5zdGVwICogMjtcbiAgICAgIH07XG5cbiAgICBjYXNlIGtleUNvZGUuUEFHRV9ET1dOOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIC0gcHJvcHMuc3RlcCAqIDI7XG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCBwcm9wcykge1xuICAgIHJldHVybiBjYWxjdWxhdGVOZXh0VmFsdWUobWV0aG9kLCB2YWx1ZSwgcHJvcHMpO1xuICB9O1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIENvbnRlbnQgPSBmdW5jdGlvbiBDb250ZW50KHByb3BzKSB7XG4gIHZhciBvdmVybGF5ID0gcHJvcHMub3ZlcmxheSxcbiAgICAgIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGlkID0gcHJvcHMuaWQsXG4gICAgICBvdmVybGF5SW5uZXJTdHlsZSA9IHByb3BzLm92ZXJsYXlJbm5lclN0eWxlO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbm5lclwiKSxcbiAgICBpZDogaWQsXG4gICAgcm9sZTogXCJ0b29sdGlwXCIsXG4gICAgc3R5bGU6IG92ZXJsYXlJbm5lclN0eWxlXG4gIH0sIHR5cGVvZiBvdmVybGF5ID09PSAnZnVuY3Rpb24nID8gb3ZlcmxheSgpIDogb3ZlcmxheSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUsIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJpZ2dlciBmcm9tICdyYy10cmlnZ2VyJztcbmltcG9ydCB7IHBsYWNlbWVudHMgfSBmcm9tICcuL3BsYWNlbWVudHMnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50JztcblxudmFyIFRvb2x0aXAgPSBmdW5jdGlvbiBUb29sdGlwKHByb3BzLCByZWYpIHtcbiAgdmFyIG92ZXJsYXlDbGFzc05hbWUgPSBwcm9wcy5vdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJHRyaWdnZXIgPSBwcm9wcy50cmlnZ2VyLFxuICAgICAgdHJpZ2dlciA9IF9wcm9wcyR0cmlnZ2VyID09PSB2b2lkIDAgPyBbJ2hvdmVyJ10gOiBfcHJvcHMkdHJpZ2dlcixcbiAgICAgIF9wcm9wcyRtb3VzZUVudGVyRGVsYSA9IHByb3BzLm1vdXNlRW50ZXJEZWxheSxcbiAgICAgIG1vdXNlRW50ZXJEZWxheSA9IF9wcm9wcyRtb3VzZUVudGVyRGVsYSA9PT0gdm9pZCAwID8gMCA6IF9wcm9wcyRtb3VzZUVudGVyRGVsYSxcbiAgICAgIF9wcm9wcyRtb3VzZUxlYXZlRGVsYSA9IHByb3BzLm1vdXNlTGVhdmVEZWxheSxcbiAgICAgIG1vdXNlTGVhdmVEZWxheSA9IF9wcm9wcyRtb3VzZUxlYXZlRGVsYSA9PT0gdm9pZCAwID8gMC4xIDogX3Byb3BzJG1vdXNlTGVhdmVEZWxhLFxuICAgICAgb3ZlcmxheVN0eWxlID0gcHJvcHMub3ZlcmxheVN0eWxlLFxuICAgICAgX3Byb3BzJHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIHByZWZpeENscyA9IF9wcm9wcyRwcmVmaXhDbHMgPT09IHZvaWQgMCA/ICdyYy10b29sdGlwJyA6IF9wcm9wcyRwcmVmaXhDbHMsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgb25WaXNpYmxlQ2hhbmdlID0gcHJvcHMub25WaXNpYmxlQ2hhbmdlLFxuICAgICAgYWZ0ZXJWaXNpYmxlQ2hhbmdlID0gcHJvcHMuYWZ0ZXJWaXNpYmxlQ2hhbmdlLFxuICAgICAgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy50cmFuc2l0aW9uTmFtZSxcbiAgICAgIGFuaW1hdGlvbiA9IHByb3BzLmFuaW1hdGlvbixcbiAgICAgIG1vdGlvbiA9IHByb3BzLm1vdGlvbixcbiAgICAgIF9wcm9wcyRwbGFjZW1lbnQgPSBwcm9wcy5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcHJvcHMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyAncmlnaHQnIDogX3Byb3BzJHBsYWNlbWVudCxcbiAgICAgIF9wcm9wcyRhbGlnbiA9IHByb3BzLmFsaWduLFxuICAgICAgYWxpZ24gPSBfcHJvcHMkYWxpZ24gPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJGFsaWduLFxuICAgICAgX3Byb3BzJGRlc3Ryb3lUb29sdGlwID0gcHJvcHMuZGVzdHJveVRvb2x0aXBPbkhpZGUsXG4gICAgICBkZXN0cm95VG9vbHRpcE9uSGlkZSA9IF9wcm9wcyRkZXN0cm95VG9vbHRpcCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGVzdHJveVRvb2x0aXAsXG4gICAgICBkZWZhdWx0VmlzaWJsZSA9IHByb3BzLmRlZmF1bHRWaXNpYmxlLFxuICAgICAgZ2V0VG9vbHRpcENvbnRhaW5lciA9IHByb3BzLmdldFRvb2x0aXBDb250YWluZXIsXG4gICAgICBvdmVybGF5SW5uZXJTdHlsZSA9IHByb3BzLm92ZXJsYXlJbm5lclN0eWxlLFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJvdmVybGF5Q2xhc3NOYW1lXCIsIFwidHJpZ2dlclwiLCBcIm1vdXNlRW50ZXJEZWxheVwiLCBcIm1vdXNlTGVhdmVEZWxheVwiLCBcIm92ZXJsYXlTdHlsZVwiLCBcInByZWZpeENsc1wiLCBcImNoaWxkcmVuXCIsIFwib25WaXNpYmxlQ2hhbmdlXCIsIFwiYWZ0ZXJWaXNpYmxlQ2hhbmdlXCIsIFwidHJhbnNpdGlvbk5hbWVcIiwgXCJhbmltYXRpb25cIiwgXCJtb3Rpb25cIiwgXCJwbGFjZW1lbnRcIiwgXCJhbGlnblwiLCBcImRlc3Ryb3lUb29sdGlwT25IaWRlXCIsIFwiZGVmYXVsdFZpc2libGVcIiwgXCJnZXRUb29sdGlwQ29udGFpbmVyXCIsIFwib3ZlcmxheUlubmVyU3R5bGVcIl0pO1xuXG4gIHZhciBkb21SZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRvbVJlZi5jdXJyZW50O1xuICB9KTtcblxuICB2YXIgZXh0cmFQcm9wcyA9IF9vYmplY3RTcHJlYWQoe30sIHJlc3RQcm9wcyk7XG5cbiAgaWYgKCd2aXNpYmxlJyBpbiBwcm9wcykge1xuICAgIGV4dHJhUHJvcHMucG9wdXBWaXNpYmxlID0gcHJvcHMudmlzaWJsZTtcbiAgfVxuXG4gIHZhciBnZXRQb3B1cEVsZW1lbnQgPSBmdW5jdGlvbiBnZXRQb3B1cEVsZW1lbnQoKSB7XG4gICAgdmFyIF9wcm9wcyRhcnJvd0NvbnRlbnQgPSBwcm9wcy5hcnJvd0NvbnRlbnQsXG4gICAgICAgIGFycm93Q29udGVudCA9IF9wcm9wcyRhcnJvd0NvbnRlbnQgPT09IHZvaWQgMCA/IG51bGwgOiBfcHJvcHMkYXJyb3dDb250ZW50LFxuICAgICAgICBvdmVybGF5ID0gcHJvcHMub3ZlcmxheSxcbiAgICAgICAgaWQgPSBwcm9wcy5pZDtcbiAgICByZXR1cm4gWy8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hcnJvd1wiKSxcbiAgICAgIGtleTogXCJhcnJvd1wiXG4gICAgfSwgYXJyb3dDb250ZW50KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwge1xuICAgICAga2V5OiBcImNvbnRlbnRcIixcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgaWQ6IGlkLFxuICAgICAgb3ZlcmxheTogb3ZlcmxheSxcbiAgICAgIG92ZXJsYXlJbm5lclN0eWxlOiBvdmVybGF5SW5uZXJTdHlsZVxuICAgIH0pXTtcbiAgfTtcblxuICB2YXIgZGVzdHJveVRvb2x0aXAgPSBmYWxzZTtcbiAgdmFyIGF1dG9EZXN0cm95ID0gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBkZXN0cm95VG9vbHRpcE9uSGlkZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgZGVzdHJveVRvb2x0aXAgPSBkZXN0cm95VG9vbHRpcE9uSGlkZTtcbiAgfSBlbHNlIGlmIChkZXN0cm95VG9vbHRpcE9uSGlkZSAmJiBfdHlwZW9mKGRlc3Ryb3lUb29sdGlwT25IaWRlKSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIga2VlcFBhcmVudCA9IGRlc3Ryb3lUb29sdGlwT25IaWRlLmtlZXBQYXJlbnQ7XG4gICAgZGVzdHJveVRvb2x0aXAgPSBrZWVwUGFyZW50ID09PSB0cnVlO1xuICAgIGF1dG9EZXN0cm95ID0ga2VlcFBhcmVudCA9PT0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJpZ2dlciwgX2V4dGVuZHMoe1xuICAgIHBvcHVwQ2xhc3NOYW1lOiBvdmVybGF5Q2xhc3NOYW1lLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIHBvcHVwOiBnZXRQb3B1cEVsZW1lbnQsXG4gICAgYWN0aW9uOiB0cmlnZ2VyLFxuICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBwbGFjZW1lbnRzLFxuICAgIHBvcHVwUGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgcmVmOiBkb21SZWYsXG4gICAgcG9wdXBBbGlnbjogYWxpZ24sXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFRvb2x0aXBDb250YWluZXIsXG4gICAgb25Qb3B1cFZpc2libGVDaGFuZ2U6IG9uVmlzaWJsZUNoYW5nZSxcbiAgICBhZnRlclBvcHVwVmlzaWJsZUNoYW5nZTogYWZ0ZXJWaXNpYmxlQ2hhbmdlLFxuICAgIHBvcHVwVHJhbnNpdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lLFxuICAgIHBvcHVwQW5pbWF0aW9uOiBhbmltYXRpb24sXG4gICAgcG9wdXBNb3Rpb246IG1vdGlvbixcbiAgICBkZWZhdWx0UG9wdXBWaXNpYmxlOiBkZWZhdWx0VmlzaWJsZSxcbiAgICBkZXN0cm95UG9wdXBPbkhpZGU6IGRlc3Ryb3lUb29sdGlwLFxuICAgIGF1dG9EZXN0cm95OiBhdXRvRGVzdHJveSxcbiAgICBtb3VzZUxlYXZlRGVsYXk6IG1vdXNlTGVhdmVEZWxheSxcbiAgICBwb3B1cFN0eWxlOiBvdmVybGF5U3R5bGUsXG4gICAgbW91c2VFbnRlckRlbGF5OiBtb3VzZUVudGVyRGVsYXlcbiAgfSwgZXh0cmFQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKFRvb2x0aXApOyIsImltcG9ydCBUb29sdGlwIGZyb20gJy4vVG9vbHRpcCc7XG5leHBvcnQgZGVmYXVsdCBUb29sdGlwOyIsInZhciBhdXRvQWRqdXN0T3ZlcmZsb3cgPSB7XG4gIGFkanVzdFg6IDEsXG4gIGFkanVzdFk6IDFcbn07XG52YXIgdGFyZ2V0T2Zmc2V0ID0gWzAsIDBdO1xuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0ge1xuICBsZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2NyJywgJ2NsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnY2wnLCAnY3InXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcDoge1xuICAgIHBvaW50czogWydiYycsICd0YyddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbToge1xuICAgIHBvaW50czogWyd0YycsICdiYyddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wTGVmdDoge1xuICAgIHBvaW50czogWydibCcsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGxlZnRUb3A6IHtcbiAgICBwb2ludHM6IFsndHInLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3BSaWdodDoge1xuICAgIHBvaW50czogWydicicsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ3RyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b21SaWdodDoge1xuICAgIHBvaW50czogWyd0cicsICdiciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHRCb3R0b206IHtcbiAgICBwb2ludHM6IFsnYmwnLCAnYnInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbUxlZnQ6IHtcbiAgICBwb2ludHM6IFsndGwnLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGxlZnRCb3R0b206IHtcbiAgICBwb2ludHM6IFsnYnInLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgcGxhY2VtZW50czsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDU1NNb3Rpb24gZnJvbSAncmMtbW90aW9uJztcbmltcG9ydCB7IGdldE1vdGlvbiB9IGZyb20gJy4uL3V0aWxzL2xlZ2FjeVV0aWwnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFzayhwcm9wcykge1xuICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICB6SW5kZXggPSBwcm9wcy56SW5kZXgsXG4gICAgICBtYXNrID0gcHJvcHMubWFzayxcbiAgICAgIG1hc2tNb3Rpb24gPSBwcm9wcy5tYXNrTW90aW9uLFxuICAgICAgbWFza0FuaW1hdGlvbiA9IHByb3BzLm1hc2tBbmltYXRpb24sXG4gICAgICBtYXNrVHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5tYXNrVHJhbnNpdGlvbk5hbWU7XG5cbiAgaWYgKCFtYXNrKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbW90aW9uID0ge307XG5cbiAgaWYgKG1hc2tNb3Rpb24gfHwgbWFza1RyYW5zaXRpb25OYW1lIHx8IG1hc2tBbmltYXRpb24pIHtcbiAgICBtb3Rpb24gPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIG1vdGlvbkFwcGVhcjogdHJ1ZVxuICAgIH0sIGdldE1vdGlvbih7XG4gICAgICBtb3Rpb246IG1hc2tNb3Rpb24sXG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgIHRyYW5zaXRpb25OYW1lOiBtYXNrVHJhbnNpdGlvbk5hbWUsXG4gICAgICBhbmltYXRpb246IG1hc2tBbmltYXRpb25cbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ1NTTW90aW9uLCBfZXh0ZW5kcyh7fSwgbW90aW9uLCB7XG4gICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICByZW1vdmVPbkxlYXZlOiB0cnVlXG4gIH0pLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgekluZGV4OiB6SW5kZXhcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tYXNrXCIpLCBjbGFzc05hbWUpXG4gICAgfSk7XG4gIH0pO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDU1NNb3Rpb24gZnJvbSAncmMtbW90aW9uJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xudmFyIE1vYmlsZVBvcHVwSW5uZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICB6SW5kZXggPSBwcm9wcy56SW5kZXgsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgX3Byb3BzJG1vYmlsZSA9IHByb3BzLm1vYmlsZTtcbiAgX3Byb3BzJG1vYmlsZSA9IF9wcm9wcyRtb2JpbGUgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJG1vYmlsZTtcbiAgdmFyIHBvcHVwQ2xhc3NOYW1lID0gX3Byb3BzJG1vYmlsZS5wb3B1cENsYXNzTmFtZSxcbiAgICAgIHBvcHVwU3R5bGUgPSBfcHJvcHMkbW9iaWxlLnBvcHVwU3R5bGUsXG4gICAgICBfcHJvcHMkbW9iaWxlJHBvcHVwTW8gPSBfcHJvcHMkbW9iaWxlLnBvcHVwTW90aW9uLFxuICAgICAgcG9wdXBNb3Rpb24gPSBfcHJvcHMkbW9iaWxlJHBvcHVwTW8gPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJG1vYmlsZSRwb3B1cE1vLFxuICAgICAgcG9wdXBSZW5kZXIgPSBfcHJvcHMkbW9iaWxlLnBvcHVwUmVuZGVyO1xuICB2YXIgZWxlbWVudFJlZiA9IFJlYWN0LnVzZVJlZigpOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IFJlZnMgPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcmNlQWxpZ246IGZ1bmN0aW9uIGZvcmNlQWxpZ24oKSB7fSxcbiAgICAgIGdldEVsZW1lbnQ6IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50UmVmLmN1cnJlbnQ7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG1lcmdlZFN0eWxlID0gX29iamVjdFNwcmVhZCh7XG4gICAgekluZGV4OiB6SW5kZXhcbiAgfSwgcG9wdXBTdHlsZSk7XG5cbiAgdmFyIGNoaWxkTm9kZSA9IGNoaWxkcmVuOyAvLyBXcmFwcGVyIHdoZW4gbXVsdGlwbGUgY2hpbGRyZW5cblxuICBpZiAoUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID4gMSkge1xuICAgIGNoaWxkTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50XCIpXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9IC8vIE1vYmlsZSBzdXBwb3J0IGFkZGl0aW9uYWwgcmVuZGVyXG5cblxuICBpZiAocG9wdXBSZW5kZXIpIHtcbiAgICBjaGlsZE5vZGUgPSBwb3B1cFJlbmRlcihjaGlsZE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENTU01vdGlvbiwgX2V4dGVuZHMoe1xuICAgIHZpc2libGU6IHZpc2libGUsXG4gICAgcmVmOiBlbGVtZW50UmVmLFxuICAgIHJlbW92ZU9uTGVhdmU6IHRydWVcbiAgfSwgcG9wdXBNb3Rpb24pLCBmdW5jdGlvbiAoX3JlZiwgbW90aW9uUmVmKSB7XG4gICAgdmFyIG1vdGlvbkNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgICBtb3Rpb25TdHlsZSA9IF9yZWYuc3R5bGU7XG4gICAgdmFyIG1lcmdlZENsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBwb3B1cENsYXNzTmFtZSwgbW90aW9uQ2xhc3NOYW1lKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgcmVmOiBtb3Rpb25SZWYsXG4gICAgICBjbGFzc05hbWU6IG1lcmdlZENsYXNzTmFtZSxcbiAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG1vdGlvblN0eWxlKSwgbWVyZ2VkU3R5bGUpXG4gICAgfSwgY2hpbGROb2RlKTtcbiAgfSk7XG59KTtcbk1vYmlsZVBvcHVwSW5uZXIuZGlzcGxheU5hbWUgPSAnTW9iaWxlUG9wdXBJbm5lcic7XG5leHBvcnQgZGVmYXVsdCBNb2JpbGVQb3B1cElubmVyOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbGlnbiBmcm9tICdyYy1hbGlnbic7XG5pbXBvcnQgQ1NTTW90aW9uIGZyb20gJ3JjLW1vdGlvbic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB1c2VWaXNpYmxlU3RhdHVzIGZyb20gJy4vdXNlVmlzaWJsZVN0YXR1cyc7XG5pbXBvcnQgeyBnZXRNb3Rpb24gfSBmcm9tICcuLi91dGlscy9sZWdhY3lVdGlsJztcbmltcG9ydCB1c2VTdHJldGNoU3R5bGUgZnJvbSAnLi91c2VTdHJldGNoU3R5bGUnO1xudmFyIFBvcHVwSW5uZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHpJbmRleCA9IHByb3BzLnpJbmRleCxcbiAgICAgIHN0cmV0Y2ggPSBwcm9wcy5zdHJldGNoLFxuICAgICAgZGVzdHJveVBvcHVwT25IaWRlID0gcHJvcHMuZGVzdHJveVBvcHVwT25IaWRlLFxuICAgICAgYWxpZ24gPSBwcm9wcy5hbGlnbixcbiAgICAgIHBvaW50ID0gcHJvcHMucG9pbnQsXG4gICAgICBnZXRSb290RG9tTm9kZSA9IHByb3BzLmdldFJvb3REb21Ob2RlLFxuICAgICAgZ2V0Q2xhc3NOYW1lRnJvbUFsaWduID0gcHJvcHMuZ2V0Q2xhc3NOYW1lRnJvbUFsaWduLFxuICAgICAgb25BbGlnbiA9IHByb3BzLm9uQWxpZ24sXG4gICAgICBvbk1vdXNlRW50ZXIgPSBwcm9wcy5vbk1vdXNlRW50ZXIsXG4gICAgICBvbk1vdXNlTGVhdmUgPSBwcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICBvbk1vdXNlRG93biA9IHByb3BzLm9uTW91c2VEb3duLFxuICAgICAgb25Ub3VjaFN0YXJ0ID0gcHJvcHMub25Ub3VjaFN0YXJ0O1xuICB2YXIgYWxpZ25SZWYgPSB1c2VSZWYoKTtcbiAgdmFyIGVsZW1lbnRSZWYgPSB1c2VSZWYoKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgYWxpZ25lZENsYXNzTmFtZSA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRBbGlnbmVkQ2xhc3NOYW1lID0gX3VzZVN0YXRlMlsxXTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT0gTWVhc3VyZSA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBfdXNlU3RyZXRjaFN0eWxlID0gdXNlU3RyZXRjaFN0eWxlKHN0cmV0Y2gpLFxuICAgICAgX3VzZVN0cmV0Y2hTdHlsZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RyZXRjaFN0eWxlLCAyKSxcbiAgICAgIHN0cmV0Y2hTdHlsZSA9IF91c2VTdHJldGNoU3R5bGUyWzBdLFxuICAgICAgbWVhc3VyZVN0cmV0Y2hTdHlsZSA9IF91c2VTdHJldGNoU3R5bGUyWzFdO1xuXG4gIGZ1bmN0aW9uIGRvTWVhc3VyZSgpIHtcbiAgICBpZiAoc3RyZXRjaCkge1xuICAgICAgbWVhc3VyZVN0cmV0Y2hTdHlsZShnZXRSb290RG9tTm9kZSgpKTtcbiAgICB9XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09IFN0YXR1cyA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBfdXNlVmlzaWJsZVN0YXR1cyA9IHVzZVZpc2libGVTdGF0dXModmlzaWJsZSwgZG9NZWFzdXJlKSxcbiAgICAgIF91c2VWaXNpYmxlU3RhdHVzMiA9IF9zbGljZWRUb0FycmF5KF91c2VWaXNpYmxlU3RhdHVzLCAyKSxcbiAgICAgIHN0YXR1cyA9IF91c2VWaXNpYmxlU3RhdHVzMlswXSxcbiAgICAgIGdvTmV4dFN0YXR1cyA9IF91c2VWaXNpYmxlU3RhdHVzMlsxXTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09IEFsaWducyA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBwcmVwYXJlUmVzb2x2ZVJlZiA9IHVzZVJlZigpOyAvLyBgdGFyZ2V0YCBvbiBgcmMtYWxpZ25gIGNhbiBhY2NlcHQgYXMgYSBmdW5jdGlvbiB0byBnZXQgdGhlIGJpbmQgZWxlbWVudCBvciBhIHBvaW50LlxuICAvLyByZWY6IGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JjLWFsaWduXG5cbiAgZnVuY3Rpb24gZ2V0QWxpZ25UYXJnZXQoKSB7XG4gICAgaWYgKHBvaW50KSB7XG4gICAgICByZXR1cm4gcG9pbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldFJvb3REb21Ob2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9yY2VBbGlnbigpIHtcbiAgICB2YXIgX2FsaWduUmVmJGN1cnJlbnQ7XG5cbiAgICAoX2FsaWduUmVmJGN1cnJlbnQgPSBhbGlnblJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYWxpZ25SZWYkY3VycmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FsaWduUmVmJGN1cnJlbnQuZm9yY2VBbGlnbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25JbnRlcm5hbEFsaWduKHBvcHVwRG9tTm9kZSwgbWF0Y2hBbGlnbikge1xuICAgIGlmIChzdGF0dXMgPT09ICdhbGlnbicpIHtcbiAgICAgIHZhciBuZXh0QWxpZ25lZENsYXNzTmFtZSA9IGdldENsYXNzTmFtZUZyb21BbGlnbihtYXRjaEFsaWduKTtcbiAgICAgIHNldEFsaWduZWRDbGFzc05hbWUobmV4dEFsaWduZWRDbGFzc05hbWUpOyAvLyBSZXBlYXQgdW50aWwgbm90IG1vcmUgYWxpZ24gbmVlZGVkXG5cbiAgICAgIGlmIChhbGlnbmVkQ2xhc3NOYW1lICE9PSBuZXh0QWxpZ25lZENsYXNzTmFtZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmb3JjZUFsaWduKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ29OZXh0U3RhdHVzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgX3ByZXBhcmVSZXNvbHZlUmVmJGN1O1xuXG4gICAgICAgICAgKF9wcmVwYXJlUmVzb2x2ZVJlZiRjdSA9IHByZXBhcmVSZXNvbHZlUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9wcmVwYXJlUmVzb2x2ZVJlZiRjdSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3ByZXBhcmVSZXNvbHZlUmVmJGN1LmNhbGwocHJlcGFyZVJlc29sdmVSZWYpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgb25BbGlnbiA9PT0gbnVsbCB8fCBvbkFsaWduID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkFsaWduKHBvcHVwRG9tTm9kZSwgbWF0Y2hBbGlnbik7XG4gICAgfVxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PSBNb3Rpb24gPT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgbW90aW9uID0gX29iamVjdFNwcmVhZCh7fSwgZ2V0TW90aW9uKHByb3BzKSk7XG5cbiAgWydvbkFwcGVhckVuZCcsICdvbkVudGVyRW5kJywgJ29uTGVhdmVFbmQnXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICB2YXIgb3JpZ2luSGFuZGxlciA9IG1vdGlvbltldmVudE5hbWVdO1xuXG4gICAgbW90aW9uW2V2ZW50TmFtZV0gPSBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnQpIHtcbiAgICAgIGdvTmV4dFN0YXR1cygpO1xuICAgICAgcmV0dXJuIG9yaWdpbkhhbmRsZXIgPT09IG51bGwgfHwgb3JpZ2luSGFuZGxlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3JpZ2luSGFuZGxlcihlbGVtZW50LCBldmVudCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25TaG93UHJlcGFyZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHByZXBhcmVSZXNvbHZlUmVmLmN1cnJlbnQgPSByZXNvbHZlO1xuICAgIH0pO1xuICB9IC8vIEdvIHRvIHN0YWJsZSBkaXJlY3RseSB3aGVuIG1vdGlvbiBub3QgcHJvdmlkZWRcblxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFtb3Rpb24ubW90aW9uTmFtZSAmJiBzdGF0dXMgPT09ICdtb3Rpb24nKSB7XG4gICAgICBnb05leHRTdGF0dXMoKTtcbiAgICB9XG4gIH0sIFttb3Rpb24ubW90aW9uTmFtZSwgc3RhdHVzXSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gUmVmcyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9yY2VBbGlnbjogZm9yY2VBbGlnbixcbiAgICAgIGdldEVsZW1lbnQ6IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50UmVmLmN1cnJlbnQ7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG1lcmdlZFN0eWxlID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0cmV0Y2hTdHlsZSksIHt9LCB7XG4gICAgekluZGV4OiB6SW5kZXhcbiAgfSwgc3R5bGUpLCB7fSwge1xuICAgIG9wYWNpdHk6IHN0YXR1cyA9PT0gJ21vdGlvbicgfHwgc3RhdHVzID09PSAnc3RhYmxlJyB8fCAhdmlzaWJsZSA/IHVuZGVmaW5lZCA6IDAsXG4gICAgcG9pbnRlckV2ZW50czogc3RhdHVzID09PSAnc3RhYmxlJyA/IHVuZGVmaW5lZCA6ICdub25lJ1xuICB9KTsgLy8gQWxpZ24gc3RhdHVzXG5cblxuICB2YXIgYWxpZ25EaXNhYmxlZCA9IHRydWU7XG5cbiAgaWYgKChhbGlnbiA9PT0gbnVsbCB8fCBhbGlnbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWxpZ24ucG9pbnRzKSAmJiAoc3RhdHVzID09PSAnYWxpZ24nIHx8IHN0YXR1cyA9PT0gJ3N0YWJsZScpKSB7XG4gICAgYWxpZ25EaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGNoaWxkTm9kZSA9IGNoaWxkcmVuOyAvLyBXcmFwcGVyIHdoZW4gbXVsdGlwbGUgY2hpbGRyZW5cblxuICBpZiAoUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID4gMSkge1xuICAgIGNoaWxkTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50XCIpXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENTU01vdGlvbiwgX2V4dGVuZHMoe1xuICAgIHZpc2libGU6IHZpc2libGUsXG4gICAgcmVmOiBlbGVtZW50UmVmLFxuICAgIGxlYXZlZENsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oaWRkZW5cIilcbiAgfSwgbW90aW9uLCB7XG4gICAgb25BcHBlYXJQcmVwYXJlOiBvblNob3dQcmVwYXJlLFxuICAgIG9uRW50ZXJQcmVwYXJlOiBvblNob3dQcmVwYXJlLFxuICAgIHJlbW92ZU9uTGVhdmU6IGRlc3Ryb3lQb3B1cE9uSGlkZVxuICB9KSwgZnVuY3Rpb24gKF9yZWYsIG1vdGlvblJlZikge1xuICAgIHZhciBtb3Rpb25DbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgICAgbW90aW9uU3R5bGUgPSBfcmVmLnN0eWxlO1xuICAgIHZhciBtZXJnZWRDbGFzc05hbWUgPSBjbGFzc05hbWVzKHByZWZpeENscywgY2xhc3NOYW1lLCBhbGlnbmVkQ2xhc3NOYW1lLCBtb3Rpb25DbGFzc05hbWUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBbGlnbiwge1xuICAgICAgdGFyZ2V0OiBnZXRBbGlnblRhcmdldCgpLFxuICAgICAga2V5OiBcInBvcHVwXCIsXG4gICAgICByZWY6IGFsaWduUmVmLFxuICAgICAgbW9uaXRvcldpbmRvd1Jlc2l6ZTogdHJ1ZSxcbiAgICAgIGRpc2FibGVkOiBhbGlnbkRpc2FibGVkLFxuICAgICAgYWxpZ246IGFsaWduLFxuICAgICAgb25BbGlnbjogb25JbnRlcm5hbEFsaWduXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgcmVmOiBtb3Rpb25SZWYsXG4gICAgICBjbGFzc05hbWU6IG1lcmdlZENsYXNzTmFtZSxcbiAgICAgIG9uTW91c2VFbnRlcjogb25Nb3VzZUVudGVyLFxuICAgICAgb25Nb3VzZUxlYXZlOiBvbk1vdXNlTGVhdmUsXG4gICAgICBvbk1vdXNlRG93bkNhcHR1cmU6IG9uTW91c2VEb3duLFxuICAgICAgb25Ub3VjaFN0YXJ0Q2FwdHVyZTogb25Ub3VjaFN0YXJ0LFxuICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbW90aW9uU3R5bGUpLCBtZXJnZWRTdHlsZSlcbiAgICB9LCBjaGlsZE5vZGUpKTtcbiAgfSk7XG59KTtcblBvcHVwSW5uZXIuZGlzcGxheU5hbWUgPSAnUG9wdXBJbm5lcic7XG5leHBvcnQgZGVmYXVsdCBQb3B1cElubmVyOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNNb2JpbGUgZnJvbSBcInJjLXV0aWwvZXMvaXNNb2JpbGVcIjtcbmltcG9ydCBNYXNrIGZyb20gJy4vTWFzayc7XG5pbXBvcnQgUG9wdXBJbm5lciBmcm9tICcuL1BvcHVwSW5uZXInO1xuaW1wb3J0IE1vYmlsZVBvcHVwSW5uZXIgZnJvbSAnLi9Nb2JpbGVQb3B1cElubmVyJztcbnZhciBQb3B1cCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIHZpc2libGUgPSBfcmVmLnZpc2libGUsXG4gICAgICBtb2JpbGUgPSBfcmVmLm1vYmlsZSxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInZpc2libGVcIiwgXCJtb2JpbGVcIl0pO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSh2aXNpYmxlKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgaW5uZXJWaXNpYmxlID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNlcklubmVyVmlzaWJsZSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgICBpbk1vYmlsZSA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRJbk1vYmlsZSA9IF91c2VTdGF0ZTRbMV07XG5cbiAgdmFyIGNsb25lUHJvcHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICB2aXNpYmxlOiBpbm5lclZpc2libGVcbiAgfSk7IC8vIFdlIGNoZWNrIG1vYmlsZSBpbiB2aXNpYmxlIGNoYW5nZWQgaGVyZS5cbiAgLy8gQW5kIHRoaXMgYWxzbyBkZWxheSBzZXQgYGlubmVyVmlzaWJsZWAgdG8gYXZvaWQgcG9wdXAgY29tcG9uZW50IHJlbmRlciBmbGFzaFxuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzZXJJbm5lclZpc2libGUodmlzaWJsZSk7XG5cbiAgICBpZiAodmlzaWJsZSAmJiBtb2JpbGUpIHtcbiAgICAgIHNldEluTW9iaWxlKGlzTW9iaWxlKCkpO1xuICAgIH1cbiAgfSwgW3Zpc2libGUsIG1vYmlsZV0pO1xuICB2YXIgcG9wdXBOb2RlID0gaW5Nb2JpbGUgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNb2JpbGVQb3B1cElubmVyLCBfZXh0ZW5kcyh7fSwgY2xvbmVQcm9wcywge1xuICAgIG1vYmlsZTogbW9iaWxlLFxuICAgIHJlZjogcmVmXG4gIH0pKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBvcHVwSW5uZXIsIF9leHRlbmRzKHt9LCBjbG9uZVByb3BzLCB7XG4gICAgcmVmOiByZWZcbiAgfSkpOyAvLyBXZSBjYW4gdXNlIGZyYWdtZW50IGRpcmVjdGx5IGJ1dCB0aGlzIG1heSBmYWlsZWQgc29tZSBzZWxlY3RvciB1c2FnZS4gS2VlcCBhcyBvcmlnaW4gbG9naWNcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWFzaywgY2xvbmVQcm9wcyksIHBvcHVwTm9kZSk7XG59KTtcblBvcHVwLmRpc3BsYXlOYW1lID0gJ1BvcHVwJztcbmV4cG9ydCBkZWZhdWx0IFBvcHVwOyIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChzdHJldGNoKSB7XG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwXG4gIH0pLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICB0YXJnZXRTaXplID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldFRhcmdldFNpemUgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIGZ1bmN0aW9uIG1lYXN1cmVTdHJldGNoKGVsZW1lbnQpIHtcbiAgICBzZXRUYXJnZXRTaXplKHtcbiAgICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIH0pO1xuICB9IC8vIE1lcmdlIHN0cmV0Y2ggc3R5bGVcblxuXG4gIHZhciBzdHlsZSA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaXplU3R5bGUgPSB7fTtcblxuICAgIGlmIChzdHJldGNoKSB7XG4gICAgICB2YXIgd2lkdGggPSB0YXJnZXRTaXplLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IHRhcmdldFNpemUuaGVpZ2h0OyAvLyBTdHJldGNoIHdpdGggdGFyZ2V0XG5cbiAgICAgIGlmIChzdHJldGNoLmluZGV4T2YoJ2hlaWdodCcpICE9PSAtMSAmJiBoZWlnaHQpIHtcbiAgICAgICAgc2l6ZVN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIH0gZWxzZSBpZiAoc3RyZXRjaC5pbmRleE9mKCdtaW5IZWlnaHQnKSAhPT0gLTEgJiYgaGVpZ2h0KSB7XG4gICAgICAgIHNpemVTdHlsZS5taW5IZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdHJldGNoLmluZGV4T2YoJ3dpZHRoJykgIT09IC0xICYmIHdpZHRoKSB7XG4gICAgICAgIHNpemVTdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgfSBlbHNlIGlmIChzdHJldGNoLmluZGV4T2YoJ21pbldpZHRoJykgIT09IC0xICYmIHdpZHRoKSB7XG4gICAgICAgIHNpemVTdHlsZS5taW5XaWR0aCA9IHdpZHRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaXplU3R5bGU7XG4gIH0sIFtzdHJldGNoLCB0YXJnZXRTaXplXSk7XG4gIHJldHVybiBbc3R5bGUsIG1lYXN1cmVTdHJldGNoXTtcbn0pOyIsImltcG9ydCBfcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCByYWYgZnJvbSBcInJjLXV0aWwvZXMvcmFmXCI7XG52YXIgU3RhdHVzUXVldWUgPSBbJ21lYXN1cmUnLCAnYWxpZ24nLCBudWxsLCAnbW90aW9uJ107XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKHZpc2libGUsIGRvTWVhc3VyZSkge1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUobnVsbCksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIHN0YXR1cyA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRJbnRlcm5hbFN0YXR1cyA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIHJhZlJlZiA9IHVzZVJlZigpO1xuICB2YXIgZGVzdHJveVJlZiA9IHVzZVJlZihmYWxzZSk7XG5cbiAgZnVuY3Rpb24gc2V0U3RhdHVzKG5leHRTdGF0dXMpIHtcbiAgICBpZiAoIWRlc3Ryb3lSZWYuY3VycmVudCkge1xuICAgICAgc2V0SW50ZXJuYWxTdGF0dXMobmV4dFN0YXR1cyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsUmFmKCkge1xuICAgIHJhZi5jYW5jZWwocmFmUmVmLmN1cnJlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29OZXh0U3RhdHVzKGNhbGxiYWNrKSB7XG4gICAgY2FuY2VsUmFmKCk7XG4gICAgcmFmUmVmLmN1cnJlbnQgPSByYWYoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gT25seSBhbGlnbiBzaG91bGQgYmUgbWFudWFsbHkgdHJpZ2dlclxuICAgICAgc2V0U3RhdHVzKGZ1bmN0aW9uIChwcmV2KSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgICAgY2FzZSAnYWxpZ24nOlxuICAgICAgICAgICAgcmV0dXJuICdtb3Rpb24nO1xuXG4gICAgICAgICAgY2FzZSAnbW90aW9uJzpcbiAgICAgICAgICAgIHJldHVybiAnc3RhYmxlJztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgIH0pO1xuICAgICAgY2FsbGJhY2sgPT09IG51bGwgfHwgY2FsbGJhY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gIH0gLy8gSW5pdCBzdGF0dXNcblxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2V0U3RhdHVzKCdtZWFzdXJlJyk7XG4gIH0sIFt2aXNpYmxlXSk7IC8vIEdvIG5leHQgc3RhdHVzXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSAnbWVhc3VyZSc6XG4gICAgICAgIGRvTWVhc3VyZSgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICByYWZSZWYuY3VycmVudCA9IHJhZiggLyojX19QVVJFX18qL19hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoKSB7XG4gICAgICAgIHZhciBpbmRleCwgbmV4dFN0YXR1cztcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpbmRleCA9IFN0YXR1c1F1ZXVlLmluZGV4T2Yoc3RhdHVzKTtcbiAgICAgICAgICAgICAgICBuZXh0U3RhdHVzID0gU3RhdHVzUXVldWVbaW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgIGlmIChuZXh0U3RhdHVzICYmIGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzKG5leHRTdGF0dXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSk7XG4gICAgICB9KSkpO1xuICAgIH1cbiAgfSwgW3N0YXR1c10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBkZXN0cm95UmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgY2FuY2VsUmFmKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gW3N0YXR1cywgZ29OZXh0U3RhdHVzXTtcbn0pOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBUcmlnZ2VyQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuZXhwb3J0IGRlZmF1bHQgVHJpZ2dlckNvbnRleHQ7IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHJhZiBmcm9tIFwicmMtdXRpbC9lcy9yYWZcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwicmMtdXRpbC9lcy9Eb20vY29udGFpbnNcIjtcbmltcG9ydCBmaW5kRE9NTm9kZSBmcm9tIFwicmMtdXRpbC9lcy9Eb20vZmluZERPTU5vZGVcIjtcbmltcG9ydCB7IGNvbXBvc2VSZWYsIHN1cHBvcnRSZWYgfSBmcm9tIFwicmMtdXRpbC9lcy9yZWZcIjtcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gXCJyYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyXCI7XG5pbXBvcnQgUG9ydGFsIGZyb20gXCJyYy11dGlsL2VzL1BvcnRhbFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBnZXRBbGlnbkZyb21QbGFjZW1lbnQsIGdldEFsaWduUG9wdXBDbGFzc05hbWUgfSBmcm9tICcuL3V0aWxzL2FsaWduVXRpbCc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cCc7XG5pbXBvcnQgVHJpZ2dlckNvbnRleHQgZnJvbSAnLi9jb250ZXh0JztcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIHJldHVybkVtcHR5U3RyaW5nKCkge1xuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIHJldHVybkRvY3VtZW50KGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudDtcbn1cblxudmFyIEFMTF9IQU5ETEVSUyA9IFsnb25DbGljaycsICdvbk1vdXNlRG93bicsICdvblRvdWNoU3RhcnQnLCAnb25Nb3VzZUVudGVyJywgJ29uTW91c2VMZWF2ZScsICdvbkZvY3VzJywgJ29uQmx1cicsICdvbkNvbnRleHRNZW51J107XG4vKipcbiAqIEludGVybmFsIHVzYWdlLiBEbyBub3QgdXNlIGluIHlvdXIgY29kZSBzaW5jZSB0aGlzIHdpbGwgYmUgcmVtb3ZlZC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUcmlnZ2VyKFBvcnRhbENvbXBvbmVudCkge1xuICB2YXIgVHJpZ2dlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhUcmlnZ2VyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoVHJpZ2dlcik7XG5cbiAgICBmdW5jdGlvbiBUcmlnZ2VyKHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmlnZ2VyKTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgICBfdGhpcy5wb3B1cFJlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgIF90aGlzLnRyaWdnZXJSZWYgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICAgIF90aGlzLm9uTW91c2VFbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBtb3VzZUVudGVyRGVsYXkgPSBfdGhpcy5wcm9wcy5tb3VzZUVudGVyRGVsYXk7XG5cbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25Nb3VzZUVudGVyJywgZSk7XG5cbiAgICAgICAgX3RoaXMuZGVsYXlTZXRQb3B1cFZpc2libGUodHJ1ZSwgbW91c2VFbnRlckRlbGF5LCBtb3VzZUVudGVyRGVsYXkgPyBudWxsIDogZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uTW91c2VNb3ZlJywgZSk7XG5cbiAgICAgICAgX3RoaXMuc2V0UG9pbnQoZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvbk1vdXNlTGVhdmUnLCBlKTtcblxuICAgICAgICBfdGhpcy5kZWxheVNldFBvcHVwVmlzaWJsZShmYWxzZSwgX3RoaXMucHJvcHMubW91c2VMZWF2ZURlbGF5KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uUG9wdXBNb3VzZUVudGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uUG9wdXBNb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIF90aGlzJHBvcHVwUmVmJGN1cnJlbjtcblxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3RyaWdnZXIvcHVsbC8xM1xuICAgICAgICAvLyByZWFjdCBidWc/XG4gICAgICAgIGlmIChlLnJlbGF0ZWRUYXJnZXQgJiYgIWUucmVsYXRlZFRhcmdldC5zZXRUaW1lb3V0ICYmIGNvbnRhaW5zKChfdGhpcyRwb3B1cFJlZiRjdXJyZW4gPSBfdGhpcy5wb3B1cFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfdGhpcyRwb3B1cFJlZiRjdXJyZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHBvcHVwUmVmJGN1cnJlbi5nZXRFbGVtZW50KCksIGUucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5kZWxheVNldFBvcHVwVmlzaWJsZShmYWxzZSwgX3RoaXMucHJvcHMubW91c2VMZWF2ZURlbGF5KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvbkZvY3VzJywgZSk7IC8vIGluY2FzZSBmb2N1c2luIGFuZCBmb2N1c291dFxuXG5cbiAgICAgICAgX3RoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG5cbiAgICAgICAgaWYgKF90aGlzLmlzRm9jdXNUb1Nob3coKSkge1xuICAgICAgICAgIF90aGlzLmZvY3VzVGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICBfdGhpcy5kZWxheVNldFBvcHVwVmlzaWJsZSh0cnVlLCBfdGhpcy5wcm9wcy5mb2N1c0RlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvbk1vdXNlRG93bicsIGUpO1xuXG4gICAgICAgIF90aGlzLnByZUNsaWNrVGltZSA9IERhdGUubm93KCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvblRvdWNoU3RhcnQnLCBlKTtcblxuICAgICAgICBfdGhpcy5wcmVUb3VjaFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25CbHVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25CbHVyJywgZSk7XG5cbiAgICAgICAgX3RoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG5cbiAgICAgICAgaWYgKF90aGlzLmlzQmx1clRvSGlkZSgpKSB7XG4gICAgICAgICAgX3RoaXMuZGVsYXlTZXRQb3B1cFZpc2libGUoZmFsc2UsIF90aGlzLnByb3BzLmJsdXJEZWxheSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uQ29udGV4dE1lbnUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25Db250ZXh0TWVudScsIGUpO1xuXG4gICAgICAgIF90aGlzLnNldFBvcHVwVmlzaWJsZSh0cnVlLCBlKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uQ29udGV4dE1lbnVDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLmlzQ29udGV4dE1lbnVUb1Nob3coKSkge1xuICAgICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25DbGljaycsIGV2ZW50KTsgLy8gZm9jdXMgd2lsbCB0cmlnZ2VyIGNsaWNrXG5cblxuICAgICAgICBpZiAoX3RoaXMuZm9jdXNUaW1lKSB7XG4gICAgICAgICAgdmFyIHByZVRpbWU7XG5cbiAgICAgICAgICBpZiAoX3RoaXMucHJlQ2xpY2tUaW1lICYmIF90aGlzLnByZVRvdWNoVGltZSkge1xuICAgICAgICAgICAgcHJlVGltZSA9IE1hdGgubWluKF90aGlzLnByZUNsaWNrVGltZSwgX3RoaXMucHJlVG91Y2hUaW1lKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzLnByZUNsaWNrVGltZSkge1xuICAgICAgICAgICAgcHJlVGltZSA9IF90aGlzLnByZUNsaWNrVGltZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzLnByZVRvdWNoVGltZSkge1xuICAgICAgICAgICAgcHJlVGltZSA9IF90aGlzLnByZVRvdWNoVGltZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoTWF0aC5hYnMocHJlVGltZSAtIF90aGlzLmZvY3VzVGltZSkgPCAyMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLmZvY3VzVGltZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5wcmVDbGlja1RpbWUgPSAwO1xuICAgICAgICBfdGhpcy5wcmVUb3VjaFRpbWUgPSAwOyAvLyBPbmx5IHByZXZlbnQgZGVmYXVsdCB3aGVuIGFsbCB0aGUgYWN0aW9uIGlzIGNsaWNrLlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNzA0M1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNzI5MVxuXG4gICAgICAgIGlmIChfdGhpcy5pc0NsaWNrVG9TaG93KCkgJiYgKF90aGlzLmlzQ2xpY2tUb0hpZGUoKSB8fCBfdGhpcy5pc0JsdXJUb0hpZGUoKSkgJiYgZXZlbnQgJiYgZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5leHRWaXNpYmxlID0gIV90aGlzLnN0YXRlLnBvcHVwVmlzaWJsZTtcblxuICAgICAgICBpZiAoX3RoaXMuaXNDbGlja1RvSGlkZSgpICYmICFuZXh0VmlzaWJsZSB8fCBuZXh0VmlzaWJsZSAmJiBfdGhpcy5pc0NsaWNrVG9TaG93KCkpIHtcbiAgICAgICAgICBfdGhpcy5zZXRQb3B1cFZpc2libGUoIV90aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblBvcHVwTW91c2VEb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5oYXNQb3B1cE1vdXNlRG93biA9IHRydWU7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5tb3VzZURvd25UaW1lb3V0KTtcbiAgICAgICAgX3RoaXMubW91c2VEb3duVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5oYXNQb3B1cE1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICB9LCAwKTtcblxuICAgICAgICBpZiAoX3RoaXMuY29udGV4dCkge1xuICAgICAgICAgIHZhciBfdGhpcyRjb250ZXh0O1xuXG4gICAgICAgICAgKF90aGlzJGNvbnRleHQgPSBfdGhpcy5jb250ZXh0KS5vblBvcHVwTW91c2VEb3duLmFwcGx5KF90aGlzJGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uRG9jdW1lbnRDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMubWFzayAmJiAhX3RoaXMucHJvcHMubWFza0Nsb3NhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICB2YXIgcm9vdCA9IF90aGlzLmdldFJvb3REb21Ob2RlKCk7XG5cbiAgICAgICAgdmFyIHBvcHVwTm9kZSA9IF90aGlzLmdldFBvcHVwRG9tTm9kZSgpO1xuXG4gICAgICAgIGlmICghY29udGFpbnMocm9vdCwgdGFyZ2V0KSAmJiAhY29udGFpbnMocG9wdXBOb2RlLCB0YXJnZXQpICYmICFfdGhpcy5oYXNQb3B1cE1vdXNlRG93bikge1xuICAgICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldFJvb3REb21Ob2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ2V0VHJpZ2dlckRPTU5vZGUgPSBfdGhpcy5wcm9wcy5nZXRUcmlnZ2VyRE9NTm9kZTtcblxuICAgICAgICBpZiAoZ2V0VHJpZ2dlckRPTU5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0VHJpZ2dlckRPTU5vZGUoX3RoaXMudHJpZ2dlclJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGRvbU5vZGUgPSBmaW5kRE9NTm9kZShfdGhpcy50cmlnZ2VyUmVmLmN1cnJlbnQpO1xuXG4gICAgICAgICAgaWYgKGRvbU5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkb21Ob2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7Ly8gRG8gbm90aGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduID0gZnVuY3Rpb24gKGFsaWduKSB7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBwb3B1cFBsYWNlbWVudCA9IF90aGlzJHByb3BzLnBvcHVwUGxhY2VtZW50LFxuICAgICAgICAgICAgYnVpbHRpblBsYWNlbWVudHMgPSBfdGhpcyRwcm9wcy5idWlsdGluUGxhY2VtZW50cyxcbiAgICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgIGFsaWduUG9pbnQgPSBfdGhpcyRwcm9wcy5hbGlnblBvaW50LFxuICAgICAgICAgICAgZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ24gPSBfdGhpcyRwcm9wcy5nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbjtcblxuICAgICAgICBpZiAocG9wdXBQbGFjZW1lbnQgJiYgYnVpbHRpblBsYWNlbWVudHMpIHtcbiAgICAgICAgICBjbGFzc05hbWUucHVzaChnZXRBbGlnblBvcHVwQ2xhc3NOYW1lKGJ1aWx0aW5QbGFjZW1lbnRzLCBwcmVmaXhDbHMsIGFsaWduLCBhbGlnblBvaW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ24pIHtcbiAgICAgICAgICBjbGFzc05hbWUucHVzaChnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbihhbGlnbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZS5qb2luKCcgJyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzMi5wcmVmaXhDbHMsXG4gICAgICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGUgPSBfdGhpcyRwcm9wczIuZGVzdHJveVBvcHVwT25IaWRlLFxuICAgICAgICAgICAgcG9wdXBDbGFzc05hbWUgPSBfdGhpcyRwcm9wczIucG9wdXBDbGFzc05hbWUsXG4gICAgICAgICAgICBvblBvcHVwQWxpZ24gPSBfdGhpcyRwcm9wczIub25Qb3B1cEFsaWduLFxuICAgICAgICAgICAgcG9wdXBNb3Rpb24gPSBfdGhpcyRwcm9wczIucG9wdXBNb3Rpb24sXG4gICAgICAgICAgICBwb3B1cEFuaW1hdGlvbiA9IF90aGlzJHByb3BzMi5wb3B1cEFuaW1hdGlvbixcbiAgICAgICAgICAgIHBvcHVwVHJhbnNpdGlvbk5hbWUgPSBfdGhpcyRwcm9wczIucG9wdXBUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICAgIHBvcHVwU3R5bGUgPSBfdGhpcyRwcm9wczIucG9wdXBTdHlsZSxcbiAgICAgICAgICAgIG1hc2sgPSBfdGhpcyRwcm9wczIubWFzayxcbiAgICAgICAgICAgIG1hc2tBbmltYXRpb24gPSBfdGhpcyRwcm9wczIubWFza0FuaW1hdGlvbixcbiAgICAgICAgICAgIG1hc2tUcmFuc2l0aW9uTmFtZSA9IF90aGlzJHByb3BzMi5tYXNrVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgICAgICBtYXNrTW90aW9uID0gX3RoaXMkcHJvcHMyLm1hc2tNb3Rpb24sXG4gICAgICAgICAgICB6SW5kZXggPSBfdGhpcyRwcm9wczIuekluZGV4LFxuICAgICAgICAgICAgcG9wdXAgPSBfdGhpcyRwcm9wczIucG9wdXAsXG4gICAgICAgICAgICBzdHJldGNoID0gX3RoaXMkcHJvcHMyLnN0cmV0Y2gsXG4gICAgICAgICAgICBhbGlnblBvaW50ID0gX3RoaXMkcHJvcHMyLmFsaWduUG9pbnQsXG4gICAgICAgICAgICBtb2JpbGUgPSBfdGhpcyRwcm9wczIubW9iaWxlO1xuICAgICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIHBvcHVwVmlzaWJsZSA9IF90aGlzJHN0YXRlLnBvcHVwVmlzaWJsZSxcbiAgICAgICAgICAgIHBvaW50ID0gX3RoaXMkc3RhdGUucG9pbnQ7XG5cbiAgICAgICAgdmFyIGFsaWduID0gX3RoaXMuZ2V0UG9wdXBBbGlnbigpO1xuXG4gICAgICAgIHZhciBtb3VzZVByb3BzID0ge307XG5cbiAgICAgICAgaWYgKF90aGlzLmlzTW91c2VFbnRlclRvU2hvdygpKSB7XG4gICAgICAgICAgbW91c2VQcm9wcy5vbk1vdXNlRW50ZXIgPSBfdGhpcy5vblBvcHVwTW91c2VFbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpcy5pc01vdXNlTGVhdmVUb0hpZGUoKSkge1xuICAgICAgICAgIG1vdXNlUHJvcHMub25Nb3VzZUxlYXZlID0gX3RoaXMub25Qb3B1cE1vdXNlTGVhdmU7XG4gICAgICAgIH1cblxuICAgICAgICBtb3VzZVByb3BzLm9uTW91c2VEb3duID0gX3RoaXMub25Qb3B1cE1vdXNlRG93bjtcbiAgICAgICAgbW91c2VQcm9wcy5vblRvdWNoU3RhcnQgPSBfdGhpcy5vblBvcHVwTW91c2VEb3duO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wdXAsIF9leHRlbmRzKHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGU6IGRlc3Ryb3lQb3B1cE9uSGlkZSxcbiAgICAgICAgICB2aXNpYmxlOiBwb3B1cFZpc2libGUsXG4gICAgICAgICAgcG9pbnQ6IGFsaWduUG9pbnQgJiYgcG9pbnQsXG4gICAgICAgICAgY2xhc3NOYW1lOiBwb3B1cENsYXNzTmFtZSxcbiAgICAgICAgICBhbGlnbjogYWxpZ24sXG4gICAgICAgICAgb25BbGlnbjogb25Qb3B1cEFsaWduLFxuICAgICAgICAgIGFuaW1hdGlvbjogcG9wdXBBbmltYXRpb24sXG4gICAgICAgICAgZ2V0Q2xhc3NOYW1lRnJvbUFsaWduOiBfdGhpcy5nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnblxuICAgICAgICB9LCBtb3VzZVByb3BzLCB7XG4gICAgICAgICAgc3RyZXRjaDogc3RyZXRjaCxcbiAgICAgICAgICBnZXRSb290RG9tTm9kZTogX3RoaXMuZ2V0Um9vdERvbU5vZGUsXG4gICAgICAgICAgc3R5bGU6IHBvcHVwU3R5bGUsXG4gICAgICAgICAgbWFzazogbWFzayxcbiAgICAgICAgICB6SW5kZXg6IHpJbmRleCxcbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogcG9wdXBUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICBtYXNrQW5pbWF0aW9uOiBtYXNrQW5pbWF0aW9uLFxuICAgICAgICAgIG1hc2tUcmFuc2l0aW9uTmFtZTogbWFza1RyYW5zaXRpb25OYW1lLFxuICAgICAgICAgIG1hc2tNb3Rpb246IG1hc2tNb3Rpb24sXG4gICAgICAgICAgcmVmOiBfdGhpcy5wb3B1cFJlZixcbiAgICAgICAgICBtb3Rpb246IHBvcHVwTW90aW9uLFxuICAgICAgICAgIG1vYmlsZTogbW9iaWxlXG4gICAgICAgIH0pLCB0eXBlb2YgcG9wdXAgPT09ICdmdW5jdGlvbicgPyBwb3B1cCgpIDogcG9wdXApO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuYXR0YWNoUGFyZW50ID0gZnVuY3Rpb24gKHBvcHVwQ29udGFpbmVyKSB7XG4gICAgICAgIHJhZi5jYW5jZWwoX3RoaXMuYXR0YWNoSWQpO1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lciA9IF90aGlzJHByb3BzMy5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgICAgIGdldERvY3VtZW50ID0gX3RoaXMkcHJvcHMzLmdldERvY3VtZW50O1xuXG4gICAgICAgIHZhciBkb21Ob2RlID0gX3RoaXMuZ2V0Um9vdERvbU5vZGUoKTtcblxuICAgICAgICB2YXIgbW91bnROb2RlO1xuXG4gICAgICAgIGlmICghZ2V0UG9wdXBDb250YWluZXIpIHtcbiAgICAgICAgICBtb3VudE5vZGUgPSBnZXREb2N1bWVudChfdGhpcy5nZXRSb290RG9tTm9kZSgpKS5ib2R5O1xuICAgICAgICB9IGVsc2UgaWYgKGRvbU5vZGUgfHwgZ2V0UG9wdXBDb250YWluZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgLy8gQ29tcGF0aWJsZSBmb3IgbGVnYWN5IGdldFBvcHVwQ29udGFpbmVyIHdpdGggZG9tTm9kZSBhcmd1bWVudC5cbiAgICAgICAgICAvLyBJZiBubyBuZWVkIGBkb21Ob2RlYCBhcmd1bWVudCwgd2lsbCBjYWxsIGRpcmVjdGx5LlxuICAgICAgICAgIC8vIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9lbG9xdWVudC1tY2xlYW4tc3M5M20/ZmlsZT0vc3JjL0FwcC5qc1xuICAgICAgICAgIG1vdW50Tm9kZSA9IGdldFBvcHVwQ29udGFpbmVyKGRvbU5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vdW50Tm9kZSkge1xuICAgICAgICAgIG1vdW50Tm9kZS5hcHBlbmRDaGlsZChwb3B1cENvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUmV0cnkgYWZ0ZXIgZnJhbWUgcmVuZGVyIGluIGNhc2UgcGFyZW50IG5vdCByZWFkeVxuICAgICAgICAgIF90aGlzLmF0dGFjaElkID0gcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmF0dGFjaFBhcmVudChwb3B1cENvbnRhaW5lcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdldERvY3VtZW50ID0gX3RoaXMucHJvcHMuZ2V0RG9jdW1lbnQ7XG4gICAgICAgIHZhciBwb3B1cENvbnRhaW5lciA9IGdldERvY3VtZW50KF90aGlzLmdldFJvb3REb21Ob2RlKCkpLmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBNYWtlIHN1cmUgZGVmYXVsdCBwb3B1cCBjb250YWluZXIgd2lsbCBuZXZlciBjYXVzZSBzY3JvbGxiYXIgYXBwZWFyaW5nXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdHJpZ2dlci9pc3N1ZXMvNDFcblxuICAgICAgICBwb3B1cENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgcG9wdXBDb250YWluZXIuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgcG9wdXBDb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG5cbiAgICAgICAgX3RoaXMuYXR0YWNoUGFyZW50KHBvcHVwQ29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gcG9wdXBDb250YWluZXI7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zZXRQb2ludCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICB2YXIgYWxpZ25Qb2ludCA9IF90aGlzLnByb3BzLmFsaWduUG9pbnQ7XG4gICAgICAgIGlmICghYWxpZ25Qb2ludCB8fCAhcG9pbnQpIHJldHVybjtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgIHBhZ2VYOiBwb2ludC5wYWdlWCxcbiAgICAgICAgICAgIHBhZ2VZOiBwb2ludC5wYWdlWVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5oYW5kbGVQb3J0YWxVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5zdGF0ZS5wcmV2UG9wdXBWaXNpYmxlICE9PSBfdGhpcy5zdGF0ZS5wb3B1cFZpc2libGUpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5hZnRlclBvcHVwVmlzaWJsZUNoYW5nZShfdGhpcy5zdGF0ZS5wb3B1cFZpc2libGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgcG9wdXBWaXNpYmxlO1xuXG4gICAgICBpZiAoJ3BvcHVwVmlzaWJsZScgaW4gcHJvcHMpIHtcbiAgICAgICAgcG9wdXBWaXNpYmxlID0gISFwcm9wcy5wb3B1cFZpc2libGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3B1cFZpc2libGUgPSAhIXByb3BzLmRlZmF1bHRQb3B1cFZpc2libGU7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBwcmV2UG9wdXBWaXNpYmxlOiBwb3B1cFZpc2libGUsXG4gICAgICAgIHBvcHVwVmlzaWJsZTogcG9wdXBWaXNpYmxlXG4gICAgICB9O1xuICAgICAgQUxMX0hBTkRMRVJTLmZvckVhY2goZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgX3RoaXNbXCJmaXJlXCIuY29uY2F0KGgpXSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgX3RoaXMuZmlyZUV2ZW50cyhoLCBlKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUcmlnZ2VyLCBbe1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTsgLy8gV2UgbXVzdCBsaXN0ZW4gdG8gYG1vdXNlZG93bmAgb3IgYHRvdWNoc3RhcnRgLCBlZGdlIGNhc2U6XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzU4MDRcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9jYWxlbmRhci9pc3N1ZXMvMjUwXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdHJpZ2dlci9pc3N1ZXMvNTBcblxuICAgICAgICBpZiAoc3RhdGUucG9wdXBWaXNpYmxlKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnREb2N1bWVudDtcblxuICAgICAgICAgIGlmICghdGhpcy5jbGlja091dHNpZGVIYW5kbGVyICYmICh0aGlzLmlzQ2xpY2tUb0hpZGUoKSB8fCB0aGlzLmlzQ29udGV4dE1lbnVUb1Nob3coKSkpIHtcbiAgICAgICAgICAgIGN1cnJlbnREb2N1bWVudCA9IHByb3BzLmdldERvY3VtZW50KHRoaXMuZ2V0Um9vdERvbU5vZGUoKSk7XG4gICAgICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIgPSBhZGRFdmVudExpc3RlbmVyKGN1cnJlbnREb2N1bWVudCwgJ21vdXNlZG93bicsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICAgICAgICB9IC8vIGFsd2F5cyBoaWRlIG9uIG1vYmlsZVxuXG5cbiAgICAgICAgICBpZiAoIXRoaXMudG91Y2hPdXRzaWRlSGFuZGxlcikge1xuICAgICAgICAgICAgY3VycmVudERvY3VtZW50ID0gY3VycmVudERvY3VtZW50IHx8IHByb3BzLmdldERvY3VtZW50KHRoaXMuZ2V0Um9vdERvbU5vZGUoKSk7XG4gICAgICAgICAgICB0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIgPSBhZGRFdmVudExpc3RlbmVyKGN1cnJlbnREb2N1bWVudCwgJ3RvdWNoc3RhcnQnLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgICAgICAgfSAvLyBjbG9zZSBwb3B1cCB3aGVuIHRyaWdnZXIgdHlwZSBjb250YWlucyAnb25Db250ZXh0TWVudScgYW5kIGRvY3VtZW50IGlzIHNjcm9sbGluZy5cblxuXG4gICAgICAgICAgaWYgKCF0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIxICYmIHRoaXMuaXNDb250ZXh0TWVudVRvU2hvdygpKSB7XG4gICAgICAgICAgICBjdXJyZW50RG9jdW1lbnQgPSBjdXJyZW50RG9jdW1lbnQgfHwgcHJvcHMuZ2V0RG9jdW1lbnQodGhpcy5nZXRSb290RG9tTm9kZSgpKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEgPSBhZGRFdmVudExpc3RlbmVyKGN1cnJlbnREb2N1bWVudCwgJ3Njcm9sbCcsIHRoaXMub25Db250ZXh0TWVudUNsb3NlKTtcbiAgICAgICAgICB9IC8vIGNsb3NlIHBvcHVwIHdoZW4gdHJpZ2dlciB0eXBlIGNvbnRhaW5zICdvbkNvbnRleHRNZW51JyBhbmQgd2luZG93IGlzIGJsdXIuXG5cblxuICAgICAgICAgIGlmICghdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMiAmJiB0aGlzLmlzQ29udGV4dE1lbnVUb1Nob3coKSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMiA9IGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnYmx1cicsIHRoaXMub25Db250ZXh0TWVudUNsb3NlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsZWFyT3V0c2lkZUhhbmRsZXIoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICAgICAgdGhpcy5jbGVhck91dHNpZGVIYW5kbGVyKCk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm1vdXNlRG93blRpbWVvdXQpO1xuICAgICAgICByYWYuY2FuY2VsKHRoaXMuYXR0YWNoSWQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRQb3B1cERvbU5vZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3B1cERvbU5vZGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwb3B1cFJlZiRjdXJyZW4yO1xuXG4gICAgICAgIC8vIGZvciB0ZXN0XG4gICAgICAgIHJldHVybiAoKF90aGlzJHBvcHVwUmVmJGN1cnJlbjIgPSB0aGlzLnBvcHVwUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF90aGlzJHBvcHVwUmVmJGN1cnJlbjIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHBvcHVwUmVmJGN1cnJlbjIuZ2V0RWxlbWVudCgpKSB8fCBudWxsO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRQb3B1cEFsaWduXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9wdXBBbGlnbigpIHtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIHBvcHVwUGxhY2VtZW50ID0gcHJvcHMucG9wdXBQbGFjZW1lbnQsXG4gICAgICAgICAgICBwb3B1cEFsaWduID0gcHJvcHMucG9wdXBBbGlnbixcbiAgICAgICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzID0gcHJvcHMuYnVpbHRpblBsYWNlbWVudHM7XG5cbiAgICAgICAgaWYgKHBvcHVwUGxhY2VtZW50ICYmIGJ1aWx0aW5QbGFjZW1lbnRzKSB7XG4gICAgICAgICAgcmV0dXJuIGdldEFsaWduRnJvbVBsYWNlbWVudChidWlsdGluUGxhY2VtZW50cywgcG9wdXBQbGFjZW1lbnQsIHBvcHVwQWxpZ24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvcHVwQWxpZ247XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSBwb3B1cFZpc2libGUgICAgU2hvdyBvciBub3QgdGhlIHBvcHVwIGVsZW1lbnRcbiAgICAgICAqIEBwYXJhbSBldmVudCAgICAgICAgICAgU3ludGhldGljRXZlbnQsIHVzZWQgZm9yIGBwb2ludEFsaWduYFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0UG9wdXBWaXNpYmxlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UG9wdXBWaXNpYmxlKHBvcHVwVmlzaWJsZSwgZXZlbnQpIHtcbiAgICAgICAgdmFyIGFsaWduUG9pbnQgPSB0aGlzLnByb3BzLmFsaWduUG9pbnQ7XG4gICAgICAgIHZhciBwcmV2UG9wdXBWaXNpYmxlID0gdGhpcy5zdGF0ZS5wb3B1cFZpc2libGU7XG4gICAgICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG5cbiAgICAgICAgaWYgKHByZXZQb3B1cFZpc2libGUgIT09IHBvcHVwVmlzaWJsZSkge1xuICAgICAgICAgIGlmICghKCdwb3B1cFZpc2libGUnIGluIHRoaXMucHJvcHMpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgcG9wdXBWaXNpYmxlOiBwb3B1cFZpc2libGUsXG4gICAgICAgICAgICAgIHByZXZQb3B1cFZpc2libGU6IHByZXZQb3B1cFZpc2libGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMucHJvcHMub25Qb3B1cFZpc2libGVDaGFuZ2UocG9wdXBWaXNpYmxlKTtcbiAgICAgICAgfSAvLyBBbHdheXMgcmVjb3JkIHRoZSBwb2ludCBwb3NpdGlvbiBzaW5jZSBtb3VzZUVudGVyRGVsYXkgd2lsbCBkZWxheSB0aGUgc2hvd1xuXG5cbiAgICAgICAgaWYgKGFsaWduUG9pbnQgJiYgZXZlbnQgJiYgcG9wdXBWaXNpYmxlKSB7XG4gICAgICAgICAgdGhpcy5zZXRQb2ludChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVsYXlTZXRQb3B1cFZpc2libGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWxheVNldFBvcHVwVmlzaWJsZSh2aXNpYmxlLCBkZWxheVMsIGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBkZWxheSA9IGRlbGF5UyAqIDEwMDA7XG4gICAgICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG5cbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQgPyB7XG4gICAgICAgICAgICBwYWdlWDogZXZlbnQucGFnZVgsXG4gICAgICAgICAgICBwYWdlWTogZXZlbnQucGFnZVlcbiAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICB0aGlzLmRlbGF5VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczIuc2V0UG9wdXBWaXNpYmxlKHZpc2libGUsIHBvaW50KTtcblxuICAgICAgICAgICAgX3RoaXMyLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFBvcHVwVmlzaWJsZSh2aXNpYmxlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xlYXJEZWxheVRpbWVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXJEZWxheVRpbWVyKCkge1xuICAgICAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lcik7XG4gICAgICAgICAgdGhpcy5kZWxheVRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbGVhck91dHNpZGVIYW5kbGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXJPdXRzaWRlSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlcikge1xuICAgICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlci5yZW1vdmUoKTtcbiAgICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEpIHtcbiAgICAgICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIxLnJlbW92ZSgpO1xuICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjIpIHtcbiAgICAgICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIyLnJlbW92ZSgpO1xuICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlcikge1xuICAgICAgICAgIHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlci5yZW1vdmUoKTtcbiAgICAgICAgICB0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNyZWF0ZVR3b0NoYWluc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVR3b0NoYWlucyhldmVudCkge1xuICAgICAgICB2YXIgY2hpbGRQcm9zID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcztcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoY2hpbGRQcm9zW2V2ZW50XSAmJiBwcm9wc1tldmVudF0pIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1tcImZpcmVcIi5jb25jYXQoZXZlbnQpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZFByb3NbZXZlbnRdIHx8IHByb3BzW2V2ZW50XTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNDbGlja1RvU2hvd1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ2xpY2tUb1Nob3coKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYWN0aW9uID0gX3RoaXMkcHJvcHM0LmFjdGlvbixcbiAgICAgICAgICAgIHNob3dBY3Rpb24gPSBfdGhpcyRwcm9wczQuc2hvd0FjdGlvbjtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMSB8fCBzaG93QWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0NvbnRleHRNZW51VG9TaG93XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNDb250ZXh0TWVudVRvU2hvdygpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhY3Rpb24gPSBfdGhpcyRwcm9wczUuYWN0aW9uLFxuICAgICAgICAgICAgc2hvd0FjdGlvbiA9IF90aGlzJHByb3BzNS5zaG93QWN0aW9uO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2NvbnRleHRNZW51JykgIT09IC0xIHx8IHNob3dBY3Rpb24uaW5kZXhPZignY29udGV4dE1lbnUnKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzQ2xpY2tUb0hpZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NsaWNrVG9IaWRlKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM2ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGFjdGlvbiA9IF90aGlzJHByb3BzNi5hY3Rpb24sXG4gICAgICAgICAgICBoaWRlQWN0aW9uID0gX3RoaXMkcHJvcHM2LmhpZGVBY3Rpb247XG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignY2xpY2snKSAhPT0gLTEgfHwgaGlkZUFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNNb3VzZUVudGVyVG9TaG93XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNNb3VzZUVudGVyVG9TaG93KCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGFjdGlvbiA9IF90aGlzJHByb3BzNy5hY3Rpb24sXG4gICAgICAgICAgICBzaG93QWN0aW9uID0gX3RoaXMkcHJvcHM3LnNob3dBY3Rpb247XG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignaG92ZXInKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdtb3VzZUVudGVyJykgIT09IC0xO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc01vdXNlTGVhdmVUb0hpZGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc01vdXNlTGVhdmVUb0hpZGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczggPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYWN0aW9uID0gX3RoaXMkcHJvcHM4LmFjdGlvbixcbiAgICAgICAgICAgIGhpZGVBY3Rpb24gPSBfdGhpcyRwcm9wczguaGlkZUFjdGlvbjtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdob3ZlcicpICE9PSAtMSB8fCBoaWRlQWN0aW9uLmluZGV4T2YoJ21vdXNlTGVhdmUnKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzRm9jdXNUb1Nob3dcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0ZvY3VzVG9TaG93KCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM5ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGFjdGlvbiA9IF90aGlzJHByb3BzOS5hY3Rpb24sXG4gICAgICAgICAgICBzaG93QWN0aW9uID0gX3RoaXMkcHJvcHM5LnNob3dBY3Rpb247XG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignZm9jdXMnKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdmb2N1cycpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNCbHVyVG9IaWRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNCbHVyVG9IaWRlKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMxMCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhY3Rpb24gPSBfdGhpcyRwcm9wczEwLmFjdGlvbixcbiAgICAgICAgICAgIGhpZGVBY3Rpb24gPSBfdGhpcyRwcm9wczEwLmhpZGVBY3Rpb247XG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignZm9jdXMnKSAhPT0gLTEgfHwgaGlkZUFjdGlvbi5pbmRleE9mKCdibHVyJykgIT09IC0xO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJmb3JjZVBvcHVwQWxpZ25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JjZVBvcHVwQWxpZ24oKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSkge1xuICAgICAgICAgIHZhciBfdGhpcyRwb3B1cFJlZiRjdXJyZW4zO1xuXG4gICAgICAgICAgKF90aGlzJHBvcHVwUmVmJGN1cnJlbjMgPSB0aGlzLnBvcHVwUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF90aGlzJHBvcHVwUmVmJGN1cnJlbjMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHBvcHVwUmVmJGN1cnJlbjMuZm9yY2VBbGlnbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImZpcmVFdmVudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmaXJlRXZlbnRzKHR5cGUsIGUpIHtcbiAgICAgICAgdmFyIGNoaWxkQ2FsbGJhY2sgPSB0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzW3R5cGVdO1xuXG4gICAgICAgIGlmIChjaGlsZENhbGxiYWNrKSB7XG4gICAgICAgICAgY2hpbGRDYWxsYmFjayhlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMucHJvcHNbdHlwZV07XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5zZXRQb3B1cFZpc2libGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBwb3B1cFZpc2libGUgPSB0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZTtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMTEgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczExLmNoaWxkcmVuLFxuICAgICAgICAgICAgZm9yY2VSZW5kZXIgPSBfdGhpcyRwcm9wczExLmZvcmNlUmVuZGVyLFxuICAgICAgICAgICAgYWxpZ25Qb2ludCA9IF90aGlzJHByb3BzMTEuYWxpZ25Qb2ludCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMTEuY2xhc3NOYW1lLFxuICAgICAgICAgICAgYXV0b0Rlc3Ryb3kgPSBfdGhpcyRwcm9wczExLmF1dG9EZXN0cm95O1xuICAgICAgICB2YXIgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgdmFyIG5ld0NoaWxkUHJvcHMgPSB7XG4gICAgICAgICAga2V5OiAndHJpZ2dlcidcbiAgICAgICAgfTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFZpc2libGUgSGFuZGxlcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vID4+PiBDb250ZXh0TWVudVxuXG4gICAgICAgIGlmICh0aGlzLmlzQ29udGV4dE1lbnVUb1Nob3coKSkge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Db250ZXh0TWVudSA9IHRoaXMub25Db250ZXh0TWVudTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uQ29udGV4dE1lbnUgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Db250ZXh0TWVudScpO1xuICAgICAgICB9IC8vID4+PiBDbGlja1xuXG5cbiAgICAgICAgaWYgKHRoaXMuaXNDbGlja1RvSGlkZSgpIHx8IHRoaXMuaXNDbGlja1RvU2hvdygpKSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrO1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duO1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Ub3VjaFN0YXJ0ID0gdGhpcy5vblRvdWNoU3RhcnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNsaWNrID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQ2xpY2snKTtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VEb3duID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uTW91c2VEb3duJyk7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vblRvdWNoU3RhcnQgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Ub3VjaFN0YXJ0Jyk7XG4gICAgICAgIH0gLy8gPj4+IEhvdmVyKGVudGVyKVxuXG5cbiAgICAgICAgaWYgKHRoaXMuaXNNb3VzZUVudGVyVG9TaG93KCkpIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IHRoaXMub25Nb3VzZUVudGVyOyAvLyBQb2ludCBhbGlnblxuXG4gICAgICAgICAgaWYgKGFsaWduUG9pbnQpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbk1vdXNlRW50ZXInKTtcbiAgICAgICAgfSAvLyA+Pj4gSG92ZXIobGVhdmUpXG5cblxuICAgICAgICBpZiAodGhpcy5pc01vdXNlTGVhdmVUb0hpZGUoKSkge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUxlYXZlID0gdGhpcy5vbk1vdXNlTGVhdmU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlTGVhdmUgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Nb3VzZUxlYXZlJyk7XG4gICAgICAgIH0gLy8gPj4+IEZvY3VzXG5cblxuICAgICAgICBpZiAodGhpcy5pc0ZvY3VzVG9TaG93KCkgfHwgdGhpcy5pc0JsdXJUb0hpZGUoKSkge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Gb2N1cyA9IHRoaXMub25Gb2N1cztcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uQmx1ciA9IHRoaXMub25CbHVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Gb2N1cyA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbkZvY3VzJyk7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbkJsdXIgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25CbHVyJyk7XG4gICAgICAgIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gUmVuZGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICAgICAgICB2YXIgY2hpbGRyZW5DbGFzc05hbWUgPSBjbGFzc05hbWVzKGNoaWxkICYmIGNoaWxkLnByb3BzICYmIGNoaWxkLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NOYW1lKTtcblxuICAgICAgICBpZiAoY2hpbGRyZW5DbGFzc05hbWUpIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLmNsYXNzTmFtZSA9IGNoaWxkcmVuQ2xhc3NOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsb25lUHJvcHMgPSBfb2JqZWN0U3ByZWFkKHt9LCBuZXdDaGlsZFByb3BzKTtcblxuICAgICAgICBpZiAoc3VwcG9ydFJlZihjaGlsZCkpIHtcbiAgICAgICAgICBjbG9uZVByb3BzLnJlZiA9IGNvbXBvc2VSZWYodGhpcy50cmlnZ2VyUmVmLCBjaGlsZC5yZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRyaWdnZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjbG9uZVByb3BzKTtcbiAgICAgICAgdmFyIHBvcnRhbDsgLy8gcHJldmVudCB1bm1vdW50aW5nIGFmdGVyIGl0J3MgcmVuZGVyZWRcblxuICAgICAgICBpZiAocG9wdXBWaXNpYmxlIHx8IHRoaXMucG9wdXBSZWYuY3VycmVudCB8fCBmb3JjZVJlbmRlcikge1xuICAgICAgICAgIHBvcnRhbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBvcnRhbENvbXBvbmVudCwge1xuICAgICAgICAgICAga2V5OiBcInBvcnRhbFwiLFxuICAgICAgICAgICAgZ2V0Q29udGFpbmVyOiB0aGlzLmdldENvbnRhaW5lcixcbiAgICAgICAgICAgIGRpZFVwZGF0ZTogdGhpcy5oYW5kbGVQb3J0YWxVcGRhdGVcbiAgICAgICAgICB9LCB0aGlzLmdldENvbXBvbmVudCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcG9wdXBWaXNpYmxlICYmIGF1dG9EZXN0cm95KSB7XG4gICAgICAgICAgcG9ydGFsID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmlnZ2VyQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBvblBvcHVwTW91c2VEb3duOiB0aGlzLm9uUG9wdXBNb3VzZURvd25cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRyaWdnZXIsIHBvcnRhbCk7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKF9yZWYsIHByZXZTdGF0ZSkge1xuICAgICAgICB2YXIgcG9wdXBWaXNpYmxlID0gX3JlZi5wb3B1cFZpc2libGU7XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuXG4gICAgICAgIGlmIChwb3B1cFZpc2libGUgIT09IHVuZGVmaW5lZCAmJiBwcmV2U3RhdGUucG9wdXBWaXNpYmxlICE9PSBwb3B1cFZpc2libGUpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5wb3B1cFZpc2libGUgPSBwb3B1cFZpc2libGU7XG4gICAgICAgICAgbmV3U3RhdGUucHJldlBvcHVwVmlzaWJsZSA9IHByZXZTdGF0ZS5wb3B1cFZpc2libGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRyaWdnZXI7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBUcmlnZ2VyLmNvbnRleHRUeXBlID0gVHJpZ2dlckNvbnRleHQ7XG4gIFRyaWdnZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ3JjLXRyaWdnZXItcG9wdXAnLFxuICAgIGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduOiByZXR1cm5FbXB0eVN0cmluZyxcbiAgICBnZXREb2N1bWVudDogcmV0dXJuRG9jdW1lbnQsXG4gICAgb25Qb3B1cFZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgYWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgb25Qb3B1cEFsaWduOiBub29wLFxuICAgIHBvcHVwQ2xhc3NOYW1lOiAnJyxcbiAgICBtb3VzZUVudGVyRGVsYXk6IDAsXG4gICAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gICAgZm9jdXNEZWxheTogMCxcbiAgICBibHVyRGVsYXk6IDAuMTUsXG4gICAgcG9wdXBTdHlsZToge30sXG4gICAgZGVzdHJveVBvcHVwT25IaWRlOiBmYWxzZSxcbiAgICBwb3B1cEFsaWduOiB7fSxcbiAgICBkZWZhdWx0UG9wdXBWaXNpYmxlOiBmYWxzZSxcbiAgICBtYXNrOiBmYWxzZSxcbiAgICBtYXNrQ2xvc2FibGU6IHRydWUsXG4gICAgYWN0aW9uOiBbXSxcbiAgICBzaG93QWN0aW9uOiBbXSxcbiAgICBoaWRlQWN0aW9uOiBbXSxcbiAgICBhdXRvRGVzdHJveTogZmFsc2VcbiAgfTtcbiAgcmV0dXJuIFRyaWdnZXI7XG59XG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVRyaWdnZXIoUG9ydGFsKTsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuXG5mdW5jdGlvbiBpc1BvaW50c0VxKGExLCBhMiwgaXNBbGlnblBvaW50KSB7XG4gIGlmIChpc0FsaWduUG9pbnQpIHtcbiAgICByZXR1cm4gYTFbMF0gPT09IGEyWzBdO1xuICB9XG5cbiAgcmV0dXJuIGExWzBdID09PSBhMlswXSAmJiBhMVsxXSA9PT0gYTJbMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGlnbkZyb21QbGFjZW1lbnQoYnVpbHRpblBsYWNlbWVudHMsIHBsYWNlbWVudFN0ciwgYWxpZ24pIHtcbiAgdmFyIGJhc2VBbGlnbiA9IGJ1aWx0aW5QbGFjZW1lbnRzW3BsYWNlbWVudFN0cl0gfHwge307XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGJhc2VBbGlnbiksIGFsaWduKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGlnblBvcHVwQ2xhc3NOYW1lKGJ1aWx0aW5QbGFjZW1lbnRzLCBwcmVmaXhDbHMsIGFsaWduLCBpc0FsaWduUG9pbnQpIHtcbiAgdmFyIHBvaW50cyA9IGFsaWduLnBvaW50cztcbiAgdmFyIHBsYWNlbWVudHMgPSBPYmplY3Qua2V5cyhidWlsdGluUGxhY2VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICBpZiAoaXNQb2ludHNFcShidWlsdGluUGxhY2VtZW50c1twbGFjZW1lbnRdLnBvaW50cywgcG9pbnRzLCBpc0FsaWduUG9pbnQpKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wbGFjZW1lbnQtXCIpLmNvbmNhdChwbGFjZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn0iLCJleHBvcnQgZnVuY3Rpb24gZ2V0TW90aW9uKF9yZWYpIHtcbiAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgbW90aW9uID0gX3JlZi5tb3Rpb24sXG4gICAgICBhbmltYXRpb24gPSBfcmVmLmFuaW1hdGlvbixcbiAgICAgIHRyYW5zaXRpb25OYW1lID0gX3JlZi50cmFuc2l0aW9uTmFtZTtcblxuICBpZiAobW90aW9uKSB7XG4gICAgcmV0dXJuIG1vdGlvbjtcbiAgfVxuXG4gIGlmIChhbmltYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW90aW9uTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KGFuaW1hdGlvbilcbiAgICB9O1xuICB9XG5cbiAgaWYgKHRyYW5zaXRpb25OYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcldyYXAodGFyZ2V0LCBldmVudFR5cGUsIGNiLCBvcHRpb24pIHtcbiAgLyogZXNsaW50IGNhbWVsY2FzZTogMiAqL1xuICB2YXIgY2FsbGJhY2sgPSBSZWFjdERPTS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyA/IGZ1bmN0aW9uIHJ1bihlKSB7XG4gICAgUmVhY3RET00udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMoY2IsIGUpO1xuICB9IDogY2I7XG5cbiAgaWYgKHRhcmdldC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjaywgb3B0aW9uKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICBpZiAodGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhblVzZURvbSgpIHtcbiAgcmV0dXJuICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbnMocm9vdCwgbikge1xuICBpZiAoIXJvb3QpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcm9vdC5jb250YWlucyhuKTtcbn0iLCJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbi8qKlxuICogUmV0dXJuIGlmIGEgbm9kZSBpcyBhIERPTSBub2RlLiBFbHNlIHdpbGwgcmV0dXJuIGJ5IGBmaW5kRE9NTm9kZWBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kRE9NTm9kZShub2RlKSB7XG4gIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZShub2RlKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQub2Zmc2V0UGFyZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoZWxlbWVudC5nZXRCQm94KSB7XG4gICAgdmFyIGJveCA9IGVsZW1lbnQuZ2V0QkJveCgpO1xuXG4gICAgaWYgKGJveC53aWR0aCB8fCBib3guaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICB2YXIgX2JveCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAoX2JveC53aWR0aCB8fCBfYm94LmhlaWdodCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSk7IiwiLyoqXG4gKiBAaWdub3JlXG4gKiBzb21lIGtleS1jb2RlcyBkZWZpbml0aW9uIGFuZCB1dGlscyBmcm9tIGNsb3N1cmUtbGlicmFyeVxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xudmFyIEtleUNvZGUgPSB7XG4gIC8qKlxuICAgKiBNQUNfRU5URVJcbiAgICovXG4gIE1BQ19FTlRFUjogMyxcblxuICAvKipcbiAgICogQkFDS1NQQUNFXG4gICAqL1xuICBCQUNLU1BBQ0U6IDgsXG5cbiAgLyoqXG4gICAqIFRBQlxuICAgKi9cbiAgVEFCOiA5LFxuXG4gIC8qKlxuICAgKiBOVU1MT0NLIG9uIEZGL1NhZmFyaSBNYWNcbiAgICovXG4gIE5VTV9DRU5URVI6IDEyLFxuXG4gIC8qKlxuICAgKiBFTlRFUlxuICAgKi9cbiAgRU5URVI6IDEzLFxuXG4gIC8qKlxuICAgKiBTSElGVFxuICAgKi9cbiAgU0hJRlQ6IDE2LFxuXG4gIC8qKlxuICAgKiBDVFJMXG4gICAqL1xuICBDVFJMOiAxNyxcblxuICAvKipcbiAgICogQUxUXG4gICAqL1xuICBBTFQ6IDE4LFxuXG4gIC8qKlxuICAgKiBQQVVTRVxuICAgKi9cbiAgUEFVU0U6IDE5LFxuXG4gIC8qKlxuICAgKiBDQVBTX0xPQ0tcbiAgICovXG4gIENBUFNfTE9DSzogMjAsXG5cbiAgLyoqXG4gICAqIEVTQ1xuICAgKi9cbiAgRVNDOiAyNyxcblxuICAvKipcbiAgICogU1BBQ0VcbiAgICovXG4gIFNQQUNFOiAzMixcblxuICAvKipcbiAgICogUEFHRV9VUFxuICAgKi9cbiAgUEFHRV9VUDogMzMsXG5cbiAgLyoqXG4gICAqIFBBR0VfRE9XTlxuICAgKi9cbiAgUEFHRV9ET1dOOiAzNCxcblxuICAvKipcbiAgICogRU5EXG4gICAqL1xuICBFTkQ6IDM1LFxuXG4gIC8qKlxuICAgKiBIT01FXG4gICAqL1xuICBIT01FOiAzNixcblxuICAvKipcbiAgICogTEVGVFxuICAgKi9cbiAgTEVGVDogMzcsXG5cbiAgLyoqXG4gICAqIFVQXG4gICAqL1xuICBVUDogMzgsXG5cbiAgLyoqXG4gICAqIFJJR0hUXG4gICAqL1xuICBSSUdIVDogMzksXG5cbiAgLyoqXG4gICAqIERPV05cbiAgICovXG4gIERPV046IDQwLFxuXG4gIC8qKlxuICAgKiBQUklOVF9TQ1JFRU5cbiAgICovXG4gIFBSSU5UX1NDUkVFTjogNDQsXG5cbiAgLyoqXG4gICAqIElOU0VSVFxuICAgKi9cbiAgSU5TRVJUOiA0NSxcblxuICAvKipcbiAgICogREVMRVRFXG4gICAqL1xuICBERUxFVEU6IDQ2LFxuXG4gIC8qKlxuICAgKiBaRVJPXG4gICAqL1xuICBaRVJPOiA0OCxcblxuICAvKipcbiAgICogT05FXG4gICAqL1xuICBPTkU6IDQ5LFxuXG4gIC8qKlxuICAgKiBUV09cbiAgICovXG4gIFRXTzogNTAsXG5cbiAgLyoqXG4gICAqIFRIUkVFXG4gICAqL1xuICBUSFJFRTogNTEsXG5cbiAgLyoqXG4gICAqIEZPVVJcbiAgICovXG4gIEZPVVI6IDUyLFxuXG4gIC8qKlxuICAgKiBGSVZFXG4gICAqL1xuICBGSVZFOiA1MyxcblxuICAvKipcbiAgICogU0lYXG4gICAqL1xuICBTSVg6IDU0LFxuXG4gIC8qKlxuICAgKiBTRVZFTlxuICAgKi9cbiAgU0VWRU46IDU1LFxuXG4gIC8qKlxuICAgKiBFSUdIVFxuICAgKi9cbiAgRUlHSFQ6IDU2LFxuXG4gIC8qKlxuICAgKiBOSU5FXG4gICAqL1xuICBOSU5FOiA1NyxcblxuICAvKipcbiAgICogUVVFU1RJT05fTUFSS1xuICAgKi9cbiAgUVVFU1RJT05fTUFSSzogNjMsXG5cbiAgLyoqXG4gICAqIEFcbiAgICovXG4gIEE6IDY1LFxuXG4gIC8qKlxuICAgKiBCXG4gICAqL1xuICBCOiA2NixcblxuICAvKipcbiAgICogQ1xuICAgKi9cbiAgQzogNjcsXG5cbiAgLyoqXG4gICAqIERcbiAgICovXG4gIEQ6IDY4LFxuXG4gIC8qKlxuICAgKiBFXG4gICAqL1xuICBFOiA2OSxcblxuICAvKipcbiAgICogRlxuICAgKi9cbiAgRjogNzAsXG5cbiAgLyoqXG4gICAqIEdcbiAgICovXG4gIEc6IDcxLFxuXG4gIC8qKlxuICAgKiBIXG4gICAqL1xuICBIOiA3MixcblxuICAvKipcbiAgICogSVxuICAgKi9cbiAgSTogNzMsXG5cbiAgLyoqXG4gICAqIEpcbiAgICovXG4gIEo6IDc0LFxuXG4gIC8qKlxuICAgKiBLXG4gICAqL1xuICBLOiA3NSxcblxuICAvKipcbiAgICogTFxuICAgKi9cbiAgTDogNzYsXG5cbiAgLyoqXG4gICAqIE1cbiAgICovXG4gIE06IDc3LFxuXG4gIC8qKlxuICAgKiBOXG4gICAqL1xuICBOOiA3OCxcblxuICAvKipcbiAgICogT1xuICAgKi9cbiAgTzogNzksXG5cbiAgLyoqXG4gICAqIFBcbiAgICovXG4gIFA6IDgwLFxuXG4gIC8qKlxuICAgKiBRXG4gICAqL1xuICBROiA4MSxcblxuICAvKipcbiAgICogUlxuICAgKi9cbiAgUjogODIsXG5cbiAgLyoqXG4gICAqIFNcbiAgICovXG4gIFM6IDgzLFxuXG4gIC8qKlxuICAgKiBUXG4gICAqL1xuICBUOiA4NCxcblxuICAvKipcbiAgICogVVxuICAgKi9cbiAgVTogODUsXG5cbiAgLyoqXG4gICAqIFZcbiAgICovXG4gIFY6IDg2LFxuXG4gIC8qKlxuICAgKiBXXG4gICAqL1xuICBXOiA4NyxcblxuICAvKipcbiAgICogWFxuICAgKi9cbiAgWDogODgsXG5cbiAgLyoqXG4gICAqIFlcbiAgICovXG4gIFk6IDg5LFxuXG4gIC8qKlxuICAgKiBaXG4gICAqL1xuICBaOiA5MCxcblxuICAvKipcbiAgICogTUVUQVxuICAgKi9cbiAgTUVUQTogOTEsXG5cbiAgLyoqXG4gICAqIFdJTl9LRVlfUklHSFRcbiAgICovXG4gIFdJTl9LRVlfUklHSFQ6IDkyLFxuXG4gIC8qKlxuICAgKiBDT05URVhUX01FTlVcbiAgICovXG4gIENPTlRFWFRfTUVOVTogOTMsXG5cbiAgLyoqXG4gICAqIE5VTV9aRVJPXG4gICAqL1xuICBOVU1fWkVSTzogOTYsXG5cbiAgLyoqXG4gICAqIE5VTV9PTkVcbiAgICovXG4gIE5VTV9PTkU6IDk3LFxuXG4gIC8qKlxuICAgKiBOVU1fVFdPXG4gICAqL1xuICBOVU1fVFdPOiA5OCxcblxuICAvKipcbiAgICogTlVNX1RIUkVFXG4gICAqL1xuICBOVU1fVEhSRUU6IDk5LFxuXG4gIC8qKlxuICAgKiBOVU1fRk9VUlxuICAgKi9cbiAgTlVNX0ZPVVI6IDEwMCxcblxuICAvKipcbiAgICogTlVNX0ZJVkVcbiAgICovXG4gIE5VTV9GSVZFOiAxMDEsXG5cbiAgLyoqXG4gICAqIE5VTV9TSVhcbiAgICovXG4gIE5VTV9TSVg6IDEwMixcblxuICAvKipcbiAgICogTlVNX1NFVkVOXG4gICAqL1xuICBOVU1fU0VWRU46IDEwMyxcblxuICAvKipcbiAgICogTlVNX0VJR0hUXG4gICAqL1xuICBOVU1fRUlHSFQ6IDEwNCxcblxuICAvKipcbiAgICogTlVNX05JTkVcbiAgICovXG4gIE5VTV9OSU5FOiAxMDUsXG5cbiAgLyoqXG4gICAqIE5VTV9NVUxUSVBMWVxuICAgKi9cbiAgTlVNX01VTFRJUExZOiAxMDYsXG5cbiAgLyoqXG4gICAqIE5VTV9QTFVTXG4gICAqL1xuICBOVU1fUExVUzogMTA3LFxuXG4gIC8qKlxuICAgKiBOVU1fTUlOVVNcbiAgICovXG4gIE5VTV9NSU5VUzogMTA5LFxuXG4gIC8qKlxuICAgKiBOVU1fUEVSSU9EXG4gICAqL1xuICBOVU1fUEVSSU9EOiAxMTAsXG5cbiAgLyoqXG4gICAqIE5VTV9ESVZJU0lPTlxuICAgKi9cbiAgTlVNX0RJVklTSU9OOiAxMTEsXG5cbiAgLyoqXG4gICAqIEYxXG4gICAqL1xuICBGMTogMTEyLFxuXG4gIC8qKlxuICAgKiBGMlxuICAgKi9cbiAgRjI6IDExMyxcblxuICAvKipcbiAgICogRjNcbiAgICovXG4gIEYzOiAxMTQsXG5cbiAgLyoqXG4gICAqIEY0XG4gICAqL1xuICBGNDogMTE1LFxuXG4gIC8qKlxuICAgKiBGNVxuICAgKi9cbiAgRjU6IDExNixcblxuICAvKipcbiAgICogRjZcbiAgICovXG4gIEY2OiAxMTcsXG5cbiAgLyoqXG4gICAqIEY3XG4gICAqL1xuICBGNzogMTE4LFxuXG4gIC8qKlxuICAgKiBGOFxuICAgKi9cbiAgRjg6IDExOSxcblxuICAvKipcbiAgICogRjlcbiAgICovXG4gIEY5OiAxMjAsXG5cbiAgLyoqXG4gICAqIEYxMFxuICAgKi9cbiAgRjEwOiAxMjEsXG5cbiAgLyoqXG4gICAqIEYxMVxuICAgKi9cbiAgRjExOiAxMjIsXG5cbiAgLyoqXG4gICAqIEYxMlxuICAgKi9cbiAgRjEyOiAxMjMsXG5cbiAgLyoqXG4gICAqIE5VTUxPQ0tcbiAgICovXG4gIE5VTUxPQ0s6IDE0NCxcblxuICAvKipcbiAgICogU0VNSUNPTE9OXG4gICAqL1xuICBTRU1JQ09MT046IDE4NixcblxuICAvKipcbiAgICogREFTSFxuICAgKi9cbiAgREFTSDogMTg5LFxuXG4gIC8qKlxuICAgKiBFUVVBTFNcbiAgICovXG4gIEVRVUFMUzogMTg3LFxuXG4gIC8qKlxuICAgKiBDT01NQVxuICAgKi9cbiAgQ09NTUE6IDE4OCxcblxuICAvKipcbiAgICogUEVSSU9EXG4gICAqL1xuICBQRVJJT0Q6IDE5MCxcblxuICAvKipcbiAgICogU0xBU0hcbiAgICovXG4gIFNMQVNIOiAxOTEsXG5cbiAgLyoqXG4gICAqIEFQT1NUUk9QSEVcbiAgICovXG4gIEFQT1NUUk9QSEU6IDE5MixcblxuICAvKipcbiAgICogU0lOR0xFX1FVT1RFXG4gICAqL1xuICBTSU5HTEVfUVVPVEU6IDIyMixcblxuICAvKipcbiAgICogT1BFTl9TUVVBUkVfQlJBQ0tFVFxuICAgKi9cbiAgT1BFTl9TUVVBUkVfQlJBQ0tFVDogMjE5LFxuXG4gIC8qKlxuICAgKiBCQUNLU0xBU0hcbiAgICovXG4gIEJBQ0tTTEFTSDogMjIwLFxuXG4gIC8qKlxuICAgKiBDTE9TRV9TUVVBUkVfQlJBQ0tFVFxuICAgKi9cbiAgQ0xPU0VfU1FVQVJFX0JSQUNLRVQ6IDIyMSxcblxuICAvKipcbiAgICogV0lOX0tFWVxuICAgKi9cbiAgV0lOX0tFWTogMjI0LFxuXG4gIC8qKlxuICAgKiBNQUNfRkZfTUVUQVxuICAgKi9cbiAgTUFDX0ZGX01FVEE6IDIyNCxcblxuICAvKipcbiAgICogV0lOX0lNRVxuICAgKi9cbiAgV0lOX0lNRTogMjI5LFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gRnVuY3Rpb24gPT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLyoqXG4gICAqIHdoZXRoZXIgdGV4dCBhbmQgbW9kaWZpZWQga2V5IGlzIGVudGVyZWQgYXQgdGhlIHNhbWUgdGltZS5cbiAgICovXG4gIGlzVGV4dE1vZGlmeWluZ0tleUV2ZW50OiBmdW5jdGlvbiBpc1RleHRNb2RpZnlpbmdLZXlFdmVudChlKSB7XG4gICAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGU7XG5cbiAgICBpZiAoZS5hbHRLZXkgJiYgIWUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHwgLy8gRnVuY3Rpb24ga2V5cyBkb24ndCBnZW5lcmF0ZSB0ZXh0XG4gICAga2V5Q29kZSA+PSBLZXlDb2RlLkYxICYmIGtleUNvZGUgPD0gS2V5Q29kZS5GMTIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIFRoZSBmb2xsb3dpbmcga2V5cyBhcmUgcXVpdGUgaGFybWxlc3MsIGV2ZW4gaW4gY29tYmluYXRpb24gd2l0aFxuICAgIC8vIENUUkwsIEFMVCBvciBTSElGVC5cblxuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEtleUNvZGUuQUxUOlxuICAgICAgY2FzZSBLZXlDb2RlLkNBUFNfTE9DSzpcbiAgICAgIGNhc2UgS2V5Q29kZS5DT05URVhUX01FTlU6XG4gICAgICBjYXNlIEtleUNvZGUuQ1RSTDpcbiAgICAgIGNhc2UgS2V5Q29kZS5ET1dOOlxuICAgICAgY2FzZSBLZXlDb2RlLkVORDpcbiAgICAgIGNhc2UgS2V5Q29kZS5FU0M6XG4gICAgICBjYXNlIEtleUNvZGUuSE9NRTpcbiAgICAgIGNhc2UgS2V5Q29kZS5JTlNFUlQ6XG4gICAgICBjYXNlIEtleUNvZGUuTEVGVDpcbiAgICAgIGNhc2UgS2V5Q29kZS5NQUNfRkZfTUVUQTpcbiAgICAgIGNhc2UgS2V5Q29kZS5NRVRBOlxuICAgICAgY2FzZSBLZXlDb2RlLk5VTUxPQ0s6XG4gICAgICBjYXNlIEtleUNvZGUuTlVNX0NFTlRFUjpcbiAgICAgIGNhc2UgS2V5Q29kZS5QQUdFX0RPV046XG4gICAgICBjYXNlIEtleUNvZGUuUEFHRV9VUDpcbiAgICAgIGNhc2UgS2V5Q29kZS5QQVVTRTpcbiAgICAgIGNhc2UgS2V5Q29kZS5QUklOVF9TQ1JFRU46XG4gICAgICBjYXNlIEtleUNvZGUuUklHSFQ6XG4gICAgICBjYXNlIEtleUNvZGUuU0hJRlQ6XG4gICAgICBjYXNlIEtleUNvZGUuVVA6XG4gICAgICBjYXNlIEtleUNvZGUuV0lOX0tFWTpcbiAgICAgIGNhc2UgS2V5Q29kZS5XSU5fS0VZX1JJR0hUOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogd2hldGhlciBjaGFyYWN0ZXIgaXMgZW50ZXJlZC5cbiAgICovXG4gIGlzQ2hhcmFjdGVyS2V5OiBmdW5jdGlvbiBpc0NoYXJhY3RlcktleShrZXlDb2RlKSB7XG4gICAgaWYgKGtleUNvZGUgPj0gS2V5Q29kZS5aRVJPICYmIGtleUNvZGUgPD0gS2V5Q29kZS5OSU5FKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoa2V5Q29kZSA+PSBLZXlDb2RlLk5VTV9aRVJPICYmIGtleUNvZGUgPD0gS2V5Q29kZS5OVU1fTVVMVElQTFkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChrZXlDb2RlID49IEtleUNvZGUuQSAmJiBrZXlDb2RlIDw9IEtleUNvZGUuWikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBTYWZhcmkgc2VuZHMgemVybyBrZXkgY29kZSBmb3Igbm9uLWxhdGluIGNoYXJhY3RlcnMuXG5cblxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdXZWJLaXQnKSAhPT0gLTEgJiYga2V5Q29kZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEtleUNvZGUuU1BBQ0U6XG4gICAgICBjYXNlIEtleUNvZGUuUVVFU1RJT05fTUFSSzpcbiAgICAgIGNhc2UgS2V5Q29kZS5OVU1fUExVUzpcbiAgICAgIGNhc2UgS2V5Q29kZS5OVU1fTUlOVVM6XG4gICAgICBjYXNlIEtleUNvZGUuTlVNX1BFUklPRDpcbiAgICAgIGNhc2UgS2V5Q29kZS5OVU1fRElWSVNJT046XG4gICAgICBjYXNlIEtleUNvZGUuU0VNSUNPTE9OOlxuICAgICAgY2FzZSBLZXlDb2RlLkRBU0g6XG4gICAgICBjYXNlIEtleUNvZGUuRVFVQUxTOlxuICAgICAgY2FzZSBLZXlDb2RlLkNPTU1BOlxuICAgICAgY2FzZSBLZXlDb2RlLlBFUklPRDpcbiAgICAgIGNhc2UgS2V5Q29kZS5TTEFTSDpcbiAgICAgIGNhc2UgS2V5Q29kZS5BUE9TVFJPUEhFOlxuICAgICAgY2FzZSBLZXlDb2RlLlNJTkdMRV9RVU9URTpcbiAgICAgIGNhc2UgS2V5Q29kZS5PUEVOX1NRVUFSRV9CUkFDS0VUOlxuICAgICAgY2FzZSBLZXlDb2RlLkJBQ0tTTEFTSDpcbiAgICAgIGNhc2UgS2V5Q29kZS5DTE9TRV9TUVVBUkVfQlJBQ0tFVDpcbiAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBLZXlDb2RlOyIsImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCBmb3J3YXJkUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY2FuVXNlRG9tIGZyb20gJy4vRG9tL2NhblVzZURvbSc7XG52YXIgUG9ydGFsID0gZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgZGlkVXBkYXRlID0gcHJvcHMuZGlkVXBkYXRlLFxuICAgICAgZ2V0Q29udGFpbmVyID0gcHJvcHMuZ2V0Q29udGFpbmVyLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgdmFyIGNvbnRhaW5lclJlZiA9IHVzZVJlZigpOyAvLyBSZWYgcmV0dXJuIG5vdGhpbmcsIG9ubHkgZm9yIHdyYXBwZXIgY2hlY2sgZXhpc3RcblxuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSk7IC8vIENyZWF0ZSBjb250YWluZXIgaW4gY2xpZW50IHNpZGUgd2l0aCBzeW5jIHRvIGF2b2lkIHVzZUVmZmVjdCBub3QgZ2V0IHJlZlxuXG4gIHZhciBpbml0UmVmID0gdXNlUmVmKGZhbHNlKTtcblxuICBpZiAoIWluaXRSZWYuY3VycmVudCAmJiBjYW5Vc2VEb20oKSkge1xuICAgIGNvbnRhaW5lclJlZi5jdXJyZW50ID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgaW5pdFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgfSAvLyBbTGVnYWN5XSBVc2VkIGJ5IGByYy10cmlnZ2VyYFxuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBkaWRVcGRhdGUgPT09IG51bGwgfHwgZGlkVXBkYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaWRVcGRhdGUocHJvcHMpO1xuICB9KTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9jb250YWluZXJSZWYkY3VycmVudCwgX2NvbnRhaW5lclJlZiRjdXJyZW50MjtcblxuICAgICAgLy8gW0xlZ2FjeV0gVGhpcyBzaG91bGQgbm90IGJlIGhhbmRsZSBieSBQb3J0YWwgYnV0IHBhcmVudCBQb3J0YWxXcmFwcGVyIGluc3RlYWQuXG4gICAgICAvLyBTaW5jZSBzb21lIGNvbXBvbmVudCB1c2UgYFBvcnRhbGAgZGlyZWN0bHksIHdlIGhhdmUgdG8ga2VlcCB0aGUgbG9naWMgaGVyZS5cbiAgICAgIChfY29udGFpbmVyUmVmJGN1cnJlbnQgPSBjb250YWluZXJSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2NvbnRhaW5lclJlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2NvbnRhaW5lclJlZiRjdXJyZW50MiA9IF9jb250YWluZXJSZWYkY3VycmVudC5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfY29udGFpbmVyUmVmJGN1cnJlbnQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY29udGFpbmVyUmVmJGN1cnJlbnQyLnJlbW92ZUNoaWxkKGNvbnRhaW5lclJlZi5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiBjb250YWluZXJSZWYuY3VycmVudCA/IFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgY29udGFpbmVyUmVmLmN1cnJlbnQpIDogbnVsbDtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgUG9ydGFsOyIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBhZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmE7XG5cbiAgaWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGFnZW50KSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298cy0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8LW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxidy0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbS18Y2VsbHxjaHRtfGNsZGN8Y21kLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkYy1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZi01fGctbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZC0obXxwfHQpfGhlaS18aGkocHR8dGEpfGhwKCBpfGlwKXxocy1jfGh0KGMoLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGktKDIwfGdvfG1hKXxpMjMwfGlhYyggfC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Yy18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8LVthLXddKXxsaWJ3fGx5bnh8bTEtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG0tY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8LShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwbi0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHQtZ3xxYS1hfHFjKDA3fDEyfDIxfDMyfDYwfC1bMi03XXxpLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGgtfG9vfHAtKXxzZGtcXC98c2UoYygtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaC18c2hhcnxzaWUoLXxtKXxzay0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGgtfHYtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsLXx0ZGctfHRlbChpfG0pfHRpbS18dC1tb3x0byhwbHxzaCl8dHMoNzB8bS18bTN8bTUpfHR4LTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXMtfHlvdXJ8emV0b3x6dGUtL2kudGVzdChhZ2VudCA9PT0gbnVsbCB8fCBhZ2VudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWdlbnQuc3Vic3RyKDAsIDQpKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSk7IiwidmFyIHJhZiA9IGZ1bmN0aW9uIHJhZihjYWxsYmFjaykge1xuICByZXR1cm4gK3NldFRpbWVvdXQoY2FsbGJhY2ssIDE2KTtcbn07XG5cbnZhciBjYWYgPSBmdW5jdGlvbiBjYWYobnVtKSB7XG4gIHJldHVybiBjbGVhclRpbWVvdXQobnVtKTtcbn07XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAncmVxdWVzdEFuaW1hdGlvbkZyYW1lJyBpbiB3aW5kb3cpIHtcbiAgcmFmID0gZnVuY3Rpb24gcmFmKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9O1xuXG4gIGNhZiA9IGZ1bmN0aW9uIGNhZihoYW5kbGUpIHtcbiAgICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdyYXBwZXJSYWYoY2FsbGJhY2spIHtcbiAgcmV0dXJuIHJhZihjYWxsYmFjayk7XG59XG53cmFwcGVyUmFmLmNhbmNlbCA9IGNhZjsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgeyBpc01lbW8gfSBmcm9tICdyZWFjdC1pcyc7XG5leHBvcnQgZnVuY3Rpb24gZmlsbFJlZihyZWYsIG5vZGUpIHtcbiAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZWYobm9kZSk7XG4gIH0gZWxzZSBpZiAoX3R5cGVvZihyZWYpID09PSAnb2JqZWN0JyAmJiByZWYgJiYgJ2N1cnJlbnQnIGluIHJlZikge1xuICAgIHJlZi5jdXJyZW50ID0gbm9kZTtcbiAgfVxufVxuLyoqXG4gKiBNZXJnZSByZWZzIGludG8gb25lIHJlZiBmdW5jdGlvbiB0byBzdXBwb3J0IHJlZiBwYXNzaW5nLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlUmVmKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVmcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICByZWZzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmVmcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIGZpbGxSZWYocmVmLCBub2RlKTtcbiAgICB9KTtcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0UmVmKG5vZGVPckNvbXBvbmVudCkge1xuICB2YXIgX3R5cGUkcHJvdG90eXBlLCBfbm9kZU9yQ29tcG9uZW50JHByb3Q7XG5cbiAgdmFyIHR5cGUgPSBpc01lbW8obm9kZU9yQ29tcG9uZW50KSA/IG5vZGVPckNvbXBvbmVudC50eXBlLnR5cGUgOiBub2RlT3JDb21wb25lbnQudHlwZTsgLy8gRnVuY3Rpb24gY29tcG9uZW50IG5vZGVcblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgJiYgISgoX3R5cGUkcHJvdG90eXBlID0gdHlwZS5wcm90b3R5cGUpID09PSBudWxsIHx8IF90eXBlJHByb3RvdHlwZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3R5cGUkcHJvdG90eXBlLnJlbmRlcikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gQ2xhc3MgY29tcG9uZW50XG5cblxuICBpZiAodHlwZW9mIG5vZGVPckNvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJyAmJiAhKChfbm9kZU9yQ29tcG9uZW50JHByb3QgPSBub2RlT3JDb21wb25lbnQucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfbm9kZU9yQ29tcG9uZW50JHByb3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub2RlT3JDb21wb25lbnQkcHJvdC5yZW5kZXIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKiBlc2xpbnQtZW5hYmxlICovIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xudmFyIHdhcm5lZCA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmcodmFsaWQsIG1lc3NhZ2UpIHtcbiAgLy8gU3VwcG9ydCB1Z2xpZnlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXZhbGlkICYmIGNvbnNvbGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJXYXJuaW5nOiBcIi5jb25jYXQobWVzc2FnZSkpO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbm90ZSh2YWxpZCwgbWVzc2FnZSkge1xuICAvLyBTdXBwb3J0IHVnbGlmeVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhdmFsaWQgJiYgY29uc29sZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS53YXJuKFwiTm90ZTogXCIuY29uY2F0KG1lc3NhZ2UpKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0V2FybmVkKCkge1xuICB3YXJuZWQgPSB7fTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYWxsKG1ldGhvZCwgdmFsaWQsIG1lc3NhZ2UpIHtcbiAgaWYgKCF2YWxpZCAmJiAhd2FybmVkW21lc3NhZ2VdKSB7XG4gICAgbWV0aG9kKGZhbHNlLCBtZXNzYWdlKTtcbiAgICB3YXJuZWRbbWVzc2FnZV0gPSB0cnVlO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gd2FybmluZ09uY2UodmFsaWQsIG1lc3NhZ2UpIHtcbiAgY2FsbCh3YXJuaW5nLCB2YWxpZCwgbWVzc2FnZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbm90ZU9uY2UodmFsaWQsIG1lc3NhZ2UpIHtcbiAgY2FsbChub3RlLCB2YWxpZCwgbWVzc2FnZSk7XG59XG5leHBvcnQgZGVmYXVsdCB3YXJuaW5nT25jZTtcbi8qIGVzbGludC1lbmFibGUgKi8iLCIvKipcclxuICogQSBjb2xsZWN0aW9uIG9mIHNoaW1zIHRoYXQgcHJvdmlkZSBtaW5pbWFsIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIEVTNiBjb2xsZWN0aW9ucy5cclxuICpcclxuICogVGhlc2UgaW1wbGVtZW50YXRpb25zIGFyZSBub3QgbWVhbnQgdG8gYmUgdXNlZCBvdXRzaWRlIG9mIHRoZSBSZXNpemVPYnNlcnZlclxyXG4gKiBtb2R1bGVzIGFzIHRoZXkgY292ZXIgb25seSBhIGxpbWl0ZWQgcmFuZ2Ugb2YgdXNlIGNhc2VzLlxyXG4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYywgdmFsaWQtanNkb2MgKi9cclxudmFyIE1hcFNoaW0gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hcDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBpbmRleCBpbiBwcm92aWRlZCBhcnJheSB0aGF0IG1hdGNoZXMgdGhlIHNwZWNpZmllZCBrZXkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxBcnJheT59IGFyclxyXG4gICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldEluZGV4KGFyciwga2V5KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IC0xO1xyXG4gICAgICAgIGFyci5zb21lKGZ1bmN0aW9uIChlbnRyeSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5WzBdID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcInNpemVcIiwge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZW50cmllc19fLmxlbmd0aDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX19lbnRyaWVzX19baW5kZXhdO1xyXG4gICAgICAgICAgICByZXR1cm4gZW50cnkgJiYgZW50cnlbMV07XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fZW50cmllc19fW2luZGV4XVsxXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXy5wdXNoKFtrZXksIHZhbHVlXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgZW50cmllcyA9IHRoaXMuX19lbnRyaWVzX187XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KGVudHJpZXMsIGtleSk7XHJcbiAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGVudHJpZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIX5nZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18uc3BsaWNlKDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtjdHg9bnVsbF1cclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjdHgpIHtcclxuICAgICAgICAgICAgaWYgKGN0eCA9PT0gdm9pZCAwKSB7IGN0eCA9IG51bGw7IH1cclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX19lbnRyaWVzX187IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGN0eCwgZW50cnlbMV0sIGVudHJ5WzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzXzE7XHJcbiAgICB9KCkpO1xyXG59KSgpO1xuXG4vKipcclxuICogRGV0ZWN0cyB3aGV0aGVyIHdpbmRvdyBhbmQgZG9jdW1lbnQgb2JqZWN0cyBhcmUgYXZhaWxhYmxlIGluIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbiAqL1xyXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgPT09IGRvY3VtZW50O1xuXG4vLyBSZXR1cm5zIGdsb2JhbCBvYmplY3Qgb2YgYSBjdXJyZW50IGVudmlyb25tZW50LlxyXG52YXIgZ2xvYmFsJDEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93O1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXHJcbiAgICByZXR1cm4gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcclxufSkoKTtcblxuLyoqXHJcbiAqIEEgc2hpbSBmb3IgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB3aGljaCBmYWxscyBiYWNrIHRvIHRoZSBzZXRUaW1lb3V0IGlmXHJcbiAqIGZpcnN0IG9uZSBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXF1ZXN0cycgaWRlbnRpZmllci5cclxuICovXHJcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vIEl0J3MgcmVxdWlyZWQgdG8gdXNlIGEgYm91bmRlZCBmdW5jdGlvbiBiZWNhdXNlIElFIHNvbWV0aW1lcyB0aHJvd3NcclxuICAgICAgICAvLyBhbiBcIkludmFsaWQgY2FsbGluZyBvYmplY3RcIiBlcnJvciBpZiByQUYgaXMgaW52b2tlZCB3aXRob3V0IHRoZSBnbG9iYWxcclxuICAgICAgICAvLyBvYmplY3Qgb24gdGhlIGxlZnQgaGFuZCBzaWRlLlxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChnbG9iYWwkMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrKERhdGUubm93KCkpOyB9LCAxMDAwIC8gNjApOyB9O1xyXG59KSgpO1xuXG4vLyBEZWZpbmVzIG1pbmltdW0gdGltZW91dCBiZWZvcmUgYWRkaW5nIGEgdHJhaWxpbmcgY2FsbC5cclxudmFyIHRyYWlsaW5nVGltZW91dCA9IDI7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBlbnN1cmVzIHRoYXQgcHJvdmlkZWQgY2FsbGJhY2sgd2lsbCBiZVxyXG4gKiBpbnZva2VkIG9ubHkgb25jZSBkdXJpbmcgdGhlIHNwZWNpZmllZCBkZWxheSBwZXJpb2QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgZGVsYXkgcGVyaW9kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgLSBEZWxheSBhZnRlciB3aGljaCB0byBpbnZva2UgY2FsbGJhY2suXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICovXHJcbmZ1bmN0aW9uIHRocm90dGxlIChjYWxsYmFjaywgZGVsYXkpIHtcclxuICAgIHZhciBsZWFkaW5nQ2FsbCA9IGZhbHNlLCB0cmFpbGluZ0NhbGwgPSBmYWxzZSwgbGFzdENhbGxUaW1lID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgZnVuY3Rpb24gYW5kIHNjaGVkdWxlcyBuZXcgaW52b2NhdGlvbiBpZlxyXG4gICAgICogdGhlIFwicHJveHlcIiB3YXMgY2FsbGVkIGR1cmluZyBjdXJyZW50IHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlc29sdmVQZW5kaW5nKCkge1xyXG4gICAgICAgIGlmIChsZWFkaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICBsZWFkaW5nQ2FsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhaWxpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgIHByb3h5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXkuIEl0IHdpbGwgZnVydGhlciBwb3N0cG9uZVxyXG4gICAgICogaW52b2NhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZGVsZWdhdGluZyBpdCB0byB0aGVcclxuICAgICAqIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdGltZW91dENhbGxiYWNrKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxKHJlc29sdmVQZW5kaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2NoZWR1bGVzIGludm9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBwcm94eSgpIHtcclxuICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBpZiAobGVhZGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgLy8gUmVqZWN0IGltbWVkaWF0ZWx5IGZvbGxvd2luZyBjYWxscy5cclxuICAgICAgICAgICAgaWYgKHRpbWVTdGFtcCAtIGxhc3RDYWxsVGltZSA8IHRyYWlsaW5nVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFNjaGVkdWxlIG5ldyBjYWxsIHRvIGJlIGluIGludm9rZWQgd2hlbiB0aGUgcGVuZGluZyBvbmUgaXMgcmVzb2x2ZWQuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgaW1wb3J0YW50IGZvciBcInRyYW5zaXRpb25zXCIgd2hpY2ggbmV2ZXIgYWN0dWFsbHkgc3RhcnRcclxuICAgICAgICAgICAgLy8gaW1tZWRpYXRlbHkgc28gdGhlcmUgaXMgYSBjaGFuY2UgdGhhdCB3ZSBtaWdodCBtaXNzIG9uZSBpZiBjaGFuZ2VcclxuICAgICAgICAgICAgLy8gaGFwcGVucyBhbWlkcyB0aGUgcGVuZGluZyBpbnZvY2F0aW9uLlxyXG4gICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGVhZGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aW1lb3V0Q2FsbGJhY2ssIGRlbGF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdENhbGxUaW1lID0gdGltZVN0YW1wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3h5O1xyXG59XG5cbi8vIE1pbmltdW0gZGVsYXkgYmVmb3JlIGludm9raW5nIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2ZXJzLlxyXG52YXIgUkVGUkVTSF9ERUxBWSA9IDIwO1xyXG4vLyBBIGxpc3Qgb2Ygc3Vic3RyaW5ncyBvZiBDU1MgcHJvcGVydGllcyB1c2VkIHRvIGZpbmQgdHJhbnNpdGlvbiBldmVudHMgdGhhdFxyXG4vLyBtaWdodCBhZmZlY3QgZGltZW5zaW9ucyBvZiBvYnNlcnZlZCBlbGVtZW50cy5cclxudmFyIHRyYW5zaXRpb25LZXlzID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ3NpemUnLCAnd2VpZ2h0J107XHJcbi8vIENoZWNrIGlmIE11dGF0aW9uT2JzZXJ2ZXIgaXMgYXZhaWxhYmxlLlxyXG52YXIgbXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCA9IHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcclxuLyoqXHJcbiAqIFNpbmdsZXRvbiBjb250cm9sbGVyIGNsYXNzIHdoaWNoIGhhbmRsZXMgdXBkYXRlcyBvZiBSZXNpemVPYnNlcnZlciBpbnN0YW5jZXMuXHJcbiAqL1xyXG52YXIgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgRE9NIGxpc3RlbmVycyBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUZWxscyB0aGF0IGNvbnRyb2xsZXIgaGFzIHN1YnNjcmliZWQgZm9yIE11dGF0aW9uIEV2ZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBLZWVwcyByZWZlcmVuY2UgdG8gdGhlIGluc3RhbmNlIG9mIE11dGF0aW9uT2JzZXJ2ZXIuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7TXV0YXRpb25PYnNlcnZlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBsaXN0IG9mIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7QXJyYXk8UmVzaXplT2JzZXJ2ZXJTUEk+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzXyA9IFtdO1xyXG4gICAgICAgIHRoaXMub25UcmFuc2l0aW9uRW5kXyA9IHRoaXMub25UcmFuc2l0aW9uRW5kXy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCA9IHRocm90dGxlKHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLCBSRUZSRVNIX0RFTEFZKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBvYnNlcnZlciB0byBvYnNlcnZlcnMgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyU1BJfSBvYnNlcnZlciAtIE9ic2VydmVyIHRvIGJlIGFkZGVkLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICBpZiAoIX50aGlzLm9ic2VydmVyc18uaW5kZXhPZihvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnNfLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgbGlzdGVuZXJzIGlmIHRoZXkgaGF2ZW4ndCBiZWVuIGFkZGVkIHlldC5cclxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBvYnNlcnZlciBmcm9tIG9ic2VydmVycyBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJTUEl9IG9ic2VydmVyIC0gT2JzZXJ2ZXIgdG8gYmUgcmVtb3ZlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXztcclxuICAgICAgICB2YXIgaW5kZXggPSBvYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgLy8gUmVtb3ZlIG9ic2VydmVyIGlmIGl0J3MgcHJlc2VudCBpbiByZWdpc3RyeS5cclxuICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgbGlzdGVuZXJzIGlmIGNvbnRyb2xsZXIgaGFzIG5vIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgaWYgKCFvYnNlcnZlcnMubGVuZ3RoICYmIHRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyB0aGUgdXBkYXRlIG9mIG9ic2VydmVycy4gSXQgd2lsbCBjb250aW51ZSBydW5uaW5nIHVwZGF0ZXMgaW5zb2ZhclxyXG4gICAgICogaXQgZGV0ZWN0cyBjaGFuZ2VzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNoYW5nZXNEZXRlY3RlZCA9IHRoaXMudXBkYXRlT2JzZXJ2ZXJzXygpO1xyXG4gICAgICAgIC8vIENvbnRpbnVlIHJ1bm5pbmcgdXBkYXRlcyBpZiBjaGFuZ2VzIGhhdmUgYmVlbiBkZXRlY3RlZCBhcyB0aGVyZSBtaWdodFxyXG4gICAgICAgIC8vIGJlIGZ1dHVyZSBvbmVzIGNhdXNlZCBieSBDU1MgdHJhbnNpdGlvbnMuXHJcbiAgICAgICAgaWYgKGNoYW5nZXNEZXRlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGV2ZXJ5IG9ic2VydmVyIGZyb20gb2JzZXJ2ZXJzIGxpc3QgYW5kIG5vdGlmaWVzIHRoZW0gb2YgcXVldWVkXHJcbiAgICAgKiBlbnRyaWVzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBcInRydWVcIiBpZiBhbnkgb2JzZXJ2ZXIgaGFzIGRldGVjdGVkIGNoYW5nZXMgaW5cclxuICAgICAqICAgICAgZGltZW5zaW9ucyBvZiBpdCdzIGVsZW1lbnRzLlxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnVwZGF0ZU9ic2VydmVyc18gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gQ29sbGVjdCBvYnNlcnZlcnMgdGhhdCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgdmFyIGFjdGl2ZU9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXy5maWx0ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5nYXRoZXJBY3RpdmUoKSwgb2JzZXJ2ZXIuaGFzQWN0aXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gRGVsaXZlciBub3RpZmljYXRpb25zIGluIGEgc2VwYXJhdGUgY3ljbGUgaW4gb3JkZXIgdG8gYXZvaWQgYW55XHJcbiAgICAgICAgLy8gY29sbGlzaW9ucyBiZXR3ZWVuIG9ic2VydmVycywgZS5nLiB3aGVuIG11bHRpcGxlIGluc3RhbmNlcyBvZlxyXG4gICAgICAgIC8vIFJlc2l6ZU9ic2VydmVyIGFyZSB0cmFja2luZyB0aGUgc2FtZSBlbGVtZW50IGFuZCB0aGUgY2FsbGJhY2sgb2Ygb25lXHJcbiAgICAgICAgLy8gb2YgdGhlbSBjaGFuZ2VzIGNvbnRlbnQgZGltZW5zaW9ucyBvZiB0aGUgb2JzZXJ2ZWQgdGFyZ2V0LiBTb21ldGltZXNcclxuICAgICAgICAvLyB0aGlzIG1heSByZXN1bHQgaW4gbm90aWZpY2F0aW9ucyBiZWluZyBibG9ja2VkIGZvciB0aGUgcmVzdCBvZiBvYnNlcnZlcnMuXHJcbiAgICAgICAgYWN0aXZlT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7IHJldHVybiBvYnNlcnZlci5icm9hZGNhc3RBY3RpdmUoKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZU9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgRE9NIGxpc3RlbmVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuY29ubmVjdF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBydW5uaW5nIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQgb3IgaWYgbGlzdGVuZXJzXHJcbiAgICAgICAgLy8gaGF2ZSBiZWVuIGFscmVhZHkgYWRkZWQuXHJcbiAgICAgICAgaWYgKCFpc0Jyb3dzZXIgfHwgdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3Vic2NyaXB0aW9uIHRvIHRoZSBcIlRyYW5zaXRpb25lbmRcIiBldmVudCBpcyB1c2VkIGFzIGEgd29ya2Fyb3VuZCBmb3JcclxuICAgICAgICAvLyBkZWxheWVkIHRyYW5zaXRpb25zLiBUaGlzIHdheSBpdCdzIHBvc3NpYmxlIHRvIGNhcHR1cmUgYXQgbGVhc3QgdGhlXHJcbiAgICAgICAgLy8gZmluYWwgc3RhdGUgb2YgYW4gZWxlbWVudC5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICBpZiAobXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfLm9ic2VydmUoZG9jdW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBET00gbGlzdGVuZXJzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5kaXNjb25uZWN0XyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIHJ1bm5pbmcgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudCBvciBpZiBsaXN0ZW5lcnNcclxuICAgICAgICAvLyBoYXZlIGJlZW4gYWxyZWFkeSByZW1vdmVkLlxyXG4gICAgICAgIGlmICghaXNCcm93c2VyIHx8ICF0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8pIHtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogXCJUcmFuc2l0aW9uZW5kXCIgZXZlbnQgaGFuZGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtUcmFuc2l0aW9uRXZlbnR9IGV2ZW50XHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmRfID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIF9iID0gX2EucHJvcGVydHlOYW1lLCBwcm9wZXJ0eU5hbWUgPSBfYiA9PT0gdm9pZCAwID8gJycgOiBfYjtcclxuICAgICAgICAvLyBEZXRlY3Qgd2hldGhlciB0cmFuc2l0aW9uIG1heSBhZmZlY3QgZGltZW5zaW9ucyBvZiBhbiBlbGVtZW50LlxyXG4gICAgICAgIHZhciBpc1JlZmxvd1Byb3BlcnR5ID0gdHJhbnNpdGlvbktleXMuc29tZShmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIX5wcm9wZXJ0eU5hbWUuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpc1JlZmxvd1Byb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgaW5zdGFuY2Ugb2YgdGhlIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlXykge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlXyA9IG5ldyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VfO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSG9sZHMgcmVmZXJlbmNlIHRvIHRoZSBjb250cm9sbGVyJ3MgaW5zdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGUge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmluc3RhbmNlXyA9IG51bGw7XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyO1xyXG59KCkpO1xuXG4vKipcclxuICogRGVmaW5lcyBub24td3JpdGFibGUvZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIHRoZSBwcm92aWRlZCB0YXJnZXQgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gT2JqZWN0IGZvciB3aGljaCB0byBkZWZpbmUgcHJvcGVydGllcy5cclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gUHJvcGVydGllcyB0byBiZSBkZWZpbmVkLlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUYXJnZXQgb2JqZWN0LlxyXG4gKi9cclxudmFyIGRlZmluZUNvbmZpZ3VyYWJsZSA9IChmdW5jdGlvbiAodGFyZ2V0LCBwcm9wcykge1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKHByb3BzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIga2V5ID0gX2FbX2ldO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHNba2V5XSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59KTtcblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGdsb2JhbCBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcclxuICogQHJldHVybnMge09iamVjdH1cclxuICovXHJcbnZhciBnZXRXaW5kb3dPZiA9IChmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAvLyBBc3N1bWUgdGhhdCB0aGUgZWxlbWVudCBpcyBhbiBpbnN0YW5jZSBvZiBOb2RlLCB3aGljaCBtZWFucyB0aGF0IGl0XHJcbiAgICAvLyBoYXMgdGhlIFwib3duZXJEb2N1bWVudFwiIHByb3BlcnR5IGZyb20gd2hpY2ggd2UgY2FuIHJldHJpZXZlIGFcclxuICAgIC8vIGNvcnJlc3BvbmRpbmcgZ2xvYmFsIG9iamVjdC5cclxuICAgIHZhciBvd25lckdsb2JhbCA9IHRhcmdldCAmJiB0YXJnZXQub3duZXJEb2N1bWVudCAmJiB0YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgIC8vIFJldHVybiB0aGUgbG9jYWwgZ2xvYmFsIG9iamVjdCBpZiBpdCdzIG5vdCBwb3NzaWJsZSBleHRyYWN0IG9uZSBmcm9tXHJcbiAgICAvLyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgcmV0dXJuIG93bmVyR2xvYmFsIHx8IGdsb2JhbCQxO1xyXG59KTtcblxuLy8gUGxhY2Vob2xkZXIgb2YgYW4gZW1wdHkgY29udGVudCByZWN0YW5nbGUuXHJcbnZhciBlbXB0eVJlY3QgPSBjcmVhdGVSZWN0SW5pdCgwLCAwLCAwLCAwKTtcclxuLyoqXHJcbiAqIENvbnZlcnRzIHByb3ZpZGVkIHN0cmluZyB0byBhIG51bWJlci5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIHx8IDA7XHJcbn1cclxuLyoqXHJcbiAqIEV4dHJhY3RzIGJvcmRlcnMgc2l6ZSBmcm9tIHByb3ZpZGVkIHN0eWxlcy5cclxuICpcclxuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcclxuICogQHBhcmFtIHsuLi5zdHJpbmd9IHBvc2l0aW9ucyAtIEJvcmRlcnMgcG9zaXRpb25zICh0b3AsIHJpZ2h0LCAuLi4pXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRCb3JkZXJzU2l6ZShzdHlsZXMpIHtcclxuICAgIHZhciBwb3NpdGlvbnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgcG9zaXRpb25zW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvc2l0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHNpemUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzWydib3JkZXItJyArIHBvc2l0aW9uICsgJy13aWR0aCddO1xyXG4gICAgICAgIHJldHVybiBzaXplICsgdG9GbG9hdCh2YWx1ZSk7XHJcbiAgICB9LCAwKTtcclxufVxyXG4vKipcclxuICogRXh0cmFjdHMgcGFkZGluZ3Mgc2l6ZXMgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFBhZGRpbmdzIGJveC5cclxuICovXHJcbmZ1bmN0aW9uIGdldFBhZGRpbmdzKHN0eWxlcykge1xyXG4gICAgdmFyIHBvc2l0aW9ucyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XHJcbiAgICB2YXIgcGFkZGluZ3MgPSB7fTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgcG9zaXRpb25zXzEgPSBwb3NpdGlvbnM7IF9pIDwgcG9zaXRpb25zXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gcG9zaXRpb25zXzFbX2ldO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1sncGFkZGluZy0nICsgcG9zaXRpb25dO1xyXG4gICAgICAgIHBhZGRpbmdzW3Bvc2l0aW9uXSA9IHRvRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhZGRpbmdzO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHByb3ZpZGVkIFNWRyBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NWR0dyYXBoaWNzRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkc1xyXG4gKiAgICAgIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFNWR0NvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgdmFyIGJib3ggPSB0YXJnZXQuZ2V0QkJveCgpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KDAsIDAsIGJib3gud2lkdGgsIGJib3guaGVpZ2h0KTtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBjb250ZW50IHJlY3RhbmdsZSBvZiBwcm92aWRlZCBIVE1MRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBmb3Igd2hpY2ggdG8gY2FsY3VsYXRlIHRoZSBjb250ZW50IHJlY3RhbmdsZS5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgIC8vIENsaWVudCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGNhbid0IGJlXHJcbiAgICAvLyB1c2VkIGV4Y2x1c2l2ZWx5IGFzIHRoZXkgcHJvdmlkZSByb3VuZGVkIHZhbHVlcy5cclxuICAgIHZhciBjbGllbnRXaWR0aCA9IHRhcmdldC5jbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0ID0gdGFyZ2V0LmNsaWVudEhlaWdodDtcclxuICAgIC8vIEJ5IHRoaXMgY29uZGl0aW9uIHdlIGNhbiBjYXRjaCBhbGwgbm9uLXJlcGxhY2VkIGlubGluZSwgaGlkZGVuIGFuZFxyXG4gICAgLy8gZGV0YWNoZWQgZWxlbWVudHMuIFRob3VnaCBlbGVtZW50cyB3aXRoIHdpZHRoICYgaGVpZ2h0IHByb3BlcnRpZXMgbGVzc1xyXG4gICAgLy8gdGhhbiAwLjUgd2lsbCBiZSBkaXNjYXJkZWQgYXMgd2VsbC5cclxuICAgIC8vXHJcbiAgICAvLyBXaXRob3V0IGl0IHdlIHdvdWxkIG5lZWQgdG8gaW1wbGVtZW50IHNlcGFyYXRlIG1ldGhvZHMgZm9yIGVhY2ggb2ZcclxuICAgIC8vIHRob3NlIGNhc2VzIGFuZCBpdCdzIG5vdCBwb3NzaWJsZSB0byBwZXJmb3JtIGEgcHJlY2lzZSBhbmQgcGVyZm9ybWFuY2VcclxuICAgIC8vIGVmZmVjdGl2ZSB0ZXN0IGZvciBoaWRkZW4gZWxlbWVudHMuIEUuZy4gZXZlbiBqUXVlcnkncyAnOnZpc2libGUnIGZpbHRlclxyXG4gICAgLy8gZ2l2ZXMgd3JvbmcgcmVzdWx0cyBmb3IgZWxlbWVudHMgd2l0aCB3aWR0aCAmIGhlaWdodCBsZXNzIHRoYW4gMC41LlxyXG4gICAgaWYgKCFjbGllbnRXaWR0aCAmJiAhY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcclxuICAgIH1cclxuICAgIHZhciBzdHlsZXMgPSBnZXRXaW5kb3dPZih0YXJnZXQpLmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcclxuICAgIHZhciBwYWRkaW5ncyA9IGdldFBhZGRpbmdzKHN0eWxlcyk7XHJcbiAgICB2YXIgaG9yaXpQYWQgPSBwYWRkaW5ncy5sZWZ0ICsgcGFkZGluZ3MucmlnaHQ7XHJcbiAgICB2YXIgdmVydFBhZCA9IHBhZGRpbmdzLnRvcCArIHBhZGRpbmdzLmJvdHRvbTtcclxuICAgIC8vIENvbXB1dGVkIHN0eWxlcyBvZiB3aWR0aCAmIGhlaWdodCBhcmUgYmVpbmcgdXNlZCBiZWNhdXNlIHRoZXkgYXJlIHRoZVxyXG4gICAgLy8gb25seSBkaW1lbnNpb25zIGF2YWlsYWJsZSB0byBKUyB0aGF0IGNvbnRhaW4gbm9uLXJvdW5kZWQgdmFsdWVzLiBJdCBjb3VsZFxyXG4gICAgLy8gYmUgcG9zc2libGUgdG8gdXRpbGl6ZSB0aGUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlmIG9ubHkgaXQncyBkYXRhIHdhc24ndFxyXG4gICAgLy8gYWZmZWN0ZWQgYnkgQ1NTIHRyYW5zZm9ybWF0aW9ucyBsZXQgYWxvbmUgcGFkZGluZ3MsIGJvcmRlcnMgYW5kIHNjcm9sbCBiYXJzLlxyXG4gICAgdmFyIHdpZHRoID0gdG9GbG9hdChzdHlsZXMud2lkdGgpLCBoZWlnaHQgPSB0b0Zsb2F0KHN0eWxlcy5oZWlnaHQpO1xyXG4gICAgLy8gV2lkdGggJiBoZWlnaHQgaW5jbHVkZSBwYWRkaW5ncyBhbmQgYm9yZGVycyB3aGVuIHRoZSAnYm9yZGVyLWJveCcgYm94XHJcbiAgICAvLyBtb2RlbCBpcyBhcHBsaWVkIChleGNlcHQgZm9yIElFKS5cclxuICAgIGlmIChzdHlsZXMuYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcclxuICAgICAgICAvLyBGb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgcmVxdWlyZWQgdG8gaGFuZGxlIEludGVybmV0IEV4cGxvcmVyIHdoaWNoXHJcbiAgICAgICAgLy8gZG9lc24ndCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHRvIGNvbXB1dGVkIENTUyBkaW1lbnNpb25zLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gV2UgY2FuIHNheSB0aGF0IGlmIENTUyBkaW1lbnNpb25zICsgcGFkZGluZ3MgYXJlIGVxdWFsIHRvIHRoZSBcImNsaWVudFwiXHJcbiAgICAgICAgLy8gcHJvcGVydGllcyB0aGVuIGl0J3MgZWl0aGVyIElFLCBhbmQgdGh1cyB3ZSBkb24ndCBuZWVkIHRvIHN1YnRyYWN0XHJcbiAgICAgICAgLy8gYW55dGhpbmcsIG9yIGFuIGVsZW1lbnQgbWVyZWx5IGRvZXNuJ3QgaGF2ZSBwYWRkaW5ncy9ib3JkZXJzIHN0eWxlcy5cclxuICAgICAgICBpZiAoTWF0aC5yb3VuZCh3aWR0aCArIGhvcml6UGFkKSAhPT0gY2xpZW50V2lkdGgpIHtcclxuICAgICAgICAgICAgd2lkdGggLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAnbGVmdCcsICdyaWdodCcpICsgaG9yaXpQYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpICE9PSBjbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3RvcCcsICdib3R0b20nKSArIHZlcnRQYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRm9sbG93aW5nIHN0ZXBzIGNhbid0IGJlIGFwcGxpZWQgdG8gdGhlIGRvY3VtZW50J3Mgcm9vdCBlbGVtZW50IGFzIGl0c1xyXG4gICAgLy8gY2xpZW50W1dpZHRoL0hlaWdodF0gcHJvcGVydGllcyByZXByZXNlbnQgdmlld3BvcnQgYXJlYSBvZiB0aGUgd2luZG93LlxyXG4gICAgLy8gQmVzaWRlcywgaXQncyBhcyB3ZWxsIG5vdCBuZWNlc3NhcnkgYXMgdGhlIDxodG1sPiBpdHNlbGYgbmVpdGhlciBoYXNcclxuICAgIC8vIHJlbmRlcmVkIHNjcm9sbCBiYXJzIG5vciBpdCBjYW4gYmUgY2xpcHBlZC5cclxuICAgIGlmICghaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgIC8vIEluIHNvbWUgYnJvd3NlcnMgKG9ubHkgaW4gRmlyZWZveCwgYWN0dWFsbHkpIENTUyB3aWR0aCAmIGhlaWdodFxyXG4gICAgICAgIC8vIGluY2x1ZGUgc2Nyb2xsIGJhcnMgc2l6ZSB3aGljaCBjYW4gYmUgcmVtb3ZlZCBhdCB0aGlzIHN0ZXAgYXMgc2Nyb2xsXHJcbiAgICAgICAgLy8gYmFycyBhcmUgdGhlIG9ubHkgZGlmZmVyZW5jZSBiZXR3ZWVuIHJvdW5kZWQgZGltZW5zaW9ucyArIHBhZGRpbmdzXHJcbiAgICAgICAgLy8gYW5kIFwiY2xpZW50XCIgcHJvcGVydGllcywgdGhvdWdoIHRoYXQgaXMgbm90IGFsd2F5cyB0cnVlIGluIENocm9tZS5cclxuICAgICAgICB2YXIgdmVydFNjcm9sbGJhciA9IE1hdGgucm91bmQod2lkdGggKyBob3JpelBhZCkgLSBjbGllbnRXaWR0aDtcclxuICAgICAgICB2YXIgaG9yaXpTY3JvbGxiYXIgPSBNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpIC0gY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIC8vIENocm9tZSBoYXMgYSByYXRoZXIgd2VpcmQgcm91bmRpbmcgb2YgXCJjbGllbnRcIiBwcm9wZXJ0aWVzLlxyXG4gICAgICAgIC8vIEUuZy4gZm9yIGFuIGVsZW1lbnQgd2l0aCBjb250ZW50IHdpZHRoIG9mIDMxNC4ycHggaXQgc29tZXRpbWVzIGdpdmVzXHJcbiAgICAgICAgLy8gdGhlIGNsaWVudCB3aWR0aCBvZiAzMTVweCBhbmQgZm9yIHRoZSB3aWR0aCBvZiAzMTQuN3B4IGl0IG1heSBnaXZlXHJcbiAgICAgICAgLy8gMzE0cHguIEFuZCBpdCBkb2Vzbid0IGhhcHBlbiBhbGwgdGhlIHRpbWUuIFNvIGp1c3QgaWdub3JlIHRoaXMgZGVsdGFcclxuICAgICAgICAvLyBhcyBhIG5vbi1yZWxldmFudC5cclxuICAgICAgICBpZiAoTWF0aC5hYnModmVydFNjcm9sbGJhcikgIT09IDEpIHtcclxuICAgICAgICAgICAgd2lkdGggLT0gdmVydFNjcm9sbGJhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGhvcml6U2Nyb2xsYmFyKSAhPT0gMSkge1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gaG9yaXpTY3JvbGxiYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KHBhZGRpbmdzLmxlZnQsIHBhZGRpbmdzLnRvcCwgd2lkdGgsIGhlaWdodCk7XHJcbn1cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIHByb3ZpZGVkIGVsZW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIFNWR0dyYXBoaWNzRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxudmFyIGlzU1ZHR3JhcGhpY3NFbGVtZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFNvbWUgYnJvd3NlcnMsIG5hbWVseSBJRSBhbmQgRWRnZSwgZG9uJ3QgaGF2ZSB0aGUgU1ZHR3JhcGhpY3NFbGVtZW50XHJcbiAgICAvLyBpbnRlcmZhY2UuXHJcbiAgICBpZiAodHlwZW9mIFNWR0dyYXBoaWNzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5TVkdHcmFwaGljc0VsZW1lbnQ7IH07XHJcbiAgICB9XHJcbiAgICAvLyBJZiBpdCdzIHNvLCB0aGVuIGNoZWNrIHRoYXQgZWxlbWVudCBpcyBhdCBsZWFzdCBhbiBpbnN0YW5jZSBvZiB0aGVcclxuICAgIC8vIFNWR0VsZW1lbnQgYW5kIHRoYXQgaXQgaGFzIHRoZSBcImdldEJCb3hcIiBtZXRob2QuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0cmEtcGFyZW5zXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuU1ZHRWxlbWVudCAmJlxyXG4gICAgICAgIHR5cGVvZiB0YXJnZXQuZ2V0QkJveCA9PT0gJ2Z1bmN0aW9uJyk7IH07XHJcbn0pKCk7XHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBlbGVtZW50IGlzIGEgZG9jdW1lbnQgZWxlbWVudCAoPGh0bWw+KS5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSB7XHJcbiAgICByZXR1cm4gdGFyZ2V0ID09PSBnZXRXaW5kb3dPZih0YXJnZXQpLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBhbiBhcHByb3ByaWF0ZSBjb250ZW50IHJlY3RhbmdsZSBmb3IgcHJvdmlkZWQgaHRtbCBvciBzdmcgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHdoaWNoIG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldENvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4gZW1wdHlSZWN0O1xyXG4gICAgfVxyXG4gICAgaWYgKGlzU1ZHR3JhcGhpY3NFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U1ZHQ29udGVudFJlY3QodGFyZ2V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudENvbnRlbnRSZWN0KHRhcmdldCk7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZXMgcmVjdGFuZ2xlIHdpdGggYW4gaW50ZXJmYWNlIG9mIHRoZSBET01SZWN0UmVhZE9ubHkuXHJcbiAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkb21yZWN0cmVhZG9ubHlcclxuICpcclxuICogQHBhcmFtIHtET01SZWN0SW5pdH0gcmVjdEluaXQgLSBPYmplY3Qgd2l0aCByZWN0YW5nbGUncyB4L3kgY29vcmRpbmF0ZXMgYW5kIGRpbWVuc2lvbnMuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0UmVhZE9ubHl9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVSZWFkT25seVJlY3QoX2EpIHtcclxuICAgIHZhciB4ID0gX2EueCwgeSA9IF9hLnksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcclxuICAgIC8vIElmIERPTVJlY3RSZWFkT25seSBpcyBhdmFpbGFibGUgdXNlIGl0IGFzIGEgcHJvdG90eXBlIGZvciB0aGUgcmVjdGFuZ2xlLlxyXG4gICAgdmFyIENvbnN0ciA9IHR5cGVvZiBET01SZWN0UmVhZE9ubHkgIT09ICd1bmRlZmluZWQnID8gRE9NUmVjdFJlYWRPbmx5IDogT2JqZWN0O1xyXG4gICAgdmFyIHJlY3QgPSBPYmplY3QuY3JlYXRlKENvbnN0ci5wcm90b3R5cGUpO1xyXG4gICAgLy8gUmVjdGFuZ2xlJ3MgcHJvcGVydGllcyBhcmUgbm90IHdyaXRhYmxlIGFuZCBub24tZW51bWVyYWJsZS5cclxuICAgIGRlZmluZUNvbmZpZ3VyYWJsZShyZWN0LCB7XHJcbiAgICAgICAgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICB0b3A6IHksXHJcbiAgICAgICAgcmlnaHQ6IHggKyB3aWR0aCxcclxuICAgICAgICBib3R0b206IGhlaWdodCArIHksXHJcbiAgICAgICAgbGVmdDogeFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVjdDtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBET01SZWN0SW5pdCBvYmplY3QgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGRpbWVuc2lvbnMgYW5kIHRoZSB4L3kgY29vcmRpbmF0ZXMuXHJcbiAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkaWN0ZGVmLWRvbXJlY3Rpbml0XHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gWCBjb29yZGluYXRlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geSAtIFkgY29vcmRpbmF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gUmVjdGFuZ2xlJ3Mgd2lkdGguXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBSZWN0YW5nbGUncyBoZWlnaHQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlY3RJbml0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcclxufVxuXG4vKipcclxuICogQ2xhc3MgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgY29tcHV0YXRpb25zIG9mIHRoZSBjb250ZW50IHJlY3RhbmdsZSBvZlxyXG4gKiBwcm92aWRlZCBET00gZWxlbWVudCBhbmQgZm9yIGtlZXBpbmcgdHJhY2sgb2YgaXQncyBjaGFuZ2VzLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnJvYWRjYXN0ZWQgd2lkdGggb2YgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0V2lkdGggPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJyb2FkY2FzdGVkIGhlaWdodCBvZiBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtET01SZWN0SW5pdH1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IGNyZWF0ZVJlY3RJbml0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIGFuZCB0ZWxscyB3aGV0aGVyIGl0J3Mgd2lkdGggb3IgaGVpZ2h0IHByb3BlcnRpZXNcclxuICAgICAqIGhhdmUgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCBicm9hZGNhc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IGdldENvbnRlbnRSZWN0KHRoaXMudGFyZ2V0KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IHJlY3Q7XHJcbiAgICAgICAgcmV0dXJuIChyZWN0LndpZHRoICE9PSB0aGlzLmJyb2FkY2FzdFdpZHRoIHx8XHJcbiAgICAgICAgICAgIHJlY3QuaGVpZ2h0ICE9PSB0aGlzLmJyb2FkY2FzdEhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzICdicm9hZGNhc3RXaWR0aCcgYW5kICdicm9hZGNhc3RIZWlnaHQnIHByb3BlcnRpZXMgd2l0aCBhIGRhdGFcclxuICAgICAqIGZyb20gdGhlIGNvcnJlc3BvbmRpbmcgcHJvcGVydGllcyBvZiB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9IExhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5icm9hZGNhc3RSZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5jb250ZW50UmVjdF87XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RXaWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgICAgICByZXR1cm4gcmVjdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2YXRpb247XHJcbn0oKSk7XG5cbnZhciBSZXNpemVPYnNlcnZlckVudHJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyRW50cnkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRoYXQgaXMgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgKiBAcGFyYW0ge0RPTVJlY3RJbml0fSByZWN0SW5pdCAtIERhdGEgb2YgdGhlIGVsZW1lbnQncyBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJFbnRyeSh0YXJnZXQsIHJlY3RJbml0KSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRSZWN0ID0gY3JlYXRlUmVhZE9ubHlSZWN0KHJlY3RJbml0KTtcclxuICAgICAgICAvLyBBY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIG5vdCB3cml0YWJsZVxyXG4gICAgICAgIC8vIGFuZCBhcmUgYWxzbyBub3QgZW51bWVyYWJsZSBpbiB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUHJvcGVydHkgYWNjZXNzb3JzIGFyZSBub3QgYmVpbmcgdXNlZCBhcyB0aGV5J2QgcmVxdWlyZSB0byBkZWZpbmUgYVxyXG4gICAgICAgIC8vIHByaXZhdGUgV2Vha01hcCBzdG9yYWdlIHdoaWNoIG1heSBjYXVzZSBtZW1vcnkgbGVha3MgaW4gYnJvd3NlcnMgdGhhdFxyXG4gICAgICAgIC8vIGRvbid0IHN1cHBvcnQgdGhpcyB0eXBlIG9mIGNvbGxlY3Rpb25zLlxyXG4gICAgICAgIGRlZmluZUNvbmZpZ3VyYWJsZSh0aGlzLCB7IHRhcmdldDogdGFyZ2V0LCBjb250ZW50UmVjdDogY29udGVudFJlY3QgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJFbnRyeTtcclxufSgpKTtcblxudmFyIFJlc2l6ZU9ic2VydmVyU1BJID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWRcclxuICAgICAqICAgICAgd2hlbiBvbmUgb2YgdGhlIG9ic2VydmVkIGVsZW1lbnRzIGNoYW5nZXMgaXQncyBjb250ZW50IGRpbWVuc2lvbnMuXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn0gY29udHJvbGxlciAtIENvbnRyb2xsZXIgaW5zdGFuY2Ugd2hpY2hcclxuICAgICAqICAgICAgaXMgcmVzcG9uc2libGUgZm9yIHRoZSB1cGRhdGVzIG9mIG9ic2VydmVyLlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlcn0gY2FsbGJhY2tDdHggLSBSZWZlcmVuY2UgdG8gdGhlIHB1YmxpY1xyXG4gICAgICogICAgICBSZXNpemVPYnNlcnZlciBpbnN0YW5jZSB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJTUEkoY2FsbGJhY2ssIGNvbnRyb2xsZXIsIGNhbGxiYWNrQ3R4KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29sbGVjdGlvbiBvZiByZXNpemUgb2JzZXJ2YXRpb25zIHRoYXQgaGF2ZSBkZXRlY3RlZCBjaGFuZ2VzIGluIGRpbWVuc2lvbnNcclxuICAgICAgICAgKiBvZiBlbGVtZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtBcnJheTxSZXNpemVPYnNlcnZhdGlvbj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVnaXN0cnkgb2YgdGhlIFJlc2l6ZU9ic2VydmF0aW9uIGluc3RhbmNlcy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtNYXA8RWxlbWVudCwgUmVzaXplT2JzZXJ2YXRpb24+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXyA9IG5ldyBNYXBTaGltKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2FsbGJhY2sgcHJvdmlkZWQgYXMgcGFyYW1ldGVyIDEgaXMgbm90IGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXyA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja0N0eF8gPSBjYWxsYmFja0N0eDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIG9ic2VydmluZyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgIGlmIChvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZhdGlvbnMuc2V0KHRhcmdldCwgbmV3IFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCkpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8uYWRkT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgLy8gRm9yY2UgdGhlIHVwZGF0ZSBvZiBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBvYnNlcnZpbmcgcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gc3RvcCBvYnNlcnZpbmcuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBub3QgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZhdGlvbnMuZGVsZXRlKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIG9ic2VydmluZyBhbGwgZWxlbWVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18uY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ29sbGVjdHMgb2JzZXJ2YXRpb24gaW5zdGFuY2VzIHRoZSBhc3NvY2lhdGVkIGVsZW1lbnQgb2Ygd2hpY2ggaGFzIGNoYW5nZWRcclxuICAgICAqIGl0J3MgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5nYXRoZXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZhdGlvbi5pc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnB1c2gob2JzZXJ2YXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VzIGluaXRpYWwgY2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhIGxpc3Qgb2YgUmVzaXplT2JzZXJ2ZXJFbnRyeVxyXG4gICAgICogaW5zdGFuY2VzIGNvbGxlY3RlZCBmcm9tIGFjdGl2ZSByZXNpemUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuYnJvYWRjYXN0QWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgb2JzZXJ2ZXIgZG9lc24ndCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuY2FsbGJhY2tDdHhfO1xyXG4gICAgICAgIC8vIENyZWF0ZSBSZXNpemVPYnNlcnZlckVudHJ5IGluc3RhbmNlIGZvciBldmVyeSBhY3RpdmUgb2JzZXJ2YXRpb24uXHJcbiAgICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubWFwKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob2JzZXJ2YXRpb24udGFyZ2V0LCBvYnNlcnZhdGlvbi5icm9hZGNhc3RSZWN0KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfLmNhbGwoY3R4LCBlbnRyaWVzLCBjdHgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENsZWFycyB0aGUgY29sbGVjdGlvbiBvZiBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuY2xlYXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnNwbGljZSgwKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRlbGxzIHdoZXRoZXIgb2JzZXJ2ZXIgaGFzIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5oYXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlclNQSTtcclxufSgpKTtcblxuLy8gUmVnaXN0cnkgb2YgaW50ZXJuYWwgb2JzZXJ2ZXJzLiBJZiBXZWFrTWFwIGlzIG5vdCBhdmFpbGFibGUgdXNlIGN1cnJlbnQgc2hpbVxyXG4vLyBmb3IgdGhlIE1hcCBjb2xsZWN0aW9uIGFzIGl0IGhhcyBhbGwgcmVxdWlyZWQgbWV0aG9kcyBhbmQgYmVjYXVzZSBXZWFrTWFwXHJcbi8vIGNhbid0IGJlIGZ1bGx5IHBvbHlmaWxsZWQgYW55d2F5LlxyXG52YXIgb2JzZXJ2ZXJzID0gdHlwZW9mIFdlYWtNYXAgIT09ICd1bmRlZmluZWQnID8gbmV3IFdlYWtNYXAoKSA6IG5ldyBNYXBTaGltKCk7XHJcbi8qKlxyXG4gKiBSZXNpemVPYnNlcnZlciBBUEkuIEVuY2Fwc3VsYXRlcyB0aGUgUmVzaXplT2JzZXJ2ZXIgU1BJIGltcGxlbWVudGF0aW9uXHJcbiAqIGV4cG9zaW5nIG9ubHkgdGhvc2UgbWV0aG9kcyBhbmQgcHJvcGVydGllcyB0aGF0IGFyZSBkZWZpbmVkIGluIHRoZSBzcGVjLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlblxyXG4gICAgICogICAgICBkaW1lbnNpb25zIG9mIHRoZSBvYnNlcnZlZCBlbGVtZW50cyBjaGFuZ2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc2l6ZU9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb250cm9sbGVyID0gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyU1BJKGNhbGxiYWNrLCBjb250cm9sbGVyLCB0aGlzKTtcclxuICAgICAgICBvYnNlcnZlcnMuc2V0KHRoaXMsIG9ic2VydmVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcclxufSgpKTtcclxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG5bXHJcbiAgICAnb2JzZXJ2ZScsXHJcbiAgICAndW5vYnNlcnZlJyxcclxuICAgICdkaXNjb25uZWN0J1xyXG5dLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xyXG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiAoX2EgPSBvYnNlcnZlcnMuZ2V0KHRoaXMpKVttZXRob2RdLmFwcGx5KF9hLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufSk7XG5cbnZhciBpbmRleCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBFeHBvcnQgZXhpc3RpbmcgaW1wbGVtZW50YXRpb24gaWYgYXZhaWxhYmxlLlxyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwkMS5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsJDEuUmVzaXplT2JzZXJ2ZXI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XHJcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFBsYXllckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuaW1wb3J0IFNsaWRlciBmcm9tICdyYy1zbGlkZXInO1xyXG5pbXBvcnQgJ3JjLXNsaWRlci9hc3NldHMvaW5kZXguY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXIoKXtcclxuICAgIGNvbnN0IHsgZXBpc29kZUxpc3QsIGN1cnJlbnRFcGlzb2RlSW5kZXggfSA9IHVzZUNvbnRleHQoUGxheWVyQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgZXBpc29kZSA9IGVwaXNvZGVMaXN0W2N1cnJlbnRFcGlzb2RlSW5kZXhdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheWluZy5zdmdcIiBhbHQ9XCJUb2NhbmRvIGFnb3JhXCIvPlxyXG4gICAgICAgICAgICA8c3Ryb25nPlRvY2FuZG8gYWdvcmE8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICB7IGVwaXNvZGUgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRFcGlzb2RlfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTkyfSBcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezU5Mn0gXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIiBcclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2VwaXNvZGUudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUubWVtYmVyc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlQbGF5ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U2VsZWNpb25lIHVtIHBvZGNhc3QgcGFyYSBvdXZpcjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgfVxyXG5cclxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9eyFlcGlzb2RlID8gc3R5bGVzLmVtcHR5IDogJyd9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+MDA6MDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgICBlcGlzb2RlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrU3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzA0ZDM2MSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWlsU3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzlmNzVmZid9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdHlsZT17eyBib3JkZXJDb2xvcjogJyMwNGQzNjEnLCBib3JkZXJXaWR0aDogNH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVNsaWRlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjAwOjAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc2h1ZmZsZS5zdmdcIiBhbHQ9XCJBbGVhdMOzcmlvXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LXByZXZpb3VzLnN2Z1wiIGFsdD1cIkFudGVyaW9yXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LnN2Z1wiIGFsdD1cIlRvY2FyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LW5leHQuc3ZnXCIgYWx0PVwiUHLDs3hpbW9cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3JlcGVhdC5zdmdcIiBhbHQ9XCJSZXBldGlyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=