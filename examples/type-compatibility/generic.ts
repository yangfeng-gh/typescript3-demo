/*
对于没指定泛型类型的泛型参数时，会把所有泛型参数当成any比较。
 */

interface Empty<T> {
    // data: T; // error, x and y are not compatible
}
let x: Empty<number>;
let y: Empty<string>;

x = y;  // okay, y matches structure of x