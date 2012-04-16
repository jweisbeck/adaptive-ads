/*
*	Concatenated JS Files
*
*	1.	jQuery v1.7.1 Minified
*	2.	bcom_global_scripts.js
*	3.	underscore-min-1.1.6.js
*	4.	backbone-0.3.3.min.js
*	5.	slider.js
*	6.	BrightcoveExperiences.js
*	7.	bcom_etaf_scripts.js
*	8.	bcom_gallery_scripts.js
*	9.	var var5 declaration
*	10. LAB.min.js
*	11. Using LAB to load scripts
*
*/

/*
*	1.
*	jQuery v1.7.1 
*/
/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);



/*
*	2.
*	<script language="JavaScript" type="text/javascript" src="http://cache.boston.com/universal/js/bcom_global_scripts.js"></script>
*/
var doc=document,win=window,sById=(doc.getElementById)?true:false;function setStyleName(objId,styleName){document.getElementById(objId).style.display=styleName;}
var archivedState=0;
function setCookie(name,value,expires,path,domain,secure){document.cookie=name+'='+escape(value)+((expires)?';expires='+expires.toGMTString():'')+';path='+((path)?path:'/')+';domain='+((domain)?domain:'boston.com')+((secure)?';secure':'');}
function ifSafari(){if((navigator.userAgent.indexOf('Safari')!=-1)||(navigator.userAgent.indexOf("Macintosh")!=-1)||(navigator.userAgent.indexOf("Mac_PowerPC")!=-1)){document.write("<style type='text/css' media='all'>@import 'http://cache.boston.com/universal/css/bcom_hp_styles_safari.css';</style>")};}
function getCookie(name){var dc=document.cookie,prefix=name+'=',begin=dc.indexOf('; '+prefix);if(begin==-1){begin=dc.indexOf(prefix);if(begin!=0)return null;}else begin+=2;var end=dc.indexOf(';',begin);if(end==-1)end=dc.length;return unescape(dc.substring(begin+prefix.length,end));}
function expireCookie(name,path,domain){document.cookie=name+'=;expires=Thu, 01-Jan-70 00:00:01 GMT;path='+((path)?path:'/')+';domain='+((domain)?domain:'boston.com');}
function windowLoaded(){}
if ((window.self != window.top) && !document.referrer.match(/https?:\/\/[^?\/]+\.bankrate\.com\//) && !document.referrer.match(/https?:\/\/[^?\/]+\.boston\.com\//)) {top.location.replace(window.location.pathname);}
function tabs(view,hideA,hideB){if(view.style.visibility=="hidden")
{view.style.visibility="visible";view.style.display="block";hideA.style.visibility="hidden";hideB.style.visibility="hidden";hideA.style.display="none";hideB.style.display="none";}
else{view.style.visibility="visible";view.style.display="block";}}
function tabs2(view,hideA){if(view.style.visibility=="hidden")
{view.style.visibility="visible";view.style.display="block";hideA.style.visibility="hidden";hideA.style.display="none";}
else{view.style.visibility="visible";view.style.display="block";}}
var var5='hp_header_';function keyword(){if(document.getElementById('textField').value!=""&&document.getElementById('textField').value!=null){return document.getElementById('textField').value.toLowerCase();}
else{return"User_Blank"}}
var otherTab;function choose(tab){if(tab!=otherTab){tab.className="searchOn";otherTab.className="";otherTab=tab;if(tab.id=="searchLocal"){document.getElementById("tab").value="";}else if(tab.id=="searchSite"){document.getElementById("tab").value="ssearch";}else if(tab.id=="searchBusiness"){document.getElementById("tab").value="yp";}}}
function searchSubmit(){omnitureCode(document.getElementById("tab"));}
function omnitureCode(tabName){var temp5=var5;if(tabName.value==""){if(document.getElementById('p1')!=null){document.getElementById('p1').value='Header_Searchbox_LocalSearch'};temp5=var5+'searchbox_greaterboston';}
    if(tabName.value=="ssearch"){if(document.getElementById('p1')!=null){document.getElementById('p1').value='Header_Searchbox_SiteSearch'};temp5=var5+'searchbox_site';}
    if(tabName.value=="yp"){if(document.getElementById('p1')!=null){document.getElementById('p1').value='Header_Searchbox_BusinessSearch'};temp5=var5+'searchbox_site';{document.getElementById('textField').name='s.ypsearch'};}
    if(keyword()!="User_Blank"){s_linkType='o';s_linkName='search_query';s_eVar2=keyword();s_eVar5=temp5;s_lnk=s_co(document.getElementById('searchForm'));s_gs('nytbglobe');}}
function openWindow(url,name,props){try{props=props.replace(/(resizable|scrollbars)\=no/g,'$1=yes');var nw=win.open(url,name,props);nw.focus();window.event.cancelBubble=true;}catch(e){}}
function MM_openBrWindow(url,name,props){openWindow(url,name,props);}
var doc=document,win=window,sById=(doc.getElementById)?true:false;function openWindow(url,name,props){try{props=props.replace(/(resizable|scrollbars)\=no/g,'$1=yes');var nw=win.open(url,name,props);nw.focus();window.event.cancelBubble=true;}catch(e){}}
var bcHomepage;var bcCategoryPage;var homepageSWF="homepage_thumbs";var categorySWF="category_thumbs";var titleIDs=new Array();function onTemplateLoaded()
{callFlash("addEventListener","contentLoad","onContentLoad");callFlash("addEventListener","mediaReady","onMediaReady");bcHomepage=document.getElementById("bcHomepage");bcCategoryPage=document.getElementById("bcCategoryPage");bcArticlePage=document.getElementById("bcArticlePage");bcRelatedVideos=document.getElementById("bcRelatedVideos");bcPlayerThumbnails=document.getElementById("bcPlayerThumbnails");bcThumbnailTitle=document.getElementById("bcThumbnailTitle");bcTitleHeadline=document.getElementById("bcTitleHeadline");bcPaging=document.getElementById("bcPaging");bcDescription=document.getElementById("bcDescription");bcVideoHeader=document.getElementById("bcVideoHeader");}
function onContentLoad()
{if(bcHomepage||bcCategoryPage)callFlash("getFeaturedLineup");if(bcHomepage)thisMovie(homepageSWF).unhide();if(bcArticlePage)onMediaReady();}
function onMediaReady()
{callFlash("getCurrentTitle");}
function getCurrentTitle_Result(titleDTO)
{if(bcTitleHeadline)bcTitleHeadline.innerHTML=titleDTO.displayName;if(bcDescription)bcDescription.innerHTML=titleDTO.shortDescription;if(bcVideoHeader)bcVideoHeader.style.visibility="visible";}
function getFeaturedLineup_Result(lineupDTO)
{titleIDS=new Array();titleIDs=lineupDTO.videoIds;for(var i=0;i<lineupDTO.videoIds.length;i++)
{callFlash("getTitleById",lineupDTO.videoIds[i]);}
if(bcRelatedVideos)bcRelatedVideos.innerHTML="RELATED VIDEOS ("+lineupDTO.videoIds.length+")";if(bcRelatedVideos)bcRelatedVideos.style.color="#000";onMediaReady();if(bcHomepage)thisMovie(homepageSWF).getPage("next");if(bcCategoryPage)thisMovie(categorySWF).buildThumbnails();}
function getTitleById_Result(titleDTO)
{if(bcHomepage)thisMovie(homepageSWF).buildTitleIDs(Number(titleDTO.id));if(bcHomepage)thisMovie(homepageSWF).buildTitles(String(titleDTO.displayName));if(bcHomepage)thisMovie(homepageSWF).buildThumbArray(String(titleDTO.thumbnailURL));if(bcCategoryPage)thisMovie(categorySWF).buildTitleIDs(Number(titleDTO.id));if(bcCategoryPage)thisMovie(categorySWF).buildTitles(String(titleDTO.displayName));if(bcCategoryPage)thisMovie(categorySWF).buildThumbArray(String(titleDTO.thumbnailURL));if(bcCategoryPage)thisMovie(categorySWF).buildDescriptions(String(titleDTO.shortDescription));}
function thisMovie(movieName)
{if(navigator.appName.indexOf("Microsoft")!=-1)
{return window[movieName];}
else
{return document[movieName];}}
var doc=document,win=window,sById=(doc.getElementById)?true:false;function openWindow(url,name,props){try{props=props.replace(/(resizable|scrollbars)\=no/g,'$1=yes');var nw=win.open(url,name,props);nw.focus();window.event.cancelBubble=true;}catch(e){}}
var primary_id='tab1';function switchTab1(){document.getElementById('tab1').className='active';document.getElementById('tab2').className='';document.getElementById('tab3').className='';document.getElementById('zventsFooter').style.display='block'}
function switchTab2(){document.getElementById('tab1').className='';document.getElementById('tab2').className='active';document.getElementById('tab3').className='';document.getElementById('zventsFooter').style.display='block'}
function switchTab3(){document.getElementById('tab1').className='';document.getElementById('tab2').className='';document.getElementById('tab3').className='active';document.getElementById('zventsFooter').style.display='none'}
var primary_id='tab1';function switchTabA(){document.getElementById('tabA').className='active';document.getElementById('tabB').className=''}
function switchTabB(){document.getElementById('tabA').className='';document.getElementById('tabB').className='active'}
function ShowDiv(a,b,c,d){var i;if(c){i=c}else{i=1};var z;while(z=document.getElementById(b+i)){if((i>=c)&&(i<=d)){if(i==a){z.style.display='block'}else{z.style.display='none'}}
i++}}
tabber={click:function(clicked){var ul=clicked.parentNode.parentNode;var tabs=ul.getElementsByTagName('a');for(i=0;i<tabs.length;++i){var a=tabs[i],on=(a==clicked);a.className=(on?'active':'');tabber.show(a.id.replace(/^tab/,'div'),on);}},zclick:function(clicked,when){tabber.click(clicked);tabber.show('zventsFooter',!when);if(ZventsTomorrowID&&when=='Tomorrow'){Z.widget.popular({id:ZventsTomorrowID,load:{when:when}});ZventsTomorrowID=null;}},show:function(id,show){document.getElementById(id).style.display=show?'block':'none';}};function keywordSelect(inputfield){if(document.getElementById(inputfield).value!=""&&document.getElementById(inputfield).value!=null){return document.getElementById(inputfield).value.toLowerCase();}
else{return"User_Blank"}}
function travelWidgetSubmit(){var kw="";if(document.getElementById('textField2').value==""){alert('Please enter a keyword, like "Maine" or "Bermuda hotels"');}else{document.getElementById('travelSearchWidget').submit();kw="Travel-"+keywordSelect('textField2');travelWidgetomnitureCode('searchbox',kw);}}
function travelWidgetomnitureCode(tabName,keyword,sco){var temp5=var5;temp5=var5+'travel'+tabName;s_linkType='o';s_linkName='search_query';s_eVar2=keyword;s_eVar5=temp5;s_lnk=s_co(document.getElementById('searchForm'));s_gs('nytbglobe');}


function Nytd_Pixel_addGlobalTaxonomyValue(value){}
function Nytd_Pixel(){}
function showLoginRRD(twidth){if(!twidth)twidth=191;if(getCookie("pathAuth")||getCookie("pathAuthSess")){ if(((getCookie("PSyncHint"))&&(getCookie("PSyncHint")!="-"))&&(getCookie("AT"))){if(OAS_sitepage == 'www.boston.com/homepage/defaulted'){tmpPlckUid = getCookie("AT").split("&u=")[1].split("&")[0];document.writeln('<div align="center"> <span id="mp"><a href="http://www.boston.com/community/persona.html?UID=' + tmpPlckUid + '&plckUserId=' + tmpPlckUid + '">Profile</a></span> | <span id="mc"><a href="http://www.boston.com/?__goto=mcenter">Settings</a></span> | <span id="lo"><a onclick="setCookie(\'AT\');document.location=\'http://www.boston.com/?__goto=logout\';return false" href="http://www.boston.com/?__goto=logout">Log out</a></span	></div>')}
else{tmpPlckUid = getCookie("AT").split("&u=")[1].split("&")[0];document.writeln('<div align="center"><span id="mp"><b><a href="http://www.boston.com/community/persona.html?UID=' + tmpPlckUid + '&plckUserId=' + tmpPlckUid + '">' + getCookie("PSyncHint") + '\'s profile</a></b></span> | <span id="mc"><a href="http://www.boston.com/?__goto=mcenter">Account settings</a></span> | <span id="lo"><a onclick="setCookie(\'AT\');document.location=\'http://www.boston.com/?__goto=logout\';return false" href="http://www.boston.com/?__goto=logout">Log out</a></span	></div>')}}else{document.writeln('<div align="center"><span id="mc"><a href="http://www.boston.com/?__goto=mcenter&amp;Header_Regi_Preferences">Preferences</a></span> | <span id="lo"><a href="http://www.boston.com/?__goto=logout&amp;p1=Header_Regi_LogOut">Log out</a></span></div>');}}
else{document.writeln('<div align="center"><span id="si"><a href="http://www.boston.com/?__goto=loginonlypage&amp;p1=Header_Regi_Signin">Sign In</a></span> | <span id="rn"><a href="http://www.boston.com/?__goto=loginpage&amp;Header_Regi_RegisterNow">Register now</a></span></div>');}}
eval(function(p,a,c,k,e,d){while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+c+'\\b','g'),k[c])}}return p}('36={7:9(6,4,5,3){35(!6)34;4=4||\'\';5=5||\'\';3=3||\'\';33.32(\'31://30.29/28-27?26=2&6=\'+6+\'&4=\'+4+\'&5=\'+5+\'&3=\'+3,20 19().17(),\'21=1,22=1,15=0,13=1,25=1,11=1,18=23,14=12,10 = 24,8 = 16\')}}',10,37,'|||topic|title|bodytext|url|remoteSubmit|top|function|left|resizable|600|statusbar|height|location|150|getTime|width|Date|new|toolbar|scrollbars|575|470|menubar|phase|submit|remote|com|digg|http|open|window|return|if|Digg'.split('|')))
function fbs_click(){u=location.href;t=document.title;void(window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=no,width=626,height=436'));return false;}
function classySwap(){var foo=Math.random();var bar;
var bar;
if(foo<0.25)
  bar='cars'
else
    bar='re';
var baz=bar+'CfiedContent';var spaz='g'+bar+'_on';var jazz='g'+bar;if(bar=='cars'){setStyleName('gcars_on','block');setStyleName('gcars','none');setStyleName(baz,'block');}
else{setStyleName(spaz,'block');setStyleName(jazz,'none');setStyleName('carsCfiedContent','None');setStyleName(baz,'block');}}
var globeWidgetTab;function chooseGlobe(tab){if(tab!=globeWidgetTab){tab.className="searchOn";globeWidgetTab.className="";globeWidgetTab=tab;if(tab.id=="globeArchive"){document.getElementById("gwsort").value="-articleprintpublicationdate";document.getElementById("gwdateRange").value="";}else if(tab.id=="todayGlobe"){document.getElementById("gwdateRange").value="today";document.getElementById("gwsort").value="";}}}
function globeWidgetSubmit(){omnitureGlobeCode(globeWidgetTab.id);}
function omnitureGlobeCode(tabName){var globeTemp5='';if(tabName=="globeArchive"){globeTemp5=temp5+'globearchive';}
if(tabName=="todayGlobe"){globeTemp5=temp5+'todaysglobe';}
if(globekeyword()!="User_Blank"){s_linkType='o';s_linkName='search_query';s_eVar2=globekeyword();s_eVar5=globeTemp5;s_lnk=s_co(document.getElementById('articleright_searchbox'));s_gs('nytbglobe');}}
function globekeyword(){if(document.getElementById('globeText').value!=""&&document.getElementById('globeText').value!=null){return document.getElementById('globeText').value.toLowerCase();}
else{return"User_Blank"}}
function calImage(){CalDate=CalDate.toLowerCase() ;
if(CalDate.indexOf(":")==-1){dte=CalDate.split("|");}else{dte=new Array();tmpDte=CalDate.split("-");dte[0]=tmpDte[0].substring(0,3);dte[1]=tmpDte[1];dte[3]=tmpDte[2].substring(0,4);tmpDte=tmpDte[0].split(", ");dte[2]=tmpDte[1];}
if(dte[2].indexOf("0")==0){dte[2]=dte[2].charAt(1)}
gbDate=parseInt(dte[2]);gbMonth=dte[1];gbYear=dte[3];var ldays=new Array("jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec")
for(i=0;i<ldays.length;i++){if(gbMonth.substring(0,3)==ldays[i]){gbMonNum=i};}
gbMonNum=gbMonNum+1;if(gbDate<10)(gbDate="0"+gbDate);else(gbDate=gbDate);if(gbMonNum<10)(gbMonNum="0"+gbMonNum);else(gbMonNum=gbMonNum);var popParams="'http://www.boston.com/news/globe/larger_view','largerview','width=650,height=1100,resizable=yes,scrollbars=yes,toolbar=no,location=no,menubar=no,status=no'";document.write("<a href=\"http://www.boston.com/news/globe/larger_view\" class=\"imageLink\" onclick=\"openWindow("+popParams+"); return false;\"><img src='http://cache.boston.com/globe/"+gbYear+"/"+gbMonNum+"/"+gbDate+"/today_thumbnail.jpeg' alt='The Boston Globe' width='189' /></a>");}
function redirectSelectMenu(smenu){if(typeof(smenu)=='string'&&sById)smenu=doc.getElementById(smenu);if(smenu){var sval=smenu.options[smenu.selectedIndex].value;if(sval)document.location.href=sval;}}
function MM_findObj(n,d){var p,i,x;if(!d)d=document;if((p=n.indexOf("?"))>0&&parent.frames.length){d=parent.frames[n.substring(p+1)].document;n=n.substring(0,p);}
if(!(x=d[n])&&d.all)x=d.all[n];for(i=0;!x&&i<d.forms.length;i++)x=d.forms[i][n];for(i=0;!x&&d.layers&&i<d.layers.length;i++)x=MM_findObj(n,d.layers[i].document);if(!x&&d.getElementById)x=d.getElementById(n);return x;}
function MM_showHideLayers(){var i,p,v,obj,args=MM_showHideLayers.arguments;for(i=0;i<(args.length-2);i+=3)if((obj=MM_findObj(args[i]))!=null){v=args[i+2];if(obj.style){obj=obj.style;v=(v=='show')?'visible':(v=='hide')?'hidden':v;}
obj.visibility=v;}}
function displayEmbed(){};function changeImageOn(){};function changeImageOff(){};function displayInformBox(){};
 
function clearText(thefield){if (thefield.defaultValue==thefield.value) thefield.value = ""; thefield.className='search_box active';} 
function checkForm(theform){if (theform.q.defaultValue==theform.q.value) theform.q.value = "";}

function signupLink(){var cookie1=getCookie('pathAuth'),cookie2=getCookie('pathAuthSess');if(cookie1!=null || cookie2!=null){document.writeln('<a href="http://www.boston.com/Boston/email?p1=Foot_ContactBostonCom_Newsletters">Newsletters</a>');}else{document.writeln('<a href="http://www.boston.com/Boston/email?p1=Foot_ContactBostonCom_Newsletters">Newsletters</a>');}}

function showWhat(divid)
{
	if(document.getElementById(divid).style.display == 'none'){
      document.getElementById(divid).style.display = 'block';
    }
}

function hideWhat(divid)
{
	if(document.getElementById(divid).style.display == 'block'){
      document.getElementById(divid).style.display = 'none';
    }
}

function keywordForm(inputId){
    if (document.getElementById(inputId).value != "" && document.getElementById(inputId).value != null){
      return document.getElementById(inputId).value.toLowerCase();
    }
    else{
      return "User_Blank"
    }
}


function bload(){
    if(document.getElementById("plckForumTitleTag")){
	document.title=(document.getElementById("plckForumTitleTag").innerHTML + " - Boston.com");
    }else{
	if(document.getElementById("plckTitleTag")){
	    document.title=(document.getElementById("plckTitleTag").innerHTML + " - Boston.com");
	}
    }
}


// Added for Pluck discovery widget.
function dateCleanUp(fromDate)
{
	var today = new Date();
	var dCompare = new Date(fromDate);
	var difference = (today.getTime() - dCompare.getTime());
	var tDiff = Math.floor(difference/(1000*60));
	var diffString = "";
	if(tDiff < 60)
	{
		diffString = tDiff + " " + ((tDiff > 1)?"minutes":"minute");
	}
	else
	{
		tDiff = Math.floor(tDiff/60);
		if(tDiff < 24)
		{
			diffString = tDiff + " " + ((tDiff > 1)?"hours":"hour");
		}
		else
		{
			tDiff = Math.floor(tDiff/24);
			diffString = tDiff + " " + ((tDiff > 1)?"days":"day");
		}
	}
	return(diffString);
}




//This is for refershing ads in iframes on pages with paginated Flash conent. When avail it should target OAS iframes only
function bcom_refreshAds(){
	var iframes = document.getElementsByTagName('iframe');
	for (var i = 0; i<iframes.length; i++){
		iframes[i].src = iframes[i].src;
	}
}

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

	
function bdc_showCompanionAdSection(adstring) {
    cleanAd();  

    var vca_div = document.createElement("div");
    vca_div.setAttribute("id", "bdc_videoCompanionAdSection");
    vca_div.innerHTML = adstring ;
    document.getElementById("Col2Top").appendChild(vca_div);
    $("#bdc_videoCompanionAdSection").slideDown(1000);
}

function cleanAd() {
    var x = document.getElementById("Col2Top");
    while (x.lastChild) {
	x.removeChild(x.lastChild);
    }
}


// YourTown Boston neighborhoods/suburbs toggle
function ytFlipTowns(resp)
{
	var isSuburbs = 0;
	if(resp.type == 'default')
		isSuburbs = 1;
	flipTownList(isSuburbs, false);
}

function flipTownList(isSuburbs, flashToggle)
{
	if(isSuburbs == 0)
	{		
		$('#townList').hide() ; 
		$('#neighborhoodList').show() ; 		
		if(typeof(flashToggle) == 'undefined') { document.getElementById("state_towns").jsZoomToTown('boston'); }
	}
	else
	{
		$('#neighborhoodList').hide(); 		
		$('#townList').show(); 		
		if(typeof(flashToggle) == 'undefined') { document.getElementById("state_towns").jsZoomToDefault(); }
	}
}
// End YourTown neighborhoods/suburbs toggle


/* To populate the Real Estate search box */
function reSearchTextDisplay() {
	var searchChild = document.getElementById('suggest1').firstChild;
	var searchChildValue = "Enter city, town or neighborhood";
	searchChild.value = searchChildValue;
	searchChild.onblur = function(){
		if (searchChild.value == "") 
			searchChild.value = searchChildValue;
	};
	searchChild.onfocus = function(){
		searchChild.value = "";
	};
	return false;
}


// PointsLocal widget function 
function loadPoints(design_id, element_id, proxy, options) {
	var pointsdata = "";
	var s_leadin;
	var id = "#" + element_id;
	var pointscall = proxy + design_id;

	$(document).ready(function() {
		$.get(pointscall, { },
		function(data){
			$(data).find('item').each(function(){
				var title = $(this).find('title').text();
				var url = $(this).find('url').text();
				var sourcename = $(this).find('sourcename').text();
				var description = $(this).find('description').text();
				var show_leadin = $(this).find('showdescription').text();
				s_leadin = show_leadin;
				var date = $(this).find('date').text();
				var tmpDate = new Date(date);
				var image = $(this).find('image').text();
				var show_image = 1;
				
				if (show_leadin != 1) {
					pointsdata += '<li><a href="' + url + '"><b>' + title + '</b></a> <span class="attr">' + sourcename + ', ' + (parseInt(tmpDate.getMonth())+1) + '/' + tmpDate.getDate() + '/' + tmpDate.getFullYear() + '</span></li>';
				}
				else {
					if (show_image == 1 && image) { 
					
						pointsdata += '<div class="padTop4"></div><div class="img100h3Left"><a href="' + url + '">' + '<img src="' + image + '" /></a><h3><a href="' + url + '">' + title + '</a></h3><div class="tt"><span>' + description + ' <span class="attr">' + sourcename + ', ' + (parseInt(tmpDate.getMonth())+1) + '/' + tmpDate.getDate() + '/' + tmpDate.getFullYear() + '</span></span></div><div class="cf"></div></div><div class="padTop4"></div>';
					 
					} else { 
						pointsdata += '<div class="padTop4"></div><div class="img100h3Left"><h3><a href="' + url + '">' + title + '</a></h3><div class="tt"><span>' + description + ' <span class="attr">' + sourcename + ', ' + (parseInt(tmpDate.getMonth())+1) + '/' + tmpDate.getDate() + '/' + tmpDate.getFullYear() + '</span></span></div><div class="cf"></div></div><div class="padTop4"></div>';
					}
				}

			});

		if (s_leadin != 1) {
			pointsdata = '<ul class="linklist">' + pointsdata + '</ul>';
		}

		$(id).append(pointsdata);

	  });

  });

 } //end pointsLocal





	jQuery(function($){
    
	    $('.generic-scroller').each(function(){
		    var scroller = $(this),
			pos_prop = scroller.hasClass( 'generic-scroller-horizontal' ) ? 'left' : 'top',
			size_prop = pos_prop === 'left' ? 'width' : 'height',
			outer = scroller.find( '.generic-scroller-outer' ),
			inner = outer.children().eq(0);
        
		    if ( inner.children().length <= 1 ) { return; }
        
		    // Allow interactive controls to be hidden until ready.
		    scroller.addClass( 'generic-scroller-js' );
        
		    // Add hover class for prev/next button mouseover.
		    scroller.find('.generic-scroller-prev_next').bind( 'mouseenter mouseleave', function(e){
			    $(this).toggleClass( 'generic-scroller-prev_next-hover', e.type === 'mouseenter' );
			});
        
		    // Prev button click.
		    scroller.find('.generic-scroller-prev').click(function(){
			    var pos = parseInt( inner.css( pos_prop ) ),
				scroller_size = outer[ size_prop ](),
				obj = {};
            
			    inner.children(':last').prependTo( inner );
			    inner.css( pos_prop, -scroller_size );
            
			    obj[ pos_prop ] = 0;
			    inner.stop( true, true ).animate( obj );
			});
        
		    // Next button click.
		    scroller.find('.generic-scroller-next').click(function(){
			    var pos = parseInt( inner.css( pos_prop ) ),
				scroller_size = outer[ size_prop ](),
				obj = {};
            
			    obj[ pos_prop ] = pos - scroller_size;
			    inner.stop( true, true ).animate( obj, function(){
				    inner.children(':first').appendTo( inner );
				    inner.css( pos_prop, 0 );
				});
			});
		});
    
	});
 
 
	// Quote Scroller.
 
	jQuery(function($){
 
	    $('.quote-scroller li').each(function(){
		    var li = $(this),
			a = li.find('a').eq(0),
			href = a.attr('href'),
			hit;
        
		    if ( href ) {
			li.addClass( 'clickable' );
            
			hit = a.clone()
			    .html( '&nbsp;' )
			    .addClass( 'button-hitarea' )
			    .appendTo( li );
            
			li.bind( 'mouseenter mouseleave', function(e){
				li.toggleClass( 'hover', e.type === 'mouseenter' );
			    });
		    }
		});
    
	    });
 
 
// BCOM-1439: billboardSlider
(function($){
  
  var ns = $.fn.billboardSlider = function( options ) {
    options = $.extend( {}, ns.options, options );
    
    return this.each(function(){
      var that = $(this),
        
        // Get cookie name.
        cname = that.attr( 'data-cname' ),
        
        // Get widget state based on cookie.
        collapsed = getCookie( cname ),
        
        // To cancel the timeout.
        timeout_id;
      
      // If already initialized, skip!
      if ( that.data( 'billboardSlider' ) ) { return; }
      
      // Set already-initialized flag
      that.data( 'billboardSlider', true );
      
      if ( !collapsed ) {
        // Close billboard after a delay (unless canceled).
        timeout_id = setTimeout( toggle , options.delay );
      } else{
        toggle( true );
      }
      
      // Toggle the clicked element
      function toggle( instantly ) {
        var speed = instantly ? 0 : options.speed;
        
        that.children( '.slider-expanded' )
          .stop( true, true )
          .animate({
            height: 'toggle'
          }, speed )
          
          .siblings('div')
            .stop( true, true )
            .animate({
              height: 'toggle'
            }, speed );
      };
      
      // Binding the toggle function to click.
      that.find('.slider-toggle').click(function(e){
        e.preventDefault();
        
        var date = new Date();
        date.setDate( date.getDate() + options.expiration_days );
        setCookie( cname, 1, date );
        
        timeout_id && clearTimeout( timeout_id );
        toggle();
      }); 
    });
  };
  
  // Set up some reasonable global defaults.
  ns.options = {
    delay: 10000,
    speed: 500,
    expiration_days: 7
  };
  
  // Initialize any sliders that weren't explicitly initialized.
  $(function(){
    // $('.slider-billboard').billboardSlider();
    ns.call( $('.slider-billboard') );
  });
  
})(jQuery);

// BCOM-1755 re-do Weather Map tabs (originally done w/Protoype) 

$(document).ready(function() {
  // Weather map tabs 
  $(".weatherMapsContent").hide();  // Hide tab content 
  $("ul.weatherMapTabs li:first").addClass("active").show(); // Show 1st element by default  
  $(".weatherMapsContent:first").show();  // Ditto 
	
  $("ul.weatherMapTabs li").click(function() { // tab is clicked 
    $("ul.weatherMapTabs li").removeClass("active");  // reset active 
    $(this).addClass("active"); // make new active 
    $(".weatherMapsContent").hide(); // hidecurrent content so we can show selected 
    var activeTab = $(this).find("a").attr("href"); // find id by href  
    $(activeTab).fadeIn(); 
    return false;
  });
  
  // Temp toggle F/C 
  $("#tempToggle .temp a").click(function(){ 
    $("#tempToggle .temp").toggleClass("active") ;
    $(".currentDeg").toggleClass("active") ;
  }) ; 
});

/* Travel drop-down widget revisited */
var count=0;
function clickLink(containerID) {
	var widgetkeyword='';
	if(count==0) { count++; }
	else 
		if(count==1) {
			var mylist=document.getElementById(containerID);
			var urlString=mylist.options[mylist.selectedIndex].value;
			if(urlString!='none') { window.location=mylist.options[mylist.selectedIndex].value }
			count=0;
		}
}

// Enable print styles
$(function() {
	// Bind to blog print link
  $('a#blogPrint').click(function() {
    // Launch print dialog
    print();
    return false;
  });
});

/* Daily Dose health widget,
 * enable category toggling  */
$(function() {
  var filterTeaseButtons = $( 'li.filter-single-category' ).not( '#more_categories' );
  // Bind toggling to click
  filterTeaseButtons.click(function() {
    var that = $(this);
    var curID = that.attr( 'id' );
    var curTease = $( 'li.filter-single-tease#' + curID + '_tease' );
    
    that
      .addClass( 'active' )
      .siblings()
      .removeClass('active');
    
    curTease
      .addClass('active')
      .siblings()
      .removeClass('active');
  });
});


/* empty mbox function */
function mboxCreate (){};


/* Allows for omniture tracking to be appended to deals widgets with some specificity */

$(function() {
	var all = document.getElementsByTagName("a")
	    , s = "?s_campaign="
	    , p = "?p1=";
	for (var i= all.length; i >= 0; i--){
	    if ($(all[i]).attr("data-campaign")){
    var us = "_"
		, current = $(all[i])
		, trackposn = current.attr("data-posn")
		, trackposn2 = current.attr("data-posntwo")
		, omnitureName = "Deals"
		, href = current.attr("href")
		, merchantAbbr = current.text().split(' ').slice(0,2).join(''); //scavanged from deals widget
    ;

		//deals with custom set deals
    if (current.attr("data-campaign") === "s"){
			$(all[i]).attr('href', href + s + omnitureName + us + var5 + trackposn + us + trackposn2);
	   }
	
    //deals with appended deals
		if (current.attr("data-campaign") === "s" && current.attr("data-posntwo") === "deal"){
			$(all[i]).attr('href', href + s + omnitureName + us + var5 + trackposn + us + merchantAbbr);
    }
    if (current.attr("data-campaign") === "p"){
			$(all[i]).attr('href', href + p + trackposn + us + var5 + trackposn2);
    }
	
	}
	}});




/*
*	3.
*	<script type="text/javascript" src="http://cache.boston.com/universal/js/underscore-min-1.1.6.js"></script>
*/
// Underscore.js 1.1.6
// (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){var p=this,C=p._,m={},i=Array.prototype,n=Object.prototype,f=i.slice,D=i.unshift,E=n.toString,l=n.hasOwnProperty,s=i.forEach,t=i.map,u=i.reduce,v=i.reduceRight,w=i.filter,x=i.every,y=i.some,o=i.indexOf,z=i.lastIndexOf;n=Array.isArray;var F=Object.keys,q=Function.prototype.bind,b=function(a){return new j(a)};typeof module!=="undefined"&&module.exports?(module.exports=b,b._=b):p._=b;b.VERSION="1.1.6";var h=b.each=b.forEach=function(a,c,d){if(a!=null)if(s&&a.forEach===s)a.forEach(c,d);else if(b.isNumber(a.length))for(var e=
0,k=a.length;e<k;e++){if(c.call(d,a[e],e,a)===m)break}else for(e in a)if(l.call(a,e)&&c.call(d,a[e],e,a)===m)break};b.map=function(a,c,b){var e=[];if(a==null)return e;if(t&&a.map===t)return a.map(c,b);h(a,function(a,g,G){e[e.length]=c.call(b,a,g,G)});return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var k=d!==void 0;a==null&&(a=[]);if(u&&a.reduce===u)return e&&(c=b.bind(c,e)),k?a.reduce(c,d):a.reduce(c);h(a,function(a,b,f){!k&&b===0?(d=a,k=!0):d=c.call(e,d,a,b,f)});if(!k)throw new TypeError("Reduce of empty array with no initial value");
return d};b.reduceRight=b.foldr=function(a,c,d,e){a==null&&(a=[]);if(v&&a.reduceRight===v)return e&&(c=b.bind(c,e)),d!==void 0?a.reduceRight(c,d):a.reduceRight(c);a=(b.isArray(a)?a.slice():b.toArray(a)).reverse();return b.reduce(a,c,d,e)};b.find=b.detect=function(a,c,b){var e;A(a,function(a,g,f){if(c.call(b,a,g,f))return e=a,!0});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(w&&a.filter===w)return a.filter(c,b);h(a,function(a,g,f){c.call(b,a,g,f)&&(e[e.length]=a)});return e};
b.reject=function(a,c,b){var e=[];if(a==null)return e;h(a,function(a,g,f){c.call(b,a,g,f)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=!0;if(a==null)return e;if(x&&a.every===x)return a.every(c,b);h(a,function(a,g,f){if(!(e=e&&c.call(b,a,g,f)))return m});return e};var A=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=!1;if(a==null)return e;if(y&&a.some===y)return a.some(c,d);h(a,function(a,b,f){if(e=c.call(d,a,b,f))return m});return e};b.include=b.contains=function(a,c){var b=
!1;if(a==null)return b;if(o&&a.indexOf===o)return a.indexOf(c)!=-1;A(a,function(a){if(b=a===c)return!0});return b};b.invoke=function(a,c){var d=f.call(arguments,2);return b.map(a,function(a){return(c.call?c||a:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);var e={computed:-Infinity};h(a,function(a,b,f){b=c?c.call(d,a,b,f):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,
c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);var e={computed:Infinity};h(a,function(a,b,f){b=c?c.call(d,a,b,f):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,f){return{value:a,criteria:c.call(d,a,b,f)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=
function(a){if(!a)return[];if(a.toArray)return a.toArray();if(b.isArray(a))return a;if(b.isArguments(a))return f.call(a);return b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?f.call(a,0,b):a[0]};b.rest=b.tail=function(a,b,d){return f.call(a,b==null||d?1:b)};b.last=function(a){return a[a.length-1]};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a){return b.reduce(a,function(a,d){if(b.isArray(d))return a.concat(b.flatten(d));
a[a.length]=d;return a},[])};b.without=function(a){var c=f.call(arguments,1);return b.filter(a,function(a){return!b.include(c,a)})};b.uniq=b.unique=function(a,c){return b.reduce(a,function(a,e,f){if(0==f||(c===!0?b.last(a)!=e:!b.include(a,e)))a[a.length]=e;return a},[])};b.intersect=function(a){var c=f.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.zip=function(){for(var a=f.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),
e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(o&&a.indexOf===o)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(z&&a.lastIndexOf===z)return a.lastIndexOf(b);for(var d=a.length;d--;)if(a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);d=arguments[2]||1;for(var e=Math.max(Math.ceil((b-a)/
d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};b.bind=function(a,b){if(a.bind===q&&q)return q.apply(a,f.call(arguments,1));var d=f.call(arguments,2);return function(){return a.apply(b,d.concat(f.call(arguments)))}};b.bindAll=function(a){var c=f.call(arguments,1);c.length==0&&(c=b.functions(a));h(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var b=c.apply(this,arguments);return l.call(d,b)?d[b]:d[b]=a.apply(this,arguments)}};b.delay=
function(a,b){var d=f.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(f.call(arguments,1)))};var B=function(a,b,d){var e;return function(){var f=this,g=arguments,h=function(){e=null;a.apply(f,g)};d&&clearTimeout(e);if(d||!e)e=setTimeout(h,b)}};b.throttle=function(a,b){return B(a,b,!1)};b.debounce=function(a,b){return B(a,b,!0)};b.once=function(a){var b=!1,d;return function(){if(b)return d;b=!0;return d=a.apply(this,arguments)}};
b.wrap=function(a,b){return function(){var d=[a].concat(f.call(arguments));return b.apply(this,d)}};b.compose=function(){var a=f.call(arguments);return function(){for(var b=f.call(arguments),d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}};b.keys=F||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[],d;for(d in a)l.call(a,d)&&(b[b.length]=d);return b};b.values=function(a){return b.map(a,
b.identity)};b.functions=b.methods=function(a){return b.filter(b.keys(a),function(c){return b.isFunction(a[c])}).sort()};b.extend=function(a){h(f.call(arguments,1),function(b){for(var d in b)b[d]!==void 0&&(a[d]=b[d])});return a};b.defaults=function(a){h(f.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,c){if(a===c)return!0;var d=typeof a;if(d!=
typeof c)return!1;if(a==c)return!0;if(!a&&c||a&&!c)return!1;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(a.isEqual)return a.isEqual(c);if(b.isDate(a)&&b.isDate(c))return a.getTime()===c.getTime();if(b.isNaN(a)&&b.isNaN(c))return!1;if(b.isRegExp(a)&&b.isRegExp(c))return a.source===c.source&&a.global===c.global&&a.ignoreCase===c.ignoreCase&&a.multiline===c.multiline;if(d!=="object")return!1;if(a.length&&a.length!==c.length)return!1;d=b.keys(a);var e=b.keys(c);if(d.length!=e.length)return!1;
for(var f in a)if(!(f in c)||!b.isEqual(a[f],c[f]))return!1;return!0};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(l.call(a,c))return!1;return!0};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=n||function(a){return E.call(a)==="[object Array]"};b.isArguments=function(a){return!(!a||!l.call(a,"callee"))};b.isFunction=function(a){return!(!a||!a.constructor||!a.call||!a.apply)};b.isString=function(a){return!!(a===""||a&&a.charCodeAt&&a.substr)};
b.isNumber=function(a){return!!(a===0||a&&a.toExponential&&a.toFixed)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===!0||a===!1};b.isDate=function(a){return!(!a||!a.getTimezoneOffset||!a.setUTCFullYear)};b.isRegExp=function(a){return!(!a||!a.test||!a.exec||!(a.ignoreCase||a.ignoreCase===!1))};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.noConflict=function(){p._=C;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=
0;e<a;e++)b.call(d,e)};b.mixin=function(a){h(b.functions(a),function(c){H(c,b[c]=a[c])})};var I=0;b.uniqueId=function(a){var b=I++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g};b.template=function(a,c){var d=b.templateSettings;d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||
null,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');";d=new Function("obj",d);return c?d(c):d};var j=function(a){this._wrapped=a};b.prototype=j.prototype;var r=function(a,c){return c?b(a).chain():a},H=function(a,c){j.prototype[a]=function(){var a=f.call(arguments);D.call(a,this._wrapped);return r(c.apply(b,a),this._chain)}};b.mixin(b);h(["pop","push","reverse","shift","sort",
"splice","unshift"],function(a){var b=i[a];j.prototype[a]=function(){b.apply(this._wrapped,arguments);return r(this._wrapped,this._chain)}});h(["concat","join","slice"],function(a){var b=i[a];j.prototype[a]=function(){return r(b.apply(this._wrapped,arguments),this._chain)}});j.prototype.chain=function(){this._chain=!0;return this};j.prototype.value=function(){return this._wrapped}})();




/*
*	4.
*	<script type="text/javascript" src="http://cache.boston.com/universal/js/backbone-0.3.3.min.js"></script>
*/
// Backbone.js 0.3.3
// (c) 2010 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://documentcloud.github.com/backbone
(function(){var e;e=typeof exports!=="undefined"?exports:this.Backbone={};e.VERSION="0.3.3";var f=this._;if(!f&&typeof require!=="undefined")f=require("underscore")._;var h=this.jQuery||this.Zepto;e.emulateHTTP=false;e.emulateJSON=false;e.Events={bind:function(a,b){this._callbacks||(this._callbacks={});(this._callbacks[a]||(this._callbacks[a]=[])).push(b);return this},unbind:function(a,b){var c;if(a){if(c=this._callbacks)if(b){c=c[a];if(!c)return this;for(var d=0,g=c.length;d<g;d++)if(b===c[d]){c.splice(d,
1);break}}else c[a]=[]}else this._callbacks={};return this},trigger:function(a){var b,c,d,g;if(!(c=this._callbacks))return this;if(b=c[a]){d=0;for(g=b.length;d<g;d++)b[d].apply(this,Array.prototype.slice.call(arguments,1))}if(b=c.all){d=0;for(g=b.length;d<g;d++)b[d].apply(this,arguments)}return this}};e.Model=function(a,b){a||(a={});if(this.defaults)a=f.extend({},this.defaults,a);this.attributes={};this._escapedAttributes={};this.cid=f.uniqueId("c");this.set(a,{silent:true});this._previousAttributes=
f.clone(this.attributes);if(b&&b.collection)this.collection=b.collection;this.initialize(a,b)};f.extend(e.Model.prototype,e.Events,{_previousAttributes:null,_changed:false,initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.attributes[a];return this._escapedAttributes[a]=(b==null?"":b).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,
"&quot;")},set:function(a,b){b||(b={});if(!a)return this;if(a.attributes)a=a.attributes;var c=this.attributes,d=this._escapedAttributes;if(!b.silent&&this.validate&&!this._performValidation(a,b))return false;if("id"in a)this.id=a.id;for(var g in a){var i=a[g];if(!f.isEqual(c[g],i)){c[g]=i;delete d[g];if(!b.silent){this._changed=true;this.trigger("change:"+g,this,i,b)}}}!b.silent&&this._changed&&this.change(b);return this},unset:function(a,b){b||(b={});var c={};c[a]=void 0;if(!b.silent&&this.validate&&
!this._performValidation(c,b))return false;delete this.attributes[a];delete this._escapedAttributes[a];if(!b.silent){this._changed=true;this.trigger("change:"+a,this,void 0,b);this.change(b)}return this},clear:function(a){a||(a={});var b=this.attributes,c={};for(attr in b)c[attr]=void 0;if(!a.silent&&this.validate&&!this._performValidation(c,a))return false;this.attributes={};this._escapedAttributes={};if(!a.silent){this._changed=true;for(attr in b)this.trigger("change:"+attr,this,void 0,a);this.change(a)}return this},
fetch:function(a){a||(a={});var b=this,c=j(a.error,b,a);(this.sync||e.sync)("read",this,function(d){if(!b.set(b.parse(d),a))return false;a.success&&a.success(b,d)},c);return this},save:function(a,b){b||(b={});if(a&&!this.set(a,b))return false;var c=this,d=j(b.error,c,b),g=this.isNew()?"create":"update";(this.sync||e.sync)(g,this,function(i){if(!c.set(c.parse(i),b))return false;b.success&&b.success(c,i)},d);return this},destroy:function(a){a||(a={});var b=this,c=j(a.error,b,a);(this.sync||e.sync)("delete",
this,function(d){b.collection&&b.collection.remove(b);a.success&&a.success(b,d)},c);return this},url:function(){var a=k(this.collection);if(this.isNew())return a;return a+(a.charAt(a.length-1)=="/"?"":"/")+this.id},parse:function(a){return a},clone:function(){return new this.constructor(this)},isNew:function(){return!this.id},change:function(a){this.trigger("change",this,a);this._previousAttributes=f.clone(this.attributes);this._changed=false},hasChanged:function(a){if(a)return this._previousAttributes[a]!=
this.attributes[a];return this._changed},changedAttributes:function(a){a||(a=this.attributes);var b=this._previousAttributes,c=false,d;for(d in a)if(!f.isEqual(b[d],a[d])){c=c||{};c[d]=a[d]}return c},previous:function(a){if(!a||!this._previousAttributes)return null;return this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},_performValidation:function(a,b){var c=this.validate(a);if(c){b.error?b.error(this,c):this.trigger("error",this,c,b);return false}return true}});
e.Collection=function(a,b){b||(b={});if(b.comparator){this.comparator=b.comparator;delete b.comparator}this._boundOnModelEvent=f.bind(this._onModelEvent,this);this._reset();a&&this.refresh(a,{silent:true});this.initialize(a,b)};f.extend(e.Collection.prototype,e.Events,{model:e.Model,initialize:function(){},toJSON:function(){return this.map(function(a){return a.toJSON()})},add:function(a,b){if(f.isArray(a))for(var c=0,d=a.length;c<d;c++)this._add(a[c],b);else this._add(a,b);return this},remove:function(a,
b){if(f.isArray(a))for(var c=0,d=a.length;c<d;c++)this._remove(a[c],b);else this._remove(a,b);return this},get:function(a){if(a==null)return null;return this._byId[a.id!=null?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");this.models=this.sortBy(this.comparator);a.silent||this.trigger("refresh",this,a);return this},pluck:function(a){return f.map(this.models,
function(b){return b.get(a)})},refresh:function(a,b){a||(a=[]);b||(b={});this._reset();this.add(a,{silent:true});b.silent||this.trigger("refresh",this,b);return this},fetch:function(a){a||(a={});var b=this,c=j(a.error,b,a);(this.sync||e.sync)("read",this,function(d){b.refresh(b.parse(d));a.success&&a.success(b,d)},c);return this},create:function(a,b){var c=this;b||(b={});if(a instanceof e.Model)a.collection=c;else a=new this.model(a,{collection:c});return a.save(null,{success:function(d,g){c.add(d);
b.success&&b.success(d,g)},error:b.error})},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId={};this._byCid={}},_add:function(a,b){b||(b={});a instanceof e.Model||(a=new this.model(a,{collection:this}));var c=this.getByCid(a);if(c)throw Error(["Can't add the same model to a set twice",c.id]);this._byId[a.id]=a;this._byCid[a.cid]=a;a.collection=this;this.models.splice(this.comparator?this.sortedIndex(a,this.comparator):
this.length,0,a);a.bind("all",this._boundOnModelEvent);this.length++;b.silent||a.trigger("add",a,this,b);return a},_remove:function(a,b){b||(b={});a=this.getByCid(a)||this.get(a);if(!a)return null;delete this._byId[a.id];delete this._byCid[a.cid];delete a.collection;this.models.splice(this.indexOf(a),1);this.length--;b.silent||a.trigger("remove",a,this,b);a.unbind("all",this._boundOnModelEvent);return a},_onModelEvent:function(a,b){if(a==="change:id"){delete this._byId[b.previous("id")];this._byId[b.id]=
b}this.trigger.apply(this,arguments)}});f.each(["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","invoke","max","min","sortBy","sortedIndex","toArray","size","first","rest","last","without","indexOf","lastIndexOf","isEmpty"],function(a){e.Collection.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});e.Controller=function(a){a||(a={});if(a.routes)this.routes=a.routes;this._bindRoutes();
this.initialize(a)};var o=/:([\w\d]+)/g,p=/\*([\w\d]+)/g;f.extend(e.Controller.prototype,e.Events,{initialize:function(){},route:function(a,b,c){e.history||(e.history=new e.History);f.isRegExp(a)||(a=this._routeToRegExp(a));e.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d))},this))},saveLocation:function(a){e.history.saveLocation(a)},_bindRoutes:function(){if(this.routes)for(var a in this.routes){var b=this.routes[a];
this.route(a,b,this[b])}},_routeToRegExp:function(a){a=a.replace(o,"([^/]*)").replace(p,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});e.History=function(){this.handlers=[];this.fragment=this.getFragment();f.bindAll(this,"checkUrl")};var l=/^#*/;f.extend(e.History.prototype,{interval:50,getFragment:function(a){return(a||window.location).hash.replace(l,"")},start:function(){var a=document.documentMode;if(a=h.browser.msie&&(!a||a<=7))this.iframe=h('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
"onhashchange"in window&&!a?h(window).bind("hashchange",this.checkUrl):setInterval(this.checkUrl,this.interval);return this.loadUrl()},route:function(a,b){this.handlers.push({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();if(a==this.fragment&&this.iframe)a=this.getFragment(this.iframe.location);if(a==this.fragment||a==decodeURIComponent(this.fragment))return false;if(this.iframe)window.location.hash=this.iframe.location.hash=a;this.loadUrl()},loadUrl:function(){var a=this.fragment=
this.getFragment();return f.any(this.handlers,function(b){if(b.route.test(a)){b.callback(a);return true}})},saveLocation:function(a){a=(a||"").replace(l,"");if(this.fragment!=a){window.location.hash=this.fragment=a;if(this.iframe&&a!=this.getFragment(this.iframe.location)){this.iframe.document.open().close();this.iframe.location.hash=a}}}});e.View=function(a){this._configure(a||{});this._ensureElement();this.delegateEvents();this.initialize(a)};var q=/^(\w+)\s*(.*)$/;f.extend(e.View.prototype,e.Events,
{tagName:"div",$:function(a){return h(a,this.el)},initialize:function(){},render:function(){return this},remove:function(){h(this.el).remove();return this},make:function(a,b,c){a=document.createElement(a);b&&h(a).attr(b);c&&h(a).html(c);return a},delegateEvents:function(a){if(a||(a=this.events)){h(this.el).unbind();for(var b in a){var c=a[b],d=b.match(q),g=d[1];d=d[2];c=f.bind(this[c],this);d===""?h(this.el).bind(g,c):h(this.el).delegate(d,g,c)}}},_configure:function(a){if(this.options)a=f.extend({},
this.options,a);if(a.model)this.model=a.model;if(a.collection)this.collection=a.collection;if(a.el)this.el=a.el;if(a.id)this.id=a.id;if(a.className)this.className=a.className;if(a.tagName)this.tagName=a.tagName;this.options=a},_ensureElement:function(){if(!this.el){var a={};if(this.id)a.id=this.id;if(this.className)a["class"]=this.className;this.el=this.make(this.tagName,a)}}});var m=function(a,b){var c=r(this,a,b);c.extend=m;return c};e.Model.extend=e.Collection.extend=e.Controller.extend=e.View.extend=
m;var s={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};e.sync=function(a,b,c,d){var g=s[a];a=a==="create"||a==="update"?JSON.stringify(b.toJSON()):null;b={url:k(b),type:g,contentType:"application/json",data:a,dataType:"json",processData:false,success:c,error:d};if(e.emulateJSON){b.contentType="application/x-www-form-urlencoded";b.processData=true;b.data=a?{model:a}:{}}if(e.emulateHTTP)if(g==="PUT"||g==="DELETE"){if(e.emulateJSON)b.data._method=g;b.type="POST";b.beforeSend=function(i){i.setRequestHeader("X-HTTP-Method-Override",
g)}}h.ajax(b)};var n=function(){},r=function(a,b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){return a.apply(this,arguments)};n.prototype=a.prototype;d.prototype=new n;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},k=function(a){if(!(a&&a.url))throw Error("A 'url' property or function must be specified");return f.isFunction(a.url)?a.url():a.url},j=function(a,b,c){return function(d){a?a(b,d):b.trigger("error",b,d,c)}}})();





