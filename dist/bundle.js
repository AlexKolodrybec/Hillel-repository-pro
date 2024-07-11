/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("$(document).ready(function () {\n  var todoList = $('#todo-list');\n  var tasks = ['Task 1', 'Task 2', 'Task 3'];\n  function renderTasks() {\n    todoList.empty();\n    tasks.forEach(function (task, index) {\n      var listItem = $(\"<li class=\\\"list-group-item\\\" data-task=\\\"\".concat(task, \"\\\" data-toggle=\\\"modal\\\" data-target=\\\"#taskModal\\\">\").concat(task, \"</li>\"));\n      todoList.append(listItem);\n    });\n  }\n  todoList.on('click', 'li', function () {\n    var taskText = $(this).data('task');\n    $('#task-text').text(taskText);\n  });\n  renderTasks();\n});\n\n//# sourceURL=webpack://hillel-repository-pro/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;