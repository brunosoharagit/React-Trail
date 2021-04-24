webpackHotUpdate_N_E("pages/_app",{

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
          disabled: !episode,
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
          disabled: !episode,
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
          disabled: !episode,
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
          disabled: !episode,
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
          disabled: !episode,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VDb250ZXh0IiwiUGxheWVyQ29udGV4dCIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsImVwaXNvZGUiLCJzdHlsZXMiLCJwbGF5ZXJDb250YWluZXIiLCJjdXJyZW50RXBpc29kZSIsInRodW1ibmFpbCIsInRpdGxlIiwibWVtYmVycyIsImVtcHR5UGxheWVyIiwiZW1wdHkiLCJwcm9ncmVzcyIsInNsaWRlciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJlbXB0eVNsaWRlciIsImJ1dHRvbnMiLCJwbGF5QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVPLFNBQVNBLE1BQVQsR0FBaUI7QUFBQTs7QUFBQSxvQkFDeUJDLHdEQUFVLENBQUNDLHFFQUFELENBRG5DO0FBQUEsTUFDWkMsV0FEWSxlQUNaQSxXQURZO0FBQUEsTUFDQ0MsbUJBREQsZUFDQ0EsbUJBREQ7O0FBR3BCLE1BQU1DLE9BQU8sR0FBR0YsV0FBVyxDQUFDQyxtQkFBRCxDQUEzQjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFFRSwwREFBTSxDQUFDQyxlQUF2QjtBQUFBLDRCQUNJO0FBQUEsOEJBQ0k7QUFBSyxXQUFHLEVBQUMsY0FBVDtBQUF3QixXQUFHLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQU1NRixPQUFPLGdCQUNMO0FBQUssZUFBUyxFQUFFQywwREFBTSxDQUFDRSxjQUF2QjtBQUFBLDhCQUNBLHFFQUFDLGlEQUFEO0FBQ0ksYUFBSyxFQUFF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O0FBQUE7QUFBQTtBQUFBLGdCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2REg7O0dBbEVlTCxNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzA4MzNmNDlmZmRhZWZkMzJlYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBQbGF5ZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmMtc2xpZGVyJztcclxuaW1wb3J0ICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyKCl7XHJcbiAgICBjb25zdCB7IGVwaXNvZGVMaXN0LCBjdXJyZW50RXBpc29kZUluZGV4IH0gPSB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IGVwaXNvZGUgPSBlcGlzb2RlTGlzdFtjdXJyZW50RXBpc29kZUluZGV4XTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXlpbmcuc3ZnXCIgYWx0PVwiVG9jYW5kbyBhZ29yYVwiLz5cclxuICAgICAgICAgICAgPHN0cm9uZz5Ub2NhbmRvIGFnb3JhPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgeyBlcGlzb2RlID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50RXBpc29kZX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezU5Mn0gXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1OTJ9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCIgXHJcbiAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntlcGlzb2RlLnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5UGxheWVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlNlbGVjaW9uZSB1bSBwb2RjYXN0IHBhcmEgb3V2aXI8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIH1cclxuXHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXshZXBpc29kZSA/IHN0eWxlcy5lbXB0eSA6ICcnfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjAwOjAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICAgZXBpc29kZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFja1N0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMwNGQzNjEnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFpbFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM5Zjc1ZmYnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3R5bGU9e3sgYm9yZGVyQ29sb3I6ICcjMDRkMzYxJywgYm9yZGVyV2lkdGg6IDR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlTbGlkZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4wMDowMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc2h1ZmZsZS5zdmdcIiBhbHQ9XCJBbGVhdMOzcmlvXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXshZXBpc29kZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktcHJldmlvdXMuc3ZnXCIgYWx0PVwiQW50ZXJpb3JcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMucGxheUJ1dHRvbn0gZGlzYWJsZWQ9eyFlcGlzb2RlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS5zdmdcIiBhbHQ9XCJUb2NhclwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LW5leHQuc3ZnXCIgYWx0PVwiUHLDs3hpbW9cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcmVwZWF0LnN2Z1wiIGFsdD1cIlJlcGV0aXJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==