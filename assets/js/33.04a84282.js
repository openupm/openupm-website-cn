(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{491:function(t,s,n){},501:function(t,s,n){"use strict";var a=n(491);n.n(a).a},505:function(t,s,n){"use strict";n.r(s);n(269);var a=n(500),e=n.n(a),i={components:{},data:function(){return{}},computed:{stars:function(){var t=Number(this.$store.getters.siteInfo.stars);return isNaN(t)?"...":e()(t).format("1.1a")},gitHubUrl:function(){return"cn"==this.$site.themeConfig.region?"https://github.com/openupm/openupm/blob/master/README.zh-cn.md":"https://github.com/openupm/openupm"}}},r=(n(501),n(30)),o=Object(r.a)(i,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"nav-links hide-md"},[n("div",{staticClass:"nav-item growth"},[n("div",{staticClass:"btn-group"},[n("a",{staticClass:"btn btn-sm",attrs:{href:t.gitHubUrl}},[n("i",{staticClass:"fab fa-github"}),t._v(" Stars\n        "),n("span",{staticClass:"stars"},[t._v(t._s(t.stars))])]),t._v(" "),n("a",{staticClass:"btn btn-sm",attrs:{href:"https://www.patreon.com/openupm"}},[n("i",{staticClass:"fab fa-patreon"}),t._v(" "+t._s(t.$t("donate")))])])])])}),[],!1,null,null,null);s.default=o.exports}}]);