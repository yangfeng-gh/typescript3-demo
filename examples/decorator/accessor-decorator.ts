/*
访问器装饰器声明在一个访问器的声明之前（紧靠着访问器声明）。 访问器装饰器应用于访问器的 属性描述符并且可以用来监视，修改或替换一个访问器的定义。 访问器装饰器不能用在声明文件中（.d.ts），或者任何外部上下文（比如 declare的类）里。

访问器装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 成员的名字。
3. 成员的属性描述符。
注意  如果代码输出目标版本小于ES5，Property Descriptor将会是undefined。

如果访问器装饰器返回一个值，它会被用作方法的属性描述符。
注意  如果代码输出目标版本小于ES5返回值会被忽略。
*/

class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
  }

  @configurable(false)
  get x() { return this._x; }

  @configurable(true)
  get y() { return this._y; }
}

function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.configurable = value;
  };
}

let point = new Point(0, 0);
let proto = Object.getPrototypeOf(point)
console.log(Object.getOwnPropertyDescriptor(proto, 'x'))
console.log(Object.getOwnPropertyDescriptor(proto, 'y'))
