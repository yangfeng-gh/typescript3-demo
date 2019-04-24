function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isString(x: any): x is string {
  return typeof x === "string";
}

function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
      return Array(padding + 1).join(" ") + value;
  }
  if (isString(padding)) {
      return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
/*
然而，必须要定义一个函数来判断类型是否是原始类型，这太痛苦了。 幸运的是，现在我们不必将 typeof x === "number"抽象成一个函数，因为TypeScript可以将它识别为一个类型保护。 也就是说我们可以直接在代码里检查类型了
*/
function padLeft2(value: string, padding: string | number) {
  if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
      return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

let indentedString = padLeft2("Hello world", 2);
console.log(indentedString) //  Hello world

// indentedString = padLeft("Hello world", true); // errors during compilation