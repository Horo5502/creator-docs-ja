"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[615],{15853:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>s});var a=n(74848),r=n(28453);const s=[{value:"Importing the Example",id:"importing-the-example",level:2}];function o(e){const t={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"importing-the-example",children:"Importing the Example"}),"\n",(0,a.jsx)(t.p,{children:"Follow the steps below to add this example to your Unity project:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Open ",(0,a.jsx)(t.a,{href:"https://creators.vrchat.com/sdk/example-central",children:"the Example Central Window"}),' from the window from the Unity Editor Menu under "VRChat SDK > \ud83c\udfe0 Example Central"']}),"\n",(0,a.jsx)(t.li,{children:"Find this prefab in the list or search for it by title (same as the title of this page)."}),"\n",(0,a.jsx)(t.li,{children:'Press the "Import" button to import the Unitypackage into your project.'}),"\n"]})]})}function i(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(96540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}},29134:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/ai-navigation-world-455e1867bd48411457962ce664944b6c.jpg"},65537:(e,t,n)=>{n.d(t,{A:()=>y});var a=n(96540),r=n(18215),s=n(65627),o=n(56347),i=n(50372),l=n(30604),c=n(11861),h=n(78749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=u(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:n,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,h.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),v=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function b(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),h=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:h,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,x.jsx)(b,{...t,...e}),(0,x.jsx)(w,{...t,...e})]})}function y(e){const t=(0,g.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},79329:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},93472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"worlds/examples/ai-navigation","title":"AI Navigation Example","description":"NPCs that follow you.","source":"@site/docs/worlds/examples/ai-navigation.md","sourceDirName":"worlds/examples","slug":"/worlds/examples/ai-navigation","permalink":"/creator-docs_ja/worlds/examples/ai-navigation","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1731955571000,"frontMatter":{"description":"NPCs that follow you.","sidebar_custom_props":{"customIcon":"\ud83d\uddfa\ufe0f"}},"sidebar":"tutorialSidebar","previous":{"title":"Udon Basics","permalink":"/creator-docs_ja/worlds/examples/udon"},"next":{"title":"Detect Controller Collide","permalink":"/creator-docs_ja/worlds/examples/detect-controller-collide"}}');var r=n(74848),s=n(28453),o=(n(65537),n(79329),n(15853));const i={description:"NPCs that follow you.",sidebar_custom_props:{customIcon:"\ud83d\uddfa\ufe0f"}},l="AI Navigation Example",c={},h=[{value:"Example World",id:"example-world",level:2},{value:"Using the Example",id:"using-the-example",level:2},...o.RM,{value:"Technical Breakdown",id:"technical-breakdown",level:2},{value:"Logic",id:"logic",level:3},{value:"Scene Overview",id:"scene-overview",level:3},{value:"Networking",id:"networking",level:3},{value:"Making Your Own Changes",id:"making-your-own-changes",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"ai-navigation-example",children:"AI Navigation Example"})}),"\n","\n",(0,r.jsx)(t.h2,{id:"example-world",children:"Example World"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"example world",src:n(29134).A+"",width:"1041",height:"348"})}),"\n",(0,r.jsxs)(t.p,{children:["Udon can use ",(0,r.jsx)(t.a,{href:"/worlds/udon/ai-navigation",children:"AI Navigation"}),". This example shows you how it can be used for pathfinding and creating NPC characters that walk around in your world."]}),"\n",(0,r.jsxs)(t.p,{children:["Visit the ",(0,r.jsx)(t.a,{href:"https://vrchat.com/home/world/wrld_b7b99484-d92f-403d-ac10-4da7e5a9ce14",children:"AI Navigation Example World"})," to try it for yourself!"]}),"\n",(0,r.jsx)(t.h2,{id:"using-the-example",children:"Using the Example"}),"\n",(0,r.jsx)(t.p,{children:"This scene has a collection of NPCs which are trying to get from the red block to the green one. You can move the blue blocks to form a pathway for them. Unity's AI Navigation automatically recalculates the pathing of the NPCs whenever you drop the blocks."}),"\n",(0,r.jsx)(t.p,{children:'Open the scene in the Unity Editor to test the basic functionality. It should work roughly the same as in VRChat. When you enter play mode, the NPCs will attempt to reach the green block. You can move the blue blocks to help the AI to reach their goal. You can press the "Reset" button to try again.'}),"\n",(0,r.jsx)(o.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"technical-breakdown",children:"Technical Breakdown"}),"\n",(0,r.jsx)(t.p,{children:"Let's explore the Udon logic, scene structure and networking that makes this scene work."}),"\n",(0,r.jsx)(t.h3,{id:"logic",children:"Logic"}),"\n",(0,r.jsxs)(t.p,{children:['When the scene initializes, each NPC has the "NPC Finish" block set as their ',(0,r.jsx)(t.code,{children:"destination"}),". They will try to reach it, but fail because there is no direct connection to get there. When each NPCStep is dropped, it will call ",(0,r.jsx)(t.code,{children:"NavMeshSurface.BuildNavMesh"}),' to rebuild the main surface. If this results in a better path to the target, each Agent will hop aboard to continue their journey. Every 0.5 seconds, the progress is recalculated by comparing the distance between the first NPC and the target block with the initial distance, which was saved at the start of the scene. If the distance is less than 0.15 units during a check, then particles are set off, and the progress checks are stopped. You can then press the "Reset" button to start it all over.']}),"\n",(0,r.jsx)(t.h3,{id:"scene-overview",children:"Scene Overview"}),"\n",(0,r.jsx)(t.p,{children:"The scene's hierarchy consists of the following:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'"World" contains the scene descriptor, floor, lighting, etc.'}),"\n",(0,r.jsxs)(t.li,{children:['"Course" defines where NPCs can move.',"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.a,{href:"https://docs.unity3d.com/Packages/com.unity.ai.navigation@1.1/manual/NavMeshSurface.html",children:"NavMeshSurface"})," component allows Unity to rebuild the navigation logic at runtime."]}),"\n",(0,r.jsx)(t.li,{children:"The CourseManager UdonBehaviour component handles the progress bar and resetting it."}),"\n",(0,r.jsx)(t.li,{children:'The "NPC Start" and "NPC Finish" child GameObjects define the NPC\'s starting and target positions.'}),"\n",(0,r.jsxs)(t.li,{children:['The three "NPC Step" child GameObjects act as surfaces for the NPCs.',"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Each NPC Step has a NavMeshModifier component, which attempts to add its surface to the main NavMeshSurface."}),"\n",(0,r.jsx)(t.li,{children:"It also has a VRCPickup component and an UdonBehaviour, which locks its rotation to stay flat when carried and applies the logic to rebuild the main navigation surface."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:['"NPCs" has four child "NPC" GameObjects, which are Capsules with a ',(0,r.jsx)(t.a,{href:"https://docs.unity3d.com/ScriptReference/AI.NavMeshAgent.html",children:"NavMeshAgent"})," and UdonBehaviour.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The NavMeshAgent provides the basic navigation and movement logic, while the UdonBehaviour has the logic we want for the scene."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:'"Canvas" contains the process indicator and reset button.'}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"networking",children:"Networking"}),"\n",(0,r.jsx)(t.p,{children:"Everything that happens should be synced for all users in the instance, through careful choices between which variables and logic to sync and which to run locally."}),"\n",(0,r.jsxs)(t.p,{children:["The Course has a single synced variable - a ",(0,r.jsx)(t.code,{children:"progress"})," float which is checked on the owner of the Course, and synced to all other users whenever it is updated. The other users listen for changes of this variable and update their progress bar when it changes. The Course also uses a Networked Event to call the ",(0,r.jsx)(t.code,{children:"Win"})," event for everyone when ",(0,r.jsx)(t.code,{children:"progress"})," is greater than ",(0,r.jsx)(t.code,{children:"successThreshold"}),", which is set to ",(0,r.jsx)(t.code,{children:"0.8"})," to account for other NPCs getting in the way of the one whose progress we measure."]}),"\n",(0,r.jsxs)(t.p,{children:["Each NPC is moved by the ",(0,r.jsx)(t.code,{children:"NavMeshAgent"})," on its Owner's device, and the ",(0,r.jsx)(t.code,{children:"VRCObjectSync"})," component updates its position automatically for everyone else. Only the Owner of the NavMesh continuously rebuilds the actual NavMesh, since the synced NPCs don't need it."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"making-your-own-changes",children:"Making Your Own Changes"}),"\n",(0,r.jsx)(t.p,{children:"After making a copy of the scene, try some of these ideas to evolve the scene further, and explore the power of the AI Navigation package:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Change the course, moving the start and end points further apart."}),"\n",(0,r.jsx)(t.li,{children:"Reduce the number of available blocks from 3 to 2."}),"\n",(0,r.jsx)(t.li,{children:"Make the target point move over time."}),"\n",(0,r.jsx)(t.li,{children:"Give each person in the world their own NPC and NavMesh to turn it into a race!"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);