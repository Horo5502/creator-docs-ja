"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[6768],{28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>i});var n=t(96540);const r={},s=n.createContext(r);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:a},e.children)}},94487:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"avatars/avatar-dynamics/debugging-avatar-dynamics","title":"Debugging Avatar Components","description":"As Avatar Components can get fairly complex, it\u2019s understandably easy to make a mistake while building your avatar. To help with both testing and debugging problems, we\u2019ve provided users with a few tools to help make the process easier.","source":"@site/docs/avatars/avatar-dynamics/debugging-avatar-dynamics.md","sourceDirName":"avatars/avatar-dynamics","slug":"/avatars/avatar-dynamics/debugging-avatar-dynamics","permalink":"/creator-docs_ja/avatars/avatar-dynamics/debugging-avatar-dynamics","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1730848676000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Contacts","permalink":"/creator-docs_ja/avatars/avatar-dynamics/contacts"},"next":{"title":"Physbones","permalink":"/creator-docs_ja/avatars/avatar-dynamics/physbones"}}');var r=t(74848),s=t(28453);const o={},i="Debugging Avatar Components",d={},c=[{value:"In Game Debugging",id:"in-game-debugging",level:3},{value:"In-Editor Debugging",id:"in-editor-debugging",level:3}];function l(e){const a={a:"a",admonition:"admonition",h1:"h1",h3:"h3",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"debugging-avatar-components",children:"Debugging Avatar Components"})}),"\n",(0,r.jsx)(a.p,{children:"As Avatar Components can get fairly complex, it\u2019s understandably easy to make a mistake while building your avatar. To help with both testing and debugging problems, we\u2019ve provided users with a few tools to help make the process easier."}),"\n",(0,r.jsx)(a.h3,{id:"in-game-debugging",children:"In Game Debugging"}),"\n",(0,r.jsx)(a.admonition,{type:"info",children:(0,r.jsx)(a.p,{children:'In the video below, "Avatar Dynamics" refers to PhysBones and Contacts. Over time, VRChat added more features to avatars, and the term "Avatar Dynamics" is used less often now.'})}),"\n",(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/8hqDquZWvhY?si=Mp7pM80fCYZPei81",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,r.jsxs)(a.p,{children:["Using the Action Menu, you can use the Avatar Overlay option to show visual representations of both ",(0,r.jsx)(a.a,{href:"/avatars/avatar-dynamics/physbones",children:"PhysBones"})," and ",(0,r.jsx)(a.a,{href:"/avatars/avatar-dynamics/contacts",children:"Contacts"})," live in game. These are useful for seeing exactly what is happening, or if objects have been set up properly."]}),"\n",(0,r.jsx)(a.h3,{id:"in-editor-debugging",children:"In-Editor Debugging"}),"\n",(0,r.jsxs)(a.p,{children:["Both ",(0,r.jsx)(a.a,{href:"/avatars/avatar-dynamics/physbones",children:"PhysBones"})," and ",(0,r.jsx)(a.a,{href:"/avatars/avatar-dynamics/contacts",children:"Contacts"})," run in the editor as they would in VRChat. By entering Play mode you can simulate these systems and see how your avatar will react without needing to upload it."]}),"\n",(0,r.jsxs)(a.p,{children:["You can test ",(0,r.jsx)(a.a,{href:"/avatars/avatar-dynamics/constraints",children:"Constraints"})," in the editor in both Play mode and Edit mode. If you prefer, you can stop constraints running in Edit mode via the SDK Control Panel (VRChat SDK > Show Control Panel > Settings > Execute VRChat Constraints in Edit Mode)."]}),"\n",(0,r.jsx)(a.p,{children:"If you add an Animator Controller to your avatar's Animator component before entering Play mode, the parameters on your avatar will be updated just like in VRChat."}),"\n",(0,r.jsx)(a.p,{children:"Additionally, even if no animation controller is set up, you can still look at each component and see the values they would be giving for each parameter."})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);