!function u(i,f,c){function l(t,e){if(!f[t]){if(!i[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(a)return a(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=f[t]={exports:{}};i[t][0].call(o.exports,function(e){var r=i[t][1][e];return l(r||e)},o,o.exports,u,i,f,c)}return f[t].exports}for(var a="function"==typeof require&&require,e=0;e<c.length;e++)l(c[e]);return l}({1:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sayHello=function(e){return"Hello from "+e}},{}],2:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o,u=e("./greet");n="greeting",o="TypeScript!",document.getElementById(n).innerText=u.sayHello(o)},{"./greet":1}]},{},[2]);
//# sourceMappingURL=bundle.js.map