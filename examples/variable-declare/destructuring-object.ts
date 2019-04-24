let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b, c } = o;
console.log(a, b, c);

// 可以使用没有声明的赋值，但是编译时会有警告
// 我们需要用括号将它括起来，因为Javascript通常会将以 { 起始的语句解析为一个块。
// ({ m, n } = { m: "baz", n: 101 });
// console.log(a, b);

// 支持剩余变量
let { x, ...passthrough} = {
    x: "foo",
    y: 12,
    z: "bar"
};
let total = passthrough.y + passthrough.z.length;
console.log(x, total);