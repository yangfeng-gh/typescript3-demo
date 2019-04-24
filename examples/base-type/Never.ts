// never是any的子类型，可以赋值any类型的变量，但never类型没有子类型，只可以赋值给never类型。

// never应用场景一: 总是会抛出异常的函数返回值
function error(message: string): never {
  throw new Error(message);
}

// never应用场景二：推断的返回值
function fail() {
  return error("Something failed");
}

// never应用场景三：死循环
function infiniteLoop(): never {
  while (true) {

  }
}