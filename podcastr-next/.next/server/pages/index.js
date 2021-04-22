module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/locale/pt-BR */ "date-fns/locale/pt-BR");
/* harmony import */ var date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/convertDurationToTimeString */ "./src/utils/convertDurationToTimeString.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api */ "./src/services/api.ts");

var _jsxFileName = "C:\\Users\\bruno\\Desktop\\Git\\React-Trail\\podcastr-next\\src\\pages\\index.tsx";




function Home(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Index"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: JSON.stringify(props.episodes)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
const getStaticProps = async () => {
  const {
    data
  } = await _services_api__WEBPACK_IMPORTED_MODULE_4__["api"].get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  });
  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["parseISO"])(episode.published_at), 'd MMM yy', {
        locale: date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_2___default.a
      }),
      duration: Number(episode.file.duration),
      durationAsString: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_3__["convertDurationToTimeString"])(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url
    };
  });
  return {
    props: {
      episodes
    },
    revalidate: 3600 * 8
  };
  /*return { 
    props: {
      episodes: data,
    },
    revalidate: 3600 * 8,
  }*/
};

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/*! exports provided: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://localhost:3333/'
});

/***/ }),

/***/ "./src/utils/convertDurationToTimeString.ts":
/*!**************************************************!*\
  !*** ./src/utils/convertDurationToTimeString.ts ***!
  \**************************************************/
