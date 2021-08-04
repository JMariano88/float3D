(this.webpackJsonpsecond=this.webpackJsonpsecond||[]).push([[0],{34:function(e,t,s){},52:function(e,t,s){"use strict";s.r(t);var n=s(6),c=s.n(n),i=s(25),r=s.n(i),a=(s(34),s(17)),j=s(19),l=s(57),o=s(56),b=s(58),d=s(13),h=(s(44),s(46),s(9)),O=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),s=t[0],c=t[1],i=Object(n.useState)(!1),r=Object(d.a)(i,2),a=r[0],j=r[1],l=Object(n.useState)(!1),o=Object(d.a)(l,2),b=o[0],O=o[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("header",{children:[Object(h.jsxs)("div",{className:s?"menu-btn close":"menu-btn",onClick:function(){return 1!=a&&1!=b||(j(!1),O(!1)),void c(!s)},children:[Object(h.jsx)("div",{className:"btn-line"}),Object(h.jsx)("div",{className:"btn-line"}),Object(h.jsx)("div",{className:"btn-line"})]}),Object(h.jsxs)("nav",{className:"hidden",children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsxs)("a",{href:"#",children:["FLOAT 3D ",Object(h.jsx)("br",{}),Object(h.jsx)("span",{style:{fontSize:"14px"},children:"by @Jimmy Mariano"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{style:{fontSize:"12px"},children:"Web designer & Developper"})]})}),Object(h.jsxs)("ul",{className:s?"active":"",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{onClick:function(){return 1!=s&&1!=b||(c(!1),O(!1)),void j(!a)},children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{onClick:function(){return 1!=s&&1!=a||(c(!1),j(!1)),void O(!b)},children:"Contact"})})]})]})]}),Object(h.jsxs)("main",{children:[Object(h.jsxs)("section",{className:a?"active":"",children:[Object(h.jsx)("h1",{children:"Me & myself"}),Object(h.jsx)("p",{children:"My name is Jimmy. I am Designer / Frontend Developer enthusiast living in Porto,Portugal and I like to code things from scratch,"}),Object(h.jsx)("p",{children:"Since I start my journey as a freelancer nearly 2 years ago (2018), I self realize have a serious passion for creating intuitive, dynamic user experiences."}),Object(h.jsx)("p",{children:"I enjoy bringing ideas to life in the browser."}),Object(h.jsx)("p",{children:"I build everything from small business sites, if you are looking for a web presence I am the right guy,"}),Object(h.jsx)("p",{children:"I am interested for all spectrum frontend ideas, ready to work on ambitious projects. Get in touch with me here."}),Object(h.jsx)("button",{children:"Let's make something great"})]}),Object(h.jsx)("section",{className:b?"active":"",children:Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("h1",{children:"contact me"})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("h4",{style:{textAlign:"left"},children:"We'd love to hear from you!"})}),Object(h.jsxs)("div",{className:"row input-container",children:[Object(h.jsxs)("div",{className:"styled-input wide",children:[Object(h.jsx)("input",{type:"text",required:!0}),Object(h.jsx)("label",{children:"Name"})]}),Object(h.jsxs)("div",{className:"styled-input",children:[Object(h.jsx)("input",{type:"text",required:!0}),Object(h.jsx)("label",{children:"Email"})]}),Object(h.jsxs)("div",{className:"styled-input",style:{float:"right"},children:[Object(h.jsx)("input",{type:"text",required:!0}),Object(h.jsx)("label",{children:"Phone Number"})]}),Object(h.jsxs)("div",{className:"styled-input wide",children:[Object(h.jsx)("textarea",{required:!0}),Object(h.jsx)("label",{children:"Message"})]}),Object(h.jsx)("div",{className:"btn-lrg submit-btn",children:"Send Message"})]})]})})]})]})};var u=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("main",{children:[Object(h.jsx)("h1",{children:"ABOUT"}),Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam molestiae explicabo cum facere ratione veritatis."}),Object(h.jsx)("button",{children:"Read More"})]})})};function x(e){var t=Object(n.useRef)(),s=Object(n.useRef)(),c=Object(n.useRef)();Object(j.b)((function(){return t.current.rotation.y-=.001})),Object(j.b)((function(){return s.current.rotation.z-=.0015})),Object(j.b)((function(){return c.current.rotation.z-=.001}));var i=Object(l.a)("/earthexp2.glb"),r=i.nodes,o=i.materials;return Object(h.jsxs)("group",Object(a.a)(Object(a.a)({},e),{},{dispose:null,children:[Object(h.jsx)("mesh",{ref:t,geometry:r.Sphere.geometry,material:o["Material.001"],position:[-3.32,-4.81,.82],scale:38.07}),Object(h.jsx)("mesh",{ref:s,geometry:r.pSphere1.geometry,material:o["phong1.008"],position:[-1.2,-2.5,2.5],rotation:[Math.PI/2,0,0],scale:3}),Object(h.jsx)("mesh",{ref:c,geometry:r.pSphere4.geometry,material:o["lambert6.004"],position:[-1.2,-2.5,2.5],rotation:[Math.PI/2,0,0],scale:3.01})]}))}function m(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(j.a,{camera:{position:[4,0,0]},children:[Object(h.jsx)("pointLight",{position:[0,1,-50],intensity:2}),Object(h.jsx)("ambientLight",{intensity:.2}),Object(h.jsx)(n.Suspense,{fallback:null,children:Object(h.jsx)(x,{})}),Object(h.jsx)(o.a,{enablePan:!1,enableZoom:!1,maxPolarAngle:Math.PI/2.5,minPolarAngle:Math.PI/4})]}),Object(h.jsx)(b.a,{}),Object(h.jsx)(O,{}),Object(h.jsx)(u,{})]})}var p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,59)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),p()}},[[52,1,2]]]);
//# sourceMappingURL=main.0e783a05.chunk.js.map