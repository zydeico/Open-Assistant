"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[3500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||f[m]||s;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={},i="Classifying an assistant reply",o={unversionedId:"tasks/label_assistant_reply",id:"tasks/label_assistant_reply",title:"Classifying an assistant reply",description:"In this task, you'll be shown a random message written by another person. This",source:"@site/docs/tasks/label_assistant_reply.md",sourceDirName:"tasks",slug:"/tasks/label_assistant_reply",permalink:"/Open-Assistant/docs/tasks/label_assistant_reply",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tasks",permalink:"/Open-Assistant/docs/tasks/"},next:{title:"Classifying an initial prompt or user reply",permalink:"/Open-Assistant/docs/tasks/label_prompter_reply"}},l={},p=[],c={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"classifying-an-assistant-reply"},"Classifying an assistant reply"),(0,a.kt)("p",null,"In this task, you'll be shown a random message written by another person. This\nmessage is mimicing a reply from the assistant, adressing a previous prompt from\na user - an ",(0,a.kt)("strong",{parentName:"p"},"assistant reply"),". Your job is to rate parameters like quality or\npoliteness, as well as include any applicable labels, such as spam, PII or\nsexual content."),(0,a.kt)("p",null,"If you can't determine whether or not a reply is factually accurate, skip it\ninstead. If you are unsure of the definition of any of the labels, look up their\ndefinition\n",(0,a.kt)("a",{parentName:"p",href:"https://projects.laion.ai/Open-Assistant/docs/guides/guidelines#label-explanation"},"here"),"."),(0,a.kt)("p",null,"Replies generated from other chatbots such as ChatGPT are ",(0,a.kt)("strong",{parentName:"p"},"not")," permitted and\nin many cases against the terms of service of the provider. Answers that were\ngenerated from LLMs should be penalized accordingly. You can use detectors such\nas ",(0,a.kt)("a",{parentName:"p",href:"https://www.zerogpt.com/"},"ZeroGPT")," to determine if a message was written by\na human - just keep in mind that these tools aren't foolproof and can falsely\naccuse human-written text as machine-generated, and vice versa."),(0,a.kt)("p",null,"Please make sure to read the\n",(0,a.kt)("a",{parentName:"p",href:"https://projects.laion.ai/Open-Assistant/docs/guides/guidelines#classifying-assistant"},"guidelines"),"\nbefore submitting."))}f.isMDXComponent=!0}}]);