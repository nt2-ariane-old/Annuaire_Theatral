/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a,b){function c(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function d(){}function e(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=h.length;c>b;b++){var d=h[b];a[d]=0}return a}function f(b){function d(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||g("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=b("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var f=document.body||document.documentElement;f.appendChild(e);var h=j(e);l=200===c(h.width),f.removeChild(e)}}}function f(a){if(d(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var b=j(a);if("none"===b.display)return e();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var g=f.isBorderBox=!(!k||!b[k]||"border-box"!==b[k]),m=0,n=h.length;n>m;m++){var o=h[m],p=b[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=g&&l,y=c(b.width);y!==!1&&(f.width=y+(x?0:r+v));var z=c(b.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return f}var g="undefined"==typeof console?d:function(a){console.error(a)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],f):"object"==typeof exports?module.exports=f(require("desandro-get-style-property")):a.getSize=f(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){"use strict";function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){"use strict";function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){"use strict";function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.Item=b(a.Outlayer))}(window,function(a){"use strict";function b(){a.Item.apply(this,arguments)}b.prototype=new a.Item,b.prototype._create=function(){this.id=this.layout.itemGUID++,a.Item.prototype._create.call(this),this.sortData={}},b.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var a=this.layout.options.getSortData,b=this.layout._sorters;for(var c in a){var d=b[c];this.sortData[c]=d(this.element,this)}}};var c=b.prototype.destroy;return b.prototype.destroy=function(){c.apply(this,arguments),this.css({display:""})},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("get-size"),require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.LayoutMode=b(a.getSize,a.Outlayer))}(window,function(a,b){"use strict";function c(a){this.isotope=a,a&&(this.options=a.options[this.namespace],this.element=a.element,this.items=a.filteredItems,this.size=a.size)}return function(){function a(a){return function(){return b.prototype[a].apply(this.isotope,arguments)}}for(var d=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],e=0,f=d.length;f>e;e++){var g=d[e];c.prototype[g]=a(g)}}(),c.prototype.needsVerticalResizeLayout=function(){var b=a(this.isotope.element),c=this.isotope.size&&b;return c&&b.innerHeight!=this.isotope.size.innerHeight},c.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},c.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},c.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},c.prototype.getSegmentSize=function(a,b){var c=a+b,d="outer"+b;if(this._getMeasurement(c,d),!this[c]){var e=this.getFirstItemSize();this[c]=e&&e[d]||this.isotope.size["inner"+b]}},c.prototype.getFirstItemSize=function(){var b=this.isotope.filteredItems[0];return b&&b.element&&a(b.element)},c.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},c.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},c.modes={},c.create=function(a,b){function d(){c.apply(this,arguments)}return d.prototype=new c,b&&(d.options=b),d.prototype.namespace=a,c.modes[a]=d,d},c}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],b):"object"==typeof exports?module.exports=b(require("../layout-mode"),require("masonry-layout")):b(a.Isotope.LayoutMode,a.Masonry)}(window,function(a,b){"use strict";function c(a,b){for(var c in b)a[c]=b[c];return a}var d=a.create("masonry"),e=d.prototype._getElementOffset,f=d.prototype.layout,g=d.prototype._getMeasurement;
c(d.prototype,b.prototype),d.prototype._getElementOffset=e,d.prototype.layout=f,d.prototype._getMeasurement=g;var h=d.prototype.measureColumns;d.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,h.call(this)};var i=d.prototype._manageStamp;return d.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,i.apply(this,arguments)},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("fitRows");return b.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth+this.gutter,c=this.isotope.size.innerWidth+this.gutter;0!==this.x&&b+this.x>c&&(this.x=0,this.y=this.maxY);var d={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+a.size.outerHeight),this.x+=b,d},b.prototype._getContainerSize=function(){return{height:this.maxY}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("vertical",{horizontalAlignment:0});return b.prototype._resetLayout=function(){this.y=0},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=(this.isotope.size.innerWidth-a.size.outerWidth)*this.options.horizontalAlignment,c=this.y;return this.y+=a.size.outerHeight,{x:b,y:c}},b.prototype._getContainerSize=function(){return{height:this.y}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(c,d,e,f,g,h){return b(a,c,d,e,f,g,h)}):"object"==typeof exports?module.exports=b(a,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):a.Isotope=b(a,a.Outlayer,a.getSize,a.matchesSelector,a.fizzyUIUtils,a.Isotope.Item,a.Isotope.LayoutMode)}(window,function(a,b,c,d,e,f,g){function h(a,b){return function(c,d){for(var e=0,f=a.length;f>e;e++){var g=a[e],h=c.sortData[g],i=d.sortData[g];if(h>i||i>h){var j=void 0!==b[g]?b[g]:b,k=j?1:-1;return(h>i?1:-1)*k}}return 0}}var i=a.jQuery,j=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")},k=document.documentElement,l=k.textContent?function(a){return a.textContent}:function(a){return a.innerText},m=b.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});m.Item=f,m.LayoutMode=g,m.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),b.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var a in g.modes)this._initLayoutMode(a)},m.prototype.reloadItems=function(){this.itemGUID=0,b.prototype.reloadItems.call(this)},m.prototype._itemize=function(){for(var a=b.prototype._itemize.apply(this,arguments),c=0,d=a.length;d>c;c++){var e=a[c];e.id=this.itemGUID++}return this._updateItemsSortData(a),a},m.prototype._initLayoutMode=function(a){var b=g.modes[a],c=this.options[a]||{};this.options[a]=b.options?e.extend(b.options,c):c,this.modes[a]=new b(this)},m.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?void this.arrange():void this._layout()},m.prototype._layout=function(){var a=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,a),this._isLayoutInited=!0},m.prototype.arrange=function(a){function b(){d.reveal(c.needReveal),d.hide(c.needHide)}this.option(a),this._getIsInstant();var c=this._filter(this.items);this.filteredItems=c.matches;var d=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(b):b(),this._sort(),this._layout()},m.prototype._init=m.prototype.arrange,m.prototype._getIsInstant=function(){var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=a,a},m.prototype._bindArrangeComplete=function(){function a(){b&&c&&d&&e.dispatchEvent("arrangeComplete",null,[e.filteredItems])}var b,c,d,e=this;this.once("layoutComplete",function(){b=!0,a()}),this.once("hideComplete",function(){c=!0,a()}),this.once("revealComplete",function(){d=!0,a()})},m.prototype._filter=function(a){var b=this.options.filter;b=b||"*";for(var c=[],d=[],e=[],f=this._getFilterTest(b),g=0,h=a.length;h>g;g++){var i=a[g];if(!i.isIgnored){var j=f(i);j&&c.push(i),j&&i.isHidden?d.push(i):j||i.isHidden||e.push(i)}}return{matches:c,needReveal:d,needHide:e}},m.prototype._getFilterTest=function(a){return i&&this.options.isJQueryFiltering?function(b){return i(b.element).is(a)}:"function"==typeof a?function(b){return a(b.element)}:function(b){return d(b.element,a)}},m.prototype.updateSortData=function(a){var b;a?(a=e.makeArray(a),b=this.getItems(a)):b=this.items,this._getSorters(),this._updateItemsSortData(b)},m.prototype._getSorters=function(){var a=this.options.getSortData;for(var b in a){var c=a[b];this._sorters[b]=n(c)}},m.prototype._updateItemsSortData=function(a){for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.updateSortData()}};var n=function(){function a(a){if("string"!=typeof a)return a;var c=j(a).split(" "),d=c[0],e=d.match(/^\[(.+)\]$/),f=e&&e[1],g=b(f,d),h=m.sortDataParsers[c[1]];return a=h?function(a){return a&&h(g(a))}:function(a){return a&&g(a)}}function b(a,b){var c;return c=a?function(b){return b.getAttribute(a)}:function(a){var c=a.querySelector(b);return c&&l(c)}}return a}();m.sortDataParsers={parseInt:function(a){return parseInt(a,10)},parseFloat:function(a){return parseFloat(a)}},m.prototype._sort=function(){var a=this.options.sortBy;if(a){var b=[].concat.apply(a,this.sortHistory),c=h(b,this.options.sortAscending);this.filteredItems.sort(c),a!=this.sortHistory[0]&&this.sortHistory.unshift(a)}},m.prototype._mode=function(){var a=this.options.layoutMode,b=this.modes[a];if(!b)throw new Error("No layout mode: "+a);return b.options=this.options[a],b},m.prototype._resetLayout=function(){b.prototype._resetLayout.call(this),this._mode()._resetLayout()},m.prototype._getItemLayoutPosition=function(a){return this._mode()._getItemLayoutPosition(a)},m.prototype._manageStamp=function(a){this._mode()._manageStamp(a)},m.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},m.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},m.prototype.appended=function(a){var b=this.addItems(a);if(b.length){var c=this._filterRevealAdded(b);this.filteredItems=this.filteredItems.concat(c)}},m.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){this._resetLayout(),this._manageStamps();var c=this._filterRevealAdded(b);this.layoutItems(this.filteredItems),this.filteredItems=c.concat(this.filteredItems),this.items=b.concat(this.items)}},m.prototype._filterRevealAdded=function(a){var b=this._filter(a);return this.hide(b.needHide),this.reveal(b.matches),this.layoutItems(b.matches,!0),b.matches},m.prototype.insert=function(a){var b=this.addItems(a);if(b.length){var c,d,e=b.length;for(c=0;e>c;c++)d=b[c],this.element.appendChild(d.element);var f=this._filter(b).matches;for(c=0;e>c;c++)b[c].isLayoutInstant=!0;for(this.arrange(),c=0;e>c;c++)delete b[c].isLayoutInstant;this.reveal(f)}};var o=m.prototype.remove;return m.prototype.remove=function(a){a=e.makeArray(a);var b=this.getItems(a);o.call(this,a);var c=b&&b.length;if(c)for(var d=0;c>d;d++){var f=b[d];e.removeFrom(this.filteredItems,f)}},m.prototype.shuffle=function(){for(var a=0,b=this.items.length;b>a;a++){var c=this.items[a];c.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},m.prototype._noTransition=function(a){var b=this.options.transitionDuration;this.options.transitionDuration=0;var c=a.call(this);return this.options.transitionDuration=b,c},m.prototype.getFilteredItemElements=function(){for(var a=[],b=0,c=this.filteredItems.length;c>b;b++)a.push(this.filteredItems[b].element);return a},m});;
/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,s=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),s="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(s?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,s=this.getListenersAsObject(e);for(r in s)s.hasOwnProperty(r)&&(i=t(s[r],n),-1!==i&&s[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)s.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?s.call(this,i,r):o.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,s,o=this.getListenersAsObject(e);for(r in o)if(o.hasOwnProperty(r))for(i=o[r].length;i--;)n=o[r][i],n.once===!0&&this.removeListener(e,n.listener),s=n.listener.apply(this,t||[]),s===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=s,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var s={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",s):e.eventie=s}(this),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"==f.call(e)}function s(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0;n<e.length;n++)t.push(e[n]);else t.push(e);return t}function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=s(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),u&&(this.jqDeferred=new u.Deferred);var r=this;setTimeout(function(){r.check()})}function h(e){this.img=e}function a(e,t){this.url=e,this.element=t,this.img=new Image}var u=e.jQuery,c=e.console,f=Object.prototype.toString;o.prototype=new t,o.prototype.options={},o.prototype.getImages=function(){this.images=[];for(var e=0;e<this.elements.length;e++){var t=this.elements[e];this.addElementImages(t)}},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&d[t]){for(var n=e.querySelectorAll("img"),i=0;i<n.length;i++){var r=n[i];this.addImage(r)}if("string"==typeof this.options.background){var s=e.querySelectorAll(this.options.background);for(i=0;i<s.length;i++){var o=s[i];this.addElementBackgroundImages(o)}}}};var d={1:!0,9:!0,11:!0};o.prototype.addElementBackgroundImages=function(e){for(var t=m(e),n=/url\(['"]*([^'"\)]+)['"]*\)/gi,i=n.exec(t.backgroundImage);null!==i;){var r=i&&i[1];r&&this.addBackground(r,e),i=n.exec(t.backgroundImage)}};var m=e.getComputedStyle||function(e){return e.currentStyle};return o.prototype.addImage=function(e){var t=new h(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var n=new a(e,t);this.images.push(n)},o.prototype.check=function(){function e(e,n,i){setTimeout(function(){t.progress(e,n,i)})}var t=this;if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();for(var n=0;n<this.images.length;n++){var i=this.images[n];i.once("progress",e),i.check()}},o.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emit("progress",this,e,t),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&c&&c.log("progress: "+n,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emit(e,this),this.emit("always",this),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},h.prototype=new t,h.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,n.bind(this.proxyImage,"load",this),n.bind(this.proxyImage,"error",this),n.bind(this.img,"load",this),n.bind(this.img,"error",this),void(this.proxyImage.src=this.img.src))},h.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},h.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("progress",this,this.img,t)},h.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this),n.unbind(this.img,"load",this),n.unbind(this.img,"error",this)},a.prototype=new h,a.prototype.check=function(){n.bind(this.img,"load",this),n.bind(this.img,"error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},a.prototype.unbindEvents=function(){n.unbind(this.img,"load",this),n.unbind(this.img,"error",this)},a.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("progress",this,this.element,t)},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(u=t,u.fn.imagesLoaded=function(e,t){var n=new o(this,e,t);return n.jqDeferred.promise(u(this))})},o.makeJQueryPlugin(),o});;
/*!
 * animsition v3.4.3
 * http://blivesta.github.io/animsition/
 * Licensed under MIT
 * Author : blivesta
 * http://blivesta.com/
 */
