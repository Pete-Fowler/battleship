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
    if(canVibrate && playerHits === 0) {
      navigator.vibrate(300);
      playerHits += 1;
    }
    if(ship.isSunk()) {
      narrate(`You've sunk the enemy's ${ship.type}!!!`);
      if(canVibrate) 
        navigator.vibrate(300);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEx0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZmYW1pbHk9T3hhbml1bSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IFxcbiAgICAnaGVhZGVyJyAuMWZyXFxuICAgICdtYWluJyAxZnIgICBcXG4gICAgLzFmcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDUuNXZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBjdXJzaXZlO1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4jbWFpbiB7XFxuICBmb250LWZhbWlseTogJ094YW5pdW0nLCBjdXJzaXZlO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6XFxuICAgICduYXJyYXRpdmUgbmFycmF0aXZlJyAuMmZyXFxuICAgICdwMSAgICAgICAgcDInIDFmclxcbiAgICAvMWZyICAgICAgIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuYXJyYXRpdmUge1xcbiAgZm9udC1zaXplOiAyLjN2dztcXG4gIGdyaWQtYXJlYTogbmFycmF0aXZlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxufVxcblxcbiN4LWJ0biB7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC44KTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IGdyYXk7XFxufVxcblxcbiNwMSB7XFxuICBncmlkLWFyZWE6IHAxO1xcbn1cXG5cXG4jcDIge1xcbiAgZ3JpZC1hcmVhOiBwMjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOiByZXBlYXQoMTAsIDIuNXZ3KSAvIHJlcGVhdCgxMCwgMi41dncpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIHdpZHRoOiAyLjV2dztcXG4gIGhlaWdodDogMi41dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZGZmO1xcbiAgb3BhY2l0eTogLjk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG59XFxuXFxuLmhvdmVyZWQsIC5wbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0ODQ4NDtcXG4gIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLmhvdmVyYWJsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ4NDg0O1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4ucmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDI3LCAyNyk7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YmQ4ZmY7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmJvYXJkIHtcXG4gICAgZ3JpZDogcmVwZWF0KDEwLCAzdncpIC8gcmVwZWF0KDEwLCAzdncpO1xcbiAgfVxcbiAgXFxuICAuc3F1YXJlIHtcXG4gICAgd2lkdGg6IDN2dztcXG4gICAgaGVpZ2h0OiAzdnc7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcblxcbiAgI21haW4ge1xcbiAgICBncmlkOlxcbiAgICAgICduYXJyYXRpdmUnIDc1cHhcXG4gICAgICAncDEnIC44ZnIgXFxuICAgICAgJ3AyJyAxZnJcXG4gICAgICAvMWZyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gICNoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEwdnc7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgI25hcnJhdGl2ZSB7XFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcXG4gIH1cXG4gIFxcbiAgI3AxIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB9XFxuXFxuICAuYm9hcmQge1xcbiAgICBncmlkOiByZXBlYXQoMTAsIDV2dykgLyByZXBlYXQoMTAsIDV2dyk7XFxuICAgIGdhcDogMnB4O1xcbiAgfVxcbiAgXFxuICAuc3F1YXJlIHtcXG4gICAgd2lkdGg6IDV2dztcXG4gICAgaGVpZ2h0OiA1dnc7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5REFBZ0Q7RUFDaEQsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2I7OztRQUdNO0VBQ04sWUFBWTtFQUNaLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixhQUFhO0VBQ2I7OztrQkFHZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNGOztBQUVBOztFQUVFO0lBQ0U7Ozs7VUFJTTtJQUNOLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsdUNBQXVDO0lBQ3ZDLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmZhbWlseT1PeGFuaXVtJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2JhY2tncm91bmQuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IFxcbiAgICAnaGVhZGVyJyAuMWZyXFxuICAgICdtYWluJyAxZnIgICBcXG4gICAgLzFmcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDUuNXZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBjdXJzaXZlO1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4jbWFpbiB7XFxuICBmb250LWZhbWlseTogJ094YW5pdW0nLCBjdXJzaXZlO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6XFxuICAgICduYXJyYXRpdmUgbmFycmF0aXZlJyAuMmZyXFxuICAgICdwMSAgICAgICAgcDInIDFmclxcbiAgICAvMWZyICAgICAgIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuYXJyYXRpdmUge1xcbiAgZm9udC1zaXplOiAyLjN2dztcXG4gIGdyaWQtYXJlYTogbmFycmF0aXZlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxufVxcblxcbiN4LWJ0biB7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC44KTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IGdyYXk7XFxufVxcblxcbiNwMSB7XFxuICBncmlkLWFyZWE6IHAxO1xcbn1cXG5cXG4jcDIge1xcbiAgZ3JpZC1hcmVhOiBwMjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOiByZXBlYXQoMTAsIDIuNXZ3KSAvIHJlcGVhdCgxMCwgMi41dncpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIHdpZHRoOiAyLjV2dztcXG4gIGhlaWdodDogMi41dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZGZmO1xcbiAgb3BhY2l0eTogLjk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG59XFxuXFxuLmhvdmVyZWQsIC5wbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0ODQ4NDtcXG4gIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLmhvdmVyYWJsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ4NDg0O1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4ucmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDI3LCAyNyk7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YmQ4ZmY7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmJvYXJkIHtcXG4gICAgZ3JpZDogcmVwZWF0KDEwLCAzdncpIC8gcmVwZWF0KDEwLCAzdncpO1xcbiAgfVxcbiAgXFxuICAuc3F1YXJlIHtcXG4gICAgd2lkdGg6IDN2dztcXG4gICAgaGVpZ2h0OiAzdnc7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcblxcbiAgI21haW4ge1xcbiAgICBncmlkOlxcbiAgICAgICduYXJyYXRpdmUnIDc1cHhcXG4gICAgICAncDEnIC44ZnIgXFxuICAgICAgJ3AyJyAxZnJcXG4gICAgICAvMWZyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gICNoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEwdnc7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgI25hcnJhdGl2ZSB7XFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcXG4gIH1cXG4gIFxcbiAgI3AxIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB9XFxuXFxuICAuYm9hcmQge1xcbiAgICBncmlkOiByZXBlYXQoMTAsIDV2dykgLyByZXBlYXQoMTAsIDV2dyk7XFxuICAgIGdhcDogMnB4O1xcbiAgfVxcbiAgXFxuICAuc3F1YXJlIHtcXG4gICAgd2lkdGg6IDV2dztcXG4gICAgaGVpZ2h0OiA1dnc7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5cbmNvbnN0IHAxQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwMVwiKTtcbmNvbnN0IHAyQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwMlwiKTtcbmNvbnN0IG5hcnJhdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFycmF0aXZlXCIpO1xuXG5sZXQgY2FuVmlicmF0ZSA9IGZhbHNlO1xuaWYoJ3ZpYnJhdGUnIGluIG5hdmlnYXRvcilcbiAgY2FuVmlicmF0ZSA9IHRydWU7XG5cbi8vIFVzZWQgaW4gc3dpdGNoQXhpcyBhbmQgcmVuZGVyU2hhZG93IGFuZCBwbGF5ZXJQbGFjZVNoaXBcbmxldCBheGlzID0gXCJ5XCI7XG5sZXQgbGFzdENvb3Jkc1JlbmRlcmVkO1xubGV0IGxhc3RTaGlwO1xubGV0IHNoaXBCZWluZ1BsYWNlZDtcbmxldCBoaWdobGlnaHRTcXVhcmVzID0gZmFsc2U7XG5sZXQgdG91Y2hlZDtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7aGlnaGxpZ2h0U3F1YXJlcyA9IHRydWU7fSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtoaWdobGlnaHRTcXVhcmVzID0gZmFsc2U7fSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHtoaWdobGlnaHRTcXVhcmVzID0gdHJ1ZX0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge2hpZ2hsaWdodFNxdWFyZXMgPSBmYWxzZX0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSwge3Bhc3NpdmU6IGZhbHNlfSk7XG5cbi8vIFVzZWQgZm9yIHBsYXllclBsYWNlU2hpcFBoYXNlIGFuZCBhdHRhY2tQaGFzZVxubGV0IGkgPSAwO1xubGV0IHAyO1xubGV0IHAxQm9hcmQ7XG5sZXQgcDJCb2FyZDtcbmxldCBwMVNoaXBzO1xubGV0IGN1cnJlbnRQbGF5ZXI7XG5sZXQgdHVybiA9IDA7XG5cbi8vIFVzZWQgdG8gdGVsbCBnYW1lLmpzIHdoZW4gcGxheWVyUGxhY2VTaGlwUGhhc2UgaXMgb3ZlclxuY29uc3Qgc2hpcHNQbGFjZWQgPSBuZXcgRXZlbnQoXCJzaGlwc1BsYWNlZFwiKTtcbmNvbnN0IGdhbWVPdmVyRXZlbnQgPSBuZXcgRXZlbnQoXCJnYW1lT3ZlclwiKTtcblxuLy8gRm9yIEFJUGxhY2VTaGlwUGhhc2VcbmxldCBqID0gMDtcblxuLy8gVXNlZCB0byBvbmx5IHZpYnJhdGUgbW9iaWxlIHBob25lIG9uIGZpcnN0IGhpdFxubGV0IEFJSGl0cyA9IDA7XG5sZXQgcGxheWVySGl0cyA9IDA7XG5cbi8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIHBsYXllclBsYWNlU2hpcFBoYXNlXG5jb25zdCBzd2l0Y2hBeGlzID0gKGJvYXJkKSA9PiB7XG4gIHJlbmRlclNoYWRvdyhsYXN0Q29vcmRzUmVuZGVyZWQsIFwiY2xlYXJcIiwgYm9hcmQsIGxhc3RTaGlwKTtcbiAgYXhpcyA9PT0gXCJ4XCIgPyAoYXhpcyA9IFwieVwiKSA6IChheGlzID0gXCJ4XCIpO1xuICBpZihoaWdobGlnaHRTcXVhcmVzKXtcbiAgICByZW5kZXJTaGFkb3cobGFzdENvb3Jkc1JlbmRlcmVkLCBcImZpbGxcIiwgYm9hcmQsIGxhc3RTaGlwKTtcbiAgfVxufTtcblxuY29uc3QgcmVuZGVyU2hhZG93ID0gKGNvb3JkcywgZmlsbCwgYm9hcmQsIHNoaXApID0+IHtcbiAgbGV0IFsgeCwgeSBdID0gY29vcmRzO1xuICBsZXQgZWw7XG4gIGxldCBjb2xsaXNpb24gPSBmYWxzZTtcbiAgeCA9IHBhcnNlSW50KHgsIDEwKTtcbiAgeSA9IHBhcnNlSW50KHksIDEwKTtcbiAgaWYgKGJvYXJkLmNoZWNrQ29sbGlzaW9uKHNoaXAsIHgsIHksIGF4aXMpICYmIGZpbGwgIT09IFwiY2xlYXJcIikge1xuICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gIH1cbiAgZm9yIChsZXQgayA9IDA7IGsgPCBzaGlwLmxlbmd0aDsgayArPSAxKSB7XG4gICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAjcDEgLnNxdWFyZVtkYXRhLXg9XCIke3ggKyBrfVwiXVtkYXRhLXk9XCIke3l9XCJdYFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgI3AxIC5zcXVhcmVbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3kgKyBrfVwiXWBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChlbCkge1xuICAgICAgZmlsbCA9PT0gXCJmaWxsXCIgJiYgZWwuY2xhc3NMaXN0LmFkZChcImhvdmVyZWRcIik7XG4gICAgICBpZiAoZmlsbCA9PT0gXCJjbGVhclwiKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlcmVkXCIpO1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwicmVkXCIpO1xuICAgICAgfVxuICAgICAgZmlsbCA9PT0gXCJwbGFjZVwiICYmIGVsLmNsYXNzTGlzdC5hZGQoXCJwbGFjZWRcIik7XG4gICAgICBpZiAoY29sbGlzaW9uID09PSB0cnVlICYmIGZpbGwgIT09IFwicGxhY2VcIikge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsYXN0Q29vcmRzUmVuZGVyZWQgPSBbeCwgeV07XG4gIGxhc3RTaGlwID0gc2hpcDtcbn07XG5cbmNvbnN0IHJlbW92ZUxpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcDEgLmJvYXJkIC5zcXVhcmVcIik7XG4gIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgc3F1YXJlLnJlcGxhY2VXaXRoKHNxdWFyZS5jbG9uZU5vZGUoKSk7XG4gIH0pO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHt9KTtcbn07XG5cbmNvbnN0IGNsaWNrVG9QbGFjZSA9IChjb29yZHMsIGJvYXJkLCBzaGlwKSA9PiB7XG4gIGxldCBbIHgsIHkgXSA9IGNvb3JkcztcbiAgeCA9IHBhcnNlSW50KHgsIDEwKTtcbiAgeSA9IHBhcnNlSW50KHksIDEwKTtcbiAgaWYgKGJvYXJkLmNoZWNrQ29sbGlzaW9uKHNoaXAsIHgsIHksIGF4aXMpKSB7XG4gICAgcmVuZGVyU2hhZG93KFt4LCB5XSwgJ2NsZWFyJywgYm9hcmQsIHNoaXApO1xuICAgIHJldHVybjtcbiAgfVxuICBib2FyZC5wbGFjZShzaGlwLCB4LCB5LCBheGlzKTtcbiAgcmVuZGVyU2hhZG93KGNvb3JkcywgXCJwbGFjZVwiLCBib2FyZCwgc2hpcCk7XG4gIHJlbW92ZUxpc3RlbmVycygpO1xuICBpZiAoaSA9PT0gNSkge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoc2hpcHNQbGFjZWQpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUsIHtwYXNzaXZlOiBmYWxzZX0pO1xuICB9XG4gIHBsYXllclBsYWNlU2hpcFBoYXNlKHAxQm9hcmQsIHAxU2hpcHMpO1xufTtcblxuY29uc3QgcGxheWVyUGxhY2VTaGlwID0gKGJvYXJkLCBzaGlwKSA9PiB7XG4gIHNoaXBCZWluZ1BsYWNlZCA9IHNoaXA7XG4gIHAxQm9hcmQgPSBib2FyZDtcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcDEgLmJvYXJkIC5zcXVhcmVcIik7XG4gIHN3aXRjaEF4aXNOYXJyYXRpdmUoKTtcblxuICBpZiAoaSA9PT0gMCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcInhcIikge1xuICAgICAgICBzd2l0Y2hBeGlzKGJvYXJkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgICAgcmVuZGVyU2hhZG93KFt4LCB5XSwgXCJmaWxsXCIsIGJvYXJkLCBzaGlwKTtcbiAgICAgIHRvdWNoZWQgPSBlLnRhcmdldDtcbiAgICB9KTtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuICAgICAgaGlnaGxpZ2h0U3F1YXJlcyA9IHRydWU7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICByZW5kZXJTaGFkb3coW3gsIHldLCBcImZpbGxcIiwgYm9hcmQsIHNoaXApO1xuICAgIH0pO1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGUpID0+IHtcbiAgICAgIGhpZ2hsaWdodFNxdWFyZXMgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAgIHJlbmRlclNoYWRvdyhbeCwgeV0sIFwiY2xlYXJcIiwgYm9hcmQsIHNoaXApXG4gICAgfSk7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoKSA9PiB7XG4gICAgICBjbGlja1RvUGxhY2UobGFzdENvb3Jkc1JlbmRlcmVkLCBib2FyZCwgc2hpcCk7XG4gICAgfSk7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaGlnaGxpZ2h0U3F1YXJlcyA9IGZhbHNlO1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgICAgY2xpY2tUb1BsYWNlKFt4LCB5XSwgYm9hcmQsIHNoaXApXG4gICAgfSk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gcGxheWVyUGxhY2VTaGlwUGhhc2UoYm9hcmQsIHNoaXBzKSB7XG5cbiAgaWYgKGkgPT09IDApIHtcbiAgICBwMUJvYXJkID0gYm9hcmQ7XG4gICAgcDFTaGlwcyA9IHNoaXBzO1xuICB9XG4gIGlmIChpIDw9IDQpIHtcbiAgICBwbGF5ZXJQbGFjZVNoaXAoYm9hcmQsIHNoaXBzW2ldKTtcbiAgICBpICs9IDE7XG4gIH1cbn1cblxuLy8gQUkgUGxhY2Ugc2hpcCBwaGFzZVxuY29uc3QgQUlQbGFjZVNoaXBQaGFzZSA9IChib2FyZCwgc2hpcHMsIHBsYXllcikgPT4ge1xuICBwbGF5ZXIuQUlQbGFjZVNoaXAoYm9hcmQsIHNoaXBzW2pdKTtcbiAgaiArPSAxO1xuICBpZiAoaiA9PT0gNSkge1xuICAgIHJldHVybjtcbiAgfVxuICBBSVBsYWNlU2hpcFBoYXNlKGJvYXJkLCBzaGlwcywgcGxheWVyKTtcbn07XG5cbmNvbnN0IHJlbmRlckJvYXJkID0gKGJvYXJkLCBib3gpID0+IHtcbiAgLy8gQ2xlYXIgb2xkIGNvbnRlbnQgcHJpb3IgdG8gcmUtcmVuZGVyIGlmIG5lZWRlZFxuICBsZXQgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2JveC5pZH0gLmJvYXJkYCk7XG4gIGlmIChncmlkKSB7XG4gICAgZ3JpZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH0gZWxzZSB7XG4gICAgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZC5jbGFzc05hbWUgPSBcImJvYXJkXCI7XG4gIH1cbiAgLy8gSW5kaXZpZHVhbCBzcXVhcmVzIG9uIGJvYXJkXG4gIGZvciAobGV0IGsgPSAwOyBrIDw9IDk7IGsgKz0gMSkge1xuICAgIGZvciAobGV0IGwgPSA5OyBsID49IDA7IGwgLT0gMSkge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZS5jbGFzc05hbWUgPSBcInNxdWFyZVwiO1xuICAgICAgc3F1YXJlLmRhdGFzZXQueCA9IGs7XG4gICAgICBzcXVhcmUuZGF0YXNldC55ID0gbDtcbiAgICAgIGdyaWQuYXBwZW5kKHNxdWFyZSk7XG4gICAgfVxuICB9XG4gIGJveC5hcHBlbmQoZ3JpZCk7XG59O1xuXG5jb25zdCB1cGRhdGVBSUJvYXJkID0gKGJvYXJkLCB4LCB5KSA9PiB7XG4gIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwMiAuc3F1YXJlW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuICBjb25zdCBib2FyZFZhbHVlID0gYm9hcmQuZ2V0TWFwKClbeF1beV07XG5cbiAgaWYoYm9hcmRWYWx1ZSA9PT0gMCB8fCBib2FyZFZhbHVlID09PSAxKSB7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgfVxuICBpZih0eXBlb2YgYm9hcmRWYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgncmVkJyk7XG4gIH1cbn1cblxuLy8gUGxheWVyIGF0dGFjayBwaGFzZSAtIHNlbmRzIHgsIHkgZnJvbSBjbGlja2VkIHNxdWFyZSB0byBib2FyZC5pbmNvbWluZygpXG5jb25zdCBhdHRhY2tDYWxsYmFjayA9IChlLCBib2FyZCkgPT4ge1xuICBjb25zdCB7IHgsIHkgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gIFxuICAvLyBSZW1vdmUgaG92ZXIgZWZmZWN0IGFuZCBjbGljayB0byBhdHRhY2sgXG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3AyIC5zcXVhcmVcIik7XG4gIHNxdWFyZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJhYmxlXCIpO1xuICAgIGVsLnJlcGxhY2VXaXRoKGVsLmNsb25lTm9kZSgpKTtcbiAgfSk7XG5cbiAgLy8gVXBkYXRlIERPTSBhbmQgYm9hcmRcbiAgdXBkYXRlQUlCb2FyZChib2FyZCwgeCwgeSk7XG4gIGJvYXJkLmluY29taW5nKHgsIHkpO1xuICAgXG4gIC8vIFRlc3QgaWYgc3Vua1xuICBpZih0eXBlb2YgYm9hcmQuZ2V0TWFwKClbeF1beV0gPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3Qgc2hpcCA9IGJvYXJkLmdldE1hcCgpW3hdW3ldWzBdO1xuICAgIGlmKGNhblZpYnJhdGUgJiYgcGxheWVySGl0cyA9PT0gMCkge1xuICAgICAgbmF2aWdhdG9yLnZpYnJhdGUoMzAwKTtcbiAgICAgIHBsYXllckhpdHMgKz0gMTtcbiAgICB9XG4gICAgaWYoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgbmFycmF0ZShgWW91J3ZlIHN1bmsgdGhlIGVuZW15J3MgJHtzaGlwLnR5cGV9ISEhYCk7XG4gICAgICBpZihjYW5WaWJyYXRlKSBcbiAgICAgICAgbmF2aWdhdG9yLnZpYnJhdGUoMzAwKTtcbiAgICAgICAgcGxheWVySGl0cyA9IDA7XG4gICAgfVxuICB9XG4gXG4gIC8vIFRlc3QgaWYgZ2FtZSBpcyBvdmVyXG4gIGlmKCFib2FyZC5pc0dhbWVPdmVyKCkpIHtcbiAgICBzZXRUaW1lb3V0KEFJQXR0YWNrLCA1MDApO1xuICB9IGVsc2UgaWYoYm9hcmQuaXNHYW1lT3ZlcigpKSB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChnYW1lT3ZlckV2ZW50KTtcbiAgfVxufTtcblxuLy8gUGxheWVyIGF0dGFjayBwaGFzZSAtIGFkZHMgY2xpY2sgZXZlbnQgbGlzdGVuZXIgYW5kIGhvdmVyIGVmZmVjdFxuY29uc3QgcGxheWVyQXR0YWNrID0gKGJvYXJkKSA9PiB7XG4gIGN1cnJlbnRQbGF5ZXIgPSAxO1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwMiAuc3F1YXJlXCIpO1xuICBzcXVhcmVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBhdHRhY2tDYWxsYmFjayhlLCBib2FyZCkpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJob3ZlcmFibGVcIik7XG4gIH0pO1xuICBpZih0dXJuID09PSAwKSB7XG4gICAgbmFycmF0ZShcIkNsaWNrIHRvIGZpcmUgb24gdGhlIGVuZW15IGZsZWV0XCIpO1xuICB9XG4gIHR1cm4gKz0gMTtcbn07XG5cbmNvbnN0IHVwZGF0ZUJvYXJkID0gKGJvYXJkLCB4LCB5KSA9PiB7XG4gIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwMSAuc3F1YXJlW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuICBjb25zdCBib2FyZFZhbHVlID0gYm9hcmQuZ2V0TWFwKClbeF1beV07XG4gIGlmKGJvYXJkVmFsdWUgPT09IDEpIHtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICB9XG4gIGlmKHR5cGVvZiBib2FyZFZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdyZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBBSUF0dGFjaygpIHtcbiAgY3VycmVudFBsYXllciA9IDI7XG4gXG4gICAgcDIuYXR0YWNrKCk7XG4gICAgY29uc3QgWyB4LCB5IF0gPSBwMi5nZXRMYXN0U2hvdCgpO1xuICAgIHVwZGF0ZUJvYXJkKHAxQm9hcmQsIHgsIHkpO1xuXG4gICAgaWYocDFCb2FyZC5nZXRMYXN0U2hvdEhpdCgpKSB7XG4gICAgICBpZiAoY2FuVmlicmF0ZSAmJiBBSUhpdHMgPT09IDApIFxuICAgICAgICBuYXZpZ2F0b3IudmlicmF0ZSg1MDApO1xuICAgICAgQUlIaXRzICs9IDE7XG4gICAgICBjb25zdCBzaGlwID0gcDFCb2FyZC5nZXRNYXAoKVt4XVt5XVswXTtcbiAgICAgIGlmKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgbmFycmF0ZShgQWxsIGhhbmRzIG9uIGRlY2shIFlvdXIgJHtzaGlwLnR5cGV9IGlzIHNpbmtpbmchISFgKTtcbiAgICAgICAgaWYgKGNhblZpYnJhdGUpIFxuICAgICAgICAgIG5hdmlnYXRvci52aWJyYXRlKDUwMCk7XG4gICAgICAgIEFJSGl0cyA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIXAxQm9hcmQuaXNHYW1lT3ZlcigpKSB7XG4gICAgcGxheWVyQXR0YWNrKHAyQm9hcmQpO1xuICB9IGVsc2UgaWYocDFCb2FyZC5pc0dhbWVPdmVyKCkpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGdhbWVPdmVyRXZlbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGF0dGFja1BoYXNlKHBsYXllclR3bywgcGxheWVyVHdvQm9hcmQpIHtcbiAgY3VycmVudFBsYXllciA9IDE7XG4gIHAyID0gcGxheWVyVHdvO1xuICBwMkJvYXJkID0gcGxheWVyVHdvQm9hcmQ7XG4gIHBsYXllckF0dGFjayhwMkJvYXJkKTtcbn1cblxuZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XG4gIGlmKGN1cnJlbnRQbGF5ZXIgPT09IDEpIHtcbiAgICBuYXJyYXRpdmUudGV4dENvbnRlbnQgPSBgR2xvcmlvdXMgdmljdG9yeSEgWW91IHN1bmsgYWxsIHRoZSBBSSBzaGlwcyFgO1xuICB9IGVsc2Uge1xuICAgIG5hcnJhdGl2ZS50ZXh0Q29udGVudCA9ICdDcnVzaGluZyBkZWZlYXQgLi4uIFRoZSBBSSBoYXMgc3VuayBhbGwgb2YgeW91ciBzaGlwcyEnO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5hcnJhdGUobWVzc2FnZSkge1xuICBuYXJyYXRpdmUudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBuYXJyYXRpdmUudGV4dENvbnRlbnQgPSAnJztcbiAgfSwgNDAwMClcbn1cblxuZnVuY3Rpb24gc3dpdGNoQXhpc05hcnJhdGl2ZSgpIHtcbiAgbmFycmF0aXZlLmlubmVySFRNTCA9IGBMZWFkIHlvdXIgJHtzaGlwQmVpbmdQbGFjZWQudHlwZX0gaW50byBiYXR0bGUuIFxcbiBcbiAgTW91c2UgdXNlcnMgaG92ZXIgb3ZlciB0aGUgYm9hcmQsIGFuZCBjbGljayB0byBwbGFjZSBzaGlwLiBcXG4gXG4gIE1vYmlsZSB1c2VycyB0b3VjaCwgaG9sZCwgZHJhZywgYW5kIHJlbGVhc2UuIEhpdCA8c3BhbiBpZD0neC1idG4nPlg8L3NwYW4+IFxcbiBcbiAgdG8gc3dpdGNoIGF4aXMuYDtcblxuICBjb25zdCB4QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3gtYnRuJyk7XG4gICAgeEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXRjaEF4aXMocDFCb2FyZCkpO1xuICAgIHhCdG4uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2gnLCAoKSA9PiBzd2l0Y2hBeGlzKHAxQm9hcmQpKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB7IHg6IGEsIHk6IGIgfSA9IHRvdWNoZWQuZGF0YXNldDtcbiAgY29uc3QgbGFzdEVsZW1lbnQgPSB0b3VjaGVkO1xuXG4gIGxldCB4ID0gZS50b3VjaGVzWzBdLmNsaWVudFhcbiAgbGV0IHkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WVxuICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gIGlmKGN1cnJlbnRFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCA9PT0gJ3AyJykge1xuICAgIHJldHVybjtcbiAgfSBcbiAgXG4gIGlmKGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc3F1YXJlJykpIHtcbiAgICAoeyB4LCB5IH0gPSBjdXJyZW50RWxlbWVudC5kYXRhc2V0KTtcbiAgICBpZihjdXJyZW50RWxlbWVudCAhPT0gbGFzdEVsZW1lbnQpIHtcbiAgICAgIHJlbmRlclNoYWRvdyhbYSwgYl0sIFwiY2xlYXJcIiwgcDFCb2FyZCwgc2hpcEJlaW5nUGxhY2VkKTtcbiAgICAgIHJlbmRlclNoYWRvdyhbeCwgeV0sICdmaWxsJywgcDFCb2FyZCwgc2hpcEJlaW5nUGxhY2VkKTtcbiAgICAgIHRvdWNoZWQgPSBjdXJyZW50RWxlbWVudDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgcDFCb3gsXG4gIHAyQm94LFxuICBwbGF5ZXJQbGFjZVNoaXAsXG4gIHBsYXllclBsYWNlU2hpcFBoYXNlLFxuICBBSVBsYWNlU2hpcFBoYXNlLFxuICByZW5kZXJCb2FyZCxcbiAgcGxheWVyQXR0YWNrLFxuICBhdHRhY2tQaGFzZSxcbiAgZ2FtZU92ZXIsXG59O1xuIiwiaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgbWFrZVNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCB7IFxuICBwMUJveCwgXG4gIHAyQm94LCAgXG4gIHBsYXllclBsYWNlU2hpcFBoYXNlLCBcbiAgQUlQbGFjZVNoaXBQaGFzZSxcbiAgcmVuZGVyQm9hcmQsIFxuICBhdHRhY2tQaGFzZSxcbiAgZ2FtZU92ZXIsXG59IGZyb20gXCIuL0RPTVwiO1xuXG5cbi8vIFNFVFVQXG5cbi8vIE1ha2UgZ2FtZSBib2FyZHNcbmNvbnN0IHAxQm9hcmQgPSBnYW1lQm9hcmQoKTtcbnAxQm9hcmQuaW5pdCgpO1xuY29uc3QgcDJCb2FyZCA9IGdhbWVCb2FyZCgpO1xucDJCb2FyZC5pbml0KCk7XG5cbi8vIE1ha2UgcGxheWVyc1xuY29uc3QgcDEgPSBwbGF5ZXIoJzEnLCBwMkJvYXJkLCBcImh1bWFuXCIpO1xuY29uc3QgcDIgPSBwbGF5ZXIoXCIyXCIsIHAxQm9hcmQsIFwiQUlcIik7XG5cbi8vIE1ha2UgcDEgc2hpcHNcbmNvbnN0IHAxUHRiID0gbWFrZVNoaXAoJ3BhdHJvbCBib2F0Jyk7XG5jb25zdCBwMVN1YiA9IG1ha2VTaGlwKCdzdWInKTtcbmNvbnN0IHAxRGVzdHJveWVyID0gbWFrZVNoaXAoJ2Rlc3Ryb3llcicpO1xuY29uc3QgcDFCYXR0bGVzaGlwID0gbWFrZVNoaXAoJ2JhdHRsZXNoaXAnKTtcbmNvbnN0IHAxQ2FycmllciA9IG1ha2VTaGlwKCdjYXJyaWVyJyk7XG5jb25zdCBwMVNoaXBzID0gW3AxQ2FycmllciwgcDFCYXR0bGVzaGlwLCBwMURlc3Ryb3llciwgcDFTdWIsIHAxUHRiXTtcblxuLy8gTWFrZSBBSSBzaGlwc1xuY29uc3QgcDJQdGIgPSBtYWtlU2hpcCgncGF0cm9sIGJvYXQnKTtcbmNvbnN0IHAyU3ViID0gbWFrZVNoaXAoJ3N1YicpO1xuY29uc3QgcDJEZXN0cm95ZXIgPSBtYWtlU2hpcCgnZGVzdHJveWVyJyk7XG5jb25zdCBwMkJhdHRsZXNoaXAgPSBtYWtlU2hpcCgnYmF0dGxlc2hpcCcpO1xuY29uc3QgcDJDYXJyaWVyID0gbWFrZVNoaXAoJ2NhcnJpZXInKTtcbmNvbnN0IEFJU2hpcHMgPSBbcDJDYXJyaWVyLCBwMkJhdHRsZXNoaXAsIHAyRGVzdHJveWVyLCBwMlN1YiwgcDJQdGJdO1xuXG4vLyBSZW5kZXIgQm9hcmRzXG5yZW5kZXJCb2FyZChwMUJvYXJkLCBwMUJveCk7XG5yZW5kZXJCb2FyZChwMkJvYXJkLCBwMkJveCk7XG5cbi8vIFBsYWNlIHNoaXBzIHBoYXNlXG5BSVBsYWNlU2hpcFBoYXNlKHAyQm9hcmQsIEFJU2hpcHMsIHAyKTtcbnBsYXllclBsYWNlU2hpcFBoYXNlKHAxQm9hcmQsIHAxU2hpcHMpO1xuXG4vLyBQbGF5ZXIgYXR0YWNrIHBoYXNlIC0gZXZlbnQgZmlyZXMgb25jZSBhbGwgc2hpcHMgYXJlIHBsYWNlZCwgYW5kIG1vdmVzIGludG8gXG4vLyBhdHRhY2sgcGhhc2VcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NoaXBzUGxhY2VkJywgKCkgPT4gYXR0YWNrUGhhc2UocDIsIHAyQm9hcmQpKTtcblxuLy8gR2FtZW92ZXJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2dhbWVPdmVyJywgZ2FtZU92ZXIpO1xuIiwiY29uc3QgZ2FtZUJvYXJkID0gKCkgPT4ge1xuICBsZXQgbWFwO1xuICBsZXQgc3Vua1NoaXBzID0gMDtcbiAgbGV0IGxhc3RTaG90SGl0ID0gZmFsc2U7XG4gIFxuICBjb25zdCBnZXRMYXN0U2hvdEhpdCA9ICgpID0+IGxhc3RTaG90SGl0O1xuICBcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBzdW5rU2hpcHMgPSAwO1xuICAgIG1hcCA9IEFycmF5KDEwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbWFwW2ldID0gQXJyYXkoMTApLmZpbGwoMCk7XG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgZ2V0TWFwID0gKCkgPT4gbWFwO1xuXG4gIGNvbnN0IGNoZWNrQ29sbGlzaW9uID0gKHNoaXAsIHgsIHksIGF4aXMpID0+IHtcbiAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgIGlmICh4ICsgc2hpcC5sZW5ndGggPiAxMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb29yZHMucHVzaChbeCArIGksIHldKTtcbiAgICAgIH1cbiAgICAgIGxldCByZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgY29vcmRzLmZvckVhY2goKHBhaXIpID0+IHtcbiAgICAgICAgY29uc3QgW2EsIGJdID0gcGFpcjtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBbYV1bYl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICByZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbiAgICBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgIGlmICh5ICsgc2hpcC5sZW5ndGggPiAxMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb29yZHMucHVzaChbeCwgeSArIGldKTtcbiAgICAgIH1cbiAgICAgIGxldCByZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgY29vcmRzLmZvckVhY2goKHBhaXIpID0+IHtcbiAgICAgICAgY29uc3QgW2EsIGJdID0gcGFpcjtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBbYV1bYl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICByZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gXG4gIGNvbnN0IHBsYWNlID0gKHNoaXAsIHgsIHksIGF4aXMpID0+IHtcbiAgICAvLyBpIGlzIGh1bGwgaW5kZXggdG8gdHJhY2sgaGl0c1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgYSA9IHg7XG4gICAgbGV0IGIgPSB5O1xuICAgIHdoaWxlIChpIDwgc2hpcC5sZW5ndGgpIHtcbiAgICAgIG1hcFthXVtiXSA9IFtzaGlwLCBpXTtcbiAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICBhICs9IDE7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGIgKz0gMTtcbiAgICAgICAgaSArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgXG4gIGNvbnN0IGlzR2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHN1bmtTaGlwcyA9PT0gNSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiBcbiAgY29uc3QgdGVzdElmU3VuayA9IChzaGlwKSA9PiB7XG4gICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgIHN1bmtTaGlwcyArPSAxO1xuICAgIH1cbiAgICBpc0dhbWVPdmVyKHN1bmtTaGlwcyk7XG4gIH07XG4gXG4gIGNvbnN0IGluY29taW5nID0gKHgsIHkpID0+IHtcbiAgICBsZXQgc2hpcDtcbiAgICBsZXQgaHVsbEluZGV4O1xuICAgIGlmICh0eXBlb2YgbWFwW3hdW3ldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBbc2hpcCwgaHVsbEluZGV4XSA9IG1hcFt4XVt5XTsgLy8gMCBpcyBzaGlwIG9iamVjdCwgMSBpcyBodWxsIGluZGV4LiBzZWUgcGxhY2UoKVxuICAgICAgc2hpcC5oaXQoaHVsbEluZGV4KTtcbiAgICAgIGxhc3RTaG90SGl0ID0gdHJ1ZTtcbiAgICAgIHRlc3RJZlN1bmsoc2hpcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcFt4XVt5XSA9IDE7XG4gICAgICBsYXN0U2hvdEhpdCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbiBcbiAgY29uc3QgZ2V0U3Vua1NoaXBzID0gKCkgPT4gc3Vua1NoaXBzO1xuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgZ2V0TWFwLFxuICAgIGNoZWNrQ29sbGlzaW9uLFxuICAgIHBsYWNlLFxuICAgIGlzR2FtZU92ZXIsXG4gICAgdGVzdElmU3VuayxcbiAgICBpbmNvbWluZyxcbiAgICBnZXRTdW5rU2hpcHMsXG4gICAgZ2V0TGFzdFNob3RIaXQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lQm9hcmQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWxvbmVseS1pZiAqL1xuY29uc3QgcGxheWVyID0gKG1vbmlrZXIsIGJvYXJkLCB0eXBlT2ZQbGF5ZXIpID0+IHtcbiAgY29uc3QgbmFtZSA9IG1vbmlrZXI7XG4gIGNvbnN0IHR5cGUgPSB0eXBlT2ZQbGF5ZXI7XG4gIGNvbnN0IGJvYXJkT2ZBdHRhY2sgPSBib2FyZDtcblxuICAvLyBBSSBkYXRhIGZvciBjb29yZHMgb2Ygc2hvdFxuICBsZXQgYTsgICAgXG4gIGxldCBiO1xuICBsZXQgaXNBdHRhY2tpbmdTaGlwID0gZmFsc2U7XG4gIGxldCBhdHRhY2tBeGlzO1xuICBsZXQgbGFzdEhpdCA9IG51bGw7XG4gIGxldCBsYXN0U2hvdDtcbiAgbGV0IGxhc3RTaG90TWlzc2VkID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0TGFzdFNob3QgPSAoKSA9PiBsYXN0U2hvdDtcblxuICBjb25zdCBnZXRBSWNvb3JkaW5hdGVzID0gKCkgPT4gW2EsIGJdO1xuXG4gIGNvbnN0IEFJbWFwID0gQXJyYXkoMTApOyAvLyAwIGlzIHVua25vd24sIDEgaXMgbWlzcywgMiBpcyBoaXRcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBBSW1hcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIEFJbWFwW2ldID0gQXJyYXkoMTApLmZpbGwoMCk7XG4gIH1cbiAgIFxuICBjb25zdCBBSVBsYWNlU2hpcCA9IChBSUJvYXJkLCBzaGlwKSA9PiB7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgbGV0IGF4aXM7XG4gICAgZG8ge1xuICAgICAgYXhpcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgaWYoYXhpcyA9PT0gMCkge1xuICAgICAgICBheGlzID0gJ3gnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXhpcyA9ICd5JztcbiAgICAgIH1cbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH0gd2hpbGUoQUlCb2FyZC5jaGVja0NvbGxpc2lvbihzaGlwLCB4LCB5LCBheGlzKSlcbiAgICBBSUJvYXJkLnBsYWNlKHNoaXAsIHgsIHksIGF4aXMpO1xuICB9XG5cbiAgLy8gMiBoZWxwZXIgZnVuY3Rpb25zIGZvciBBSSBhdHRhY2tcbiAgY29uc3QgcGlja0Nvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgIGlzQXR0YWNraW5nU2hpcCA9IGZhbHNlO1xuICAgIGRvIHtcbiAgICAgIGEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBiID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH0gd2hpbGUgKEFJbWFwW2FdW2JdICE9PSAwKTtcbiAgICBBSW1hcFthXVtiXSA9IDE7XG4gICAgbGFzdFNob3QgPSBbYSwgYl07XG4gIH07XG4gIFxuICBjb25zdCBwaWNrQWRqYWNlbnRDb29yZGluYXRlcyA9ICgpID0+IHtcbiAgICBpc0F0dGFja2luZ1NoaXAgPSB0cnVlO1xuICAgIGxldCBpO1xuICAgIGxldCBqO1xuXG4gICAgbGFzdFNob3RNaXNzZWQgPyBbIGksIGogXSA9IGxhc3RIaXQgOiBbIGksIGogXSA9IGxhc3RTaG90OyAgICBcbiAgICBcbiAgICBsZXQgYWRqYWNlbnRTaG90cyA9IFtbaSArIDEsIGpdLCBbaSAtIDEsIGpdLCBbaSwgaiArIDFdLCBbaSwgaiAtIDFdXTtcblxuICAgIC8vIENvZGUgdG8gbGltaXQgcG9zc2libGUgc2hvdHMgZm9yIGVkZ2Ugb2YgYm9hcmQgICBcbiAgICBpZihpID09PSAwICYmIGogPT09IDApIHtcbiAgICAgIGFkamFjZW50U2hvdHMgPSBbW2kgKyAxLCBqXSwgW2ksIGogKyAxXV07XG4gICAgfSBlbHNlXG4gICAgaWYoaSA9PT0gOSAmJiBqID09PSA5KSB7XG4gICAgICBhZGphY2VudFNob3RzID0gW1tpIC0gMSwgal0sIFtpLCBqIC0gMV1dO1xuICAgIH0gZWxzZVxuICAgIGlmKGkgPT09IDAgJiYgaiA9PT0gOSkge1xuICAgICAgYWRqYWNlbnRTaG90cyA9IFtbaSArIDEsIGpdLCBbaSwgaiAtIDFdXTtcbiAgICB9IGVsc2VcbiAgICBpZihpID09PSA5ICYmIGogPT09IDApIHtcbiAgICAgIGFkamFjZW50U2hvdHMgPSBbW2kgLSAxLCBqXSwgW2ksIGogKyAxXV07XG4gICAgfSBlbHNlXG4gICAgaWYoaSA9PT0gMCkge1xuICAgICAgYWRqYWNlbnRTaG90cyA9IFtbaSArIDEsIGpdLCBbaSwgaiArIDFdLCBbaSwgaiAtIDFdXTtcbiAgICB9IGVsc2VcbiAgICBpZihpID09PSA5KSB7XG4gICAgICBhZGphY2VudFNob3RzID0gW1tpIC0gMSwgal0sIFtpLCBqICsgMV0sIFtpLCBqIC0gMV1dO1xuICAgIH0gZWxzZVxuICAgIGlmKGogPT09IDApIHtcbiAgICAgIGFkamFjZW50U2hvdHMgPSBbW2kgKyAxLCBqXSwgW2kgLSAxLCBqXSwgW2ksIGogKyAxXV07XG4gICAgfSBlbHNlXG4gICAgaWYoaiA9PT0gOSkge1xuICAgICAgYWRqYWNlbnRTaG90cyA9IFtbaSArIDEsIGpdLCBbaSAtIDEsIGpdLCBbaSwgaiAtIDFdXTtcbiAgICB9IFxuXG4gICAgLy8gbGltaXQgc2hvdHMgdG8gYSBrbm93biBheGlzIG9mIHNoaXBcbiAgICBpZihhdHRhY2tBeGlzID09PSAneCcpIHtcbiAgICAgIGFkamFjZW50U2hvdHMgPSBhZGphY2VudFNob3RzLmZpbHRlcihzaG90ID0+IEpTT04uc3RyaW5naWZ5KHNob3QpICE9PSBKU09OLnN0cmluZ2lmeShbaSwgaiAtIDFdKSBcbiAgICAgICAgJiYgSlNPTi5zdHJpbmdpZnkoc2hvdCkgIT09IEpTT04uc3RyaW5naWZ5KFtpLCBqICsgMV0pKTtcbiAgICB9XG5cbiAgICBpZihhdHRhY2tBeGlzID09PSAneScpIHtcbiAgICAgIGFkamFjZW50U2hvdHMgPSBhZGphY2VudFNob3RzLmZpbHRlcihzaG90ID0+IEpTT04uc3RyaW5naWZ5KHNob3QpICE9PSBKU09OLnN0cmluZ2lmeShbaSArIDEsIGpdKSBcbiAgICAgICYmIEpTT04uc3RyaW5naWZ5KHNob3QpICE9PSBKU09OLnN0cmluZ2lmeShbaSAtIDEsIGpdKSk7XG4gICAgfVxuXG4gICAgLy8gVGVzdCBpcyB0cnVlIGlmIHRoZXJlIGlzIGFuIGFkamFjZW50IHNob3QgYXZhaWxhYmxlIChhIHplcm8pXG4gICAgY29uc3QgdGVzdCA9IGFkamFjZW50U2hvdHMuc29tZSh4eSA9PiB7XG4gICAgICBjb25zdCBbIHgsIHkgXSA9IHh5O1xuICAgICAgcmV0dXJuIEFJbWFwW3hdW3ldID09PSAwO1xuICAgIH0pO1xuXG4gICAgLy8gSWYgbm8gYWRqYWNlbnQgc2hvdHMgYXZhaWxhYmxlLCBnZW5lcmF0ZSByYW5kb20gc2hvdCBhbmQgZXhpdCBmdW5jdGlvblxuICAgIGlmKHRlc3QgPT09IGZhbHNlKSB7XG4gICAgICAgIGxhc3RTaG90TWlzc2VkID0gdHJ1ZTtcbiAgICAgICAgcGlja0FkamFjZW50Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIFxuICAgIC8vIE90aGVyd2lzZSwgcmFuZG9tbHkgcGljayBhbiBhZGphY2VudCBzaG90XG4gICAgZG8ge1xuICAgICAgWyBhLCBiIF0gPSBhZGphY2VudFNob3RzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFkamFjZW50U2hvdHMubGVuZ3RoKV07XG4gICAgfSB3aGlsZSAoIUpTT04uc3RyaW5naWZ5KGFkamFjZW50U2hvdHMpLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KFthLCBiXSkpIHx8IEFJbWFwW2FdW2JdICE9PSAwKTtcbiAgICAgIEFJbWFwW2FdW2JdID0gMTtcbiAgICAgIGxhc3RTaG90ID0gW2EsIGJdO1xuICB9XG5cbiAgY29uc3QgYXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICAvLyBIdW1hbiBhdHRhY2tcbiAgICBpZiAodHlwZU9mUGxheWVyID09PSBcImh1bWFuXCIpIHtcbiAgICAgIGJvYXJkT2ZBdHRhY2suaW5jb21pbmcoeCwgeSk7XG5cbiAgICAvLyBBSSBhdHRhY2sgYnJhbmNoXG4gICAgfSBlbHNlIGlmKGJvYXJkT2ZBdHRhY2suZ2V0TGFzdFNob3RIaXQoKSkgeyBcbiAgICAgIGxhc3RTaG90TWlzc2VkID0gZmFsc2U7XG4gICAgICBpc0F0dGFja2luZ1NoaXAgPSB0cnVlO1xuICAgICAgLy8gUmVjb3JkIGEgaGl0IGluIEFJJ3MgbWFwXG4gICAgICBjb25zdCBbIGMsIGQgXSA9IGxhc3RTaG90O1xuICAgICAgQUltYXBbY11bZF0gPSAyO1xuICAgICAgXG4gICAgICAvLyBJZiBubyBwcmV2aW91cyBoaXQgZm9yIGN1cnJlbnRseSBoaXQgc2hpcFxuICAgICAgaWYobGFzdEhpdCA9PT0gbnVsbCkge1xuICAgICAgICBsYXN0SGl0ID0gbGFzdFNob3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZihsYXN0SGl0WzBdID09PSBsYXN0U2hvdFswXSkge1xuICAgICAgICAgIGF0dGFja0F4aXMgPSAneSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXR0YWNrQXhpcyA9ICd4JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZihib2FyZE9mQXR0YWNrLmdldE1hcCgpW2NdW2RdWzBdLmlzU3VuaygpKSB7XG4gICAgICAgIC8vIFJlc2V0IGF4aXMgdHJhY2tpbmdcbiAgICAgICAgbGFzdEhpdCA9IG51bGw7XG4gICAgICAgIGF0dGFja0F4aXMgPSAnJztcbiAgICAgICAgXG4gICAgICAgIHBpY2tDb29yZGluYXRlcygpO1xuICAgICAgICBib2FyZE9mQXR0YWNrLmluY29taW5nKGEsIGIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwaWNrQWRqYWNlbnRDb29yZGluYXRlcygpO1xuICAgICAgICAgIGJvYXJkT2ZBdHRhY2suaW5jb21pbmcoYSwgYik7XG4gICAgICB9XG4gICAgLy8gRnJvbSBpZiBsYXN0IHNob3QgaGl0XG4gICAgfSBlbHNlIGlmKGlzQXR0YWNraW5nU2hpcCkge1xuICAgICAgICBsYXN0U2hvdE1pc3NlZCA9IHRydWU7XG4gICAgICAgIHBpY2tBZGphY2VudENvb3JkaW5hdGVzKCk7XG4gICAgICAgIGJvYXJkT2ZBdHRhY2suaW5jb21pbmcoYSwgYik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdFNob3RNaXNzZWQgPSB0cnVlO1xuICAgICAgICBwaWNrQ29vcmRpbmF0ZXMoKTtcbiAgICAgICAgYm9hcmRPZkF0dGFjay5pbmNvbWluZyhhLCBiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgdHlwZSxcbiAgICBib2FyZE9mQXR0YWNrLFxuICAgIGF0dGFjayxcbiAgICBnZXRBSWNvb3JkaW5hdGVzLFxuICAgIEFJUGxhY2VTaGlwLFxuICAgIGdldExhc3RTaG90LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyO1xuIiwiY29uc3QgbWFrZVNoaXAgPSAodHlwZSkgPT4ge1xuICBsZXQgbGVuZ3RoO1xuICBpZiAodHlwZSA9PT0gXCJjYXJyaWVyXCIpIHtcbiAgICBsZW5ndGggPSA1O1xuICB9XG4gIGlmICh0eXBlID09PSBcImJhdHRsZXNoaXBcIikge1xuICAgIGxlbmd0aCA9IDQ7XG4gIH1cbiAgaWYgKHR5cGUgPT09IFwic3ViXCIgfHwgdHlwZSA9PT0gXCJkZXN0cm95ZXJcIikge1xuICAgIGxlbmd0aCA9IDM7XG4gIH1cbiAgaWYgKHR5cGUgPT09IFwicGF0cm9sIGJvYXRcIikge1xuICAgIGxlbmd0aCA9IDI7XG4gIH1cbiAgY29uc3QgaHVsbCA9IEFycmF5KGxlbmd0aCkuZmlsbCgwKTtcbiAgY29uc3QgZ2V0SHVsbCA9ICgpID0+IGh1bGw7XG4gIGNvbnN0IGhpdCA9IChpbmRleCkgPT4ge1xuICAgIGh1bGxbaW5kZXhdID0gMTtcbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gaHVsbC5ldmVyeSgoeCkgPT4geCA9PT0gMSk7XG4gIHJldHVybiB7IGxlbmd0aCwgdHlwZSwgaGl0LCBpc1N1bmssIGdldEh1bGwgfTsgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAqIGFzIGdhbWVMb29wIGZyb20gJy4vbW9kdWxlcy9nYW1lJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=