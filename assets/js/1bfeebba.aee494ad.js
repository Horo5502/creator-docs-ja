"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[7343],{28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var s=i(96540);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}},45762:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"worlds/components/vrc_pickup","title":"VRC Pickup","description":"Allows objects to be picked up, held and used by players.","source":"@site/docs/worlds/components/vrc_pickup.md","sourceDirName":"worlds/components","slug":"/worlds/components/vrc_pickup","permalink":"/creator-docs_ja/worlds/components/vrc_pickup","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1712356660000,"frontMatter":{"title":"VRC Pickup","slug":"vrc_pickup","hidden":false,"createdAt":"2017-07-06T00:55:36.747Z","updatedAt":"2023-05-04T21:43:45.162Z"},"sidebar":"tutorialSidebar","previous":{"title":"VRC Object Sync","permalink":"/creator-docs_ja/worlds/components/vrc_objectsync"},"next":{"title":"VRC Portal Marker","permalink":"/creator-docs_ja/worlds/components/vrc_portalmarker"}}');var r=i(74848),n=i(28453);const o={title:"VRC Pickup",slug:"vrc_pickup",hidden:!1,createdAt:"2017-07-06T00:55:36.747Z",updatedAt:"2023-05-04T21:43:45.162Z"},a=void 0,l={},d=[{value:"Proximity Rules",id:"proximity-rules",level:2},{value:"Requires:",id:"requires",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Allows objects to be picked up, held and used by players."}),"\n",(0,r.jsx)(t.h2,{id:"proximity-rules",children:"Proximity Rules"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:['All of the rules described in this section also apply to "Interactables", i.e. UdonBehaviours that have an ',(0,r.jsx)(t.code,{children:"Interact"}),' event (they will also show a "Proximity" slider in the Inspector).']})}),"\n",(0,r.jsx)(t.p,{children:'The "Proximity" value defines from how far away your pickup will be grabbable. It is given in meters, aka. "Unity units", where the side-length of one default Cube equals 1 unit.'}),"\n",(0,r.jsx)(t.p,{children:"There are 2 mechanisms of grabbing where the Proximity value will be in play:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Raycast:"}),' If you are far away from a pickup, or you are running in desktop mode, pickups will be highlighted if the "laser" coming out of your hands (in VR) or your head (desktop) intersects the collider on a pickup object. The distance calculation to compare against Proximity is different in VR and Desktop mode:',"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"VR: The distance between the origin of the laser (i.e. your hand controllers) and the impact point on the collider, in meters"}),"\n",(0,r.jsx)(t.li,{children:'Desktop: The distance between the origin of the laser (i.e. your head or main camera position) minus an "extra reach" value to compensate for being unable to move your hands forward. This is an approximate value that also takes your avatar scale into account ("longer arms"). Since it is subtracted from the distance, it will allow you to grab objects that are technically outside of the "Proximity" range, but could be grabbed by moving your arms while standing in this position in VR.'}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Hover (VR only):"}),' If your hands are close enough to an object, pickups will be highlighted even if a ray in the direction of the UI laser would not intersect the object. This allows more natural "grabbing" of objects. The distance of reach is a sphere centered on your hands with a radius of 0.4 meters times your avatar scale (note that this value is not directly comparable to the "avatar scaling" system available to users, although changing the avatar scale that way can affect the reach).',"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'The "Proximity" value is still compared against the raw distance between your hand and the collider on the pickup, meaning the "reach distance" described is only an upper bound for the closeness at which "Hover" mode will engage.'}),"\n",(0,r.jsxs)(t.li,{children:["For example, setting the Proximity to 0 will require the hand to be ",(0,r.jsx)(t.em,{children:"inside"}),' the collider for the pickup to be highlighted (it will still be grabbable in Desktop mode however, because of the "extra reach" desktop users get to compensate).']}),"\n",(0,r.jsxs)(t.li,{children:["As an advanced technique, you may want to adjust the Proximity value based on the data provided via the ",(0,r.jsx)(t.a,{href:"/worlds/udon/players/player-avatar-scaling",children:"avatar scaling system"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"requires",children:"Requires:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Rigidbody"}),"\n",(0,r.jsx)(t.li,{children:"Collider"}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Momentum Transfer Method"}),(0,r.jsxs)(t.td,{children:["This defines how the collision force will be added to the other object which was hit, using Rigidbody.AddForceAtPosition.",(0,r.jsx)("br",{}),"Note: the force will only be added if 'AllowCollisionTransfer' is on."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Disallow Theft"}),(0,r.jsx)(t.td,{children:"If other users are allowed to take the pickup out of someone else's grip"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Exact Gun"}),(0,r.jsx)(t.td,{children:"The position object will be held if set to Exact Gun"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Exact Grip"}),(0,r.jsx)(t.td,{children:"The position object will be held if set to Exact Grip."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Allow Manipulation When Equipped"}),(0,r.jsx)(t.td,{children:"Should the user be able to manipulate the pickup while the pickup is held if using a controller?"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Orientation"}),(0,r.jsx)(t.td,{children:"What way the object will be held."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Auto Hold"}),(0,r.jsxs)(t.td,{children:["Should the pickup remain in the user's hand after they let go of the grab button.",(0,r.jsx)("br",{}),"- Auto Detect: Automatically detects what to do",(0,r.jsx)("br",{}),"- Yes: After the grab button is released the pickup remains in the hand until the drop button is pressed and released",(0,r.jsx)("br",{}),"- No: After the grab button is released the pickup is let go",(0,r.jsx)("br",{}),'Note: This only applies to control schemes which lack an independent "Use" input from "Grab", such as Desktop, Vive, and Vive-like input systems. This does not apply to Quest, Quest-like, and other input systems with a defined trigger.']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Use Text"}),(0,r.jsxs)(t.td,{children:['Text that appears when the user has an object equipped, prompting them to "fire" the object.',(0,r.jsx)("br",{}),'Requires "Auto Hold" to be set to "Yes".']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Throw Velocity Boost Min Speed"}),(0,r.jsx)(t.td,{children:"How fast the object needs to move to be thrown."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Throw Velocity Boost Scale"}),(0,r.jsx)(t.td,{children:"How much throwing should scale. Higher = faster thrown while lower means slower throw speed."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Pickupable"}),(0,r.jsx)(t.td,{children:"Can you pick up the pickup?"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Proximity"}),(0,r.jsx)(t.td,{children:"The maximum distance this pickup is reachable from. See section above for more details."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);