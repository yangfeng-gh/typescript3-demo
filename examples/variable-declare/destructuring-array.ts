let input: [number, number] = [1, 2];
let [first, second] = input;
console.log(first, second);


/*
解构作用于已声明的变量会更好：
 */
// swap variables
[first, second] = [second, first];
console.log(first, second);


/*
作用于函数参数：
 */
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f(input);


/*
解构赋值支持剩余变量
 */
let [one, ...rest] = [1, 2, 3, 4];
console.log(one, rest);