/*! exports provided: convertDurationToTimeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDurationToTimeString", function() { return convertDurationToTimeString; });
function convertDurationToTimeString(duration) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor(duration % 3600 / 60);
  const seconds = duration % 60;
  const timeString = [hours, minutes, seconds].map(unit => String(unit).padStart(2, '0')).join(':');
  return timeString; // retorna hora:minuto:segundo
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "date-fns/locale/pt-BR":
/*!****************************************!*\
  !*** external "date-fns/locale/pt-BR" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/locale/pt-BR");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYXBpLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRhdGUtZm5zL2xvY2FsZS9wdC1CUlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcGlzb2RlcyIsImdldFN0YXRpY1Byb3BzIiwiZGF0YSIsImFwaSIsImdldCIsInBhcmFtcyIsIl9saW1pdCIsIl9zb3J0IiwiX29yZGVyIiwibWFwIiwiZXBpc29kZSIsImlkIiwidGl0bGUiLCJ0aHVtYm5haWwiLCJtZW1iZXJzIiwicHVibGlzaGVkQXQiLCJmb3JtYXQiLCJwYXJzZUlTTyIsInB1Ymxpc2hlZF9hdCIsImxvY2FsZSIsInB0QlIiLCJkdXJhdGlvbiIsIk51bWJlciIsImZpbGUiLCJkdXJhdGlvbkFzU3RyaW5nIiwiY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJyZXZhbGlkYXRlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwic2Vjb25kcyIsInRpbWVTdHJpbmciLCJ1bml0IiwiU3RyaW5nIiwicGFkU3RhcnQiLCJqb2luIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQWFlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFnQztBQUc3QyxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUFJQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsS0FBSyxDQUFDRyxRQUFyQjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EO0FBRU0sTUFBTUMsY0FBOEIsR0FBRyxZQUFZO0FBQ3hELFFBQU07QUFBRUM7QUFBRixNQUFXLE1BQU1DLGlEQUFHLENBQUNDLEdBQUosQ0FBUSxVQUFSLEVBQW9CO0FBQ3pDQyxVQUFNLEVBQUU7QUFDTkMsWUFBTSxFQUFFLEVBREY7QUFFTkMsV0FBSyxFQUFFLGNBRkQ7QUFHTkMsWUFBTSxFQUFFO0FBSEY7QUFEaUMsR0FBcEIsQ0FBdkI7QUFRQSxRQUFNUixRQUFRLEdBQUdFLElBQUksQ0FBQ08sR0FBTCxDQUFTQyxPQUFPLElBQUk7QUFDbkMsV0FBTztBQUNMQyxRQUFFLEVBQUVELE9BQU8sQ0FBQ0MsRUFEUDtBQUVMQyxXQUFLLEVBQUVGLE9BQU8sQ0FBQ0UsS0FGVjtBQUdMQyxlQUFTLEVBQUVILE9BQU8sQ0FBQ0csU0FIZDtBQUlMQyxhQUFPLEVBQUVKLE9BQU8sQ0FBQ0ksT0FKWjtBQUtMQyxpQkFBVyxFQUFFQyx1REFBTSxDQUFDQyx5REFBUSxDQUFDUCxPQUFPLENBQUNRLFlBQVQsQ0FBVCxFQUFpQyxVQUFqQyxFQUE2QztBQUFFQyxjQUFNLEVBQUVDLDREQUFJQTtBQUFkLE9BQTdDLENBTGQ7QUFNTEMsY0FBUSxFQUFFQyxNQUFNLENBQUNaLE9BQU8sQ0FBQ2EsSUFBUixDQUFhRixRQUFkLENBTlg7QUFPTEcsc0JBQWdCLEVBQUVDLHNHQUEyQixDQUFDSCxNQUFNLENBQUNaLE9BQU8sQ0FBQ2EsSUFBUixDQUFhRixRQUFkLENBQVAsQ0FQeEM7QUFRTEssaUJBQVcsRUFBRWhCLE9BQU8sQ0FBQ2dCLFdBUmhCO0FBU0xDLFNBQUcsRUFBRWpCLE9BQU8sQ0FBQ2EsSUFBUixDQUFhSTtBQVRiLEtBQVA7QUFXRCxHQVpnQixDQUFqQjtBQWNBLFNBQU87QUFDTDlCLFNBQUssRUFBRTtBQUNMRztBQURLLEtBREY7QUFJTDRCLGNBQVUsRUFBRSxPQUFPO0FBSmQsR0FBUDtBQVFBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLENBckNNLEM7Ozs7Ozs7Ozs7OztBQzVCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTXpCLEdBQUcsR0FBRzBCLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUM1QkMsU0FBTyxFQUFFO0FBRG1CLENBQWIsQ0FBWixDOzs7Ozs7Ozs7Ozs7QUNGUDtBQUFBO0FBQU8sU0FBU04sMkJBQVQsQ0FBcUNKLFFBQXJDLEVBQXNEO0FBQ3pELFFBQU1XLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdiLFFBQVEsR0FBRyxJQUF0QixDQUFkO0FBQ0EsUUFBTWMsT0FBTyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBWWIsUUFBUSxHQUFHLElBQVosR0FBb0IsRUFBL0IsQ0FBaEI7QUFDQSxRQUFNZSxPQUFPLEdBQUdmLFFBQVEsR0FBRyxFQUEzQjtBQUVBLFFBQU1nQixVQUFVLEdBQUUsQ0FBQ0wsS0FBRCxFQUFRRyxPQUFSLEVBQWlCQyxPQUFqQixFQUNiM0IsR0FEYSxDQUNUNkIsSUFBSSxJQUFJQyxNQUFNLENBQUNELElBQUQsQ0FBTixDQUFhRSxRQUFiLENBQXNCLENBQXRCLEVBQXlCLEdBQXpCLENBREMsRUFFYkMsSUFGYSxDQUVSLEdBRlEsQ0FBbEI7QUFJSSxTQUFPSixVQUFQLENBVHFELENBVXJEO0FBQ1AsQzs7Ozs7Ozs7Ozs7QUNYRCxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCB7IEdldFN0YXRpY1Byb3BzfSBmcm9tICduZXh0JztcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgcHRCUiBmcm9tICdkYXRlLWZucy9sb2NhbGUvcHQtQlInO1xuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH1mcm9tICcuLi91dGlscy9jb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpJztcblxuXG50eXBlIEVwaXNvZGVzID0ge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBtZW1iZXJzOiBzdHJpbmc7XG4gIHB1Ymxpc2hlZF9hdDogc3RyaW5nO1xufVxudHlwZSBIb21lUHJvcHMgPSB7XG4gIGVwaXNvZGVzOiBFcGlzb2Rlc1tdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzOiBIb21lUHJvcHMpIHtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5JbmRleDwvaDE+XG4gICAgICA8cD57SlNPTi5zdHJpbmdpZnkocHJvcHMuZXBpc29kZXMpfTwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoJ2VwaXNvZGVzJywge1xuICAgIHBhcmFtczogeyBcbiAgICAgIF9saW1pdDogMTIsXG4gICAgICBfc29ydDogJ3B1Ymxpc2hlZF9hdCcsXG4gICAgICBfb3JkZXI6ICdkZXNjJ1xuICAgIH1cbiAgfSlcblxuICBjb25zdCBlcGlzb2RlcyA9IGRhdGEubWFwKGVwaXNvZGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZXBpc29kZS5pZCxcbiAgICAgIHRpdGxlOiBlcGlzb2RlLnRpdGxlLFxuICAgICAgdGh1bWJuYWlsOiBlcGlzb2RlLnRodW1ibmFpbCxcbiAgICAgIG1lbWJlcnM6IGVwaXNvZGUubWVtYmVycyxcbiAgICAgIHB1Ymxpc2hlZEF0OiBmb3JtYXQocGFyc2VJU08oZXBpc29kZS5wdWJsaXNoZWRfYXQpLCAnZCBNTU0geXknLCB7IGxvY2FsZTogcHRCUn0pLFxuICAgICAgZHVyYXRpb246IE51bWJlcihlcGlzb2RlLmZpbGUuZHVyYXRpb24pLFxuICAgICAgZHVyYXRpb25Bc1N0cmluZzogY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKE51bWJlcihlcGlzb2RlLmZpbGUuZHVyYXRpb24pKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBlcGlzb2RlLmRlc2NyaXB0aW9uLFxuICAgICAgdXJsOiBlcGlzb2RlLmZpbGUudXJsLFxuICAgIH07XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZXBpc29kZXMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAzNjAwICogOCxcbiAgfVxuXG5cbiAgLypyZXR1cm4geyBcbiAgICBwcm9wczoge1xuICAgICAgZXBpc29kZXM6IGRhdGEsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAzNjAwICogOCxcbiAgfSovXG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDozMzMzLydcclxufSkiLCJleHBvcnQgZnVuY3Rpb24gY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKGR1cmF0aW9uOiBudW1iZXIpe1xyXG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGR1cmF0aW9uIC8gMzYwMCk7XHJcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZHVyYXRpb24gJSAzNjAwKSAvIDYwKTtcclxuICAgIGNvbnN0IHNlY29uZHMgPSBkdXJhdGlvbiAlIDYwO1xyXG5cclxuICAgIGNvbnN0IHRpbWVTdHJpbmc9IFtob3VycywgbWludXRlcywgc2Vjb25kc11cclxuICAgICAgICAubWFwKHVuaXQgPT4gU3RyaW5nKHVuaXQpLnBhZFN0YXJ0KDIsICcwJykpXHJcbiAgICAgICAgLmpvaW4oJzonKVxyXG5cclxuICAgICAgICByZXR1cm4gdGltZVN0cmluZ1xyXG4gICAgICAgIC8vIHJldG9ybmEgaG9yYTptaW51dG86c2VndW5kb1xyXG59XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZucy9sb2NhbGUvcHQtQlJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=