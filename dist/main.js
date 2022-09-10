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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Oxanium&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  display: grid;\n  grid: \n    'header' .1fr\n    'main' 1fr   \n    /1fr;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n\n#header {\n  display: flex;\n  font-size: 5.5vw;\n  justify-content: center;\n  align-items: center;\n  grid-area: header;\n  font-family: 'Black Ops One', cursive;\n  padding: 0px;\n}\n\n#main {\n  font-family: 'Oxanium', cursive;\n  grid-area: main;\n  display: grid;\n  grid:\n    'narrative narrative' .2fr\n    'p1        p2' 1fr\n    /1fr       1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n#narrative {\n  font-size: 2.3vw;\n  grid-area: narrative;\n  position: relative;\n  text-align: center;\n  width: 100%;\n  padding: 10px 40px;\n}\n\n#x-btn {\n  padding: 4px;\n  border: 1px solid black;\n  border-radius: 3px;\n  background-color: rgba(160, 160, 160, 0.8);\n  box-shadow: 2px 2px 3px gray;\n}\n\n#p1 {\n  grid-area: p1;\n}\n\n#p2 {\n  grid-area: p2;\n}\n\n.board {\n  display: grid;\n  grid: repeat(10, 2.5vw) / repeat(10, 2.5vw);\n  grid-auto-flow: column;\n  gap: 5px;\n}\n\n.square {\n  width: 2.5vw;\n  height: 2.5vw;\n  background-color: #009dff;\n  opacity: .9;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px black;\n}\n\n.hovered, .placed {\n  background-color: #848484;\n  transition: .4s;\n}\n\n.hoverable:hover {\n  background-color: #848484;\n  transition: .4s;\n}\n\n.red {\n  background-color: rgb(222, 27, 27);\n}\n\n.miss {\n  background-color: #9bd8ff;\n}\n\n@media (max-width: 800px) {\n  .board {\n    grid: repeat(10, 3vw) / repeat(10, 3vw);\n  }\n  \n  .square {\n    width: 3vw;\n    height: 3vw;\n  }\n}\n\n@media (max-width: 550px) {\n\n  #main {\n    grid:\n      'narrative' 75px\n      'p1' .8fr \n      'p2' 1fr\n      /1fr;\n    align-items: flex-start;\n  }\n\n  #header {\n    font-size: 10vw;\n    padding-bottom: 10px;\n  }\n\n  #narrative {\n    font-size: 4vw;\n    padding: 0px 20px;\n  }\n  \n  #p1 {\n    padding-top: 10px;\n  }\n\n  .board {\n    grid: repeat(10, 5vw) / repeat(10, 5vw);\n    gap: 2px;\n  }\n  \n  .square {\n    width: 5vw;\n    height: 5vw;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yDAAgD;EAChD,sBAAsB;EACtB,2BAA2B;EAC3B,aAAa;EACb;;;QAGM;EACN,YAAY;EACZ,aAAa;EACb,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,qCAAqC;EACrC,YAAY;AACd;;AAEA;EACE,+BAA+B;EAC/B,eAAe;EACf,aAAa;EACb;;;kBAGgB;EAChB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,0CAA0C;EAC1C,4BAA4B;AAC9B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,2CAA2C;EAC3C,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,WAAW;EACX,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;IACE,uCAAuC;EACzC;;EAEA;IACE,UAAU;IACV,WAAW;EACb;AACF;;AAEA;;EAEE;IACE;;;;UAIM;IACN,uBAAuB;EACzB;;EAEA;IACE,eAAe;IACf,oBAAoB;EACtB;;EAEA;IACE,cAAc;IACd,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,uCAAuC;IACvC,QAAQ;EACV;;EAEA;IACE,UAAU;IACV,WAAW;EACb;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Oxanium&display=swap');\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-image: url('./images/background.jpg');\n  background-size: cover;\n  background-position: center;\n  display: grid;\n  grid: \n    'header' .1fr\n    'main' 1fr   \n    /1fr;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n\n#header {\n  display: flex;\n  font-size: 5.5vw;\n  justify-content: center;\n  align-items: center;\n  grid-area: header;\n  font-family: 'Black Ops One', cursive;\n  padding: 0px;\n}\n\n#main {\n  font-family: 'Oxanium', cursive;\n  grid-area: main;\n  display: grid;\n  grid:\n    'narrative narrative' .2fr\n    'p1        p2' 1fr\n    /1fr       1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n#narrative {\n  font-size: 2.3vw;\n  grid-area: narrative;\n  position: relative;\n  text-align: center;\n  width: 100%;\n  padding: 10px 40px;\n}\n\n#x-btn {\n  padding: 4px;\n  border: 1px solid black;\n  border-radius: 3px;\n  background-color: rgba(160, 160, 160, 0.8);\n  box-shadow: 2px 2px 3px gray;\n}\n\n#p1 {\n  grid-area: p1;\n}\n\n#p2 {\n  grid-area: p2;\n}\n\n.board {\n  display: grid;\n  grid: repeat(10, 2.5vw) / repeat(10, 2.5vw);\n  grid-auto-flow: column;\n  gap: 5px;\n}\n\n.square {\n  width: 2.5vw;\n  height: 2.5vw;\n  background-color: #009dff;\n  opacity: .9;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px black;\n}\n\n.hovered, .placed {\n  background-color: #848484;\n  transition: .4s;\n}\n\n.hoverable:hover {\n  background-color: #848484;\n  transition: .4s;\n}\n\n.red {\n  background-color: rgb(222, 27, 27);\n}\n\n.miss {\n  background-color: #9bd8ff;\n}\n\n@media (max-width: 800px) {\n  .board {\n    grid: repeat(10, 3vw) / repeat(10, 3vw);\n  }\n  \n  .square {\n    width: 3vw;\n    height: 3vw;\n  }\n}\n\n@media (max-width: 550px) {\n\n  #main {\n    grid:\n      'narrative' 75px\n      'p1' .8fr \n      'p2' 1fr\n      /1fr;\n    align-items: flex-start;\n  }\n\n  #header {\n    font-size: 10vw;\n    padding-bottom: 10px;\n  }\n\n  #narrative {\n    font-size: 4vw;\n    padding: 0px 20px;\n  }\n  \n  #p1 {\n    padding-top: 10px;\n  }\n\n  .board {\n    grid: repeat(10, 5vw) / repeat(10, 5vw);\n    gap: 2px;\n  }\n  \n  .square {\n    width: 5vw;\n    height: 5vw;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AIPlaceShipPhase": () => (/* binding */ AIPlaceShipPhase),
/* harmony export */   "attackPhase": () => (/* binding */ attackPhase),
/* harmony export */   "gameOver": () => (/* binding */ gameOver),
/* harmony export */   "p1Box": () => (/* binding */ p1Box),
/* harmony export */   "p2Box": () => (/* binding */ p2Box),
/* harmony export */   "playerAttack": () => (/* binding */ playerAttack),
/* harmony export */   "playerPlaceShip": () => (/* binding */ playerPlaceShip),
/* harmony export */   "playerPlaceShipPhase": () => (/* binding */ playerPlaceShipPhase),
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard)
/* harmony export */ });
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */

const p1Box = document.querySelector("#p1");
const p2Box = document.querySelector("#p2");
const narrative = document.querySelector("#narrative");

// Used in switchAxis and renderShadow and playerPlaceShip
let axis = "y";
let lastCoordsRendered;
let lastShip;
let shipBeingPlaced;
let highlightSquares = false;
let touched;
window.addEventListener('mousedown', () => {highlightSquares = true;});
window.addEventListener('mouseup', () => {highlightSquares = false;});
window.addEventListener('touchstart', () => {highlightSquares = true});
window.addEventListener('touchend', () => {highlightSquares = false});
window.addEventListener('touchmove', handleTouchMove, {passive: false});

// Used for playerPlaceShipPhase and attackPhase
let i = 0;
let p2;
let p1Board;
let p2Board;
let p1Ships;
let currentPlayer;
let turn = 0;

// Used to tell game.js when playerPlaceShipPhase is over
const shipsPlaced = new Event("shipsPlaced");
const gameOverEvent = new Event("gameOver");

// For AIPlaceShipPhase
let j = 0;

// Used to only vibrate mobile phone on first hit
let AIHits = 0;
let playerHits = 0;

// Helper functions for playerPlaceShipPhase
const switchAxis = (board) => {
  renderShadow(lastCoordsRendered, "clear", board, lastShip);
  axis === "x" ? (axis = "y") : (axis = "x");
  if(highlightSquares){
    renderShadow(lastCoordsRendered, "fill", board, lastShip);
  }
};

const renderShadow = (coords, fill, board, ship) => {
  let [ x, y ] = coords;
  let el;
  let collision = false;
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  if (board.checkCollision(ship, x, y, axis) && fill !== "clear") {
    collision = true;
  }
  for (let k = 0; k < ship.length; k += 1) {
    if (axis === "x") {
      el = document.querySelector(
        `#p1 .square[data-x="${x + k}"][data-y="${y}"]`
      );
    } else {
      el = document.querySelector(
        `#p1 .square[data-x="${x}"][data-y="${y + k}"]`
      );
    }
    if (el) {
      fill === "fill" && el.classList.add("hovered");
      if (fill === "clear") {
        el.classList.remove("hovered");
        el.classList.remove("red");
      }
      fill === "place" && el.classList.add("placed");
      if (collision === true && fill !== "place") {
        el.classList.add("red");
      }
    }
  }
  lastCoordsRendered = [x, y];
  lastShip = ship;
};

const removeListeners = () => {
  const squares = document.querySelectorAll("#p1 .board .square");
  squares.forEach((square) => {
    square.replaceWith(square.cloneNode());
  });
  window.removeEventListener("keydown", (e) => {});
};

