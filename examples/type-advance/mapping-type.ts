/*
TypeScript提供了从旧类型中创建新类型的一种方式 — 映射类型。 在映射类型里，新类型以相同的形式去转换旧类型里每个属性。 例如，你可以令每个属性成为 readonly类型或可选的。
*/

// 下面是一些例子：
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
}
type Partial<T> = {
  [P in keyof T]?: T[P];
}
// 像下面这样使用：
type PersonPartial = Partial<Person>;
type ReadonlyPerson = Readonly<Person>;

// 下面来看看最简单的映射类型和它的组成部分：
type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };

/*
它的语法与索引签名的语法类型，内部使用了 for .. in。 具有三个部分：

1.类型变量 K，它会依次绑定到每个属性。
2.字符串字面量联合的 Keys，它包含了要迭代的属性名的集合。
3.属性的结果类型。
*/

/*
上例中，Keys是硬编码的的属性名列表并且属性类型永远是 boolean，因此这个映射类型等同于：
type Flags = {
  option1: boolean;
  option2: boolean;
}
*/

// 在真正的应用里，可能不同于上面的 Readonly或 Partial。 它们会基于一些已存在的类型，且按照一定的方式转换字段。
// 这就是 keyof和索引访问类型要做的事情：

type NullablePerson = { [P in keyof Person]: Person[P] | null }
type PartialPerson = { [P in keyof Person]?: Person[P] }

// 但它更有用的地方是可以有一些通用版本。
type Nullable<T> = { [P in keyof T]: T[P] | null }
type Partial<T> = { [P in keyof T]?: T[P] }
