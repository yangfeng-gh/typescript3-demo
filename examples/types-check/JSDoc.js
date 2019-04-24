/*
用JSDoc类型表示类型信息

.js文件里，类型可以和在.ts文件里一样被推断出来。
同样地，当类型不能被推断时，它们可以通过JSDoc来指定，就好比在.ts文件里那样。
如同TypeScript，--noImplicitAny会在编译器无法推断类型的位置报错。
*/

// JSDoc注解修饰的声明会被设置为这个声明的类型
/** @type {number} */
var x;

x = 0;      // OK
x = false;  // Error: boolean is not assignable to number
