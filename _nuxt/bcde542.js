(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(t,r,n){var content=n(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("6570a8f6",content,!0,{sourceMap:!1})},222:function(t,r,n){"use strict";var e={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},o=n(85),c=n(115),l=n.n(c),v=n(324),d=n(331),f=n(325),m=n(223),_=n(326),h=n(327),w=n(158),V=n(159),x=n(106),k=n(160),D=n(79),y=n(328),I=n(330),N=n(329),P=n(220),component=Object(o.a)(e,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(r){t.drawer=r},expression:"drawer"}},[n("v-list",t._l(t.items,(function(r,i){return n("v-list-item",{key:i,attrs:{to:r.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(r.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(r.title)}})],1)],1)})),1)],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(r){r.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("mdi-application")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.fixed=!t.fixed}}},[n("v-icon",[t._v("mdi-minus")])],1),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),n("v-main",[n("v-container",[n("nuxt")],1)],1),t._v(" "),n("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(r){t.rightDrawer=r},expression:"rightDrawer"}},[n("v-list",[n("v-list-item",{nativeOn:{click:function(r){t.right=!t.right}}},[n("v-list-item-action",[n("v-icon",{attrs:{light:""}},[t._v(" mdi-repeat ")])],1),t._v(" "),n("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),n("v-footer",{attrs:{absolute:!t.fixed,app:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);r.a=component.exports;l()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:f.a,VBtn:m.a,VContainer:_.a,VFooter:h.a,VIcon:w.a,VList:V.a,VListItem:x.a,VListItemAction:k.a,VListItemContent:D.a,VListItemTitle:D.b,VMain:y.a,VNavigationDrawer:I.a,VSpacer:N.a,VToolbarTitle:P.a})},233:function(t,r,n){n(234),t.exports=n(235)},258:function(t,r,n){"use strict";var e=n(130);n.n(e).a},259:function(t,r,n){(r=n(15)(!1)).push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=r},70:function(t,r,n){"use strict";var e={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(258),n(85)),c=n(115),l=n.n(c),v=n(324),component=Object(o.a)(e,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);r.a=component.exports;l()(component,{VApp:v.a})}},[[233,5,1,6]]]);