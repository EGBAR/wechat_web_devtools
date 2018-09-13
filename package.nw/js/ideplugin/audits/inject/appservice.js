!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=35)}([function(e,t,n){const i=n(4).EventEmitter;e.exports=new i},function(e,t,n){const i=n(3);e.exports.$=function(e,t){return"string"==typeof t&&(t=document.querySelector(t)),(t||document).querySelector(e)},e.exports.$$=function(e){return document.querySelectorAll(e)},e.exports.show=function(e){"string"==typeof e&&(e=document.querySelector(e)),e.style.display=""},e.exports.hide=function(e){"string"==typeof e&&(e=document.querySelector(e)),e.style.display="none"},e.exports.sprintf=function(e,t){for(let n=0;n<t.length;n++)e=e.replace(/%s/,t[n]);return e},e.exports.reportBehavior=function(e){i.invoke("REPORT",{data:JSON.stringify(e)})},e.exports.log=function(){const e=Array.prototype.slice.call(arguments);e.unshift("color: #ea6f5a;"),e.unshift("%c[Audit]"),console.log.apply(console,e)},e.exports.formatSize=function(e){const t=["B","K","M","G"];let n;for(;(n=t.shift())&&e>1024;)e/=1024;return("B"===n?e:e.toFixed(2))+n},e.exports.hash=function(e){let t=5381,n=e.length;for(;n;)t=33*t^e.charCodeAt(--n);return t>>>0},e.exports.byteCount=function(e){return encodeURI(e).split(/%..|./).length-1},e.exports.unique=function(e){var t=[];for(var n in e)-1===t.indexOf(e[n])&&t.push(e[n]);return t},e.exports.status="running"},function(e,t,n){var i=function(){const e=window.navigator||window.__global.navigator,t=window.WebSocket||window.__global.WebSocket;var n=e.userAgent.match(/port\/(\d*)/),i=null,r=`ws://127.0.0.1:${n?parseInt(n[1]):9974}`,o=null,s=[],a=[];const c="GET_MESSAGE_TOKEN";function u(e){i&&i.readyState===t.OPEN?i.send(JSON.stringify(e)):a.push(e)}return{connect:function e(n){o=n||o;var f=window.prompt?prompt(c):__global.prompt(c);(i=new t(r,`${o}#${f}#`)).onopen=function(e){let t=[].concat(a);a=[],t.forEach(e=>{u(e)})},i.onclose=function(t){i=null,setTimeout(()=>{e(n)})},i.onmessage=function(e){try{!function(e){s.forEach(t=>{try{t(e)}catch(e){console.error(e)}})}(JSON.parse(e.data))}catch(e){console.error("ws.onmessage cb error",e)}}},send:u,registerCallback:e=>{s.push(e)},getWs:()=>i}}();e.exports=i},function(e,t){var n=[],i={};window.addEventListener("wechatideReady",()=>{n.forEach(e=>{window.wechatide.invoke(e.command,e.args,e.callback)}),n=[];for(const e in i)window.wechatide.on(e,i[e])});e.exports={invoke:(e,t,i)=>{window.wechatide?window.wechatide.invoke(e,t,i):n.push({command:e,args:t,callback:i})},on:(e,t)=>{window.wechatide?window.wechatide.on(e,t):i[e]=t}}},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function r(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,s,a,c,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||r(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var f=new Error('Uncaught, unspecified "error" event. ('+t+")");throw f.context=t,f}if(o(n=this._events[e]))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(r(n))for(a=Array.prototype.slice.call(arguments,1),s=(u=n.slice()).length,c=0;c<s;c++)u[c].apply(this,a);return!0},n.prototype.addListener=function(e,t){var s;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?r(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,r(this._events[e])&&!this._events[e].warned&&(s=o(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&s>0&&this._events[e].length>s&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){if(!i(t))throw TypeError("listener must be a function");var n=!1;function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},n.prototype.removeListener=function(e,t){var n,o,s,a;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(s=(n=this._events[e]).length,o=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(r(n)){for(a=s;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){o=a;break}if(o<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(i(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){const i=n(2),r=n(36);n(1);function o(){r.init()}i.connect("APPSERVICE_EXPERIENCE"),"complete"===document.readyState?o():window.addEventListener("load",o)},function(e,t,n){const i=n(2),r=n(0),o=n(1),s=setInterval,c=setTimeout,u=Object.defineProperties;function f(){const e=[];try{a}catch(t){const n=t.stack.split("\n").slice(3);for(let t=0;t<n.length;t++){let i=n[t];if(i.indexOf("WAService.js")>-1||i.indexOf("appservice/__dev__")>-1)break;let r=i.match(/at (.+) \(http:\/\//);r&&r[1]&&e.push(r[1])}}return e}function p(){getCurrentPages().forEach(e=>{if(!e||e.__set_data_rewrited__)return;const t=e.setData;u(e,{setData:{value:function(n,i){if(t.call(e,n,i),"running"!==o.status)return;c(function(){r.emit("set-data",n,"Page",s)});const s=f()}}}),e.__set_data_rewrited__=!0})}function l(){const e=wx.request;u(wx,{request:{value:function(t){const n=t.success;t.success=function(e){"function"==typeof n&&n(e),"running"===o.status&&200===e.statusCode&&e.data&&function(e,t){i.send({command:"TRANSFER",eventName:"wx-request-body",from:"appservice",data:{url:e,body:t,page:__appServiceEngine__.getCurrentRoute()}})}(t.url,o.hash(JSON.stringify(e.data)))},e(t),"running"===o.status&&function(e){i.send({command:"TRANSFER",eventName:"wx-request",from:"appservice",data:{url:e,page:__appServiceEngine__.getCurrentRoute()}})}(t.url)}}})}window.__passWAServiceGlobal__=function(e){for(let t in e)window[t]=e[t];if(__wxConfig.plugins)if("undefined"!=typeof __subContextEngine__){const e=__subContextEngine__.initAppRelatedContexts;u(__subContextEngine__,{initAppRelatedContexts:{value:function(t){const n=__wxConfig.onReady;__wxConfig.onReady=function(){},e(t),__wxConfig.onReady=n}}})}else if("undefined"!=typeof __wxConfig){__wxConfig.isIsolateContext=!0;const e=Reporter.reportIDKey;u(Reporter,{reportIDKey:{value:function(t){if("initAppIsolatedContext"===t.key)throw new Error("在运行 Audits 的过程中，请忽略该错误");e(t)}}})}},i.registerCallback(e=>{let{command:t,eventName:n}=e;switch(t){case"TRANSFER":r.emit(n)}}),r.on("stop-audit",function(){o.status="stopped"}),e.exports.init=function(){if("undefined"==typeof __appServiceSDK__)return console.error("基础库切换到 2.2.0+ ，才能使用 Audits 功能"),void i.send({command:"TRANSFER",eventName:"not-supported-wxalib"});__appServiceSDK__.onAppRoute(function(){"running"===o.status&&p()}),p(),function(){const e={};Object.keys(exparser.Component._list).forEach(function(t){!t||"wx://functional-page"===t||/^plugin:\/\//.test(t)||/^plugin-private:\/\//.test(t)||/(^|\/)miniprogram_npm\//g.test(t)||(e[t]=exparser.Component._list[t])}),Object.keys(e).forEach(t=>{if(!t)return;const n=e[t],i=n.initiator;n.initiator=function(){const e=this,t=e.setData;i.call(e),e.__customConstructor__===__virtualDOM__.Page||e.__set_data_rewrited__||(u(this,{setData:{value:function(n,i){if(t.call(e,n,i),"running"!==o.status)return;c(()=>{r.emit("set-data",n,this.is,s)});const s=f()}}}),e.__set_data_rewrited__=!0)}})}(),l(),n(37).init(),n(38).init(),n(39).init(c),n(40).init(),n(41).init(),n(42).init(c,s),n(43).init()}},function(e,t,n){const i=n(2),r=n(1);function o(e){"running"===r.status&&i.send({command:"TRANSFER",eventName:"js-exception",data:{msg:e,page:__appServiceEngine__.getCurrentRoute()}})}e.exports.init=function(){Reporter.registerErrorListener(o)}},function(e,t,n){const i=n(2);n(0).on("set-data",function(e,t,n){const r=JSON.stringify(e).length;r>262144&&function(e,t,n,r){i.send({command:"TRANSFER",eventName:"set-data-large",data:{size:e,page:__appServiceEngine__.getCurrentRoute(),position:t,stack:n.join(" -> "),vars:r}})}(r,t,n,Object.keys(e))}),e.exports.init=function(){}},function(e,t,n){const i=n(2),r=n(0),o=1e3,s=20;let a=setTimeout,c=[],u=Date.now(),f=null;function p(e,t,n){i.send({command:"TRANSFER",eventName:"set-data-freq",data:{times:e,page:__appServiceEngine__.getCurrentRoute(),position:t,stack:n.join(" -> ")}})}r.on("set-data",function(e,t,n){const i=Date.now(),r=i-u;u=i,r>o?c=[]:c.push(r),c.length>=s&&function(e,t){clearTimeout(f);for(let n=0,i=c.length;n<i;n++){let r=0,u=n;for(;r<o&&u<i;)r+=c[u],u++;if(r<o)return void(u-n>=s&&(f=a(function(){p(u-n,e,t),c=[]},o-r)));if(u-n>=s){p(u-n,e,t),c=[];break}}}(t,n)}),e.exports.init=function(e){a=e}},function(e,t,n){const i=n(2),r=n(0);n(1);r.on("set-data",function(e,t,n){!function(e,t,n){i.send({command:"TRANSFER",eventName:"set-data-no-binding",from:"appservice",data:{vars:e,page:__appServiceEngine__.getCurrentRoute(),position:t,stack:n.join(" -> ")}})}(Object.keys(e),t,n)}),e.exports.init=function(){}},function(e,t,n){const i=n(2),r=n(1);function o(){const e=Reporter.slowReport;Object.defineProperties(Reporter,{slowReport:{value:function(t){e(t),"running"===r.status&&"pageInvoke"===t.key&&function(e,t){i.send({command:"TRANSFER",eventName:"execute-long-time",from:"appservice",data:{cost:e,extend:t,page:__appServiceEngine__.getCurrentRoute()}})}(t.cost,t.extend)}}})}e.exports.init=function(){o()}},function(e,t,n){const i=n(2),r=(n(0),n(1)),o=function(){return this}();function s(e,t){const n=function(n,s=0,...a){let c,u,f=__appServiceEngine__.getCurrentRoute();return"running"===r.status&&(Object.defineProperty(n,"name",{writable:!0}),n.name=`Audit_${t}_${f}`,c=function(){try{foo.bar.foo.bar}catch(e){const t=e.stack.split("\n")[3];if(t.indexOf("appservice/__asdebug__")>-1||t.indexOf("appservice/__dev__")>-1)return null;const n=t.match(/at (.*) \(([^)]+)\)/);return n?{funcName:n[1],path:n[2]}:null}return null}()),e("running"===r.status?function(){if(n.apply(o,a),!c)return;const e=__appServiceEngine__.getCurrentRoute(),r=(c.funcName||"").match(/Audit_(setTimeout|setInterval)_(.*)/);r&&r[2]&&(f=r[2]),u=(c.path||"").replace(/^.*\/appservice\/([^:]+).*$/,"$1"),e!==f&&function(e,t,n){i.send({command:"TRANSFER",eventName:"timer-no-recycle",from:"appservice",data:{name:t,page:e,path:n}})}(f,t,u)}:n,s)};return Object.defineProperty(n,"name",{writable:!0}),n.name=`Audit_${t}`,n}e.exports.init=function(e,t){!function(e,t){setInterval=s(t,"setInterval"),setTimeout=s(e,"setTimeout")}(e,t)}},function(e,t,n){const i=n(2),r=n(0);n(1);let o=[],s=[],a=[];__wxConfig&&__wxConfig.tabBar&&(a=__wxConfig.tabBar.list.map(e=>e.pagePath.replace(".html",""))),r.on("stop-audit",function(){let e=[];for(let t of s)e.push(t.route);e=e.concat(o),i.send({command:"TRANSFER",eventName:"page-info",from:"appservice",data:{pages:e}})}),__appServiceSDK__.onAppRoute(e=>{let t=__appServiceEngine__.getCurrentPages();o.indexOf(t[0].route)<0&&a.indexOf(t[0].route)>-1&&o.push(t[0].route),s=t}),e.exports.init=function(){}}]);