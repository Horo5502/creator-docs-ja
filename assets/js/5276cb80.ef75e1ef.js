"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[2110],{28453:(e,a,r)=>{r.d(a,{R:()=>l,x:()=>i});var t=r(96540);const n={},s=t.createContext(n);function l(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(s.Provider,{value:a},e.children)}},60576:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"avatars/shader-fallback-system","title":"Shader Blocking and Fallback System","description":"This page serves as a description of the Shader Blocking System, how it operates, and how shader authors can work with it so that their shader falls back gracefully when a user has Shaders blocked on an avatar using a given shader.","source":"@site/docs/avatars/shader-fallback-system.md","sourceDirName":"avatars","slug":"/avatars/shader-fallback-system","permalink":"/creator-docs_ja/avatars/shader-fallback-system","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1711582340000,"frontMatter":{"title":"Shader Blocking and Fallback System","slug":"shader-fallback-system","hidden":false,"createdAt":"2018-09-25T20:49:23.385Z","updatedAt":"2022-08-12T01:21:02.481Z"},"sidebar":"tutorialSidebar","previous":{"title":"Rig Requirements","permalink":"/creator-docs_ja/avatars/rig-requirements"},"next":{"title":"State Behaviors","permalink":"/creator-docs_ja/avatars/state-behaviors"}}');var n=r(74848),s=r(28453);const l={title:"Shader Blocking and Fallback System",slug:"shader-fallback-system",hidden:!1,createdAt:"2018-09-25T20:49:23.385Z",updatedAt:"2022-08-12T01:21:02.481Z"},i=void 0,o={},d=[{value:"VRChat 2021.4.2 Fallback System Upgrade",id:"vrchat-202142-fallback-system-upgrade",level:2},{value:"Old Fallback System",id:"old-fallback-system",level:2},{value:"Previewing Fallback Shaders for your Avatar",id:"previewing-fallback-shaders-for-your-avatar",level:2}];function c(e){const a={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"This page serves as a description of the Shader Blocking System, how it operates, and how shader authors can work with it so that their shader falls back gracefully when a user has Shaders blocked on an avatar using a given shader."}),"\n",(0,n.jsx)(a.h2,{id:"vrchat-202142-fallback-system-upgrade",children:"VRChat 2021.4.2 Fallback System Upgrade"}),"\n",(0,n.jsx)(a.p,{children:'Shader fallback improvements work by using the "Tags" field at the top of the shader.'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-text",children:'Tags{"Queue"="Geometry"}\n'})}),"\n",(0,n.jsx)(a.p,{children:"The tags field might look like this by default."}),"\n",(0,n.jsxs)(a.p,{children:["You can now add different tags, under the ",(0,n.jsx)(a.code,{children:"VRCFallback"})," name, to specify which fallback shader to try to use:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-text",children:'Tags{"Queue"="Geometry" "VRCFallback"="Toon"}\n'})}),"\n",(0,n.jsxs)(a.p,{children:["Some fallback tags are combine-able, you could for instance use ",(0,n.jsx)(a.code,{children:"ToonCutout:"})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-text",children:'Tags{"Queue"="Geometry" "VRCFallback"="ToonCutout"}\n'})}),"\n",(0,n.jsx)(a.p,{children:"The supported tags are as follows:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-text",children:"Unlit\r\nVertexLit\r\nToon\r\nTransparent\r\nCutout\r\nFade\r\nParticle\r\nSprite\r\nMatcap\r\nMobileToon\r\nDoubleSided\r\nHidden //(this will hide the mesh from view if the shader is blocked, useful for things like raymarching effects.)\n"})}),"\n",(0,n.jsx)(a.p,{children:"Toon and Unlit can also be combined with Transparent, Cutout, Fade, and DoubleSided tags for more granular control. With Toon supporting such variations as DoubleSided Cutout."}),"\n",(0,n.jsx)(a.admonition,{type:"caution",children:(0,n.jsx)(a.p,{children:"Please note that using Transparent or Fade tags with Toon will result in it falling back to Transparent Unlit. You might want to take that into account when picking fallback tags."})}),"\n",(0,n.jsx)(a.p,{children:"Specifying any other tag will result in a Standard shader fallback."}),"\n",(0,n.jsx)(a.p,{children:"If no tag is provided, the old fallback system will be used, following the pattern shader name, keywords, etc."}),"\n",(0,n.jsx)(a.p,{children:"We now also copy ALL standard shader parameters to the fallback material, including the following:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-text",children:"_MainTex\r\n_MetallicGlossMap\r\n_SpecGlossMap\r\n_BumpMap\r\n_ParallaxMap\r\n_OcclusionMap\r\n_EmissionMap\r\n_DetailMask\r\n_DetailAlbedoMap\r\n_DetailNormalMap\r\n_Color\r\n_EmissionColor\r\n_SpecColor\r\n_Cutoff\r\n_Glossiness\r\n_GlossMapScale\r\n_SpecularHighlights\r\n_GlossyReflections\r\n_SmoothnessTextureChannel\r\n_Metallic\r\n_SpecularHighlights\r\n_GlossyReflections\r\n_BumpScale\r\n_Parallax\r\n_OcclusionStrength\r\n_DetailNormalMapScale\r\n_UVSec\r\n_Mode\r\n_SrcBlend\r\n_DstBlend\r\n_ZWrite\n"})}),"\n",(0,n.jsx)(a.h2,{id:"old-fallback-system",children:"Old Fallback System"}),"\n",(0,n.jsx)(a.p,{children:"When a shader is blocked by the Safety System, it is first checked for one of the internal pre-compiled shaders in this list:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-text",metastring:'title="Pre-Compiled Internal Shaders"',children:'  "Standard",\r\n  "Standard (Specular setup)",\r\n  "Effects/Rim",\r\n  "Effects/GlowAdditiveSimple",\r\n  "Legacy Shaders/Bumped Diffuse",\r\n  "Legacy Shaders/Bumped Specular",\r\n  "Legacy Shaders/Decal",\r\n  "Legacy Shaders/Diffuse",\r\n  "Legacy Shaders/Diffuse Detail",\r\n  "Legacy Shaders/Diffuse Fast",\r\n  "Legacy Shaders/Lightmapped/Diffuse",\r\n  "Legacy Shaders/Lightmapped/Specular",\r\n  "Legacy Shaders/Lightmapped/VertexLit",\r\n  "Legacy Shaders/Parallax Diffuse",\r\n  "Legacy Shaders/Parallax Specular",\r\n  "Legacy Shaders/Reflective/Bumped Diffuse",\r\n  "Legacy Shaders/Reflective/Bumped Specular",\r\n  "Legacy Shaders/Reflective/Bumped Unlit",\r\n  "Legacy Shaders/Reflective/Bumped VertexLit",\r\n  "Legacy Shaders/Reflective/Diffuse",\r\n  "Legacy Shaders/Reflective/Parallax Diffuse",\r\n  "Legacy Shaders/Reflective/Parallax Specular",\r\n  "Legacy Shaders/Reflective/Specular",\r\n  "Legacy Shaders/Reflective/VertexLit",\r\n  "Legacy Shaders/Self-Illum/Bumped Diffuse",\r\n  "Legacy Shaders/Self-Illum/Bumped Specular",\r\n  "Legacy Shaders/Self-Illum/Diffuse",\r\n  "Legacy Shaders/Self-Illum/Parallax Diffuse",\r\n  "Legacy Shaders/Self-Illum/Parallax Specular",\r\n  "Legacy Shaders/Self-Illum/Specular",\r\n  "Legacy Shaders/Self-Illum/VertexLit",\r\n  "Legacy Shaders/Specular",\r\n  "Legacy Shaders/Transparent/Bumped Diffuse",\r\n  "Legacy Shaders/Transparent/Bumped Specular",\r\n  "Legacy Shaders/Transparent/Cutout/Bumped Diffuse",\r\n  "Legacy Shaders/Transparent/Cutout/Bumped Specular",\r\n  "Legacy Shaders/Transparent/Cutout/Diffuse",\r\n  "Legacy Shaders/Transparent/Cutout/Soft Edge Unlit",\r\n  "Legacy Shaders/Transparent/Cutout/Specular",\r\n  "Legacy Shaders/Transparent/Cutout/VertexLit",\r\n  "Legacy Shaders/Transparent/Diffuse",\r\n  "Legacy Shaders/Transparent/Parallax Diffuse",\r\n  "Legacy Shaders/Transparent/Parallax Specular",\r\n  "Legacy Shaders/Transparent/Specular",\r\n  "Legacy Shaders/Transparent/VertexLit",\r\n  "Legacy Shaders/VertexLit",\r\n  "MatCap/Vertex/Textured Lit",\r\n  "Mobile/Bumped Diffuse",\r\n  "Mobile/Bumped Specular",\r\n  "Mobile/Bumped Specular (1 Directional Light)",\r\n  "Mobile/Diffuse",\r\n  "Mobile/Unlit (Supports Lightmap)",\r\n  "Mobile/Particles/Additive",\r\n  "Mobile/Particles/Alpha Blended",\r\n  "Mobile/Particles/Multiply",\r\n  "Mobile/Particles/VertexLit Blended",\r\n  "Particles/~Additive-Multiply",\r\n  "Particles/Additive",\r\n  "Particles/Additive (Soft)",\r\n  "Particles/Alpha Blended",\r\n  "Particles/Alpha Blended Premultiply",\r\n  "Particles/Anim Alpha Blended",\r\n  "Particles/Multiply",\r\n  "Particles/Multiply (Double)",\r\n  "Particles/VertexLit Blended",\r\n  "Sprites/Default",\r\n  "Sprites/Diffuse",\r\n  "Toon/Lit",\r\n  "Toon/Lit (Double)",\r\n  "Toon/Lit Cutout",\r\n  "Toon/Lit Cutout (Double)",\r\n  "Toon/Lit Outline",\r\n  "UI/Default",\r\n  "Unlit/FailShader",\r\n  "VRChat/UI/Default"\n'})}),"\n",(0,n.jsx)(a.p,{children:"If an internal shader is matched, the fallback is a new shader of the same type, but using the internally compiled shader. All the parameters are copied. New versions or variants not included will not work, since they will be replaced."}),"\n",(0,n.jsx)(a.p,{children:"If the shader is not internally matched, The name of the shader (not the filename, but as provided in the top line of the shader source) is used to match some identifying features and replace with a fallback shader of similar type:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-text",metastring:'title="Fallback Shader Name Searches"',children:'  "Unlit",\r\n  "VertexLit",\r\n  "Toon",\r\n  "Outline",\r\n  "Transparent",\r\n  "Fade",\r\n  "Cutout",\r\n  "Particle",\r\n  "Sprite",\r\n  "MatCap"\n'})}),"\n",(0,n.jsx)(a.p,{children:"These names can fall anywhere within the full string of the shader name."}),"\n",(0,n.jsx)(a.p,{children:"Additionally, some shader properties are searched:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-text",metastring:'title="Shader Properties"',children:'"_Ramp" == "Toon"\r\n"_ALPHABLEND_ON" == "Transparent"\r\n"_ALPHATEST_ON" == "Cutout"\n'})}),"\n",(0,n.jsx)(a.p,{children:"All matching is case-sensitive."}),"\n",(0,n.jsx)(a.p,{children:'Attempts are made to create fallback material that approximate the matched names. For example, names containing "Sprite" fallback to the Unity built-in "Sprites/Default" shader.'}),"\n",(0,n.jsx)(a.p,{children:'You can combine "Toon" and "Cutout", or "Toon" and "Outline" for combination shaders, however "Transparent" and "Fade" do not currently have a Toon Lit shader and instead fallback to "Unlit/Transparent".'}),"\n",(0,n.jsx)(a.p,{children:'Support for "Outline" is highly experimental and may be removed if performance suffers.'}),"\n",(0,n.jsx)(a.p,{children:'For "Toon" shaders, the "_Ramp" parameter is copied (Texture2D).\r\nFor "MatCap" shaders, the "_MatCap" parameter is copied (Texture2D)'}),"\n",(0,n.jsx)(a.p,{children:"If no matches are found in the shader name, a Standard material is used."}),"\n",(0,n.jsx)(a.p,{children:'An attempt is made to transfer parameters named "_MainTex" and "_Color" to the fallback shader. If neither parameter is matched, a Matcap shader is provided with the color set to the user\'s rank color.'}),"\n",(0,n.jsx)(a.p,{children:"All this is highly subject to change as we tune the shader fallback system."}),"\n",(0,n.jsx)(a.h2,{id:"previewing-fallback-shaders-for-your-avatar",children:"Previewing Fallback Shaders for your Avatar"}),"\n",(0,n.jsx)(a.p,{children:'It\'s possible to force your own avatar to use fallback shaders locally via a toggle in the Action Menu. To activate this option, open your Action Menu and choose "Options" -> "Avatar" -> "Fallback Shaders". Once toggled on, any avatar you use will display locally with fallback shaders. The option will stay active when switching avatars but will reset on world change. This option does not affect how others view your avatar.'})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);