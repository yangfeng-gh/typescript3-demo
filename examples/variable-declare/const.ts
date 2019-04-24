/*
1、const拥有与let相同的作用域规则
2、const一旦声明必须初始化
3、const声明的为变量，不可以重新赋值，常用来声明常量
4、可以给const声明的对象添加属性
 */

const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// Error
// kitty = {
//     name: "Danielle",
//     numLives: numLivesForCat
// };

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;