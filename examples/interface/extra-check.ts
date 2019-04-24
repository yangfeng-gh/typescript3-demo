interface SquareConfig {
    color?: string;
    width?: number;
}

/*
最佳的方式是能够添加一个字符串索引签名，前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性。
 */
interface SquareConfig2 {
    color?: string;
    width?: number;
    [propName: string]: any; // 可以带有任意数量的其它属性
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

// let mySquare2 = createSquare({ colour: "red", width: 100 }); // error: 'colour' not expected in type 'SquareConfig'

/*
绕开这些检查非常简单。 最简便的方法是使用类型断言：
 */
let mySquare3 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

/*
还有最后一种跳过这些检查的方式，这可能会让你感到惊讶，它就是将这个对象赋值给一个另一个变量
因为 squareOptions不会经过额外属性检查，所以编译器不会报错。
 */
let squareOptions = { colour: "red", width: 100 };
let mySquare4 = createSquare(squareOptions);