(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(t,e,n){"use strict";n.d(e,"c",function(){return y}),n.d(e,"b",function(){return d}),n.d(e,"a",function(){return g});var r=n(3);let o=null;function i(){return null!==o&&o.buffer===r.e.buffer||(o=new Uint8Array(r.e.buffer)),o}let u=new("object"==typeof self&&self.TextEncoder?self.TextEncoder:n(2).TextEncoder)("utf-8");function c(t){const e=u.encode(t),n=r.c(e.length);return i().set(e,n),[n,e.length]}let s=new("object"==typeof self&&self.TextDecoder?self.TextDecoder:n(2).TextDecoder)("utf-8");function l(t,e){return s.decode(i().subarray(t,t+e))}let f=null;let a=null;function p(){return null!==a&&a.buffer===r.e.buffer||(a=new Uint32Array(r.e.buffer)),a}function y(t,e,n,o){const[u,s]=function(t){const e=r.c(1*t.length);return i().set(t,e/1),[e,t.length]}(n),[a,y]=c(o),d=(null===f&&(f=r.b()),f);try{r.d(d,t,e,u,s,a,y);const n=p(),o=n[d/4],i=n[d/4+1],c=l(o,i).slice();return r.a(o,1*i),c}finally{r.a(u,1*s),r.a(a,1*y)}}function d(t,e){throw new Error(l(t,e))}function g(t){return Math.round(t)}},function(t,e,n){(function(t,r){var o=/%[sdj%]/g;e.format=function(t){if(!b(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(c(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,u=String(t).replace(o,function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}}),s=r[n];n<i;s=r[++n])g(s)||!w(s)?u+=" "+s:u+=" "+c(s);return u},e.deprecate=function(n,o){if(m(t.process))return function(){return e.deprecate(n,o).apply(this,arguments)};if(!0===r.noDeprecation)return n;var i=!1;return function(){if(!i){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),i=!0}return n.apply(this,arguments)}};var i,u={};function c(t,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&e._extend(r,n),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=s),f(r,t,r.depth)}function s(t,e){var n=c.styles[e];return n?"["+c.colors[n][0]+"m"+t+"["+c.colors[n][1]+"m":t}function l(t,e){return t}function f(t,n,r){if(t.customInspect&&n&&O(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return b(o)||(o=f(t,o,r)),o}var i=function(t,e){if(m(e))return t.stylize("undefined","undefined");if(b(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(h(e))return t.stylize(""+e,"number");if(d(e))return t.stylize(""+e,"boolean");if(g(e))return t.stylize("null","null")}(t,n);if(i)return i;var u=Object.keys(n),c=function(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}(u);if(t.showHidden&&(u=Object.getOwnPropertyNames(n)),j(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return a(n);if(0===u.length){if(O(n)){var s=n.name?": "+n.name:"";return t.stylize("[Function"+s+"]","special")}if(v(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(x(n))return t.stylize(Date.prototype.toString.call(n),"date");if(j(n))return a(n)}var l,w="",T=!1,E=["{","}"];(y(n)&&(T=!0,E=["[","]"]),O(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(w=" "+RegExp.prototype.toString.call(n)),x(n)&&(w=" "+Date.prototype.toUTCString.call(n)),j(n)&&(w=" "+a(n)),0!==u.length||T&&0!=n.length?r<0?v(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),l=T?function(t,e,n,r,o){for(var i=[],u=0,c=e.length;u<c;++u)z(e,String(u))?i.push(p(t,e,n,r,String(u),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(p(t,e,n,r,o,!0))}),i}(t,n,r,c,u):u.map(function(e){return p(t,n,r,c,e,T)}),t.seen.pop(),function(t,e,n){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(l,w,E)):E[0]+w+E[1]}function a(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o,i){var u,c,s;if((s=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?c=s.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):s.set&&(c=t.stylize("[Setter]","special")),z(r,o)||(u="["+o+"]"),c||(t.seen.indexOf(s.value)<0?(c=g(n)?f(t,s.value,null):f(t,s.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+c.split("\n").map(function(t){return"   "+t}).join("\n")):c=t.stylize("[Circular]","special")),m(u)){if(i&&o.match(/^\d+$/))return c;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=t.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=t.stylize(u,"string"))}return u+": "+c}function y(t){return Array.isArray(t)}function d(t){return"boolean"==typeof t}function g(t){return null===t}function h(t){return"number"==typeof t}function b(t){return"string"==typeof t}function m(t){return void 0===t}function v(t){return w(t)&&"[object RegExp]"===T(t)}function w(t){return"object"==typeof t&&null!==t}function x(t){return w(t)&&"[object Date]"===T(t)}function j(t){return w(t)&&("[object Error]"===T(t)||t instanceof Error)}function O(t){return"function"==typeof t}function T(t){return Object.prototype.toString.call(t)}function E(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(m(i)&&(i=r.env.NODE_DEBUG||""),t=t.toUpperCase(),!u[t])if(new RegExp("\\b"+t+"\\b","i").test(i)){var n=r.pid;u[t]=function(){var r=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,r)}}else u[t]=function(){};return u[t]},e.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=y,e.isBoolean=d,e.isNull=g,e.isNullOrUndefined=function(t){return null==t},e.isNumber=h,e.isString=b,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=m,e.isRegExp=v,e.isObject=w,e.isDate=x,e.isError=j,e.isFunction=O,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(6);var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function z(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",function(){var t=new Date,e=[E(t.getHours()),E(t.getMinutes()),E(t.getSeconds())].join(":");return[t.getDate(),S[t.getMonth()],e].join(" ")}(),e.format.apply(e,arguments))},e.inherits=n(7),e._extend=function(t,e){if(!e||!w(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t}}).call(this,n(4),n(5))},function(t,e,n){"use strict";var r=n.w[t.i];t.exports=r;n(1);r.f()},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var s,l=[],f=!1,a=-1;function p(){f&&s&&(f=!1,s.length?l=s.concat(l):a=-1,l.length&&y())}function y(){if(!f){var t=c(p);f=!0;for(var e=l.length;e;){for(s=l,l=[];++a<e;)s&&s[a].run();a=-1,e=l.length}s=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function g(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new d(t,e)),1!==l.length||f||c(y)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){"use strict";n.r(e),n.d(e,"fromData",function(){return o}),n.d(e,"fromCanvas",function(){return i});var r=n(1);const o=(t,e,n,o="plain")=>Object(r.c)(t,e,n,o),i=(t,e="plain")=>{const n=t.getContext("2d"),{width:r,height:i}=t,{data:u}=n.getImageData(0,0,r,i);return o(r,i,u,e)}}]]);