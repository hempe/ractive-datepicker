(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RactiveDatepicker"] = factory();
	else
		root["RactiveDatepicker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(17);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3),
    now = __webpack_require__(22),
    toNumber = __webpack_require__(23);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	global.Ractive.events.hover = factory();
}(this, function () { 'use strict';

	var testDiv = typeof document !== 'undefined' ? document.createElement('div') : {};

	var hover = undefined;

	if (testDiv.onmouseenter !== undefined) {
		// Using native mouseenter/mouseleave events
		hover = function (node, fire) {
			function mouseenterHandler(original) {
				fire({ node: node, original: original, hover: true });
			}

			function mouseleaveHandler(original) {
				fire({ node: node, original: original, hover: false });
			}

			node.addEventListener('mouseenter', mouseenterHandler, false);
			node.addEventListener('mouseleave', mouseleaveHandler, false);

			return {
				teardown: function teardown() {
					node.removeEventListener('mouseenter', mouseenterHandler, false);
					node.removeEventListener('mouseleave', mouseleaveHandler, false);
				}
			};
		};
	} else {
		// using mouseover/mouseout
		hover = function (node, fire) {
			function mouseoverHandler(original) {
				if (node.contains(original.relatedTarget)) return;
				fire({ node: node, original: original, hover: true });
			}

			function mouseoutHandler(original) {
				if (node.contains(original.relatedTarget)) return;
				fire({ node: node, original: original, hover: false });
			}

			node.addEventListener('mouseover', mouseoverHandler, false);
			node.addEventListener('mouseout', mouseoutHandler, false);

			return {
				teardown: function teardown() {
					node.removeEventListener('mouseover', mouseoverHandler, false);
					node.removeEventListener('mouseout', mouseoutHandler, false);
				}
			};
		};
	}

	var hover$1 = hover;

	return hover$1;

}));

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={"v":4,"t":[{"t":7,"e":"div","m":[{"n":"class","f":["ractive-datepicker ",{"t":2,"r":"class"}],"t":13},{"n":"style","f":[{"t":2,"r":"style"}],"t":13}],"f":[{"t":4,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"header","t":13},{"n":"class-range","f":[{"t":2,"r":"range"}],"t":13}],"f":[{"t":4,"f":[{"t":7,"e":"label","f":["Start"]}," ",{"t":7,"e":"div","m":[{"n":"class","f":"date","t":13},{"n":"class-active","f":[{"t":2,"x":{"r":["editing"],"s":"_0==\"date\""}}],"t":13},{"n":"click","f":{"x":{"r":["@this"],"s":"[_0.set(\"editing\",\"date\")]"}},"t":70}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":"year","t":13}],"f":[{"t":2,"x":{"r":["year","start"],"s":"_0(_1)"}}]}," ",{"t":7,"e":"span","m":[{"n":"class","f":"weekday","t":13}],"f":[{"t":2,"x":{"r":["weekday","start"],"s":"_0(_1)"}},","]}," ",{"t":7,"e":"div","f":[{"t":2,"x":{"r":["month","start"],"s":"_0(_1)"}}," ",{"t":2,"x":{"r":["start"],"s":"_0&&_0.getDate()"}}]}]}," ",{"t":4,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"time","t":13},{"n":"class-active","f":[{"t":2,"x":{"r":["editing"],"s":"_0==\"starttime\""}}],"t":13},{"n":"click","f":{"x":{"r":["@this"],"s":"[_0.set(\"editing\",\"starttime\")]"}},"t":70},{"f":{"n":"tooltip","a":["Edit start time"]},"t":71}],"f":[{"t":7,"e":"span","f":[{"t":2,"x":{"r":["time","start"],"s":"_0(_1)"}}]}]}],"n":50,"x":{"r":["mode"],"s":"_0==\"time\"||_0==\"datetime\""}}," ",{"t":7,"e":"br"}," ",{"t":7,"e":"label","f":["End"]}," ",{"t":7,"e":"div","m":[{"n":"class","f":"date","t":13},{"n":"class-active","f":[{"t":2,"x":{"r":["editing"],"s":"_0==\"date\"||_0==\"year\""}}],"t":13},{"n":"click","f":{"x":{"r":["@this"],"s":"[_0.set(\"editing\",\"date\")]"}},"t":70}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":"year","t":13}],"f":[{"t":2,"x":{"r":["year","end"],"s":"_1&&_0(_1)"}}]}," ",{"t":7,"e":"span","m":[{"n":"class","f":"weekday","t":13}],"f":[{"t":2,"x":{"r":["weekday","end"],"s":"_1&&_0(_1)+\",\"||\"---\""}}]}," ",{"t":7,"e":"div","f":[{"t":2,"x":{"r":["month","end"],"s":"_1&&_0(_1)"}}," ",{"t":2,"x":{"r":["end"],"s":"_0&&_0.getDate()"}}]}]}," ",{"t":4,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"time","t":13},{"n":"class-active","f":[{"t":2,"x":{"r":["editing"],"s":"_0==\"endtime\""}}],"t":13},{"n":"click","f":{"x":{"r":["@this"],"s":"[_0.set(\"editing\",\"endtime\")]"}},"t":70},{"f":{"n":"tooltip","a":["Edit end time"]},"t":71}],"f":[{"t":7,"e":"span","f":[{"t":2,"x":{"r":["time","end"],"s":"_1&&_0(_1)"}}]}]}],"n":50,"x":{"r":["mode"],"s":"_0==\"time\"||_0==\"datetime\""}}],"n":50,"r":"range"},{"t":4,"n":51,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"date","t":13},{"n":"class-active","f":[{"t":2,"x":{"r":["editing"],"s":"_0==\"date\"||_0==\"year\""}}],"t":13},{"n":"click","f":{"x":{"r":["@this"],"s":"[_0.set(\"editing\",\"date\")]"}},"t":70}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":"year","t":13}],"f":[{"t":2,"x":{"r":["year","date"],"s":"_0(_1)"}}]}," ",{"t":7,"e":"span","m":[{"n":"class","f":"weekday","t":13}],"f":[{"t":2,"x":{"r":["weekday","date"],"s":"_0(_1)"}},","]}," ",{"t":7,"e":"div","f":[{"t":2,"x":{"r":["month","date"],"s":"_0(_1)"}}," ",{"t":2,"x":{"r":["date"],"s":"_0 instanceof Date?_0.getDate():\"\""}}]}]}," ",{"t":4,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"time","t":13},{"n":"class-active","f":[{"t":2,"x":{"r":["editing"],"s":"_0==\"time\""}}],"t":13},{"n":"click","f":{"x":{"r":["@this"],"s":"[_0.set(\"editing\",\"time\")]"}},"t":70},{"f":{"n":"tooltip","a":["Edit time"]},"t":71}],"f":[{"t":7,"e":"span","f":[{"t":2,"x":{"r":["time","date"],"s":"_0(_1)"}}]}]}],"n":50,"x":{"r":["mode"],"s":"_0==\"time\"||_0==\"datetime\""}}],"l":1}]}],"n":51,"x":{"r":["showHeader"],"s":"_0===false"}}," ",{"t":7,"e":"div","m":[{"n":"class","f":"editor","t":13}],"f":[{"t":4,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"years","t":13}],"f":[{"t":19,"f":[{"t":4,"f":[{"t":7,"e":"div","m":[{"t":4,"f":[{"n":"class","f":"active","t":13}],"n":50,"x":{"r":["year","editing","."],"s":"_0(_1)==_2"}},{"n":"click","f":"setYear","t":70}],"f":[{"t":2,"r":"."}]}],"r":"years"}],"n":54,"z":[{"n":"editing","x":{"x":{"r":["@this","editing"],"s":"_0.get(_1.replace(\"year\",\"\")||\"date\")"}}}]}]}],"n":50,"x":{"r":["editing"],"s":"_0.indexOf(\"year\")>-1"}},{"t":4,"n":50,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"nav","t":13}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":"previous","t":13},{"n":"click","f":"decrementMonth","t":70}]}," ",{"t":7,"e":"div","m":[{"n":"class","f":"next","t":13},{"n":"click","f":"incrementMonth","t":70}]}]}," ",{"t":7,"e":"div","m":[{"n":"class","f":"monthyear","t":13}],"f":[{"t":2,"r":"currentMonth"}," ",{"t":7,"e":"span","m":[{"n":"click","f":{"x":{"r":["@this"],"s":"[_0.set(\"editing\",\"year\")]"}},"t":70},{"f":{"n":"tooltip","a":["Jump to specific year"]},"t":71}],"f":[{"t":2,"r":"currentYear"}]}]}," ",{"t":7,"e":"div","m":[{"n":"class","f":"days","t":13}],"f":[{"t":7,"e":"div","m":[{"n":"class","f":"weekdays","t":13}],"f":[{"t":4,"f":[{"t":7,"e":"div","f":[{"t":2,"r":"."}]}],"r":"daysOfWeek"}]}," ",{"t":7,"e":"div","m":[{"n":"class","f":"dates","t":13},{"n":"mouseleave","f":{"x":{"r":["@this"],"s":"[_0.set(\"ghostEnd\",null)]"}},"t":70}],"f":[{"t":4,"f":[{"t":19,"f":[{"t":4,"f":[{"t":19,"f":[{"t":7,"e":"div","m":[{"n":"class-start","f":[{"t":2,"x":{"r":["ghostEnd",".","mStart","end"],"s":"(_0||_3)&&_2.isSame(_1,\"day\")&&!_2.isSame(_3,\"day\")"}}],"t":13},{"n":"class-between","f":[{"t":2,"x":{"r":["end","mThis","start","ghostEnd"],"s":"_1.isBetween(_2,_0)||_1.isBetween(_2,_3)"}}],"t":13},{"n":"class-off","f":[{"t":2,"x":{"r":[".","current.month"],"s":"_0.getMonth()!==_1"}}],"t":13},{"n":"class-end","f":[{"t":2,"x":{"r":["mEnd","mGhostEnd",".","mThis","start"],"s":"(_0.isSame(_2,\"day\")||_1.isSame(_2,\"day\"))&&!_3.isSame(_4,\"day\")"}}],"t":13},{"n":"class-ghost","f":[{"t":2,"x":{"r":["ghostEnd","mThis","start","end"],"s":"!_1.isBefore(_2)&&(_1.isBetween(_2,_0)||_1.isSame(_0,\"day\"))&&!_1.isBetween(_2,_3)"}}],"t":13},{"n":"class-selected","f":[{"t":2,"x":{"r":["mThis","start","ghostEnd","end"],"s":"_0.isSame(_1,\"day\")&&!_2&&!_3"}}],"t":13},{"n":"hover","f":{"x":{"r":["@this","lastSet","mThis","start","."],"s":"[_0.set(\"ghostEnd\",_1==\"start\"&&_2.isAfter(_3)?_4:null)]"}},"t":70},{"n":"click","f":"setDate","t":70}],"f":[{"t":2,"x":{"r":["."],"s":"_0.getDate()"}}]}],"n":54,"z":[{"n":"mThis","x":{"x":{"r":["moment","."],"s":"_0(_1)"}}}]}],"r":"dates"}],"n":54,"z":[{"n":"mStart","x":{"x":{"r":["moment","start"],"s":"_0(_1)"}}},{"n":"mEnd","x":{"x":{"r":["moment","end"],"s":"_0(_1)"}}},{"n":"mGhostEnd","x":{"x":{"r":["moment","ghostEnd"],"s":"_0(_1)"}}}]}],"n":50,"r":"range"},{"t":4,"n":51,"f":[{"t":4,"f":[{"t":7,"e":"div","m":[{"n":"class-selected","f":[{"t":2,"x":{"r":["date","."],"s":"_0 instanceof Date&&_0.getFullYear()==_1.getFullYear()&&_0.getMonth()==_1.getMonth()&&_0.getDate()==_1.getDate()"}}],"t":13},{"n":"class-off","f":[{"t":2,"x":{"r":[".","current.month"],"s":"_0.getMonth()!==_1"}}],"t":13},{"n":"click","f":"setDate","t":70}],"f":[{"t":2,"x":{"r":["."],"s":"_0.getDate()"}}]}],"r":"dates"}],"l":1}]}]}],"x":{"r":["editing"],"s":"_0==\"date\""},"l":1},{"t":4,"n":50,"f":[" ",{"t":7,"e":"div","m":[{"n":"class","f":"clock","t":13}],"f":[{"t":19,"f":[{"t":7,"e":"div","m":[{"n":"class","f":"hours","t":13},{"n":"wheel-touchmove","f":{"n":"clockwheel","a":["setHours"]},"t":70},{"f":"preventOverscroll","t":71}],"f":[{"t":4,"f":[{"t":7,"e":"div","f":[{"t":2,"r":"."}]}],"r":"hours"}]}," ",{"t":7,"e":"span","m":[{"n":"class","f":"colon","t":13}],"f":[":"]}," ",{"t":7,"e":"div","m":[{"n":"class","f":"minutes","t":13},{"n":"wheel-touchmove","f":{"n":"clockwheel","a":["setMinutes"]},"t":70},{"f":"preventOverscroll","t":71}],"f":[{"t":4,"f":[{"t":7,"e":"div","f":[{"t":2,"x":{"r":["."],"s":"_0<10?\"0\"+_0:_0"}}]}],"r":"minutes"}]}," ",{"t":7,"e":"div","m":[{"n":"class","f":"meridiem","t":13}],"f":[{"t":7,"e":"span","m":[{"n":"class","f":"am","t":13},{"n":"class-selected","f":[{"t":2,"x":{"r":["meridiem"],"s":"_0==\"am\""}}],"t":13},{"n":"click","f":{"n":"setMeridiem","a":["am"]},"t":70}],"f":["AM"]}," ",{"t":7,"e":"span","m":[{"n":"class","f":"pm","t":13},{"n":"class-selected","f":[{"t":2,"x":{"r":["meridiem"],"s":"_0==\"pm\""}}],"t":13},{"n":"click","f":{"n":"setMeridiem","a":["pm"]},"t":70}],"f":["PM"]}]}],"n":54,"z":[{"n":"meridiem","x":{"x":{"r":["meridiem","@this","editing"],"s":"_0(_1.get(_2.replace(\"time\",\"\")))"}}}]}]}],"x":{"r":["editing"],"s":"_0.indexOf(\"time\")>-1"},"l":1}]}]}],"e":{}};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(24);

