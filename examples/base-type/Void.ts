// void通常用于没有返回值的函数
function warnUser(): void {
    alert("This is my warning message");
}

// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;
