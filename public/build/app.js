(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/base.less":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/base.less ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  text-decoration: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n*::-webkit-scrollbar {\n  display: none;\n}\n@-webkit-keyframes vertical-fade {\n  0% {\n    opacity: 0.1;\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%);\n  }\n}\n@keyframes vertical-fade {\n  0% {\n    opacity: 0.1;\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%);\n  }\n}\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes opacity {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\nspan {\n  font-size: 0.75rem;\n}\n.root,\n.app {\n  height: 100%;\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/action-sheet/index.less":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/action-sheet/index.less ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".action-sheet {\n  text-align: center;\n  padding: 0 1.25rem;\n}\n.action-sheet .action-list {\n  -webkit-animation: vertical-fade 0.3s;\n  animation: vertical-fade 0.3s;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n}\n.action-sheet .action-list .action-info {\n  width: 100%;\n  background: white;\n  text-align: left;\n  padding: 0.5rem 0.9375rem;\n  border-bottom: 0.01em solid silver;\n}\n.action-sheet .action-list .action-info .name {\n  font-size: 0.875rem;\n  font-weight: 400;\n}\n.action-sheet .action-list .action-info .desc {\n  font-size: 0.75rem;\n  color: silver;\n}\n.action-sheet .action-list .action-wrap {\n  background: white;\n  width: 100%;\n}\n.action-sheet .action-list .action-wrap .action-item {\n  padding: 0.9375rem;\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.9);\n  border-bottom: 0.01em solid silver;\n}\n.action-sheet .action-list .action-cancel-mask {\n  background: #ddd;\n  height: 0.375rem;\n  width: 100%;\n  display: block;\n}\n.action-sheet .action-list .action-cancel {\n  padding: 0.9375rem;\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.9);\n  background: white;\n}\n.action-sheet-active {\n  opacity: 1;\n  visibility: visible;\n}\n.action-sheet-active .action-list {\n  -webkit-transform: translateY(0%);\n  -ms-transform: translateY(0%);\n  transform: translateY(0%);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/card/index.less":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/card/index.less ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  width: 100%;\n}\n.card .card-item {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 0.625rem 0.9375rem;\n  border-bottom: 0.01em solid silver;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.card .card-item .avatar {\n  width: 3.75rem;\n  height: 3.75rem;\n  margin-right: 0.9375rem;\n}\n.card .card-item .info {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  line-height: 1.5;\n  overflow: hidden;\n}\n.card .card-item .info .title {\n  font-weight: 400;\n  font-size: 0.9375rem;\n}\n.card .card-item .info span {\n  font-size: 0.75rem;\n  color: #999;\n  height: 1.25rem;\n  display: block;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  width: 13.4375rem;\n  overflow: hidden;\n  white-space: nowrap;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/header/index.less":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/header/index.less ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  height: 3.125rem;\n  padding: 0.625rem;\n  background: #2CA2F9;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  color: white;\n  width: 100%;\n  z-index: 66;\n}\n.header-logo {\n  height: 100%;\n}\n.header-logo img {\n  height: 100%;\n}\n.header-center {\n  color: currentColor;\n}\n.header .icon-search {\n  margin: 0 0.625rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/icon/index.less":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/icon/index.less ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon-loading {\n  -webkit-animation: rotate 0.8s infinite linear;\n  animation: rotate 0.8s infinite linear;\n  display: inline-block;\n  color: currentColor;\n  width: 1em;\n  height: 1em;\n  font-size: 2.25rem;\n  position: relative;\n}\n.icon-loading:after {\n  display: inline-block;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  content: '';\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 0.15em;\n  border-color: currentColor currentColor currentColor transparent;\n}\n.icon-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 3Px;\n  height: 3Px;\n  background: currentColor;\n  font-size: 0.875rem;\n  border-radius: 50%;\n}\n.icon-ellipsis:before,\n.icon-ellipsis:after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  border-radius: 50%;\n  top: 0;\n  background: inherit;\n  width: 100%;\n  height: 100%;\n}\n.icon-ellipsis:before {\n  left: 0.5em;\n}\n.icon-ellipsis:after {\n  left: 1em;\n}\n.icon-search {\n  position: relative;\n  display: inline-block;\n  color: currentColor;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  border: 0.1em solid currentColor;\n}\n.icon-search:after {\n  position: absolute;\n  left: 80%;\n  top: 100%;\n  display: inline-block;\n  content: '';\n  width: 0.5em;\n  height: 0.1em;\n  border-radius: 20Px;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n  background: currentColor;\n}\n.icon-play {\n  display: inline-block;\n  color: currentColor;\n  width: 2em;\n  height: 2em;\n  border: 0.05em solid currentColor;\n  border-radius: 50%;\n  position: relative;\n}\n.icon-play:after {\n  position: absolute;\n  content: '';\n  display: inline-block;\n  border-width: 0.5em 0.5em 0.5em;\n  left: 40%;\n  top: 25%;\n  border-style: solid;\n  border-color: transparent transparent transparent currentColor;\n}\n.icon-pause {\n  display: inline-block;\n  color: currentColor;\n  width: 2em;\n  height: 2em;\n  border: 0.05em solid currentColor;\n  border-radius: 50%;\n  position: relative;\n}\n.icon-pause:before,\n.icon-pause:after {\n  display: inline-block;\n  content: '';\n  position: absolute;\n  width: 0.2em;\n  height: 0.8em;\n  background: currentColor;\n  border-radius: 20Px;\n  left: 30%;\n  top: 30%;\n}\n.icon-pause:after {\n  left: 60%;\n}\n.icon-next,\n.icon-prev {\n  display: inline-block;\n  position: relative;\n  width: 2em;\n  height: 2em;\n  color: currentColor;\n  border: 0.05em solid currentColor;\n  border-radius: 50%;\n}\n.icon-next:before,\n.icon-prev:before {\n  display: inline-block;\n  content: '';\n  position: absolute;\n  width: 0.2em;\n  height: 0.8em;\n  background: currentColor;\n  border-radius: 20Px;\n  left: 30%;\n  top: 30%;\n}\n.icon-next:after,\n.icon-prev:after {\n  position: absolute;\n  content: '';\n  display: inline-block;\n  border-width: 0.5em 0.5em 0.5em 0;\n  left: 42%;\n  top: 25%;\n  border-style: solid;\n  border-color: transparent currentColor transparent transparent;\n}\n.icon-next:before {\n  left: 60%;\n}\n.icon-next:after {\n  left: 30%;\n  border-width: 0.5em 0 0.5em 0.5em;\n  border-color: transparent currentColor transparent;\n}\n.icon-arrow-left,\n.icon-arrow-right,\n.icon-arrow-up,\n.icon-arrow-down {\n  vertical-align: middle;\n  display: inline-block;\n  color: currentColor;\n  position: relative;\n  height: 0.4em;\n}\n.icon-arrow-left:before,\n.icon-arrow-right:before,\n.icon-arrow-up:before,\n.icon-arrow-down:before,\n.icon-arrow-left:after,\n.icon-arrow-right:after,\n.icon-arrow-up:after,\n.icon-arrow-down:after {\n  content: '';\n  position: absolute;\n  display: inline-block;\n  width: 0.5em;\n  height: 0.15em;\n  background: currentColor;\n  vertical-align: middle;\n}\n.icon-arrow-left:before {\n  -webkit-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n.icon-arrow-left:after {\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n  top: 0.25em;\n}\n.icon-arrow-right:before {\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.icon-arrow-right:after {\n  -webkit-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  top: 0.25em;\n}\n.icon-arrow-down:before {\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.icon-arrow-down:after {\n  -webkit-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  left: 0.25em;\n}\n.icon-arrow-up:before {\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n  left: 0.25em;\n}\n.icon-arrow-up:after {\n  -webkit-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n.icon-clock {\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  position: relative;\n  border: 0.2em solid currentColor;\n  border-radius: 50%;\n}\n.icon-clock:before,\n.icon-clock:after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  width: 0.6em;\n  height: 0.2em;\n  background: currentColor;\n  left: 25%;\n  top: 20%;\n}\n.icon-clock:before {\n  width: 0.8em;\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.icon-clock:after {\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n  top: 54%;\n  left: 43%;\n}\n.icon-close {\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  position: relative;\n  color: currentColor;\n}\n.icon-close:before,\n.icon-close:after {\n  display: inline-block;\n  content: '';\n  position: absolute;\n  width: 1em;\n  height: 0.1em;\n  background: currentColor;\n  left: 25%;\n  top: 45%;\n}\n.icon-close:before {\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.icon-close:after {\n  -webkit-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n.icon-headphone {\n  display: inline-block;\n  vertical-align: middle;\n  width: 1.5em;\n  height: 1.25em;\n  border-radius: 1.7em / 1.7em 1.7em 16Px 16Px;\n  margin: 0.1em 0.1em 0.4em;\n  border: 0.2em solid;\n  border-bottom-color: transparent;\n  position: relative;\n}\n.icon-headphone:before {\n  content: '';\n  position: absolute;\n  width: 0.35em;\n  height: 0.5em;\n  left: -0.12em;\n  bottom: -0.2em;\n  border-radius: 0.4em;\n  -webkit-box-shadow: inset 0 0 0 1.7em, 1em 0 0 0;\n  box-shadow: inset 0 0 0 1.7em, 1em 0 0 0;\n  pointer-events: none;\n}\n.icon-play-menu {\n  display: inline-block;\n  color: currentColor;\n  text-align: left;\n  width: 1.5em;\n  height: 1em;\n  border-width: 0.2em 0 0.2em 0.6em;\n  border-style: solid;\n  border-color: transparent;\n  -webkit-box-shadow: 0 -0.2em, 0 0.2em, inset 0 0.2em, inset 0 -0.2em;\n  box-shadow: 0 -0.2em, 0 0.2em, inset 0 0.2em, inset 0 -0.2em;\n  margin: 0.45em 0.35em;\n  position: relative;\n}\n.icon-play-menu:before {\n  content: '';\n  position: absolute;\n  left: -0.6em;\n  top: -0.2em;\n  border: 0.5em solid;\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n  border-right-width: 0;\n}\n.icon-retweet,\n.icon-retweet-black {\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  background-image: url(" + escape(__webpack_require__(/*! ./assets/retweet.png */ "./public/src/components/icon/assets/retweet.png")) + ");\n  background-size: cover;\n}\n.icon-retweet-black {\n  background-image: url(" + escape(__webpack_require__(/*! ./assets/retweet_black.png */ "./public/src/components/icon/assets/retweet_black.png")) + ");\n}\n.icon-random,\n.icon-random-black {\n  display: inline-block;\n  width: 1.8em;\n  height: 1.8em;\n  background-image: url(" + escape(__webpack_require__(/*! ./assets/random.png */ "./public/src/components/icon/assets/random.png")) + ");\n  background-size: cover;\n}\n.icon-random-black {\n  background-image: url(" + escape(__webpack_require__(/*! ./assets/random_black.png */ "./public/src/components/icon/assets/random_black.png")) + ");\n}\n.icon-loop-one,\n.icon-loop-one-black {\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  background-image: url(" + escape(__webpack_require__(/*! ./assets/loop_one.png */ "./public/src/components/icon/assets/loop_one.png")) + ");\n  background-size: cover;\n}\n.icon-loop-one-black {\n  background-image: url(" + escape(__webpack_require__(/*! ./assets/loop_one_black.png */ "./public/src/components/icon/assets/loop_one_black.png")) + ");\n}\n.icon-trash {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  border-radius: 0 0 3Px 3Px;\n  border-top: none;\n  margin: 0.4 0.5em 0.3em 0.3em;\n  border: 0.2em solid currentColor;\n  border-top: 0;\n  position: relative;\n}\n.icon-trash:before {\n  content: '';\n  position: absolute;\n  width: 0.4em;\n  height: 0.1em;\n  top: -0.3em;\n  left: 0.1em;\n  -webkit-box-shadow: inset 0 0 0 0.5em, -0.4em 0.1em 0 0, -0.3em 0.1em 0 0, 0 0.1em 0 0, 0.3em 0.1em 0 0, 0.4em 0.1em 0 0;\n  box-shadow: inset 0 0 0 0.5em, -0.4em 0.1em 0 0, -0.3em 0.1em 0 0, 0 0.1em 0 0, 0.3em 0.1em 0 0, 0.4em 0.1em 0 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/lyrics/index.less":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/lyrics/index.less ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lyrics {\n  position: relative;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n}\n.lyrics-list {\n  font-size: 0.875rem;\n  -webkit-transition: all 0.1s;\n  -o-transition: all 0.1s;\n  transition: all 0.1s;\n  color: silver;\n}\n.lyrics-list .current {\n  font-size: 1rem;\n  color: white;\n}\n.lyrics-item {\n  height: 1.875rem;\n  line-height: 1.875rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/mask/index.less":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/mask/index.less ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mask {\n  width: 100%;\n  height: 100%;\n  z-index: 102;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-animation: opcity 0.3s;\n  animation: opcity 0.3s;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/my-songs/index.less":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/my-songs/index.less ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-songs {\n  overflow: auto;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 0.625rem;\n  border-top-right-radius: 0.625rem;\n  background: white;\n  -webkit-animation: vertical-fade 0.3s;\n  animation: vertical-fade 0.3s;\n}\n.my-songs-header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  height: 3.125rem;\n  z-index: 100;\n  background: white;\n  border-top-left-radius: 0.625rem;\n  border-top-right-radius: 0.625rem;\n  left: 0;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.625rem;\n  border-bottom: 1Px solid #f4f4f4;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.my-songs-header .icon {\n  font-size: 0.625rem;\n}\n.my-songs-lists {\n  padding-top: 3.125rem;\n  width: 100%;\n}\n.my-songs-item {\n  width: 100%;\n  padding: 0.625rem;\n  text-align: left;\n  border-bottom: 0.0625rem solid #f4f4f4;\n}\n.my-songs-item h5 {\n  font-size: 0.875rem;\n  display: inline-block;\n  font-weight: 400;\n  margin-right: 0.3125rem;\n}\n.my-songs-item span {\n  margin-left: 0.3125rem;\n  color: silver;\n}\n.my-songs-item .icon {\n  float: right;\n  font-size: 0.75rem;\n  color: silver;\n}\n.my-songs .empty {\n  font-size: 0.875rem;\n  font-weight: 400;\n  padding: 1.25rem;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/player/index.less":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/player/index.less ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player {\n  position: fixed;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 0.625rem;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  background: white;\n  -webkit-box-shadow: 0 -0.09375rem 0.9375rem 0 #d4c7fb;\n  box-shadow: 0 -0.09375rem 0.9375rem 0 #d4c7fb;\n  height: 4.0625rem;\n  z-index: 100;\n  margin-top: 0.9375rem;\n}\n.player-avatar {\n  width: 3.75rem;\n  height: 3.75rem;\n  position: relative;\n}\n.player-avatar img {\n  position: absolute;\n  border: 1.5Px silver solid;\n  border-radius: 50%;\n  top: -0.9375rem;\n  width: 100%;\n  height: 100%;\n}\n.player-avatar img.active {\n  -webkit-animation: rotate 15s infinite linear;\n  animation: rotate 15s infinite linear;\n}\n.player-main {\n  -webkit-flex: 0.95;\n  -ms-flex: 0.95;\n  flex: 0.95;\n}\n.player-info {\n  margin-top: 0.9375rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  height: 100%;\n}\n.player-song {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  width: 100%;\n  overflow: hidden;\n}\n.player-song-name {\n  font-size: 0.875rem;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  font-weight: 400;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.player-song-desc {\n  font-size: 0.75rem;\n  color: silver;\n}\n.player-actions .icon {\n  color: rgba(24, 144, 255, 0.5);\n  margin: 0 0.3125rem;\n}\n.player-loading {\n  position: absolute;\n  font-size: 0.875rem;\n  top: -30%;\n  color: blue;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/scroll/index.less":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/scroll/index.less ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scroll {\n  overflow: auto;\n  width: 100%;\n}\n.scroll::-webkit-scrollbar {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/slider/index.less":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/slider/index.less ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slider {\n  width: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  height: 0.1875rem;\n  border-radius: 0.5rem;\n  position: relative;\n}\n.slider-used {\n  background: #1890ff;\n  height: 100%;\n  width: 10%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 0.5rem;\n}\n.slider-used .slider-dot {\n  position: absolute;\n  overflow: hidden;\n  right: -0.3125rem;\n  top: -0.1875rem;\n  width: 0.625rem;\n  height: 0.625rem;\n  border-radius: 50%;\n  background: white;\n  border: 0.0625rem solid #1890ff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/songslist/index.less":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/songslist/index.less ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".songslist {\n  width: 100%;\n}\n.songslist .songs-wrap {\n  width: 100%;\n  padding-left: 0.9375rem;\n}\n.songslist .songs-wrap .songs-item {\n  padding: 0.625rem 0.9375rem 0.625rem 0;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  border-bottom: 0.01em solid silver;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.songslist .songs-wrap .songs-item .detail .songs-name {\n  font-size: 0.875rem;\n  font-weight: 400;\n}\n.songslist .songs-wrap .songs-item .detail .songs-author {\n  font-size: 0.75rem;\n  color: silver;\n}\n.songslist .songs-wrap .songs-item .actions {\n  text-align: right;\n}\n.songslist .songs-wrap .songs-item:nth-last-of-type(1) {\n  border-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/swiper/index.less":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/swiper/index.less ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".swiper {\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.swiper-wrap {\n  display: table;\n}\n.swiper-wrap .swiper-item {\n  display: inline-block;\n  position: relative;\n  vertical-align: top;\n}\n.swiper-wrap .swiper-item img {\n  width: 100%;\n}\n.swiper .swiper-dots {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  text-align: center;\n  padding: 0.625rem 0;\n}\n.swiper .swiper-dots .swiper-dot {\n  display: inline-block;\n  width: 10Px;\n  height: 10Px;\n  background: white;\n  border-radius: 50%;\n  margin: 0 0.3125rem;\n}\n.swiper .swiper-dots .swiper-dot-active {\n  background: #2CA2F9;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/tag/index.less":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/tag/index.less ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tag {\n  padding: 0.3125rem 0.625rem;\n  border-radius: 1.25rem;\n  font-size: 0.875rem;\n  border: 0.0625rem solid silver;\n  display: inline-block;\n}\n.tag-active {\n  color: #2CA2F9;\n  border: 0.0625rem solid #2CA2F9;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/toast/index.less":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/components/toast/index.less ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toast {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 150;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n.toast .toast-bg {\n  padding: 1.25rem;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 0.3125rem;\n  text-align: center;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  position: relative;\n}\n.toast .toast-bg .toast-message {\n  margin-top: 0.3125rem;\n  color: currentColor;\n  display: block;\n  font-size: 0.875rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/newlist/index.less":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/pages/newlist/index.less ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".newlist {\n  position: relative;\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/player-container/index.less":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/pages/player-container/index.less ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player-container .player-cover-wrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 101;\n  -webkit-transform-origin: 10% 100%;\n  -ms-transform-origin: 10% 100%;\n  transform-origin: 10% 100%;\n  -webkit-transform: rotate(-90deg);\n  -ms-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.player-container .player-cover-wrap .player-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-filter: blur(0.3125rem);\n  filter: blur(0.3125rem);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.player-container .player-cover-wrap .player-cover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.player-container .player-cover-wrap .player-cover .header {\n  background: none;\n}\n.player-container .player-cover-wrap .player-cover .header .header-logo {\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.player-container .player-cover-wrap .player-cover .header .header-logo .info {\n  font-size: 1rem;\n  margin-left: 0.625rem;\n}\n.player-container .player-cover-wrap .player-cover .lyrics {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  margin-bottom: 6.875rem;\n}\n.player-container .player-cover-wrap .player-cover .singer-cover {\n  width: 12.5rem;\n  height: 12.5rem;\n  margin: auto;\n  border: 2Px solid silver;\n  border-radius: 50%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.player-container .player-cover-wrap .player-cover .singer-cover img {\n  margin: auto;\n  width: 90%;\n  height: 90%;\n  border-radius: 50%;\n}\n.player-container .player-cover-wrap .player-cover .singer-cover-active {\n  -webkit-animation: rotate 15s linear infinite;\n  animation: rotate 15s linear infinite;\n}\n.player-container .player-cover-wrap .player-actions {\n  position: fixed;\n  padding: 1.25rem;\n  left: 0;\n  text-align: center;\n  bottom: 0;\n  width: 100%;\n}\n.player-container .player-cover-wrap .player-actions .player-time {\n  margin: 0.625rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.player-container .player-cover-wrap .player-actions .player-time .slider {\n  margin: 0 0.625rem;\n}\n.player-container .player-cover-wrap .player-actions .player-time .time-length,\n.player-container .player-cover-wrap .player-actions .player-time .time-use {\n  font-size: 0.75rem;\n  color: white;\n}\n.player-container .player-cover-wrap .player-actions .player-icons {\n  width: 100%;\n  position: relative;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.player-container .player-cover-wrap .player-actions .player-icons .icon {\n  color: white;\n  font-size: 1rem;\n  vertical-align: middle;\n}\n.player-container .player-cover-wrap .player-actions .player-icons .icon-play-menu {\n  font-size: 0.875rem;\n}\n.player-container .player-cover-wrap-active {\n  -webkit-transform: rotate(0);\n  -ms-transform: rotate(0);\n  transform: rotate(0);\n  opacity: 1;\n  visibility: visible;\n}\n.player-container .my-songs-mask {\n  visibility: hidden;\n}\n.player-container .my-songs-mask .my-songs {\n  -webkit-transform: translateY(100%);\n  -ms-transform: translateY(100%);\n  transform: translateY(100%);\n}\n.player-container .my-songs-mask-active {\n  visibility: visible;\n  -webkit-animation: opacity 0.3s;\n  animation: opacity 0.3s;\n}\n.player-container .my-songs-mask-active .my-songs {\n  -webkit-transition: all 0.2s;\n  -o-transition: all 0.2s;\n  transition: all 0.2s;\n  -webkit-transform: translateY(0);\n  -ms-transform: translateY(0);\n  transform: translateY(0);\n}\n.player-container .my-songs-mask-active .my-songs-header {\n  position: fixed;\n  left: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/plist/index.less":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/pages/plist/index.less ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".plist {\n  position: relative;\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/singer-classlist/index.less":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/pages/singer-classlist/index.less ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".singerlist {\n  position: relative;\n  width: 100%;\n}\n.singerlist .icon-arrow-right {\n  color: silver;\n  font-size: 0.3125rem;\n}\n.singerlist .singer-group {\n  padding: 0.9375rem 0.625rem;\n  width: 100%;\n}\n.singerlist .singer-group .singer-item {\n  width: 100%;\n  border-radius: 0.5rem;\n  padding: 0.75rem 0.9375rem;\n  border: 0.0625rem solid silver;\n  background: #fbfbfb;\n  font-size: 0.9375rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.singerlist .singer-group-close {\n  margin: 0.9375rem 0.625rem;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  border: 0.0625rem solid silver;\n}\n.singerlist .singer-group-close .singer-item {\n  width: 100%;\n  padding: 0.75rem 0.9375rem;\n  border-bottom: 0.0625rem solid silver;\n  background: #fbfbfb;\n  font-size: 0.9375rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.singerlist .singer-group-close .singer-item:nth-of-type(1) {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n.singerlist .singer-group-close .singer-item:nth-last-of-type(1) {\n  border-bottom: 0;\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/toplist/index.less":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./public/src/pages/toplist/index.less ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toplist {\n  position: relative;\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./public/src/api/index.js":
/*!*********************************!*\
  !*** ./public/src/api/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/toast */ "./public/src/components/toast/index.js");








var handle = function handle(xhr) {
  var _xhr$data = xhr.data,
      data = _xhr$data.data,
      errcode = _xhr$data.errcode,
      msg = _xhr$data.msg;

  if (errcode === 0) {
    return data;
  } else {
    console.error(msg);
    _components_toast__WEBPACK_IMPORTED_MODULE_6__["default"].show({
      message: '网络异常',
      style: {
        color: 'white'
      },
      duration: 1
    });
    return null;
  }
};

var Api =
/*#__PURE__*/
function () {
  function Api() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Api);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Api, null, [{
    key: "getNewlist",
    value: function () {
      var _getNewlist = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var xhr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/newlist');

              case 3:
                xhr = _context.sent;
                return _context.abrupt("return", handle(xhr));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0.message);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function getNewlist() {
        return _getNewlist.apply(this, arguments);
      }

      return getNewlist;
    }()
  }, {
    key: "getToplist",
    value: function () {
      var _getToplist = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var xhr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/toplist');

              case 3:
                xhr = _context2.sent;
                return _context2.abrupt("return", handle(xhr));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0.message);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function getToplist() {
        return _getToplist.apply(this, arguments);
      }

      return getToplist;
    }()
  }, {
    key: "getRankList",
    value: function () {
      var _getRankList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(params) {
        var xhr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/rank?".concat(querystring__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(params)));

              case 3:
                xhr = _context3.sent;
                return _context3.abrupt("return", handle(xhr));

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0.message);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function getRankList(_x) {
        return _getRankList.apply(this, arguments);
      }

      return getRankList;
    }()
  }, {
    key: "getPlist",
    value: function () {
      var _getPlist = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(params) {
        var xhr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/plist?".concat(querystring__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(params)));

              case 3:
                xhr = _context4.sent;
                return _context4.abrupt("return", handle(xhr));

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0.message);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function getPlist(_x2) {
        return _getPlist.apply(this, arguments);
      }

      return getPlist;
    }()
  }, {
    key: "getPlistDetail",
    value: function () {
      var _getPlistDetail = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(params) {
        var xhr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/plist-detail?".concat(querystring__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(params)));

              case 3:
                xhr = _context5.sent;
                return _context5.abrupt("return", handle(xhr));

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                console.error(_context5.t0.message);

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));

      function getPlistDetail(_x3) {
        return _getPlistDetail.apply(this, arguments);
      }

      return getPlistDetail;
    }()
  }, {
    key: "getSingerClasslist",
    value: function () {
      var _getSingerClasslist = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var xhr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/singer-classlist');

              case 3:
                xhr = _context6.sent;
                return _context6.abrupt("return", handle(xhr));

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                console.error(_context6.t0.message);

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 7]]);
      }));

      function getSingerClasslist() {
        return _getSingerClasslist.apply(this, arguments);
      }

      return getSingerClasslist;
    }()
  }, {
    key: "getSingerList",
    value: function () {
      var _getSingerList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(params) {
        var xhr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/singer-list?".concat(querystring__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(params)));

              case 3:
                xhr = _context7.sent;
                return _context7.abrupt("return", handle(xhr));

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);
                console.error(_context7.t0.message);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 7]]);
      }));

      function getSingerList(_x4) {
        return _getSingerList.apply(this, arguments);
      }

      return getSingerList;
    }()
  }, {
    key: "getSingerSongsList",
    value: function () {
      var _getSingerSongsList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(params) {
        var xhr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/singer-songs?".concat(querystring__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(params)));

              case 3:
                xhr = _context8.sent;
                return _context8.abrupt("return", handle(xhr));

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](0);
                console.error(_context8.t0.message);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 7]]);
      }));

      function getSingerSongsList(_x5) {
        return _getSingerSongsList.apply(this, arguments);
      }

      return getSingerSongsList;
    }()
  }, {
    key: "getHotSearch",
    value: function () {
      var _getHotSearch = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var xhr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/hot-search');

              case 3:
                xhr = _context9.sent;
                return _context9.abrupt("return", handle(xhr));

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9["catch"](0);
                console.error(_context9.t0.message);

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 7]]);
      }));

      function getHotSearch() {
        return _getHotSearch.apply(this, arguments);
      }

      return getHotSearch;
    }()
  }, {
    key: "search",
    value: function () {
      var _search = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(params) {
        var xhr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/search?".concat(querystring__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(params)));

              case 3:
                xhr = _context10.sent;
                return _context10.abrupt("return", handle(xhr));

              case 7:
                _context10.prev = 7;
                _context10.t0 = _context10["catch"](0);
                console.error(_context10.t0.message);

              case 10:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[0, 7]]);
      }));

      function search(_x6) {
        return _search.apply(this, arguments);
      }

      return search;
    }()
  }, {
    key: "getSongDetail",
    value: function () {
      var _getSongDetail = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(params) {
        var xhr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/song?".concat(querystring__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(params)));

              case 3:
                xhr = _context11.sent;
                return _context11.abrupt("return", handle(xhr));

              case 7:
                _context11.prev = 7;
                _context11.t0 = _context11["catch"](0);
                console.error(_context11.t0.message);

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[0, 7]]);
      }));

      function getSongDetail(_x7) {
        return _getSongDetail.apply(this, arguments);
      }

      return getSongDetail;
    }()
  }, {
    key: "downloadMusic",
    value: function () {
      var _downloadMusic = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(params) {
        var elementA;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                try {
                  elementA = document.createElement('a');
                  elementA.download = "".concat(params.filename, ".mp3");
                  elementA.href = "/download?".concat(querystring__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(params));
                  elementA.click();
                } catch (err) {
                  console.error(err.message);
                }

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function downloadMusic(_x8) {
        return _downloadMusic.apply(this, arguments);
      }

      return downloadMusic;
    }()
  }]);

  return Api;
}();

