/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/action-on-scroll.js":
/*!*********************************!*\
  !*** ./src/action-on-scroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionOnScroll": () => (/* binding */ actionOnScroll)
/* harmony export */ });


/**
 *
 * actionOnScroll use the IntersectionObserver API to check if element is intersceting
 *
 * @param {HTMLElement} element - element to observer
 * @param {Action} Function/String - To either excute provided function on element or add the string as a class name
 * @param {Boolean} defualt false - pass true if you want the function to run every time element is Intersecting
 * @param {Object} Object - Pass options to customise IntersectionObserver see docs
 */
function actionOnScroll(element, action) {
  let repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
    threshold: [0, 0.1, 1]
  };

  if (element && typeof element !== 'undefined' && element !== null) {
    let actionOnScrollAction = function (entries) {
      entries.forEach(entry => {
        //what to do with element depending on action type
        if (entry.isIntersecting) {
          if (typeof action === 'string') {
            element.classList.add(action);
          } else if (typeof action === 'function') {
            action(element);
          } // stop observing if repeat === false


          if (repeat === false) {
            observer.unobserve(element);
          }
        }
      });
    }; //intialise observer and observer element


    let observer = new IntersectionObserver(actionOnScrollAction, options);
    observer.observe(element);
  }
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tryCatch": () => (/* binding */ tryCatch)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/devcorate/devcorate */ "./src/patterns/devcorate/devcorate.js");
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns */ "./src/patterns.js");





/**
 * Main entry
 *
 * @author Web Development
 * @copyright City, University of London 2021
 */


console.log('a');
/**
 * try a function, log the error if it throws an exception.
 *
 * @param {Function} f - The function to call.
 */

function tryCatch(f) {
  try {
    return f();
  } catch (e) {
    // console.log(e);
    (0,_util__WEBPACK_IMPORTED_MODULE_1__.gaEvent)('jsError', 'JavaScript error', "Line ".concat(e.lineNumber, " \u2013 ").concat(e.message), "Pattern launch ".concat(e.fileName, " (").concat(window.location, ")"), true);
  }
}
/**
 * Runs the function for each pattern against every element that has the
 * matching class, unless the element also has that class with a '-no-js' suffix
 * (for cases where you want to use the CSS for a pattern, but not the
 * functionality).
 *
 * @param {object} pattern - An object containing the class name to trigger the pattern and the launch function to run for those elements.
 */

function launchPattern(pattern) {
  if (typeof pattern === 'function') {
    tryCatch(pattern);
  } else if (pattern.launchQuery) {
    const {
      launchFn,
      launchQuery
    } = pattern;
    Array.from(document.querySelectorAll(launchQuery)).filter(elem => elem.className.indexOf("".concat(launchQuery, "-no-js"))).forEach(elem => tryCatch(() => launchFn(elem)));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    _patterns__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(launchPattern);
    const parameters = (0,_util__WEBPACK_IMPORTED_MODULE_1__.parametersToObject)(location.search);
    parameters['dev'] && (0,_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_2__.devcorate)(document.querySelector('body'), 'dev', parameters['dev']);
    parameters['rel'] && (0,_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_2__.devcorate)(document.querySelector('body'), 'rel', parameters['rel']);
  }
}, false);

/***/ }),

/***/ "./src/patterns.js":
/*!*************************!*\
  !*** ./src/patterns.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patterns_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patterns/accordion/accordion */ "./src/patterns/accordion/accordion.js");
/* harmony import */ var _patterns_accordion_accordion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_patterns_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patterns_animation_number_animation_number_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns/animation/number-animation/number-animation */ "./src/patterns/animation/number-animation/number-animation.js");


/**
 * Pattern library
 *
 * Exports an array of patterns to execute on startup.
 *
 * @module patterns
 * @author Web Development
 * @copyright City, University of London 2022
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([(_patterns_accordion_accordion__WEBPACK_IMPORTED_MODULE_0___default()), _patterns_animation_number_animation_number_animation__WEBPACK_IMPORTED_MODULE_1__["default"]]);

/***/ }),

/***/ "./src/patterns/accordion/accordion.js":
/*!*********************************************!*\
  !*** ./src/patterns/accordion/accordion.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/patterns/animation/number-animation/number-animation.js":
/*!*********************************************************************!*\
  !*** ./src/patterns/animation/number-animation/number-animation.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_on_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../action-on-scroll */ "./src/action-on-scroll.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util */ "./src/util.js");






