webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/redux/actions/actionTasks.js":
/*!******************************************!*\
  !*** ./src/redux/actions/actionTasks.js ***!
  \******************************************/
/*! exports provided: initial_localStorage, addTask, deleteTask, deleteTasks, editTask, doneTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initial_localStorage", function() { return initial_localStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTask", function() { return addTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTask", function() { return deleteTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTasks", function() { return deleteTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editTask", function() { return editTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doneTask", function() { return doneTask; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/redux/actions/actionTypes.js");

var initial_localStorage = function initial_localStorage(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["INITIAL_LOCALSTORAGE"],
    payload: {
      data: data
    }
  };
};
var addTask = function addTask(newTask) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_TASK"],
    payload: {
      newTask: newTask
    }
  };
};
var deleteTask = function deleteTask(id) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["DELETE_TASK"],
    payload: {
      id: id
    }
  };
};
var deleteTasks = function deleteTasks(ids) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["DELETE_TASKS"],
    payload: {
      ids: ids
    }
  };
};
var editTask = function editTask(item) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["EDIT_TASK"],
    payload: {
      item: item
    }
  };
};
var doneTask = function doneTask(isDone, id) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["DONE_TASK"],
    payload: {
      isDone: isDone,
      id: id
    }
  };
};

/***/ })

})
//# sourceMappingURL=index.js.8b67b42d4b42b865b6b7.hot-update.js.map