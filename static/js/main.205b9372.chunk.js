(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{10:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),l=c(4),r=c.n(l),n=c(2),o=c(0),i=function(e){return e.setAlert&&Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"alert alert-".concat(e.setAlert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:e.setAlert.type})," ",e.setAlert.message]})})},d=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:"TextUtilities"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:"About"})}),Object(o.jsx)("div",{className:"form-check form-switch"})]}),Object(o.jsxs)("div",{className:"form-check form-switch",children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(o.jsxs)("label",{className:"form-check-label text-".concat("dark"===e.mode?"light":"dark"),for:"flexSwitchCheckDefault",children:["dark"===e.mode?"Disable":"Enable"," the Dark Mode"]})]})]})]})})})},b=function(e){var t=e.heading,c=e.mode,s=e.showAlert,l=Object(a.useState)(""),r=Object(n.a)(l,2),i=r[0],d=r[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container my-4 background-color: black;\r color: white;",style:"light"===c?{backgroundColor:"white",color:"black"}:{backgroundColor:"black",color:"white"},children:[Object(o.jsx)("h1",{className:"my-3",children:t}),Object(o.jsx)("form",{children:Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("textarea",{style:"light"===c?{backgroundColor:"white",color:"black"}:{backgroundColor:"black",color:"white"},placeholder:"Add Text Here",className:"form-control",id:"exampleFormControlTextarea1",rows:"3",value:i,onChange:function(e){d(e.target.value)}})})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=i.toUpperCase();d(e),s("success","TEXT IS CONVERTED TO UPPERCASE")},children:"TO UPPER CASE"}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=i.toLowerCase();d(e),s("success","text is converted ti lowercase")},children:"to lower case"})]}),Object(o.jsxs)("div",{className:"container my-3",style:"light"===c?{backgroundColor:"white",color:"black"}:{backgroundColor:"black",color:"white"},children:[Object(o.jsx)("h1",{children:"Your Text Summary"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:i.split(" ").length}),"words And",Object(o.jsxs)("span",{className:"font-weight-bold",children:[" ",i.length]})," characters"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:Math.round(i.length/250)<1?"few Seconds.. ":"".concat(Math.round(i.length/250)," minutes ")}),"to read.."]}),Object(o.jsx)("h1",{children:"Preview"}),Object(o.jsx)("p",{children:i})]})]})};var j=function(){var e=Object(a.useState)("light"),t=Object(n.a)(e,2),c=t[0],s=t[1],l=Object(a.useState)(null),r=Object(n.a)(l,2),j=r[0],h=r[1],m=function(e,t){h({type:e,message:t}),setTimeout((function(){h(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{mode:c,toggleMode:function(){"light"===c?(s("dark"),document.body.style.backgroundColor="black",m("success","dark mode enabled"),document.title="Dark mode active"):(s("light"),document.body.style.backgroundColor="white",m("success","light mode is enabled"),document.title="light mode active")}}),Object(o.jsx)(i,{setAlert:j}),Object(o.jsx)(b,{heading:"Enter text for analyze below",mode:c,showAlert:m})]})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.205b9372.chunk.js.map