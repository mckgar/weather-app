/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --background-color: #F2EFE9;\n  --header-color: #3F386B;\n  --button-color: #1183D0;\n  --image-background-color: #89B5D9;\n\n  --font-color-light: #F2EFE9;\n}\n\nbody {\n  width: 100vw;\n  background-color: var(--background-color);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#header {\n  width: 100vw;\n  padding: 0.5rem;\n  background-color: var(--header-color);\n  color: var(--font-color-light);\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n}\n\n#search-field {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n#search {\n  border-style: none;\n  border: 1px solid black;\n  width: 80%;\n  padding: 6px 1rem;\n  border-radius: 1000px;\n}\n\n#search-submit,\n#unit {\n  background-color: var(--button-color);\n  color: var(--font-color-light);\n  border: 1px solid black;\n  border-radius: 1000px;\n  padding: 6px 1rem;\n  text-align: center;\n\n  cursor: pointer;\n}\n\n#search-submit:active,\n#unit:active {\n  border: 1px solid var(--font-color-light);\n}\n\n#unit {\n  justify-self: end;\n  align-self: center;\n}\n\n#unit.imperial:before {\n  content: 'Imperial';\n}\n\n#unit.metric:before {\n  content: 'Metric';\n}\n\n#info {\n  width: 100vw;\n  padding: 0.5rem;\n  display: grid;\n  grid-template-columns: 5rem 10rem 10rem 3fr 10rem 10rem 5rem;\n  align-items: center;\n\n  border-bottom: 2px solid black;\n  background-color: var(--image-background-color);\n}\n\n#info .weather-symbol {\n  height: 5rem;\n  width: 5rem;\n}\n\n#info * {\n  text-align: center;\n}\n\n#location-name {\n  font-size: 2.8rem;\n}\n\n#alert-banner {\n  width: 100vw;\n  text-align: center;\n  border-bottom: 1px solid black;\n  background-color: red;\n}\n\n.forecast-card {\n  background-color: var(--header-color);\n  color: var(--font-color-light);\n  border: 2px solid black;\n}\n\n#hourly-forecast {\n  width: 90vw;\n  margin-top: 2rem;\n  /* border: 2px solid black; */\n  display: grid;\n  grid-template-columns: repeat(9, 1fr);\n  text-align: center;\n}\n\n#hourly-forecast .weather-symbol {\n  height: calc(90vw / 9);\n  border-bottom: 2px solid black;\n}\n\n.wind,\n.humidity,\n.max-temp,\n.min-temp {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 0 5px;\n}\n\n#daily-forecast {\n  width: 90vw;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  /* border: 2px solid black; */\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  text-align: center;\n}\n\n#daily-forecast .weather-symbol {\n  height: calc(90vw / 7);\n  border-bottom: 2px solid black;\n}\n\n.forecast-card + .forecast-card {\n  border-left: 0px solid black;\n}\n\n.forecast-card .time,\n.forecast-card .day {\n  border-bottom: 2px solid black;\n}\n\n.forecast-card img {\n  background-color: var(--image-background-color);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;EAC3B,uBAAuB;EACvB,uBAAuB;EACvB,iCAAiC;;EAEjC,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,yCAAyC;EACzC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,qCAAqC;EACrC,8BAA8B;EAC9B,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,UAAU;EACV,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;;EAEE,qCAAqC;EACrC,8BAA8B;EAC9B,uBAAuB;EACvB,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;;EAElB,eAAe;AACjB;;AAEA;;EAEE,yCAAyC;AAC3C;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,4DAA4D;EAC5D,mBAAmB;;EAEnB,8BAA8B;EAC9B,+CAA+C;AACjD;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;EACE,qCAAqC;EACrC,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,6BAA6B;EAC7B,aAAa;EACb,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;;;;EAIE,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,6BAA6B;EAC7B,aAAa;EACb,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;;EAEE,8BAA8B;AAChC;;AAEA;EACE,+CAA+C;AACjD","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --background-color: #F2EFE9;\n  --header-color: #3F386B;\n  --button-color: #1183D0;\n  --image-background-color: #89B5D9;\n\n  --font-color-light: #F2EFE9;\n}\n\nbody {\n  width: 100vw;\n  background-color: var(--background-color);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#header {\n  width: 100vw;\n  padding: 0.5rem;\n  background-color: var(--header-color);\n  color: var(--font-color-light);\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n}\n\n#search-field {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n#search {\n  border-style: none;\n  border: 1px solid black;\n  width: 80%;\n  padding: 6px 1rem;\n  border-radius: 1000px;\n}\n\n#search-submit,\n#unit {\n  background-color: var(--button-color);\n  color: var(--font-color-light);\n  border: 1px solid black;\n  border-radius: 1000px;\n  padding: 6px 1rem;\n  text-align: center;\n\n  cursor: pointer;\n}\n\n#search-submit:active,\n#unit:active {\n  border: 1px solid var(--font-color-light);\n}\n\n#unit {\n  justify-self: end;\n  align-self: center;\n}\n\n#unit.imperial:before {\n  content: 'Imperial';\n}\n\n#unit.metric:before {\n  content: 'Metric';\n}\n\n#info {\n  width: 100vw;\n  padding: 0.5rem;\n  display: grid;\n  grid-template-columns: 5rem 10rem 10rem 3fr 10rem 10rem 5rem;\n  align-items: center;\n\n  border-bottom: 2px solid black;\n  background-color: var(--image-background-color);\n}\n\n#info .weather-symbol {\n  height: 5rem;\n  width: 5rem;\n}\n\n#info * {\n  text-align: center;\n}\n\n#location-name {\n  font-size: 2.8rem;\n}\n\n#alert-banner {\n  width: 100vw;\n  text-align: center;\n  border-bottom: 1px solid black;\n  background-color: red;\n}\n\n.forecast-card {\n  background-color: var(--header-color);\n  color: var(--font-color-light);\n  border: 2px solid black;\n}\n\n#hourly-forecast {\n  width: 90vw;\n  margin-top: 2rem;\n  /* border: 2px solid black; */\n  display: grid;\n  grid-template-columns: repeat(9, 1fr);\n  text-align: center;\n}\n\n#hourly-forecast .weather-symbol {\n  height: calc(90vw / 9);\n  border-bottom: 2px solid black;\n}\n\n.wind,\n.humidity,\n.max-temp,\n.min-temp {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 0 5px;\n}\n\n#daily-forecast {\n  width: 90vw;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  /* border: 2px solid black; */\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  text-align: center;\n}\n\n#daily-forecast .weather-symbol {\n  height: calc(90vw / 7);\n  border-bottom: 2px solid black;\n}\n\n.forecast-card + .forecast-card {\n  border-left: 0px solid black;\n}\n\n.forecast-card .time,\n.forecast-card .day {\n  border-bottom: 2px solid black;\n}\n\n.forecast-card img {\n  background-color: var(--image-background-color);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/display-controller.js":
/*!***********************************!*\
  !*** ./src/display-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayController = (() => {
  const searchBar = () => {
    const searchField = document.createElement('div');
    searchField.id = 'search-field';

    const search = document.createElement('input');
    search.type = 'search';
    search.name = 'search';
    search.id = 'search';
    search.placeholder = 'Denver, US';

    const submit = document.createElement('div');
    submit.id = 'search-submit';
    submit.textContent = 'SUBMIT';

    searchField.appendChild(search);
    searchField.appendChild(submit);
    return searchField;
  };
  const unitToggleBtn = () => {
    const unitToggle = document.createElement('div');
    unitToggle.id = 'unit';
    unitToggle.classList.add('F');
    unitToggle.classList.add('mph');
    unitToggle.classList.add('imperial');
    unitToggle.addEventListener('click', () => {
      unitToggle.classList.toggle('F');
      unitToggle.classList.toggle('mph');
      unitToggle.classList.toggle('imperial');
      unitToggle.classList.toggle('C');
      unitToggle.classList.toggle('m/s');
      unitToggle.classList.toggle('metric');
    });
    return unitToggle;
  };
  const quickInfoBar = (weather, icon, weatherDescr, location, temp, min, max, date) => {
    const unit = document.querySelector('#unit').classList[0];

    const infoBar = document.createElement('div');
    infoBar.id = 'info';
    infoBar.classList.add(weather);
    const weatherSymbol = document.createElement('img');
    weatherSymbol.classList.add('weather-symbol');
    weatherSymbol.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherSymbol.alt = weatherDescr;
    const description = document.createElement('div');
    description.classList.add('weather-description');
    description.textContent = weatherDescr;
    const name = document.createElement('h2');
    name.id = 'location-name';
    name.textContent = location;
    const temperature = document.createElement('div');
    temperature.classList.add('current-temperature');
    temperature.textContent = `${temp} °${unit}`;

    const tempHigh = document.createElement('div');
    tempHigh.classList.add('max-temp');
    const tempHighLabel = document.createElement('div');
    tempHighLabel.classList.add('label');
    tempHighLabel.textContent = 'High:';
    const tempHighValue = document.createElement('div');
    tempHighValue.classList.add('value');
    tempHighValue.textContent = `${max} °${unit}`;
    tempHigh.appendChild(tempHighLabel);
    tempHigh.appendChild(tempHighValue);

    const tempLow = document.createElement('div');
    tempLow.classList.add('min-temp');
    const tempLowLabel = document.createElement('div');
    tempLowLabel.classList.add('label');
    tempLowLabel.textContent = 'Low:';
    const tempLowValue = document.createElement('div');
    tempLowValue.classList.add('value');
    tempLowValue.textContent = `${min} °${unit}`;
    tempLow.appendChild(tempLowLabel);
    tempLow.appendChild(tempLowValue);

    const day = document.createElement('div');
    day.classList.add('time');
    day.textContent = date;

    const tempExtrema = document.createElement('div');
    tempExtrema.classList.add('extrema-temperature');
    tempExtrema.appendChild(tempHigh);
    tempExtrema.appendChild(tempLow);

    infoBar.appendChild(weatherSymbol);
    infoBar.appendChild(description);
    infoBar.appendChild(tempExtrema);
    infoBar.appendChild(name);
    infoBar.appendChild(temperature);
    infoBar.appendChild(day);
    return infoBar;
  };
  const createTopHeader = () => {
    const header = document.createElement('div');
    header.id = 'header';
    const logo = document.createElement('h1');
    logo.textContent = 'Weather App';
    const search = searchBar();
    const unitToggle = unitToggleBtn();

    header.appendChild(logo);
    header.appendChild(search);
    header.appendChild(unitToggle);
    return header;
  };
  const createInfoHeader = (current, min, max) => {
    const offset = new Date().getTimezoneOffset() * 60;
    let time = new Date((current.dt + offset + current.timezone) * 1000);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let timeAbrv;
    if (hours > 12) {
      timeAbrv = 'PM';
      hours %= 12;
    } else {
      timeAbrv = 'AM';
    }
    if (hours === 0) {
      hours = 12;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    time = `${hours}:${minutes} ${timeAbrv}`;
    const info = quickInfoBar(
      current.weather[0].main,
      current.weather[0].icon,
      current.weather[0].description,
      `${current.name}, ${current.sys.country}`,
      current.main.temp,
      min,
      max,
      time,
    );
    return info;
  };
  const createAlert = (alert) => {
    const alertBanner = document.createElement('div');
    alertBanner.id = 'alert-banner';
    alertBanner.textContent = alert[0].event;
    return alertBanner;
  };
  const forecastCard = (time, weather, icon, weatherDescr, low, high) => {
    const unit = document.querySelector('#unit').classList[0];

    const card = document.createElement('div');
    card.classList.add('forecast-card', 'daily');
    const date = document.createElement('div');
    date.classList.add('day');
    const day = new Date(time * 1000).getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    date.textContent = days[day];
    const weatherSymbol = document.createElement('img');
    weatherSymbol.classList.add(weather, 'weather-symbol');
    weatherSymbol.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    weatherSymbol.alt = weatherDescr;
    const weatherDescription = document.createElement('div');
    weatherDescription.classList.add('weather-description');
    weatherDescription.textContent = weatherDescr;

    const tempHigh = document.createElement('div');
    tempHigh.classList.add('max-temp');
    const tempHighLabel = document.createElement('div');
    tempHighLabel.classList.add('label');
    tempHighLabel.textContent = 'High:';
    const tempHighValue = document.createElement('div');
    tempHighValue.classList.add('value');
    tempHighValue.textContent = `${high} °${unit}`;
    tempHigh.appendChild(tempHighLabel);
    tempHigh.appendChild(tempHighValue);

    const tempLow = document.createElement('div');
    tempLow.classList.add('min-temp');
    const tempLowLabel = document.createElement('div');
    tempLowLabel.classList.add('label');
    tempLowLabel.textContent = 'Low:';
    const tempLowValue = document.createElement('div');
    tempLowValue.classList.add('value');
    tempLowValue.textContent = `${low} °${unit}`;
    tempLow.appendChild(tempLowLabel);
    tempLow.appendChild(tempLowValue);

    card.appendChild(date);
    card.appendChild(weatherSymbol);
    card.appendChild(weatherDescription);
    card.appendChild(tempHigh);
    card.appendChild(tempLow);
    return card;
  };
  const sevenDayForecast = (week) => {
    const forecast = document.createElement('div');
    forecast.id = 'daily-forecast';
    for (let i = 1; i < 8; i += 1) {
      const dayCard = forecastCard(
        week[i].dt,
        week[i].weather[0].main,
        week[i].weather[0].icon,
        week[i].weather[0].description,
        week[i].temp.min,
        week[i].temp.max,
      );
      forecast.appendChild(dayCard);
    }
    return forecast;
  };
  const windDegreesConvert = (degrees) => {
    let string;
    if (degrees > 348.75 || degrees <= 22.5) {
      string = 'N';
    } else if (degrees > 22.5 && degrees <= 67.5) {
      string = 'NE';
    } else if (degrees > 67.5 && degrees <= 112.5) {
      string = 'E';
    } else if (degrees > 112.5 && degrees <= 157.5) {
      string = 'SE';
    } else if (degrees > 157.5 && degrees <= 202.5) {
      string = 'S';
    } else if (degrees > 202.5 && degrees <= 247.5) {
      string = 'SW';
    } else if (degrees > 247.5 && degrees <= 292.5) {
      string = 'W';
    } else {
      string = 'NW';
    }
    return string;
  };
  const hourlyForecastCard = (hour) => {
    const unit = document.querySelector('#unit');

    const card = document.createElement('div');
    card.classList.add('forecast-card', 'hourly');
    const time = document.createElement('div');
    time.classList.add('time');
    let curDate = new Date(hour.dt * 1000).getHours();
    let timeAbrv;
    if (curDate > 12) {
      timeAbrv = 'PM';
      curDate %= 12;
    } else {
      timeAbrv = 'AM';
    }
    if (curDate === 0) {
      curDate = 12;
    }
    if (curDate < 10) {
      curDate = `0${curDate}`;
    }
    time.textContent = `${curDate}:00 ${timeAbrv}`;

    const weather = document.createElement('img');
    weather.classList.add(hour.weather[0].main, 'weather-symbol');
    weather.src = `https://openweathermap.org/img/wn/${hour.weather[0].icon}@4x.png`;
    weather.alt = hour.weather[0].description;

    const weatherDescription = document.createElement('div');
    weatherDescription.classList.add('weather-description');
    weatherDescription.textContent = hour.weather[0].description;

    const temp = document.createElement('div');
    temp.classList.add('temperature');
    temp.textContent = `${hour.temp} °${unit.classList[0]}`;

    const humidity = document.createElement('div');
    humidity.classList.add('humidity');
    const humidityLabel = document.createElement('div');
    humidityLabel.classList.add('label');
    humidityLabel.textContent = 'Humidity:';
    const humidityValue = document.createElement('div');
    humidityValue.classList.add('value');
    humidityValue.textContent = `${hour.humidity}%`;
    humidity.appendChild(humidityLabel);
    humidity.appendChild(humidityValue);

    const wind = document.createElement('div');
    wind.classList.add('wind');
    const windLabel = document.createElement('div');
    windLabel.classList.add('label');
    windLabel.textContent = 'Wind:';
    const windValue = document.createElement('div');
    windValue.classList.add('value');
    windValue.textContent = `${hour.wind_speed}${unit.classList[1]} ${windDegreesConvert(hour.wind_deg)}`;
    wind.appendChild(windLabel);
    wind.appendChild(windValue);

    card.appendChild(time);
    card.appendChild(weather);
    card.appendChild(weatherDescription);
    card.appendChild(temp);
    card.appendChild(humidity);
    card.appendChild(wind);
    return card;
  };
  const todayHourlyForecast = (today) => {
    const forecast = document.createElement('div');
    forecast.id = 'hourly-forecast';
    for (let i = 0; i < 9; i += 1) {
      const hour = hourlyForecastCard(today[i]);
      forecast.appendChild(hour);
    }
    return forecast;
  };
  const addPageContent = (weatherForecast, oneCallForecast) => {
    const body = document.querySelector('body');
    const info = createInfoHeader(
      weatherForecast,
      oneCallForecast.daily[0].temp.min,
      oneCallForecast.daily[0].temp.max,
    );
    body.appendChild(info);

    if (oneCallForecast.alerts) {
      const alert = createAlert(oneCallForecast.alerts);
      body.appendChild(alert);
    }

    const hourly = todayHourlyForecast(oneCallForecast.hourly);
    const daily = sevenDayForecast(oneCallForecast.daily);
    body.appendChild(hourly);
    body.appendChild(daily);
  };
  const createPage = () => {
    const body = document.querySelector('body');
    const header = createTopHeader();
    body.appendChild(header);
  };
  const deleteOldContent = () => {
    const body = document.querySelector('body');
    const info = document.querySelector('#info');
    const alert = document.querySelector('#alert-banner');
    const hourly = document.querySelector('#hourly-forecast');
    const daily = document.querySelector('#daily-forecast');
    body.removeChild(info);
    if (alert) {
      body.removeChild(alert);
    }
    body.removeChild(hourly);
    body.removeChild(daily);
  };
  const redrawPage = (weatherForecast, oneCallForecast) => {
    deleteOldContent();
    addPageContent(weatherForecast, oneCallForecast);
  };

  return { createPage, addPageContent, redrawPage };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);


/***/ }),

