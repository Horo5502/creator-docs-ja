"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[7998],{28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>i});var t=n(96540);const a={},r=t.createContext(a);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:s},e.children)}},57479:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var t=n(74364),a=n(74848),r=n(28453);const o={slug:"release-3-2-0",date:new Date("2023-05-03T00:00:00.000Z"),title:"Release 3.2.0",authors:["momo"],tags:["release"],draft:!1},i=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Summary",id:"summary",level:3},{value:"Features",id:"features",level:3}];function d(e){const s={a:"a",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h3,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(s.p,{children:"Adds DataContainers, PhysBones 1.1 ('Squishy PhysBones'), AsyncGPUReadback, and more."}),"\n",(0,a.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"DataContainers!"})," Lists, Dictionaries and JSON for Udon!"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Added DataLists and DataDictionaries, giving Udon functionality similar to Lists and Dictionaries.","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Lists and dictionaries typically need to support Generics, and Udon does not support them, so this is being done by putting your data into DataTokens first, which are able to store any value."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["Added VRCJSON, a helper class that can convert JSON strings (such as those received from ",(0,a.jsx)(s.a,{href:"/worlds/udon/string-loading",children:"Remote String Loading"})," to and from DataLists and DataDictionaries."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"/worlds/udon/data-containers",children:"Read the Data Containers / VRCJSON docs page"})," to learn more."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"AsyncGPUReadback!"})," This allows you to read back data from GPU and shaders without a heavy performance cost"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Adds the ",(0,a.jsx)(s.code,{children:"VRCAsyncGPUReadback.Request"})," function and corresponding ",(0,a.jsx)(s.code,{children:"OnAsyncGpuReadbackComplete"})," event"]}),"\n",(0,a.jsx)(s.li,{children:"These read data from the GPU into CPU memory without too much of a performance impact, at the expense of delaying the data for one or more frames"}),"\n",(0,a.jsxs)(s.li,{children:["Check the ",(0,a.jsx)(s.a,{href:"/worlds/udon/vrc-graphics/asyncgpureadback",children:"ASyncGPUReadback"})," docs for more info."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},74364:e=>{e.exports=JSON.parse('{"permalink":"/creator-docs_ja/releases/release-3-2-0","source":"@site/releases/release-3.2.0.md","title":"Release 3.2.0","description":"Summary","date":"2023-05-03T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/creator-docs_ja/releases/tags/release"}],"hasTruncateMarker":true,"authors":[{"name":"Momo the Monster","title":"VRChat Developer","url":"https://github.com/momo-the-monster","imageURL":"https://github.com/momo-the-monster.png","key":"momo","page":null}],"frontMatter":{"slug":"release-3-2-0","date":"2023-05-03T00:00:00.000Z","title":"Release 3.2.0","authors":["momo"],"tags":["release"],"draft":false},"unlisted":false,"prevItem":{"title":"ClientSim 1.2.4","permalink":"/creator-docs_ja/releases/clientsim-release-1.2.4"},"nextItem":{"title":"Release 3.1.13","permalink":"/creator-docs_ja/releases/release-3-1-13"}}')}}]);