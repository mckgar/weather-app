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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --background-color: #F2EFE9;\n  --header-color: #3F386B;\n  --button-color: #1183D0;\n  --image-background-color: #89B5D9;\n\n  --font-color-light: #F2EFE9;\n}\n\nbody {\n  width: 100vw;\n  background-color: var(--background-color);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#header {\n  width: 100vw;\n  padding: 0.5rem;\n  background-color: var(--header-color);\n  color: var(--font-color-light);\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n}\n\n#search-field {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n#search {\n  border-style: none;\n  border: 1px solid black;\n  width: 80%;\n  padding: 6px 1rem;\n  border-radius: 1000px;\n}\n\n#search-submit,\n#unit {\n  background-color: var(--button-color);\n  color: var(--font-color-light);\n  border: 1px solid black;\n  border-radius: 1000px;\n  padding: 6px 1rem;\n  text-align: center;\n\n  cursor: pointer;\n}\n\n#search-submit:active,\n#unit:active {\n  border: 1px solid var(--font-color-light);\n}\n\n#unit {\n  justify-self: end;\n  align-self: center;\n}\n\n#unit.imperial:before {\n  content: 'Imperial';\n}\n\n#unit.metric:before {\n  content: 'Metric';\n}\n\n#info {\n  width: 100vw;\n  padding: 0.5rem;\n  display: grid;\n  grid-template-columns: 5rem 5rem 10rem 3fr 10rem 5rem 5rem;\n  align-items: center;\n\n  border-bottom: 2px solid black;\n  background-color: var(--image-background-color);\n}\n\n#info .weather-symbol {\n  height: 5rem;\n  width: 5rem;\n}\n\n#info * {\n  text-align: center;\n}\n\n#location-name {\n  font-size: 2.8rem;\n}\n\n#alert-banner {\n  width: 100vw;\n  text-align: center;\n  border-bottom: 1px solid black;\n  background-color: red;\n}\n\n.forecast-card {\n  background-color: var(--header-color);\n  color: var(--font-color-light);\n  border: 2px solid black;\n}\n\n#hourly-forecast {\n  width: 90vw;\n  margin-top: 2rem;\n  /* border: 2px solid black; */\n  display: grid;\n  grid-template-columns: repeat(9, 1fr);\n  text-align: center;\n}\n\n#hourly-forecast .weather-symbol {\n  height: calc(90vw / 9);\n  border-bottom: 2px solid black;\n}\n\n.wind,\n.humidity,\n.max-temp,\n.min-temp {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 0 5px;\n}\n\n#daily-forecast {\n  width: 90vw;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  /* border: 2px solid black; */\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  text-align: center;\n}\n\n#daily-forecast .weather-symbol {\n  height: calc(90vw / 7);\n  border-bottom: 2px solid black;\n}\n\n.forecast-card + .forecast-card {\n  border-left: 0px solid black;\n}\n\n.forecast-card .time,\n.forecast-card .day {\n  border-bottom: 2px solid black;\n}\n\n.forecast-card img {\n  background-color: var(--image-background-color);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;EAC3B,uBAAuB;EACvB,uBAAuB;EACvB,iCAAiC;;EAEjC,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,yCAAyC;EACzC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,qCAAqC;EACrC,8BAA8B;EAC9B,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,UAAU;EACV,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;;EAEE,qCAAqC;EACrC,8BAA8B;EAC9B,uBAAuB;EACvB,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;;EAElB,eAAe;AACjB;;AAEA;;EAEE,yCAAyC;AAC3C;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,0DAA0D;EAC1D,mBAAmB;;EAEnB,8BAA8B;EAC9B,+CAA+C;AACjD;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;EACE,qCAAqC;EACrC,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,6BAA6B;EAC7B,aAAa;EACb,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;;;;EAIE,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,6BAA6B;EAC7B,aAAa;EACb,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;;EAEE,8BAA8B;AAChC;;AAEA;EACE,+CAA+C;AACjD","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --background-color: #F2EFE9;\n  --header-color: #3F386B;\n  --button-color: #1183D0;\n  --image-background-color: #89B5D9;\n\n  --font-color-light: #F2EFE9;\n}\n\nbody {\n  width: 100vw;\n  background-color: var(--background-color);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#header {\n  width: 100vw;\n  padding: 0.5rem;\n  background-color: var(--header-color);\n  color: var(--font-color-light);\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n}\n\n#search-field {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n#search {\n  border-style: none;\n  border: 1px solid black;\n  width: 80%;\n  padding: 6px 1rem;\n  border-radius: 1000px;\n}\n\n#search-submit,\n#unit {\n  background-color: var(--button-color);\n  color: var(--font-color-light);\n  border: 1px solid black;\n  border-radius: 1000px;\n  padding: 6px 1rem;\n  text-align: center;\n\n  cursor: pointer;\n}\n\n#search-submit:active,\n#unit:active {\n  border: 1px solid var(--font-color-light);\n}\n\n#unit {\n  justify-self: end;\n  align-self: center;\n}\n\n#unit.imperial:before {\n  content: 'Imperial';\n}\n\n#unit.metric:before {\n  content: 'Metric';\n}\n\n#info {\n  width: 100vw;\n  padding: 0.5rem;\n  display: grid;\n  grid-template-columns: 5rem 5rem 10rem 3fr 10rem 5rem 5rem;\n  align-items: center;\n\n  border-bottom: 2px solid black;\n  background-color: var(--image-background-color);\n}\n\n#info .weather-symbol {\n  height: 5rem;\n  width: 5rem;\n}\n\n#info * {\n  text-align: center;\n}\n\n#location-name {\n  font-size: 2.8rem;\n}\n\n#alert-banner {\n  width: 100vw;\n  text-align: center;\n  border-bottom: 1px solid black;\n  background-color: red;\n}\n\n.forecast-card {\n  background-color: var(--header-color);\n  color: var(--font-color-light);\n  border: 2px solid black;\n}\n\n#hourly-forecast {\n  width: 90vw;\n  margin-top: 2rem;\n  /* border: 2px solid black; */\n  display: grid;\n  grid-template-columns: repeat(9, 1fr);\n  text-align: center;\n}\n\n#hourly-forecast .weather-symbol {\n  height: calc(90vw / 9);\n  border-bottom: 2px solid black;\n}\n\n.wind,\n.humidity,\n.max-temp,\n.min-temp {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 0 5px;\n}\n\n#daily-forecast {\n  width: 90vw;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  /* border: 2px solid black; */\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  text-align: center;\n}\n\n#daily-forecast .weather-symbol {\n  height: calc(90vw / 7);\n  border-bottom: 2px solid black;\n}\n\n.forecast-card + .forecast-card {\n  border-left: 0px solid black;\n}\n\n.forecast-card .time,\n.forecast-card .day {\n  border-bottom: 2px solid black;\n}\n\n.forecast-card img {\n  background-color: var(--image-background-color);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3dCO0FBQ1E7O0FBRXJEO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsb0VBQTBCO0FBQ25ELHNCQUFzQixvRUFBMEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzRUFBNEI7QUFDOUI7QUFDQSxFQUFFLDBFQUFnQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxFQUFFLHNFQUE0QjtBQUM5Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLWNhbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI0YyRUZFOTtcXG4gIC0taGVhZGVyLWNvbG9yOiAjM0YzODZCO1xcbiAgLS1idXR0b24tY29sb3I6ICMxMTgzRDA7XFxuICAtLWltYWdlLWJhY2tncm91bmQtY29sb3I6ICM4OUI1RDk7XFxuXFxuICAtLWZvbnQtY29sb3ItbGlnaHQ6ICNGMkVGRTk7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWxpZ2h0KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbn1cXG5cXG4jc2VhcmNoLWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNzZWFyY2gge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogNnB4IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XFxufVxcblxcbiNzZWFyY2gtc3VibWl0LFxcbiN1bml0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXG4gIHBhZGRpbmc6IDZweCAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoLXN1Ym1pdDphY3RpdmUsXFxuI3VuaXQ6YWN0aXZlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xcbn1cXG5cXG4jdW5pdCB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3VuaXQuaW1wZXJpYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdJbXBlcmlhbCc7XFxufVxcblxcbiN1bml0Lm1ldHJpYzpiZWZvcmUge1xcbiAgY29udGVudDogJ01ldHJpYyc7XFxufVxcblxcbiNpbmZvIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVyZW0gNXJlbSAxMHJlbSAzZnIgMTByZW0gNXJlbSA1cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWltYWdlLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4jaW5mbyAud2VhdGhlci1zeW1ib2wge1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgd2lkdGg6IDVyZW07XFxufVxcblxcbiNpbmZvICoge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbG9jYXRpb24tbmFtZSB7XFxuICBmb250LXNpemU6IDIuOHJlbTtcXG59XFxuXFxuI2FsZXJ0LWJhbm5lciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5mb3JlY2FzdC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2hvdXJseS1mb3JlY2FzdCB7XFxuICB3aWR0aDogOTB2dztcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LCAxZnIpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jaG91cmx5LWZvcmVjYXN0IC53ZWF0aGVyLXN5bWJvbCB7XFxuICBoZWlnaHQ6IGNhbGMoOTB2dyAvIDkpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ud2luZCxcXG4uaHVtaWRpdHksXFxuLm1heC10ZW1wLFxcbi5taW4tdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAwIDVweDtcXG59XFxuXFxuI2RhaWx5LWZvcmVjYXN0IHtcXG4gIHdpZHRoOiA5MHZ3O1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZGFpbHktZm9yZWNhc3QgLndlYXRoZXItc3ltYm9sIHtcXG4gIGhlaWdodDogY2FsYyg5MHZ3IC8gNyk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5mb3JlY2FzdC1jYXJkICsgLmZvcmVjYXN0LWNhcmQge1xcbiAgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmZvcmVjYXN0LWNhcmQgLnRpbWUsXFxuLmZvcmVjYXN0LWNhcmQgLmRheSB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5mb3JlY2FzdC1jYXJkIGltZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbWFnZS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsaUNBQWlDOztFQUVqQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYiwwREFBMEQ7RUFDMUQsbUJBQW1COztFQUVuQiw4QkFBOEI7RUFDOUIsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBOzs7O0VBSUUsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTs7RUFFRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRjJFRkU5O1xcbiAgLS1oZWFkZXItY29sb3I6ICMzRjM4NkI7XFxuICAtLWJ1dHRvbi1jb2xvcjogIzExODNEMDtcXG4gIC0taW1hZ2UtYmFja2dyb3VuZC1jb2xvcjogIzg5QjVEOTtcXG5cXG4gIC0tZm9udC1jb2xvci1saWdodDogI0YyRUZFOTtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxufVxcblxcbiNzZWFyY2gtZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI3NlYXJjaCB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA4MCU7XFxuICBwYWRkaW5nOiA2cHggMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXG59XFxuXFxuI3NlYXJjaC1zdWJtaXQsXFxuI3VuaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWxpZ2h0KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcbiAgcGFkZGluZzogNnB4IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzZWFyY2gtc3VibWl0OmFjdGl2ZSxcXG4jdW5pdDphY3RpdmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvci1saWdodCk7XFxufVxcblxcbiN1bml0IHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jdW5pdC5pbXBlcmlhbDpiZWZvcmUge1xcbiAgY29udGVudDogJ0ltcGVyaWFsJztcXG59XFxuXFxuI3VuaXQubWV0cmljOmJlZm9yZSB7XFxuICBjb250ZW50OiAnTWV0cmljJztcXG59XFxuXFxuI2luZm8ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNXJlbSA1cmVtIDEwcmVtIDNmciAxMHJlbSA1cmVtIDVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW1hZ2UtYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbiNpbmZvIC53ZWF0aGVyLXN5bWJvbCB7XFxuICBoZWlnaHQ6IDVyZW07XFxuICB3aWR0aDogNXJlbTtcXG59XFxuXFxuI2luZm8gKiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNsb2NhdGlvbi1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcbn1cXG5cXG4jYWxlcnQtYmFubmVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmZvcmVjYXN0LWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWxpZ2h0KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jaG91cmx5LWZvcmVjYXN0IHtcXG4gIHdpZHRoOiA5MHZ3O1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIDFmcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNob3VybHktZm9yZWNhc3QgLndlYXRoZXItc3ltYm9sIHtcXG4gIGhlaWdodDogY2FsYyg5MHZ3IC8gOSk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi53aW5kLFxcbi5odW1pZGl0eSxcXG4ubWF4LXRlbXAsXFxuLm1pbi10ZW1wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4jZGFpbHktZm9yZWNhc3Qge1xcbiAgd2lkdGg6IDkwdnc7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNkYWlseS1mb3JlY2FzdCAud2VhdGhlci1zeW1ib2wge1xcbiAgaGVpZ2h0OiBjYWxjKDkwdncgLyA3KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmZvcmVjYXN0LWNhcmQgKyAuZm9yZWNhc3QtY2FyZCB7XFxuICBib3JkZXItbGVmdDogMHB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZm9yZWNhc3QtY2FyZCAudGltZSxcXG4uZm9yZWNhc3QtY2FyZCAuZGF5IHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmZvcmVjYXN0LWNhcmQgaW1nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWltYWdlLWJhY2tncm91bmQtY29sb3IpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3Qgc2VhcmNoQmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VhcmNoRmllbGQuaWQgPSAnc2VhcmNoLWZpZWxkJztcblxuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc2VhcmNoLnR5cGUgPSAnc2VhcmNoJztcbiAgICBzZWFyY2gubmFtZSA9ICdzZWFyY2gnO1xuICAgIHNlYXJjaC5pZCA9ICdzZWFyY2gnO1xuICAgIHNlYXJjaC5wbGFjZWhvbGRlciA9ICdEZW52ZXIsIFVTJztcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1Ym1pdC5pZCA9ICdzZWFyY2gtc3VibWl0JztcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU1VCTUlUJztcblxuICAgIHNlYXJjaEZpZWxkLmFwcGVuZENoaWxkKHNlYXJjaCk7XG4gICAgc2VhcmNoRmllbGQuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICByZXR1cm4gc2VhcmNoRmllbGQ7XG4gIH07XG4gIGNvbnN0IHVuaXRUb2dnbGVCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgdW5pdFRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHVuaXRUb2dnbGUuaWQgPSAndW5pdCc7XG4gICAgdW5pdFRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdGJyk7XG4gICAgdW5pdFRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdtcGgnKTtcbiAgICB1bml0VG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2ltcGVyaWFsJyk7XG4gICAgdW5pdFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHVuaXRUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnRicpO1xuICAgICAgdW5pdFRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdtcGgnKTtcbiAgICAgIHVuaXRUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnaW1wZXJpYWwnKTtcbiAgICAgIHVuaXRUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnQycpO1xuICAgICAgdW5pdFRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdtL3MnKTtcbiAgICAgIHVuaXRUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnbWV0cmljJyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVuaXRUb2dnbGU7XG4gIH07XG4gIGNvbnN0IHF1aWNrSW5mb0JhciA9ICh3ZWF0aGVyLCBpY29uLCB3ZWF0aGVyRGVzY3IsIGxvY2F0aW9uLCB0ZW1wLCBtaW4sIG1heCwgZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdW5pdCcpLmNsYXNzTGlzdFswXTtcblxuICAgIGNvbnN0IGluZm9CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvQmFyLmlkID0gJ2luZm8nO1xuICAgIGluZm9CYXIuY2xhc3NMaXN0LmFkZCh3ZWF0aGVyKTtcbiAgICBjb25zdCB3ZWF0aGVyU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgd2VhdGhlclN5bWJvbC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXN5bWJvbCcpO1xuICAgIHdlYXRoZXJTeW1ib2wuc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ2A7XG4gICAgd2VhdGhlclN5bWJvbC5hbHQgPSB3ZWF0aGVyRGVzY3I7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWRlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGVzY3I7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbmFtZS5pZCA9ICdsb2NhdGlvbi1uYW1lJztcbiAgICBuYW1lLnRleHRDb250ZW50ID0gbG9jYXRpb247XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXRlbXBlcmF0dXJlJyk7XG4gICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHt0ZW1wfSDCsCR7dW5pdH1gO1xuXG4gICAgY29uc3QgdGVtcEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wSGlnaC5jbGFzc0xpc3QuYWRkKCdtYXgtdGVtcCcpO1xuICAgIGNvbnN0IHRlbXBIaWdoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wSGlnaExhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgdGVtcEhpZ2hMYWJlbC50ZXh0Q29udGVudCA9ICdIaWdoOic7XG4gICAgY29uc3QgdGVtcEhpZ2hWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBIaWdoVmFsdWUuY2xhc3NMaXN0LmFkZCgndmFsdWUnKTtcbiAgICB0ZW1wSGlnaFZhbHVlLnRleHRDb250ZW50ID0gYCR7bWF4fSDCsCR7dW5pdH1gO1xuICAgIHRlbXBIaWdoLmFwcGVuZENoaWxkKHRlbXBIaWdoTGFiZWwpO1xuICAgIHRlbXBIaWdoLmFwcGVuZENoaWxkKHRlbXBIaWdoVmFsdWUpO1xuXG4gICAgY29uc3QgdGVtcExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBMb3cuY2xhc3NMaXN0LmFkZCgnbWluLXRlbXAnKTtcbiAgICBjb25zdCB0ZW1wTG93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wTG93TGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgICB0ZW1wTG93TGFiZWwudGV4dENvbnRlbnQgPSAnTG93Oic7XG4gICAgY29uc3QgdGVtcExvd1ZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVtcExvd1ZhbHVlLmNsYXNzTGlzdC5hZGQoJ3ZhbHVlJyk7XG4gICAgdGVtcExvd1ZhbHVlLnRleHRDb250ZW50ID0gYCR7bWlufSDCsCR7dW5pdH1gO1xuICAgIHRlbXBMb3cuYXBwZW5kQ2hpbGQodGVtcExvd0xhYmVsKTtcbiAgICB0ZW1wTG93LmFwcGVuZENoaWxkKHRlbXBMb3dWYWx1ZSk7XG5cbiAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXkuY2xhc3NMaXN0LmFkZCgndGltZScpO1xuICAgIGRheS50ZXh0Q29udGVudCA9IGRhdGU7XG5cbiAgICBjb25zdCB0ZW1wRXh0cmVtYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBFeHRyZW1hLmNsYXNzTGlzdC5hZGQoJ2V4dHJlbWEtdGVtcGVyYXR1cmUnKTtcbiAgICB0ZW1wRXh0cmVtYS5hcHBlbmRDaGlsZCh0ZW1wSGlnaCk7XG4gICAgdGVtcEV4dHJlbWEuYXBwZW5kQ2hpbGQodGVtcExvdyk7XG5cbiAgICBpbmZvQmFyLmFwcGVuZENoaWxkKHdlYXRoZXJTeW1ib2wpO1xuICAgIGluZm9CYXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGluZm9CYXIuYXBwZW5kQ2hpbGQodGVtcEV4dHJlbWEpO1xuICAgIGluZm9CYXIuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgaW5mb0Jhci5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZSk7XG4gICAgaW5mb0Jhci5hcHBlbmRDaGlsZChkYXkpO1xuICAgIHJldHVybiBpbmZvQmFyO1xuICB9O1xuICBjb25zdCBjcmVhdGVUb3BIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbG9nby50ZXh0Q29udGVudCA9ICdXZWF0aGVyIEFwcCc7XG4gICAgY29uc3Qgc2VhcmNoID0gc2VhcmNoQmFyKCk7XG4gICAgY29uc3QgdW5pdFRvZ2dsZSA9IHVuaXRUb2dnbGVCdG4oKTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodW5pdFRvZ2dsZSk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbiAgfTtcbiAgY29uc3QgY3JlYXRlSW5mb0hlYWRlciA9IChjdXJyZW50LCBtaW4sIG1heCkgPT4ge1xuICAgIGNvbnN0IG9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwO1xuICAgIGxldCB0aW1lID0gbmV3IERhdGUoKGN1cnJlbnQuZHQgKyBvZmZzZXQgKyBjdXJyZW50LnRpbWV6b25lKSAqIDEwMDApO1xuICAgIGxldCBob3VycyA9IHRpbWUuZ2V0SG91cnMoKTtcbiAgICBsZXQgbWludXRlcyA9IHRpbWUuZ2V0TWludXRlcygpO1xuICAgIGxldCB0aW1lQWJydjtcbiAgICBpZiAoaG91cnMgPiAxMikge1xuICAgICAgdGltZUFicnYgPSAnUE0nO1xuICAgICAgaG91cnMgJT0gMTI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVBYnJ2ID0gJ0FNJztcbiAgICB9XG4gICAgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBob3VycyA9IDEyO1xuICAgIH1cbiAgICBpZiAoaG91cnMgPCAxMCkge1xuICAgICAgaG91cnMgPSBgMCR7aG91cnN9YDtcbiAgICB9XG4gICAgaWYgKG1pbnV0ZXMgPCAxMCkge1xuICAgICAgbWludXRlcyA9IGAwJHttaW51dGVzfWA7XG4gICAgfVxuICAgIHRpbWUgPSBgJHtob3Vyc306JHttaW51dGVzfSAke3RpbWVBYnJ2fWA7XG4gICAgY29uc3QgaW5mbyA9IHF1aWNrSW5mb0JhcihcbiAgICAgIGN1cnJlbnQud2VhdGhlclswXS5tYWluLFxuICAgICAgY3VycmVudC53ZWF0aGVyWzBdLmljb24sXG4gICAgICBjdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICBgJHtjdXJyZW50Lm5hbWV9LCAke2N1cnJlbnQuc3lzLmNvdW50cnl9YCxcbiAgICAgIGN1cnJlbnQubWFpbi50ZW1wLFxuICAgICAgbWluLFxuICAgICAgbWF4LFxuICAgICAgdGltZSxcbiAgICApO1xuICAgIHJldHVybiBpbmZvO1xuICB9O1xuICBjb25zdCBjcmVhdGVBbGVydCA9IChhbGVydCkgPT4ge1xuICAgIGNvbnN0IGFsZXJ0QmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWxlcnRCYW5uZXIuaWQgPSAnYWxlcnQtYmFubmVyJztcbiAgICBhbGVydEJhbm5lci50ZXh0Q29udGVudCA9IGFsZXJ0WzBdLmV2ZW50O1xuICAgIHJldHVybiBhbGVydEJhbm5lcjtcbiAgfTtcbiAgY29uc3QgZm9yZWNhc3RDYXJkID0gKHRpbWUsIHdlYXRoZXIsIGljb24sIHdlYXRoZXJEZXNjciwgbG93LCBoaWdoKSA9PiB7XG4gICAgY29uc3QgdW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bml0JykuY2xhc3NMaXN0WzBdO1xuXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtY2FyZCcsICdkYWlseScpO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuICAgIGNvbnN0IGRheSA9IG5ldyBEYXRlKHRpbWUgKiAxMDAwKS5nZXREYXkoKTtcbiAgICBjb25zdCBkYXlzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSBkYXlzW2RheV07XG4gICAgY29uc3Qgd2VhdGhlclN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHdlYXRoZXJTeW1ib2wuY2xhc3NMaXN0LmFkZCh3ZWF0aGVyLCAnd2VhdGhlci1zeW1ib2wnKTtcbiAgICB3ZWF0aGVyU3ltYm9sLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUA0eC5wbmdgO1xuICAgIHdlYXRoZXJTeW1ib2wuYWx0ID0gd2VhdGhlckRlc2NyO1xuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWRlc2NyaXB0aW9uJyk7XG4gICAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlckRlc2NyO1xuXG4gICAgY29uc3QgdGVtcEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wSGlnaC5jbGFzc0xpc3QuYWRkKCdtYXgtdGVtcCcpO1xuICAgIGNvbnN0IHRlbXBIaWdoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wSGlnaExhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgdGVtcEhpZ2hMYWJlbC50ZXh0Q29udGVudCA9ICdIaWdoOic7XG4gICAgY29uc3QgdGVtcEhpZ2hWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBIaWdoVmFsdWUuY2xhc3NMaXN0LmFkZCgndmFsdWUnKTtcbiAgICB0ZW1wSGlnaFZhbHVlLnRleHRDb250ZW50ID0gYCR7aGlnaH0gwrAke3VuaXR9YDtcbiAgICB0ZW1wSGlnaC5hcHBlbmRDaGlsZCh0ZW1wSGlnaExhYmVsKTtcbiAgICB0ZW1wSGlnaC5hcHBlbmRDaGlsZCh0ZW1wSGlnaFZhbHVlKTtcblxuICAgIGNvbnN0IHRlbXBMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wTG93LmNsYXNzTGlzdC5hZGQoJ21pbi10ZW1wJyk7XG4gICAgY29uc3QgdGVtcExvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVtcExvd0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgdGVtcExvd0xhYmVsLnRleHRDb250ZW50ID0gJ0xvdzonO1xuICAgIGNvbnN0IHRlbXBMb3dWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBMb3dWYWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuICAgIHRlbXBMb3dWYWx1ZS50ZXh0Q29udGVudCA9IGAke2xvd30gwrAke3VuaXR9YDtcbiAgICB0ZW1wTG93LmFwcGVuZENoaWxkKHRlbXBMb3dMYWJlbCk7XG4gICAgdGVtcExvdy5hcHBlbmRDaGlsZCh0ZW1wTG93VmFsdWUpO1xuXG4gICAgY2FyZC5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHdlYXRoZXJTeW1ib2wpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQod2VhdGhlckRlc2NyaXB0aW9uKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRlbXBIaWdoKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRlbXBMb3cpO1xuICAgIHJldHVybiBjYXJkO1xuICB9O1xuICBjb25zdCBzZXZlbkRheUZvcmVjYXN0ID0gKHdlZWspID0+IHtcbiAgICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcmVjYXN0LmlkID0gJ2RhaWx5LWZvcmVjYXN0JztcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZGF5Q2FyZCA9IGZvcmVjYXN0Q2FyZChcbiAgICAgICAgd2Vla1tpXS5kdCxcbiAgICAgICAgd2Vla1tpXS53ZWF0aGVyWzBdLm1haW4sXG4gICAgICAgIHdlZWtbaV0ud2VhdGhlclswXS5pY29uLFxuICAgICAgICB3ZWVrW2ldLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICAgIHdlZWtbaV0udGVtcC5taW4sXG4gICAgICAgIHdlZWtbaV0udGVtcC5tYXgsXG4gICAgICApO1xuICAgICAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoZGF5Q2FyZCk7XG4gICAgfVxuICAgIHJldHVybiBmb3JlY2FzdDtcbiAgfTtcbiAgY29uc3Qgd2luZERlZ3JlZXNDb252ZXJ0ID0gKGRlZ3JlZXMpID0+IHtcbiAgICBsZXQgc3RyaW5nO1xuICAgIGlmIChkZWdyZWVzID4gMzQ4Ljc1IHx8IGRlZ3JlZXMgPD0gMjIuNSkge1xuICAgICAgc3RyaW5nID0gJ04nO1xuICAgIH0gZWxzZSBpZiAoZGVncmVlcyA+IDIyLjUgJiYgZGVncmVlcyA8PSA2Ny41KSB7XG4gICAgICBzdHJpbmcgPSAnTkUnO1xuICAgIH0gZWxzZSBpZiAoZGVncmVlcyA+IDY3LjUgJiYgZGVncmVlcyA8PSAxMTIuNSkge1xuICAgICAgc3RyaW5nID0gJ0UnO1xuICAgIH0gZWxzZSBpZiAoZGVncmVlcyA+IDExMi41ICYmIGRlZ3JlZXMgPD0gMTU3LjUpIHtcbiAgICAgIHN0cmluZyA9ICdTRSc7XG4gICAgfSBlbHNlIGlmIChkZWdyZWVzID4gMTU3LjUgJiYgZGVncmVlcyA8PSAyMDIuNSkge1xuICAgICAgc3RyaW5nID0gJ1MnO1xuICAgIH0gZWxzZSBpZiAoZGVncmVlcyA+IDIwMi41ICYmIGRlZ3JlZXMgPD0gMjQ3LjUpIHtcbiAgICAgIHN0cmluZyA9ICdTVyc7XG4gICAgfSBlbHNlIGlmIChkZWdyZWVzID4gMjQ3LjUgJiYgZGVncmVlcyA8PSAyOTIuNSkge1xuICAgICAgc3RyaW5nID0gJ1cnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJpbmcgPSAnTlcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xuICBjb25zdCBob3VybHlGb3JlY2FzdENhcmQgPSAoaG91cikgPT4ge1xuICAgIGNvbnN0IHVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdW5pdCcpO1xuXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtY2FyZCcsICdob3VybHknKTtcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGltZS5jbGFzc0xpc3QuYWRkKCd0aW1lJyk7XG4gICAgbGV0IGN1ckRhdGUgPSBuZXcgRGF0ZShob3VyLmR0ICogMTAwMCkuZ2V0SG91cnMoKTtcbiAgICBsZXQgdGltZUFicnY7XG4gICAgaWYgKGN1ckRhdGUgPiAxMikge1xuICAgICAgdGltZUFicnYgPSAnUE0nO1xuICAgICAgY3VyRGF0ZSAlPSAxMjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZUFicnYgPSAnQU0nO1xuICAgIH1cbiAgICBpZiAoY3VyRGF0ZSA9PT0gMCkge1xuICAgICAgY3VyRGF0ZSA9IDEyO1xuICAgIH1cbiAgICBpZiAoY3VyRGF0ZSA8IDEwKSB7XG4gICAgICBjdXJEYXRlID0gYDAke2N1ckRhdGV9YDtcbiAgICB9XG4gICAgdGltZS50ZXh0Q29udGVudCA9IGAke2N1ckRhdGV9OjAwICR7dGltZUFicnZ9YDtcblxuICAgIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB3ZWF0aGVyLmNsYXNzTGlzdC5hZGQoaG91ci53ZWF0aGVyWzBdLm1haW4sICd3ZWF0aGVyLXN5bWJvbCcpO1xuICAgIHdlYXRoZXIuc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2hvdXIud2VhdGhlclswXS5pY29ufUA0eC5wbmdgO1xuICAgIHdlYXRoZXIuYWx0ID0gaG91ci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VhdGhlckRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItZGVzY3JpcHRpb24nKTtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBob3VyLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVtcC5jbGFzc0xpc3QuYWRkKCd0ZW1wZXJhdHVyZScpO1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtob3VyLnRlbXB9IMKwJHt1bml0LmNsYXNzTGlzdFswXX1gO1xuXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eScpO1xuICAgIGNvbnN0IGh1bWlkaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBodW1pZGl0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgaHVtaWRpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdIdW1pZGl0eTonO1xuICAgIGNvbnN0IGh1bWlkaXR5VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBodW1pZGl0eVZhbHVlLmNsYXNzTGlzdC5hZGQoJ3ZhbHVlJyk7XG4gICAgaHVtaWRpdHlWYWx1ZS50ZXh0Q29udGVudCA9IGAke2hvdXIuaHVtaWRpdHl9JWA7XG4gICAgaHVtaWRpdHkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlMYWJlbCk7XG4gICAgaHVtaWRpdHkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlWYWx1ZSk7XG5cbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2luZC5jbGFzc0xpc3QuYWRkKCd3aW5kJyk7XG4gICAgY29uc3Qgd2luZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2luZExhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgd2luZExhYmVsLnRleHRDb250ZW50ID0gJ1dpbmQ6JztcbiAgICBjb25zdCB3aW5kVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW5kVmFsdWUuY2xhc3NMaXN0LmFkZCgndmFsdWUnKTtcbiAgICB3aW5kVmFsdWUudGV4dENvbnRlbnQgPSBgJHtob3VyLndpbmRfc3BlZWR9JHt1bml0LmNsYXNzTGlzdFsxXX0gJHt3aW5kRGVncmVlc0NvbnZlcnQoaG91ci53aW5kX2RlZyl9YDtcbiAgICB3aW5kLmFwcGVuZENoaWxkKHdpbmRMYWJlbCk7XG4gICAgd2luZC5hcHBlbmRDaGlsZCh3aW5kVmFsdWUpO1xuXG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHdlYXRoZXIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQod2VhdGhlckRlc2NyaXB0aW9uKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRlbXApO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQod2luZCk7XG4gICAgcmV0dXJuIGNhcmQ7XG4gIH07XG4gIGNvbnN0IHRvZGF5SG91cmx5Rm9yZWNhc3QgPSAodG9kYXkpID0+IHtcbiAgICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcmVjYXN0LmlkID0gJ2hvdXJseS1mb3JlY2FzdCc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGhvdXIgPSBob3VybHlGb3JlY2FzdENhcmQodG9kYXlbaV0pO1xuICAgICAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoaG91cik7XG4gICAgfVxuICAgIHJldHVybiBmb3JlY2FzdDtcbiAgfTtcbiAgY29uc3QgYWRkUGFnZUNvbnRlbnQgPSAod2VhdGhlckZvcmVjYXN0LCBvbmVDYWxsRm9yZWNhc3QpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGluZm8gPSBjcmVhdGVJbmZvSGVhZGVyKFxuICAgICAgd2VhdGhlckZvcmVjYXN0LFxuICAgICAgb25lQ2FsbEZvcmVjYXN0LmRhaWx5WzBdLnRlbXAubWluLFxuICAgICAgb25lQ2FsbEZvcmVjYXN0LmRhaWx5WzBdLnRlbXAubWF4LFxuICAgICk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIGlmIChvbmVDYWxsRm9yZWNhc3QuYWxlcnRzKSB7XG4gICAgICBjb25zdCBhbGVydCA9IGNyZWF0ZUFsZXJ0KG9uZUNhbGxGb3JlY2FzdC5hbGVydHMpO1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChhbGVydCk7XG4gICAgfVxuXG4gICAgY29uc3QgaG91cmx5ID0gdG9kYXlIb3VybHlGb3JlY2FzdChvbmVDYWxsRm9yZWNhc3QuaG91cmx5KTtcbiAgICBjb25zdCBkYWlseSA9IHNldmVuRGF5Rm9yZWNhc3Qob25lQ2FsbEZvcmVjYXN0LmRhaWx5KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhvdXJseSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChkYWlseSk7XG4gIH07XG4gIGNvbnN0IGNyZWF0ZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVUb3BIZWFkZXIoKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIH07XG4gIGNvbnN0IGRlbGV0ZU9sZENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luZm8nKTtcbiAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGVydC1iYW5uZXInKTtcbiAgICBjb25zdCBob3VybHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG91cmx5LWZvcmVjYXN0Jyk7XG4gICAgY29uc3QgZGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFpbHktZm9yZWNhc3QnKTtcbiAgICBib2R5LnJlbW92ZUNoaWxkKGluZm8pO1xuICAgIGlmIChhbGVydCkge1xuICAgICAgYm9keS5yZW1vdmVDaGlsZChhbGVydCk7XG4gICAgfVxuICAgIGJvZHkucmVtb3ZlQ2hpbGQoaG91cmx5KTtcbiAgICBib2R5LnJlbW92ZUNoaWxkKGRhaWx5KTtcbiAgfTtcbiAgY29uc3QgcmVkcmF3UGFnZSA9ICh3ZWF0aGVyRm9yZWNhc3QsIG9uZUNhbGxGb3JlY2FzdCkgPT4ge1xuICAgIGRlbGV0ZU9sZENvbnRlbnQoKTtcbiAgICBhZGRQYWdlQ29udGVudCh3ZWF0aGVyRm9yZWNhc3QsIG9uZUNhbGxGb3JlY2FzdCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgY3JlYXRlUGFnZSwgYWRkUGFnZUNvbnRlbnQsIHJlZHJhd1BhZ2UgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyO1xuIiwiY29uc3Qgd2VhdGhlckNhbGxlciA9ICgoKSA9PiB7XG4gIC8qIEkgYW0gYXdhcmUgb2YgdGhpcyBzZWN1cml0eSByaXNrIHdpdGggdGhpcyBrZXkgYmVpbmcgdmlld2FibGUsIGhvd2V2ZXIsXG4gICAgIGl0IGlzIGEgZnJlZSBrZXkgYW5kIHRoaXMgaXMgYSBsZWFybmluZyBwcm9qZWN0LCBzbyB0aGUgcmlzayBpcyBtaW5pbWFsICovXG4gIGNvbnN0IEFQSV9LRVkgPSAnNzA0YjBhOGM2MjliODY5ODgwYmQ1MmM1YmU0MTk2NjEnO1xuICBjb25zdCBmZXRjaFdlYXRoZXIgPSBhc3luYyAobG9jYXRpb24sIHVuaXRzKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke0FQSV9LRVl9YCk7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlcjtcbiAgfTtcbiAgY29uc3QgZmV0Y2hPbmVDYWxsID0gYXN5bmMgKGxhdCwgbG9uLCB1bml0cykgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke0FQSV9LRVl9YCk7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlcjtcbiAgfTtcblxuICByZXR1cm4geyBmZXRjaFdlYXRoZXIsIGZldGNoT25lQ2FsbCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlckNhbGxlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHdlYXRoZXJDYWxsZXIgZnJvbSAnLi93ZWF0aGVyLWNhbGxlcic7XG5pbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSAnLi9kaXNwbGF5LWNvbnRyb2xsZXInO1xuXG5sZXQgY3VycmVudFdlYXRoZXI7XG5sZXQgY3VycmVudEZ1bGw7XG5cbmFzeW5jIGZ1bmN0aW9uIG5ld0xvY2F0aW9uKGxvY2F0aW9uLCB1bml0cykge1xuICBjdXJyZW50V2VhdGhlciA9IGF3YWl0IHdlYXRoZXJDYWxsZXIuZmV0Y2hXZWF0aGVyKGxvY2F0aW9uLCB1bml0cyk7XG4gIGN1cnJlbnRGdWxsID0gYXdhaXQgd2VhdGhlckNhbGxlci5mZXRjaE9uZUNhbGwoXG4gICAgY3VycmVudFdlYXRoZXIuY29vcmQubGF0LFxuICAgIGN1cnJlbnRXZWF0aGVyLmNvb3JkLmxvbixcbiAgICB1bml0cyxcbiAgKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxQYWdlKCkge1xuICBkaXNwbGF5Q29udHJvbGxlci5jcmVhdGVQYWdlKCk7XG4gIGF3YWl0IG5ld0xvY2F0aW9uKCdkZW52ZXInLCAnaW1wZXJpYWwnKTtcbiAgZGlzcGxheUNvbnRyb2xsZXIuYWRkUGFnZUNvbnRlbnQoY3VycmVudFdlYXRoZXIsIGN1cnJlbnRGdWxsKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIG5ld1BhZ2UobG9jYXRpb24sIHVuaXRzKSB7XG4gIGF3YWl0IG5ld0xvY2F0aW9uKGxvY2F0aW9uLCB1bml0cyk7XG4gIGRpc3BsYXlDb250cm9sbGVyLnJlZHJhd1BhZ2UoY3VycmVudFdlYXRoZXIsIGN1cnJlbnRGdWxsKTtcbn1cblxuaW5pdGlhbFBhZ2UoKTtcblxuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpO1xuY29uc3Qgc2VhcmNoU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1zdWJtaXQnKTtcbmNvbnN0IHVuaXRUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdW5pdCcpO1xuXG5zZWFyY2hTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBuZXdQYWdlKHNlYXJjaC52YWx1ZSwgdW5pdFRvZ2dsZS5jbGFzc0xpc3RbMl0pKTtcbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gIGlmIChlLmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICBuZXdQYWdlKHNlYXJjaC52YWx1ZSwgdW5pdFRvZ2dsZS5jbGFzc0xpc3RbMl0pO1xuICB9XG59KTtcbnVuaXRUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBuZXdQYWdlKGN1cnJlbnRXZWF0aGVyLm5hbWUsIHVuaXRUb2dnbGUuY2xhc3NMaXN0WzJdKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=