!function(a){"use strict";var b="animsition",c={init:function(d){d=a.extend({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",unSupportCss:["animation-duration","-webkit-animation-duration","-o-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body"},d);var e=c.supportCheck.call(this,d);if(!e)return"console"in window||(window.console={},window.console.log=function(a){return a}),console.log("Animsition does not support this browser."),c.destroy.call(this);var f=c.optionCheck.call(this,d);return f&&c.addOverlay.call(this,d),d.loading&&c.addLoading.call(this,d),this.each(function(){var e=this,f=a(this),g=a(window),h=f.data(b);h||(d=a.extend({},d),f.data(b,{options:d}),g.on("load."+b+" pageshow."+b,function(){c.pageIn.call(e)}),g.on("unload."+b,function(){}),a(d.linkElement).on("click."+b,function(b){b.preventDefault();var d=a(this),f=d.attr("href");2===b.which||b.metaKey||b.shiftKey||-1!==navigator.platform.toUpperCase().indexOf("WIN")&&b.ctrlKey?window.open(f,"_blank"):c.pageOut.call(e,d,f)}))})},addOverlay:function(b){a(b.overlayParentElement).prepend('<div class="'+b.overlayClass+'"></div>')},addLoading:function(b){a(b.loadingParentElement).append('<div class="'+b.loadingClass+'"></div>')},removeLoading:function(){var c=a(this),d=c.data(b).options,e=a(d.loadingParentElement).children("."+d.loadingClass);e.fadeOut().remove()},supportCheck:function(b){var c=a(this),d=b.unSupportCss,e=d.length,f=!1;0===e&&(f=!0);for(var g=0;e>g;g++)if("string"==typeof c.css(d[g])){f=!0;break}return f},optionCheck:function(b){var c,d=a(this);return c=b.overlay||d.data("animsition-overlay")?!0:!1},animationCheck:function(c,d,e){var f=a(this),g=f.data(b).options,h=typeof c,i=!d&&"number"===h,j=d&&"string"===h&&c.length>0;return i||j?c=c:d&&e?c=g.inClass:!d&&e?c=g.inDuration:d&&!e?c=g.outClass:d||e||(c=g.outDuration),c},pageIn:function(){var d=this,e=a(this),f=e.data(b).options,g=e.data("animsition-in-duration"),h=e.data("animsition-in"),i=c.animationCheck.call(d,g,!1,!0),j=c.animationCheck.call(d,h,!0,!0),k=c.optionCheck.call(d,f);f.loading&&c.removeLoading.call(d),k?c.pageInOverlay.call(d,j,i):c.pageInBasic.call(d,j,i)},pageInBasic:function(b,c){var d=a(this);d.css({"animation-duration":c/1e3+"s"}).addClass(b).animateCallback(function(){d.removeClass(b).css({opacity:1})})},pageInOverlay:function(c,d){var e=a(this),f=e.data(b).options;e.css({opacity:1}),a(f.overlayParentElement).children("."+f.overlayClass).css({"animation-duration":d/1e3+"s"}).addClass(c)},pageOut:function(d,e){var f=this,g=a(this),h=g.data(b).options,i=d.data("animsition-out"),j=g.data("animsition-out"),k=d.data("animsition-out-duration"),l=g.data("animsition-out-duration"),m=i?i:j,n=k?k:l,o=c.animationCheck.call(f,m,!0,!1),p=c.animationCheck.call(f,n,!1,!1),q=c.optionCheck.call(f,h);q?c.pageOutOverlay.call(f,o,p,e):c.pageOutBasic.call(f,o,p,e)},pageOutBasic:function(b,c,d){var e=a(this);e.css({"animation-duration":c/1e3+"s"}).addClass(b).animateCallback(function(){location.href=d})},pageOutOverlay:function(d,e,f){var g=this,h=a(this),i=h.data(b).options,j=h.data("animsition-in"),k=c.animationCheck.call(g,j,!0,!0);a(i.overlayParentElement).children("."+i.overlayClass).css({"animation-duration":e/1e3+"s"}).removeClass(k).addClass(d).animateCallback(function(){h.css({opacity:0}),location.href=f})},destroy:function(){return this.each(function(){var c=a(this);a(window).unbind("."+b),c.css({opacity:1}).removeData(b)})}};a.fn.animateCallback=function(b){var c="animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd";return this.each(function(){a(this).bind(c,function(){return a(this).unbind(c),b.call(this)})})},a.fn.animsition=function(d){return c[d]?c[d].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof d&&d?void a.error("Method "+d+" does not exist on jQuery."+b):c.init.apply(this,arguments)}}(jQuery);;
/*!
 * fullPage 2.7.4
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(c,k){"function"===typeof define&&define.amd?define(["jquery"],function(m){return k(m,c,c.document,c.Math)}):"undefined"!==typeof exports?module.exports=k(require("jquery"),c,c.document,c.Math):k(jQuery,c,c.document,c.Math)})("undefined"!==typeof window?window:this,function(c,k,m,p,D){var n=c(k),t=c(m);c.fn.fullpage=function(d){function La(){d.css3&&(d.css3=Ma());d.anchors.length||(d.anchors=c("[data-anchor]").map(function(){return c(this).data("anchor").toString()}).get());Na();e.setAllowScrolling(!0);
q=n.height();e.setAutoScrolling(d.autoScrolling,"internal");var a=c(".fp-section.active").find(".fp-slide.active");a.length&&(0!==c(".fp-section.active").index(".fp-section")||0===c(".fp-section.active").index(".fp-section")&&0!==a.index())&&T(a);ja();ka();n.on("load",function(){var a=k.location.hash.replace("#","").split("/"),c=a[0],a=a[1];c&&(d.animateAnchor?U(c,a):e.silentMoveTo(c,a))})}function Na(){h.css({height:"100%",position:"relative"});h.addClass("fullpage-wrapper");c("html").addClass("fp-enabled");
h.removeClass("fp-destroyed");Oa();c(".fp-section").each(function(a){var b=c(this),g=b.find(".fp-slide"),f=g.length;a||0!==c(".fp-section.active").length||b.addClass("active");b.css("height",q+"px");d.paddingTop&&b.css("padding-top",d.paddingTop);d.paddingBottom&&b.css("padding-bottom",d.paddingBottom);"undefined"!==typeof d.sectionsColor[a]&&b.css("background-color",d.sectionsColor[a]);"undefined"!==typeof d.anchors[a]&&b.attr("data-anchor",d.anchors[a]);"undefined"!==typeof d.anchors[a]&&b.hasClass("active")&&
V(d.anchors[a],a);d.menu&&d.css3&&c(d.menu).closest(".fullpage-wrapper").length&&c(d.menu).appendTo(r);0<f?Pa(b,g,f):d.verticalCentered&&la(b)});d.fixedElements&&d.css3&&c(d.fixedElements).appendTo(r);d.navigation&&Qa();d.scrollOverflow?("complete"===m.readyState&&ma(),n.on("load",ma)):na()}function Pa(a,b,g){var f=100*g,e=100/g;b.wrapAll('<div class="fp-slidesContainer" />');b.parent().wrap('<div class="fp-slides" />');a.find(".fp-slidesContainer").css("width",f+"%");1<g&&(d.controlArrows&&Ra(a),
d.slidesNavigation&&Sa(a,g));b.each(function(a){c(this).css("width",e+"%");d.verticalCentered&&la(c(this))});a=a.find(".fp-slide.active");a.length&&(0!==c(".fp-section.active").index(".fp-section")||0===c(".fp-section.active").index(".fp-section")&&0!==a.index())?T(a):b.eq(0).addClass("active")}function Oa(){c(d.sectionSelector).each(function(){c(this).addClass("fp-section")});c(d.slideSelector).each(function(){c(this).addClass("fp-slide")})}function Ra(a){a.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>');
"#fff"!=d.controlArrowColor&&(a.find(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent "+d.controlArrowColor),a.find(".fp-controlArrow.fp-prev").css("border-color","transparent "+d.controlArrowColor+" transparent transparent"));d.loopHorizontal||a.find(".fp-controlArrow.fp-prev").hide()}function Qa(){r.append('<div id="fp-nav"><ul></ul></div>');var a=c("#fp-nav");a.addClass(function(){return d.showActiveTooltip?"fp-show-active "+d.navigationPosition:d.navigationPosition});
for(var b=0;b<c(".fp-section").length;b++){var g="";d.anchors.length&&(g=d.anchors[b]);var g='<li><a href="#'+g+'"><span></span></a>',f=d.navigationTooltips[b];"undefined"!==typeof f&&""!==f&&(g+='<div class="fp-tooltip '+d.navigationPosition+'">'+f+"</div>");g+="</li>";a.find("ul").append(g)}c("#fp-nav").css("margin-top","-"+c("#fp-nav").height()/2+"px");c("#fp-nav").find("li").eq(c(".fp-section.active").index(".fp-section")).find("a").addClass("active")}function ma(){c(".fp-section").each(function(){var a=
c(this).find(".fp-slide");a.length?a.each(function(){I(c(this))}):I(c(this))});na()}function na(){var a=c(".fp-section.active"),b=a.find("SLIDES_WRAPPER"),g=a.find(".fp-scrollable");b.length&&(g=b.find(".fp-slide.active"));g.mouseover();J(a);oa(a);c.isFunction(d.afterLoad)&&d.afterLoad.call(a,a.data("anchor"),a.index(".fp-section")+1);c.isFunction(d.afterRender)&&d.afterRender.call(h)}function pa(){var a;if(!d.autoScrolling||d.scrollBar){for(var b=n.scrollTop(),g=0,f=p.abs(b-m.querySelectorAll(".fp-section")[0].offsetTop),
e=m.querySelectorAll(".fp-section"),h=0;h<e.length;++h){var k=p.abs(b-e[h].offsetTop);k<f&&(g=h,f=k)}a=c(e).eq(g);if(!a.hasClass("active")&&!a.hasClass("fp-auto-height")){W=!0;b=c(".fp-section.active");g=b.index(".fp-section")+1;f=X(a);e=a.data("anchor");h=a.index(".fp-section")+1;k=a.find(".fp-slide.active");if(k.length)var l=k.data("anchor"),q=k.index();u&&(a.addClass("active").siblings().removeClass("active"),c.isFunction(d.onLeave)&&d.onLeave.call(b,g,h,f),c.isFunction(d.afterLoad)&&d.afterLoad.call(a,
e,h),J(a),V(e,h-1),d.anchors.length&&(y=e,Y(q,l,e,h)));clearTimeout(Z);Z=setTimeout(function(){W=!1},100)}d.fitToSection&&(clearTimeout(aa),aa=setTimeout(function(){u&&d.fitToSection&&(c(".fp-section.active").is(a)&&requestAnimFrame(function(){v=!0}),z(a),requestAnimFrame(function(){v=!1}))},d.fitToSectionDelay))}}function qa(a){return a.find(".fp-slides").length?a.find(".fp-slide.active").find(".fp-scrollable"):a.find(".fp-scrollable")}function K(a,b){if(l.m[a]){var d,c;"down"==a?(d="bottom",c=e.moveSectionDown):
(d="top",c=e.moveSectionUp);if(0<b.length)if(d="top"===d?!b.scrollTop():"bottom"===d?b.scrollTop()+1+b.innerHeight()>=b[0].scrollHeight:void 0,d)c();else return!0;else c()}}function Ta(a){var b=a.originalEvent;if(!ra(a.target)&&ba(b)){d.autoScrolling&&a.preventDefault();a=c(".fp-section.active");var g=qa(a);u&&!w&&(b=sa(b),E=b.y,L=b.x,a.find(".fp-slides").length&&p.abs(M-L)>p.abs(F-E)?p.abs(M-L)>n.width()/100*d.touchSensitivity&&(M>L?l.m.right&&e.moveSlideRight():l.m.left&&e.moveSlideLeft()):d.autoScrolling&&
p.abs(F-E)>n.height()/100*d.touchSensitivity&&(F>E?K("down",g):E>F&&K("up",g)))}}function ra(a,b){b=b||0;var g=c(a).parent();return b<d.normalScrollElementTouchThreshold&&g.is(d.normalScrollElements)?!0:b==d.normalScrollElementTouchThreshold?!1:ra(g,++b)}function ba(a){return"undefined"===typeof a.pointerType||"mouse"!=a.pointerType}function Ua(a){a=a.originalEvent;d.fitToSection&&x.stop();ba(a)&&(a=sa(a),F=a.y,M=a.x)}function ta(a,b){for(var d=0,c=a.slice(p.max(a.length-b,1)),e=0;e<c.length;e++)d+=
c[e];return p.ceil(d/b)}function A(a){var b=(new Date).getTime();if(d.autoScrolling&&!N){a=a||k.event;var g=a.wheelDelta||-a.deltaY||-a.detail,f=p.max(-1,p.min(1,g)),e="undefined"!==typeof a.wheelDeltaX||"undefined"!==typeof a.deltaX,e=p.abs(a.wheelDeltaX)<p.abs(a.wheelDelta)||p.abs(a.deltaX)<p.abs(a.deltaY)||!e;149<B.length&&B.shift();B.push(p.abs(g));d.scrollBar&&(a.preventDefault?a.preventDefault():a.returnValue=!1);a=c(".fp-section.active");a=qa(a);g=b-ua;ua=b;200<g&&(B=[]);u&&(b=ta(B,10),g=ta(B,
70),b>=g&&e&&(0>f?K("down",a):K("up",a)));return!1}d.fitToSection&&x.stop()}function va(a){var b=c(".fp-section.active").find(".fp-slides"),g=b.find(".fp-slide").length;if(!(!b.length||w||2>g)){var g=b.find(".fp-slide.active"),f=null,f="prev"===a?g.prev(".fp-slide"):g.next(".fp-slide");if(!f.length){if(!d.loopHorizontal)return;f="prev"===a?g.siblings(":last"):g.siblings(":first")}w=!0;G(b,f)}}function wa(){c(".fp-slide.active").each(function(){T(c(this),"internal")})}function z(a,b,g){requestAnimFrame(function(){var f=
a.position();if("undefined"!==typeof f){var e=a.hasClass("fp-auto-height")?f.top-q+a.height():f.top,f={element:a,callback:b,isMovementUp:g,dest:f,dtop:e,yMovement:X(a),anchorLink:a.data("anchor"),sectionIndex:a.index(".fp-section"),activeSlide:a.find(".fp-slide.active"),activeSection:c(".fp-section.active"),leavingSection:c(".fp-section.active").index(".fp-section")+1,localIsResizing:v};if(!(f.activeSection.is(a)&&!v||d.scrollBar&&n.scrollTop()===f.dtop&&!a.hasClass("fp-auto-height"))){if(f.activeSlide.length)var h=
f.activeSlide.data("anchor"),k=f.activeSlide.index();d.autoScrolling&&d.continuousVertical&&"undefined"!==typeof f.isMovementUp&&(!f.isMovementUp&&"up"==f.yMovement||f.isMovementUp&&"down"==f.yMovement)&&(f.isMovementUp?c(".fp-section.active").before(f.activeSection.nextAll(".fp-section")):c(".fp-section.active").after(f.activeSection.prevAll(".fp-section").get().reverse()),H(c(".fp-section.active").position().top),wa(),f.wrapAroundElements=f.activeSection,f.dest=f.element.position(),f.dtop=f.dest.top,
f.yMovement=X(f.element));if(c.isFunction(d.onLeave)&&!f.localIsResizing){if(!1===d.onLeave.call(f.activeSection,f.leavingSection,f.sectionIndex+1,f.yMovement))return;Va(f.activeSection)}a.addClass("active").siblings().removeClass("active");J(a);u=!1;Y(k,h,f.anchorLink,f.sectionIndex);Wa(f);y=f.anchorLink;V(f.anchorLink,f.sectionIndex)}}})}function Wa(a){if(d.css3&&d.autoScrolling&&!d.scrollBar)xa("translate3d(0px, -"+a.dtop+"px, 0px)",!0),d.scrollingSpeed?ca=setTimeout(function(){da(a)},d.scrollingSpeed):
da(a);else{var b=Xa(a);c(b.element).animate(b.options,d.scrollingSpeed,d.easing).promise().done(function(){da(a)})}}function Xa(a){var b={};d.autoScrolling&&!d.scrollBar?(b.options={top:-a.dtop},b.element=".fullpage-wrapper"):(b.options={scrollTop:a.dtop},b.element="html, body");return b}function da(a){a.wrapAroundElements&&a.wrapAroundElements.length&&(a.isMovementUp?c(".fp-section:first").before(a.wrapAroundElements):c(".fp-section:last").after(a.wrapAroundElements),H(c(".fp-section.active").position().top),
wa());a.element.find(".fp-scrollable").mouseover();c.isFunction(d.afterLoad)&&!a.localIsResizing&&d.afterLoad.call(a.element,a.anchorLink,a.sectionIndex+1);oa(a.element);u=!0;c.isFunction(a.callback)&&a.callback.call(this)}function J(a){var b=a.find(".fp-slide.active");b.length&&(a=c(b));a.find("img[data-src], source[data-src], audio[data-src]").each(function(){c(this).attr("src",c(this).data("src"));c(this).removeAttr("data-src");c(this).is("source")&&c(this).closest("video").get(0).load()})}function oa(a){a.find("video, audio").each(function(){var a=
c(this).get(0);a.hasAttribute("autoplay")&&"function"===typeof a.play&&a.play()})}function Va(a){a.find("video, audio").each(function(){var a=c(this).get(0);a.hasAttribute("data-ignore")||"function"!==typeof a.pause||a.pause()})}function ya(){if(!W&&!d.lockAnchors){var a=k.location.hash.replace("#","").split("/"),b=a[0],a=a[1],c="undefined"===typeof y,f="undefined"===typeof y&&"undefined"===typeof a&&!w;b.length&&(b&&b!==y&&!c||f||!w&&ea!=a)&&U(b,a)}}function Ya(a){u&&(a.pageY<O?e.moveSectionUp():
a.pageY>O&&e.moveSectionDown());O=a.pageY}function G(a,b){var g=b.position(),f=b.index(),e=a.closest(".fp-section"),h=e.index(".fp-section"),k=e.data("anchor"),l=e.find(".fp-slidesNav"),m=fa(b),n=v;if(d.onSlideLeave){var q=e.find(".fp-slide.active"),r=q.index(),t;t=r==f?"none":r>f?"left":"right";if(!n&&"none"!==t&&c.isFunction(d.onSlideLeave)&&!1===d.onSlideLeave.call(q,k,h+1,r,t,f)){w=!1;return}}b.addClass("active").siblings().removeClass("active");n||J(b);!d.loopHorizontal&&d.controlArrows&&(e.find(".fp-controlArrow.fp-prev").toggle(0!==
f),e.find(".fp-controlArrow.fp-next").toggle(!b.is(":last-child")));e.hasClass("active")&&Y(f,m,k,h);var u=function(){n||c.isFunction(d.afterSlideLoad)&&d.afterSlideLoad.call(b,k,h+1,m,f);w=!1};d.css3?(g="translate3d(-"+p.round(g.left)+"px, 0px, 0px)",za(a.find(".fp-slidesContainer"),0<d.scrollingSpeed).css(Aa(g)),ga=setTimeout(function(){u()},d.scrollingSpeed,d.easing)):a.animate({scrollLeft:p.round(g.left)},d.scrollingSpeed,d.easing,function(){u()});l.find(".active").removeClass("active");l.find("li").eq(f).find("a").addClass("active")}
function Ba(){ja();if(P){var a=c(m.activeElement);a.is("textarea")||a.is("input")||a.is("select")||(a=n.height(),p.abs(a-ha)>20*p.max(ha,a)/100&&(e.reBuild(!0),ha=a))}else clearTimeout(ia),ia=setTimeout(function(){e.reBuild(!0)},350)}function ja(){var a=d.responsive||d.responsiveWidth,b=d.responsiveHeight,c=a&&n.width()<a,f=b&&n.height()<b;a&&b?e.setResponsive(c||f):a?e.setResponsive(c):b&&e.setResponsive(f)}function za(a){var b="all "+d.scrollingSpeed+"ms "+d.easingcss3;a.removeClass("fp-notransition");
return a.css({"-webkit-transition":b,transition:b})}function Za(a,b){if(825>a||900>b){var c=p.min(100*a/825,100*b/900).toFixed(2);r.css("font-size",c+"%")}else r.css("font-size","100%")}function V(a,b){d.menu&&(c(d.menu).find(".active").removeClass("active"),c(d.menu).find('[data-menuanchor="'+a+'"]').addClass("active"));d.navigation&&(c("#fp-nav").find(".active").removeClass("active"),a?c("#fp-nav").find('a[href="#'+a+'"]').addClass("active"):c("#fp-nav").find("li").eq(b).find("a").addClass("active"))}
function X(a){var b=c(".fp-section.active").index(".fp-section");a=a.index(".fp-section");return b==a?"none":b>a?"up":"down"}function I(a){a.css("overflow","hidden");var b=a.closest(".fp-section"),c=a.find(".fp-scrollable"),f;c.length?f=c.get(0).scrollHeight:(f=a.get(0).scrollHeight,d.verticalCentered&&(f=a.find(".fp-tableCell").get(0).scrollHeight));b=q-parseInt(b.css("padding-bottom"))-parseInt(b.css("padding-top"));f>b?c.length?c.css("height",b+"px").parent().css("height",b+"px"):(d.verticalCentered?
a.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />'):a.wrapInner('<div class="fp-scrollable" />'),a.find(".fp-scrollable").slimScroll({allowPageScroll:!0,height:b+"px",size:"10px",alwaysVisible:!0})):Ca(a);a.css("overflow","")}function Ca(a){a.find(".fp-scrollable").children().first().unwrap().unwrap();a.find(".slimScrollBar").remove();a.find(".slimScrollRail").remove()}function la(a){a.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:'+Da(a)+'px;" />')}function Da(a){var b=
q;if(d.paddingTop||d.paddingBottom)b=a,b.hasClass("fp-section")||(b=a.closest(".fp-section")),a=parseInt(b.css("padding-top"))+parseInt(b.css("padding-bottom")),b=q-a;return b}function xa(a,b){b?za(h):h.addClass("fp-notransition");h.css(Aa(a));setTimeout(function(){h.removeClass("fp-notransition")},10)}function Ea(a){var b=c('.fp-section[data-anchor="'+a+'"]');b.length||(b=c(".fp-section").eq(a-1));return b}function U(a,b){var c=Ea(a);"undefined"===typeof b&&(b=0);a===y||c.hasClass("active")?Fa(c,
b):z(c,function(){Fa(c,b)})}function Fa(a,b){if("undefined"!==typeof b){var c=a.find(".fp-slides"),d;d=a.find(".fp-slides");var e=d.find('.fp-slide[data-anchor="'+b+'"]');e.length||(e=d.find(".fp-slide").eq(b));d=e;d.length&&G(c,d)}}function Sa(a,b){a.append('<div class="fp-slidesNav"><ul></ul></div>');var c=a.find(".fp-slidesNav");c.addClass(d.slidesNavPosition);for(var f=0;f<b;f++)c.find("ul").append('<li><a href="#"><span></span></a></li>');c.css("margin-left","-"+c.width()/2+"px");c.find("li").first().find("a").addClass("active")}
function Y(a,b,c,f){f="";d.anchors.length&&!d.lockAnchors&&(a?("undefined"!==typeof c&&(f=c),"undefined"===typeof b&&(b=a),ea=b,Ga(f+"/"+b)):("undefined"!==typeof a&&(ea=b),Ga(c)));ka()}function Ga(a){if(d.recordHistory)location.hash=a;else if(P||Q)history.replaceState(D,D,"#"+a);else{var b=k.location.href.split("#")[0];k.location.replace(b+"#"+a)}}function fa(a){var b=a.data("anchor");a=a.index();"undefined"===typeof b&&(b=a);return b}function ka(){var a=c(".fp-section.active"),b=a.find(".fp-slide.active"),
d=fa(a),f=fa(b);a.index(".fp-section");a=String(d);b.length&&(a=a+"-"+f);a=a.replace("/","-").replace("#","");r[0].className=r[0].className.replace(RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g"),"");r.addClass("fp-viewing-"+a)}function Ma(){var a=m.createElement("p"),b,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};m.body.insertBefore(a,null);for(var d in c)a.style[d]!==D&&(a.style[d]="translate3d(1px,1px,1px)",
b=k.getComputedStyle(a).getPropertyValue(c[d]));m.body.removeChild(a);return b!==D&&0<b.length&&"none"!==b}function $a(){if(P||Q){var a=Ha();c(".fullpage-wrapper").off("touchstart "+a.down).on("touchstart "+a.down,Ua);c(".fullpage-wrapper").off("touchmove "+a.move).on("touchmove "+a.move,Ta)}}function ab(){if(P||Q){var a=Ha();c(".fullpage-wrapper").off("touchstart "+a.down);c(".fullpage-wrapper").off("touchmove "+a.move)}}function Ha(){return k.PointerEvent?{down:"pointerdown",move:"pointermove"}:
{down:"MSPointerDown",move:"MSPointerMove"}}function sa(a){var b=[];b.y="undefined"!==typeof a.pageY&&(a.pageY||a.pageX)?a.pageY:a.touches[0].pageY;b.x="undefined"!==typeof a.pageX&&(a.pageY||a.pageX)?a.pageX:a.touches[0].pageX;Q&&ba(a)&&d.scrollBar&&(b.y=a.touches[0].pageY,b.x=a.touches[0].pageX);return b}function T(a,b){e.setScrollingSpeed(0,"internal");"undefined"!==typeof b&&(v=!0);G(a.closest(".fp-slides"),a);"undefined"!==typeof b&&(v=!1);e.setScrollingSpeed(C.scrollingSpeed,"internal")}function H(a){d.scrollBar?
h.scrollTop(a):d.css3?xa("translate3d(0px, -"+a+"px, 0px)",!1):h.css("top",-a)}function Aa(a){return{"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,transform:a}}function Ia(a,b,c){switch(b){case "up":l[c].up=a;break;case "down":l[c].down=a;break;case "left":l[c].left=a;break;case "right":l[c].right=a;break;case "all":"m"==c?e.setAllowScrolling(a):e.setKeyboardScrolling(a)}}function bb(){H(0);c("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove();c(".fp-section").css({height:"","background-color":"",
padding:""});c(".fp-slide").css({width:""});h.css({height:"",position:"","-ms-touch-action":"","touch-action":""});x.css({overflow:"",height:""});c("html").removeClass("fp-enabled");c.each(r.get(0).className.split(/\s+/),function(a,b){0===b.indexOf("fp-viewing")&&r.removeClass(b)});c(".fp-section, .fp-slide").each(function(){Ca(c(this));c(this).removeClass("fp-table active")});h.addClass("fp-notransition");h.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function(){c(this).replaceWith(this.childNodes)});
x.scrollTop(0)}function R(a,b,c){d[a]=b;"internal"!==c&&(C[a]=b)}function S(a,b){console&&console[a]&&console[a]("fullPage: "+b)}var x=c("html, body"),r=c("body"),e=c.fn.fullpage;d=c.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1E3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,
loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!1,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,
afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},d);(function(){d.continuousVertical&&(d.loopTop||d.loopBottom)&&(d.continuousVertical=!1,S("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));d.scrollBar&&d.scrollOverflow&&S("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox");d.continuousVertical&&d.scrollBar&&(d.continuousVertical=!1,S("warn",
"Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));c.each(d.anchors,function(a,b){(c("#"+b).length||c('[name="'+b+'"]').length)&&S("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})})();c.extend(c.easing,{easeInOutCubic:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c}});c.extend(c.easing,{easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c}});e.setAutoScrolling=
function(a,b){R("autoScrolling",a,b);var g=c(".fp-section.active");d.autoScrolling&&!d.scrollBar?(x.css({overflow:"hidden",height:"100%"}),e.setRecordHistory(C.recordHistory,"internal"),h.css({"-ms-touch-action":"none","touch-action":"none"}),g.length&&H(g.position().top)):(x.css({overflow:"visible",height:"initial"}),e.setRecordHistory(!1,"internal"),h.css({"-ms-touch-action":"","touch-action":""}),H(0),g.length&&x.scrollTop(g.position().top))};e.setRecordHistory=function(a,b){R("recordHistory",
a,b)};e.setScrollingSpeed=function(a,b){R("scrollingSpeed",a,b)};e.setFitToSection=function(a,b){R("fitToSection",a,b)};e.setLockAnchors=function(a){d.lockAnchors=a};e.setMouseWheelScrolling=function(a){if(a){a="";var b;k.addEventListener?b="addEventListener":(b="attachEvent",a="on");var c="onwheel"in m.createElement("div")?"wheel":m.onmousewheel!==D?"mousewheel":"DOMMouseScroll";if("DOMMouseScroll"==c)m[b](a+"MozMousePixelScroll",A,!1);else m[b](a+c,A,!1)}else m.addEventListener?(m.removeEventListener("mousewheel",
A,!1),m.removeEventListener("wheel",A,!1),m.removeEventListener("MozMousePixelScroll",A,!1)):m.detachEvent("onmousewheel",A)};e.setAllowScrolling=function(a,b){"undefined"!==typeof b?(b=b.replace(/ /g,"").split(","),c.each(b,function(b,c){Ia(a,c,"m")})):a?(e.setMouseWheelScrolling(!0),$a()):(e.setMouseWheelScrolling(!1),ab())};e.setKeyboardScrolling=function(a,b){"undefined"!==typeof b?(b=b.replace(/ /g,"").split(","),c.each(b,function(b,c){Ia(a,c,"k")})):d.keyboardScrolling=a};e.moveSectionUp=function(){var a=
c(".fp-section.active").prev(".fp-section");a.length||!d.loopTop&&!d.continuousVertical||(a=c(".fp-section").last());a.length&&z(a,null,!0)};e.moveSectionDown=function(){var a=c(".fp-section.active").next(".fp-section");a.length||!d.loopBottom&&!d.continuousVertical||(a=c(".fp-section").first());a.length&&z(a,null,!1)};e.silentMoveTo=function(a,b){requestAnimFrame(function(){e.setScrollingSpeed(0,"internal")});e.moveTo(a,b);requestAnimFrame(function(){e.setScrollingSpeed(C.scrollingSpeed,"internal")})};
e.moveTo=function(a,b){var c=Ea(a);"undefined"!==typeof b?U(a,b):0<c.length&&z(c)};e.moveSlideRight=function(){va("next")};e.moveSlideLeft=function(){va("prev")};e.reBuild=function(a){if(!h.hasClass("fp-destroyed")){requestAnimFrame(function(){v=!0});var b=n.width();q=n.height();d.resize&&Za(q,b);c(".fp-section").each(function(){var a=c(this).find(".fp-slides"),b=c(this).find(".fp-slide");d.verticalCentered&&c(this).find(".fp-tableCell").css("height",Da(c(this))+"px");c(this).css("height",q+"px");
d.scrollOverflow&&(b.length?b.each(function(){I(c(this))}):I(c(this)));1<b.length&&G(a,a.find(".fp-slide.active"))});(b=c(".fp-section.active").index(".fp-section"))&&e.silentMoveTo(b+1);requestAnimFrame(function(){v=!1});c.isFunction(d.afterResize)&&a&&d.afterResize.call(h);c.isFunction(d.afterReBuild)&&!a&&d.afterReBuild.call(h)}};e.setResponsive=function(a){var b=h.hasClass("fp-responsive");a?b||(e.setAutoScrolling(!1,"internal"),e.setFitToSection(!1,"internal"),c("#fp-nav").hide(),h.addClass("fp-responsive")):
b&&(e.setAutoScrolling(C.autoScrolling,"internal"),e.setFitToSection(C.autoScrolling,"internal"),c("#fp-nav").show(),h.removeClass("fp-responsive"))};var w=!1,P=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Q="ontouchstart"in k||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,h=c(this),q=n.height(),v=!1,Ja=!0,y,ea,u=!0,B=[],N,l={m:{up:!0,down:!0,left:!0,right:!0}};l.k=c.extend(!0,{},l.m);var C=c.extend(!0,
{},d),ia,ca,ga,Z,aa,Ka;c(this).length&&La();var W=!1;n.on("scroll",pa);var F=0,M=0,E=0,L=0,ua=(new Date).getTime();k.requestAnimFrame=function(){return k.requestAnimationFrame||k.webkitRequestAnimationFrame||k.mozRequestAnimationFrame||k.oRequestAnimationFrame||k.msRequestAnimationFrame||function(a){a()}}();n.on("hashchange",ya);t.keydown(function(a){clearTimeout(Ka);var b=c(":focus");b.is("textarea")||b.is("input")||b.is("select")||!d.keyboardScrolling||!d.autoScrolling||(-1<c.inArray(a.which,[40,
38,32,33,34])&&a.preventDefault(),N=a.ctrlKey,Ka=setTimeout(function(){var b=a.shiftKey;switch(a.which){case 38:case 33:l.k.up&&e.moveSectionUp();break;case 32:if(b&&l.k.up){e.moveSectionUp();break}case 40:case 34:l.k.down&&e.moveSectionDown();break;case 36:l.k.up&&e.moveTo(1);break;case 35:l.k.down&&e.moveTo(c(".fp-section").length);break;case 37:l.k.left&&e.moveSlideLeft();break;case 39:l.k.right&&e.moveSlideRight()}},150))});t.keyup(function(a){Ja&&(N=a.ctrlKey)});c(k).blur(function(){N=Ja=!1});
h.mousedown(function(a){2==a.which&&(O=a.pageY,h.on("mousemove",Ya))});h.mouseup(function(a){2==a.which&&h.off("mousemove")});var O=0;t.on("click touchstart","#fp-nav a",function(a){a.preventDefault();a=c(this).parent().index();z(c(".fp-section").eq(a))});t.on("click touchstart",".fp-slidesNav a",function(a){a.preventDefault();a=c(this).closest(".fp-section").find(".fp-slides");var b=a.find(".fp-slide").eq(c(this).closest("li").index());G(a,b)});d.normalScrollElements&&(t.on("mouseenter",d.normalScrollElements,
function(){e.setMouseWheelScrolling(!1)}),t.on("mouseleave",d.normalScrollElements,function(){e.setMouseWheelScrolling(!0)}));c(".fp-section").on("click touchstart",".fp-controlArrow",function(){c(this).hasClass("fp-prev")?l.m.left&&e.moveSlideLeft():l.m.right&&e.moveSlideRight()});n.resize(Ba);var ha=q;e.destroy=function(a){e.setAutoScrolling(!1,"internal");e.setAllowScrolling(!1);e.setKeyboardScrolling(!1);h.addClass("fp-destroyed");clearTimeout(ga);clearTimeout(ca);clearTimeout(ia);clearTimeout(Z);
clearTimeout(aa);n.off("scroll",pa).off("hashchange",ya).off("resize",Ba);t.off("click","#fp-nav a").off("mouseenter","#fp-nav li").off("mouseleave","#fp-nav li").off("click",".fp-slidesNav a").off("mouseover",d.normalScrollElements).off("mouseout",d.normalScrollElements);c(".fp-section").off("click",".fp-controlArrow");clearTimeout(ga);clearTimeout(ca);a&&bb()}}});;
/*
|------------------------------------------|
| MelonHTML5 - Royal Preloader             |
|------------------------------------------|
| @author:  Lee Le (lee@melonhtml5.com)    |
| @version: 2.06 (11 April 2015)           |
| @website: www.melonhtml5.com             |
|------------------------------------------|
*/

/**
  (https://developer.mozilla.org/en-US/docs/DOM/document.cookie)
  docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
  docCookies.getItem(name)
  docCookies.removeItem(name[, path])
  docCookies.hasItem(name)
*/
var docCookies={getItem:function(a){return!a||!this.hasItem(a)?null:unescape(document.cookie.replace(RegExp("(?:^|.*;\\s*)"+escape(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1"))},setItem:function(a,c,b,e,f,g){if(a&&!/^(?:expires|max\-age|path|domain|secure)$/i.test(a)){var d="";if(b)switch(b.constructor){case Number:d=Infinity===b?"; expires=Tue, 19 Jan 2038 03:14:07 GMT":"; max-age="+b;break;case String:d="; expires="+b;break;case Date:d="; expires="+b.toGMTString()}document.cookie=
escape(a)+"="+escape(c)+d+(f?"; domain="+f:"")+(e?"; path="+e:"")+(g?"; secure":"")}},removeItem:function(a,c){a&&this.hasItem(a)&&(document.cookie=escape(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(c?"; path="+c:""))},hasItem:function(a){return RegExp("(?:^|;\\s*)"+escape(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)}};

var JQ=jQuery;window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();
window.transitionEnd=function(a,c){var b=!1,d=document.createElement("div");JQ(["transition","WebkitTransition","MozTransition","msTransition"]).each(function(a,c){if(void 0!==d.style[c])return b=!0,!1});b?a.bind("webkitTransitionEnd oTransitionEnd MSTransitionEnd transitionend",function(b){a.unbind("webkitTransitionEnd oTransitionEnd MSTransitionEnd transitionend");c(b,a)}):setTimeout(function(){c(null,a)},0);return a};
var Royal_Preloader={_overlay:null,_loader:null,_name:null,_percentage:null,_on_complete:null,_text_loader:null,_text_loader_overlay:null,_logo_loader:null,_logo_loader_meter:null,_total:0,_loaded:0,_image_queue:[],_percentage_loaded:0,_mode:"number",_text:"loading...",_text_colour:"#FFFFFF",_images:[],_show_progress:!0,_show_percentage:!0,_background:"#000000",_logo:"",_logo_size:[80,80],_cookie:!1,_timeout:10,_init:function(){JQ("img").each(function(a){JQ(this).attr("src")&&Royal_Preloader._images.push(JQ(this).attr("src"))});
if(Royal_Preloader._cookie){if(docCookies.getItem("melonhtml5_royal_preloader_"+Royal_Preloader._cookie)){JQ("#royal_preloader").remove();JQ(document.body).removeClass("royal_preloader");return}docCookies.setItem("melonhtml5_royal_preloader_"+Royal_Preloader._cookie,(new Date).getTime(),Infinity)}Royal_Preloader._total=Royal_Preloader._images.length;Royal_Preloader._build();Royal_Preloader._load()},_build:function(){this._overlay=JQ("#royal_preloader");this._overlay.length||(this._overlay=JQ("<div>").attr("id",
"royal_preloader").prependTo(JQ(document.body)));this._overlay.addClass("royal_preloader_"+this._mode);"line"!==this._mode&&this._overlay.css("background-color",this._background);switch(this._mode){case "number":var a=this._hexToRgb(this._text_colour);this._percentage=JQ("<div>").html("<div></div><span></span>").css({color:this._text_colour,"border-color":a?"rgba("+a.r+", "+a.g+", "+a.b+", 0.7)":this._text_colour}).addClass("royal_preloader_percentage").appendTo(this._overlay);this._percentage.children("div").css("border-left-color",
this._text_colour);break;case "text":this._text_loader=JQ("<div>").addClass("royal_preloader_loader").text(this._text).css("color",this._text_colour).appendTo(this._overlay);this._text_loader_overlay=JQ("<div>").css("background-color",this._background).appendTo(this._text_loader);break;case "scale_text":for(var a="",c=0;c<this._text.length;c++)a+="<span>"+this._htmlentities(this._text.charAt(c))+"</span>";this._text_loader=JQ("<div>").addClass("royal_preloader_loader").html(a).css("color",this._text_colour).appendTo(this._overlay);
break;case "logo":this._logo_loader=JQ("<div>").css({width:this._logo_size[0],height:this._logo_size[1],"margin-left":this._logo_size[0]/2*-1,"margin-top":this._logo_size[1]/2*-1,"background-image":'url("'+this._logo+'")'}).addClass("royal_preloader_loader").appendTo(this._overlay);this._logo_loader_meter=JQ("<div>").css("background-color",this._background).appendTo(this._logo_loader);this._show_progress&&(this._percentage=JQ("<div>").css({color:this._text_colour,width:this._logo_size[0],height:this._logo_size[1],
"margin-left":this._logo_size[0]/2*-1,"margin-top":this._logo_size[1]/2,"background-color":this._background}).addClass("royal_preloader_percentage").appendTo(this._overlay));break;case "line":this._line_loader=JQ("<div>").addClass("royal_preloader_loader").css("background-color",this._background).appendTo(this._overlay);JQ("<div>").addClass("royal_preloader_peg").css("box-shadow","0 0 10px "+this._background).appendTo(this._line_loader);JQ(document.body).css("visibility","visible");break;case "progress":this._progress_loader=
JQ("<div>").addClass("royal_preloader_loader").appendTo(this._overlay),this._progress_loader_meter=JQ("<div>").addClass("royal_preloader_meter").appendTo(this._progress_loader),this._show_progress&&(this._percentage=JQ("<div>").addClass("royal_preloader_percentage").text(0).appendTo(this._overlay))}this._overlay.appendTo(JQ(document.body));"text"!==this._mode&&"scale_text"!==this._mode||this._text_loader.css("margin-left",this._text_loader.width()/2*-1)},_load:function(){if(("number"===this._mode||
"logo"===this._mode||"progress"===this._mode)&&this._show_progress){this._percentage.data("num",0);var a="0"+(Royal_Preloader._show_percentage?"%":"");"number"===this._mode?this._percentage.children("span").text(a):this._percentage.text(a)}JQ.each(this._images,function(a,b){var d=function(){Royal_Preloader._imageOnLoad(b)},e=new Image;e.src=b;e.complete?d():(e.onload=d,e.onerror=d)});setTimeout(function(){Royal_Preloader._overlay&&Royal_Preloader._animatePercentage(Royal_Preloader._percentage_loaded,
100)},this._images.length?1E3*this._timeout:0)},_hexToRgb:function(a){return(a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null},_htmlentities:function(a){return a.toString().replace(/&/g,"&amp;").replace(/\"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;")},_animatePercentage:function(a,c){Royal_Preloader._percentage_loaded=a;a<c&&(a++,setTimeout(function(){switch(Royal_Preloader._mode){case "text":Royal_Preloader._text_loader_overlay.css("left",
a+"%");break;case "scale_text":var b=parseInt(Royal_Preloader._text.length*a*.01,10);Royal_Preloader._text_loader.children("span").eq(b).addClass("loaded");break;case "line":Royal_Preloader._line_loader.width(a+"%");break;case "number":Royal_Preloader._show_progress&&(b=a+(Royal_Preloader._show_percentage?"%":""),Royal_Preloader._percentage.children("span").text(b));break;case "logo":Royal_Preloader._show_progress&&(b=a+(Royal_Preloader._show_percentage?"%":""),Royal_Preloader._percentage.text(b));
Royal_Preloader._logo_loader_meter.css("bottom",a+"%");break;case "progress":Royal_Preloader._show_progress&&(b=a+(Royal_Preloader._show_percentage?"%":""),Royal_Preloader._percentage.text(b)),Royal_Preloader._progress_loader_meter.width(a+"%")}Royal_Preloader._animatePercentage(a,c)},5),100===a&&Royal_Preloader._loadFinish())},_imageOnLoad:function(a){this._image_queue.push(a);this._image_queue.length&&this._image_queue[0]===a&&this._processQueue()},_reQueue:function(){Royal_Preloader._image_queue.splice(0,
1);Royal_Preloader._processQueue()},_processQueue:function(){0!==this._image_queue.length&&(this._loaded++,Royal_Preloader._animatePercentage(Royal_Preloader._percentage_loaded,parseInt(this._loaded/this._total*100,10)),this._reQueue())},_loadFinish:function(){transitionEnd(this._overlay,function(a,c){Royal_Preloader._overlay&&(Royal_Preloader._overlay.remove(),Royal_Preloader._overlay=null)});this._overlay.addClass("complete");JQ(document.body).removeClass("royal_preloader");this._on_complete&&this._on_complete()},
config:function(a){"undefined"!==typeof a.mode&&(this._mode=a.mode);"undefined"!==typeof a.text&&(this._text=a.text);"undefined"!==typeof a.text_colour&&(this._text_colour=a.text_colour);"undefined"!==typeof a.timeout&&(this._timeout=parseInt(a.timeout,10));"undefined"!==typeof a.showProgress&&(this._show_progress=a.showProgress?!0:!1);"undefined"!==typeof a.showPercentage&&(this._show_percentage=a.showPercentage?!0:!1);"undefined"!==typeof a.background&&(this._background=a.background);"undefined"!==
typeof a.logo&&(this._logo=a.logo);"undefined"!==typeof a.logo_size&&(this._logo_size=a.logo_size);"undefined"!==typeof a.onComplete&&(this._on_complete=a.onComplete);"undefined"!==typeof a.images&&(this._images=a.images);"undefined"!==typeof a.cookie&&(this._cookie=a.cookie)}};setTimeout(function(){JQ(document).ready(Royal_Preloader._init)});;
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);;
/*! WOW - v1.0.3 - 2015-01-14
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass,null!=this.config.callback?this.config.callback(a):void 0},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return c},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);;
/*Name : TweeCool
 *version: 1.5 
 *Description: get the latest tweets from twitter.
 *Website: www.tweecool.com
 *Licence: no licence, feel free to do whatever you want.
 * Author: TweeCool
 */

!function(e){e.fn.extend({tweecool:function(t){function a(e){var t=new Date,a=Date.parse(t),o=1e3*e,r=(a-o)/1e3,i=1,s=60,n=3600,l=86400,m=604800,u=2592e3,h=31536e3;return r>i&&s>r?Math.round(r/i)+" seconds ago":r>=s&&n>r?Math.round(r/s)+" minutes ago":r>=n&&l>r?Math.round(r/n)+" hours ago":r>=l&&m>r?Math.round(r/l)+" days ago":r>=m&&u>r?Math.round(r/m)+" weeks ago":r>=u&&h>r?Math.round(r/u)+" months ago":"over a year ago"}var o={username:"tweecool",limit:5,profile_image:!0,show_time:!0,show_media:!1,show_media_size:"small"},t=e.extend(o,t);return this.each(function(){var o=t,r=e(this),i=e('<ul class="w-list-unstyled">').appendTo(r),s=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,n="";e.getJSON("https://www.api.tweecool.com/?screenname="+o.username+"&count="+o.limit,function(t){if(t.errors||null==t)return r.html("No tweets available."),!1;if(o.profile_image)var l='<a style=" float: left; margin-right: 15px;" href="https://twitter.com/'+o.username+'" target="_blank"><img style="border-radius:100%;" src="'+t.user.profile_image_url+'" alt="'+o.username+'" /></a>';else l="";e.each(t.tweets,function(e,t){if(o.show_time)var r=a(t.timestamp);else var r="";n=o.show_media&&t.media_url?'<a href="https://twitter.com/'+o.username+'" target="_blank"><img src="'+t.media_url+":"+o.show_media_size+'" alt="'+o.username+'" class="media" /></a>':"",i.append('<li class="w-clearfix" style="margin-bottom: 45px;">'+l+'<div class="tweets_txt" style="overflow:hidden; color: #979797; font-size: 16px; line-height: 26px;">'+t.text.replace(s,'<a style="text-decoration: none; color: #ff8686;" href="$1" target="_blank">$1</a>')+n+' </br><span style="color: ##B9B9B9; font-size: 14px; margin-top: 5px;">'+r+"</span></div></li>")})}).fail(function(e,t,a){r.html("No tweets available")})})}})}(jQuery);;
(function(n){var t;t=function(t,i){this.$el=n(t);this.end=i.expiryDate;this.interval=i.interval;this.speed=i.speed;this.timer=0;this.callBack=jQuery.isFunction(i.callBack)?i.callBack:null;this.localization={days:"days",hours:"hours",minutes:"minutes",seconds:"seconds"};n.extend(this.localization,this.localization,i.localization)};t.prototype={getCounterNumbers:function(){var n={days:{tens:0,units:0,hundreds:0},hours:{tens:0,units:0},minutes:{tens:0,units:0},seconds:{tens:0,units:0}},s=864e5,h=36e5,c=6e4,t=0,l=new Date,i=this.end.getTime()-l.getTime(),r,u,f,e,o;return i<=0?n:(r=Math.min(Math.floor(i/s),999),t=i%s,n.days.hundreds=Math.floor(r/100),u=r%100,n.days.tens=Math.floor(u/10),n.days.units=u%10,f=Math.floor(t/h),t=t%h,n.hours.tens=Math.floor(f/10),n.hours.units=f%10,e=Math.floor(t/c),t=t%c,n.minutes.tens=Math.floor(e/10),n.minutes.units=e%10,o=Math.floor(t/1e3),n.seconds.tens=Math.floor(o/10),n.seconds.units=o%10,n)},updatePart:function(t){var r=this.getCounterNumbers(),i=n("."+t,this.$el),u,f;t=="days"&&(this.setDayHundreds(r.days.hundreds>0),i.find(".number.hundreds.show").html()!=r[t].hundreds&&(u=n(".n1.hundreds",i),f=n(".n2.hundreds",i),this.scrollNumber(u,f,r[t].hundreds)));i.find(".number.tens.show").html()!=r[t].tens&&(u=n(".n1.tens",i),f=n(".n2.tens",i),this.scrollNumber(u,f,r[t].tens));i.find(".number.units.show").html()!=r[t].units&&(u=n(".n1.units",i),f=n(".n2.units",i),this.scrollNumber(u,f,r[t].units))},timeOut:function(){var n=new Date,t=this.end.getTime()-n.getTime();return t<=0?!0:!1},setDayHundreds:function(t){t?n(".counter.days",this.$el).addClass("with-hundreds"):n(".counter.days",this.$el).removeClass("with-hundreds")},updateCounter:function(){this.updatePart("days");this.updatePart("hours");this.updatePart("minutes");this.updatePart("seconds");this.timeOut()&&(this.stop(),this.callBack&&this.callBack(this))},localize:function(t){n.isPlainObject(t)&&n.extend(this.localization,this.localization,t);n(".days",this.$el).siblings(".counter-caption").text(this.localization.days);n(".hours",this.$el).siblings(".counter-caption").text(this.localization.hours);n(".minutes",this.$el).siblings(".counter-caption").text(this.localization.minutes);n(".seconds",this.$el).siblings(".counter-caption").text(this.localization.seconds)},start:function(){var n=this;n.stop();n.timer==0&&(n.timer=setInterval(function(){n.updateCounter()},n.interval));n.updateCounter()},stop:function(){this.timer>0&&(clearInterval(this.timer),this.timer=0)},scrollNumber:function(n,t,i){n.hasClass("show")?(t.removeClass("hidden-down").css("top","-100%").text(i).stop().animate({top:0},this.speed,function(){t.addClass("show")}),n.stop().animate({top:"100%"},this.speed,function(){n.removeClass("show").addClass("hidden-down")})):(n.removeClass("hidden-down").css("top","-100%").text(i).stop().animate({top:0},this.speed,function(){n.addClass("show")}),t.stop().animate({top:"100%"},this.speed,function(){t.removeClass("show").addClass("hidden-down")}))}};jQuery.fn.mbComingsoon=function(i){var u={interval:1e3,callBack:null,localization:{days:"days",hours:"hours",minutes:"minutes",seconds:"seconds"},speed:500},r={},f='   <div class="counter-group" id="myCounter">       <div class="counter-block">           <div class="counter days">               <div class="number show n1 hundreds">0<\/div>               <div class="number show n1 tens">0<\/div>               <div class="number show n1 units">0<\/div>               <div class="number hidden-up n2 hundreds">0<\/div>               <div class="number hidden-up n2 tens">0<\/div>               <div class="number hidden-up n2 units">0<\/div>           <\/div>           <div class="counter-caption">days<\/div>       <\/div>       <div class="counter-block">           <div class="counter hours">               <div class="number show n1 tens">0<\/div>               <div class="number show n1 units">0<\/div>               <div class="number hidden-up n2 tens">0<\/div>               <div class="number hidden-up n2 units">0<\/div>           <\/div>           <div class="counter-caption">hours<\/div>       <\/div>       <div class="counter-block">           <div class="counter minutes">               <div class="number show n1 tens">0<\/div>               <div class="number show n1 units">0<\/div>               <div class="number hidden-up n2 tens">0<\/div>               <div class="number hidden-up n2 units">0<\/div>           <\/div>           <div class="counter-caption">minutes<\/div>       <\/div>       <div class="counter-block">           <div class="counter seconds">               <div class="number show n1 tens">0<\/div>               <div class="number show n1 units">0<\/div>               <div class="number hidden-up n2 tens">0<\/div>               <div class="number hidden-up n2 units">0<\/div>           <\/div>           <div class="counter-caption">seconds<\/div>       <\/div>   <\/div>';return this.each(function(){var o=n(this),e=o.data("mbComingsoon");if(typeof e=="undefined"){if(i instanceof Date?r.expiryDate=i:n.isPlainObject(i)?n.extend(r,u,i):typeof i=="string"&&(r.expiryDate=new Date(i)),!r.expiryDate)throw new Error("Expiry date is required!");e=new t(o,r);o.data("mbComingsoon",e);o.html(f);e.localize();e.start()}else i=="start"?e.start():i=="stop"?e.stop():n.isPlainObject(i)&&(i.expiryDate instanceof Date&&(e.end=i.expiryDate),n.isNumeric(i.interval)&&(e.interval=i.interval),n.isFunction(i.callBack)&&(e.callBack=i.callBack),n.isPlainObject(i.localization)&&this.localize(i.localization),e.start())})}})(jQuery);
/*

*/;
// The MIT License (MIT)

// Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




!function(t){"use strict";var s=function(s,e){this.el=t(s),this.options=t.extend({},t.fn.typed.defaults,e),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=this.isInput?!1:this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};s.prototype={constructor:s,init:function(){var t=this;t.timeout=setTimeout(function(){for(var s=0;s<t.strings.length;++s)t.sequence[s]=s;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){this.showCursor===!0&&(this.cursor=t('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.init()},typewrite:function(t,s){if(this.stop!==!0){var e=Math.round(70*Math.random())+this.typeSpeed,o=this;o.timeout=setTimeout(function(){var e=0,r=t.substr(s);if("^"===r.charAt(0)){var i=1;/^\^\d+/.test(r)&&(r=/\d+/.exec(r)[0],i+=r.length,e=parseInt(r)),t=t.substring(0,s)+t.substring(s+i)}if("html"===o.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="",h="";for(h="<"===n?">":";";t.substr(s).charAt(0)!==h;)a+=t.substr(s).charAt(0),s++;s++,a+=h}}o.timeout=setTimeout(function(){if(s===t.length){if(o.options.onStringTyped(o.arrayPos),o.arrayPos===o.strings.length-1&&(o.options.callback(),o.curLoop++,o.loop===!1||o.curLoop===o.loopCount))return;o.timeout=setTimeout(function(){o.backspace(t,s)},o.backDelay)}else{0===s&&o.options.preStringTyped(o.arrayPos);var e=t.substr(0,s+1);o.attr?o.el.attr(o.attr,e):o.isInput?o.el.val(e):"html"===o.contentType?o.el.html(e):o.el.text(e),s++,o.typewrite(t,s)}},e)},e)}},backspace:function(t,s){if(this.stop!==!0){var e=Math.round(70*Math.random())+this.backSpeed,o=this;o.timeout=setTimeout(function(){if("html"===o.contentType&&">"===t.substr(s).charAt(0)){for(var e="";"<"!==t.substr(s).charAt(0);)e-=t.substr(s).charAt(0),s--;s--,e+="<"}var r=t.substr(0,s);o.attr?o.el.attr(o.attr,r):o.isInput?o.el.val(r):"html"===o.contentType?o.el.html(r):o.el.text(r),s>o.stopNum?(s--,o.backspace(t,s)):s<=o.stopNum&&(o.arrayPos++,o.arrayPos===o.strings.length?(o.arrayPos=0,o.shuffle&&(o.sequence=o.shuffleArray(o.sequence)),o.init()):o.typewrite(o.strings[o.sequence[o.arrayPos]],s))},e)}},shuffleArray:function(t){var s,e,o=t.length;if(o)for(;--o;)e=Math.floor(Math.random()*(o+1)),s=t[e],t[e]=t[o],t[o]=s;return t},reset:function(){var t=this;clearInterval(t.timeout);var s=this.el.attr("id");this.el.after('<span id="'+s+'"/>'),this.el.remove(),"undefined"!=typeof this.cursor&&this.cursor.remove(),t.options.resetCallback()}},t.fn.typed=function(e){return this.each(function(){var o=t(this),r=o.data("typed"),i="object"==typeof e&&e;r||o.data("typed",r=new s(this,i)),"string"==typeof e&&r[e]()})},t.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);;
!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){n(4),n(5),n(6),n(7),n(8),n(9),n(1),n(10),n(11),n(12),n(13),n(14),n(15),n(16),t.exports=n(17)},function(t,e,n){"use strict";function i(t){d.env()&&(y(t.design)&&v.on("__wf_design",t.design),y(t.preview)&&v.on("__wf_preview",t.preview)),y(t.destroy)&&v.on("__wf_destroy",t.destroy),t.ready&&y(t.ready)&&o(t)}function o(t){return b?void t.ready():void(w.contains(f,t.ready)||f.push(t.ready))}function r(t){y(t.design)&&v.off("__wf_design",t.design),y(t.preview)&&v.off("__wf_preview",t.preview),y(t.destroy)&&v.off("__wf_destroy",t.destroy),t.ready&&y(t.ready)&&a(t)}function a(t){f=w.filter(f,function(e){return e!==t.ready})}function s(t,e){var n=[],i={};return i.up=w.throttle(function(t){w.each(n,function(e){e(t)})}),t&&e&&t.on(e,i.up),i.on=function(t){"function"==typeof t&&(w.contains(n,t)||n.push(t))},i.off=function(t){return arguments.length?void(n=w.filter(n,function(e){return e!==t})):void(n=[])},i}function c(t){y(t)&&t()}function u(){k=!1,w.each(p,i)}function l(){M&&(M.reject(),v.off("load",M.resolve)),M=new m.Deferred,v.on("load",M.resolve)}var d={},p={},f=[],h=window.fixim||[],m=window.jQuery,v=m(window),g=m(document),y=m.isFunction,w=d._=n(18),x=n(3)&&m.tram,b=!1,k=!1,z=window.Modernizr;x.config.hideBackface=!1,x.config.keepInherited=!0,d.define=function(t,e,n){p[t]&&r(p[t]);var o=p[t]=e(m,w,n)||{};return i(o),o},d.require=function(t){return p[t]},d.push=function(t){return b?void(y(t)&&t()):void h.push(t)},d.env=function(t){var e=window.__wf_design,n="undefined"!=typeof e;return t?"design"===t?n&&e:"preview"===t?n&&!e:"slug"===t?n&&window.__wf_slug:"editor"===t?window.fiximEditor:"test"===t?window.__wf_test:"frame"===t?window!==window.top:void 0:n};var _=navigator.userAgent.toLowerCase(),A=navigator.appVersion.toLowerCase(),T=d.env.touch="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,B=d.env.chrome=/chrome/.test(_)&&/Google/.test(navigator.vendor)&&parseInt(A.match(/chrome\/(\d+)\./)[1],10),O=d.env.ios=z&&z.ios;d.env.safari=/safari/.test(_)&&!B&&!O;var C;T&&g.on("touchstart mousedown",function(t){C=t.target}),d.validClick=T?function(t){return t===C||m.contains(t,C)}:function(){return!0};var E="resize.fixim orientationchange.fixim load.fixim",L="scroll.fixim "+E;if(d.resize=s(v,E),d.scroll=s(v,L),d.redraw=s(),d.location=function(t){window.location=t},d.app=d.env()?{}:null,d.app){var j=new Event("__wf_redraw");d.app.redrawElement=function(t,e){e.dispatchEvent(j)},d.location=function(t){window.dispatchEvent(new CustomEvent("__wf_location",{detail:t}))}}d.ready=function(){b=!0,k?u():w.each(f,c),w.each(h,c),d.resize.up()};var M;d.load=function(t){M.then(t)},d.destroy=function(t){t=t||{},k=!0,v.triggerHandler("__wf_destroy"),null!=t.domready&&(b=t.domready),w.each(p,r),d.resize.off(),d.scroll.off(),d.redraw.off(),f=[],h=[],"pending"===M.state()&&l()},m(d.ready),l(),t.exports=window.fixim=d},function(t,e){"use strict";var n=window.jQuery,i={},o=[],r=".w-ix",a={reset:function(t,e){e.__wf_intro=null},intro:function(t,e){e.__wf_intro||(e.__wf_intro=!0,n(e).triggerHandler(i.types.INTRO))},outro:function(t,e){e.__wf_intro&&(e.__wf_intro=null,n(e).triggerHandler(i.types.OUTRO))}};i.triggers={},i.types={INTRO:"w-ix-intro"+r,OUTRO:"w-ix-outro"+r},i.init=function(){for(var t=o.length,e=0;t>e;e++){var r=o[e];r[0](0,r[1])}o=[],n.extend(i.triggers,a)},i.async=function(){for(var t in a){var e=a[t];a.hasOwnProperty(t)&&(i.triggers[t]=function(t,n){o.push([e,n])})}},i.async(),t.exports=i},function(t,e){window.tram=function(t){function e(t,e){var n=new $.Bare;return n.init(t,e)}function n(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}function i(t){var e=parseInt(t.slice(1),16),n=e>>16&255,i=e>>8&255,o=255&e;return[n,i,o]}function o(t,e,n){return"#"+(1<<24|t<<16|e<<8|n).toString(16).slice(1)}function r(){}function a(t,e){K("Type warning: Expected: ["+t+"] Got: ["+typeof e+"] "+e)}function s(t,e,n){K("Units do not match ["+t+"]: "+e+", "+n)}function c(t,e,n){if(void 0!==e&&(n=e),void 0===t)return n;var i=n;return J.test(t)||!V.test(t)?i=parseInt(t,10):V.test(t)&&(i=1e3*parseFloat(t)),0>i&&(i=0),i===i?i:n}function u(t){for(var e=-1,n=t?t.length:0,i=[];++e<n;){var o=t[e];o&&i.push(o)}return i}var l=function(t,e,n){function i(t){return"object"==typeof t}function o(t){return"function"==typeof t}function r(){}function a(s,c){function u(){var t=new l;return o(t.init)&&t.init.apply(t,arguments),t}function l(){}c===n&&(c=s,s=Object),u.Bare=l;var d,p=r[t]=s[t],f=l[t]=u[t]=new r;return f.constructor=u,u.mixin=function(e){return l[t]=u[t]=a(u,e)[t],u},u.open=function(t){if(d={},o(t)?d=t.call(u,f,p,u,s):i(t)&&(d=t),i(d))for(var n in d)e.call(d,n)&&(f[n]=d[n]);return o(f.init)||(f.init=s),u},u.open(c)}return a}("prototype",{}.hasOwnProperty),d={ease:["ease",function(t,e,n,i){var o=(t/=i)*t,r=o*t;return e+n*(-2.75*r*o+11*o*o+-15.5*r+8*o+.25*t)}],"ease-in":["ease-in",function(t,e,n,i){var o=(t/=i)*t,r=o*t;return e+n*(-1*r*o+3*o*o+-3*r+2*o)}],"ease-out":["ease-out",function(t,e,n,i){var o=(t/=i)*t,r=o*t;return e+n*(.3*r*o+-1.6*o*o+2.2*r+-1.8*o+1.9*t)}],"ease-in-out":["ease-in-out",function(t,e,n,i){var o=(t/=i)*t,r=o*t;return e+n*(2*r*o+-5*o*o+2*r+2*o)}],linear:["linear",function(t,e,n,i){return n*t/i+e}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(t,e,n,i){return n*(t/=i)*t+e}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(t,e,n,i){return-n*(t/=i)*(t-2)+e}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(t,e,n,i){return n*(t/=i)*t*t+e}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(t,e,n,i){return n*(t/=i)*t*t*t+e}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(t,e,n,i){return-n*((t=t/i-1)*t*t*t-1)+e}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(t,e,n,i){return n*(t/=i)*t*t*t*t+e}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(t,e,n,i){return n*((t=t/i-1)*t*t*t*t+1)+e}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(t,e,n,i){return-n*Math.cos(t/i*(Math.PI/2))+n+e}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(t,e,n,i){return n*Math.sin(t/i*(Math.PI/2))+e}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(t,e,n,i){return-n/2*(Math.cos(Math.PI*t/i)-1)+e}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(t,e,n,i){return 0===t?e:n*Math.pow(2,10*(t/i-1))+e}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(t,e,n,i){return t===i?e+n:n*(-Math.pow(2,-10*t/i)+1)+e}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(t,e,n,i){return 0===t?e:t===i?e+n:(t/=i/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(-Math.pow(2,-10*--t)+2)+e}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(t,e,n,i){return-n*(Math.sqrt(1-(t/=i)*t)-1)+e}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(t,e,n,i){return n*Math.sqrt(1-(t=t/i-1)*t)+e}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(t,e,n,i){return(t/=i/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(t,e,n,i,o){return void 0===o&&(o=1.70158),n*(t/=i)*t*((o+1)*t-o)+e}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(t,e,n,i,o){return void 0===o&&(o=1.70158),n*((t=t/i-1)*t*((o+1)*t+o)+1)+e}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(t,e,n,i,o){return void 0===o&&(o=1.70158),(t/=i/2)<1?n/2*t*t*(((o*=1.525)+1)*t-o)+e:n/2*((t-=2)*t*(((o*=1.525)+1)*t+o)+2)+e}]},p={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},f=document,h=window,m="bkwld-tram",v=/[\-\.0-9]/g,g=/[A-Z]/,y="number",w=/^(rgb|#)/,x=/(em|cm|mm|in|pt|pc|px)$/,b=/(em|cm|mm|in|pt|pc|px|%)$/,k=/(deg|rad|turn)$/,z="unitless",_=/(all|none) 0s ease 0s/,A=/^(width|height)$/,T=" ",B=f.createElement("a"),O=["Webkit","Moz","O","ms"],C=["-webkit-","-moz-","-o-","-ms-"],E=function(t){if(t in B.style)return{dom:t,css:t};var e,n,i="",o=t.split("-");for(e=0;e<o.length;e++)i+=o[e].charAt(0).toUpperCase()+o[e].slice(1);for(e=0;e<O.length;e++)if(n=O[e]+i,n in B.style)return{dom:n,css:C[e]+t}},L=e.support={bind:Function.prototype.bind,transform:E("transform"),transition:E("transition"),backface:E("backface-visibility"),timing:E("transition-timing-function")};if(L.transition){var j=L.timing.dom;if(B.style[j]=d["ease-in-back"][0],!B.style[j])for(var M in p)d[M][0]=p[M]}var I=e.frame=function(){var t=h.requestAnimationFrame||h.webkitRequestAnimationFrame||h.mozRequestAnimationFrame||h.oRequestAnimationFrame||h.msRequestAnimationFrame;return t&&L.bind?t.bind(h):function(t){h.setTimeout(t,16)}}(),q=e.now=function(){var t=h.performance,e=t&&(t.now||t.webkitNow||t.msNow||t.mozNow);return e&&L.bind?e.bind(t):Date.now||function(){return+new Date}}(),S=l(function(e){function i(t,e){var n=u((""+t).split(T)),i=n[0];e=e||{};var o=G[i];if(!o)return K("Unsupported property: "+i);if(!e.weak||!this.props[i]){var r=o[0],a=this.props[i];return a||(a=this.props[i]=new r.Bare),a.init(this.$el,n,o,e),a}}function o(t,e,n){if(t){var o=typeof t;if(e||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),"number"==o&&e)return this.timer=new N({duration:t,context:this,complete:s}),void(this.active=!0);if("string"==o&&e){switch(t){case"hide":f.call(this);break;case"stop":l.call(this);break;case"redraw":h.call(this);break;default:i.call(this,t,n&&n[1])}return s.call(this)}if("function"==o)return void t.call(this,this);if("object"==o){var r=0;w.call(this,t,function(t,e){t.span>r&&(r=t.span),t.stop(),t.animate(e)},function(t){"wait"in t&&(r=c(t.wait,0))}),y.call(this),r>0&&(this.timer=new N({duration:r,context:this}),this.active=!0,e&&(this.timer.complete=s));var a=this,u=!1,d={};I(function(){w.call(a,t,function(t){t.active&&(u=!0,d[t.name]=t.nextStyle)}),u&&a.$el.css(d)})}}}function r(t){t=c(t,0),this.active?this.queue.push({options:t}):(this.timer=new N({duration:t,context:this,complete:s}),this.active=!0)}function a(t){return this.active?(this.queue.push({options:t,args:arguments}),void(this.timer.complete=s)):K("No active transition timer. Use start() or wait() before then().")}function s(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var t=this.queue.shift();o.call(this,t.options,!0,t.args)}}function l(t){this.timer&&this.timer.destroy(),this.queue=[],this.active=!1;var e;"string"==typeof t?(e={},e[t]=1):e="object"==typeof t&&null!=t?t:this.props,w.call(this,e,x),y.call(this)}function d(t){l.call(this,t),w.call(this,t,b,k)}function p(t){"string"!=typeof t&&(t="block"),this.el.style.display=t}function f(){l.call(this),this.el.style.display="none"}function h(){this.el.offsetHeight}function v(){l.call(this),t.removeData(this.el,m),this.$el=this.el=null}function y(){var t,e,n=[];this.upstream&&n.push(this.upstream);for(t in this.props)e=this.props[t],e.active&&n.push(e.string);n=n.join(","),this.style!==n&&(this.style=n,this.el.style[L.transition.dom]=n)}function w(t,e,o){var r,a,s,c,u=e!==x,l={};for(r in t)s=t[r],r in Q?(l.transform||(l.transform={}),l.transform[r]=s):(g.test(r)&&(r=n(r)),r in G?l[r]=s:(c||(c={}),c[r]=s));for(r in l){if(s=l[r],a=this.props[r],!a){if(!u)continue;a=i.call(this,r)}e.call(this,a,s)}o&&c&&o.call(this,c)}function x(t){t.stop()}function b(t,e){t.set(e)}function k(t){this.$el.css(t)}function z(t,n){e[t]=function(){return this.children?A.call(this,n,arguments):(this.el&&n.apply(this,arguments),this)}}function A(t,e){var n,i=this.children.length;for(n=0;i>n;n++)t.apply(this.children[n],e);return this}e.init=function(e){if(this.$el=t(e),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,H.keepInherited&&!H.fallback){var n=W(this.el,"transition");n&&!_.test(n)&&(this.upstream=n)}L.backface&&H.hideBackface&&Y(this.el,L.backface.css,"hidden")},z("add",i),z("start",o),z("wait",r),z("then",a),z("next",s),z("stop",l),z("set",d),z("show",p),z("hide",f),z("redraw",h),z("destroy",v)}),$=l(S,function(e){function n(e,n){var i=t.data(e,m)||t.data(e,m,new S.Bare);return i.el||i.init(e),n?i.start(n):i}e.init=function(e,i){var o=t(e);if(!o.length)return this;if(1===o.length)return n(o[0],i);var r=[];return o.each(function(t,e){r.push(n(e,i))}),this.children=r,this}}),D=l(function(t){function e(){var t=this.get();this.update("auto");var e=this.get();return this.update(t),e}function n(t,e,n){return void 0!==e&&(n=e),t in d?t:n}function i(t){var e=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);return(e?o(e[1],e[2],e[3]):t).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var r={duration:500,ease:"ease",delay:0};t.init=function(t,e,i,o){this.$el=t,this.el=t[0];var a=e[0];i[2]&&(a=i[2]),U[a]&&(a=U[a]),this.name=a,this.type=i[1],this.duration=c(e[1],this.duration,r.duration),this.ease=n(e[2],this.ease,r.ease),this.delay=c(e[3],this.delay,r.delay),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=A.test(this.name),this.unit=o.unit||this.unit||H.defaultUnit,this.angle=o.angle||this.angle||H.defaultAngle,H.fallback||o.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+T+this.duration+"ms"+("ease"!=this.ease?T+d[this.ease][0]:"")+(this.delay?T+this.delay+"ms":""))},t.set=function(t){t=this.convert(t,this.type),this.update(t),this.redraw()},t.transition=function(t){this.active=!0,t=this.convert(t,this.type),this.auto&&("auto"==this.el.style[this.name]&&(this.update(this.get()),this.redraw()),"auto"==t&&(t=e.call(this))),this.nextStyle=t},t.fallback=function(t){var n=this.el.style[this.name]||this.convert(this.get(),this.type);t=this.convert(t,this.type),this.auto&&("auto"==n&&(n=this.convert(this.get(),this.type)),"auto"==t&&(t=e.call(this))),this.tween=new F({from:n,to:t,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.get=function(){return W(this.el,this.name)},t.update=function(t){Y(this.el,this.name,t)},t.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,Y(this.el,this.name,this.get()));var t=this.tween;t&&t.context&&t.destroy()},t.convert=function(t,e){if("auto"==t&&this.auto)return t;var n,o="number"==typeof t,r="string"==typeof t;switch(e){case y:if(o)return t;if(r&&""===t.replace(v,""))return+t;n="number(unitless)";break;case w:if(r){if(""===t&&this.original)return this.original;if(e.test(t))return"#"==t.charAt(0)&&7==t.length?t:i(t)}n="hex or rgb string";break;case x:if(o)return t+this.unit;if(r&&e.test(t))return t;n="number(px) or string(unit)";break;case b:if(o)return t+this.unit;if(r&&e.test(t))return t;n="number(px) or string(unit or %)";break;case k:if(o)return t+this.angle;if(r&&e.test(t))return t;n="number(deg) or string(angle)";break;case z:if(o)return t;if(r&&b.test(t))return t;n="number(unitless) or string(unit or %)"}return a(n,t),t},t.redraw=function(){this.el.offsetHeight}}),R=l(D,function(t,e){t.init=function(){e.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),w))}}),X=l(D,function(t,e){t.init=function(){e.init.apply(this,arguments),this.animate=this.fallback},t.get=function(){return this.$el[this.name]()},t.update=function(t){this.$el[this.name](t)}}),P=l(D,function(t,e){function n(t,e){var n,i,o,r,a;for(n in t)r=Q[n],o=r[0],i=r[1]||n,a=this.convert(t[n],o),e.call(this,i,a,o)}t.init=function(){e.init.apply(this,arguments),this.current||(this.current={},Q.perspective&&H.perspective&&(this.current.perspective=H.perspective,Y(this.el,this.name,this.style(this.current)),this.redraw()))},t.set=function(t){n.call(this,t,function(t,e){this.current[t]=e}),Y(this.el,this.name,this.style(this.current)),this.redraw()},t.transition=function(t){var e=this.values(t);this.tween=new Z({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease});var n,i={};for(n in this.current)i[n]=n in e?e[n]:this.current[n];this.active=!0,this.nextStyle=this.style(i)},t.fallback=function(t){var e=this.values(t);this.tween=new Z({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.update=function(){Y(this.el,this.name,this.style(this.current))},t.style=function(t){var e,n="";for(e in t)n+=e+"("+t[e]+") ";return n},t.values=function(t){var e,i={};return n.call(this,t,function(t,n,o){i[t]=n,void 0===this.current[t]&&(e=0,~t.indexOf("scale")&&(e=1),this.current[t]=this.convert(e,o))}),i}}),F=l(function(e){function n(t){1===f.push(t)&&I(a)}function a(){var t,e,n,i=f.length;if(i)for(I(a),e=q(),t=i;t--;)n=f[t],n&&n.render(e)}function c(e){var n,i=t.inArray(e,f);i>=0&&(n=f.slice(i+1),f.length=i,n.length&&(f=f.concat(n)))}function u(t){return Math.round(t*h)/h}function l(t,e,n){return o(t[0]+n*(e[0]-t[0]),t[1]+n*(e[1]-t[1]),t[2]+n*(e[2]-t[2]))}var p={ease:d.ease[1],from:0,to:1};e.init=function(t){this.duration=t.duration||0,this.delay=t.delay||0;var e=t.ease||p.ease;d[e]&&(e=d[e][1]),"function"!=typeof e&&(e=p.ease),this.ease=e,this.update=t.update||r,this.complete=t.complete||r,this.context=t.context||this,this.name=t.name;var n=t.from,i=t.to;void 0===n&&(n=p.from),void 0===i&&(i=p.to),this.unit=t.unit||"","number"==typeof n&&"number"==typeof i?(this.begin=n,this.change=i-n):this.format(i,n),this.value=this.begin+this.unit,this.start=q(),t.autoplay!==!1&&this.play()},e.play=function(){this.active||(this.start||(this.start=q()),this.active=!0,n(this))},e.stop=function(){this.active&&(this.active=!1,c(this))},e.render=function(t){var e,n=t-this.start;if(this.delay){if(n<=this.delay)return;n-=this.delay}if(n<this.duration){var i=this.ease(n,0,1,this.duration);return e=this.startRGB?l(this.startRGB,this.endRGB,i):u(this.begin+i*this.change),this.value=e+this.unit,void this.update.call(this.context,this.value)}e=this.endHex||this.begin+this.change,this.value=e+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},e.format=function(t,e){if(e+="",t+="","#"==t.charAt(0))return this.startRGB=i(e),this.endRGB=i(t),this.endHex=t,this.begin=0,void(this.change=1);if(!this.unit){var n=e.replace(v,""),o=t.replace(v,"");n!==o&&s("tween",e,t),this.unit=n}e=parseFloat(e),t=parseFloat(t),this.begin=this.value=e,this.change=t-e},e.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=r};var f=[],h=1e3}),N=l(F,function(t){t.init=function(t){this.duration=t.duration||0,this.complete=t.complete||r,this.context=t.context,this.play()},t.render=function(t){var e=t-this.start;e<this.duration||(this.complete.call(this.context),this.destroy())}}),Z=l(F,function(t,e){t.init=function(t){this.context=t.context,this.update=t.update,this.tweens=[],this.current=t.current;var e,n;for(e in t.values)n=t.values[e],this.current[e]!==n&&this.tweens.push(new F({name:e,from:this.current[e],to:n,duration:t.duration,delay:t.delay,ease:t.ease,autoplay:!1}));this.play()},t.render=function(t){var e,n,i=this.tweens.length,o=!1;for(e=i;e--;)n=this.tweens[e],n.context&&(n.render(t),this.current[n.name]=n.value,o=!0);return o?void(this.update&&this.update.call(this.context)):this.destroy()},t.destroy=function(){if(e.destroy.call(this),this.tweens){var t,n=this.tweens.length;for(t=n;t--;)this.tweens[t].destroy();this.tweens=null,this.current=null}}}),H=e.config={defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!L.transition,agentTests:[]};e.fallback=function(t){if(!L.transition)return H.fallback=!0;H.agentTests.push("("+t+")");var e=new RegExp(H.agentTests.join("|"),"i");H.fallback=e.test(navigator.userAgent)},e.fallback("6.0.[2-5] Safari"),e.tween=function(t){return new F(t)},e.delay=function(t,e,n){return new N({complete:e,duration:t,context:n})},t.fn.tram=function(t){return e.call(null,this,t)};var Y=t.style,W=t.css,U={transform:L.transform&&L.transform.css},G={color:[R,w],background:[R,w,"background-color"],"outline-color":[R,w],"border-color":[R,w],"border-top-color":[R,w],"border-right-color":[R,w],"border-bottom-color":[R,w],"border-left-color":[R,w],"border-width":[D,x],"border-top-width":[D,x],"border-right-width":[D,x],"border-bottom-width":[D,x],"border-left-width":[D,x],"border-spacing":[D,x],"letter-spacing":[D,x],margin:[D,x],"margin-top":[D,x],"margin-right":[D,x],"margin-bottom":[D,x],"margin-left":[D,x],padding:[D,x],"padding-top":[D,x],"padding-right":[D,x],"padding-bottom":[D,x],"padding-left":[D,x],"outline-width":[D,x],opacity:[D,y],top:[D,b],right:[D,b],bottom:[D,b],left:[D,b],"font-size":[D,b],"text-indent":[D,b],"word-spacing":[D,b],width:[D,b],"min-width":[D,b],"max-width":[D,b],height:[D,b],"min-height":[D,b],"max-height":[D,b],"line-height":[D,z],"scroll-top":[X,y,"scrollTop"],"scroll-left":[X,y,"scrollLeft"]},Q={};L.transform&&(G.transform=[P],Q={x:[b,"translateX"],y:[b,"translateY"],rotate:[k],rotateX:[k],rotateY:[k],scale:[y],scaleX:[y],scaleY:[y],skew:[k],skewX:[k],skewY:[k]}),L.transform&&L.backface&&(Q.z=[b,"translateZ"],Q.rotateZ=[k],Q.scaleZ=[y],Q.perspective=[x]);var J=/ms/,V=/s|\./,K=function(){var t="warn",e=window.console;return e&&e[t]?function(n){e[t](n)}:r}();return t.tram=e}(window.jQuery)},function(t,e,n){"use strict";var i=n(1);i.define("brand",t.exports=function(t,e){var n={},o=t("html"),r=t("body");window.location,i.env();return n.ready=function(){var e=o.attr("data-wf-status");if(e){var n=t("<div></div>"),i=t("<a></a>");i.attr("href","http://fixim.com?utm_campaign=brandjs"),n.css({position:"fixed",bottom:0,right:0,borderTopLeftRadius:"5px",backgroundColor:"#2b3239",padding:"8px 12px 5px 15px",fontFamily:"Arial",fontSize:"10px",textTransform:"uppercase",opacity:"0",transition:"opacity 0.50s ease-in-out"}),i.css({color:"#AAADB0",textDecoration:"none"});var a=t("<img>");if(a.attr("src","https://daks2k3a4ib2z.cloudfront.net/54153e6a3d25f2755b1f14ed/5445a4b1944ecdaa4df86d3e_subdomain-brand.svg"),a.css({opacity:.9,width:"57px",verticalAlign:"middle",paddingLeft:"4px",paddingBottom:"3px"}),n.text("Built with"),n.append(a),i.append(n),r.append(i),/PhantomJS/.test(window.navigator.userAgent))return;n.css({opacity:"1.0"})}},n})},function(t,e,n){"use strict";var i=n(1),o=n(2);i.define("dropdown",t.exports=function(t,e){function n(){g=x&&i.env("design"),v=w.find(k),v.each(r)}function r(e,n){var i=t(n),o=t.data(n,k);o||(o=t.data(n,k,{open:!1,el:i,config:{}})),o.list=i.children(".w-dropdown-list"),o.toggle=i.children(".w-dropdown-toggle"),o.links=o.list.children(".w-dropdown-link"),o.outside=p(o),o.complete=f(o),o.leave=m(o),i.off(k),o.toggle.off(k),a(o),o.nav&&o.nav.off(k),o.nav=i.closest(".w-nav"),o.nav.on(_,s(o)),g?i.on("setting"+k,s(o)):(o.toggle.on("tap"+k,c(o)),o.config.hover&&o.toggle.on("mouseenter"+k,h(o)),i.on(_,s(o)),x&&l(o))}function a(t){t.config={hover:Boolean(t.el.attr("data-hover"))&&!b,delay:Number(t.el.attr("data-delay"))||0}}function s(t){return function(e,n){return n=n||{},"w-close"===e.type?l(t):"setting"===e.type?(a(t),n.open===!0&&u(t,!0),void(n.open===!1&&l(t,!0))):void 0}}function c(t){return e.debounce(function(){t.open?l(t):u(t)})}function u(t){t.open||(d(t),t.open=!0,t.list.addClass(z),t.toggle.addClass(z),A.intro(0,t.el[0]),i.redraw.up(),g||w.on("tap"+k,t.outside),t.hovering&&t.el.on("mouseleave"+k,t.leave),window.clearTimeout(t.delayId))}function l(t,e){if(t.open&&(!t.config.hover||!t.hovering)){t.open=!1;var n=t.config;return A.outro(0,t.el[0]),w.off("tap"+k,t.outside),t.el.off("mouseleave"+k,t.leave),window.clearTimeout(t.delayId),!n.delay||e?t.complete():void(t.delayId=window.setTimeout(t.complete,n.delay))}}function d(e){var n=e.el[0];v.each(function(e,i){var o=t(i);o.is(n)||o.has(n).length||o.triggerHandler(_)})}function p(n){return n.outside&&w.off("tap"+k,n.outside),e.debounce(function(e){if(n.open){var i=t(e.target);i.closest(".w-dropdown-toggle").length||n.el.is(i.closest(k))||l(n)}})}function f(t){return function(){t.list.removeClass(z),t.toggle.removeClass(z)}}function h(t){return function(){t.hovering=!0,u(t)}}function m(t){return function(){t.hovering=!1,l(t)}}var v,g,y={},w=t(document),x=i.env(),b=i.env.touch,k=".w-dropdown",z="w--open",_="w-close"+k,A=o.triggers;return y.ready=y.design=y.preview=n,y})},function(t,e,n){"use strict";var i=n(1);i.define("edit",t.exports=function(t,e,n){function o(){d||/\?edit/.test(m.hash)&&g()}function r(){d=!0,window.fiximEditor=!0,f.off(v,o),t.ajax({url:l("https://editor-api.fixim.com/api/editor/view"),data:{siteId:h.attr("data-wf-site")},xhrFields:{withCredentials:!0},dataType:"json",crossDomain:!0,success:a})}function a(t){return t?void s(u(t.scriptPath),function(){window.fiximEditor(t)}):void console.error("Could not load editor data")}function s(e,n){t.ajax({type:"GET",url:e,dataType:"script",cache:!0}).then(n,c)}function c(t,e,n){throw console.error("Could not load editor script: "+e),n}function u(t){return t.indexOf("//")>=0?t:l("https://editor-api.fixim.com"+t)}function l(t){return t.replace(/([^:])\/\//g,"$1/")}if(n=n||{},(i.env("test")||i.env("frame"))&&!n.fixture)return{exit:1};var d,p={},f=t(window),h=t(document.documentElement),m=document.location,v="hashchange",g=n.load||r,y=!1;try{y=localStorage&&localStorage.getItem&&localStorage.getItem("fiximEditor")}catch(w){}return y?g():m.search?(/[?&](edit)(?:[=&?]|$)/.test(m.search)||/\?edit$/.test(m.href))&&g():f.on(v,o).triggerHandler(v),p})},function(t,e,n){var i=n(1);i.define("forms",t.exports=function(t,e){function o(){g=t("html").attr("data-wf-site"),v=t(k+" form"),v.length&&v.each(r)}function r(e,n){var i=t(n),o=t.data(n,k);o||(o=t.data(n,k,{form:i})),s(o);var r=i.closest("div.w-form");o.done=r.find("> .w-form-done"),o.fail=r.find("> .w-form-fail");var a=o.action=i.attr("action");return o.handler=null,o.redirect=i.attr("data-redirect"),T.test(a)?void(o.handler=p):a?void 0:g?void(o.handler=d):void B()}function a(){y=!0,w.on("submit",k+" form",function(e){var n=t.data(this,k);n.handler&&(n.evt=e,n.handler(n))})}function s(t){var e=t.btn=t.form.find(':input[type="submit"]');t.wait=t.btn.attr("data-wait")||null,t.success=!1,e.prop("disabled",!1),t.label&&e.val(t.label)}function c(t){var e=t.btn,n=t.wait;e.prop("disabled",!0),n&&(t.label=e.val(),e.val(n))}function u(e,n){var i=null;return n=n||{},e.find(':input:not([type="submit"])').each(function(o,r){var a=t(r),s=a.attr("type"),c=a.attr("data-name")||a.attr("name")||"Field "+(o+1),u=a.val();if("checkbox"===s&&(u=a.is(":checked")),"radio"===s){if(null===n[c]||"string"==typeof n[c])return;u=e.find('input[name="'+a.attr("name")+'"]:checked').val()||null}"string"==typeof u&&(u=t.trim(u)),n[c]=u,i=i||l(a,c,u)}),i}function l(t,e,n){var i=null;return t.attr("required")?(n?(z.test(e)||z.test(t.attr("type")))&&(_.test(n)||(i="Please enter a valid email address for: "+e)):i="Please fill out the required field: "+e,i):null}function d(e){s(e);var n=e.form,o={name:n.attr("data-name")||n.attr("name")||"Untitled Form",source:x.href,test:i.env(),fields:{}};h(e);var r=u(n,o.fields);if(r)return A(r);if(c(e),!g)return void f(e);var a="https://fixim.com/api/v1/form/"+g;b&&a.indexOf("https://fixim.com")>=0&&(a=a.replace("https://fixim.com","http://formdata.fixim.com")),t.ajax({url:a,type:"POST",data:o,dataType:"json",crossDomain:!0}).done(function(){e.success=!0,f(e)}).fail(function(t,n,i){f(e)})}function p(n){s(n);var i=n.form,o={};if(/^https/.test(x.href)&&!/^https/.test(n.action))return void i.attr("method","post");h(n);var r=u(i,o);if(r)return A(r);c(n);var a;e.each(o,function(t,e){z.test(e)&&(o.EMAIL=t),/^((full[ _-]?)?name)$/i.test(e)&&(a=t),/^(first[ _-]?name)$/i.test(e)&&(o.FNAME=t),/^(last[ _-]?name)$/i.test(e)&&(o.LNAME=t)}),a&&!o.FNAME&&(a=a.split(" "),o.FNAME=a[0],o.LNAME=o.LNAME||a[1]);var l=n.action.replace("/post?","/post-json?")+"&c=?",d=l.indexOf("u=")+2;d=l.substring(d,l.indexOf("&",d));var p=l.indexOf("id=")+3;p=l.substring(p,l.indexOf("&",p)),o["b_"+d+"_"+p]="",t.ajax({url:l,data:o,dataType:"jsonp"}).done(function(t){n.success="success"===t.result||/already/.test(t.msg),n.success||console.info("MailChimp error: "+t.msg),f(n)}).fail(function(t,e,i){f(n)})}function f(t){var e=t.form,n=(e.closest("div.w-form"),t.redirect),o=t.success;return o&&n?void i.location(n):(t.done.toggle(o),t.fail.toggle(!o),e.toggle(!o),void s(t))}function h(t){t.evt&&t.evt.preventDefault(),t.evt=null}var m={};n(19);var v,g,y,w=t(document),x=window.location,b=window.XDomainRequest&&!window.atob,k=".w-form",z=/e(\-)?mail/i,_=/^\S+@\S+$/,A=window.alert,T=/list-manage[1-9]?.com/i,B=e.debounce(function(){A("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")},100);return m.ready=function(){o(),y||a()},m.preview=m.design=function(){o()},m})},function(t,e,n){"use strict";var i=n(1);i.define("gplus",t.exports=function(t,e){function n(){a.find(".w-widget-gplus").length&&o()}function o(){r=!0,t.getScript("https://apis.google.com/js/plusone.js")}var r,a=t(document),s={};return s.ready=function(){i.env()||r||n()},s})},function(t,e,n){"use strict";var i=n(1),o=n(2);i.define("ix",t.exports=function(t,e){function n(t){t&&(O={},e.each(t,function(t){O[t.slug]=t.value}),r())}function r(){var e=t("[data-ix]");e.length&&(e.each(c),e.each(a),C.length&&(i.scroll.on(u),setTimeout(u,1)),E.length&&i.load(l),L.length&&setTimeout(d,j),o.init(),i.redraw.up())}function a(n,r){var a=t(r),c=a.attr("data-ix"),u=O[c];if(u){var l=u.triggers;l&&(w.style(a,u.style),e.each(l,function(t){function e(){p(t,a,{group:"A"})}function n(){p(t,a,{group:"B"})}var r={},c=t.type,u=t.stepsB&&t.stepsB.length;if("load"===c)return void(t.preload&&!_?E.push(e):L.push(e));if("click"===c)return a.on("click"+b,function(e){i.validClick(e.currentTarget)&&("#"===a.attr("href")&&e.preventDefault(),p(t,a,{group:r.clicked?"B":"A"}),u&&(r.clicked=!r.clicked))}),void(B=B.add(a));if("hover"===c)return a.on("mouseenter"+b,e),a.on("mouseleave"+b,n),void(B=B.add(a));if("scroll"===c)return void C.push({el:a,trigger:t,state:{active:!1},offsetTop:s(t.offsetTop),offsetBot:s(t.offsetBot)});var l=M[c];if(l){var d=a.closest(l);return d.on(o.types.INTRO,e).on(o.types.OUTRO,n),void(B=B.add(d))}}))}}function s(t){if(!t)return 0;t=String(t);var e=parseInt(t,10);return e!==e?0:(t.indexOf("%")>0&&(e/=100,e>=1&&(e=.999)),e)}function c(e,n){t(n).off(b)}function u(){for(var t=x.scrollTop(),e=x.height(),n=C.length,i=0;n>i;i++){var o=C[i],r=o.el,a=o.trigger,s=a.stepsB&&a.stepsB.length,c=o.state,u=r.offset().top,l=r.outerHeight(),d=o.offsetTop,f=o.offsetBot;1>d&&d>0&&(d*=e),1>f&&f>0&&(f*=e);var h=u+l-d>=t&&t+e>=u+f;h!==c.active&&(h!==!1||s)&&(c.active=h,p(a,r,{group:h?"A":"B"}))}}function l(){for(var t=E.length,e=0;t>e;e++)E[e]()}function d(){for(var t=L.length,e=0;t>e;e++)L[e]()}function p(e,n,i,o){function r(){return c?p(e,n,i,!0):("auto"===h.width&&d.set({width:"auto"}),"auto"===h.height&&d.set({height:"auto"}),void(a&&a()))}i=i||{};var a=i.done;if(!g||i.force){var s=i.group||"A",c=e["loop"+s],u=e["steps"+s];if(u&&u.length){if(u.length<2&&(c=!1),!o){var l=e.selector;l&&(n=e.descend?n.find(l):e.siblings?n.siblings(l):t(l),_&&n.attr("data-ix-affect",1)),A&&n.addClass("w-ix-emptyfix"),e.preserve3d&&n.css("transform-style","preserve-3d");
}for(var d=k(n),h={},m=0;m<u.length;m++)f(d,u[m],h);h.start?d.then(r):r()}}}function f(t,e,n){var o="add",r="start";n.start&&(o=r="then");var a=e.transition;if(a){a=a.split(",");for(var s=0;s<a.length;s++){var c=a[s];t[o](c)}}var u=v(e)||{};if(null!=u.width&&(n.width=u.width),null!=u.height&&(n.height=u.height),null==a){n.start?t.then(function(){var e=this.queue;this.set(u),u.display&&(t.redraw(),i.redraw.up()),this.queue=e,this.next()}):(t.set(u),u.display&&(t.redraw(),i.redraw.up()));var l=u.wait;null!=l&&(t.wait(l),n.start=!0)}else{if(u.display){var d=u.display;delete u.display,n.start?t.then(function(){var t=this.queue;this.set({display:d}).redraw(),i.redraw.up(),this.queue=t,this.next()}):(t.set({display:d}).redraw(),i.redraw.up())}t[r](u),n.start=!0}}function h(t,e){var n=k(t);t.css("transition","");var i=t.css("transition");i===T&&(i=n.upstream=null),n.upstream=T,n.set(v(e)),n.upstream=i}function m(t,e){k(t).set(v(e))}function v(t){var e={},n=!1;for(var i in t)"transition"!==i&&(e[i]=t[i],n=!0);return n?e:null}var g,y,w={},x=t(window),b=".w-ix",k=t.tram,z=i.env,_=z(),A=z.chrome&&z.chrome<35,T="none 0s ease 0s",B=t(),O={},C=[],E=[],L=[],j=1,M={tabs:".w-tab-link, .w-tab-pane",dropdown:".w-dropdown",slider:".w-slide",navbar:".w-nav"};return w.init=function(t){setTimeout(function(){n(t)},1)},w.preview=function(){g=!1,j=100,setTimeout(function(){n(window.__wf_ix)},1)},w.design=function(){g=!0,w.destroy()},w.destroy=function(){y=!0,B.each(c),i.scroll.off(u),o.async(),C=[],E=[],L=[]},w.ready=function(){O&&y&&(y=!1,r())},w.run=p,w.style=_?h:m,w})},function(t,e,n){"use strict";function i(t,e,n){function i(t,e){return T=k(t)?t:[t],w||i.build(),T.length>1&&(w.items=w.empty,T.forEach(function(t){var e=v("thumbnail"),n=v("item").append(e);w.items=w.items.add(n),c(t.thumbnailUrl||t.url,function(t){t.prop("width")>t.prop("height")?f(t,"wide"):f(t,"tall"),e.append(f(t,"thumbnail-image"))})}),w.strip.empty().append(w.items),f(w.content,"group")),b(h(w.lightbox,"hide").focus()).add("opacity .3s").start({opacity:1}),f(w.html,"noscroll"),i.show(e||0)}function o(t){return function(e){this===e.target&&(e.stopPropagation(),e.preventDefault(),t())}}function r(t){t.preventDefault()}function a(t){var e=t.keyCode;27===e?i.hide():37===e?i.prev():39===e&&i.next()}function s(){w&&(h(w.html,"noscroll"),f(w.lightbox,"hide"),w.strip.empty(),w.view&&w.view.remove(),h(w.content,"group"),f(w.arrowLeft,"inactive"),f(w.arrowRight,"inactive"),y=w.view=void 0)}function c(t,e){var n=v("img","img");return n.one("load",function(){e(n)}),n.attr("src",t),n}function u(t){return function(){t.remove()}}function l(t,e,n){this.$element=t,this.className=e,this.delay=n||200,this.hide()}function d(t,e){return t.replace(A,(e?" .":" ")+_)}function p(t){return d(t,!0)}function f(t,e){return t.addClass(d(e))}function h(t,e){return t.removeClass(d(e))}function m(t,e,n){return t.toggleClass(d(e),n)}function v(t,i){return f(n(e.createElement(i||"div")),t)}function g(t,e){var n='<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+e+'"/>';return"data:image/svg+xml;charset=utf-8,"+encodeURI(n)}var y,w,x,b=n.tram,k=Array.isArray,z="w-lightbox",_=z+"-",A=/(^|\s+)/g,T=[];i.build=function(){return i.destroy(),w={html:n(e.documentElement),empty:n()},w.arrowLeft=v("control left inactive"),w.arrowRight=v("control right inactive"),w.close=v("control close"),w.spinner=v("spinner"),w.strip=v("strip"),x=new l(w.spinner,d("hide")),w.content=v("content").append(w.spinner,w.arrowLeft,w.arrowRight,w.close),w.container=v("container").append(w.content,w.strip),w.lightbox=v("backdrop hide").append(w.container),w.strip.on("tap",p("item"),E),w.content.on("swipe",L).on("tap",p("left"),B).on("tap",p("right"),O).on("tap",p("close"),C).on("tap",p("image, caption"),O),w.container.on("tap",p("view, strip"),C).on("dragstart",p("img"),r),w.lightbox.on("keydown",a).on("focusin",j),n("body").append(w.lightbox.prop("tabIndex",0)),i},i.destroy=function(){w&&(h(w.html,"noscroll"),w.lightbox.remove(),w=void 0)},i.show=function(t){if(t!==y){var e=T[t];if(!e)return i.hide();var o=y;y=t,x.show();var r=e.html&&g(e.width,e.height)||e.url;return c(r,function(i){function r(){return x.hide(),t!==y?void d.remove():(m(w.arrowLeft,"inactive",0>=t),m(w.arrowRight,"inactive",t>=T.length-1),w.view?(b(w.view).add("opacity .3s").start({opacity:0}).then(u(w.view)),b(d).add("opacity .3s").add("transform .3s").set({x:t>o?"80px":"-80px"}).start({opacity:1,x:0})):d.css("opacity",1),w.view=d,void(w.items&&f(h(w.items,"active").eq(t),"active")))}if(t===y){var a,s,c=v("figure","figure").append(f(i,"image")),l=v("frame").append(c),d=v("view").append(l);e.html&&(a=n(e.html),s=a.is("iframe"),s&&a.on("load",r),c.append(f(a,"embed"))),e.caption&&c.append(v("caption","figcaption").text(e.caption)),w.spinner.before(d),s||r()}}),i}},i.hide=function(){return b(w.lightbox).add("opacity .3s").start({opacity:0}).then(s),i},i.prev=function(){y>0&&i.show(y-1)},i.next=function(){y<T.length-1&&i.show(y+1)};var B=o(i.prev),O=o(i.next),C=o(i.hide),E=function(t){var e=n(this).index();t.preventDefault(),i.show(e)},L=function(t,e){t.preventDefault(),"left"===e.direction?i.next():"right"===e.direction&&i.prev()},j=function(){this.focus()};return l.prototype.show=function(){var t=this;t.timeoutId||(t.timeoutId=setTimeout(function(){t.$element.removeClass(t.className),delete t.timeoutId},t.delay))},l.prototype.hide=function(){var t=this;return t.timeoutId?(clearTimeout(t.timeoutId),void delete t.timeoutId):void t.$element.addClass(t.className)},function(){function n(){var e=t.innerHeight,n=t.innerWidth,i=".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:"+e+"px}.w-lightbox-view {width:"+n+"px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:"+.86*e+"px}.w-lightbox-image {max-width:"+n+"px;max-height:"+e+"px}.w-lightbox-group .w-lightbox-image {max-height:"+.86*e+"px}.w-lightbox-strip {padding: 0 "+.01*e+"px}.w-lightbox-item {width:"+.1*e+"px;padding:"+.02*e+"px "+.01*e+"px}.w-lightbox-thumbnail {height:"+.1*e+"px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:"+.96*e+"px}.w-lightbox-content {margin-top:"+.02*e+"px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:"+.84*e+"px}.w-lightbox-image {max-width:"+.96*n+"px;max-height:"+.96*e+"px}.w-lightbox-group .w-lightbox-image {max-width:"+.823*n+"px;max-height:"+.84*e+"px}}";s.textContent=i}var i=t.navigator.userAgent,o=/(iPhone|iPad|iPod);[^OS]*OS (\d)/,r=i.match(o),a=i.indexOf("Android ")>-1&&-1===i.indexOf("Chrome");if(a||r&&!(r[2]>7)){var s=e.createElement("style");e.head.appendChild(s),t.addEventListener("orientationchange",n,!0),n()}}(),i}var o=n(1);o.define("lightbox",t.exports=function(t,e){function n(){l=m&&o.env("design"),c=t(document.body),f.destroy(),d={},u=h.find(v),u.fiximLightBox()}function r(t){var e,n,i=t.el.children(".w-json").html();if(!i)return void(t.items=[]);try{i=JSON.parse(i)}catch(o){console.error("Malformed lightbox JSON configuration.",o)}s(i),e=i.group,e?(n=d[e],n||(n=d[e]=[]),t.items=n,i.items.length&&(t.index=n.length,n.push.apply(n,i.items))):t.items=i.items}function a(t){return function(){t.items.length&&f(t.items,t.index||0)}}function s(t){t.images&&(t.images.forEach(function(t){t.type="image"}),t.items=t.images),t.embed&&(t.embed.type="video",t.items=[t.embed]),t.groupId&&(t.group=t.groupId)}var c,u,l,d,p={},f=i(window,document,t),h=t(document),m=o.env(),v=".w-lightbox";return p.ready=p.design=p.preview=n,jQuery.fn.extend({fiximLightBox:function(){var e=this;t.each(e,function(e,n){var i=t.data(n,v);i||(i=t.data(n,v,{el:t(n),mode:"images",images:[],embed:""})),i.el.off(v),r(i),l?i.el.on("setting"+v,r.bind(null,i)):i.el.on("tap"+v,a(i)).on("click"+v,function(t){t.preventDefault()})})}}),p})},function(t,e,n){"use strict";var i=n(1);i.define("links",t.exports=function(t,e){function n(){s=p&&i.env("design"),u=i.env("slug")||f.pathname||"",i.scroll.off(r),c=[];for(var t=document.links,e=0;e<t.length;++e)o(t[e]);c.length&&(i.scroll.on(r),r())}function o(e){var n=s&&e.getAttribute("href-disabled")||e.getAttribute("href");if(h.href=n,!(n.indexOf(":")>=0)){var i=t(e);if(0===n.indexOf("#")&&v.test(n)){var o=t(n);return void(o.length&&c.push({link:i,sec:o,active:!1}))}if("#"!==n){var r=h.href===f.href||n===u||g.test(n)&&y.test(u);a(i,m,r)}}}function r(){var t=d.scrollTop(),n=d.height();e.each(c,function(e){var i=e.link,o=e.sec,r=o.offset().top,c=o.outerHeight(),u=.5*n,l=o.is(":visible")&&r+c-u>=t&&t+n>=r+u;e.active!==l&&(e.active=l,a(i,m,l),s&&(i[0].__wf_current=l))})}function a(t,e,n){var i=t.hasClass(e);n&&i||(n||i)&&(n?t.addClass(e):t.removeClass(e))}var s,c,u,l={},d=t(window),p=i.env(),f=window.location,h=document.createElement("a"),m="w--current",v=/^#[a-zA-Z][\w:.-]*$/,g=/index\.(html|php)$/,y=/\/$/;return l.ready=l.design=l.preview=n,l})},function(t,e,n){"use strict";var i=n(1);i.define("maps",t.exports=function(t,e){function n(){d.length&&i.app&&d.each(i.app.redrawElement)}function o(){function e(){window._wf_maps_loaded=function(){},h=window.google,d.each(s),r(),a()}d=f.find(m),d.length&&(null===h?(t.getScript("https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=_wf_maps_loaded"),window._wf_maps_loaded=e):e())}function r(){i.resize.off(c),i.redraw.off(c)}function a(){i.resize.on(c),i.redraw.on(c)}function s(e,n){var i=t(n).data();l(n,i)}function c(){d.each(u)}function u(t,e){var n=l(e);h.maps.event.trigger(n.map,"resize"),n.setMapPosition()}function l(e,n){var o=t.data(e,v);if(o)return o;var r=t(e);o=t.data(e,v,{latLng:"51.511214,-0.119824",tooltip:"",style:"roadmap",zoom:12,marker:new h.maps.Marker({draggable:!1}),infowindow:new h.maps.InfoWindow({disableAutoPan:!0})});var a=n.widgetLatlng||o.latLng;o.latLng=a;var s=a.split(","),c=new h.maps.LatLng(s[0],s[1]);o.latLngObj=c;var u=i.env.touch&&n.disableTouch?!1:!0;o.map=new h.maps.Map(e,{center:o.latLngObj,zoom:o.zoom,maxZoom:18,mapTypeControl:!1,panControl:!1,streetViewControl:!1,scrollwheel:!n.disableScroll,draggable:u,zoomControl:!0,zoomControlOptions:{style:h.maps.ZoomControlStyle.SMALL},mapTypeId:o.style}),o.marker.setMap(o.map),o.setMapPosition=function(){o.map.setCenter(o.latLngObj);var t=0,e=0,n=r.css(["paddingTop","paddingRight","paddingBottom","paddingLeft"]);t-=parseInt(n.paddingLeft,10),t+=parseInt(n.paddingRight,10),e-=parseInt(n.paddingTop,10),e+=parseInt(n.paddingBottom,10),(t||e)&&o.map.panBy(t,e),r.css("position","")},h.maps.event.addListener(o.map,"tilesloaded",function(){h.maps.event.clearListeners(o.map,"tilesloaded"),o.setMapPosition()}),o.setMapPosition(),o.marker.setPosition(o.latLngObj),o.infowindow.setPosition(o.latLngObj);var l=n.widgetTooltip;l&&(o.tooltip=l,o.infowindow.setContent(l),o.infowindowOpen||(o.infowindow.open(o.map,o.marker),o.infowindowOpen=!0));var d=n.widgetStyle;d&&o.map.setMapTypeId(d);var p=n.widgetZoom;return null!=p&&(o.zoom=p,o.map.setZoom(+p)),h.maps.event.addListener(o.marker,"click",function(){window.open("https://maps.google.com/?z="+o.zoom+"&daddr="+o.latLng)}),o}var d,p={},f=t(document),h=null,m=".w-widget-map";p.ready=function(){i.env()||o()},p.preview=function(){d=f.find(m),i.resize.off(n),d.length&&(i.resize.on(n),n())},p.design=function(t){d=f.find(m),i.resize.off(n),d.length&&e.defer(n)},p.destroy=r;var v="w-widget-map";return p})},function(t,e,n){"use strict";var i=n(1),o=n(2);i.define("navbar",t.exports=function(t,e){function n(){_=C&&i.env("design"),k=t(document.body),z=O.find(L),z.length&&(z.each(c),r(),a())}function r(){i.resize.off(s)}function a(){i.resize.on(s)}function s(){z.each(g)}function c(e,n){var i=t(n),o=t.data(n,L);o||(o=t.data(n,L,{open:!1,el:i,config:{}})),o.menu=i.find(".w-nav-menu"),o.links=o.menu.find(".w-nav-link"),o.dropdowns=o.menu.find(".w-dropdown"),o.button=i.find(".w-nav-button"),o.container=i.find(".w-container"),o.outside=v(o),o.el.off(L),o.button.off(L),o.menu.off(L),d(o),_?(u(o),o.el.on("setting"+L,p(o))):(l(o),o.button.on("tap"+L,h(o)),o.menu.on("click"+L,"a",m(o))),g(e,n)}function u(t){t.overlay&&(b(t,!0),t.overlay.remove(),t.overlay=null)}function l(e){e.overlay||(e.overlay=t(E).appendTo(e.el),e.parent=e.menu.parent(),b(e,!0))}function d(t){var n={},i=t.config||{},o=n.animation=t.el.attr("data-animation")||"default";n.animOver=/^over/.test(o),n.animDirect=/left$/.test(o)?-1:1,i.animation!==o&&t.open&&e.defer(f,t),n.easing=t.el.attr("data-easing")||"ease",n.easing2=t.el.attr("data-easing2")||"ease";var r=t.el.attr("data-duration");n.duration=null!=r?+r:400,n.docHeight=t.el.attr("data-doc-height"),t.config=n}function p(t){return function(n,i){i=i||{};var o=B.width();d(t),i.open===!0&&w(t,!0),i.open===!1&&b(t,!0),t.open&&e.defer(function(){o!==B.width()&&f(t)})}}function f(t){t.open&&(b(t,!0),w(t,!0))}function h(t){return e.debounce(function(e){t.open?b(t):w(t)})}function m(e){return function(n){var o=t(this),r=o.attr("href");return i.validClick(n.currentTarget)?void(r&&0===r.indexOf("#")&&e.open&&b(e)):void n.preventDefault()}}function v(n){return n.outside&&O.off("tap"+L,n.outside),e.debounce(function(e){if(n.open){var i=t(e.target).closest(".w-nav-menu");n.menu.is(i)||b(n)}})}function g(e,n){var i=t.data(n,L),o=i.collapsed="none"!==i.button.css("display");if(!i.open||o||_||b(i,!0),i.container.length){var r=y(i);i.links.each(r),i.dropdowns.each(r)}i.open&&x(i)}function y(e){var n=e.container.css(S);return"none"===n&&(n=""),function(e,i){i=t(i),i.css(S,""),"none"===i.css(S)&&i.css(S,n)}}function w(t,e){if(!t.open){t.open=!0,t.menu.addClass(M),t.links.addClass(I),t.button.addClass(j);var n=t.config,o=n.animation;"none"!==o&&T.support.transform||(e=!0);var r=x(t),a=t.menu.outerHeight(!0),s=t.menu.outerWidth(!0),c=t.el.height(),u=t.el[0];if(g(0,u),q.intro(0,u),i.redraw.up(),_||O.on("tap"+L,t.outside),!e){var l="transform "+n.duration+"ms "+n.easing;if(t.overlay&&t.overlay.show().append(t.menu),n.animOver)return T(t.menu).add(l).set({x:n.animDirect*s,height:r}).start({x:0}),void(t.overlay&&t.overlay.width(s));var d=c+a;T(t.menu).add(l).set({y:-d}).start({y:0})}}}function x(t){var e=t.config,n=e.docHeight?O.height():k.height();return e.animOver?t.menu.height(n):"fixed"!==t.el.css("position")&&(n-=t.el.height()),t.overlay&&t.overlay.height(n),n}function b(t,e){function n(){t.menu.height(""),T(t.menu).set({x:0,y:0}),t.menu.removeClass(M),t.links.removeClass(I),t.overlay&&t.overlay.children().length&&(t.menu.appendTo(t.parent),t.overlay.attr("style","").hide()),t.el.triggerHandler("w-close")}if(t.open){t.open=!1,t.button.removeClass(j);var i=t.config;"none"!==i.animation&&T.support.transform||(e=!0);i.animation;if(q.outro(0,t.el[0]),O.off("tap"+L,t.outside),e)return T(t.menu).stop(),void n();var o="transform "+i.duration+"ms "+i.easing2,r=t.menu.outerHeight(!0),a=t.menu.outerWidth(!0),s=t.el.height();if(i.animOver)return void T(t.menu).add(o).start({x:a*i.animDirect}).then(n);var c=s+r;T(t.menu).add(o).start({y:-c}).then(n)}}var k,z,_,A={},T=t.tram,B=t(window),O=t(document),C=i.env(),E='<div class="w-nav-overlay" data-wf-ignore />',L=".w-nav",j="w--open",M="w--nav-menu-open",I="w--nav-link-open",q=o.triggers;A.ready=A.design=A.preview=n,A.destroy=r;var S="max-width";return A})},function(t,e,n){"use strict";var i=n(1);i.define("scroll",t.exports=function(t,e){function n(){try{return!!l.frameElement}catch(t){return!0}}function o(){d.hash&&r(d.hash.substring(1));var e=d.href.split("#")[0];u.on("click","a",function(n){if(!(i.env("design")||window.$.mobile&&t(n.currentTarget).hasClass("ui-link"))){if("#"===this.getAttribute("href"))return void n.preventDefault();var o=this.href.split("#"),a=o[0]===e?o[1]:null;a&&r(a,n)}})}function r(e,n){if(f.test(e)){var o=t("#"+e);if(o.length){if(n&&(n.preventDefault(),n.stopPropagation()),d.hash!==e&&p&&p.pushState&&(!i.env.chrome||"file:"!==d.protocol)){var r=p.state&&p.state.hash;r!==e&&p.pushState({hash:e},"","#"+e)}var s=i.env("editor")?".w-editor-body":"body",c=t("header, "+s+" > .header, "+s+" > .w-nav:not([data-no-scroll])"),u="fixed"===c.css("position")?c.outerHeight():0;l.setTimeout(function(){a(o,u)},n?0:300)}}}function a(e,n){var i=t(l).scrollTop(),o=e.offset().top-n;if("mid"===e.data("scroll")){var r=t(l).height()-n,a=e.outerHeight();r>a&&(o-=Math.round((r-a)/2))}var c=1;t("body").add(e).each(function(e){var n=parseFloat(t(this).attr("data-scroll-time"),10);!isNaN(n)&&(0===n||n>0)&&(c=n)}),Date.now||(Date.now=function(){return(new Date).getTime()});var u=Date.now(),d=l.requestAnimationFrame||l.mozRequestAnimationFrame||l.webkitRequestAnimationFrame||function(t){l.setTimeout(t,15)},p=(472.143*Math.log(Math.abs(i-o)+125)-2e3)*c,f=function(){var t=Date.now()-u;l.scroll(0,s(i,o,t,p)),p>=t&&d(f)};f()}function s(t,e,n,i){return n>i?e:t+(e-t)*c(n/i)}function c(t){return.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1}var u=t(document),l=window,d=l.location,p=n()?null:l.history,f=/^[a-zA-Z0-9][\w:.-]*$/;return{ready:o}})},function(t,e,n){"use strict";var i=n(1),o=n(2);i.define("slider",t.exports=function(t,e){function n(){k=O.find(E),k.length&&(k.filter(":visible").each(c),A=null,_||(r(),a()))}function r(){i.resize.off(s),i.redraw.off(T.redraw)}function a(){i.resize.on(s),i.redraw.on(T.redraw)}function s(){k.filter(":visible").each(g)}function c(e,n){var i=t(n),o=t.data(n,E);return o||(o=t.data(n,E,{index:0,depth:1,el:i,config:{}})),o.mask=i.children(".w-slider-mask"),o.left=i.children(".w-slider-arrow-left"),o.right=i.children(".w-slider-arrow-right"),o.nav=i.children(".w-slider-nav"),o.slides=o.mask.children(".w-slide"),o.slides.each(j.reset),A&&(o.maskWidth=0),B.support.transform?(o.el.off(E),o.left.off(E),o.right.off(E),o.nav.off(E),u(o),z?(o.el.on("setting"+E,m(o)),h(o),o.hasTimer=!1):(o.el.on("swipe"+E,m(o)),o.left.on("tap"+E,l(o)),o.right.on("tap"+E,d(o)),o.config.autoplay&&!o.hasTimer&&(o.hasTimer=!0,o.timerCount=1,f(o))),o.nav.on("tap"+E,"> div",m(o)),C||o.mask.contents().filter(function(){return 3===this.nodeType}).remove(),void g(e,n)):(o.left.hide(),o.right.hide(),o.nav.hide(),void(_=!0))}function u(t){var e={};e.crossOver=0,e.animation=t.el.attr("data-animation")||"slide","outin"===e.animation&&(e.animation="cross",e.crossOver=.5),e.easing=t.el.attr("data-easing")||"ease";var n=t.el.attr("data-duration");if(e.duration=null!=n?+n:500,+t.el.attr("data-infinite")&&(e.infinite=!0),+t.el.attr("data-disable-swipe")&&(e.disableSwipe=!0),+t.el.attr("data-hide-arrows")?e.hideArrows=!0:t.config.hideArrows&&(t.left.show(),t.right.show()),+t.el.attr("data-autoplay")){e.autoplay=!0,e.delay=+t.el.attr("data-delay")||2e3,e.timerMax=+t.el.attr("data-autoplay-limit");var i="mousedown"+E+" touchstart"+E;z||t.el.off(i).one(i,function(){h(t)})}var o=t.right.width();e.edge=o?o+40:100,t.config=e}function l(t){return function(e){v(t,{index:t.index-1,vector:-1})}}function d(t){return function(e){v(t,{index:t.index+1,vector:1})}}function p(i,o){var r=null;o===i.slides.length&&(n(),y(i)),e.each(i.anchors,function(e,n){t(e.els).each(function(e,i){t(i).index()===o&&(r=n)})}),null!=r&&v(i,{index:r,immediate:!0})}function f(t){h(t);var e=t.config,n=e.timerMax;n&&t.timerCount++>n||(t.timerId=window.setTimeout(function(){null==t.timerId||z||(d(t)(),f(t))},e.delay))}function h(t){window.clearTimeout(t.timerId),t.timerId=null}function m(e){return function(n,o){o=o||{};var r=e.config;if(z&&"setting"===n.type){if("prev"===o.select)return l(e)();if("next"===o.select)return d(e)();if(u(e),y(e),null==o.select)return;return void p(e,o.select)}if("swipe"!==n.type)e.nav.has(n.target).length&&v(e,{index:t(n.target).index()});else{if(r.disableSwipe)return;if(i.env("editor"))return;if("left"===o.direction)return d(e)();if("right"===o.direction)return l(e)()}}}function v(e,n){function i(){p=t(r[e.index].els),h=e.slides.not(p),"slide"!==m&&(d.visibility="hidden"),B(h).set(d)}n=n||{};var o=e.config,r=e.anchors;e.previous=e.index;var a=n.index,s={};0>a?(a=r.length-1,o.infinite&&(s.x=-e.endX,s.from=0,s.to=r[0].width)):a>=r.length&&(a=0,o.infinite&&(s.x=r[r.length-1].width,s.from=-r[r.length-1].x,s.to=s.from-s.x)),e.index=a;var c=e.nav.children().eq(e.index).addClass("w-active");e.nav.children().not(c).removeClass("w-active"),o.hideArrows&&(e.index===r.length-1?e.right.hide():e.right.show(),0===e.index?e.left.hide():e.left.show());var u=e.offsetX||0,l=e.offsetX=-r[e.index].x,d={x:l,opacity:1,visibility:""},p=t(r[e.index].els),f=t(r[e.previous]&&r[e.previous].els),h=e.slides.not(p),m=o.animation,v=o.easing,g=Math.round(o.duration),y=n.vector||(e.index>e.previous?1:-1),w="opacity "+g+"ms "+v,x="transform "+g+"ms "+v;if(z||(p.each(j.intro),h.each(j.outro)),n.immediate&&!A)return B(p).set(d),void i();if(e.index!==e.previous){if("cross"===m){var b=Math.round(g-g*o.crossOver),k=Math.round(g-b);return w="opacity "+b+"ms "+v,B(f).set({visibility:""}).add(w).start({opacity:0}),void B(p).set({visibility:"",x:l,opacity:0,zIndex:e.depth++}).add(w).wait(k).then({opacity:1}).then(i)}return"fade"===m?(B(f).set({visibility:""}).stop(),void B(p).set({visibility:"",x:l,opacity:0,zIndex:e.depth++}).add(w).start({opacity:1}).then(i)):"over"===m?(d={x:e.endX},B(f).set({visibility:""}).stop(),void B(p).set({visibility:"",zIndex:e.depth++,x:l+r[e.index].width*y}).add(x).start({x:l}).then(i)):void(o.infinite&&s.x?(B(e.slides.not(f)).set({visibility:"",x:s.x}).add(x).start({x:l}),B(f).set({visibility:"",x:s.from}).add(x).start({x:s.to}),e.shifted=f):(o.infinite&&e.shifted&&(B(e.shifted).set({visibility:"",x:u}),e.shifted=null),B(e.slides).set({visibility:""}).add(x).start({x:l})))}}function g(e,n){var i=t.data(n,E);return x(i)?y(i):void(z&&b(i)&&y(i))}function y(e){var n=1,i=0,o=0,r=0,a=e.maskWidth,s=a-e.config.edge;0>s&&(s=0),e.anchors=[{els:[],x:0,width:0}],e.slides.each(function(c,u){o-i>s&&(n++,i+=a,e.anchors[n-1]={els:[],x:o,width:0}),r=t(u).outerWidth(!0),o+=r,e.anchors[n-1].width+=r,e.anchors[n-1].els.push(u)}),e.endX=o,z&&(e.pages=null),e.nav.length&&e.pages!==n&&(e.pages=n,w(e));var c=e.index;c>=n&&(c=n-1),v(e,{immediate:!0,index:c})}function w(e){var n,i=[],o=e.el.attr("data-nav-spacing");o&&(o=parseFloat(o)+"px");for(var r=0;r<e.pages;r++)n=t(L),e.nav.hasClass("w-num")&&n.text(r+1),null!=o&&n.css({"margin-left":o,"margin-right":o}),i.push(n);e.nav.empty().append(i)}function x(t){var e=t.mask.width();return t.maskWidth!==e?(t.maskWidth=e,!0):!1}function b(e){var n=0;return e.slides.each(function(e,i){n+=t(i).outerWidth(!0)}),e.slidesWidth!==n?(e.slidesWidth=n,!0):!1}var k,z,_,A,T={},B=t.tram,O=t(document),C=i.env(),E=".w-slider",L='<div class="w-slider-dot" data-wf-ignore />',j=o.triggers;return T.ready=function(){n()},T.design=function(){z=!0,n()},T.preview=function(){z=!1,n()},T.redraw=function(){A=!0,n()},T.destroy=r,T})},function(t,e,n){"use strict";var i=n(1),o=n(2);i.define("tabs",t.exports=function(t,e){function n(){f=x&&i.env("design"),p=g.find(k),p.length&&(p.each(c),i.env("preview")&&p.each(s),h=null,r(),a())}function r(){i.redraw.off(m.redraw)}function a(){i.redraw.on(m.redraw)}function s(e,n){var i=(t(n),t.data(n,k));i&&(i.links&&i.links.each(A.reset),i.panes&&i.panes.each(A.reset))}function c(e,n){var i=t(n),o=t.data(n,k);if(o||(o=t.data(n,k,{el:i,config:{}})),o.current=null,o.menu=i.children(".w-tab-menu"),o.links=o.menu.children(".w-tab-link"),o.content=i.children(".w-tab-content"),o.panes=o.content.children(".w-tab-pane"),o.el.off(k),o.links.off(k),u(o),!f){o.links.on("click"+k,l(o));var r=o.links.filter("."+z),a=r.attr(b);a&&d(o,{tab:a,immediate:!0})}}function u(t){var e={};t.config||{};e.easing=t.el.attr("data-easing")||"ease";var n=+t.el.attr("data-duration-in");n=e.intro=n===n?n:0;var i=+t.el.attr("data-duration-out");i=e.outro=i===i?i:0,e.immediate=!n&&!i,t.config=e}function l(t){return function(e){var n=e.currentTarget.getAttribute(b);n&&d(t,{tab:n})}}function d(e,n){function o(){return d.removeClass(_).removeAttr("style"),l.addClass(_).each(A.intro),i.redraw.up(),r.intro?void v(l).set({opacity:0}).redraw().add("opacity "+r.intro+"ms "+a,{fallback:w}).start({opacity:1}):v(l).set({opacity:1})}n=n||{};var r=e.config,a=r.easing,s=n.tab;if(s!==e.current){e.current=s,e.links.each(function(e,n){var i=t(n);n.getAttribute(b)===s?i.addClass(z).each(A.intro):i.hasClass(z)&&i.removeClass(z).each(A.outro)});var c=[],u=[];e.panes.each(function(e,n){var i=t(n);n.getAttribute(b)===s?c.push(n):i.hasClass(_)&&u.push(n)});var l=t(c),d=t(u);return n.immediate||r.immediate?(l.addClass(_).each(A.intro),d.removeClass(_),void(h||i.redraw.up())):void(d.length&&r.outro?(d.each(A.outro),v(d).add("opacity "+r.outro+"ms "+a,{fallback:w}).start({opacity:0}).then(o)):o())}}var p,f,h,m={},v=t.tram,g=(t(window),t(document)),y=i.env,w=y.safari,x=y(),b="data-w-tab",k=".w-tabs",z="w--current",_="w--tab-active",A=o.triggers;return m.ready=m.design=m.preview=n,m.redraw=function(){h=!0,n()},m.destroy=function(){p=g.find(k),p.length&&(p.each(s),r())},m})},function(t,e,n){"use strict";var i=n(1);i.define("touch",t.exports=function(t,e){function n(t){function e(t){var e=t.touches;e&&e.length>1||(d=!0,p=!1,e?(f=!0,c=e[0].clientX,u=e[0].clientY):(c=t.clientX,u=t.clientY),l=c)}function n(t){if(d){if(f&&"mousemove"===t.type)return t.preventDefault(),void t.stopPropagation();var e=t.touches,n=e?e[0].clientX:t.clientX,o=e?e[0].clientY:t.clientY,s=n-l;l=n,Math.abs(s)>h&&a&&a()+""==""&&(i("swipe",t,{direction:s>0?"right":"left"}),r()),(Math.abs(n-c)>10||Math.abs(o-u)>10)&&(p=!0)}}function o(t){return d?(d=!1,f&&"mouseup"===t.type?(t.preventDefault(),t.stopPropagation(),void(f=!1)):void(p||i("tap",t))):void 0}function r(t){d=!1}function s(){t.removeEventListener("touchstart",e,!1),t.removeEventListener("touchmove",n,!1),t.removeEventListener("touchend",o,!1),t.removeEventListener("touchcancel",r,!1),t.removeEventListener("mousedown",e,!1),t.removeEventListener("mousemove",n,!1),t.removeEventListener("mouseup",o,!1),t.removeEventListener("mouseout",r,!1),t=null}var c,u,l,d=!1,p=!1,f=!1,h=Math.min(Math.round(.04*window.innerWidth),40);t.addEventListener("touchstart",e,!1),t.addEventListener("touchmove",n,!1),t.addEventListener("touchend",o,!1),t.addEventListener("touchcancel",r,!1),t.addEventListener("mousedown",e,!1),t.addEventListener("mousemove",n,!1),t.addEventListener("mouseup",o,!1),t.addEventListener("mouseout",r,!1),this.destroy=s}function i(e,n,i){var o=t.Event(e,{originalEvent:n});t(n.target).trigger(o,i)}var o={},r=!document.addEventListener,a=window.getSelection;return r&&(t.event.special.tap={bindType:"click",delegateType:"click"}),o.init=function(e){return r?null:(e="string"==typeof e?t(e).get(0):e,e?new n(e):null)},o.instance=o.init(document),o})},function(t,e,n){"use strict";var i=window.$,o=n(3)&&i.tram;t.exports=function(){var t={};t.VERSION="1.6.0-fixim";var e={},n=Array.prototype,i=Object.prototype,r=Function.prototype,a=(n.push,n.slice),s=(n.concat,i.toString,i.hasOwnProperty),c=n.forEach,u=n.map,l=(n.reduce,n.reduceRight,n.filter),d=(n.every,n.some),p=n.indexOf,f=(n.lastIndexOf,Array.isArray,Object.keys),h=(r.bind,t.each=t.forEach=function(n,i,o){if(null==n)return n;if(c&&n.forEach===c)n.forEach(i,o);else if(n.length===+n.length){for(var r=0,a=n.length;a>r;r++)if(i.call(o,n[r],r,n)===e)return}else for(var s=t.keys(n),r=0,a=s.length;a>r;r++)if(i.call(o,n[s[r]],s[r],n)===e)return;return n});t.map=t.collect=function(t,e,n){var i=[];return null==t?i:u&&t.map===u?t.map(e,n):(h(t,function(t,o,r){i.push(e.call(n,t,o,r))}),i)},t.find=t.detect=function(t,e,n){var i;return m(t,function(t,o,r){return e.call(n,t,o,r)?(i=t,!0):void 0}),i},t.filter=t.select=function(t,e,n){var i=[];return null==t?i:l&&t.filter===l?t.filter(e,n):(h(t,function(t,o,r){e.call(n,t,o,r)&&i.push(t)}),i)};var m=t.some=t.any=function(n,i,o){i||(i=t.identity);var r=!1;return null==n?r:d&&n.some===d?n.some(i,o):(h(n,function(t,n,a){return r||(r=i.call(o,t,n,a))?e:void 0}),!!r)};t.contains=t.include=function(t,e){return null==t?!1:p&&t.indexOf===p?-1!=t.indexOf(e):m(t,function(t){return t===e})},t.delay=function(t,e){var n=a.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},t.defer=function(e){return t.delay.apply(t,[e,1].concat(a.call(arguments,1)))},t.throttle=function(t){var e,n,i;return function(){e||(e=!0,n=arguments,i=this,o.frame(function(){e=!1,t.apply(i,n)}))}},t.debounce=function(e,n,i){var o,r,a,s,c,u=function(){var l=t.now()-s;n>l?o=setTimeout(u,n-l):(o=null,i||(c=e.apply(a,r),a=r=null))};return function(){a=this,r=arguments,s=t.now();var l=i&&!o;return o||(o=setTimeout(u,n)),l&&(c=e.apply(a,r),a=r=null),c}},t.defaults=function(e){if(!t.isObject(e))return e;for(var n=1,i=arguments.length;i>n;n++){var o=arguments[n];for(var r in o)void 0===e[r]&&(e[r]=o[r])}return e},t.keys=function(e){if(!t.isObject(e))return[];if(f)return f(e);var n=[];for(var i in e)t.has(e,i)&&n.push(i);return n},t.has=function(t,e){return s.call(t,e)},t.isObject=function(t){return t===Object(t)},t.now=Date.now||function(){return(new Date).getTime()},t.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var v=/(.)^/,g={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},y=/\\|'|\r|\n|\u2028|\u2029/g,w=function(t){return"\\"+g[t]};return t.template=function(e,n,i){!n&&i&&(n=i),n=t.defaults({},n,t.templateSettings);var o=RegExp([(n.escape||v).source,(n.interpolate||v).source,(n.evaluate||v).source].join("|")+"|$","g"),r=0,a="__p+='";e.replace(o,function(t,n,i,o,s){return a+=e.slice(r,s).replace(y,w),r=s+t.length,n?a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":i?a+="'+\n((__t=("+i+"))==null?'':__t)+\n'":o&&(a+="';\n"+o+"\n__p+='"),t}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{var s=new Function(n.variable||"obj","_",a)}catch(c){throw c.source=a,c}var u=function(e){return s.call(this,e,t)},l=n.variable||"obj";return u.source="function("+l+"){\n"+a+"}",u},t}()},function(t,e){t.exports=function(t){if(!t.support.cors&&t.ajaxTransport&&window.XDomainRequest){var e=/^https?:\/\//i,n=/^get|post$/i,i=new RegExp("^"+location.protocol,"i");t.ajaxTransport("* text html xml json",function(o,r,a){if(o.crossDomain&&o.async&&n.test(o.type)&&e.test(o.url)&&i.test(o.url)){var s=null;return{send:function(e,n){var i="",a=(r.dataType||"").toLowerCase();s=new XDomainRequest,/^\d+$/.test(r.timeout)&&(s.timeout=r.timeout),s.ontimeout=function(){n(500,"timeout")},s.onload=function(){var e="Content-Length: "+s.responseText.length+"\r\nContent-Type: "+s.contentType,i={code:200,message:"success"},o={text:s.responseText};try{if("html"===a||/text\/html/i.test(s.contentType))o.html=s.responseText;else if("json"===a||"text"!==a&&/\/json/i.test(s.contentType))try{o.json=t.parseJSON(s.responseText)}catch(r){i.code=500,i.message="parseerror"}else if("xml"===a||"text"!==a&&/\/xml/i.test(s.contentType)){var c=new ActiveXObject("Microsoft.XMLDOM");c.async=!1;try{c.loadXML(s.responseText)}catch(r){c=void 0}if(!c||!c.documentElement||c.getElementsByTagName("parsererror").length)throw i.code=500,i.message="parseerror","Invalid XML: "+s.responseText;o.xml=c}}catch(u){throw u}finally{n(i.code,i.message,o,e)}},s.onprogress=function(){},s.onerror=function(){n(500,"error",{text:s.responseText})},r.data&&(i="string"===t.type(r.data)?r.data:t.param(r.data)),s.open(o.type,o.url),s.send(i)},abort:function(){s&&s.abort()}}}})}}(window.jQuery)}]),fixim.require("ix").init([{slug:"hide-overlay-menu-on-load",name:"hide overlay menu on load",value:{style:{opacity:0,x:"-1000px",y:"0px",z:"0px"},triggers:[]}},{slug:"show-overlay-menu-on-click",name:"show overlay menu on click",value:{style:{},triggers:[{type:"click",selector:".overlay-menu",stepsA:[{display:"block",opacity:1,transition:"transform 500ms ease 0ms, opacity 500ms ease 0ms",x:"0px",y:"0px",z:"0px"}],stepsB:[{opacity:0,transition:"transform 500ms ease 0ms, opacity 500ms ease 0ms",x:"-100%",y:"0px",z:"0px"},{display:"none"}]}]}},{slug:"show-dropdown-on-hover",name:"show dropdown on hover",
value:{style:{},triggers:[{type:"hover",selector:".ul-dropdown",siblings:!0,stepsA:[{display:"block",height:"auto",transition:"height 500ms ease 0ms"}],stepsB:[]}]}},{slug:"make-dropdown-height-0",name:"make dropdown height 0 ",value:{style:{height:"0px"},triggers:[]}},{slug:"close-dropdown-on-hover",name:"close dropdown on hover",value:{style:{},triggers:[{type:"hover",selector:".ul-dropdown",stepsA:[],stepsB:[{height:"0px",transition:"height 500ms ease 0ms"}]}]}},{slug:"hide-filter-opacity-0",name:"hide filter opacity 0",value:{style:{opacity:0},triggers:[]}},{slug:"open-filter-menu",name:"open filter menu",value:{style:{},triggers:[{type:"click",selector:".filter-txt",stepsA:[{opacity:1,transition:"opacity 200ms ease 0ms"}],stepsB:[{opacity:0,transition:"opacity 200ms ease 0ms"}]},{type:"click",selector:".filter-txt-hide",stepsA:[{opacity:0,transition:"opacity 200ms ease 0ms"}],stepsB:[{opacity:1,transition:"opacity 200ms ease 0ms"}]},{type:"click",selector:".filters",stepsA:[{display:"block",opacity:1,transition:"transform 200ms ease 0ms, opacity 200ms ease 0ms",x:"0px",y:"0px",z:"0px"}],stepsB:[{opacity:0,transition:"transform 200ms ease 0ms, opacity 200ms ease 0ms",x:"0px",y:"-25px",z:"0px"},{display:"none"}]}]}},{slug:"move-filter-content-on-load",name:"move filter content on load",value:{style:{display:"none",opacity:0,x:"0px",y:"-25px",z:"0px"},triggers:[]}},{slug:"hide-portfolio-content-on-load",name:"hide portfolio content on load",value:{style:{opacity:0},triggers:[]}},{slug:"scale-portfolio-title-on-load",name:"scale portfolio title on load",value:{style:{opacity:0,scaleX:1.5,scaleY:1.5,scaleZ:1,rotateX:"0deg",rotateY:"0deg",rotateZ:"-40deg"},triggers:[]}},{slug:"hover-portfolio-content",name:"hover portfolio content",value:{style:{},triggers:[{type:"hover",selector:".portfolio-title",descend:!0,stepsA:[{opacity:1,transition:"transform 500ms ease 0ms, opacity 500ms ease 0ms",scaleX:1,scaleY:1,scaleZ:1,rotateX:"0deg",rotateY:"0deg",rotateZ:"0deg"}],stepsB:[{opacity:0,transition:"transform 500ms ease 0ms, opacity 500ms ease 0ms",scaleX:1.25,scaleY:1.25,scaleZ:1,rotateX:"0deg",rotateY:"0deg",rotateZ:"-40deg"}]},{type:"hover",selector:".portfolio-content",descend:!0,stepsA:[{opacity:1,transition:"opacity 500ms ease 0ms"}],stepsB:[{opacity:0,transition:"opacity 500ms ease 0ms"}]},{type:"hover",selector:".portfolio-sub-title",descend:!0,stepsA:[{wait:400},{opacity:1,transition:"transform 500ms ease 0ms, opacity 500ms ease 0ms",x:"0px",y:"0px",z:"0px"}],stepsB:[{opacity:0,transition:"transform 500ms ease 0ms, opacity 500ms ease 0ms",x:"0px",y:"20px",z:"0px"}]}]}},{slug:"scale-portfolio-title-on-load-2",name:"scale portfolio title on load 2",value:{style:{opacity:0,x:"0px",y:"20px",z:"0px"},triggers:[]}},{slug:"move-team-content-on-load",name:"move team content on load",value:{style:{x:"0px",y:"75%",z:"0px"},triggers:[]}},{slug:"show-team-content-on-hover",name:"show team content on hover",value:{style:{},triggers:[{type:"hover",selector:".team-content",descend:!0,stepsA:[{transition:"transform 300ms ease 0ms",x:"0px",y:"0px",z:"0px"}],stepsB:[{transition:"transform 300ms ease 0ms",x:"0px",y:"75%",z:"0px"}]}]}},{slug:"over-portfolio-content-bottom",name:"over portfolio content bottom",value:{style:{},triggers:[{type:"hover",selector:".portfolio-overlay-bottom",descend:!0,stepsA:[{opacity:1,transition:"transform 300ms ease 0ms, opacity 500ms ease 0ms",x:"0px",y:"0px",z:"0px"}],stepsB:[{opacity:0,transition:"transform 300ms ease 0ms, opacity 500ms ease 0ms",x:"0px",y:"80px",z:"0px"}]},{type:"hover",selector:".portfolio-title",descend:!0,stepsA:[{wait:100},{opacity:1,transition:"transform 300ms ease 0ms, opacity 500ms ease 0ms",x:"0px",y:"0px",z:"0px"}],stepsB:[{opacity:0,transition:"transform 500ms ease 0ms, opacity 300ms ease 0ms",x:"0px",y:"20px",z:"0px"}]},{type:"hover",selector:".portfolio-sub-title",descend:!0,stepsA:[{wait:200},{opacity:1,transition:"transform 300ms ease 0ms, opacity 300ms ease 0ms",x:"0px",y:"0px",z:"0px"}],stepsB:[{transition:"transform 300ms ease 0ms",x:"0px",y:"20px",z:"0px"}]}]}},{slug:"move-portfolio-overlay-bottom",name:"move portfolio overlay bottom",value:{style:{opacity:0,x:"0px",y:"80px",z:"0px"},triggers:[]}},{slug:"move-portfolio-title",name:"move portfolio title",value:{style:{opacity:0,x:"0px",y:"20px",z:"0px"},triggers:[]}},{slug:"blog-hover-zoom-photo",name:"blog hover zoom photo",value:{style:{},triggers:[{type:"hover",selector:".blog-link",descend:!0,stepsA:[{transition:"transform 1000ms ease 0ms",scaleX:1.3,scaleY:1.3,scaleZ:1}],stepsB:[{transition:"transform 1000ms ease 0ms",scaleX:1,scaleY:1,scaleZ:1}]},{type:"hover",selector:".blog-link-2",descend:!0,stepsA:[{transition:"transform 1000ms ease 0ms",scaleX:1.3,scaleY:1.3,scaleZ:1}],stepsB:[{transition:"transform 1000ms ease 0ms",scaleX:1,scaleY:1,scaleZ:1}]}]}},{slug:"open-map-on-load",name:"open map on load",value:{style:{},triggers:[{type:"click",selector:".filter-txt",stepsA:[{opacity:1,transition:"opacity 200ms ease 0ms"}],stepsB:[{opacity:0,transition:"opacity 200ms ease 0ms"}]},{type:"click",selector:".filter-txt-hide",stepsA:[{opacity:0,transition:"opacity 200ms ease 0ms"}],stepsB:[{opacity:1,transition:"opacity 200ms ease 0ms"}]},{type:"click",selector:".cnt-content",stepsA:[{display:"none"}],stepsB:[{display:"block"}]}]}},{slug:"dispnay-none-on-load-project-info",name:"dispnay none on load project info",value:{style:{display:"none",opacity:0,x:"-100px",y:"0px",z:"0px"},triggers:[]}},{slug:"open-project-info-on-click",name:"open project info on click",value:{style:{},triggers:[]}},{slug:"open-map-on-load-2",name:"open map on load 2",value:{style:{},triggers:[{type:"click",selector:".filter-txt",stepsA:[{opacity:1,transition:"opacity 200ms ease 0ms"}],stepsB:[{opacity:0,transition:"opacity 200ms ease 0ms"}]},{type:"click",selector:".filter-txt-hide",stepsA:[{opacity:0,transition:"opacity 200ms ease 0ms"}],stepsB:[{opacity:1,transition:"opacity 200ms ease 0ms"}]},{type:"click",selector:".project-info",stepsA:[{display:"block",opacity:1,transition:"transform 300ms ease 0ms, opacity 400ms ease 0ms",x:"0px",y:"0px",z:"0px"}],stepsB:[{opacity:0,transition:"transform 300ms ease 0ms, opacity 400ms ease 0ms",x:"-100px",y:"0px",z:"0px"},{display:"none"}]}]}},{slug:"line-menu-type",name:"line menu type ",value:{style:{width:"0%"},triggers:[]}},{slug:"show-line-menu-type-2",name:"show line menu type 2",value:{style:{},triggers:[{type:"hover",selector:".line-bottom-menu",siblings:!0,stepsA:[{width:"100%",transition:"opacity 500ms ease 0ms, width 300ms ease 0ms"}],stepsB:[{width:"0%",transition:"width 300ms ease 0ms"}]}]}},{slug:"hide-menu-type-2-on-load",name:"hide menu type 2 on load",value:{style:{display:"none",opacity:0,x:"0px",y:"-20px",z:"0px"},triggers:[]}},{slug:"show-menu-type-2",name:"show menu type 2",value:{style:{},triggers:[{type:"click",selector:".navigation-type-2",stepsA:[{display:"block",opacity:1,transition:"transform 300ms ease 0ms, opacity 300ms ease 0ms",x:"0px",y:"0px",z:"0px"}],stepsB:[{opacity:0,transition:"transform 300ms ease 0ms, opacity 300ms ease 0ms",x:"0px",y:"-20px",z:"0px"},{display:"none"}]}]}},{slug:"show-dropdown",name:"show dropdown",value:{style:{},triggers:[{type:"hover",selector:".dropdown-down-2",descend:!0,stepsA:[{display:"block"}],stepsB:[{display:"none"}]}]}},{slug:"move-up-team-contetn",name:"move up team contetn",value:{style:{opacity:0,x:"0px",y:"50px",z:"0px"},triggers:[]}},{slug:"show-team-content",name:"show team content",value:{style:{},triggers:[{type:"hover",selector:".team-content",descend:!0,stepsA:[{wait:100},{opacity:1,transition:"transform 500ms ease 0ms, opacity 500ms ease 0ms",x:"0px",y:"0px",z:"0px"}],stepsB:[{opacity:0,transition:"transform 500ms ease 0ms, opacity 500ms ease 0ms",x:"0px",y:"50px",z:"0px"}]},{type:"hover",selector:".team-overlay",descend:!0,stepsA:[{opacity:1,transition:"opacity 500ms ease 0ms"}],stepsB:[{opacity:0,transition:"opacity 500ms ease 0ms"}]}]}},{slug:"hide-menu-type-3-on-load",name:"hide menu type 3 on load",value:{style:{display:"none",opacity:0},triggers:[]}},{slug:"show-menu-type-3",name:"show menu type 3",value:{style:{},triggers:[{type:"click",selector:".video-wrapper",stepsA:[{display:"block",opacity:1,transition:"opacity 300ms ease 0ms"}],stepsB:[{opacity:0,transition:"opacity 300ms ease 0ms"},{display:"none"}]}]}},{slug:"move-up-on-slide",name:"move up on slide",value:{style:{opacity:0,x:"0px",y:"-50px",z:"0px"},triggers:[{type:"slider",stepsA:[{wait:200},{opacity:1,transition:"transform 500ms ease 0ms, opacity 500ms ease 0ms",x:"0px",y:"0px",z:"0px"}],stepsB:[{opacity:0,transition:"transform 500ms ease 0ms, opacity 500ms ease 0ms",x:"0px",y:"-50px",z:"0px"}]}]}},{slug:"move-up-on-slide-2",name:"move up on slide 2",value:{style:{opacity:0,x:"0px",y:"-50px",z:"0px"},triggers:[{type:"slider",stepsA:[{wait:400},{opacity:1,transition:"transform 500ms ease 0ms, opacity 500ms ease 0ms",x:"0px",y:"0px",z:"0px"}],stepsB:[{opacity:0,transition:"transform 500ms ease 0ms, opacity 500ms ease 0ms",x:"0px",y:"-50px",z:"0px"}]}]}},{slug:"fade-in-on-slide-3",name:"fade in on slide 3",value:{style:{opacity:0},triggers:[{type:"slider",stepsA:[{wait:800},{opacity:1,transition:"opacity 500ms ease 0ms"}],stepsB:[{opacity:0,transition:"opacity 500ms ease 0ms"}]}]}},{slug:"move-left-on-slide-4",name:"move left on slide 4",value:{style:{opacity:0,x:"-50px",y:"0px",z:"0px"},triggers:[{type:"slider",stepsA:[{wait:200},{opacity:1,transition:"transform 500ms ease 0ms, opacity 500ms ease 0ms",x:"0px",y:"0px",z:"0px"}],stepsB:[{opacity:0,transition:"transform 500ms ease 0ms, opacity 500ms ease 0ms",x:"-50px",y:"0px",z:"0px"}]}]}},{slug:"move-left-on-slide-5",name:"move left on slide 5",value:{style:{opacity:0,x:"50px",y:"0px",z:"0px"},triggers:[{type:"slider",stepsA:[{wait:400},{opacity:1,transition:"transform 500ms ease 0ms, opacity 500ms ease 0ms",x:"0px",y:"0px",z:"0px"}],stepsB:[{opacity:0,transition:"transform 500ms ease 0ms, opacity 500ms ease 0ms",x:"50px",y:"0px",z:"0px"}]}]}},{slug:"fade-in-on-slide-4",name:"fade in on slide 4",value:{style:{opacity:0},triggers:[{type:"slider",stepsA:[{wait:800},{opacity:1,transition:"opacity 500ms ease 0ms"}],stepsB:[{opacity:0,transition:"opacity 500ms ease 0ms"}]}]}},{slug:"responsive-menu",name:"responsive menu",value:{style:{display:"none",height:"0px"},triggers:[]}},{slug:"open-responsive-menu",name:"open responsive menu",value:{style:{},triggers:[{type:"click",selector:".responsive-nav",stepsA:[{height:"auto",transition:"height 500ms ease 0ms"}],stepsB:[{height:"0px",transition:"height 500ms ease 0ms"}]},{type:"click",selector:".dd-res",stepsA:[],stepsB:[{height:"0px",transition:"height 500ms ease 0ms"}]}]}},{slug:"open-dd-res",name:"open dd res",value:{style:{},triggers:[{type:"click",selector:".dd-res",siblings:!0,stepsA:[{height:"auto",transition:"height 500ms ease 0ms"}],stepsB:[{height:"0px",transition:"height 500ms ease 0ms"}]}]}},{slug:"cart-hide",name:"cart hide",value:{style:{display:"none"},triggers:[]}},{slug:"cart-product",name:"cart product",value:{style:{},triggers:[{type:"hover",selector:".cart-product",stepsA:[{display:"block"}],stepsB:[{display:"none"}]}]}}]);;

/**************************************
 * TweetCool Settings
***************************************/

$(document).ready(function() { "use strict";
        $('#tweecool').tweecool({
        	//settings
        	 username : 'collis', 
           limit : 3	
        });
		return false;
});

/**************************************
 * Video Background Full Width
***************************************/

    $(function () { "use strict";
  
  var outerDiv = $('.video-wrapper')
  var videoTag = outerDiv.find('video')
  
  $(window).resize(resize)
  resize()
  
  function resize() {
    var width = outerDiv.width()
    var height = outerDiv.height()
    var aspectW = 16
    var aspectH = 9
    var scaleX = width / aspectW
    var scaleY = height / aspectH
    var scale = Math.max(scaleX, scaleY)
    var w = Math.ceil(aspectW * scale)
    var h = Math.ceil(aspectH * scale)
    var x = 0
    var y = 0
    if (w > width) x = -(w - width) * 0.5
    if (h > height) y = -(h - height) * 0.5
     
    videoTag.css({
      width: w,
      height: h,
      top: y,
      left: x
    })
  }
  return false;
});

/**************************************
 * Typed jQurey
***************************************/

  $(function(){ "use strict";
  $(".element-border, .hello-element").typed({
    strings: ["Hello.", "Olá.", "¡Hola!", "Bonjour.", "Ciao." , "今日は." , "Goddag." , "Merhaba."],
        typeSpeed: 30, // typing speed
        backDelay: 500, // pause before backspacing
        loop: true, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
      });
	  return false;
});

   $(function(){ "use strict";
        $(".element, .element-border").typed({
          strings: ["awesome", "inspired", "incredible", "classy", "great", "proffesional", "popular"],
          typeSpeed: 250, // typing speed
          backDelay: 500, // pause before backspacing
          loop: false, // loop on or off (true or false)
          loopCount: false, // number of loops, false = infinite
        });
		return false;
    });
	
/**************************************
 * Hamburger Icon
***************************************/

    $(function() { "use strict";
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }
  });

/**************************************
 * fullPage jQuery
***************************************/

    $(document).ready(function() { "use strict";
        $('#fullpage').fullpage({
            //Navigation
            menu: '#menu',
            lockAnchors: false,
            anchors:['slide1', 'slide2', 'slide3'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: [''],
            showActiveTooltip: true,
            slidesNavigation: true,
            slidesNavPosition: 'top',
            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            normalScrollElements: '#element1, #element2, #element3, #element4',
            scrollOverflow: false,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,
            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,
            //Design
            controlArrows: true,
            verticalCentered: true,
            resize : false,
            sectionsColor : ['#ccc', '#eee'],
            paddingTop: '3em',
            paddingBottom: '10px',
            fixedElements: '#header, .footer',
            responsiveWidth: 1100,
            responsiveHeight: 0,
            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',
            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
            afterResize: function(){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });
		return false;
    });
	
/**************************************
 * isotope jQuery
***************************************/


$(document).ready( function() {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.item'
  });
  
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  }); 

  // store filter for each group
  var filters = {};

  $('.filters').on( 'click', '.button', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    var filterValue = concatValues( filters );
    // set filter for Isotope
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('.is-checked');
      $( this ).addClass('.is-checked');
    });
  });
  
});

// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}
  
/**************************************
 * Royal Preloader jQuery
***************************************/

Royal_Preloader.config({
                mode:       'line',
                timeout:    10,
                background: '#111'
});
	
/**************************************
 * fancybox jQuery
***************************************/

	$(document).ready(function() { "use strict";
		$(".fancybox").fancybox();
		return false;
	});
	
/**************************************
 * Wow jQuery
***************************************/

new WOW().init();

/**************************************
 * Scroll To Top
***************************************/

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

/**************************************
 * Coming Soon
***************************************/

$(function () {
            var $section = $('cooming');
            $(window).on("resize", function () {
                var dif = Math.max($(window).height() - $section.height(), 0);
                var padding = Math.floor(dif / 2) + 'px';
                $section.css({ 'padding-top': padding, 'padding-bottom': padding });
            }).trigger("resize");
            $('#myCounter').mbComingsoon({ expiryDate: new Date(2016, 3, 5, 9, 30), speed:100 });
            setTimeout(function () {
                $(window).resize();
            }, 200);
});

/**************************************
 * Photoswipe Gallery
***************************************/

   var initPhotoSwipeFromDOM = function(gallerySelector) {
    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            childElements,
            linkEl,
            size,
            item;
        for(var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }
            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if(!clickedListItem) {
            return;
        }
        // find index of clicked item
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }
            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if(index >= 0) {
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };
    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};
        if(hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }
        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        if(!params.hasOwnProperty('pid')) {
            return params;
        }
        params.pid = parseInt(params.pid, 10);
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            index: index,
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of docs for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 
                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            },
           history: false,
           focus: false 
        };
        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }
        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll( gallerySelector );
    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid > 0 && hashData.gid > 0) {
        openPhotoSwipe( hashData.pid - 1 ,  galleryElements[ hashData.gid - 1 ], true );
    }
    };
    initPhotoSwipeFromDOM('.my-simple-gallery');


