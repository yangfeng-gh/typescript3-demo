/*
限制一些对象属性只能在对象刚刚创建的时候修改其值
 */

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!