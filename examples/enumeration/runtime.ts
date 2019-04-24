/*
枚举是在运行时真正存在的对象
 */

enum E {
    X, Y, Z
}

function f(obj: { X: number }) {
    return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
let r = f(E);
console.log(r);