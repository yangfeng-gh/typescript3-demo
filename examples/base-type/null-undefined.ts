// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// 默认情况下null和undefined是所有类型的子类型。就是说你可以把 null和undefined赋值给number类型的变量。
// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
let num: number;
num = u; // --strictNullChecks, Type 'undefined' is not assignable to type 'number'