/*
函数类型的简化形式：
在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型
 */

// myAdd has the full function type
let myAdd = function(x: number, y: number): number { return x + y; };

// The parameters `x` and `y` have the type number
let myAdd2: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };