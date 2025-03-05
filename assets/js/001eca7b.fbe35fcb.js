"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[4606],{28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var r=s(96540);const i={},o=r.createContext(i);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:n},e.children)}},40939:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>t,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"worlds/udon/udonsharp/migration","title":"Migration","description":"UdonSharp 0.x (the .unitypackage version) is deprecated and no longer supported.","source":"@site/docs/worlds/udon/udonsharp/migration.md","sourceDirName":"worlds/udon/udonsharp","slug":"/worlds/udon/udonsharp/migration","permalink":"/creator-docs_ja/worlds/udon/udonsharp/migration","draft":false,"unlisted":true,"tags":[],"version":"current","lastUpdatedAt":1723066495000,"frontMatter":{"unlisted":true},"sidebar":"tutorialSidebar"}');var i=s(74848),o=s(28453);const t={unlisted:!0},a="Migration",l={},d=[{value:"New Features in UdonSharp 1.0",id:"new-features-in-udonsharp-10",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"Nested Prefabs",id:"nested-prefabs",level:3},{value:"Does Not Belong to U# Assembly",id:"does-not-belong-to-u-assembly",level:3},{value:"Newtonsoft.Json.Dll",id:"newtonsoftjsondll",level:3},{value:"Other breaking changes",id:"other-breaking-changes",level:3},{value:"Manual Migration",id:"manual-migration",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"migration",children:"Migration"})}),"\n",(0,i.jsx)(n.p,{children:"UdonSharp 0.x (the .unitypackage version) is deprecated and no longer supported."}),"\n",(0,i.jsxs)(n.p,{children:["Newer versions of UdonSharp are included in the VRChat Worlds SDK, which is easy to install through the ",(0,i.jsx)(n.a,{href:"https://vcc.docs.vrchat.com",children:"Creator Companion"}),". We recommend you ",(0,i.jsx)(n.a,{href:"https://vcc.docs.vrchat.com/vpm/migrating",children:"Migrate your Projects using the Creator Companion"}),". If you want to do the migration manually, read ",(0,i.jsx)(n.a,{href:"#manual-migration",children:"Manual Migration"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"new-features-in-udonsharp-10",children:"New Features in UdonSharp 1.0"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"More C# features"})," in your UdonSharp programs:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"static"})," methods"]}),"\n",(0,i.jsxs)(n.li,{children:["Generic ",(0,i.jsx)(n.code,{children:"static"})," methods"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"params"}),", ",(0,i.jsx)(n.code,{children:"out"}),", ",(0,i.jsx)(n.code,{children:"ref"}),", and default parameters"]}),"\n",(0,i.jsx)(n.li,{children:"Extension methods"}),"\n",(0,i.jsx)(n.li,{children:"Inheritance, virtual methods, and abstract classes"}),"\n",(0,i.jsx)(n.li,{children:"Partial classes"}),"\n",(0,i.jsx)(n.li,{children:"Enums"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Multi-edit"})," multiple UdonSharp scripts in the Unity inspector"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Prefab variants"}),", ",(0,i.jsx)(n.strong,{children:"instances"}),", and ",(0,i.jsx)(n.strong,{children:"nesting"})," are now fully supported"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Editor scripting"})," has been overhauled and simplified"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Compiler fixes"})," and ",(0,i.jsx)(n.strong,{children:"optimizations"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Fixed various bugs"}),", edge cases, and other rough edges"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,i.jsx)(n.p,{children:"When migrating your project from a very old version of UdonSharp, you may encounter some known issues. Here's how you can address them."}),"\n",(0,i.jsxs)(n.admonition,{title:"Try this first!",type:"tip",children:[(0,i.jsx)(n.p,{children:'Is UdonSharp giving you trouble? Try reimporting all assets with "Assets" > "Reimport All."'}),(0,i.jsx)(n.p,{children:"In many cases, this fixes import issues related to UdonSharp, especially when migrating or upgrading your project from an older version."})]}),"\n",(0,i.jsx)(n.h3,{id:"nested-prefabs",children:"Nested Prefabs"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Issue"}),": UdonSharp always warned against using nested prefabs. When migrating from an old version, nested prefabs may break."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Symptoms"}),": Errors in Unity's console like ",(0,i.jsx)(n.code,{children:"Cannot upgrade scene behaviour 'SomethingOrOther' since its prefab must be upgraded"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"How to Fix"}),': Unpack the prefab in your 0.x UdonSharp project first. You can also open the "Udon Sharp" menu item and choose "Force Upgrade".']}),"\n",(0,i.jsx)(n.h3,{id:"does-not-belong-to-u-assembly",children:"Does Not Belong to U# Assembly"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Issue"}),": Libraries with their own Assembly Definitions need to have an U# assembly definition, too."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Symptoms"}),": Errors in Unity's console like ",(0,i.jsx)(n.code,{children:"[UdonSharp] Script 'Assets/MyScript.cs' does not belong to a U# assembly, have you made a U# assembly definition for the assembly the script is a part of?"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"How to Fix"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Use the Project window to find the file ending in ",(0,i.jsx)(n.code,{children:".asmdef"})," in the same or a parent directory of the script in question."]}),"\n",(0,i.jsxs)(n.li,{children:["Right-click in the folder which has this Assembly Definition and choose ",(0,i.jsx)(n.code,{children:"Create > U# Assembly Definition"}),"."]}),"\n",(0,i.jsx)(n.li,{children:'Select this new U# asmdef, and use the inspector to set its "Source Assembly" to the other Assembly Definition File.'}),"\n",(0,i.jsx)(n.li,{children:"You may need to restart Unity after doing this."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"newtonsoftjsondll",children:"Newtonsoft.Json.Dll"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Issue"}),": Some packages include their own copy of this JSON library, which the VRCSDK pulls in itself. This results in two copies of the library."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Symptoms"}),": Errors in Unity's console which mention the above library. It might not be at the front of the sentence, but something like ",(0,i.jsx)(n.code,{children:"System.TypeInitializationException: the type initializer for blah blah blah...Assets/SketchfabForUnity/Dependencies/Libraries/Newtonsoft.Json.dll"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"How to Fix"}),": Remove any copies of Newtonsoft.Json.dll from your Assets folder. The VRCSDK will provide it for any package that needs it through the Package Manager."]}),"\n",(0,i.jsx)(n.h3,{id:"other-breaking-changes",children:"Other breaking changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Your U# behaviour name must match the .cs file name."}),"\n",(0,i.jsxs)(n.li,{children:["Duplicate program assets may not reference the same ",(0,i.jsx)(n.code,{children:".cs"})," file."]}),"\n",(0,i.jsx)(n.li,{children:"Program assets must point to a script and may not be empty."}),"\n",(0,i.jsx)(n.li,{children:"Editor scripting is now different: Data is owned by a C# proxy of the UdonSharpBehaviour, and the corresponding UdonBehaviour is empty until runtime."}),"\n",(0,i.jsx)(n.li,{children:"Obsoleted overloads for station and player join events may no longer be used."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"manual-migration",children:"Manual Migration"}),"\n",(0,i.jsx)(n.p,{children:"Follow these steps to upgrade a project that uses a version of UdonSharp below 1.0 without using the Creator Companion:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Back up your project."}),"\n",(0,i.jsx)(n.li,{children:'Delete the VRCSDK folder, Udon folder, UdonSharp folder, and Gizmos/UdonSharp folders from your project\'s "Assets" folder.'}),"\n",(0,i.jsxs)(n.li,{children:["Download and install the ",(0,i.jsx)(n.a,{href:"https://vrchat.com/download/sdk3-worlds",children:"Unity Package versions of the World SDK"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Download and install the ",(0,i.jsx)(n.a,{href:"https://github.com/vrchat-community/UdonSharp/releases/download/1.1.7/com.vrchat.udonsharp-1.1.7.unitypackage",children:"Unity Package version of the UdonSharp SDK"}),"."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);