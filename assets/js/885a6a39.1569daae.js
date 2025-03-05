"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[2538],{7820:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/OpenListingDeluxe_GameView-bb26f32a421fc2f7e821b67134a9329a.png"},20577:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/Comparison-OpenListing-ceaca6ddf3827816870f63a84c7d5edf.png"},25473:(e,n,s)=>{s.d(n,{Ay:()=>r,RM:()=>l});var i=s(74848),t=s(28453);const l=[{value:"How to Import",id:"how-to-import",level:3}];function o(e){const n={a:"a",h3:"h3",li:"li",ol:"ol",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"how-to-import",children:"How to Import"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.a,{href:"/sdk/example-central",children:"the Example Central Window"}),' from the window from the Unity Editor Menu under "VRChat SDK > \ud83c\udfe0 Example Central"']}),"\n",(0,i.jsxs)(n.li,{children:["If you haven't enabled Creator Economy examples yet:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Press the \u2699\ufe0f gear icon in the Example Central window to open the Example Central settings."}),"\n",(0,i.jsx)(n.li,{children:'Enable "Show Creator Economy Examples".'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Select this prefab in Example Central."}),"\n",(0,i.jsx)(n.li,{children:'Press the "Import" button to import the example assets into your project.'}),"\n"]})]})}function r(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(96540);const t={},l=i.createContext(t);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:n},e.children)}},37634:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"economy/sdk/examples/open-listing","title":"Open Listing","description":"Opens a listing.","source":"@site/docs/economy/sdk/examples/open-listing.md","sourceDirName":"economy/sdk/examples","slug":"/economy/sdk/examples/open-listing","permalink":"/creator-docs_ja/economy/sdk/examples/open-listing","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1739355798000,"sidebarPosition":0,"frontMatter":{"description":"Opens a listing.","sidebar_position":0,"sidebar_custom_props":{"customIcon":"\ud83d\udd17"}},"sidebar":"tutorialSidebar","previous":{"title":"Example Prefabs","permalink":"/creator-docs_ja/economy/sdk/examples/"},"next":{"title":"Open Group Page","permalink":"/creator-docs_ja/economy/sdk/examples/open-group-page"}}');var t=s(74848),l=s(28453),o=s(25473);const r={description:"Opens a listing.",sidebar_position:0,sidebar_custom_props:{customIcon:"\ud83d\udd17"}},c="Open Listing",a={},d=[...o.RM,{value:"Prefabs included",id:"prefabs-included",level:2},{value:"How to Use",id:"how-to-use",level:2},{value:"Inspector Parameters",id:"inspector-parameters",level:3},{value:"OpenListing &amp; OpenListingSimple",id:"openlisting--openlistingsimple",level:3},{value:"OpenListingAndReactToPurchase",id:"openlistingandreacttopurchase",level:3},{value:"OpenListingDeluxe",id:"openlistingdeluxe",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"open-listing",children:"Open Listing"})}),"\n",(0,t.jsx)(n.p,{children:"This example contains two prefabs that allow users to open one of your listings by pressing a button."}),"\n","\n",(0,t.jsx)(o.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"prefabs-included",children:"Prefabs included"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"OpenListingPrefab"}),": Includes a button to open to a listing page. Also includes a text description."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"OpenListingSimplePrefab"}),": Includes a button to open to a listing page. Does not include a text description."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"OpenListingAndReactToPurchasePrefab"}),": Includes a button to open to a listing page. Plays a sound effect when a given product is purchased."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"OpenListingPrefab",src:s(20577).A+"",title:"Compares listing prefabs.",width:"1514",height:"689"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"OpenListingDeluxePrefab"}),": Includes a thumbnail, and fields for the name, type and price of the listing."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"OpenListingPrefab",src:s(7820).A+"",title:"Shows OpenListing Deluxe as it appears in the Game View",width:"958",height:"499"})}),"\n",(0,t.jsx)(n.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,t.jsx)(n.p,{children:"For each prefab, you'll need to replace any ID with the ID of your own group or product."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Select the chosen prefab in your Unity scene."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set the ID of the listing in the ",(0,t.jsx)(n.code,{children:"Listing ID"})," field in the inspector window."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Find your listing ID by ",(0,t.jsx)(n.a,{href:"https://vrchat.com/home/marketplace/storefront/listings",children:"opening the listing section"})," of your store and copying its ID."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"DragListingID",src:s(47041).A+"",title:"Where to put the listing ID.",width:"2000",height:"1333"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.strong,{children:"OpenListingAndReactToPurchase"})," only:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.a,{href:"https://creators.vrchat.com/economy/sdk/getting-started#udonproducts-manager",children:"UdonProducts Manager"})," to locate the ",(0,t.jsx)(n.code,{children:"UdonProduct"})," asset of the product that should play a sound effect when purchased."]}),"\n",(0,t.jsxs)(n.li,{children:["Set the ",(0,t.jsx)(n.code,{children:"Trigger Product"})," field to the ",(0,t.jsx)(n.code,{children:"UdonProduct"})," asset."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.strong,{children:"OpenListingDeluxe"})," only:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Set the Thumbnail for the listing using the ",(0,t.jsx)(n.code,{children:"Thumbnail"})," field in the inspector window. It's best if you use the same thumbnail that the user will see when opening your listing, but you have the ability to use any square Sprite in your project."]}),"\n",(0,t.jsxs)(n.li,{children:["Set the three text lines using the ",(0,t.jsx)(n.code,{children:"Display Name"}),", ",(0,t.jsx)(n.code,{children:"Type"})," and ",(0,t.jsx)(n.code,{children:"Price"})," fields. Just like the thumbnail, it's best if these match what the user will see in your listing, but you can enter any information you like."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"OpenListingDeluxeFields",src:s(64206).A+"",title:"The Fields for OpenListingDeluxe",width:"926",height:"250"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Run Build & Test!"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"inspector-parameters",children:"Inspector Parameters"}),"\n",(0,t.jsx)(n.p,{children:"The prefabs have the following parameters:"}),"\n",(0,t.jsx)(n.h3,{id:"openlisting--openlistingsimple",children:"OpenListing & OpenListingSimple"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Listing ID"})," - The listing ID of the listing you want to open."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"openlistingandreacttopurchase",children:"OpenListingAndReactToPurchase"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Trigger Product"})," - The ",(0,t.jsx)(n.code,{children:"UdonProduct"})," asset that triggers the sound effect when purchased."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Optional Purchase Sfx"})," - The sound effect that plays when purchasing the product."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Optional Purchase Sfx Source"})," - The ",(0,t.jsx)(n.code,{children:"AudioSource"})," component that plays the sound effect."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"openlistingdeluxe",children:"OpenListingDeluxe"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Thumbnail"})," - The sprite shown in the prefab, typically the same as the thumbnail set for the listing."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Display Name"})," - The first line of text, typically the Display Name of the listing."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Type"})," - The second line of text, typically the Type of the listing - Consumable, Instant, etc."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Price"})," - The third line of text, typically the Price of the listing in VRChat Credits."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},47041:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/Listing-Id-Copying-118a0487287cb15315a39bf4545971bd.png"},64206:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/OpenListingDeluxe_Inspector-2bb2c9a1b533a7a139b72fdeb5aee1a5.png"}}]);