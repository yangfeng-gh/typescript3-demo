/*
类，函数和对象字面量是命名空间
*/

// .js文件里的类是命名空间。 它可以用于嵌套类，比如：
class C {
}
C.D = class {
}

// S2015之前的代码，它可以用来模拟静态方法：
function Outer() {
  this.y = 2
}
Outer.Inner = function() {
  this.yy = 2
}

// 它还可以用于创建简单的命名空间：
var ns = {}
ns.C = class {
}
ns.func = function() {
}

// 同时还支持其它的变化：
// 立即调用的函数表达式
var ns = (function (n) {
  return n || {};
})();
ns.CONST = 1

// defaulting to global
var assign = assign || function() {
  // code goes here
}
assign.extra = 1
