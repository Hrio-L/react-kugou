(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{473:function(e,t,n){},474:function(e,t,n){},475:function(e,t,n){"use strict";var a=n(10),i=n.n(a),o=n(11),c=n.n(o),r=n(12),l=n.n(r),s=n(13),p=n.n(s),u=n(14),f=n.n(u),m=n(1),d=n.n(m),y=n(4),h=n.n(y),g=n(0),v=n.n(g),b=n(476),k=n(472),E=n(2),w=n.n(E),O=n(19),C=n.n(O),N=n(16),T=n(93),S=n(149),x=n(94),R=(n(473),function(e){function n(e){var t;return i()(this,n),t=l()(this,p()(n).call(this,e)),h()(d()(d()(t)),"handleClick",function(){t.setState({visible:!t.state.visible})}),t.state={visible:e.open},t}return f()(n,e),c()(n,[{key:"render",value:function(){var e,t=this.state.visible,n=this.props,a=n.classPrefixer,o=n.className,r=n.header,i=n.children,c=C()((e={},h()(e,"".concat(a),!0),h()(e,"".concat(o),o),h()(e,"".concat(a,"-active"),t),e)),l=t?"arrow-up":"arrow-down";return v.a.createElement("div",{className:c},v.a.createElement("div",{className:"".concat(a,"-head")},r,v.a.createElement(N.a,{onClick:this.handleClick,type:l})),v.a.createElement("div",{className:"".concat(a,"-content")},i))}}]),n}(g.PureComponent));h()(R,"defaultProps",{classPrefixer:"collapse",open:!1}),R.propTypes={className:w.a.string,header:w.a.oneOfType([w.a.string,w.a.node,w.a.element]).isRequired,children:w.a.oneOfType([w.a.string,w.a.node,w.a.element]),open:w.a.bool};var j=R,P=(n(474),function(e){function r(){var e,t;i()(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=l()(this,(e=p()(r)).call.apply(e,[this].concat(a))),h()(d()(d()(t)),"getSongs",function(){return t.props.list.map(function(e,t){var n=e.filename.trim().split(" - "),a=n[0];return{name:n[1],author:a,id:e.hash}})}),h()(d()(d()(t)),"handleBack",function(){t.props.history.go(-1)}),t}return f()(r,e),c()(r,[{key:"render",value:function(){var e=this.props,t=e.banner,n=e.title,a=e.footText,o=e.className,r=e.classPrefixer,i=e.list,c=e.collapse,l=e.onSongClick,s=e.actions,p=C()("".concat(r,"-view"),o);return v.a.createElement("div",{className:p},!i.length&&v.a.createElement(N.a,{style:{display:"block",margin:"10px auto",fontSize:22,color:"silver"},type:"loading"}),v.a.createElement(S.a,{fixed:!0,logo:v.a.createElement("img",{src:"http://m.kugou.com/v3/static/images/index/logo.png",alt:"logo"}),extra:v.a.createElement(b.a,{to:"/search"},v.a.createElement(N.a,{style:{fontSize:18,color:"white"},type:"search"}))}),v.a.createElement("div",{className:"".concat(r,"-banner")},n&&v.a.createElement(S.a,{logo:v.a.createElement(N.a,{onClick:this.handleBack,style:{fontSize:22},type:"arrow-left"}),fixed:!0,style:{top:50},className:"banner-head"},v.a.createElement("span",null,n)),t&&v.a.createElement("img",{src:t,alt:"banner"}),a&&v.a.createElement(S.a,{logo:v.a.createElement("span",null,"更新时间：",a),style:{position:"absolute",bottom:0,top:"none",zIndex:0},className:"banner-foot"})),i.length&&c?v.a.createElement(j,{header:c.header},c.content):null,v.a.createElement(T.a,{onClick:l,songs:this.getSongs(),actions:s,actionComponent:x.a}))}}]),r}(g.PureComponent));h()(P,"defaultProps",{classPrefixer:"songs"}),P.propTypes={onSongClick:w.a.func,list:w.a.array.isRequired,title:w.a.string,footText:w.a.string,banner:w.a.string,className:w.a.string,collapse:w.a.shape({header:w.a.oneOfType([w.a.string,w.a.node,w.a.element]),content:w.a.oneOfType([w.a.string,w.a.node,w.a.element])}),actions:w.a.array};t.a=Object(k.a)(P)},476:function(e,t,n){"use strict";var a=n(0),d=n.n(a),o=n(2),r=n.n(o),y=n(201),i=n(32),c=n.n(i),l=n(80),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(o){function r(){var e,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=i=p(this,o.call.apply(o,[this].concat(n)))).handleClick=function(e){if(i.props.onClick&&i.props.onClick(e),!(e.defaultPrevented||0!==e.button||i.props.target||((r=e).metaKey||r.altKey||r.ctrlKey||r.shiftKey))){e.preventDefault();var t=i.context.router.history,n=i.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}var r},p(i,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,o),r.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,r="string"==typeof t?Object(l.b)(t,null,null,o.location):t,i=o.createHref(r);return d.a.createElement("a",s({},a,{onClick:this.handleClick,href:i,ref:n}))},r}(d.a.Component);u.propTypes={onClick:r.a.func,target:r.a.string,replace:r.a.bool,to:r.a.oneOfType([r.a.string,r.a.object]).isRequired,innerRef:r.a.oneOfType([r.a.string,r.a.func])},u.defaultProps={replace:!1},u.contextTypes={router:r.a.shape({history:r.a.shape({push:r.a.func.isRequired,replace:r.a.func.isRequired,createHref:r.a.func.isRequired}).isRequired}).isRequired};var h=u,g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var f=function(e){var o=e.to,t=e.exact,n=e.strict,a=e.location,r=e.activeClassName,i=e.className,c=e.activeStyle,l=e.style,s=e.isActive,p=e["aria-current"],u=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),f="object"===(void 0===o?"undefined":v(o))?o.pathname:o,m=f&&f.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return d.a.createElement(y.a,{path:m,exact:t,strict:n,location:a,children:function(e){var t=e.location,n=e.match,a=!!(s?s(n,t):n);return d.a.createElement(h,g({to:o,className:a?[i,r].filter(function(e){return e}).join(" "):i,style:a?g({},l,c):l,"aria-current":a&&p||null},u))}})};f.propTypes={to:h.propTypes.to,exact:r.a.bool,strict:r.a.bool,location:r.a.object,activeClassName:r.a.string,className:r.a.string,activeStyle:r.a.object,style:r.a.object,isActive:r.a.func,"aria-current":r.a.oneOf(["page","step","location","date","time","true"])},f.defaultProps={activeClassName:"active","aria-current":"page"};t.a=f},481:function(e,t,n){"use strict";n.r(t);var a,o,r=n(10),i=n.n(r),c=n(11),l=n.n(c),s=n(12),p=n.n(s),u=n(13),f=n.n(u),m=n(14),d=n.n(m),y=n(1),h=n.n(y),g=n(4),v=n.n(g),b=n(0),k=n.n(b),E=n(29),w=n(36),O=n(475),C=n(57),N=n(17),T=(a=Object(E.b)(function(e){var t=e.toplist.rank;return{loading:t.loading,page:t.page,list:t.list,banner:t.banner,rankname:t.rankname,time:t.time,total:t.total}},function(t){return{getList:function(e){t({type:"GET_RANK_LIST_REQUEST",payload:e})},loadRank:function(e){t({type:"LOAD_RANK_LIST_REQUEST",payload:e})},initRank:function(){t({type:"INIT_RANK_LIST"})},showLoading:function(e){t({type:"CHANGE_RANK_LOADING_STATE",payload:e})}}}),Object(w.immutableRenderDecorator)(o=a(o=Object(N.a)(o=function(e){function o(){var e,c;i()(this,o);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return c=p()(this,(e=f()(o)).call.apply(e,[this].concat(n))),v()(h()(h()(c)),"componentDidMount",function(){var e=c.props,t=e.page,n=e.list,a=e.getList,o=e.match.params.id;o&&!n.length&&a({rankid:o,page:t})}),v()(h()(h()(c)),"componentWillUnmount",function(){(0,c.props.initRank)()}),v()(h()(h()(c)),"loadList",function(){var e=c.props,t=e.page,n=e.total,a=e.list,o=e.loadRank,r=e.showLoading,i=e.match.params.id;n>a.length&&(r(!0),o({rankid:i,page:t+1}))}),c}return d()(o,e),l()(o,[{key:"render",value:function(){var e=this.props,t=e.list,n=e.rankname,a=e.time,o=e.banner,r=e.loading,i=e.onSongClick,c=e.onDownload,l=e.addPlayingList,s=[{name:"播放",key:"play",onClick:function(e,t){i(e),t()}},{name:"添加到歌单",key:"add",onClick:function(e,t){l({id:e.id,author:e.desc,name:e.name}),N.c.show("添加成功"),t()}},{name:"分享",key:"share",onClick:function(e,t){N.c.show("该功能暂时没开通")}},{name:"下载",key:"download",onClick:function(e,t){c(e.id),t()}}];return k.a.createElement("div",{className:"rank"},k.a.createElement(C.a,{style:{paddingBottom:70},loading:r,onBottom:this.loadList},k.a.createElement(O.a,{actions:s,onSongClick:i,banner:o,list:t,title:n,footText:a})))}}]),o}(b.Component))||o)||o)||o);t.default=T}}]);
//# sourceMappingURL=5.js.map