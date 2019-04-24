function copy < T extends U, U > (source: U, target: T): T {
  for (let prop in source) {
    target[prop] = source[prop];
  }
  return target;
}

copy({ a: 1, b: 2 }, { a: 2, b: 3, c: 4 }); // 正确的实际参数
// copy({ a: 1, b: 2 }, { q: 2, c: 4 }); // 错误的实际参数
