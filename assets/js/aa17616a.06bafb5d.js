"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[3313],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}},31437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"worlds/clientsim/systems/runtime/event-dispatcher","title":"Event Dispatcher and Events","description":"The EventDispatcher is responsible for notifying other systems when specific events happen within ClientSim. A behaviour can subscribe to an event type or send an event of specific type to all of ClientSim without knowing what will handle it. The EventDispatcher is just a collection of event types paired with event handlers. This method decouples the different systems in ClientSim without needing to create a direct dependency. All events sent must extend the IClientSimEvent interface, but can contain any data needed with the event.","source":"@site/docs/worlds/clientsim/systems/runtime/event-dispatcher.md","sourceDirName":"worlds/clientsim/systems/runtime","slug":"/worlds/clientsim/systems/runtime/event-dispatcher","permalink":"/creator-docs_ja/worlds/clientsim/systems/runtime/event-dispatcher","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1737138217000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Blacklist Manager","permalink":"/creator-docs_ja/worlds/clientsim/systems/runtime/blacklist-manager"},"next":{"title":"VRCSDK Helpers","permalink":"/creator-docs_ja/worlds/clientsim/systems/runtime/helpers"}}');var i=n(74848),r=n(28453);const a={},o="Event Dispatcher and Events",c={},l=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"event-dispatcher-and-events",children:"Event Dispatcher and Events"})}),"\n",(0,i.jsx)(t.p,{children:"The EventDispatcher is responsible for notifying other systems when specific events happen within ClientSim. A behaviour can subscribe to an event type or send an event of specific type to all of ClientSim without knowing what will handle it. The EventDispatcher is just a collection of event types paired with event handlers. This method decouples the different systems in ClientSim without needing to create a direct dependency. All events sent must extend the IClientSimEvent interface, but can contain any data needed with the event."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);