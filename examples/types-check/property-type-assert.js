/*
属性的推断来自于类内的赋值语句

ES2015没提供声明类属性的方法。属性是动态赋值的，就像对象字面量一样。
在.js文件里，编译器从类内部的属性赋值语句来推断属性类型。
属性的类型是在构造函数里赋的值的类型，除非它没在构造函数里定义或者在构造函数里是undefined或null。
若是这种情况，类型将会是所有赋的值的类型的联合类型。
在构造函数里定义的属性会被认为是一直存在的，然而那些在方法，存取器里定义的属性被当成可选的。
*/

class C {
  constructor() {
      this.constructorOnly = 0
      this.constructorUnknown = undefined
  }
  method() {
      this.constructorOnly = false // error, constructorOnly is a number
      this.constructorUnknown = "plunkbat" // ok, constructorUnknown is string | undefined
      this.methodOnly = 'ok'  // ok, but y could also be undefined
  }
  method2() {
      this.methodOnly = true  // also, ok, y's type is string | boolean | undefined
  }
}

