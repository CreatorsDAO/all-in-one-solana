"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[225],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>h});var a=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,a,o=function(e,r){if(null==e)return{};var n,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var r=a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var n=e.components,o=e.mdxType,t=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||t;return n?a.createElement(h,l(l({ref:r},s),{},{components:n})):a.createElement(h,l({ref:r},s))}));function h(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=n.length,l=new Array(t);l[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<t;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97884:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const t={sidebar_position:82,sidebar_label:"Anchor \u4e2d\u7684Program",sidebar_class_name:"green"},l="Anchor \u4e2d\u7684Program",i={unversionedId:"module5/program-in-anchor/README",id:"module5/program-in-anchor/README",title:"Anchor \u4e2d\u7684Program",description:"- \ud83d\udee3 Anchor\u4e2d\u7684PDA",source:"@site/docs/Solana-Co-Learn/module5/program-in-anchor/README.md",sourceDirName:"module5/program-in-anchor",slug:"/module5/program-in-anchor/",permalink:"/all-in-one-solana/Solana-Co-Learn/module5/program-in-anchor/",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/edit/main/docs/Solana-Co-Learn/module5/program-in-anchor/README.md",tags:[],version:"current",sidebarPosition:82,frontMatter:{sidebar_position:82,sidebar_label:"Anchor \u4e2d\u7684Program",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddf1 \u4f7f\u7528 Anchor \u6846\u67b6\u8fdb\u884c\u5f00\u53d1",permalink:"/all-in-one-solana/Solana-Co-Learn/module5/introduction-to-anchor/build-with-solana-frameworks/"},next:{title:"\ud83d\udee3 Anchor\u4e2d\u7684PDA",permalink:"/all-in-one-solana/Solana-Co-Learn/module5/program-in-anchor/pdas-in-anchor/"}},c={},p=[],s={toc:p},m="wrapper";function u(e){let{components:r,...n}=e;return(0,o.kt)(m,(0,a.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"anchor-\u4e2d\u7684program"},"Anchor \u4e2d\u7684Program"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module5/program-in-anchor/pdas-in-anchor/"},"\ud83d\udee3 Anchor\u4e2d\u7684PDA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-pdas/"},"\u4f7f\u7528Anchor PDA\u6784\u5efa")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module5/program-in-anchor/cpis-in-anchor/"},"\ud83d\udd00 Anchor\u7684CPIs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-cpis/"},"\u4f7f\u7528Anchor CPIs\u6784\u5efa"))))}u.isMDXComponent=!0}}]);