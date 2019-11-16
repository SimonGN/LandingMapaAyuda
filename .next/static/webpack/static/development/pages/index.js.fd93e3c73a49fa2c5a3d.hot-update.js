webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HeaderStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderStyle */ "./components/Header/HeaderStyle.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.js");
/* harmony import */ var _CardExperience_CardExperience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CardExperience/CardExperience */ "./components/CardExperience/CardExperience.js");
/* harmony import */ var _styles_fontsStyles_paragraphBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/fontsStyles/paragraphBody */ "./styles/fontsStyles/paragraphBody.js");
/* harmony import */ var _styles_fontsStyles_paragraphTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/fontsStyles/paragraphTitle */ "./styles/fontsStyles/paragraphTitle.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_8__);










var changeLanguage = function changeLanguage(language, setLangauge) {
  _i18n__WEBPACK_IMPORTED_MODULE_8__["i18n"].changeLanguage(language);
  setLangauge(language);
};

var Header = function Header(props) {
  var t = props.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_i18n__WEBPACK_IMPORTED_MODULE_8__["i18n"].language),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      language = _useState2[0],
      setLangauge = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderStyle__WEBPACK_IMPORTED_MODULE_3__["HeaderStyle"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_paragraphTitle__WEBPACK_IMPORTED_MODULE_7__["default"], null, t("intro")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    content: t("button"),
    color: "white"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CardExperience_CardExperience__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["withTranslation"])("home")(Header));

/***/ }),

/***/ "./styles/fontsStyles/paragraphTitle.js":
/*!**********************************************!*\
  !*** ./styles/fontsStyles/paragraphTitle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-family: \"GT\u2013Medium\";\n    color: ", ";\n    font-style: normal;\n    font-weight: 500;\n    font-size: ", ";\n    line-height: 40px;\n    text-align: ", ";\n\n    @media only screen and (min-width:415px) and (max-width:768px){\n\n    }\n    @media only screen and (min-width:769px) and (max-width:1024px){\n\n    }\n    @media only screen and (min-width:1025px) and (max-width:1440px){\n\n    }\n    @media only screen and (min-width:1441px){\n\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ParagraphTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject(), function (props) {
  return props.color ? props.color : 'black';
}, function (props) {
  return props.size ? props.size : '35px';
}, function (props) {
  return props.align === 'center' ? 'center' : 'left';
});
/* harmony default export */ __webpack_exports__["default"] = (ParagraphTitle);

/***/ })

})
//# sourceMappingURL=index.js.fd93e3c73a49fa2c5a3d.hot-update.js.map