/* harmony default export */ __webpack_exports__["default"] = (Api);

/***/ }),

/***/ "./public/src/app.js":
/*!***************************!*\
  !*** ./public/src/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/index.js */ "./public/src/reducers/index.js");
/* harmony import */ var _sagas_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sagas/index.js */ "./public/src/sagas/index.js");
/* harmony import */ var _components_authorized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/authorized */ "./public/src/components/authorized/index.js");
/* harmony import */ var _config_router_config_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/router.config.js */ "./public/src/config/router.config.js");
/* harmony import */ var _pages_player_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/player-container */ "./public/src/pages/player-container/index.js");
/* harmony import */ var _common_events_subscribe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/events-subscribe */ "./public/src/common/events-subscribe/index.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _base_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./base.less */ "./public/src/base.less");
/* harmony import */ var _base_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_base_less__WEBPACK_IMPORTED_MODULE_13__);














var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_3__["default"])(_sagas_index_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(_reducers_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(sagaMiddleware));
sagaMiddleware.run(_sagas_index_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["HashRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "app"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
  render: function render(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_player_container__WEBPACK_IMPORTED_MODULE_10__["default"], props);
  }
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_authorized__WEBPACK_IMPORTED_MODULE_8__["default"], {
  routes: _config_router_config_js__WEBPACK_IMPORTED_MODULE_9__["default"]
})))), document.querySelector('.root'));

/***/ }),

/***/ "./public/src/base.less":
/*!******************************!*\
  !*** ./public/src/base.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/less-loader/dist/cjs.js!../../node_modules/postcss-loader/src??postcss!./base.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/base.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader!../../node_modules/less-loader/dist/cjs.js!../../node_modules/postcss-loader/src??postcss!./base.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/base.less", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/less-loader/dist/cjs.js!../../node_modules/postcss-loader/src??postcss!./base.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/base.less");

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

/***/ "./public/src/common/basehandler/index.js":
/*!************************************************!*\
  !*** ./public/src/common/basehandler/index.js ***!
  \************************************************/
/*! exports provided: toast, handleError, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toast", function() { return toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/toast */ "./public/src/components/toast/index.js");












var toast = {
  show: function show(text) {
    _components_toast__WEBPACK_IMPORTED_MODULE_11__["default"].show({
      message: text,
      duration: 1,
      style: {
        color: 'white'
      }
    });
  }
};
var handleError = function handleError(err) {
  console.error(err);
  _components_toast__WEBPACK_IMPORTED_MODULE_11__["default"].show({
    message: '网络异常',
    style: {
      color: 'white'
    },
    duration: 1.5
  });
};

var BaseHandler = function BaseHandler(Comp) {
  var _dec, _class, _temp;

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      getSongDetail: function getSongDetail(payload, callback) {
        dispatch({
          type: 'GET_SONG_DETAIL_REQUEST',
          payload: payload,
          callback: callback
        });
      },
      download: function download(payload) {
        dispatch({
          type: 'DOWNLOAD_REQUEST',
          payload: payload
        });
      },
      addPlayingList: function addPlayingList(payload) {
        dispatch({
          type: 'UPDATE_PLAYING_LIST',
          payload: payload
        });
      },
      replayMusic: function replayMusic(payload) {
        dispatch({
          type: 'REPLAY_MUSIC',
          payload: payload
        });
      }
    };
  };

  var NewComponent = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(function (_ref) {
    var playing = _ref.rootState.playing;
    return {
      playing: playing
    };
  }, mapDispatchToProps), _dec(_class = (_temp =
  /*#__PURE__*/
  function (_Component) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(NewComponent, _Component);

    function NewComponent() {
      var _getPrototypeOf2;

      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, NewComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(NewComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onSongClick", function (info, pass) {
        var _this$props = _this.props,
            getSongDetail = _this$props.getSongDetail,
            replayMusic = _this$props.replayMusic,
            id = _this$props.playing.id;

        if (id !== info.id || pass) {
          _components_toast__WEBPACK_IMPORTED_MODULE_11__["default"].show({
            message: '加载中...',
            style: {
              color: 'white'
            }
          });
          getSongDetail({
            hash: info.id
          }, function () {
            _components_toast__WEBPACK_IMPORTED_MODULE_11__["default"].close();
          });
        } else {
          replayMusic(true);
        }
      });

      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onDownload", function (hash) {
        var download = _this.props.download;

        if (hash) {
          download({
            hash: hash
          });
        }
      });

      return _this;
    }

    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(NewComponent, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            getSongDetail = _this$props2.getSongDetail,
            addPlayingList = _this$props2.addPlayingList,
            rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_this$props2, ["getSongDetail", "addPlayingList"]);

        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Comp, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          onSongClick: this.onSongClick,
          addPlayingList: addPlayingList,
          onDownload: this.onDownload
        }, rest));
      }
    }]);

    return NewComponent;
  }(react__WEBPACK_IMPORTED_MODULE_9__["Component"]), _temp)) || _class);
  return NewComponent;
};

/* harmony default export */ __webpack_exports__["default"] = (BaseHandler);

/***/ }),

/***/ "./public/src/common/events-subscribe/index.js":
/*!*****************************************************!*\
  !*** ./public/src/common/events-subscribe/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/emitter */ "./public/src/utils/emitter.js");


/***/ }),

/***/ "./public/src/components/action-sheet/index.js":
/*!*****************************************************!*\
  !*** ./public/src/components/action-sheet/index.js ***!
  \*****************************************************/
/*! exports provided: AactinContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AactinContent", function() { return AactinContent; });
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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/mask */ "./public/src/components/mask/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index.less */ "./public/src/components/action-sheet/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_14__);















var AactinContent = function AactinContent(props) {
  var onCancel = props.onCancel,
      classPrefixer = props.classPrefixer,
      actions = props.actions,
      info = props.info,
      cancelButtomVisible = props.cancelButtomVisible,
      align = props.align;
  var style = {
    textAlign: align
  };

  var renderItem = function renderItem(lists) {
    return lists.map(function (d, i) {
      var events = {
        onClick: function onClick(ev) {
          ev.stopPropagation();
          d.onClick && d.onClick(info, _components_mask__WEBPACK_IMPORTED_MODULE_13__["default"].close);
        }
      };

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8___default()(d) === 'object') {
        if (d.$$typeof) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default()({
            style: style
          }, events, {
            key: i,
            className: "".concat(classPrefixer, "-item")
          }), d);
        }

        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default()({
          style: style,
          key: i
        }, events, {
          className: "".concat(classPrefixer, "-item")
        }), d.name);
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default()({
          style: style,
          key: i
        }, events, {
          className: "".concat(classPrefixer, "-item")
        }), d);
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    onClick: function onClick(ev) {
      return ev.stopPropagation();
    },
    className: "".concat(classPrefixer, "-list")
  }, info && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "".concat(classPrefixer, "-info")
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h5", {
    className: "name"
  }, info.name), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
    className: "desc"
  }, info.desc)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
    className: "".concat(classPrefixer, "-wrap")
  }, renderItem(actions)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
    className: "".concat(classPrefixer, "-cancel-mask")
  }), cancelButtomVisible && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    onClick: onCancel,
    className: "".concat(classPrefixer, "-cancel")
  }, "\u53D6\u6D88"));
};

var ActionSheet =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ActionSheet, _PureComponent);

  function ActionSheet(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ActionSheet);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ActionSheet).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "showAction", function (ev) {
      ev.stopPropagation();
      var _this$props = _this.props,
          classPrefixer = _this$props.classPrefixer,
          actions = _this$props.actions,
          info = _this$props.info,
          cancelButtomVisible = _this$props.cancelButtomVisible,
          align = _this$props.align;
      _components_mask__WEBPACK_IMPORTED_MODULE_13__["default"].show({
        component: AactinContent,
        props: {
          className: 'action-sheet',
          onCancel: _components_mask__WEBPACK_IMPORTED_MODULE_13__["default"].close,
          classPrefixer: classPrefixer,
          actions: actions,
          info: info,
          cancelButtomVisible: cancelButtomVisible,
          align: align
        }
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ActionSheet, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          classPrefixer = _this$props2.classPrefixer,
          className = _this$props2.className;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_12___default()("".concat(classPrefixer, "-sheet"), className);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        onClick: this.showAction,
        className: classes
      }, children);
    }
  }]);

  return ActionSheet;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(ActionSheet, "defaultProps", {
  classPrefixer: 'action',
  cancelButtomVisible: true
});

ActionSheet.propTypes = {
  info: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number]),
    desc: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string
  }),
  actions: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object])).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.node]).isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  cancelButtomVisible: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  align: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  index: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.element]),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  extra: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.element])
};
/* harmony default export */ __webpack_exports__["default"] = (ActionSheet);

/***/ }),

/***/ "./public/src/components/action-sheet/index.less":
/*!*******************************************************!*\
  !*** ./public/src/components/action-sheet/index.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/action-sheet/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/action-sheet/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/action-sheet/index.less");

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

/***/ "./public/src/components/audio/index.js":
/*!**********************************************!*\
  !*** ./public/src/components/audio/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);












var Audio =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Audio, _PureComponent);

  function Audio() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Audio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Audio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "componentDidMount", function () {
      var audio = _this.refs.audio;
      var getAudioRef = _this.props.getAudioRef;
      audio.play();
      getAudioRef && getAudioRef(audio);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onPlay", function (ev) {
      var onPlay = _this.props.onPlay;
      var audio = _this.props.audio;
      onPlay && onPlay();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onTimeUpdate", function (ev) {
      var onTimeUpdate = _this.props.onTimeUpdate;
      onTimeUpdate && onTimeUpdate(ev.target);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onProgress", function () {
      var onProgress = _this.props.onProgress;
      onProgress && onProgress();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onWaiting", function () {
      var onWaiting = _this.props.onWaiting;
      onWaiting && onWaiting();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onPause", function (ev) {
      var onPause = _this.props.onPause;
      onPause && onPause();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onError", function (ev) {
      var onError = _this.props.onError;
      onError && onError(ev);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onEnded", function (ev) {
      var onEnded = _this.props.onEnded;
      onEnded && onEnded();
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Audio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classPrefixer = _this$props.classPrefixer,
          className = _this$props.className,
          src = _this$props.src;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_10___default()(classPrefixer, className);
      var onPlay = this.onPlay,
          onTimeUpdate = this.onTimeUpdate,
          onPause = this.onPause,
          onError = this.onError,
          onProgress = this.onProgress,
          onEnded = this.onEnded,
          onWaiting = this.onWaiting;
      var events = {
        onPlay: onPlay,
        onTimeUpdate: onTimeUpdate,
        onPause: onPause,
        onError: onError,
        onProgress: onProgress,
        onEnded: onEnded,
        onWaiting: onWaiting
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, events, {
        autoPlay: true,
        ref: "audio",
        src: src,
        className: classes
      }));
    }
  }]);

  return Audio;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Audio, "defaultProps", {
  classPrefixer: 'audio'
});

Audio.propTyeps = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  onPause: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onPlay: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onTimeUpdate: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onError: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onEnded: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onProgress: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  getAudioRef: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Audio);

/***/ }),

