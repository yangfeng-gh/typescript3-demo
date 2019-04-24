/*
存在一种特殊的非计算的常量枚举成员的子集：字面量枚举成员。
字面量枚举成员是指不带有初始值的常量枚举成员，或者是值被初始化为
1.任何字符串字面量（例如： "foo"， "bar"， "baz"）
2.任何数字字面量（例如： 1, 100）
3.应用了一元 -符号的数字字面量（例如： -1, -100）
 */

enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

// let c: Circle = {
//     kind: ShapeKind.Square,
//     //    ~~~~~~~~~~~~~~~~ Error!
//     radius: 100,
// };
