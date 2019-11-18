webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Search/Search.js":
/*!*************************************!*\
  !*** ./components/Search/Search.js ***!
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
/* harmony import */ var _SearchStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchStyle */ "./components/Search/SearchStyle.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.js");
/* harmony import */ var _styles_fontsStyles_paragraphBodyRegular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/fontsStyles/paragraphBodyRegular */ "./styles/fontsStyles/paragraphBodyRegular.js");
/* harmony import */ var _styles_fontsStyles_paragraphTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/fontsStyles/paragraphTitle */ "./styles/fontsStyles/paragraphTitle.js");
/* harmony import */ var _styles_fontsStyles_paragraphHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/fontsStyles/paragraphHeader */ "./styles/fontsStyles/paragraphHeader.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_8__);










var changeLanguage = function changeLanguage(language, setLangauge) {
  _i18n__WEBPACK_IMPORTED_MODULE_8__["i18n"].changeLanguage(language);
  setLangauge(language);
};

var Search = function Search(props) {
  var t = props.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_i18n__WEBPACK_IMPORTED_MODULE_8__["i18n"].language),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      language = _useState2[0],
      setLangauge = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SearchStyle__WEBPACK_IMPORTED_MODULE_3__["SearchStyle"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "img"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "imgIcon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/svg/iconWord.svg"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/svg/iconTicket.svg"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_paragraphTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    align: "left"
  }, t("intro1")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_paragraphHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left",
    color: "#80A8E5"
  }, t("subTitle1")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_paragraphBodyRegular__WEBPACK_IMPORTED_MODULE_5__["default"], {
    align: "left",
    color: "#999999"
  }, t("description1")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    content: t("button2"),
    color: "white"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["withTranslation"])("home")(Search));

/***/ })

})
//# sourceMappingURL=index.js.8d18160a278966bfef68.hot-update.js.map