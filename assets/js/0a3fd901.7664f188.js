"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[3481],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(96540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}},65537:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),s=t(18215),a=t(65627),o=t(56347),i=t(50372),l=t(30604),d=t(11861),c=t(78749);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=u(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[d,h]=p({queryString:t,groupId:s}),[g,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,c.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),j=(()=>{const e=d??g;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{j&&l(j)}),[j]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),x(e)}),[h,x,a]),tabValues:a}}var x=t(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function w(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==r&&(d(n),o(s))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{l.push(e)},onKeyDown:h,onClick:c,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,f.jsx)(w,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(n))}},71386:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/string-load-graph-example-17ef8b33de9687dbba923e3abf6bff83.png"},79329:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},81970:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"worlds/examples/image-loading","title":"Image Loading Example","description":"Loading a remote image.","source":"@site/docs/worlds/examples/image-loading.md","sourceDirName":"worlds/examples","slug":"/worlds/examples/image-loading","permalink":"/creator-docs_ja/worlds/examples/image-loading","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1730330971000,"frontMatter":{"description":"Loading a remote image.","sidebar_custom_props":{"customIcon":"\ud83d\uddbc\ufe0f"}},"sidebar":"tutorialSidebar","previous":{"title":"Detect Controller Collide","permalink":"/creator-docs_ja/worlds/examples/detect-controller-collide"},"next":{"title":"MIDI Playback","permalink":"/creator-docs_ja/worlds/examples/midi-playback"}}');var s=t(74848),a=t(28453),o=t(65537),i=t(79329);const l={description:"Loading a remote image.",sidebar_custom_props:{customIcon:"\ud83d\uddbc\ufe0f"}},d="Image Loading Example",c={},h=[{value:"Example World",id:"example-world",level:2},{value:"Using the Prefab in Your World",id:"using-the-prefab-in-your-world",level:2},{value:"Testing it Out",id:"testing-it-out",level:4},{value:"Important GameObjects",id:"important-gameobjects",level:2},{value:"TheFrame",id:"theframe",level:3},{value:"SlideshowFrame",id:"slideshowframe",level:3},{value:"Creating an Image Downloader",id:"creating-an-image-downloader",level:2},{value:"Using the <code>ImageDownload</code> script to download an image",id:"using-the-imagedownload-script-to-download-an-image",level:3},{value:"Create your own script for <code>VRCImageDownloader</code>",id:"create-your-own-script-for-vrcimagedownloader",level:3},{value:"The basic logic flow of the script is:",id:"the-basic-logic-flow-of-the-script-is",level:4},{value:"Known Issues",id:"known-issues",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"image-loading-example",children:"Image Loading Example"})}),"\n","\n",(0,s.jsxs)("video",{loop:"loop",autoplay:"autoplay",muted:!0,children:[(0,s.jsx)("source",{src:"/img/worlds/image-loader.mp4",type:"video/mp4"}),(0,s.jsx)(n.p,{children:"Your browser does not support the video tag."})]}),"\n",(0,s.jsx)(n.p,{children:"Udon can load images from the internet and display them as UI elements or as textures on world objects. Our example world below demonstrates how the system works and how to use GitHub to host the images and captions."}),"\n",(0,s.jsx)(n.h2,{id:"example-world",children:"Example World"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/vrchat-community/examples-image-loading/archive/refs/heads/main.zip",children:"Download the example project"})," or ",(0,s.jsx)(n.a,{href:"https://github.com/vrchat-community/examples-image-loading",children:"visit the GitHub repo"})," to clone it for yourself."]}),"\n",(0,s.jsx)(n.p,{children:"This scene has a picture frame that automatically changes to show different images with matching captions. The images and captions are both hosted for free on GitHub Pages and are included in the GitHub repository above."}),"\n",(0,s.jsxs)(n.p,{children:["Scene File: ",(0,s.jsx)(n.code,{children:"Assets/_Project/Gallery"})]}),"\n",(0,s.jsx)(n.h2,{id:"using-the-prefab-in-your-world",children:"Using the Prefab in Your World"}),"\n",(0,s.jsx)(n.p,{children:"To use the prefab, you'll need to add it to your project and set up the image caption URLs."}),"\n",(0,s.jsxs)(n.p,{children:["This repo publishes to ",(0,s.jsx)(n.a,{href:"https://pages.github.com/",children:"GitHub Pages"})," for free hosting. You can host the images and captions anywhere you want, but we recommend using GitHub Pages because it's free, easy to set up, and you can keep the images and captions in the same repository as your world. If you're hosting them elsewhere, skip to step 4."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/vrchat-community/examples-image-loading/fork",children:"Fork the example repo"})," to your own GitHub account."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['Edit the images and captions in the "Web" directory. You can ignore or delete the ',(0,s.jsx)(n.code,{children:"index.html"})," page, it's just there as an example to test the images and captions in a browser. You can keep the images named 1.jpg, etc to make it easier to use the prefab, or rename them and update the prefab URLs."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:['When the files in the "Web" directory are edited, the website is re-published. As long as the filenames stay the same (images are 1.jpg, 2.jpg, etc.), the URLs in the world will point to the newly published files. Republishing happens automatically through ',(0,s.jsx)(n.a,{href:"https://github.com/vrchat-community/examples-image-loading/actions/workflows/static.yml",children:"an included GitHub Action"}),"."]})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Clone the repo to your computer."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Make sure your project has SDK 3.2.3 or newer as well as ClientSim and UdonSharp, which you can easily add through the ",(0,s.jsx)(n.a,{href:"https://vcc.docs.vrchat.com/",children:"Creator Companion"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Import the ",(0,s.jsx)(n.a,{href:"https://github.com/vrchat-community/examples-image-loading/releases/download/0.2.0/SlideshowFrame.unitypackage",children:"Prefab Unitypackage"})," into your project."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Drag the ",(0,s.jsx)(n.strong,{children:"SlideshowFrame"})," prefab into your scene."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the ",(0,s.jsx)(n.strong,{children:"SlideshowFrame"})," in your scene's Inspector."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"SlideshowFrame"})," component, set the ",(0,s.jsx)(n.strong,{children:"Image Urls"})," array size to match the number of images you want to load, then update the URLs to match your image URLs. If you're using GitHub Pages, the URLs will be in the format ",(0,s.jsx)(n.code,{children:"https://<your-github-username>.github.io/<your-repo-name>/1.jpg"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Update the ",(0,s.jsx)(n.strong,{children:"String Url"})," to match your caption URL. If you're using GitHub Pages, the URL will be in the format ",(0,s.jsx)(n.code,{children:"https://<your-github-username>.github.io/<your-repo-name>/captions.csv"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"testing-it-out",children:"Testing it Out"}),"\n",(0,s.jsx)(n.p,{children:"If you're using GitHub to host the images and captions, make sure you've committed and pushed your changes to GitHub, which will trigger the GitHub Action to publish the files to GitHub Pages."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Enter Play Mode in Unity."}),"\n",(0,s.jsx)(n.li,{children:"The images and captions should load automatically. If they don't, check the Console for errors."}),"\n",(0,s.jsx)(n.li,{children:'Run a Build and Test to make sure it works in VRChat as well. You may need to turn on "Untrusted URLs" in your settings.'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"important-gameobjects",children:"Important GameObjects"}),"\n",(0,s.jsxs)(n.p,{children:["The most important objects to inspect in the scene are ",(0,s.jsx)(n.a,{href:"#theframe",children:"TheFrame"})," and ",(0,s.jsx)(n.a,{href:"#slideshowframe",children:"SlideshowFrame"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/737888/219288603-2fc2753b-27a1-4f61-ad22-a51df527907d.png",alt:"image"})}),"\n",(0,s.jsx)(n.h3,{id:"theframe",children:"TheFrame"}),"\n",(0,s.jsx)(n.p,{children:"TheFrame is a GameObject with a couple of important pieces:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SlideshowFrame"}),": an ",(0,s.jsx)(n.code,{children:"UdonBehaviour"})," which loads the images and captions from the web server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mesh"}),": Is the black frame around the picture."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Picture"}),": Is a ",(0,s.jsx)(n.code,{children:"Mesh"})," which renders the downloaded textures."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UI"}),": Is a World-Space ",(0,s.jsx)(n.code,{children:"Canvas"})," which renders the captions."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"slideshowframe",children:"SlideshowFrame"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"SlideshowFrame"})," ",(0,s.jsx)(n.code,{children:"UdonBehaviour"})," has all of the logic to download the images and captions from the web server."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/737888/219288738-ace09705-18d4-4f8e-bb45-792ff662bf7b.png",alt:"image"})}),"\n",(0,s.jsx)(n.p,{children:"It has these public variables:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Image Urls"}),": An ",(0,s.jsx)(n.code,{children:"Array"})," of all the ",(0,s.jsx)(n.code,{children:"VRCUrls"})," for the images to download."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"String Url"}),": Is a single ",(0,s.jsx)(n.code,{children:"VRCUrl"})," where the caption text can be downloaded."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Renderer"}),": This target ",(0,s.jsx)(n.code,{children:"Renderer's"})," ",(0,s.jsx)(n.strong,{children:"sharedMaterial"})," will have its texture set from the downloaded textures."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Field"}),": This ",(0,s.jsx)(n.code,{children:"UI Element's"})," ",(0,s.jsx)(n.strong,{children:"text"})," property will be set from the downloaded caption for the matching texture."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Slide Duration Seconds"}),": How long to show each image."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The basic logic flow of the script is this:"}),"\n",(0,s.jsx)(n.h2,{id:"creating-an-image-downloader",children:"Creating an Image Downloader"}),"\n",(0,s.jsxs)(n.h3,{id:"using-the-imagedownload-script-to-download-an-image",children:["Using the ",(0,s.jsx)(n.code,{children:"ImageDownload"})," script to download an image"]}),"\n",(0,s.jsx)(n.p,{children:"The SDK includes a script to easily download images:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a new GameObject in your scene."}),"\n",(0,s.jsx)(n.li,{children:"Add an UdonBehaviour component."}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.code,{children:"ImageDownload"})," as the program source."]}),"\n",(0,s.jsx)(n.li,{children:"Select a Material to apply the downloaded texture to"}),"\n",(0,s.jsxs)(n.li,{children:["(Optional) Customize ",(0,s.jsx)(n.code,{children:"TextureInfo"})," to change the downloaded texture's settings."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"create-your-own-script-for-vrcimagedownloader",children:["Create your own script for ",(0,s.jsx)(n.code,{children:"VRCImageDownloader"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"VRCImageDownloader"})," in your own Udon Graph scripts."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a new ",(0,s.jsx)(n.code,{children:"VRCImageDownloader"})," object with its Constructor node."]}),"\n",(0,s.jsxs)(n.li,{children:["Save the newly created ",(0,s.jsx)(n.code,{children:"VRCImageDownloader"})," as a variable. (This ",(0,s.jsx)(n.strong,{children:"required"}),".)"]}),"\n",(0,s.jsxs)(n.li,{children:["Execute the ",(0,s.jsx)(n.code,{children:"DownloadImage"})," function on the ",(0,s.jsx)(n.code,{children:"VRCImageDownloader"})," instance."]}),"\n",(0,s.jsxs)(n.li,{children:["(Optional) Wait for the ",(0,s.jsx)(n.code,{children:"OnImageLoadSuccess"})," or ",(0,s.jsx)(n.code,{children:"OnImageLoadError"})," event to execute."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"the-basic-logic-flow-of-the-script-is",children:"The basic logic flow of the script is:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["On Start, construct a ",(0,s.jsx)(n.code,{children:"VRCImageDownloader"})," to reuse for downloading all the images. It's important to keep this around so the textures will persist."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"// It's important to store the VRCImageDownloader as a variable, to stop it from being garbage collected!\r\n_imageDownloader = new VRCImageDownloader();\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Download the captions/strings from the ",(0,s.jsx)(n.code,{children:"String Url"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If the String downloads successfully, split it up line-by-line into separate strings, and save those to a ",(0,s.jsx)(n.code,{children:"_captions"})," array. If it doesn't download, log the error message."]}),"\n",(0,s.jsxs)(o.A,{groupId:"udon-compiler-language",children:[(0,s.jsx)(i.A,{value:"graph",label:"Udon Graph",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"An example of how to use image loading in the Udon Graph. The Udon Graph can&#39;t use newline characters directly, so an integer conversion to a character is used instead.",src:t(71386).A+"",width:"2178",height:"824"})})}),(0,s.jsx)(i.A,{value:"cs",label:"UdonSharp",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"private void Start()\r\n{\r\n    // To receive Image and String loading events, 'this' is casted to the type needed\r\n    _udonEventReceiver = (IUdonEventReceiver)this;\r\n        \r\n    // Captions are downloaded once. On success, OnImageLoadSuccess() will be called.\r\n    VRCStringDownloader.LoadUrl(stringUrl, _udonEventReceiver);\r\n}\r\n\r\npublic override void OnStringLoadSuccess(IVRCStringDownload result)\r\n{\r\n    _captions = result.Result.Split('\\n');\r\n    UpdateCaptionText();\r\n}\r\n\r\npublic override void OnStringLoadError(IVRCStringDownload result)\r\n{\r\n    Debug.LogError($\"Could not load string {result.Error}\");\r\n}\n"})})})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Try to Load the next Image. Increment the ",(0,s.jsx)(n.code,{children:"_loadedIndex"})," to keep track of our place, then call ",(0,s.jsx)(n.code,{children:"DownloadImage()"})," on the downloader we saved earlier."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If the Image downloads successfully, save a reference to it and then load it up on the ",(0,s.jsx)(n.code,{children:"Renderer"}),". If it fails, log the error message."]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Call the function to Load the next Image again, delayed by ",(0,s.jsx)(n.code,{children:"SlideDurationSeconds"}),". The ",(0,s.jsx)(n.code,{children:"_loadedIndex"})," is incremented during each Load call, and starts over after reaching the last url in the array."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"When each image is visited for the second+ time, it will be displayed from its saved Texture2D reference instead of loaded fresh, unless it failed to download the first time."}),"\n",(0,s.jsx)(n.admonition,{title:"Source Code",type:"tip",children:(0,s.jsxs)(n.p,{children:["View the full source code for ",(0,s.jsx)(n.a,{href:"https://github.com/vrchat-community/examples-image-loading/blob/main/Assets/_Project/Frame/SlideshowFrame.cs",children:"SlideshowFrame.cs on GitHub"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The first image doesn't have its caption loaded quickly enough, so it doesn't show until the first loop around."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Udon",type:"tip",children:(0,s.jsxs)(n.p,{children:["View the ",(0,s.jsx)(n.a,{href:"/worlds/udon/image-loading",children:"main Image Loading docs page"})," for full details on the Image Loading system, including domain and file limits."]})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);