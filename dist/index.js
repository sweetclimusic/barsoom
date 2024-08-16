/******/ var __webpack_modules__ = ({

/***/ 284:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 984:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(284);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1__ = __nccwpck_require__(984);



try {
    const name = _actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput('name');
    const output_value = 'Hello $(name) from barsoom!';
    _actions_core__WEBPACK_IMPORTED_MODULE_0__.setOutput('greeting', output_value)
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(_actions_github__WEBPACK_IMPORTED_MODULE_1__.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    _actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed(error.message)
}
})();

