(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/menu/index.less":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/menu/index.less ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu {\n  width: 100%;\n  background: white;\n  -webkit-box-shadow: 0 0.09375rem 0.09375rem 0 #f4f4f4;\n  box-shadow: 0 0.09375rem 0.09375rem 0 #f4f4f4;\n}\n.menu-wrap {\n  display: table;\n  width: 100%;\n}\n.menu-item {\n  display: table-cell;\n  width: 1%;\n  text-align: center;\n}\n.menu-item-active {\n  border-bottom: 0.1875rem solid #26a2ff;\n  color: #26a2ff;\n  font-weight: 600;\n}\n.menu-link {\n  display: block;\n  color: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  height: 100%;\n  border-bottom: 0.1875rem solid rgba(255, 255, 255, 0);\n  padding: 0.625rem;\n}\n.menu-link-active {\n  border-bottom: 0.1875rem solid #26a2ff;\n  color: #26a2ff;\n  font-weight: 600;\n}\n", ""]);

// exports


/***/ }),

/***/ "./public/src/components/cache-component/index.js":
/*!********************************************************!*\
  !*** ./public/src/components/cache-component/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);








var CacheComponent =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CacheComponent, _PureComponent);

  function CacheComponent(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CacheComponent);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CacheComponent).call(this, props));
    _this.state = {
      component: props.component
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CacheComponent, [{
    key: "render",
    value: function render() {
      var C = this.state.component;
      var _this$props = this.props,
          state = _this$props.state,
          render = _this$props.render;
      return render ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(C, state) : null;
    }
  }]);

  return CacheComponent;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

CacheComponent.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func]),
  render: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  state: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CacheComponent);

/***/ }),

/***/ "./public/src/components/menu/index.js":
/*!*********************************************!*\
  !*** ./public/src/components/menu/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.less */ "./public/src/components/menu/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_10__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Menu =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Menu, _PureComponent);

  function Menu() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "renderChild", function () {
      var _this$props = _this.props,
          children = _this$props.children,
          classPrefixer = _this$props.classPrefixer,
          defaultSelected = _this$props.defaultSelected;
      return react__WEBPACK_IMPORTED_MODULE_7__["Children"].map(children, function (child, i) {
        var _classNames;

        var classes = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_classNames, "".concat(classPrefixer, "-item"), true), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_classNames, "".concat(classPrefixer, "-item-active"), defaultSelected === child.key), _classNames));
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: i,
          className: classes
        }, child);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "initStyle", function () {
      var _this$props2 = _this.props,
          fixed = _this$props2.fixed,
          style = _this$props2.style;
      var fixedStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 99
      };
      return fixed ? _objectSpread({}, fixedStyle, {}, style) : style;
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Menu, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          classPrefixer = _this$props3.classPrefixer,
          className = _this$props3.className;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_8___default()(classPrefixer, className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: this.initStyle(),
        className: classes
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "".concat(classPrefixer, "-wrap")
      }, this.renderChild()));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Menu, "defaultProps", {
  classPrefixer: 'menu',
  defaultSelected: ''
});

Menu.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.element]).isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./public/src/components/menu/index.less":
/*!***********************************************!*\
  !*** ./public/src/components/menu/index.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/menu/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/menu/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/menu/index.less");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./public/src/pages/main/index.js":
/*!****************************************!*\
  !*** ./public/src/pages/main/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-immutable-render-mixin */ "./node_modules/react-immutable-render-mixin/lib/index.js");
/* harmony import */ var react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/icon */ "./public/src/components/icon/index.js");
/* harmony import */ var _components_authorized__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/authorized */ "./public/src/components/authorized/index.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/menu */ "./public/src/components/menu/index.js");
/* harmony import */ var _components_player__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/player */ "./public/src/components/player/index.js");
/* harmony import */ var _components_swiper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/swiper */ "./public/src/components/swiper/index.js");
/* harmony import */ var _components_cache_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/cache-component */ "./public/src/components/cache-component/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/header */ "./public/src/components/header/index.js");








var _dec, _class, _temp;













var mapStateToProps = function mapStateToProps(_ref) {
  var menus = _ref.menus;
  return {
    menus: menus
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    menuChange: function menuChange(path) {
      dispatch({
        type: 'UPDATE_MENU_SELECTED',
        selected: path
      });
    }
  };
};

var App = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps), Object(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_10__["immutableRenderDecorator"])(_class = _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(App, _Component);

  function App(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentDidMount", function () {
      var location = _this.props.location;

      _this.selectedChange(location.pathname);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "selectedChange", function (path) {
      var _this$props = _this.props,
          selected = _this$props.menus.selected,
          menuChange = _this$props.menuChange;

      if (!selected.includes(path)) {
        menuChange(path);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleResize", function () {
      var w = document.documentElement.getBoundingClientRect().width;
      document.documentElement.style.fontSize = w / 25 + 'px';
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "renderMenu", function () {
      var _this$props2 = _this.props,
          data = _this$props2.menus.data,
          location = _this$props2.location;
      return data.map(function (d, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
          onClick: _this.selectedChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), d.path),
          className: "menu-link",
          activeClassName: "menu-link-active",
          to: d.path,
          key: d.key
        }, d.name);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "renderContent", function () {
      var _this$props3 = _this.props,
          routes = _this$props3.routes,
          selected = _this$props3.menus.selected;
      var isTop = _this.state.isTop;
      return routes.map(function (d, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_cache_component__WEBPACK_IMPORTED_MODULE_16__["default"], {
          key: d.path,
          state: {
            isTop: isTop !== d.path
          },
          render: selected.includes(d.path),
          component: d.component
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onChange", function (key) {
      var pathname = _this.props.location.pathname;

      if (pathname !== key) {
        _this.setState({
          isTop: key
        });

        _this.selectedChange(key);

        _this.props.history.push(key);
      }
    });

    _this.state = {
      isTop: ''
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "render",
    value: function render() {
      var location = this.props.location;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "main"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_17__["default"], {
        fixed: true,
        logo: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: "http://m.kugou.com/v3/static/images/index/logo.png",
          alt: "logo"
        }),
        extra: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
          to: "/search"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
          style: {
            fontSize: 18,
            color: 'white'
          },
          type: "search"
        }))
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_menu__WEBPACK_IMPORTED_MODULE_13__["default"], {
        fixed: true,
        style: {
          top: '3.125rem'
        }
      }, this.renderMenu()), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_swiper__WEBPACK_IMPORTED_MODULE_15__["default"], {
        timeout: 200,
        overflowScale: .25,
        onChange: this.onChange,
        defaultSelected: location.pathname
      }, this.renderContent()));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]), _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

}]);
//# sourceMappingURL=2.js.map