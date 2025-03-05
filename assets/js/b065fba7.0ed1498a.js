"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[8094],{24979:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"worlds/examples/persistence/position-sync","title":"Position Sync","description":"Save and restore player positions using PlayerObjects.","source":"@site/docs/worlds/examples/persistence/position-sync.md","sourceDirName":"worlds/examples/persistence","slug":"/worlds/examples/persistence/position-sync","permalink":"/creator-docs_ja/worlds/examples/persistence/position-sync","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1732237450000,"frontMatter":{"description":"Save and restore player positions using PlayerObjects.","sidebar_custom_props":{"customIcon":"\ud83d\udccc"}},"sidebar":"tutorialSidebar","previous":{"title":"Player Data Types","permalink":"/creator-docs_ja/worlds/examples/persistence/playerdata-types"},"next":{"title":"Post-Processing Settings","permalink":"/creator-docs_ja/worlds/examples/persistence/post-processing-settings"}}');var o=t(74848),r=t(28453),i=t(80389);const a={description:"Save and restore player positions using PlayerObjects.",sidebar_custom_props:{customIcon:"\ud83d\udccc"}},l="Position Sync",c={},d=[{value:"Using the Example",id:"using-the-example",level:2},...i.RM,{value:"Technical Breakdown",id:"technical-breakdown",level:2},{value:"Inspector Parameters",id:"inspector-parameters",level:3},{value:"Changelog",id:"changelog",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"position-sync",children:"Position Sync"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Position Sync World Preview",src:t(29773).A+"",width:"1212",height:"684"})}),"\n",(0,o.jsx)(n.p,{children:"A simple PlayerObject prefab which saves each player's position and rotation, then restores them when they rejoin the world."}),"\n",(0,o.jsxs)(n.p,{children:["Visit the ",(0,o.jsx)(n.a,{href:"https://vrchat.com/home/world/wrld_7be7b189-7ac8-4cf1-8d0a-1b7743edcacc",children:"PositionSync Example World"})," to try it for yourself!"]}),"\n",(0,o.jsx)(n.h2,{id:"using-the-example",children:"Using the Example"}),"\n",(0,o.jsx)(n.p,{children:"In the VRChat Client:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Join the world, move to a spot away from the Spawn point."}),"\n",(0,o.jsx)(n.li,{children:"Rejoin  the world, you should be around the same position and rotation."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In the Unity Editor:\r\nAdd the prefab: ",(0,o.jsx)(n.code,{children:"PositionSync"})," to the scene, and done."]}),"\n",(0,o.jsx)(i.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"technical-breakdown",children:"Technical Breakdown"}),"\n",(0,o.jsx)(n.p,{children:"If you are standing on the ground, the script will save your position and rotation every 0.5 seconds. Upon receiving the persistent data from the server, it will return you to the position you originally found yourself in."}),"\n",(0,o.jsx)(n.h3,{id:"inspector-parameters",children:"Inspector Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"string"})," ",(0,o.jsx)(n.strong,{children:"Synced Position key"})," - The key name for the position you want to use from PlayerData."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"string"})," ",(0,o.jsx)(n.strong,{children:"Synced Rotation key"})," - The key name for the rotation you want to use from PlayerData."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"0.0.1: Initial Publish"}),"\n",(0,o.jsx)(n.li,{children:"0.0.2: Added in-world instructions, swapped to OnPlayerRestored."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}},29773:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/position-sync-1e2933decb61382bbbd6c1658286a8dd.png"},80389:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var s=t(74848),o=t(28453);const r=[{value:"Importing the Example",id:"importing-the-example",level:2}];function i(e){const n={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"importing-the-example",children:"Importing the Example"}),"\n",(0,s.jsx)(n.p,{children:"Follow the steps below to add this example to your Unity project:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open ",(0,s.jsx)(n.a,{href:"https://creators.vrchat.com/sdk/example-central",children:"the Example Central Window"}),' from the window from the Unity Editor Menu under "VRChat SDK > \ud83c\udfe0 Example Central"']}),"\n",(0,s.jsx)(n.li,{children:"Find this prefab in the list or search for it by title (same as the title of this page)."}),"\n",(0,s.jsx)(n.li,{children:'Press the "Import" button to import the Unitypackage into your project.'}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}}}]);