/***/ "./src/weather-caller.js":
/*!*******************************!*\
  !*** ./src/weather-caller.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weatherCaller = (() => {
  /* I am aware of this security risk with this key being viewable, however,
     it is a free key and this is a learning project, so the risk is minimal */
  const API_KEY = '704b0a8c629b869880bd52c5be419661';
  const fetchWeather = async (location, units) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${API_KEY}`);
    const weather = await response.json();
    return weather;
  };
  const fetchOneCall = async (lat, lon, units) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`);
    const weather = await response.json();
    return weather;
  };

  return { fetchWeather, fetchOneCall };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherCaller);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _weather_caller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-caller */ "./src/weather-caller.js");
/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-controller */ "./src/display-controller.js");




let currentWeather;
let currentFull;

async function newLocation(location, units) {
  currentWeather = await _weather_caller__WEBPACK_IMPORTED_MODULE_1__["default"].fetchWeather(location, units);
  currentFull = await _weather_caller__WEBPACK_IMPORTED_MODULE_1__["default"].fetchOneCall(
    currentWeather.coord.lat,
    currentWeather.coord.lon,
    units,
  );
}
async function initialPage() {
  _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].createPage();
  await newLocation('denver', 'imperial');
  _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].addPageContent(currentWeather, currentFull);
}
async function newPage(location, units) {
  await newLocation(location, units);
  _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].redrawPage(currentWeather, currentFull);
}