/***/ "./public/src/components/authorized/index.js":
/*!***************************************************!*\
  !*** ./public/src/components/authorized/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");






var Authorized = function Authorized(props) {
  var routes = props.routes,
      authRest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props, ["routes"]);

  var renderRoute = function renderRoute(routes) {
    var RouteWithSubRoutes = function RouteWithSubRoutes(route) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
        exact: route.exact,
        strict: route.strict,
        path: route.path,
        render: function render(props) {
          return route.redirect ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
            from: route.from,
            to: route.redirect
          }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(route.component, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, authRest, props, {
            routes: route.routes
          }));
        }
      });
    };

    return routes.map(function (d, i) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RouteWithSubRoutes, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        key: i
      }, d));
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null, renderRoute(routes));
};

Authorized.propTypes = {
  routes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Authorized);

/***/ }),

/***/ "./public/src/components/card/index.js":
/*!*********************************************!*\
  !*** ./public/src/components/card/index.js ***!
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icon */ "./public/src/components/icon/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.less */ "./public/src/components/card/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_11__);













var Card =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Card, _PureComponent);

  function Card() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Card)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleClick", function (data) {
      var onClick = _this.props.onClick;
      onClick && onClick(data);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          source = _this$props.source,
          className = _this$props.className,
          classPrefixer = _this$props.classPrefixer,
          extra = _this$props.extra;
      var title = source.title,
          desc = source.desc,
          avatar = source.avatar;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_9___default()(classPrefixer, className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.handleClick.bind(this, source),
        className: classes
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(classPrefixer, "-item")
      }, avatar && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: avatar,
        alt: "",
        className: "avatar"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        className: "title"
      }, title), desc && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, desc)), extra));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Card, "defaultProps", {
  classPrefixer: 'card'
});

Card.propTypes = {
  source: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
    title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func]),
    desc: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func]),
    avatar: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
  }).isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  extra: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func])
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./public/src/components/card/index.less":
/*!***********************************************!*\
  !*** ./public/src/components/card/index.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/card/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/card/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/card/index.less");

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

/***/ "./public/src/components/header/index.js":
/*!***********************************************!*\
  !*** ./public/src/components/header/index.js ***!
  \***********************************************/
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.less */ "./public/src/components/header/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_9__);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Header =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Header, _PureComponent);

  function Header() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Header);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Header).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          extra = _this$props.extra,
          logo = _this$props.logo,
          style = _this$props.style,
          className = _this$props.className,
          classPrefixer = _this$props.classPrefixer,
          children = _this$props.children,
          fixed = _this$props.fixed;
      var initialStyle = fixed ? _objectSpread({
        position: 'fixed',
        top: 0,
        left: 0
      }, style) : style;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_8___default()(classPrefixer, className);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: initialStyle,
        className: classes
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "".concat(classPrefixer, "-logo")
      }, logo), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "".concat(classPrefixer, "-center")
      }, children), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "".concat(classPrefixer, "-extra")
      }, extra));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(Header, "defaultProps", {
  classPrefixer: 'header',
  fixed: false
});

Header.propTypes = {
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  logo: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  extra: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string])
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./public/src/components/header/index.less":
/*!*************************************************!*\
  !*** ./public/src/components/header/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/header/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/header/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/header/index.less");

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

/***/ "./public/src/components/icon/assets/loop_one.png":
/*!********************************************************!*\
  !*** ./public/src/components/icon/assets/loop_one.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "loop_one.png";

/***/ }),

/***/ "./public/src/components/icon/assets/loop_one_black.png":
/*!**************************************************************!*\
  !*** ./public/src/components/icon/assets/loop_one_black.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "loop_one_black.png";

/***/ }),

/***/ "./public/src/components/icon/assets/random.png":
/*!******************************************************!*\
  !*** ./public/src/components/icon/assets/random.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "random.png";

/***/ }),

/***/ "./public/src/components/icon/assets/random_black.png":
/*!************************************************************!*\
  !*** ./public/src/components/icon/assets/random_black.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "random_black.png";

/***/ }),

/***/ "./public/src/components/icon/assets/retweet.png":
/*!*******************************************************!*\
  !*** ./public/src/components/icon/assets/retweet.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "retweet.png";

/***/ }),

/***/ "./public/src/components/icon/assets/retweet_black.png":
/*!*************************************************************!*\
  !*** ./public/src/components/icon/assets/retweet_black.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "retweet_black.png";

/***/ }),

/***/ "./public/src/components/icon/index.js":
/*!*********************************************!*\
  !*** ./public/src/components/icon/index.js ***!
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
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.less */ "./public/src/components/icon/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_11__);













var createComponent = function createComponent(name) {
  return function (props) {
    var classPrefixer = props.classPrefixer,
        className = props.className,
        type = props.type,
        rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7___default()(props, ["classPrefixer", "className", "type"]);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_10___default()(classPrefixer, "".concat(classPrefixer, "-").concat(name), className);
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default()({}, rest, {
      className: classes
    }));
  };
};

var Loading = createComponent('loading');
var Ellipsis = createComponent('ellipsis');
var Search = createComponent('search');
var Play = createComponent('play');
var Pause = createComponent('pause');
var Next = createComponent('next');
var Prev = createComponent('prev');
var ArrowLeft = createComponent('arrow-left');
var ArrowRight = createComponent('arrow-right');
var ArrowDown = createComponent('arrow-down');
var ArrowUp = createComponent('arrow-up');
var Clock = createComponent('clock');
var Close = createComponent('close');
var HeadPhone = createComponent('headphone');
var PlayMenu = createComponent('play-menu');
var Retweet = createComponent('retweet');
var RetweetBlack = createComponent('retweet-black');
var Random = createComponent('random');
var RandomBlack = createComponent('random-black');
var LoopOne = createComponent('loop-one');
var LoopOneBlack = createComponent('loop-one-black');
var Trash = createComponent('trash');

var Icon =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Icon, _PureComponent);

  function Icon(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Icon);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Icon).call(this, props));
    _this.state = {
      loading: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Loading, props),
      ellipsis: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Ellipsis, props),
      search: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Search, props),
      play: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Play, props),
      pause: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Pause, props),
      next: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Next, props),
      prev: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Prev, props),
      'arrow-left': react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ArrowLeft, props),
      'arrow-right': react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ArrowRight, props),
      'arrow-up': react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ArrowUp, props),
      'arrow-down': react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ArrowDown, props),
      'clock': react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Clock, props),
      'close': react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Close, props),
      'headphone': react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(HeadPhone, props),
      'retweet': react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Retweet, props),
      'retweet-black': react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(RetweetBlack, props),
      'random': react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Random, props),
      'random-black': react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(RandomBlack, props),
      'loop-one': react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(LoopOne, props),
      'loop-one-black': react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(LoopOneBlack, props),
      'trash': react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Trash, props),
      'play-menu': react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(PlayMenu, props)
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Icon, [{
    key: "render",
    value: function render() {
      return this.state[this.props.type] || null;
    }
  }]);

  return Icon;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(Icon, "defaultProps", {
  classPrefixer: 'icon'
});

Icon.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./public/src/components/icon/index.less":
/*!***********************************************!*\
  !*** ./public/src/components/icon/index.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/icon/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/icon/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/icon/index.less");

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

/***/ "./public/src/components/lyrics/index.js":
/*!***********************************************!*\
  !*** ./public/src/components/lyrics/index.js ***!
  \***********************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.less */ "./public/src/components/lyrics/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_10__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Lyrics =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Lyrics, _PureComponent);

  function Lyrics() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Lyrics);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Lyrics)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      lyricsData: [],
      viewHeight: 0,
      itemHeight: 0,
      current: 0,
      translateY: 0,
      prevCurrent: 0
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentDidMount", function () {
      var lyrics = _this.refs.lyrics;
      var offsetHeight = lyrics.offsetHeight;

      _this.setState({
        viewHeight: offsetHeight,
        translateY: offsetHeight / 2
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentWillReceiveProps", function (nextProps) {
      var _this$props = _this.props,
          currentTime = _this$props.currentTime,
          lyrics = _this$props.lyrics;
      var _this$state = _this.state,
          translateY = _this$state.translateY,
          itemHeight = _this$state.itemHeight,
          current = _this$state.current,
          lyricsData = _this$state.lyricsData,
          viewHeight = _this$state.viewHeight,
          prevCurrent = _this$state.prevCurrent;

      if (current * itemHeight > viewHeight / 2) {
        if (prevCurrent !== current) {
          _this.setState({
            translateY: -current * itemHeight + viewHeight / 2,
            prevCurrent: current
          });
        }
      }

      if (lyricsData.length && lyrics == nextProps.lyrics) {
        lyricsData.forEach(function (d, i) {
          if (currentTime >= d.time) {
            _this.setState({
              current: i
            });

            return;
          }
        });
      } else {
        _this.setState({
          lyricsData: _this.getLyricsData(nextProps)
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "translateTime", function (timeStr) {
      var minute = parseFloat(timeStr.split(':')[0]) * 60;
      var second = parseFloat(timeStr.split(':')[1]);
      return minute + second;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getLyricsData", function (props) {
      var lyrics = props.lyrics;
      var lyricsData = lyrics.trim().split(/\r\n/g);

      if (lyricsData.length > 1) {
        var matchTimeReg = /[^]+]/g;
        return lyricsData.map(function (d, i) {
          var lyricsTime = d.match(matchTimeReg)[0];
          var lyricsStr = d.split(lyricsTime)[1];
          return {
            time: _this.translateTime(lyricsTime.replace(/\[|\]/g, '')),
            text: lyricsStr
          };
        });
      }

      return [];
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getItemHeight", function (ref) {
      var itemHeight = _this.state.itemHeight;

      if (!itemHeight) {
        _this.setState({
          itemHeight: ref.clientHeight
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "renderLyrics", function () {
      var classPrefixer = _this.props.classPrefixer;
      var _this$state2 = _this.state,
          current = _this$state2.current,
          lyricsData = _this$state2.lyricsData;
      return lyricsData.map(function (d, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          ref: _this.getItemHeight,
          className: "".concat(classPrefixer, "-item ").concat(i === current ? 'current' : ''),
          "data-time": d.time,
          key: i
        }, d.text);
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Lyrics, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classPrefixer = _this$props2.classPrefixer,
          className = _this$props2.className,
          style = _this$props2.style;
      var _this$state3 = this.state,
          viewHeight = _this$state3.viewHeight,
          translateY = _this$state3.translateY;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_9___default()(classPrefixer, className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: _objectSpread({}, style),
        ref: "lyrics",
        className: classes
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        style: {
          transform: "translateY(".concat(translateY, "px)")
        },
        className: "".concat(classPrefixer, "-list")
      }, this.renderLyrics()));
    }
  }]);

  return Lyrics;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Lyrics, "defaultProps", {
  classPrefixer: 'lyrics',
  currentTime: 0,
  lyrics: ''
});

Lyrics.propTypes = {
  lyrics: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  currentTime: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Lyrics);

/***/ }),

/***/ "./public/src/components/lyrics/index.less":
/*!*************************************************!*\
  !*** ./public/src/components/lyrics/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/lyrics/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/lyrics/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/lyrics/index.less");

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

/***/ "./public/src/components/mask/index.js":
/*!*********************************************!*\
  !*** ./public/src/components/mask/index.js ***!
  \*********************************************/
/*! exports provided: MaskComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskComponent", function() { return MaskComponent; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ "./public/src/components/mask/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);






var div = document.createElement('div');
var MaskComponent = function MaskComponent(props) {
  var _React$createElement;

  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('mask', props.className);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", (_React$createElement = {
    onClick: props.onClick
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_React$createElement, "onClick", function onClick() {
    Mask.close();
    props.onClick && props.onClick();
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_React$createElement, "className", classes), _React$createElement), props.children);
};

var Mask = function Mask() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Mask);
};

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Mask, "show", function (option) {
  document.body.appendChild(div);

  if (option) {
    var C = option.component,
        props = option.props;
    Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["render"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MaskComponent, {
      className: props.className
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(C, props)), div);
  } else {
    Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["render"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MaskComponent, null), div);
  }
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Mask, "close", function (ev) {
  var unmountResult = Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["unmountComponentAtNode"])(div);

  if (unmountResult && div.parentNode) {
    div.parentNode.removeChild(div);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Mask);

/***/ }),

/***/ "./public/src/components/mask/index.less":
/*!***********************************************!*\
  !*** ./public/src/components/mask/index.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/mask/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/mask/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/mask/index.less");

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

/***/ "./public/src/components/my-songs/index.js":
/*!*************************************************!*\
  !*** ./public/src/components/my-songs/index.js ***!
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icon */ "./public/src/components/icon/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.less */ "./public/src/components/my-songs/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_11__);













var MySongs =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MySongs, _PureComponent);

  function MySongs() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MySongs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(MySongs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleRemove", function (id, ev) {
      ev.stopPropagation();
      var removeItem = _this.props.removeItem;
      removeItem && removeItem(id);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleClick", function (row, ev) {
      var onClick = _this.props.onClick;
      ev.stopPropagation();
      onClick && onClick(row);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "renderItem", function () {
      var _this$props = _this.props,
          songs = _this$props.songs,
          clsassPrefixer = _this$props.clsassPrefixer;
      return songs.map(function (d, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: "mysong-".concat(d.id),
          onClick: _this.handleClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), d),
          className: "".concat(clsassPrefixer, "-item")
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", null, d.name), "-", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, d.author), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onClick: _this.handleRemove.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), d.id),
          type: "close"
        }));
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MySongs, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          clsassPrefixer = _this$props2.clsassPrefixer,
          className = _this$props2.className,
          songs = _this$props2.songs,
          style = _this$props2.style,
          logo = _this$props2.logo,
          extra = _this$props2.extra;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_9___default()(clsassPrefixer, className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: function onClick(ev) {
          return ev.stopPropagation();
        },
        style: style,
        className: classes
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(clsassPrefixer, "-header")
      }, logo && logo, extra && extra), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "".concat(clsassPrefixer, "-lists")
      }, this.renderItem()), !songs.length && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        className: "empty"
      }, "\u4F60\u7684\u5217\u8868\u600E\u4E48\u7A7A\u4E86"));
    }
  }]);

  return MySongs;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(MySongs, "defaultProps", {
  clsassPrefixer: 'my-songs'
});

/* harmony default export */ __webpack_exports__["default"] = (MySongs);

/***/ }),

/***/ "./public/src/components/my-songs/index.less":
/*!***************************************************!*\
  !*** ./public/src/components/my-songs/index.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/my-songs/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/my-songs/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/my-songs/index.less");

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

/***/ "./public/src/components/player/index.js":
/*!***********************************************!*\
  !*** ./public/src/components/player/index.js ***!
  \***********************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../slider */ "./public/src/components/slider/index.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../audio */ "./public/src/components/audio/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../icon */ "./public/src/components/icon/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.less */ "./public/src/components/player/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_13__);















var Player =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Player, _PureComponent);

  function Player() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Player);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Player)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "audioToggle", function (ev) {
      ev.stopPropagation();
      _this.props.onAudioToggle && _this.props.onAudioToggle();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onAudioEned", function () {
      _this.props.onAudioEnded && _this.props.onAudioEnded();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "audioError", function (err) {
      _this.props.onAudioError && _this.props.onAudioError();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onAudioPlay", function () {
      _this.props.onAudioPlay && _this.props.onAudioPlay();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onAudioPause", function () {
      _this.props.onAudioPause && _this.props.onAudioPause();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onTimeUpdate", function (target) {
      _this.props.onTimeUpdate && _this.props.onTimeUpdate(target);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onAudioWaiting", function () {
      _this.props.onAudioWaiting && _this.props.onAudioWaiting();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onAudioChange", function (used) {
      _this.props.onAudioChange && _this.props.onAudioChange(used);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onSliderClick", function () {
      _this.props.onSliderClick && _this.props.onSliderClick();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onPlayerClick", function (ev) {
      ev.stopPropagation();
      var onClick = _this.props.onClick;
      onClick && onClick();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onNextClick", function (ev) {
      ev.stopPropagation();
      var onNextClick = _this.props.onNextClick;
      onNextClick && onNextClick();
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Player, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classPrefixer = _this$props.classPrefixer,
          className = _this$props.className,
          music = _this$props.music,
          name = _this$props.name,
          img = _this$props.img,
          author = _this$props.author,
          getRef = _this$props.getRef,
          audioState = _this$props.audioState,
          audioUsed = _this$props.audioUsed,
          loading = _this$props.loading;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_9___default()(classPrefixer, className);
      var imgClass = classnames__WEBPACK_IMPORTED_MODULE_9___default()({
        active: audioState === 'play' && !loading
      });
      return music ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classes
      }, loading && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "".concat(classPrefixer, "-loading")
      }, "\u7F13\u51B2\u4E2D..."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_audio__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onTimeUpdate: this.onTimeUpdate,
        onWaiting: this.onAudioWaiting,
        onPlay: this.onAudioPlay,
        getAudioRef: getRef,
        onPause: this.onAudioPause,
        onEnded: this.onAudioEned,
        onError: this.audioError,
        src: music
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.onPlayerClick,
        className: "".concat(classPrefixer, "-avatar")
      }, img && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: imgClass,
        src: img,
        alt: "image"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(classPrefixer, "-main")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_slider__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: this.onSliderClick,
        onChange: this.onAudioChange,
        used: audioUsed
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(classPrefixer, "-info")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.onPlayerClick,
        className: "".concat(classPrefixer, "-song")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        className: "".concat(classPrefixer, "-song-name")
      }, name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "".concat(classPrefixer, "-song-desc")
      }, author)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(classPrefixer, "-actions")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: this.audioToggle,
        type: audioState === 'play' ? 'pause' : 'play'
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: this.onNextClick,
        type: "next"
      }))))) : null;
    }
  }]);

  return Player;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Player, "defaultProps", {
  classPrefixer: 'player'
});

