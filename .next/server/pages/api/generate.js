"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nconst basePromptPrefix = \"\";\nconst generateAction = async (req, res)=>{\n    // Run first prompt\n    console.log(`API: ${basePromptPrefix}${req.body.userInput}`);\n    const baseCompletion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: `${basePromptPrefix}${req.body.userInput}`,\n        temperature: 0.7,\n        max_tokens: 250\n    });\n    const basePromptOutput = baseCompletion.data.choices.pop();\n    res.status(200).json({\n        output: basePromptOutput\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUNwQ0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3RDO0FBRUEsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsTUFBTU0sbUJBQW1CO0FBQ3pCLE1BQU1DLGlCQUFpQixPQUFPQyxLQUFLQyxNQUFRO0lBQ3ZDLG1CQUFtQjtJQUNuQkMsUUFBUUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFTCxpQkFBaUIsRUFBRUUsSUFBSUksSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztJQUUzRCxNQUFNQyxpQkFBaUIsTUFBTVQsT0FBT1UsZ0JBQWdCLENBQUM7UUFDakRDLE9BQU87UUFDUEMsUUFBUSxDQUFDLEVBQUVYLGlCQUFpQixFQUFFRSxJQUFJSSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xESyxhQUFhO1FBQ2JDLFlBQVk7SUFDaEI7SUFFQSxNQUFNQyxtQkFBbUJOLGVBQWVPLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHO0lBRXhEZCxJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLFFBQVFOO0lBQWlCO0FBQ3BEO0FBRUEsaUVBQWViLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY3JhdGNocGFkLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzYyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSAnb3BlbmFpJztcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5cbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG5cbmNvbnN0IGJhc2VQcm9tcHRQcmVmaXggPSBcIlwiO1xuY29uc3QgZ2VuZXJhdGVBY3Rpb24gPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICAvLyBSdW4gZmlyc3QgcHJvbXB0XG4gICAgY29uc29sZS5sb2coYEFQSTogJHtiYXNlUHJvbXB0UHJlZml4fSR7cmVxLmJvZHkudXNlcklucHV0fWApXG5cbiAgICBjb25zdCBiYXNlQ29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcbiAgICAgICAgbW9kZWw6ICd0ZXh0LWRhdmluY2ktMDAzJyxcbiAgICAgICAgcHJvbXB0OiBgJHtiYXNlUHJvbXB0UHJlZml4fSR7cmVxLmJvZHkudXNlcklucHV0fWAsXG4gICAgICAgIHRlbXBlcmF0dXJlOiAwLjcsXG4gICAgICAgIG1heF90b2tlbnM6IDI1MCxcbiAgICB9KTtcblxuICAgIGNvbnN0IGJhc2VQcm9tcHRPdXRwdXQgPSBiYXNlQ29tcGxldGlvbi5kYXRhLmNob2ljZXMucG9wKCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG91dHB1dDogYmFzZVByb21wdE91dHB1dCB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQWN0aW9uOyJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsImJhc2VQcm9tcHRQcmVmaXgiLCJnZW5lcmF0ZUFjdGlvbiIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwidXNlcklucHV0IiwiYmFzZUNvbXBsZXRpb24iLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJwcm9tcHQiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJiYXNlUHJvbXB0T3V0cHV0IiwiZGF0YSIsImNob2ljZXMiLCJwb3AiLCJzdGF0dXMiLCJqc29uIiwib3V0cHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();