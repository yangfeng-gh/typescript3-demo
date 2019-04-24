/*
null，undefined，和空数组的类型是any或any[]

任何用null，undefined初始化的变量，参数或属性，它们的类型是any，就算是在严格null检查模式下。
任何用[]初始化的变量，参数或属性，它们的类型是any[]，就算是在严格null检查模式下。
*/

function Foo(i = null) {
  if (!i) i = 1;
  var j = undefined;
  j = 2;
  this.l = [];
}
var foo = new Foo();
foo.l.push(foo.i);
foo.l.push("end");

// 唯一的例外:有多个初始化器的属性。
/** @type {{[index: number]: string | number}} */
var obj = [];
obj.push(1);