/*
*	5.
*	<script type="text/javascript" src="http://cache.boston.com/universal/newsprojects/widgets/slider/slider.js"></script>
*/
var SliderModel = Backbone.Model.extend({

	defaults: {
		index: 0,
		current: null,
		interval: 6000 
	}
	
});

var SliderApp = Backbone.View.extend({
	
	options: {
		autoplay: true,
		resize_photos: true,
		interval: 6000,
		source: "json"
	},
	
	template: {
		gallery: '<div class="slider-wrapper" style="width: <%= options.photo_width %>px; height: <%= options.height %>px; "> <a id="slider-headline-link" class="slider-headline-link"> <div class="slider-photos" style="height: <%= options.photo_height %>px;"> <% _.each(collection, function(item) { %> <img class="slider-photo" src="<%= item.image_url %>" <% if (options.resize_photos) { %> width="<%= options.photo_width %>" <% } %> /> <% }); %> <div class="slider-headline-container"> <div class="slider-headline"></div> </div> </div> </a> <div class="slider-navigation"> <% if (options.autoplay) { %> <div class="slider-timer-container"> <div class="slider-timer-bar-background"> <div class="slider-timer-bar"></div> </div> <div class="slider-button slider-play"></div> </div> <% } %> <div class="slider-button slider-back"></div> <div class="slider-button slider-next"></div> <% _.each(collection, function(item, index) { %> <div class="slider-number" data-order="<%= index %>"><%= index + 1 %></div> <% }); %> <div class="slider-highlight"></div> </div> <div id="slider-caption-box" class="slider-caption-box"></div> </div>',
		image_caption: '<div class="slider-caption"><% if (image_caption) { %><%= image_caption %><% } %> <% if (image_credit) { %><span class="slider-credit"><%= image_credit %></span><% } %></div>'
	},
	
	initialize: function(settings) {
		
		// Must create separate model for each view
		if (!this.model) this.model = new SliderModel();
		
		// If we wrote the HTML, parse the data
		if (this.options.source == "html") {
			var collection = this.collection = [];
			$(".slider-photo-container").each(function() {
				var el = $(this);
				var item = {
					url: el.find(".slider-headline-link").attr("href"),
					title: el.find(".slider-headline").text(),
					image_url: el.find(".slider-photo").attr("src"),
					image_caption: el.find(".slider-caption-content").text(),
					image_credit: el.find(".slider-credit").text()
				};
				collection.push(item);
			});
		}
		
		// Create template from options + collection of items
		var html = _.template(this.template.gallery, this);
		$(this.el).html(html);
		
		// Set autoplay
		this.model.set({ autoplay: this.options.autoplay, interval: this.options.interval }, { silent: true });
		
		// Bind scope of events to "this" object
		_.bindAll(this, "render", "button", "item", "photo", "highlight", "moveHighlight", "next", "back", "to", "showPhoto", "changeHeadline", "showHeadline", "changeCaption", "changeLink", "start", "stop", "toggleAutoplay", "animateAutoplay", "autonext");
		this.model.bind("change", this.render);
		
		// Binding events manually because of jQuery 1.3.2, instead of using events hash
		this.$(".slider-number").click(this.to);
		this.$(".slider-next").click(this.next);
		this.$(".slider-back").click(this.back);
		this.$(".slider-number, .slider-next, .slider-back").click(this.stop);
		this.$(".slider-play").click(this.toggleAutoplay);
		
		// Attach the photo elements to the collection
		_.each(this.$(".slider-photo"), function(element, index) {
			this.collection[index].element = $(element);
		}, this);
		
		if (this.options.hide_controls) this.$(".slider-navigation").hide();
		if (this.options.hide_caption) this.$("#slider-caption-box").hide();
				
		// Set up CSS + initial display
		this.moveHighlight({ animate: false });
		this.render();
		if (this.options.autoplay) this.start();
		
		return this;
	},
	
	render: function() {
		
		// Set CSS for slider numbers
		this.$(".slider-number").removeClass("active");
		this.button(this.model.get("index")).addClass("active");
		
		// Highlight the active number
		this.moveHighlight();
		
		// Handle autoplay-related UI and animation	
		if (this.model.get("autoplay")) {
			this.$(".slider-play").addClass("pause");
			this.animateAutoplay();
		} else {
			this.$(".slider-play").removeClass("pause");
			this.$(".slider-timer-bar").stop().width(0);
		}
		
		// If the photo has changed, animate the change
		if (this.model.get("current") != this.model.get("index")) { 
			this.photo(this.model.get("current")).fadeOut();
			this.changeHeadline();
			this.changeCaption();
			this.changeLink();
		}
					
		setTimeout(this.showPhoto, 250);
		this.model.set({ current: this.model.get("index") }, { silent: true });
	},
	
	// Get button
	button: function(index) {
		return this.$(".slider-number:eq(" + index +")");
	},
	
	// Get item data
	item: function(index) {
		if (!index) index = 0;
		return this.collection[index];
	},
	
	// Get photo element
	photo: function(index) {
		if (!index) index = 0;
		return this.collection[index].element;
	},
	
	// Get highlight div
	highlight: function() {
		return this.$(".slider-highlight");
	},
	
	// Move highlight div to current button
	moveHighlight: function(options) {
		var defaults = {
			animate: true
		};
		defaults = _.extend(defaults, options);
		var position = { left: this.model.get("index") * 22 + 43 };
		if (defaults.animate) this.highlight().animate(position, 150);
		else this.highlight().css(position);
	},
	
	// Show next photo
	next: function() {
		var index = Number(this.model.get("index")) + 1;
		if (index > (this.collection.length - 1)) { index = 0; }
		this.model.set({ index: index });
	},
	
	// Show previous photo
	back: function() {
		var index = this.model.get("index") - 1;
		if (index < 0) index = this.collection.length - 1;
		this.model.set({ index: index });
	},
	
	// Go to photo
	to: function(event) {
		this.model.set({ index: $(event.currentTarget).attr("data-order") });
	},
	
	// Fade in next photo
	showPhoto: function() {
		this.photo(this.model.get("index")).fadeIn();
	},
	
	// Start changing headline by moving it down
	changeHeadline: function() {
		var height = this.$(".slider-headline-container").height();
		this.$(".slider-headline-container").animate({ bottom: -height }, { 
			complete: this.showHeadline
		});
	},
	
	// Finishing changing headline by moving it back up and changing text
	showHeadline: function() {
		var item = this.item(this.model.get("index"));
		if (item.title) {
			this.$(".slider-headline-container .slider-headline").html(item.title); 
			this.$(".slider-headline-container").animate({ bottom: 0 });
		}
	},
	
	changeCaption: function() {
		var item = this.item(this.model.get("index"));
		var html = "";
		if (item.image_caption || item.image_credit) { 
			if (!item.image_caption) item.image_caption = "";
			if (!item.image_credit) item.image_credit = "";
			html = _.template(this.template.image_caption, item);
		}
		this.$("#slider-caption-box").html(html);
	},
	
	changeLink: function() {
		var item = this.item(this.model.get("index"));
		var href = item.url || "";
		this.$("#slider-headline-link").attr("href", href);
	},
	
	// Start autoplaying
	start: function() {
		this.model.set({ autoplay: true });
	},
	
	// Stop autoplaying
	stop: function() {
		this.model.set({ autoplay: false });
	},
	
	// Toggle autoplaying
	toggleAutoplay: function() {
		if (this.model.get("autoplay")) this.stop();
		else this.start();
	},
	
	// Animate timer bar for autoplay
	animateAutoplay: function() {
		var result = this.$(".slider-timer-bar").width(0).animate({ width: "30" }, { duration: this.model.get("interval"), complete: this.autonext });
	},
	
	// Show next photo, IF autoplay is still on
	autonext: function() {
		if (!this.model.get("autoplay")) return false;
		this.next();
	}
	
});




