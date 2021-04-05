/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"about\": () => (/* binding */ about)\n/* harmony export */ });\nconst about = (() => {\n  const content = document.querySelector('#content')\n  const aboutTab = document.querySelector('#about')\n\n  aboutTab.addEventListener('click', render)\n  function render() {\n    content.innerHTML = ''\n    const title = document.createElement('h1')\n    title.className = 'title'\n    title.textContent = 'ABOUT'\n    const text = document.createElement('p')\n    text.className = 'about'\n    text.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"\n\n    content.appendChild(title)\n    content.appendChild(text)\n  }\n\n  return {\n    render\n  }\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst contact = (() => {\n  const content = document.querySelector('#content')\n  const contactTab = document.querySelector('#contact')\n\n  contactTab.addEventListener('click', render)\n  function render() {\n    content.innerHTML = ''\n    const title = document.createElement('h1')\n    title.className = 'title'\n    title.textContent = 'CONTACT'\n    const text = document.createElement('p')\n    text.className = 'contact'\n    text.textContent = \"Nulla dignissim in turpis ut scelerisque. In porttitor leo lacus, sed rhoncus nisl pretium sed. Donec gravida dapibus mauris, et ultricies tellus. Cras molestie est vitae nisl auctor iaculis. Sed mattis quam faucibus risus tempus, eget placerat justo tincidunt. Sed dictum semper viverra. Proin non erat in mi efficitur eleifend. Quisque hendrerit venenatis libero a dapibus. Proin at tellus tincidunt, porttitor tellus sed, pretium nisl. Nunc a urna leo. Sed dui urna, bibendum vitae convallis laoreet, molestie eu nulla. Curabitur sit amet vulputate quam. Integer eu felis sapien. Curabitur sagittis tempor massa, eget venenatis massa suscipit quis.\"\n\n    content.appendChild(title)\n    content.appendChild(text)\n  }\n\n  return {\n    render\n  }\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gallery\": () => (/* binding */ gallery)\n/* harmony export */ });\nconst gallery = (() => {\n  const content = document.querySelector('#content')\n  const galleryTab = document.querySelector('#gallery')\n\n  galleryTab.addEventListener('click', render)\n  function render() {\n    content.innerHTML = ''\n    const title = document.createElement('h1')\n    title.className = 'title'\n    title.textContent = 'GALLERY'\n    const text = document.createElement('p')\n    text.className = 'gallery'\n    text.textContent = \"Nunc tincidunt semper turpis, nec accumsan nulla viverra vitae. Praesent quis tempor tellus. Nullam convallis tempor quam, non porta mi malesuada at. Vivamus vitae congue augue. Suspendisse vel posuere orci. Curabitur finibus suscipit vestibulum. Fusce felis leo, luctus et ante eget, cursus porttitor lectus. Aenean porta molestie eros, quis eleifend quam accumsan ut. Donec a purus sed leo efficitur auctor. Aenean dui eros, facilisis sit amet lacus et, vulputate ultricies leo. Proin finibus mauris ac sapien interdum, a facilisis leo egestas. Sed vitae pulvinar leo. Aenean nibh eros, tincidunt id felis sit amet, sagittis tincidunt dolor. Sed nec metus eu neque ornare laoreet vitae nec velit. Nullam urna ante, finibus a lorem sed, ultrices maximus felis.\"\n\n    content.appendChild(title)\n    content.appendChild(text)\n  }\n\n  return {\n    render\n  }\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/gallery.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery */ \"./src/gallery.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news */ \"./src/news.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = (() => {\n  const content = document.querySelector('#content')\n  const menuTab = document.querySelector('#menu')\n\n  menuTab.addEventListener('click', render)\n  function render() {\n    content.innerHTML = ''\n    const title = document.createElement('h1')\n    title.className = 'title'\n    title.textContent = 'MENU'\n    const text = document.createElement('p')\n    text.className = 'menu'\n    text.textContent = \"Proin fermentum molestie faucibus. Suspendisse quis est et lectus dapibus suscipit. Nullam non tempor mauris, sit amet volutpat sapien. Fusce quis erat erat. Nunc nec erat et massa vestibulum faucibus. Nunc elementum ipsum risus, a lobortis ipsum vehicula eu. Vestibulum vitae suscipit neque. Sed sodales quam et eros sodales, sed venenatis est lacinia. Morbi ultrices vehicula sem in suscipit. Sed congue leo non arcu aliquam, quis tempus ante pharetra. Mauris et sem eget orci congue tempus. Donec fringilla vestibulum iaculis.\"\n\n    content.appendChild(title)\n    content.appendChild(text)\n  }\n\n  return {\n    render\n  }\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/news.js":
/*!*********************!*\
  !*** ./src/news.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"news\": () => (/* binding */ news)\n/* harmony export */ });\nconst news = (() => {\n  const content = document.querySelector('#content')\n  const newsTab = document.querySelector('#news')\n\n  newsTab.addEventListener('click', render)\n  function render() {\n    content.innerHTML = ''\n    const title = document.createElement('h1')\n    title.className = 'title'\n    title.textContent = 'NEWS'\n    const text = document.createElement('p')\n    text.className = 'news'\n    text.textContent = \"Integer ac est et elit accumsan dignissim. Aliquam eros mauris, congue vitae accumsan in, faucibus a felis. Sed consequat iaculis posuere. Donec iaculis facilisis erat eget euismod. Pellentesque non sodales nisi, vel eleifend magna. Nam placerat ac neque et pharetra. Duis venenatis lorem vel mi finibus aliquet. Quisque eget quam nec orci congue pulvinar. Morbi mattis eu tellus ac consequat. Suspendisse auctor, sem vitae hendrerit dapibus, felis arcu aliquam urna, sit amet pharetra nunc eros sed eros. Maecenas feugiat sodales erat quis mattis. Aliquam feugiat ligula maximus, condimentum libero sed, consectetur lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque faucibus sapien id ipsum molestie ultrices vitae at erat.\"\n\n    content.appendChild(title)\n    content.appendChild(text)\n  }\n\n  return {\n    render\n  }\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/news.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;