/**************************************
 * Page Load
***************************************/
				 
	   if($(".animsition").length){
	   $(".animsition").animsition({
		inClass               :   'fade-in',
		outClass              :   'fade-out',
		inDuration            :    800,
		outDuration           :    800,
		linkElement           :   '.animsition-link',
		   // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
		loading               :    true,
		loadingParentElement  :   'body', 
		unSupportCss          : [ 'animation-duration',
								  '-webkit-animation-duration',
								  '-o-animation-duration'
								],
		overlay               :   false,

		overlayClass          :   'animsition-overlay-slide',
		overlayParentElement  :   'body'
	  });
	};
WebFont.load({
  google: {
    families: ["Lekton:regular","Yellowtail:regular","Playfair Display:regular,italic,700"]
  }
});;
/**
 * @file
 * Attaches behaviors for Drupal's active link marking.
 */

(function (Drupal, drupalSettings) {

  'use strict';

  /**
   * Append is-active class.
   *
   * The link is only active if its path corresponds to the current path, the
   * language of the linked path is equal to the current language, and if the
   * query parameters of the link equal those of the current request, since the
   * same request with different query parameters may yield a different page
   * (e.g. pagers, exposed View filters).
   *
   * Does not discriminate based on element type, so allows you to set the
   * is-active class on any element: a, li…
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.activeLinks = {
    attach: function (context) {
      // Start by finding all potentially active links.
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? "[data-drupal-link-query='" + queryString + "']" : ':not([data-drupal-link-query])';
      var originalSelectors = ['[data-drupal-link-system-path="' + path.currentPath + '"]'];
      var selectors;

      // If this is the front page, we have to check for the <front> path as
      // well.
      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      // Add language filtering.
      selectors = [].concat(
        // Links without any hreflang attributes (most of them).
        originalSelectors.map(function (selector) { return selector + ':not([hreflang])'; }),
        // Links with hreflang equals to the current language.
        originalSelectors.map(function (selector) { return selector + '[hreflang="' + path.currentLanguage + '"]'; })
      );

      // Add query string selector for pagers, exposed filters.
      selectors = selectors.map(function (current) { return current + querySelector; });

      // Query the DOM.
      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };

})(Drupal, drupalSettings);
;
/**
 * @file
 * Adds an HTML element and method to trigger audio UAs to read system messages.
 *
 * Use {@link Drupal.announce} to indicate to screen reader users that an
 * element on the page has changed state. For instance, if clicking a link
 * loads 10 more items into a list, one might announce the change like this.
 *
 * @example
 * $('#search-list')
 *   .on('itemInsert', function (event, data) {
 *     // Insert the new items.
 *     $(data.container.el).append(data.items.el);
 *     // Announce the change to the page contents.
 *     Drupal.announce(Drupal.t('@count items added to @container',
 *       {'@count': data.items.length, '@container': data.container.title}
 *     ));
 *   });
 */

(function (Drupal, debounce) {

  'use strict';

  var liveElement;
  var announcements = [];

  /**
   * Builds a div element with the aria-live attribute and add it to the DOM.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for drupalAnnouce.
   */
  Drupal.behaviors.drupalAnnounce = {
    attach: function (context) {
      // Create only one aria-live element.
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  /**
   * Concatenates announcements to a single string; appends to the live region.
   */
  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement;

    // Create an array of announcement strings to be joined and appended to the
    // aria live region.
    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);
      // If any of the announcements has a priority of assertive then the group
      // of joined announcements will have this priority.
      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      // Clear the liveElement so that repeated strings will be read.
      liveElement.innerHTML = '';
      // Set the busy state to true until the node changes are complete.
      liveElement.setAttribute('aria-busy', 'true');
      // Set the priority to assertive, or default to polite.
      liveElement.setAttribute('aria-live', priority);
      // Print the text to the live region. Text should be run through
      // Drupal.t() before being passed to Drupal.announce().
      liveElement.innerHTML = text.join('\n');
      // The live text area is updated. Allow the AT to announce the text.
      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  /**
   * Triggers audio UAs to read the supplied text.
   *
   * The aria-live region will only read the text that currently populates its
   * text node. Replacing text quickly in rapid calls to announce results in
   * only the text from the most recent call to {@link Drupal.announce} being
   * read. By wrapping the call to announce in a debounce function, we allow for
   * time for multiple calls to {@link Drupal.announce} to queue up their
   * messages. These messages are then joined and append to the aria-live region
   * as one text node.
   *
   * @param {string} text
   *   A string to be read by the UA.
   * @param {string} [priority='polite']
   *   A string to indicate the priority of the message. Can be either
   *   'polite' or 'assertive'.
   *
   * @return {function}
   *   The return of the call to debounce.
   *
   * @see http://www.w3.org/WAI/PF/aria-practices/#liveprops
   */
  Drupal.announce = function (text, priority) {
    // Save the text and priority into a closure variable. Multiple simultaneous
    // announcements will be concatenated and read in sequence.
    announcements.push({
      text: text,
      priority: priority
    });
    // Immediately invoke the function that debounce returns. 200 ms is right at
    // the cusp where humans notice a pause, so we will wait
    // at most this much time before the set of queued announcements is read.
    return (debounce(announce, 200)());
  };
}(Drupal, Drupal.debounce));
;
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i.parentNode.insertBefore(t,i);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=i}else{t.textContent=i}return n.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
;
(function(){if(window.matchMedia&&window.matchMedia("all").addListener){return false}var e=window.matchMedia,i=e("only all").matches,n=false,t=0,a=[],r=function(i){clearTimeout(t);t=setTimeout(function(){for(var i=0,n=a.length;i<n;i++){var t=a[i].mql,r=a[i].listeners||[],o=e(t.media).matches;if(o!==t.matches){t.matches=o;for(var s=0,l=r.length;s<l;s++){r[s].call(window,t)}}}},30)};window.matchMedia=function(t){var o=e(t),s=[],l=0;o.addListener=function(e){if(!i){return}if(!n){n=true;window.addEventListener("resize",r,true)}if(l===0){l=a.push({mql:o,listeners:s})}s.push(e)};o.removeListener=function(e){for(var i=0,n=s.length;i<n;i++){if(s[i]===e){s.splice(i,1)}}};return o}})();
;
/**
 * @file
 * Builds a nested accordion widget.
 *
 * Invoke on an HTML list element with the jQuery plugin pattern.
 *
 * @example
 * $('.toolbar-menu').drupalToolbarMenu();
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  /**
   * Store the open menu tray.
   */
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {

    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    /**
     * Handle clicks from the disclosure button on an item with sub-items.
     *
     * @param {Object} event
     *   A jQuery Event object.
     */
    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');
      // Toggle the list item.
      toggleList($item);
      // Close open sibling menus.
      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    /**
     * Handle clicks from a menu item link.
     *
     * @param {Object} event
     *   A jQuery Event object.
     */
    function linkClickHandler(event) {
      // If the toolbar is positioned fixed (and therefore hiding content
      // underneath), then users expect clicks in the administration menu tray
      // to take them to that destination but for the menu tray to be closed
      // after clicking: otherwise the toolbar itself is obstructing the view
      // of the destination they chose.
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }
      // Stopping propagation to make sure that once a toolbar-box is clicked
      // (the whitespace part), the page is not redirected anymore.
      event.stopPropagation();
    }

    /**
     * Toggle the open/close state of a list is a menu.
     *
     * @param {jQuery} $item
     *   The li item to be toggled.
     *
     * @param {Boolean} switcher
     *   A flag that forces toggleClass to add or a remove a class, rather than
     *   simply toggling its presence.
     */
    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = (typeof switcher !== 'undefined') ? switcher : !$item.hasClass('open');
      // Toggle the item open state.
      $item.toggleClass('open', switcher);
      // Twist the toggle.
      $toggle.toggleClass('open', switcher);
      // Adjust the toggle text.
      $toggle
        .find('.action')
        // Expand Structure, Collapse Structure.
        .text((switcher) ? ui.handleClose : ui.handleOpen);
    }

    /**
     * Add markup to the menu elements.
     *
     * Items with sub-elements have a list toggle attached to them. Menu item
     * links and the corresponding list toggle are wrapped with in a div
     * classed with .toolbar-box. The .toolbar-box div provides a positioning
     * context for the item list toggle.
     *
     * @param {jQuery} $menu
     *   The root of the menu to be initialized.
     */
    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };
      // Initialize items and their links.
      $menu.find('li > a').wrap('<div class="toolbar-box">');
      // Add a handle to each list item if it has a menu.
      $menu.find('li').each(function (index, element) {
        var $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          options.text = Drupal.t('@label', {'@label': $box.find('a').text()});
          $item.children('.toolbar-box')
            .append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    /**
     * Adds a level class to each list based on its depth in the menu.
     *
     * This function is called recursively on each sub level of lists elements
     * until the depth of the menu is exhausted.
     *
     * @param {jQuery} $lists
     *   A jQuery object of ul elements.
     *
     * @param {number} level
     *   The current level number to be assigned to the list elements.
     */
    function markListLevels($lists, level) {
      level = (!level) ? 1 : level;
      var $lis = $lists.children('li').addClass('level-' + level);
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    /**
     * On page load, open the active menu item.
     *
     * Marks the trail of the active link in the menu back to the root of the
     * menu with .menu-item--active-trail.
     *
     * @param {jQuery} $menu
     *   The root of the menu.
     */
    function openActiveItem($menu) {
      var pathItem = $menu.find('a[href="' + location.pathname + '"]');
      if (pathItem.length && !activeItem) {
        activeItem = location.pathname;
      }
      if (activeItem) {
        var $activeItem = $menu.find('a[href="' + activeItem + '"]').addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    // Return the jQuery object.
    return this.each(function (selector) {
      var $menu = $(this).once('toolbar-menu');
      if ($menu.length) {
        // Bind event handlers.
        $menu
          .on('click.toolbar', '.toolbar-box', toggleClickHandler)
          .on('click.toolbar', '.toolbar-box a', linkClickHandler);

        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);
        // Restore previous and active states.
        openActiveItem($menu);
      }
    });
  };

  /**
   * A toggle is an interactive element often bound to a click handler.
   *
   * @param {object} options
   *   Options for the button.
   * @param {string} options.class
   *   Class to set on the button.
   * @param {string} options.action
   *   Action for the button.
   * @param {string} options.text
   *   Used as label for the button.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return '<button class="' + options['class'] + '"><span class="action">' + options.action + '</span><span class="label">' + options.text + '</span></button>';
  };

}(jQuery, Drupal, drupalSettings));
;
/**
 * @file
 * Defines the behavior of the Drupal administration toolbar.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  // Merge run-time settings with the defaults.
  var options = $.extend(
    {
      breakpoints: {
        'toolbar.narrow': '',
        'toolbar.standard': '',
        'toolbar.wide': ''
      }
    },
    drupalSettings.toolbar,
    // Merge strings on top of drupalSettings so that they are not mutable.
    {
      strings: {
        horizontal: Drupal.t('Horizontal orientation'),
        vertical: Drupal.t('Vertical orientation')
      }
    }
  );

  /**
   * Registers tabs with the toolbar.
   *
   * The Drupal toolbar allows modules to register top-level tabs. These may
   * point directly to a resource or toggle the visibility of a tray.
   *
   * Modules register tabs with hook_toolbar().
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the toolbar rendering functionality to the toolbar element.
   */
  Drupal.behaviors.toolbar = {
    attach: function (context) {
      // Verify that the user agent understands media queries. Complex admin
      // toolbar layouts require media query support.
      if (!window.matchMedia('only screen').matches) {
        return;
      }
      // Process the administrative toolbar.
      $(context).find('#toolbar-administration').once('toolbar').each(function () {

        // Establish the toolbar models and views.
        var model = Drupal.toolbar.models.toolbarModel = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')) || false,
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID')))
        });
        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: this,
          model: model
        });

        // Render collapsible menus.
        var menuModel = Drupal.toolbar.models.menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(this).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });

        // Handle the resolution of Drupal.toolbar.setSubtrees.
        // This is handled with a deferred so that the function may be invoked
        // asynchronously.
        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem('Drupal.toolbar.subtrees.' + theme, JSON.stringify(subtrees));
          // Indicate on the toolbarModel that subtrees are now loaded.
          model.set('areSubtreesLoaded', true);
        });

        // Attach a listener to the configured media query breakpoints.
        for (var label in options.breakpoints) {
          if (options.breakpoints.hasOwnProperty(label)) {
            var mq = options.breakpoints[label];
            var mql = Drupal.toolbar.mql[label] = window.matchMedia(mq);
            // Curry the model and the label of the media query breakpoint to
            // the mediaQueryChangeHandler function.
            mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));
            // Fire the mediaQueryChangeHandler for each configured breakpoint
            // so that they process once.
            Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
          }
        }

        // Trigger an initial attempt to load menu subitems. This first attempt
        // is made after the media query handlers have had an opportunity to
        // process. The toolbar starts in the vertical orientation by default,
        // unless the viewport is wide enough to accommodate a horizontal
        // orientation. Thus we give the Toolbar a chance to determine if it
        // should be set to horizontal orientation before attempting to load
        // menu subtrees.
        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();

        $(document)
          // Update the model when the viewport offset changes.
          .on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
            model.set('offsets', offsets);
          });

        // Broadcast model changes to other modules.
        model
          .on('change:orientation', function (model, orientation) {
            $(document).trigger('drupalToolbarOrientationChange', orientation);
          })
          .on('change:activeTab', function (model, tab) {
            $(document).trigger('drupalToolbarTabChange', tab);
          })
          .on('change:activeTray', function (model, tray) {
            $(document).trigger('drupalToolbarTrayChange', tray);
          });

        // If the toolbar's orientation is horizontal and no active tab is
        // defined then show the tray of the first toolbar tab by default (but
        // not the first 'Home' toolbar tab).
        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }
      });
    }
  };

  /**
   * Toolbar methods of Backbone objects.
   *
   * @namespace
   */
  Drupal.toolbar = {

    /**
     * A hash of View instances.
     *
     * @type {object.<string, Backbone.View>}
     */
    views: {},

    /**
     * A hash of Model instances.
     *
     * @type {object.<string, Backbone.Model>}
     */
    models: {},

    /**
     * A hash of MediaQueryList objects tracked by the toolbar.
     *
     * @type {object.<string, object>}
     */
    mql: {},

    /**
     * Accepts a list of subtree menu elements.
     *
     * A deferred object that is resolved by an inlined JavaScript callback.
     *
     * @type {jQuery.Deferred}
     *
     * @see toolbar_subtrees_jsonp().
     */
    setSubtrees: new $.Deferred(),

    /**
     * Respond to configured narrow media query changes.
     *
     * @param {Drupal.toolbar.ToolbarModel} model
     *   A toolbar model
     * @param {string} label
     *   Media query label.
     * @param {object} mql
     *   A MediaQueryList object.
     */
    mediaQueryChangeHandler: function (model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });
          // If the toolbar doesn't have an explicit orientation yet, or if the
          // narrow media query doesn't match then set the orientation to
          // vertical.
          if (!mql.matches || !model.get('orientation')) {
            model.set({orientation: 'vertical'}, {validate: true});
          }
          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: ((mql.matches) ? 'horizontal' : 'vertical')
          }, {validate: true});
          // The tray orientation toggle visibility does not need to be
          // validated.
          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  /**
   * A toggle is an interactive element often bound to a click handler.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' +
      '<button class="toolbar-icon" type="button"></button>' +
      '</div></div>';
  };

  /**
   * Ajax command to set the toolbar subtrees.
   *
   * @param {Drupal.Ajax} ajax
   *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
   * @param {object} response
   *   JSON response from the Ajax request.
   * @param {number} [status]
   *   XMLHttpRequest status.
   */
  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };

}(jQuery, Drupal, drupalSettings));
;
/**
 * @file
 * A Backbone Model for collapsible menus.
 */

