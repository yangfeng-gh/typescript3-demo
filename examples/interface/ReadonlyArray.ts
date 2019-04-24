/*
TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，
因此可以确保数组创建后再也不能被修改
 */

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

/*
就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写：
 */
a = ro as number[];
console.log(a);

/*
最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。
做为变量使用的话用 const，若做为属性则使用readonly。
 */