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

let canVibrate = false;
if('vibrate' in navigator)
  canVibrate = true;

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
    if(ship.isSunk()) {
      narrate(`You've sunk the enemy's ${ship.type}!!!`);
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
      if (canVibrate && AIHits === 0) 
        navigator.vibrate(500);
      AIHits += 1;
      const ship = p1Board.getMap()[x][y][0];
      if(ship.isSunk()) {
        narrate(`All hands on deck! Your ${ship.type} is sinking!!!`);
        if (canVibrate) 
          navigator.vibrate(500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsTHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmZhbWlseT1PeGFuaXVtJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZDogXFxuICAgICdoZWFkZXInIC4xZnJcXG4gICAgJ21haW4nIDFmciAgIFxcbiAgICAvMWZyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogNS41dnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbiNtYWluIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3hhbml1bScsIGN1cnNpdmU7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZDpcXG4gICAgJ25hcnJhdGl2ZSBuYXJyYXRpdmUnIC4yZnJcXG4gICAgJ3AxICAgICAgICBwMicgMWZyXFxuICAgIC8xZnIgICAgICAgMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25hcnJhdGl2ZSB7XFxuICBmb250LXNpemU6IDIuM3Z3O1xcbiAgZ3JpZC1hcmVhOiBuYXJyYXRpdmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcXG59XFxuXFxuI3gtYnRuIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjgpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggZ3JheTtcXG59XFxuXFxuI3AxIHtcXG4gIGdyaWQtYXJlYTogcDE7XFxufVxcblxcbiNwMiB7XFxuICBncmlkLWFyZWE6IHAyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IHJlcGVhdCgxMCwgMi41dncpIC8gcmVwZWF0KDEwLCAyLjV2dyk7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgd2lkdGg6IDIuNXZ3O1xcbiAgaGVpZ2h0OiAyLjV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlkZmY7XFxuICBvcGFjaXR5OiAuOTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xcbn1cXG5cXG4uaG92ZXJlZCwgLnBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ4NDg0O1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4uaG92ZXJhYmxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDg0ODQ7XFxuICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjcsIDI3KTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzliZDhmZjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuYm9hcmQge1xcbiAgICBncmlkOiByZXBlYXQoMTAsIDN2dykgLyByZXBlYXQoMTAsIDN2dyk7XFxuICB9XFxuICBcXG4gIC5zcXVhcmUge1xcbiAgICB3aWR0aDogM3Z3O1xcbiAgICBoZWlnaHQ6IDN2dztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuXFxuICAjbWFpbiB7XFxuICAgIGdyaWQ6XFxuICAgICAgJ25hcnJhdGl2ZScgNzVweFxcbiAgICAgICdwMScgLjhmciBcXG4gICAgICAncDInIDFmclxcbiAgICAgIC8xZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgI2hlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMTB2dztcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB9XFxuXFxuICAjbmFycmF0aXZlIHtcXG4gICAgZm9udC1zaXplOiA0dnc7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgfVxcbiAgXFxuICAjcDEge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIH1cXG5cXG4gIC5ib2FyZCB7XFxuICAgIGdyaWQ6IHJlcGVhdCgxMCwgNXZ3KSAvIHJlcGVhdCgxMCwgNXZ3KTtcXG4gICAgZ2FwOiAycHg7XFxuICB9XFxuICBcXG4gIC5zcXVhcmUge1xcbiAgICB3aWR0aDogNXZ3O1xcbiAgICBoZWlnaHQ6IDV2dztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlEQUFnRDtFQUNoRCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYjs7O1FBR007RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFDQUFxQztFQUNyQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGFBQWE7RUFDYjs7O2tCQUdnQjtFQUNoQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJDQUEyQztFQUMzQyxzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSx1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRTs7OztVQUlNO0lBQ04sdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx1Q0FBdUM7SUFDdkMsUUFBUTtFQUNWOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZmFtaWx5PU94YW5pdW0mZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvYmFja2dyb3VuZC5qcGcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZDogXFxuICAgICdoZWFkZXInIC4xZnJcXG4gICAgJ21haW4nIDFmciAgIFxcbiAgICAvMWZyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogNS41dnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbiNtYWluIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3hhbml1bScsIGN1cnNpdmU7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZDpcXG4gICAgJ25hcnJhdGl2ZSBuYXJyYXRpdmUnIC4yZnJcXG4gICAgJ3AxICAgICAgICBwMicgMWZyXFxuICAgIC8xZnIgICAgICAgMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25hcnJhdGl2ZSB7XFxuICBmb250LXNpemU6IDIuM3Z3O1xcbiAgZ3JpZC1hcmVhOiBuYXJyYXRpdmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcXG59XFxuXFxuI3gtYnRuIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjgpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggZ3JheTtcXG59XFxuXFxuI3AxIHtcXG4gIGdyaWQtYXJlYTogcDE7XFxufVxcblxcbiNwMiB7XFxuICBncmlkLWFyZWE6IHAyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IHJlcGVhdCgxMCwgMi41dncpIC8gcmVwZWF0KDEwLCAyLjV2dyk7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgd2lkdGg6IDIuNXZ3O1xcbiAgaGVpZ2h0OiAyLjV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlkZmY7XFxuICBvcGFjaXR5OiAuOTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xcbn1cXG5cXG4uaG92ZXJlZCwgLnBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ4NDg0O1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4uaG92ZXJhYmxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDg0ODQ7XFxuICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjcsIDI3KTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzliZDhmZjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuYm9hcmQge1xcbiAgICBncmlkOiByZXBlYXQoMTAsIDN2dykgLyByZXBlYXQoMTAsIDN2dyk7XFxuICB9XFxuICBcXG4gIC5zcXVhcmUge1xcbiAgICB3aWR0aDogM3Z3O1xcbiAgICBoZWlnaHQ6IDN2dztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuXFxuICAjbWFpbiB7XFxuICAgIGdyaWQ6XFxuICAgICAgJ25hcnJhdGl2ZScgNzVweFxcbiAgICAgICdwMScgLjhmciBcXG4gICAgICAncDInIDFmclxcbiAgICAgIC8xZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgI2hlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMTB2dztcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB9XFxuXFxuICAjbmFycmF0aXZlIHtcXG4gICAgZm9udC1zaXplOiA0dnc7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgfVxcbiAgXFxuICAjcDEge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIH1cXG5cXG4gIC5ib2FyZCB7XFxuICAgIGdyaWQ6IHJlcGVhdCgxMCwgNXZ3KSAvIHJlcGVhdCgxMCwgNXZ3KTtcXG4gICAgZ2FwOiAycHg7XFxuICB9XFxuICBcXG4gIC5zcXVhcmUge1xcbiAgICB3aWR0aDogNXZ3O1xcbiAgICBoZWlnaHQ6IDV2dztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cblxuY29uc3QgcDFCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AxXCIpO1xuY29uc3QgcDJCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AyXCIpO1xuY29uc3QgbmFycmF0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXJyYXRpdmVcIik7XG5cbmxldCBjYW5WaWJyYXRlID0gZmFsc2U7XG5pZigndmlicmF0ZScgaW4gbmF2aWdhdG9yKVxuICBjYW5WaWJyYXRlID0gdHJ1ZTtcblxuLy8gVXNlZCBpbiBzd2l0Y2hBeGlzIGFuZCByZW5kZXJTaGFkb3cgYW5kIHBsYXllclBsYWNlU2hpcFxubGV0IGF4aXMgPSBcInlcIjtcbmxldCBsYXN0Q29vcmRzUmVuZGVyZWQ7XG5sZXQgbGFzdFNoaXA7XG5sZXQgc2hpcEJlaW5nUGxhY2VkO1xubGV0IGhpZ2hsaWdodFNxdWFyZXMgPSBmYWxzZTtcbmxldCB0b3VjaGVkO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtoaWdobGlnaHRTcXVhcmVzID0gdHJ1ZTt9KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge2hpZ2hsaWdodFNxdWFyZXMgPSBmYWxzZTt9KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge2hpZ2hsaWdodFNxdWFyZXMgPSB0cnVlfSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiB7aGlnaGxpZ2h0U3F1YXJlcyA9IGZhbHNlfSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlLCB7cGFzc2l2ZTogZmFsc2V9KTtcblxuLy8gVXNlZCBmb3IgcGxheWVyUGxhY2VTaGlwUGhhc2UgYW5kIGF0dGFja1BoYXNlXG5sZXQgaSA9IDA7XG5sZXQgcDI7XG5sZXQgcDFCb2FyZDtcbmxldCBwMkJvYXJkO1xubGV0IHAxU2hpcHM7XG5sZXQgY3VycmVudFBsYXllcjtcbmxldCB0dXJuID0gMDtcblxuLy8gVXNlZCB0byB0ZWxsIGdhbWUuanMgd2hlbiBwbGF5ZXJQbGFjZVNoaXBQaGFzZSBpcyBvdmVyXG5jb25zdCBzaGlwc1BsYWNlZCA9IG5ldyBFdmVudChcInNoaXBzUGxhY2VkXCIpO1xuY29uc3QgZ2FtZU92ZXJFdmVudCA9IG5ldyBFdmVudChcImdhbWVPdmVyXCIpO1xuXG4vLyBGb3IgQUlQbGFjZVNoaXBQaGFzZVxubGV0IGogPSAwO1xuXG4vLyBVc2VkIHRvIG9ubHkgdmlicmF0ZSBtb2JpbGUgcGhvbmUgb24gZmlyc3QgaGl0XG5sZXQgQUlIaXRzID0gMDtcblxuLy8gSGVscGVyIGZ1bmN0aW9ucyBmb3IgcGxheWVyUGxhY2VTaGlwUGhhc2VcbmNvbnN0IHN3aXRjaEF4aXMgPSAoYm9hcmQpID0+IHtcbiAgcmVuZGVyU2hhZG93KGxhc3RDb29yZHNSZW5kZXJlZCwgXCJjbGVhclwiLCBib2FyZCwgbGFzdFNoaXApO1xuICBheGlzID09PSBcInhcIiA/IChheGlzID0gXCJ5XCIpIDogKGF4aXMgPSBcInhcIik7XG4gIGlmKGhpZ2hsaWdodFNxdWFyZXMpe1xuICAgIHJlbmRlclNoYWRvdyhsYXN0Q29vcmRzUmVuZGVyZWQsIFwiZmlsbFwiLCBib2FyZCwgbGFzdFNoaXApO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJTaGFkb3cgPSAoY29vcmRzLCBmaWxsLCBib2FyZCwgc2hpcCkgPT4ge1xuICBsZXQgWyB4LCB5IF0gPSBjb29yZHM7XG4gIGxldCBlbDtcbiAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlO1xuICB4ID0gcGFyc2VJbnQoeCwgMTApO1xuICB5ID0gcGFyc2VJbnQoeSwgMTApO1xuICBpZiAoYm9hcmQuY2hlY2tDb2xsaXNpb24oc2hpcCwgeCwgeSwgYXhpcykgJiYgZmlsbCAhPT0gXCJjbGVhclwiKSB7XG4gICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgfVxuICBmb3IgKGxldCBrID0gMDsgayA8IHNoaXAubGVuZ3RoOyBrICs9IDEpIHtcbiAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYCNwMSAuc3F1YXJlW2RhdGEteD1cIiR7eCArIGt9XCJdW2RhdGEteT1cIiR7eX1cIl1gXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAjcDEgLnNxdWFyZVtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eSArIGt9XCJdYFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGVsKSB7XG4gICAgICBmaWxsID09PSBcImZpbGxcIiAmJiBlbC5jbGFzc0xpc3QuYWRkKFwiaG92ZXJlZFwiKTtcbiAgICAgIGlmIChmaWxsID09PSBcImNsZWFyXCIpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyZWRcIik7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWRcIik7XG4gICAgICB9XG4gICAgICBmaWxsID09PSBcInBsYWNlXCIgJiYgZWwuY2xhc3NMaXN0LmFkZChcInBsYWNlZFwiKTtcbiAgICAgIGlmIChjb2xsaXNpb24gPT09IHRydWUgJiYgZmlsbCAhPT0gXCJwbGFjZVwiKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxhc3RDb29yZHNSZW5kZXJlZCA9IFt4LCB5XTtcbiAgbGFzdFNoaXAgPSBzaGlwO1xufTtcblxuY29uc3QgcmVtb3ZlTGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwMSAuYm9hcmQgLnNxdWFyZVwiKTtcbiAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBzcXVhcmUucmVwbGFjZVdpdGgoc3F1YXJlLmNsb25lTm9kZSgpKTtcbiAgfSk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge30pO1xufTtcblxuY29uc3QgY2xpY2tUb1BsYWNlID0gKGNvb3JkcywgYm9hcmQsIHNoaXApID0+IHtcbiAgbGV0IFsgeCwgeSBdID0gY29vcmRzO1xuICB4ID0gcGFyc2VJbnQoeCwgMTApO1xuICB5ID0gcGFyc2VJbnQoeSwgMTApO1xuICBpZiAoYm9hcmQuY2hlY2tDb2xsaXNpb24oc2hpcCwgeCwgeSwgYXhpcykpIHtcbiAgICByZW5kZXJTaGFkb3coW3gsIHldLCAnY2xlYXInLCBib2FyZCwgc2hpcCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGJvYXJkLnBsYWNlKHNoaXAsIHgsIHksIGF4aXMpO1xuICByZW5kZXJTaGFkb3coY29vcmRzLCBcInBsYWNlXCIsIGJvYXJkLCBzaGlwKTtcbiAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gIGlmIChpID09PSA1KSB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChzaGlwc1BsYWNlZCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSwge3Bhc3NpdmU6IGZhbHNlfSk7XG4gIH1cbiAgcGxheWVyUGxhY2VTaGlwUGhhc2UocDFCb2FyZCwgcDFTaGlwcyk7XG59O1xuXG5jb25zdCBwbGF5ZXJQbGFjZVNoaXAgPSAoYm9hcmQsIHNoaXApID0+IHtcbiAgc2hpcEJlaW5nUGxhY2VkID0gc2hpcDtcbiAgcDFCb2FyZCA9IGJvYXJkO1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwMSAuYm9hcmQgLnNxdWFyZVwiKTtcbiAgc3dpdGNoQXhpc05hcnJhdGl2ZSgpO1xuXG4gIGlmIChpID09PSAwKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwieFwiKSB7XG4gICAgICAgIHN3aXRjaEF4aXMoYm9hcmQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChlKSA9PiB7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICByZW5kZXJTaGFkb3coW3gsIHldLCBcImZpbGxcIiwgYm9hcmQsIHNoaXApO1xuICAgICAgdG91Y2hlZCA9IGUudGFyZ2V0O1xuICAgIH0pO1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB7XG4gICAgICBoaWdobGlnaHRTcXVhcmVzID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAgIHJlbmRlclNoYWRvdyhbeCwgeV0sIFwiZmlsbFwiLCBib2FyZCwgc2hpcCk7XG4gICAgfSk7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT4ge1xuICAgICAgaGlnaGxpZ2h0U3F1YXJlcyA9IGZhbHNlO1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgICAgcmVuZGVyU2hhZG93KFt4LCB5XSwgXCJjbGVhclwiLCBib2FyZCwgc2hpcClcbiAgICB9KTtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsICgpID0+IHtcbiAgICAgIGNsaWNrVG9QbGFjZShsYXN0Q29vcmRzUmVuZGVyZWQsIGJvYXJkLCBzaGlwKTtcbiAgICB9KTtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBoaWdobGlnaHRTcXVhcmVzID0gZmFsc2U7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBjbGlja1RvUGxhY2UoW3gsIHldLCBib2FyZCwgc2hpcClcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBwbGF5ZXJQbGFjZVNoaXBQaGFzZShib2FyZCwgc2hpcHMpIHtcblxuICBpZiAoaSA9PT0gMCkge1xuICAgIHAxQm9hcmQgPSBib2FyZDtcbiAgICBwMVNoaXBzID0gc2hpcHM7XG4gIH1cbiAgaWYgKGkgPD0gNCkge1xuICAgIHBsYXllclBsYWNlU2hpcChib2FyZCwgc2hpcHNbaV0pO1xuICAgIGkgKz0gMTtcbiAgfVxufVxuXG4vLyBBSSBQbGFjZSBzaGlwIHBoYXNlXG5jb25zdCBBSVBsYWNlU2hpcFBoYXNlID0gKGJvYXJkLCBzaGlwcywgcGxheWVyKSA9PiB7XG4gIHBsYXllci5BSVBsYWNlU2hpcChib2FyZCwgc2hpcHNbal0pO1xuICBqICs9IDE7XG4gIGlmIChqID09PSA1KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIEFJUGxhY2VTaGlwUGhhc2UoYm9hcmQsIHNoaXBzLCBwbGF5ZXIpO1xufTtcblxuY29uc3QgcmVuZGVyQm9hcmQgPSAoYm9hcmQsIGJveCkgPT4ge1xuICAvLyBDbGVhciBvbGQgY29udGVudCBwcmlvciB0byByZS1yZW5kZXIgaWYgbmVlZGVkXG4gIGxldCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Ym94LmlkfSAuYm9hcmRgKTtcbiAgaWYgKGdyaWQpIHtcbiAgICBncmlkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkLmNsYXNzTmFtZSA9IFwiYm9hcmRcIjtcbiAgfVxuICAvLyBJbmRpdmlkdWFsIHNxdWFyZXMgb24gYm9hcmRcbiAgZm9yIChsZXQgayA9IDA7IGsgPD0gOTsgayArPSAxKSB7XG4gICAgZm9yIChsZXQgbCA9IDk7IGwgPj0gMDsgbCAtPSAxKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlLmNsYXNzTmFtZSA9IFwic3F1YXJlXCI7XG4gICAgICBzcXVhcmUuZGF0YXNldC54ID0gaztcbiAgICAgIHNxdWFyZS5kYXRhc2V0LnkgPSBsO1xuICAgICAgZ3JpZC5hcHBlbmQoc3F1YXJlKTtcbiAgICB9XG4gIH1cbiAgYm94LmFwcGVuZChncmlkKTtcbn07XG5cbmNvbnN0IHVwZGF0ZUFJQm9hcmQgPSAoYm9hcmQsIHgsIHkpID0+IHtcbiAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3AyIC5zcXVhcmVbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XG4gIGNvbnN0IGJvYXJkVmFsdWUgPSBib2FyZC5nZXRNYXAoKVt4XVt5XTtcblxuICBpZihib2FyZFZhbHVlID09PSAwIHx8IGJvYXJkVmFsdWUgPT09IDEpIHtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICB9XG4gIGlmKHR5cGVvZiBib2FyZFZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdyZWQnKTtcbiAgfVxufVxuXG4vLyBQbGF5ZXIgYXR0YWNrIHBoYXNlIC0gc2VuZHMgeCwgeSBmcm9tIGNsaWNrZWQgc3F1YXJlIHRvIGJvYXJkLmluY29taW5nKClcbmNvbnN0IGF0dGFja0NhbGxiYWNrID0gKGUsIGJvYXJkKSA9PiB7XG4gIGNvbnN0IHsgeCwgeSB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgXG4gIC8vIFJlbW92ZSBob3ZlciBlZmZlY3QgYW5kIGNsaWNrIHRvIGF0dGFjayBcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcDIgLnNxdWFyZVwiKTtcbiAgc3F1YXJlcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlcmFibGVcIik7XG4gICAgZWwucmVwbGFjZVdpdGgoZWwuY2xvbmVOb2RlKCkpO1xuICB9KTtcblxuICAvLyBVcGRhdGUgRE9NIGFuZCBib2FyZFxuICB1cGRhdGVBSUJvYXJkKGJvYXJkLCB4LCB5KTtcbiAgYm9hcmQuaW5jb21pbmcoeCwgeSk7XG4gICBcbiAgLy8gVGVzdCBpZiBzdW5rXG4gIGlmKHR5cGVvZiBib2FyZC5nZXRNYXAoKVt4XVt5XSA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBzaGlwID0gYm9hcmQuZ2V0TWFwKClbeF1beV1bMF07XG4gICAgaWYoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgbmFycmF0ZShgWW91J3ZlIHN1bmsgdGhlIGVuZW15J3MgJHtzaGlwLnR5cGV9ISEhYCk7XG4gICAgfVxuICB9XG4gXG4gIC8vIFRlc3QgaWYgZ2FtZSBpcyBvdmVyXG4gIGlmKCFib2FyZC5pc0dhbWVPdmVyKCkpIHtcbiAgICBzZXRUaW1lb3V0KEFJQXR0YWNrLCA1MDApO1xuICB9IGVsc2UgaWYoYm9hcmQuaXNHYW1lT3ZlcigpKSB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChnYW1lT3ZlckV2ZW50KTtcbiAgfVxufTtcblxuLy8gUGxheWVyIGF0dGFjayBwaGFzZSAtIGFkZHMgY2xpY2sgZXZlbnQgbGlzdGVuZXIgYW5kIGhvdmVyIGVmZmVjdFxuY29uc3QgcGxheWVyQXR0YWNrID0gKGJvYXJkKSA9PiB7XG4gIGN1cnJlbnRQbGF5ZXIgPSAxO1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwMiAuc3F1YXJlXCIpO1xuICBzcXVhcmVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBhdHRhY2tDYWxsYmFjayhlLCBib2FyZCkpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJob3ZlcmFibGVcIik7XG4gIH0pO1xuICBpZih0dXJuID09PSAwKSB7XG4gICAgbmFycmF0ZShcIkNsaWNrIHRvIGZpcmUgb24gdGhlIGVuZW15IGZsZWV0XCIpO1xuICB9XG4gIHR1cm4gKz0gMTtcbn07XG5cbmNvbnN0IHVwZGF0ZUJvYXJkID0gKGJvYXJkLCB4LCB5KSA9PiB7XG4gIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwMSAuc3F1YXJlW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuICBjb25zdCBib2FyZFZhbHVlID0gYm9hcmQuZ2V0TWFwKClbeF1beV07XG4gIGlmKGJvYXJkVmFsdWUgPT09IDEpIHtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICB9XG4gIGlmKHR5cGVvZiBib2FyZFZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdyZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBBSUF0dGFjaygpIHtcbiAgY3VycmVudFBsYXllciA9IDI7XG4gXG4gICAgcDIuYXR0YWNrKCk7XG4gICAgY29uc3QgWyB4LCB5IF0gPSBwMi5nZXRMYXN0U2hvdCgpO1xuICAgIHVwZGF0ZUJvYXJkKHAxQm9hcmQsIHgsIHkpO1xuXG4gICAgaWYocDFCb2FyZC5nZXRMYXN0U2hvdEhpdCgpKSB7XG4gICAgICBpZiAoY2FuVmlicmF0ZSAmJiBBSUhpdHMgPT09IDApIFxuICAgICAgICBuYXZpZ2F0b3IudmlicmF0ZSg1MDApO1xuICAgICAgQUlIaXRzICs9IDE7XG4gICAgICBjb25zdCBzaGlwID0gcDFCb2FyZC5nZXRNYXAoKVt4XVt5XVswXTtcbiAgICAgIGlmKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgbmFycmF0ZShgQWxsIGhhbmRzIG9uIGRlY2shIFlvdXIgJHtzaGlwLnR5cGV9IGlzIHNpbmtpbmchISFgKTtcbiAgICAgICAgaWYgKGNhblZpYnJhdGUpIFxuICAgICAgICAgIG5hdmlnYXRvci52aWJyYXRlKDUwMCk7XG4gICAgICAgIEFJSGl0cyA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIXAxQm9hcmQuaXNHYW1lT3ZlcigpKSB7XG4gICAgcGxheWVyQXR0YWNrKHAyQm9hcmQpO1xuICB9IGVsc2UgaWYocDFCb2FyZC5pc0dhbWVPdmVyKCkpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGdhbWVPdmVyRXZlbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGF0dGFja1BoYXNlKHBsYXllclR3bywgcGxheWVyVHdvQm9hcmQpIHtcbiAgY3VycmVudFBsYXllciA9IDE7XG4gIHAyID0gcGxheWVyVHdvO1xuICBwMkJvYXJkID0gcGxheWVyVHdvQm9hcmQ7XG4gIHBsYXllckF0dGFjayhwMkJvYXJkKTtcbn1cblxuZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XG4gIGlmKGN1cnJlbnRQbGF5ZXIgPT09IDEpIHtcbiAgICBuYXJyYXRpdmUudGV4dENvbnRlbnQgPSBgR2xvcmlvdXMgdmljdG9yeSEgWW91IHN1bmsgYWxsIHRoZSBBSSBzaGlwcyFgO1xuICB9IGVsc2Uge1xuICAgIG5hcnJhdGl2ZS50ZXh0Q29udGVudCA9ICdDcnVzaGluZyBkZWZlYXQgLi4uIFRoZSBBSSBoYXMgc3VuayBhbGwgb2YgeW91ciBzaGlwcyEnO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5hcnJhdGUobWVzc2FnZSkge1xuICBuYXJyYXRpdmUudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBuYXJyYXRpdmUudGV4dENvbnRlbnQgPSAnJztcbiAgfSwgNDAwMClcbn1cblxuZnVuY3Rpb24gc3dpdGNoQXhpc05hcnJhdGl2ZSgpIHtcbiAgbmFycmF0aXZlLmlubmVySFRNTCA9IGBMZWFkIHlvdXIgJHtzaGlwQmVpbmdQbGFjZWQudHlwZX0gaW50byBiYXR0bGUuIFxcbiBcbiAgTW91c2UgdXNlcnMgaG92ZXIgb3ZlciB0aGUgYm9hcmQsIGFuZCBjbGljayB0byBwbGFjZSBzaGlwLiBcXG4gXG4gIE1vYmlsZSB1c2VycyB0b3VjaCwgaG9sZCwgZHJhZywgYW5kIHJlbGVhc2UuIEhpdCA8c3BhbiBpZD0neC1idG4nPlg8L3NwYW4+IFxcbiBcbiAgdG8gc3dpdGNoIGF4aXMuYDtcblxuICBjb25zdCB4QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3gtYnRuJyk7XG4gICAgeEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXRjaEF4aXMocDFCb2FyZCkpO1xuICAgIHhCdG4uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2gnLCAoKSA9PiBzd2l0Y2hBeGlzKHAxQm9hcmQpKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB7IHg6IGEsIHk6IGIgfSA9IHRvdWNoZWQuZGF0YXNldDtcbiAgY29uc3QgbGFzdEVsZW1lbnQgPSB0b3VjaGVkO1xuXG4gIGxldCB4ID0gZS50b3VjaGVzWzBdLmNsaWVudFhcbiAgbGV0IHkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WVxuICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gIGlmKGN1cnJlbnRFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCA9PT0gJ3AyJykge1xuICAgIHJldHVybjtcbiAgfSBcbiAgXG4gIGlmKGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc3F1YXJlJykpIHtcbiAgICAoeyB4LCB5IH0gPSBjdXJyZW50RWxlbWVudC5kYXRhc2V0KTtcbiAgICBpZihjdXJyZW50RWxlbWVudCAhPT0gbGFzdEVsZW1lbnQpIHtcbiAgICAgIHJlbmRlclNoYWRvdyhbYSwgYl0sIFwiY2xlYXJcIiwgcDFCb2FyZCwgc2hpcEJlaW5nUGxhY2VkKTtcbiAgICAgIHJlbmRlclNoYWRvdyhbeCwgeV0sICdmaWxsJywgcDFCb2FyZCwgc2hpcEJlaW5nUGxhY2VkKTtcbiAgICAgIHRvdWNoZWQgPSBjdXJyZW50RWxlbWVudDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgcDFCb3gsXG4gIHAyQm94LFxuICBwbGF5ZXJQbGFjZVNoaXAsXG4gIHBsYXllclBsYWNlU2hpcFBoYXNlLFxuICBBSVBsYWNlU2hpcFBoYXNlLFxuICByZW5kZXJCb2FyZCxcbiAgcGxheWVyQXR0YWNrLFxuICBhdHRhY2tQaGFzZSxcbiAgZ2FtZU92ZXIsXG59O1xuIiwiaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgbWFrZVNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCB7IFxuICBwMUJveCwgXG4gIHAyQm94LCAgXG4gIHBsYXllclBsYWNlU2hpcFBoYXNlLCBcbiAgQUlQbGFjZVNoaXBQaGFzZSxcbiAgcmVuZGVyQm9hcmQsIFxuICBhdHRhY2tQaGFzZSxcbiAgZ2FtZU92ZXIsXG59IGZyb20gXCIuL0RPTVwiO1xuXG5cbi8vIFNFVFVQXG5cbi8vIE1ha2UgZ2FtZSBib2FyZHNcbmNvbnN0IHAxQm9hcmQgPSBnYW1lQm9hcmQoKTtcbnAxQm9hcmQuaW5pdCgpO1xuY29uc3QgcDJCb2FyZCA9IGdhbWVCb2FyZCgpO1xucDJCb2FyZC5pbml0KCk7XG5cbi8vIE1ha2UgcGxheWVyc1xuY29uc3QgcDEgPSBwbGF5ZXIoJzEnLCBwMkJvYXJkLCBcImh1bWFuXCIpO1xuY29uc3QgcDIgPSBwbGF5ZXIoXCIyXCIsIHAxQm9hcmQsIFwiQUlcIik7XG5cbi8vIE1ha2UgcDEgc2hpcHNcbmNvbnN0IHAxUHRiID0gbWFrZVNoaXAoJ3BhdHJvbCBib2F0Jyk7XG5jb25zdCBwMVN1YiA9IG1ha2VTaGlwKCdzdWInKTtcbmNvbnN0IHAxRGVzdHJveWVyID0gbWFrZVNoaXAoJ2Rlc3Ryb3llcicpO1xuY29uc3QgcDFCYXR0bGVzaGlwID0gbWFrZVNoaXAoJ2JhdHRsZXNoaXAnKTtcbmNvbnN0IHAxQ2FycmllciA9IG1ha2VTaGlwKCdjYXJyaWVyJyk7XG5jb25zdCBwMVNoaXBzID0gW3AxQ2FycmllciwgcDFCYXR0bGVzaGlwLCBwMURlc3Ryb3llciwgcDFTdWIsIHAxUHRiXTtcblxuLy8gTWFrZSBBSSBzaGlwc1xuY29uc3QgcDJQdGIgPSBtYWtlU2hpcCgncGF0cm9sIGJvYXQnKTtcbmNvbnN0IHAyU3ViID0gbWFrZVNoaXAoJ3N1YicpO1xuY29uc3QgcDJEZXN0cm95ZXIgPSBtYWtlU2hpcCgnZGVzdHJveWVyJyk7XG5jb25zdCBwMkJhdHRsZXNoaXAgPSBtYWtlU2hpcCgnYmF0dGxlc2hpcCcpO1xuY29uc3QgcDJDYXJyaWVyID0gbWFrZVNoaXAoJ2NhcnJpZXInKTtcbmNvbnN0IEFJU2hpcHMgPSBbcDJDYXJyaWVyLCBwMkJhdHRsZXNoaXAsIHAyRGVzdHJveWVyLCBwMlN1YiwgcDJQdGJdO1xuXG4vLyBSZW5kZXIgQm9hcmRzXG5yZW5kZXJCb2FyZChwMUJvYXJkLCBwMUJveCk7XG5yZW5kZXJCb2FyZChwMkJvYXJkLCBwMkJveCk7XG5cbi8vIFBsYWNlIHNoaXBzIHBoYXNlXG5BSVBsYWNlU2hpcFBoYXNlKHAyQm9hcmQsIEFJU2hpcHMsIHAyKTtcbnBsYXllclBsYWNlU2hpcFBoYXNlKHAxQm9hcmQsIHAxU2hpcHMpO1xuXG4vLyBQbGF5ZXIgYXR0YWNrIHBoYXNlIC0gZXZlbnQgZmlyZXMgb25jZSBhbGwgc2hpcHMgYXJlIHBsYWNlZCwgYW5kIG1vdmVzIGludG8gXG4vLyBhdHRhY2sgcGhhc2VcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NoaXBzUGxhY2VkJywgKCkgPT4gYXR0YWNrUGhhc2UocDIsIHAyQm9hcmQpKTtcblxuLy8gR2FtZW92ZXJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2dhbWVPdmVyJywgZ2FtZU92ZXIpO1xuIiwiY29uc3QgZ2FtZUJvYXJkID0gKCkgPT4ge1xuICBsZXQgbWFwO1xuICBsZXQgc3Vua1NoaXBzID0gMDtcbiAgbGV0IGxhc3RTaG90SGl0ID0gZmFsc2U7XG4gIFxuICBjb25zdCBnZXRMYXN0U2hvdEhpdCA9ICgpID0+IGxhc3RTaG90SGl0O1xuICBcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBzdW5rU2hpcHMgPSAwO1xuICAgIG1hcCA9IEFycmF5KDEwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbWFwW2ldID0gQXJyYXkoMTApLmZpbGwoMCk7XG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgZ2V0TWFwID0gKCkgPT4gbWFwO1xuXG4gIGNvbnN0IGNoZWNrQ29sbGlzaW9uID0gKHNoaXAsIHgsIHksIGF4aXMpID0+IHtcbiAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgIGlmICh4ICsgc2hpcC5sZW5ndGggPiAxMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb29yZHMucHVzaChbeCArIGksIHldKTtcbiAgICAgIH1cbiAgICAgIGxldCByZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgY29vcmRzLmZvckVhY2goKHBhaXIpID0+IHtcbiAgICAgICAgY29uc3QgW2EsIGJdID0gcGFpcjtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBbYV1bYl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICByZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbiAgICBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgIGlmICh5ICsgc2hpcC5sZW5ndGggPiAxMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb29yZHMucHVzaChbeCwgeSArIGldKTtcbiAgICAgIH1cbiAgICAgIGxldCByZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgY29vcmRzLmZvckVhY2goKHBhaXIpID0+IHtcbiAgICAgICAgY29uc3QgW2EsIGJdID0gcGFpcjtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBbYV1bYl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICByZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gXG4gIGNvbnN0IHBsYWNlID0gKHNoaXAsIHgsIHksIGF4aXMpID0+IHtcbiAgICAvLyBpIGlzIGh1bGwgaW5kZXggdG8gdHJhY2sgaGl0c1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgYSA9IHg7XG4gICAgbGV0IGIgPSB5O1xuICAgIHdoaWxlIChpIDwgc2hpcC5sZW5ndGgpIHtcbiAgICAgIG1hcFthXVtiXSA9IFtzaGlwLCBpXTtcbiAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICBhICs9IDE7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGIgKz0gMTtcbiAgICAgICAgaSArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgXG4gIGNvbnN0IGlzR2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHN1bmtTaGlwcyA9PT0gNSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiBcbiAgY29uc3QgdGVzdElmU3VuayA9IChzaGlwKSA9PiB7XG4gICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgIHN1bmtTaGlwcyArPSAxO1xuICAgIH1cbiAgICBpc0dhbWVPdmVyKHN1bmtTaGlwcyk7XG4gIH07XG4gXG4gIGNvbnN0IGluY29taW5nID0gKHgsIHkpID0+IHtcbiAgICBsZXQgc2hpcDtcbiAgICBsZXQgaHVsbEluZGV4O1xuICAgIGlmICh0eXBlb2YgbWFwW3hdW3ldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBbc2hpcCwgaHVsbEluZGV4XSA9IG1hcFt4XVt5XTsgLy8gMCBpcyBzaGlwIG9iamVjdCwgMSBpcyBodWxsIGluZGV4LiBzZWUgcGxhY2UoKVxuICAgICAgc2hpcC5oaXQoaHVsbEluZGV4KTtcbiAgICAgIGxhc3RTaG90SGl0ID0gdHJ1ZTtcbiAgICAgIHRlc3RJZlN1bmsoc2hpcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcFt4XVt5XSA9IDE7XG4gICAgICBsYXN0U2hvdEhpdCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbiBcbiAgY29uc3QgZ2V0U3Vua1NoaXBzID0gKCkgPT4gc3Vua1NoaXBzO1xuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgZ2V0TWFwLFxuICAgIGNoZWNrQ29sbGlzaW9uLFxuICAgIHBsYWNlLFxuICAgIGlzR2FtZU92ZXIsXG4gICAgdGVzdElmU3VuayxcbiAgICBpbmNvbWluZyxcbiAgICBnZXRTdW5rU2hpcHMsXG4gICAgZ2V0TGFzdFNob3RIaXQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lQm9hcmQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWxvbmVseS1pZiAqL1xuY29uc3QgcGxheWVyID0gKG1vbmlrZXIsIGJvYXJkLCB0eXBlT2ZQbGF5ZXIpID0+IHtcbiAgY29uc3QgbmFtZSA9IG1vbmlrZXI7XG4gIGNvbnN0IHR5cGUgPSB0eXBlT2ZQbGF5ZXI7XG4gIGNvbnN0IGJvYXJkT2ZBdHRhY2sgPSBib2FyZDtcblxuICAvLyBBSSBkYXRhIGZvciBjb29yZHMgb2Ygc2hvdFxuICBsZXQgYTsgICAgXG4gIGxldCBiO1xuICBsZXQgaXNBdHRhY2tpbmdTaGlwID0gZmFsc2U7XG4gIGxldCBhdHRhY2tBeGlzO1xuICBsZXQgbGFzdEhpdCA9IG51bGw7XG4gIGxldCBsYXN0U2hvdDtcbiAgbGV0IGxhc3RTaG90TWlzc2VkID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0TGFzdFNob3QgPSAoKSA9PiBsYXN0U2hvdDtcblxuICBjb25zdCBnZXRBSWNvb3JkaW5hdGVzID0gKCkgPT4gW2EsIGJdO1xuXG4gIGNvbnN0IEFJbWFwID0gQXJyYXkoMTApOyAvLyAwIGlzIHVua25vd24sIDEgaXMgbWlzcywgMiBpcyBoaXRcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBBSW1hcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIEFJbWFwW2ldID0gQXJyYXkoMTApLmZpbGwoMCk7XG4gIH1cbiAgIFxuICBjb25zdCBBSVBsYWNlU2hpcCA9IChBSUJvYXJkLCBzaGlwKSA9PiB7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgbGV0IGF4aXM7XG4gICAgZG8ge1xuICAgICAgYXhpcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgaWYoYXhpcyA9PT0gMCkge1xuICAgICAgICBheGlzID0gJ3gnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXhpcyA9ICd5JztcbiAgICAgIH1cbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH0gd2hpbGUoQUlCb2FyZC5jaGVja0NvbGxpc2lvbihzaGlwLCB4LCB5LCBheGlzKSlcbiAgICBBSUJvYXJkLnBsYWNlKHNoaXAsIHgsIHksIGF4aXMpO1xuICB9XG5cbiAgLy8gMiBoZWxwZXIgZnVuY3Rpb25zIGZvciBBSSBhdHRhY2tcbiAgY29uc3QgcGlja0Nvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgIGlzQXR0YWNraW5nU2hpcCA9IGZhbHNlO1xuICAgIGRvIHtcbiAgICAgIGEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBiID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH0gd2hpbGUgKEFJbWFwW2FdW2JdICE9PSAwKTtcbiAgICBBSW1hcFthXVtiXSA9IDE7XG4gICAgbGFzdFNob3QgPSBbYSwgYl07XG4gIH07XG4gIFxuICBjb25zdCBwaWNrQWRqYWNlbnRDb29yZGluYXRlcyA9ICgpID0+IHtcbiAgICBpc0F0dGFja2luZ1NoaXAgPSB0cnVlO1xuICAgIGxldCBpO1xuICAgIGxldCBqO1xuXG4gICAgbGFzdFNob3RNaXNzZWQgPyBbIGksIGogXSA9IGxhc3RIaXQgOiBbIGksIGogXSA9IGxhc3RTaG90OyAgICBcbiAgICBcbiAgICBsZXQgYWRqYWNlbnRTaG90cyA9IFtbaSArIDEsIGpdLCBbaSAtIDEsIGpdLCBbaSwgaiArIDFdLCBbaSwgaiAtIDFdXTtcblxuICAgIC8vIENvZGUgdG8gbGltaXQgcG9zc2libGUgc2hvdHMgZm9yIGVkZ2Ugb2YgYm9hcmQgICBcbiAgICBpZihpID09PSAwICYmIGogPT09IDApIHtcbiAgICAgIGFkamFjZW50U2hvdHMgPSBbW2kgKyAxLCBqXSwgW2ksIGogKyAxXV07XG4gICAgfSBlbHNlXG4gICAgaWYoaSA9PT0gOSAmJiBqID09PSA5KSB7XG4gICAgICBhZGphY2VudFNob3RzID0gW1tpIC0gMSwgal0sIFtpLCBqIC0gMV1dO1xuICAgIH0gZWxzZVxuICAgIGlmKGkgPT09IDAgJiYgaiA9PT0gOSkge1xuICAgICAgYWRqYWNlbnRTaG90cyA9IFtbaSArIDEsIGpdLCBbaSwgaiAtIDFdXTtcbiAgICB9IGVsc2VcbiAgICBpZihpID09PSA5ICYmIGogPT09IDApIHtcbiAgICAgIGFkamFjZW50U2hvdHMgPSBbW2kgLSAxLCBqXSwgW2ksIGogKyAxXV07XG4gICAgfSBlbHNlXG4gICAgaWYoaSA9PT0gMCkge1xuICAgICAgYWRqYWNlbnRTaG90cyA9IFtbaSArIDEsIGpdLCBbaSwgaiArIDFdLCBbaSwgaiAtIDFdXTtcbiAgICB9IGVsc2VcbiAgICBpZihpID09PSA5KSB7XG4gICAgICBhZGphY2VudFNob3RzID0gW1tpIC0gMSwgal0sIFtpLCBqICsgMV0sIFtpLCBqIC0gMV1dO1xuICAgIH0gZWxzZVxuICAgIGlmKGogPT09IDApIHtcbiAgICAgIGFkamFjZW50U2hvdHMgPSBbW2kgKyAxLCBqXSwgW2kgLSAxLCBqXSwgW2ksIGogKyAxXV07XG4gICAgfSBlbHNlXG4gICAgaWYoaiA9PT0gOSkge1xuICAgICAgYWRqYWNlbnRTaG90cyA9IFtbaSArIDEsIGpdLCBbaSAtIDEsIGpdLCBbaSwgaiAtIDFdXTtcbiAgICB9IFxuXG4gICAgLy8gbGltaXQgc2hvdHMgdG8gYSBrbm93biBheGlzIG9mIHNoaXBcbiAgICBpZihhdHRhY2tBeGlzID09PSAneCcpIHtcbiAgICAgIGFkamFjZW50U2hvdHMgPSBhZGphY2VudFNob3RzLmZpbHRlcihzaG90ID0+IEpTT04uc3RyaW5naWZ5KHNob3QpICE9PSBKU09OLnN0cmluZ2lmeShbaSwgaiAtIDFdKSBcbiAgICAgICAgJiYgSlNPTi5zdHJpbmdpZnkoc2hvdCkgIT09IEpTT04uc3RyaW5naWZ5KFtpLCBqICsgMV0pKTtcbiAgICB9XG5cbiAgICBpZihhdHRhY2tBeGlzID09PSAneScpIHtcbiAgICAgIGFkamFjZW50U2hvdHMgPSBhZGphY2VudFNob3RzLmZpbHRlcihzaG90ID0+IEpTT04uc3RyaW5naWZ5KHNob3QpICE9PSBKU09OLnN0cmluZ2lmeShbaSArIDEsIGpdKSBcbiAgICAgICYmIEpTT04uc3RyaW5naWZ5KHNob3QpICE9PSBKU09OLnN0cmluZ2lmeShbaSAtIDEsIGpdKSk7XG4gICAgfVxuXG4gICAgLy8gVGVzdCBpcyB0cnVlIGlmIHRoZXJlIGlzIGFuIGFkamFjZW50IHNob3QgYXZhaWxhYmxlIChhIHplcm8pXG4gICAgY29uc3QgdGVzdCA9IGFkamFjZW50U2hvdHMuc29tZSh4eSA9PiB7XG4gICAgICBjb25zdCBbIHgsIHkgXSA9IHh5O1xuICAgICAgcmV0dXJuIEFJbWFwW3hdW3ldID09PSAwO1xuICAgIH0pO1xuXG4gICAgLy8gSWYgbm8gYWRqYWNlbnQgc2hvdHMgYXZhaWxhYmxlLCBnZW5lcmF0ZSByYW5kb20gc2hvdCBhbmQgZXhpdCBmdW5jdGlvblxuICAgIGlmKHRlc3QgPT09IGZhbHNlKSB7XG4gICAgICAgIGxhc3RTaG90TWlzc2VkID0gdHJ1ZTtcbiAgICAgICAgcGlja0FkamFjZW50Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIFxuICAgIC8vIE90aGVyd2lzZSwgcmFuZG9tbHkgcGljayBhbiBhZGphY2VudCBzaG90XG4gICAgZG8ge1xuICAgICAgWyBhLCBiIF0gPSBhZGphY2VudFNob3RzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFkamFjZW50U2hvdHMubGVuZ3RoKV07XG4gICAgfSB3aGlsZSAoIUpTT04uc3RyaW5naWZ5KGFkamFjZW50U2hvdHMpLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KFthLCBiXSkpIHx8IEFJbWFwW2FdW2JdICE9PSAwKTtcbiAgICAgIEFJbWFwW2FdW2JdID0gMTtcbiAgICAgIGxhc3RTaG90ID0gW2EsIGJdO1xuICB9XG5cbiAgY29uc3QgYXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICAvLyBIdW1hbiBhdHRhY2tcbiAgICBpZiAodHlwZU9mUGxheWVyID09PSBcImh1bWFuXCIpIHtcbiAgICAgIGJvYXJkT2ZBdHRhY2suaW5jb21pbmcoeCwgeSk7XG5cbiAgICAvLyBBSSBhdHRhY2sgYnJhbmNoXG4gICAgfSBlbHNlIGlmKGJvYXJkT2ZBdHRhY2suZ2V0TGFzdFNob3RIaXQoKSkgeyBcbiAgICAgIGxhc3RTaG90TWlzc2VkID0gZmFsc2U7XG4gICAgICBpc0F0dGFja2luZ1NoaXAgPSB0cnVlO1xuICAgICAgLy8gUmVjb3JkIGEgaGl0IGluIEFJJ3MgbWFwXG4gICAgICBjb25zdCBbIGMsIGQgXSA9IGxhc3RTaG90O1xuICAgICAgQUltYXBbY11bZF0gPSAyO1xuICAgICAgXG4gICAgICAvLyBJZiBubyBwcmV2aW91cyBoaXQgZm9yIGN1cnJlbnRseSBoaXQgc2hpcFxuICAgICAgaWYobGFzdEhpdCA9PT0gbnVsbCkge1xuICAgICAgICBsYXN0SGl0ID0gbGFzdFNob3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZihsYXN0SGl0WzBdID09PSBsYXN0U2hvdFswXSkge1xuICAgICAgICAgIGF0dGFja0F4aXMgPSAneSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXR0YWNrQXhpcyA9ICd4JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZihib2FyZE9mQXR0YWNrLmdldE1hcCgpW2NdW2RdWzBdLmlzU3VuaygpKSB7XG4gICAgICAgIC8vIFJlc2V0IGF4aXMgdHJhY2tpbmdcbiAgICAgICAgbGFzdEhpdCA9IG51bGw7XG4gICAgICAgIGF0dGFja0F4aXMgPSAnJztcbiAgICAgICAgXG4gICAgICAgIHBpY2tDb29yZGluYXRlcygpO1xuICAgICAgICBib2FyZE9mQXR0YWNrLmluY29taW5nKGEsIGIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwaWNrQWRqYWNlbnRDb29yZGluYXRlcygpO1xuICAgICAgICAgIGJvYXJkT2ZBdHRhY2suaW5jb21pbmcoYSwgYik7XG4gICAgICB9XG4gICAgLy8gRnJvbSBpZiBsYXN0IHNob3QgaGl0XG4gICAgfSBlbHNlIGlmKGlzQXR0YWNraW5nU2hpcCkge1xuICAgICAgICBsYXN0U2hvdE1pc3NlZCA9IHRydWU7XG4gICAgICAgIHBpY2tBZGphY2VudENvb3JkaW5hdGVzKCk7XG4gICAgICAgIGJvYXJkT2ZBdHRhY2suaW5jb21pbmcoYSwgYik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdFNob3RNaXNzZWQgPSB0cnVlO1xuICAgICAgICBwaWNrQ29vcmRpbmF0ZXMoKTtcbiAgICAgICAgYm9hcmRPZkF0dGFjay5pbmNvbWluZyhhLCBiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgdHlwZSxcbiAgICBib2FyZE9mQXR0YWNrLFxuICAgIGF0dGFjayxcbiAgICBnZXRBSWNvb3JkaW5hdGVzLFxuICAgIEFJUGxhY2VTaGlwLFxuICAgIGdldExhc3RTaG90LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyO1xuIiwiY29uc3QgbWFrZVNoaXAgPSAodHlwZSkgPT4ge1xuICBsZXQgbGVuZ3RoO1xuICBpZiAodHlwZSA9PT0gXCJjYXJyaWVyXCIpIHtcbiAgICBsZW5ndGggPSA1O1xuICB9XG4gIGlmICh0eXBlID09PSBcImJhdHRsZXNoaXBcIikge1xuICAgIGxlbmd0aCA9IDQ7XG4gIH1cbiAgaWYgKHR5cGUgPT09IFwic3ViXCIgfHwgdHlwZSA9PT0gXCJkZXN0cm95ZXJcIikge1xuICAgIGxlbmd0aCA9IDM7XG4gIH1cbiAgaWYgKHR5cGUgPT09IFwicGF0cm9sIGJvYXRcIikge1xuICAgIGxlbmd0aCA9IDI7XG4gIH1cbiAgY29uc3QgaHVsbCA9IEFycmF5KGxlbmd0aCkuZmlsbCgwKTtcbiAgY29uc3QgZ2V0SHVsbCA9ICgpID0+IGh1bGw7XG4gIGNvbnN0IGhpdCA9IChpbmRleCkgPT4ge1xuICAgIGh1bGxbaW5kZXhdID0gMTtcbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gaHVsbC5ldmVyeSgoeCkgPT4geCA9PT0gMSk7XG4gIHJldHVybiB7IGxlbmd0aCwgdHlwZSwgaGl0LCBpc1N1bmssIGdldEh1bGwgfTsgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAqIGFzIGdhbWVMb29wIGZyb20gJy4vbW9kdWxlcy9nYW1lJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=