(function (Backbone, Drupal) {

  'use strict';

  /**
   * Backbone Model for collapsible menus.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.toolbar.MenuModel = Backbone.Model.extend(/** @lends Drupal.toolbar.MenuModel# */{

    /**
     * @type {object}
     *
     * @prop {object} subtrees
     */
    defaults: /** @lends Drupal.toolbar.MenuModel# */{

      /**
       * @type {object}
       */
      subtrees: {}
    }
  });

}(Backbone, Drupal));
;
/**
 * @file
 * A Backbone Model for the toolbar.
 */

(function (Backbone, Drupal) {

  'use strict';

  /**
   * Backbone model for the toolbar.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend(/** @lends Drupal.toolbar.ToolbarModel# */{

    /**
     * @type {object}
     *
     * @prop activeTab
     * @prop activeTray
     * @prop isOriented
     * @prop isFixed
     * @prop areSubtreesLoaded
     * @prop isViewportOverflowConstrained
     * @prop orientation
     * @prop locked
     * @prop isTrayToggleVisible
     * @prop height
     * @prop offsets
     */
    defaults: /** @lends Drupal.toolbar.ToolbarModel# */{

      /**
       * The active toolbar tab. All other tabs should be inactive under
       * normal circumstances. It will remain active across page loads. The
       * active item is stored as an ID selector e.g. '#toolbar-item--1'.
       *
       * @type {string}
       */
      activeTab: null,

      /**
       * Represents whether a tray is open or not. Stored as an ID selector e.g.
       * '#toolbar-item--1-tray'.
       *
       * @type {string}
       */
      activeTray: null,

      /**
       * Indicates whether the toolbar is displayed in an oriented fashion,
       * either horizontal or vertical.
       *
       * @type {bool}
       */
      isOriented: false,

      /**
       * Indicates whether the toolbar is positioned absolute (false) or fixed
       * (true).
       *
       * @type {bool}
       */
      isFixed: false,

      /**
       * Menu subtrees are loaded through an AJAX request only when the Toolbar
       * is set to a vertical orientation.
       *
       * @type {bool}
       */
      areSubtreesLoaded: false,

      /**
       * If the viewport overflow becomes constrained, isFixed must be true so
       * that elements in the trays aren't lost off-screen and impossible to
       * get to.
       *
       * @type {bool}
       */
      isViewportOverflowConstrained: false,

      /**
       * The orientation of the active tray.
       *
       * @type {string}
       */
      orientation: 'vertical',

      /**
       * A tray is locked if a user toggled it to vertical. Otherwise a tray
       * will switch between vertical and horizontal orientation based on the
       * configured breakpoints. The locked state will be maintained across page
       * loads.
       *
       * @type {bool}
       */
      locked: false,

      /**
       * Indicates whether the tray orientation toggle is visible.
       *
       * @type {bool}
       */
      isTrayToggleVisible: false,

      /**
       * The height of the toolbar.
       *
       * @type {number}
       */
      height: null,

      /**
       * The current viewport offsets determined by {@link Drupal.displace}. The
       * offsets suggest how a module might position is components relative to
       * the viewport.
       *
       * @type {object}
       *
       * @prop {number} top
       * @prop {number} right
       * @prop {number} bottom
       * @prop {number} left
       */
      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },

    /**
     * @inheritdoc
     *
     * @param {object} attributes
     *   Attributes for the toolbar.
     * @param {object} options
     *   Options for the toolbar.
     *
     * @return {string|undefined}
     *   Returns an error message if validation failed.
     */
    validate: function (attributes, options) {
      // Prevent the orientation being set to horizontal if it is locked, unless
      // override has not been passed as an option.
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });

}(Backbone, Drupal));
;
/**
 * @file
 * A Backbone view for the body element.
 */

