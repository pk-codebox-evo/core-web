"format register";System.register("github:cujojs/rest@1.3.1/client",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(){return function(t,e){return e&&(t.skip=function(){return e}),t.wrap=function(e,n){return e(t,n)},t.chain=function(){return"undefined"!=typeof console&&console.log("rest.js: client.chain() is deprecated, use client.wrap() instead"),t.wrap.apply(this,arguments)},t}})}("function"==typeof define&&define.amd?define:function(t){e.exports=t(require)}),n.define=r,e.exports}),System.register("npm:process@0.10.1/browser",[],!0,function(require,t,e){function n(){if(!u){u=!0;for(var t,e=a.length;e;){t=a,a=[];for(var n=-1;++n<e;)t[n]();e=a.length}u=!1}}function r(){}var i=System.global,o=i.define;i.define=void 0;var s=e.exports={},a=[],u=!1;return s.nextTick=function(t){a.push(t),u||setTimeout(n,0)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=r,s.addListener=r,s.once=r,s.off=r,s.removeListener=r,s.removeAllListeners=r,s.emit=r,s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0},i.define=o,e.exports}),System.register("npm:when@3.7.3/lib/TimeoutError",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(){function t(e){Error.call(this),this.message=e,this.name=t.name,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t})}("function"==typeof define&&define.amd?define:function(t){e.exports=t()}),n.define=r,e.exports}),System.register("npm:when@3.7.3/lib/state",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(){function t(){return{state:"pending"}}function e(t){return{state:"rejected",reason:t}}function n(t){return{state:"fulfilled",value:t}}function r(r){var i=r.state();return 0===i?t():i>0?n(r.value):e(r.value)}return{pending:t,fulfilled:n,rejected:e,inspect:r}})}("function"==typeof define&&define.amd?define:function(t){e.exports=t()}),n.define=r,e.exports}),System.register("npm:when@3.7.3/lib/apply",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(){function t(t,n){function r(e,r,o){var s=t._defer(),a=o.length,u=new Array(a);return i({f:e,thisArg:r,args:o,params:u,i:a-1,call:n},s._handler),s}function i(e,r){if(e.i<0)return n(e.f,e.thisArg,e.params,r);var i=t._handler(e.args[e.i]);i.fold(o,e,void 0,r)}function o(t,e,n){t.params[t.i]=e,t.i-=1,i(t,n)}return arguments.length<2&&(n=e),r}function e(t,e,n,r){try{r.resolve(t.apply(e,n))}catch(i){r.reject(i)}}return t.tryCatchResolve=e,t})}("function"==typeof define&&define.amd?define:function(t){e.exports=t()}),n.define=r,e.exports}),System.register("npm:when@3.7.3/lib/decorators/flow",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(){function t(){throw new TypeError("catch predicate must be a function")}function e(t,e){return n(e)?t instanceof e:e(t)}function n(t){return t===Error||null!=t&&t.prototype instanceof Error}function r(t){return("object"==typeof t||"function"==typeof t)&&null!==t}function i(t){return t}return function(n){function o(t,n){return function(r){return e(r,n)?t.call(this,r):c(r)}}function s(t,e,n,i){var o=t.call(e);return r(o)?a(o,n,i):n(i)}function a(t,e,n){return u(t).then(function(){return e(n)})}var u=n.resolve,c=n.reject,h=n.prototype["catch"];return n.prototype.done=function(t,e){this._handler.visit(this._handler.receiver,t,e)},n.prototype["catch"]=n.prototype.otherwise=function(e){return arguments.length<2?h.call(this,e):"function"!=typeof e?this.ensure(t):h.call(this,o(arguments[1],e))},n.prototype["finally"]=n.prototype.ensure=function(t){return"function"!=typeof t?this:this.then(function(e){return s(t,this,i,e)},function(e){return s(t,this,c,e)})},n.prototype["else"]=n.prototype.orElse=function(t){return this.then(void 0,function(){return t})},n.prototype["yield"]=function(t){return this.then(function(){return t})},n.prototype.tap=function(t){return this.then(t)["yield"](this)},n}})}("function"==typeof define&&define.amd?define:function(t){e.exports=t()}),n.define=r,e.exports}),System.register("npm:when@3.7.3/lib/decorators/fold",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(){return function(t){return t.prototype.fold=function(e,n){var r=this._beget();return this._handler.fold(function(n,r,i){t._handler(n).fold(function(t,n,r){r.resolve(e.call(this,n,t))},r,this,i)},n,r._handler.receiver,r._handler),r},t}})}("function"==typeof define&&define.amd?define:function(t){e.exports=t()}),n.define=r,e.exports}),System.register("npm:when@3.7.3/lib/decorators/inspect",["npm:when@3.7.3/lib/state"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(require){var t=require("npm:when@3.7.3/lib/state").inspect;return function(e){return e.prototype.inspect=function(){return t(e._handler(this))},e}})}("function"==typeof define&&define.amd?define:function(t){e.exports=t(require)}),n.define=r,e.exports}),System.register("npm:when@3.7.3/lib/decorators/iterate",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(){return function(t){function e(t,e,r,i){return n(function(e){return[e,t(e)]},e,r,i)}function n(t,e,i,o){function s(o,s){return r(i(o)).then(function(){return n(t,e,i,s)})}return r(o).then(function(n){return r(e(n)).then(function(e){return e?n:r(t(n)).spread(s)})})}var r=t.resolve;return t.iterate=e,t.unfold=n,t}})}("function"==typeof define&&define.amd?define:function(t){e.exports=t()}),n.define=r,e.exports}),System.register("npm:when@3.7.3/lib/decorators/progress",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(){return function(t){return t.prototype.progress=function(t){return this.then(void 0,void 0,t)},t}})}("function"==typeof define&&define.amd?define:function(t){e.exports=t()}),n.define=r,e.exports}),System.register("npm:when@3.7.3/lib/decorators/with",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(){return function(t){return t.prototype["with"]=t.prototype.withThis=function(t){var e=this._beget(),n=e._handler;return n.receiver=t,this._handler.chain(n,t),e},t}})}("function"==typeof define&&define.amd?define:function(t){e.exports=t()}),n.define=r,e.exports}),System.register("npm:when@3.7.3/lib/format",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(){function t(t){var n="object"==typeof t&&null!==t&&t.stack?t.stack:e(t);return t instanceof Error?n:n+" (WARNING: non-Error used)"}function e(t){var e=String(t);return"[object Object]"===e&&"undefined"!=typeof JSON&&(e=n(t,e)),e}function n(t,e){try{return JSON.stringify(t)}catch(n){return e}}return{formatError:t,formatObject:e,tryStringify:n}})}("function"==typeof define&&define.amd?define:function(t){e.exports=t()}),n.define=r,e.exports}),System.register("npm:when@3.7.3/lib/makePromise",["github:jspm/nodelibs-process@0.1.1"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){!function(e){"use strict";e(function(){return function(e){function n(t,e){this._handler=t===w?e:r(t)}function r(t){function e(t){i.resolve(t)}function n(t){i.reject(t)}function r(t){i.notify(t)}var i=new E;try{t(e,n,r)}catch(o){n(o)}return i}function i(t){return P(t)?t:new n(w,new S(g(t)))}function o(t){return new n(w,new S(new k(t)))}function s(){return tt}function a(){return new n(w,new E)}function u(t,e){var n=new E(t.receiver,t.join().context);return new e(w,n)}function c(t){return l(z,null,t)}function h(t,e){return l($,t,e)}function l(t,e,r){function i(n,i,s){s.resolved||f(r,o,n,t(e,i,n),s)}function o(t,e,n){h[t]=e,0===--c&&n.become(new T(h))}for(var s,a="function"==typeof e?i:o,u=new E,c=r.length>>>0,h=new Array(c),l=0;l<r.length&&!u.resolved;++l)s=r[l],void 0!==s||l in r?f(r,a,l,s,u):--c;return 0===c&&u.become(new T(h)),new n(w,u)}function f(t,e,n,r,i){if(L(r)){var o=b(r),s=o.state();0===s?o.fold(e,n,void 0,i):s>0?e(n,o.value,i):(i.become(o),p(t,n+1,o))}else e(n,r,i)}function p(t,e,n){for(var r=e;r<t.length;++r)d(g(t[r]),n)}function d(t,e){if(t!==e){var n=t.state();0===n?t.visit(t,void 0,t._unreport):0>n&&t._unreport()}}function v(t){return"object"!=typeof t||null===t?o(new TypeError("non-iterable passed to race()")):0===t.length?s():1===t.length?i(t[0]):m(t)}function m(t){var e,r,i,o=new E;for(e=0;e<t.length;++e)if(r=t[e],void 0!==r||e in t){if(i=g(r),0!==i.state()){o.become(i),p(t,e+1,i);break}i.visit(o,o.resolve,o.reject)}return new n(w,o)}function g(t){return P(t)?t._handler.join():L(t)?y(t):new T(t)}function b(t){return P(t)?t._handler.join():y(t)}function y(t){try{var e=t.then;return"function"==typeof e?new C(e,t):new T(t)}catch(n){return new k(n)}}function w(){}function x(){}function E(t,e){n.createContext(this,e),this.consumers=void 0,this.receiver=t,this.handler=void 0,this.resolved=!1}function S(t){this.handler=t}function C(t,e){E.call(this),J.enqueue(new O(t,e,this))}function T(t){n.createContext(this),this.value=t}function k(t){n.createContext(this),this.id=++X,this.value=t,this.handled=!1,this.reported=!1,this._report()}function A(t,e){this.rejection=t,this.context=e}function j(t){this.rejection=t}function N(){return new k(new TypeError("Promise cycle"))}function D(t,e){this.continuation=t,this.handler=e}function _(t,e){this.handler=e,this.value=t}function O(t,e,n){this._then=t,this.thenable=e,this.resolver=n}function R(t,e,n,r,i){try{t.call(e,n,r,i)}catch(o){r(o)}}function F(t,e,n,r){this.f=t,this.z=e,this.c=n,this.to=r,this.resolver=K,this.receiver=this}function P(t){return t instanceof n}function L(t){return("object"==typeof t||"function"==typeof t)&&null!==t}function q(t,e,r,i){return"function"!=typeof t?i.become(e):(n.enterContext(e),I(t,e.value,r,i),void n.exitContext())}function W(t,e,r,i,o){return"function"!=typeof t?o.become(r):(n.enterContext(r),U(t,e,r.value,i,o),void n.exitContext())}function M(t,e,r,i,o){return"function"!=typeof t?o.notify(e):(n.enterContext(r),H(t,e,i,o),void n.exitContext())}function $(t,e,n){try{return t(e,n)}catch(r){return o(r)}}function I(t,e,n,r){try{r.become(g(t.call(n,e)))}catch(i){r.become(new k(i))}}function U(t,e,n,r,i){try{t.call(r,e,n,i)}catch(o){i.become(new k(o))}}function H(t,e,n,r){try{r.notify(t.call(n,e))}catch(i){r.notify(i)}}function B(t,e){e.prototype=Y(t.prototype),e.prototype.constructor=e}function z(t,e){return e}function Q(){}function V(){return"undefined"!=typeof t&&null!==t&&"function"==typeof t.emit?function(e,n){return"unhandledRejection"===e?t.emit(e,n.value,n):t.emit(e,n)}:"undefined"!=typeof self&&"function"==typeof CustomEvent?function(t,e,n){var r=!1;try{var i=new n("unhandledRejection");r=i instanceof n}catch(o){}return r?function(t,r){var i=new n(t,{detail:{reason:r.value,key:r},bubbles:!1,cancelable:!0});return!e.dispatchEvent(i)}:t}(Q,self,CustomEvent):Q}var J=e.scheduler,G=V(),Y=Object.create||function(t){function e(){}return e.prototype=t,new e};n.resolve=i,n.reject=o,n.never=s,n._defer=a,n._handler=g,n.prototype.then=function(t,e,n){var r=this._handler,i=r.join().state();if("function"!=typeof t&&i>0||"function"!=typeof e&&0>i)return new this.constructor(w,r);var o=this._beget(),s=o._handler;return r.chain(s,r.receiver,t,e,n),o},n.prototype["catch"]=function(t){return this.then(void 0,t)},n.prototype._beget=function(){return u(this._handler,this.constructor)},n.all=c,n.race=v,n._traverse=h,n._visitRemaining=p,w.prototype.when=w.prototype.become=w.prototype.notify=w.prototype.fail=w.prototype._unreport=w.prototype._report=Q,w.prototype._state=0,w.prototype.state=function(){return this._state},w.prototype.join=function(){for(var t=this;void 0!==t.handler;)t=t.handler;return t},w.prototype.chain=function(t,e,n,r,i){this.when({resolver:t,receiver:e,fulfilled:n,rejected:r,progress:i})},w.prototype.visit=function(t,e,n,r){this.chain(K,t,e,n,r)},w.prototype.fold=function(t,e,n,r){this.when(new F(t,e,n,r))},B(w,x),x.prototype.become=function(t){t.fail()};var K=new x;B(w,E),E.prototype._state=0,E.prototype.resolve=function(t){this.become(g(t))},E.prototype.reject=function(t){this.resolved||this.become(new k(t))},E.prototype.join=function(){if(!this.resolved)return this;for(var t=this;void 0!==t.handler;)if(t=t.handler,t===this)return this.handler=N();return t},E.prototype.run=function(){var t=this.consumers,e=this.handler;this.handler=this.handler.join(),this.consumers=void 0;for(var n=0;n<t.length;++n)e.when(t[n])},E.prototype.become=function(t){this.resolved||(this.resolved=!0,this.handler=t,void 0!==this.consumers&&J.enqueue(this),void 0!==this.context&&t._report(this.context))},E.prototype.when=function(t){this.resolved?J.enqueue(new D(t,this.handler)):void 0===this.consumers?this.consumers=[t]:this.consumers.push(t)},E.prototype.notify=function(t){this.resolved||J.enqueue(new _(t,this))},E.prototype.fail=function(t){var e="undefined"==typeof t?this.context:t;this.resolved&&this.handler.join().fail(e)},E.prototype._report=function(t){this.resolved&&this.handler.join()._report(t)},E.prototype._unreport=function(){this.resolved&&this.handler.join()._unreport()},B(w,S),S.prototype.when=function(t){J.enqueue(new D(t,this))},S.prototype._report=function(t){this.join()._report(t)},S.prototype._unreport=function(){this.join()._unreport()},B(E,C),B(w,T),T.prototype._state=1,T.prototype.fold=function(t,e,n,r){W(t,e,this,n,r)},T.prototype.when=function(t){q(t.fulfilled,this,t.receiver,t.resolver)};var X=0;B(w,k),k.prototype._state=-1,k.prototype.fold=function(t,e,n,r){r.become(this)},k.prototype.when=function(t){"function"==typeof t.rejected&&this._unreport(),q(t.rejected,this,t.receiver,t.resolver)},k.prototype._report=function(t){J.afterQueue(new A(this,t))},k.prototype._unreport=function(){this.handled||(this.handled=!0,J.afterQueue(new j(this)))},k.prototype.fail=function(t){this.reported=!0,G("unhandledRejection",this),n.onFatalRejection(this,void 0===t?this.context:t)},A.prototype.run=function(){this.rejection.handled||this.rejection.reported||(this.rejection.reported=!0,G("unhandledRejection",this.rejection)||n.onPotentiallyUnhandledRejection(this.rejection,this.context))},j.prototype.run=function(){this.rejection.reported&&(G("rejectionHandled",this.rejection)||n.onPotentiallyUnhandledRejectionHandled(this.rejection))},n.createContext=n.enterContext=n.exitContext=n.onPotentiallyUnhandledRejection=n.onPotentiallyUnhandledRejectionHandled=n.onFatalRejection=Q;var Z=new w,tt=new n(w,Z);return D.prototype.run=function(){this.handler.join().when(this.continuation)},_.prototype.run=function(){var t=this.handler.consumers;if(void 0!==t)for(var e,n=0;n<t.length;++n)e=t[n],M(e.progress,this.value,this.handler,e.receiver,e.resolver)},O.prototype.run=function(){function t(t){r.resolve(t)}function e(t){r.reject(t)}function n(t){r.notify(t)}var r=this.resolver;R(this._then,this.thenable,t,e,n)},F.prototype.fulfilled=function(t){this.f.call(this.c,this.z,t,this.to)},F.prototype.rejected=function(t){this.to.reject(t)},F.prototype.progress=function(t){this.to.notify(t)},n}})}("function"==typeof define&&define.amd?define:function(t){e.exports=t()})}(require("github:jspm/nodelibs-process@0.1.1")),n.define=r,e.exports}),System.register("npm:when@3.7.3/lib/Scheduler",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(){function t(t){this._async=t,this._running=!1,this._queue=this,this._queueLen=0,this._afterQueue={},this._afterQueueLen=0;var e=this;this.drain=function(){e._drain()}}return t.prototype.enqueue=function(t){this._queue[this._queueLen++]=t,this.run()},t.prototype.afterQueue=function(t){this._afterQueue[this._afterQueueLen++]=t,this.run()},t.prototype.run=function(){this._running||(this._running=!0,this._async(this.drain))},t.prototype._drain=function(){for(var t=0;t<this._queueLen;++t)this._queue[t].run(),this._queue[t]=void 0;for(this._queueLen=0,this._running=!1,t=0;t<this._afterQueueLen;++t)this._afterQueue[t].run(),this._afterQueue[t]=void 0;this._afterQueueLen=0},t})}("function"==typeof define&&define.amd?define:function(t){e.exports=t()}),n.define=r,e.exports}),System.register("github:cujojs/rest@1.3.1/util/mixin",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(){function t(t){var n,r,i,o;for(t||(t={}),n=1,r=arguments.length;r>n;n+=1){i=arguments[n];for(o in i)o in t&&(t[o]===i[o]||o in e&&e[o]===i[o])||(t[o]=i[o])}return t}var e={};return t})}("function"==typeof define&&define.amd?define:function(t){e.exports=t(require)}),n.define=r,e.exports}),System.register("github:cujojs/rest@1.3.1/util/normalizeHeaderName",[],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(){function t(t){return t.toLowerCase().split("-").map(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}).join("-")}return t})}("function"==typeof define&&define.amd?define:function(t){e.exports=t(require)}),n.define=r,e.exports}),System.register("github:cujojs/rest@1.3.1/util/responsePromise",["npm:when@3.7.3","github:cujojs/rest@1.3.1/util/normalizeHeaderName"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(require){function t(t,e){return t.then(function(t){return t&&t[e]},function(t){return u.reject(t&&t[e])})}function e(){return t(this,"entity")}function n(){return t(t(this,"status"),"code")}function r(){return t(this,"headers")}function i(e){return e=c(e),t(this.headers(),e)}function o(t){return t=[].concat(t),s(u.reduce(t,function(t,e){if("string"==typeof e&&(e={rel:e}),"function"!=typeof t.entity.clientFor)throw new Error("Hypermedia response expected");var n=t.entity.clientFor(e.rel);return n({params:e.params})},this))}function s(t){return t.status=n,t.headers=r,t.header=i,t.entity=e,t.follow=o,t}function a(){return s(u.apply(u,arguments))}var u=require("npm:when@3.7.3"),c=require("github:cujojs/rest@1.3.1/util/normalizeHeaderName");return a.make=s,a.reject=function(t){return s(u.reject(t))},a.promise=function(t){return s(u.promise(t))},a})}("function"==typeof define&&define.amd?define:function(t){e.exports=t(require)}),n.define=r,e.exports}),System.register("github:cujojs/rest@1.3.1/client/default",["github:cujojs/rest@1.3.1/client"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";var e;t(function(require){function t(){return r.apply(e,arguments)}var n,r,i;return n=require("github:cujojs/rest@1.3.1/client"),t.setDefaultClient=function(t){r=t},t.getDefaultClient=function(){return r},t.resetDefaultClient=function(){r=i},t.setPlatformDefaultClient=function(t){if(i)throw new Error("Unable to redefine platformDefaultClient");r=i=t},n(t)})}("function"==typeof define&&define.amd?define:function(t){e.exports=t(require)}),n.define=r,e.exports}),System.register("npm:process@0.10.1",["npm:process@0.10.1/browser"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,e.exports=require("npm:process@0.10.1/browser"),n.define=r,e.exports}),System.register("npm:when@3.7.3/lib/decorators/array",["npm:when@3.7.3/lib/state","npm:when@3.7.3/lib/apply"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(require){var t=require("npm:when@3.7.3/lib/state"),e=require("npm:when@3.7.3/lib/apply");return function(n){function r(t){function e(t){h=null,this.resolve(t)}function r(t){this.resolved||(h.push(t),0===--c&&this.reject(h))}for(var i,o,s=n._defer(),a=s._handler,u=t.length>>>0,c=u,h=[],l=0;u>l;++l)if(o=t[l],void 0!==o||l in t){if(i=n._handler(o),i.state()>0){a.become(i),n._visitRemaining(t,l,i);break}i.visit(a,e,r)}else--c;return 0===c&&a.reject(new RangeError("any(): array must not be empty")),s}function i(t,e){function r(t){this.resolved||(h.push(t),0===--p&&(l=null,this.resolve(h)))}function i(t){this.resolved||(l.push(t),0===--o&&(h=null,this.reject(l)))}var o,s,a,u=n._defer(),c=u._handler,h=[],l=[],f=t.length>>>0,p=0;for(a=0;f>a;++a)s=t[a],(void 0!==s||a in t)&&++p;for(e=Math.max(e,0),o=p-e+1,p=Math.min(e,p),e>p?c.reject(new RangeError("some(): array must contain at least "+e+" item(s), but had "+p)):0===p&&c.resolve(h),a=0;f>a;++a)s=t[a],(void 0!==s||a in t)&&n._handler(s).visit(c,r,i,c.notify);return u}function o(t,e){return n._traverse(e,t)}function s(t,e){var r=b.call(t);return n._traverse(e,r).then(function(t){return a(r,t)})}function a(t,e){for(var r=e.length,i=new Array(r),o=0,s=0;r>o;++o)e[o]&&(i[s++]=n._handler(t[o]).value);return i.length=s,i}function u(t){return v(t.map(c))}function c(e){var r=n._handler(e);return 0===r.state()?d(e).then(t.fulfilled,t.rejected):(r._unreport(),t.inspect(r))}function h(t,e){return arguments.length>2?m.call(t,f(e),arguments[2]):m.call(t,f(e))}function l(t,e){return arguments.length>2?g.call(t,f(e),arguments[2]):g.call(t,f(e))}function f(t){return function(e,n,r){return p(t,void 0,[e,n,r])}}var p=e(n),d=n.resolve,v=n.all,m=Array.prototype.reduce,g=Array.prototype.reduceRight,b=Array.prototype.slice;return n.any=r,n.some=i,n.settle=u,n.map=o,n.filter=s,n.reduce=h,n.reduceRight=l,n.prototype.spread=function(t){return this.then(v).then(function(e){return t.apply(this,e)})},n}})}("function"==typeof define&&define.amd?define:function(t){e.exports=t(require)}),n.define=r,e.exports}),System.register("npm:when@3.7.3/lib/decorators/unhandledRejection",["npm:when@3.7.3/lib/env","npm:when@3.7.3/lib/format"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(require){function t(t){throw t}function e(){}var n=require("npm:when@3.7.3/lib/env").setTimer,r=require("npm:when@3.7.3/lib/format");return function(i){function o(t){t.handled||(p.push(t),h("Potentially unhandled rejection ["+t.id+"] "+r.formatError(t.value)))}function s(t){var e=p.indexOf(t);e>=0&&(p.splice(e,1),l("Handled previous rejection ["+t.id+"] "+r.formatObject(t.value)))}function a(t,e){f.push(t,e),null===d&&(d=n(u,0))}function u(){for(d=null;f.length>0;)f.shift()(f.shift())}var c,h=e,l=e;"undefined"!=typeof console&&(c=console,h="undefined"!=typeof c.error?function(t){c.error(t)}:function(t){c.log(t)},l="undefined"!=typeof c.info?function(t){c.info(t)}:function(t){c.log(t)}),i.onPotentiallyUnhandledRejection=function(t){a(o,t)},i.onPotentiallyUnhandledRejectionHandled=function(t){a(s,t)},i.onFatalRejection=function(e){a(t,e.value)};var f=[],p=[],d=null;return i}})}("function"==typeof define&&define.amd?define:function(t){e.exports=t(require)}),n.define=r,e.exports}),System.register("npm:when@3.7.3/lib/Promise",["npm:when@3.7.3/lib/makePromise","npm:when@3.7.3/lib/Scheduler","npm:when@3.7.3/lib/env"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(require){var t=require("npm:when@3.7.3/lib/makePromise"),e=require("npm:when@3.7.3/lib/Scheduler"),n=require("npm:when@3.7.3/lib/env").asap;return t({scheduler:new e(n)})})}("function"==typeof define&&define.amd?define:function(t){e.exports=t(require)}),n.define=r,e.exports}),System.register("github:cujojs/rest@1.3.1/UrlBuilder",["github:cujojs/rest@1.3.1/util/mixin"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t,e){"use strict";var n;t(function(require){function t(t,e){var n,r,i,o;if(n=t,i={},e){for(r in e)o=new RegExp("\\{"+r+"\\}"),o.test(n)?n=n.replace(o,encodeURIComponent(e[r]),"g"):i[r]=e[r];for(r in i)n+=-1===n.indexOf("?")?"?":"&",n+=encodeURIComponent(r),null!==i[r]&&void 0!==i[r]&&(n+="=",n+=encodeURIComponent(i[r]))}return n}function r(t,e){return 0===t.indexOf(e)}function i(t,e){return this instanceof i?void(t instanceof i?(this._template=t.template,this._params=o({},this._params,e)):(this._template=(t||"").toString(),this._params=e||{})):new i(t,e)}var o,s,a,u,c;return o=require("github:cujojs/rest@1.3.1/util/mixin"),a=/([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?(\/[^?#]*)?(\?[^#]*)?(#\S*)?/i,u=/^([a-z][a-z0-9\-\+\.]*:\/\/|\/)/i,c=/([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?\//i,i.prototype={append:function(t,e){return new i(this._template+t,o({},this._params,e))},fullyQualify:function(){if(!e)return this;if(this.isFullyQualified())return this;var t=this._template;return r(t,"//")?t=s.protocol+t:r(t,"/")?t=s.origin+t:this.isAbsolute()||(t=s.origin+s.pathname.substring(0,s.pathname.lastIndexOf("/")+1)),-1===t.indexOf("/",8)&&(t+="/"),new i(t,this._params)},isAbsolute:function(){return u.test(this.build())},isFullyQualified:function(){return c.test(this.build())},isCrossOrigin:function(){if(!s)return!0;var t=this.parts();return t.protocol!==s.protocol||t.hostname!==s.hostname||t.port!==s.port},parts:function(){var t,e;return t=this.fullyQualify().build().match(a),e={href:t[0],protocol:t[1],host:t[3]||"",hostname:t[4]||"",port:t[6],pathname:t[7]||"",search:t[8]||"",hash:t[9]||""},e.origin=e.protocol+"//"+e.host,e.port=e.port||("https:"===e.protocol?"443":"http:"===e.protocol?"80":""),e},build:function(e){return t(this._template,o({},this._params,e))},toString:function(){return this.build()}},s=e?new i(e.href).parts():n,i})}("function"==typeof define&&define.amd?define:function(t){e.exports=t(require)},"undefined"!=typeof window?window.location:void 0),n.define=r,e.exports}),System.register("github:jspm/nodelibs-process@0.1.1/index",["npm:process@0.10.1"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,e.exports=System._nodeRequire?process:require("npm:process@0.10.1"),n.define=r,e.exports}),System.register("github:jspm/nodelibs-process@0.1.1",["github:jspm/nodelibs-process@0.1.1/index"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,e.exports=require("github:jspm/nodelibs-process@0.1.1/index"),n.define=r,e.exports}),System.register("npm:when@3.7.3/lib/env",["github:jspm/nodelibs-process@0.1.1"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){!function(e){"use strict";e(function(require){function e(){return"undefined"!=typeof t&&"[object process]"===Object.prototype.toString.call(t)}function n(){return"function"==typeof MutationObserver&&MutationObserver||"function"==typeof WebKitMutationObserver&&WebKitMutationObserver}function r(t){function e(){var t=n;n=void 0,t()}var n,r=document.createTextNode(""),i=new t(e);i.observe(r,{characterData:!0});var o=0;return function(t){n=t,r.data=o^=1}}var i,o="undefined"!=typeof setTimeout&&setTimeout,s=function(t,e){return setTimeout(t,e)},a=function(t){return clearTimeout(t)},u=function(t){return o(t,0)};if(e())u=function(e){return t.nextTick(e)};else if(i=n())u=r(i);else if(!o){var c=require,h=c("vertx");s=function(t,e){return h.setTimer(e,t)},a=h.cancelTimer,u=h.runOnLoop||h.runOnContext}return{setTimer:s,clearTimer:a,asap:u}})}("function"==typeof define&&define.amd?define:function(t){e.exports=t(require)})}(require("github:jspm/nodelibs-process@0.1.1")),n.define=r,e.exports}),System.register("npm:when@3.7.3/lib/decorators/timed",["npm:when@3.7.3/lib/env","npm:when@3.7.3/lib/TimeoutError"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(require){function t(t,n,r,i){return e.setTimer(function(){t(r,i,n)},n)}var e=require("npm:when@3.7.3/lib/env"),n=require("npm:when@3.7.3/lib/TimeoutError");return function(r){function i(e,n,r){t(o,e,n,r)}function o(t,e){e.resolve(t)}function s(t,e,r){var i="undefined"==typeof t?new n("timed out after "+r+"ms"):t;e.reject(i)}return r.prototype.delay=function(t){var e=this._beget();return this._handler.fold(i,t,void 0,e._handler),e},r.prototype.timeout=function(n,r){var i=this._beget(),o=i._handler,a=t(s,n,r,i._handler);return this._handler.visit(o,function(t){e.clearTimer(a),this.resolve(t)},function(t){e.clearTimer(a),this.reject(t)},o.notify),i},r}})}("function"==typeof define&&define.amd?define:function(t){e.exports=t(require)}),n.define=r,e.exports}),System.register("npm:when@3.7.3/when",["npm:when@3.7.3/lib/decorators/timed","npm:when@3.7.3/lib/decorators/array","npm:when@3.7.3/lib/decorators/flow","npm:when@3.7.3/lib/decorators/fold","npm:when@3.7.3/lib/decorators/inspect","npm:when@3.7.3/lib/decorators/iterate","npm:when@3.7.3/lib/decorators/progress","npm:when@3.7.3/lib/decorators/with","npm:when@3.7.3/lib/decorators/unhandledRejection","npm:when@3.7.3/lib/TimeoutError","npm:when@3.7.3/lib/Promise","npm:when@3.7.3/lib/apply"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(require){function t(t,e,n,r){var i=E.resolve(t);return arguments.length<2?i:i.then(e,n,r)}function e(t){return new E(t)}function n(t){return function(){for(var e=0,n=arguments.length,r=new Array(n);n>e;++e)r[e]=arguments[e];return S(t,this,r)}}function r(t){for(var e=0,n=arguments.length-1,r=new Array(n);n>e;++e)r[e]=arguments[e+1];return S(t,this,r)}function i(){return new o}function o(){function t(t){r._handler.resolve(t)}function e(t){r._handler.reject(t)}function n(t){r._handler.notify(t)}var r=E._defer();this.promise=r,this.resolve=t,this.reject=e,this.notify=n,this.resolver={resolve:t,reject:e,notify:n}}function s(t){return t&&"function"==typeof t.then}function a(){return E.all(arguments)}function u(e){return t(e,E.all)}function c(e){return t(e,E.settle)}function h(e,n){return t(e,function(t){return E.map(t,n)})}function l(e,n){return t(e,function(t){return E.filter(t,n)})}var f=require("npm:when@3.7.3/lib/decorators/timed"),p=require("npm:when@3.7.3/lib/decorators/array"),d=require("npm:when@3.7.3/lib/decorators/flow"),v=require("npm:when@3.7.3/lib/decorators/fold"),m=require("npm:when@3.7.3/lib/decorators/inspect"),g=require("npm:when@3.7.3/lib/decorators/iterate"),b=require("npm:when@3.7.3/lib/decorators/progress"),y=require("npm:when@3.7.3/lib/decorators/with"),w=require("npm:when@3.7.3/lib/decorators/unhandledRejection"),x=require("npm:when@3.7.3/lib/TimeoutError"),E=[p,d,v,g,b,m,y,f,w].reduce(function(t,e){return e(t)},require("npm:when@3.7.3/lib/Promise")),S=require("npm:when@3.7.3/lib/apply")(E);return t.promise=e,t.resolve=E.resolve,t.reject=E.reject,t.lift=n,t["try"]=r,t.attempt=r,t.iterate=E.iterate,t.unfold=E.unfold,t.join=a,t.all=u,t.settle=c,t.any=n(E.any),t.some=n(E.some),t.race=n(E.race),t.map=h,t.filter=l,t.reduce=n(E.reduce),t.reduceRight=n(E.reduceRight),t.isPromiseLike=s,t.Promise=E,t.defer=i,t.TimeoutError=x,t})}("function"==typeof define&&define.amd?define:function(t){e.exports=t(require)}),n.define=r,e.exports}),System.register("npm:when@3.7.3",["npm:when@3.7.3/when"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,e.exports=require("npm:when@3.7.3/when"),n.define=r,e.exports}),System.register("github:cujojs/rest@1.3.1/client/xhr",["npm:when@3.7.3","github:cujojs/rest@1.3.1/UrlBuilder","github:cujojs/rest@1.3.1/util/normalizeHeaderName","github:cujojs/rest@1.3.1/util/responsePromise","github:cujojs/rest@1.3.1/client"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t,e){"use strict";t(function(require){function t(t){var e={};return t?(t.trim().split(u).forEach(function(t){var n,r,i;n=t.indexOf(":"),r=o(t.substring(0,n).trim()),i=t.substring(n+1).trim(),e[r]?Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]:e[r]=i}),e):e}function n(t,e){return Object.keys(e||{}).forEach(function(n){
if(e.hasOwnProperty(n)&&n in t)try{t[n]=e[n]}catch(r){}}),t}var r,i,o,s,a,u;return r=require("npm:when@3.7.3"),i=require("github:cujojs/rest@1.3.1/UrlBuilder"),o=require("github:cujojs/rest@1.3.1/util/normalizeHeaderName"),s=require("github:cujojs/rest@1.3.1/util/responsePromise"),a=require("github:cujojs/rest@1.3.1/client"),u=/[\r|\n]+/,a(function(r){return s.promise(function(o,s){var a,u,c,h,l,f,p,d;if(r="string"==typeof r?{path:r}:r||{},p={request:r},r.canceled)return p.error="precanceled",void s(p);if(d=r.engine||e.XMLHttpRequest,!d)return void s({request:r,error:"xhr-not-available"});l=r.entity,r.method=r.method||(l?"POST":"GET"),u=r.method,c=new i(r.path||"",r.params).build();try{a=p.raw=new d,n(a,r.mixin),a.open(u,c,!0),n(a,r.mixin),h=r.headers;for(f in h)("Content-Type"!==f||"multipart/form-data"!==h[f])&&a.setRequestHeader(f,h[f]);r.canceled=!1,r.cancel=function(){r.canceled=!0,a.abort(),s(p)},a.onreadystatechange=function(){r.canceled||a.readyState===(d.DONE||4)&&(p.status={code:a.status,text:a.statusText},p.headers=t(a.getAllResponseHeaders()),p.entity=a.responseText,p.status.code>0?o(p):setTimeout(function(){o(p)},0))};try{a.onerror=function(){p.error="loaderror",s(p)}}catch(v){}a.send(l)}catch(v){p.error="loaderror",s(p)}})})})}("function"==typeof define&&define.amd?define:function(t){e.exports=t(require)},"undefined"!=typeof window?window:void 0),n.define=r,e.exports}),System.register("github:cujojs/rest@1.3.1/browser",["github:cujojs/rest@1.3.1/client/default","github:cujojs/rest@1.3.1/client/xhr"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,function(t){"use strict";t(function(require){var t=require("github:cujojs/rest@1.3.1/client/default"),e=require("github:cujojs/rest@1.3.1/client/xhr");return t.setPlatformDefaultClient(e),t})}("function"==typeof define&&define.amd?define:function(t){e.exports=t(require)}),n.define=r,e.exports}),System.register("github:cujojs/rest@1.3.1",["github:cujojs/rest@1.3.1/browser"],!0,function(require,t,e){var n=System.global,r=n.define;return n.define=void 0,e.exports=require("github:cujojs/rest@1.3.1/browser"),n.define=r,e.exports});