Player.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  music: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  author: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  img: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  timelength: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onTimeUpdate: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  getRef: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onNextClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onSliderClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onAudioPlay: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onAudioPause: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onAudioToggle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onAudioWaiting: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onAudioChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onAudioEnded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./public/src/components/player/index.less":
/*!*************************************************!*\
  !*** ./public/src/components/player/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/player/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/player/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/player/index.less");

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

/***/ "./public/src/components/scroll/index.js":
/*!***********************************************!*\
  !*** ./public/src/components/scroll/index.js ***!
  \***********************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icon */ "./public/src/components/icon/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.less */ "./public/src/components/scroll/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_11__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Scroll =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Scroll, _PureComponent);

  function Scroll(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Scroll);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Scroll).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      style: {
        height: window.innerHeight
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentWillReceiveProps", function (nextProps) {
      var scroll = _this.refs.scroll;
      var _this$props = _this.props,
          isTop = _this$props.isTop,
          loading = _this$props.loading,
          timeout = _this$props.timeout;

      if (nextProps.isTop !== isTop) {
        if (nextProps.isTop) {
          _this.timer = setTimeout(function () {
            scroll.scrollTo(0, 0);
            window.scrollTo(0, 0);
          }, timeout);
        }
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentDidMount", function () {
      var scroll = _this.refs.scroll;
      var getRef = _this.props.getRef;
      getRef && getRef(scroll);
      scroll.addEventListener('scroll', _this.handleScroll, false);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentWillUnmount", function () {
      var scroll = _this.refs.scroll;
      window.removeEventListener('resize', _this.handleResize, false);
      scroll.removeEventListener('scroll', _this.handleScroll, false);
      clearTimeout(_this.timer);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleScroll", function (ev) {
      var _this$props2 = _this.props,
          onBottom = _this$props2.onBottom,
          loading = _this$props2.loading;
      var _ev$target = ev.target,
          scrollTop = _ev$target.scrollTop,
          scrollHeight = _ev$target.scrollHeight,
          clientHeight = _ev$target.clientHeight;
      var isBottom = scrollHeight - clientHeight;

      if (scrollTop >= isBottom) {
        if (!loading) {
          onBottom();
        }
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleResize", function () {
      _this.setState({
        style: {
          height: window.innerHeight
        }
      });
    });

    window.addEventListener('resize', _this.handleResize, false);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Scroll, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          style = _this$props3.style,
          classPrefixer = _this$props3.classPrefixer,
          className = _this$props3.className,
          children = _this$props3.children,
          loading = _this$props3.loading;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_9___default()(classPrefixer, className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        ref: "scroll",
        style: _objectSpread({}, this.state.style, {}, style),
        className: classes
      }, children, loading && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          display: 'block',
          margin: '10px auto',
          fontSize: 22,
          color: 'silver'
        },
        type: "loading"
      }));
    }
  }]);

  return Scroll;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Scroll, "defaultProps", {
  classPrefixer: 'scroll',
  isTop: false,
  onBottom: function onBottom() {},
  timeout: 0,
  loading: false
});

Scroll.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  isTop: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func]),
  onBottom: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  getRef: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Scroll);

/***/ }),

/***/ "./public/src/components/scroll/index.less":
/*!*************************************************!*\
  !*** ./public/src/components/scroll/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/scroll/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/scroll/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/scroll/index.less");

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

/***/ "./public/src/components/slider/index.js":
/*!***********************************************!*\
  !*** ./public/src/components/slider/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.less */ "./public/src/components/slider/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_11__);













var Slider =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Slider, _PureComponent);

  function Slider(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Slider);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Slider).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "componentWillReceiveProps", function (nextProps) {
      var used = nextProps.used;

      if (used !== _this.state.used) {
        _this.setState({
          used: used
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "componentDidMount", function () {
      _this.initSlider();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "componentWillUnmount", function () {
      window.removeEventListener('resize', _this.initSlider, false);
      document.removeEventListener('keydown', _this.handleKeyDown, false);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "initSlider", function () {
      var slider = _this.refs.slider;
      var sliderWidth = slider.offsetWidth,
          sliderHeight = slider.offsetHeight;

      _this.setState({
        sliderWidth: sliderWidth,
        sliderHeight: sliderHeight
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleChange", function (used) {
      var onChange = _this.props.onChange;
      var _this$state = _this.state,
          minUsed = _this$state.minUsed,
          maxUsed = _this$state.maxUsed;

      switch (used) {
        case minUsed:
          onChange(0);
          break;

        case maxUsed:
          onChange(100);
          break;

        default:
          onChange(used);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "setUsed", function (used) {
      var _this$state2 = _this.state,
          minUsed = _this$state2.minUsed,
          maxUsed = _this$state2.maxUsed;
      var newUsed = used;

      if (used <= minUsed) {
        newUsed = minUsed;
      } else if (used >= maxUsed) {
        newUsed = maxUsed;
      }

      _this.setState({
        used: newUsed
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleTouch", function (ev, target) {
      var touches = ev.touches;
      var clientX = touches[0].clientX;
      var sliderWidth = _this.state.sliderWidth;
      var rect = target.getBoundingClientRect();
      var startX = clientX - rect.left;
      var used = parseFloat((startX / sliderWidth * 100).toFixed(2));

      _this.setUsed(used);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleTouchStart", function (ev) {
      ev.stopPropagation();
      var onClick = _this.props.onClick;

      _this.handleTouch(ev, ev.target);

      onClick && onClick();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleTouchMove", function (ev) {
      _this.handleTouch(ev, ev.target);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleTouchEnd", function (ev) {
      var used = _this.state.used;

      _this.handleChange(used);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "dotTouchStart", function (ev) {
      var onClick = _this.props.onClick;
      onClick && onClick();
      ev.stopPropagation();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "dotTouchMove", function (ev) {
      ev.stopPropagation();
      var slider = _this.refs.slider;

      _this.handleTouch(ev, slider);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleKeyDown", function (ev) {
      var keyCode = ev.keyCode;
      var _this$state3 = _this.state,
          used = _this$state3.used,
          minUsed = _this$state3.minUsed,
          maxUsed = _this$state3.maxUsed;
      var _this$props = _this.props,
          step = _this$props.step,
          onChange = _this$props.onChange;
      var leftCode = 37;
      var rightCode = 39;
      var newUsed = 0;

      switch (keyCode) {
        case leftCode:
          if (used > minUsed && used - step > minUsed) {
            newUsed = used - step;
          } else {
            newUsed = minUsed;
          }

          _this.setUsed(newUsed);

          _this.handleChange(newUsed);

          break;

        case rightCode:
          if (used < maxUsed && used + step < maxUsed) {
            newUsed = used + step;
          } else {
            newUsed = maxUsed;
          }

          _this.setUsed(newUsed);

          _this.handleChange(newUsed);

          break;
      }
    });

    _this.state = {
      used: props.used,
      startX: 0,
      sliderWidth: 0,
      sliderHeight: 0,
      minUsed: 0,
      maxUsed: 100
    };
    window.addEventListener('resize', _this.initSlider, false);
    document.addEventListener('keydown', _this.handleKeyDown, false);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Slider, [{
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          used = _this$state4.used,
          sliderHeight = _this$state4.sliderHeight;
      var _this$props2 = this.props,
          className = _this$props2.className,
          classPrefixer = _this$props2.classPrefixer,
          dotSize = _this$props2.dotSize,
          style = _this$props2.style;
      var events = {
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd
      };
      var classes = classnames__WEBPACK_IMPORTED_MODULE_10___default()(classPrefixer, className);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, events, {
        style: style,
        ref: "slider",
        className: classes
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          width: "".concat(used, "%")
        },
        className: "".concat(classPrefixer, "-used")
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onTouchStart: this.dotTouchStart,
        onTouchMove: this.dotTouchMove,
        style: {
          width: dotSize,
          height: dotSize,
          top: (sliderHeight - dotSize) / 2
        },
        className: "".concat(classPrefixer, "-dot")
      })));
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Slider, "defaultProps", {
  classPrefixer: 'slider',
  used: 0,
  step: 2,
  style: {
    width: '100%',
    height: 3
  },
  dotSize: 12,
  onChange: function onChange(used) {
    console.log('used :', used);
  }
});

Slider.propTypes = {
  used: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  step: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  dotWidth: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./public/src/components/slider/index.less":
/*!*************************************************!*\
  !*** ./public/src/components/slider/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/slider/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/slider/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/slider/index.less");

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

/***/ "./public/src/components/songslist/index.js":
/*!**************************************************!*\
  !*** ./public/src/components/songslist/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon */ "./public/src/components/icon/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./public/src/components/songslist/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);





var Songslist = function Songslist(props) {
  var handleClick = function handleClick(row) {
    if (props.onClick) {
      props.onClick(row);
    }
  };

  var renderItem = function renderItem(list) {
    var Action = props.actionComponent;
    return list.map(function (d, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: handleClick.bind(null, d),
        key: i,
        className: "songs-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "detail"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "songs-name"
      }, d.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "songs-author"
      }, d.author)), Action ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "actions"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Action, {
        onClick: props.actionClick,
        info: {
          name: d.name,
          desc: d.author,
          id: d.id
        },
        actions: props.actions
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: "ellipsis"
      }))) : null);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "songslist"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "songs-wrap"
  }, renderItem(props.songs)));
};

Songslist.propTypes = {
  songs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    author: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  })).isRequired,
  actionComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Songslist);

/***/ }),

/***/ "./public/src/components/songslist/index.less":
/*!****************************************************!*\
  !*** ./public/src/components/songslist/index.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/songslist/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/songslist/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/songslist/index.less");

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

/***/ "./public/src/components/swiper/index.js":
/*!***********************************************!*\
  !*** ./public/src/components/swiper/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.less */ "./public/src/components/swiper/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_12__);














var Swiper =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Swiper, _PureComponent);

  function Swiper(_props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Swiper);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Swiper).call(this, _props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "componentWillReceiveProps", function (nextProps) {
      var defaultSelected = _this.props.defaultSelected;

      if (nextProps.defaultSelected !== defaultSelected) {
        var swiper = _this.refs.swiper;
        var move = _this.state.move;

        var index = _this.getSelectedIndex(nextProps.defaultSelected);

        _this.setState({
          translate: -index * swiper.clientWidth,
          transition: move ? "transform ".concat(nextProps.timeout, "ms ") : ''
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "componentDidMount", function () {
      _this.initSwiper(_this.props);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "componentWillUnmount", function () {
      _this.handleUnMount();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "handleUnMount", function () {
      clearInterval(_this.timer);
      clearTimeout(_this.translateTimer);
      clearTimeout(_this.transitionTimer);
      clearTimeout(_this.changeTimer);
      window.removeEventListener('resize', _this.resetWidth, false);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "initSwiper", function (props) {
      var swiper = _this.refs.swiper;
      var children = props.children;
      var loop = _this.state.loop;

      var index = _this.getSelectedIndex(props.defaultSelected);

      var swiperWidth = swiper.clientWidth > window.innerWidth ? window.innerWidth : swiper.clientWidth;

      _this.setState({
        swiperWidth: swiperWidth,
        translate: -index * swiperWidth,
        swiperCount: loop ? children.length + 2 : children.length,
        transition: ''
      });

      _this.autoplayTimer();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "resetWidth", function (ev) {
      ev.stopPropagation();
      ev.preventDefault();
      var swiper = _this.refs.swiper;
      var defaultSelected = _this.props.defaultSelected;

      var index = _this.getSelectedIndex(defaultSelected);

      var selected = _this.getSelected(index);

      _this.setState({
        swiperWidth: swiper.clientWidth,
        translate: -index * swiper.clientWidth,
        selected: selected,
        transition: ''
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "autoplayTimer", function () {
      clearInterval(_this.timer);
      var _this$props = _this.props,
          duration = _this$props.duration,
          autoplay = _this$props.autoplay,
          timeout = _this$props.timeout,
          onChange = _this$props.onChange;

      if (autoplay) {
        _this.timer = setInterval(function () {
          var _this$state = _this.state,
              translate = _this$state.translate,
              swiperCount = _this$state.swiperCount,
              selected = _this$state.selected;

          var index = _this.getSelectedIndex(selected);

          var count = swiperCount - 1;
          var newIndex = index + 1;
          var newTranslate = translate;
          var newSelected = selected;
          var newTransition = "transform ".concat(timeout, "ms ");

          if (newIndex <= count) {
            if (newIndex == count) {
              _this.translateTimer = setTimeout(function () {
                newIndex = 1;
                newTranslate = _this.getTranslate(newIndex);
                newSelected = _this.getSelected(newIndex);
                newTransition = '';

                _this.setState({
                  selected: newSelected,
                  translate: newTranslate,
                  transition: newTransition
                });

                onChange(newSelected);
              }, timeout);
            } else {
              newSelected = _this.getSelected(newIndex);
              onChange(newSelected);
            }

            newTranslate = _this.getTranslate(newIndex);
          }

          _this.setState({
            selected: newSelected,
            translate: newTranslate,
            transition: newTransition
          });
        }, duration * 1000);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getSelectedIndex", function (selected) {
      var children = _this.props.children;
      var loop = _this.state.loop;

      for (var i = 0; i < children.length; i++) {
        if (children[i].key === selected) {
          return loop ? i + 1 : i;
        }
      }

      return loop ? 1 : 0;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "sliceFloat", function (num) {
      return parseFloat("0.".concat(String.prototype.split.call(num, '.')[1]));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "sethorizontalDirection", function (moveX) {
      var prevMoveX = _this.state.moveX;
      var moveDis = moveX - prevMoveX;

      if (moveDis > 0.5) {
        _this.setState({
          horizontalDirection: 1
        });
      } else if (moveDis < 0.5) {
        _this.setState({
          horizontalDirection: -1
        });
      } else {
        _this.setState({
          horizontalDirection: 0
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onTouchStart", function (ev) {
      var _this$state2 = _this.state,
          translate = _this$state2.translate,
          swiperWidth = _this$state2.swiperWidth,
          swiperCount = _this$state2.swiperCount,
          loop = _this$state2.loop;
      var _this$props2 = _this.props,
          children = _this$props2.children,
          autoplay = _this$props2.autoplay;
      var _ev$touches$ = ev.touches[0],
          clientX = _ev$touches$.clientX,
          clientY = _ev$touches$.clientY;
      var count = swiperCount - 1;
      var first = 0;
      var last = count * swiperWidth;
      var newTranslate = translate;

      if (autoplay) {
        clearInterval(_this.timer);
      }

      if (loop) {
        switch (Math.abs(translate)) {
          case first:
            newTranslate = -(count - 1) * swiperWidth;
            break;

          case last:
            newTranslate = -1 * swiperWidth;
            break;
        }
      }

      _this.setState({
        startX: clientX,
        startY: clientY,
        prevTranslate: clientX - newTranslate,
        touch: true
      });

      clearTimeout(_this.changeTimer);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onTouchMove", function (ev) {
      ev.stopPropagation();
      var _this$state3 = _this.state,
          startX = _this$state3.startX,
          startY = _this$state3.startY,
          prevTranslate = _this$state3.prevTranslate,
          moveX = _this$state3.moveX,
          moveY = _this$state3.moveY,
          move = _this$state3.move,
          swiperWidth = _this$state3.swiperWidth,
          swiperCount = _this$state3.swiperCount,
          loop = _this$state3.loop,
          direction = _this$state3.direction;
      var _ev$touches$2 = ev.touches[0],
          clientX = _ev$touches$2.clientX,
          clientY = _ev$touches$2.clientY;
      var vertical = Math.abs(clientY - startY);
      var horizontal = Math.abs(clientX - startX);
      var isHorizontal = horizontal > 10;
      var newDirection = direction || (horizontal > vertical ? 'horizontal' : 'vertical');
      var min = 0;
      var max = swiperWidth * (swiperCount - 1);
      var newTranslate = clientX - prevTranslate;

      if (!loop) {
        if (newTranslate > min) {
          newTranslate = 0;
        } else if (newTranslate < -max) {
          newTranslate = -max;
        }
      }

      switch (direction) {
        case 'horizontal':
          _this.stopScroll();

          _this.sethorizontalDirection(clientX);

          _this.setState({
            translate: newTranslate,
            transition: ''
          });

          break;

        case 'vertical':
          break;
      }

      _this.setState({
        moveX: clientX,
        move: true,
        moveY: clientY,
        direction: newDirection
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "emitChange", function (newSelected) {
      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          timeout = _this$props3.timeout;
      clearTimeout(_this.changeTimer);
      _this.changeTimer = setTimeout(function () {
        onChange(newSelected);
      }, timeout);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onTouchEnd", function (ev) {
      var _this$props4 = _this.props,
          timeout = _this$props4.timeout,
          children = _this$props4.children,
          autoplay = _this$props4.autoplay,
          overflowScale = _this$props4.overflowScale;
      var _this$state4 = _this.state,
          translate = _this$state4.translate,
          swiperWidth = _this$state4.swiperWidth,
          move = _this$state4.move,
          horizontalDirection = _this$state4.horizontalDirection,
          selected = _this$state4.selected,
          loop = _this$state4.loop,
          direction = _this$state4.direction;
      var translateScale = translate / swiperWidth;
      var moveScale = parseFloat(_this.sliceFloat(translateScale));
      var index = loop ? Math.abs(Math.floor(translateScale)) - 1 : Math.abs(Math.floor(translateScale));
      var newSelected = selected;
      var newTranslate = translate;

      if (autoplay) {
        _this.autoplayTimer();
      }

      if (move && direction == 'horizontal') {
        _this.startScroll();

        var moveLeft = -1;
        var moveRight = 1;

        switch (horizontalDirection) {
          case moveLeft:
            if (moveScale > overflowScale) {
              newTranslate = _this.getTranslate(-Math.floor(translateScale));

              if (index < children.length) {
                newSelected = _this.getSelected(index + 1);
              } else {
                newSelected = _this.getSelected(1);
              }

              _this.emitChange(newSelected);
            } else {
              newTranslate = _this.getTranslate(-Math.ceil(translateScale));

              if (moveScale < 0.01) {
                _this.emitChange(newSelected);
              }
            }

            break;

          case moveRight:
            if (moveScale < 1 - overflowScale) {
              newTranslate = _this.getTranslate(-Math.ceil(translateScale));

              if (index > 0) {
                newSelected = _this.getSelected(index);
              } else {
                newSelected = _this.getSelected(children.length);
              }

              if (!loop) {
                if (index == 0) {
                  newSelected = _this.getSelected(1);
                }
              } else {
                if (index == 0) {
                  _this.transitionTimer = setTimeout(function () {
                    _this.setState({
                      translate: _this.getTranslate(children.length),
                      transition: ''
                    });
                  }, timeout);
                }
              }

              _this.emitChange(newSelected);
            } else {
              newTranslate = _this.getTranslate(-Math.floor(translateScale));

              if (moveScale < 0.01) {
                _this.emitChange(newSelected);
              }
            }

            break;
        }

        _this.setState({
          selected: newSelected,
          translate: newTranslate,
          horizontalDirection: 0
        });
      }

      _this.setState({
        touch: false,
        transition: "transform ".concat(timeout, "ms "),
        move: false,
        direction: ''
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getTranslate", function (index) {
      var swiperWidth = _this.state.swiperWidth;
      return -index * swiperWidth;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getSelected", function (index) {
      var children = _this.props.children;
      return children[index - 1] && children[index - 1].key;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "stopScroll", function () {
      document.querySelectorAll('.scroll').forEach(function (d) {
        d.style.overflow = 'hidden';
      });
      document.documentElement.style.overflow = 'hidden';
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "startScroll", function () {
      document.documentElement.style.overflow = 'auto';
      document.querySelectorAll('.scroll').forEach(function (d) {
        d.style.overflow = 'auto';
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "renderItem", function () {
      var children = _this.props.children;
      var _this$state5 = _this.state,
          swiperWidth = _this$state5.swiperWidth,
          swiperCount = _this$state5.swiperCount;
      var loop = _this.state.loop;

      if (children.length) {
        var middle = children.map(function (d, i) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
            style: {
              width: 100 / swiperCount + '%'
            },
            className: "swiper-item",
            key: i
          }, d);
        });

        if (loop) {
          return [react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
            style: {
              width: 100 / swiperCount + '%'
            },
            className: "swiper-item",
            key: "last"
          }, children[children.length - 1])].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(middle), [react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
            style: {
              width: 100 / swiperCount + '%'
            },
            className: "swiper-item",
            key: "first"
          }, children[0])]);
        }

        return middle;
      }

      return children;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "renderDot", function () {
      var _this$props5 = _this.props,
          children = _this$props5.children,
          dot = _this$props5.dot;
      var selected = _this.state.selected;

      if (children.length && dot) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "swiper-dots"
        }, react__WEBPACK_IMPORTED_MODULE_9__["Children"].map(children, function (d, i) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
            className: "swiper-dot".concat(d.key === selected ? ' swiper-dot-active' : ''),
            key: i
          });
        }));
      } else {
        return null;
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "initWrapWidth", function () {
      var _this$state6 = _this.state,
          swiperCount = _this$state6.swiperCount,
          swiperWidth = _this$state6.swiperWidth;
      return swiperCount * 100 + '%';
    });

    var style = _props.style;
    _this.state = {
      selected: _props.defaultSelected,
      swiperCount: 0,
      swiperWidth: 0,
      prevTranslate: 0,
      translate: 0,
      transition: "",
      startX: 0,
      moveX: 0,
      touch: false,
      loop: _props.autoplay ? true : _props.loop,
      move: false,
      horizontalDirection: 0,
      direction: ''
    };
    window.addEventListener('resize', _this.resetWidth, false);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Swiper, [{
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          children = _this$props6.children,
          style = _this$props6.style,
          className = _this$props6.className,
          classPrefixer = _this$props6.classPrefixer;
      var _this$state7 = this.state,
          translate = _this$state7.translate,
          transition = _this$state7.transition;
      var events = {
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd
      };
      var classes = classnames__WEBPACK_IMPORTED_MODULE_11___default()(classPrefixer, className);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        ref: "swiper"
      }, events, {
        style: style,
        className: classes
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        style: {
          width: this.initWrapWidth(),
          transform: "translate(".concat(translate, "px)"),
          transition: transition
        },
        className: "swiper-wrap"
      }, this.renderItem()), this.renderDot());
    }
  }]);

  return Swiper;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(Swiper, "defaultProps", {
  classPrefixer: 'swiper',
  loop: false,
  timeout: 200,
  autoplay: false,
  duration: 3,
  defaultSelected: '',
  overflowScale: 0.3,
  dot: false,
  onChange: function onChange(key) {}
});

Swiper.propTypes = {
  loop: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  autoplay: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  duration: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  defaultSelected: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  overflowScale: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  dot: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
    key: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.element])).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Swiper);

/***/ }),

/***/ "./public/src/components/swiper/index.less":
/*!*************************************************!*\
  !*** ./public/src/components/swiper/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/swiper/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/swiper/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/swiper/index.less");

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

/***/ "./public/src/components/tag/index.js":
/*!********************************************!*\
  !*** ./public/src/components/tag/index.js ***!
  \********************************************/
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.less */ "./public/src/components/tag/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_9__);











var Tag =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Tag, _PureComponent);

  function Tag() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Tag);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Tag).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          classPrefixer = _this$props.classPrefixer,
          children = _this$props.children,
          style = _this$props.style,
          active = _this$props.active,
          onClick = _this$props.onClick;
      var activeClass = active ? "".concat(classPrefixer, "-active") : null;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_7___default()(classPrefixer, className, activeClass);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        onClick: onClick,
        style: style,
        className: classes
      }, children);
    }
  }]);

  return Tag;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(Tag, "defaultProps", {
  classPrefixer: 'tag',
  active: false,
  onClick: function onClick() {}
});