(function ($, Drupal, Backbone) {

  'use strict';

  Drupal.toolbar.BodyVisualView = Backbone.View.extend(/** @lends Drupal.toolbar.BodyVisualView# */{

    /**
     * Adjusts the body element with the toolbar position and dimension changes.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change:orientation change:offsets change:activeTray change:isOriented change:isFixed change:isViewportOverflowConstrained', this.render);
    },

    /**
     * @inheritdoc
     */
    render: function () {
      var $body = $('body');
      var orientation = this.model.get('orientation');
      var isOriented = this.model.get('isOriented');
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');

      $body
        // We are using JavaScript to control media-query handling for two
        // reasons: (1) Using JavaScript let's us leverage the breakpoint
        // configurations and (2) the CSS is really complex if we try to hide
        // some styling from browsers that don't understand CSS media queries.
        // If we drive the CSS from classes added through JavaScript,
        // then the CSS becomes simpler and more robust.
        .toggleClass('toolbar-vertical', (orientation === 'vertical'))
        .toggleClass('toolbar-horizontal', (isOriented && orientation === 'horizontal'))
        // When the toolbar is fixed, it will not scroll with page scrolling.
        .toggleClass('toolbar-fixed', (isViewportOverflowConstrained || this.model.get('isFixed')))
        // Toggle the toolbar-tray-open class on the body element. The class is
        // applied when a toolbar tray is active. Padding might be applied to
        // the body element to prevent the tray from overlapping content.
        .toggleClass('toolbar-tray-open', !!this.model.get('activeTray'))
        // Apply padding to the top of the body to offset the placement of the
        // toolbar bar element.
        .css('padding-top', this.model.get('offsets').top);
    }
  });

}(jQuery, Drupal, Backbone));
;
/**
 * @file
 * A Backbone view for the collapsible menus.
 */

