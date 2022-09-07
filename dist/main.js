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
let mouseTouchHold = false;
let touched;
window.addEventListener('mousedown', () => {mouseTouchHold = true;});
window.addEventListener('mouseup', () => {mouseTouchHold = false;});
window.addEventListener('touchstart', () => {mouseTouchHold = true});
window.addEventListener('touchend', () => {mouseTouchHold = false});
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

// Helper functions for playerPlaceShipPhase
const switchAxis = (board) => {
  if(mouseTouchHold){
  renderShadow(lastCoordsRendered, "clear", board, lastShip);
  axis === "x" ? (axis = "y") : (axis = "x");
  renderShadow(lastCoordsRendered, "fill", board, lastShip);
  } else {
    axis === "x" ? (axis = "y") : (axis = "x");
  }
 switchAxisNarrative();
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

  squares.forEach((square) => {
    square.addEventListener('touchstart', (e) => {
      const { x, y } = e.target.dataset;
      renderShadow([x, y], "fill", board, ship);
      touched = e.target;
    });
    square.addEventListener("mouseover", (e) => {
      const { x, y } = e.target.dataset;
      renderShadow([x, y], "fill", board, ship);
    });

    square.addEventListener("mouseout", (e) => {
      const { x, y } = e.target.dataset;
      renderShadow([x, y], "clear", board, ship)
    });
    square.addEventListener("touchend", () => {
      clickToPlace(lastCoordsRendered, board, ship);
    });
    square.addEventListener("click", (e) => {
      const { x, y } = e.target.dataset;
      clickToPlace([x, y], board, ship)
    });
  });

  if (i === 0) {
    window.addEventListener("keydown", (e) => {
      if (e.key === "x") {
        switchAxis(board);
      }
    });
  }
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

   updateAIBoard(board, x, y);
   board.incoming(x, y);
   
  // Update DOM and board
  if(typeof board.getMap()[x][y] === 'object') {
    const ship = board.getMap()[x][y][0];
    if(ship.isSunk()) {
      narrate(`You've sunk the enemy's ${ship.type}!!!`);
    }
  }
 
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
      const ship = p1Board.getMap()[x][y][0];
      ship.isSunk() && narrate(`All hands on deck! Your ${ship.type} is sinking!!!`);
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
  Mouse users hover over the board on the left, and click to place ship. \n 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2xMdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJ4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZmFtaWx5PU94YW5pdW0mZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOiBcXG4gICAgJ2hlYWRlcicgLjFmclxcbiAgICAnbWFpbicgMWZyICAgXFxuICAgIC8xZnI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiA1LjV2dztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgY3Vyc2l2ZTtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuI21haW4ge1xcbiAgZm9udC1mYW1pbHk6ICdPeGFuaXVtJywgY3Vyc2l2ZTtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOlxcbiAgICAnbmFycmF0aXZlIG5hcnJhdGl2ZScgLjJmclxcbiAgICAncDEgICAgICAgIHAyJyAxZnJcXG4gICAgLzFmciAgICAgICAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmFycmF0aXZlIHtcXG4gIGZvbnQtc2l6ZTogMi4zdnc7XFxuICBncmlkLWFyZWE6IG5hcnJhdGl2ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcbn1cXG5cXG4jeC1idG4ge1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuOCk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCBncmF5O1xcbn1cXG5cXG4jcDEge1xcbiAgZ3JpZC1hcmVhOiBwMTtcXG59XFxuXFxuI3AyIHtcXG4gIGdyaWQtYXJlYTogcDI7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZDogcmVwZWF0KDEwLCAyLjV2dykgLyByZXBlYXQoMTAsIDIuNXZ3KTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICB3aWR0aDogMi41dnc7XFxuICBoZWlnaHQ6IDIuNXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWRmZjtcXG4gIG9wYWNpdHk6IC45O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XFxufVxcblxcbi5ob3ZlcmVkLCAucGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDg0ODQ7XFxuICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5ob3ZlcmFibGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0ODQ4NDtcXG4gIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAyNywgMjcpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWJkOGZmO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5ib2FyZCB7XFxuICAgIGdyaWQ6IHJlcGVhdCgxMCwgM3Z3KSAvIHJlcGVhdCgxMCwgM3Z3KTtcXG4gIH1cXG4gIFxcbiAgLnNxdWFyZSB7XFxuICAgIHdpZHRoOiAzdnc7XFxuICAgIGhlaWdodDogM3Z3O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG5cXG4gICNtYWluIHtcXG4gICAgZ3JpZDpcXG4gICAgICAnbmFycmF0aXZlJyA3NXB4XFxuICAgICAgJ3AxJyAuOGZyIFxcbiAgICAgICdwMicgMWZyXFxuICAgICAgLzFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuXFxuICAjaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxMHZ3O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIH1cXG5cXG4gICNuYXJyYXRpdmUge1xcbiAgICBmb250LXNpemU6IDR2dztcXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XFxuICB9XFxuICBcXG4gICNwMSB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgfVxcblxcbiAgLmJvYXJkIHtcXG4gICAgZ3JpZDogcmVwZWF0KDEwLCA1dncpIC8gcmVwZWF0KDEwLCA1dncpO1xcbiAgICBnYXA6IDJweDtcXG4gIH1cXG4gIFxcbiAgLnNxdWFyZSB7XFxuICAgIHdpZHRoOiA1dnc7XFxuICAgIGhlaWdodDogNXZ3O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseURBQWdEO0VBQ2hELHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiOzs7UUFHTTtFQUNOLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsYUFBYTtFQUNiOzs7a0JBR2dCO0VBQ2hCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDRjs7QUFFQTs7RUFFRTtJQUNFOzs7O1VBSU07SUFDTix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHVDQUF1QztJQUN2QyxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZmYW1pbHk9T3hhbml1bSZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOiBcXG4gICAgJ2hlYWRlcicgLjFmclxcbiAgICAnbWFpbicgMWZyICAgXFxuICAgIC8xZnI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiA1LjV2dztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgY3Vyc2l2ZTtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuI21haW4ge1xcbiAgZm9udC1mYW1pbHk6ICdPeGFuaXVtJywgY3Vyc2l2ZTtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOlxcbiAgICAnbmFycmF0aXZlIG5hcnJhdGl2ZScgLjJmclxcbiAgICAncDEgICAgICAgIHAyJyAxZnJcXG4gICAgLzFmciAgICAgICAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmFycmF0aXZlIHtcXG4gIGZvbnQtc2l6ZTogMi4zdnc7XFxuICBncmlkLWFyZWE6IG5hcnJhdGl2ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcbn1cXG5cXG4jeC1idG4ge1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuOCk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCBncmF5O1xcbn1cXG5cXG4jcDEge1xcbiAgZ3JpZC1hcmVhOiBwMTtcXG59XFxuXFxuI3AyIHtcXG4gIGdyaWQtYXJlYTogcDI7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZDogcmVwZWF0KDEwLCAyLjV2dykgLyByZXBlYXQoMTAsIDIuNXZ3KTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICB3aWR0aDogMi41dnc7XFxuICBoZWlnaHQ6IDIuNXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWRmZjtcXG4gIG9wYWNpdHk6IC45O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XFxufVxcblxcbi5ob3ZlcmVkLCAucGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDg0ODQ7XFxuICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5ob3ZlcmFibGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0ODQ4NDtcXG4gIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAyNywgMjcpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWJkOGZmO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5ib2FyZCB7XFxuICAgIGdyaWQ6IHJlcGVhdCgxMCwgM3Z3KSAvIHJlcGVhdCgxMCwgM3Z3KTtcXG4gIH1cXG4gIFxcbiAgLnNxdWFyZSB7XFxuICAgIHdpZHRoOiAzdnc7XFxuICAgIGhlaWdodDogM3Z3O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG5cXG4gICNtYWluIHtcXG4gICAgZ3JpZDpcXG4gICAgICAnbmFycmF0aXZlJyA3NXB4XFxuICAgICAgJ3AxJyAuOGZyIFxcbiAgICAgICdwMicgMWZyXFxuICAgICAgLzFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuXFxuICAjaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxMHZ3O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIH1cXG5cXG4gICNuYXJyYXRpdmUge1xcbiAgICBmb250LXNpemU6IDR2dztcXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XFxuICB9XFxuICBcXG4gICNwMSB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgfVxcblxcbiAgLmJvYXJkIHtcXG4gICAgZ3JpZDogcmVwZWF0KDEwLCA1dncpIC8gcmVwZWF0KDEwLCA1dncpO1xcbiAgICBnYXA6IDJweDtcXG4gIH1cXG4gIFxcbiAgLnNxdWFyZSB7XFxuICAgIHdpZHRoOiA1dnc7XFxuICAgIGhlaWdodDogNXZ3O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuXG5jb25zdCBwMUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcDFcIik7XG5jb25zdCBwMkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcDJcIik7XG5jb25zdCBuYXJyYXRpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hcnJhdGl2ZVwiKTtcblxuLy8gVXNlZCBpbiBzd2l0Y2hBeGlzIGFuZCByZW5kZXJTaGFkb3cgYW5kIHBsYXllclBsYWNlU2hpcFxubGV0IGF4aXMgPSBcInlcIjtcbmxldCBsYXN0Q29vcmRzUmVuZGVyZWQ7XG5sZXQgbGFzdFNoaXA7XG5sZXQgc2hpcEJlaW5nUGxhY2VkO1xubGV0IG1vdXNlVG91Y2hIb2xkID0gZmFsc2U7XG5sZXQgdG91Y2hlZDtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7bW91c2VUb3VjaEhvbGQgPSB0cnVlO30pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7bW91c2VUb3VjaEhvbGQgPSBmYWxzZTt9KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge21vdXNlVG91Y2hIb2xkID0gdHJ1ZX0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge21vdXNlVG91Y2hIb2xkID0gZmFsc2V9KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUsIHtwYXNzaXZlOiBmYWxzZX0pO1xuXG4vLyBVc2VkIGZvciBwbGF5ZXJQbGFjZVNoaXBQaGFzZSBhbmQgYXR0YWNrUGhhc2VcbmxldCBpID0gMDtcbmxldCBwMjtcbmxldCBwMUJvYXJkO1xubGV0IHAyQm9hcmQ7XG5sZXQgcDFTaGlwcztcbmxldCBjdXJyZW50UGxheWVyO1xubGV0IHR1cm4gPSAwO1xuXG4vLyBVc2VkIHRvIHRlbGwgZ2FtZS5qcyB3aGVuIHBsYXllclBsYWNlU2hpcFBoYXNlIGlzIG92ZXJcbmNvbnN0IHNoaXBzUGxhY2VkID0gbmV3IEV2ZW50KFwic2hpcHNQbGFjZWRcIik7XG5jb25zdCBnYW1lT3ZlckV2ZW50ID0gbmV3IEV2ZW50KFwiZ2FtZU92ZXJcIik7XG5cbi8vIEZvciBBSVBsYWNlU2hpcFBoYXNlXG5sZXQgaiA9IDA7XG5cbi8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIHBsYXllclBsYWNlU2hpcFBoYXNlXG5jb25zdCBzd2l0Y2hBeGlzID0gKGJvYXJkKSA9PiB7XG4gIGlmKG1vdXNlVG91Y2hIb2xkKXtcbiAgcmVuZGVyU2hhZG93KGxhc3RDb29yZHNSZW5kZXJlZCwgXCJjbGVhclwiLCBib2FyZCwgbGFzdFNoaXApO1xuICBheGlzID09PSBcInhcIiA/IChheGlzID0gXCJ5XCIpIDogKGF4aXMgPSBcInhcIik7XG4gIHJlbmRlclNoYWRvdyhsYXN0Q29vcmRzUmVuZGVyZWQsIFwiZmlsbFwiLCBib2FyZCwgbGFzdFNoaXApO1xuICB9IGVsc2Uge1xuICAgIGF4aXMgPT09IFwieFwiID8gKGF4aXMgPSBcInlcIikgOiAoYXhpcyA9IFwieFwiKTtcbiAgfVxuIHN3aXRjaEF4aXNOYXJyYXRpdmUoKTtcbn07XG5cbmNvbnN0IHJlbmRlclNoYWRvdyA9IChjb29yZHMsIGZpbGwsIGJvYXJkLCBzaGlwKSA9PiB7XG4gIGxldCBbIHgsIHkgXSA9IGNvb3JkcztcbiAgbGV0IGVsO1xuICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gIHggPSBwYXJzZUludCh4LCAxMCk7XG4gIHkgPSBwYXJzZUludCh5LCAxMCk7XG4gIGlmIChib2FyZC5jaGVja0NvbGxpc2lvbihzaGlwLCB4LCB5LCBheGlzKSAmJiBmaWxsICE9PSBcImNsZWFyXCIpIHtcbiAgICBjb2xsaXNpb24gPSB0cnVlO1xuICB9XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgc2hpcC5sZW5ndGg7IGsgKz0gMSkge1xuICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgI3AxIC5zcXVhcmVbZGF0YS14PVwiJHt4ICsga31cIl1bZGF0YS15PVwiJHt5fVwiXWBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYCNwMSAuc3F1YXJlW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5ICsga31cIl1gXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoZWwpIHtcbiAgICAgIGZpbGwgPT09IFwiZmlsbFwiICYmIGVsLmNsYXNzTGlzdC5hZGQoXCJob3ZlcmVkXCIpO1xuICAgICAgaWYgKGZpbGwgPT09IFwiY2xlYXJcIikge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZFwiKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcInJlZFwiKTtcbiAgICAgIH1cbiAgICAgIGZpbGwgPT09IFwicGxhY2VcIiAmJiBlbC5jbGFzc0xpc3QuYWRkKFwicGxhY2VkXCIpO1xuICAgICAgaWYgKGNvbGxpc2lvbiA9PT0gdHJ1ZSAmJiBmaWxsICE9PSBcInBsYWNlXCIpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGFzdENvb3Jkc1JlbmRlcmVkID0gW3gsIHldO1xuICBsYXN0U2hpcCA9IHNoaXA7XG59O1xuXG5jb25zdCByZW1vdmVMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3AxIC5ib2FyZCAuc3F1YXJlXCIpO1xuICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIHNxdWFyZS5yZXBsYWNlV2l0aChzcXVhcmUuY2xvbmVOb2RlKCkpO1xuICB9KTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7fSk7XG59O1xuXG5jb25zdCBjbGlja1RvUGxhY2UgPSAoY29vcmRzLCBib2FyZCwgc2hpcCkgPT4ge1xuICBsZXQgWyB4LCB5IF0gPSBjb29yZHM7XG4gIHggPSBwYXJzZUludCh4LCAxMCk7XG4gIHkgPSBwYXJzZUludCh5LCAxMCk7XG4gIGlmIChib2FyZC5jaGVja0NvbGxpc2lvbihzaGlwLCB4LCB5LCBheGlzKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBib2FyZC5wbGFjZShzaGlwLCB4LCB5LCBheGlzKTtcbiAgcmVuZGVyU2hhZG93KGNvb3JkcywgXCJwbGFjZVwiLCBib2FyZCwgc2hpcCk7XG4gIHJlbW92ZUxpc3RlbmVycygpO1xuICBpZiAoaSA9PT0gNSkge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoc2hpcHNQbGFjZWQpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUsIHtwYXNzaXZlOiBmYWxzZX0pO1xuICB9XG4gIHBsYXllclBsYWNlU2hpcFBoYXNlKHAxQm9hcmQsIHAxU2hpcHMpO1xufTtcblxuY29uc3QgcGxheWVyUGxhY2VTaGlwID0gKGJvYXJkLCBzaGlwKSA9PiB7XG4gIHNoaXBCZWluZ1BsYWNlZCA9IHNoaXA7XG4gIHAxQm9hcmQgPSBib2FyZDtcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcDEgLmJvYXJkIC5zcXVhcmVcIik7XG4gIHN3aXRjaEF4aXNOYXJyYXRpdmUoKTtcblxuICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAgIHJlbmRlclNoYWRvdyhbeCwgeV0sIFwiZmlsbFwiLCBib2FyZCwgc2hpcCk7XG4gICAgICB0b3VjaGVkID0gZS50YXJnZXQ7XG4gICAgfSk7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAgIHJlbmRlclNoYWRvdyhbeCwgeV0sIFwiZmlsbFwiLCBib2FyZCwgc2hpcCk7XG4gICAgfSk7XG5cbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICByZW5kZXJTaGFkb3coW3gsIHldLCBcImNsZWFyXCIsIGJvYXJkLCBzaGlwKVxuICAgIH0pO1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKCkgPT4ge1xuICAgICAgY2xpY2tUb1BsYWNlKGxhc3RDb29yZHNSZW5kZXJlZCwgYm9hcmQsIHNoaXApO1xuICAgIH0pO1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAgIGNsaWNrVG9QbGFjZShbeCwgeV0sIGJvYXJkLCBzaGlwKVxuICAgIH0pO1xuICB9KTtcblxuICBpZiAoaSA9PT0gMCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcInhcIikge1xuICAgICAgICBzd2l0Y2hBeGlzKGJvYXJkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuZnVuY3Rpb24gcGxheWVyUGxhY2VTaGlwUGhhc2UoYm9hcmQsIHNoaXBzKSB7XG5cbiAgaWYgKGkgPT09IDApIHtcbiAgICBwMUJvYXJkID0gYm9hcmQ7XG4gICAgcDFTaGlwcyA9IHNoaXBzO1xuICB9XG4gIGlmIChpIDw9IDQpIHtcbiAgICBwbGF5ZXJQbGFjZVNoaXAoYm9hcmQsIHNoaXBzW2ldKTtcbiAgICBpICs9IDE7XG4gIH1cbn1cblxuLy8gQUkgUGxhY2Ugc2hpcCBwaGFzZVxuY29uc3QgQUlQbGFjZVNoaXBQaGFzZSA9IChib2FyZCwgc2hpcHMsIHBsYXllcikgPT4ge1xuICBwbGF5ZXIuQUlQbGFjZVNoaXAoYm9hcmQsIHNoaXBzW2pdKTtcbiAgaiArPSAxO1xuICBpZiAoaiA9PT0gNSkge1xuICAgIHJldHVybjtcbiAgfVxuICBBSVBsYWNlU2hpcFBoYXNlKGJvYXJkLCBzaGlwcywgcGxheWVyKTtcbn07XG5cbmNvbnN0IHJlbmRlckJvYXJkID0gKGJvYXJkLCBib3gpID0+IHtcbiAgLy8gQ2xlYXIgb2xkIGNvbnRlbnQgcHJpb3IgdG8gcmUtcmVuZGVyIGlmIG5lZWRlZFxuICBsZXQgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2JveC5pZH0gLmJvYXJkYCk7XG4gIGlmIChncmlkKSB7XG4gICAgZ3JpZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH0gZWxzZSB7XG4gICAgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZC5jbGFzc05hbWUgPSBcImJvYXJkXCI7XG4gIH1cbiAgLy8gSW5kaXZpZHVhbCBzcXVhcmVzIG9uIGJvYXJkXG4gIGZvciAobGV0IGsgPSAwOyBrIDw9IDk7IGsgKz0gMSkge1xuICAgIGZvciAobGV0IGwgPSA5OyBsID49IDA7IGwgLT0gMSkge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZS5jbGFzc05hbWUgPSBcInNxdWFyZVwiO1xuICAgICAgc3F1YXJlLmRhdGFzZXQueCA9IGs7XG4gICAgICBzcXVhcmUuZGF0YXNldC55ID0gbDtcbiAgICAgIGdyaWQuYXBwZW5kKHNxdWFyZSk7XG4gICAgfVxuICB9XG4gIGJveC5hcHBlbmQoZ3JpZCk7XG59O1xuXG5jb25zdCB1cGRhdGVBSUJvYXJkID0gKGJvYXJkLCB4LCB5KSA9PiB7XG4gIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwMiAuc3F1YXJlW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuICBjb25zdCBib2FyZFZhbHVlID0gYm9hcmQuZ2V0TWFwKClbeF1beV07XG5cbiAgaWYoYm9hcmRWYWx1ZSA9PT0gMCB8fCBib2FyZFZhbHVlID09PSAxKSB7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgfVxuICBpZih0eXBlb2YgYm9hcmRWYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgncmVkJyk7XG4gIH1cbn1cblxuLy8gUGxheWVyIGF0dGFjayBwaGFzZSAtIHNlbmRzIHgsIHkgZnJvbSBjbGlja2VkIHNxdWFyZSB0byBib2FyZC5pbmNvbWluZygpXG5jb25zdCBhdHRhY2tDYWxsYmFjayA9IChlLCBib2FyZCkgPT4ge1xuICBjb25zdCB7IHgsIHkgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gIFxuICAgLy8gUmVtb3ZlIGhvdmVyIGVmZmVjdCBhbmQgY2xpY2sgdG8gYXR0YWNrIFxuICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcDIgLnNxdWFyZVwiKTtcbiAgIHNxdWFyZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyYWJsZVwiKTtcbiAgICAgZWwucmVwbGFjZVdpdGgoZWwuY2xvbmVOb2RlKCkpO1xuICAgfSk7XG5cbiAgIHVwZGF0ZUFJQm9hcmQoYm9hcmQsIHgsIHkpO1xuICAgYm9hcmQuaW5jb21pbmcoeCwgeSk7XG4gICBcbiAgLy8gVXBkYXRlIERPTSBhbmQgYm9hcmRcbiAgaWYodHlwZW9mIGJvYXJkLmdldE1hcCgpW3hdW3ldID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IHNoaXAgPSBib2FyZC5nZXRNYXAoKVt4XVt5XVswXTtcbiAgICBpZihzaGlwLmlzU3VuaygpKSB7XG4gICAgICBuYXJyYXRlKGBZb3UndmUgc3VuayB0aGUgZW5lbXkncyAke3NoaXAudHlwZX0hISFgKTtcbiAgICB9XG4gIH1cbiBcbiAgaWYoIWJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgIHNldFRpbWVvdXQoQUlBdHRhY2ssIDUwMCk7XG4gIH0gZWxzZSBpZihib2FyZC5pc0dhbWVPdmVyKCkpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGdhbWVPdmVyRXZlbnQpO1xuICB9XG59O1xuXG4vLyBQbGF5ZXIgYXR0YWNrIHBoYXNlIC0gYWRkcyBjbGljayBldmVudCBsaXN0ZW5lciBhbmQgaG92ZXIgZWZmZWN0XG5jb25zdCBwbGF5ZXJBdHRhY2sgPSAoYm9hcmQpID0+IHtcbiAgY3VycmVudFBsYXllciA9IDE7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3AyIC5zcXVhcmVcIik7XG4gIHNxdWFyZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGF0dGFja0NhbGxiYWNrKGUsIGJvYXJkKSk7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChcImhvdmVyYWJsZVwiKTtcbiAgfSk7XG4gIGlmKHR1cm4gPT09IDApIHtcbiAgICBuYXJyYXRlKFwiQ2xpY2sgdG8gZmlyZSBvbiB0aGUgZW5lbXkgZmxlZXRcIik7XG4gIH1cbiAgdHVybiArPSAxO1xufTtcblxuY29uc3QgdXBkYXRlQm9hcmQgPSAoYm9hcmQsIHgsIHkpID0+IHtcbiAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3AxIC5zcXVhcmVbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XG4gIGNvbnN0IGJvYXJkVmFsdWUgPSBib2FyZC5nZXRNYXAoKVt4XVt5XTtcbiAgaWYoYm9hcmRWYWx1ZSA9PT0gMSkge1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gIH1cbiAgaWYodHlwZW9mIGJvYXJkVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3JlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIEFJQXR0YWNrKCkge1xuICBjdXJyZW50UGxheWVyID0gMjtcbiBcbiAgICBwMi5hdHRhY2soKTtcbiAgICBjb25zdCBbIHgsIHkgXSA9IHAyLmdldExhc3RTaG90KCk7XG4gICAgdXBkYXRlQm9hcmQocDFCb2FyZCwgeCwgeSk7XG5cbiAgICBpZihwMUJvYXJkLmdldExhc3RTaG90SGl0KCkpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBwMUJvYXJkLmdldE1hcCgpW3hdW3ldWzBdO1xuICAgICAgc2hpcC5pc1N1bmsoKSAmJiBuYXJyYXRlKGBBbGwgaGFuZHMgb24gZGVjayEgWW91ciAke3NoaXAudHlwZX0gaXMgc2lua2luZyEhIWApO1xuICAgIH1cblxuICAgIGlmKCFwMUJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgIHBsYXllckF0dGFjayhwMkJvYXJkKTtcbiAgfSBlbHNlIGlmKHAxQm9hcmQuaXNHYW1lT3ZlcigpKSB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChnYW1lT3ZlckV2ZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhdHRhY2tQaGFzZShwbGF5ZXJUd28sIHBsYXllclR3b0JvYXJkKSB7XG4gIGN1cnJlbnRQbGF5ZXIgPSAxO1xuICBwMiA9IHBsYXllclR3bztcbiAgcDJCb2FyZCA9IHBsYXllclR3b0JvYXJkO1xuICBwbGF5ZXJBdHRhY2socDJCb2FyZCk7XG59XG5cbmZ1bmN0aW9uIGdhbWVPdmVyKCkge1xuICBpZihjdXJyZW50UGxheWVyID09PSAxKSB7XG4gICAgbmFycmF0aXZlLnRleHRDb250ZW50ID0gYEdsb3Jpb3VzIHZpY3RvcnkhIFlvdSBzdW5rIGFsbCB0aGUgQUkgc2hpcHMhYDtcbiAgfSBlbHNlIHtcbiAgICBuYXJyYXRpdmUudGV4dENvbnRlbnQgPSAnQ3J1c2hpbmcgZGVmZWF0IC4uLiBUaGUgQUkgaGFzIHN1bmsgYWxsIG9mIHlvdXIgc2hpcHMhJztcbiAgfVxufVxuXG5mdW5jdGlvbiBuYXJyYXRlKG1lc3NhZ2UpIHtcbiAgbmFycmF0aXZlLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbmFycmF0aXZlLnRleHRDb250ZW50ID0gJyc7XG4gIH0sIDQwMDApXG59XG5cbmZ1bmN0aW9uIHN3aXRjaEF4aXNOYXJyYXRpdmUoKSB7XG4gIG5hcnJhdGl2ZS5pbm5lckhUTUwgPSBgTGVhZCB5b3VyICR7c2hpcEJlaW5nUGxhY2VkLnR5cGV9IGludG8gYmF0dGxlLiBcXG4gXG4gIE1vdXNlIHVzZXJzIGhvdmVyIG92ZXIgdGhlIGJvYXJkIG9uIHRoZSBsZWZ0LCBhbmQgY2xpY2sgdG8gcGxhY2Ugc2hpcC4gXFxuIFxuICBNb2JpbGUgdXNlcnMgdG91Y2gsIGhvbGQsIGRyYWcsIGFuZCByZWxlYXNlLiBIaXQgPHNwYW4gaWQ9J3gtYnRuJz5YPC9zcGFuPiBcXG4gXG4gIHRvIHN3aXRjaCBheGlzLmA7XG5cbiAgY29uc3QgeEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN4LWJ0bicpO1xuICAgIHhCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzd2l0Y2hBeGlzKHAxQm9hcmQpKTtcbiAgICB4QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoJywgKCkgPT4gc3dpdGNoQXhpcyhwMUJvYXJkKSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgeyB4OiBhLCB5OiBiIH0gPSB0b3VjaGVkLmRhdGFzZXQ7XG4gIGNvbnN0IGxhc3RFbGVtZW50ID0gdG91Y2hlZDtcblxuICBsZXQgeCA9IGUudG91Y2hlc1swXS5jbGllbnRYXG4gIGxldCB5ID0gZS50b3VjaGVzWzBdLmNsaWVudFlcbiAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xuICBpZihjdXJyZW50RWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQgPT09ICdwMicpIHtcbiAgICByZXR1cm47XG4gIH0gXG4gIFxuICBpZihjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3NxdWFyZScpKSB7XG4gICAgKHsgeCwgeSB9ID0gY3VycmVudEVsZW1lbnQuZGF0YXNldCk7XG4gICAgaWYoY3VycmVudEVsZW1lbnQgIT09IGxhc3RFbGVtZW50KSB7XG4gICAgICByZW5kZXJTaGFkb3coW2EsIGJdLCBcImNsZWFyXCIsIHAxQm9hcmQsIHNoaXBCZWluZ1BsYWNlZCk7XG4gICAgICByZW5kZXJTaGFkb3coW3gsIHldLCAnZmlsbCcsIHAxQm9hcmQsIHNoaXBCZWluZ1BsYWNlZCk7XG4gICAgICB0b3VjaGVkID0gY3VycmVudEVsZW1lbnQ7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIHAxQm94LFxuICBwMkJveCxcbiAgcGxheWVyUGxhY2VTaGlwLFxuICBwbGF5ZXJQbGFjZVNoaXBQaGFzZSxcbiAgQUlQbGFjZVNoaXBQaGFzZSxcbiAgcmVuZGVyQm9hcmQsXG4gIHBsYXllckF0dGFjayxcbiAgYXR0YWNrUGhhc2UsXG4gIGdhbWVPdmVyLFxufTtcbiIsImltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IG1ha2VTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgeyBcbiAgcDFCb3gsIFxuICBwMkJveCwgIFxuICBwbGF5ZXJQbGFjZVNoaXBQaGFzZSwgXG4gIEFJUGxhY2VTaGlwUGhhc2UsXG4gIHJlbmRlckJvYXJkLCBcbiAgYXR0YWNrUGhhc2UsXG4gIGdhbWVPdmVyLFxufSBmcm9tIFwiLi9ET01cIjtcblxuXG4vLyBTRVRVUFxuXG4vLyBNYWtlIGdhbWUgYm9hcmRzXG5jb25zdCBwMUJvYXJkID0gZ2FtZUJvYXJkKCk7XG5wMUJvYXJkLmluaXQoKTtcbmNvbnN0IHAyQm9hcmQgPSBnYW1lQm9hcmQoKTtcbnAyQm9hcmQuaW5pdCgpO1xuXG4vLyBNYWtlIHBsYXllcnNcbmNvbnN0IHAxID0gcGxheWVyKCcxJywgcDJCb2FyZCwgXCJodW1hblwiKTtcbmNvbnN0IHAyID0gcGxheWVyKFwiMlwiLCBwMUJvYXJkLCBcIkFJXCIpO1xuXG4vLyBNYWtlIHAxIHNoaXBzXG5jb25zdCBwMVB0YiA9IG1ha2VTaGlwKCdwYXRyb2wgYm9hdCcpO1xuY29uc3QgcDFTdWIgPSBtYWtlU2hpcCgnc3ViJyk7XG5jb25zdCBwMURlc3Ryb3llciA9IG1ha2VTaGlwKCdkZXN0cm95ZXInKTtcbmNvbnN0IHAxQmF0dGxlc2hpcCA9IG1ha2VTaGlwKCdiYXR0bGVzaGlwJyk7XG5jb25zdCBwMUNhcnJpZXIgPSBtYWtlU2hpcCgnY2FycmllcicpO1xuY29uc3QgcDFTaGlwcyA9IFtwMUNhcnJpZXIsIHAxQmF0dGxlc2hpcCwgcDFEZXN0cm95ZXIsIHAxU3ViLCBwMVB0Yl07XG5cbi8vIE1ha2UgQUkgc2hpcHNcbmNvbnN0IHAyUHRiID0gbWFrZVNoaXAoJ3BhdHJvbCBib2F0Jyk7XG5jb25zdCBwMlN1YiA9IG1ha2VTaGlwKCdzdWInKTtcbmNvbnN0IHAyRGVzdHJveWVyID0gbWFrZVNoaXAoJ2Rlc3Ryb3llcicpO1xuY29uc3QgcDJCYXR0bGVzaGlwID0gbWFrZVNoaXAoJ2JhdHRsZXNoaXAnKTtcbmNvbnN0IHAyQ2FycmllciA9IG1ha2VTaGlwKCdjYXJyaWVyJyk7XG5jb25zdCBBSVNoaXBzID0gW3AyQ2FycmllciwgcDJCYXR0bGVzaGlwLCBwMkRlc3Ryb3llciwgcDJTdWIsIHAyUHRiXTtcblxuLy8gUmVuZGVyIEJvYXJkc1xucmVuZGVyQm9hcmQocDFCb2FyZCwgcDFCb3gpO1xucmVuZGVyQm9hcmQocDJCb2FyZCwgcDJCb3gpO1xuXG4vLyBQbGFjZSBzaGlwcyBwaGFzZVxuQUlQbGFjZVNoaXBQaGFzZShwMkJvYXJkLCBBSVNoaXBzLCBwMik7XG5wbGF5ZXJQbGFjZVNoaXBQaGFzZShwMUJvYXJkLCBwMVNoaXBzKTtcblxuLy8gUGxheWVyIGF0dGFjayBwaGFzZSAtIGV2ZW50IGZpcmVzIG9uY2UgYWxsIHNoaXBzIGFyZSBwbGFjZWQsIGFuZCBtb3ZlcyBpbnRvIFxuLy8gYXR0YWNrIHBoYXNlXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzaGlwc1BsYWNlZCcsICgpID0+IGF0dGFja1BoYXNlKHAyLCBwMkJvYXJkKSk7XG5cbi8vIEdhbWVvdmVyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnYW1lT3ZlcicsIGdhbWVPdmVyKTtcbiIsImNvbnN0IGdhbWVCb2FyZCA9ICgpID0+IHtcbiAgbGV0IG1hcDtcbiAgbGV0IHN1bmtTaGlwcyA9IDA7XG4gIGxldCBsYXN0U2hvdEhpdCA9IGZhbHNlO1xuICBcbiAgY29uc3QgZ2V0TGFzdFNob3RIaXQgPSAoKSA9PiBsYXN0U2hvdEhpdDtcbiAgXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgc3Vua1NoaXBzID0gMDtcbiAgICBtYXAgPSBBcnJheSgxMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIG1hcFtpXSA9IEFycmF5KDEwKS5maWxsKDApO1xuICAgIH1cbiAgfTtcbiAgXG4gIGNvbnN0IGdldE1hcCA9ICgpID0+IG1hcDtcblxuICBjb25zdCBjaGVja0NvbGxpc2lvbiA9IChzaGlwLCB4LCB5LCBheGlzKSA9PiB7XG4gICAgY29uc3QgY29vcmRzID0gW107XG4gICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICBpZiAoeCArIHNoaXAubGVuZ3RoID4gMTApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29vcmRzLnB1c2goW3ggKyBpLCB5XSk7XG4gICAgICB9XG4gICAgICBsZXQgcmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIGNvb3Jkcy5mb3JFYWNoKChwYWlyKSA9PiB7XG4gICAgICAgIGNvbnN0IFthLCBiXSA9IHBhaXI7XG4gICAgICAgIGlmICh0eXBlb2YgbWFwW2FdW2JdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgcmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9XG4gICAgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICBpZiAoeSArIHNoaXAubGVuZ3RoID4gMTApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29vcmRzLnB1c2goW3gsIHkgKyBpXSk7XG4gICAgICB9XG4gICAgICBsZXQgcmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIGNvb3Jkcy5mb3JFYWNoKChwYWlyKSA9PiB7XG4gICAgICAgIGNvbnN0IFthLCBiXSA9IHBhaXI7XG4gICAgICAgIGlmICh0eXBlb2YgbWFwW2FdW2JdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgcmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuIFxuICBjb25zdCBwbGFjZSA9IChzaGlwLCB4LCB5LCBheGlzKSA9PiB7XG4gICAgLy8gaSBpcyBodWxsIGluZGV4IHRvIHRyYWNrIGhpdHNcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGEgPSB4O1xuICAgIGxldCBiID0geTtcbiAgICB3aGlsZSAoaSA8IHNoaXAubGVuZ3RoKSB7XG4gICAgICBtYXBbYV1bYl0gPSBbc2hpcCwgaV07XG4gICAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgYSArPSAxO1xuICAgICAgICBpICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiICs9IDE7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIFxuICBjb25zdCBpc0dhbWVPdmVyID0gKCkgPT4ge1xuICAgIGlmIChzdW5rU2hpcHMgPT09IDUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gXG4gIGNvbnN0IHRlc3RJZlN1bmsgPSAoc2hpcCkgPT4ge1xuICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICB9XG4gICAgaXNHYW1lT3ZlcihzdW5rU2hpcHMpO1xuICB9O1xuIFxuICBjb25zdCBpbmNvbWluZyA9ICh4LCB5KSA9PiB7XG4gICAgbGV0IHNoaXA7XG4gICAgbGV0IGh1bGxJbmRleDtcbiAgICBpZiAodHlwZW9mIG1hcFt4XVt5XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgW3NoaXAsIGh1bGxJbmRleF0gPSBtYXBbeF1beV07IC8vIDAgaXMgc2hpcCBvYmplY3QsIDEgaXMgaHVsbCBpbmRleC4gc2VlIHBsYWNlKClcbiAgICAgIHNoaXAuaGl0KGh1bGxJbmRleCk7XG4gICAgICBsYXN0U2hvdEhpdCA9IHRydWU7XG4gICAgICB0ZXN0SWZTdW5rKHNoaXApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXBbeF1beV0gPSAxO1xuICAgICAgbGFzdFNob3RIaXQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG4gXG4gIGNvbnN0IGdldFN1bmtTaGlwcyA9ICgpID0+IHN1bmtTaGlwcztcbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIGdldE1hcCxcbiAgICBjaGVja0NvbGxpc2lvbixcbiAgICBwbGFjZSxcbiAgICBpc0dhbWVPdmVyLFxuICAgIHRlc3RJZlN1bmssXG4gICAgaW5jb21pbmcsXG4gICAgZ2V0U3Vua1NoaXBzLFxuICAgIGdldExhc3RTaG90SGl0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUJvYXJkO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1sb25lbHktaWYgKi9cbmNvbnN0IHBsYXllciA9IChtb25pa2VyLCBib2FyZCwgdHlwZU9mUGxheWVyKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBtb25pa2VyO1xuICBjb25zdCB0eXBlID0gdHlwZU9mUGxheWVyO1xuICBjb25zdCBib2FyZE9mQXR0YWNrID0gYm9hcmQ7XG5cbiAgLy8gQUkgZGF0YSBmb3IgY29vcmRzIG9mIHNob3RcbiAgbGV0IGE7ICAgIFxuICBsZXQgYjtcbiAgbGV0IGlzQXR0YWNraW5nU2hpcCA9IGZhbHNlO1xuICBsZXQgYXR0YWNrQXhpcztcbiAgbGV0IGxhc3RIaXQgPSBudWxsO1xuICBsZXQgbGFzdFNob3Q7XG4gIGxldCBsYXN0U2hvdE1pc3NlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGdldExhc3RTaG90ID0gKCkgPT4gbGFzdFNob3Q7XG5cbiAgY29uc3QgZ2V0QUljb29yZGluYXRlcyA9ICgpID0+IFthLCBiXTtcblxuICBjb25zdCBBSW1hcCA9IEFycmF5KDEwKTsgLy8gMCBpcyB1bmtub3duLCAxIGlzIG1pc3MsIDIgaXMgaGl0XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgQUltYXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBBSW1hcFtpXSA9IEFycmF5KDEwKS5maWxsKDApO1xuICB9XG4gICBcbiAgY29uc3QgQUlQbGFjZVNoaXAgPSAoQUlCb2FyZCwgc2hpcCkgPT4ge1xuICAgIGxldCB4O1xuICAgIGxldCB5O1xuICAgIGxldCBheGlzO1xuICAgIGRvIHtcbiAgICAgIGF4aXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgIGlmKGF4aXMgPT09IDApIHtcbiAgICAgICAgYXhpcyA9ICd4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF4aXMgPSAneSc7XG4gICAgICB9XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9IHdoaWxlKEFJQm9hcmQuY2hlY2tDb2xsaXNpb24oc2hpcCwgeCwgeSwgYXhpcykpXG4gICAgQUlCb2FyZC5wbGFjZShzaGlwLCB4LCB5LCBheGlzKTtcbiAgfVxuXG4gIC8vIDIgaGVscGVyIGZ1bmN0aW9ucyBmb3IgQUkgYXR0YWNrXG4gIGNvbnN0IHBpY2tDb29yZGluYXRlcyA9ICgpID0+IHtcbiAgICBpc0F0dGFja2luZ1NoaXAgPSBmYWxzZTtcbiAgICBkbyB7XG4gICAgICBhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgYiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9IHdoaWxlIChBSW1hcFthXVtiXSAhPT0gMCk7XG4gICAgQUltYXBbYV1bYl0gPSAxO1xuICAgIGxhc3RTaG90ID0gW2EsIGJdO1xuICB9O1xuICBcbiAgY29uc3QgcGlja0FkamFjZW50Q29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgaXNBdHRhY2tpbmdTaGlwID0gdHJ1ZTtcbiAgICBsZXQgaTtcbiAgICBsZXQgajtcblxuICAgIGxhc3RTaG90TWlzc2VkID8gWyBpLCBqIF0gPSBsYXN0SGl0IDogWyBpLCBqIF0gPSBsYXN0U2hvdDsgICAgXG4gICAgXG4gICAgbGV0IGFkamFjZW50U2hvdHMgPSBbW2kgKyAxLCBqXSwgW2kgLSAxLCBqXSwgW2ksIGogKyAxXSwgW2ksIGogLSAxXV07XG5cbiAgICAvLyBDb2RlIHRvIGxpbWl0IHBvc3NpYmxlIHNob3RzIGZvciBlZGdlIG9mIGJvYXJkICAgXG4gICAgaWYoaSA9PT0gMCAmJiBqID09PSAwKSB7XG4gICAgICBhZGphY2VudFNob3RzID0gW1tpICsgMSwgal0sIFtpLCBqICsgMV1dO1xuICAgIH0gZWxzZVxuICAgIGlmKGkgPT09IDkgJiYgaiA9PT0gOSkge1xuICAgICAgYWRqYWNlbnRTaG90cyA9IFtbaSAtIDEsIGpdLCBbaSwgaiAtIDFdXTtcbiAgICB9IGVsc2VcbiAgICBpZihpID09PSAwICYmIGogPT09IDkpIHtcbiAgICAgIGFkamFjZW50U2hvdHMgPSBbW2kgKyAxLCBqXSwgW2ksIGogLSAxXV07XG4gICAgfSBlbHNlXG4gICAgaWYoaSA9PT0gOSAmJiBqID09PSAwKSB7XG4gICAgICBhZGphY2VudFNob3RzID0gW1tpIC0gMSwgal0sIFtpLCBqICsgMV1dO1xuICAgIH0gZWxzZVxuICAgIGlmKGkgPT09IDApIHtcbiAgICAgIGFkamFjZW50U2hvdHMgPSBbW2kgKyAxLCBqXSwgW2ksIGogKyAxXSwgW2ksIGogLSAxXV07XG4gICAgfSBlbHNlXG4gICAgaWYoaSA9PT0gOSkge1xuICAgICAgYWRqYWNlbnRTaG90cyA9IFtbaSAtIDEsIGpdLCBbaSwgaiArIDFdLCBbaSwgaiAtIDFdXTtcbiAgICB9IGVsc2VcbiAgICBpZihqID09PSAwKSB7XG4gICAgICBhZGphY2VudFNob3RzID0gW1tpICsgMSwgal0sIFtpIC0gMSwgal0sIFtpLCBqICsgMV1dO1xuICAgIH0gZWxzZVxuICAgIGlmKGogPT09IDkpIHtcbiAgICAgIGFkamFjZW50U2hvdHMgPSBbW2kgKyAxLCBqXSwgW2kgLSAxLCBqXSwgW2ksIGogLSAxXV07XG4gICAgfSBcblxuICAgIC8vIGxpbWl0IHNob3RzIHRvIGEga25vd24gYXhpcyBvZiBzaGlwXG4gICAgaWYoYXR0YWNrQXhpcyA9PT0gJ3gnKSB7XG4gICAgICBhZGphY2VudFNob3RzID0gYWRqYWNlbnRTaG90cy5maWx0ZXIoc2hvdCA9PiBKU09OLnN0cmluZ2lmeShzaG90KSAhPT0gSlNPTi5zdHJpbmdpZnkoW2ksIGogLSAxXSkgXG4gICAgICAgICYmIEpTT04uc3RyaW5naWZ5KHNob3QpICE9PSBKU09OLnN0cmluZ2lmeShbaSwgaiArIDFdKSk7XG4gICAgfVxuXG4gICAgaWYoYXR0YWNrQXhpcyA9PT0gJ3knKSB7XG4gICAgICBhZGphY2VudFNob3RzID0gYWRqYWNlbnRTaG90cy5maWx0ZXIoc2hvdCA9PiBKU09OLnN0cmluZ2lmeShzaG90KSAhPT0gSlNPTi5zdHJpbmdpZnkoW2kgKyAxLCBqXSkgXG4gICAgICAmJiBKU09OLnN0cmluZ2lmeShzaG90KSAhPT0gSlNPTi5zdHJpbmdpZnkoW2kgLSAxLCBqXSkpO1xuICAgIH1cblxuICAgIC8vIFRlc3QgaXMgdHJ1ZSBpZiB0aGVyZSBpcyBhbiBhZGphY2VudCBzaG90IGF2YWlsYWJsZSAoYSB6ZXJvKVxuICAgIGNvbnN0IHRlc3QgPSBhZGphY2VudFNob3RzLnNvbWUoeHkgPT4ge1xuICAgICAgY29uc3QgWyB4LCB5IF0gPSB4eTtcbiAgICAgIHJldHVybiBBSW1hcFt4XVt5XSA9PT0gMDtcbiAgICB9KTtcblxuICAgIC8vIElmIG5vIGFkamFjZW50IHNob3RzIGF2YWlsYWJsZSwgZ2VuZXJhdGUgcmFuZG9tIHNob3QgYW5kIGV4aXQgZnVuY3Rpb25cbiAgICBpZih0ZXN0ID09PSBmYWxzZSkge1xuICAgICAgICBsYXN0U2hvdE1pc3NlZCA9IHRydWU7XG4gICAgICAgIHBpY2tBZGphY2VudENvb3JkaW5hdGVzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICBcbiAgICAvLyBPdGhlcndpc2UsIHJhbmRvbWx5IHBpY2sgYW4gYWRqYWNlbnQgc2hvdFxuICAgIGRvIHtcbiAgICAgIFsgYSwgYiBdID0gYWRqYWNlbnRTaG90c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhZGphY2VudFNob3RzLmxlbmd0aCldO1xuICAgIH0gd2hpbGUgKCFKU09OLnN0cmluZ2lmeShhZGphY2VudFNob3RzKS5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShbYSwgYl0pKSB8fCBBSW1hcFthXVtiXSAhPT0gMCk7XG4gICAgICBBSW1hcFthXVtiXSA9IDE7XG4gICAgICBsYXN0U2hvdCA9IFthLCBiXTtcbiAgfVxuXG4gIGNvbnN0IGF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgLy8gSHVtYW4gYXR0YWNrXG4gICAgaWYgKHR5cGVPZlBsYXllciA9PT0gXCJodW1hblwiKSB7XG4gICAgICBib2FyZE9mQXR0YWNrLmluY29taW5nKHgsIHkpO1xuXG4gICAgLy8gQUkgYXR0YWNrIGJyYW5jaFxuICAgIH0gZWxzZSBpZihib2FyZE9mQXR0YWNrLmdldExhc3RTaG90SGl0KCkpIHsgXG4gICAgICBsYXN0U2hvdE1pc3NlZCA9IGZhbHNlO1xuICAgICAgaXNBdHRhY2tpbmdTaGlwID0gdHJ1ZTtcbiAgICAgIC8vIFJlY29yZCBhIGhpdCBpbiBBSSdzIG1hcFxuICAgICAgY29uc3QgWyBjLCBkIF0gPSBsYXN0U2hvdDtcbiAgICAgIEFJbWFwW2NdW2RdID0gMjtcbiAgICAgIFxuICAgICAgLy8gSWYgbm8gcHJldmlvdXMgaGl0IGZvciBjdXJyZW50bHkgaGl0IHNoaXBcbiAgICAgIGlmKGxhc3RIaXQgPT09IG51bGwpIHtcbiAgICAgICAgbGFzdEhpdCA9IGxhc3RTaG90O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYobGFzdEhpdFswXSA9PT0gbGFzdFNob3RbMF0pIHtcbiAgICAgICAgICBhdHRhY2tBeGlzID0gJ3knO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF0dGFja0F4aXMgPSAneCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoYm9hcmRPZkF0dGFjay5nZXRNYXAoKVtjXVtkXVswXS5pc1N1bmsoKSkge1xuICAgICAgICAvLyBSZXNldCBheGlzIHRyYWNraW5nXG4gICAgICAgIGxhc3RIaXQgPSBudWxsO1xuICAgICAgICBhdHRhY2tBeGlzID0gJyc7XG4gICAgICAgIFxuICAgICAgICBwaWNrQ29vcmRpbmF0ZXMoKTtcbiAgICAgICAgYm9hcmRPZkF0dGFjay5pbmNvbWluZyhhLCBiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGlja0FkamFjZW50Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgICBib2FyZE9mQXR0YWNrLmluY29taW5nKGEsIGIpO1xuICAgICAgfVxuICAgIC8vIEZyb20gaWYgbGFzdCBzaG90IGhpdFxuICAgIH0gZWxzZSBpZihpc0F0dGFja2luZ1NoaXApIHtcbiAgICAgICAgbGFzdFNob3RNaXNzZWQgPSB0cnVlO1xuICAgICAgICBwaWNrQWRqYWNlbnRDb29yZGluYXRlcygpO1xuICAgICAgICBib2FyZE9mQXR0YWNrLmluY29taW5nKGEsIGIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxhc3RTaG90TWlzc2VkID0gdHJ1ZTtcbiAgICAgICAgcGlja0Nvb3JkaW5hdGVzKCk7XG4gICAgICAgIGJvYXJkT2ZBdHRhY2suaW5jb21pbmcoYSwgYik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHR5cGUsXG4gICAgYm9hcmRPZkF0dGFjayxcbiAgICBhdHRhY2ssXG4gICAgZ2V0QUljb29yZGluYXRlcyxcbiAgICBBSVBsYWNlU2hpcCxcbiAgICBnZXRMYXN0U2hvdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllcjtcbiIsImNvbnN0IG1ha2VTaGlwID0gKHR5cGUpID0+IHtcbiAgbGV0IGxlbmd0aDtcbiAgaWYgKHR5cGUgPT09IFwiY2FycmllclwiKSB7XG4gICAgbGVuZ3RoID0gNTtcbiAgfVxuICBpZiAodHlwZSA9PT0gXCJiYXR0bGVzaGlwXCIpIHtcbiAgICBsZW5ndGggPSA0O1xuICB9XG4gIGlmICh0eXBlID09PSBcInN1YlwiIHx8IHR5cGUgPT09IFwiZGVzdHJveWVyXCIpIHtcbiAgICBsZW5ndGggPSAzO1xuICB9XG4gIGlmICh0eXBlID09PSBcInBhdHJvbCBib2F0XCIpIHtcbiAgICBsZW5ndGggPSAyO1xuICB9XG4gIGNvbnN0IGh1bGwgPSBBcnJheShsZW5ndGgpLmZpbGwoMCk7XG4gIGNvbnN0IGdldEh1bGwgPSAoKSA9PiBodWxsO1xuICBjb25zdCBoaXQgPSAoaW5kZXgpID0+IHtcbiAgICBodWxsW2luZGV4XSA9IDE7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGh1bGwuZXZlcnkoKHgpID0+IHggPT09IDEpO1xuICByZXR1cm4geyBsZW5ndGgsIHR5cGUsIGhpdCwgaXNTdW5rLCBnZXRIdWxsIH07IFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgKiBhcyBnYW1lTG9vcCBmcm9tICcuL21vZHVsZXMvZ2FtZSc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9