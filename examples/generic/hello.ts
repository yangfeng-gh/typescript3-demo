/*
泛型的作用：使返回值的类型与传入参数的类型是相同的
 */

function hello<T>(arg: T): T {
    return arg;
}

/**
 * 泛型用法一：传入所有的参数，包括类型参数
 */
let output = hello<string>("myString");  // type of output will be 'string'

/**
 * 泛型用法二：利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
 */
let output2 = hello("myString");  // type of output will be 'string'
