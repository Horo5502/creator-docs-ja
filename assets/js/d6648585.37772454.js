"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[5599],{5156:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var r=s(92005),i=s(74848),t=s(28453);const l={slug:"release-3-7-2",date:new Date("2024-10-21T00:00:00.000Z"),title:"Release 3.7.2",authors:["momo"],tags:["release"]},a=void 0,o={authorsImageUrls:[void 0]},d=[{value:"Summary",id:"summary",level:2},{value:"New features",id:"new-features",level:2},{value:"Fixes &amp; Changes",id:"fixes--changes",level:2},{value:"Changes in <code>3.7.2-beta.2</code>",id:"changes-in-372-beta2",level:2},{value:"Changes in <code>3.7.2-beta.3</code>",id:"changes-in-372-beta3",level:2},{value:"Changes between <code>beta.3</code> and the the final release",id:"changes-between-beta3-and-the-the-final-release",level:2},{value:"Known Issues",id:"known-issues",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.p,{children:["This update adds ",(0,i.jsx)(n.a,{href:"/platforms/android/build-test-mobile",children:"Build & Test for Mobile"}),", ",(0,i.jsx)(n.a,{href:"/sdk/example-central",children:"Example Central"})," and some fixes for ",(0,i.jsx)(n.a,{href:"http://hello.vrchat.com/blog/spookality-2024-arrives-october-1",children:"Spookality '24"}),"! It also introduces ",(0,i.jsx)(n.em,{children:"Udon Code Signing"})," for improved security."]}),"\n",(0,i.jsx)(n.h2,{id:"new-features",children:"New features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/platforms/android/build-test-mobile",children:"Build & Test for Mobile"})," - send worlds directly to a connected Android Device while working on it for ",(0,i.jsx)(n.em,{children:"much"})," quicker testing and iteration."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/sdk/example-central",children:"Example Central"})," - browse and import SDK Examples from within the Unity Editor."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"fixes--changes",children:"Fixes & Changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VRCPlayerAPI.SetAvatarEyeHeightByMultiplier"})," now works properly in ClientSim."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"changes-in-372-beta2",children:["Changes in ",(0,i.jsx)(n.code,{children:"3.7.2-beta.2"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added ",(0,i.jsx)(n.em,{children:"Udon Code Signing"}),"!","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Any worlds uploaded with this SDK (or newer) receive a server-side signature. This helps ensure only authentic (unmodified) versions of your world can be loaded into VRChat.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This makes it significantly harder for malicious players to cheat or bypass scripts in your worlds."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Each platform (PC, Android, iOS) has a different signature, so you need to upgrade all of your world's platforms."}),"\n",(0,i.jsx)(n.li,{children:"Udon code signing does not affect non-malicious users, and will not change anything about your Unity editor experience."}),"\n",(0,i.jsx)(n.li,{children:"This SDK also upgrades all your Udon scripts to a more efficient storage format (only relevant for very old world projects)."}),"\n",(0,i.jsx)(n.li,{children:"We recommend upgrading and re-uploading your worlds with this SDK to make your worlds more secure!"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"changes-in-372-beta3",children:["Changes in ",(0,i.jsx)(n.code,{children:"3.7.2-beta.3"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed timing of Udon Code Signature calculation.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["It is now calculated during the ",(0,i.jsx)(n.a,{href:"https://docs.unity3d.com/ScriptReference/Build.IProcessSceneWithReport.html",children:(0,i.jsx)(n.code,{children:"IProcessSceneWithReport"})})," callback with an execution order of ",(0,i.jsx)(n.code,{children:"int.MaxValue - 8192"})," when you build a world."]}),"\n",(0,i.jsx)(n.li,{children:"This fixes an issue with some Udon compilers (e.g. CyanTrigger) that modify code after signature calculation, making uploaded worlds fail verification."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"changes-between-beta3-and-the-the-final-release",children:["Changes between ",(0,i.jsx)(n.code,{children:"beta.3"})," and the the final release"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed several bugs with Build & Test for Mobile from open beta feedback."}),"\n",(0,i.jsxs)(n.li,{children:["Added a number of helpful error messages when incorrectly setting up Build & Test for Mobile.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"For example, we will now warn you if your device's screen is locked."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The first time you open a Scene and select a GameObject inside a prefab with a U# Behaviour, the GUI for the component directly below that U# Behaviour will not show its GUI. Deselecting and re-selecting the prefab fixes this."}),"\n",(0,i.jsxs)(n.li,{children:["Buffer Particles don't work as they did in Unity 2019, ",(0,i.jsx)(n.a,{href:"https://x.com/hfcRedddd/status/1696915379090604179",children:"there is a workaround to fix them from community member hfcRed here"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Unity 2022 sometimes causes Rider's debugger to stop for unhandled exceptions in Unity's IMGUI.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Please refer to ",(0,i.jsx)(n.a,{href:"https://forum.unity.com/threads/rider-debugger-breaks-on-unhandled-exception.1135879/#post-7305256",children:"this workaround"})," and ",(0,i.jsx)(n.a,{href:"https://youtrack.jetbrains.com/issue/RIDER-64944",children:"Jetbrains's bug tracker"})," for more information."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var r=s(96540);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}},92005:e=>{e.exports=JSON.parse('{"permalink":"/creator-docs_ja/releases/release-3-7-2","source":"@site/releases/release-3.7.2.md","title":"Release 3.7.2","description":"Summary","date":"2024-10-21T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/creator-docs_ja/releases/tags/release"}],"hasTruncateMarker":false,"authors":[{"name":"Momo the Monster","title":"VRChat Developer","url":"https://github.com/momo-the-monster","imageURL":"https://github.com/momo-the-monster.png","key":"momo","page":null}],"frontMatter":{"slug":"release-3-7-2","date":"2024-10-21T00:00:00.000Z","title":"Release 3.7.2","authors":["momo"],"tags":["release"]},"unlisted":false,"prevItem":{"title":"Release 3.7.3","permalink":"/creator-docs_ja/releases/release-3-7-3"},"nextItem":{"title":"Release 3.7.1","permalink":"/creator-docs_ja/releases/release-3-7-1"}}')}}]);