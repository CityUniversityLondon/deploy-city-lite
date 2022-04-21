(()=>{"use strict";var e,t={5545:(e,t,a)=>{a(4916);const i={launchFn:function(){},launchQuery:".accordion"};a(3948),a(5306);function n(e,t,a){const i=a?(n=t,e=>e.indexOf(n)<0):(e=>t=>t!==e)(t);var n;e.className=e.className.split(/\s+/).filter((e=>i(e))).join(" ")}function r(e){const t={};return e.substr(1).split("&").forEach((e=>{const[a,i]=e.split("=");t[a]=i})),t}const d=Object.freeze({activeDescendant:"aria-activedescendant",atomic:"aria-atomic",autoComplete:"aria-autocomplete",busy:"aria-busy",checked:"aria-checked",colCount:"aria-colcount",colIndex:"aria-colindex",colSpan:"aria-colspan",controls:"aria-controls",current:"aria-current",describedBy:"aria-describedby",details:"aria-details",disabled:"aria-disabled",dropEffect:"aria-dropeffect",errorMessage:"aria-errormessage",expanded:"aria-expanded",flowTo:"aria-flowto",grabbed:"aria-grabbed",hasPopup:"aria-haspopup",hidden:"aria-hidden",invalid:"aria-invalid",keyShortcuts:"aria-keyshortcuts",label:"aria-label",labelledBy:"aria-labelledby",level:"aria-level",live:"aria-live",modal:"aria-modal",multiLine:"aria-multiline",multiSelectable:"aria-multiselectable",orientation:"aria-orientation",owns:"aria-owns",placeholder:"aria-placeholder",posInset:"aria-posinset",pressed:"aria-pressed",readOnly:"aria-readonly",relevant:"aria-relevant",required:"aria-required",roleDescription:"aria-roledescription",rowCount:"aria-rowcount",rowIndex:"aria-rowindex",rowSpan:"aria-rowspan",selected:"aria-selected",setSize:"aria-setsize",sort:"aria-sort",valueMax:"aria-valuemax",valueMin:"aria-valuemin",valueNow:"aria-valuenow",valueText:"aria-valuetext"}),s="slider",o="ArrowLeft",l="ArrowRight";function c(e,t){e.addEventListener("mousedown",(function(t){_(t,e)})),e.addEventListener("touchstart",(function(t){_(t,e)})),e.addEventListener("mouseup",(function(a){A(a,e,t)})),e.addEventListener("touchend",(function(a){A(a,e,t)}))}function u(e,t,a,i){let n,r,d;for(n=0;n<e.length;n+=2){let a=document.createElement("li"),i=document.createElement("ul");for(a.appendChild(i),r=0;r<2;r++)if(e[n+r]){i.appendChild(e[n+r]),"0"==e[n+r].getAttribute("data-sliderposition")&&(d=n+r),e[n+r].classList.remove("slide"),e[n+r].removeAttribute("data-sliderposition")}t.appendChild(a)}return h(e=Array.from(t.children),Math.floor((d+i)/2)),t.setAttribute("data-optimised","true"),a&&(e[Math.floor((d+i)/2)].focus(),a.querySelector(".slider__indicator__total").innerText=e.length,a.querySelector(".slider__indicator__current").innerText=Math.floor((d+i)/2)+1,p(t,a)),t.setAttribute("data-count",e.length),e}function p(e,t){const a=t.querySelector(".slider__controls__next"),i=t.querySelector(".slider__controls__prev");e.querySelector('[data-sliderposition="-1"]')?i.removeAttribute("disabled"):i.setAttribute("disabled",!0),e.querySelector('[data-sliderposition="1"]')?a.removeAttribute("disabled"):a.setAttribute("disabled",!0),e.removeAttribute("disabled");const n=e.getAttribute("data-style");let r=Array.from(e.children);n&&1==r.length&&a.removeAttribute("disabled")}function m(e,t,a){let i=Array.from(e.children);const n=e.getAttribute("data-style"),r=e.getAttribute("data-optimised");let d=window.innerWidth;if("responsive"===n&&d<768&&"true"==r)return void function(e,t,a,i){let n,r,d=Array.from(e.children),s=0;for(n=0;n<d.length;n++)"0"==d[n].getAttribute("data-sliderposition")&&(r=n),Array.from(d[n].querySelector("ul").children).forEach(((t,a)=>{e.appendChild(t)})),d[n].remove();d=Array.from(e.children),2*r+(Math.round(a/2)+a)>=d.length&&(s=-1),h(d,2*r+Math.round(a/2)+a+s),e.setAttribute("data-optimised","false"),d[2*r+(Math.round(a/2)+a)+s].focus(),t.querySelector(".slider__indicator__total").innerText=d.length,t.querySelector(".slider__indicator__current").innerText=2*r+(Math.round(a/2)+a+1)+s,e.setAttribute("data-count",d.length),p(e,t)}(e,t,a);if("responsive"===n&&d>=768&&"true"!==r)return void u(i,e,t,a);const s=e.querySelector('[data-sliderposition="0"]'),o=t.querySelector(".slider__indicator__current"),l=t.querySelector(".slider__controls__next"),c=t.querySelector(".slider__controls__prev");if(1===a){const a=s.nextElementSibling;a&&(l.setAttribute("disabled",!0),c.setAttribute("disabled",!0),a.addEventListener("transitionend",(function i(){a.removeEventListener("transitionend",i,!0),a.focus(),p(e,t)}),!0),s.addEventListener("transitionend",(function e(){s.removeEventListener("transitionend",e,!0),s.dataset.hidden=!0,s.dataset.smallhidden=!0}),!0),s.dataset.sliderposition=-1,s.dataset.smallposition=-1,a.dataset.hidden=!1,a.dataset.smallhidden=!1,a.dataset.sliderposition=0,a.dataset.smallposition=0,o.innerText=i.indexOf(a)+1)}else{const a=s.previousElementSibling;a&&(l.setAttribute("disabled",!0),c.setAttribute("disabled",!0),a.addEventListener("transitionend",(function i(){a.removeEventListener("transitionend",i,!0),a.focus(),p(e,t)}),!0),s.addEventListener("transitionend",(function e(){s.removeEventListener("transitionend",e,!0),s.dataset.hidden=!0,s.dataset.smallhidden=!0}),!0),s.dataset.sliderposition=1,s.dataset.smallposition=1,a.dataset.hidden=!1,a.dataset.smallhidden=!1,a.dataset.sliderposition=0,a.dataset.smallposition=0,o.innerText=i.indexOf(a)+1)}}function h(e,t){return e.forEach(((a,i)=>{a.setAttribute("tabindex",-1),a.setAttribute(d.label,`Slide ${i+1} of ${e.length}`),a.classList.add("slide"),i===t?(a.dataset.sliderposition=0,a.dataset.smallposition=0,a.dataset.hidden=!1):i>t?(a.dataset.sliderposition=1,a.dataset.smallposition=1,a.dataset.hidden="true",a.dataset.smallhidden="true"):(a.dataset.sliderposition=-1,a.dataset.smallposition=-1,a.dataset.hidden=!0)})),e}function f(e){let t=Array.from(e.children);const a=document.createElement("nav"),i=document.createElement("button"),r=document.createElement("span"),p=document.createElement("button"),f=document.createElement("span"),b=document.createElement("div"),v=document.createElement("span"),y=document.createElement("span"),g=document.createElement("span"),_=document.createElement("span"),A=document.createElement("span");if(1>=t.length)return void n(e,s,!1);const E=e.getAttribute("data-style");let x=window.innerWidth;"responsive"===E&&x>=768&&(u(t,e),t=Array.from(e.children)),h(t,0),r.appendChild(document.createTextNode("Next slide")),i.appendChild(r),i.setAttribute("type","button"),i.className="slider__controls__next",i.addEventListener("click",(()=>m(e,a,1)),!0),f.appendChild(document.createTextNode("Previous slide")),p.appendChild(f),p.setAttribute("type","button"),p.setAttribute("disabled","true"),p.className="slider__controls__prev",p.addEventListener("click",(()=>m(e,a,-1)),!0),e.addEventListener("keydown",(e=>{switch(e.key){case o:p.click();break;case l:i.click()}}),!0),v.appendChild(document.createTextNode(1)),v.className="slider__indicator__current",_.appendChild(document.createTextNode("/")),_.className="slider__indicator__divider--visible",_.setAttribute(d.hidden,"true"),A.appendChild(document.createTextNode(" of ")),A.className="slider__indicator__divider--sr",g.appendChild(_),g.appendChild(A),g.className="slider__indicator__divider",y.className="slider__indicator__total",y.appendChild(document.createTextNode(t.length)),b.appendChild(v),b.appendChild(g),b.appendChild(y),b.className="slider__indicator",a.appendChild(b),a.appendChild(p),a.appendChild(i),a.className="slider__controls",a.setAttribute(d.label,"Slider navigation"),e.nextElementSibling?e.parentElement.insertBefore(a,e.nextElementSibling):e.parentElement.appendChild(a),c(e,a)}function b(e){const t=Array.from(e.children),a=document.createElement("nav");1>=t.length?n(e,s,!1):(t.forEach(((i,n)=>{i.setAttribute("tabindex",-1),i.setAttribute(d.label,`Slide ${n+1} of ${t.length}`),i.classList.add("slide"),0===n?(i.dataset.sliderposition=0,i.dataset.smallposition=0,i.dataset.hidden=!1):(i.dataset.sliderposition=1,i.dataset.smallposition=1,i.dataset.hidden="true",i.dataset.smallhidden="true");let r=function(e,t){let a=document.createElement(e);return t.map((function(e){"content"===e.label?a.appendChild(document.createTextNode(e.val)):"html"===e.label?a.innerHTML=e.val:a.setAttribute(e.label,e.val)})),a}("button",[{label:"data-page",val:n},{label:"aria-label",val:`Open slide ${n+1}`},{label:"type",val:"button"}]);0===n?(r.setAttribute(d.current,"slide"),r.setAttribute(d.expanded,"true"),r.setAttribute("disabled","true")):r.setAttribute(d.expanded,"false"),r.addEventListener("click",(()=>v(e,a,n)),!0),a.appendChild(r)})),e.addEventListener("keydown",(i=>{const n=e.querySelector('[data-sliderposition="0"]'),r=n.nextElementSibling,d=n.previousElementSibling,s=t.indexOf(n),c=Array.from(a.children);switch(i.key){case o:d&&c[s-1].click();break;case l:r&&c[s+1].click()}}),!0),a.className="slider__controls",a.setAttribute(d.label,"Slider navigation"),e.nextElementSibling?e.parentElement.insertBefore(a,e.nextElementSibling):e.parentElement.appendChild(a),c(e,a))}function v(e,t,a){const i=Array.from(e.children),n=Array.from(t.children);n.forEach(((e,t)=>{e.setAttribute("disabled",!0)})),i.forEach(((t,i)=>{i===a?(t.dataset.sliderposition=0,t.dataset.smallposition=0,t.dataset.hidden=!1,t.addEventListener("transitionend",(function a(){t.removeEventListener("transitionend",a,!0),t.focus(),function(e,t,a){t.forEach(((t,a)=>{a===e?(t.setAttribute("disabled",!0),t.setAttribute("aria-expanded",!0)):(t.removeAttribute("disabled"),t.setAttribute("aria-expanded",!1))})),a.removeAttribute("disabled")}(i,n,e)}),!0)):i>a?(t.dataset.sliderposition=1,t.dataset.smallposition=1,t.dataset.hidden=!0):(t.dataset.sliderposition=-1,t.dataset.smallposition=-1,t.dataset.hidden=!0)}))}let y;function g(e){return e.changedTouches?e.changedTouches[0]:e}function _(e,t){t.getAttribute("disabled")||(y=g(e).clientX)}function A(e,t,a){const i=t.getAttribute("disabled");let n=t.querySelector("li[data-hidden=false]");const r=t.getAttribute("data-style");function d(e){return[...e.parentNode.children].indexOf(e)}if(!i){let i=g(e).clientX-y,s=Math.sign(i),o=getComputedStyle(e.target).getPropertyValue("--tx");parseInt(o.replace(/\D/g,""));-1==s&&n.nextElementSibling&&i<-25?(t.setAttribute("disabled",!0),"arrows"==r||"responsive"===r?m(t,a,1):v(t,a,d(n)+1)):1==s&&n.previousElementSibling&&i>25&&(t.setAttribute("disabled",!0),"arrows"==r||"responsive"===r?m(t,a,-1):v(t,a,d(n)-1))}}const E=[i,{launchFn:function(e){const t=e.dataset.style||"arrows";switch(parseInt(e.dataset.cardsperrow),t){case"arrows":case"responsive":default:f(e);break;case"dots":b(e)}},launchQuery:".slider"}];function x(e,t,a){Array.from(e.querySelectorAll("a")).forEach((e=>{if(e.origin===window.location.origin){const i=e.search?r(e.search):{};i[t]=a,e.href=`${e.origin}${e.pathname}${function(e){if(Object.keys(e).length>0){let t="?";for(const a in e)1!==t.length&&(t+="&"),t+=a+"="+e[a];return t}return""}(i)}${e.hash}`}}))}function w(e){try{return e()}catch(e){t="jsError",a="JavaScript error",i=`Line ${e.lineNumber} – ${e.message}`,n=`Pattern launch ${e.fileName} (${window.location})`,r=!0,window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:t,eventCategory:a,eventAction:i,eventLabel:n,eventValue:r,nonInteractionHit:d})}var t,a,i,n,r,d}function S(e){if("function"==typeof e)w(e);else if(e.launchQuery){const{launchFn:t,launchQuery:a}=e;Array.from(document.querySelectorAll(a)).filter((e=>e.className.indexOf(`${a}-no-js`))).forEach((e=>w((()=>t(e)))))}}document.addEventListener("DOMContentLoaded",(()=>{if(!/(Trident|MSIE)/.test(navigator.userAgent)){Array.from(document.getElementsByTagName("html")).forEach((e=>{let t=function(){const e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(e.indexOf("Trident/")>0){let t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}const a=e.indexOf("Edge/");return a>0&&parseInt(e.substring(a+5,e.indexOf(".",a)),10)}();n(e,"no-js",!1),e.className=t>=12?(e.className+" js edge").trim():(e.className+" js").trim()})),E.forEach(S);const e=r(location.search);e.dev&&x(document.querySelector("body"),"dev",e.dev),e.rel&&x(document.querySelector("body"),"rel",e.rel)}}),!1)}},a={};function i(e){var n=a[e];if(void 0!==n)return n.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,i),r.exports}i.m=t,e=[],i.O=(t,a,n,r)=>{if(!a){var d=1/0;for(c=0;c<e.length;c++){a=e[c][0],n=e[c][1],r=e[c][2];for(var s=!0,o=0;o<a.length;o++)(!1&r||d>=r)&&Object.keys(i.O).every((e=>i.O[e](a[o])))?a.splice(o--,1):(s=!1,r<d&&(d=r));if(s){e.splice(c--,1);var l=n();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,n,r]},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,a)=>{var n,r,d=a[0],s=a[1],o=a[2],l=0;if(d.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(o)var c=o(i)}for(t&&t(a);l<d.length;l++)r=d[l],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(c)},a=self.webpackChunkcity_lite=self.webpackChunkcity_lite||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=i.O(void 0,[321],(()=>i(5545)));n=i.O(n)})();