(function ($, Backbone, Drupal) {

  'use strict';

  Drupal.toolbar.MenuVisualView = Backbone.View.extend(/** @lends Drupal.toolbar.MenuVisualView# */{

    /**
     * Backbone View for collapsible menus.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },

    /**
     * @inheritdoc
     */
    render: function () {
      var subtrees = this.model.get('subtrees');
      // Add subtrees.
      for (var id in subtrees) {
        if (subtrees.hasOwnProperty(id)) {
          this.$el
            .find('#toolbar-link-' + id)
            .once('toolbar-subtrees')
            .after(subtrees[id]);
        }
      }
      // Render the main menu as a nested, collapsible accordion.
      if ('drupalToolbarMenu' in $.fn) {
        this.$el
          .children('.toolbar-menu')
          .drupalToolbarMenu();
      }
    }
  });

}(jQuery, Backbone, Drupal));
;
/**
 * @file
 * A Backbone view for the aural feedback of the toolbar.
 */

(function (Backbone, Drupal) {

  'use strict';

  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend(/** @lends Drupal.toolbar.ToolbarAuralView# */{

    /**
     * Backbone view for the aural feedback of the toolbar.
     *
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   Options for the view.
     * @param {object} options.strings
     *   Various strings to use in the view.
     */
    initialize: function (options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },

    /**
     * Announces an orientation change.
     *
     * @param {Drupal.toolbar.ToolbarModel} model
     *   The toolbar model in question.
     * @param {string} orientation
     *   The new value of the orientation attribute in the model.
     */
    onOrientationChange: function (model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },

    /**
     * Announces a changed active tray.
     *
     * @param {Drupal.toolbar.ToolbarModel} model
     *   The toolbar model in question.
     * @param {HTMLElement} tray
     *   The new value of the tray attribute in the model.
     */
    onActiveTrayChange: function (model, tray) {
      var relevantTray = (tray === null) ? model.previous('activeTray') : tray;
      var action = (tray === null) ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text;
      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent, '@action': action
        });
      }
      else {
        text = Drupal.t('Tray @action.', {'@action': action});
      }
      Drupal.announce(text);
    }
  });

}(Backbone, Drupal));
;
/**
 * @file
 * A Backbone view for the toolbar element. Listens to mouse & touch.
 */

