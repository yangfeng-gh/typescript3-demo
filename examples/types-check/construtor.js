/*
构造函数等同于类

ES2015以前，Javascript使用构造函数代替类。 编译器支持这种模式并能够将构造函数识别为ES2015的类。 属性类型推断机制和上面介绍的一致。
*/
function C() {
  this.constructorOnly = 0
  this.constructorUnknown = undefined
}
C.prototype.method = function() {
  this.constructorOnly = false // error
  this.constructorUnknown = "plunkbat" // OK, the type is string | undefined
}
