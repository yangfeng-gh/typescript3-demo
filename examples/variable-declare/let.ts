/*
 1. 在块级作用内不存在变量提升
 2. 不能在一个块级作用域内重复声明变量
 */

// let声明的变量具有块级作用域，即b仅在if语句块内可用
function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    // return b;
}

// catch声明的变量也具有块级作用域
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}

// Error: 'e' doesn't exist here
// console.log(e);

