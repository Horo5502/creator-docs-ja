"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[3521],{28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var r=i(96540);const d={},l=r.createContext(d);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(l.Provider,{value:n},e.children)}},82329:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"worlds/udon/graph/event-nodes","title":"Event Nodes","description":"This is a list of Udon Nodes that are considered \\"Events\\".","source":"@site/docs/worlds/udon/graph/event-nodes.md","sourceDirName":"worlds/udon/graph","slug":"/worlds/udon/graph/event-nodes","permalink":"/creator-docs_ja/worlds/udon/graph/event-nodes","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1733872665000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Udon Node Graph","permalink":"/creator-docs_ja/worlds/udon/graph/"},"next":{"title":"Graph Elements","permalink":"/creator-docs_ja/worlds/udon/graph/graph-elements"}}');var d=i(74848),l=i(28453);const s={},o="Event Nodes",t={},a=[{value:"Interact",id:"interact",level:3},{value:"OnDrop",id:"ondrop",level:3},{value:"OnPickup",id:"onpickup",level:3},{value:"OnPickupUseDown",id:"onpickupusedown",level:3},{value:"OnPickupUseUp",id:"onpickupuseup",level:3},{value:"OnPlayerJoined",id:"onplayerjoined",level:3},{value:"OnPlayerLeft",id:"onplayerleft",level:3},{value:"OnPlayerRestored",id:"onplayerrestored",level:3},{value:"OnStationEntered",id:"onstationentered",level:3},{value:"OnStationExited",id:"onstationexited",level:3},{value:"OnVideoEnd",id:"onvideoend",level:3},{value:"OnVideoError",id:"onvideoerror",level:3},{value:"OnVideoLoop",id:"onvideoloop",level:3},{value:"OnVideoPause",id:"onvideopause",level:3},{value:"OnVideoPlay",id:"onvideoplay",level:3},{value:"OnVideoStart",id:"onvideostart",level:3},{value:"OnVideoReady",id:"onvideoready",level:3},{value:"Player Events",id:"player-events",level:2},{value:"OnPlayerTriggerEnter",id:"onplayertriggerenter",level:3},{value:"OnPlayerTriggerStay",id:"onplayertriggerstay",level:3},{value:"OnPlayerTriggerExit",id:"onplayertriggerexit",level:3},{value:"OnPlayerCollisionEnter",id:"onplayercollisionenter",level:3},{value:"OnPlayerCollisionStay",id:"onplayercollisionstay",level:3},{value:"OnPlayerCollisionExit",id:"onplayercollisionexit",level:3},{value:"OnPlayerParticleCollision",id:"onplayerparticlecollision",level:3},{value:"OnPlayerRespawn",id:"onplayerrespawn",level:3},{value:"OnScreenUpdate",id:"onscreenupdate",level:3},{value:"OnInputMethodChanged",id:"oninputmethodchanged",level:3},{value:"OnLanguageChanged",id:"onlanguagechanged",level:3},{value:"OnPlayerSuspendChanged",id:"onplayersuspendchanged",level:3},{value:"OnVRCPlusMassGift",id:"onvrcplusmassgift",level:3},{value:"Advanced Notes",id:"advanced-notes",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"event-nodes",children:"Event Nodes"})}),"\n",(0,d.jsx)(n.p,{children:'This is a list of Udon Nodes that are considered "Events".'}),"\n",(0,d.jsxs)(n.p,{children:["Your scripts can use events to detect actions and set off chains of action or logic. ",(0,d.jsx)(n.a,{href:"/worlds/udon/input-events",children:"Input Events"}),"  have their own special page. To jump to an Event in the graph, click it in the Graph Sidebar."]}),"\n",(0,d.jsx)(n.p,{children:"All below nodes have flow nodes where logic requires it."}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.p,{children:["More events specifically related to networking are listed on the ",(0,d.jsx)(n.a,{href:"/worlds/udon/networking/network-components/#networking-events",children:"Network Components"})," page."]})}),"\n",(0,d.jsx)(n.h3,{id:"interact",children:"Interact"}),"\n",(0,d.jsx)(n.p,{children:"Fired when the local player interacts with this GameObject."}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Players can only interact with GameObjects that have a Collider component and an UdonBehaviour component."}),"\n",(0,d.jsxs)(n.li,{children:["If you want players to interact with a 2D UI, use ",(0,d.jsx)(n.a,{href:"/worlds/components/vrc_uishape/",children:"VRC Ui Shape"})," and a Button component instead."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"ondrop",children:"OnDrop"}),"\n",(0,d.jsx)(n.p,{children:"Fired when a VRChat player drops this object after being held."}),"\n",(0,d.jsx)(n.h3,{id:"onpickup",children:"OnPickup"}),"\n",(0,d.jsx)(n.p,{children:"Fired when this object is picked up by a VRChat player."}),"\n",(0,d.jsx)(n.h3,{id:"onpickupusedown",children:"OnPickupUseDown"}),"\n",(0,d.jsx)(n.p,{children:"Fired when this object is held and the Use button is pressed. Fires on button down. Requires 'Auto Hold' on Desktop."}),"\n",(0,d.jsx)(n.h3,{id:"onpickupuseup",children:"OnPickupUseUp"}),"\n",(0,d.jsx)(n.p,{children:"Fired when this object is held and the Use button is pressed. Fires on button up. Requires 'Auto Hold' on Desktop."}),"\n",(0,d.jsx)(n.h3,{id:"onplayerjoined",children:"OnPlayerJoined"}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"player"})," - ",(0,d.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"})]}),"\n",(0,d.jsxs)(n.p,{children:["Fired when a VRChat player joins the instance. Outputs the ",(0,d.jsx)(n.code,{children:"player"})," that joined."]}),"\n",(0,d.jsx)(n.p,{children:"When you join an instance, you execute OnPlayerJoined for every player in the instance, including yourself. When another player joins your instance, you only execute OnPlayerJoined for the player who joined."}),"\n",(0,d.jsx)(n.h3,{id:"onplayerleft",children:"OnPlayerLeft"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnPlayerLeft"})}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"player"})," - ",(0,d.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"})]}),"\n",(0,d.jsxs)(n.p,{children:["Fired when a VRChat player leaves the instance. Outputs the ",(0,d.jsx)(n.code,{children:"player"})," that left."]}),"\n",(0,d.jsx)(n.h3,{id:"onplayerrestored",children:"OnPlayerRestored"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnPlayerRestored"})}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"player"})," - ",(0,d.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"})]}),"\n",(0,d.jsxs)(n.p,{children:["Triggered after all of VRChat player's persistent data has been loaded, including all of their ",(0,d.jsx)(n.a,{href:"/worlds/udon/persistence/player-data",children:"PlayerData"})," and ",(0,d.jsx)(n.a,{href:"/worlds/udon/persistence/player-object",children:"PlayerObjects"}),". Outputs the ",(0,d.jsx)(n.code,{children:"player"})," whose data was loaded."]}),"\n",(0,d.jsx)(n.p,{children:"When you join an instance, you execute OnPlayerRestored for every player in the instance, including yourself. When another player joins your instance, you only execute OnPlayerRestored for the player who joined."}),"\n",(0,d.jsx)(n.h3,{id:"onstationentered",children:"OnStationEntered"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnStationEntered"})}),"\n",(0,d.jsx)(n.p,{children:"Fired when a VRChat player enters the station on this object."}),"\n",(0,d.jsx)(n.h3,{id:"onstationexited",children:"OnStationExited"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnStationExited"})}),"\n",(0,d.jsx)(n.p,{children:"Fired when a VRChat player exits the station on this object."}),"\n",(0,d.jsx)(n.h3,{id:"onvideoend",children:"OnVideoEnd"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnVideoEnd"})}),"\n",(0,d.jsx)(n.p,{children:"Fired when the video player on this object is finished playing, either via the end of the video or via player interaction."}),"\n",(0,d.jsx)(n.h3,{id:"onvideoerror",children:"OnVideoError"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnVideoError"})}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"videoError"})," - ",(0,d.jsx)(n.code,{children:"VRC.SDK3.Components.Video.VideoError"})]}),"\n",(0,d.jsx)(n.p,{children:"Fired when the video player encounters an error loading the video."}),"\n",(0,d.jsx)(n.h3,{id:"onvideoloop",children:"OnVideoLoop"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnVideoLoop"})}),"\n",(0,d.jsx)(n.p,{children:"If looping is enabled, fired when the video player finishes a loop."}),"\n",(0,d.jsx)(n.h3,{id:"onvideopause",children:"OnVideoPause"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnVideoPause"})}),"\n",(0,d.jsx)(n.p,{children:"Fired when the video player on this object is paused."}),"\n",(0,d.jsx)(n.h3,{id:"onvideoplay",children:"OnVideoPlay"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnVideoPlay"})}),"\n",(0,d.jsx)(n.p,{children:"Fired when the video player on this object starts playback, either via the start of a new video in a queue, unpausing, or via player interaction."}),"\n",(0,d.jsx)(n.h3,{id:"onvideostart",children:"OnVideoStart"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnVideoStart"})}),"\n",(0,d.jsx)(n.p,{children:"Fired when the video player on this object starts playback from a stopped state."}),"\n",(0,d.jsx)(n.h3,{id:"onvideoready",children:"OnVideoReady"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnVideoReady"})}),"\n",(0,d.jsx)(n.p,{children:"Fired when the video player loads a new video."}),"\n",(0,d.jsx)(n.h2,{id:"player-events",children:"Player Events"}),"\n",(0,d.jsx)(n.h3,{id:"onplayertriggerenter",children:"OnPlayerTriggerEnter"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnPlayerTriggerEnter"})}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"player"})," - ",(0,d.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"})]}),"\n",(0,d.jsx)(n.p,{children:"Fired when a player's capsule enters a trigger collider."}),"\n",(0,d.jsx)(n.h3,{id:"onplayertriggerstay",children:"OnPlayerTriggerStay"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnPlayerTriggerStay"})}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"player"})," - ",(0,d.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"})]}),"\n",(0,d.jsx)(n.p,{children:"Fired on frames while a player's capsule is inside a Trigger Collider"}),"\n",(0,d.jsx)(n.h3,{id:"onplayertriggerexit",children:"OnPlayerTriggerExit"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnPlayerTriggerExit"})}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"player"})," - ",(0,d.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"})]}),"\n",(0,d.jsx)(n.p,{children:"Fired when a player's capsule exits a Trigger Collider."}),"\n",(0,d.jsx)(n.h3,{id:"onplayercollisionenter",children:"OnPlayerCollisionEnter"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnPlayerCollisionEnter"})}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"player"})," - ",(0,d.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"})]}),"\n",(0,d.jsx)(n.p,{children:"Fired when a player's capsule enters a Collider."}),"\n",(0,d.jsx)(n.h3,{id:"onplayercollisionstay",children:"OnPlayerCollisionStay"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnPlayerCollisionStay"})}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"player"})," - ",(0,d.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"})]}),"\n",(0,d.jsx)(n.p,{children:"Fired on frames while a player's capsule is inside a Collider."}),"\n",(0,d.jsx)(n.h3,{id:"onplayercollisionexit",children:"OnPlayerCollisionExit"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnPlayerCollisionExit"})}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"player"})," - ",(0,d.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"})]}),"\n",(0,d.jsx)(n.p,{children:"Fired when a player's capsule exits a Collider."}),"\n",(0,d.jsx)(n.h3,{id:"onplayerparticlecollision",children:"OnPlayerParticleCollision"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnPlayerParticleCollision"})}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"player"})," - ",(0,d.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"})]}),"\n",(0,d.jsx)(n.p,{children:"Fired when a particle collides with a player's capsule, assuming that Particle System has Collision and Send Collision Messages turned on."}),"\n",(0,d.jsx)(n.h3,{id:"onplayerrespawn",children:"OnPlayerRespawn"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnPlayerRespawn"})}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"player"})," - ",(0,d.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"})]}),"\n",(0,d.jsx)(n.p,{children:'Fired when the local player respawns by clicking "Respawn" in their menu.'}),"\n",(0,d.jsx)(n.h3,{id:"onscreenupdate",children:"OnScreenUpdate"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnScreenUpdate"})}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"data"})," - ",(0,d.jsx)(n.code,{children:"VRC.SDK3.Platform.ScreenUpdateData"})]}),"\n",(0,d.jsxs)(n.p,{children:["Triggered when a player first enters the world on a Mobile Device, and whenever the orientation of their device changes. Outputs a ",(0,d.jsx)(n.code,{children:"ScreenUpdateData"})," struct with the following values:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"type"})," - ",(0,d.jsx)(n.code,{children:"ScreenUpdateType"})," - only ",(0,d.jsx)(n.code,{children:"OrientationChanged"})," for now, can be expanded in the future."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"orientation"})," - ",(0,d.jsx)(n.code,{children:"VRCOrientation"})," - the orientation of the player's device, as a ",(0,d.jsx)(n.code,{children:"VRC.SDKBase.Platform.VRCOrientation"})," enum, which is ",(0,d.jsx)(n.code,{children:"Landscape"})," or ",(0,d.jsx)(n.code,{children:"Portrait"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"resolution"})," - ",(0,d.jsx)(n.code,{children:"Vector2"})," - the resolution of the player's device, as a ",(0,d.jsx)(n.code,{children:"Vector2"})," struct."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"oninputmethodchanged",children:"OnInputMethodChanged"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Event_OnInputMethodChanged"}),"\r\nOutputs: ",(0,d.jsx)(n.code,{children:"inputMethod"})," - ",(0,d.jsx)(n.code,{children:"VRC.SDKBase.VRCInputMethod"}),"\r\nFired when a player uses a different input method - Keyboard, Mouse, Controller, etc."]}),"\n",(0,d.jsx)(n.h3,{id:"onlanguagechanged",children:"OnLanguageChanged"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Event_OnLanguageChanged"}),"\r\nOutputs: ",(0,d.jsx)(n.code,{children:"language"})," - ",(0,d.jsx)(n.code,{children:"string"}),"\r\nFired when a player updates their display language."]}),"\n",(0,d.jsx)(n.h3,{id:"onplayersuspendchanged",children:"OnPlayerSuspendChanged"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnPlayerSuspendChanged"})}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"player"})," - ",(0,d.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"})]}),"\n",(0,d.jsxs)(n.p,{children:["Fired when a player's device becomes suspended. A device is suspended if it enters sleep mode or switches to a different app. For the player that is being suspended, this event will fire on wakeup. Check ",(0,d.jsx)(n.code,{children:"VRCPlayerApi.isSuspended"})," to know if this is a wakeup or suspend event."]}),"\n",(0,d.jsx)(n.p,{children:"While suspended, devices don't run Udon code or respond to network events until the player reopens VRChat."}),"\n",(0,d.jsxs)(n.p,{children:["When you create multiplayer interactions in VRChat, you should react to suspended players to ensure that your Udon code continues running as intended. For example, you may want to transfer the ownership of important objects to ",(0,d.jsx)(n.a,{href:"/worlds/udon/players/#get-issuspended",children:"a player who is not suspended"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"Your code should account for any device becoming suspended at any time, regardless of platform. PC players currently never become suspended, but this should not be assumed."}),"\n",(0,d.jsx)(n.h3,{id:"onvrcplusmassgift",children:"OnVRCPlusMassGift"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Event_OnVRCPlusMassGift"})}),"\n",(0,d.jsx)(n.p,{children:"Outputs:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gifter"})," - ",(0,d.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"numGifts"})," - ",(0,d.jsx)(n.code,{children:"int"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Fired when someone in the instance drops a gift bomb."}),"\n",(0,d.jsx)(n.h3,{id:"advanced-notes",children:"Advanced Notes"}),"\n",(0,d.jsxs)(n.p,{children:["All nodes in this list have the type ",(0,d.jsx)(n.code,{children:"System.Void"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}}}]);