(function ($, Drupal, drupalSettings, Backbone) {

  'use strict';

  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend(/** @lends Drupal.toolbar.ToolbarVisualView# */{

    /**
     * Event map for the `ToolbarVisualView`.
     *
     * @return {object}
     *   A map of events.
     */
    events: function () {
      // Prevents delay and simulated mouse events.
      var touchEndToClick = function (event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },

    /**
     * Backbone view for the toolbar element. Listens to mouse & touch.
     *
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   Options for the view object.
     * @param {object} options.strings
     *   Various strings to use in the view.
     */
    initialize: function (options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);

      // Add the tray orientation toggles.
      this.$el
        .find('.toolbar-tray .toolbar-lining')
        .append(Drupal.theme('toolbarOrientationToggle'));

      // Trigger an activeTab change so that listening scripts can respond on
      // page load. This will call render.
      this.model.trigger('change:activeTab');
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.toolbar.ToolbarVisualView}
     *   The `ToolbarVisualView` instance.
     */
    render: function () {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();
      // Load the subtrees if the orientation of the toolbar is changed to
      // vertical. This condition responds to the case that the toolbar switches
      // from horizontal to vertical orientation. The toolbar starts in a
      // vertical orientation by default and then switches to horizontal during
      // initialization if the media query conditions are met. Simply checking
      // that the orientation is vertical here would result in the subtrees
      // always being loaded, even when the toolbar initialization ultimately
      // results in a horizontal orientation.
      //
      // @see Drupal.behaviors.toolbar.attach() where admin menu subtrees
      // loading is invoked during initialization after media query conditions
      // have been processed.
      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }
      // Trigger a recalculation of viewport displacing elements. Use setTimeout
      // to ensure this recalculation happens after changes to visual elements
      // have processed.
      window.setTimeout(function () {
        Drupal.displace(true);
      }, 0);
      return this;
    },

    /**
     * Responds to a toolbar tab click.
     *
     * @param {jQuery.Event} event
     *   The event triggered.
     */
    onTabClick: function (event) {
      // If this tab has a tray associated with it, it is considered an
      // activatable tab.
      if (event.target.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.target;

        // Set the event target as the active item if it is not already.
        this.model.set('activeTab', (!activeTab || clickedTab !== activeTab) ? clickedTab : null);

        event.preventDefault();
        event.stopPropagation();
      }
    },

    /**
     * Toggles the orientation of a toolbar tray.
     *
     * @param {jQuery.Event} event
     *   The event triggered.
     */
    onOrientationToggleClick: function (event) {
      var orientation = this.model.get('orientation');
      // Determine the toggle-to orientation.
      var antiOrientation = (orientation === 'vertical') ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';
      // Remember the locked state.
      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      }
      else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }
      // Update the model.
      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });

      event.preventDefault();
      event.stopPropagation();
    },

    /**
     * Updates the display of the tabs: toggles a tab and the associated tray.
     */
    updateTabs: function () {
      var $tab = $(this.model.get('activeTab'));
      // Deactivate the previous tab.
      $(this.model.previous('activeTab'))
        .removeClass('is-active')
        .prop('aria-pressed', false);
      // Deactivate the previous tray.
      $(this.model.previous('activeTray'))
        .removeClass('is-active');

      // Activate the selected tab.
      if ($tab.length > 0) {
        $tab
          .addClass('is-active')
          // Mark the tab as pressed.
          .prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');
        // Store the active tab name or remove the setting.
        var id = $tab.get(0).id;
        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }
        // Activate the associated tray.
        var $tray = this.$el.find('[data-toolbar-tray="' + name + '"].toolbar-tray');
        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        }
        else {
          // There is no active tray.
          this.model.set('activeTray', null);
        }
      }
      else {
        // There is no active tray.
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },

    /**
     * Update the attributes of the toolbar bar element.
     */
    updateBarAttributes: function () {
      var isOriented = this.model.get('isOriented');
      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      }
      else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }
      // Toggle between a basic vertical view and a more sophisticated
      // horizontal and vertical display of the toolbar bar and trays.
      this.$el.toggleClass('toolbar-oriented', isOriented);
    },

    /**
     * Updates the orientation of the active tray if necessary.
     */
    updateTrayOrientation: function () {
      var orientation = this.model.get('orientation');
      // The antiOrientation is used to render the view of action buttons like
      // the tray orientation toggle.
      var antiOrientation = (orientation === 'vertical') ? 'horizontal' : 'vertical';
      // Update the orientation of the trays.
      var $trays = this.$el.find('.toolbar-tray')
        .removeClass('toolbar-tray-horizontal toolbar-tray-vertical')
        .addClass('toolbar-tray-' + orientation);

      // Update the tray orientation toggle button.
      var iconClass = 'toolbar-icon-toggle-' + orientation;
      var iconAntiClass = 'toolbar-icon-toggle-' + antiOrientation;
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation')
        .toggle(this.model.get('isTrayToggleVisible'));
      $orientationToggle.find('button')
        .val(antiOrientation)
        .attr('title', this.strings[antiOrientation])
        .text(this.strings[antiOrientation])
        .removeClass(iconClass)
        .addClass(iconAntiClass);

      // Update data offset attributes for the trays.
      var dir = document.documentElement.dir;
      var edge = (dir === 'rtl') ? 'right' : 'left';
      // Remove data-offset attributes from the trays so they can be refreshed.
      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');
      // If an active vertical tray exists, mark it as an offset element.
      $trays.filter('.toolbar-tray-vertical.is-active').attr('data-offset-' + edge, '');
      // If an active horizontal tray exists, mark it as an offset element.
      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },

    /**
     * Sets the tops of the trays so that they align with the bottom of the bar.
     */
    adjustPlacement: function () {
      var $trays = this.$el.find('.toolbar-tray');
      if (!this.model.get('isOriented')) {
        $trays.css('margin-top', 0);
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
      else {
        // The toolbar container is invisible. Its placement is used to
        // determine the container for the trays.
        $trays.css('margin-top', this.$el.find('.toolbar-bar').outerHeight());
      }
    },

    /**
     * Calls the endpoint URI that builds an AJAX command with the rendered
     * subtrees.
     *
     * The rendered admin menu subtrees HTML is cached on the client in
     * localStorage until the cache of the admin menu subtrees on the server-
     * side is invalidated. The subtreesHash is stored in localStorage as well
     * and compared to the subtreesHash in drupalSettings to determine when the
     * admin menu subtrees cache has been invalidated.
     */
    loadSubtrees: function () {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');
      // Only load and render the admin menu subtrees if:
      //   (1) They have not been loaded yet.
      //   (2) The active tab is the administration menu tab, indicated by the
      //       presence of the data-drupal-subtrees attribute.
      //   (3) The orientation of the tray is vertical.
      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url('toolbar/subtrees/' + subtreesHash);
        var cachedSubtreesHash = localStorage.getItem('Drupal.toolbar.subtreesHash.' + theme);
        var cachedSubtrees = JSON.parse(localStorage.getItem('Drupal.toolbar.subtrees.' + theme));
        var isVertical = this.model.get('orientation') === 'vertical';
        // If we have the subtrees in localStorage and the subtree hash has not
        // changed, then use the cached data.
        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        }
        // Only make the call to get the subtrees if the orientation of the
        // toolbar is vertical.
        else if (isVertical) {
          // Remove the cached menu information.
          localStorage.removeItem('Drupal.toolbar.subtreesHash.' + theme);
          localStorage.removeItem('Drupal.toolbar.subtrees.' + theme);
          // The AJAX response's command will trigger the resolve method of the
          // Drupal.toolbar.setSubtrees Promise.
          Drupal.ajax({url: endpoint}).execute();
          // Cache the hash for the subtrees locally.
          localStorage.setItem('Drupal.toolbar.subtreesHash.' + theme, subtreesHash);
        }
      }
    }
  });

}(jQuery, Drupal, drupalSettings, Backbone));
;
/* jQuery Foundation Joyride Plugin 2.1 | Copyright 2012, ZURB | www.opensource.org/licenses/mit-license.php */
(function(e,t,n){"use strict";var r={version:"2.0.3",tipLocation:"bottom",nubPosition:"auto",scroll:!0,scrollSpeed:300,timer:0,autoStart:!1,startTimerOnClick:!0,startOffset:0,nextButton:!0,tipAnimation:"fade",pauseAfter:[],tipAnimationFadeSpeed:300,cookieMonster:!1,cookieName:"joyride",cookieDomain:!1,cookiePath:!1,localStorage:!1,localStorageKey:"joyride",tipContainer:"body",modal:!1,expose:!1,postExposeCallback:e.noop,preRideCallback:e.noop,postRideCallback:e.noop,preStepCallback:e.noop,postStepCallback:e.noop,template:{link:'<a href="#close" class="joyride-close-tip">X</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper" role="dialog"></div>',button:'<a href="#" class="joyride-next-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',exposeCover:'<div class="joyride-expose-cover"></div>'}},i=i||!1,s={},o={init:function(n){return this.each(function(){e.isEmptyObject(s)?(s=e.extend(!0,r,n),s.document=t.document,s.$document=e(s.document),s.$window=e(t),s.$content_el=e(this),s.$body=e(s.tipContainer),s.body_offset=e(s.tipContainer).position(),s.$tip_content=e("> li",s.$content_el),s.paused=!1,s.attempts=0,s.tipLocationPatterns={top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},o.jquery_check(),e.isFunction(e.cookie)||(s.cookieMonster=!1),(!s.cookieMonster||!e.cookie(s.cookieName))&&(!s.localStorage||!o.support_localstorage()||!localStorage.getItem(s.localStorageKey))&&(s.$tip_content.each(function(t){o.create({$li:e(this),index:t})}),s.autoStart&&(!s.startTimerOnClick&&s.timer>0?(o.show("init"),o.startTimer()):o.show("init"))),s.$document.on("click.joyride",".joyride-next-tip, .joyride-modal-bg",function(e){e.preventDefault(),s.$li.next().length<1?o.end():s.timer>0?(clearTimeout(s.automate),o.hide(),o.show(),o.startTimer()):(o.hide(),o.show())}),s.$document.on("click.joyride",".joyride-close-tip",function(e){e.preventDefault(),o.end()}),s.$window.bind("resize.joyride",function(t){if(s.$li){if(s.exposed&&s.exposed.length>0){var n=e(s.exposed);n.each(function(){var t=e(this);o.un_expose(t),o.expose(t)})}o.is_phone()?o.pos_phone():o.pos_default()}})):o.restart()})},resume:function(){o.set_li(),o.show()},nextTip:function(){s.$li.next().length<1?o.end():s.timer>0?(clearTimeout(s.automate),o.hide(),o.show(),o.startTimer()):(o.hide(),o.show())},tip_template:function(t){var n,r,i;return t.tip_class=t.tip_class||"",n=e(s.template.tip).addClass(t.tip_class),r=e.trim(e(t.li).html())+o.button_text(t.button_text)+s.template.link+o.timer_instance(t.index),i=e(s.template.wrapper),t.li.attr("data-aria-labelledby")&&i.attr("aria-labelledby",t.li.attr("data-aria-labelledby")),t.li.attr("data-aria-describedby")&&i.attr("aria-describedby",t.li.attr("data-aria-describedby")),n.append(i),n.first().attr("data-index",t.index),e(".joyride-content-wrapper",n).append(r),n[0]},timer_instance:function(t){var n;return t===0&&s.startTimerOnClick&&s.timer>0||s.timer===0?n="":n=o.outerHTML(e(s.template.timer)[0]),n},button_text:function(t){return s.nextButton?(t=e.trim(t)||"Next",t=o.outerHTML(e(s.template.button).append(t)[0])):t="",t},create:function(t){var n=t.$li.attr("data-button")||t.$li.attr("data-text"),r=t.$li.attr("class"),i=e(o.tip_template({tip_class:r,index:t.index,button_text:n,li:t.$li}));e(s.tipContainer).append(i)},show:function(t){var r={},i,u=[],a=0,f,l=null;if(s.$li===n||e.inArray(s.$li.index(),s.pauseAfter)===-1){s.paused?s.paused=!1:o.set_li(t),s.attempts=0;if(s.$li.length&&s.$target.length>0){t&&(s.preRideCallback(s.$li.index(),s.$next_tip),s.modal&&o.show_modal()),s.preStepCallback(s.$li.index(),s.$next_tip),u=(s.$li.data("options")||":").split(";"),a=u.length;for(i=a-1;i>=0;i--)f=u[i].split(":"),f.length===2&&(r[e.trim(f[0])]=e.trim(f[1]));s.tipSettings=e.extend({},s,r),s.tipSettings.tipLocationPattern=s.tipLocationPatterns[s.tipSettings.tipLocation],s.modal&&s.expose&&o.expose(),!/body/i.test(s.$target.selector)&&s.scroll&&o.scroll_to(),o.is_phone()?o.pos_phone(!0):o.pos_default(!0),l=e(".joyride-timer-indicator",s.$next_tip),/pop/i.test(s.tipAnimation)?(l.outerWidth(0),s.timer>0?(s.$next_tip.show(),l.animate({width:e(".joyride-timer-indicator-wrap",s.$next_tip).outerWidth()},s.timer)):s.$next_tip.show()):/fade/i.test(s.tipAnimation)&&(l.outerWidth(0),s.timer>0?(s.$next_tip.fadeIn(s.tipAnimationFadeSpeed),s.$next_tip.show(),l.animate({width:e(".joyride-timer-indicator-wrap",s.$next_tip).outerWidth()},s.timer)):s.$next_tip.fadeIn(s.tipAnimationFadeSpeed)),s.$current_tip=s.$next_tip,e(".joyride-next-tip",s.$current_tip).focus(),o.tabbable(s.$current_tip)}else s.$li&&s.$target.length<1?o.show():o.end()}else s.paused=!0},is_phone:function(){return i?i.mq("only screen and (max-width: 767px)"):s.$window.width()<767?!0:!1},support_localstorage:function(){return i?i.localstorage:!!t.localStorage},hide:function(){s.modal&&s.expose&&o.un_expose(),s.modal||e(".joyride-modal-bg").hide(),s.$current_tip.hide(),s.postStepCallback(s.$li.index(),s.$current_tip)},set_li:function(e){e?(s.$li=s.$tip_content.eq(s.startOffset),o.set_next_tip(),s.$current_tip=s.$next_tip):(s.$li=s.$li.next(),o.set_next_tip()),o.set_target()},set_next_tip:function(){s.$next_tip=e(".joyride-tip-guide[data-index="+s.$li.index()+"]")},set_target:function(){var t=s.$li.attr("data-class"),n=s.$li.attr("data-id"),r=function(){return n?e(s.document.getElementById(n)):t?e("."+t).filter(":visible").first():e("body")};s.$target=r()},scroll_to:function(){var t,n;t=s.$window.height()/2,n=Math.ceil(s.$target.offset().top-t+s.$next_tip.outerHeight()),e("html, body").stop().animate({scrollTop:n},s.scrollSpeed)},paused:function(){return e.inArray(s.$li.index()+1,s.pauseAfter)===-1?!0:!1},destroy:function(){e.isEmptyObject(s)||s.$document.off(".joyride"),e(t).off(".joyride"),e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),e(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(s.automate),s={}},restart:function(){s.autoStart?(o.hide(),s.$li=n,o.show("init")):(!s.startTimerOnClick&&s.timer>0?(o.show("init"),o.startTimer()):o.show("init"),s.autoStart=!0)},pos_default:function(t){var n=Math.ceil(s.$window.height()/2),r=s.$next_tip.offset(),i=e(".joyride-nub",s.$next_tip),u=Math.ceil(i.outerWidth()/2),a=Math.ceil(i.outerHeight()/2),f=t||!1;f&&(s.$next_tip.css("visibility","hidden"),s.$next_tip.show());if(!/body/i.test(s.$target.selector)){var l=s.tipSettings.tipAdjustmentY?parseInt(s.tipSettings.tipAdjustmentY):0,c=s.tipSettings.tipAdjustmentX?parseInt(s.tipSettings.tipAdjustmentX):0;o.bottom()?(s.$next_tip.css({top:s.$target.offset().top+a+s.$target.outerHeight()+l,left:s.$target.offset().left+c}),/right/i.test(s.tipSettings.nubPosition)&&s.$next_tip.css("left",s.$target.offset().left-s.$next_tip.outerWidth()+s.$target.outerWidth()),o.nub_position(i,s.tipSettings.nubPosition,"top")):o.top()?(s.$next_tip.css({top:s.$target.offset().top-s.$next_tip.outerHeight()-a+l,left:s.$target.offset().left+c}),o.nub_position(i,s.tipSettings.nubPosition,"bottom")):o.right()?(s.$next_tip.css({top:s.$target.offset().top+l,left:s.$target.outerWidth()+s.$target.offset().left+u+c}),o.nub_position(i,s.tipSettings.nubPosition,"left")):o.left()&&(s.$next_tip.css({top:s.$target.offset().top+l,left:s.$target.offset().left-s.$next_tip.outerWidth()-u+c}),o.nub_position(i,s.tipSettings.nubPosition,"right")),!o.visible(o.corners(s.$next_tip))&&s.attempts<s.tipSettings.tipLocationPattern.length&&(i.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),s.tipSettings.tipLocation=s.tipSettings.tipLocationPattern[s.attempts],s.attempts++,o.pos_default(!0))}else s.$li.length&&o.pos_modal(i);f&&(s.$next_tip.hide(),s.$next_tip.css("visibility","visible"))},pos_phone:function(t){var n=s.$next_tip.outerHeight(),r=s.$next_tip.offset(),i=s.$target.outerHeight(),u=e(".joyride-nub",s.$next_tip),a=Math.ceil(u.outerHeight()/2),f=t||!1;u.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),f&&(s.$next_tip.css("visibility","hidden"),s.$next_tip.show()),/body/i.test(s.$target.selector)?s.$li.length&&o.pos_modal(u):o.top()?(s.$next_tip.offset({top:s.$target.offset().top-n-a}),u.addClass("bottom")):(s.$next_tip.offset({top:s.$target.offset().top+i+a}),u.addClass("top")),f&&(s.$next_tip.hide(),s.$next_tip.css("visibility","visible"))},pos_modal:function(e){o.center(),e.hide(),o.show_modal()},show_modal:function(){e(".joyride-modal-bg").length<1&&e("body").append(s.template.modal).show(),/pop/i.test(s.tipAnimation)?e(".joyride-modal-bg").show():e(".joyride-modal-bg").fadeIn(s.tipAnimationFadeSpeed)},expose:function(){var n,r,i,u,a="expose-"+Math.floor(Math.random()*1e4);if(arguments.length>0&&arguments[0]instanceof e)i=arguments[0];else{if(!s.$target||!!/body/i.test(s.$target.selector))return!1;i=s.$target}if(i.length<1)return t.console&&console.error("element not valid",i),!1;n=e(s.template.expose),s.$body.append(n),n.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)}),r=e(s.template.exposeCover),u={zIndex:i.css("z-index"),position:i.css("position")},i.css("z-index",n.css("z-index")*1+1),u.position=="static"&&i.css("position","relative"),i.data("expose-css",u),r.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)}),s.$body.append(r),n.addClass(a),r.addClass(a),s.tipSettings.exposeClass&&(n.addClass(s.tipSettings.exposeClass),r.addClass(s.tipSettings.exposeClass)),i.data("expose",a),s.postExposeCallback(s.$li.index(),s.$next_tip,i),o.add_exposed(i)},un_expose:function(){var n,r,i,u,a=!1;if(arguments.length>0&&arguments[0]instanceof e)r=arguments[0];else{if(!s.$target||!!/body/i.test(s.$target.selector))return!1;r=s.$target}if(r.length<1)return t.console&&console.error("element not valid",r),!1;n=r.data("expose"),i=e("."+n),arguments.length>1&&(a=arguments[1]),a===!0?e(".joyride-expose-wrapper,.joyride-expose-cover").remove():i.remove(),u=r.data("expose-css"),u.zIndex=="auto"?r.css("z-index",""):r.css("z-index",u.zIndex),u.position!=r.css("position")&&(u.position=="static"?r.css("position",""):r.css("position",u.position)),r.removeData("expose"),r.removeData("expose-z-index"),o.remove_exposed(r)},add_exposed:function(t){s.exposed=s.exposed||[],t instanceof e?s.exposed.push(t[0]):typeof t=="string"&&s.exposed.push(t)},remove_exposed:function(t){var n;t instanceof e?n=t[0]:typeof t=="string"&&(n=t),s.exposed=s.exposed||[];for(var r=0;r<s.exposed.length;r++)if(s.exposed[r]==n){s.exposed.splice(r,1);return}},center:function(){var e=s.$window;return s.$next_tip.css({top:(e.height()-s.$next_tip.outerHeight())/2+e.scrollTop(),left:(e.width()-s.$next_tip.outerWidth())/2+e.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(s.tipSettings.tipLocation)},top:function(){return/top/i.test(s.tipSettings.tipLocation)},right:function(){return/right/i.test(s.tipSettings.tipLocation)},left:function(){return/left/i.test(s.tipSettings.tipLocation)},corners:function(e){var t=s.$window,n=t.height()/2,r=Math.ceil(s.$target.offset().top-n+s.$next_tip.outerHeight()),i=t.width()+t.scrollLeft(),o=t.height()+r,u=t.height()+t.scrollTop(),a=t.scrollTop();return r<a&&(r<0?a=0:a=r),o>u&&(u=o),[e.offset().top<a,i<e.offset().left+e.outerWidth(),u<e.offset().top+e.outerHeight(),t.scrollLeft()>e.offset().left]},visible:function(e){var t=e.length;while(t--)if(e[t])return!1;return!0},nub_position:function(e,t,n){t==="auto"?e.addClass(n):e.addClass(t)},startTimer:function(){s.$li.length?s.automate=setTimeout(function(){o.hide(),o.show(),o.startTimer()},s.timer):clearTimeout(s.automate)},end:function(){s.cookieMonster&&e.cookie(s.cookieName,"ridden",{expires:365,domain:s.cookieDomain,path:s.cookiePath}),s.localStorage&&localStorage.setItem(s.localStorageKey,!0),s.timer>0&&clearTimeout(s.automate),s.modal&&s.expose&&o.un_expose(),s.$current_tip&&s.$current_tip.hide(),s.$li&&(s.postStepCallback(s.$li.index(),s.$current_tip),s.postRideCallback(s.$li.index(),s.$current_tip)),e(".joyride-modal-bg").hide()},jquery_check:function(){return e.isFunction(e.fn.on)?!0:(e.fn.on=function(e,t,n){return this.delegate(t,e,n)},e.fn.off=function(e,t,n){return this.undelegate(t,e,n)},!1)},outerHTML:function(e){return e.outerHTML||(new XMLSerializer).serializeToString(e)},version:function(){return s.version},tabbable:function(t){e(t).on("keydown",function(n){if(!n.isDefaultPrevented()&&n.keyCode&&n.keyCode===27){n.preventDefault(),o.end();return}if(n.keyCode!==9)return;var r=e(t).find(":tabbable"),i=r.filter(":first"),s=r.filter(":last");n.target===s[0]&&!n.shiftKey?(i.focus(1),n.preventDefault()):n.target===i[0]&&n.shiftKey&&(s.focus(1),n.preventDefault())})}};e.fn.joyride=function(t){if(o[t])return o[t].apply(this,Array.prototype.slice.call(arguments,1));if(typeof t=="object"||!t)return o.init.apply(this,arguments);e.error("Method "+t+" does not exist on jQuery.joyride")}})(jQuery,this);
;
/**
 * @file
 * Attaches behaviors for the Tour module's toolbar tab.
 */

