(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/singer-classlist/singers/index.less":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/pages/singer-classlist/singers/index.less ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".singer-list .scroll {\n  padding-top: 5.625rem;\n}\n.singer-list .singer-classname {\n  background: white;\n  -webkit-box-shadow: 0 1.5Px 1.5Px 0 #f4f4f4;\n  box-shadow: 0 1.5Px 1.5Px 0 #f4f4f4;\n  height: 2.5rem;\n  color: #333;\n  font-size: 0.875rem;\n}\n.singer-list .singer-classname .icon-arrow-left {\n  color: silver;\n  font-size: 1.375rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./public/src/pages/singer-classlist/singers/index.js":
/*!************************************************************!*\
  !*** ./public/src/pages/singer-classlist/singers/index.js ***!
  \************************************************************/
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
/* harmony import */ var react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-immutable-render-mixin */ "./node_modules/react-immutable-render-mixin/lib/index.js");
/* harmony import */ var react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/card */ "./public/src/components/card/index.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/icon */ "./public/src/components/icon/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/header */ "./public/src/components/header/index.js");
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/scroll */ "./public/src/components/scroll/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./index.less */ "./public/src/pages/singer-classlist/singers/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_15__);








var _dec, _class, _temp;











var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$singerClasslist = _ref.singerClasslist,
      singerList = _ref$singerClasslist.singerList,
      classname = _ref$singerClasslist.classname,
      page = _ref$singerClasslist.page,
      loading = _ref$singerClasslist.loading,
      total = _ref$singerClasslist.total;
  return {
    singerList: singerList,
    classname: classname,
    page: page,
    loading: loading,
    total: total
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getList: function getList(payload) {
      dispatch({
        type: 'GET_SINGER_LIST_REQUEST',
        payload: payload
      });
    },
    loadSinger: function loadSinger(payload) {
      dispatch({
        type: 'LOAD_SINGER_LIST_REQUEST',
        payload: payload
      });
    },
    initSingerList: function initSingerList() {
      dispatch({
        type: 'INIT_SINGER_LIST'
      });
    },
    showLoading: function showLoading(payload) {
      dispatch({
        type: 'CHANGE_SINGER_LIST_LOADING',
        payload: payload
      });
    }
  };
};

var Singers = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps), Object(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_9__["immutableRenderDecorator"])(_class = _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Singers, _Component);

  function Singers() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Singers);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Singers)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentDidMount", function () {
      var _this$props = _this.props,
          getList = _this$props.getList,
          page = _this$props.page,
          singerList = _this$props.singerList,
          id = _this$props.match.params.id;

      if (id && !singerList.length) {
        getList({
          classid: id,
          page: page
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentWillUnmount", function () {
      var initSingerList = _this.props.initSingerList;
      initSingerList();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "toSingerSongs", function (id) {
      var history = _this.props.history;
      history.push("/singer/".concat(id));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "renderSingerList", function () {
      var singerList = _this.props.singerList;
      return singerList.map(function (d, i) {
        var id = d.singerid,
            title = d.singername,
            imgurl = d.imgurl;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_card__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onClick: _this.toSingerSongs.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), id),
          key: i,
          source: {
            id: id,
            title: title,
            avatar: imgurl.replace(/{size}/g, 200)
          },
          extra: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
            style: {
              color: 'silver',
              margin: 5,
              fontSize: 18
            },
            type: "arrow-right"
          })
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleBack", function () {
      var history = _this.props.history;
      history.go(-1);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "loadList", function () {
      var _this$props2 = _this.props,
          loadSinger = _this$props2.loadSinger,
          page = _this$props2.page,
          total = _this$props2.total,
          singerList = _this$props2.singerList,
          showLoading = _this$props2.showLoading,
          id = _this$props2.match.params.id;

      if (total > singerList.length) {
        showLoading(true);
        loadSinger({
          classid: id,
          page: page + 1
        });
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Singers, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          singerList = _this$props3.singerList,
          classname = _this$props3.classname,
          loading = _this$props3.loading;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "singer-list"
      }, !singerList.length && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          display: 'block',
          margin: '55px auto',
          fontSize: 22,
          color: 'silver'
        },
        type: "loading"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_scroll__WEBPACK_IMPORTED_MODULE_14__["default"], {
        style: {
          paddingBottom: 70
        },
        loading: loading,
        onBottom: this.loadList
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        fixed: true,
        logo: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: "http://m.kugou.com/v3/static/images/index/logo.png",
          alt: "logo"
        }),
        extra: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
          to: "/search"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
          style: {
            fontSize: 18,
            color: 'white'
          },
          type: "search"
        }))
      }), classname && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "singer-classname",
        fixed: true,
        style: {
          top: 50
        },
        logo: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
          onClick: this.handleBack,
          type: "arrow-left"
        })
      }, classname), this.renderSingerList()));
    }
  }]);

  return Singers;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]), _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Singers);

/***/ }),

/***/ "./public/src/pages/singer-classlist/singers/index.less":
/*!**************************************************************!*\
  !*** ./public/src/pages/singer-classlist/singers/index.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/singer-classlist/singers/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/singer-classlist/singers/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/singer-classlist/singers/index.less");

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
//# sourceMappingURL=3.js.map