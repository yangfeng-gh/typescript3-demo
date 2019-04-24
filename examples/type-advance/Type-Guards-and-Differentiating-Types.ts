interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

class Magpie implements Bird {
  fly() {
    console.log('Magpie fly')
  }
  layEggs() {
    console.log('Magpie layEggs')
  }
}

function getSmallPet(): Fish | Bird {
  return new Magpie()
}

let pet = getSmallPet();
pet.layEggs(); // okay, 联合类型只能确定包含共有成员
// pet.swim(); // errors，不能确定是否包含各个类型特有的成员
/*
这里的联合类型可能有点复杂，但是你很容易就习惯了。 如果一个值的类型是 A | B，我们能够 确定的是它包含了 A 和 B中共有的成员。 这个例子里， Bird具有一个 fly成员。 我们不能确定一个 Bird | Fish类型的变量是否有 fly方法。 如果变量在运行时是 Fish类型，那么调用 pet.fly()就出错了。
*/

/*
// 每一个成员访问都会报错
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
*/

// 为了让这段代码工作，我们要使用类型断言：
if ((<Fish>pet).swim) {
  (<Fish>pet).swim();
}
else {
  (<Bird>pet).fly();
}