/*
*	6.
*	<script language="JavaScript" type="text/javascript" src="http://cache.boston.com/partners/brightcove/BrightcoveExperiences.js"></script>
*/

if(brightcove==undefined){var brightcove={};brightcove.getExperience=function(){alert("Please import APIModules_all.js in order to use the API.");};}
if(brightcove.experiences==undefined){brightcove.servicesURL='http://c.brightcove.com/services';brightcove.cdnURL='http://admin.brightcove.com';brightcove.secureCDNURL='https://sadmin.brightcove.com';brightcove.secureServicesURL='https://secure.brightcove.com/services';brightcove.pubHost='c.$pubcode$.$zoneprefix$$zone$';brightcove.pubSecureHost='secure.$pubcode$.$zoneprefix$$zone$';brightcove.pubSubdomain='ariessaucetown.local';brightcove.experiences={};brightcove.experienceObjects={};brightcove.timeouts={};brightcove.flashTimeoutInterval=10000;brightcove.htmlTimeoutInterval=10000;brightcove.experienceNum=0;brightcove.majorVersion=9;brightcove.majorRevision=0;brightcove.minorRevision=28;brightcove.servlet={AS3:"federated_f9",HTML:"htmlFederated"};brightcove.playerType={FLASH:"flash",HTML:"html",INSTALLER:"installer",NO_SUPPORT:"nosupport"};brightcove.errorCodes={UNKNOWN:0,DOMAIN_RESTRICTED:1,GEO_RESTRICTED:2,INVALID_ID:3,NO_CONTENT:4,UNAVAILABLE_CONTENT:5,UPGRADE_REQUIRED_FOR_VIDEO:6,UPGRADE_REQUIRED_FOR_PLAYER:7,SERVICE_UNAVAILABLE:8};brightcove.defaultParam={};brightcove.defaultParam.width='100%';brightcove.defaultParam.height='100%';brightcove.defaultFlashParam={};brightcove.defaultFlashParam.allowScriptAccess='always';brightcove.defaultFlashParam.allowFullScreen='true';brightcove.defaultFlashParam.seamlessTabbing=false;brightcove.defaultFlashParam.swliveconnect=true;brightcove.defaultFlashParam.wmode='window';brightcove.defaultFlashParam.quality='high';brightcove.defaultFlashParam.bgcolor='#999999';brightcove.isIE=(window.ActiveXObject!=undefined);brightcove.userAgent=navigator.userAgent;brightcove._queuedAPICalls=[];var brightcoveJS=brightcove;brightcove.createExperiences=function(pEvent,pElementID){var experiences=[];var params;var experience;var requestedMinorRevision;var requestedMajorVersion;var flashSupport=brightcove.checkFlashSupport();var htmlSupport=brightcove.checkHtmlSupport();if(pElementID!=null){experiences.push(document.getElementById(pElementID));}else{experiences=brightcove.collectExperiences();}
if(brightcove.isIE){params=document.getElementsByTagName('param');}
var urlParams=brightcove.cacheUrlParams();var numExperiences=experiences.length;for(var i=0;i<numExperiences;i++){experience=experiences[i];experience=brightcove.copyDefaultParams(experience);experience=brightcove.copySnippetParams(experience,params);experience=brightcove.copyUrlParams(experience,urlParams,numExperiences);var playerType=brightcove.determinePlayerType(experience,flashSupport,htmlSupport);var secureConnections=(experience.params.secureConnections=="true");if(playerType==brightcove.playerType.HTML){secureConnections=false;}
if(playerType==brightcove.playerType.NO_SUPPORT){brightcove.renderInstallGif(experience,secureConnections);brightcove.reportUpgradeRequired(experience);continue;}
if(playerType==brightcove.playerType.HTML){delete experience.params.linkBaseURL;}
var file=brightcove.generateRequestUrl(experience,playerType,secureConnections);if(document.location.protocol=="http:"){var event='http://goku.brightcove.com/1pix.gif?';var gokuParams=["dcsuri=/viewer/player_load_req","playerType="+playerType,"playerURL="+encodeURIComponent(document.location||"")];var image=brightcove.createElement('image');for(var j in experience.params){gokuParams.push([encodeURIComponent(j)+"="+encodeURIComponent(experience.params[j])]);}
event+=gokuParams.join('&');image.src=event;}
brightcove.renderExperience(experience,file,playerType,secureConnections);}};brightcove.collectExperiences=function(){var experiences=[];var allObjects=document.getElementsByTagName('object');var numObjects=allObjects.length;for(var i=0;i<numObjects;i++){if(/\bBrightcoveExperience\b/.test(allObjects[i].className)){if(allObjects[i].type!='application/x-shockwave-flash'){experiences.push(allObjects[i]);}}}
return experiences;};brightcove.cacheUrlParams=function(){var urlParams={};urlParams.playerKey=brightcove.getParameter("bckey");urlParams.escapedPlayerKey=urlParams.playerKey;if(urlParams.playerKey){urlParams.escapedPlayerKey=urlParams.playerKey.split(",");for(var k in urlParams.escapedPlayerKey){urlParams.escapedPlayerKey[k]=brightcove.encode(urlParams.escapedPlayerKey[k]);}
urlParams.escapedPlayerKey=urlParams.escapedPlayerKey.join(",");}
urlParams.playerID=brightcove.getParameter("bcpid");urlParams.titleID=brightcove.getParameter("bctid");urlParams.lineupID=brightcove.getParameter("bclid");urlParams.autoStart=brightcove.getParameter("autoStart");urlParams.debuggerID=brightcove.getParameter("debuggerID");urlParams.forceHTML=brightcove.getParameter("forceHTML");urlParams.debug=brightcove.getParameter("debug");return urlParams;};brightcove.copyDefaultParams=function(experience){if(!experience.params)experience.params={};if(!experience.flashParams)experience.flashParams={};for(var i in brightcove.defaultParam){experience.params[i]=brightcove.defaultParam[i];}
for(var j in brightcove.defaultFlashParam){experience.flashParams[j]=brightcove.defaultFlashParam[j];}
if(experience.id.length>0){experience.params.flashID=experience.id;}else{experience.id=experience.params.flashID='bcExperienceObj'+(brightcove.experienceNum++);}
return experience;};brightcove.copySnippetParams=function(experience,params){if(!brightcove.isIE){params=experience.getElementsByTagName('param');}
var numParams=params.length;var param;for(var j=0;j<numParams;j++){param=params[j];if(brightcove.isIE&&param.parentNode.id!=experience.id){continue;}
experience.params[param.name]=param.value;}
if(experience.params.bgcolor!=undefined)experience.flashParams.bgcolor=experience.params.bgcolor;if(experience.params.wmode!=undefined)experience.flashParams.wmode=experience.params.wmode;if(experience.params.seamlessTabbing!=undefined)experience.flashParams.seamlessTabbing=experience.params.seamlessTabbing;return experience;};brightcove.copyUrlParams=function(experience,urlParams,numExperiences){if(experience.params.autoStart==undefined&&urlParams.autoStart!=undefined){experience.params.autoStart=urlParams.autoStart;}
if(urlParams.debuggerID!=undefined){experience.params.debuggerID=urlParams.debuggerID;}
if(urlParams.forceHTML!=undefined&&urlParams.forceHTML!=''){experience.params.forceHTML=urlParams.forceHTML;}
if(urlParams.debug!=undefined&&urlParams.debug!=''){experience.params.debug=urlParams.debug;}
var overrideContent=(urlParams.playerID.length<1&&urlParams.playerKey.length<1)||(urlParams.playerID==experience.params.playerID)||(urlParams.playerKey==experience.params.playerKey)||(urlParams.escapedPlayerKey==experience.params.playerKey);if(overrideContent){if(urlParams.titleID.length>0){experience.params.videoID=urlParams.titleID;experience.params["@videoPlayer"]=urlParams.titleID;experience.params.autoStart=(experience.params.autoStart!="false"&&urlParams.autoStart!="false");}
if(urlParams.lineupID.length>0){experience.params.lineupID=urlParams.lineupID;}}
return experience;};brightcove.determinePlayerType=function(experience,flashSupport,htmlSupport){if(flashSupport==null&&htmlSupport==false){return brightcove.playerType.NO_SUPPORT;}
if(experience.params.forceHTML){if(window.console){var message="The forceHTML parameter was used for the Brightcove player. This value should ONLY be used for";message+=" development and testing purposes and is not supported in production environments.";console.log(message);}
return brightcove.playerType.HTML;}
if(flashSupport!=null){if(brightcove.isFlashVersionSufficient(experience,flashSupport)){return brightcove.playerType.FLASH;}else{return brightcove.playerType.INSTALLER;}}
if(htmlSupport){if(brightcove.isSupportedHTMLDevice()||experience.params.htmlFallback){return brightcove.playerType.HTML;}}
return brightcove.playerType.NO_SUPPORT;};brightcove.isFlashVersionSufficient=function(experience,flashSupport){if(flashSupport==null)return false;var setMajorVersion=false;var requestedMajorVersion;var requestedMajorRevision;var requestedMinorRevision;if(experience.params.majorVersion!=undefined){requestedMajorVersion=parseInt(experience.params.majorVersion,10);setMajorVersion=true;}else{requestedMajorVersion=brightcove.majorVersion;}
if(experience.params.majorRevision!=undefined){requestedMajorRevision=parseInt(experience.params.majorRevision,10);}else{if(setMajorVersion){requestedMajorRevision=0;}else{requestedMajorRevision=brightcove.majorRevision;}}
if(experience.params.minorRevision!=undefined){requestedMinorRevision=parseInt(experience.params.minorRevision,10);}else{if(setMajorVersion){requestedMinorRevision=0;}else{requestedMinorRevision=brightcove.minorRevision;}}
if(flashSupport.majorVersion>requestedMajorVersion||(flashSupport.majorVersion==requestedMajorVersion&&flashSupport.majorRevision>requestedMajorRevision)||(flashSupport.majorVersion==requestedMajorVersion&&flashSupport.majorRevision==requestedMajorRevision&&flashSupport.minorRevision>=requestedMinorRevision)){return true;}
return false;};brightcove.generateRequestUrl=function(experience,playerType,secureConnections){var file;if(playerType==brightcove.playerType.INSTALLER){file=brightcove.cdnURL+"/viewer/playerProductInstall.swf";var MMPlayerType=brightcove.isIE?"ActiveX":"PlugIn";document.title=document.title.slice(0,47)+" - Flash Player Installation";var MMdoctitle=document.title;file+="?&MMredirectURL="+window.location+'&MMplayerType='+MMPlayerType+'&MMdoctitle='+MMdoctitle;brightcove.reportUpgradeRequired(experience);}else{if(secureConnections){file=brightcove.getPubURL(brightcove.secureServicesURL,brightcove.pubSecureHost,experience.params.pubCode);}else{file=brightcove.getPubURL(brightcove.servicesURL,brightcove.pubHost,experience.params.pubCode);}
var servlet=(playerType==brightcove.playerType.HTML)?brightcove.servlet.HTML:brightcove.servlet.AS3;file+=('/viewer/'+servlet+'?'+brightcove.getOverrides());for(var config in experience.params){file+='&'+encodeURIComponent(config)+'='+encodeURIComponent(experience.params[config]);}}
return file;};brightcove.renderInstallGif=function(experience,secureConnections){var containerID='_container'+experience.id;var container=brightcove.createElement('span');if(experience.params.height.charAt(experience.params.height.length-1)=="%"){container.style.display='block';}else{container.style.display='inline-block';}
container.id=containerID;var cdnURL=secureConnections?brightcove.secureCDNURL:brightcove.cdnURL;var linkHTML="<a href='http://www.adobe.com/go/getflash/' target='_blank'><img src='"+cdnURL+"/viewer/upgrade_flash_player2.gif' alt='Get Flash Player' width='314' height='200' border='0'></a>";experience.parentNode.replaceChild(container,experience);document.getElementById(containerID).innerHTML=linkHTML;};brightcove.renderExperience=function(experience,file,playerType,secureConnections){var experienceElement;var experienceID=experience.id;var container;var containerID='_container'+experienceID;var timeout=brightcove.flashTimeoutInterval;if(experience.params.playerKey||experience.params.playerID||experience.params.playerId||experience.params.playerid){brightcove.experienceObjects[experienceID]=experience;var unminified=(brightcove.getParameter("unminified")=="true")||(experience.params.unminified==="true");if(experience.params.includeAPI==="true"&&!(brightcove._apiRequested||brightcove.api)){var source="/js/api/";if(unminified){source+="unminified/";}
source+="SmartPlayerAPI.js";var apiInclude=brightcove.createElement('script');apiInclude.type="text/javascript";apiInclude.src=brightcove.cdnURL+source;experience.parentNode.appendChild(apiInclude);brightcove._apiRequested=true;}
if(playerType===brightcove.playerType.FLASH){file+="&startTime="+new Date().getTime();}
if(playerType===brightcove.playerType.HTML){timeout=brightcove.htmlTimeoutInterval;file+="&startTime="+new Date().getTime();file+="&refURL="+(window.document.referrer?window.document.referrer:'not available');if(unminified){file+="&unminified=true";}
experienceElement=brightcove.createElement('iframe');experienceElement.id=experienceID;experienceElement.width=experience.params.width;experienceElement.height=experience.params.height;experienceElement.className=experience.className;experienceElement.frameborder=0;experienceElement.scrolling="no";experienceElement.style.borderStyle="none";experience.parentNode.replaceChild(experienceElement,experience);brightcove.experiences[experienceID]=experienceElement;experience.element=experienceElement;if(experience.params.videoID||experience.params.videoId){file+="&"+encodeURIComponent("@videoPlayer")+"="+encodeURIComponent(experience.params.videoID||experience.params.videoId);}
experienceElement.src=file;}else{if(brightcove.isIE){container=brightcove.createElement('span');if(experience.params.height.charAt(experience.params.height.length-1)=="%"){container.style.display='block';}else{container.style.display='inline-block';}
container.id=containerID;experience.flashParams.movie=file;var options='';for(var pOption in experience.flashParams){options+='<param name="'+pOption+'" value="'+experience.flashParams[pOption]+'" />';}
var protocol=secureConnections?"https":"http";var experienceHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'
+' codebase="'+protocol+'://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+brightcove.majorVersion+','+brightcove.majorRevision+','+brightcove.minorRevision+',0"'
+' id="'+experienceID+'"'
+' width="'+experience.params.width+'"'
+' height="'+experience.params.height+'"'
+' type="application/x-shockwave-flash"'
+' class="BrightcoveExperience">'
+options
+'</object>';experience.parentNode.replaceChild(container,experience);document.getElementById(containerID).innerHTML=experienceHTML;brightcove.experiences[experienceID]=container;}else{experienceElement=brightcove.createElement('object');experienceElement.type='application/x-shockwave-flash';experienceElement.data=file;experienceElement.id=experience.params.flashID;experienceElement.width=experience.params.width;experienceElement.height=experience.params.height;experienceElement.className=experience.className;experienceElement.setAttribute("seamlesstabbing",experience.flashParams.seamlessTabbing);var tempParam;for(var config in experience.flashParams){tempParam=brightcove.createElement('param');tempParam.name=config;tempParam.value=experience.flashParams[config];experienceElement.appendChild(tempParam);}
experience.parentNode.replaceChild(experienceElement,experience);brightcove.experiences[experienceID]=experienceElement;}}
brightcove.timeouts[experience.id]=setTimeout(function(){brightcove.handleExperienceTimeout(experienceID);},timeout);}};brightcove.handleExperienceTimeout=function(pID){brightcove.executeErrorHandlerForExperience(brightcove.experienceObjects[pID],{type:"templateError",errorType:"serviceUnavailable",code:brightcove.errorCodes.SERVICE_UNAVAILABLE,info:pID});};brightcove.reportPlayerLoad=function(pID){var timeout=brightcove.timeouts[pID];if(timeout){clearTimeout(timeout);}};brightcove.reportUpgradeRequired=function(pExperience){brightcove.executeErrorHandlerForExperience(pExperience,{type:"templateError",errorType:"upgradeRequiredForPlayer",code:brightcove.errorCodes.UPGRADE_REQUIRED_FOR_PLAYER,info:pExperience.id});};brightcove.checkFlashSupport=function(){var isIE=(window.ActiveXObject!=undefined);var versions=(isIE)?brightcove.checkFlashSupportIE():brightcove.checkFlashSupportStandard();return versions;};brightcove.checkFlashSupportIE=function(){var versions;try{var flash=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");var version=flash.GetVariable('$version');versions=/ ([0-9]+),([0-9]+),([0-9]+),/.exec(version);}catch(exception){return null;}
return{majorVersion:versions[1],majorRevision:versions[2],minorRevision:versions[3]};};brightcove.checkFlashSupportStandard=function(){var versions;var majorVersion;var majorRevision;var minorRevision;try{if(typeof navigator.plugins!='undefined'&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var swfVersion=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";var description=navigator.plugins["Shockwave Flash"+swfVersion].description;var filename=navigator.plugins["Shockwave Flash"+swfVersion].filename;if(filename.match){if(filename.toLowerCase().match(/lite/)){throw new Error();}}
versions=description.split(" ");majorVersion=versions[2].split(".")[0];majorRevision=versions[2].split(".")[1];minorRevision=versions[3];if(minorRevision==""){minorRevision=versions[4];}
if(minorRevision[0]=="d"){minorRevision=minorRevision.substring(1);}else if(minorRevision[0]=="r"){minorRevision=minorRevision.substring(1);if(minorRevision.indexOf("d")>0){minorRevision=minorRevision.substring(0,minorRevision.indexOf("d"));}}}else{throw new Error();}}else{return null;}}catch(exception){return null;}
return{majorVersion:majorVersion,majorRevision:majorRevision,minorRevision:minorRevision};};brightcove.checkHtmlSupport=function(){var v=brightcove.createElement('video');var c=brightcove.createElement('canvas');var videoSupport=true;if(!brightcove.userAgent.match(new RegExp("android","i"))){videoSupport=!!(v.canPlayType&&v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/,''));}
if(brightcove.userAgent.match(/BlackBerry.*Version\/6\.0/)){return false;}
var canvasSupport=!!brightcove.createElement('canvas').getContext;return videoSupport&&canvasSupport;};brightcove.isSupportedHTMLDevice=function(pUAString){var types=["iPad","iPhone","iPod","android"];var numTypes=types.length;var uaString=pUAString||brightcove.userAgent;for(var i=0;i<numTypes;i++){if(uaString.match(new RegExp(types[i],"i"))){return true;}}
return false;};brightcove.getTechnology=function(pExperienceId){for(var id in brightcove.experiences){if(pExperienceId==id){return(brightcove.experiences[id].tagName=="object")?brightcove.playerType.FLASH:brightcove.playerType.HTML;}}
return brightcove.playerType.NO_SUPPORT;};brightcove.respondToMessages=function(pMessage){if(brightcove.verifyMessage(pMessage)){var messageParts=pMessage.data.split("::");var type=messageParts[1];var messageJson=messageParts[2].split("\n").join(" ");var messageDataObject;if(window.JSON){messageDataObject=window.JSON.parse(messageJson);}else{messageDataObject=brightcove.json_parse(messageJson);}
switch(type){case"error":brightcove.executeMessageCallback(messageDataObject,brightcove.executeErrorHandlerForExperience);break;case"api":brightcove.handleAPICallForHTML(messageDataObject);break;case"handler":var event=brightcove.internal._convertDates(messageDataObject.event);try{brightcove.internal._handlers[messageDataObject.handler](event);}catch(e){}
break;case"asyncGetter":var data=brightcove.internal._convertDates(messageDataObject.data);brightcove.internal._handlers[messageDataObject.handler](data);break;}}};brightcove.verifyMessage=function(pMessage){return pMessage.data.match(/brightcove.player/);};brightcove.handleAPICallForHTML=function(pMessageObject){var experience=brightcove.experienceObjects[pMessageObject.id];if(experience==null){return;}
var id=experience.id;var method=pMessageObject.method;switch(method){case"initializeBridge":brightcove.reportPlayerLoad(id);if(pMessageObject.arguments[0]){if(brightcove.internal!=null){brightcove.internal._setAPICallback(id,null,pMessageObject.arguments[1]);brightcove.callHandlerForPlayer(experience,"templateLoadHandler",id);}else if(brightcove._apiRequested){brightcove._queuedAPICalls.push(pMessageObject);}}
break;case"callTemplateReady":if(brightcove._apiRequested&&!brightcove.internal){brightcove._queuedAPICalls.push(pMessageObject);}else{var event=pMessageObject.arguments;brightcove.callHandlerForPlayer(experience,"templateReadyHandler",event);}
break;}};brightcove.callHandlerForPlayer=function(pExperience,pHandler,pArgument){if(pExperience&&pExperience.params&&pExperience.params[pHandler]){var namespaceArray=pExperience.params[pHandler].split(".");var namespaces;if((namespaces=namespaceArray.length)>1){var trace=window;for(var i=0;i<namespaces;i++){trace=trace[namespaceArray[i]];}
if(typeof trace==="function"){trace(pArgument);}}else{window[pExperience.params[pHandler]](pArgument);}}};brightcove.executeErrorHandlerForExperience=function(pExperience,pErrorObject){brightcove.callHandlerForPlayer(pExperience,"templateErrorHandler",pErrorObject);};brightcove.executeMessageCallback=function(pMessageDataObject,pCallback){var experience;for(var experienceKey in brightcove.experienceObjects){experience=brightcove.experienceObjects[experienceKey];if(experience.element.src===pMessageDataObject.__srcUrl){delete pMessageDataObject.__srcUrl;pCallback(experience,pMessageDataObject);break;}}};brightcove.createExperience=function(pElement,pParentOrSibling,pAppend){if(!pElement.id||pElement.id.length<1){pElement.id='bcExperienceObj'+(brightcove.experienceNum++);}
if(pAppend){pParentOrSibling.appendChild(pElement);}else{pParentOrSibling.parentNode.insertBefore(pElement,pParentOrSibling);}
brightcove.createExperiences(null,pElement.id);};brightcove.removeExperience=function(pID){if(brightcove.experiences[pID]!=null){brightcove.experiences[pID].parentNode.removeChild(brightcove.experiences[pID]);}};brightcove.getURL=function(){var url;if(typeof window.location.search!='undefined'){url=window.location.search;}else{url=/(\?.*)$/.exec(document.location.href);}
return url;};brightcove.getOverrides=function(){var url=brightcove.getURL();var query=new RegExp('@[\\w\\.]+=[^&]+','g');var value=query.exec(url);var overrides="";while(value!=null){overrides+="&"+value;value=query.exec(url);}
return overrides;};brightcove.getParameter=function(pName,pDefaultValue){if(pDefaultValue==null)pDefaultValue="";var url=brightcove.getURL();var query=new RegExp(pName+'=([^&]*)');var value=query.exec(url);if(value!=null){return value[1];}else{return pDefaultValue;}};brightcove.createElement=function(el){if(document.createElementNS){return document.createElementNS('http://www.w3.org/1999/xhtml',el);}else{return document.createElement(el);}};brightcove.i18n={'BROWSER_TOO_OLD':'The browser you are using is too old. Please upgrade to the latest version of your browser.'};brightcove.removeListeners=function(){if(/KHTML/i.test(navigator.userAgent)){clearInterval(checkLoad);document.removeEventListener('load',brightcove.createExperiences,false);}
if(typeof document.addEventListener!='undefined'){document.removeEventListener('DOMContentLoaded',brightcove.createExperiences,false);document.removeEventListener('load',brightcove.createExperiences,false);}else if(typeof window.attachEvent!='undefined'){window.detachEvent('onload',brightcove.createExperiences);}};brightcove.getPubURL=function(source,host,pubCode){if(!pubCode||pubCode=="")return source;var re=/^([htps]{4,5}\:\/\/)([^\/\:]+)/i;host=host.replace("$pubcode$",pubCode).replace("$zoneprefix$$zone$",brightcove.pubSubdomain);return source.replace(re,"$1"+host);};brightcove.createExperiencesPostLoad=function(){brightcove.removeListeners();brightcove.createExperiences();};brightcove.encode=function(string){string=escape(string);string=string.replace(/\+/g,"%2B");string=string.replace(/\-/g,"%2D");string=string.replace(/\*/g,"%2A");string=string.replace(/\//g,"%2F");string=string.replace(/\./g,"%2E");string=string.replace(/_/g,"%5F");string=string.replace(/@/g,"%40");return string;};if(/KHTML/i.test(navigator.userAgent)){var checkLoad=setInterval(function(){if(/loaded|complete/.test(document.readyState)){clearInterval(checkLoad);brightcove.createExperiencesPostLoad();}},70);document.addEventListener('load',brightcove.createExperiencesPostLoad,false);}
if(typeof document.addEventListener!='undefined'){document.addEventListener('DOMContentLoaded',brightcove.createExperiencesPostLoad,false);document.addEventListener('load',brightcove.createExperiencesPostLoad,false);window.addEventListener("message",brightcove.respondToMessages,false);}else if(typeof window.attachEvent!='undefined'){window.attachEvent('onload',brightcove.createExperiencesPostLoad);}else{alert(brightcove.i18n.BROWSER_TOO_OLD);}}
brightcove.json_parse=(function(){"use strict";var state,stack,container,key,value,escapes={'\\':'\\','"':'"','/':'/','t':'\t','n':'\n','r':'\r','f':'\f','b':'\b'},string={go:function(){state='ok';},firstokey:function(){key=value;state='colon';},okey:function(){key=value;state='colon';},ovalue:function(){state='ocomma';},firstavalue:function(){state='acomma';},avalue:function(){state='acomma';}},number={go:function(){state='ok';},ovalue:function(){state='ocomma';},firstavalue:function(){state='acomma';},avalue:function(){state='acomma';}},action={'{':{go:function(){stack.push({state:'ok'});container={};state='firstokey';},ovalue:function(){stack.push({container:container,state:'ocomma',key:key});container={};state='firstokey';},firstavalue:function(){stack.push({container:container,state:'acomma'});container={};state='firstokey';},avalue:function(){stack.push({container:container,state:'acomma'});container={};state='firstokey';}},'}':{firstokey:function(){var pop=stack.pop();value=container;container=pop.container;key=pop.key;state=pop.state;},ocomma:function(){var pop=stack.pop();container[key]=value;value=container;container=pop.container;key=pop.key;state=pop.state;}},'[':{go:function(){stack.push({state:'ok'});container=[];state='firstavalue';},ovalue:function(){stack.push({container:container,state:'ocomma',key:key});container=[];state='firstavalue';},firstavalue:function(){stack.push({container:container,state:'acomma'});container=[];state='firstavalue';},avalue:function(){stack.push({container:container,state:'acomma'});container=[];state='firstavalue';}},']':{firstavalue:function(){var pop=stack.pop();value=container;container=pop.container;key=pop.key;state=pop.state;},acomma:function(){var pop=stack.pop();container.push(value);value=container;container=pop.container;key=pop.key;state=pop.state;}},':':{colon:function(){if(Object.hasOwnProperty.call(container,key)){throw new SyntaxError('Duplicate key "'+key+'"');}
state='ovalue';}},',':{ocomma:function(){container[key]=value;state='okey';},acomma:function(){container.push(value);state='avalue';}},'true':{go:function(){value=true;state='ok';},ovalue:function(){value=true;state='ocomma';},firstavalue:function(){value=true;state='acomma';},avalue:function(){value=true;state='acomma';}},'false':{go:function(){value=false;state='ok';},ovalue:function(){value=false;state='ocomma';},firstavalue:function(){value=false;state='acomma';},avalue:function(){value=false;state='acomma';}},'null':{go:function(){value=null;state='ok';},ovalue:function(){value=null;state='ocomma';},firstavalue:function(){value=null;state='acomma';},avalue:function(){value=null;state='acomma';}}};function debackslashify(text){return text.replace(/\\(?:u(.{4})|([^u]))/g,function(a,b,c){return b?String.fromCharCode(parseInt(b,16)):escapes[c];});}
return function(source,reviver){var r,tx=/^[\x20\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;state='go';stack=[];try{for(;;){r=tx.exec(source);if(!r){break;}
if(r[1]){action[r[1]][state]();}else if(r[2]){value=+r[2];number[state]();}else{value=debackslashify(r[3]);string[state]();}
source=source.slice(r[0].length);}}catch(e){state=e;}
if(state!=='ok'||(/[^\x20\t\n\r]/).test(source)){throw state instanceof SyntaxError?state:new SyntaxError('JSON');}
return typeof reviver==='function'?(function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}({'':value},'')):value;};}());




/*
*	7.
*	<!-- Email to a Friend , this is a hidden form revealed via click listener   -->
*	<script language="javascript" type="text/javascript" src="http://cache.boston.com/universal/js/bcom_etaf_scripts.js"></script>
*/
	/* bcom_etaf_scripts 
		E-Mail to A Fiend.  
		Original mess started by rbrennan. 
		11/10/10 rb - trying to clean things up a little.  :/ 
		02/22/11 JN - band-aiding until Methode saves us all (riiigghhttt)
		03/07/11 FD - Checking out this bandaid. I realized that the interpretation of 
		what the window is varies between browsers. When testing be sure to check on different browser window sizes.
		I recomend just having the etaf box appear at cursor position.
	*/ 
	
	
	//This is a band-aid - don't hate me for it (side note: a Firefox specific bug, wtf?!)
	/********************************************/
	function wtfFF() {
	var agt=navigator.userAgent.toLowerCase();
	if (agt.indexOf("firefox") != -1) return 1;
	else return 0;}
	/*******************************************/
	
	function showETOF(pageX, pageY) {
		theETOF = $('#bdc_emailWidget');
		etofHeight = theETOF.height();
		etofWidth = theETOF.width();
		etofXLocation = pageX - (etofWidth);
		etofYLocation = pageY + 1;
		etofYLocation = pageY - 270;
		if(etofXLocation < 0) {etofXLocation = 1};
		//alert(pageX);
		//etofXLocation = pageX;
		$(theETOF).css({left: etofXLocation + 'px' , top: etofYLocation + 'px'  }); 
		$("#pointer_top").show(); 
		$("#pointer_bottom").hide(); 
		$("#message").val('');
		$("#theEMTOFForm").show();
		$("#bdc_EMTOF_sent").hide();
		$(theETOF).show() ; 
	}

	function validateEMTOF() { 
    var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var semail = document.getElementById("sender_email");
    var remail = document.getElementById("recipient_email");
    var validatedOK = true;
    var date = new Date();
    var curDate = null;
    var remailList = remail.value.split(/ *, */); 
    for(var i = 0; i < remailList.length; ++i) {
	if ( emailRegexStr.test(remailList[i]) == false ){
	    remail.className = 'error'; validatedOK = false;
	    break;
	} else { 
	    remail.className = 'noerr';
	} 
} 
    
    if ( emailRegexStr.test(semail.value) == false ){
	semail.className = 'error'; validatedOK = false;
    } else { 
	semail.className = 'noerr';
    } 
    
    return validatedOK;
}


	/// Init JQuery event listener, form submit etc 
	$(function() {
		
		// reset email input field onclick, but only the first time. 
		$("#recipient_email").focus(function(e) {
			recEmail = document.getElementById("recipient_email") ;
			if (recEmail.defaultValue == recEmail.value ) {  
					recEmail.value = '' ;  
			} 
				} ) 
				$("#recipient_email").blur() ; 

		//default
		$(".etaf").click(function(e){
			thisPageX = e.pageX ; 
			thisPageY = e.pageY ; 
			showETOF(e.pageX, e.pageY);
		})
				
		// submit form 
		$("#bdc_emailWidget .form-button").click(function() {
			valid = validateEMTOF() ; 
			if(valid ) { 
				var dataString = 'sender_name='+ $("#sender_name").val() + '&sender_email=' + $("#sender_email").val() + '&recipient_email=' + $("#recipient_email").val() + '&message=' + $("#message").val() + '&story_url=' + encodeURIComponent($("#story_url").val())   ;
				$.ajax({
					type: "POST",
					url: "/emtaf/",
					data: dataString,
					success: function(){
						$('#theEMTOFForm').hide();
						$('#bdc_EMTOF_sending').show();
						$('#bdc_EMTOF_sending').fadeOut(3000, function(){ 
							$('#bdc_emailWidget').fadeOut(3000);
							$('#bdc_EMTOF_sent').show();
						});
					} 
				}); 
			 } 
			return false;
		});
	});




/*
*	8.
*	<script src="http://cache.boston.com/universal/js/bcom_gallery_scripts.js"></script>
*/
$(document).ready(function($){
  $('#photoCaption').each(function(){
    var outer = $(this),
        inner = outer.children().eq(0);
    if ( inner.outerHeight() > outer.innerHeight() ) {
        outer.css( 'overflow', 'hidden' );
        $('<a href="#" class="seeMore"/>')
          .html( '<span class="smContainer"><span>Click for more...</span></span>' )
          .prependTo( '#adCENTRAL' )
          .click(function(e){
          e.preventDefault();
          $(this).remove();
          outer.css({
            overflow: 'visible',
            'max-height': 'none',
            height: 'auto'
          });
        });
      }
  });
});

//Bind arrow keys for gallery navigation - RB 10/21/10 BCOM-1960

$(document).keydown(function(e){
	switch(e.keyCode) {

	case 37:
	    var prevPage = $("li a.arrowLeft").attr('href');
	    if (prevPage) { self.location = prevPage;}
	    break;
	case 39:
	    var nextPage = $("li a.arrowRight").attr('href') ;
	    if (nextPage) { self.location = nextPage; }
	    break;
	}

});




/*
*	9.
*	var var5 declaration
*/
var var5 = 'thingstodo_';




/*
*	10.
*	LABjs
*/
/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.3 (c) Kyle Simpson
    MIT License
*/
(function(o){var K=o.$LAB,y="UseLocalXHR",z="AlwaysPreserveOrder",u="AllowDuplicates",A="CacheBust",B="BasePath",C=/^[^?#]*\//.exec(location.href)[0],D=/^\w+\:\/\/\/?[^\/]+/.exec(C)[0],i=document.head||document.getElementsByTagName("head"),L=(o.opera&&Object.prototype.toString.call(o.opera)=="[object Opera]")||("MozAppearance"in document.documentElement.style),q=document.createElement("script"),E=typeof q.preload=="boolean",r=E||(q.readyState&&q.readyState=="uninitialized"),F=!r&&q.async===true,M=!r&&!F&&!L;function G(a){return Object.prototype.toString.call(a)=="[object Function]"}function H(a){return Object.prototype.toString.call(a)=="[object Array]"}function N(a,c){var b=/^\w+\:\/\//;if(/^\/\/\/?/.test(a)){a=location.protocol+a}else if(!b.test(a)&&a.charAt(0)!="/"){a=(c||"")+a}return b.test(a)?a:((a.charAt(0)=="/"?D:C)+a)}function s(a,c){for(var b in a){if(a.hasOwnProperty(b)){c[b]=a[b]}}return c}function O(a){var c=false;for(var b=0;b<a.scripts.length;b++){if(a.scripts[b].ready&&a.scripts[b].exec_trigger){c=true;a.scripts[b].exec_trigger();a.scripts[b].exec_trigger=null}}return c}function t(a,c,b,d){a.onload=a.onreadystatechange=function(){if((a.readyState&&a.readyState!="complete"&&a.readyState!="loaded")||c[b])return;a.onload=a.onreadystatechange=null;d()}}function I(a){a.ready=a.finished=true;for(var c=0;c<a.finished_listeners.length;c++){a.finished_listeners[c]()}a.ready_listeners=[];a.finished_listeners=[]}function P(d,f,e,g,h){setTimeout(function(){var a,c=f.real_src,b;if("item"in i){if(!i[0]){setTimeout(arguments.callee,25);return}i=i[0]}a=document.createElement("script");if(f.type)a.type=f.type;if(f.charset)a.charset=f.charset;if(h){if(r){e.elem=a;if(E){a.preload=true;a.onpreload=g}else{a.onreadystatechange=function(){if(a.readyState=="loaded")g()}}a.src=c}else if(h&&c.indexOf(D)==0&&d[y]){b=new XMLHttpRequest();b.onreadystatechange=function(){if(b.readyState==4){b.onreadystatechange=function(){};e.text=b.responseText+"\n//@ sourceURL="+c;g()}};b.open("GET",c);b.send()}else{a.type="text/cache-script";t(a,e,"ready",function(){i.removeChild(a);g()});a.src=c;i.insertBefore(a,i.firstChild)}}else if(F){a.async=false;t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}else{t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}},0)}function J(){var l={},Q=r||M,n=[],p={},m;l[y]=true;l[z]=false;l[u]=false;l[A]=false;l[B]="";function R(a,c,b){var d;function f(){if(d!=null){d=null;I(b)}}if(p[c.src].finished)return;if(!a[u])p[c.src].finished=true;d=b.elem||document.createElement("script");if(c.type)d.type=c.type;if(c.charset)d.charset=c.charset;t(d,b,"finished",f);if(b.elem){b.elem=null}else if(b.text){d.onload=d.onreadystatechange=null;d.text=b.text}else{d.src=c.real_src}i.insertBefore(d,i.firstChild);if(b.text){f()}}function S(c,b,d,f){var e,g,h=function(){b.ready_cb(b,function(){R(c,b,e)})},j=function(){b.finished_cb(b,d)};b.src=N(b.src,c[B]);b.real_src=b.src+(c[A]?((/\?.*$/.test(b.src)?"&_":"?_")+~~(Math.random()*1E9)+"="):"");if(!p[b.src])p[b.src]={items:[],finished:false};g=p[b.src].items;if(c[u]||g.length==0){e=g[g.length]={ready:false,finished:false,ready_listeners:[h],finished_listeners:[j]};P(c,b,e,((f)?function(){e.ready=true;for(var a=0;a<e.ready_listeners.length;a++){e.ready_listeners[a]()}e.ready_listeners=[]}:function(){I(e)}),f)}else{e=g[0];if(e.finished){j()}else{e.finished_listeners.push(j)}}}function v(){var e,g=s(l,{}),h=[],j=0,w=false,k;function T(a,c){a.ready=true;a.exec_trigger=c;x()}function U(a,c){a.ready=a.finished=true;a.exec_trigger=null;for(var b=0;b<c.scripts.length;b++){if(!c.scripts[b].finished)return}c.finished=true;x()}function x(){while(j<h.length){if(G(h[j])){try{h[j++]()}catch(err){}continue}else if(!h[j].finished){if(O(h[j]))continue;break}j++}if(j==h.length){w=false;k=false}}function V(){if(!k||!k.scripts){h.push(k={scripts:[],finished:true})}}e={script:function(){for(var f=0;f<arguments.length;f++){(function(a,c){var b;if(!H(a)){c=[a]}for(var d=0;d<c.length;d++){V();a=c[d];if(G(a))a=a();if(!a)continue;if(H(a)){b=[].slice.call(a);b.unshift(d,1);[].splice.apply(c,b);d--;continue}if(typeof a=="string")a={src:a};a=s(a,{ready:false,ready_cb:T,finished:false,finished_cb:U});k.finished=false;k.scripts.push(a);S(g,a,k,(Q&&w));w=true;if(g[z])e.wait()}})(arguments[f],arguments[f])}return e},wait:function(){if(arguments.length>0){for(var a=0;a<arguments.length;a++){h.push(arguments[a])}k=h[h.length-1]}else k=false;x();return e}};return{script:e.script,wait:e.wait,setOptions:function(a){s(a,g);return e}}}m={setGlobalDefaults:function(a){s(a,l);return m},setOptions:function(){return v().setOptions.apply(null,arguments)},script:function(){return v().script.apply(null,arguments)},wait:function(){return v().wait.apply(null,arguments)},queueScript:function(){n[n.length]={type:"script",args:[].slice.call(arguments)};return m},queueWait:function(){n[n.length]={type:"wait",args:[].slice.call(arguments)};return m},runQueue:function(){var a=m,c=n.length,b=c,d;for(;--b>=0;){d=n.shift();a=a[d.type].apply(null,d.args)}return a},noConflict:function(){o.$LAB=K;return m},sandbox:function(){return J()}};return m}o.$LAB=J();(function(a,c,b){if(document.readyState==null&&document[a]){document.readyState="loading";document[a](c,b=function(){document.removeEventListener(c,b,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);



/*
*	11.
*	Loading scripts with LABjs
*/

$LAB
.script('http://tags.crwdcntrl.net/c/520/cc_af.js')
.script('http://w.sharethis.com/button/sharethis.js#publisher=e1e0ea5a-a326-4731-b1d1-f21623043511&amp;type=website&amp;button=false')
.wait(function(){
	var shared_object = SHARETHIS.addEntry({
		title: document.title,
		url: 'http://'+location.host+location.pathname+'?camp=misc:on:share:gallery'
	});
	shared_object.attachButton(document.getElementById("ck_sharethis"));
	shared_object.attachChicklet("facebook", document.getElementById("ck_facebook"));
	shared_object.attachChicklet("digg", document.getElementById("ck_digg"));
	shared_object.attachChicklet("twitter", document.getElementById("ck_twitter"));
});

