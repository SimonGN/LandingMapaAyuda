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

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderStyle__WEBPACK_IMPORTED_MODULE_3__["HeaderStyle"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_paragraphTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "center"
  }, t("intro")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    content: t("button"),
    color: "white"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "divCard"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "full-height"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CardExperience_CardExperience__WEBPACK_IMPORTED_MODULE_5__["default"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "icon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "icon1",
    src: "/static/svg/iconHomeGalery0.svg"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "icon2",
    src: "/static/svg/iconHomeGalery1.svg"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "icon3",
    src: "/static/svg/iconHomeGalery2.svg"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "icon4",
    src: "/static/svg/iconHomeGalery3.svg"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "icon5",
    src: "/static/svg/iconHomeGalery4.svg"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["withTranslation"])("home")(Header));

/***/ })

})
//# sourceMappingURL=index.js.4b6fd791398281634486.hot-update.js.map