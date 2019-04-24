/*
如果我们要定制一个修饰器如何应用到一个声明上，我们得写一个装饰器工厂函数。
装饰器工厂就是一个简单的函数，它返回一个表达式，以供装饰器在运行时调用
*/

function color(value: string) { // 这是一个装饰器工厂
  return function (target) { //  这是装饰器
      // do something with "target" and "value"...
  }
}
