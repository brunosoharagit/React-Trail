webpackHotUpdate_N_E("pages/episode/[slug]",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/pages/episode/episode.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/pages/episode/episode.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".episode_episode__1L3r1 {\n  max-width: 45rem;\n  padding: 3rem 2rem;\n  margin: 0 auto;\n}\n.episode_episode__1L3r1 .episode_thumbnailContainer__2nDDN {\n  position: relative;\n}\n.episode_episode__1L3r1 .episode_thumbnailContainer__2nDDN img {\n  border-radius: 1rem;\n}\n.episode_episode__1L3r1 .episode_thumbnailContainer__2nDDN button {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.75rem;\n  border: 0;\n  position: absolute;\n  z-index: 5;\n  font-size: 0;\n  transition: -webkit-filter 0.2s;\n  transition: filter 0.2s;\n  transition: filter 0.2s, -webkit-filter 0.2s;\n}\n.episode_episode__1L3r1 .episode_thumbnailContainer__2nDDN button:first-child {\n  left: 0;\n  top: 50%;\n  background: var(--purple-500);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.episode_episode__1L3r1 .episode_thumbnailContainer__2nDDN button:last-child {\n  right: 0;\n  top: 50%;\n  background: var(--green-500);\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n}\n.episode_episode__1L3r1 .episode_thumbnailContainer__2nDDN button:hover {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n.episode_episode__1L3r1 header {\n  padding-bottom: 1rem;\n  border-bottom: 1px solid var(--grey-100);\n}\n.episode_episode__1L3r1 header h1 {\n  margin-top: 2rem;\n  margin-bottom: 1.5rem;\n}\n.episode_episode__1L3r1 header span {\n  display: inline-block;\n  font-size: 0.875rem;\n}\n.episode_episode__1L3r1 header span + span {\n  margin-left: 1rem;\n  padding-left: 1rem;\n  position: relative;\n}\n.episode_episode__1L3r1 header span + span::before {\n  content: \"\";\n  width: 4px;\n  height: 4px;\n  border-radius: 2px;\n  background: #DDD;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}", "",{"version":3,"sources":["webpack://episode.module.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,kBAAA;EACA,cAAA;AACJ;AACI;EACI,kBAAA;AACR;AACQ;EACI,mBAAA;AACZ;AAEQ;EACI,WAAA;EACA,YAAA;EACA,sBAAA;EACA,SAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EAEA,+BAAA;EAAA,uBAAA;EAAA,4CAAA;AADZ;AAGY;EACI,OAAA;EACA,QAAA;EACA,6BAAA;EACA,wCAAA;UAAA,gCAAA;AADhB;AAIY;EACI,QAAA;EACA,QAAA;EACA,4BAAA;EACA,uCAAA;UAAA,+BAAA;AAFhB;AAKY;EACI,gCAAA;UAAA,wBAAA;AAHhB;AAQI;EACI,oBAAA;EACA,wCAAA;AANR;AAQQ;EACI,gBAAA;EACA,qBAAA;AANZ;AASQ;EACI,qBAAA;EACA,mBAAA;AAPZ;AASY;EACI,iBAAA;EACA,kBAAA;EACA,kBAAA;AAPhB;AASgB;EACI,WAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,QAAA;EACA,wCAAA;UAAA,gCAAA;AAPpB","sourcesContent":[".episode {\r\n    max-width: 45rem;\r\n    padding: 3rem 2rem;\r\n    margin: 0 auto;\r\n\r\n    .thumbnailContainer {\r\n        position: relative;\r\n\r\n        img {\r\n            border-radius: 1rem;\r\n        }\r\n\r\n        button {\r\n            width: 3rem;\r\n            height: 3rem;\r\n            border-radius: 0.75rem;\r\n            border: 0;\r\n            position: absolute;\r\n            z-index: 5;\r\n            font-size: 0;\r\n\r\n            transition: filter 0.2s;\r\n\r\n            &:first-child{\r\n                left: 0;\r\n                top: 50%;\r\n                background: var(--purple-500);\r\n                transform: translate(-50%, -50%);\r\n            }\r\n\r\n            &:last-child{\r\n                right: 0;\r\n                top: 50%;\r\n                background: var(--green-500);\r\n                transform: translate(50%, -50%);\r\n            }\r\n\r\n            &:hover{\r\n                filter: brightness(0.95)\r\n            }\r\n        }\r\n    }\r\n\r\n    header{\r\n        padding-bottom: 1rem;\r\n        border-bottom: 1px solid var(--grey-100);\r\n\r\n        h1 {\r\n            margin-top: 2rem;\r\n            margin-bottom: 1.5rem;\r\n        }\r\n\r\n        span {\r\n            display: inline-block;\r\n            font-size: 0.875rem;\r\n\r\n            & + span{\r\n                margin-left: 1rem;\r\n                padding-left: 1rem;\r\n                position: relative;\r\n\r\n                &::before {\r\n                    content: \"\";\r\n                    width: 4px;\r\n                    height: 4px;\r\n                    border-radius: 2px;\r\n                    background: #DDD;\r\n                    position: absolute;\r\n                    top: 50%;\r\n                    transform: translate(-50%, -50%);\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"episode": "episode_episode__1L3r1",
	"thumbnailContainer": "episode_thumbnailContainer__2nDDN"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VwaXNvZGUvZXBpc29kZS5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNEJBQTRCLHFCQUFxQix1QkFBdUIsbUJBQW1CLEdBQUcsOERBQThELHVCQUF1QixHQUFHLGtFQUFrRSx3QkFBd0IsR0FBRyxxRUFBcUUsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsY0FBYyx1QkFBdUIsZUFBZSxpQkFBaUIsb0NBQW9DLDRCQUE0QixpREFBaUQsR0FBRyxpRkFBaUYsWUFBWSxhQUFhLGtDQUFrQyw2Q0FBNkMsNkNBQTZDLEdBQUcsZ0ZBQWdGLGFBQWEsYUFBYSxpQ0FBaUMsNENBQTRDLDRDQUE0QyxHQUFHLDJFQUEyRSxxQ0FBcUMscUNBQXFDLEdBQUcsa0NBQWtDLHlCQUF5Qiw2Q0FBNkMsR0FBRyxxQ0FBcUMscUJBQXFCLDBCQUEwQixHQUFHLHVDQUF1QywwQkFBMEIsd0JBQXdCLEdBQUcsOENBQThDLHNCQUFzQix1QkFBdUIsdUJBQXVCLEdBQUcsc0RBQXNELGtCQUFrQixlQUFlLGdCQUFnQix1QkFBdUIscUJBQXFCLHVCQUF1QixhQUFhLDZDQUE2Qyw2Q0FBNkMsR0FBRyxPQUFPLG9GQUFvRixXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLG9DQUFvQyx5QkFBeUIsMkJBQTJCLHVCQUF1QixpQ0FBaUMsK0JBQStCLHFCQUFxQixvQ0FBb0MsYUFBYSx3QkFBd0IsNEJBQTRCLDZCQUE2Qix1Q0FBdUMsMEJBQTBCLG1DQUFtQywyQkFBMkIsNkJBQTZCLDRDQUE0QyxrQ0FBa0MsNEJBQTRCLDZCQUE2QixrREFBa0QscURBQXFELGlCQUFpQixpQ0FBaUMsNkJBQTZCLDZCQUE2QixpREFBaUQsb0RBQW9ELGlCQUFpQiw0QkFBNEIsNkRBQTZELGFBQWEsU0FBUyxtQkFBbUIsaUNBQWlDLHFEQUFxRCxvQkFBb0IsaUNBQWlDLHNDQUFzQyxhQUFhLHNCQUFzQixzQ0FBc0Msb0NBQW9DLDZCQUE2QixzQ0FBc0MsdUNBQXVDLHVDQUF1QyxtQ0FBbUMsc0NBQXNDLG1DQUFtQyxvQ0FBb0MsMkNBQTJDLHlDQUF5QywyQ0FBMkMsaUNBQWlDLHlEQUF5RCxxQkFBcUIsaUJBQWlCLGFBQWEsU0FBUyxLQUFLLG1CQUFtQjtBQUNqOUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VwaXNvZGUvW3NsdWddLmJlNDRmZmExOTVkYzc0NWY3YjBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZXBpc29kZV9lcGlzb2RlX18xTDNyMSB7XFxuICBtYXgtd2lkdGg6IDQ1cmVtO1xcbiAgcGFkZGluZzogM3JlbSAycmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5lcGlzb2RlX2VwaXNvZGVfXzFMM3IxIC5lcGlzb2RlX3RodW1ibmFpbENvbnRhaW5lcl9fMm5ERE4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZXBpc29kZV9lcGlzb2RlX18xTDNyMSAuZXBpc29kZV90aHVtYm5haWxDb250YWluZXJfXzJuREROIGltZyB7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG4uZXBpc29kZV9lcGlzb2RlX18xTDNyMSAuZXBpc29kZV90aHVtYm5haWxDb250YWluZXJfXzJuREROIGJ1dHRvbiB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XFxuICBib3JkZXI6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA1O1xcbiAgZm9udC1zaXplOiAwO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC1maWx0ZXIgMC4ycztcXG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjJzO1xcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnMsIC13ZWJraXQtZmlsdGVyIDAuMnM7XFxufVxcbi5lcGlzb2RlX2VwaXNvZGVfXzFMM3IxIC5lcGlzb2RlX3RodW1ibmFpbENvbnRhaW5lcl9fMm5ERE4gYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS01MDApO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5lcGlzb2RlX2VwaXNvZGVfXzFMM3IxIC5lcGlzb2RlX3RodW1ibmFpbENvbnRhaW5lcl9fMm5ERE4gYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuLTUwMCk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XFxufVxcbi5lcGlzb2RlX2VwaXNvZGVfXzFMM3IxIC5lcGlzb2RlX3RodW1ibmFpbENvbnRhaW5lcl9fMm5ERE4gYnV0dG9uOmhvdmVyIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XFxufVxcbi5lcGlzb2RlX2VwaXNvZGVfXzFMM3IxIGhlYWRlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmV5LTEwMCk7XFxufVxcbi5lcGlzb2RlX2VwaXNvZGVfXzFMM3IxIGhlYWRlciBoMSB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG4uZXBpc29kZV9lcGlzb2RlX18xTDNyMSBoZWFkZXIgc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG4uZXBpc29kZV9lcGlzb2RlX18xTDNyMSBoZWFkZXIgc3BhbiArIHNwYW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5lcGlzb2RlX2VwaXNvZGVfXzFMM3IxIGhlYWRlciBzcGFuICsgc3Bhbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDRweDtcXG4gIGhlaWdodDogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogI0RERDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9lcGlzb2RlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7QUFDUjtBQUNRO0VBQ0ksbUJBQUE7QUFDWjtBQUVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEsK0JBQUE7RUFBQSx1QkFBQTtFQUFBLDRDQUFBO0FBRFo7QUFHWTtFQUNJLE9BQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FBRGhCO0FBSVk7RUFDSSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtBQUZoQjtBQUtZO0VBQ0ksZ0NBQUE7VUFBQSx3QkFBQTtBQUhoQjtBQVFJO0VBQ0ksb0JBQUE7RUFDQSx3Q0FBQTtBQU5SO0FBUVE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FBTlo7QUFTUTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUFQWjtBQVNZO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUGhCO0FBU2dCO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUFQcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmVwaXNvZGUge1xcclxcbiAgICBtYXgtd2lkdGg6IDQ1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAzcmVtIDJyZW07XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcblxcclxcbiAgICAudGh1bWJuYWlsQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDNyZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiA1O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycztcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xcclxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLTUwMCk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGR7XFxyXFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4tNTAwKTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGhlYWRlcntcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyZXktMTAwKTtcXHJcXG5cXHJcXG4gICAgICAgIGgxIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcblxcclxcbiAgICAgICAgICAgICYgKyBzcGFue1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNEREQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImVwaXNvZGVcIjogXCJlcGlzb2RlX2VwaXNvZGVfXzFMM3IxXCIsXG5cdFwidGh1bWJuYWlsQ29udGFpbmVyXCI6IFwiZXBpc29kZV90aHVtYm5haWxDb250YWluZXJfXzJuREROXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==