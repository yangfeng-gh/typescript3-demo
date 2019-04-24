/*
上下文类型
TypeScript类型推论也可能按照相反的方向进行。 这被叫做“按上下文归类”。
如果上下文类型表达式包含了明确的类型信息，上下文的类型被忽略
 */

window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);  //<- Error
};

window.onmousedown = function(mouseEvent: any) {
    console.log(mouseEvent.button);  //<- Now, no error is given
};