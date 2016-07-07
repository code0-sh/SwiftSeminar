/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var HelloReact = React.createClass({
		displayName: "HelloReact",

		render: function render() {
			return React.createElement(
				"div",
				{ className: "container" },
				this.props.name
			);
		}
	});

	React.render(React.createElement(HelloReact, { name: "" }), document.getElementById("react"));

	/**
	 * codeのfadeIn, fadeOut
	 */
	var playground = document.querySelector(".playground");
	var answerBtns = document.querySelectorAll(".answerBtn");

	playground.addEventListener("click", function (ev) {
		var target = ev.target;
		if (target.classList.contains("step-num")) {
			var elitem = target.parentElement.nextSibling.nextSibling;
			var elmark = target.childNodes[0];

			if (elitem.classList.contains("is-open")) {
				elitem.classList.remove("is-open");
				elmark.classList.remove("fa-minus-square");
				elmark.classList.add("fa-plus-square");
			} else {
				elitem.classList.add("is-open");
				elmark.classList.remove("fa-plus-square");
				elmark.classList.add("fa-minus-square");
			}
		}
	});

	for (var i = 0; i < answerBtns.length; i++) {
		answerBtns[i].addEventListener("click", function (ev) {
			var target = ev.target.nextSibling.nextSibling;
			if (target.classList.contains("hidden")) {
				target.classList.remove("hidden");
			} else {
				target.classList.add("hidden");
			}
		});
	};

/***/ }
/******/ ]);