(()=>{"use strict";var e,t={5545:(e,t,a)=>{a(4916);const n={launchFn:function(){console.log("hello world")},launchQuery:".".concat("accordion")};a(3948),a(5306);function i(e,t,a){const n=a?(i=t,e=>e.indexOf(i)<0):(e=>t=>t!==e)(t);var i;e.className=e.className.split(/\s+/).filter((e=>n(e))).join(" ")}function r(e){const t={};return e.substr(1).split("&").forEach((e=>{const[a,n]=e.split("=");t[a]=n})),t}const o=Object.freeze({activeDescendant:"aria-activedescendant",atomic:"aria-atomic",autoComplete:"aria-autocomplete",busy:"aria-busy",checked:"aria-checked",colCount:"aria-colcount",colIndex:"aria-colindex",colSpan:"aria-colspan",controls:"aria-controls",current:"aria-current",describedBy:"aria-describedby",details:"aria-details",disabled:"aria-disabled",dropEffect:"aria-dropeffect",errorMessage:"aria-errormessage",expanded:"aria-expanded",flowTo:"aria-flowto",grabbed:"aria-grabbed",hasPopup:"aria-haspopup",hidden:"aria-hidden",invalid:"aria-invalid",keyShortcuts:"aria-keyshortcuts",label:"aria-label",labelledBy:"aria-labelledby",level:"aria-level",live:"aria-live",modal:"aria-modal",multiLine:"aria-multiline",multiSelectable:"aria-multiselectable",orientation:"aria-orientation",owns:"aria-owns",placeholder:"aria-placeholder",posInset:"aria-posinset",pressed:"aria-pressed",readOnly:"aria-readonly",relevant:"aria-relevant",required:"aria-required",roleDescription:"aria-roledescription",rowCount:"aria-rowcount",rowIndex:"aria-rowindex",rowSpan:"aria-rowspan",selected:"aria-selected",setSize:"aria-setsize",sort:"aria-sort",valueMax:"aria-valuemax",valueMin:"aria-valuemin",valueNow:"aria-valuenow",valueText:"aria-valuetext"}),d="slider",s="ArrowLeft",l="ArrowRight";function c(e,t){e.addEventListener("mousedown",(function(t){_(t,e)})),e.addEventListener("touchstart",(function(t){_(t,e)})),e.addEventListener("mouseup",(function(a){A(a,e,t)})),e.addEventListener("touchend",(function(a){A(a,e,t)}))}function u(e,t,a,n){let i,r,o;for(i=0;i<e.length;i+=2){let a=document.createElement("li"),n=document.createElement("ul");for(a.appendChild(n),r=0;r<2;r++)if(e[i+r]){n.appendChild(e[i+r]),"0"==e[i+r].getAttribute("data-sliderposition")&&(o=i+r),e[i+r].classList.remove("slide"),e[i+r].removeAttribute("data-sliderposition")}t.appendChild(a)}return h(e=Array.from(t.children),Math.floor((o+n)/2)),t.setAttribute("data-optimised","true"),a&&(e[Math.floor((o+n)/2)].focus(),a.querySelector(".slider__indicator__total").innerText=e.length,a.querySelector(".slider__indicator__current").innerText=Math.floor((o+n)/2)+1,p(t,a)),t.setAttribute("data-count",e.length),e}function p(e,t){const a=t.querySelector(".".concat(d,"__controls__next")),n=t.querySelector(".".concat(d,"__controls__prev"));e.querySelector('[data-sliderposition="-1"]')?n.removeAttribute("disabled"):n.setAttribute("disabled",!0),e.querySelector('[data-sliderposition="1"]')?a.removeAttribute("disabled"):a.setAttribute("disabled",!0),e.removeAttribute("disabled");const i=e.getAttribute("data-style");let r=Array.from(e.children);i&&1==r.length&&a.removeAttribute("disabled")}function m(e,t,a){let n=Array.from(e.children);const i=e.getAttribute("data-style"),r=e.getAttribute("data-optimised");let o=window.innerWidth;if("responsive"===i&&o<768&&"true"==r)return void function(e,t,a,n){let i,r,o=Array.from(e.children),d=0;for(i=0;i<o.length;i++)"0"==o[i].getAttribute("data-sliderposition")&&(r=i),Array.from(o[i].querySelector("ul").children).forEach(((t,a)=>{e.appendChild(t)})),o[i].remove();o=Array.from(e.children),2*r+(Math.round(a/2)+a)>=o.length&&(d=-1),h(o,2*r+Math.round(a/2)+a+d),e.setAttribute("data-optimised","false"),o[2*r+(Math.round(a/2)+a)+d].focus(),t.querySelector(".slider__indicator__total").innerText=o.length,t.querySelector(".slider__indicator__current").innerText=2*r+(Math.round(a/2)+a+1)+d,e.setAttribute("data-count",o.length),p(e,t)}(e,t,a);if("responsive"===i&&o>=768&&"true"!==r)return void u(n,e,t,a);const s=e.querySelector('[data-sliderposition="0"]'),l=t.querySelector(".".concat(d,"__indicator__current")),c=t.querySelector(".".concat(d,"__controls__next")),m=t.querySelector(".".concat(d,"__controls__prev"));if(1===a){const a=s.nextElementSibling;a&&(c.setAttribute("disabled",!0),m.setAttribute("disabled",!0),a.addEventListener("transitionend",(function n(){a.removeEventListener("transitionend",n,!0),a.focus(),p(e,t)}),!0),s.addEventListener("transitionend",(function e(){s.removeEventListener("transitionend",e,!0),s.dataset.hidden=!0,s.dataset.smallhidden=!0}),!0),s.dataset.sliderposition=-1,s.dataset.smallposition=-1,a.dataset.hidden=!1,a.dataset.smallhidden=!1,a.dataset.sliderposition=0,a.dataset.smallposition=0,l.innerText=n.indexOf(a)+1)}else{const a=s.previousElementSibling;a&&(c.setAttribute("disabled",!0),m.setAttribute("disabled",!0),a.addEventListener("transitionend",(function n(){a.removeEventListener("transitionend",n,!0),a.focus(),p(e,t)}),!0),s.addEventListener("transitionend",(function e(){s.removeEventListener("transitionend",e,!0),s.dataset.hidden=!0,s.dataset.smallhidden=!0}),!0),s.dataset.sliderposition=1,s.dataset.smallposition=1,a.dataset.hidden=!1,a.dataset.smallhidden=!1,a.dataset.sliderposition=0,a.dataset.smallposition=0,l.innerText=n.indexOf(a)+1)}}function h(e,t){return e.forEach(((a,n)=>{a.setAttribute("tabindex",-1),a.setAttribute(o.label,"Slide ".concat(n+1," of ").concat(e.length)),a.classList.add("slide"),n===t?(a.dataset.sliderposition=0,a.dataset.smallposition=0,a.dataset.hidden=!1):n>t?(a.dataset.sliderposition=1,a.dataset.smallposition=1,a.dataset.hidden="true",a.dataset.smallhidden="true"):(a.dataset.sliderposition=-1,a.dataset.smallposition=-1,a.dataset.hidden=!0)})),e}function f(e){let t=Array.from(e.children);const a=document.createElement("nav"),n=document.createElement("button"),r=document.createElement("span"),p=document.createElement("button"),f=document.createElement("span"),b=document.createElement("div"),v=document.createElement("span"),y=document.createElement("span"),g=document.createElement("span"),_=document.createElement("span"),A=document.createElement("span");if(1>=t.length)return void i(e,d,!1);const E=e.getAttribute("data-style");let x=window.innerWidth;"responsive"===E&&x>=768&&(u(t,e),t=Array.from(e.children)),h(t,0),r.appendChild(document.createTextNode("Next slide")),n.appendChild(r),n.setAttribute("type","button"),n.className="slider__controls__next",n.addEventListener("click",(()=>m(e,a,1)),!0),f.appendChild(document.createTextNode("Previous slide")),p.appendChild(f),p.setAttribute("type","button"),p.setAttribute("disabled","true"),p.className="slider__controls__prev",p.addEventListener("click",(()=>m(e,a,-1)),!0),e.addEventListener("keydown",(e=>{switch(e.key){case s:p.click();break;case l:n.click()}}),!0),v.appendChild(document.createTextNode(1)),v.className="slider__indicator__current",_.appendChild(document.createTextNode("/")),_.className="slider__indicator__divider--visible",_.setAttribute(o.hidden,"true"),A.appendChild(document.createTextNode(" of ")),A.className="slider__indicator__divider--sr",g.appendChild(_),g.appendChild(A),g.className="slider__indicator__divider",y.className="slider__indicator__total",y.appendChild(document.createTextNode(t.length)),b.appendChild(v),b.appendChild(g),b.appendChild(y),b.className="slider__indicator",a.appendChild(b),a.appendChild(p),a.appendChild(n),a.className="slider__controls",a.setAttribute(o.label,"Slider navigation"),e.nextElementSibling?e.parentElement.insertBefore(a,e.nextElementSibling):e.parentElement.appendChild(a),c(e,a)}function b(e){const t=Array.from(e.children),a=document.createElement("nav");1>=t.length?i(e,d,!1):(t.forEach(((n,i)=>{n.setAttribute("tabindex",-1),n.setAttribute(o.label,"Slide ".concat(i+1," of ").concat(t.length)),n.classList.add("slide"),0===i?(n.dataset.sliderposition=0,n.dataset.smallposition=0,n.dataset.hidden=!1):(n.dataset.sliderposition=1,n.dataset.smallposition=1,n.dataset.hidden="true",n.dataset.smallhidden="true");let r=function(e,t){let a=document.createElement(e);return t.map((function(e){"content"===e.label?a.appendChild(document.createTextNode(e.val)):"html"===e.label?a.innerHTML=e.val:a.setAttribute(e.label,e.val)})),a}("button",[{label:"data-page",val:i},{label:"aria-label",val:"Open slide ".concat(i+1)},{label:"type",val:"button"}]);0===i?(r.setAttribute(o.current,"slide"),r.setAttribute(o.expanded,"true"),r.setAttribute("disabled","true")):r.setAttribute(o.expanded,"false"),r.addEventListener("click",(()=>v(e,a,i)),!0),a.appendChild(r)})),e.addEventListener("keydown",(n=>{const i=e.querySelector('[data-sliderposition="0"]'),r=i.nextElementSibling,o=i.previousElementSibling,d=t.indexOf(i),c=Array.from(a.children);switch(n.key){case s:o&&c[d-1].click();break;case l:r&&c[d+1].click()}}),!0),a.className="slider__controls",a.setAttribute(o.label,"Slider navigation"),e.nextElementSibling?e.parentElement.insertBefore(a,e.nextElementSibling):e.parentElement.appendChild(a),c(e,a))}function v(e,t,a){const n=Array.from(e.children),i=Array.from(t.children);i.forEach(((e,t)=>{e.setAttribute("disabled",!0)})),n.forEach(((t,n)=>{n===a?(t.dataset.sliderposition=0,t.dataset.smallposition=0,t.dataset.hidden=!1,t.addEventListener("transitionend",(function a(){t.removeEventListener("transitionend",a,!0),t.focus(),function(e,t,a){t.forEach(((t,a)=>{a===e?(t.setAttribute("disabled",!0),t.setAttribute("aria-expanded",!0)):(t.removeAttribute("disabled"),t.setAttribute("aria-expanded",!1))})),a.removeAttribute("disabled")}(n,i,e)}),!0)):n>a?(t.dataset.sliderposition=1,t.dataset.smallposition=1,t.dataset.hidden=!0):(t.dataset.sliderposition=-1,t.dataset.smallposition=-1,t.dataset.hidden=!0)}))}let y;function g(e){return e.changedTouches?e.changedTouches[0]:e}function _(e,t){t.getAttribute("disabled")||(y=g(e).clientX)}function A(e,t,a){const n=t.getAttribute("disabled");let i=t.querySelector("li[data-hidden=false]");const r=t.getAttribute("data-style");function o(e){return[...e.parentNode.children].indexOf(e)}if(!n){let n=g(e).clientX-y,d=Math.sign(n),s=getComputedStyle(e.target).getPropertyValue("--tx");parseInt(s.replace(/\D/g,""));-1==d&&i.nextElementSibling&&n<-25?(t.setAttribute("disabled",!0),"arrows"==r||"responsive"===r?m(t,a,1):v(t,a,o(i)+1)):1==d&&i.previousElementSibling&&n>25&&(t.setAttribute("disabled",!0),"arrows"==r||"responsive"===r?m(t,a,-1):v(t,a,o(i)-1))}}const E=[n,{launchFn:function(e){console.log("testt");const t=e.dataset.style||"arrows";switch(parseInt(e.dataset.cardsperrow),t){case"arrows":case"responsive":default:f(e);break;case"dots":b(e)}},launchQuery:".".concat(d)}];function x(e,t,a){Array.from(e.querySelectorAll("a")).forEach((e=>{if(e.origin===window.location.origin){const n=e.search?r(e.search):{};n[t]=a,e.href="".concat(e.origin).concat(e.pathname).concat(function(e){if(Object.keys(e).length>0){let t="?";for(const a in e)1!==t.length&&(t+="&"),t+=a+"="+e[a];return t}return""}(n)).concat(e.hash)}}))}function w(e){try{return e()}catch(e){t="jsError",a="JavaScript error",n="Line ".concat(e.lineNumber," – ").concat(e.message),i="Pattern launch ".concat(e.fileName," (").concat(window.location,")"),r=!0,window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:t,eventCategory:a,eventAction:n,eventLabel:i,eventValue:r,nonInteractionHit:o})}var t,a,n,i,r,o}function S(e){if("function"==typeof e)w(e);else if(e.launchQuery){const{launchFn:t,launchQuery:a}=e;Array.from(document.querySelectorAll(a)).filter((e=>e.className.indexOf("".concat(a,"-no-js")))).forEach((e=>w((()=>t(e)))))}}document.addEventListener("DOMContentLoaded",(()=>{if(!/(Trident|MSIE)/.test(navigator.userAgent)){Array.from(document.getElementsByTagName("html")).forEach((e=>{let t=function(){const e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(e.indexOf("Trident/")>0){let t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}const a=e.indexOf("Edge/");return a>0&&parseInt(e.substring(a+5,e.indexOf(".",a)),10)}();i(e,"no-js",!1),e.className=t>=12?(e.className+" js edge").trim():(e.className+" js").trim()})),E.forEach(S);const e=r(location.search);e.dev&&x(document.querySelector("body"),"dev",e.dev),e.rel&&x(document.querySelector("body"),"rel",e.rel)}}),!1)}},a={};function n(e){var i=a[e];if(void 0!==i)return i.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,a,i,r)=>{if(!a){var o=1/0;for(c=0;c<e.length;c++){a=e[c][0],i=e[c][1],r=e[c][2];for(var d=!0,s=0;s<a.length;s++)(!1&r||o>=r)&&Object.keys(n.O).every((e=>n.O[e](a[s])))?a.splice(s--,1):(d=!1,r<o&&(o=r));if(d){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,i,r]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var i,r,o=a[0],d=a[1],s=a[2],l=0;if(o.some((t=>0!==e[t]))){for(i in d)n.o(d,i)&&(n.m[i]=d[i]);if(s)var c=s(n)}for(t&&t(a);l<o.length;l++)r=o[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},a=self.webpackChunkcity_lite=self.webpackChunkcity_lite||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var i=n.O(void 0,[321],(()=>n(5545)));i=n.O(i)})();