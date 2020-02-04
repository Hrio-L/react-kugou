(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/collapse/index.less":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/collapse/index.less ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".collapse {\n  width: 100%;\n  -webkit-box-shadow: 0 1.5Px 1.5Px 0 #f4f4f4;\n  box-shadow: 0 1.5Px 1.5Px 0 #f4f4f4;\n  height: 2.1875rem;\n  overflow: hidden;\n  font-size: 0.875rem;\n  line-height: 2.1875rem;\n  padding: 0.3125rem;\n  position: relative;\n}\n.collapse-head {\n  width: 100%;\n  font-size: 0.75rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 2.1875rem;\n}\n.collapse-head .icon {\n  color: silver;\n  font-size: 1.125rem;\n  margin-right: 1.25rem;\n}\n.collapse-content {\n  width: 100%;\n}\n.collapse-active {\n  height: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/songs-view/index.less":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/songs-view/index.less ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".songs-view {\n  padding-top: 3.125rem;\n}\n.songs-view .songs-banner {\n  height: 12.5rem;\n  overflow: hidden;\n  position: relative;\n}\n.songs-view .songs-banner .banner-head {\n  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));\n  height: 2.5rem;\n}\n.songs-view .songs-banner .banner-foot {\n  background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));\n  height: 2.5rem;\n}\n.songs-view .songs-banner img {\n  width: 100%;\n  margin-top: -3.125rem;\n}\n@media screen and (min-width: 360px) {\n  .songs-view .songs-banner img {\n    margin-top: -4.0625rem;\n  }\n}\n@media screen and (min-width: 375px) {\n  .songs-view .songs-banner img {\n    margin-top: -4.6875rem;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./public/src/components/collapse/index.js":
/*!*************************************************!*\
  !*** ./public/src/components/collapse/index.js ***!
  \*************************************************/
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
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icon */ "./public/src/components/icon/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.less */ "./public/src/components/collapse/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_11__);













var Collapse =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Collapse, _PureComponent);

  function Collapse(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Collapse);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Collapse).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleClick", function () {
      _this.setState({
        visible: !_this.state.visible
      });
    });

    _this.state = {
      visible: props.open
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Collapse, [{
    key: "render",
    value: function render() {
      var _classNames;

      var visible = this.state.visible;
      var _this$props = this.props,
          classPrefixer = _this$props.classPrefixer,
          className = _this$props.className,
          header = _this$props.header,
          children = _this$props.children;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_classNames, "".concat(classPrefixer), true), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_classNames, "".concat(className), className), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_classNames, "".concat(classPrefixer, "-active"), visible), _classNames));
      var iconType = visible ? 'arrow-up' : 'arrow-down';
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classes
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(classPrefixer, "-head")
      }, header, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: this.handleClick,
        type: iconType
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(classPrefixer, "-content")
      }, children));
    }
  }]);

  return Collapse;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Collapse, "defaultProps", {
  classPrefixer: 'collapse',
  open: false
});

Collapse.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  header: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.element]).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.element]),
  open: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Collapse);

/***/ }),

/***/ "./public/src/components/collapse/index.less":
/*!***************************************************!*\
  !*** ./public/src/components/collapse/index.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/collapse/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/collapse/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/collapse/index.less");

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

/***/ "./public/src/components/songs-view/index.js":
/*!***************************************************!*\
  !*** ./public/src/components/songs-view/index.js ***!
  \***************************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icon */ "./public/src/components/icon/index.js");
/* harmony import */ var _songslist__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../songslist */ "./public/src/components/songslist/index.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../header */ "./public/src/components/header/index.js");
/* harmony import */ var _action_sheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../action-sheet */ "./public/src/components/action-sheet/index.js");
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../collapse */ "./public/src/components/collapse/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index.less */ "./public/src/components/songs-view/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_16__);


















var SongsView =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SongsView, _PureComponent);

  function SongsView() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SongsView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SongsView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getSongs", function () {
      var list = _this.props.list;
      return list.map(function (d, i) {
        var info = d.filename.trim().split(' - ');
        var author = info[0];
        var name = info[1];
        var id = d.hash;
        return {
          name: name,
          author: author,
          id: id
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleBack", function () {
      var history = _this.props.history;
      history.go(-1);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SongsView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          banner = _this$props.banner,
          title = _this$props.title,
          footText = _this$props.footText,
          className = _this$props.className,
          classPrefixer = _this$props.classPrefixer,
          list = _this$props.list,
          collapse = _this$props.collapse,
          onSongClick = _this$props.onSongClick,
          actions = _this$props.actions;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_10___default()("".concat(classPrefixer, "-view"), className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classes
      }, !list.length && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          display: 'block',
          margin: '10px auto',
          fontSize: 22,
          color: 'silver'
        },
        type: "loading"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        fixed: true,
        logo: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: "http://m.kugou.com/v3/static/images/index/logo.png",
          alt: "logo"
        }),
        extra: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
          to: "/search"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
          style: {
            fontSize: 18,
            color: 'white'
          },
          type: "search"
        }))
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(classPrefixer, "-banner")
      }, title && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        logo: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onClick: this.handleBack,
          style: {
            fontSize: 22
          },
          type: "arrow-left"
        }),
        fixed: true,
        style: {
          top: 50
        },
        className: "banner-head"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, title)), banner && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: banner,
        alt: "banner"
      }), footText && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        logo: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "\u66F4\u65B0\u65F6\u95F4\uFF1A", footText),
        style: {
          position: 'absolute',
          bottom: 0,
          top: 'none',
          zIndex: 0
        },
        className: "banner-foot"
      })), list.length && collapse ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_collapse__WEBPACK_IMPORTED_MODULE_15__["default"], {
        header: collapse.header
      }, collapse.content) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_songslist__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: onSongClick,
        songs: this.getSongs(),
        actions: actions,
        actionComponent: _action_sheet__WEBPACK_IMPORTED_MODULE_14__["default"]
      }));
    }
  }]);

  return SongsView;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(SongsView, "defaultProps", {
  classPrefixer: 'songs'
});

SongsView.propTypes = {
  onSongClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  list: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  footText: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  banner: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  collapse: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    header: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.element]),
    content: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.element])
  }),
  actions: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(SongsView));

/***/ }),

/***/ "./public/src/components/songs-view/index.less":
/*!*****************************************************!*\
  !*** ./public/src/components/songs-view/index.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/songs-view/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/songs-view/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/songs-view/index.less");

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

/***/ })

}]);
//# sourceMappingURL=0.js.map