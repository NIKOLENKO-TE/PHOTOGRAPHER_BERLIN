"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[94],{5094:(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var l=t(5043),n=t(4117),r=t(6279),i=t(2311),a=t(5405),d=t(372),o=t(5048),c=t(9083),u=t(1769),p=t(579);const m=(0,l.forwardRef)(((e,s)=>{const{t:t}=(0,n.Bd)("Weddings"),[m]=(0,l.useState)(0),[x]=(0,l.useState)(0),h=(0,l.useRef)(null),v=(0,l.useRef)(null),w=(0,l.useMemo)((()=>r.bw.map((e=>null===e||void 0===e?void 0:e.img)).filter((e=>void 0!==e))),[]),f=(0,l.useMemo)((()=>r.k3.map((e=>null===e||void 0===e?void 0:e.img)).filter((e=>void 0!==e))),[]),g=(0,l.useCallback)((e=>{h.current&&h.current.go(e)}),[]),j=(0,l.useCallback)((e=>{v.current&&v.current.go(e)}),[]);return(0,p.jsx)("div",{ref:s,children:(0,p.jsxs)(o.A,{id:"category0","data-testid":"weddings-wrapper",children:[(0,p.jsx)(d.A,{text:t("weddings"),"data-testid":"weddings_title"}),(0,p.jsxs)("div",{className:"flex ssm:flex-wrap md:flex-nowrap ",children:[(0,p.jsxs)("div",{id:"Vertical",className:"ssm:basis-1/1 sm:basis-1/3 md:basis-1/4 pr-2 ssm:pb-2 sm:pb-0 md:pb-0",children:[(0,p.jsx)(a.A,{photos:f,selectedSlide:x,setSplideInstance:e=>v.current=e,autoplay:!1}),(0,p.jsx)(u.A,{photos:f,selectedSlide:x,onPreviewClick:j,getPerPageValue:a.S})]}),(0,p.jsxs)("div",{id:"Horizontal",className:"ssm:basis-1/1 sm:basis-2/3 md:basis-3/4 lg:pt-0",children:[(0,p.jsx)(i.A,{photos:w,selectedSlide:m,setSplideInstance:e=>h.current=e,autoplay:!1}),(0,p.jsx)(c.A,{photos:w,selectedSlide:m,onPreviewClick:g,getPerPageValue:i.k})]})]})]})})}))},2311:(e,s,t)=>{t.d(s,{A:()=>d,k:()=>a});var l=t(5043),n=t(585),r=t(4812),i=t(579);const a=()=>window.innerWidth<640?2:window.innerWidth<768?3:window.innerWidth<1024?4:window.innerWidth<1280?5:6,d=e=>{let{photos:s,selectedSlide:t,setSplideInstance:a,autoplay:d=!0}=e;const o=(0,l.useRef)(null),[c,u]=(0,l.useState)(Array(s.length).fill(!0));(0,l.useEffect)((()=>{if(o.current){const e=new n.eB(o.current,{type:"slide",perPage:1,perMove:1,rewind:!0,arrows:!0,focus:"center",pagination:!0,autoplay:d,interval:4e3});return a(e),e.on("mounted",(()=>{e.go(t)})),e.mount(),()=>{e.destroy()}}}),[t,a,d]);const p="ssm:h-[440px] lg:h-[600px] xl:h-[700px] w-full object-cover rounded-lg";return(0,i.jsx)("section",{id:"horizontal_thumbnail_carousel",ref:o,className:"splide pb-2 pt-0.5",children:(0,i.jsx)("div",{className:"splide__track rounded-2xl",children:(0,i.jsx)("ul",{className:"splide__list",children:s.map(((e,s)=>(0,i.jsxs)("li",{className:"splide__slide",onContextMenu:e=>e.preventDefault(),children:[c[s]&&(0,i.jsx)(r.A,{className:p}),(0,i.jsx)("img",{className:`duration-300 ease-out ${p} ${c[s]?"hidden":""}`,src:e,alt:`Slide ${s}`,onLoad:()=>{return e=s,void u((s=>{const t=[...s];return t[e]=!1,t}));var e}})]},s)))})})})}},9083:(e,s,t)=>{t.d(s,{A:()=>a});var l=t(5043),n=t(585),r=t(4812),i=t(579);const a=e=>{let{photos:s,selectedSlide:t,onPreviewClick:a,getPerPageValue:d}=e;const o=(0,l.useRef)(null),[c,u]=(0,l.useState)(Array(s.length).fill(!0));(0,l.useEffect)((()=>{if(o.current){const e=new n.eB(o.current,{type:"slide",perPage:d(),gap:5,rewind:!0,pagination:!1,focus:"center"});e.on("mounted",(()=>{o.current.querySelectorAll(".splide__slide").forEach(((e,s)=>{e.addEventListener("click",(()=>{a(s)}))}))})),e.mount();const s=()=>{const s=d();e.go(t),e.options.perPage=s,e.refresh()};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s),e.destroy()}}}),[t,d,a]);const p="h-[100px] w-full object-cover rounded-2xl";return(0,i.jsx)("section",{id:"thumbnail_carousel_preview",ref:o,className:"splide",children:(0,i.jsx)("div",{className:"splide__track",children:(0,i.jsx)("ul",{className:"splide__list",children:s.map(((e,s)=>(0,i.jsxs)("li",{className:"splide__slide",onClick:()=>a(s),onContextMenu:e=>e.preventDefault(),children:[c[s]&&(0,i.jsx)(r.A,{className:p}),(0,i.jsx)("img",{className:`duration-300 ease-out ${p} ${c[s]?"hidden":""}`,src:e,alt:`Preview ${s}`,onLoad:()=>{return e=s,void u((s=>{const t=[...s];return t[e]=!1,t}));var e}})]},s)))})})})}},4812:(e,s,t)=>{t.d(s,{A:()=>n});t(5043);var l=t(579);const n=e=>{let{className:s}=e;return(0,l.jsx)("div",{className:`animate-pulse bg-gray-300 ${s}`})}},372:(e,s,t)=>{t.d(s,{A:()=>n});t(5043);var l=t(579);const n=e=>{let{text:s}=e;return(0,l.jsx)("h3",{className:"flex justify-center mb-1 uppercase",children:(0,l.jsx)("span",{className:"w-full justify-center ssm:py-2 sm:py-[0px] ssm:h-[29px] sm:h-[31px] md:h-[38px] flex text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-blue-600 shadow-lg shadow-blue-500/50 ssm:rounded-[12px] md:rounded-[15px]",children:(0,l.jsx)("span",{className:"text-white ssm:text-[22px] md:text-[26px] xl:text-[30px] ssm:-mt-[11px] sm:-mt-0.5 md:-mt-0.5 lg:-mt-0.5 xl:-mt-[4px] mx-4",children:s})})})}},5405:(e,s,t)=>{t.d(s,{A:()=>d,S:()=>a});var l=t(5043),n=t(585),r=t(4812),i=t(579);const a=()=>window.innerWidth<640?3:window.innerWidth<768||window.innerWidth<1024||window.innerWidth<1280?2:3,d=e=>{let{photos:s,selectedSlide:t,setSplideInstance:a,autoplay:d=!0}=e;const o=(0,l.useRef)(null),[c,u]=(0,l.useState)(Array(s.length).fill(!0));(0,l.useEffect)((()=>{if(o.current){const e=new n.eB(o.current,{type:"slide",perPage:1,perMove:1,gap:10,rewind:!0,arrows:!0,focus:"center",autoplay:d,interval:3e3});return a(e),e.on("mounted",(()=>{e.go(t)})),e.mount(),()=>{e.destroy()}}}),[t,a,d]);const p="ssm:h-full sm:h-[380px] md:h-[385px] lg:h-[500px] xl:h-[600px] w-full rounded-lg";return(0,i.jsx)("section",{id:"vertical_thumbnail_carousel",ref:o,className:"splide pb-2 pt-0.5 ssm:-mr-2 sm:mr-0",children:(0,i.jsx)("div",{className:"splide__track rounded-2xl",children:(0,i.jsx)("ul",{className:"splide__list",children:s.map(((e,s)=>(0,i.jsxs)("li",{className:"splide__slide",onContextMenu:e=>e.preventDefault(),children:[c[s]&&(0,i.jsx)(r.A,{className:p}),(0,i.jsx)("img",{className:`object-cover duration-300 ease-out ${p}  ${c[s]?"hidden":""}`,src:e,alt:`Slide ${s}`,onLoad:()=>{return e=s,void u((s=>{const t=[...s];return t[e]=!1,t}));var e}})]},s)))})})})}},1769:(e,s,t)=>{t.d(s,{A:()=>a});var l=t(5043),n=t(585),r=t(4812),i=t(579);const a=e=>{let{photos:s,selectedSlide:t,onPreviewClick:a,getPerPageValue:d}=e;const o=(0,l.useRef)(null),[c,u]=(0,l.useState)(Array(s.length).fill(!0));(0,l.useEffect)((()=>{if(o.current){const e=new n.eB(o.current,{type:"slide",perPage:d(),gap:5,rewind:!0,pagination:!1,focus:"center"});e.on("mounted",(()=>{o.current.querySelectorAll(".splide__slide").forEach(((e,s)=>{e.addEventListener("click",(()=>{a(s)}))}))})),e.mount();const s=()=>{const s=d();e.go(t),e.options.perPage=s,e.refresh()};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s),e.destroy()}}}),[t,d,a]);const p="ssm:h-[200px] sm:h-[160px] md:h-[155px] lg:h-[200px] w-full object-cover rounded-2xl";return(0,i.jsx)("section",{id:"vertical_thumbnail_carousel_preview",ref:o,className:"splide ssm:-mr-2 sm:mr-0",children:(0,i.jsx)("div",{className:"splide__track",children:(0,i.jsx)("ul",{className:"splide__list",children:s.map(((e,s)=>(0,i.jsxs)("li",{className:"splide__slide",onClick:()=>a(s),onContextMenu:e=>e.preventDefault(),children:[c[s]&&(0,i.jsx)(r.A,{className:p}),(0,i.jsx)("img",{className:`duration-300 ease-out ${p} ${c[s]?"hidden":""}`,src:e,alt:`Preview ${s}`,onLoad:()=>{return e=s,void u((s=>{const t=[...s];return t[e]=!1,t}));var e}})]},s)))})})})}}}]);
//# sourceMappingURL=94.b66b93f6.chunk.js.map