(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-component"},[n("avatar",{attrs:{size:t.size,src:t.userPic}}),t._v(" "),n("div",{staticClass:"userdata"},[n("div",{staticClass:"username"},[t._v(t._s(t.name))]),t._v(" "),n("div",{staticClass:"occ"},[t._v(t._s(t.occ))])])],1)};i._withStripped=!0;var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"avatar-component",style:this.measures},[e("img",this._b({staticClass:"image",attrs:{alt:"user picture"}},"img",this.$attrs,!1))])};a._withStripped=!0;var s={props:{size:{type:Number,default:"3"}},computed:{measures:function(){var t=Number(this.size);return{width:"".concat(t,"rem"),height:"".concat(t,"rem")}}}},r=(n(86),n(18)),c=Object(r.a)(s,a,[],!1,null,"3142f16f",null);c.options.__file="src/admin/components/avatar/avatar.vue";var o=c.exports,l={props:{size:{type:Number,default:2.7},occ:String,name:String,photo:String},components:{avatar:o},computed:{userPic:function(){return this.photo?"https://webdev-api.loftschool.com/".concat(this.photo):n(87).default}}},u=(n(88),Object(r.a)(l,i,[],!1,null,null,null));u.options.__file="src/admin/components/user/user.vue";var p=u.exports},114:function(t,e,n){"use strict";var i=n(85);n.n(i).a},115:function(t,e,n){"use strict";var i=n(89);n.n(i).a},132:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-component"},[e("headline",{attrs:{title:"Панель администрирования"}},[e("user",{attrs:{name:"Диана Курамшина"}})],1),this._v(" "),e("navigation")],1)};i._withStripped=!0;var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headline-component"},[n("div",{staticClass:"container headline-container"},[t._t("default"),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"buttons"},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.logout}},[t._v("Выйти")])])],2)])};a._withStripped=!0;var s=n(19),r=n.n(s),c=n(6);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}var l={props:{title:{type:String,default:"Панель администрирования"}},methods:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(c.b)({logout:"user/logout"}))},u=(n(114),n(18)),p=Object(u.a)(l,a,[],!1,null,"e6625b62",null);p.options.__file="src/admin/components/headline/headline.vue";var v=p.exports,f=n(105),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navigation-component"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"list"},t._l(t.links,(function(e){return n("li",{key:e.id,class:["item",{active:t.$route.path==="/"+e.alias}]},[n("router-link",{staticClass:"link",attrs:{exact:"",to:"/"+e.alias}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)})),0)])])};d._withStripped=!0;var m=[{id:0,title:"Обо мне",alias:"",active:!1},{id:1,title:"Работы",alias:"works",active:!0},{id:2,title:"Отзывы",alias:"reviews",active:!1}],h={data:function(){return{links:m}}},_=(n(115),Object(u.a)(h,d,[],!1,null,"79ddfb8f",null));_.options.__file="src/admin/components/navigation/navigation.vue";var b=_.exports,g={components:{headline:v,user:f.a,navigation:b}},O=Object(u.a)(g,i,[],!1,null,null,null);O.options.__file="src/admin/components/header/header.vue";var w=O.exports},71:function(t,e,n){},72:function(t,e,n){},85:function(t,e,n){},86:function(t,e,n){"use strict";var i=n(71);n.n(i).a},87:function(t,e,n){"use strict";n.r(e),e.default=n.p+"9c757ab7290c30bafb3fd4ca95a53805.png"},88:function(t,e,n){"use strict";var i=n(72);n.n(i).a},89:function(t,e,n){}}]);