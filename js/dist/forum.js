module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},,function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},,function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(0),a=n.n(r),s=n(3),u=n.n(s);function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var c=n(4),p=n.n(c),f=n(5),l=n.n(f),d=n(6),g=n.n(d),x=n(7),b=n.n(x),y=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,i(e,n);var r=o.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!1,this.message=g()(""),this.sent=!1},r.form=function(){return app.session.user?this.sent?m("p","Sent successful"):m("form.Form-group",{onsubmit:this.submit.bind(this)},[m("textarea.message1",{required:!0,bidi:this.message,placeholder:app.translator.trans("flarum-ext-contactme.forum.textAreaField")}),m(b.a,{type:"submit",loading:this.loading,className:"Button"},app.translator.trans("flarum-ext-contactme.forum.sendForm"))]):m("p","Not logged in!")},r.view=function(){return m(".IndexPage",[a.a.prototype.hero(),m(".container",m(".sideNavContainer",[m("nav.IndexPage-nav.sideNav",m("ul",l()(a.a.prototype.sidebarItems().toArray()))),m(".IndexPage-results.sideNavOffset",m("h1",{class:"titolo1"},app.translator.trans("flarum-ext-contactme.forum.pageTitle")),m("p",{class:"banner-message"},app.translator.trans("flarum-ext-contactme.forum.pText")),this.form())]))])},r.submit=function(t){var e=this;t.preventDefault(),this.loading=!0,m.redraw(),app.request({method:"POST",url:app.forum.attribute("baseUrl")+"/sendmail",body:{message:this.message()}}).then((function(){e.loading=!1,e.sent=!0,m.redraw()}))},o}(p.a);app.initializers.add("justoverclock/flarum-ext-contactme",(function(){})),app.routes.contactPage={path:"/contact-us",component:y},Object(o.extend)(a.a.prototype,"navItems",(function(t){return t.add("contactPage",m(u.a,{href:app.route("contactPage"),icon:"fas fa-at"},app.translator.trans("flarum-ext-contactme.forum.title")),100),t}))}]);
//# sourceMappingURL=forum.js.map