Tag.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  active: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),

/***/ "./public/src/components/tag/index.less":
/*!**********************************************!*\
  !*** ./public/src/components/tag/index.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/tag/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/tag/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/tag/index.less");

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

/***/ "./public/src/components/toast/index.js":
/*!**********************************************!*\
  !*** ./public/src/components/toast/index.js ***!
  \**********************************************/
/*! exports provided: ToastComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading */ "./public/src/components/toast/loading/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./public/src/components/toast/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);







var ToastComponent = function ToastComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "toast"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "toast-bg"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    style: props.style,
    className: "toast-message"
  }, props.children)));
};

var Toast =
/*#__PURE__*/
function () {
  function Toast() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Toast);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Toast, null, [{
    key: "loading",
    value: function loading(props) {
      this.div = document.createElement('div');
      document.body.appendChild(this.div);
      Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["render"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_loading__WEBPACK_IMPORTED_MODULE_5__["default"], props), this.div);

      if (props.duration) {
        this.timer = setTimeout(function () {
          Toast.close();
        }, props.duration * 1000);
      }
    }
  }, {
    key: "show",
    value: function show(props) {
      this.div = document.createElement('div');
      document.body.appendChild(this.div);
      Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["render"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ToastComponent, {
        style: props.style
      }, props.message), this.div);

      if (props.duration) {
        this.timer = setTimeout(function () {
          Toast.close();
        }, props.duration * 1000);
      }
    }
  }, {
    key: "close",
    value: function close() {
      var unmountResult = Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["unmountComponentAtNode"])(this.div);

      if (unmountResult && this.div.parentNode) {
        this.div.parentNode.removeChild(this.div);
        clearTimeout(this.timer);
      }
    }
  }]);

  return Toast;
}();

/* harmony default export */ __webpack_exports__["default"] = (Toast);

/***/ }),

/***/ "./public/src/components/toast/index.less":
/*!************************************************!*\
  !*** ./public/src/components/toast/index.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/toast/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/toast/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/components/toast/index.less");

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

/***/ "./public/src/components/toast/loading/index.js":
/*!******************************************************!*\
  !*** ./public/src/components/toast/loading/index.js ***!
  \******************************************************/
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/icon */ "./public/src/components/icon/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ */ "./public/src/components/toast/index.js");












var ToastLoading =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ToastLoading, _PureComponent);

  function ToastLoading() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ToastLoading);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ToastLoading).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ToastLoading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classPrefixer = _this$props.classPrefixer,
          className = _this$props.className,
          message = _this$props.message,
          iconStyle = _this$props.iconStyle,
          style = _this$props.style;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_8___default()(classPrefixer, className);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(___WEBPACK_IMPORTED_MODULE_10__["ToastComponent"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: style,
        className: classes
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "loading"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "toast-message"
      }, message || '加载中 ...')));
    }
  }]);

  return ToastLoading;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(ToastLoading, "defaultProps", {
  classPrefixer: 'toast-loading'
});

ToastLoading.propTypes = {
  message: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (ToastLoading);

/***/ }),

/***/ "./public/src/config/router.config.js":
/*!********************************************!*\
  !*** ./public/src/config/router.config.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_toast_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/toast/loading */ "./public/src/components/toast/loading/index.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/icon */ "./public/src/components/icon/index.js");
/* harmony import */ var _pages_search_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/search/history */ "./public/src/pages/search/history/index.js");
/* harmony import */ var _pages_search_result__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/search/result */ "./public/src/pages/search/result/index.js");
/* harmony import */ var _pages_newlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/newlist */ "./public/src/pages/newlist/index.js");
/* harmony import */ var _pages_toplist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/toplist */ "./public/src/pages/toplist/index.js");
/* harmony import */ var _pages_plist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/plist */ "./public/src/pages/plist/index.js");
/* harmony import */ var _pages_singer_classlist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/singer-classlist */ "./public/src/pages/singer-classlist/index.js");










var Search = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../pages/search */ "./public/src/pages/search/index.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_toast_loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: {
        color: 'white'
      }
    });
  }
});
var Rank = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
  loader: function loader() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ../pages/toplist/rank */ "./public/src/pages/toplist/rank/index.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_toast_loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: {
        color: 'white'
      }
    });
  }
});
var PlistDetail = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
  loader: function loader() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ../pages/plist/detail */ "./public/src/pages/plist/detail/index.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_toast_loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: {
        color: 'white'
      }
    });
  }
});
var SingerList = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../pages/singer-classlist/singers */ "./public/src/pages/singer-classlist/singers/index.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_toast_loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: {
        color: 'white'
      }
    });
  }
});
var SingerSongsList = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
  loader: function loader() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ../pages/singer-classlist/songs */ "./public/src/pages/singer-classlist/songs/index.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_toast_loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: {
        color: 'white'
      }
    });
  }
});
var Main = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../pages/main */ "./public/src/pages/main/index.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_toast_loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: {
        color: 'white'
      }
    });
  }
});

var Test = function Test() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: 20
    },
    className: "test"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "play-menu"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = ([{
  path: '/',
  redirect: '/basic/newlist',
  exact: true
}, {
  path: '/basic/',
  component: Main,
  strict: true,
  routes: [{
    path: '/basic/newlist',
    component: _pages_newlist__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, {
    path: '/basic/toplist',
    component: _pages_toplist__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, {
    path: '/basic/plist',
    component: _pages_plist__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, {
    path: '/basic/singer-classlist',
    component: _pages_singer_classlist__WEBPACK_IMPORTED_MODULE_9__["default"]
  }]
}, {
  path: '/search',
  component: Search,
  routes: [{
    path: '/search',
    exact: true,
    component: _pages_search_history__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    path: '/search/:keyword',
    component: _pages_search_result__WEBPACK_IMPORTED_MODULE_5__["default"]
  }]
}, {
  path: '/rank/:id',
  component: Rank
}, {
  path: '/plist/:id',
  component: PlistDetail
}, {
  path: '/singerclass/:id',
  component: SingerList
}, {
  path: '/singer/:id',
  component: SingerSongsList
}, {
  path: '/test',
  component: Test
}, {
  path: '',
  component: function component() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404");
  }
}]);

/***/ }),

/***/ "./public/src/pages/newlist/index.js":
/*!*******************************************!*\
  !*** ./public/src/pages/newlist/index.js ***!
  \*******************************************/
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
/* harmony import */ var _components_songslist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/songslist */ "./public/src/components/songslist/index.js");
/* harmony import */ var _components_action_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/action-sheet */ "./public/src/components/action-sheet/index.js");
/* harmony import */ var _components_swiper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/swiper */ "./public/src/components/swiper/index.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/icon */ "./public/src/components/icon/index.js");
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/scroll */ "./public/src/components/scroll/index.js");
/* harmony import */ var _common_basehandler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/basehandler */ "./public/src/common/basehandler/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index.less */ "./public/src/pages/newlist/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_16__);








var _dec, _class, _temp;












var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$newlist = _ref.newlist,
      songs = _ref$newlist.songs,
      banners = _ref$newlist.banners;
  return {
    songs: songs,
    banners: banners
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getListRequest: function getListRequest() {
      dispatch({
        type: 'GET_NEWLIST_REQUEST'
      });
    }
  };
};

var Newlist = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps), Object(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_9__["immutableRenderDecorator"])(_class = _dec(_class = Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_15__["default"])(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Newlist, _Component);

  function Newlist(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Newlist);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Newlist).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentDidMount", function () {
      var _this$props = _this.props,
          getListRequest = _this$props.getListRequest,
          songs = _this$props.songs;

      if (!songs.length) {
        getListRequest();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getSongs", function () {
      var songs = _this.props.songs;
      return songs.map(function (d, i) {
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "renderBanner", function () {
      var banners = _this.props.banners;

      if (banners.length) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_swiper__WEBPACK_IMPORTED_MODULE_12__["default"], {
          defaultSelected: "".concat(banners[0].id),
          dot: true,
          autoplay: true
        }, banners.map(function (d, i) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            onClick: function onClick() {
              window.open(d.extra.tourl);
            },
            key: d.id,
            src: d.imgurl,
            alt: d.title
          });
        }));
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Newlist, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          songs = _this$props2.songs,
          isTop = _this$props2.isTop,
          onSongClick = _this$props2.onSongClick,
          addPlayingList = _this$props2.addPlayingList,
          onDownload = _this$props2.onDownload;
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
          _common_basehandler__WEBPACK_IMPORTED_MODULE_15__["toast"].show('添加成功');
          close();
        }
      }, {
        name: '分享',
        key: 'share',
        onClick: function onClick(row, close) {
          _common_basehandler__WEBPACK_IMPORTED_MODULE_15__["toast"].show('该功能暂时没开通');
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
        className: "newlist"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_scroll__WEBPACK_IMPORTED_MODULE_14__["default"], {
        isTop: isTop,
        timeout: 300,
        overflowScale: .25,
        style: {
          paddingTop: 91,
          paddingBottom: 70
        }
      }, !songs.length && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          display: 'block',
          margin: '10px auto',
          fontSize: 22,
          color: 'silver'
        },
        type: "loading"
      }), this.renderBanner(), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_songslist__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: onSongClick,
        songs: this.getSongs(),
        actions: actions,
        actionClick: function actionClick(row) {
          return console.log(row);
        },
        actionComponent: _components_action_sheet__WEBPACK_IMPORTED_MODULE_11__["default"]
      })));
    }
  }]);

  return Newlist;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]), _temp)) || _class) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Newlist);

/***/ }),

/***/ "./public/src/pages/newlist/index.less":
/*!*********************************************!*\
  !*** ./public/src/pages/newlist/index.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/newlist/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/newlist/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/newlist/index.less");

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

/***/ "./public/src/pages/player-container/index.js":
/*!****************************************************!*\
  !*** ./public/src/pages/player-container/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-immutable-render-mixin */ "./node_modules/react-immutable-render-mixin/lib/index.js");
/* harmony import */ var react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_basehandler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/basehandler */ "./public/src/common/basehandler/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/header */ "./public/src/components/header/index.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/slider */ "./public/src/components/slider/index.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/icon */ "./public/src/components/icon/index.js");
/* harmony import */ var _components_player__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/player */ "./public/src/components/player/index.js");
/* harmony import */ var _components_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/mask */ "./public/src/components/mask/index.js");
/* harmony import */ var _components_my_songs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/my-songs */ "./public/src/components/my-songs/index.js");
/* harmony import */ var _components_lyrics__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/lyrics */ "./public/src/components/lyrics/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./index.less */ "./public/src/pages/player-container/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_21__);









var _dec, _class, _temp;
















var mapStateToProps = function mapStateToProps(_ref) {
  var playing = _ref.rootState.playing;
  return {
    playing: playing
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    removeItem: function removeItem(payload) {
      dispatch({
        type: 'REMOVE_PLAYING_ITEM',
        payload: payload
      });
    },
    updateMethod: function updateMethod(payload) {
      dispatch({
        type: 'UPDATE_PLAYING_METHOD',
        payload: payload
      });
    },
    initList: function initList() {
      dispatch({
        type: 'INIG_PLAYING_LIST'
      });
    }
  };
};

