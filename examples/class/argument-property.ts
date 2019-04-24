class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor (theName: string) {
      this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.

/*
上面的例子中，我们不得不定义一个受保护的成员name和一个构造函数theName参数，并且立刻把name赋值为theName
使用private，protected, public等访问限定符限定一个参数属性，可以更简单明了地声明并初始化一个私有成员；
 */
class Octopus2 {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {
  }
}
