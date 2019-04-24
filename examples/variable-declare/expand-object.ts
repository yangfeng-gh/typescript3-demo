let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
console.log(search); // { food: 'rich', price: '$$', ambiance: 'noisy' }
/*
从左至右处理，后边的属性会覆盖前边的同名属性
 */

/*
当你展开一个对象实例时，你会丢失其方法
 */
class C {
    p = 12;
    m() {
    }
}
let c = new C();
let clone = { ...c };
console.log(clone.p); // ok
// clone.m(); // error!
