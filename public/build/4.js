(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{473:function(e,t,n){},474:function(e,t,n){},475:function(e,t,n){"use strict";var a=n(10),i=n.n(a),o=n(11),c=n.n(o),r=n(12),s=n.n(r),l=n(13),p=n.n(l),u=n(14),f=n.n(u),d=n(1),m=n.n(d),y=n(4),h=n.n(y),g=n(0),v=n.n(g),b=n(476),S=n(472),E=n(2),O=n.n(E),k=n(19),w=n.n(k),C=n(16),N=n(93),x=n(149),T=n(94),j=(n(473),function(e){function n(e){var t;return i()(this,n),t=s()(this,p()(n).call(this,e)),h()(m()(m()(t)),"handleClick",function(){t.setState({visible:!t.state.visible})}),t.state={visible:e.open},t}return f()(n,e),c()(n,[{key:"render",value:function(){var e,t=this.state.visible,n=this.props,a=n.classPrefixer,o=n.className,r=n.header,i=n.children,c=w()((e={},h()(e,"".concat(a),!0),h()(e,"".concat(o),o),h()(e,"".concat(a,"-active"),t),e)),s=t?"arrow-up":"arrow-down";return v.a.createElement("div",{className:c},v.a.createElement("div",{className:"".concat(a,"-head")},r,v.a.createElement(C.a,{onClick:this.handleClick,type:s})),v.a.createElement("div",{className:"".concat(a,"-content")},i))}}]),n}(g.PureComponent));h()(j,"defaultProps",{classPrefixer:"collapse",open:!1}),j.propTypes={className:O.a.string,header:O.a.oneOfType([O.a.string,O.a.node,O.a.element]).isRequired,children:O.a.oneOfType([O.a.string,O.a.node,O.a.element]),open:O.a.bool};var P=j,R=(n(474),function(e){function r(){var e,t;i()(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=s()(this,(e=p()(r)).call.apply(e,[this].concat(a))),h()(m()(m()(t)),"getSongs",function(){return t.props.list.map(function(e,t){var n=e.filename.trim().split(" - "),a=n[0];return{name:n[1],author:a,id:e.hash}})}),h()(m()(m()(t)),"handleBack",function(){t.props.history.go(-1)}),t}return f()(r,e),c()(r,[{key:"render",value:function(){var e=this.props,t=e.banner,n=e.title,a=e.footText,o=e.className,r=e.classPrefixer,i=e.list,c=e.collapse,s=e.onSongClick,l=e.actions,p=w()("".concat(r,"-view"),o);return v.a.createElement("div",{className:p},!i.length&&v.a.createElement(C.a,{style:{display:"block",margin:"10px auto",fontSize:22,color:"silver"},type:"loading"}),v.a.createElement(x.a,{fixed:!0,logo:v.a.createElement("img",{src:"http://m.kugou.com/v3/static/images/index/logo.png",alt:"logo"}),extra:v.a.createElement(b.a,{to:"/search"},v.a.createElement(C.a,{style:{fontSize:18,color:"white"},type:"search"}))}),v.a.createElement("div",{className:"".concat(r,"-banner")},n&&v.a.createElement(x.a,{logo:v.a.createElement(C.a,{onClick:this.handleBack,style:{fontSize:8},type:"arrow-left"}),fixed:!0,style:{top:50},className:"banner-head"},v.a.createElement("span",null,n)),t&&v.a.createElement("img",{src:t,alt:"banner"}),a&&v.a.createElement(x.a,{logo:v.a.createElement("span",null,"更新时间：",a),style:{position:"absolute",bottom:0,top:"none",zIndex:0},className:"banner-foot"})),i.length&&c?v.a.createElement(P,{header:c.header},c.content):null,v.a.createElement(N.a,{onClick:s,songs:this.getSongs(),actions:l,actionComponent:T.a}))}}]),r}(g.PureComponent));h()(R,"defaultProps",{classPrefixer:"songs"}),R.propTypes={onSongClick:O.a.func,list:O.a.array.isRequired,title:O.a.string,footText:O.a.string,banner:O.a.string,className:O.a.string,collapse:O.a.shape({header:O.a.oneOfType([O.a.string,O.a.node,O.a.element]),content:O.a.oneOfType([O.a.string,O.a.node,O.a.element])}),actions:O.a.array};t.a=Object(S.a)(R)},476:function(e,t,n){"use strict";var a=n(0),m=n.n(a),o=n(2),r=n.n(o),y=n(201),i=n(32),c=n.n(i),s=n(80),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(o){function r(){var e,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=i=p(this,o.call.apply(o,[this].concat(n)))).handleClick=function(e){if(i.props.onClick&&i.props.onClick(e),!(e.defaultPrevented||0!==e.button||i.props.target||((r=e).metaKey||r.altKey||r.ctrlKey||r.shiftKey))){e.preventDefault();var t=i.context.router.history,n=i.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}var r},p(i,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,o),r.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,r="string"==typeof t?Object(s.b)(t,null,null,o.location):t,i=o.createHref(r);return m.a.createElement("a",l({},a,{onClick:this.handleClick,href:i,ref:n}))},r}(m.a.Component);u.propTypes={onClick:r.a.func,target:r.a.string,replace:r.a.bool,to:r.a.oneOfType([r.a.string,r.a.object]).isRequired,innerRef:r.a.oneOfType([r.a.string,r.a.func])},u.defaultProps={replace:!1},u.contextTypes={router:r.a.shape({history:r.a.shape({push:r.a.func.isRequired,replace:r.a.func.isRequired,createHref:r.a.func.isRequired}).isRequired}).isRequired};var h=u,g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var f=function(e){var o=e.to,t=e.exact,n=e.strict,a=e.location,r=e.activeClassName,i=e.className,c=e.activeStyle,s=e.style,l=e.isActive,p=e["aria-current"],u=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),f="object"===(void 0===o?"undefined":v(o))?o.pathname:o,d=f&&f.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return m.a.createElement(y.a,{path:d,exact:t,strict:n,location:a,children:function(e){var t=e.location,n=e.match,a=!!(l?l(n,t):n);return m.a.createElement(h,g({to:o,className:a?[i,r].filter(function(e){return e}).join(" "):i,style:a?g({},s,c):s,"aria-current":a&&p||null},u))}})};f.propTypes={to:h.propTypes.to,exact:r.a.bool,strict:r.a.bool,location:r.a.object,activeClassName:r.a.string,className:r.a.string,activeStyle:r.a.object,style:r.a.object,isActive:r.a.func,"aria-current":r.a.oneOf(["page","step","location","date","time","true"])},f.defaultProps={activeClassName:"active","aria-current":"page"};t.a=f},484:function(e,t,n){"use strict";n.r(t);var a,o,r=n(10),i=n.n(r),c=n(11),s=n.n(c),l=n(12),p=n.n(l),u=n(13),f=n.n(u),d=n(14),m=n.n(d),y=n(1),h=n.n(y),g=n(4),v=n.n(g),b=n(0),S=n.n(b),E=n(29),O=n(36),k=(n(16),n(475)),w=n(57),C=n(17),N=(a=Object(E.b)(function(e){var t=e.singerClasslist.singer;return{list:t.list,singerName:t.singerName,banner:t.banner,intro:t.intro,page:t.page,loading:t.loading,total:t.total}},function(t){return{getSongsList:function(e){t({type:"GET_SINGER_SONGS_LIST_REQUEST",payload:e})},loadSongsList:function(e){t({type:"LOAD_SONGS_LIST_REQUEST",payload:e})},initSinger:function(){t({type:"INIT_SONGS_LIST"})},showLoading:function(e){t({type:"CHANGE_SINGER_LOADING",payload:e})}}}),Object(O.immutableRenderDecorator)(o=a(o=Object(C.a)(o=function(e){function o(){var e,c;i()(this,o);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return c=p()(this,(e=f()(o)).call.apply(e,[this].concat(n))),v()(h()(h()(c)),"componentDidMount",function(){var e=c.props,t=e.match.params.id,n=e.getSongsList,a=e.page,o=e.list;t&&!o.length&&n({singerid:t,page:a})}),v()(h()(h()(c)),"componentWillUnmount",function(){var e=c.props,t=e.initSinger;e.list.length&&t()}),v()(h()(h()(c)),"loadList",function(){var e=c.props,t=e.match.params.id,n=e.loadSongsList,a=e.page,o=e.total,r=e.list,i=e.showLoading;o>r.length&&(i(!0),n({singerid:t,page:a+1}))}),c}return m()(o,e),s()(o,[{key:"render",value:function(){var e=this.props,t=e.list,n=e.singerName,a=e.banner,o=e.intro,r=e.loading,i=e.onSongClick,c=e.addPlayingList,s=e.onDownload,l=[{name:"播放",key:"play",onClick:function(e,t){i(e),t()}},{name:"添加到歌单",key:"add",onClick:function(e,t){c({id:e.id,author:e.desc,name:e.name}),C.c.show("添加成功"),t()}},{name:"分享",key:"share",onClick:function(e,t){C.c.show("该功能暂时没开通")}},{name:"下载",key:"download",onClick:function(e,t){s(e.id),t()}}];return S.a.createElement("div",{className:"songs"},S.a.createElement(w.a,{style:{paddingBottom:70},loading:r,onBottom:this.loadList},S.a.createElement(k.a,{actions:l,onSongClick:i,list:t,title:n,banner:a,collapse:{header:n,content:o}})))}}]),o}(b.Component))||o)||o)||o);t.default=N}}]);
//# sourceMappingURL=4.js.map