initialPage();

const search = document.querySelector('#search');
const searchSubmit = document.querySelector('#search-submit');
const unitToggle = document.querySelector('#unit');

searchSubmit.addEventListener('click', () => newPage(search.value, unitToggle.classList[2]));
search.addEventListener('keyup', (e) => {
  if (e.code === 'Enter') {
    newPage(search.value, unitToggle.classList[2]);
  }
});
unitToggle.addEventListener('click', () => newPage(currentWeather.name, unitToggle.classList[2]));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3dCO0FBQ1E7O0FBRXJEO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsb0VBQTBCO0FBQ25ELHNCQUFzQixvRUFBMEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzRUFBNEI7QUFDOUI7QUFDQSxFQUFFLDBFQUFnQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxFQUFFLHNFQUE0QjtBQUM5Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLWNhbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI0YyRUZFOTtcXG4gIC0taGVhZGVyLWNvbG9yOiAjM0YzODZCO1xcbiAgLS1idXR0b24tY29sb3I6ICMxMTgzRDA7XFxuICAtLWltYWdlLWJhY2tncm91bmQtY29sb3I6ICM4OUI1RDk7XFxuXFxuICAtLWZvbnQtY29sb3ItbGlnaHQ6ICNGMkVGRTk7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWxpZ2h0KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbn1cXG5cXG4jc2VhcmNoLWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNzZWFyY2gge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogNnB4IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XFxufVxcblxcbiNzZWFyY2gtc3VibWl0LFxcbiN1bml0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXG4gIHBhZGRpbmc6IDZweCAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoLXN1Ym1pdDphY3RpdmUsXFxuI3VuaXQ6YWN0aXZlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xcbn1cXG5cXG4jdW5pdCB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3VuaXQuaW1wZXJpYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdJbXBlcmlhbCc7XFxufVxcblxcbiN1bml0Lm1ldHJpYzpiZWZvcmUge1xcbiAgY29udGVudDogJ01ldHJpYyc7XFxufVxcblxcbiNpbmZvIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVyZW0gMTByZW0gMTByZW0gM2ZyIDEwcmVtIDEwcmVtIDVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW1hZ2UtYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbiNpbmZvIC53ZWF0aGVyLXN5bWJvbCB7XFxuICBoZWlnaHQ6IDVyZW07XFxuICB3aWR0aDogNXJlbTtcXG59XFxuXFxuI2luZm8gKiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNsb2NhdGlvbi1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcbn1cXG5cXG4jYWxlcnQtYmFubmVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmZvcmVjYXN0LWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWxpZ2h0KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jaG91cmx5LWZvcmVjYXN0IHtcXG4gIHdpZHRoOiA5MHZ3O1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIDFmcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNob3VybHktZm9yZWNhc3QgLndlYXRoZXItc3ltYm9sIHtcXG4gIGhlaWdodDogY2FsYyg5MHZ3IC8gOSk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi53aW5kLFxcbi5odW1pZGl0eSxcXG4ubWF4LXRlbXAsXFxuLm1pbi10ZW1wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4jZGFpbHktZm9yZWNhc3Qge1xcbiAgd2lkdGg6IDkwdnc7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNkYWlseS1mb3JlY2FzdCAud2VhdGhlci1zeW1ib2wge1xcbiAgaGVpZ2h0OiBjYWxjKDkwdncgLyA3KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmZvcmVjYXN0LWNhcmQgKyAuZm9yZWNhc3QtY2FyZCB7XFxuICBib3JkZXItbGVmdDogMHB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZm9yZWNhc3QtY2FyZCAudGltZSxcXG4uZm9yZWNhc3QtY2FyZCAuZGF5IHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmZvcmVjYXN0LWNhcmQgaW1nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWltYWdlLWJhY2tncm91bmQtY29sb3IpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixpQ0FBaUM7O0VBRWpDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUscUNBQXFDO0VBQ3JDLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLDREQUE0RDtFQUM1RCxtQkFBbUI7O0VBRW5CLDhCQUE4QjtFQUM5QiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7RUFJRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBOztFQUVFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLCtDQUErQztBQUNqRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNGMkVGRTk7XFxuICAtLWhlYWRlci1jb2xvcjogIzNGMzg2QjtcXG4gIC0tYnV0dG9uLWNvbG9yOiAjMTE4M0QwO1xcbiAgLS1pbWFnZS1iYWNrZ3JvdW5kLWNvbG9yOiAjODlCNUQ5O1xcblxcbiAgLS1mb250LWNvbG9yLWxpZ2h0OiAjRjJFRkU5O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG59XFxuXFxuI3NlYXJjaC1maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jc2VhcmNoIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmc6IDZweCAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcbn1cXG5cXG4jc2VhcmNoLXN1Ym1pdCxcXG4jdW5pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XFxuICBwYWRkaW5nOiA2cHggMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NlYXJjaC1zdWJtaXQ6YWN0aXZlLFxcbiN1bml0OmFjdGl2ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yLWxpZ2h0KTtcXG59XFxuXFxuI3VuaXQge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiN1bml0LmltcGVyaWFsOmJlZm9yZSB7XFxuICBjb250ZW50OiAnSW1wZXJpYWwnO1xcbn1cXG5cXG4jdW5pdC5tZXRyaWM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdNZXRyaWMnO1xcbn1cXG5cXG4jaW5mbyB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1cmVtIDEwcmVtIDEwcmVtIDNmciAxMHJlbSAxMHJlbSA1cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWltYWdlLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4jaW5mbyAud2VhdGhlci1zeW1ib2wge1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgd2lkdGg6IDVyZW07XFxufVxcblxcbiNpbmZvICoge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbG9jYXRpb24tbmFtZSB7XFxuICBmb250LXNpemU6IDIuOHJlbTtcXG59XFxuXFxuI2FsZXJ0LWJhbm5lciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5mb3JlY2FzdC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2hvdXJseS1mb3JlY2FzdCB7XFxuICB3aWR0aDogOTB2dztcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LCAxZnIpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jaG91cmx5LWZvcmVjYXN0IC53ZWF0aGVyLXN5bWJvbCB7XFxuICBoZWlnaHQ6IGNhbGMoOTB2dyAvIDkpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ud2luZCxcXG4uaHVtaWRpdHksXFxuLm1heC10ZW1wLFxcbi5taW4tdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAwIDVweDtcXG59XFxuXFxuI2RhaWx5LWZvcmVjYXN0IHtcXG4gIHdpZHRoOiA5MHZ3O1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZGFpbHktZm9yZWNhc3QgLndlYXRoZXItc3ltYm9sIHtcXG4gIGhlaWdodDogY2FsYyg5MHZ3IC8gNyk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5mb3JlY2FzdC1jYXJkICsgLmZvcmVjYXN0LWNhcmQge1xcbiAgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmZvcmVjYXN0LWNhcmQgLnRpbWUsXFxuLmZvcmVjYXN0LWNhcmQgLmRheSB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5mb3JlY2FzdC1jYXJkIGltZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbWFnZS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEJhciA9ICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlYXJjaEZpZWxkLmlkID0gJ3NlYXJjaC1maWVsZCc7XG5cbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHNlYXJjaC50eXBlID0gJ3NlYXJjaCc7XG4gICAgc2VhcmNoLm5hbWUgPSAnc2VhcmNoJztcbiAgICBzZWFyY2guaWQgPSAnc2VhcmNoJztcbiAgICBzZWFyY2gucGxhY2Vob2xkZXIgPSAnRGVudmVyLCBVUyc7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJtaXQuaWQgPSAnc2VhcmNoLXN1Ym1pdCc7XG4gICAgc3VibWl0LnRleHRDb250ZW50ID0gJ1NVQk1JVCc7XG5cbiAgICBzZWFyY2hGaWVsZC5hcHBlbmRDaGlsZChzZWFyY2gpO1xuICAgIHNlYXJjaEZpZWxkLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgcmV0dXJuIHNlYXJjaEZpZWxkO1xuICB9O1xuICBjb25zdCB1bml0VG9nZ2xlQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IHVuaXRUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1bml0VG9nZ2xlLmlkID0gJ3VuaXQnO1xuICAgIHVuaXRUb2dnbGUuY2xhc3NMaXN0LmFkZCgnRicpO1xuICAgIHVuaXRUb2dnbGUuY2xhc3NMaXN0LmFkZCgnbXBoJyk7XG4gICAgdW5pdFRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdpbXBlcmlhbCcpO1xuICAgIHVuaXRUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB1bml0VG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ0YnKTtcbiAgICAgIHVuaXRUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnbXBoJyk7XG4gICAgICB1bml0VG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2ltcGVyaWFsJyk7XG4gICAgICB1bml0VG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ0MnKTtcbiAgICAgIHVuaXRUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnbS9zJyk7XG4gICAgICB1bml0VG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ21ldHJpYycpO1xuICAgIH0pO1xuICAgIHJldHVybiB1bml0VG9nZ2xlO1xuICB9O1xuICBjb25zdCBxdWlja0luZm9CYXIgPSAod2VhdGhlciwgaWNvbiwgd2VhdGhlckRlc2NyLCBsb2NhdGlvbiwgdGVtcCwgbWluLCBtYXgsIGRhdGUpID0+IHtcbiAgICBjb25zdCB1bml0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXQnKS5jbGFzc0xpc3RbMF07XG5cbiAgICBjb25zdCBpbmZvQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb0Jhci5pZCA9ICdpbmZvJztcbiAgICBpbmZvQmFyLmNsYXNzTGlzdC5hZGQod2VhdGhlcik7XG4gICAgY29uc3Qgd2VhdGhlclN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHdlYXRoZXJTeW1ib2wuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1zeW1ib2wnKTtcbiAgICB3ZWF0aGVyU3ltYm9sLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUAyeC5wbmdgO1xuICAgIHdlYXRoZXJTeW1ib2wuYWx0ID0gd2VhdGhlckRlc2NyO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1kZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlckRlc2NyO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG5hbWUuaWQgPSAnbG9jYXRpb24tbmFtZSc7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGxvY2F0aW9uO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZCgnY3VycmVudC10ZW1wZXJhdHVyZScpO1xuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7dGVtcH0gwrAke3VuaXR9YDtcblxuICAgIGNvbnN0IHRlbXBIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVtcEhpZ2guY2xhc3NMaXN0LmFkZCgnbWF4LXRlbXAnKTtcbiAgICBjb25zdCB0ZW1wSGlnaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVtcEhpZ2hMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgIHRlbXBIaWdoTGFiZWwudGV4dENvbnRlbnQgPSAnSGlnaDonO1xuICAgIGNvbnN0IHRlbXBIaWdoVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wSGlnaFZhbHVlLmNsYXNzTGlzdC5hZGQoJ3ZhbHVlJyk7XG4gICAgdGVtcEhpZ2hWYWx1ZS50ZXh0Q29udGVudCA9IGAke21heH0gwrAke3VuaXR9YDtcbiAgICB0ZW1wSGlnaC5hcHBlbmRDaGlsZCh0ZW1wSGlnaExhYmVsKTtcbiAgICB0ZW1wSGlnaC5hcHBlbmRDaGlsZCh0ZW1wSGlnaFZhbHVlKTtcblxuICAgIGNvbnN0IHRlbXBMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wTG93LmNsYXNzTGlzdC5hZGQoJ21pbi10ZW1wJyk7XG4gICAgY29uc3QgdGVtcExvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVtcExvd0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgdGVtcExvd0xhYmVsLnRleHRDb250ZW50ID0gJ0xvdzonO1xuICAgIGNvbnN0IHRlbXBMb3dWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBMb3dWYWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuICAgIHRlbXBMb3dWYWx1ZS50ZXh0Q29udGVudCA9IGAke21pbn0gwrAke3VuaXR9YDtcbiAgICB0ZW1wTG93LmFwcGVuZENoaWxkKHRlbXBMb3dMYWJlbCk7XG4gICAgdGVtcExvdy5hcHBlbmRDaGlsZCh0ZW1wTG93VmFsdWUpO1xuXG4gICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoJ3RpbWUnKTtcbiAgICBkYXkudGV4dENvbnRlbnQgPSBkYXRlO1xuXG4gICAgY29uc3QgdGVtcEV4dHJlbWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wRXh0cmVtYS5jbGFzc0xpc3QuYWRkKCdleHRyZW1hLXRlbXBlcmF0dXJlJyk7XG4gICAgdGVtcEV4dHJlbWEuYXBwZW5kQ2hpbGQodGVtcEhpZ2gpO1xuICAgIHRlbXBFeHRyZW1hLmFwcGVuZENoaWxkKHRlbXBMb3cpO1xuXG4gICAgaW5mb0Jhci5hcHBlbmRDaGlsZCh3ZWF0aGVyU3ltYm9sKTtcbiAgICBpbmZvQmFyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBpbmZvQmFyLmFwcGVuZENoaWxkKHRlbXBFeHRyZW1hKTtcbiAgICBpbmZvQmFyLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGluZm9CYXIuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmUpO1xuICAgIGluZm9CYXIuYXBwZW5kQ2hpbGQoZGF5KTtcbiAgICByZXR1cm4gaW5mb0JhcjtcbiAgfTtcbiAgY29uc3QgY3JlYXRlVG9wSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5pZCA9ICdoZWFkZXInO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSAnV2VhdGhlciBBcHAnO1xuICAgIGNvbnN0IHNlYXJjaCA9IHNlYXJjaEJhcigpO1xuICAgIGNvbnN0IHVuaXRUb2dnbGUgPSB1bml0VG9nZ2xlQnRuKCk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHVuaXRUb2dnbGUpO1xuICAgIHJldHVybiBoZWFkZXI7XG4gIH07XG4gIGNvbnN0IGNyZWF0ZUluZm9IZWFkZXIgPSAoY3VycmVudCwgbWluLCBtYXgpID0+IHtcbiAgICBjb25zdCBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDtcbiAgICBsZXQgdGltZSA9IG5ldyBEYXRlKChjdXJyZW50LmR0ICsgb2Zmc2V0ICsgY3VycmVudC50aW1lem9uZSkgKiAxMDAwKTtcbiAgICBsZXQgaG91cnMgPSB0aW1lLmdldEhvdXJzKCk7XG4gICAgbGV0IG1pbnV0ZXMgPSB0aW1lLmdldE1pbnV0ZXMoKTtcbiAgICBsZXQgdGltZUFicnY7XG4gICAgaWYgKGhvdXJzID4gMTIpIHtcbiAgICAgIHRpbWVBYnJ2ID0gJ1BNJztcbiAgICAgIGhvdXJzICU9IDEyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lQWJydiA9ICdBTSc7XG4gICAgfVxuICAgIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgaG91cnMgPSAxMjtcbiAgICB9XG4gICAgaWYgKGhvdXJzIDwgMTApIHtcbiAgICAgIGhvdXJzID0gYDAke2hvdXJzfWA7XG4gICAgfVxuICAgIGlmIChtaW51dGVzIDwgMTApIHtcbiAgICAgIG1pbnV0ZXMgPSBgMCR7bWludXRlc31gO1xuICAgIH1cbiAgICB0aW1lID0gYCR7aG91cnN9OiR7bWludXRlc30gJHt0aW1lQWJydn1gO1xuICAgIGNvbnN0IGluZm8gPSBxdWlja0luZm9CYXIoXG4gICAgICBjdXJyZW50LndlYXRoZXJbMF0ubWFpbixcbiAgICAgIGN1cnJlbnQud2VhdGhlclswXS5pY29uLFxuICAgICAgY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgYCR7Y3VycmVudC5uYW1lfSwgJHtjdXJyZW50LnN5cy5jb3VudHJ5fWAsXG4gICAgICBjdXJyZW50Lm1haW4udGVtcCxcbiAgICAgIG1pbixcbiAgICAgIG1heCxcbiAgICAgIHRpbWUsXG4gICAgKTtcbiAgICByZXR1cm4gaW5mbztcbiAgfTtcbiAgY29uc3QgY3JlYXRlQWxlcnQgPSAoYWxlcnQpID0+IHtcbiAgICBjb25zdCBhbGVydEJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFsZXJ0QmFubmVyLmlkID0gJ2FsZXJ0LWJhbm5lcic7XG4gICAgYWxlcnRCYW5uZXIudGV4dENvbnRlbnQgPSBhbGVydFswXS5ldmVudDtcbiAgICByZXR1cm4gYWxlcnRCYW5uZXI7XG4gIH07XG4gIGNvbnN0IGZvcmVjYXN0Q2FyZCA9ICh0aW1lLCB3ZWF0aGVyLCBpY29uLCB3ZWF0aGVyRGVzY3IsIGxvdywgaGlnaCkgPT4ge1xuICAgIGNvbnN0IHVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdW5pdCcpLmNsYXNzTGlzdFswXTtcblxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWNhcmQnLCAnZGFpbHknKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXknKTtcbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSh0aW1lICogMTAwMCkuZ2V0RGF5KCk7XG4gICAgY29uc3QgZGF5cyA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gZGF5c1tkYXldO1xuICAgIGNvbnN0IHdlYXRoZXJTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB3ZWF0aGVyU3ltYm9sLmNsYXNzTGlzdC5hZGQod2VhdGhlciwgJ3dlYXRoZXItc3ltYm9sJyk7XG4gICAgd2VhdGhlclN5bWJvbC5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbn1ANHgucG5nYDtcbiAgICB3ZWF0aGVyU3ltYm9sLmFsdCA9IHdlYXRoZXJEZXNjcjtcbiAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1kZXNjcmlwdGlvbicpO1xuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJEZXNjcjtcblxuICAgIGNvbnN0IHRlbXBIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVtcEhpZ2guY2xhc3NMaXN0LmFkZCgnbWF4LXRlbXAnKTtcbiAgICBjb25zdCB0ZW1wSGlnaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVtcEhpZ2hMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgIHRlbXBIaWdoTGFiZWwudGV4dENvbnRlbnQgPSAnSGlnaDonO1xuICAgIGNvbnN0IHRlbXBIaWdoVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wSGlnaFZhbHVlLmNsYXNzTGlzdC5hZGQoJ3ZhbHVlJyk7XG4gICAgdGVtcEhpZ2hWYWx1ZS50ZXh0Q29udGVudCA9IGAke2hpZ2h9IMKwJHt1bml0fWA7XG4gICAgdGVtcEhpZ2guYXBwZW5kQ2hpbGQodGVtcEhpZ2hMYWJlbCk7XG4gICAgdGVtcEhpZ2guYXBwZW5kQ2hpbGQodGVtcEhpZ2hWYWx1ZSk7XG5cbiAgICBjb25zdCB0ZW1wTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVtcExvdy5jbGFzc0xpc3QuYWRkKCdtaW4tdGVtcCcpO1xuICAgIGNvbnN0IHRlbXBMb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBMb3dMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgIHRlbXBMb3dMYWJlbC50ZXh0Q29udGVudCA9ICdMb3c6JztcbiAgICBjb25zdCB0ZW1wTG93VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wTG93VmFsdWUuY2xhc3NMaXN0LmFkZCgndmFsdWUnKTtcbiAgICB0ZW1wTG93VmFsdWUudGV4dENvbnRlbnQgPSBgJHtsb3d9IMKwJHt1bml0fWA7XG4gICAgdGVtcExvdy5hcHBlbmRDaGlsZCh0ZW1wTG93TGFiZWwpO1xuICAgIHRlbXBMb3cuYXBwZW5kQ2hpbGQodGVtcExvd1ZhbHVlKTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZCh3ZWF0aGVyU3ltYm9sKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHdlYXRoZXJEZXNjcmlwdGlvbik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0ZW1wSGlnaCk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0ZW1wTG93KTtcbiAgICByZXR1cm4gY2FyZDtcbiAgfTtcbiAgY29uc3Qgc2V2ZW5EYXlGb3JlY2FzdCA9ICh3ZWVrKSA9PiB7XG4gICAgY29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JlY2FzdC5pZCA9ICdkYWlseS1mb3JlY2FzdCc7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGRheUNhcmQgPSBmb3JlY2FzdENhcmQoXG4gICAgICAgIHdlZWtbaV0uZHQsXG4gICAgICAgIHdlZWtbaV0ud2VhdGhlclswXS5tYWluLFxuICAgICAgICB3ZWVrW2ldLndlYXRoZXJbMF0uaWNvbixcbiAgICAgICAgd2Vla1tpXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgICB3ZWVrW2ldLnRlbXAubWluLFxuICAgICAgICB3ZWVrW2ldLnRlbXAubWF4LFxuICAgICAgKTtcbiAgICAgIGZvcmVjYXN0LmFwcGVuZENoaWxkKGRheUNhcmQpO1xuICAgIH1cbiAgICByZXR1cm4gZm9yZWNhc3Q7XG4gIH07XG4gIGNvbnN0IHdpbmREZWdyZWVzQ29udmVydCA9IChkZWdyZWVzKSA9PiB7XG4gICAgbGV0IHN0cmluZztcbiAgICBpZiAoZGVncmVlcyA+IDM0OC43NSB8fCBkZWdyZWVzIDw9IDIyLjUpIHtcbiAgICAgIHN0cmluZyA9ICdOJztcbiAgICB9IGVsc2UgaWYgKGRlZ3JlZXMgPiAyMi41ICYmIGRlZ3JlZXMgPD0gNjcuNSkge1xuICAgICAgc3RyaW5nID0gJ05FJztcbiAgICB9IGVsc2UgaWYgKGRlZ3JlZXMgPiA2Ny41ICYmIGRlZ3JlZXMgPD0gMTEyLjUpIHtcbiAgICAgIHN0cmluZyA9ICdFJztcbiAgICB9IGVsc2UgaWYgKGRlZ3JlZXMgPiAxMTIuNSAmJiBkZWdyZWVzIDw9IDE1Ny41KSB7XG4gICAgICBzdHJpbmcgPSAnU0UnO1xuICAgIH0gZWxzZSBpZiAoZGVncmVlcyA+IDE1Ny41ICYmIGRlZ3JlZXMgPD0gMjAyLjUpIHtcbiAgICAgIHN0cmluZyA9ICdTJztcbiAgICB9IGVsc2UgaWYgKGRlZ3JlZXMgPiAyMDIuNSAmJiBkZWdyZWVzIDw9IDI0Ny41KSB7XG4gICAgICBzdHJpbmcgPSAnU1cnO1xuICAgIH0gZWxzZSBpZiAoZGVncmVlcyA+IDI0Ny41ICYmIGRlZ3JlZXMgPD0gMjkyLjUpIHtcbiAgICAgIHN0cmluZyA9ICdXJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyaW5nID0gJ05XJztcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RDYXJkID0gKGhvdXIpID0+IHtcbiAgICBjb25zdCB1bml0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXQnKTtcblxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWNhcmQnLCAnaG91cmx5Jyk7XG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbWUuY2xhc3NMaXN0LmFkZCgndGltZScpO1xuICAgIGxldCBjdXJEYXRlID0gbmV3IERhdGUoaG91ci5kdCAqIDEwMDApLmdldEhvdXJzKCk7XG4gICAgbGV0IHRpbWVBYnJ2O1xuICAgIGlmIChjdXJEYXRlID4gMTIpIHtcbiAgICAgIHRpbWVBYnJ2ID0gJ1BNJztcbiAgICAgIGN1ckRhdGUgJT0gMTI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVBYnJ2ID0gJ0FNJztcbiAgICB9XG4gICAgaWYgKGN1ckRhdGUgPT09IDApIHtcbiAgICAgIGN1ckRhdGUgPSAxMjtcbiAgICB9XG4gICAgaWYgKGN1ckRhdGUgPCAxMCkge1xuICAgICAgY3VyRGF0ZSA9IGAwJHtjdXJEYXRlfWA7XG4gICAgfVxuICAgIHRpbWUudGV4dENvbnRlbnQgPSBgJHtjdXJEYXRlfTowMCAke3RpbWVBYnJ2fWA7XG5cbiAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgd2VhdGhlci5jbGFzc0xpc3QuYWRkKGhvdXIud2VhdGhlclswXS5tYWluLCAnd2VhdGhlci1zeW1ib2wnKTtcbiAgICB3ZWF0aGVyLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtob3VyLndlYXRoZXJbMF0uaWNvbn1ANHgucG5nYDtcbiAgICB3ZWF0aGVyLmFsdCA9IGhvdXIud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWRlc2NyaXB0aW9uJyk7XG4gICAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaG91ci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXAuY2xhc3NMaXN0LmFkZCgndGVtcGVyYXR1cmUnKTtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7aG91ci50ZW1wfSDCsCR7dW5pdC5jbGFzc0xpc3RbMF19YDtcblxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHknKTtcbiAgICBjb25zdCBodW1pZGl0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaHVtaWRpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgIGh1bWlkaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnSHVtaWRpdHk6JztcbiAgICBjb25zdCBodW1pZGl0eVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaHVtaWRpdHlWYWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuICAgIGh1bWlkaXR5VmFsdWUudGV4dENvbnRlbnQgPSBgJHtob3VyLmh1bWlkaXR5fSVgO1xuICAgIGh1bWlkaXR5LmFwcGVuZENoaWxkKGh1bWlkaXR5TGFiZWwpO1xuICAgIGh1bWlkaXR5LmFwcGVuZENoaWxkKGh1bWlkaXR5VmFsdWUpO1xuXG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdpbmQuY2xhc3NMaXN0LmFkZCgnd2luZCcpO1xuICAgIGNvbnN0IHdpbmRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdpbmRMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgIHdpbmRMYWJlbC50ZXh0Q29udGVudCA9ICdXaW5kOic7XG4gICAgY29uc3Qgd2luZFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2luZFZhbHVlLmNsYXNzTGlzdC5hZGQoJ3ZhbHVlJyk7XG4gICAgd2luZFZhbHVlLnRleHRDb250ZW50ID0gYCR7aG91ci53aW5kX3NwZWVkfSR7dW5pdC5jbGFzc0xpc3RbMV19ICR7d2luZERlZ3JlZXNDb252ZXJ0KGhvdXIud2luZF9kZWcpfWA7XG4gICAgd2luZC5hcHBlbmRDaGlsZCh3aW5kTGFiZWwpO1xuICAgIHdpbmQuYXBwZW5kQ2hpbGQod2luZFZhbHVlKTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGltZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZCh3ZWF0aGVyKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHdlYXRoZXJEZXNjcmlwdGlvbik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHdpbmQpO1xuICAgIHJldHVybiBjYXJkO1xuICB9O1xuICBjb25zdCB0b2RheUhvdXJseUZvcmVjYXN0ID0gKHRvZGF5KSA9PiB7XG4gICAgY29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JlY2FzdC5pZCA9ICdob3VybHktZm9yZWNhc3QnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSArPSAxKSB7XG4gICAgICBjb25zdCBob3VyID0gaG91cmx5Rm9yZWNhc3RDYXJkKHRvZGF5W2ldKTtcbiAgICAgIGZvcmVjYXN0LmFwcGVuZENoaWxkKGhvdXIpO1xuICAgIH1cbiAgICByZXR1cm4gZm9yZWNhc3Q7XG4gIH07XG4gIGNvbnN0IGFkZFBhZ2VDb250ZW50ID0gKHdlYXRoZXJGb3JlY2FzdCwgb25lQ2FsbEZvcmVjYXN0KSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBpbmZvID0gY3JlYXRlSW5mb0hlYWRlcihcbiAgICAgIHdlYXRoZXJGb3JlY2FzdCxcbiAgICAgIG9uZUNhbGxGb3JlY2FzdC5kYWlseVswXS50ZW1wLm1pbixcbiAgICAgIG9uZUNhbGxGb3JlY2FzdC5kYWlseVswXS50ZW1wLm1heCxcbiAgICApO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICBpZiAob25lQ2FsbEZvcmVjYXN0LmFsZXJ0cykge1xuICAgICAgY29uc3QgYWxlcnQgPSBjcmVhdGVBbGVydChvbmVDYWxsRm9yZWNhc3QuYWxlcnRzKTtcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoYWxlcnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGhvdXJseSA9IHRvZGF5SG91cmx5Rm9yZWNhc3Qob25lQ2FsbEZvcmVjYXN0LmhvdXJseSk7XG4gICAgY29uc3QgZGFpbHkgPSBzZXZlbkRheUZvcmVjYXN0KG9uZUNhbGxGb3JlY2FzdC5kYWlseSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChob3VybHkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGFpbHkpO1xuICB9O1xuICBjb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlVG9wSGVhZGVyKCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICB9O1xuICBjb25zdCBkZWxldGVPbGRDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmZvJyk7XG4gICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxlcnQtYmFubmVyJyk7XG4gICAgY29uc3QgaG91cmx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdXJseS1mb3JlY2FzdCcpO1xuICAgIGNvbnN0IGRhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhaWx5LWZvcmVjYXN0Jyk7XG4gICAgYm9keS5yZW1vdmVDaGlsZChpbmZvKTtcbiAgICBpZiAoYWxlcnQpIHtcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYWxlcnQpO1xuICAgIH1cbiAgICBib2R5LnJlbW92ZUNoaWxkKGhvdXJseSk7XG4gICAgYm9keS5yZW1vdmVDaGlsZChkYWlseSk7XG4gIH07XG4gIGNvbnN0IHJlZHJhd1BhZ2UgPSAod2VhdGhlckZvcmVjYXN0LCBvbmVDYWxsRm9yZWNhc3QpID0+IHtcbiAgICBkZWxldGVPbGRDb250ZW50KCk7XG4gICAgYWRkUGFnZUNvbnRlbnQod2VhdGhlckZvcmVjYXN0LCBvbmVDYWxsRm9yZWNhc3QpO1xuICB9O1xuXG4gIHJldHVybiB7IGNyZWF0ZVBhZ2UsIGFkZFBhZ2VDb250ZW50LCByZWRyYXdQYWdlIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29udHJvbGxlcjtcbiIsImNvbnN0IHdlYXRoZXJDYWxsZXIgPSAoKCkgPT4ge1xuICAvKiBJIGFtIGF3YXJlIG9mIHRoaXMgc2VjdXJpdHkgcmlzayB3aXRoIHRoaXMga2V5IGJlaW5nIHZpZXdhYmxlLCBob3dldmVyLFxuICAgICBpdCBpcyBhIGZyZWUga2V5IGFuZCB0aGlzIGlzIGEgbGVhcm5pbmcgcHJvamVjdCwgc28gdGhlIHJpc2sgaXMgbWluaW1hbCAqL1xuICBjb25zdCBBUElfS0VZID0gJzcwNGIwYThjNjI5Yjg2OTg4MGJkNTJjNWJlNDE5NjYxJztcbiAgY29uc3QgZmV0Y2hXZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uLCB1bml0cykgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHtBUElfS0VZfWApO1xuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXI7XG4gIH07XG4gIGNvbnN0IGZldGNoT25lQ2FsbCA9IGFzeW5jIChsYXQsIGxvbiwgdW5pdHMpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHtBUElfS0VZfWApO1xuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXI7XG4gIH07XG5cbiAgcmV0dXJuIHsgZmV0Y2hXZWF0aGVyLCBmZXRjaE9uZUNhbGwgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJDYWxsZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB3ZWF0aGVyQ2FsbGVyIGZyb20gJy4vd2VhdGhlci1jYWxsZXInO1xuaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gJy4vZGlzcGxheS1jb250cm9sbGVyJztcblxubGV0IGN1cnJlbnRXZWF0aGVyO1xubGV0IGN1cnJlbnRGdWxsO1xuXG5hc3luYyBmdW5jdGlvbiBuZXdMb2NhdGlvbihsb2NhdGlvbiwgdW5pdHMpIHtcbiAgY3VycmVudFdlYXRoZXIgPSBhd2FpdCB3ZWF0aGVyQ2FsbGVyLmZldGNoV2VhdGhlcihsb2NhdGlvbiwgdW5pdHMpO1xuICBjdXJyZW50RnVsbCA9IGF3YWl0IHdlYXRoZXJDYWxsZXIuZmV0Y2hPbmVDYWxsKFxuICAgIGN1cnJlbnRXZWF0aGVyLmNvb3JkLmxhdCxcbiAgICBjdXJyZW50V2VhdGhlci5jb29yZC5sb24sXG4gICAgdW5pdHMsXG4gICk7XG59XG5hc3luYyBmdW5jdGlvbiBpbml0aWFsUGFnZSgpIHtcbiAgZGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlUGFnZSgpO1xuICBhd2FpdCBuZXdMb2NhdGlvbignZGVudmVyJywgJ2ltcGVyaWFsJyk7XG4gIGRpc3BsYXlDb250cm9sbGVyLmFkZFBhZ2VDb250ZW50KGN1cnJlbnRXZWF0aGVyLCBjdXJyZW50RnVsbCk7XG59XG5hc3luYyBmdW5jdGlvbiBuZXdQYWdlKGxvY2F0aW9uLCB1bml0cykge1xuICBhd2FpdCBuZXdMb2NhdGlvbihsb2NhdGlvbiwgdW5pdHMpO1xuICBkaXNwbGF5Q29udHJvbGxlci5yZWRyYXdQYWdlKGN1cnJlbnRXZWF0aGVyLCBjdXJyZW50RnVsbCk7XG59XG5cbmluaXRpYWxQYWdlKCk7XG5cbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKTtcbmNvbnN0IHNlYXJjaFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtc3VibWl0Jyk7XG5jb25zdCB1bml0VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXQnKTtcblxuc2VhcmNoU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbmV3UGFnZShzZWFyY2gudmFsdWUsIHVuaXRUb2dnbGUuY2xhc3NMaXN0WzJdKSk7XG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICBpZiAoZS5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgbmV3UGFnZShzZWFyY2gudmFsdWUsIHVuaXRUb2dnbGUuY2xhc3NMaXN0WzJdKTtcbiAgfVxufSk7XG51bml0VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbmV3UGFnZShjdXJyZW50V2VhdGhlci5uYW1lLCB1bml0VG9nZ2xlLmNsYXNzTGlzdFsyXSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9