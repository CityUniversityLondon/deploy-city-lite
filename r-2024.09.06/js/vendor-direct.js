(globalThis.webpackChunkcity_lite=globalThis.webpackChunkcity_lite||[]).push([[542],{523:(t,e,n)=>{var o,i,a=n(760),r=n(529),c=(i=[],{activateTrap:function(t){if(i.length>0){var e=i[i.length-1];e!==t&&e.pause()}var n=i.indexOf(t);-1===n||i.splice(n,1),i.push(t)},deactivateTrap:function(t){var e=i.indexOf(t);-1!==e&&i.splice(e,1),i.length>0&&i[i.length-1].unpause()}});function u(t){return setTimeout(t,0)}t.exports=function(t,e){var n=document,i="string"==typeof t?n.querySelector(t):t,s=r({returnFocusOnDeactivate:!0,escapeDeactivates:!0},e),f={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},l={activate:function(t){if(f.active)return;T(),f.active=!0,f.paused=!1,f.nodeFocusedBeforeActivation=n.activeElement;var e=t&&t.onActivate?t.onActivate:s.onActivate;e&&e();return v(),l},deactivate:d,pause:function(){if(f.paused||!f.active)return;f.paused=!0,p()},unpause:function(){if(!f.paused||!f.active)return;f.paused=!1,T(),v()}};return l;function d(t){if(f.active){clearTimeout(o),p(),f.active=!1,f.paused=!1,c.deactivateTrap(l);var e=t&&void 0!==t.onDeactivate?t.onDeactivate:s.onDeactivate;return e&&e(),(t&&void 0!==t.returnFocus?t.returnFocus:s.returnFocusOnDeactivate)&&u((function(){var t;E((t=f.nodeFocusedBeforeActivation,g("setReturnFocus")||t))})),l}}function v(){if(f.active)return c.activateTrap(l),o=u((function(){E(h())})),n.addEventListener("focusin",w,!0),n.addEventListener("mousedown",m,{capture:!0,passive:!1}),n.addEventListener("touchstart",m,{capture:!0,passive:!1}),n.addEventListener("click",b,{capture:!0,passive:!1}),n.addEventListener("keydown",y,{capture:!0,passive:!1}),l}function p(){if(f.active)return n.removeEventListener("focusin",w,!0),n.removeEventListener("mousedown",m,!0),n.removeEventListener("touchstart",m,!0),n.removeEventListener("click",b,!0),n.removeEventListener("keydown",y,!0),l}function g(t){var e=s[t],o=e;if(!e)return null;if("string"==typeof e&&!(o=n.querySelector(e)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof e&&!(o=e()))throw new Error("`"+t+"` did not return a node");return o}function h(){var t;if(!(t=null!==g("initialFocus")?g("initialFocus"):i.contains(n.activeElement)?n.activeElement:f.firstTabbableNode||g("fallbackFocus")))throw new Error("Your focus-trap needs to have at least one focusable element");return t}function m(t){i.contains(t.target)||(s.clickOutsideDeactivates?d({returnFocus:!a.isFocusable(t.target)}):s.allowOutsideClick&&s.allowOutsideClick(t)||t.preventDefault())}function w(t){i.contains(t.target)||t.target instanceof Document||(t.stopImmediatePropagation(),E(f.mostRecentlyFocusedNode||h()))}function y(t){if(!1!==s.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t))return t.preventDefault(),void d();(function(t){return"Tab"===t.key||9===t.keyCode})(t)&&function(t){if(T(),t.shiftKey&&t.target===f.firstTabbableNode)return t.preventDefault(),void E(f.lastTabbableNode);if(!t.shiftKey&&t.target===f.lastTabbableNode)t.preventDefault(),E(f.firstTabbableNode)}(t)}function b(t){s.clickOutsideDeactivates||i.contains(t.target)||s.allowOutsideClick&&s.allowOutsideClick(t)||(t.preventDefault(),t.stopImmediatePropagation())}function T(){var t=a(i);f.firstTabbableNode=t[0]||h(),f.lastTabbableNode=t[t.length-1]||h()}function E(t){t!==n.activeElement&&(t&&t.focus?(t.focus(),f.mostRecentlyFocusedNode=t,function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(t)&&t.select()):E(h()))}}},172:function(t,e){var n,o,i;o=[],n=function(){"use strict";var t=function(t){return t&&"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var e=function(e,n,o){var i;n=n||999,o||0===o||(o=9);var a=function(t){i=t},r=function(){clearTimeout(i),a(0)},c=function(t){return Math.max(0,e.getTopOf(t)-o)},u=function(o,i,c){if(r(),0===i||i&&i<0||t(e.body))e.toY(o),c&&c();else{var u=e.getY(),s=Math.max(0,o)-u,f=(new Date).getTime();i=i||Math.min(Math.abs(s),n),function t(){a(setTimeout((function(){var n=Math.min(1,((new Date).getTime()-f)/i),o=Math.max(0,Math.floor(u+s*(n<.5?2*n*n:n*(4-2*n)-1)));e.toY(o),n<1&&e.getHeight()+o<e.body.scrollHeight?t():(setTimeout(r,99),c&&c())}),9))}()}},s=function(t,e,n){u(c(t),e,n)},f=function(t,n,i){var a=t.getBoundingClientRect().height,r=e.getTopOf(t)+a,f=e.getHeight(),l=e.getY(),d=l+f;c(t)<l||a+o>f?s(t,n,i):r+o>d?u(r-f+o,n,i):i&&i()},l=function(t,n,o,i){u(Math.max(0,e.getTopOf(t)-e.getHeight()/2+(o||t.getBoundingClientRect().height/2)),n,i)};return{setup:function(t,e){return(0===t||t)&&(n=t),(0===e||e)&&(o=e),{defaultDuration:n,edgeOffset:o}},to:s,toY:u,intoView:f,center:l,stop:r,moving:function(){return!!i},getY:e.getY,getTopOf:e.getTopOf}},n=document.documentElement,o=function(){return window.scrollY||n.scrollTop},i=e({body:document.scrollingElement||document.body,toY:function(t){window.scrollTo(0,t)},getY:o,getHeight:function(){return window.innerHeight||n.clientHeight},getTopOf:function(t){return t.getBoundingClientRect().top+o()-n.offsetTop}});if(i.createScroller=function(t,o,i){return e({body:t,toY:function(e){t.scrollTop=e},getY:function(){return t.scrollTop},getHeight:function(){return Math.min(t.clientHeight,window.innerHeight||n.clientHeight)},getTopOf:function(t){return t.offsetTop}},o,i)},"addEventListener"in window&&!window.noZensmooth&&!t(document.body)){var a="history"in window&&"pushState"in history,r=a&&"scrollRestoration"in history;r&&(history.scrollRestoration="auto"),window.addEventListener("load",(function(){r&&(setTimeout((function(){history.scrollRestoration="manual"}),9),window.addEventListener("popstate",(function(t){t.state&&"zenscrollY"in t.state&&i.toY(t.state.zenscrollY)}),!1)),window.location.hash&&setTimeout((function(){var t=i.setup().edgeOffset;if(t){var e=document.getElementById(window.location.href.split("#")[1]);if(e){var n=Math.max(0,i.getTopOf(e)-t),o=i.getY()-n;0<=o&&o<9&&window.scrollTo(0,n)}}}),9)}),!1);var c=new RegExp("(^|\\s)noZensmooth(\\s|$)");window.addEventListener("click",(function(t){for(var e=t.target;e&&"A"!==e.tagName;)e=e.parentNode;if(!(!e||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){if(r){var n=history.state&&"object"==typeof history.state?history.state:{};n.zenscrollY=i.getY();try{history.replaceState(n,"")}catch(t){}}var o=e.getAttribute("href")||"";if(0===o.indexOf("#")&&!c.test(e.className)){var u=0,s=document.getElementById(o.substring(1));if("#"!==o){if(!s)return;u=i.getTopOf(s)}t.preventDefault();var f=function(){window.location=o},l=i.setup().edgeOffset;l&&(u=Math.max(0,u-l),a&&(f=function(){history.pushState({},"",o)})),i.toY(u,null,f)}}}),!1)}return i}(),void 0===(i="function"==typeof n?n.apply(e,o):n)||(t.exports=i)}}]);