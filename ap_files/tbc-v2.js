/**** 20250126.12-RELEASE ****/
                    (()=>{var e={};!function(){window.TBC=window.TBC||{};const e=window.TBC.cmd=window.TBC.cmd||[],t={connection:!!window.postMessage};let n,o;const i={validateApiActionArguments:(e,t)=>{if("object"!=typeof t[0].sizeObject&&"object"!=typeof t[0].iframeArgs&&"function"!=typeof t[1])throw new TypeError(`invalid argument supplied for ${e}()`)},init:()=>{n={},o={},window.addEventListener("message",i.receiveMessage),i.switchCmd(),i.executeCmd(),i.isMobileSDK()&&i.registerTrcClicks()},registerTrcClicks:()=>{document.body?document.body.addEventListener("click",(e=>{const t=i.extractItemData(e.target);t&&(e.preventDefault(),window.TBC.click(t))}),!0):requestAnimationFrame(i.registerTrcClicks)},extractItemData:e=>"BODY"===e.nodeName?null:"A"===e.nodeName?i.collectElementData(e):e.parentElement?i.extractItemData(e.parentElement):null,collectElementData:e=>{const t={url:e.href};if(t.isCardClick=!!e.parentElement.video_data,t.isCardClick){t.video_data=e.parentElement.video_data;const n=i.getPlacementParentElement(e);t.placement_name=n.dataset.placementName,t.is_organic=!n.querySelector(`.${window.TRC.SPONSORED_CONTAINER_CLASS_NAME}`)}return t},getPlacementParentElement:e=>{const t=document.querySelectorAll("[data-placement-name]")||[];for(let n=0;n<t.length;n++)if(t[n].contains(e))return t[n];return null},switchCmd:()=>{e.push=function(e){"function"==typeof e&&e()}},executeCmd:()=>{let t;for(;t=e.shift();)"function"==typeof t&&t()},receiveMessage:e=>{const t=e.data;if(t&&t.action){const e=n[t.action];e&&(delete n[t.action],e(t.dimension,t.message))}},sendMessage:(e,t)=>{const n={id:i.getIframeId(),action:e,payload:t};window.parent.postMessage(n,"*")},doAction:(e,o)=>{i.validateApiActionArguments(e,o),t.connection?n[e]||(n[e]=o[1],i.sendMessage(e,o[0])):o[1](null,"Taboola Connect is not supported")},getValueFromParent:e=>{const t=i.getParamValueFromHash(e),n=frameElement&&frameElement.getAttribute(e);return t||n||""},getIframeId:()=>i.getValueFromParent("tbcId"),isMobileSDK:()=>"true"===i.getValueFromParent("isMobileSDK"),getParamValueFromHash:e=>{const t=location.hash.match(new RegExp(`(#|&)${e}=([^&]*)`));return t?t[2]:""}};window.TBC.rendered=(e,t)=>{o.rendered||(o.rendered=1,i.doAction("rendered",[{sizeObject:e},t]))},window.TBC.expand=function(e,t){i.doAction("expand",[{sizeObject:e},t])},window.TBC.collapse=function(e,t){i.doAction("collapse",[{sizeObject:e},t])},window.TBC.getMaxHeight=function(e){i.doAction("maxHeight",[{},e])},window.TBC.click=function(e,t){"function"==typeof e?i.doAction("click",[{},e]):i.doAction("click",[{sizeObject:e},t])},window.TBC.openInIframe=function(e,t){i.doAction("openInIframe",[{iframeArgs:e},t])},window.TBC.error=function(e){i.doAction("error",[e,function(){return e}])},window.TBC.supports=function(){return t},window.TBC.reportMetrics=function(e){t.connection&&i.sendMessage("reportMetrics",e)},i.init(),window._trcIsUTactive&&(window.TBC.privateMethods=i)}();var t=globalThis="undefined"==typeof globalThis?{}:globalThis;for(var n in e)t[n]=e[n];e.__esModule&&Object.defineProperty(t,"__esModule",{value:!0})})();