/*
属性装饰器声明在一个属性声明之前（紧靠着属性声明）。 属性装饰器不能用在声明文件中（.d.ts），或者任何外部上下文（比如 declare的类）里。

属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 成员的名字。

注意  属性描述符不会做为参数传入属性装饰器，这与TypeScript是如何初始化属性装饰器的有关。
因为目前没有办法在定义一个原型对象的成员时描述一个实例属性，并且没办法监视或修改一个属性的初始化方法。返回值也会被忽略。
因此，属性描述符只能用来监视类中是否声明了某个名字的属性。
*/

import "reflect-metadata";

const formatMetadataKey = Symbol("format");

function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

class Greeter {
  @format("Hello, %s")
  greeting: string;

  constructor(message: string) {
      this.greeting = message;
  }
  greet() {
      let formatString = getFormat(this, "greeting");
      return formatString.replace("%s", this.greeting);
  }
}
