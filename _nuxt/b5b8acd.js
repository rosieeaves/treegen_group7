(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{333:function(t,e,n){var content=n(350);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("4e8905c6",content,!0,{sourceMap:!1})},347:function(t,e,n){"use strict";n(163);var r=n(164);e.a=Object(r.a)("flex")},348:function(t,e,n){"use strict";n(163);var r=n(164);e.a=Object(r.a)("layout")},349:function(t,e,n){"use strict";var r=n(333);n.n(r).a},350:function(t,e,n){(e=n(15)(!1)).push([t.i,"#myCanvas{border:1px solid grey}",""]),t.exports=e},395:function(t,e,n){"use strict";n.r(e);var r={data:{canvas:null},methods:{draw:function(t){var e,n=document.getElementById("myCanvas");this.canvas=n.getContext("2d"),(e=this.canvas).beginPath(),e.strokeStyle="black",e.lineWidth=1,e.moveTo(0,0),e.lineTo(100,100),e.stroke(),e.closePath(),alert("The tree should now be drawn if the code were there!"),alert(document.getElementById("type").value+document.getElementById("angle").value+document.getElementById("axiom").value+document.getElementById("iter").value)}},mounted:function(){var t=document.getElementById("myCanvas");this.canvas=t.getContext("2d")}},o=(n(349),n(81)),l=n(115),c=n.n(l),v=n(223),d=n(347),m=n(348),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{staticClass:"text-left",style:{backgroundColor:"white"}},[n("div",{staticStyle:{color:"grey"},attrs:{id:"gui"}},[t._v("\n      Model type:\n      "),n("select",{attrs:{name:"type",id:"type"}},[n("option",{attrs:{value:"deterministic",selected:""}},[t._v("deterministic")]),t._v(" "),n("option",{attrs:{value:"stochastic"}},[t._v("stochastic")])]),t._v(" "),n("br"),t._v("\n\n      Branching angle:\n      "),n("input",{attrs:{type:"text",name:"angle",id:"angle",value:"25"}}),t._v(" "),n("br"),t._v("\n\n      Number of iterations:\n      "),n("input",{attrs:{type:"text",name:"iter",id:"iter",value:"5"}}),t._v(" "),n("br"),t._v("\n\n      Number of iterations:\n      "),n("input",{attrs:{type:"text",name:"axiom",id:"axiom",value:"F"}}),t._v(" "),n("br"),t._v(" "),n("v-btn",{staticStyle:{color:"black"},attrs:{large:"",outlined:""},on:{click:t.draw}},[t._v("Draw Tree!")])],1),t._v(" "),n("br"),t._v(" "),n("div",{attrs:{id:"app"}},[n("h1",[t._v("Tree")]),t._v(" "),n("canvas",{attrs:{id:"myCanvas",width:"640",height:"480"}})])])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VFlex:d.a,VLayout:m.a})}}]);