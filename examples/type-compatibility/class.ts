/*
类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。
比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内。
私有成员会影响兼容性判断。 当类的实例用来检查兼容时，如果目标类型包含一个私有成员，那么源类型必须包含来自同一个类的这个私有成员。
这允许子类赋值给父类，但是不能赋值给其它有同样类型的类
 */

class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

let a: Animal;
let s: Size;

a = s;  //OK
s = a;  //OK