const className = 'animate-number',
      DURATION = 1500; // set duration variable 1500 ms increase if want longer animation

console.log('test');
/**
 *
 * find container containing the number
 *
 * @param {HTMLElement} element - html element to be animated
 * @return {HTMLElement} element - if element to be animated is found return it else return original element
 */

function findNumberContainer(widget) {
  const nested = widget.querySelector('.animate--number__number');
  return typeof nested !== 'undefined' && nested !== null ? nested : widget;
}
/**
 *
 * Intial setup
 * add data attr : data-animation-number-value - number to animate
 * add data attr : data-animation-number-float - boolean value if number is float
 * add data attr : data-animation-numner-start - number value of where to start animation from
 * add class name - animate--number--init
 *
 * @param {HTMLElement} element - The section that need to be animated
 * @return {boolean} - if number animation is setup?
 */


function initNumberAnimation(widget) {
  const startStr = widget.dataset.animationNumberStart || '0';
  const start = parseFloat(startStr);
  const numberContainer = findNumberContainer(widget);
  const numberStr = numberContainer.innerHTML.trim().replace(/,/g, '');

  if (numberStr.match(/^-?[0-9,]+(\.[0-9,]+])?/)) {
    widget.dataset.animationNumberValue = parseFloat(numberStr);
    widget.dataset.animationNumberFloat = !!numberStr.match(/\./);
    widget.dataset.animationNumberStart = start;
    numberContainer.innerHTML = startStr;
    widget.classList.add('animate--number--init');
    return true;
  } else {
    return false;
  }
}
/**
 *
 * run animation function
 *
 * @param {HTMLElement} element - element to be animated
 */


function runNumberAnimation(widget) {
  const numberContainer = findNumberContainer(widget);
  const isFloat = widget.dataset.animationNumberFloat;
  const value = parseInt(widget.dataset.animationNumberValue);
  const format = widget.dataset.animationNumberFormat;

  if (value !== 0) {
    let first = true;
    let startTime = 0;
    let startValue = parseInt(widget.dataset.animationNumberStart);
    let lastValue = 0;
    /**
     * function to run animation
     *
     * @param {timestamp} time stamp - time stamp from requestAnimationFrame API
     */

    const f = timestamp => {
      if (first) {
        startTime = timestamp;
        first = false;
      }

      const t = (timestamp - startTime) / DURATION; // difference in time between two discrete points in time divied by duration

      const finish = t >= 1;
      let k = finish ? 1 : 1 - Math.pow(1 - t, 4);
      let v = k * (value - startValue) + startValue;

      if (isFloat) {
        v = Math.round(v);
      }

      if (lastValue !== v) {
        lastValue = v;
        numberContainer.innerHTML = format === 'true' ? v.toLocaleString('en-GB') // append and format to GB
        : v;
      }

      if (finish) {
        //end of animation
        widget.classList.add('animate--number--complete');
      } else {
        //repeat call requestAnimationFrame until finish is true
        window.requestAnimationFrame(f);
      }
    };
    /**
     * run requestAnimationFrame to repaint animation to screen
     */


    window.requestAnimationFrame(f);
  }
}
/**
 *
 * Intial setup
 *
 * number animation should contain a wrapper with a class name 'animate-number'
 * there should be at least one child element with a class name 'animate--number__heading'
 * and a span element with a class name 'animate--number__number' containing the number
 *
 * e.g.
 *
 * <div class="animate-number">
 *  <h2 class="animate animate--number__heading">
 *      <span class="animate--number__number">10,000</span>
 *  </h2>
 * </div>
 *
 * @param {HTMLElement} elm - An HTML element with the 'animate-number' class.
 *
 */


