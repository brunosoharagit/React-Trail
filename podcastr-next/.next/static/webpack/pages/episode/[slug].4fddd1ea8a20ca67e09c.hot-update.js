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
___CSS_LOADER_EXPORT___.push([module.i, ".episode_episode__1L3r1 {\n  max-width: 45rem;\n  padding: 3rem 2rem;\n  margin: 0 auto;\n}\n.episode_episode__1L3r1 .episode_thumbnailContainer__2nDDN {\n  position: relative;\n}\n.episode_episode__1L3r1 .episode_thumbnailContainer__2nDDN img {\n  border-radius: 1rem;\n}\n.episode_episode__1L3r1 .episode_thumbnailContainer__2nDDN button {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.75rem;\n  border: 0;\n  position: absolute;\n  z-index: 5;\n  font-size: 0;\n  transition: -webkit-filter 0.2s;\n  transition: filter 0.2s;\n  transition: filter 0.2s, -webkit-filter 0.2s;\n}\n.episode_episode__1L3r1 .episode_thumbnailContainer__2nDDN button:first-child {\n  left: 0;\n  top: 50%;\n  background: var(--purple-500);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.episode_episode__1L3r1 .episode_thumbnailContainer__2nDDN button:last-child {\n  right: 0;\n  top: 50%;\n  background: var(--green-500);\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n}\n.episode_episode__1L3r1 .episode_thumbnailContainer__2nDDN button:hover {\n  -webkit-filter: brightness(0.95);\n          filter: brightness(0.95);\n}\n.episode_episode__1L3r1 header {\n  padding-bottom: 1rem;\n  border-bottom: 1px solid var(--grey-100);\n}\n.episode_episode__1L3r1 header h1 {\n  margin-top: 2rem;\n  margin-bottom: 1.5rem;\n}\n.episode_episode__1L3r1 header span {\n  display: inline-block;\n  font-size: 0.875rem;\n}\n.episode_episode__1L3r1 header span + span {\n  margin-left: 1rem;\n  padding-left: 1rem;\n  position: relative;\n}\n.episode_episode__1L3r1 header span + span::before {\n  content: \"\";\n  width: 4px;\n  height: 4px;\n  border-radius: 2px;\n  background: #DDD;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate(-200%, -25%);\n          transform: translate(-200%, -25%);\n}\n.episode_episode__1L3r1 .episode_description__soyVN {\n  margin-top: 2rem;\n  line-height: 1.675rem;\n  color: var(--grey-800);\n}\n.episode_episode__1L3r1 .episode_description__soyVN p {\n  margin: 1.5rem 0;\n}", "",{"version":3,"sources":["webpack://episode.module.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,kBAAA;EACA,cAAA;AACJ;AACI;EACI,kBAAA;AACR;AACQ;EACI,mBAAA;AACZ;AAEQ;EACI,WAAA;EACA,YAAA;EACA,sBAAA;EACA,SAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EAEA,+BAAA;EAAA,uBAAA;EAAA,4CAAA;AADZ;AAGY;EACI,OAAA;EACA,QAAA;EACA,6BAAA;EACA,wCAAA;UAAA,gCAAA;AADhB;AAIY;EACI,QAAA;EACA,QAAA;EACA,4BAAA;EACA,uCAAA;UAAA,+BAAA;AAFhB;AAKY;EACI,gCAAA;UAAA,wBAAA;AAHhB;AAQI;EACI,oBAAA;EACA,wCAAA;AANR;AAQQ;EACI,gBAAA;EACA,qBAAA;AANZ;AASQ;EACI,qBAAA;EACA,mBAAA;AAPZ;AASY;EACI,iBAAA;EACA,kBAAA;EACA,kBAAA;AAPhB;AASgB;EACI,WAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,QAAA;EACA,yCAAA;UAAA,iCAAA;AAPpB;AAaI;EACI,gBAAA;EACA,qBAAA;EACA,sBAAA;AAXR;AAaQ;EACI,gBAAA;AAXZ","sourcesContent":[".episode {\r\n    max-width: 45rem;\r\n    padding: 3rem 2rem;\r\n    margin: 0 auto;\r\n\r\n    .thumbnailContainer {\r\n        position: relative;\r\n\r\n        img {\r\n            border-radius: 1rem;\r\n        }\r\n\r\n        button {\r\n            width: 3rem;\r\n            height: 3rem;\r\n            border-radius: 0.75rem;\r\n            border: 0;\r\n            position: absolute;\r\n            z-index: 5;\r\n            font-size: 0;\r\n\r\n            transition: filter 0.2s;\r\n\r\n            &:first-child{\r\n                left: 0;\r\n                top: 50%;\r\n                background: var(--purple-500);\r\n                transform: translate(-50%, -50%);\r\n            }\r\n\r\n            &:last-child{\r\n                right: 0;\r\n                top: 50%;\r\n                background: var(--green-500);\r\n                transform: translate(50%, -50%);\r\n            }\r\n\r\n            &:hover{\r\n                filter: brightness(0.95)\r\n            }\r\n        }\r\n    }\r\n\r\n    header {\r\n        padding-bottom: 1rem;\r\n        border-bottom: 1px solid var(--grey-100);\r\n\r\n        h1 {\r\n            margin-top: 2rem;\r\n            margin-bottom: 1.5rem;\r\n        }\r\n\r\n        span {\r\n            display: inline-block;\r\n            font-size: 0.875rem;\r\n\r\n            & + span{\r\n                margin-left: 1rem;\r\n                padding-left: 1rem;\r\n                position: relative;\r\n\r\n                &::before {\r\n                    content: \"\";\r\n                    width: 4px;\r\n                    height: 4px;\r\n                    border-radius: 2px;\r\n                    background: #DDD;\r\n                    position: absolute;\r\n                    top: 50%;\r\n                    transform: translate(-200%, -25%);\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .description {\r\n        margin-top: 2rem;\r\n        line-height: 1.675rem;\r\n        color: var(--grey-800);\r\n\r\n        p{\r\n            margin: 1.5rem 0;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"episode": "episode_episode__1L3r1",
	"thumbnailContainer": "episode_thumbnailContainer__2nDDN",
	"description": "episode_description__soyVN"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VwaXNvZGUvZXBpc29kZS5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNEJBQTRCLHFCQUFxQix1QkFBdUIsbUJBQW1CLEdBQUcsOERBQThELHVCQUF1QixHQUFHLGtFQUFrRSx3QkFBd0IsR0FBRyxxRUFBcUUsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsY0FBYyx1QkFBdUIsZUFBZSxpQkFBaUIsb0NBQW9DLDRCQUE0QixpREFBaUQsR0FBRyxpRkFBaUYsWUFBWSxhQUFhLGtDQUFrQyw2Q0FBNkMsNkNBQTZDLEdBQUcsZ0ZBQWdGLGFBQWEsYUFBYSxpQ0FBaUMsNENBQTRDLDRDQUE0QyxHQUFHLDJFQUEyRSxxQ0FBcUMscUNBQXFDLEdBQUcsa0NBQWtDLHlCQUF5Qiw2Q0FBNkMsR0FBRyxxQ0FBcUMscUJBQXFCLDBCQUEwQixHQUFHLHVDQUF1QywwQkFBMEIsd0JBQXdCLEdBQUcsOENBQThDLHNCQUFzQix1QkFBdUIsdUJBQXVCLEdBQUcsc0RBQXNELGtCQUFrQixlQUFlLGdCQUFnQix1QkFBdUIscUJBQXFCLHVCQUF1QixhQUFhLDhDQUE4Qyw4Q0FBOEMsR0FBRyx1REFBdUQscUJBQXFCLDBCQUEwQiwyQkFBMkIsR0FBRyx5REFBeUQscUJBQXFCLEdBQUcsT0FBTyxvRkFBb0YsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsbUNBQW1DLHlCQUF5QiwyQkFBMkIsdUJBQXVCLGlDQUFpQywrQkFBK0IscUJBQXFCLG9DQUFvQyxhQUFhLHdCQUF3Qiw0QkFBNEIsNkJBQTZCLHVDQUF1QywwQkFBMEIsbUNBQW1DLDJCQUEyQiw2QkFBNkIsNENBQTRDLGtDQUFrQyw0QkFBNEIsNkJBQTZCLGtEQUFrRCxxREFBcUQsaUJBQWlCLGlDQUFpQyw2QkFBNkIsNkJBQTZCLGlEQUFpRCxvREFBb0QsaUJBQWlCLDRCQUE0Qiw2REFBNkQsYUFBYSxTQUFTLG9CQUFvQixpQ0FBaUMscURBQXFELG9CQUFvQixpQ0FBaUMsc0NBQXNDLGFBQWEsc0JBQXNCLHNDQUFzQyxvQ0FBb0MsNkJBQTZCLHNDQUFzQyx1Q0FBdUMsdUNBQXVDLG1DQUFtQyxzQ0FBc0MsbUNBQW1DLG9DQUFvQywyQ0FBMkMseUNBQXlDLDJDQUEyQyxpQ0FBaUMsMERBQTBELHFCQUFxQixpQkFBaUIsYUFBYSxTQUFTLDBCQUEwQiw2QkFBNkIsa0NBQWtDLG1DQUFtQyxrQkFBa0IsaUNBQWlDLGFBQWEsU0FBUyxLQUFLLG1CQUFtQjtBQUMvNko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXBpc29kZS9bc2x1Z10uNGZkZGQxZWE4YTIwY2E2N2UwOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5lcGlzb2RlX2VwaXNvZGVfXzFMM3IxIHtcXG4gIG1heC13aWR0aDogNDVyZW07XFxuICBwYWRkaW5nOiAzcmVtIDJyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLmVwaXNvZGVfZXBpc29kZV9fMUwzcjEgLmVwaXNvZGVfdGh1bWJuYWlsQ29udGFpbmVyX18ybkRETiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5lcGlzb2RlX2VwaXNvZGVfXzFMM3IxIC5lcGlzb2RlX3RodW1ibmFpbENvbnRhaW5lcl9fMm5ERE4gaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcbi5lcGlzb2RlX2VwaXNvZGVfXzFMM3IxIC5lcGlzb2RlX3RodW1ibmFpbENvbnRhaW5lcl9fMm5ERE4gYnV0dG9uIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcXG4gIGJvcmRlcjogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDU7XFxuICBmb250LXNpemU6IDA7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LWZpbHRlciAwLjJzO1xcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnM7XFxuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycywgLXdlYmtpdC1maWx0ZXIgMC4ycztcXG59XFxuLmVwaXNvZGVfZXBpc29kZV9fMUwzcjEgLmVwaXNvZGVfdGh1bWJuYWlsQ29udGFpbmVyX18ybkRETiBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgbGVmdDogMDtcXG4gIHRvcDogNTAlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLTUwMCk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLmVwaXNvZGVfZXBpc29kZV9fMUwzcjEgLmVwaXNvZGVfdGh1bWJuYWlsQ29udGFpbmVyX18ybkRETiBidXR0b246bGFzdC1jaGlsZCB7XFxuICByaWdodDogMDtcXG4gIHRvcDogNTAlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4tNTAwKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcXG59XFxuLmVwaXNvZGVfZXBpc29kZV9fMUwzcjEgLmVwaXNvZGVfdGh1bWJuYWlsQ29udGFpbmVyX18ybkRETiBidXR0b246aG92ZXIge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XFxuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk1KTtcXG59XFxuLmVwaXNvZGVfZXBpc29kZV9fMUwzcjEgaGVhZGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyZXktMTAwKTtcXG59XFxuLmVwaXNvZGVfZXBpc29kZV9fMUwzcjEgaGVhZGVyIGgxIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcbi5lcGlzb2RlX2VwaXNvZGVfXzFMM3IxIGhlYWRlciBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxufVxcbi5lcGlzb2RlX2VwaXNvZGVfXzFMM3IxIGhlYWRlciBzcGFuICsgc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmVwaXNvZGVfZXBpc29kZV9fMUwzcjEgaGVhZGVyIHNwYW4gKyBzcGFuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjREREO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMDAlLCAtMjUlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwMCUsIC0yNSUpO1xcbn1cXG4uZXBpc29kZV9lcGlzb2RlX18xTDNyMSAuZXBpc29kZV9kZXNjcmlwdGlvbl9fc295Vk4ge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY3NXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5LTgwMCk7XFxufVxcbi5lcGlzb2RlX2VwaXNvZGVfXzFMM3IxIC5lcGlzb2RlX2Rlc2NyaXB0aW9uX19zb3lWTiBwIHtcXG4gIG1hcmdpbjogMS41cmVtIDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9lcGlzb2RlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7QUFDUjtBQUNRO0VBQ0ksbUJBQUE7QUFDWjtBQUVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEsK0JBQUE7RUFBQSx1QkFBQTtFQUFBLDRDQUFBO0FBRFo7QUFHWTtFQUNJLE9BQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FBRGhCO0FBSVk7RUFDSSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtBQUZoQjtBQUtZO0VBQ0ksZ0NBQUE7VUFBQSx3QkFBQTtBQUhoQjtBQVFJO0VBQ0ksb0JBQUE7RUFDQSx3Q0FBQTtBQU5SO0FBUVE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FBTlo7QUFTUTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUFQWjtBQVNZO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUGhCO0FBU2dCO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7QUFQcEI7QUFhSTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQVhSO0FBYVE7RUFDSSxnQkFBQTtBQVhaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5lcGlzb2RlIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NXJlbTtcXHJcXG4gICAgcGFkZGluZzogM3JlbSAycmVtO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG5cXHJcXG4gICAgLnRodW1ibmFpbENvbnRhaW5lciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogNTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnM7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcXHJcXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS01MDApO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xcclxcbiAgICAgICAgICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuLTUwMCk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk1KVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoZWFkZXIge1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JleS0xMDApO1xcclxcblxcclxcbiAgICAgICAgaDEge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgJiArIHNwYW57XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0RERDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwMCUsIC0yNSUpO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjc1cmVtO1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWdyZXktODAwKTtcXHJcXG5cXHJcXG4gICAgICAgIHB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAxLjVyZW0gMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJlcGlzb2RlXCI6IFwiZXBpc29kZV9lcGlzb2RlX18xTDNyMVwiLFxuXHRcInRodW1ibmFpbENvbnRhaW5lclwiOiBcImVwaXNvZGVfdGh1bWJuYWlsQ29udGFpbmVyX18ybkRETlwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiZXBpc29kZV9kZXNjcmlwdGlvbl9fc295Vk5cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9