var PlayerContainer = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps), Object(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_12__["immutableRenderDecorator"])(_class = _dec(_class = Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_13__["default"])(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(PlayerContainer, _Component);

  function PlayerContainer() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PlayerContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(PlayerContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      audio: null,
      audioUsed: 0,
      loading: false,
      audioState: 'pause',
      curTime: 0,
      silderActive: false,
      myListVisible: false,
      methods: ['loop-one', 'loop', 'random']
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "componentWillReceiveProps", function (nextProps, nextState) {
      var replayMusic = nextProps.replayMusic,
          _nextProps$playing = nextProps.playing,
          replay = _nextProps$playing.replay,
          list = _nextProps$playing.list,
          music = _nextProps$playing.music;
      var _this$state = _this.state,
          audio = _this$state.audio,
          audioState = _this$state.audioState;

      if (music !== _this.props.playing.music) {
        _this.setState({
          audioUsed: 0
        });
      }

      if (replay) {
        _this.setState({
          audioUsed: 0,
          myListVisible: false
        });

        audio.currentTime = 0;
        replayMusic(false);
      }

      if (_this.props.playing.list.length === list.length && audioState === nextState.audioState) {
        _this.setState({
          myListVisible: false,
          loading: false
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getRef", function (ref) {
      _this.setState({
        audio: ref
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onAudioToggle", function (ev) {
      var audioState = _this.state.audioState;

      if (audioState === 'pause') {
        _this.onAudioPlay();
      } else {
        _this.audioPause();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "audioPause", function () {
      var audio = _this.state.audio;

      if (!audio) {
        return;
      }

      if (!audio.paused) {
        audio.pause();
      }

      _this.setState({
        audioState: 'pause',
        loading: false
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onAudioPlay", function () {
      var audio = _this.state.audio;
      var _this$props = _this.props,
          _this$props$playing = _this$props.playing,
          lastMusic = _this$props$playing.lastMusic,
          list = _this$props$playing.list,
          onSongClick = _this$props.onSongClick,
          playMethod = _this$props.playMethod;

      if (!audio) {
        if (lastMusic) {
          return onSongClick({
            id: lastMusic
          });
        } else {
          if (list.length) {
            switch (playMethod) {
              case 'loop':
              case 'loop-one':
                return onSongClick(list[0].id);

              case 'random':
                return onSongClick(list[Math.floor(Math.random() * list.length - 1)]);
            }
          } else {
            return _common_basehandler__WEBPACK_IMPORTED_MODULE_13__["toast"].show('你怕是第一次来哦,去首页看看把');
          }
        }
      }

      if (audio.paused) {
        audio.play();
      }

      _this.setState({
        audioState: 'play',
        loading: false
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getCurrentMusicIndex", function () {
      var _this$props$playing2 = _this.props.playing,
          list = _this$props$playing2.list,
          id = _this$props$playing2.id;
      var currentIndex = 0;
      list.forEach(function (d, i) {
        if (d.id === id) {
          currentIndex = i;
        }
      });
      return currentIndex;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onAudioPause", function () {
      _this.setState({
        audioState: 'pause'
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onAudioEnded", function () {
      var _this$props2 = _this.props,
          _this$props2$playing = _this$props2.playing,
          list = _this$props2$playing.list,
          playMethod = _this$props2$playing.playMethod,
          id = _this$props2$playing.id,
          onSongClick = _this$props2.onSongClick;
      var audio = _this.state.audio;

      _this.setState({
        audioUsed: 0,
        loading: false
      });

      var currentIndex = _this.getCurrentMusicIndex();

      if (!list.length) {
        if (audio.paused) {
          audio.play();
        }

        return onSongClick({
          id: id
        }, true);
      }

      if (currentIndex === 0 && list.length === 1) {
        if (audio.paused) {
          audio.play();
        }

        return onSongClick(list[0], true);
      }

      switch (playMethod) {
        case 'loop':
          if (currentIndex === list.length - 1) {
            if (audio.paused) {
              audio.play();
            }

            return onSongClick(list[0], true);
          } else {
            return onSongClick(list[currentIndex + 1]);
          }

        case 'loop-one':
          if (audio.paused) {
            audio.play();
          }

          return onSongClick({
            id: id
          }, true);

        case 'random':
          var randomIndex = Math.floor(Math.random() * list.length);
          return onSongClick(list[randomIndex], true);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onAudioChange", function (used) {
      var audio = _this.state.audio;

      if (audio) {
        var timelength = _this.props.playing.timelength;
        var totalTime = parseFloat((timelength / 1000).toFixed(2));
        var time = parseFloat((used / 100 * totalTime).toFixed(2));
        audio.currentTime = time;

        if (audio.paused) {
          audio.play();
        }

        _this.setState({
          audioUsed: used,
          silderActive: false
        });
      } else {
        _this.setState({
          used: 0
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onAudioWaiting", function () {
      _this.setState({
        loading: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onSliderClick", function () {
      _this.setState({
        silderActive: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onTimeUpdate", function (target) {
      var timelength = _this.props.playing.timelength;
      var _this$state2 = _this.state,
          loading = _this$state2.loading,
          audioState = _this$state2.audioState,
          silderActive = _this$state2.silderActive;

      if (!target.paused) {
        var curTime = parseFloat(target.currentTime.toFixed(2));
        var totalTime = parseFloat((timelength / 1000).toFixed(2));
        var audioUsed = parseFloat((curTime / totalTime * 100).toFixed(2));

        if (!silderActive) {
          _this.setState({
            audioUsed: audioUsed,
            curTime: curTime,
            loading: false
          });
        }
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onPrevClick", function () {
      var _this$props3 = _this.props,
          _this$props3$playing = _this$props3.playing,
          list = _this$props3$playing.list,
          playMethod = _this$props3$playing.playMethod,
          onSongClick = _this$props3.onSongClick;

      var currentIndex = _this.getCurrentMusicIndex();

      if (list.length <= 1) {
        return _common_basehandler__WEBPACK_IMPORTED_MODULE_13__["toast"].show('快去首页添加歌曲吧');
      }

      switch (playMethod) {
        case 'loop-one':
        case 'loop':
        case 'random':
          if (currentIndex === 0) {
            return onSongClick(list[list.length - 1], true);
          } else {
            return onSongClick(list[currentIndex - 1]);
          }

      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onNextClick", function () {
      var _this$props4 = _this.props,
          _this$props4$playing = _this$props4.playing,
          list = _this$props4$playing.list,
          playMethod = _this$props4$playing.playMethod,
          onSongClick = _this$props4.onSongClick;

      var currentIndex = _this.getCurrentMusicIndex();

      if (list.length <= 1) {
        return _common_basehandler__WEBPACK_IMPORTED_MODULE_13__["toast"].show('快去首页添加歌曲吧');
      }

      switch (playMethod) {
        case 'loop-one':
        case 'loop':
          if (currentIndex === list.length - 1) {
            return onSongClick(list[0], true);
          } else {
            return onSongClick(list[currentIndex + 1]);
          }

        case 'random':
          var randomIndex = Math.floor(Math.random() * list.length);
          return onSongClick(list[randomIndex], true);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "showCover", function () {
      var _this$props5 = _this.props,
          history = _this$props5.history,
          search = _this$props5.location.search;
      history.push('?cover');
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "hideCover", function () {
      _this.setState({
        coverVisible: false
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleBack", function () {
      var history = _this.props.history;
      history.go(-1);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "showMyLists", function () {
      _this.setState({
        myListVisible: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "hideMyLists", function () {
      _this.setState({
        myListVisible: false
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getPlayIconType", function () {
      var playMethod = _this.props.playing.playMethod;

      switch (playMethod) {
        case 'loop-one':
          return 'loop-one';
          break;

        case 'random':
          return 'random';
          break;

        case 'loop':
          return 'retweet';
          break;
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "changeMothod", function (ev) {
      ev.stopPropagation();
      var _this$props6 = _this.props,
          updateMethod = _this$props6.updateMethod,
          playMethod = _this$props6.playing.playMethod;
      var methods = _this.state.methods;
      methods.forEach(function (d, i) {
        if (d === playMethod) {
          if (i < methods.length - 1) {
            updateMethod(methods[i + 1]);
          } else {
            updateMethod(methods[0]);
          }
        }
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "removeList", function (ev) {
      ev.stopPropagation();
      var _this$props7 = _this.props,
          initList = _this$props7.initList,
          list = _this$props7.playing.list;

      if (list.length) {
        initList();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "timeFomat", function (second) {
      var minute = Math.floor(second / 60);
      var remain = second % 60;
      var finalyMinute = minute < 10 ? "0".concat(minute) : minute;
      var finalySecond = remain.toString().length === 1 ? "0".concat(remain) : remain;
      return [finalyMinute, finalySecond].join(':');
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PlayerContainer, [{
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          playing = _this$props8.playing,
          onSongClick = _this$props8.onSongClick,
          search = _this$props8.location.search,
          removeItem = _this$props8.removeItem;
      var _this$state3 = this.state,
          audioUsed = _this$state3.audioUsed,
          loading = _this$state3.loading,
          audioState = _this$state3.audioState,
          myListVisible = _this$state3.myListVisible,
          curTime = _this$state3.curTime;
      var visbileClass = classnames__WEBPACK_IMPORTED_MODULE_9___default()({
        'player-cover-wrap': true,
        'player-cover-wrap-active': search === '?cover'
      });
      var listVisible = classnames__WEBPACK_IMPORTED_MODULE_9___default()({
        'my-songs-mask': true,
        'my-songs-mask-active': myListVisible
      });
      var singerCoverVisible = classnames__WEBPACK_IMPORTED_MODULE_9___default()({
        'singer-cover': true,
        'singer-cover-active': audioState === 'play' && !loading
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "player-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_player__WEBPACK_IMPORTED_MODULE_17__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        onClick: this.showCover,
        getRef: this.getRef,
        onTimeUpdate: this.onTimeUpdate,
        onNextClick: this.onNextClick,
        audioState: audioState,
        audioUsed: audioUsed,
        loading: loading,
        onAudioToggle: this.onAudioToggle,
        onAudioPlay: this.onAudioPlay,
        onAudioPause: this.onAudioPause,
        onSliderClick: this.onSliderClick,
        onAudioChange: this.onAudioChange,
        onAudioWaiting: this.onAudioWaiting,
        onAudioEnded: this.onAudioEnded
      }, playing)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: visbileClass
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(playing.img, ")")
        },
        className: "player-bg"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "player-cover"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_14__["default"], {
        logo: [react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_16__["default"], {
          onClick: this.handleBack,
          key: "icon",
          style: {
            fontSize: 22,
            marginRight: 10
          },
          type: "arrow-left"
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: "info",
          className: "info"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", null, playing.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, playing.author))]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: singerCoverVisible
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: playing.img,
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_lyrics__WEBPACK_IMPORTED_MODULE_20__["default"], {
        lyrics: playing.lyrics,
        currentTime: Math.ceil(curTime)
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "player-actions"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "player-time"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "time-use"
      }, this.timeFomat(Math.floor(curTime))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_slider__WEBPACK_IMPORTED_MODULE_15__["default"], {
        onChange: this.onAudioChange,
        onClick: this.onSliderClick,
        used: audioUsed,
        style: {
          background: 'silver'
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "time-length"
      }, this.timeFomat(Math.floor(playing.timelength / 1000)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "player-icons"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_16__["default"], {
        style: {
          fontSize: 10
        },
        onClick: this.changeMothod,
        type: "".concat(this.getPlayIconType())
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_16__["default"], {
        onClick: this.onPrevClick,
        type: "prev"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_16__["default"], {
        onClick: this.onAudioToggle,
        type: audioState === 'play' ? 'pause' : 'play'
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_16__["default"], {
        onClick: this.onNextClick,
        type: "next"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_16__["default"], {
        onClick: this.showMyLists,
        type: "play-menu"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_mask__WEBPACK_IMPORTED_MODULE_18__["MaskComponent"], {
        className: listVisible,
        onClick: this.hideMyLists
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_my_songs__WEBPACK_IMPORTED_MODULE_19__["default"], {
        songs: playing.list,
        removeItem: removeItem,
        style: {
          height: '60%'
        },
        onClick: onSongClick,
        logo: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_16__["default"], {
          onClick: this.changeMothod,
          type: "".concat(this.getPlayIconType(), "-black")
        }),
        extra: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_16__["default"], {
          onClick: this.removeList,
          style: {
            fontSize: 8,
            color: 'silver'
          },
          type: "trash"
        })
      })))));
    }
  }]);

  return PlayerContainer;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]), _temp)) || _class) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (PlayerContainer);

/***/ }),

/***/ "./public/src/pages/player-container/index.less":
/*!******************************************************!*\
  !*** ./public/src/pages/player-container/index.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/player-container/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/player-container/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/player-container/index.less");

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

/***/ "./public/src/pages/plist/index.js":
/*!*****************************************!*\
  !*** ./public/src/pages/plist/index.js ***!
  \*****************************************/
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
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/card */ "./public/src/components/card/index.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/icon */ "./public/src/components/icon/index.js");
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/scroll */ "./public/src/components/scroll/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index.less */ "./public/src/pages/plist/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_14__);








var _dec, _class, _temp;










var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$plist = _ref.plist,
      list = _ref$plist.list,
      total = _ref$plist.total,
      page = _ref$plist.page,
      loading = _ref$plist.loading;
  return {
    list: list,
    total: total,
    page: page,
    loading: loading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getList: function getList(payload) {
      dispatch({
        type: 'GET_PLIST_REQUEST',
        payload: payload
      });
    },
    loadList: function loadList(payload) {
      dispatch({
        type: 'LOAD_PLIST_REQUEST',
        payload: payload
      });
    },
    showLoading: function showLoading(payload) {
      dispatch({
        type: 'CHANGE_PLIST_LOADING_STATE',
        payload: payload
      });
    }
  };
};

var Plist = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps), Object(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_10__["immutableRenderDecorator"])(_class = _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Plist, _Component);

  function Plist() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Plist);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Plist)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentDidMount", function () {
      var _this$props = _this.props,
          list = _this$props.list,
          getList = _this$props.getList;

      if (!list.length) {
        getList({
          page: 1
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentWillUnmount", function () {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "toDetail", function (id) {
      var history = _this.props.history;
      history.push("/plist/".concat(id));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "renderCardItem", function () {
      var list = _this.props.list;
      return list.map(function (d, i) {
        var title = d.specialname,
            playcount = d.playcount,
            imgurl = d.imgurl,
            id = d.specialid;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_card__WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: i,
          onClick: _this.toDetail.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), d.specialid),
          source: {
            id: id,
            title: title,
            desc: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
              style: {
                fontSize: 3,
                color: 'silver',
                marginRight: 5
              },
              type: "headphone"
            }), playcount),
            avatar: imgurl.replace(/{size}/, 100)
          }
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "loadList", function () {
      var _this$props2 = _this.props,
          total = _this$props2.total,
          list = _this$props2.list,
          page = _this$props2.page,
          loadList = _this$props2.loadList,
          showLoading = _this$props2.showLoading;

      if (total > list.length) {
        showLoading(true);
        loadList({
          page: page + 1
        });
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Plist, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          list = _this$props3.list,
          total = _this$props3.total,
          isTop = _this$props3.isTop,
          loading = _this$props3.loading;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plist"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_scroll__WEBPACK_IMPORTED_MODULE_13__["default"], {
        loading: loading,
        onBottom: this.loadList,
        isTop: isTop,
        timeout: 300,
        style: {
          paddingTop: 91,
          paddingBottom: 70
        }
      }, !list.length && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          display: 'block',
          margin: '10px auto',
          fontSize: 22,
          color: 'silver'
        },
        type: "loading"
      }), this.renderCardItem()));
    }
  }]);

  return Plist;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]), _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Plist));

/***/ }),

/***/ "./public/src/pages/plist/index.less":
/*!*******************************************!*\
  !*** ./public/src/pages/plist/index.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/plist/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/plist/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/plist/index.less");

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

/***/ "./public/src/pages/search/history/index.js":
/*!**************************************************!*\
  !*** ./public/src/pages/search/history/index.js ***!
  \**************************************************/
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
/* harmony import */ var react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-immutable-render-mixin */ "./node_modules/react-immutable-render-mixin/lib/index.js");
/* harmony import */ var react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/tag */ "./public/src/components/tag/index.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/icon */ "./public/src/components/icon/index.js");








var _dec, _class, _temp;







var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$search = _ref.search,
      hotList = _ref$search.hotList,
      historyList = _ref$search.historyList;
  return {
    hotList: hotList,
    historyList: historyList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getHotList: function getHotList() {
      dispatch({
        type: 'GET_HOT_SEARCH_LIST'
      });
    },
    removeHistoryItem: function removeHistoryItem(payload) {
      dispatch({
        type: 'REMOVE_HISTORY_ITEM',
        payload: payload
      });
    },
    emptyHistory: function emptyHistory() {
      dispatch({
        type: 'REMOVE_HISTORY_LIST'
      });
    }
  };
};

var SearchHistory = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps), Object(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_8__["immutableRenderDecorator"])(_class = _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SearchHistory, _Component);

  function SearchHistory() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SearchHistory);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SearchHistory)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentDidMount", function () {
      var _this$props = _this.props,
          hotList = _this$props.hotList,
          getHotList = _this$props.getHotList;

      if (!hotList.length) {
        getHotList();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "toSearchResult", function (keyword) {
      var history = _this.props.history;

      if (keyword) {
        history.push("/search/".concat(keyword));
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "renderHotList", function () {
      var hotList = _this.props.hotList;
      return hotList.map(function (d, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_tag__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onClick: _this.toSearchResult.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), d.keyword),
          active: d.jumpurl ? true : false,
          key: i
        }, d.keyword);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleRemove", function (keyword, ev) {
      ev.stopPropagation();
      var removeHistoryItem = _this.props.removeHistoryItem;
      removeHistoryItem(keyword);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "renderHistoryList", function () {
      var historyList = _this.props.historyList;
      return historyList.map(function (d, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          onClick: _this.toSearchResult.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), d),
          key: d,
          className: "search-history-item"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
          type: "clock"
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, d), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onClick: _this.handleRemove.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), d),
          type: "close"
        }));
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SearchHistory, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          historyList = _this$props2.historyList,
          emptyHistory = _this$props2.emptyHistory;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "search-history"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "search-hot"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", null, "\u70ED\u95E8\u641C\u7D22"), this.renderHotList()), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "search-history-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "search-history-wrap"
      }, this.renderHistoryList()), historyList.length ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        onClick: emptyHistory,
        className: "active"
      }, "\u6E05\u7A7A\u641C\u7D22\u8BB0\u5F55") : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", null, "\u6682\u65E0\u641C\u7D22\u8BB0\u5F55")));
    }
  }]);

  return SearchHistory;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]), _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (SearchHistory);

/***/ }),

/***/ "./public/src/pages/search/result/index.js":
/*!*************************************************!*\
  !*** ./public/src/pages/search/result/index.js ***!
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-immutable-render-mixin */ "./node_modules/react-immutable-render-mixin/lib/index.js");
/* harmony import */ var react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/scroll */ "./public/src/components/scroll/index.js");
/* harmony import */ var _components_songslist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/songslist */ "./public/src/components/songslist/index.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/icon */ "./public/src/components/icon/index.js");
/* harmony import */ var _components_action_sheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/action-sheet */ "./public/src/components/action-sheet/index.js");
/* harmony import */ var _common_basehandler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/basehandler */ "./public/src/common/basehandler/index.js");








var _dec, _class, _temp;










var mapStateToProps = function mapStateToProps(_ref) {
  var result = _ref.search.result;
  return {
    result: result
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    search: function search(payload) {
      dispatch({
        type: 'SEARCH_REQUEST',
        payload: payload
      });
    },
    loadResult: function loadResult(payload) {
      dispatch({
        type: 'LOAD_RESULT_REQUEST',
        payload: payload
      });
    },
    showLoading: function showLoading(payload) {
      dispatch({
        type: 'CHANGE_RESULT_LOADING',
        payload: payload
      });
    },
    initResult: function initResult() {
      dispatch({
        type: 'INIT_RESULT'
      });
    }
  };
};

var Result = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps), Object(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_9__["immutableRenderDecorator"])(_class = _dec(_class = Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_14__["default"])(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Result, _Component);

  function Result() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Result);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Result)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentDidMount", function () {
      var _this$props = _this.props,
          keyword = _this$props.match.params.keyword,
          placeholderChange = _this$props.placeholderChange,
          search = _this$props.search,
          placeholder = _this$props.placeholder;

      if (keyword) {
        if (placeholder !== keyword) {
          placeholderChange(keyword);
          search({
            page: 1,
            keyword: keyword
          });
        }
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentWillUnmount", function () {
      var _this$props2 = _this.props,
          initResult = _this$props2.initResult,
          list = _this$props2.result.list;

      if (list.length) {
        initResult();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "loadList", function () {
      var _this$props3 = _this.props,
          _this$props3$result = _this$props3.result,
          page = _this$props3$result.page,
          total = _this$props3$result.total,
          list = _this$props3$result.list,
          keyword = _this$props3.match.params.keyword,
          loadResult = _this$props3.loadResult,
          showLoading = _this$props3.showLoading;

      if (total > list.length) {
        showLoading(true);
        loadResult({
          keyword: keyword,
          page: page + 1
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getLists", function () {
      var list = _this.props.result.list;
      return list.map(function (d, i) {
        return {
          name: d.songname,
          id: d.hash,
          author: d.singername
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "renderLoading", function () {
      var _this$props$result = _this.props.result,
          complate = _this$props$result.complate,
          list = _this$props$result.list;

      if (complate) {
        if (!list.length) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "search-empty"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            src: "http://m.kugou.com/v3/static/images/index/search_empty.png",
            alt: ""
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", null, "\u6CA1\u6709\u641C\u7D22\u5230\u76F8\u5173\u5185\u5BB9"));
        }
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
          style: {
            display: 'block',
            margin: '10px auto',
            fontSize: 22,
            color: 'silver'
          },
          type: "loading"
        });
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Result, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          _this$props4$result = _this$props4.result,
          list = _this$props4$result.list,
          loading = _this$props4$result.loading,
          onSongClick = _this$props4.onSongClick,
          complate = _this$props4.complate,
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
          _common_basehandler__WEBPACK_IMPORTED_MODULE_14__["toast"].show('添加成功');
          close();
        }
      }, {
        name: '分享',
        key: 'share',
        onClick: function onClick(row, close) {
          _common_basehandler__WEBPACK_IMPORTED_MODULE_14__["toast"].show('该功能暂时没开通');
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
        className: "search-result"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_scroll__WEBPACK_IMPORTED_MODULE_10__["default"], {
        loading: loading,
        onBottom: this.loadList
      }, this.renderLoading(), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_songslist__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onClick: onSongClick,
        songs: this.getLists(),
        actions: actions,
        actionComponent: _components_action_sheet__WEBPACK_IMPORTED_MODULE_13__["default"]
      })));
    }
  }]);

  return Result;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]), _temp)) || _class) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Result);

/***/ }),

/***/ "./public/src/pages/singer-classlist/index.js":
/*!****************************************************!*\
  !*** ./public/src/pages/singer-classlist/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-immutable-render-mixin */ "./node_modules/react-immutable-render-mixin/lib/index.js");
/* harmony import */ var react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/icon */ "./public/src/components/icon/index.js");
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/scroll */ "./public/src/components/scroll/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index.less */ "./public/src/pages/singer-classlist/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_14__);









var _dec, _class, _temp;









var mapStateToProps = function mapStateToProps(_ref) {
  var classList = _ref.singerClasslist.classList;
  return {
    classList: classList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getListRequest: function getListRequest() {
      dispatch({
        type: 'GET_SINGER_CLASSLIST_REQUEST'
      });
    }
  };
};

var Singerlist = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps), Object(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_11__["immutableRenderDecorator"])(_class = _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Singerlist, _Component);

  function Singerlist() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Singerlist);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Singerlist)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "componentDidMount", function () {
      var _this$props = _this.props,
          classList = _this$props.classList,
          getListRequest = _this$props.getListRequest;

      if (!classList.length) {
        getListRequest();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleClick", function (info) {
      var history = _this.props.history;
      history.push("/singerclass/".concat(info.classid));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "renderItem", function (interval) {
      var classList = _this.props.classList;

      if (!classList.length) {
        return null;
      }

      var first = classList[0];
      var result = [];
      var center = [];

      for (var i = 1; i < classList.length; i++) {
        center.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
          onClick: _this.handleClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), classList[i]),
          key: i,
          className: "singer-item"
        }, classList[i].classname, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
          type: "arrow-right"
        })));

        if (i % interval === 0) {
          result.push(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(center));
          center = [];
        }
      }

      return [react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "singer-group",
        key: 0
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        onClick: _this.handleClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), first),
        className: "singer-item"
      }, first.classname, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        type: "arrow-right"
      }))), result.map(function (d, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
          className: "singer-group-close",
          key: i
        }, d);
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        key: classList.length,
        className: "singer-group"
      }, center)];
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Singerlist, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classList = _this$props2.classList,
          isTop = _this$props2.isTop;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "singerlist"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_scroll__WEBPACK_IMPORTED_MODULE_13__["default"], {
        isTop: isTop,
        timeout: 300,
        style: {
          paddingTop: 91,
          paddingBottom: 70
        }
      }, !classList.length && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          display: 'block',
          margin: '10px auto',
          fontSize: 22,
          color: 'silver'
        },
        type: "loading"
      }), this.renderItem(3)));
    }
  }]);

  return Singerlist;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]), _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Singerlist));

/***/ }),

/***/ "./public/src/pages/singer-classlist/index.less":
/*!******************************************************!*\
  !*** ./public/src/pages/singer-classlist/index.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/singer-classlist/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/singer-classlist/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/singer-classlist/index.less");

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

/***/ "./public/src/pages/toplist/index.js":
/*!*******************************************!*\
  !*** ./public/src/pages/toplist/index.js ***!
  \*******************************************/
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
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/card */ "./public/src/components/card/index.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/icon */ "./public/src/components/icon/index.js");
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/scroll */ "./public/src/components/scroll/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index.less */ "./public/src/pages/toplist/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_14__);








var _dec, _class, _temp;










var mapStateToProps = function mapStateToProps(_ref) {
  var list = _ref.toplist.list;
  return {
    list: list
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getListRequest: function getListRequest() {
      dispatch({
        type: 'GET_TOPLIST_REQUEST'
      });
    }
  };
};

var Toplist = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps), Object(react_immutable_render_mixin__WEBPACK_IMPORTED_MODULE_9__["immutableRenderDecorator"])(_class = _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Toplist, _Component);

  function Toplist() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Toplist);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Toplist)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "componentDidMount", function () {
      var _this$props = _this.props,
          list = _this$props.list,
          getListRequest = _this$props.getListRequest;

      if (!list.length) {
        getListRequest();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "toRank", function (id) {
      var history = _this.props.history;
      history.push('/rank/' + id);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "renderCardItem", function () {
      var list = _this.props.list;
      return list.map(function (d, i) {
        var title = d.rankname,
            imgurl = d.imgurl,
            id = d.rankid,
            desc = d.update_frequency;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_card__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onClick: _this.toRank.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), d.rankid),
          key: i,
          source: {
            id: id,
            title: title,
            desc: desc,
            avatar: imgurl.replace(/{size}/g, 640)
          },
          extra: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
            style: {
              color: 'silver',
              margin: 5,
              fontSize: 20
            },
            type: "arrow-right"
          })
        });
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Toplist, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          list = _this$props2.list,
          isTop = _this$props2.isTop;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "toplist"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_scroll__WEBPACK_IMPORTED_MODULE_13__["default"], {
        isTop: isTop,
        timeout: 300,
        style: {
          paddingTop: 91,
          paddingBottom: 70
        }
      }, !list.length && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          display: 'block',
          margin: '10px auto',
          fontSize: 22,
          color: 'silver'
        },
        type: "loading"
      }), this.renderCardItem()));
    }
  }]);

  return Toplist;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]), _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Toplist));

/***/ }),

/***/ "./public/src/pages/toplist/index.less":
/*!*********************************************!*\
  !*** ./public/src/pages/toplist/index.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/toplist/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/toplist/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./public/src/pages/toplist/index.less");

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

/***/ "./public/src/reducers/index.js":
/*!**************************************!*\
  !*** ./public/src/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menus */ "./public/src/reducers/menus.js");
/* harmony import */ var _newlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newlist */ "./public/src/reducers/newlist.js");
/* harmony import */ var _toplist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toplist */ "./public/src/reducers/toplist.js");
/* harmony import */ var _plist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plist */ "./public/src/reducers/plist.js");
/* harmony import */ var _singer_classlist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./singer-classlist */ "./public/src/reducers/singer-classlist.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search */ "./public/src/reducers/search.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var SAVE_SONG_DETAIL = 'SAVE_SONG_DETAIL';
var UPDATE_PLAYING_LIST = 'UPDATE_PLAYING_LIST';
var REMOVE_PLAYING_ITEM = 'REMOVE_PLAYING_ITEM';
var UPDATE_PLAYING_METHOD = 'UPDATE_PLAYING_METHOD';
var INIG_PLAYING_LIST = 'INIG_PLAYING_LIST';
var REPLAY_MUSIC = 'REPLAY_MUSIC';

var getHistoryLists = function getHistoryLists() {
  var list = localStorage.getItem('myLists');
  var myLists = list ? JSON.parse(list) : [];
  return myLists;
};

var setMyLists = function setMyLists(myLists, item) {
  var newMyLists = myLists;

  if (item) {
    var filterMyLists = myLists.filter(function (d) {
      return d.id === item.id;
    });

    if (!filterMyLists.length) {
      newMyLists = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(myLists), [item]);
    }
  }

  localStorage.setItem('myLists', JSON.stringify(newMyLists));
  return newMyLists;
};

var lastMusic = localStorage.getItem('lastMusic') ? JSON.parse(localStorage.getItem('lastMusic')) : '';
var initialState = {
  title: 'Music',
  playing: {
    id: '',
    author: 'kugou',
    music: '',
    name: 'Hello Kugou',
    timelength: 0,
    img: 'http://m.kugou.com/v3/static/images/index/logo_kugou.png',
    list: getHistoryLists(),
    lyrics: '',
    error: false,
    playMethod: 'loop',
    lastMusic: lastMusic,
    replay: false
  }
};

var rootState = function rootState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SAVE_SONG_DETAIL:
      return _objectSpread({}, state, {
        playing: _objectSpread({}, state.playing, {
          id: action.payload.id,
          author: action.payload.author,
          music: action.payload.music,
          name: action.payload.name,
          timelength: action.payload.timelength,
          img: action.payload.img,
          lyrics: action.payload.lyrics
        })
      });

    case UPDATE_PLAYING_LIST:
      localStorage.setItem('lastMusic', JSON.stringify(action.payload.id));
      return _objectSpread({}, state, {
        playing: _objectSpread({}, state.playing, {
          list: setMyLists(state.playing.list, action.payload)
        })
      });

    case REMOVE_PLAYING_ITEM:
      var filterMyLists = state.playing.list.filter(function (d) {
        return d.id !== action.payload;
      });
      return _objectSpread({}, state, {
        playing: _objectSpread({}, state.playing, {
          list: setMyLists(filterMyLists)
        })
      });

    case UPDATE_PLAYING_METHOD:
      return _objectSpread({}, state, {
        playing: _objectSpread({}, state.playing, {
          playMethod: action.payload
        })
      });

    case INIG_PLAYING_LIST:
      return _objectSpread({}, state, {
        playing: _objectSpread({}, state.playing, {
          list: setMyLists([])
        })
      });

    case REPLAY_MUSIC:
      return _objectSpread({}, state, {
        playing: _objectSpread({}, state.playing, {
          replay: action.payload
        })
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  rootState: rootState,
  menus: _menus__WEBPACK_IMPORTED_MODULE_3__["default"],
  newlist: _newlist__WEBPACK_IMPORTED_MODULE_4__["default"],
  toplist: _toplist__WEBPACK_IMPORTED_MODULE_5__["default"],
  plist: _plist__WEBPACK_IMPORTED_MODULE_6__["default"],
  singerClasslist: _singer_classlist__WEBPACK_IMPORTED_MODULE_7__["default"],
  search: _search__WEBPACK_IMPORTED_MODULE_8__["default"]
}));

/***/ }),

/***/ "./public/src/reducers/menus.js":
/*!**************************************!*\
  !*** ./public/src/reducers/menus.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var UPDATE_MENU_SELECTED = 'UPDATE_MENU_SELECTED';
var initialState = {
  selected: [],
  data: [{
    name: '新歌',
    path: '/basic/newlist',
    key: '/basic/newlist'
  }, {
    name: '排行',
    path: '/basic/toplist',
    key: '/basic/toplist'
  }, {
    name: '歌单',
    path: '/basic/plist',
    key: '/basic/plist'
  }, {
    name: '歌手',
    path: '/basic/singer-classlist',
    key: '/basic/singer-classlist'
  }]
};

var menus = function menus() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_MENU_SELECTED:
      return _objectSpread({}, state, {
        selected: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state.selected), [action.selected])
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (menus);

/***/ }),

/***/ "./public/src/reducers/newlist.js":
/*!****************************************!*\
  !*** ./public/src/reducers/newlist.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SAVE_NEWLIST = 'SAVE_NEWLIST';
var SAVE_BANNER = 'SAVE_BANNER';
var initialState = {
  banners: [],
  songs: []
};

var newlist = function newlist() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SAVE_BANNER:
      return _objectSpread({}, state, {
        banners: action.payload
      });

    case SAVE_NEWLIST:
      return _objectSpread({}, state, {
        songs: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (newlist);

/***/ }),

/***/ "./public/src/reducers/plist.js":
/*!**************************************!*\
  !*** ./public/src/reducers/plist.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SAVE_PLIST = 'SAVE_PLIST';
var UPDATE_PLIST_LIST = 'UPDATE_PLIST_LIST';
var SAVE_PLIST_DETAIL = 'SAVE_PLIST_DETAIL';
var INIT_PLIST_DETAIL = 'INIT_PLIST_DETAIL';
var UPDATE_PLIST_DETAIL_LIST = 'UPDATE_PLIST_DETAIL_LIST';
var CHANGE_PLIST_LOADING_STATE = 'CHANGE_PLIST_LOADING_STATE';
var CHANGE_PLIST_DETAIL_LOADING_STATE = 'CHANGE_PLIST_DETAIL_LOADING_STATE';
var initialState = {
  loading: false,
  total: 0,
  list: [],
  page: 1,
  detail: {
    loading: false,
    total: 0,
    page: 1,
    banner: '',
    specialname: '',
    intro: '',
    list: []
  }
};

var plist = function plist() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SAVE_PLIST:
      return _objectSpread({}, state, {
        list: action.payload.list,
        total: action.payload.total
      });

    case UPDATE_PLIST_LIST:
      var _action$payload = action.payload,
          plistLists = _action$payload.list,
          plistRest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_action$payload, ["list"]);

      return _objectSpread({}, state, {
        list: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state.list), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(plistLists))
      }, plistRest, {
        loading: false
      });

    case SAVE_PLIST_DETAIL:
      return _objectSpread({}, state, {
        detail: _objectSpread({}, state.detail, {
          list: action.payload.list,
          total: action.payload.total,
          banner: action.payload.banner,
          specialname: action.payload.specialname,
          intro: action.payload.intro
        })
      });

    case UPDATE_PLIST_DETAIL_LIST:
      var _action$payload2 = action.payload,
          detailLists = _action$payload2.list,
          detailRest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_action$payload2, ["list"]);

      return _objectSpread({}, state, {
        detail: _objectSpread({
          list: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state.detail.list), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(detailLists))
        }, detailRest, {
          loading: false
        })
      });

    case INIT_PLIST_DETAIL:
      return _objectSpread({}, state, {
        detail: initialState.detail
      });

    case CHANGE_PLIST_LOADING_STATE:
      return _objectSpread({}, state, {
        loading: action.payload
      });

    case CHANGE_PLIST_DETAIL_LOADING_STATE:
      return _objectSpread({}, state, {
        detail: _objectSpread({}, state.detail, {
          loading: action.payload
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (plist);

/***/ }),

/***/ "./public/src/reducers/search.js":
/*!***************************************!*\
  !*** ./public/src/reducers/search.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SAVE_HOT_LIST = 'SAVE_HOT_LIST';
var SAVE_SEARCH_RESULT = 'SAVE_SEARCH_RESULT';
var ADD_HISTORY_ITEM = 'ADD_HISTORY_ITEM';
var REMOVE_HISTORY_ITEM = 'REMOVE_HISTORY_ITEM';
var REMOVE_HISTORY_LIST = 'REMOVE_HISTORY_LIST';
var UPDATE_SEARCH_RESULT = 'UPDATE_SEARCH_RESULT';
var CHANGE_RESULT_LOADING = 'CHANGE_RESULT_LOADING';
var INIT_RESULT = 'INIT_RESULT';

var getHistoryLists = function getHistoryLists() {
  var list = localStorage.getItem('historySearchLists');
  var historyList = list ? JSON.parse(list) : [];
  return historyList;
};

var setAndGetHistoryList = function setAndGetHistoryList(historyList, item) {
  var newHistoryLists = historyList;

  if (item) {
    var filterHistoryList = historyList.filter(function (d) {
      return d !== item;
    });
    newHistoryLists = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(filterHistoryList), [item]);
  }

  localStorage.setItem('historySearchLists', JSON.stringify(newHistoryLists));
  return newHistoryLists;
};

var initialState = {
  hotList: [],
  historyList: getHistoryLists(),
  result: {
    loading: false,
    page: 1,
    total: 0,
    list: [],
    complate: false
  }
};

var search = function search() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SAVE_HOT_LIST:
      return _objectSpread({}, state, {
        hotList: action.payload
      });

    case SAVE_SEARCH_RESULT:
      return _objectSpread({}, state, {
        result: _objectSpread({}, state.result, {
          list: action.payload.list,
          total: action.payload.total,
          complate: true
        })
      });

    case UPDATE_SEARCH_RESULT:
      var _action$payload = action.payload,
          list = _action$payload.list,
          resultRest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_action$payload, ["list"]);

      return _objectSpread({}, state, {
        result: _objectSpread({}, state.result, {}, resultRest, {
          list: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(state.result.list), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(list)),
          loading: false,
          complate: true
        })
      });

    case ADD_HISTORY_ITEM:
      return _objectSpread({}, state, {
        historyList: setAndGetHistoryList(state.historyList, action.payload)
      });

    case REMOVE_HISTORY_ITEM:
      var filterHistoryList = state.historyList.filter(function (d) {
        return d !== action.payload;
      });
      return _objectSpread({}, state, {
        historyList: setAndGetHistoryList(filterHistoryList)
      });

    case REMOVE_HISTORY_LIST:
      localStorage.clear();
      return _objectSpread({}, state, {
        historyList: []
      });

    case CHANGE_RESULT_LOADING:
      return _objectSpread({}, state, {
        result: _objectSpread({}, state.result, {
          loading: action.payload
        })
      });

    case INIT_RESULT:
      return _objectSpread({}, state, {
        result: initialState.result
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ }),

/***/ "./public/src/reducers/singer-classlist.js":
/*!*************************************************!*\
  !*** ./public/src/reducers/singer-classlist.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SAVE_SINGER_CLASS = 'SAVE_SINGER_CLASS';
var SAVE_SINGER_LIST = 'SAVE_SINGER_LIST';
var UPDATE_SINGER_LIST = 'UPDATE_SINGER_LIST';
var INIT_SINGER_LIST = 'INIT_SINGER_LIST';
var SAVE_SONGS_LIST = 'SAVE_SONGS_LIST';
var UPDATE_SONGS_LIST = 'UPDATE_SONGS_LIST';
var CHANGE_SINGER_LIST_LOADING = 'CHANGE_SINGER_LIST_LOADING';
var CHANGE_SINGER_LOADING = 'CHANGE_SINGER_LOADING';
var INIT_SONGS_LIST = 'INIT_SONGS_LIST';
var initialState = {
  classname: '',
  classList: [],
  singerList: [],
  page: 1,
  total: 0,
  loading: false,
  singer: {
    loading: false,
    total: 0,
    page: 1,
    list: [],
    banner: '',
    singerName: ''
  }
};

var singerClasslist = function singerClasslist() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SAVE_SINGER_CLASS:
      return _objectSpread({}, state, {
        classList: action.payload
      });

    case SAVE_SINGER_LIST:
      return _objectSpread({}, state, {
        singerList: action.payload.list,
        classname: action.payload.classname,
        total: action.payload.total
      });

    case UPDATE_SINGER_LIST:
      var _action$payload = action.payload,
          singerList = _action$payload.list,
          singerListRest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_action$payload, ["list"]);

      return _objectSpread({}, state, {
        singerList: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state.singerList), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(singerList))
      }, singerListRest, {
        loading: false
      });

    case INIT_SINGER_LIST:
      return _objectSpread({}, state, {
        singerList: initialState.singerList,
        classname: initialState.classname,
        loading: false
      });

    case SAVE_SONGS_LIST:
      return _objectSpread({}, state, {
        singer: _objectSpread({}, state.singer, {
          total: action.payload.total,
          list: action.payload.list,
          banner: action.payload.banner,
          singerName: action.payload.singerName,
          intro: action.payload.intro
        })
      });

    case UPDATE_SONGS_LIST:
      var _action$payload2 = action.payload,
          list = _action$payload2.list,
          singerRest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_action$payload2, ["list"]);

      return _objectSpread({}, state, {
        singer: _objectSpread({
          list: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state.singer.list), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(list))
        }, singerRest, {
          loading: false
        })
      });

    case INIT_SONGS_LIST:
      return _objectSpread({}, state, {
        singer: initialState.singer
      });

    case CHANGE_SINGER_LIST_LOADING:
      return _objectSpread({}, state, {
        loading: action.payload
      });

    case CHANGE_SINGER_LOADING:
      return _objectSpread({}, state, {
        singer: _objectSpread({}, state.singer, {
          loading: action.payload
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (singerClasslist);

/***/ }),

/***/ "./public/src/reducers/toplist.js":
/*!****************************************!*\
  !*** ./public/src/reducers/toplist.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SAVE_TOPLIST = 'SAVE_TOPLIST';
var INIT_RANK_LIST = 'INIT_RANK_LIST';
var UPDATE_RANK_LIST = 'UPDATE_RANK_LIST';
var SAVE_RANK_LIST = 'SAVE_RANK_LIST';
var CHANGE_RANK_LOADING_STATE = 'CHANGE_RANK_LOADING_STATE';
var initialState = {
  list: [],
  rank: {
    loading: false,
    total: 0,
    page: 1,
    banner: '',
    rankname: '',
    list: []
  }
};

var toplist = function toplist() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SAVE_TOPLIST:
      return _objectSpread({}, state, {
        list: action.payload
      });

    case SAVE_RANK_LIST:
      return _objectSpread({}, state, {
        rank: _objectSpread({}, state.rank, {
          list: action.payload.list,
          total: action.payload.total,
          banner: action.payload.banner,
          rankname: action.payload.rankname
        })
      });

    case UPDATE_RANK_LIST:
      var _action$payload = action.payload,
          rankList = _action$payload.list,
          rankRest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_action$payload, ["list"]);

      return _objectSpread({}, state, {
        rank: _objectSpread({}, state.rank, {
          loading: false,
          list: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state.rank.list), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(rankList))
        }, rankRest)
      });

    case CHANGE_RANK_LOADING_STATE:
      return _objectSpread({}, state, {
        rank: _objectSpread({}, state.rank, {
          loading: action.payload
        })
      });

    case INIT_RANK_LIST:
      return _objectSpread({}, state, {
        rank: initialState.rank
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (toplist);

/***/ }),

/***/ "./public/src/sagas/index.js":
/*!***********************************!*\
  !*** ./public/src/sagas/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var _newlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newlist */ "./public/src/sagas/newlist.js");
/* harmony import */ var _toplist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toplist */ "./public/src/sagas/toplist.js");
/* harmony import */ var _plist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plist */ "./public/src/sagas/plist.js");
/* harmony import */ var _singer_classlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./singer-classlist */ "./public/src/sagas/singer-classlist.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search */ "./public/src/sagas/search.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api */ "./public/src/api/index.js");
/* harmony import */ var _common_basehandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/basehandler */ "./public/src/common/basehandler/index.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);










var watch =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function watch() {
  var action;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watch$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('*');

        case 4:
          action = _context.sent;
          console.log(action);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_8__["handleError"])(_context.t0);

        case 11:
          _context.next = 0;
          break;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, watch, null, [[1, 8]]);
});

