/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-history-touchevents-addtest-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function i(){var e,n,t,i,s,r,a;for(var f in u)if(u.hasOwnProperty(f)){if(e=[],n=u[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)r=e[s],a=r.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),d.push((i?"":"no-")+a.join("-"))}}function s(e){var n=p.className,t=Modernizr._config.classPrefix||"";if(h&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),h?p.className.baseVal=n:p.className=n)}function r(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):h?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=r(h?"svg":"body"),e.fake=!0),e}function f(e,t,o,i){var s,f,l,d,u="modernizr",c=r("div"),h=a();if(parseInt(o,10))for(;o--;)l=r("div"),l.id=i?i[o]:u+(o+1),c.appendChild(l);return s=r("style"),s.type="text/css",s.id="s"+u,(h.fake?h:c).appendChild(s),h.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=u,h.fake&&(h.style.background="",h.style.overflow="hidden",d=p.style.overflow,p.style.overflow="hidden",p.appendChild(h)),f=t(c,e),h.fake?(h.parentNode.removeChild(h),p.style.overflow=d,p.offsetHeight):c.parentNode.removeChild(c),!!f}function l(e,n){if("object"==typeof e)for(var t in e)g(e,t)&&l(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),i=Modernizr[o[0]];if(2==o.length&&(i=i[o[1]]),"undefined"!=typeof i)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),s([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var d=[],u=[],c={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){u.push({name:e,fn:n,options:t})},addAsyncTest:function(e){u.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr,Modernizr.addTest("history",function(){var n=navigator.userAgent;return-1===n.indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1});var p=n.documentElement,h="svg"===p.nodeName.toLowerCase(),v=c._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];c._prefixes=v;var m=c.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",v.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t});var g;!function(){var e={}.hasOwnProperty;g=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),c._l={},c.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},c._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){c.addTest=l}),i(),s(d),delete c.addTest,delete c.addAsyncTest;for(var y=0;y<Modernizr._q.length;y++)Modernizr._q[y]();e.Modernizr=Modernizr}(window,document);