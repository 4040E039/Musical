(function(t){function e(e){for(var s,n,i=e[0],o=e[1],c=e[2],m=0,d=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(d.length)d.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(s=!1)}s&&(l.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},l=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=o;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var s=a("2b0e"),r=a("5f5b");a("ab8b"),a("2dd8");s["default"].use(r["a"]);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0"}}),a("Header"),a("Drum"),a("Parallax"),a("Card"),a("Slogan"),a("Form"),a("Footer")],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("b-container",{staticClass:"p-0",attrs:{fluid:""}},[a("b-navbar",{attrs:{toggleable:"lg",type:"default"}},[a("b-navbar-brand",{attrs:{href:"#"}},[a("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:["fas","guitar"]}}),t._v(" Musical ")],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}},[a("font-awesome-icon",{staticStyle:{"font-size":"25px"},attrs:{icon:["fas","align-right"]}})],1),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{href:"#"}},[t._v("HOME")]),a("b-nav-item",{attrs:{href:"#"}},[t._v("COURSE")]),a("b-nav-item",{attrs:{href:"#"}},[t._v("PRICE")]),a("b-nav-item",{attrs:{href:"#"}},[t._v("ABOUT")]),a("b-nav-item",{staticClass:"bell",attrs:{href:"#"}},[a("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:["fas","bell"]}})],1)],1)],1)],1)],1),a("b-container",{staticClass:"text-center"},[a("b-row",[a("b-col",{staticClass:"text-white",attrs:{lg:"7",md:"7",sm:"12"}},[a("h6",[t._v("AUTHOR: LEE")]),a("h1",[t._v("It is A guitar")]),a("h1",[t._v("AND YOU ?")]),a("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut molestiae esse facere ad veniam. Nesciunt in porro asperiores laborum consequatur vero aperiam quisquam!")]),a("button",{staticClass:"btn btn-light px-5 py-2 primary-btn"},[t._v(" By now for $5.99 ")])]),a("b-col",{attrs:{lg:"5",md:"5",sm:"12"}},[a("img",{attrs:{src:"./image/guitar.png",alt:"guitar"}})])],1)],1)],1)},o=[],c={name:"Header"},u=c,m=a("2877"),d=Object(m["a"])(u,i,o,!1,null,null,null),b=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"drum"},[a("b-container",{staticClass:"p-0",attrs:{fluid:""}},[a("b-row",[a("b-col",{staticClass:"imgdrum",attrs:{lg:"6",md:"12",sm:"12"}},[a("img",{attrs:{src:"./image/drum.png",alt:"drum"}})]),a("b-col",{staticClass:"drumTitle",attrs:{lg:"6",md:"12",sm:"12"}},[a("h2",{staticClass:"text-uppercase pt-5"},[a("span",[t._v("Let me")]),a("span",[t._v("Play")]),a("span",[t._v("Drum")])])])],1)],1)],1)},f=[],g={name:"Drum"},v=g,h=Object(m["a"])(v,p,f,!1,null,null,null),C=h.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"p-0 parallax",attrs:{fluid:""}},[a("div",{staticClass:"shadow"},[t._v(" Lorem ipsum adipisicing ! ")])])},_=[],y={name:"Parallax"},w=y,O=Object(m["a"])(w,x,_,!1,null,null,null),S=O.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"cards"},[a("b-container",{staticClass:"p-0"},[a("b-row",[a("b-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("b-card",{staticClass:"text-center services",attrs:{title:"WP DEVELOPER","img-src":"./image/s4.png"}},[a("b-card-text",[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")])],1)],1),a("b-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("b-card",{staticClass:"text-center services",attrs:{title:"UX/UI DESING","img-src":"./image/s1.png"}},[a("b-card-text",[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")])],1)],1),a("b-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("b-card",{staticClass:"text-center services",attrs:{title:"WEB DESIGN","img-src":"./image/s2.png"}},[a("b-card-text",[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")])],1)],1),a("b-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("b-card",{staticClass:"text-center services",attrs:{title:"SEO OPTIMIZE","img-src":"./image/s3.png"}},[a("b-card-text",[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")])],1)],1)],1)],1)],1)},k=[],j={name:"Card"},P=j,q=Object(m["a"])(P,E,k,!1,null,null,null),L=q.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"formSection"},[a("b-container",{staticClass:"p-0"},[a("b-card",{staticClass:"from border-info"},[a("b-form-group",{staticClass:"mb-0 form-title",attrs:{"label-cols-lg":"2",label:"Shipping Address","label-size":"lg","label-class":"font-weight-bold p-0"}},[a("b-form-group",{attrs:{"label-cols-sm":"2",label:"Street :","label-align-sm":"right","label-for":"nested-street"}},[a("b-form-input",{staticClass:"w-75",class:t.borderColor,attrs:{id:"nested-street"},model:{value:t.street,callback:function(e){t.street=e},expression:"street"}})],1),a("b-form-group",{attrs:{"label-cols-sm":"2",label:"Date :","label-align-sm":"right","label-for":"nested-city"}},[a("b-form-input",{staticClass:"w-75",attrs:{type:"date",id:"nested-city"}})],1),a("b-form-group",{attrs:{"label-cols-sm":"2",label:"Time :","label-align-sm":"right","label-for":"nested-state"}},[a("b-form-input",{staticClass:"w-75",attrs:{type:"time",id:"nested-state"}})],1),a("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"2",label:"Ship via :","label-align-sm":"right"}},[a("b-form-radio-group",{staticClass:"pt-2",attrs:{options:["Air","Courier","Mail"]}})],1),a("b-form-group",{staticClass:"mx-auto mt-5",attrs:{"label-cols-sm":"2",label:"","label-align-sm":""}},[a("b-button",{staticClass:"mr-5",attrs:{variant:"outline-danger"}},[t._v("Danger")]),a("b-button",{attrs:{variant:"primary"}},[t._v("Primary")])],1)],1)],1)],1)],1)},A=[],D={name:"Form",data:function(){return{street:""}},computed:{borderColor:function(){var t=this.street.length;return 0===t?"border-dark":t>=3&&t<15?"is-valid":"is-invalid"}}},I=D,$=Object(m["a"])(I,T,A,!1,null,null,null),M=$.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"slogan"},[a("b-container",{staticClass:"p-0",attrs:{fluid:""}},[a("div",{staticClass:"slogan-title text-uppercase"},[t._v(" Now input your Shipping Address !! ")])])],1)},U=[],H={name:"Slogan"},N=H,R=Object(m["a"])(N,F,U,!1,null,null,null),B=R.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("b-container",{staticClass:"p-0",attrs:{fluid:""}},[a("b-row",[a("b-col",{staticClass:"footerCol",attrs:{lg:"3",md:"3",sm:"12"}},[a("h4",{staticClass:"text-light mb-3"},[t._v("About us")]),a("p",{staticClass:"text-muted"},[t._v("Lorem, pariatur hic enim sunt deserunt placeat ipsum.")]),a("p",{staticClass:"text-muted"},[t._v("Lorem, pariatur")]),a("p",{staticClass:"text-muted"},[t._v("Lorem placeat ipsum.")]),a("p",{staticClass:"text-muted"},[t._v("Lorem")])]),a("b-col",{staticClass:"footerCol",attrs:{lg:"3",md:"3",sm:"12"}},[a("h4",{staticClass:"text-light mb-3"},[t._v("Hello World")]),a("p",{staticClass:"text-muted mb-5"},[t._v("Lorem nemo doloremque in. Mollitia, id ducimus iste cumque molestias autem cum accusantium ad est?")]),a("p",{staticClass:"text-muted"},[t._v("Lorem, pariatur hic enim sunt deserunt placeat ipsum.")])]),a("b-col",{attrs:{lg:"1",md:"1",sm:"12"}}),a("b-col",{staticClass:"footerCol",attrs:{lg:"5",md:"5",sm:"12"}},[a("h4",{staticClass:"text-light mb-1"},[t._v("Input")]),a("p",{staticClass:"text-muted"},[t._v("Input yor email")]),a("b-form",{staticClass:"input-group w-75",attrs:{action:""}},[a("input",{staticClass:"form-control searchInput",attrs:{type:"search",placeholder:"",name:"",id:""}}),a("button",{staticClass:"search"},[a("font-awesome-icon",{staticClass:"mx-3 text-light",attrs:{icon:["fas","search"]}})],1)]),a("div",{staticClass:"icon my-4"},[a("h4",{staticClass:"text-light mb-3"},[t._v("Follow Us")]),a("span",{staticClass:"mr-3"},[a("font-awesome-icon",{staticClass:"fa-2x fb",attrs:{icon:["fab","facebook-square"]}})],1),a("span",{staticClass:"mr-3"},[a("font-awesome-icon",{staticClass:"fa-2x ig",attrs:{icon:["fab","instagram-square"]}})],1),a("span",{staticClass:"mr-3"},[a("font-awesome-icon",{staticClass:"fa-2x line",attrs:{icon:["fab","line"]}})],1),a("span",{staticClass:"mr-3"},[a("font-awesome-icon",{staticClass:"fa-2x yt",attrs:{icon:["fab","youtube"]}})],1)])],1)],1)],1)],1)},z=[],G={name:"Footer"},J=G,V=Object(m["a"])(J,W,z,!1,null,null,null),X=V.exports,Y={name:"App",components:{Header:b,Drum:C,Parallax:S,Card:L,Slogan:B,Form:M,Footer:X}},Z=Y,K=Object(m["a"])(Z,l,n,!1,null,null,null),Q=K.exports,tt=(a("be55"),a("ecee")),et=a("ad3d"),at=a("c074"),st=a("f2d1");tt["c"].add(at["d"],at["c"],at["b"],at["a"],st["a"],st["b"],st["c"],st["d"]),s["default"].component("font-awesome-icon",et["a"]),new s["default"]({render:function(t){return t(Q)}}).$mount("#app"),window.addEventListener("scroll",(function(){var t=document.querySelector(".drum").offsetTop,e=document.documentElement.scrollTop||document.body.scrollTop||document.querySelector(".navbar-default").scrollTop;e>t?document.querySelector(".navbar-default").classList.add("sticky"):document.querySelector(".navbar-default").classList.remove("sticky"),console.log(e)}),!0)},be55:function(t,e,a){}});
//# sourceMappingURL=app.ce4bc568.js.map