const clickToPlace = (coords, board, ship) => {
  let [ x, y ] = coords;
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  if (board.checkCollision(ship, x, y, axis)) {
    renderShadow([x, y], 'clear', board, ship);
    return;
  }
  board.place(ship, x, y, axis);
  renderShadow(coords, "place", board, ship);
  removeListeners();
  if (i === 5) {
    document.dispatchEvent(shipsPlaced);
    window.removeEventListener('touchmove', handleTouchMove, {passive: false});
  }
  playerPlaceShipPhase(p1Board, p1Ships);
};

const playerPlaceShip = (board, ship) => {
  shipBeingPlaced = ship;
  p1Board = board;
  const squares = document.querySelectorAll("#p1 .board .square");
  switchAxisNarrative();

  if (i === 0) {
    window.addEventListener("keydown", (e) => {
      if (e.key === "x") {
        switchAxis(board);
      }
    });
  }

  squares.forEach((square) => {
    square.addEventListener('touchstart', (e) => {
      const { x, y } = e.target.dataset;
      renderShadow([x, y], "fill", board, ship);
      touched = e.target;
    });
    square.addEventListener("mouseover", (e) => {
      highlightSquares = true;
      const { x, y } = e.target.dataset;
      renderShadow([x, y], "fill", board, ship);
    });
    square.addEventListener("mouseout", (e) => {
      highlightSquares = false;
      const { x, y } = e.target.dataset;
      renderShadow([x, y], "clear", board, ship)
    });
    square.addEventListener("touchend", () => {
      clickToPlace(lastCoordsRendered, board, ship);
    });
    square.addEventListener("click", (e) => {
      highlightSquares = false;
      const { x, y } = e.target.dataset;
      clickToPlace([x, y], board, ship)
    });
  });
};

function playerPlaceShipPhase(board, ships) {

  if (i === 0) {
    p1Board = board;
    p1Ships = ships;
  }
  if (i <= 4) {
    playerPlaceShip(board, ships[i]);
    i += 1;
  }
}

// AI Place ship phase
const AIPlaceShipPhase = (board, ships, player) => {
  player.AIPlaceShip(board, ships[j]);
  j += 1;
  if (j === 5) {
    return;
  }
  AIPlaceShipPhase(board, ships, player);
};

const renderBoard = (board, box) => {
  // Clear old content prior to re-render if needed
  let grid = document.querySelector(`#${box.id} .board`);
  if (grid) {
    grid.textContent = "";
  } else {
    grid = document.createElement("div");
    grid.className = "board";
  }
  // Individual squares on board
  for (let k = 0; k <= 9; k += 1) {
    for (let l = 9; l >= 0; l -= 1) {
      const square = document.createElement("div");
      square.className = "square";
      square.dataset.x = k;
      square.dataset.y = l;
      grid.append(square);
    }
  }
  box.append(grid);
};

const updateAIBoard = (board, x, y) => {
  const square = document.querySelector(`#p2 .square[data-x="${x}"][data-y="${y}"]`);
  const boardValue = board.getMap()[x][y];

  if(boardValue === 0 || boardValue === 1) {
    square.classList.add('miss');
  }
  if(typeof boardValue === 'object') {
    square.classList.add('red');
  }
}

// Player attack phase - sends x, y from clicked square to board.incoming()
const attackCallback = (e, board) => {
  const { x, y } = e.target.dataset;
  
  // Remove hover effect and click to attack 
  const squares = document.querySelectorAll("#p2 .square");
  squares.forEach((el) => {
    el.classList.remove("hoverable");
    el.replaceWith(el.cloneNode());
  });

  // Update DOM and board
  updateAIBoard(board, x, y);
  board.incoming(x, y);
   
  // Test if sunk
  if(typeof board.getMap()[x][y] === 'object') {
    const ship = board.getMap()[x][y][0];
    if(navigator.vibrate && playerHits === 0) {
      navigator.vibrate([200, 200]);
      playerHits += 1;
    }
    if(ship.isSunk()) {
      narrate(`You've sunk the enemy's ${ship.type}!!!`);
      playerHits = 0;
    }
  }
 
  // Test if game is over
  if(!board.isGameOver()) {
    setTimeout(AIAttack, 500);
  } else if(board.isGameOver()) {
    document.dispatchEvent(gameOverEvent);
  }
};

// Player attack phase - adds click event listener and hover effect
const playerAttack = (board) => {
  currentPlayer = 1;
  const squares = document.querySelectorAll("#p2 .square");
  squares.forEach((el) => {
    el.addEventListener("click", (e) => attackCallback(e, board));
    el.classList.add("hoverable");
  });
  if(turn === 0) {
    narrate("Click to fire on the enemy fleet");
  }
  turn += 1;
};

const updateBoard = (board, x, y) => {
  const square = document.querySelector(`#p1 .square[data-x="${x}"][data-y="${y}"]`);
  const boardValue = board.getMap()[x][y];
  if(boardValue === 1) {
    square.classList.add('miss');
  }
  if(typeof boardValue === 'object') {
    square.classList.add('red');
  }
}

function AIAttack() {
  currentPlayer = 2;
 
    p2.attack();
    const [ x, y ] = p2.getLastShot();
    updateBoard(p1Board, x, y);

    if(p1Board.getLastShotHit()) {
      if (navigator.vibrate && AIHits === 0) 
        navigator.vibrate(500);
      AIHits += 1;
      const ship = p1Board.getMap()[x][y][0];
      if(ship.isSunk()) {
        narrate(`All hands on deck! Your ${ship.type} is sinking!!!`);
        AIHits = 0;
      }
    }

    if(!p1Board.isGameOver()) {
    playerAttack(p2Board);
  } else if(p1Board.isGameOver()) {
    document.dispatchEvent(gameOverEvent);
  }
}

function attackPhase(playerTwo, playerTwoBoard) {
  currentPlayer = 1;
  p2 = playerTwo;
  p2Board = playerTwoBoard;
  playerAttack(p2Board);
}

function gameOver() {
  if(currentPlayer === 1) {
    narrative.textContent = `Glorious victory! You sunk all the AI ships!`;
  } else {
    narrative.textContent = 'Crushing defeat ... The AI has sunk all of your ships!';
  }
}

function narrate(message) {
  narrative.textContent = message;
  setTimeout(() => {
    narrative.textContent = '';
  }, 4000)
}

function switchAxisNarrative() {
  narrative.innerHTML = `Lead your ${shipBeingPlaced.type} into battle. \n 
  Mouse users hover over the board, and click to place ship. \n 
  Mobile users touch, hold, drag, and release. Hit <span id='x-btn'>X</span> \n 
  to switch axis.`;

  const xBtn = document.querySelector('#x-btn');
    xBtn.addEventListener('click', () => switchAxis(p1Board));
    xBtn.addEventListener('touch', () => switchAxis(p1Board));
}

function handleTouchMove(e) {
  e.preventDefault();
  const { x: a, y: b } = touched.dataset;
  const lastElement = touched;

  let x = e.touches[0].clientX
  let y = e.touches[0].clientY
  const currentElement = document.elementFromPoint(x, y);
  if(currentElement.parentNode.parentNode.id === 'p2') {
    return;
  } 
  
  if(currentElement.classList.contains('square')) {
    ({ x, y } = currentElement.dataset);
    if(currentElement !== lastElement) {
      renderShadow([a, b], "clear", p1Board, shipBeingPlaced);
      renderShadow([x, y], 'fill', p1Board, shipBeingPlaced);
      touched = currentElement;
    }
  }
}




/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/modules/gameBoard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM */ "./src/modules/DOM.js");






// SETUP

// Make game boards
const p1Board = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
p1Board.init();
const p2Board = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
p2Board.init();

// Make players
const p1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('1', p2Board, "human");
const p2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])("2", p1Board, "AI");

// Make p1 ships
const p1Ptb = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('patrol boat');
const p1Sub = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('sub');
const p1Destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('destroyer');
const p1Battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('battleship');
const p1Carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('carrier');
const p1Ships = [p1Carrier, p1Battleship, p1Destroyer, p1Sub, p1Ptb];

// Make AI ships
const p2Ptb = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('patrol boat');
const p2Sub = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('sub');
const p2Destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('destroyer');
const p2Battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('battleship');
const p2Carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])('carrier');
const AIShips = [p2Carrier, p2Battleship, p2Destroyer, p2Sub, p2Ptb];

// Render Boards
(0,_DOM__WEBPACK_IMPORTED_MODULE_3__.renderBoard)(p1Board, _DOM__WEBPACK_IMPORTED_MODULE_3__.p1Box);
(0,_DOM__WEBPACK_IMPORTED_MODULE_3__.renderBoard)(p2Board, _DOM__WEBPACK_IMPORTED_MODULE_3__.p2Box);

// Place ships phase
(0,_DOM__WEBPACK_IMPORTED_MODULE_3__.AIPlaceShipPhase)(p2Board, AIShips, p2);
(0,_DOM__WEBPACK_IMPORTED_MODULE_3__.playerPlaceShipPhase)(p1Board, p1Ships);

// Player attack phase - event fires once all ships are placed, and moves into 
// attack phase
document.addEventListener('shipsPlaced', () => (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.attackPhase)(p2, p2Board));

// Gameover
document.addEventListener('gameOver', _DOM__WEBPACK_IMPORTED_MODULE_3__.gameOver);


/***/ }),