function init(elm) {
  const lazyNumbers = [].slice.call(elm.querySelectorAll('.animate--number'));
  /**
   * check if browser support IntersectionObserver api
   */

  if ((0,_util__WEBPACK_IMPORTED_MODULE_3__.checkIntersectionObserver)()) {
    lazyNumbers.forEach(function (lazyUnit) {
      initNumberAnimation(lazyUnit);
      /**
       * pass the element and function to actionOnScroll
       * to animate when element is intersecting
       */

      (0,_action_on_scroll__WEBPACK_IMPORTED_MODULE_2__.actionOnScroll)(lazyUnit, runNumberAnimation);
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  launchFn: init,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/devcorate/devcorate.js":
/*!*********************************************!*\
  !*** ./src/patterns/devcorate/devcorate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "devcorate": () => (/* binding */ devcorate)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");




/**
 * Devcorate
 *
 * @module patterns/devcorate/devcorate
 * @author Web Development
 * @copyright City, University of London 2018
 */

/**
 * Persist a query parameter to all same-site anchors inside an element.
 *
 * @param {HTMLElement} elem - An element containing anchors to decorate.
 * @param {string} param - The name of a query parameter.
 * @param {string} value - The value for the query parameter.
 */

function devcorate(elem, param, value) {
  Array.from(elem.querySelectorAll('a')).forEach(anchor => {
    if (anchor.origin === window.location.origin) {
      const parameters = anchor.search ? (0,_util__WEBPACK_IMPORTED_MODULE_1__.parametersToObject)(anchor.search) : {};
      parameters[param] = value;
      anchor.href = "".concat(anchor.origin).concat(anchor.pathname).concat((0,_util__WEBPACK_IMPORTED_MODULE_1__.objectToParameters)(parameters)).concat(anchor.hash);
    }
  });
}

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "parametersToObject": () => (/* binding */ parametersToObject),
/* harmony export */   "objectToParameters": () => (/* binding */ objectToParameters),
/* harmony export */   "gaEvent": () => (/* binding */ gaEvent),
/* harmony export */   "detectIE": () => (/* binding */ detectIE),
/* harmony export */   "checkIntersectionObserver": () => (/* binding */ checkIntersectionObserver)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);





const partialMatchFn = m => s => s.indexOf(m) < 0,
      fullMatchFn = m => s => s !== m;
/**
 * Remove a class name from an HTML element.
 *
 * @param {HTMLElement} elem - An HTML element.
 * @param {string} className - A string representing the class to remove.
 * @param {boolean} [removePartials] - If true, remove partially matching classes.
 */


function removeClass(elem, className, removePartials) {
  const matchFn = removePartials ? partialMatchFn(className) : fullMatchFn(className);
  elem.className = elem.className.split(/\s+/).filter(s => matchFn(s)).join(' ');
}
/**
 * Turn a query string into an object.
 *
 * @param {string} parameterString - An HTML query string.
 * @returns {object} An object containing the parameters.
 */

function parametersToObject(parameterString) {
  const parameters = {};
  parameterString.substr(1).split('&').forEach(parameter => {
    const [k, v] = parameter.split('=');
    parameters[k] = v;
  });
  return parameters;
}
/**
* Turn an object into a query string.
*
* @param {object} parameterObj - An object containing the parameters and their values.
* @returns {string} A string of the parameters.
*/

function objectToParameters(parameterObj) {
  if (Object.keys(parameterObj).length > 0) {
    let parameters = '?';

    for (const key in parameterObj) {
      parameters.length !== 1 && (parameters += '&');
      parameters += key + '=' + parameterObj[key];
    }

    return parameters;
  } else {
    return '';
  }
}
/**
 * Track a Google Analytics event.
 *
 * @param {string} event - The event key for Tag Manager.
 * @param {string} eventCategory - The event category.
 * @param {string} eventAction - The event action.
 * @param {string} [eventLabel] - The event label.
 * @param {number} [eventValue] - The event value.
 * @param {boolean} [nonInteractionHit] - Does this count as interacting with the page?
 */

function gaEvent(event, eventCategory, eventAction, eventLabel, eventValue, nonInteractionHit) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: event,
    eventCategory: eventCategory,
    eventAction: eventAction,
    eventLabel: eventLabel,
    eventValue: eventValue,
    nonInteractionHit: nonInteractionHit
  });
}
function detectIE() {
  const ua = window.navigator.userAgent,
        versionLength = 10,
        msie = ua.indexOf('MSIE '),
        msieVersionOffset = 5;

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + msieVersionOffset, ua.indexOf('.', msie)), versionLength);
  }

  const trident = ua.indexOf('Trident/'),
        tridentVersionOffset = 3;

  if (trident > 0) {
    // IE 11 => return version number
    let rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + tridentVersionOffset, ua.indexOf('.', rv)), versionLength);
  }

  const edge = ua.indexOf('Edge/'),
        edgeVersionOffset = 5;

  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + edgeVersionOffset, ua.indexOf('.', edge)), versionLength);
  } // other browser


  return false;
}
/**
 * Check if browser supports IntersectionObserver API
 *
 * @returns {Boolean} -
 */

function checkIntersectionObserver() {
  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    return true;
  } else {
    return false;
  }
}

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcity_lite"] = self["webpackChunkcity_lite"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core"], () => (__webpack_require__("./src/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map