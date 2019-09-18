webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/note/viewChildComponents/NoteList.jsx":
/*!**************************************************************!*\
  !*** ./src/components/note/viewChildComponents/NoteList.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../localStorage */ "./src/localStorage.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_actionTasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions/actionTasks */ "./src/redux/actions/actionTasks.js");
/* harmony import */ var _redux_actions_actionMain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/actions/actionMain */ "./src/redux/actions/actionMain.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _DeleteNotes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./DeleteNotes */ "./src/components/note/viewChildComponents/DeleteNotes.jsx");
var _jsxFileName = "/home/alitaee/Project/Todo-list/src/components/note/viewChildComponents/NoteList.jsx";



 // Redux




 // Materail UI









 // Component



var NoteList = function NoteList(props) {
  var tasks = props.tasks,
      active = props.active;

  var handleActiveMain = function handleActiveMain(item) {
    props.activeMain('singleNote', item.title, item.content, item.date, item.id, item.done);
  };

  var handleToggle = function handleToggle(item) {
    if (item.done === false) {
      props.doneTask(true, item.id);
    } else {
      props.doneTask(false, item.id);
    }
  };

  var handleDeleteNote = function handleDeleteNote(id) {
    props.deleteTask(id);

    if (active.id == id || tasks.length === 1) {
      props.activeMain('create');
    }
  };

  var handleEditNote = function handleEditNote(item) {
    props.activeMain('edit', item.title, item.content, item.date, item.id, item.done);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-tasks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "note-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, tasks.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: item.id,
      dense: true,
      button: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__["default"], {
      edge: "start",
      onClick: function onClick() {
        return handleToggle(item);
      },
      checked: item.done === true,
      tabIndex: -1,
      disableRipple: true,
      inputProps: {
        'aria-labelledby': item.id
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      as: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onClick: function onClick() {
        return handleActiveMain(item);
      },
      className: item.done === true ? 'done' : '',
      id: item.id,
      primary: item.title,
      secondary: "".concat(item.date),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
      onClick: function onClick() {
        return handleDeleteNote(item.id);
      },
      edge: "end",
      "aria-label": "delete",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/edit?id=".concat(item.id),
      as: "".concat("", "/edit?id=").concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
      onClick: function onClick() {
        return handleEditNote(item);
      },
      edge: "end",
      "aria-label": "edit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_16___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    })))));
  })), tasks.some(function (item) {
    return item.done === true;
  }) === true && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteNotes__WEBPACK_IMPORTED_MODULE_17__["default"], {
    selectedNotes: tasks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }));
};

NoteList.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  tasks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  deleteTask: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  activeMain: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  doneTask: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteTask: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_actionTasks__WEBPACK_IMPORTED_MODULE_6__["deleteTask"], dispatch),
    activeMain: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_actionMain__WEBPACK_IMPORTED_MODULE_7__["activeMain"], dispatch),
    doneTask: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_actionTasks__WEBPACK_IMPORTED_MODULE_6__["doneTask"], dispatch)
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    active: state.mainReducer
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(NoteList));

/***/ })

})
//# sourceMappingURL=index.js.15991a2d5091c7fbd570.hot-update.js.map