
let { a: newName1, b: newName2 } = {
    a: "foo",
    b: 10
}; // a: newName1 读做 "a 作为 newName1"
console.log(newName1, newName2);

// 令人困惑的是，这里的冒号不是指示类型的。 如果你想指定它的类型， 仍然需要在其后写上完整的模式。
let {m, n}: {m: string, n:number} = {
    m: "bar",
    n: 100
};
console.log(m, n);
