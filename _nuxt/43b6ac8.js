(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{334:function(e,t,n){var content=n(348);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("1b7833da",content,!0,{sourceMap:!1})},347:function(e,t,n){"use strict";var r=n(334);n.n(r).a},348:function(e,t,n){(t=n(15)(!1)).push([e.i,"#myCanvas{border:1px solid grey}",""]),e.exports=t},386:function(e,t,n){"use strict";n.r(t);n(27),n(45);var r={n1:"",n2:0,n3:"",n4:0,canvas:null,data:function(){return{modelType:["deterministic","stochastic"]}},methods:{generateTree:function(){this.n2=document.getElementById("angle").value,this.n3=document.getElementById("axiom").value,this.n4=document.getElementById("n").value;var e,t,n,r,o,l,c=document.getElementById("myCanvas");this.canvas=c.getContext("2d"),e=this.n1,t=this.n2,n=this.n3,r=this.n4,o=this.canvas,l=!0,((t=parseFloat(t))!=t||t>90||t<0)&&(alert("Angle must be a floating point number 0<=x<=90!"),l=!1),((r=parseInt(r))!=r||r>10||r<=0)&&(alert("Number of iterations must be an integer 0<x<=10!"),l=!1),l&&(alert("Generating tree with "+e+" "+t+" "+n+" "+r),o.beginPath(),o.strokeStyle="white",o.lineWidth=1,o.moveTo(0,0),o.lineTo(100,100),o.stroke(),o.closePath())},onChange:function(e){this.n1=e}},mounted:function(){var e=document.getElementById("myCanvas");this.canvas=e.getContext("2d")}},o=(n(347),n(85)),l=n(115),c=n.n(l),d=n(223),v=n(336),h=n(332),m=n(382),w=n(326),f=n(383),_=n(385),y=n(329),x=n(384),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("div",{staticClass:"text-center"}),e._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v(" Tree generator - group 7 ")]),e._v(" "),n("v-card-text",[n("p",[e._v("\n          Welcome to the tree generator website. This creates simple tree-like\n          shapes using L-systems as described in\n          "),n("a",{attrs:{href:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjh_PrGydnsAhVVtXEKHZ0LCl0QFjAAegQIAxAC&url=http%3A%2F%2Falgorithmicbotany.org%2Fpapers%2Fabop%2Fabop.pdf&usg=AOvVaw2r9WRagwONeb1NTGPS7xVT",target:"_blank",rel:"noopener noreferrer",title:"book"}},[e._v("\n            The Algorithmic Beauty of Plants ")]),e._v(".\n        ")]),e._v(" "),n("p",[e._v("\n          Find a bug? Report it on the github\n          "),n("a",{attrs:{href:"https://github.com/rosieeaves/treegen_group7",target:"_blank",rel:"noopener noreferrer",title:"contribute"}},[e._v("\n            issue board")]),e._v(".\n        ")]),e._v(" "),n("v-container",{attrs:{fluid:""}},[n("v-select",{attrs:{id:"modelType",items:e.modelType,label:"Select your model type",dense:"",outlined:"","return-object":""},on:{input:e.onChange}}),e._v(" "),n("v-textarea",{attrs:{id:"angle",label:"Branching angle","auto-grow":"",outlined:"",rows:"1","row-height":"15"}}),e._v(" "),n("v-textarea",{attrs:{id:"axiom",label:"Starting string","auto-grow":"",outlined:"",rows:"1","row-height":"15"}}),e._v(" "),n("v-textarea",{attrs:{id:"n",label:"No. of Iterations","auto-grow":"",outlined:"",rows:"1","row-height":"15"}})],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:e.generateTree}},[e._v(" Draw Tree! ")])],1),e._v(" "),n("div",{attrs:{id:"app"}},[n("canvas",{attrs:{id:"myCanvas",width:"500",height:"500"}})])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VCol:m.a,VContainer:w.a,VRow:f.a,VSelect:_.a,VSpacer:y.a,VTextarea:x.a})}}]);