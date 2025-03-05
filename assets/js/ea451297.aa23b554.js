"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[5041],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}},31679:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/world-debug-views-da70084-unknown_7-a534a236172efc463a67632fcef0f8bf.png"},40188:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/world-debug-views-88ea4e6-VRChat_6e9Vhf8jnq-f6d46c45525cf130fdce0c5c26780b10.png"},52418:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/world-debug-views-2103941-szhLVX11II-ba84fc7eefce9ecfc626b6cc855ad8d0.png"},54654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"worlds/udon/world-debug-views","title":"World Debug Views","description":"These are the tools you can use to debug your worlds in-game.","source":"@site/docs/worlds/udon/world-debug-views.md","sourceDirName":"worlds/udon","slug":"/worlds/udon/world-debug-views","permalink":"/creator-docs_ja/worlds/udon/world-debug-views","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1723467846000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"VRChat Shader Globals","permalink":"/creator-docs_ja/worlds/udon/vrc-graphics/vrchat-shader-globals"},"next":{"title":"Scene Components","permalink":"/creator-docs_ja/worlds/components/"}}');var i=n(74848),o=n(28453);const r={},d="World Debug Views",a={},l=[{value:"Debug Menu 1",id:"debug-menu-1",level:2},{value:"Debug Menu 2",id:"debug-menu-2",level:2},{value:"Debug Menu 3",id:"debug-menu-3",level:2},{value:"Debug Menu 4",id:"debug-menu-4",level:2},{value:"Debug Menu 5",id:"debug-menu-5",level:2},{value:"Debug Menu 6",id:"debug-menu-6",level:2},{value:"Debug Menu 7",id:"debug-menu-7",level:2},{value:"Debug Menu 8",id:"debug-menu-8",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"world-debug-views",children:"World Debug Views"})}),"\n",(0,i.jsx)(t.p,{children:"These are the tools you can use to debug your worlds in-game."}),"\n",(0,i.jsx)(t.p,{children:"In order to access debug views you need two things:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Launch VRChat with the launch parameter ",(0,i.jsx)(t.code,{children:"--enable-debug-gui"})]}),"\n",(0,i.jsx)(t.li,{children:"Press Rshift + Tilde + 1-9."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If you have a keyboard layout where tilde is not directly to the left of the 1 key, try using whichever key is directly to the left of the 1 key, as it will prioritize the position of the key over the character of the key itself.\r\n",(0,i.jsx)(t.img,{alt:"world-debug-views-2103941-szhLVX11II.png",src:n(52418).A+"",width:"997",height:"318"})]}),"\n",(0,i.jsx)(t.h2,{id:"debug-menu-1",children:"Debug Menu 1"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"world-debug-views-9bfe518-VRChat_Q9pMRjUJHI.png",src:n(63409).A+"",width:"2560",height:"1377"})}),"\n",(0,i.jsx)(t.p,{children:"Debug menu 1 displays some information about your connection to the VRChat API. It is mostly irrelevant to world development."}),"\n",(0,i.jsx)(t.h2,{id:"debug-menu-2",children:"Debug Menu 2"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"world-debug-views-ae12b10-VRChat_kGTo5o998Y.png",src:n(77160).A+"",width:"702",height:"204"})}),"\n",(0,i.jsx)(t.p,{children:"Debug menu 2 displays the current build of VRChat that you are using, along with your FPS."}),"\n",(0,i.jsx)(t.h2,{id:"debug-menu-3",children:"Debug Menu 3"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"world-debug-views-e85c111-VRChat_gk2BOiYkIr.png",src:n(82759).A+"",width:"2560",height:"1377"})}),"\n",(0,i.jsx)(t.p,{children:"Debug menu 3 displays your output log. The output log is very useful for world creators because it can show you information such as Udon Behaviour crashes, any information logged via the Debug.Log nodes, and any other potential errors in your world generated by Unity or VRChat."}),"\n",(0,i.jsx)(t.p,{children:"You can hold the Tab key to activate the mouse cursor and use the buttons on the top to toggle different options on and off, as well as scroll the log output."}),"\n",(0,i.jsx)(t.h2,{id:"debug-menu-4",children:"Debug Menu 4"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"world-debug-views-0db830e-VRChat_pZdYm9u4ox.png",src:n(75157).A+"",width:"2560",height:"1377"})}),"\n",(0,i.jsx)(t.p,{children:"Debug menu 4 displays various stats about other players."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["M: Whether or not the player is the ",(0,i.jsx)(t.a,{href:"/worlds/udon/networking#the-instance-master",children:"master of the instance"})]}),"\n",(0,i.jsx)(t.li,{children:"L: Whether or not the player is the local player"}),"\n",(0,i.jsx)(t.li,{children:"VR: Whether or not the player is in VR"}),"\n",(0,i.jsx)(t.li,{children:"Ping: The player's ping"}),"\n",(0,i.jsx)(t.li,{children:"Desrd D: The desired delay that the internal system is targeting. The actual delay is frequently adjusted to find a good balance between latency and smoothness."}),"\n",(0,i.jsx)(t.li,{children:"Intrvl: The amount of time between the player sending synced data about themselves."}),"\n",(0,i.jsx)(t.li,{children:"G: The current group that the player is in. Grouping in this context is an internal networking system used to combine multiple objects together by distance so that their data can be sent together."}),"\n",(0,i.jsx)(t.li,{children:"D: The current delay, or how far back in time you are viewing this player."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"debug-menu-5",children:"Debug Menu 5"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"world-debug-views-1232152-VRChat_SVxaMmgiLC.png",src:n(83839).A+"",width:"2560",height:"1377"})}),"\n",(0,i.jsx)(t.p,{children:"Debug menu 5 displays some graphs related to networking. They are unlabeled and mostly not useful."}),"\n",(0,i.jsx)(t.admonition,{title:"World debugging views above 5 are restricted",type:"caution",children:(0,i.jsx)(t.p,{children:"By default, only the world creator can access debug menus above 5. However, you can allow others to see it as well by enabling World Debugging in your world's settings on the website. Don't forget to click \"Save Changes\"! Other users will need to rejoin the world to be able to access this debug view after World Debugging gets enabled."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"world-debug-views-da70084-unknown_7.png",src:n(31679).A+"",width:"1146",height:"887"})}),"\n",(0,i.jsx)(t.h2,{id:"debug-menu-6",children:"Debug Menu 6"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"world-debug-views-b0257d6-VRChat_ZRiWB4bTU7.png",src:n(72096).A+"",width:"2560",height:"1377"})}),"\n",(0,i.jsx)(t.p,{children:"Debug menu 6 displays all the networked objects in your world, along with various stats."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Owner: The playerid of the owner of the object."}),"\n",(0,i.jsx)(t.li,{children:"Group: The current group that this object is in. Grouping in this context is an internal networking system used to combine multiple objects together by distance so that their data can be sent together."}),"\n",(0,i.jsx)(t.li,{children:"Sleeping: Whether or not the object is sleeping. Only objects with VRCObjectSync can sleep. Sleeping causes the object to stop transmitting data."}),"\n",(0,i.jsx)(t.li,{children:"Delay: The current delay of this object between the owner and the viewer"}),"\n",(0,i.jsx)(t.li,{children:"Size: The current number of bytes per serialization of this object. Every time it needs to sync, it will send this many bytes."}),"\n",(0,i.jsx)(t.li,{children:"Bps: A rough approximation of how many bytes per second this object is using up."}),"\n",(0,i.jsx)(t.li,{children:"Since Last: A running counter of how long it has been since the last time this object has sent data."}),"\n",(0,i.jsx)(t.li,{children:"Interval: A rough approximation of how many times this object tries to sync per second."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"debug-menu-7",children:"Debug Menu 7"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"world-debug-views-6ea6192-VRChat_pWGDiXUnlh.png",src:n(74092).A+"",width:"2560",height:"1377"})}),"\n",(0,i.jsx)(t.p,{children:"Debug menu 7 displays all the same information as 6, but filtered and sorted to bring objects that have the highest networking impact to the top."}),"\n",(0,i.jsx)(t.h2,{id:"debug-menu-8",children:"Debug Menu 8"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"world-debug-views-88ea4e6-VRChat_6e9Vhf8jnq.png",src:n(40188).A+"",width:"2560",height:"1377"})}),"\n",(0,i.jsx)(t.p,{children:"Debug menu 8 overlays a panel on top of every synced object in the world. Each panel displays various stats about that specific object"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"P: Ping of the owner"}),"\n",(0,i.jsx)(t.li,{children:"Q: Quality of the data (100% is no dropped packets)"}),"\n",(0,i.jsx)(t.li,{children:"O: PlayerID of the owner of the object"}),"\n",(0,i.jsx)(t.li,{children:"G: The current group that this object is in. Grouping in this context is an internal networking system used to combine multiple objects together by distance so that their data can be sent together."}),"\n",(0,i.jsx)(t.li,{children:"Held: Whether or not this object is held, if it is a pickup"}),"\n",(0,i.jsxs)(t.li,{children:["Status: Displays various things about what this object is doing, such as ",(0,i.jsx)(t.code,{children:"Should Sleep"}),", ",(0,i.jsx)(t.code,{children:"Player"}),", ",(0,i.jsx)(t.code,{children:"Held"}),", or ",(0,i.jsx)(t.code,{children:"Discontinuity"})]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},63409:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/world-debug-views-9bfe518-VRChat_Q9pMRjUJHI-d075381cc92fedd15ecf7f6aee311e49.png"},72096:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/world-debug-views-b0257d6-VRChat_ZRiWB4bTU7-48b79addc410ecd358e25565d84d846c.png"},74092:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/world-debug-views-6ea6192-VRChat_pWGDiXUnlh-5f24bb43b750b4350ae8e8b6b7e40e3c.png"},75157:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/world-debug-views-0db830e-VRChat_pZdYm9u4ox-13fe266be65131328fb93611da5d7504.png"},77160:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/world-debug-views-ae12b10-VRChat_kGTo5o998Y-8aefd6ccb73ec45cf8b83ef85f8024c7.png"},82759:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/world-debug-views-e85c111-VRChat_gk2BOiYkIr-c836603059d5dc7abbd32d1ccb5b18bf.png"},83839:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/world-debug-views-1232152-VRChat_SVxaMmgiLC-db5cf28e09067d78e2f66af225fcf22d.png"}}]);