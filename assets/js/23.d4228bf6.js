(window.webpackJsonp=window.webpackJsonp||[]).push([[23,35],{489:function(t,n,e){"use strict";e.r(n);e(168),e(117),e(267);var i=e(490),r={name:"NavLink",props:{item:{type:Object,required:!0}},computed:{link:function(){return this.item.raw?this.item.link:Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(n){return n===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},isOutboundLink:function(){return!this.item.icon&&!this.item.raw&&""===this.target&&Object(i.f)(this.link)},showLeftIcon:function(){return this.item.icon&&this.item.iconLeft},showRightIcon:function(){return this.item.icon&&!this.item.iconLeft},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction:function(){this.$emit("focusout")}}},a=e(30),s=Object(a.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isInternal&&!t.item.raw?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(n){return t.focusoutAction(n)}}},[t.showLeftIcon?e("i",{class:t.item.icon,attrs:{"aria-hidden":"true"}}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n  "),t.showRightIcon?e("i",{class:t.item.icon,attrs:{"aria-hidden":"true"}}):t._e()]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t.showLeftIcon?e("i",{class:t.item.icon,attrs:{"aria-hidden":"true"}}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n  "),t.showRightIcon?e("i",{class:t.item.icon,attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),t.isOutboundLink?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);n.default=s.exports},490:function(t,n,e){"use strict";e.d(n,"d",(function(){return i})),e.d(n,"a",(function(){return a})),e.d(n,"i",(function(){return s})),e.d(n,"f",(function(){return o})),e.d(n,"g",(function(){return c})),e.d(n,"h",(function(){return l})),e.d(n,"b",(function(){return f})),e.d(n,"e",(function(){return h})),e.d(n,"k",(function(){return p})),e.d(n,"l",(function(){return d})),e.d(n,"c",(function(){return g})),e.d(n,"j",(function(){return v}));e(51),e(118),e(171),e(120),e(271),e(115),e(50),e(499),e(80),e(270),e(119);var i=/#.*$/,r=/\.(md|html)$/,a=/\/$/,s=/^[a-z]+:/i;function u(t){return decodeURI(t).replace(i,"").replace(r,"")}function o(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(o(t))return t;var n=t.match(i),e=n?n[0]:"",r=u(t);return a.test(r)?t:r+".html"+e}function h(t,n){var e=decodeURIComponent(t.hash),r=function(t){var n=t.match(i);if(n)return n[0]}(n);return(!r||e===r)&&u(t.path)===u(n)}function p(t,n,e){if(o(n))return{type:"external",path:n};e&&(n=function(t,n,e){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return n+t;var r=n.split("/");e&&r[r.length-1]||r.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var u=a[s];".."===u?r.pop():"."!==u&&r.push(u)}""!==r[0]&&r.unshift("");return r.join("/")}(n,e));for(var i=u(n),r=0;r<t.length;r++)if(u(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:f(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(n,'"')),{}}function d(t,n,e,i){var r=e.pages,a=e.themeConfig,s=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return m(t);var u=s.sidebar||a.sidebar;if(u){var o=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(var e in n)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(e)))return{base:e,config:n[e]};var i;return{}}(n,u),c=o.base,l=o.config;return"auto"===l?m(t):l?l.map((function(t){return function t(n,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof n)return p(e,n,i);if(Array.isArray(n))return Object.assign(p(e,n[0],i),{title:n[1]});var a=n.children||[];return 0===a.length&&n.path?Object.assign(p(e,n.path,i),{title:n.title}):{type:"group",path:n.path,title:n.title,sidebarDepth:n.sidebarDepth,initialOpenGroupIndex:n.initialOpenGroupIndex,children:a.map((function(n){return t(n,e,i,r+1)})),collapsable:!1!==n.collapsable}}(t,r,c)})):[]}return[]}function m(t){var n=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:n.map((function(n){return{type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}}))}]}function g(t){var n;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},495:function(t,n,e){},499:function(t,n,e){"use strict";var i=e(169),r=e(10),a=e(19),s=e(20),u=e(172),o=e(170);i("match",1,(function(t,n,e){return[function(n){var e=s(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,e):new RegExp(n)[t](String(e))},function(t){var i=e(n,t,this);if(i.done)return i.value;var s=r(t),c=String(this);if(!s.global)return o(s,c);var l=s.unicode;s.lastIndex=0;for(var f,h=[],p=0;null!==(f=o(s,c));){var d=String(f[0]);h[p]=d,""===d&&(s.lastIndex=u(c,a(s.lastIndex),l)),p++}return 0===p?null:h}]}))},510:function(t,n,e){"use strict";var i=e(495);e.n(i).a},518:function(t,n,e){"use strict";e.r(n);e(269);var i=e(500),r=e.n(i),a={components:{NavLink:e(489).default},data:function(){return{}},computed:{packagesLink:function(){return{link:"/packages/",text:this.$t("packages"),icon:"fa fa-box-open",iconLeft:!0}},stars:function(){var t=Number(this.$store.getters.siteInfo.stars);return isNaN(t)?"...":r()(t).format("1.1a")},gitHubUrl:function(){return"cn"==this.$site.themeConfig.region?"https://github.com/openupm/openupm/blob/master/README.zh-cn.md":"https://github.com/openupm/openupm"}}},s=(e(510),e(30)),u=Object(s.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"growth-block show-sm"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column col-12"},[e("div",{staticClass:"btn-group"},[e("NavLink",{staticClass:"btn btn-sm",attrs:{item:t.packagesLink}}),t._v(" "),e("a",{staticClass:"btn btn-sm",attrs:{href:t.gitHubUrl}},[e("i",{staticClass:"fab fa-github"}),t._v(" Stars\n          "),e("span",{staticClass:"stars"},[t._v(t._s(t.stars))])]),t._v(" "),t._m(0)],1)])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"btn btn-sm",attrs:{href:"https://www.patreon.com/openupm"}},[n("i",{staticClass:"fab fa-patreon"}),this._v(" Donate")])}],!1,null,null,null);n.default=u.exports}}]);