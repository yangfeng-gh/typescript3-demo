/*
如果一个属性从没在类内设置过，它们会被当成未知的。
如果类的属性只是读取用的，那么就在构造函数里用JSDoc声明它的类型。 如果它稍后会被初始化，你甚至都不需要在构造函数里给它赋值：
*/
class C {
  constructor() {
      /** @type {number | undefined} */
      this.prop = undefined;
      /** @type {number | undefined} */
      this.count;
  }
}

let c = new C();
c.prop = 0;          // OK
c.count = "string";  // Error: string is not assignable to number|undefined
