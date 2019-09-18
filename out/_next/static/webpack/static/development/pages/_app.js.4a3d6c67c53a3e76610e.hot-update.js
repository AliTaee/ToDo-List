webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/redux/reducers/tasksReducer.js":
/*!********************************************!*\
  !*** ./src/redux/reducers/tasksReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tasksReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/redux/actions/actionTypes.js");





var shortid = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");

var tasks = [];
function tasksReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : tasks;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["INITIAL_LOCALSTORAGE"]:
      {
        console.log(action.payload.data);
        return state;
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["ADD_TASK"]:
      {
        var taskWidthData = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, action.payload.newTask, {
          date: new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/'),
          id: shortid.generate(),
          done: false
        });

        return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state), [taskWidthData]);
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["DELETE_TASK"]:
      {
        return state.filter(function (taskItem) {
          return taskItem.id !== action.payload.id;
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["DELETE_TASKS"]:
      {
        var deleteNotes = state;

        var _loop = function _loop(i) {
          deleteNotes = deleteNotes.filter(function (item) {
            return item.id !== action.payload.ids[i];
          });
        };

        for (var i = 0; i < action.payload.ids.length; i++) {
          _loop(i);
        }

        return deleteNotes;
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["EDIT_TASK"]:
      {
        var editTask = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state);

        editTask = editTask.map(function (item) {
          if (item.id === action.payload.item.id) {
            item = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
              id: action.payload.item.id,
              title: action.payload.item.title,
              content: action.payload.item.content,
              done: action.payload.item.done,
              date: new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/')
            });
          }

          return item;
        });
        return editTask;
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["DONE_TASK"]:
      {
        var doneTask = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state);

        doneTask = doneTask.map(function (item) {
          if (item.id === action.payload.id) {
            item = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
              done: action.payload.isDone
            });
          }

          return item;
        });
        return doneTask;
      }

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.4a3d6c67c53a3e76610e.hot-update.js.map