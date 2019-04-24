/*
索引类型（Index types）
使用索引类型，编译器就能够检查使用了动态属性名的代码。 例如，一个常见的JavaScript模式是从对象中选取属性的子集。

function pluck(o, names) {
  return names.map(n => o[n]);
}

*/

// 下面是如何在TypeScript里使用此函数，通过 索引类型查询和 索引访问操作符：
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}
let person: Person = {
    name: 'Jarid',
    age: 35
};
let strings: string[] = pluck(person, ['name']); // ok, string[]
consol

/*
索引类型和字符串索引签名
*/
// keyof和 T[K]与字符串索引签名进行交互。 如果你有一个带有字符串索引签名的类型，那么 keyof T会是 string。
// 并且 T[string]为索引签名的类型：
interface Map<T> {
  [key: string]: T;
}
let keys: keyof Map<number>; // string
let value: Map<number>['foo']; // number