var win = window, doc = win.document;

function positionTooltip(event, anchor, tooltip) {

    // Keep the tooltip near where the mouse is
    var mousePos = {x: event.pageX, y: event.pageY};

    var tooltipWidth = tooltip.offsetWidth;
    var tooltipHeight = tooltip.offsetHeight;

    var top = mousePos.y - tooltip.offsetHeight - 5;
    var left = mousePos.x - 5;

    //if(mousePos.x > win.innerWidth*0.75)
        //left -= tooltipWidth;

    // account for the edges of the screen, no need to do left
    var topClip = top - tooltipHeight - 5;
    var rightClip = left + tooltipWidth - win.innerWidth;


    if(rightClip > 0)
        left -= tooltipWidth - 5;

    if(topClip < 0)
        top += tooltipHeight*2 - 5;

    tooltip.style.left = left + 'px';
    tooltip.style.top =  top + 'px';
}


function tooltipDecorator(node, content) {

    var tooltip, handlers, eventName;

    var start = function(event) {

        if(!content || content.length === 0)
            return;

        // Create the tooltip
        if(!tooltip)
        {
            tooltip = doc.createElement('div');
            tooltip.className = 'ractive-tooltip';
            tooltip.textContent = content;
        }

        positionTooltip(event, node, tooltip);

        doc.body.appendChild(tooltip);
    }, 

    move = function(event) {

        if(!tooltip) {
            start(event);
            return;
        }
        positionTooltip(event, node, tooltip);
    }, 

    end = function(event) {

        if(!tooltip || !tooltip.parentNode)
            return;

        tooltip.parentNode.removeChild(tooltip);
    };

    handlers = {
        mouseenter: start,
        touchstart: start,
        mousemove: move,
        touchmove: move,
        mouseleave: end,
        touchend: end
    };

    // Add event handlers to the node
    for(eventName in handlers) {
        if(handlers.hasOwnProperty(eventName)) {
            node.addEventListener(eventName, handlers[eventName], false);
        }
    }

    // Return an object with a `teardown()` method that removes the
    // event handlers when we no longer need them
    return {
        update: function(newContent) {
            content = newContent;

            if(tooltip)
                tooltip.textContent = content;

            if((!content || content.length === 0) && tooltip && tooltip.parentNode)
                tooltip.parentNode.removeChild(tooltip);
        },
        teardown: function() {
            if(tooltip && tooltip.parentNode)
            {
                tooltip.parentNode.removeChild(tooltip);
                tooltip = null;
            }
            for(eventName in handlers) {
                if(handlers.hasOwnProperty(eventName)) {
                    node.removeEventListener(eventName, handlers[eventName], false);
                }
            }
        }
    };
}

module.exports = tooltipDecorator;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/stylus-loader/index.js!./styles.styl", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/stylus-loader/index.js!./styles.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {


var win = window;
var doc = document;

module.exports = function(node, instance) {

    node.addEventListener('mouseenter', disableScroll);
    node.addEventListener('mouseleave', enableScroll);

    var contentHeight;

    function preventDefault(e) {

        e = e || win.event;
        if( (node.scrollTop <= 1 && e.deltaY < 0) ||
           (node.scrollTop >= contentHeight && e.deltaY > 0) ) {

            if (e.preventDefault)
                e.preventDefault();
            e.returnValue = false;
            return false;
        }
    }

    function disableScroll() {
        // cache height for perf and avoiding reflow/repaint
        contentHeight = node.scrollHeight - node.offsetHeight - 1;

        win.addEventListener('DOMMouseScroll', preventDefault, false);
        win.addEventListener('wheel', preventDefault); // modern standard
        win.addEventListener('mousewheel', preventDefault); // older browsers, IE
        doc.addEventListener('mousewheel', preventDefault);
        win.addEventListener('touchmove', preventDefault); // mobile
    }

    function enableScroll() {

        win.removeEventListener('DOMMouseScroll', preventDefault, false);

        win.removeEventListener('wheel', preventDefault); // modern standard
        win.removeEventListener('mousewheel', preventDefault); // older browsers, IE
        doc.removeEventListener('mousewheel', preventDefault);
        win.removeEventListener('touchmove', preventDefault); // mobile
    }

    return {
        teardown: function() {
            node.removeEventListener('mouseenter', disableScroll);
            node.removeEventListener('mouseleave', enableScroll);
        }
    }


}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