/***/ "./src/modules/gameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const gameBoard = () => {
  let map;
  let sunkShips = 0;
  let lastShotHit = false;
  
  const getLastShotHit = () => lastShotHit;
  
  const init = () => {
    sunkShips = 0;
    map = Array(10);
    for (let i = 0; i < map.length; i += 1) {
      map[i] = Array(10).fill(0);
    }
  };
  
  const getMap = () => map;

  const checkCollision = (ship, x, y, axis) => {
    const coords = [];
    if (axis === "x") {
      if (x + ship.length > 10) {
        return true;
      }
      for (let i = 0; i < ship.length; i += 1) {
        coords.push([x + i, y]);
      }
      let returnValue = false;
      coords.forEach((pair) => {
        const [a, b] = pair;
        if (typeof map[a][b] === "object") {
          returnValue = true;
        }
      });
      return returnValue;
    }
    if (axis === "y") {
      if (y + ship.length > 10) {
        return true;
      }
      for (let i = 0; i < ship.length; i += 1) {
        coords.push([x, y + i]);
      }
      let returnValue = false;
      coords.forEach((pair) => {
        const [a, b] = pair;
        if (typeof map[a][b] === "object") {
          returnValue = true;
        }
      });
      return returnValue;
    }
    return false;
  };
 
  const place = (ship, x, y, axis) => {
    // i is hull index to track hits
    let i = 0;
    let a = x;
    let b = y;
    while (i < ship.length) {
      map[a][b] = [ship, i];
      if (axis === "x") {
        a += 1;
        i += 1;
      } else {
        b += 1;
        i += 1;
      }
    }
  };
  
  const isGameOver = () => {
    if (sunkShips === 5) {
      return true;
    }
    return false;
  };
 
  const testIfSunk = (ship) => {
    if (ship.isSunk()) {
      sunkShips += 1;
    }
    isGameOver(sunkShips);
  };
 
  const incoming = (x, y) => {
    let ship;
    let hullIndex;
    if (typeof map[x][y] === "object") {
      [ship, hullIndex] = map[x][y]; // 0 is ship object, 1 is hull index. see place()
      ship.hit(hullIndex);
      lastShotHit = true;
      testIfSunk(ship);
    } else {
      map[x][y] = 1;
      lastShotHit = false;
    }
  };
 
  const getSunkShips = () => sunkShips;
  return {
    init,
    getMap,
    checkCollision,
    place,
    isGameOver,
    testIfSunk,
    incoming,
    getSunkShips,
    getLastShotHit,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lonely-if */
const player = (moniker, board, typeOfPlayer) => {
  const name = moniker;
  const type = typeOfPlayer;
  const boardOfAttack = board;

  // AI data for coords of shot
  let a;    
  let b;
  let isAttackingShip = false;
  let attackAxis;
  let lastHit = null;
  let lastShot;
  let lastShotMissed = false;

  const getLastShot = () => lastShot;

  const getAIcoordinates = () => [a, b];

  const AImap = Array(10); // 0 is unknown, 1 is miss, 2 is hit
  for (let i = 0; i < AImap.length; i += 1) {
    AImap[i] = Array(10).fill(0);
  }
   
  const AIPlaceShip = (AIBoard, ship) => {
    let x;
    let y;
    let axis;
    do {
      axis = Math.floor(Math.random() * 2);
      if(axis === 0) {
        axis = 'x';
      } else {
        axis = 'y';
      }
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while(AIBoard.checkCollision(ship, x, y, axis))
    AIBoard.place(ship, x, y, axis);
  }

  // 2 helper functions for AI attack
  const pickCoordinates = () => {
    isAttackingShip = false;
    do {
      a = Math.floor(Math.random() * 10);
      b = Math.floor(Math.random() * 10);
    } while (AImap[a][b] !== 0);
    AImap[a][b] = 1;
    lastShot = [a, b];
  };
  
  const pickAdjacentCoordinates = () => {
    isAttackingShip = true;
    let i;
    let j;

    lastShotMissed ? [ i, j ] = lastHit : [ i, j ] = lastShot;    
    
    let adjacentShots = [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]];

    // Code to limit possible shots for edge of board   
    if(i === 0 && j === 0) {
      adjacentShots = [[i + 1, j], [i, j + 1]];
    } else
    if(i === 9 && j === 9) {
      adjacentShots = [[i - 1, j], [i, j - 1]];
    } else
    if(i === 0 && j === 9) {
      adjacentShots = [[i + 1, j], [i, j - 1]];
    } else
    if(i === 9 && j === 0) {
      adjacentShots = [[i - 1, j], [i, j + 1]];
    } else
    if(i === 0) {
      adjacentShots = [[i + 1, j], [i, j + 1], [i, j - 1]];
    } else
    if(i === 9) {
      adjacentShots = [[i - 1, j], [i, j + 1], [i, j - 1]];
    } else
    if(j === 0) {
      adjacentShots = [[i + 1, j], [i - 1, j], [i, j + 1]];
    } else
    if(j === 9) {
      adjacentShots = [[i + 1, j], [i - 1, j], [i, j - 1]];
    } 

    // limit shots to a known axis of ship
    if(attackAxis === 'x') {
      adjacentShots = adjacentShots.filter(shot => JSON.stringify(shot) !== JSON.stringify([i, j - 1]) 
        && JSON.stringify(shot) !== JSON.stringify([i, j + 1]));
    }

    if(attackAxis === 'y') {
      adjacentShots = adjacentShots.filter(shot => JSON.stringify(shot) !== JSON.stringify([i + 1, j]) 
      && JSON.stringify(shot) !== JSON.stringify([i - 1, j]));
    }

    // Test is true if there is an adjacent shot available (a zero)
    const test = adjacentShots.some(xy => {
      const [ x, y ] = xy;
      return AImap[x][y] === 0;
    });

    // If no adjacent shots available, generate random shot and exit function
    if(test === false) {
        lastShotMissed = true;
        pickAdjacentCoordinates();
        return;
      }
    
    // Otherwise, randomly pick an adjacent shot
    do {
      [ a, b ] = adjacentShots[Math.floor(Math.random() * adjacentShots.length)];
    } while (!JSON.stringify(adjacentShots).includes(JSON.stringify([a, b])) || AImap[a][b] !== 0);
      AImap[a][b] = 1;
      lastShot = [a, b];
  }

  const attack = (x, y) => {
    // Human attack
    if (typeOfPlayer === "human") {
      boardOfAttack.incoming(x, y);

    // AI attack branch
    } else if(boardOfAttack.getLastShotHit()) { 
      lastShotMissed = false;
      isAttackingShip = true;
      // Record a hit in AI's map
      const [ c, d ] = lastShot;
      AImap[c][d] = 2;
      
      // If no previous hit for currently hit ship
      if(lastHit === null) {
        lastHit = lastShot;
      } else {
        if(lastHit[0] === lastShot[0]) {
          attackAxis = 'y';
        } else {
          attackAxis = 'x';
        }
      }
      
      if(boardOfAttack.getMap()[c][d][0].isSunk()) {
        // Reset axis tracking
        lastHit = null;
        attackAxis = '';
        
        pickCoordinates();
        boardOfAttack.incoming(a, b);
      } else {
          pickAdjacentCoordinates();
          boardOfAttack.incoming(a, b);
      }
    // From if last shot hit
    } else if(isAttackingShip) {
        lastShotMissed = true;
        pickAdjacentCoordinates();
        boardOfAttack.incoming(a, b);
    } else {
        lastShotMissed = true;
        pickCoordinates();
        boardOfAttack.incoming(a, b);
    }
  }

  return {
    name,
    type,
    boardOfAttack,
    attack,
    getAIcoordinates,
    AIPlaceShip,
    getLastShot,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const makeShip = (type) => {
  let length;
  if (type === "carrier") {
    length = 5;
  }
  if (type === "battleship") {
    length = 4;
  }
  if (type === "sub" || type === "destroyer") {
    length = 3;
  }
  if (type === "patrol boat") {
    length = 2;
  }
  const hull = Array(length).fill(0);
  const getHull = () => hull;
  const hit = (index) => {
    hull[index] = 1;
  };
  const isSunk = () => hull.every((x) => x === 1);
  return { length, type, hit, isSunk, getHull }; 
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeShip);


/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cab375b5a189013eadd7.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/game */ "./src/modules/game.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEx0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZmYW1pbHk9T3hhbml1bSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IFxcbiAgICAnaGVhZGVyJyAuMWZyXFxuICAgICdtYWluJyAxZnIgICBcXG4gICAgLzFmcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDUuNXZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBjdXJzaXZlO1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4jbWFpbiB7XFxuICBmb250LWZhbWlseTogJ094YW5pdW0nLCBjdXJzaXZlO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6XFxuICAgICduYXJyYXRpdmUgbmFycmF0aXZlJyAuMmZyXFxuICAgICdwMSAgICAgICAgcDInIDFmclxcbiAgICAvMWZyICAgICAgIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuYXJyYXRpdmUge1xcbiAgZm9udC1zaXplOiAyLjN2dztcXG4gIGdyaWQtYXJlYTogbmFycmF0aXZlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxufVxcblxcbiN4LWJ0biB7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC44KTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IGdyYXk7XFxufVxcblxcbiNwMSB7XFxuICBncmlkLWFyZWE6IHAxO1xcbn1cXG5cXG4jcDIge1xcbiAgZ3JpZC1hcmVhOiBwMjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOiByZXBlYXQoMTAsIDIuNXZ3KSAvIHJlcGVhdCgxMCwgMi41dncpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIHdpZHRoOiAyLjV2dztcXG4gIGhlaWdodDogMi41dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZGZmO1xcbiAgb3BhY2l0eTogLjk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG59XFxuXFxuLmhvdmVyZWQsIC5wbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0ODQ4NDtcXG4gIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLmhvdmVyYWJsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ4NDg0O1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4ucmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDI3LCAyNyk7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YmQ4ZmY7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmJvYXJkIHtcXG4gICAgZ3JpZDogcmVwZWF0KDEwLCAzdncpIC8gcmVwZWF0KDEwLCAzdncpO1xcbiAgfVxcbiAgXFxuICAuc3F1YXJlIHtcXG4gICAgd2lkdGg6IDN2dztcXG4gICAgaGVpZ2h0OiAzdnc7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcblxcbiAgI21haW4ge1xcbiAgICBncmlkOlxcbiAgICAgICduYXJyYXRpdmUnIDc1cHhcXG4gICAgICAncDEnIC44ZnIgXFxuICAgICAgJ3AyJyAxZnJcXG4gICAgICAvMWZyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gICNoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEwdnc7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgI25hcnJhdGl2ZSB7XFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcXG4gIH1cXG4gIFxcbiAgI3AxIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB9XFxuXFxuICAuYm9hcmQge1xcbiAgICBncmlkOiByZXBlYXQoMTAsIDV2dykgLyByZXBlYXQoMTAsIDV2dyk7XFxuICAgIGdhcDogMnB4O1xcbiAgfVxcbiAgXFxuICAuc3F1YXJlIHtcXG4gICAgd2lkdGg6IDV2dztcXG4gICAgaGVpZ2h0OiA1dnc7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5REFBZ0Q7RUFDaEQsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2I7OztRQUdNO0VBQ04sWUFBWTtFQUNaLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixhQUFhO0VBQ2I7OztrQkFHZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNGOztBQUVBOztFQUVFO0lBQ0U7Ozs7VUFJTTtJQUNOLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsdUNBQXVDO0lBQ3ZDLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmZhbWlseT1PeGFuaXVtJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2JhY2tncm91bmQuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IFxcbiAgICAnaGVhZGVyJyAuMWZyXFxuICAgICdtYWluJyAxZnIgICBcXG4gICAgLzFmcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDUuNXZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBjdXJzaXZlO1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4jbWFpbiB7XFxuICBmb250LWZhbWlseTogJ094YW5pdW0nLCBjdXJzaXZlO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6XFxuICAgICduYXJyYXRpdmUgbmFycmF0aXZlJyAuMmZyXFxuICAgICdwMSAgICAgICAgcDInIDFmclxcbiAgICAvMWZyICAgICAgIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuYXJyYXRpdmUge1xcbiAgZm9udC1zaXplOiAyLjN2dztcXG4gIGdyaWQtYXJlYTogbmFycmF0aXZlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxufVxcblxcbiN4LWJ0biB7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC44KTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IGdyYXk7XFxufVxcblxcbiNwMSB7XFxuICBncmlkLWFyZWE6IHAxO1xcbn1cXG5cXG4jcDIge1xcbiAgZ3JpZC1hcmVhOiBwMjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOiByZXBlYXQoMTAsIDIuNXZ3KSAvIHJlcGVhdCgxMCwgMi41dncpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIHdpZHRoOiAyLjV2dztcXG4gIGhlaWdodDogMi41dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZGZmO1xcbiAgb3BhY2l0eTogLjk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG59XFxuXFxuLmhvdmVyZWQsIC5wbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0ODQ4NDtcXG4gIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLmhvdmVyYWJsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ4NDg0O1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4ucmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDI3LCAyNyk7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YmQ4ZmY7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmJvYXJkIHtcXG4gICAgZ3JpZDogcmVwZWF0KDEwLCAzdncpIC8gcmVwZWF0KDEwLCAzdncpO1xcbiAgfVxcbiAgXFxuICAuc3F1YXJlIHtcXG4gICAgd2lkdGg6IDN2dztcXG4gICAgaGVpZ2h0OiAzdnc7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcblxcbiAgI21haW4ge1xcbiAgICBncmlkOlxcbiAgICAgICduYXJyYXRpdmUnIDc1cHhcXG4gICAgICAncDEnIC44ZnIgXFxuICAgICAgJ3AyJyAxZnJcXG4gICAgICAvMWZyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gICNoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEwdnc7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgI25hcnJhdGl2ZSB7XFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcXG4gIH1cXG4gIFxcbiAgI3AxIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB9XFxuXFxuICAuYm9hcmQge1xcbiAgICBncmlkOiByZXBlYXQoMTAsIDV2dykgLyByZXBlYXQoMTAsIDV2dyk7XFxuICAgIGdhcDogMnB4O1xcbiAgfVxcbiAgXFxuICAuc3F1YXJlIHtcXG4gICAgd2lkdGg6IDV2dztcXG4gICAgaGVpZ2h0OiA1dnc7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5cbmNvbnN0IHAxQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwMVwiKTtcbmNvbnN0IHAyQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwMlwiKTtcbmNvbnN0IG5hcnJhdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFycmF0aXZlXCIpO1xuXG4vLyBVc2VkIGluIHN3aXRjaEF4aXMgYW5kIHJlbmRlclNoYWRvdyBhbmQgcGxheWVyUGxhY2VTaGlwXG5sZXQgYXhpcyA9IFwieVwiO1xubGV0IGxhc3RDb29yZHNSZW5kZXJlZDtcbmxldCBsYXN0U2hpcDtcbmxldCBzaGlwQmVpbmdQbGFjZWQ7XG5sZXQgaGlnaGxpZ2h0U3F1YXJlcyA9IGZhbHNlO1xubGV0IHRvdWNoZWQ7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge2hpZ2hsaWdodFNxdWFyZXMgPSB0cnVlO30pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7aGlnaGxpZ2h0U3F1YXJlcyA9IGZhbHNlO30pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB7aGlnaGxpZ2h0U3F1YXJlcyA9IHRydWV9KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IHtoaWdobGlnaHRTcXVhcmVzID0gZmFsc2V9KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUsIHtwYXNzaXZlOiBmYWxzZX0pO1xuXG4vLyBVc2VkIGZvciBwbGF5ZXJQbGFjZVNoaXBQaGFzZSBhbmQgYXR0YWNrUGhhc2VcbmxldCBpID0gMDtcbmxldCBwMjtcbmxldCBwMUJvYXJkO1xubGV0IHAyQm9hcmQ7XG5sZXQgcDFTaGlwcztcbmxldCBjdXJyZW50UGxheWVyO1xubGV0IHR1cm4gPSAwO1xuXG4vLyBVc2VkIHRvIHRlbGwgZ2FtZS5qcyB3aGVuIHBsYXllclBsYWNlU2hpcFBoYXNlIGlzIG92ZXJcbmNvbnN0IHNoaXBzUGxhY2VkID0gbmV3IEV2ZW50KFwic2hpcHNQbGFjZWRcIik7XG5jb25zdCBnYW1lT3ZlckV2ZW50ID0gbmV3IEV2ZW50KFwiZ2FtZU92ZXJcIik7XG5cbi8vIEZvciBBSVBsYWNlU2hpcFBoYXNlXG5sZXQgaiA9IDA7XG5cbi8vIFVzZWQgdG8gb25seSB2aWJyYXRlIG1vYmlsZSBwaG9uZSBvbiBmaXJzdCBoaXRcbmxldCBBSUhpdHMgPSAwO1xubGV0IHBsYXllckhpdHMgPSAwO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb25zIGZvciBwbGF5ZXJQbGFjZVNoaXBQaGFzZVxuY29uc3Qgc3dpdGNoQXhpcyA9IChib2FyZCkgPT4ge1xuICByZW5kZXJTaGFkb3cobGFzdENvb3Jkc1JlbmRlcmVkLCBcImNsZWFyXCIsIGJvYXJkLCBsYXN0U2hpcCk7XG4gIGF4aXMgPT09IFwieFwiID8gKGF4aXMgPSBcInlcIikgOiAoYXhpcyA9IFwieFwiKTtcbiAgaWYoaGlnaGxpZ2h0U3F1YXJlcyl7XG4gICAgcmVuZGVyU2hhZG93KGxhc3RDb29yZHNSZW5kZXJlZCwgXCJmaWxsXCIsIGJvYXJkLCBsYXN0U2hpcCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlclNoYWRvdyA9IChjb29yZHMsIGZpbGwsIGJvYXJkLCBzaGlwKSA9PiB7XG4gIGxldCBbIHgsIHkgXSA9IGNvb3JkcztcbiAgbGV0IGVsO1xuICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gIHggPSBwYXJzZUludCh4LCAxMCk7XG4gIHkgPSBwYXJzZUludCh5LCAxMCk7XG4gIGlmIChib2FyZC5jaGVja0NvbGxpc2lvbihzaGlwLCB4LCB5LCBheGlzKSAmJiBmaWxsICE9PSBcImNsZWFyXCIpIHtcbiAgICBjb2xsaXNpb24gPSB0cnVlO1xuICB9XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgc2hpcC5sZW5ndGg7IGsgKz0gMSkge1xuICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgI3AxIC5zcXVhcmVbZGF0YS14PVwiJHt4ICsga31cIl1bZGF0YS15PVwiJHt5fVwiXWBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYCNwMSAuc3F1YXJlW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5ICsga31cIl1gXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoZWwpIHtcbiAgICAgIGZpbGwgPT09IFwiZmlsbFwiICYmIGVsLmNsYXNzTGlzdC5hZGQoXCJob3ZlcmVkXCIpO1xuICAgICAgaWYgKGZpbGwgPT09IFwiY2xlYXJcIikge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZFwiKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcInJlZFwiKTtcbiAgICAgIH1cbiAgICAgIGZpbGwgPT09IFwicGxhY2VcIiAmJiBlbC5jbGFzc0xpc3QuYWRkKFwicGxhY2VkXCIpO1xuICAgICAgaWYgKGNvbGxpc2lvbiA9PT0gdHJ1ZSAmJiBmaWxsICE9PSBcInBsYWNlXCIpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGFzdENvb3Jkc1JlbmRlcmVkID0gW3gsIHldO1xuICBsYXN0U2hpcCA9IHNoaXA7XG59O1xuXG5jb25zdCByZW1vdmVMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3AxIC5ib2FyZCAuc3F1YXJlXCIpO1xuICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIHNxdWFyZS5yZXBsYWNlV2l0aChzcXVhcmUuY2xvbmVOb2RlKCkpO1xuICB9KTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7fSk7XG59O1xuXG5jb25zdCBjbGlja1RvUGxhY2UgPSAoY29vcmRzLCBib2FyZCwgc2hpcCkgPT4ge1xuICBsZXQgWyB4LCB5IF0gPSBjb29yZHM7XG4gIHggPSBwYXJzZUludCh4LCAxMCk7XG4gIHkgPSBwYXJzZUludCh5LCAxMCk7XG4gIGlmIChib2FyZC5jaGVja0NvbGxpc2lvbihzaGlwLCB4LCB5LCBheGlzKSkge1xuICAgIHJlbmRlclNoYWRvdyhbeCwgeV0sICdjbGVhcicsIGJvYXJkLCBzaGlwKTtcbiAgICByZXR1cm47XG4gIH1cbiAgYm9hcmQucGxhY2Uoc2hpcCwgeCwgeSwgYXhpcyk7XG4gIHJlbmRlclNoYWRvdyhjb29yZHMsIFwicGxhY2VcIiwgYm9hcmQsIHNoaXApO1xuICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgaWYgKGkgPT09IDUpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHNoaXBzUGxhY2VkKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlLCB7cGFzc2l2ZTogZmFsc2V9KTtcbiAgfVxuICBwbGF5ZXJQbGFjZVNoaXBQaGFzZShwMUJvYXJkLCBwMVNoaXBzKTtcbn07XG5cbmNvbnN0IHBsYXllclBsYWNlU2hpcCA9IChib2FyZCwgc2hpcCkgPT4ge1xuICBzaGlwQmVpbmdQbGFjZWQgPSBzaGlwO1xuICBwMUJvYXJkID0gYm9hcmQ7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3AxIC5ib2FyZCAuc3F1YXJlXCIpO1xuICBzd2l0Y2hBeGlzTmFycmF0aXZlKCk7XG5cbiAgaWYgKGkgPT09IDApIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJ4XCIpIHtcbiAgICAgICAgc3dpdGNoQXhpcyhib2FyZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAgIHJlbmRlclNoYWRvdyhbeCwgeV0sIFwiZmlsbFwiLCBib2FyZCwgc2hpcCk7XG4gICAgICB0b3VjaGVkID0gZS50YXJnZXQ7XG4gICAgfSk7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcbiAgICAgIGhpZ2hsaWdodFNxdWFyZXMgPSB0cnVlO1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgICAgcmVuZGVyU2hhZG93KFt4LCB5XSwgXCJmaWxsXCIsIGJvYXJkLCBzaGlwKTtcbiAgICB9KTtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChlKSA9PiB7XG4gICAgICBoaWdobGlnaHRTcXVhcmVzID0gZmFsc2U7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICByZW5kZXJTaGFkb3coW3gsIHldLCBcImNsZWFyXCIsIGJvYXJkLCBzaGlwKVxuICAgIH0pO1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKCkgPT4ge1xuICAgICAgY2xpY2tUb1BsYWNlKGxhc3RDb29yZHNSZW5kZXJlZCwgYm9hcmQsIHNoaXApO1xuICAgIH0pO1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGhpZ2hsaWdodFNxdWFyZXMgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAgIGNsaWNrVG9QbGFjZShbeCwgeV0sIGJvYXJkLCBzaGlwKVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIHBsYXllclBsYWNlU2hpcFBoYXNlKGJvYXJkLCBzaGlwcykge1xuXG4gIGlmIChpID09PSAwKSB7XG4gICAgcDFCb2FyZCA9IGJvYXJkO1xuICAgIHAxU2hpcHMgPSBzaGlwcztcbiAgfVxuICBpZiAoaSA8PSA0KSB7XG4gICAgcGxheWVyUGxhY2VTaGlwKGJvYXJkLCBzaGlwc1tpXSk7XG4gICAgaSArPSAxO1xuICB9XG59XG5cbi8vIEFJIFBsYWNlIHNoaXAgcGhhc2VcbmNvbnN0IEFJUGxhY2VTaGlwUGhhc2UgPSAoYm9hcmQsIHNoaXBzLCBwbGF5ZXIpID0+IHtcbiAgcGxheWVyLkFJUGxhY2VTaGlwKGJvYXJkLCBzaGlwc1tqXSk7XG4gIGogKz0gMTtcbiAgaWYgKGogPT09IDUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgQUlQbGFjZVNoaXBQaGFzZShib2FyZCwgc2hpcHMsIHBsYXllcik7XG59O1xuXG5jb25zdCByZW5kZXJCb2FyZCA9IChib2FyZCwgYm94KSA9PiB7XG4gIC8vIENsZWFyIG9sZCBjb250ZW50IHByaW9yIHRvIHJlLXJlbmRlciBpZiBuZWVkZWRcbiAgbGV0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtib3guaWR9IC5ib2FyZGApO1xuICBpZiAoZ3JpZCkge1xuICAgIGdyaWQudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9IGVsc2Uge1xuICAgIGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyaWQuY2xhc3NOYW1lID0gXCJib2FyZFwiO1xuICB9XG4gIC8vIEluZGl2aWR1YWwgc3F1YXJlcyBvbiBib2FyZFxuICBmb3IgKGxldCBrID0gMDsgayA8PSA5OyBrICs9IDEpIHtcbiAgICBmb3IgKGxldCBsID0gOTsgbCA+PSAwOyBsIC09IDEpIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzcXVhcmUuY2xhc3NOYW1lID0gXCJzcXVhcmVcIjtcbiAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSBrO1xuICAgICAgc3F1YXJlLmRhdGFzZXQueSA9IGw7XG4gICAgICBncmlkLmFwcGVuZChzcXVhcmUpO1xuICAgIH1cbiAgfVxuICBib3guYXBwZW5kKGdyaWQpO1xufTtcblxuY29uc3QgdXBkYXRlQUlCb2FyZCA9IChib2FyZCwgeCwgeSkgPT4ge1xuICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcDIgLnNxdWFyZVtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gKTtcbiAgY29uc3QgYm9hcmRWYWx1ZSA9IGJvYXJkLmdldE1hcCgpW3hdW3ldO1xuXG4gIGlmKGJvYXJkVmFsdWUgPT09IDAgfHwgYm9hcmRWYWx1ZSA9PT0gMSkge1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gIH1cbiAgaWYodHlwZW9mIGJvYXJkVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3JlZCcpO1xuICB9XG59XG5cbi8vIFBsYXllciBhdHRhY2sgcGhhc2UgLSBzZW5kcyB4LCB5IGZyb20gY2xpY2tlZCBzcXVhcmUgdG8gYm9hcmQuaW5jb21pbmcoKVxuY29uc3QgYXR0YWNrQ2FsbGJhY2sgPSAoZSwgYm9hcmQpID0+IHtcbiAgY29uc3QgeyB4LCB5IH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICBcbiAgLy8gUmVtb3ZlIGhvdmVyIGVmZmVjdCBhbmQgY2xpY2sgdG8gYXR0YWNrIFxuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwMiAuc3F1YXJlXCIpO1xuICBzcXVhcmVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyYWJsZVwiKTtcbiAgICBlbC5yZXBsYWNlV2l0aChlbC5jbG9uZU5vZGUoKSk7XG4gIH0pO1xuXG4gIC8vIFVwZGF0ZSBET00gYW5kIGJvYXJkXG4gIHVwZGF0ZUFJQm9hcmQoYm9hcmQsIHgsIHkpO1xuICBib2FyZC5pbmNvbWluZyh4LCB5KTtcbiAgIFxuICAvLyBUZXN0IGlmIHN1bmtcbiAgaWYodHlwZW9mIGJvYXJkLmdldE1hcCgpW3hdW3ldID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IHNoaXAgPSBib2FyZC5nZXRNYXAoKVt4XVt5XVswXTtcbiAgICBpZihuYXZpZ2F0b3IudmlicmF0ZSAmJiBwbGF5ZXJIaXRzID09PSAwKSB7XG4gICAgICBuYXZpZ2F0b3IudmlicmF0ZShbMjAwLCAyMDBdKTtcbiAgICAgIHBsYXllckhpdHMgKz0gMTtcbiAgICB9XG4gICAgaWYoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgbmFycmF0ZShgWW91J3ZlIHN1bmsgdGhlIGVuZW15J3MgJHtzaGlwLnR5cGV9ISEhYCk7XG4gICAgICBwbGF5ZXJIaXRzID0gMDtcbiAgICB9XG4gIH1cbiBcbiAgLy8gVGVzdCBpZiBnYW1lIGlzIG92ZXJcbiAgaWYoIWJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgIHNldFRpbWVvdXQoQUlBdHRhY2ssIDUwMCk7XG4gIH0gZWxzZSBpZihib2FyZC5pc0dhbWVPdmVyKCkpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGdhbWVPdmVyRXZlbnQpO1xuICB9XG59O1xuXG4vLyBQbGF5ZXIgYXR0YWNrIHBoYXNlIC0gYWRkcyBjbGljayBldmVudCBsaXN0ZW5lciBhbmQgaG92ZXIgZWZmZWN0XG5jb25zdCBwbGF5ZXJBdHRhY2sgPSAoYm9hcmQpID0+IHtcbiAgY3VycmVudFBsYXllciA9IDE7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3AyIC5zcXVhcmVcIik7XG4gIHNxdWFyZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGF0dGFja0NhbGxiYWNrKGUsIGJvYXJkKSk7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChcImhvdmVyYWJsZVwiKTtcbiAgfSk7XG4gIGlmKHR1cm4gPT09IDApIHtcbiAgICBuYXJyYXRlKFwiQ2xpY2sgdG8gZmlyZSBvbiB0aGUgZW5lbXkgZmxlZXRcIik7XG4gIH1cbiAgdHVybiArPSAxO1xufTtcblxuY29uc3QgdXBkYXRlQm9hcmQgPSAoYm9hcmQsIHgsIHkpID0+IHtcbiAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3AxIC5zcXVhcmVbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XG4gIGNvbnN0IGJvYXJkVmFsdWUgPSBib2FyZC5nZXRNYXAoKVt4XVt5XTtcbiAgaWYoYm9hcmRWYWx1ZSA9PT0gMSkge1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gIH1cbiAgaWYodHlwZW9mIGJvYXJkVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3JlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIEFJQXR0YWNrKCkge1xuICBjdXJyZW50UGxheWVyID0gMjtcbiBcbiAgICBwMi5hdHRhY2soKTtcbiAgICBjb25zdCBbIHgsIHkgXSA9IHAyLmdldExhc3RTaG90KCk7XG4gICAgdXBkYXRlQm9hcmQocDFCb2FyZCwgeCwgeSk7XG5cbiAgICBpZihwMUJvYXJkLmdldExhc3RTaG90SGl0KCkpIHtcbiAgICAgIGlmIChuYXZpZ2F0b3IudmlicmF0ZSAmJiBBSUhpdHMgPT09IDApIFxuICAgICAgICBuYXZpZ2F0b3IudmlicmF0ZSg1MDApO1xuICAgICAgQUlIaXRzICs9IDE7XG4gICAgICBjb25zdCBzaGlwID0gcDFCb2FyZC5nZXRNYXAoKVt4XVt5XVswXTtcbiAgICAgIGlmKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgbmFycmF0ZShgQWxsIGhhbmRzIG9uIGRlY2shIFlvdXIgJHtzaGlwLnR5cGV9IGlzIHNpbmtpbmchISFgKTtcbiAgICAgICAgQUlIaXRzID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighcDFCb2FyZC5pc0dhbWVPdmVyKCkpIHtcbiAgICBwbGF5ZXJBdHRhY2socDJCb2FyZCk7XG4gIH0gZWxzZSBpZihwMUJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZ2FtZU92ZXJFdmVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXR0YWNrUGhhc2UocGxheWVyVHdvLCBwbGF5ZXJUd29Cb2FyZCkge1xuICBjdXJyZW50UGxheWVyID0gMTtcbiAgcDIgPSBwbGF5ZXJUd287XG4gIHAyQm9hcmQgPSBwbGF5ZXJUd29Cb2FyZDtcbiAgcGxheWVyQXR0YWNrKHAyQm9hcmQpO1xufVxuXG5mdW5jdGlvbiBnYW1lT3ZlcigpIHtcbiAgaWYoY3VycmVudFBsYXllciA9PT0gMSkge1xuICAgIG5hcnJhdGl2ZS50ZXh0Q29udGVudCA9IGBHbG9yaW91cyB2aWN0b3J5ISBZb3Ugc3VuayBhbGwgdGhlIEFJIHNoaXBzIWA7XG4gIH0gZWxzZSB7XG4gICAgbmFycmF0aXZlLnRleHRDb250ZW50ID0gJ0NydXNoaW5nIGRlZmVhdCAuLi4gVGhlIEFJIGhhcyBzdW5rIGFsbCBvZiB5b3VyIHNoaXBzISc7XG4gIH1cbn1cblxuZnVuY3Rpb24gbmFycmF0ZShtZXNzYWdlKSB7XG4gIG5hcnJhdGl2ZS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG5hcnJhdGl2ZS50ZXh0Q29udGVudCA9ICcnO1xuICB9LCA0MDAwKVxufVxuXG5mdW5jdGlvbiBzd2l0Y2hBeGlzTmFycmF0aXZlKCkge1xuICBuYXJyYXRpdmUuaW5uZXJIVE1MID0gYExlYWQgeW91ciAke3NoaXBCZWluZ1BsYWNlZC50eXBlfSBpbnRvIGJhdHRsZS4gXFxuIFxuICBNb3VzZSB1c2VycyBob3ZlciBvdmVyIHRoZSBib2FyZCwgYW5kIGNsaWNrIHRvIHBsYWNlIHNoaXAuIFxcbiBcbiAgTW9iaWxlIHVzZXJzIHRvdWNoLCBob2xkLCBkcmFnLCBhbmQgcmVsZWFzZS4gSGl0IDxzcGFuIGlkPSd4LWJ0bic+WDwvc3Bhbj4gXFxuIFxuICB0byBzd2l0Y2ggYXhpcy5gO1xuXG4gIGNvbnN0IHhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjeC1idG4nKTtcbiAgICB4QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3dpdGNoQXhpcyhwMUJvYXJkKSk7XG4gICAgeEJ0bi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaCcsICgpID0+IHN3aXRjaEF4aXMocDFCb2FyZCkpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHsgeDogYSwgeTogYiB9ID0gdG91Y2hlZC5kYXRhc2V0O1xuICBjb25zdCBsYXN0RWxlbWVudCA9IHRvdWNoZWQ7XG5cbiAgbGV0IHggPSBlLnRvdWNoZXNbMF0uY2xpZW50WFxuICBsZXQgeSA9IGUudG91Y2hlc1swXS5jbGllbnRZXG4gIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgaWYoY3VycmVudEVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkID09PSAncDInKSB7XG4gICAgcmV0dXJuO1xuICB9IFxuICBcbiAgaWYoY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcXVhcmUnKSkge1xuICAgICh7IHgsIHkgfSA9IGN1cnJlbnRFbGVtZW50LmRhdGFzZXQpO1xuICAgIGlmKGN1cnJlbnRFbGVtZW50ICE9PSBsYXN0RWxlbWVudCkge1xuICAgICAgcmVuZGVyU2hhZG93KFthLCBiXSwgXCJjbGVhclwiLCBwMUJvYXJkLCBzaGlwQmVpbmdQbGFjZWQpO1xuICAgICAgcmVuZGVyU2hhZG93KFt4LCB5XSwgJ2ZpbGwnLCBwMUJvYXJkLCBzaGlwQmVpbmdQbGFjZWQpO1xuICAgICAgdG91Y2hlZCA9IGN1cnJlbnRFbGVtZW50O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBwMUJveCxcbiAgcDJCb3gsXG4gIHBsYXllclBsYWNlU2hpcCxcbiAgcGxheWVyUGxhY2VTaGlwUGhhc2UsXG4gIEFJUGxhY2VTaGlwUGhhc2UsXG4gIHJlbmRlckJvYXJkLFxuICBwbGF5ZXJBdHRhY2ssXG4gIGF0dGFja1BoYXNlLFxuICBnYW1lT3Zlcixcbn07XG4iLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBtYWtlU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IHsgXG4gIHAxQm94LCBcbiAgcDJCb3gsICBcbiAgcGxheWVyUGxhY2VTaGlwUGhhc2UsIFxuICBBSVBsYWNlU2hpcFBoYXNlLFxuICByZW5kZXJCb2FyZCwgXG4gIGF0dGFja1BoYXNlLFxuICBnYW1lT3Zlcixcbn0gZnJvbSBcIi4vRE9NXCI7XG5cblxuLy8gU0VUVVBcblxuLy8gTWFrZSBnYW1lIGJvYXJkc1xuY29uc3QgcDFCb2FyZCA9IGdhbWVCb2FyZCgpO1xucDFCb2FyZC5pbml0KCk7XG5jb25zdCBwMkJvYXJkID0gZ2FtZUJvYXJkKCk7XG5wMkJvYXJkLmluaXQoKTtcblxuLy8gTWFrZSBwbGF5ZXJzXG5jb25zdCBwMSA9IHBsYXllcignMScsIHAyQm9hcmQsIFwiaHVtYW5cIik7XG5jb25zdCBwMiA9IHBsYXllcihcIjJcIiwgcDFCb2FyZCwgXCJBSVwiKTtcblxuLy8gTWFrZSBwMSBzaGlwc1xuY29uc3QgcDFQdGIgPSBtYWtlU2hpcCgncGF0cm9sIGJvYXQnKTtcbmNvbnN0IHAxU3ViID0gbWFrZVNoaXAoJ3N1YicpO1xuY29uc3QgcDFEZXN0cm95ZXIgPSBtYWtlU2hpcCgnZGVzdHJveWVyJyk7XG5jb25zdCBwMUJhdHRsZXNoaXAgPSBtYWtlU2hpcCgnYmF0dGxlc2hpcCcpO1xuY29uc3QgcDFDYXJyaWVyID0gbWFrZVNoaXAoJ2NhcnJpZXInKTtcbmNvbnN0IHAxU2hpcHMgPSBbcDFDYXJyaWVyLCBwMUJhdHRsZXNoaXAsIHAxRGVzdHJveWVyLCBwMVN1YiwgcDFQdGJdO1xuXG4vLyBNYWtlIEFJIHNoaXBzXG5jb25zdCBwMlB0YiA9IG1ha2VTaGlwKCdwYXRyb2wgYm9hdCcpO1xuY29uc3QgcDJTdWIgPSBtYWtlU2hpcCgnc3ViJyk7XG5jb25zdCBwMkRlc3Ryb3llciA9IG1ha2VTaGlwKCdkZXN0cm95ZXInKTtcbmNvbnN0IHAyQmF0dGxlc2hpcCA9IG1ha2VTaGlwKCdiYXR0bGVzaGlwJyk7XG5jb25zdCBwMkNhcnJpZXIgPSBtYWtlU2hpcCgnY2FycmllcicpO1xuY29uc3QgQUlTaGlwcyA9IFtwMkNhcnJpZXIsIHAyQmF0dGxlc2hpcCwgcDJEZXN0cm95ZXIsIHAyU3ViLCBwMlB0Yl07XG5cbi8vIFJlbmRlciBCb2FyZHNcbnJlbmRlckJvYXJkKHAxQm9hcmQsIHAxQm94KTtcbnJlbmRlckJvYXJkKHAyQm9hcmQsIHAyQm94KTtcblxuLy8gUGxhY2Ugc2hpcHMgcGhhc2VcbkFJUGxhY2VTaGlwUGhhc2UocDJCb2FyZCwgQUlTaGlwcywgcDIpO1xucGxheWVyUGxhY2VTaGlwUGhhc2UocDFCb2FyZCwgcDFTaGlwcyk7XG5cbi8vIFBsYXllciBhdHRhY2sgcGhhc2UgLSBldmVudCBmaXJlcyBvbmNlIGFsbCBzaGlwcyBhcmUgcGxhY2VkLCBhbmQgbW92ZXMgaW50byBcbi8vIGF0dGFjayBwaGFzZVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2hpcHNQbGFjZWQnLCAoKSA9PiBhdHRhY2tQaGFzZShwMiwgcDJCb2FyZCkpO1xuXG4vLyBHYW1lb3ZlclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ2FtZU92ZXInLCBnYW1lT3Zlcik7XG4iLCJjb25zdCBnYW1lQm9hcmQgPSAoKSA9PiB7XG4gIGxldCBtYXA7XG4gIGxldCBzdW5rU2hpcHMgPSAwO1xuICBsZXQgbGFzdFNob3RIaXQgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGdldExhc3RTaG90SGl0ID0gKCkgPT4gbGFzdFNob3RIaXQ7XG4gIFxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIHN1bmtTaGlwcyA9IDA7XG4gICAgbWFwID0gQXJyYXkoMTApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBtYXBbaV0gPSBBcnJheSgxMCkuZmlsbCgwKTtcbiAgICB9XG4gIH07XG4gIFxuICBjb25zdCBnZXRNYXAgPSAoKSA9PiBtYXA7XG5cbiAgY29uc3QgY2hlY2tDb2xsaXNpb24gPSAoc2hpcCwgeCwgeSwgYXhpcykgPT4ge1xuICAgIGNvbnN0IGNvb3JkcyA9IFtdO1xuICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgaWYgKHggKyBzaGlwLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvb3Jkcy5wdXNoKFt4ICsgaSwgeV0pO1xuICAgICAgfVxuICAgICAgbGV0IHJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICBjb29yZHMuZm9yRWFjaCgocGFpcikgPT4ge1xuICAgICAgICBjb25zdCBbYSwgYl0gPSBwYWlyO1xuICAgICAgICBpZiAodHlwZW9mIG1hcFthXVtiXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIHJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfVxuICAgIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgaWYgKHkgKyBzaGlwLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvb3Jkcy5wdXNoKFt4LCB5ICsgaV0pO1xuICAgICAgfVxuICAgICAgbGV0IHJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICBjb29yZHMuZm9yRWFjaCgocGFpcikgPT4ge1xuICAgICAgICBjb25zdCBbYSwgYl0gPSBwYWlyO1xuICAgICAgICBpZiAodHlwZW9mIG1hcFthXVtiXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIHJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiBcbiAgY29uc3QgcGxhY2UgPSAoc2hpcCwgeCwgeSwgYXhpcykgPT4ge1xuICAgIC8vIGkgaXMgaHVsbCBpbmRleCB0byB0cmFjayBoaXRzXG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBhID0geDtcbiAgICBsZXQgYiA9IHk7XG4gICAgd2hpbGUgKGkgPCBzaGlwLmxlbmd0aCkge1xuICAgICAgbWFwW2FdW2JdID0gW3NoaXAsIGldO1xuICAgICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgIGEgKz0gMTtcbiAgICAgICAgaSArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYiArPSAxO1xuICAgICAgICBpICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgaXNHYW1lT3ZlciA9ICgpID0+IHtcbiAgICBpZiAoc3Vua1NoaXBzID09PSA1KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuIFxuICBjb25zdCB0ZXN0SWZTdW5rID0gKHNoaXApID0+IHtcbiAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgfVxuICAgIGlzR2FtZU92ZXIoc3Vua1NoaXBzKTtcbiAgfTtcbiBcbiAgY29uc3QgaW5jb21pbmcgPSAoeCwgeSkgPT4ge1xuICAgIGxldCBzaGlwO1xuICAgIGxldCBodWxsSW5kZXg7XG4gICAgaWYgKHR5cGVvZiBtYXBbeF1beV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIFtzaGlwLCBodWxsSW5kZXhdID0gbWFwW3hdW3ldOyAvLyAwIGlzIHNoaXAgb2JqZWN0LCAxIGlzIGh1bGwgaW5kZXguIHNlZSBwbGFjZSgpXG4gICAgICBzaGlwLmhpdChodWxsSW5kZXgpO1xuICAgICAgbGFzdFNob3RIaXQgPSB0cnVlO1xuICAgICAgdGVzdElmU3VuayhzaGlwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFwW3hdW3ldID0gMTtcbiAgICAgIGxhc3RTaG90SGl0ID0gZmFsc2U7XG4gICAgfVxuICB9O1xuIFxuICBjb25zdCBnZXRTdW5rU2hpcHMgPSAoKSA9PiBzdW5rU2hpcHM7XG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBnZXRNYXAsXG4gICAgY2hlY2tDb2xsaXNpb24sXG4gICAgcGxhY2UsXG4gICAgaXNHYW1lT3ZlcixcbiAgICB0ZXN0SWZTdW5rLFxuICAgIGluY29taW5nLFxuICAgIGdldFN1bmtTaGlwcyxcbiAgICBnZXRMYXN0U2hvdEhpdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVCb2FyZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbG9uZWx5LWlmICovXG5jb25zdCBwbGF5ZXIgPSAobW9uaWtlciwgYm9hcmQsIHR5cGVPZlBsYXllcikgPT4ge1xuICBjb25zdCBuYW1lID0gbW9uaWtlcjtcbiAgY29uc3QgdHlwZSA9IHR5cGVPZlBsYXllcjtcbiAgY29uc3QgYm9hcmRPZkF0dGFjayA9IGJvYXJkO1xuXG4gIC8vIEFJIGRhdGEgZm9yIGNvb3JkcyBvZiBzaG90XG4gIGxldCBhOyAgICBcbiAgbGV0IGI7XG4gIGxldCBpc0F0dGFja2luZ1NoaXAgPSBmYWxzZTtcbiAgbGV0IGF0dGFja0F4aXM7XG4gIGxldCBsYXN0SGl0ID0gbnVsbDtcbiAgbGV0IGxhc3RTaG90O1xuICBsZXQgbGFzdFNob3RNaXNzZWQgPSBmYWxzZTtcblxuICBjb25zdCBnZXRMYXN0U2hvdCA9ICgpID0+IGxhc3RTaG90O1xuXG4gIGNvbnN0IGdldEFJY29vcmRpbmF0ZXMgPSAoKSA9PiBbYSwgYl07XG5cbiAgY29uc3QgQUltYXAgPSBBcnJheSgxMCk7IC8vIDAgaXMgdW5rbm93biwgMSBpcyBtaXNzLCAyIGlzIGhpdFxuICBmb3IgKGxldCBpID0gMDsgaSA8IEFJbWFwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgQUltYXBbaV0gPSBBcnJheSgxMCkuZmlsbCgwKTtcbiAgfVxuICAgXG4gIGNvbnN0IEFJUGxhY2VTaGlwID0gKEFJQm9hcmQsIHNoaXApID0+IHtcbiAgICBsZXQgeDtcbiAgICBsZXQgeTtcbiAgICBsZXQgYXhpcztcbiAgICBkbyB7XG4gICAgICBheGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICBpZihheGlzID09PSAwKSB7XG4gICAgICAgIGF4aXMgPSAneCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBheGlzID0gJ3knO1xuICAgICAgfVxuICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgfSB3aGlsZShBSUJvYXJkLmNoZWNrQ29sbGlzaW9uKHNoaXAsIHgsIHksIGF4aXMpKVxuICAgIEFJQm9hcmQucGxhY2Uoc2hpcCwgeCwgeSwgYXhpcyk7XG4gIH1cblxuICAvLyAyIGhlbHBlciBmdW5jdGlvbnMgZm9yIEFJIGF0dGFja1xuICBjb25zdCBwaWNrQ29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgaXNBdHRhY2tpbmdTaGlwID0gZmFsc2U7XG4gICAgZG8ge1xuICAgICAgYSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgfSB3aGlsZSAoQUltYXBbYV1bYl0gIT09IDApO1xuICAgIEFJbWFwW2FdW2JdID0gMTtcbiAgICBsYXN0U2hvdCA9IFthLCBiXTtcbiAgfTtcbiAgXG4gIGNvbnN0IHBpY2tBZGphY2VudENvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgIGlzQXR0YWNraW5nU2hpcCA9IHRydWU7XG4gICAgbGV0IGk7XG4gICAgbGV0IGo7XG5cbiAgICBsYXN0U2hvdE1pc3NlZCA/IFsgaSwgaiBdID0gbGFzdEhpdCA6IFsgaSwgaiBdID0gbGFzdFNob3Q7ICAgIFxuICAgIFxuICAgIGxldCBhZGphY2VudFNob3RzID0gW1tpICsgMSwgal0sIFtpIC0gMSwgal0sIFtpLCBqICsgMV0sIFtpLCBqIC0gMV1dO1xuXG4gICAgLy8gQ29kZSB0byBsaW1pdCBwb3NzaWJsZSBzaG90cyBmb3IgZWRnZSBvZiBib2FyZCAgIFxuICAgIGlmKGkgPT09IDAgJiYgaiA9PT0gMCkge1xuICAgICAgYWRqYWNlbnRTaG90cyA9IFtbaSArIDEsIGpdLCBbaSwgaiArIDFdXTtcbiAgICB9IGVsc2VcbiAgICBpZihpID09PSA5ICYmIGogPT09IDkpIHtcbiAgICAgIGFkamFjZW50U2hvdHMgPSBbW2kgLSAxLCBqXSwgW2ksIGogLSAxXV07XG4gICAgfSBlbHNlXG4gICAgaWYoaSA9PT0gMCAmJiBqID09PSA5KSB7XG4gICAgICBhZGphY2VudFNob3RzID0gW1tpICsgMSwgal0sIFtpLCBqIC0gMV1dO1xuICAgIH0gZWxzZVxuICAgIGlmKGkgPT09IDkgJiYgaiA9PT0gMCkge1xuICAgICAgYWRqYWNlbnRTaG90cyA9IFtbaSAtIDEsIGpdLCBbaSwgaiArIDFdXTtcbiAgICB9IGVsc2VcbiAgICBpZihpID09PSAwKSB7XG4gICAgICBhZGphY2VudFNob3RzID0gW1tpICsgMSwgal0sIFtpLCBqICsgMV0sIFtpLCBqIC0gMV1dO1xuICAgIH0gZWxzZVxuICAgIGlmKGkgPT09IDkpIHtcbiAgICAgIGFkamFjZW50U2hvdHMgPSBbW2kgLSAxLCBqXSwgW2ksIGogKyAxXSwgW2ksIGogLSAxXV07XG4gICAgfSBlbHNlXG4gICAgaWYoaiA9PT0gMCkge1xuICAgICAgYWRqYWNlbnRTaG90cyA9IFtbaSArIDEsIGpdLCBbaSAtIDEsIGpdLCBbaSwgaiArIDFdXTtcbiAgICB9IGVsc2VcbiAgICBpZihqID09PSA5KSB7XG4gICAgICBhZGphY2VudFNob3RzID0gW1tpICsgMSwgal0sIFtpIC0gMSwgal0sIFtpLCBqIC0gMV1dO1xuICAgIH0gXG5cbiAgICAvLyBsaW1pdCBzaG90cyB0byBhIGtub3duIGF4aXMgb2Ygc2hpcFxuICAgIGlmKGF0dGFja0F4aXMgPT09ICd4Jykge1xuICAgICAgYWRqYWNlbnRTaG90cyA9IGFkamFjZW50U2hvdHMuZmlsdGVyKHNob3QgPT4gSlNPTi5zdHJpbmdpZnkoc2hvdCkgIT09IEpTT04uc3RyaW5naWZ5KFtpLCBqIC0gMV0pIFxuICAgICAgICAmJiBKU09OLnN0cmluZ2lmeShzaG90KSAhPT0gSlNPTi5zdHJpbmdpZnkoW2ksIGogKyAxXSkpO1xuICAgIH1cblxuICAgIGlmKGF0dGFja0F4aXMgPT09ICd5Jykge1xuICAgICAgYWRqYWNlbnRTaG90cyA9IGFkamFjZW50U2hvdHMuZmlsdGVyKHNob3QgPT4gSlNPTi5zdHJpbmdpZnkoc2hvdCkgIT09IEpTT04uc3RyaW5naWZ5KFtpICsgMSwgal0pIFxuICAgICAgJiYgSlNPTi5zdHJpbmdpZnkoc2hvdCkgIT09IEpTT04uc3RyaW5naWZ5KFtpIC0gMSwgal0pKTtcbiAgICB9XG5cbiAgICAvLyBUZXN0IGlzIHRydWUgaWYgdGhlcmUgaXMgYW4gYWRqYWNlbnQgc2hvdCBhdmFpbGFibGUgKGEgemVybylcbiAgICBjb25zdCB0ZXN0ID0gYWRqYWNlbnRTaG90cy5zb21lKHh5ID0+IHtcbiAgICAgIGNvbnN0IFsgeCwgeSBdID0geHk7XG4gICAgICByZXR1cm4gQUltYXBbeF1beV0gPT09IDA7XG4gICAgfSk7XG5cbiAgICAvLyBJZiBubyBhZGphY2VudCBzaG90cyBhdmFpbGFibGUsIGdlbmVyYXRlIHJhbmRvbSBzaG90IGFuZCBleGl0IGZ1bmN0aW9uXG4gICAgaWYodGVzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgbGFzdFNob3RNaXNzZWQgPSB0cnVlO1xuICAgICAgICBwaWNrQWRqYWNlbnRDb29yZGluYXRlcygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgXG4gICAgLy8gT3RoZXJ3aXNlLCByYW5kb21seSBwaWNrIGFuIGFkamFjZW50IHNob3RcbiAgICBkbyB7XG4gICAgICBbIGEsIGIgXSA9IGFkamFjZW50U2hvdHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWRqYWNlbnRTaG90cy5sZW5ndGgpXTtcbiAgICB9IHdoaWxlICghSlNPTi5zdHJpbmdpZnkoYWRqYWNlbnRTaG90cykuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoW2EsIGJdKSkgfHwgQUltYXBbYV1bYl0gIT09IDApO1xuICAgICAgQUltYXBbYV1bYl0gPSAxO1xuICAgICAgbGFzdFNob3QgPSBbYSwgYl07XG4gIH1cblxuICBjb25zdCBhdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIC8vIEh1bWFuIGF0dGFja1xuICAgIGlmICh0eXBlT2ZQbGF5ZXIgPT09IFwiaHVtYW5cIikge1xuICAgICAgYm9hcmRPZkF0dGFjay5pbmNvbWluZyh4LCB5KTtcblxuICAgIC8vIEFJIGF0dGFjayBicmFuY2hcbiAgICB9IGVsc2UgaWYoYm9hcmRPZkF0dGFjay5nZXRMYXN0U2hvdEhpdCgpKSB7IFxuICAgICAgbGFzdFNob3RNaXNzZWQgPSBmYWxzZTtcbiAgICAgIGlzQXR0YWNraW5nU2hpcCA9IHRydWU7XG4gICAgICAvLyBSZWNvcmQgYSBoaXQgaW4gQUkncyBtYXBcbiAgICAgIGNvbnN0IFsgYywgZCBdID0gbGFzdFNob3Q7XG4gICAgICBBSW1hcFtjXVtkXSA9IDI7XG4gICAgICBcbiAgICAgIC8vIElmIG5vIHByZXZpb3VzIGhpdCBmb3IgY3VycmVudGx5IGhpdCBzaGlwXG4gICAgICBpZihsYXN0SGl0ID09PSBudWxsKSB7XG4gICAgICAgIGxhc3RIaXQgPSBsYXN0U2hvdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKGxhc3RIaXRbMF0gPT09IGxhc3RTaG90WzBdKSB7XG4gICAgICAgICAgYXR0YWNrQXhpcyA9ICd5JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdHRhY2tBeGlzID0gJ3gnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGJvYXJkT2ZBdHRhY2suZ2V0TWFwKClbY11bZF1bMF0uaXNTdW5rKCkpIHtcbiAgICAgICAgLy8gUmVzZXQgYXhpcyB0cmFja2luZ1xuICAgICAgICBsYXN0SGl0ID0gbnVsbDtcbiAgICAgICAgYXR0YWNrQXhpcyA9ICcnO1xuICAgICAgICBcbiAgICAgICAgcGlja0Nvb3JkaW5hdGVzKCk7XG4gICAgICAgIGJvYXJkT2ZBdHRhY2suaW5jb21pbmcoYSwgYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBpY2tBZGphY2VudENvb3JkaW5hdGVzKCk7XG4gICAgICAgICAgYm9hcmRPZkF0dGFjay5pbmNvbWluZyhhLCBiKTtcbiAgICAgIH1cbiAgICAvLyBGcm9tIGlmIGxhc3Qgc2hvdCBoaXRcbiAgICB9IGVsc2UgaWYoaXNBdHRhY2tpbmdTaGlwKSB7XG4gICAgICAgIGxhc3RTaG90TWlzc2VkID0gdHJ1ZTtcbiAgICAgICAgcGlja0FkamFjZW50Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgYm9hcmRPZkF0dGFjay5pbmNvbWluZyhhLCBiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0U2hvdE1pc3NlZCA9IHRydWU7XG4gICAgICAgIHBpY2tDb29yZGluYXRlcygpO1xuICAgICAgICBib2FyZE9mQXR0YWNrLmluY29taW5nKGEsIGIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICB0eXBlLFxuICAgIGJvYXJkT2ZBdHRhY2ssXG4gICAgYXR0YWNrLFxuICAgIGdldEFJY29vcmRpbmF0ZXMsXG4gICAgQUlQbGFjZVNoaXAsXG4gICAgZ2V0TGFzdFNob3QsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXI7XG4iLCJjb25zdCBtYWtlU2hpcCA9ICh0eXBlKSA9PiB7XG4gIGxldCBsZW5ndGg7XG4gIGlmICh0eXBlID09PSBcImNhcnJpZXJcIikge1xuICAgIGxlbmd0aCA9IDU7XG4gIH1cbiAgaWYgKHR5cGUgPT09IFwiYmF0dGxlc2hpcFwiKSB7XG4gICAgbGVuZ3RoID0gNDtcbiAgfVxuICBpZiAodHlwZSA9PT0gXCJzdWJcIiB8fCB0eXBlID09PSBcImRlc3Ryb3llclwiKSB7XG4gICAgbGVuZ3RoID0gMztcbiAgfVxuICBpZiAodHlwZSA9PT0gXCJwYXRyb2wgYm9hdFwiKSB7XG4gICAgbGVuZ3RoID0gMjtcbiAgfVxuICBjb25zdCBodWxsID0gQXJyYXkobGVuZ3RoKS5maWxsKDApO1xuICBjb25zdCBnZXRIdWxsID0gKCkgPT4gaHVsbDtcbiAgY29uc3QgaGl0ID0gKGluZGV4KSA9PiB7XG4gICAgaHVsbFtpbmRleF0gPSAxO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBodWxsLmV2ZXJ5KCh4KSA9PiB4ID09PSAxKTtcbiAgcmV0dXJuIHsgbGVuZ3RoLCB0eXBlLCBoaXQsIGlzU3VuaywgZ2V0SHVsbCB9OyBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgZ2FtZUxvb3AgZnJvbSAnLi9tb2R1bGVzL2dhbWUnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==