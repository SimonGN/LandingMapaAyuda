webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Nav/Nav.js":
/*!*******************************!*\
  !*** ./components/Nav/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavStyle */ "./components/Nav/NavStyle.js");
/* harmony import */ var _styles_fontsStyles_paragraphBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/fontsStyles/paragraphBody */ "./styles/fontsStyles/paragraphBody.js");
/* harmony import */ var _styles_fontsStyles_paragraphHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/fontsStyles/paragraphHeader */ "./styles/fontsStyles/paragraphHeader.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_6__);








var changeLanguage = function changeLanguage(language, setLangauge) {
  _i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].changeLanguage(language);
  setLangauge(language);
};

var Nav = function Nav(props) {
  var t = props.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].language),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      language = _useState2[0],
      setLangauge = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      view = _useState4[0],
      setView = _useState4[1];

  var handleOpen = function handleOpen() {
    var value = !view;
    setView(value);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavStyle__WEBPACK_IMPORTED_MODULE_3__["NavStyle"], {
    view: view
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "mobile"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "symbol"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/index"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/svg/symbolMapaAyuda.svg"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    onClick: handleOpen,
    cursor: "true",
    src: "/static/svg/openMenu.svg"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "navColor"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "navMobile"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    cursor: "true",
    onClick: handleOpen,
    src: "/static/svg/closeMenu.svg"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "navMenuMobile"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "navMenu1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_paragraphHeader__WEBPACK_IMPORTED_MODULE_5__["default"], null, t("nav1"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_paragraphHeader__WEBPACK_IMPORTED_MODULE_5__["default"], null, t("nav2")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "navMenu2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", null, t("nav5"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_paragraphHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "16px",
    color: "#76991E"
  }, t("text")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_paragraphHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "16px",
    color: "#76991E"
  }, t("nav6")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/svg/logoMapaAyuda.svg"
  })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "desktop"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/index"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/svg/logoMapaAyuda.svg"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_paragraphBody__WEBPACK_IMPORTED_MODULE_4__["default"], null, t("nav1"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_paragraphBody__WEBPACK_IMPORTED_MODULE_4__["default"], null, t("nav2"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_paragraphBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "#F1A409"
  }, t("nav3"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_fontsStyles_paragraphBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "#76991E"
  }, t("nav4"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", null, t("nav5"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["withTranslation"])("nav")(Nav));

/***/ }),

/***/ "./styles/fontsStyles/paragraphHeader.js":
/*!***********************************************!*\
  !*** ./styles/fontsStyles/paragraphHeader.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-family: \"GT\u2013Medium\";\n    color: ", ";\n    font-style: normal;\n    font-weight: 500;\n    font-size: ", ";\n    line-height: 24px;\n    text-align: ", ";\n    letter-spacing: -0.01em;\n    \n\n    @media only screen and (min-width:415px) and (max-width:768px){\n\n    }\n    @media only screen and (min-width:769px) and (max-width:1024px){\n\n    }\n    @media only screen and (min-width:1025px) and (max-width:1440px){\n\n    }\n    @media only screen and (min-width:1441px){\n\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var paragraphHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject(), function (props) {
  return props.color ? props.color : '#000000';
}, function (props) {
  return props.size ? props.size : '20px';
}, function (props) {
  return props.align === 'center' ? 'center' : 'left';
});
/* harmony default export */ __webpack_exports__["default"] = (paragraphHeader);

/***/ })

})
//# sourceMappingURL=index.js.2aa310f7b9f52e927934.hot-update.js.map