(function ($, Backbone, Drupal, document) {

  'use strict';

  var queryString = decodeURI(window.location.search);

  /**
   * Attaches the tour's toolbar tab behavior.
   *
   * It uses the query string for:
   * - tour: When ?tour=1 is present, the tour will start automatically after
   *   the page has loaded.
   * - tips: Pass ?tips=class in the url to filter the available tips to the
   *   subset which match the given class.
   *
   * @example
   * http://example.com/foo?tour=1&tips=bar
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attach tour functionality on `tour` events.
   */
  Drupal.behaviors.tour = {
    attach: function (context) {
      $('body').once('tour').each(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });

        model
          // Allow other scripts to respond to tour events.
          .on('change:isActive', function (model, isActive) {
            $(document).trigger((isActive) ? 'drupalTourStarted' : 'drupalTourStopped');
          })
          // Initialization: check whether a tour is available on the current
          // page.
          .set('tour', $(context).find('ol#tour'));

        // Start the tour immediately if toggled via query string.
        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };

  /**
   * @namespace
   */
  Drupal.tour = Drupal.tour || {

    /**
     * @namespace Drupal.tour.models
     */
    models: {},

    /**
     * @namespace Drupal.tour.views
     */
    views: {}
  };

  /**
   * Backbone Model for tours.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.tour.models.StateModel = Backbone.Model.extend(/** @lends Drupal.tour.models.StateModel# */{

    /**
     * @type {object}
     */
    defaults: /** @lends Drupal.tour.models.StateModel# */{

      /**
       * Indicates whether the Drupal root window has a tour.
       *
       * @type {Array}
       */
      tour: [],

      /**
       * Indicates whether the tour is currently running.
       *
       * @type {bool}
       */
      isActive: false,

      /**
       * Indicates which tour is the active one (necessary to cleanly stop).
       *
       * @type {Array}
       */
      activeTour: []
    }
  });

  Drupal.tour.views.ToggleTourView = Backbone.View.extend(/** @lends Drupal.tour.views.ToggleTourView# */{

    /**
     * @type {object}
     */
    events: {click: 'onClick'},

    /**
     * Handles edit mode toggle interactions.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.tour.views.ToggleTourView}
     *   The `ToggleTourView` view.
     */
    render: function () {
      // Render the visibility.
      this.$el.toggleClass('hidden', this._getTour().length === 0);
      // Render the state.
      var isActive = this.model.get('isActive');
      this.$el.find('button')
        .toggleClass('is-active', isActive)
        .prop('aria-pressed', isActive);
      return this;
    },

    /**
     * Model change handler; starts or stops the tour.
     */
    toggleTour: function () {
      if (this.model.get('isActive')) {
        var $tour = this._getTour();
        this._removeIrrelevantTourItems($tour, this._getDocument());
        var that = this;
        if ($tour.find('li').length) {
          $tour.joyride({
            autoStart: true,
            postRideCallback: function () { that.model.set('isActive', false); },
            // HTML segments for tip layout.
            template: {
              link: '<a href=\"#close\" class=\"joyride-close-tip\">&times;</a>',
              button: '<a href=\"#\" class=\"button button--primary joyride-next-tip\"></a>'
            }
          });
          this.model.set({isActive: true, activeTour: $tour});
        }
      }
      else {
        this.model.get('activeTour').joyride('destroy');
        this.model.set({isActive: false, activeTour: []});
      }
    },

    /**
     * Toolbar tab click event handler; toggles isActive.
     *
     * @param {jQuery.Event} event
     *   The click event.
     */
    onClick: function (event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },

    /**
     * Gets the tour.
     *
     * @return {jQuery}
     *   A jQuery element pointing to a `<ol>` containing tour items.
     */
    _getTour: function () {
      return this.model.get('tour');
    },

    /**
     * Gets the relevant document as a jQuery element.
     *
     * @return {jQuery}
     *   A jQuery element pointing to the document within which a tour would be
     *   started given the current state.
     */
    _getDocument: function () {
      return $(document);
    },

    /**
     * Removes tour items for elements that don't have matching page elements.
     *
     * Or that are explicitly filtered out via the 'tips' query string.
     *
     * @example
     * <caption>This will filter out tips that do not have a matching
     * page element or don't have the "bar" class.</caption>
     * http://example.com/foo?tips=bar
     *
     * @param {jQuery} $tour
     *   A jQuery element pointing to a `<ol>` containing tour items.
     * @param {jQuery} $document
     *   A jQuery element pointing to the document within which the elements
     *   should be sought.
     *
     * @see Drupal.tour.views.ToggleTourView#_getDocument
     */
    _removeIrrelevantTourItems: function ($tour, $document) {
      var removals = false;
      var tips = /tips=([^&]+)/.exec(queryString);
      $tour
        .find('li')
        .each(function () {
          var $this = $(this);
          var itemId = $this.attr('data-id');
          var itemClass = $this.attr('data-class');
          // If the query parameter 'tips' is set, remove all tips that don't
          // have the matching class.
          if (tips && !$(this).hasClass(tips[1])) {
            removals = true;
            $this.remove();
            return;
          }
          // Remove tip from the DOM if there is no corresponding page element.
          if ((!itemId && !itemClass) ||
            (itemId && $document.find('#' + itemId).length) ||
            (itemClass && $document.find('.' + itemClass).length)) {
            return;
          }
          removals = true;
          $this.remove();
        });

      // If there were removals, we'll have to do some clean-up.
      if (removals) {
        var total = $tour.find('li').length;
        if (!total) {
          this.model.set({tour: []});
        }

        $tour
          .find('li')
          // Rebuild the progress data.
          .each(function (index) {
            var progress = Drupal.t('!tour_item of !total', {'!tour_item': index + 1, '!total': total});
            $(this).find('.tour-progress').text(progress);
          })
          // Update the last item to have "End tour" as the button.
          .eq(-1)
          .attr('data-text', Drupal.t('End tour'));
      }
    }

  });

})(jQuery, Backbone, Drupal, document);
;
/**
 * @file
 * Manages page tabbing modifications made by modules.
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingConstrained
 */

/**
 * Allow modules to respond to the tabbingContext release event.
 *
 * @event drupalTabbingContextReleased
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingContextActivated
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingContextDeactivated
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Provides an API for managing page tabbing order modifications.
   *
   * @constructor Drupal~TabbingManager
   */
  function TabbingManager() {

    /**
     * Tabbing sets are stored as a stack. The active set is at the top of the
     * stack. We use a JavaScript array as if it were a stack; we consider the
     * first element to be the bottom and the last element to be the top. This
     * allows us to use JavaScript's built-in Array.push() and Array.pop()
     * methods.
     *
     * @type {Array.<Drupal~TabbingContext>}
     */
    this.stack = [];
  }

  /**
   * Add public methods to the TabbingManager class.
   */
  $.extend(TabbingManager.prototype, /** @lends Drupal~TabbingManager# */{

    /**
     * Constrain tabbing to the specified set of elements only.
     *
     * Makes elements outside of the specified set of elements unreachable via
     * the tab key.
     *
     * @param {jQuery} elements
     *   The set of elements to which tabbing should be constrained. Can also
     *   be a jQuery-compatible selector string.
     *
     * @return {Drupal~TabbingContext}
     *   The TabbingContext instance.
     *
     * @fires event:drupalTabbingConstrained
     */
    constrain: function (elements) {
      // Deactivate all tabbingContexts to prepare for the new constraint. A
      // tabbingContext instance will only be reactivated if the stack is
      // unwound to it in the _unwindStack() method.
      var il = this.stack.length;
      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }

      // The "active tabbing set" are the elements tabbing should be constrained
      // to.
      var $elements = $(elements).find(':tabbable').addBack(':tabbable');

      var tabbingContext = new TabbingContext({
        // The level is the current height of the stack before this new
        // tabbingContext is pushed on top of the stack.
        level: this.stack.length,
        $tabbableElements: $elements
      });

      this.stack.push(tabbingContext);

      // Activates the tabbingContext; this will manipulate the DOM to constrain
      // tabbing.
      tabbingContext.activate();

      // Allow modules to respond to the constrain event.
      $(document).trigger('drupalTabbingConstrained', tabbingContext);

      return tabbingContext;
    },

    /**
     * Restores a former tabbingContext when an active one is released.
     *
     * The TabbingManager stack of tabbingContext instances will be unwound
     * from the top-most released tabbingContext down to the first non-released
     * tabbingContext instance. This non-released instance is then activated.
     */
    release: function () {
      // Unwind as far as possible: find the topmost non-released
      // tabbingContext.
      var toActivate = this.stack.length - 1;
      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }

      // Delete all tabbingContexts after the to be activated one. They have
      // already been deactivated, so their effect on the DOM has been reversed.
      this.stack.splice(toActivate + 1);

      // Get topmost tabbingContext, if one exists, and activate it.
      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },

    /**
     * Makes all elements outside of the tabbingContext's set untabbable.
     *
     * Elements made untabbable have their original tabindex and autofocus
     * values stored so that they might be restored later when this
     * tabbingContext is deactivated.
     *
     * @param {Drupal~TabbingContext} tabbingContext
     *   The TabbingContext instance that has been activated.
     */
    activate: function (tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;
      // Determine which elements are reachable via tabbing by default.
      var $disabledSet = $(':tabbable')
        // Exclude elements of the active tabbing set.
        .not($set);
      // Set the disabled set on the tabbingContext.
      tabbingContext.$disabledElements = $disabledSet;
      // Record the tabindex for each element, so we can restore it later.
      var il = $disabledSet.length;
      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }
      // Make all tabbable elements outside of the active tabbing set
      // unreachable.
      $disabledSet
        .prop('tabindex', -1)
        .prop('autofocus', false);

      // Set focus on an element in the tabbingContext's set of tabbable
      // elements. First, check if there is an element with an autofocus
      // attribute. Select the last one from the DOM order.
      var $hasFocus = $set.filter('[autofocus]').eq(-1);
      // If no element in the tabbable set has an autofocus attribute, select
      // the first element in the set.
      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }
      $hasFocus.trigger('focus');
    },

    /**
     * Restores that tabbable state of a tabbingContext's disabled elements.
     *
     * Elements that were made untabbable have their original tabindex and
     * autofocus values restored.
     *
     * @param {Drupal~TabbingContext} tabbingContext
     *   The TabbingContext instance that has been deactivated.
     */
    deactivate: function (tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;
      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },

    /**
     * Records the tabindex and autofocus values of an untabbable element.
     *
     * @param {jQuery} $el
     *   The set of elements that have been disabled.
     * @param {number} level
     *   The stack level for which the tabindex attribute should be recorded.
     */
    recordTabindex: function ($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },

    /**
     * Restores the tabindex and autofocus values of a reactivated element.
     *
     * @param {jQuery} $el
     *   The element that is being reactivated.
     * @param {number} level
     *   The stack level for which the tabindex attribute should be restored.
     */
    restoreTabindex: function ($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');
      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];
        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        }
        // If the element did not have a tabindex at this stack level then
        // remove it.
        else {
          $el[0].removeAttribute('tabindex');
        }
        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }

        // Clean up $.data.
        if (level === 0) {
          // Remove all data.
          $el.removeData('drupalOriginalTabIndices');
        }
        else {
          // Remove the data for this stack level and higher.
          var levelToDelete = level;
          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }
          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });

  /**
   * Stores a set of tabbable elements.
   *
   * This constraint can be removed with the release() method.
   *
   * @constructor Drupal~TabbingContext
   *
   * @param {object} options
   *   A set of initiating values
   * @param {number} options.level
   *   The level in the TabbingManager's stack of this tabbingContext.
   * @param {jQuery} options.$tabbableElements
   *   The DOM elements that should be reachable via the tab key when this
   *   tabbingContext is active.
   * @param {jQuery} options.$disabledElements
   *   The DOM elements that should not be reachable via the tab key when this
   *   tabbingContext is active.
   * @param {bool} options.released
   *   A released tabbingContext can never be activated again. It will be
   *   cleaned up when the TabbingManager unwinds its stack.
   * @param {bool} options.active
   *   When true, the tabbable elements of this tabbingContext will be reachable
   *   via the tab key and the disabled elements will not. Only one
   *   tabbingContext can be active at a time.
   */
  function TabbingContext(options) {

    $.extend(this, /** @lends Drupal~TabbingContext# */{

      /**
       * @type {?number}
       */
      level: null,

      /**
       * @type {jQuery}
       */
      $tabbableElements: $(),

      /**
       * @type {jQuery}
       */
      $disabledElements: $(),

      /**
       * @type {bool}
       */
      released: false,

      /**
       * @type {bool}
       */
      active: false
    }, options);
  }

  /**
   * Add public methods to the TabbingContext class.
   */
  $.extend(TabbingContext.prototype, /** @lends Drupal~TabbingContext# */{

    /**
     * Releases this TabbingContext.
     *
     * Once a TabbingContext object is released, it can never be activated
     * again.
     *
     * @fires event:drupalTabbingContextReleased
     */
    release: function () {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);
        // Allow modules to respond to the tabbingContext release event.
        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },

    /**
     * Activates this TabbingContext.
     *
     * @fires event:drupalTabbingContextActivated
     */
    activate: function () {
      // A released TabbingContext object can never be activated again.
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);
        // Allow modules to respond to the constrain event.
        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },

    /**
     * Deactivates this TabbingContext.
     *
     * @fires event:drupalTabbingContextDeactivated
     */
    deactivate: function () {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);
        // Allow modules to respond to the constrain event.
        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });

  // Mark this behavior as processed on the first pass and return if it is
  // already processed.
  if (Drupal.tabbingManager) {
    return;
  }

  /**
   * @type {Drupal~TabbingManager}
   */
  Drupal.tabbingManager = new TabbingManager();

}(jQuery, Drupal));
;
/**
 * @file
 * Attaches behaviors for the Contextual module's edit toolbar tab.
 */

(function ($, Drupal, Backbone) {

  'use strict';

  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };

  /**
   * Initializes a contextual link: updates its DOM, sets up model and views.
   *
   * @param {HTMLElement} context
   *   A contextual links DOM element as rendered by the server.
   */
  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    var contextualToolbar = Drupal.contextualToolbar;
    var model = contextualToolbar.model = new contextualToolbar.StateModel({
      // Checks whether localStorage indicates we should start in edit mode
      // rather than view mode.
      // @see Drupal.contextualToolbar.VisualView.persist
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });

    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  /**
   * Attaches contextual's edit toolbar tab behavior.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches contextual toolbar behavior on a contextualToolbar-init event.
   */
  Drupal.behaviors.contextualToolbar = {
    attach: function (context) {
      if ($('body').once('contextualToolbar-init').length) {
        initContextualToolbar(context);
      }
    }
  };

  /**
   * Namespace for the contextual toolbar.
   *
   * @namespace
   */
  Drupal.contextualToolbar = {

    /**
     * The {@link Drupal.contextualToolbar.StateModel} instance.
     *
     * @type {?Drupal.contextualToolbar.StateModel}
     */
    model: null
  };

})(jQuery, Drupal, Backbone);
;
/**
 * @file
 * A Backbone Model for the state of Contextual module's edit toolbar tab.
 */

(function (Drupal, Backbone) {

  'use strict';

  Drupal.contextualToolbar.StateModel = Backbone.Model.extend(/** @lends Drupal.contextualToolbar.StateModel# */{

    /**
     * @type {object}
     *
     * @prop {bool} isViewing
     * @prop {bool} isVisible
     * @prop {number} contextualCount
     * @prop {Drupal~TabbingContext} tabbingContext
     */
    defaults: /** @lends Drupal.contextualToolbar.StateModel# */{

      /**
       * Indicates whether the toggle is currently in "view" or "edit" mode.
       *
       * @type {bool}
       */
      isViewing: true,

      /**
       * Indicates whether the toggle should be visible or hidden. Automatically
       * calculated, depends on contextualCount.
       *
       * @type {bool}
       */
      isVisible: false,

      /**
       * Tracks how many contextual links exist on the page.
       *
       * @type {number}
       */
      contextualCount: 0,

      /**
       * A TabbingContext object as returned by {@link Drupal~TabbingManager}:
       * the set of tabbable elements when edit mode is enabled.
       *
       * @type {?Drupal~TabbingContext}
       */
      tabbingContext: null
    },

    /**
     * Models the state of the edit mode toggle.
     *
     * @constructs
     *
     * @augments Backbone.Model
     *
     * @param {object} attrs
     *   Attributes for the backbone model.
     * @param {object} options
     *   An object with the following option:
     * @param {Backbone.collection} options.contextualCollection
     *   The collection of {@link Drupal.contextual.StateModel} models that
     *   represent the contextual links on the page.
     */
    initialize: function (attrs, options) {
      // Respond to new/removed contextual links.
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);

      // Automatically determine visibility.
      this.listenTo(this, 'change:contextualCount', this.updateVisibility);

      // Whenever edit mode is toggled, lock all contextual links.
      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },

    /**
     * Tracks the number of contextual link models in the collection.
     *
     * @param {Drupal.contextual.StateModel} contextualModel
     *   The contextual links model that was added or removed.
     * @param {Backbone.Collection} contextualCollection
     *    The collection of contextual link models.
     */
    countContextualLinks: function (contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },

    /**
     * Lock newly added contextual links if edit mode is enabled.
     *
     * @param {Drupal.contextual.StateModel} contextualModel
     *   The contextual links model that was added.
     * @param {Backbone.Collection} [contextualCollection]
     *    The collection of contextual link models.
     */
    lockNewContextualLinks: function (contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },

    /**
     * Automatically updates visibility of the view/edit mode toggle.
     */
    updateVisibility: function () {
      this.set('isVisible', this.get('contextualCount') > 0);
    }

  });

})(Drupal, Backbone);
;
/**
 * @file
 * A Backbone View that provides the aural view of the edit mode toggle.
 */

(function ($, Drupal, Backbone, _) {

  'use strict';

  Drupal.contextualToolbar.AuralView = Backbone.View.extend(/** @lends Drupal.contextualToolbar.AuralView# */{

    /**
     * Tracks whether the tabbing constraint announcement has been read once.
     *
     * @type {bool}
     */
    announcedOnce: false,

    /**
     * Renders the aural view of the edit mode toggle (screen reader support).
     *
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   Options for the view.
     */
    initialize: function (options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);

      $(document).on('keyup', _.bind(this.onKeypress, this));
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.contextualToolbar.AuralView}
     *   The current contextual toolbar aural view.
     */
    render: function () {
      // Render the state.
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));

      return this;
    },

    /**
     * Limits tabbing to the contextual links and edit mode toolbar tab.
     */
    manageTabbing: function () {
      var tabbingContext = this.model.get('tabbingContext');
      // Always release an existing tabbing context.
      if (tabbingContext) {
        tabbingContext.release();
        Drupal.announce(this.options.strings.tabbingReleased);
      }
      // Create a new tabbing context when edit mode is enabled.
      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },

    /**
     * Announces the current tabbing constraint.
     */
    announceTabbingConstraint: function () {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },

    /**
     * Responds to esc and tab key press events.
     *
     * @param {jQuery.Event} event
     *   The keypress event.
     */
    onKeypress: function (event) {
      // The first tab key press is tracked so that an annoucement about tabbing
      // constraints can be raised if edit mode is enabled when the page is
      // loaded.
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();
        // Set announce to true so that this conditional block won't run again.
        this.announcedOnce = true;
      }
      // Respond to the ESC key. Exit out of edit mode.
      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }

  });

})(jQuery, Drupal, Backbone, _);
;
/**
 * @file
 * A Backbone View that provides the visual view of the edit mode toggle.
 */

(function (Drupal, Backbone) {

  'use strict';

  Drupal.contextualToolbar.VisualView = Backbone.View.extend(/** @lends Drupal.contextualToolbar.VisualView# */{

    /**
     * Events for the Backbone view.
     *
     * @return {object}
     *   A mapping of events to be used in the view.
     */
    events: function () {
      // Prevents delay and simulated mouse events.
      var touchEndToClick = function (event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        click: function () {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },
        touchend: touchEndToClick
      };
    },

    /**
     * Renders the visual view of the edit mode toggle.
     *
     * Listens to mouse & touch and handles edit mode toggle interactions.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.contextualToolbar.VisualView}
     *   The current contextual toolbar visual view.
     */
    render: function () {
      // Render the visibility.
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));
      // Render the state.
      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));

      return this;
    },

    /**
     * Model change handler; persists the isViewing value to localStorage.
     *
     * `isViewing === true` is the default, so only stores in localStorage when
     * it's not the default value (i.e. false).
     *
     * @param {Drupal.contextualToolbar.StateModel} model
     *   A {@link Drupal.contextualToolbar.StateModel} model.
     * @param {bool} isViewing
     *   The value of the isViewing attribute in the model.
     */
    persist: function (model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      }
      else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }

  });

})(Drupal, Backbone);
;
/**
 * @file
 * Replaces the home link in toolbar with a back to site link.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;

  // Saves the last non-administrative page in the browser to be able to link
  // back to it when browsing administrative pages. If there is a destination
  // parameter there is not need to save the current path because the page is
  // loaded within an existing "workflow".
  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  /**
   * Replaces the "Home" link with "Back to site" link.
   *
   * Back to site link points to the last non-administrative page the user
   * visited within the same browser tab.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the replacement functionality to the toolbar-escape-admin element.
   */
  Drupal.behaviors.escapeAdmin = {
    attach: function () {
      var $toolbarEscape = $('[data-toolbar-escape-admin]').once('escapeAdmin');
      if ($toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $toolbarEscape.attr('href', escapeAdminPath);
        }
        else {
          $toolbarEscape.text(Drupal.t('Home'));
        }
        $toolbarEscape.closest('.toolbar-tab').removeClass('hidden');
      }
    }
  };

})(jQuery, Drupal, drupalSettings);
;
