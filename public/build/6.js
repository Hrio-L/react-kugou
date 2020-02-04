(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./public/src/pages/toplist/rank/index.js":
/*!************************************************!*\
  !*** ./public/src/pages/toplist/rank/index.js ***!
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
  var _ref$toplist$rank = _ref.toplist.rank,
      loading = _ref$toplist$rank.loading,
      page = _ref$toplist$rank.page,
      list = _ref$toplist$rank.list,
      banner = _ref$toplist$rank.banner,
      rankname = _ref$toplist$rank.rankname,
      time = _ref$toplist$rank.time,
      total = _ref$toplist$rank.total;
  return {
    loading: loading,
    page: page,
    list: list,
    banner: banner,
    rankname: rankname,
    time: time,
    total: total
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getList: function getList(payload) {
      dispatch({
        type: 'GET_RANK_LIST_REQUEST',
        payload: payload
      });
    },
    loadRank: function loadRank(payload) {
      dispatch({
        type: 'LOAD_RANK_LIST_REQUEST',
        payload: payload
      });
    },
    initRank: function initRank() {
      dispatch({
        type: 'INIT_RANK_LIST'
      });
    },
    showLoading: function showLoading(payload) {
      dispatch({
        type: 'CHANGE_RANK_LOADING_STATE',
        payload: payload
      });
    }
  };
};

var Rank = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps), Object(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_10__["immutableRenderDecorator"])(_class = _dec(_class = Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_13__["default"])(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Rank, _Component);

  function Rank() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Rank);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Rank)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentDidMount", function () {
      var _this$props = _this.props,
          page = _this$props.page,
          list = _this$props.list,
          getList = _this$props.getList,
          id = _this$props.match.params.id;

      if (id && !list.length) {
        getList({
          rankid: id,
          page: page
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentWillUnmount", function () {
      var initRank = _this.props.initRank;
      initRank();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "loadList", function () {
      var _this$props2 = _this.props,
          page = _this$props2.page,
          total = _this$props2.total,
          list = _this$props2.list,
          loadRank = _this$props2.loadRank,
          showLoading = _this$props2.showLoading,
          id = _this$props2.match.params.id;

      if (total > list.length) {
        showLoading(true);
        loadRank({
          rankid: id,
          page: page + 1
        });
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Rank, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          list = _this$props3.list,
          rankname = _this$props3.rankname,
          time = _this$props3.time,
          banner = _this$props3.banner,
          loading = _this$props3.loading,
          onSongClick = _this$props3.onSongClick,
          onDownload = _this$props3.onDownload,
          addPlayingList = _this$props3.addPlayingList;
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
        className: "rank"
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
        title: rankname,
        footText: time
      })));
    }
  }]);

  return Rank;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]), _temp)) || _class) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Rank);

/***/ })

}]);
//# sourceMappingURL=6.js.map