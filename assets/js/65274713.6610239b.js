"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[5562],{78:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"worlds/udon/vrc-graphics/vrchat-shader-globals","title":"VRChat Shader Globals","description":"VRChat provides multiple global shader parameters Shader creators can use to implement VRChat-specific features.","source":"@site/docs/worlds/udon/vrc-graphics/vrchat-shader-globals.md","sourceDirName":"worlds/udon/vrc-graphics","slug":"/worlds/udon/vrc-graphics/vrchat-shader-globals","permalink":"/creator-docs_ja/worlds/udon/vrc-graphics/vrchat-shader-globals","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1726763074000,"frontMatter":{"title":"VRChat Shader Globals","slug":"vrchat-shader-globals","hidden":false,"createdAt":"2023-04-11T20:25:09.753Z","updatedAt":"2023-04-11T20:28:55.746Z"},"sidebar":"tutorialSidebar","previous":{"title":"AsyncGPUReadback","permalink":"/creator-docs_ja/worlds/udon/vrc-graphics/asyncgpureadback"},"next":{"title":"World Debug Views","permalink":"/creator-docs_ja/worlds/udon/world-debug-views"}}');var s=n(74848),t=n(28453);const d={title:"VRChat Shader Globals",slug:"vrchat-shader-globals",hidden:!1,createdAt:"2023-04-11T20:25:09.753Z",updatedAt:"2023-04-11T20:28:55.746Z"},l=void 0,o={},i=[];function c(e){const r={code:"code",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"VRChat provides multiple global shader parameters Shader creators can use to implement VRChat-specific features."}),"\n",(0,s.jsx)(r.p,{children:"The following shader globals are currently available:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"float _VRChatCameraMode"}),":","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"0"})," - Rendering normally"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"1"})," - Rendering in VR handheld camera"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"2"})," - Rendering in Desktop handheld camera"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"3"})," - Rendering for a screenshot"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"uint _VRChatCameraMask"})," - The ",(0,s.jsx)(r.code,{children:"cullingMask"})," property of the active camera, available if ",(0,s.jsx)(r.code,{children:"_VRChatCameraMode != 0"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"float _VRChatMirrorMode"}),":","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"0"})," - Rendering normally, not in a mirror"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"1"})," - Rendering in a mirror viewed in VR"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"2"})," - Rendering in a mirror viewed in desktop mode"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"float3 _VRChatMirrorCameraPos"}),' - World space position of mirror camera (eye independent, "centered" in VR)']}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>l});var a=n(96540);const s={},t=a.createContext(s);function d(e){const r=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);