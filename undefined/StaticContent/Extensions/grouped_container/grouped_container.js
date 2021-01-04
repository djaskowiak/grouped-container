define(["qlik"], function(__WEBPACK_EXTERNAL_MODULE_qlik__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qv-object-LayoutContainer div.qv-object-content-container {\r\n\toverflow: auto;\r\n}\r\n.qv-object-LayoutContainer td,\r\n.qv-object-LayoutContainer th {\r\n\tborder-top: 0px solid #fff;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-right: 1px solid #ddd;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tvertical-align: middle;\r\n\tcursor: default;\r\n\tfont-size: 12px;\r\n}\r\n.qv-object-LayoutContainer td.numeric {\r\n\ttext-align: right;\r\n}\r\n.qv-object-LayoutContainer button {\r\n\twidth: 100%;\r\n}\r\n\r\ndiv.container-image {\r\n    cursor: pointer;\r\n    display: block;\r\n    min-height: 100%; \r\n    min-width: 100%; \r\n    width:100%;\r\n    height:100%; \r\n    background-repeat: no-repeat;  \r\n    background-size: contain; \r\n    postion: relative;\r\n    box-sizing:border-box;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    vertical-align: ;\r\n}\r\n\r\n.grouped-container-main {\r\n  display:flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  height: calc(100% - 10px);\r\n  justify-content: space-between;\r\n  padding: 5px;\r\n}\r\n\r\n.grouped-container-flex-item {\r\n\twidth: calc(50%);\r\n  height: calc(100%);\r\n  overflow: hidden;\r\n  z-index: 2;\r\n\r\n\t&::after {\r\n\t\tcontent: '';\r\n\t\tpadding: 0.5em;\r\n\t  }\t\r\n}\r\n\r\n.grouped-container-background{\r\n  position: absolute;\r\n  height: calc(100% + 10px);\r\n  width: calc(100% + 20px);\r\n  top: 0px;\r\n  left: -10px;\r\n}\r\n\r\n/* disables box-shadow for scrollbar */\r\n.grouped-container-main .grouped-container-flex-item .qv-object-wrapper .qv-object .scroll-hint--towards-end {\r\n  box-shadow: none !important;\r\n}\r\n\r\n/* disable borders & shadows on .qv-object*/\r\n.grouped-container-main .grouped-container-flex-item .qv-object-wrapper .qv-object {\r\n  border: 0px !important;\r\n  border-radius: 0 !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\n/* disable border radius in obj */\r\n.qv-object-grouped_container .qv-inner-object{\r\n  border-radius: 0 !important;\r\n}\r\n\r\n.grouped-container-no-bg .qv-object-wrapper .qv-object .qv-inner-object {\r\n  background-color: rgba(0,0,0,0) !important;\r\n  background: none !important;\r\n}\r\n\r\n.grouped-container-no-bg .qv-object-wrapper .qv-object {\r\n  background-color: rgba(0,0,0,0) !important;\r\n  background: none !important;\r\n}\r\n\r\n.qv-object-grouped_container > .qv-inner-object {\r\n  padding: 0px !important;\r\n}\r\n\r\n.qv-object-grouped_container > .qv-inner-object > header{\r\n  padding-left: 10px !important;\r\n  padding-right: 10px !important;\r\n}\r\n\r\n.qv-object-grouped_container .requirements-wrapper {\r\n  position: absolute !important;\r\n}\r\n\r\n.qv-object-grouped_container .requirements {\r\n  text-align: center !important;\r\n}\r\n\r\n.grouped-container-info {\r\n  padding: 10px;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  right: auto; \r\n  white-space: unset; \r\n  text-overflow: unset;\r\n  overflow: unset;\r\n  line-height: normal;\r\n  margin: 10px;\r\n  font-size: 0.7rem !important;\r\n  border-radius: 3px;\r\n  color: #595959;\r\n  border: 1px solid #b3b3b3;\r\n  background-color: rgba(196, 207, 218, 0.1) !important;\r\n}\r\n\r\n.grouped-container-search-container {\r\n  display: flex;\r\n  position: static;\r\n  min-height: 37px;\r\n  border-bottom: 1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.lui-icon.lui-icon--search.grouped-container-search-icon {\r\n  margin: 10px 5px 10px 7px;\r\n}\r\n.lui-input.grouped-container-search {\r\n  width: 100%;\r\n  border: none !important;\r\n}\r\n\r\n.lui-input:focus.grouped-container-search {\r\n  border: none !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\n.grouped-container-search{ \r\n  margin: 5px;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _popover_ng_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.ng.html */ "./src/popover.ng.html");
/* harmony import */ var _popover_ng_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_popover_ng_html__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var qlik = window.require('qlik');



/* harmony default export */ __webpack_exports__["default"] = (['$scope', '$element', function ($scope, $element) {
  $scope.layoutId = $scope.layout.qInfo.qId;
  var app = qlik.currApp($scope);
  var id = app.id;
  var enigma = $scope.component.model.enigmaModel;
  var pictureUrl = $scope.layout.prop.background.picture;

  if (!pictureUrl.includes(id) && !pictureUrl.includes('/content/')) {
    var split = pictureUrl.split('/');
    split[2] = id;
    split = split.join('/');
    $scope.layout.prop.background.picture = split;
  }
  /* Save already rendered items */


  $scope.rendered = [];
  /* Saved last interval rendered items */

  $scope.renderedTemp = [];
  /*scope for changes in model */

  $scope.$watchCollection("layout.alternatives", function () {
    $scope.createLayout();
  });
  /* render charts in divs function */

  $scope.createLayout = function () {
    var thisInt = setInterval(myInt, 1000);

    function myInt() {
      var amountContainer = $element.find('.grouped-container-flex-item');

      if (amountContainer.length == $scope.layout.alternatives.length) {
        for (var i = 0; i < $scope.layout.alternatives.length; i++) {
          if ($scope.layout.alternatives[i].masterItem.split('~')[0].length > 1 && !$scope.rendered.includes($scope.layout.qInfo.qId + '~' + $scope.layout.alternatives[i].masterItem.split('~')[0] + '~' + i)) {
            app.getObject($scope.layout.qInfo.qId + i, $scope.layout.alternatives[i].masterItem.split('~')[0]);
            $scope.renderedTemp.push($scope.layout.qInfo.qId + '~' + $scope.layout.alternatives[i].masterItem.split('~')[0] + '~' + i);
          } else {
            if (!$scope.layout.alternatives[i].masterItem.split('~')[0] == '') {
              $scope.renderedTemp.push($scope.layout.qInfo.qId + '~' + $scope.layout.alternatives[i].masterItem.split('~')[0] + '~' + i);
            }
          }

          clearInterval(thisInt);
        }
        /* set rendered to last interval rendered items */


        $scope.rendered = $scope.renderedTemp;
        $scope.renderedTemp = [];
        clearInterval(thisInt);
        qlik.resize();
      }
    }
  }; //Scope CSS definition customCSS


  $scope.$watch('[layout.prop.customcss]', function () {
    try {
      if ($scope.layout.prop.customcss.switch) {
        if ($scope.layout.prop.customcss.css != '') {
          $scope.customcss = $scope.layout.prop.customcss.css.replace(/&/g, "div[tid='" + $scope.layout.qInfo.qId + "']");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, true); //Scope CSS definition for background

  $scope.$watch('[layout.prop.background]', function () {
    try {
      if ($scope.layout.prop.background.cssswitch) {
        if ($scope.layout.prop.background.css != '') {
          $scope.backgroundcss = JSON.parse($scope.layout.prop.background.css);
        }

        if ($scope.layout.prop.background.pictureswitch) {
          if ($scope.layout.prop.background.css == '') {
            $scope.backgroundcss = JSON.parse('{"background-image" : "url(' + $scope.layout.prop.background.picture + ')"}');
          } else {
            $scope.backgroundcss["background-image"] = 'url(' + $scope.layout.prop.background.picture + ')';
          }
        }
      } else {
        if ($scope.layout.prop.background.switchfxpick) {
          $scope.backgroundcss = {
            "background-color": $scope.layout.prop.background.colorfx
          };
        }

        if ($scope.layout.prop.background.switchfxpick == false) {
          if ($scope.layout.prop.background.color != null) {
            $scope.backgroundcss = {
              "background-color": $scope.layout.prop.background.color.color
            };
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, true);
  /* Add Master Items dialog and function */

  $scope.showAddMasterItemsDialog =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(event) {
      var items, ObjArray;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _utils_js__WEBPACK_IMPORTED_MODULE_0___default.a.getMasterObjectList();

            case 2:
              items = _context.sent;
              ObjArray = [];
              $scope.masterItemPopover = window.qvangularGlobal.getService("luiPopover").show({
                template: _popover_ng_html__WEBPACK_IMPORTED_MODULE_1___default.a,
                alignTo: event.target,
                closeOnEscape: true,
                closeOnOutside: true,
                input: {
                  searchTxt: '',
                  items: items,
                  pushConfig: function pushConfig() {
                    try {
                      if (ObjArray) {
                        $scope.onMasterVizSelected(ObjArray);
                      }
                    } finally {
                      $scope.masterItemPopover.close();
                    }
                  },
                  createArray: function createArray(value) {
                    var index = ObjArray.indexOf(value);

                    if (index > -1) {
                      ObjArray.splice(index, 1);
                    } else {
                      ObjArray.push(value);
                    }
                  }
                }
              });
              $scope.masterItemPopover.closed.then(function () {
                $(window).off('resize.popover', $scope.onMasterItemPopoverResize);
              });
              $(window).on('resize.popover', $scope.onMasterItemPopoverResize);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /* apply selected items */


  $scope.onMasterVizSelected = function (masterViz, i) {
    var params = {
      "qPatches": [],
      "qSoftPatch": false
    };
    var objWidth;
    var objHight;
    /* default item size */

    switch (masterViz.length) {
      case 1:
      case 2:
        objWidth = '100%';
        objHight = '50%';
        break;

      case 3:
        objWidth = '33.33%';
        objHight = '100%';
        break;

      case 4:
      case 5:
      case 6:
        objWidth = '33.33%';
        objHight = '50%';
        break;

      case 7:
      case 8:
      case 9:
        objWidth = '33.33%';
        objHight = '33.33%';
        break;

      case 10:
      case 11:
      case 12:
        objWidth = '33.33%';
        objHight = '25%';
        break;

      case 13:
      case 14:
      case 15:
      case 16:
        objWidth = '25%';
        objHight = '25%';
        break;

      default:
        objWidth = '20%';
        objHight = '20%';
        break;
    }
    /* create patch for all selected items */


    enigma.app.getObject($scope.layoutId).then(function (obj) {
      for (var _i = 0; _i < masterViz.length; _i++) {
        var value = {
          "masterItem": "".concat(masterViz[_i].value),
          "width": objWidth,
          "height": objHight,
          "style": "",
          "border": {
            "switch": false,
            "width": "1px",
            "color": {
              "index": -1,
              "color": "#595959"
            },
            "style": "solid",
            "radius": "0px"
          },
          "background": {
            "switch": false
          }
        };
        var temp_obj = {};
        temp_obj["qOp"] = "add";
        temp_obj["qPath"] = "/alternatives/" + _i;
        temp_obj["qValue"] = JSON.stringify(value);
        params["qPatches"].push(temp_obj);
      }

      obj.applyPatches(params).then(function () {
        $scope.showMasterVizSelect = false;
      });
    });
  };
}]);

/***/ }),

/***/ "./src/definition.js":
/*!***************************!*\
  !*** ./src/definition.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./utils */ "./src/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (utils) {
  var config = {
    type: "items",
    label: "Configuration",
    component: "items",
    items: {
      objects: {
        ref: "objectlist",
        label: "Objects",
        type: "items",
        items: {
          objects: {
            type: 'array',
            ref: 'alternatives',
            label: 'Objects',
            itemTitleRef: function itemTitleRef(masterItem) {
              return masterItem.masterItem.split('_')[1];
            },
            allowAdd: true,
            allowRemove: true,
            addTranslation: 'Add Objects',
            items: {
              obj: {
                label: 'Master Item',
                component: 'dropdown',
                type: 'array',
                ref: 'masterItem',
                defaultValue: '',
                options: function options() {
                  return utils.getMasterObjectList();
                }
              },
              width: {
                type: 'string',
                ref: 'width',
                label: 'Width',
                defaultValue: '50%',
                expression: 'optional'
              },
              height: {
                type: 'string',
                ref: 'height',
                label: 'Height',
                defaultValue: '50%',
                expression: 'optional'
              },
              paragraph1: {
                label: "In total, 100% height and 100% width can be divided between the objects.",
                component: 'text'
              },
              paragraph2: {
                label: "If an object is 100% in width, the following objects are displayed in the next row.",
                component: 'text'
              },
              paragraph3: {
                label: "If borders are used, these must be must be calculated out. e.g. \"calc (100% - 10px)\"",
                component: 'text'
              },
              advancedConfig: {
                component: "expandable-items",
                grouped: true,
                items: {
                  config: {
                    type: "items",
                    label: "Advanced Configuration",
                    items: {
                      cssStyle: {
                        type: 'string',
                        ref: 'style',
                        label: 'CSS style',
                        expression: 'optional'
                      },
                      paragraph1: {
                        label: "This definition will affect just the container that contains the chart. e.g. \"opacity: 0.5\"",
                        component: 'text'
                      },
                      objectBorderSwitch: {
                        type: 'boolean',
                        ref: 'border.switch',
                        label: 'Object Border',
                        component: 'switch',
                        options: [{
                          value: false,
                          label: 'disabled'
                        }, {
                          value: true,
                          label: 'enabled'
                        }],
                        defaultValue: false
                      },
                      objectBorderWidth: {
                        type: 'string',
                        ref: 'border.width',
                        label: 'Border Width',
                        expression: 'optional',
                        defaultValue: '1px',
                        show: function show(data) {
                          if (data.border.switch) {
                            return true;
                          }
                        }
                      },
                      objectBorderColor: {
                        type: 'object',
                        ref: 'border.color',
                        label: 'Border Color',
                        component: "color-picker",
                        defaultValue: {
                          index: -1,
                          color: "#595959"
                        },
                        show: function show(data) {
                          if (data.border.switch) {
                            return true;
                          }
                        }
                      },
                      objectBorderStyle: {
                        ref: "border.style",
                        label: "Border Type",
                        type: "string",
                        component: "dropdown",
                        options: [{
                          value: "solid",
                          label: "solid"
                        }, {
                          value: "dotted",
                          label: "dotted"
                        }, {
                          value: "dashed",
                          label: "dashed"
                        }, {
                          value: "double",
                          label: "double"
                        }, {
                          value: "groove",
                          label: "groove"
                        }, {
                          value: "ridge",
                          label: "ridge"
                        }, {
                          value: "inset",
                          label: "inset"
                        }, {
                          value: "outset",
                          label: "outset"
                        }],
                        defaultValue: "solid",
                        show: function show(data) {
                          if (data.border.switch) {
                            return true;
                          }
                        }
                      },
                      objectBorderRadius: {
                        type: 'string',
                        ref: 'border.radius',
                        label: 'Border Radius',
                        expression: 'optional',
                        defaultValue: '0px',
                        show: function show(data) {
                          if (data.border.switch) {
                            return true;
                          }
                        }
                      },
                      objectBackgroundSwitch: {
                        type: 'boolean',
                        ref: 'background.switch',
                        label: 'Disable default Object-Background',
                        component: 'switch',
                        options: [{
                          value: false,
                          label: 'disabled'
                        }, {
                          value: true,
                          label: 'enabled'
                        }],
                        defaultValue: false
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  var objectMobileSwitch = {
    type: 'boolean',
    ref: 'mobile.switch',
    label: 'Hide on mobile device',
    component: 'switch',
    options: [{
      value: false,
      label: 'disabled'
    }, {
      value: true,
      label: 'enabled'
    }],
    defaultValue: false
  };
  var backgroundswitch = {
    label: "Switch Background",
    component: "switch",
    ref: "prop.background.switch",
    type: "boolean",
    options: [{
      value: true,
      label: "On"
    }, {
      value: false,
      label: "Off"
    }],
    defaultValue: false
  };
  var backgroundswitchfxpick = {
    label: "Mode",
    component: "switch",
    ref: "prop.background.switchfxpick",
    type: "boolean",
    options: [{
      value: true,
      label: "Formula"
    }, {
      value: false,
      label: "Color Picker"
    }],
    defaultValue: false,
    show: function show(data) {
      if (data.prop.background.switch && data.prop.background.cssswitch != true) {
        return true;
      }
    }
  };
  var backgroundcolor = {
    ref: "prop.background.color",
    label: "Color",
    component: "color-picker",
    type: "object",
    defaultValue: {
      index: -1,
      color: "#fff"
    },
    show: function show(data) {
      if (data.prop.background.switch && data.prop.background.cssswitch != true && data.prop.background.switchfxpick != true) {
        return true;
      }
    }
  };
  var backgroundcolorfx = {
    ref: "prop.background.colorfx",
    label: "Color",
    type: "string",
    expression: "optional",
    default: "#ffffff",
    show: function show(data) {
      if (data.prop.background.switch && data.prop.background.cssswitch != true && data.prop.background.switchfxpick != false) {
        return true;
      }
    }
  };
  var backgroundcssswitch = {
    label: "Switch to CSS",
    component: "switch",
    ref: "prop.background.cssswitch",
    type: "boolean",
    options: [{
      value: true,
      label: "On"
    }, {
      value: false,
      label: "Off"
    }],
    defaultValue: false,
    show: function show(data) {
      if (data.prop.background.switch) {
        return true;
      }
    }
  };
  var backgroundpictureswitch = {
    label: "Switch to picture",
    component: "switch",
    ref: "prop.background.pictureswitch",
    type: "boolean",
    options: [{
      value: true,
      label: "On"
    }, {
      value: false,
      label: "Off"
    }],
    defaultValue: false,
    show: function show(data) {
      if (data.prop.background.cssswitch) {
        return true;
      }
    }
  };
  var backgroundpicture = {
    label: "Picture",
    component: "media",
    ref: "prop.background.picture",
    type: "string",
    layoutRef: "prop.background.picture",
    show: function show(data) {
      if (data.prop.background.pictureswitch && data.prop.background.cssswitch) {
        return true;
      }
    }
  };
  var paragraphbackground = {
    label: "You can use a picture and the CSS definition to configure the style of the picture. (e.g. \"background-repeat\" : \"round\")",
    component: 'text',
    show: function show(data) {
      if (data.prop.background.pictureswitch && data.prop.background.cssswitch) {
        return true;
      }
    }
  };
  var backgroundcss = {
    label: "CSS Definition",
    ref: "prop.background.css",
    type: "string",
    expression: "optional",
    defaultValue: "",
    show: function show(data) {
      if (data.prop.background.cssswitch) {
        return true;
      }
    }
  };
  var customcssswitch = {
    label: "Enable custom CSS",
    component: "switch",
    ref: "prop.customcss.switch",
    type: "boolean",
    options: [{
      value: true,
      label: "On"
    }, {
      value: false,
      label: "Off"
    }],
    defaultValue: false
  };
  var customcsscss = {
    label: "Custom CSS definition",
    component: "textarea",
    ref: "prop.customcss.css",
    type: "string",
    expression: "optional",
    defaultValue: "",
    show: function show(data) {
      if (data.prop.customcss.switch) {
        return true;
      }
    }
  };
  var aboutDefinition = {
    component: 'items',
    label: 'About',
    items: {
      header: {
        label: 'Grouped Container',
        style: 'header',
        component: 'text'
      },
      paragraph1: {
        label: "This extension will help you to group Qlik objects within a visual container.",
        component: 'text'
      },
      paragraph2: {
        label: 'This extension was created by Dennis Jaskowiak.',
        component: 'text'
      },
      paragraph3: {
        label: 'Version: 1.0.1',
        component: 'text'
      }
    }
  };
  var appearance = {
    uses: "settings",
    items: {
      general: {
        items: {
          showTitles: {
            defaultValue: false
          },
          details: {
            show: false
          }
        }
      },
      background: {
        type: "items",
        label: "Background",
        items: {
          backgroundswitch: backgroundswitch,
          backgroundswitchfxpick: backgroundswitchfxpick,
          backgroundcolor: backgroundcolor,
          backgroundcolorfx: backgroundcolorfx,
          backgroundcssswitch: backgroundcssswitch,
          backgroundcss: backgroundcss,
          paragraph1: {
            label: "You can add CSS definitions for the background formated as JSON. e.g. ",
            component: 'text',
            show: function show(data) {
              if (data.prop.background.cssswitch) {
                return true;
              }
            }
          },
          paragraph2: {
            label: "='{\"background-size\" : \"cover\", \"background-position\" : \"center\"}'",
            component: 'text',
            show: function show(data) {
              if (data.prop.background.cssswitch) {
                return true;
              }
            }
          },
          backgroundpictureswitch: backgroundpictureswitch,
          backgroundpicture: backgroundpicture,
          paragraphbackground: paragraphbackground
        }
      },
      customCSS: {
        type: "items",
        label: "Custom object CSS",
        items: {
          customcssswitch: customcssswitch,
          customcsscss: customcsscss,
          paragraph: {
            label: 'You can write pure CSS code. Use "&" as selector to point to this particular object (div[tid="ID"]).',
            component: 'text'
          },
          paragraph1: {
            label: 'Example: & .qv-inner-object {border: 2px solid green; border-radius: 20px;} ',
            component: 'text'
          }
        }
      },
      Mobile: {
        type: "items",
        label: "Mobile options",
        items: {
          objectMobileSwitch: objectMobileSwitch,
          paragraph1: {
            label: "This option will hide the object on mobile devices (e.g. smartphones).",
            component: 'text'
          }
        }
      }
    }
  };
  var addons = {
    uses: "addons",
    items: {
      dataHandling: {
        uses: "dataHandling"
      }
    }
  };
  return {
    type: "items",
    component: "accordion",
    items: {
      config: config,
      appearance: appearance,
      addons: addons,
      about: aboutDefinition
    }
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_properties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-properties.js */ "./src/initial-properties.js");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.html */ "./src/template.html");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _definition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definition.js */ "./src/definition.js");
/* harmony import */ var _definition_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_definition_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
var qlik = window.require('qlik');

var $ = window.require('jquery');





 // eslint-disable-line no-unused-vars

/* harmony default export */ __webpack_exports__["default"] = ({
  initialProperties: _initial_properties_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  template: _template_html__WEBPACK_IMPORTED_MODULE_1___default.a,
  definition: _definition_js__WEBPACK_IMPORTED_MODULE_2___default.a,
  controller: _controller_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  support: {
    snapshot: false,
    export: false,
    exportData: false
  },
  paint: function paint($element, layout) {
    var app = qlik.currApp(this);
    var $scope = this.$scope;
    this.$scope.isInEdit = this.options.interactionState == 2;
    $scope.mobileMode = this.options.layoutMode == 7; //Display welcome message

    $scope.init = false;

    if (layout.mobile.switch && $scope.mobileMode) {
      $("div[tid= \"".concat(layout.qInfo.qId, "\"]")).hide();
    } else {
      $("div[tid= \"".concat(layout.qInfo.qId, "\"]")).show();
    }

    if (layout.alternatives.length == 0) {
      $scope.init = true;
    } //setup scope.table


    if (!this.$scope.alternatives) {
      this.$scope.alternatives = layout.alternatives;
    }

    this.$scope.qId = layout.qInfo.qId;
    return qlik.Promise.resolve();
  }
});

/***/ }),

/***/ "./src/initial-properties.js":
/*!***********************************!*\
  !*** ./src/initial-properties.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  alternatives: [],
  qHyperCubeDef: {
    qDimensions: [],
    qMeasures: [],
    qInitialDataFetch: [{
      qWidth: 10,
      qHeight: 50
    }]
  }
});

/***/ }),

/***/ "./src/popover.ng.html":
/*!*****************************!*\
  !*** ./src/popover.ng.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* eslint-disable */\n<lui-popover x-arrow=\"arrow\" class=\"qsc-dropdown\">\n  <lui-popover-body>\n    <div class=\"grouped-container-search-container\">\n\t\t\t<span class=\"lui-icon  lui-icon--search grouped-container-search-icon\" aria-hidden=\"false\"></span>\n\t\t\t<input class=\"lui-input grouped-container-search\" ng-model=\"input.searchTxt\" placeholder=\"Search for Master items\"></input>\n    </div>\n    <ul class=\"lui-list\" style=\"white-space: nowrap;\">\n      <li ng-repeat=\"item in input.items | filter:input.searchTxt\" class=\"lui-list__item  lui-list__action\"\n        style=\"align-items: center; padding-left: 5px;\">\n        <label class=\"lui-checkbox grouped-container-MV-items\">\n          <input class=\"lui-checkbox__input grouped-container-MV-items\" ng-click=\"createArray(item);\" type=\"checkbox\" aria-label=\"Label\" />\n          <div class=\"lui-checkbox__check-wrap\" style=\"text-overflow: ellipsis; overflow: hidden; max-width: 198px;\">\n            <span class=\"lui-checkbox__check\"></span>\n            <span class=\"lui-list__text\">{{item.label}}</span>\n          </div>\n        </label>\n      </li>\n    </ul>\n    <button class=\"lui-button\" ng-click=\"pushConfig(); $event.stopPropagation();\"\n      style=\"margin:2px; display:block; width: calc(100% - 4px); color: #fff; background-color: #009845;\">\n      <span class=\"lui-button__icon  lui-icon  lui-icon--plus\" style=\"position: absolute; left: 11px;\"></span>\n      Add Items\n    </button>\n  </lui-popover-body>\n</lui-popover>";

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/template.html":
/*!***************************!*\
  !*** ./src/template.html ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style id=\"{{layout.qInfo.qId}}-css\">\r\n  {{layout.prop.customcss.switch == true ? customcss : ''}}\r\n  {{layout.showTitles == false ? 'div[tid=\"' + qId + '\"] .object-wrapper > .qv-object-wrapper > .qv-object > .qv-inner-object > .qv-object-header {display:none!important;}' : ''}}\r\n</style>\r\n<div qv-requirements=\"\" ng-if=\"init\" class=\"requirements-wrapper\">\r\n    <div class=\"requirements\" style=\"display: inline-table; padding-bottom: 0px;\">\r\n        <img src=\"/extensions/grouped_container/grouped.png\" style=\"width: 35%;\"></img>\r\n        <div class=\"grouped-container-info\">\r\n        <button ng-if=\"init\" class=\"add-button lui-button\" ng-click=\"showAddMasterItemsDialog($event)\" style=\"background-color: white;\">Select Master items</button>\r\n        <hr><b>Select</b> and <b>add</b> required Master items. All items will be <b>positioned automatically</b>. You can change position and size in the <b>\"Configuration-panel\"</b>. In Total <b>width and heigth</b> shouldn't exceed 100%. Otherwise the object is <b>unvisible</b>.</div>\r\n    </div>\r\n</div>\r\n<div class=\"grouped-container-background\" ng-if=\"layout.prop.background.switch == true\" ng-style=\"backgroundcss\"></div>\r\n<div qv-extension class=\"grouped-container-main\" ng-if=\"(layout.mobile.switch == false || mobileMode == false)\" style=\"{{layout.sytleContainer}}\">\r\n  <div id=\"{{qId}}{{$index}}\" style=\"\r\n  width:{{div.width}};\r\n  height:{{div.height}};\r\n  border-width:{{div.border.switch == true ? div.border.width : ''}};\r\n  border-color:{{div.border.switch == true ? div.border.color.color : ''}};\r\n  border-style:{{div.border.switch == true ? div.border.style : ''}};\r\n  border-radius:{{div.border.switch == true ? div.border.radius : ''}};\r\n  {{div.style}}\"\r\n  class=\"grouped-container-flex-item {{div.background.switch == true ? 'grouped-container-no-bg' : ''}}\" ng-repeat=\"div in layout.alternatives track by $index\">\r\n</div>\r\n</div>\r\n</div>";

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! qlik */ "qlik")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (qlik) {
  return {
    getMasterObjectList: function getMasterObjectList() {
      var self = this;
      var app = qlik.currApp(this);
      return new Promise(function (resolve, reject) {
        app.getList('masterobject').then(function (model) {
          app.destroySessionObject(model.layout.qInfo.qId);
          var supportedMasterItems = model.layout.qAppObjectList.qItems;

          if (!supportedMasterItems || supportedMasterItems.length === 0) {
            return resolve([{
              value: '',
              label: 'No MasterObjects',
              visualization: ''
            }]);
          }

          supportedMasterItems.sort(function (item1, item2) {
            return item1.qMeta.title < item2.qMeta.title ? -1 : 1;
          });
          return resolve(supportedMasterItems.map(function (item) {
            return {
              value: item.qInfo.qId + '~' + item.qMeta.title,
              label: item.qMeta.title,
              visualization: item.qData.visualization
            };
          }));
        });
      });
    }
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "qlik":
/*!*******************************************************************************!*\
  !*** external {"amd":"qlik","commonjs":"qlik","commonjs2":"qlik","root":"_"} ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_qlik__;

/***/ })

/******/ })});;
//# sourceMappingURL=grouped_container.js.map