/*
函数类型完整形式：
函数类型包含两部分：参数类型和返回值类型。
 */
function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function(x: number, y: number): number {
  return x + y;
};

let myAdd2: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
// 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。 这个名字只是为了增加可读性。
// 我们也可以这么写:
let myAdd3: (baseValue: number, increment: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
// 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确
// 第二部分是返回值类型。 对于返回值，我们在函数和返回值类型之前使用( =>)符号，使之清晰明了。
// 如之前提到的，返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。