var getSongDetail =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function getSongDetail() {
  var action, result, _result$data, name, timelength, img, lyrics, music, author;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getSongDetail$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (false) {}

          _context2.prev = 1;
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('GET_SONG_DETAIL_REQUEST');

        case 4:
          action = _context2.sent;
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_7__["default"].getSongDetail, action.payload);

        case 7:
          result = _context2.sent;

          if (!result) {
            _context2.next = 19;
            break;
          }

          _result$data = result.data, name = _result$data.song_name, timelength = _result$data.timelength, img = _result$data.img, lyrics = _result$data.lyrics, music = _result$data.play_url, author = _result$data.author_name;

          if (!music) {
            _context2.next = 18;
            break;
          }

          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_SONG_DETAIL',
            payload: {
              name: name,
              timelength: timelength,
              img: img,
              lyrics: lyrics,
              author: author,
              music: music,
              id: action.payload.hash
            }
          });

        case 13:
          action.callback && action.callback();
          _context2.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'UPDATE_PLAYING_LIST',
            payload: {
              id: action.payload.hash,
              author: author,
              name: name
            }
          });

        case 16:
          _context2.next = 19;
          break;

        case 18:
          console.log('no work');

        case 19:
          _context2.next = 24;
          break;

        case 21:
          _context2.prev = 21;
          _context2.t0 = _context2["catch"](1);
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_8__["handleError"])(_context2.t0);

        case 24:
          _context2.next = 0;
          break;

        case 26:
        case "end":
          return _context2.stop();
      }
    }
  }, getSongDetail, null, [[1, 21]]);
});

var downloadMusic =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function downloadMusic() {
  var action, result, _result$data2, play_url, song_name;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function downloadMusic$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (false) {}

          _context3.prev = 1;
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('DOWNLOAD_REQUEST');

        case 4:
          action = _context3.sent;
          _common_basehandler__WEBPACK_IMPORTED_MODULE_8__["toast"].show('请稍等...');
          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_7__["default"].getSongDetail, action.payload);

        case 8:
          result = _context3.sent;
          _result$data2 = result.data, play_url = _result$data2.play_url, song_name = _result$data2.song_name;

          if (!play_url) {
            _context3.next = 13;
            break;
          }

          _context3.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_7__["default"].downloadMusic, {
            filename: song_name,
            filepath: play_url
          });

        case 13:
          _context3.next = 18;
          break;

        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](1);
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_8__["handleError"])(_context3.t0);

        case 18:
          _context3.next = 0;
          break;

        case 20:
        case "end":
          return _context3.stop();
      }
    }
  }, downloadMusic, null, [[1, 15]]);
});

var indexAction =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function indexAction() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function indexAction$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getSongDetail);

        case 2:
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(downloadMusic);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  }, indexAction);
});

function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([// watch(),
          indexAction(), Object(_newlist__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_toplist__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_plist__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(_singer_classlist__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(_search__WEBPACK_IMPORTED_MODULE_6__["default"])()]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked);
}

/***/ }),

/***/ "./public/src/sagas/newlist.js":
/*!*************************************!*\
  !*** ./public/src/sagas/newlist.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return newlistAction; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./public/src/api/index.js");
/* harmony import */ var _common_basehandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/basehandler */ "./public/src/common/basehandler/index.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(newlistAction);





var getList =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function getList() {
  var action, result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('GET_NEWLIST_REQUEST');

        case 4:
          action = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].getNewlist);

        case 7:
          result = _context.sent;

          if (!result) {
            _context.next = 13;
            break;
          }

          _context.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_BANNER',
            payload: result.banner
          });

        case 11:
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_NEWLIST',
            payload: result.data
          });

        case 13:
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](1);
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(_context.t0);

        case 18:
          _context.next = 0;
          break;

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, getList, null, [[1, 15]]);
});

function newlistAction() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function newlistAction$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getList);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked);
}

/***/ }),

/***/ "./public/src/sagas/plist.js":
/*!***********************************!*\
  !*** ./public/src/sagas/plist.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return plistAction; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./public/src/api/index.js");
/* harmony import */ var _common_basehandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/basehandler */ "./public/src/common/basehandler/index.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(plistAction);





var getList =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function getList() {
  var action, result, _result$plist, _result$plist$list, info, total, pagesize;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('GET_PLIST_REQUEST');

        case 3:
          action = _context.sent;
          _context.prev = 4;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].getPlist, action.payload);

        case 7:
          result = _context.sent;

          if (!result) {
            _context.next = 12;
            break;
          }

          _result$plist = result.plist, _result$plist$list = _result$plist.list, info = _result$plist$list.info, total = _result$plist$list.total, pagesize = _result$plist.pagesize;
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_PLIST',
            payload: {
              list: info,
              total: total
            }
          });

        case 12:
          _context.next = 19;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](4);
          _context.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_PLIST',
            payload: {
              list: []
            }
          });

        case 18:
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(_context.t0);

        case 19:
          _context.next = 0;
          break;

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, getList, null, [[4, 14]]);
});

var loadList =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function loadList() {
  var action, result, _result$plist2, _result$plist2$list, info, total, pagesize;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (false) {}

          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('LOAD_PLIST_REQUEST');

        case 3:
          action = _context2.sent;
          _context2.prev = 4;
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].getPlist, action.payload);

        case 7:
          result = _context2.sent;

          if (!result) {
            _context2.next = 12;
            break;
          }

          _result$plist2 = result.plist, _result$plist2$list = _result$plist2.list, info = _result$plist2$list.info, total = _result$plist2$list.total, pagesize = _result$plist2.pagesize;
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'UPDATE_PLIST_LIST',
            payload: {
              list: info,
              page: action.payload.page,
              total: total
            }
          });

        case 12:
          _context2.next = 19;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](4);
          _context2.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'UPDATE_PLIST_LIST',
            payload: {
              list: []
            }
          });

        case 18:
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(_context2.t0);

        case 19:
          _context2.next = 0;
          break;

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, loadList, null, [[4, 14]]);
});

var getDetail =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function getDetail() {
  var action, result, _result$list$list, total, info, _result$info$list, specialname, imgurl, intro;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getDetail$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (false) {}

          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('GET_PLIST_DETAIL_REQUEST');

        case 3:
          action = _context3.sent;
          _context3.prev = 4;
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].getPlistDetail, action.payload);

        case 7:
          result = _context3.sent;

          if (!result) {
            _context3.next = 12;
            break;
          }

          _result$list$list = result.list.list, total = _result$list$list.total, info = _result$list$list.info, _result$info$list = result.info.list, specialname = _result$info$list.specialname, imgurl = _result$info$list.imgurl, intro = _result$info$list.intro;
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_PLIST_DETAIL',
            payload: {
              list: info,
              total: total,
              specialname: specialname,
              intro: intro,
              banner: imgurl.replace(/{size}/g, 400)
            }
          });

        case 12:
          _context3.next = 19;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](4);
          _context3.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_PLIST_DETAIL',
            payload: {
              list: []
            }
          });

        case 18:
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(_context3.t0);

        case 19:
          _context3.next = 0;
          break;

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  }, getDetail, null, [[4, 14]]);
});

var loadDetail =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function loadDetail() {
  var action, result, _result$list$list2, total, info, _result$info$list2, specialname, imgurl, intro;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadDetail$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (false) {}

          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('LOAD_PLIST_DETAIL_REQUEST');

        case 3:
          action = _context4.sent;
          _context4.prev = 4;
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].getPlistDetail, action.payload);

        case 7:
          result = _context4.sent;

          if (!result) {
            _context4.next = 12;
            break;
          }

          _result$list$list2 = result.list.list, total = _result$list$list2.total, info = _result$list$list2.info, _result$info$list2 = result.info.list, specialname = _result$info$list2.specialname, imgurl = _result$info$list2.imgurl, intro = _result$info$list2.intro;
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'UPDATE_PLIST_DETAIL_LIST',
            payload: {
              list: info,
              total: total,
              specialname: specialname,
              intro: intro,
              banner: imgurl.replace(/{size}/g, 400),
              page: action.payload.page
            }
          });

        case 12:
          _context4.next = 19;
          break;

        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](4);
          _context4.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'UPDATE_PLIST_DETAIL_LIST',
            payload: {
              list: []
            }
          });

        case 18:
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(_context4.t0);

        case 19:
          _context4.next = 0;
          break;

        case 21:
        case "end":
          return _context4.stop();
      }
    }
  }, loadDetail, null, [[4, 14]]);
});

function plistAction() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function plistAction$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getList);

        case 2:
          _context5.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(loadList);

        case 4:
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getDetail);

        case 6:
          _context5.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(loadDetail);

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked);
}

/***/ }),

/***/ "./public/src/sagas/search.js":
/*!************************************!*\
  !*** ./public/src/sagas/search.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return searchAction; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./public/src/api/index.js");
/* harmony import */ var _common_basehandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/basehandler */ "./public/src/common/basehandler/index.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(searchAction);





var getHots =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function getHots() {
  var action, result, info;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getHots$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('GET_HOT_SEARCH_LIST');

        case 4:
          action = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].getHotSearch);

        case 7:
          result = _context.sent;

          if (!result) {
            _context.next = 12;
            break;
          }

          info = result.data.info;
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_HOT_LIST',
            payload: info
          });

        case 12:
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(_context.t0);

        case 17:
          _context.next = 0;
          break;

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, getHots, null, [[1, 14]]);
});

var search =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function search() {
  var action, result, _result$data, info, total;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function search$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (false) {}

          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('SEARCH_REQUEST');

        case 3:
          action = _context2.sent;
          _context2.prev = 4;
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].search, action.payload);

        case 7:
          result = _context2.sent;

          if (!result) {
            _context2.next = 14;
            break;
          }

          _result$data = result.data, info = _result$data.info, total = _result$data.total;
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_SEARCH_RESULT',
            payload: {
              list: info,
              total: total
            }
          });

        case 12:
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'ADD_HISTORY_ITEM',
            payload: action.payload.keyword
          });

        case 14:
          _context2.next = 21;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](4);
          _context2.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_SEARCH_RESULT',
            payload: {
              list: []
            }
          });

        case 20:
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(_context2.t0);

        case 21:
          _context2.next = 0;
          break;

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, search, null, [[4, 16]]);
});

var loadResult =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function loadResult() {
  var action, result, _result$data2, info, total;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadResult$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (false) {}

          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('LOAD_RESULT_REQUEST');

        case 3:
          action = _context3.sent;
          _context3.prev = 4;
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].search, action.payload);

        case 7:
          result = _context3.sent;

          if (!result) {
            _context3.next = 14;
            break;
          }

          _result$data2 = result.data, info = _result$data2.info, total = _result$data2.total;
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'UPDATE_SEARCH_RESULT',
            payload: {
              list: info,
              total: total,
              page: action.payload.page
            }
          });

        case 12:
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'ADD_HISTORY_ITEM',
            payload: action.keyword
          });

        case 14:
          _context3.next = 21;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](4);
          _context3.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'UPDATE_SEARCH_RESULT',
            payload: {
              list: []
            }
          });

        case 20:
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(_context3.t0);

        case 21:
          _context3.next = 0;
          break;

        case 23:
        case "end":
          return _context3.stop();
      }
    }
  }, loadResult, null, [[4, 16]]);
});

function searchAction() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function searchAction$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getHots);

        case 2:
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(search);

        case 4:
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(loadResult);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked);
}

/***/ }),

/***/ "./public/src/sagas/singer-classlist.js":
/*!**********************************************!*\
  !*** ./public/src/sagas/singer-classlist.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return singerClasslistAction; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./public/src/api/index.js");
/* harmony import */ var _common_basehandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/basehandler */ "./public/src/common/basehandler/index.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(singerClasslistAction);





var getClassList =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function getClassList() {
  var action, result, list;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getClassList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('GET_SINGER_CLASSLIST_REQUEST');

        case 4:
          action = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].getSingerClasslist);

        case 7:
          result = _context.sent;

          if (!result) {
            _context.next = 12;
            break;
          }

          list = result.list;
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_SINGER_CLASS',
            payload: list
          });

        case 12:
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(_context.t0);

        case 17:
          _context.next = 0;
          break;

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, getClassList, null, [[1, 14]]);
});

var getSingerList =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function getSingerList() {
  var action, result, classname, _result$singers$list, info, total;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getSingerList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (false) {}

          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('GET_SINGER_LIST_REQUEST');

        case 3:
          action = _context2.sent;
          _context2.prev = 4;
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].getSingerList, action.payload);

        case 7:
          result = _context2.sent;

          if (!result) {
            _context2.next = 12;
            break;
          }

          classname = result.classname, _result$singers$list = result.singers.list, info = _result$singers$list.info, total = _result$singers$list.total;
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_SINGER_LIST',
            payload: {
              list: info,
              classname: classname,
              total: total
            }
          });

        case 12:
          _context2.next = 19;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](4);
          _context2.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_SINGER_LIST',
            payload: {
              list: []
            }
          });

        case 18:
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(_context2.t0);

        case 19:
          _context2.next = 0;
          break;

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, getSingerList, null, [[4, 14]]);
});

var loadSingerList =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function loadSingerList() {
  var action, result, classname, _result$singers$list2, info, total;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadSingerList$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (false) {}

          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('LOAD_SINGER_LIST_REQUEST');

        case 3:
          action = _context3.sent;
          _context3.prev = 4;
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].getSingerList, action.payload);

        case 7:
          result = _context3.sent;

          if (!result) {
            _context3.next = 12;
            break;
          }

          classname = result.classname, _result$singers$list2 = result.singers.list, info = _result$singers$list2.info, total = _result$singers$list2.total;
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'UPDATE_SINGER_LIST',
            payload: {
              list: info,
              classname: classname,
              page: action.payload.page,
              total: total
            }
          });

        case 12:
          _context3.next = 19;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](4);
          _context3.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'UPDATE_SINGER_LIST',
            payload: {
              list: []
            }
          });

        case 18:
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(_context3.t0);

        case 19:
          _context3.next = 0;
          break;

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  }, loadSingerList, null, [[4, 14]]);
});

var getSongsList =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function getSongsList() {
  var action, result, _result$info, singerName, imgurl, intro, _result$songs, list, total;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getSongsList$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (false) {}

          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('GET_SINGER_SONGS_LIST_REQUEST');

        case 3:
          action = _context4.sent;
          _context4.prev = 4;
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].getSingerSongsList, action.payload);

        case 7:
          result = _context4.sent;

          if (!result) {
            _context4.next = 12;
            break;
          }

          _result$info = result.info, singerName = _result$info.singername, imgurl = _result$info.imgurl, intro = _result$info.intro, _result$songs = result.songs, list = _result$songs.list, total = _result$songs.total;
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_SONGS_LIST',
            payload: {
              list: list,
              total: total,
              intro: intro,
              banner: imgurl.replace(/{size}/g, 200),
              singerName: singerName
            }
          });

        case 12:
          _context4.next = 19;
          break;

        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](4);
          _context4.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_SONGS_LIST',
            payload: {
              list: []
            }
          });

        case 18:
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(_context4.t0);

        case 19:
          _context4.next = 0;
          break;

        case 21:
        case "end":
          return _context4.stop();
      }
    }
  }, getSongsList, null, [[4, 14]]);
});

var loadSongsList =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function loadSongsList() {
  var action, result, _result$info2, singerName, imgurl, intro, _result$songs2, list, total;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadSongsList$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          if (false) {}

          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('LOAD_SONGS_LIST_REQUEST');

        case 3:
          action = _context5.sent;
          _context5.prev = 4;
          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].getSingerSongsList, action.payload);

        case 7:
          result = _context5.sent;

          if (!result) {
            _context5.next = 12;
            break;
          }

          _result$info2 = result.info, singerName = _result$info2.singername, imgurl = _result$info2.imgurl, intro = _result$info2.intro, _result$songs2 = result.songs, list = _result$songs2.list, total = _result$songs2.total;
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'UPDATE_SONGS_LIST',
            payload: {
              list: list,
              total: total,
              intro: intro,
              banner: imgurl.replace(/{size}/g, 200),
              singerName: singerName,
              page: action.payload.page
            }
          });

        case 12:
          _context5.next = 19;
          break;

        case 14:
          _context5.prev = 14;
          _context5.t0 = _context5["catch"](4);
          _context5.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'UPDATE_SONGS_LIST',
            payload: {
              list: []
            }
          });

        case 18:
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(_context5.t0);

        case 19:
          _context5.next = 0;
          break;

        case 21:
        case "end":
          return _context5.stop();
      }
    }
  }, loadSongsList, null, [[4, 14]]);
});

function singerClasslistAction() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function singerClasslistAction$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getClassList);

        case 2:
          _context6.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getSingerList);

        case 4:
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(loadSingerList);

        case 6:
          _context6.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getSongsList);

        case 8:
          _context6.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(loadSongsList);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked);
}

/***/ }),

/***/ "./public/src/sagas/toplist.js":
/*!*************************************!*\
  !*** ./public/src/sagas/toplist.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toplistAction; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./public/src/api/index.js");
/* harmony import */ var _common_basehandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/basehandler */ "./public/src/common/basehandler/index.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(toplistAction);





var getTopList =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function getTopList() {
  var action, result, list;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getTopList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('GET_TOPLIST_REQUEST');

        case 4:
          action = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].getToplist);

        case 7:
          result = _context.sent;

          if (!result) {
            _context.next = 12;
            break;
          }

          list = result.rank.list;
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_TOPLIST',
            payload: list
          });

        case 12:
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(_context.t0);

        case 17:
          _context.next = 0;
          break;

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, getTopList, null, [[1, 14]]);
});

var getRankList =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function getRankList() {
  var action, result, _result$songs, list, total, _result$info, imgurl, rankname, time;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getRankList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (false) {}

          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('GET_RANK_LIST_REQUEST');

        case 3:
          action = _context2.sent;
          _context2.prev = 4;
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].getRankList, action.payload);

        case 7:
          result = _context2.sent;

          if (!result) {
            _context2.next = 12;
            break;
          }

          _result$songs = result.songs, list = _result$songs.list, total = _result$songs.total, _result$info = result.info, imgurl = _result$info.imgurl, rankname = _result$info.rankname, time = _result$info.update_frequency;
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_RANK_LIST',
            payload: {
              rankname: rankname,
              total: total,
              time: time,
              list: list,
              banner: imgurl.replace(/{size}/g, 640)
            }
          });

        case 12:
          _context2.next = 19;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](4);
          _context2.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'SAVE_RANK_LIST',
            payload: {
              list: []
            }
          });

        case 18:
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(_context2.t0);

        case 19:
          _context2.next = 0;
          break;

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, getRankList, null, [[4, 14]]);
});

var loadRankList =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function loadRankList() {
  var action, result, _result$songs2, list, total, _result$info2, imgurl, rankname, time;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadRankList$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (false) {}

          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])('LOAD_RANK_LIST_REQUEST');

        case 3:
          action = _context3.sent;
          _context3.prev = 4;
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].getRankList, action.payload);

        case 7:
          result = _context3.sent;

          if (!result) {
            _context3.next = 12;
            break;
          }

          _result$songs2 = result.songs, list = _result$songs2.list, total = _result$songs2.total, _result$info2 = result.info, imgurl = _result$info2.imgurl, rankname = _result$info2.rankname, time = _result$info2.update_frequency;
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'UPDATE_RANK_LIST',
            payload: {
              rankname: rankname,
              total: total,
              time: time,
              page: action.payload.page,
              list: list,
              banner: imgurl.replace(/{size}/g, 640)
            }
          });

        case 12:
          _context3.next = 19;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](4);
          _context3.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'UPDATE_RANK_LIST',
            payload: {
              list: []
            }
          });

        case 18:
          Object(_common_basehandler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(_context3.t0);

        case 19:
          _context3.next = 0;
          break;

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  }, loadRankList, null, [[4, 14]]);
});

function toplistAction() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function toplistAction$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getTopList);

        case 2:
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getRankList);

        case 4:
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(loadRankList);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked);
}

/***/ }),

/***/ "./public/src/utils/emitter.js":
/*!*************************************!*\
  !*** ./public/src/utils/emitter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);

var emitter = new events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
/* harmony default export */ __webpack_exports__["default"] = (emitter);

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi babel-polyfill ./public/src/app.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"./node_modules/babel-polyfill/lib/index.js");
module.exports = __webpack_require__(/*! E:\Practice\react-kugou\public\src\app.js */"./public/src/app.js");


/***/ })

},[[0,"runtime~app","vendors~app"]]]);
//# sourceMappingURL=app.js.map