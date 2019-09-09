webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/note/CreateNote.jsx":
/*!********************************************!*\
  !*** ./src/components/note/CreateNote.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_actionTasks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/actionTasks */ "./src/redux/actions/actionTasks.js");

var _jsxFileName = "/home/alitaee/Project/Todo-list/src/components/note/CreateNote.jsx";

 // Materail UI


 // Redux





var CreateNotes = function CreateNotes(props) {
  var titleNote = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var textTitle = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      taskName = _useState2[0],
      setTaskTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      taskContent = _useState4[0],
      setTaskContent = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([false]),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      taskNameRequired = _useState6[0],
      setError = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([false]),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      successCreate = _useState8[0],
      setMassage = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {}, []);

  var createNote = function createNote(event) {
    event.preventDefault();

    if (taskName === '' || taskName === undefined) {
      titleIsEmpty();
      return;
    }

    var newTask = {
      title: taskName,
      content: taskContent
    };
    props.addTask(newTask);
    clearForm();
  };

  var titleIsEmpty = function titleIsEmpty() {
    setError(true);
    setMassage(false);
    titleNote.current.focus();
  };

  var handleTaskName = function handleTaskName(e) {
    setTaskTitle(e.target.value);
  };

  var handleTaskContent = function handleTaskContent(e) {
    setTaskContent(e.target.value);
  };

  var clearForm = function clearForm() {
    setTaskTitle('');
    setTaskContent('');
    setError(false);
    setMassage(true);
    titleNote.current.focus();
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "create-note",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Add Note"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    noValidate: true,
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    required: true,
    label: "Note Title",
    classes: {
      root: 'note-titile'
    },
    variant: "filled",
    type: "text",
    id: "title-task",
    fullWidth: true,
    ref: textTitle,
    inputRef: titleNote,
    onChange: handleTaskName,
    error: taskNameRequired === true,
    value: taskName,
    name: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    multiline: true,
    label: "Note Content",
    classes: {
      root: 'note-desc'
    },
    variant: "filled",
    type: "text",
    id: "content-task",
    fullWidth: true,
    rows: 6,
    margin: "normal",
    onChange: handleTaskContent,
    value: taskContent,
    "aria-label": "note content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: createNote,
    type: "submit",
    variant: "contained",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Create Note")), successCreate === true && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "mobile success message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Note saved successfully."));
};

CreateNotes.propTypes = {
  addTask: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addTask: Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])(_redux_actions_actionTasks__WEBPACK_IMPORTED_MODULE_7__["addTask"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, mapDispatchToProps)(CreateNotes));

/***/ })

})
//# sourceMappingURL=index.js.ec65ca7dcd4509423b68.hot-update.js.map