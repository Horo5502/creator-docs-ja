"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[3675],{28453:(e,a,t)=>{t.d(a,{R:()=>n,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function n(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(i.Provider,{value:a},e.children)}},28741:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>u,default:()=>v,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"worlds/udon/players/player-audio","title":"Player Audio","description":"Players have two sources of audio","source":"@site/docs/worlds/udon/players/player-audio.md","sourceDirName":"worlds/udon/players","slug":"/worlds/udon/players/player-audio","permalink":"/creator-docs_ja/worlds/udon/players/player-audio","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1722644343000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Getting Players","permalink":"/creator-docs_ja/worlds/udon/players/getting-players"},"next":{"title":"Player Avatar Scaling","permalink":"/creator-docs_ja/worlds/udon/players/player-avatar-scaling"}}');var s=t(74848),i=t(28453),n=t(65537),o=t(79329);const l={},u="Player Audio",c={},d=[{value:"Voice",id:"voice",level:2},{value:"Set Voice Gain",id:"set-voice-gain",level:3},{value:"Set Voice Distance Near",id:"set-voice-distance-near",level:3},{value:"Set Voice Distance Far",id:"set-voice-distance-far",level:3},{value:"Set Voice Volumetric Radius",id:"set-voice-volumetric-radius",level:3},{value:"Set Voice Lowpass",id:"set-voice-lowpass",level:3},{value:"Avatar",id:"avatar",level:2},{value:"SetAvatarAudioGain",id:"setavataraudiogain",level:3},{value:"SetAvatarAudioFarRadius",id:"setavataraudiofarradius",level:3},{value:"SetAvatarAudioNearRadius",id:"setavataraudionearradius",level:3},{value:"SetAvatarAudioVolumetricRadius",id:"setavataraudiovolumetricradius",level:3},{value:"SetAvatarAudioForceSpatial",id:"setavataraudioforcespatial",level:3},{value:"SetAvatarAudioCustomCurve",id:"setavataraudiocustomcurve",level:3}];function h(e){const a={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"player-audio",children:"Player Audio"})}),"\n","\n",(0,s.jsxs)(a.p,{children:["Players have two sources of audio: the voice coming through their microphone, and sounds attached to their Avatar. With Udon, you can change how a Player hears ",(0,s.jsx)(a.em,{children:"other"})," players' voices and avatar sounds. For example, this code makes a player quieter by setting their gain to 5 dB (which is lower than the default of 15 dB):"]}),"\n",(0,s.jsxs)(n.A,{groupId:"udon-compiler-language",children:[(0,s.jsx)(o.A,{value:"graph",label:"Udon Graph",children:(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Setting the player&#39;s voice gain in Udon Graph.",src:t(90863).A+"",width:"347",height:"169"})})}),(0,s.jsx)(o.A,{value:"cs",label:"UdonSharp",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-cs",children:"somePlayer.SetVoiceGain(15);\n"})})})]}),"\n",(0,s.jsx)(a.p,{children:"Here are all the properties you can access:"}),"\n",(0,s.jsx)(a.h2,{id:"voice",children:"Voice"}),"\n",(0,s.jsx)(a.h3,{id:"set-voice-gain",children:"Set Voice Gain"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.em,{children:"in Decibels, Range 0-24"}),"\r\nAdd boost to the Player's voice in decibels. Default is 15."]}),"\n",(0,s.jsx)(a.h3,{id:"set-voice-distance-near",children:"Set Voice Distance Near"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.em,{children:"in Meters, Range 0 - 1,000,000"}),"\r\nThe near radius, in meters, where volume begins to fall off. It is strongly recommended to leave the Near value at zero for realism and effective spatialization for user voices."]}),"\n",(0,s.jsx)(a.h3,{id:"set-voice-distance-far",children:"Set Voice Distance Far"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.em,{children:"in Meters, Range is 0 - 1,000,000"}),"\r\nThis sets the end of the range for hearing the user's voice. Default is 25 meters. You can lower this to make another player's voice not travel as far, all the way to 0 to effectively 'mute' the player."]}),"\n",(0,s.jsx)(a.h3,{id:"set-voice-volumetric-radius",children:"Set Voice Volumetric Radius"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.em,{children:"in Meters, Range is 0 -1,000"}),'\r\nDefault is 0.\r\nA player\'s voice is normally simulated to be a point source, however changing this value allows the source to appear to come from a larger area. This should be used carefully, and is mainly for distant audio sources that need to sound "large" as you move past them. ',(0,s.jsx)(a.strong,{children:"Keep this at zero unless you know what you're doing."})," The value for Volumetric Radius should always be lower than Voice Distance Far."]}),"\n",(0,s.jsx)(a.p,{children:"If you want a user's voice to sound like it is close no matter how far it is, increase the Voice Distance Near range to a large value."}),"\n",(0,s.jsx)(a.h3,{id:"set-voice-lowpass",children:"Set Voice Lowpass"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.em,{children:"On/Off"}),"\r\nWhen a voice is some distance off, it is passed through a low-pass filter to help with understanding noisy worlds. You can disable this if you want to skip this filter. For example, if you intend for a player to use their voice channel to play a high-quality DJ mix, turning this filter off is advisable."]}),"\n",(0,s.jsx)(a.h2,{id:"avatar",children:"Avatar"}),"\n",(0,s.jsx)(a.h3,{id:"setavataraudiogain",children:"SetAvatarAudioGain"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.em,{children:"in Decibels, Range 0-10"}),"\r\nSet the Maximum Gain allowed on Avatar Audio. Default is 10."]}),"\n",(0,s.jsx)(a.h3,{id:"setavataraudiofarradius",children:"SetAvatarAudioFarRadius"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.em,{children:"in Meters, Range is not limited"}),"\r\nThis sets the maximum end of the range for hearing the avatar's audio. Default is 40 meters. You can lower this to make another player's avatar audio not travel as far, all the way to 0 to effectively 'mute' the player. Note that this is compared to the audio source's maxDistance, and the smaller value is used."]}),"\n",(0,s.jsx)(a.h3,{id:"setavataraudionearradius",children:"SetAvatarAudioNearRadius"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.em,{children:"in Meters, Range is not limited"}),"\r\nThis sets the maximum start of the range for hearing the avatar's audio. Default is 0 meters. Increasing this value makes the avatar audio sources reach their maximum volume from a further distance. Note that this is compared to the audio source's maxDistance, and the smaller value is used."]}),"\n",(0,s.jsx)(a.h3,{id:"setavataraudiovolumetricradius",children:"SetAvatarAudioVolumetricRadius"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.em,{children:"in Meters, Range is not limited"}),"\r\nAn avatar's audio source is normally simulated to be a point source, however changing this value allows the source to appear to come from a larger area. This should be used carefully, and is mainly for distant audio sources that need to sound \"large\" as you move past them. Keep this at zero unless you know what you're doing. The value for Volumetric Radius should always be lower than Avatar AudioFarRadius. Default is 0 meters."]}),"\n",(0,s.jsx)(a.h3,{id:"setavataraudioforcespatial",children:"SetAvatarAudioForceSpatial"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.em,{children:"On/Off"}),"\r\nIf this is on, then Spatialization is enabled for the source, and the spatialBlend is set to 1. Default is Off."]}),"\n",(0,s.jsx)(a.h3,{id:"setavataraudiocustomcurve",children:"SetAvatarAudioCustomCurve"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.em,{children:"On/Off"}),"\r\nThis sets whether the audio source should use a pre-configured custom curve. Default is Off."]})]})}function v(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},65537:(e,a,t)=>{t.d(a,{A:()=>j});var r=t(96540),s=t(18215),i=t(65627),n=t(56347),o=t(50372),l=t(30604),u=t(11861),c=t(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:s}}=e;return{value:a,label:t,attributes:r,default:s}}))}(t);return function(e){const a=(0,u.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function v(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function A(e){let{queryString:a=!1,groupId:t}=e;const s=(0,n.W6)(),i=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(s.location.search);a.set(i,e),s.replace({...s.location,search:a.toString()})}),[i,s])]}function g(e){const{defaultValue:a,queryString:t=!1,groupId:s}=e,i=h(e),[n,l]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!v({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:i}))),[u,d]=A({queryString:t,groupId:s}),[g,m]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,i]=(0,c.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),p=(()=>{const e=u??g;return v({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{p&&l(p)}),[p]);return{selectedValue:n,selectValue:(0,r.useCallback)((e=>{if(!v({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=t(9136);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function w(e){let{className:a,block:t,selectedValue:r,selectValue:n,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const a=e.currentTarget,t=l.indexOf(a),s=o[t].value;s!==r&&(u(a),n(s))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;a=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;a=l[t]??l[l.length-1];break}}a?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},a),children:o.map((e=>{let{value:a,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...i,className:(0,s.A)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":r===a}),children:t??a},a)}))})}function x(e){let{lazy:a,children:t,selectedValue:i}=e;const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=n.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:n.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==i})))})}function I(e){const a=g(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",p.tabList),children:[(0,f.jsx)(w,{...a,...e}),(0,f.jsx)(x,{...a,...e})]})}function j(e){const a=(0,m.A)();return(0,f.jsx)(I,{...e,children:d(e.children)},String(a))}},79329:(e,a,t)=>{t.d(a,{A:()=>n});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function n(e){let{children:a,hidden:t,className:n}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,n),hidden:t,children:a})}},90863:(e,a,t)=>{t.d(a,{A:()=>r});const r="data:image/png;base64,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"}}]);