//default ease from ease.js
var ease = __webpack_require__(15);

/**
 * Simple and easy RAF animation function
 *
 * Example:
 *
 *    animate({
 *        duration: 1.8,
 *        step: step,
 *        complete: function() {
 *           //stuff
 *        }
 *    });
 *
 *     function step(progress) {
 *        // `progress` ranges from 0 to 1 —- 0 start, 1 is done
 *     }
 *
 *
 * @param ani Object
 */
function animate(params) {

    var duration = typeof params.duration == 'undefined' ? 0.3 : params.duration;
        duration *= 1000;
        end = +new Date() + duration;

    var request;

    var step = function() {

        var current = +new Date(),
            remaining = end - current;

        var rate = clamp(1 - remaining / duration, 0, 1);
        rate = params.ease ? params.ease(rate) : ease(rate);

        if (params.step)
            params.step(rate);

        if (remaining <= 0) {
            if (params.complete) {
                params.complete();
                //request = requestAnimationFrame(params.complete);
                return;
            }
        }

        request = requestAnimationFrame(step);
    };

    if(duration === 0)
        step();
    else
        request = requestAnimationFrame(step);

    return {
        cancel: function() {
            cancelAnimationFrame(request);
        }
    };

}

function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}


module.exports = animate;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".ractive-tooltip {\n  position: absolute;\n  display: table;\n  padding: 0.5em;\n  color: #fff;\n  background: #000;\n  box-shadow: 0 2px 2px rgba(0,0,0,0.1);\n  border-radius: 5px;\n  white-space: nowrap;\n  z-index: 99999;\n  font-style: normal;\n  text-transform: none;\n  pointer-events: none;\n}\n", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".ractive-datepicker {\n  display: inline-flex;\n  flex-direction: row;\n  background: #fff;\n}\n.ractive-datepicker,\n.ractive-datepicker *,\n.ractive-datepicker *:before,\n.ractive-datepicker *:after {\n  box-sizing: border-box;\n}\n.ractive-datepicker .header {\n  background: #333;\n  color: rgba(255,255,255,0.5);\n  padding: 2em;\n  min-width: 11em;\n  position: relative;\n  text-align: left;\n}\n.ractive-datepicker .header label {\n  font-size: 0.8em;\n  margin-bottom: 1em;\n  display: inline-block;\n  opacity: 0.5;\n}\n.ractive-datepicker .header > div {\n  cursor: pointer;\n}\n.ractive-datepicker .header.range .active:after {\n  content: none;\n}\n.ractive-datepicker .header .active {\n  color: #fff;\n  position: relative;\n}\n.ractive-datepicker .header .active:after {\n  content: '';\n  display: inline-block;\n  border: 10px solid transparent;\n  border-right-color: #fff;\n  position: absolute;\n  right: -2em;\n  top: 50%;\n  margin-top: -10px;\n}\n.ractive-datepicker .header .weekday {\n  font-size: 2em;\n}\n.ractive-datepicker .header .time {\n  margin-top: 1em;\n  margin-bottom: 2em;\n}\n.ractive-datepicker .header .time span {\n  display: inline-block;\n  border-bottom: 1px dashed currentColor;\n}\n.ractive-datepicker .editor {\n  flex: 1 1 66%;\n  padding: 2em;\n  position: relative;\n  user-select: none;\n}\n.ractive-datepicker .editor .years:after,\n.ractive-datepicker .editor .clock:after {\n  position: absolute;\n  content: '';\n  top: 1em;\n  left: 0;\n  right: 0;\n  bottom: 1em;\n  pointer-events: none;\n}\n.ractive-datepicker .editor .years:after {\n  background: linear-gradient(#fff, rgba(255,255,255,0), #fff);\n}\n.ractive-datepicker .editor .clock:after {\n  background: linear-gradient(#fff 20%, rgba(255,255,255,0), #fff 80%);\n}\n.ractive-datepicker .monthyear {\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 1em;\n}\n.ractive-datepicker .monthyear span {\n  cursor: pointer;\n  display: inline-block;\n  border-bottom: 1px dashed currentColor;\n}\n.ractive-datepicker .nav {\n  position: relative;\n}\n.ractive-datepicker .nav .next,\n.ractive-datepicker .nav .previous {\n  user-select: none;\n  position: absolute;\n  padding: 0.5em;\n  display: inline-block;\n  cursor: pointer;\n  top: -0.5em;\n}\n.ractive-datepicker .nav .previous {\n  left: 2.5em;\n}\n.ractive-datepicker .nav .previous:before {\n  content: '<';\n}\n.ractive-datepicker .nav .next {\n  right: 2.5em;\n}\n.ractive-datepicker .nav .next:before {\n  content: '>';\n}\n.ractive-datepicker .weekdays {\n  display: flex;\n  opacity: 0.5;\n  font-weight: bold;\n}\n.ractive-datepicker .dates > div,\n.ractive-datepicker .weekdays > div {\n  display: inline-block;\n  width: 3em;\n  height: 3em;\n  line-height: 3em;\n  text-align: center;\n}\n.ractive-datepicker .dates {\n  max-width: 21em;\n  margin-bottom: -0.5em;\n}\n.ractive-datepicker .years,\n.ractive-datepicker .clock {\n  width: 21em;\n  height: 21em;\n}\n.ractive-datepicker .dates {\n  user-select: none;\n}\n.ractive-datepicker .dates .selected,\n.ractive-datepicker .dates .start {\n  transition: border-radius 0.3s ease;\n}\n.ractive-datepicker .dates > div {\n  user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n.ractive-datepicker .dates > div:not(.between):not(.start):not(.end):not(.selected) {\n  cursor: pointer;\n  border-radius: 50%;\n}\n.ractive-datepicker .dates > div:not(.between):not(.start):not(.end):not(.selected):hover {\n  background: #f0f0f0;\n}\n.ractive-datepicker .dates .off:not(.ghost) {\n  opacity: 0.25;\n}\n.ractive-datepicker .dates .between {\n  background: #d8eff1;\n}\n.ractive-datepicker .dates .between.ghost {\n  background: rgba(216,239,241,0.25);\n}\n.ractive-datepicker .dates > div.selected,\n.ractive-datepicker .dates > div.start,\n.ractive-datepicker .dates > div.end {\n  background: #0097a7;\n  color: #fff;\n  border-radius: 50%;\n}\n.ractive-datepicker .dates > div.selected.ghost,\n.ractive-datepicker .dates > div.start.ghost,\n.ractive-datepicker .dates > div.end.ghost {\n  background: rgba(0,151,167,0.25);\n  color: inherit;\n  cursor: pointer;\n}\n.ractive-datepicker .dates .start {\n  border-radius: 50% 0 0 50% !important;\n}\n.ractive-datepicker .dates .end {\n  border-radius: 0 50% 50% 0 !important;\n}\n.ractive-datepicker .years {\n  overflow-y: scroll;\n  text-align: center;\n}\n.ractive-datepicker .years::-webkit-scrollbar {\n  display: none;\n}\n.ractive-datepicker .years div {\n  font-size: 1.4em;\n  margin: 1em 0;\n  cursor: pointer;\n}\n.ractive-datepicker .years div.selected {\n  font-weight: bold;\n  margin: 0.5em 0;\n  display: inline-block;\n  cursor: default;\n}\n.ractive-datepicker .clock {\n  display: flex;\n  flex-direction: row;\n  text-align: right;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  line-height: 1;\n}\n.ractive-datepicker .clock > div {\n  font-size: 1.5em;\n}\n.ractive-datepicker .clock .minutes,\n.ractive-datepicker .clock .hours {\n  overflow-y: scroll;\n  max-height: 22em;\n  user-select: none;\n  padding: 0 1em;\n  cursor: default;\n}\n.ractive-datepicker .clock .minutes::-webkit-scrollbar,\n.ractive-datepicker .clock .hours::-webkit-scrollbar {\n  display: none;\n}\n.ractive-datepicker .clock .minutes div,\n.ractive-datepicker .clock .hours div {\n  user-select: none;\n  cursor: default;\n  margin-bottom: 0.88em;\n}\n.ractive-datepicker .clock .minutes div:first-child {\n  margin-top: 11em;\n}\n.ractive-datepicker .clock .minutes div:last-child {\n  margin-bottom: 11em;\n}\n.ractive-datepicker .clock .hours div:first-child {\n  margin-top: 11em;\n}\n.ractive-datepicker .clock .hours div:last-child {\n  margin-bottom: 11em;\n}\n.ractive-datepicker .clock .meridiem {\n  cursor: pointer;\n}\n.ractive-datepicker .clock .meridiem span:not(.selected) {\n  opacity: 0.2;\n}\n@media (max-width: 700px) {\n  .ractive-datepicker {\n    flex-direction: column;\n    font-size: 0.8em;\n  }\n  .ractive-datepicker .header {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    padding: 1.5em;\n  }\n  .ractive-datepicker .header .weekday {\n    font-size: 1em;\n  }\n  .ractive-datepicker .header div {\n    display: inline;\n  }\n  .ractive-datepicker .header > div {\n    margin-top: 0 !important;\n    margin-right: 1em;\n    margin-bottom: 0;\n  }\n  .ractive-datepicker .header .active:after {\n    border-right-color: transparent;\n    border-bottom-color: #fff;\n    left: 50%;\n    right: auto;\n    bottom: -1.5em;\n    margin-top: 0;\n    margin-left: -10px;\n  }\n  .ractive-datepicker .editor {\n    flex: 1 1;\n  }\n}\n.ractive-datepicker.compact {\n  flex-direction: column;\n  font-size: 0.8em;\n}\n.ractive-datepicker.compact .header {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  padding: 1.5em;\n}\n.ractive-datepicker.compact .header .weekday {\n  font-size: 1em;\n}\n.ractive-datepicker.compact .header div {\n  display: inline;\n}\n.ractive-datepicker.compact .header > div {\n  margin-top: 0 !important;\n  margin-right: 1em;\n  margin-bottom: 0;\n}\n.ractive-datepicker.compact .header .active:after {\n  border-right-color: transparent;\n  border-bottom-color: #fff;\n  left: 50%;\n  right: auto;\n  bottom: -1.5em;\n  margin-top: 0;\n  margin-left: -10px;\n}\n.ractive-datepicker.compact .editor {\n  flex: 1 1;\n}\n", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports) {

function qinticInOut(t) {
    if ( ( t *= 2 ) < 1 ) return 0.5 * t * t * t * t * t
    return 0.5 * ( ( t -= 2 ) * t * t * t * t + 2 )
}

module.exports = qinticInOut

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(1),
    getRawTag = __webpack_require__(18),
    objectToString = __webpack_require__(19);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(1);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isObjectLike = __webpack_require__(20);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3),
    isSymbol = __webpack_require__(21);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!../../stylus-loader/index.js!./styles.styl", function() {
			var newContent = require("!!../../css-loader/index.js!../../stylus-loader/index.js!./styles.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


var win = window;
var doc = document;

__webpack_require__(10);

var localeStringOptions = {
    month: {month: 'long'},
    weekday: {weekday: 'short'},
    time: {hour: '2-digit', minute:'2-digit'},
};

var animate = __webpack_require__(12);
//var moment = require('moment');

var lang = ( navigator.language || navigator.browserLanguage ).slice( 0, 2 );
moment.lang(lang);

var debounce = __webpack_require__(5);
var isNil = __webpack_require__(6);


//var DateRange = require('util/DateRange');

module.exports = Ractive.extend({

    template: __webpack_require__(8),

    isolated: true,

    decorators: {
        preventOverscroll: __webpack_require__(11),
        tooltip: __webpack_require__(9),
    },

    events: {
        hover: __webpack_require__( 7 )
    },

    data: function() {
        return {

            // the selected date
            date: new Date(),

            // start/end dates if in range mode
            range: null, // 'day', 'week', 'month', 'year'
            start: null,
            end: null,

            // "date" or "datetime". Useful if you don't want to select a specific hour/minute.
            mode: 'datetime',

            // currently viewed year/month
            current: {
                year: 0,
                month: 0,
            },

            editing: 'date',

            years: Array.apply(0, Array(201)).map(function(a,i){ return 1900+i }),
            hours: [12,1,2,3,4,5,6,7,8,9,10,11],

            lastSet: 'end',

            /**
            * Increment minutes by this interval when setting time.
            * @default 1
            * @type integer
            */
            minuteIncrement: 1,

            moment: moment,

            // helpers

            year: function(d) {
                return d.getFullYear();
            },

            month: function(d) {
                return moment(d).format('MMMM');
            },
            
            time: function(d) {
                return moment(d).format('h:mm a')
            },

            weekday: function(d) {
                return moment(d).format('ddd');
            },

            meridiem: function(d) {
                if(d.getHours)
                    d = d.getHours();
                return d < 12 ? 'am' : 'pm';
            },

        }
    },

    computed: {

        // date computations

        currentMonth: function() {
            var current = this.get('current');
            if(current)
                return moment(new Date(current.year, current.month)).format('MMMM');
        },

        currentYear: function() {
            return this.get('current.year');
        },

        daysOfWeek: function() {

            var dow = moment.localeData()._weekdaysMin;
            var fdow = this.get('firstDayOfWeek')

            var firstDayOfWeek = isNil(fdow) ? moment.localeData().firstDayOfWeek() : fdow;

            if (firstDayOfWeek > 0 && firstDayOfWeek < 7) {
                return Array.prototype.concat(dow.slice(firstDayOfWeek), dow.slice(0, firstDayOfWeek));
            }

            return dow;
        },

        dates: function() {

            var current = this.get('current');
            var totalDays = new Date(current.year, current.month, 0).getDate(); // of month
            var firstDayOfMonth = new Date(current.year, current.month, 1).getDay(); // day of week the 1st is on
            var firstDayOfWeek = this.get('firstDayOfWeek'); // default 0, Sunday, configurable

            var days = [];

            if (firstDayOfWeek > 0 && firstDayOfWeek < 7) {
                firstDayOfMonth = firstDayOfMonth - firstDayOfWeek;
                firstDayOfMonth = firstDayOfMonth < 0 ? 7  + firstDayOfMonth : firstDayOfMonth;
            }

            for (var i = 0, j = 1 - firstDayOfMonth; i < 42; i++, j++)
                //days.push((i >= firstDayOfMonth & i < firstDayOfMonth + totalDays ? new Date(current.year, current.month, j) : ' '));
                days.push(new Date(current.year, current.month, j));

            return days;

        },

        // 0 - 60
        minutes: function() {
            var n = this.get('minuteIncrement');
            return Array.apply(0, Array(60/n)).map(function(a,i){ return n*i });
        },

    },

    onconfig: function() {

        var self = this;

        var date = self.get('date');
        var range = self.get('range');

        var start = self.get('start');
        var end = self.get('end');

        if(!date) {
            date = new Date();
            if(!range)
                self.set('date', date);
        }

        function isAfter(start, end) {
            return start.getTime() < end.getTime();
        }

        if(range) {
            if(!start) {
                start = date;
                self.set('start', start);
            }
            if(end === undefined || (end && !moment(start).isAfter(end))) {
                end = new Date(start.getTime() + 3*24*60*60*1000); // default to 3 days after
                self.set('end', end);
            }
        }

        // update current
        self.set('current.month', date.getMonth());
        self.set('current.year', date.getFullYear());

    },

    oninit: function() {
        var self = this;

        self.on('decrementMonth', function(details) {
            var current = this.get('current');
            current.month--;
            if(current.month < 0) {
                current.month = 11;
                current.year--;
            }
            this.set('current', current);
        });

        self.on('incrementMonth', function(details) {
            var current = this.get('current');
            current.month++;
            if(current.month > 11) {
                current.month = 0;
                current.year++;
            }
            this.set('current', current);
        });

        self.on('setDate', function(details) {

            var clicked = details.get();

            var current = self.get('current');
            var date = self.get('date');
            var range = self.get('range');
            var start = self.get('start');
            var end = self.get('end');
            
            var lastSet = self.get('lastSet');

            // store these so we can restore them later
            var hours = date.getHours();
            var minutes = date.getMinutes();

            if(range) {

                date = clicked;

                date.setHours(hours);
                date.setMinutes(minutes);


                if(lastSet == 'end' || moment(clicked).isBefore(start)) {

                    self.set('start', date);

                    self.fire('startChange');

                    self.set('current.year', clicked.getFullYear());
                    self.set('current.month', clicked.getMonth());
                    
                    self.set('end', null);
                    self.set('lastSet', 'start');

                } else {

                    self.set('lastSet', 'end');
                    self.set('end', date);
                    self.fire('endChange');
                    self.set('ghostEnd', null);

                }


            } else {

                date = clicked;

                date.setHours(hours);
                date.setMinutes(minutes);

                self.set('current.year', clicked.getFullYear());
                self.set('current.month', clicked.getMonth());

                self.set('date', date);

            }

        });

        self.on('setYear', function(details) {
            self.set('current.year', details.context);
            self.set('editing', 'date');
        });

        self.on('setMeridiem', function(details, meridiem) {
            var editing = self.get('editing').replace('time', '') || 'date';
            var date = self.get(editing);
            
            var hours = date.getHours();
            if(hours <= 12 && meridiem == 'pm')
                date.setHours(hours+12);
            else if(hours >= 12 && meridiem == 'am')
                date.setHours(hours-12);
            self.set(editing, date);
        });

        self.observe('editing', function(editing) {
            setTimeout(function() {
                if(editing.indexOf('year') > -1) {
                    var years = self.find('.years');
                    var activeYear = self.find('.years .active');
                    years.scrollTop = activeYear.offsetTop - years.offsetHeight/2;
                }
            });
        }, {init: false, defer: true});

        self.observe('mode', function(newMode) {

            var editing = self.get('editing');

            if(newMode == 'date' && editing == 'time')
                editing = 'date';

            if(newMode == 'time' && (editing == 'date' || editing == 'year'))
                editing = 'time';

            self.set('editing', editing);

        }, {defer: true});

        self.observe('start end', function() {
            self.set('ghostEnd', null);
        });


        /* --------------------- */
        // time editor stuff
        /* --------------------- */

        var animating = {};
        var meridiem = self.get('meridiem');

        function snap(node, method, value) {

            var startY = node.scrollTop;

            // no node, nothing to do
            if(!node) {
                return;
            }

            // grab the first div and use to size
            var div = node.querySelector('div');

            // the dom has been destroyed by the time the debounce
            // has happened, so just return
            if(!div)
                return;

            //console.log('snap() ', arguments);

            var styles = window.getComputedStyle(div);
            var divHeight =  div.offsetHeight + parseFloat(styles.marginBottom);

            var index;

            if(!isNil(value)) {

                // we're scrolling to a specific value passed in
                index = value;

                // account for > 12 hours (pm)
                if(method == 'setHours' && value >= 12)
                    index -= 12;

            } else {
                // figure out the closest div to where we scrolled
                index = Math.round(startY / divHeight);
            }

            if(index >= node.children.length)
                index = node.children.length - 1;

            div = node.children[index];

            var endY = div.offsetTop - divHeight - parseFloat(styles.marginTop)/2 - parseFloat(styles.marginBottom)/2;
            //var endY = divHeight*index + parseFloat(styles.marginBottom)/4;
            var deltaY = endY - startY;

            // block the animation on subsequent calls
            // from the scroll event handler
            // but don't block is we're calling it direclty
            // with a value
            if(animating[method] && isNil(value))
                return;

            animating[method] = animate({
                duration: 0.3,
                step: function(p) {
                    node.scrollTop = startY+deltaY*p;
                },
                complete: function() {
                    var editing = self.get('editing').replace('time', '') || 'date';
                    var date = self.get(editing);

                    var value = parseInt(div.textContent);

                    if(method == 'setHours') {
                        if(meridiem(value) == 'pm' && value !== 12)
                            value += 12;
                        if(meridiem(value) == 'am' && value == 12)
                            value = 0;
                    }

                    date[method](value);

                    self.set(editing, date);
                    animating[method] = false;
                    //console.log('complete: animating=', animating);
                }
            });

            animating[method].animating = true;

        }

        // needs to be debounced so that the UI is fully updated
        // defer: true doesn't count it on the obserer
        updateTimeEditors = debounce(updateTimeEditors, 10);

        // update scroll positions of clock editors when first viewed
        self.observe('editing', updateTimeEditors, {init: false, defer:true});
        // update scroll positions of clock editors when date changes
        self.observe('date', updateTimeEditors, {init: false});

        function updateTimeEditors() {

            if(self.get('editing').indexOf('time') < 0)
                return;

            for(var key in animating)
                if(animating[key])
                    return;

            var editing = self.get('editing').replace('time', '') || 'date';
            var date = self.get(editing);
            
            snap(self.find('.clock .hours'), 'setHours', date.getHours());
            snap(self.find('.clock .minutes'), 'setMinutes', date.getMinutes());
        }


        var debouncedSnap = debounce(snap, 250);

        self.on('clockwheel', function(details, method) {
            var event = details.original;

            for(var key in animating)
                if(animating[key].cancel)
                    animating[key].cancel()

            animating = {};

            debouncedSnap(details.node, method);
        });

    },

    // prevent computation errors for weird
    date: function() {
        var d = this.get('date');
        if(d instanceof Date)
            return d;
    }

});



/***/ })
/******/ ]);
});