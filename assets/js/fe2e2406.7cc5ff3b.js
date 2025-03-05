"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[3447],{28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}},65119:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var s=t(95475),r=t(74848),a=t(28453);const i={slug:"release-3-7-3",date:new Date("2024-11-05T00:00:00.000Z"),title:"Release 3.7.3",authors:["momo"],tags:["release"]},o=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Summary",id:"summary",level:2},{value:"New features",id:"new-features",level:2},{value:"Fixes &amp; Changes",id:"fixes--changes",level:2},{value:"Known Issues",id:"known-issues",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(n.p,{children:["This update fixes multiple issues with ",(0,r.jsx)(n.a,{href:"/avatars/avatar-dynamics/constraints",children:"VRChat Constraints"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"new-features",children:"New features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Added an option to the Settings tab of the SDK Control Panel to prevent VRChat constraints from running while in Edit mode."}),"\n",(0,r.jsxs)(n.li,{children:['It is now possible to trigger the "Activate" and "Zero" functions on a VRChat constraint from C# Unity Editor scripts by using the new ',(0,r.jsx)(n.code,{children:"ActivateConstraint()"})," and ",(0,r.jsx)(n.code,{children:"ZeroConstraint()"})," methods, ",(0,r.jsx)(n.a,{href:"https://feedback.vrchat.com/sdk-bug-reports/p/expose-activate-button-procedure-of-vrcconstraint-components-to-api",children:"addressing this Canny request"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"fixes--changes",children:"Fixes & Changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Improved ",(0,r.jsx)(n.a,{href:"/avatars/avatar-dynamics/physbones",children:"Physbone"})," and ",(0,r.jsx)(n.a,{href:"/avatars/avatar-dynamics/contacts",children:"Contact"})," behavior when used beneath ",(0,r.jsx)(n.a,{href:"/avatars/avatar-dynamics/constraints",children:"VRChat Constraints"})," to reduce jittering.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"They sort their internal execution orders properly within a frame now."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Fixed a case where toggled constraints could misbehave when three or more constraints are used on the same GameObject at once."}),"\n",(0,r.jsx)(n.li,{children:'Fixed the "Activate" and "Zero" functions of VRChat Constraints not applying as overrides to prefab instances.'}),"\n",(0,r.jsxs)(n.li,{children:["Fixed ",(0,r.jsx)(n.code,{children:"VRCConstraintSource"})," having its values overwritten with defaults when created with the default constructor in C#."]}),"\n",(0,r.jsx)(n.li,{children:"Fixed rotation, aim and look-at constraints drifting very gradually when one or more axes are unfrozen in certain configurations."}),"\n",(0,r.jsx)(n.li,{children:"Fixed constraints applying incorrect positions when the target transform is scaled to zero in any axis."}),"\n",(0,r.jsxs)(n.li,{children:["Fixed constraints sometimes having their position or rotation shifted by a tiny amount every frame under certain conditions when they should be staying still.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This should make it easier to work with prefabs containing constraints."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/avatars/avatar-dynamics/physbones",children:"Physbone"})," stats now recalculate properly when reloading a scene or switching platform."]}),"\n",(0,r.jsxs)(n.li,{children:["Fixed ",(0,r.jsx)(n.a,{href:"/avatars/avatar-dynamics/physbones",children:"Physbone"})," jitter by including fixes from client release ",(0,r.jsx)(n.a,{href:"https://docs.vrchat.com/docs/vrchat-202433",children:"2024.3.3"}),"."]}),"\n",(0,r.jsx)(n.li,{children:'Fixed "Avatar Options" incorrectly being shown twice in the Settings tab of the SDK Control Panel.'}),"\n",(0,r.jsxs)(n.li,{children:["Fixed ",(0,r.jsx)(n.code,{children:"com.unity.ugui"})," missing as a dependency of the Worlds SDK, addressing ",(0,r.jsx)(n.a,{href:"https://feedback.vrchat.com/sdk-bug-reports/p/vrcsdk-packagejson-is-missing-dependency-on-unity-ui",children:"this Canny request"}),"."]}),"\n",(0,r.jsx)(n.li,{children:'Added a new "ExampleData" type to the SDK, which will be used to hold metadata for Examples in the future.'}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The first time you open a Scene and select a GameObject inside a prefab with a U# Behaviour, the GUI for the component directly below that U# Behaviour will not show its GUI. Deselecting and re-selecting the prefab fixes this."}),"\n",(0,r.jsxs)(n.li,{children:["Buffer Particles don't work as they did in Unity 2019, ",(0,r.jsx)(n.a,{href:"https://x.com/hfcRedddd/status/1696915379090604179",children:"there is a workaround to fix them from community member hfcRed here"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Unity 2022 sometimes causes Rider's debugger to stop for unhandled exceptions in Unity's IMGUI.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Please refer to ",(0,r.jsx)(n.a,{href:"https://forum.unity.com/threads/rider-debugger-breaks-on-unhandled-exception.1135879/#post-7305256",children:"this workaround"})," and ",(0,r.jsx)(n.a,{href:"https://youtrack.jetbrains.com/issue/RIDER-64944",children:"Jetbrains's bug tracker"})," for more information."]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},95475:e=>{e.exports=JSON.parse('{"permalink":"/creator-docs_ja/releases/release-3-7-3","source":"@site/releases/release-3.7.3.md","title":"Release 3.7.3","description":"Summary","date":"2024-11-05T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/creator-docs_ja/releases/tags/release"}],"hasTruncateMarker":false,"authors":[{"name":"Momo the Monster","title":"VRChat Developer","url":"https://github.com/momo-the-monster","imageURL":"https://github.com/momo-the-monster.png","key":"momo","page":null}],"frontMatter":{"slug":"release-3-7-3","date":"2024-11-05T00:00:00.000Z","title":"Release 3.7.3","authors":["momo"],"tags":["release"]},"unlisted":false,"prevItem":{"title":"Release 3.7.4 - Persistence!","permalink":"/creator-docs_ja/releases/release-3-7-4"},"nextItem":{"title":"Release 3.7.2","permalink":"/creator-docs_ja/releases/release-3-7-2"}}')}}]);