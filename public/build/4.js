(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./public/src/pages/plist/detail/index.js":
/*!************************************************!*\
  !*** ./public/src/pages/plist/detail/index.js ***!
  \************************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-immutable-render-mixin */ "./node_modules/react-immutable-render-mixin/lib/index.js");
/* harmony import */ var react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_songs_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/songs-view */ "./public/src/components/songs-view/index.js");
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/scroll */ "./public/src/components/scroll/index.js");
/* harmony import */ var _common_basehandler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/basehandler */ "./public/src/common/basehandler/index.js");








var _dec, _class, _temp;









var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$plist$detail = _ref.plist.detail,
      list = _ref$plist$detail.list,
      banner = _ref$plist$detail.banner,
      specialname = _ref$plist$detail.specialname,
      intro = _ref$plist$detail.intro,
      loading = _ref$plist$detail.loading,
      total = _ref$plist$detail.total,
      page = _ref$plist$detail.page;
  return {
    list: list,
    banner: banner,
    specialname: specialname,
    intro: intro,
    loading: loading,
    total: total,
    page: page
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getDetail: function getDetail(payload) {
      dispatch({
        type: 'GET_PLIST_DETAIL_REQUEST',
        payload: payload
      });
    },
    loadDetail: function loadDetail(payload) {
      dispatch({
        type: 'LOAD_PLIST_DETAIL_REQUEST',
        payload: payload
      });
    },
    initDetail: function initDetail() {
      dispatch({
        type: 'INIT_PLIST_DETAIL'
      });
    },
    showLoading: function showLoading(payload) {
      dispatch({
        type: 'CHANGE_PLIST_DETAIL_LOADING_STATE',
        payload: payload
      });
    }
  };
};

var PlistDetail = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps), Object(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_10__["immutableRenderDecorator"])(_class = _dec(_class = Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_13__["default"])(_class = (_temp =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(PlistDetail, _PureComponent);

  function PlistDetail() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PlistDetail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PlistDetail)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentDidMount", function () {
      var _this$props = _this.props,
          page = _this$props.page,
          getDetail = _this$props.getDetail,
          list = _this$props.list,
          id = _this$props.match.params.id;

      if (id) {
        getDetail({
          plistid: id,
          page: page
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentWillUnmount", function () {
      var _this$props2 = _this.props,
          initDetail = _this$props2.initDetail,
          list = _this$props2.list;

      if (list.length) {
        _this.props.initDetail();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "loadList", function () {
      var _this$props3 = _this.props,
          page = _this$props3.page,
          total = _this$props3.total,
          list = _this$props3.list,
          showLoading = _this$props3.showLoading,
          loadDetail = _this$props3.loadDetail,
          id = _this$props3.match.params.id;

      if (total > list.length) {
        showLoading(true);
        loadDetail({
          plistid: id,
          page: page + 1
        });
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PlistDetail, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          list = _this$props4.list,
          specialname = _this$props4.specialname,
          banner = _this$props4.banner,
          intro = _this$props4.intro,
          loading = _this$props4.loading,
          onSongClick = _this$props4.onSongClick,
          addPlayingList = _this$props4.addPlayingList,
          onDownload = _this$props4.onDownload;
      var actions = [{
        name: '播放',
        key: 'play',
        onClick: function onClick(row, close) {
          onSongClick(row);
          close();
        }
      }, {
        name: '添加到歌单',
        key: 'add',
        onClick: function onClick(row, close) {
          addPlayingList({
            id: row.id,
            author: row.desc,
            name: row.name
          });
          _common_basehandler__WEBPACK_IMPORTED_MODULE_13__["toast"].show('添加成功');
          close();
        }
      }, {
        name: '分享',
        key: 'share',
        onClick: function onClick(row, close) {
          _common_basehandler__WEBPACK_IMPORTED_MODULE_13__["toast"].show('该功能暂时没开通');
        }
      }, {
        name: '下载',
        key: 'download',
        onClick: function onClick(row, close) {
          onDownload(row.id);
          close();
        }
      }];
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plist-detail"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_scroll__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          paddingBottom: 70
        },
        loading: loading,
        onBottom: this.loadList
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_songs_view__WEBPACK_IMPORTED_MODULE_11__["default"], {
        actions: actions,
        onSongClick: onSongClick,
        banner: banner,
        list: list,
        title: specialname,
        collapse: {
          header: specialname,
          content: intro
        }
      })));
    }
  }]);

  return PlistDetail;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]), _temp)) || _class) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (PlistDetail);

/***/ })

}]);
//# sourceMappingURL=4.js.map