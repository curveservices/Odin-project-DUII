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

/***/ "./src/dark-mode.js":
/*!**************************!*\
  !*** ./src/dark-mode.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst darkMode = (() => {\n    function darkHandler() {\n        const toggle = document.getElementById('toggle-dark');\n        const body = document.querySelector('body');\n        const header = document.querySelector('header');\n\n        toggle.addEventListener('click', () => {\n        toggle.classList.toggle('fa-toggle-on')   \n            if (toggle.classList.toggle('fa-toggle-off')) {\n                body.style.background = '#fff'\n                body.style.color = '#333';\n                body.style.transition = '0.3s';\n                header.style.background = '#f7df1e';\n                header.style.transision = '0.3s'\n            } else {\n                body.style.background = '#333';\n                body.style.color = '#fff';\n                body.style.transition = '0.3s';\n                header.style.background = 'grey';\n                header.style.transision = '0.3s'\n            }\n        })\n    }\n\n    return {\n        darkHandler,\n    }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (darkMode);\n\n\n//# sourceURL=webpack://odin-project-duii/./src/dark-mode.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dark_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dark-mode */ \"./src/dark-mode.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n\n\n\n\n_dark_mode__WEBPACK_IMPORTED_MODULE_0__[\"default\"].darkHandler();\n\n_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"].menuDropDown();\n_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createDots();\n\n\nconsole.log('hello')\n\n//# sourceURL=webpack://odin-project-duii/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = (() => {\n    function menuDropDown() {\n       document.addEventListener(\"DOMContentLoaded\", () => {\n           const dropDown = document.querySelector('.menu-container');\n           const dropDownContent = document.querySelector('.dropdown-content');\n\n           dropDown.addEventListener('click', () => {\n               dropDownContent.classList.toggle('show');\n           });\n\n           //Close the drop down menu when user clicks outside of it\n           window.addEventListener('click', (event) => {\n               if (!event.target.matches('.dropBtn')) {\n                   if (dropDownContent.classList.contains('show')) {\n                       dropDownContent.classList.remove('show');\n                   }\n               }\n           });\n       });\n    }\n    return {\n    menuDropDown,\n};\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://odin-project-duii/./src/menu.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (() => {\n    let currentSlide = 0;\n    const slides = document.querySelectorAll('.slide');\n    const dotsContainer = document.querySelector('.dots-container');\n    const prevButton = document.querySelector('.prev-button');\n    const nextButton = document.querySelector('.next-button');\n    const slider = document.querySelector('.slider');\n\n    // Show the first slide and set a timer for automatic sliding\n    showSlide(currentSlide);\n    setInterval(nextSlide, 5000);\n\n    function showSlide(a) {\n        currentSlide = a;\n\n        slides.forEach((slide, index) => {\n            slide.style.transform = `translateX(${100 * (index - a)}%)`;\n        });\n        updateDots();\n    };\n\n    function nextSlide() {\n        if (currentSlide < slides.length -1) {\n            currentSlide++;\n        } else {\n            currentSlide = 0;\n        }\n        showSlide(currentSlide);\n    };\n\n    nextButton.addEventListener('click', () => {\n        nextSlide();\n    })\n\n    function prevSlide() {\n        if (currentSlide > 0) {\n            currentSlide--;\n        } else {\n            currentSlide = slides.length -1;\n        }\n        showSlide(currentSlide);\n    }\n\n    prevButton.addEventListener('click', () => {\n        prevSlide();\n    });\n\n     // Create dots based on the number of slides\n     function createDots() {\n        slides.forEach((_, index) => {\n        const dot = document.createElement('span');\n        dot.className = ('dot');\n        dotsContainer.appendChild(dot);\n        dot.addEventListener('click', () => showSlide(index));\n    });\n    }\n\n    function updateDots() {\n        const dots = document.querySelectorAll('.dot');\n        dots.forEach((dot, index) => {\n            if (index === currentSlide) {\n                dot.classList.add('active');\n            } else {\n                dot.classList.remove('active');\n            }\n        });\n    }\n\n    // create finger slide function\n    const hammertime = new Hammer(slider);\n    hammertime.on('swipeleft', nextSlide);\n    hammertime.on('swiperight', prevSlide);\n\n    return {\n        createDots,\n        showSlide,\n        nextSlide,\n        prevSlide,\n        hammertime,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n\n\n\n\n//# sourceURL=webpack://odin-project-duii/./src/slider.js?");

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