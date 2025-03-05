"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[5598],{28453:(e,t,d)=>{d.d(t,{R:()=>r,x:()=>i});var s=d(96540);const o={},n=s.createContext(o);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(n.Provider,{value:t},e.children)}},38479:(e,t,d)=>{d.d(t,{A:()=>s});const s=d.p+"assets/images/VRC_DropdownAddLabelScene-a565291702098172a8317e059b72fb8c.png"},49320:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"worlds/components/textmeshpro/tmp_dropdown","title":"TMP Dropdown","description":"TMPDropdown is a standard dropdown that presents a list of options when clicked, of which one can be chosen. It should always be used instead of Unity\'s legacy UI.Dropdown component.","source":"@site/docs/worlds/components/textmeshpro/tmp_dropdown.md","sourceDirName":"worlds/components/textmeshpro","slug":"/worlds/components/textmeshpro/tmp_dropdown","permalink":"/creator-docs_ja/worlds/components/textmeshpro/tmp_dropdown","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1718055806000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"TextMesh Pro","permalink":"/creator-docs_ja/worlds/components/textmeshpro/"},"next":{"title":"TMP InputField","permalink":"/creator-docs_ja/worlds/components/textmeshpro/tmp_inputfield"}}');var o=d(74848),n=d(28453);const r={},i="TMP Dropdown",h={},a=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"Related classes",id:"related-classes",level:2},{value:"VRCTMPDropdownExtension",id:"vrctmpdropdownextension",level:3},{value:"TMP_Dropdown.OptionData",id:"tmp_dropdownoptiondata",level:3},{value:"How to add sprites to a dropdown",id:"how-to-add-sprites-to-a-dropdown",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"tmp-dropdown",children:"TMP Dropdown"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/api/TMPro.TMP_Dropdown.html",children:(0,o.jsx)(t.code,{children:"TMP_Dropdown"})})," is a standard dropdown that presents a list of options when clicked, of which one can be chosen. It should always be used instead of Unity's legacy ",(0,o.jsx)(t.code,{children:"UI.Dropdown"})," component."]}),"\n",(0,o.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Property"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"value"}),(0,o.jsx)(t.td,{children:"int"}),(0,o.jsx)(t.td,{children:"Gets or sets the index of the selected element in the dropdown."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"IsExpanded"}),(0,o.jsx)(t.td,{children:"bool"}),(0,o.jsx)(t.td,{children:"Gets a value indicating whether the dropdown is expanded."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"enable"}),(0,o.jsx)(t.td,{children:"bool"}),(0,o.jsx)(t.td,{children:"Enables/disables the attached component"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Function"}),(0,o.jsx)(t.th,{children:"Input"}),(0,o.jsx)(t.th,{children:"Output"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"SetValueWithoutNotify"}),(0,o.jsx)(t.td,{children:"int"}),(0,o.jsx)(t.td,{children:"void"}),(0,o.jsxs)(t.td,{children:["Sets the value of the input field without invoking ",(0,o.jsx)(t.code,{children:"onValueChanged"}),"."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"RefreshShownValue"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"Refreshes the text and image (if available) of the currently selected option."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"ClearOptions"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"Removes all options from the dropdown."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Show"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{}),(0,o.jsxs)(t.td,{children:["Shows the dropdown. Plan for dropdown scrolling to ensure dropdown is contained within screen. ",(0,o.jsx)(t.a,{href:"https://docs.unity3d.com/Packages/com.unity.textmeshpro@2.0/api/TMPro.TMP_Dropdown.html",children:"TMP assumes the Canvas is the screen that the dropdown must be kept inside."})]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Hide"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"Hides the dropdown list."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"related-classes",children:"Related classes"}),"\n",(0,o.jsx)(t.p,{children:"Udon has access to two additional classes related to TMP_Dropdown."}),"\n",(0,o.jsx)(t.h3,{id:"vrctmpdropdownextension",children:"VRCTMPDropdownExtension"}),"\n",(0,o.jsx)(t.p,{children:"This class is part of the VRChat SDK. It allows you to add options to your dropdown."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Function"}),(0,o.jsx)(t.th,{children:"Input"}),(0,o.jsx)(t.th,{children:"Output"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"AddOptions"}),(0,o.jsxs)(t.td,{children:["TMP_Dropdown,",(0,o.jsx)("br",{})," string[]"]}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"Adds the array of strings to the dropdown."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"AddOptions"}),(0,o.jsxs)(t.td,{children:["TMP_Dropdown,",(0,o.jsx)("br",{})," sprite[]"]}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"Adds the array of sprites to the dropdown."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"AddOptions"}),(0,o.jsxs)(t.td,{children:["TMP_Dropdown,",(0,o.jsx)("br",{})," OptionData[]"]}),(0,o.jsx)(t.td,{}),(0,o.jsxs)(t.td,{children:["Adds the array of ",(0,o.jsx)(t.a,{href:"tmp_dropdown#vrcoptiondata",children:"TMP_Dropdown.OptionData"})," to the dropdown."]})]})]})]}),"\n",(0,o.jsxs)(t.admonition,{title:"Extension method",type:"note",children:[(0,o.jsxs)(t.p,{children:["In UdonSharp, AddOptions is an ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods",children:"extension method"}),"."]}),(0,o.jsxs)(t.p,{children:["Instead of ",(0,o.jsx)(t.code,{children:"AddOptions(dropdown, options)"}),", you can type ",(0,o.jsx)(t.code,{children:"dropdown.AddOptions(options)"}),". Make sure you have the namespace ",(0,o.jsx)(t.code,{children:"VRC.SDK3.Components"})," included in the file."]})]}),"\n",(0,o.jsx)(t.h3,{id:"tmp_dropdownoptiondata",children:"TMP_Dropdown.OptionData"}),"\n",(0,o.jsx)(t.p,{children:"This is built into TextMesh Pro. It allows you to add a combination of strings and sprites to a dropdown."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Functions"}),(0,o.jsx)(t.th,{children:"Input"}),(0,o.jsx)(t.th,{children:"Output"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Constructor"}),(0,o.jsx)(t.td,{children:"string"}),(0,o.jsx)(t.td,{children:"OptionData"}),(0,o.jsx)(t.td,{children:"Creates an OptionData object with text as the option."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Constructor"}),(0,o.jsx)(t.td,{children:"sprite"}),(0,o.jsx)(t.td,{children:"OptionData"}),(0,o.jsx)(t.td,{children:"Creates an OptionData object with a sprite as the option"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Constructor"}),(0,o.jsx)(t.td,{children:"string, sprite"}),(0,o.jsx)(t.td,{children:"OptionData"}),(0,o.jsx)(t.td,{children:"Creates an OptionData object with text and a sprite as the option"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"how-to-add-sprites-to-a-dropdown",children:"How to add sprites to a dropdown"}),"\n",(0,o.jsx)(t.p,{children:"Dropdowns can display a different sprite for each option. You need to set up your dropdown correctly:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Add an image to the dropdown."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"Add an image to the dropdown hierarchy, moving the label out of the way - part 1",src:d(38479).A+"",width:"922",height:"203"}),"\r\n",(0,o.jsx)(t.img,{alt:"part 2",src:d(84817).A+"",width:"325",height:"128"})]}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:"Add an image to the template."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"Add an image to the template hierarchy, moving the label out of the way - part 1",src:d(72601).A+"",width:"816",height:"319"}),"\r\n",(0,o.jsx)(t.img,{alt:"part 2",src:d(72415).A+"",width:"447",height:"238"})]}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsxs)(t.li,{children:["Add the correct references to ",(0,o.jsx)(t.code,{children:"Caption Image"})," and ",(0,o.jsx)(t.code,{children:"Item Image"})," fields in the dropdown."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"part 2",src:d(56588).A+"",width:"529",height:"425"})}),"\n",(0,o.jsxs)(t.ol,{start:"4",children:["\n",(0,o.jsx)(t.li,{children:"Success! The dropdown can now display sprites."}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},56588:(e,t,d)=>{d.d(t,{A:()=>s});const s=d.p+"assets/images/VRC_DropdownAddLabelInspector-9962574096d0ac256ee5569cb49eed79.png"},72415:(e,t,d)=>{d.d(t,{A:()=>s});const s=d.p+"assets/images/VRC_DropdownAddLabelTemplateHierarchie-418eacdd5c00ed8f2e2aa82dbf3171ff.png"},72601:(e,t,d)=>{d.d(t,{A:()=>s});const s=d.p+"assets/images/VRC_DropdownAddLabelTemplateScene-14ef5059d9d33010b867fe242d21193e.png"},84817:(e,t,d)=>{d.d(t,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAACACAYAAACcJnvuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABmPSURBVHhe7Z15tFXjG8df0s+cBqIJjYbSSIkoSdG0tBClUqKBUpK50lK0KFr9RUXGojRgCamlqCUqSaYi0iSSNCCzX5+n8177bme453bO7XTO97PWWffu4e69b5bvfZ73eZ7vPqhevXr/uCgceuihke+KjgcffNDddtttka1/SXb/uHHj3PDhw92PP/4Y2ZOfgQMHuqOOOsotXLjQvfXWW7bviCOOcCNGjLCfXb9+vTvyyCNdly5d3OTJk+34vffe6wYNGmTfw5gxY9x9991n97jmmmvcli1b3GuvveZKlSpl1xk9erRbt26dndu6dWt3xhlnuAceeMC2gWtxz+AzlCtXzjVv3txNmTLF/fPPP65du3bumGOOcc8++2y+eyTzrLVr13YXXnihGzt2rG1zzWLFirkXX3zRtoUQ+Tk48jUj+P77792ZZ57pDjrooMie6HCc8zg/FogiouE/Z599duSIc4sXL3bly5d3y5Yti+xx7pdffnGTJk1yffv2dcOGDTPR+fbbb91PP/0UOSM2b7/9tonZgAEDTCSfeeYZ179/f7vGww8/7OrXr++efPLJyNl78c+wdOnSyB5noofgjRw50g0ZMsTt+YPl5syZY8eC99iXZxVCxCejIsXjjz/eXXXVVe7ggw92r7/+uvvss89sfzAiPO2009zFF1/s/v77b/f888+77777zvanCu5dokQJ9/PPP7s//vgjsjcxCHXx4sXd77//nrddsmRJ9+eff7pdu3bZviCNGjVydevWdePHj4/s+ReEERC/IOF7FPZZhRCxyShR9ASFD3Hs2bOne/zxx21fWDAPNBC29u3bmyhOmDDBff3115EjQohMICNFERCPmjVruosuusgiSCLCuXPnuk8++cTW2w5U+Hcllf/yyy/dxo0bI3uFEJlCxopiEAoDf/31V2RLCCHSR0YVWmIhQRRCFBUZLYqHH364O//8893VV19tXw877LDIESGESA/FypUrNzzyfT4OOeSQyHdFD2uIl1xyibvsssusAvvpp5+6k046ybaPPfZY98MPP1jFVQghUk3GteRceuml7rjjjnPvvPOOe/fd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"}}]);