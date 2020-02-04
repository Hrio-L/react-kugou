(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{476:function(e,t,n){"use strict";var r=n(0),g=n.n(r),a=n(1),o=n.n(a),h=n(200),i=n(43),c=n.n(i),s=n(80),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u,f=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(y,u=g.a.Component),y.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,o="string"==typeof t?Object(s.b)(t,null,null,a.location):t,i=a.createHref(o);return g.a.createElement("a",l({},r,{onClick:this.handleClick,href:i,ref:n}))},y);function y(){var e,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=i=p(this,u.call.apply(u,[this].concat(n)))).handleClick=function(e){if(i.props.onClick&&i.props.onClick(e),!(e.defaultPrevented||0!==e.button||i.props.target||((o=e).metaKey||o.altKey||o.ctrlKey||o.shiftKey))){e.preventDefault();var t=i.context.router.history,n=i.props,r=n.replace,a=n.to;r?t.replace(a):t.push(a)}var o},p(i,e)}f.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},f.defaultProps={replace:!1},f.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired};var m=f,d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function b(e){var a=e.to,t=e.exact,n=e.strict,r=e.location,o=e.activeClassName,i=e.className,c=e.activeStyle,s=e.style,l=e.isActive,p=e["aria-current"],u=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),f="object"===(void 0===a?"undefined":v(a))?a.pathname:a,y=f&&f.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return g.a.createElement(h.a,{path:y,exact:t,strict:n,location:r,children:function(e){var t=e.location,n=e.match,r=!!(l?l(n,t):n);return g.a.createElement(m,d({to:a,className:r?[i,o].filter(function(e){return e}).join(" "):i,style:r?d({},s,c):s,"aria-current":r&&p||null},u))}})}b.propTypes={to:m.propTypes.to,exact:o.a.bool,strict:o.a.bool,location:o.a.object,activeClassName:o.a.string,className:o.a.string,activeStyle:o.a.object,style:o.a.object,isActive:o.a.func,"aria-current":o.a.oneOf(["page","step","location","date","time","true"])},b.defaultProps={activeClassName:"active","aria-current":"page"};t.a=b},479:function(e,t,n){},483:function(e,t,n){"use strict";n.r(t);var r,a,o=n(9),i=n.n(o),c=n(10),s=n.n(c),l=n(11),p=n.n(l),u=n(12),f=n.n(u),y=n(4),g=n.n(y),h=n(13),m=n.n(h),d=n(3),v=n.n(d),b=n(0),S=n.n(b),E=n(28),O=n(33),w=n(476),L=n(110),j=n(15),R=n(148),k=n(56),x=(n(479),r=Object(E.b)(function(e){var t=e.singerClasslist;return{singerList:t.singerList,classname:t.classname,page:t.page,loading:t.loading,total:t.total}},function(t){return{getList:function(e){t({type:"GET_SINGER_LIST_REQUEST",payload:e})},loadSinger:function(e){t({type:"LOAD_SINGER_LIST_REQUEST",payload:e})},initSingerList:function(){t({type:"INIT_SINGER_LIST"})},showLoading:function(e){t({type:"CHANGE_SINGER_LIST_LOADING",payload:e})}}}),Object(O.immutableRenderDecorator)(a=r(a=function(e){function a(){var e,c;i()(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return c=p()(this,(e=f()(a)).call.apply(e,[this].concat(n))),v()(g()(c),"componentDidMount",function(){var e=c.props,t=e.getList,n=e.page,r=e.singerList,a=e.match.params.id;a&&!r.length&&t({classid:a,page:n})}),v()(g()(c),"componentWillUnmount",function(){(0,c.props.initSingerList)()}),v()(g()(c),"toSingerSongs",function(e){c.props.history.push("/singer/".concat(e))}),v()(g()(c),"renderSingerList",function(){return c.props.singerList.map(function(e,t){var n=e.singerid,r=e.singername,a=e.imgurl;return S.a.createElement(L.a,{onClick:c.toSingerSongs.bind(g()(c),n),key:t,source:{id:n,title:r,avatar:a.replace(/{size}/g,200)},extra:S.a.createElement(j.a,{style:{color:"silver",margin:5,fontSize:18},type:"arrow-right"})})})}),v()(g()(c),"handleBack",function(){c.props.history.go(-1)}),v()(g()(c),"loadList",function(){var e=c.props,t=e.loadSinger,n=e.page,r=e.total,a=e.singerList,o=e.showLoading,i=e.match.params.id;r>a.length&&(o(!0),t({classid:i,page:n+1}))}),c}return m()(a,e),s()(a,[{key:"render",value:function(){var e=this.props,t=e.singerList,n=e.classname,r=e.loading;return S.a.createElement("div",{className:"singer-list"},!t.length&&S.a.createElement(j.a,{style:{display:"block",margin:"55px auto",fontSize:22,color:"silver"},type:"loading"}),S.a.createElement(k.a,{style:{paddingBottom:70},loading:r,onBottom:this.loadList},S.a.createElement(R.a,{fixed:!0,logo:S.a.createElement("img",{src:"http://m.kugou.com/v3/static/images/index/logo.png",alt:"logo"}),extra:S.a.createElement(w.a,{to:"/search"},S.a.createElement(j.a,{style:{fontSize:18,color:"white"},type:"search"}))}),n&&S.a.createElement(R.a,{className:"singer-classname",fixed:!0,style:{top:50},logo:S.a.createElement(j.a,{onClick:this.handleBack,type:"arrow-left"})},n),this.renderSingerList()))}}]),a}(b.Component))||a)||a);t.default=x}}]);
//# sourceMappingURL=8.js.map