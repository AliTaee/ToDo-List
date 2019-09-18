webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/localStorage */ "./src/localStorage.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _src_components_layout_Head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/layout/Head */ "./src/components/layout/Head.jsx");
/* harmony import */ var _src_components_navigation_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/navigation/Menu */ "./src/components/navigation/Menu.jsx");
/* harmony import */ var _src_components_note_CreateNote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/note/CreateNote */ "./src/components/note/CreateNote.jsx");
/* harmony import */ var _src_components_note_ViewNotes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/note/ViewNotes */ "./src/components/note/ViewNotes.jsx");
/* harmony import */ var _src_components_note_ViewNote__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/note/ViewNote */ "./src/components/note/ViewNote.jsx");
/* harmony import */ var _src_styles_style_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _src_styles_style_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_styles_style_scss__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/home/alitaee/Project/Todo-list/pages/index.jsx";


 // Redux

 // Styles


 // Components





 // Styles



var Index = function Index(props) {
  var active = props.active;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var localStorage = Object(_src_localStorage__WEBPACK_IMPORTED_MODULE_2__["loadState"])();
    console.log(localStorage);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_layout_Head__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "sidebar",
    item: true,
    xs: 12,
    sm: 12,
    md: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_navigation_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_note_ViewNotes__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "main",
    item: true,
    xs: 12,
    sm: 12,
    md: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, active.name === 'create' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_note_CreateNote__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activeData: active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_note_ViewNote__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })))));
};

Index.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    active: state.mainReducer
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, null)(Index));

/***/ })

})
//# sourceMappingURL=index.js.860bb495d61f0316a1c1.hot-update.js.map