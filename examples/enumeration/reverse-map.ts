/*
除了创建一个以属性名做为对象成员的对象之外，数字枚举成员还具有了 反向映射，从枚举值到枚举名字
 */

enum Enum {
    A,
    B,
    C
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
console.log(a, nameOfA);