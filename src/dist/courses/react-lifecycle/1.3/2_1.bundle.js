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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(226);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = react_7de69c5da675c4deed75;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 修改上一个例子计时器没有释放的bug

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

	    _this.state = {
	      key: 1
	    };
	    return _this;
	  }

	  _createClass(App, [{
	    key: '_refresh',
	    value: function _refresh() {

	      this.setState({
	        key: new Date().getTime()
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log("render() in App");
	      var key = this.state.key;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(Ticker, { key: key }),
	        _react2.default.createElement(
	          'button',
	          { onClick: this._refresh.bind(this) },
	          '\u5237\u65B0'
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	var Ticker = function (_Component2) {
	  _inherits(Ticker, _Component2);

	  function Ticker() {
	    _classCallCheck(this, Ticker);

	    var _this2 = _possibleConstructorReturn(this, (Ticker.__proto__ || Object.getPrototypeOf(Ticker)).call(this));

	    _this2.state = {
	      tick: 0
	    };
	    return _this2;
	  }

	  _createClass(Ticker, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this3 = this;

	      this.I = setInterval(function () {
	        console.log("tick...");
	        _this3.setState({ tick: _this3.state.tick + 1 });
	      }.bind(this), 1000);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      console.log("componentWillUnmount");
	      clearInterval(this.I);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var tick = this.state.tick;

	      return _react2.default.createElement(
	        'div',
	        null,
	        tick
	      );
	    }
	  }]);

	  return Ticker;
	}(_react.Component);

	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("app"));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(32);

/***/ }
/******/ ]);