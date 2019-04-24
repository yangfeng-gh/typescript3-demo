type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  }
  else {
    return n();
  }
}
let n1 = getName('tom');
console.log(n1);
/*
起别名不会新建一个类型 - 它创建了一个新 名字来引用那个类型。 给原始类型起别名通常没什么用，尽管可以做为文档的一种形式使用。
*/

// 同接口一样，类型别名也可以是泛型 - 我们可以添加类型参数并且在别名声明的右侧传入：
type Container<T> = { value: T };

// 我们也可以使用类型别名来在属性里引用自己：
type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
}

// 与交叉类型一起使用，我们可以创建出一些十分稀奇古怪的类型。
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
  name: string;
}

// let people: LinkedList<Person> = {name: 'tom', next: {name: 'james'}};
// let s = people.name;
// let s2 = people.next.name;
// let s3 = people.next.next.name;
// let s4 = people.next.next.next.name;

// 然而，类型别名不能出现在声明右侧的任何地方。
// type Yikes = Array<Yikes>; // error
