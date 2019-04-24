/*
支持CommonJS模块

在.js文件里，TypeScript能识别出CommonJS模块。 对exports和module.exports的赋值被识别为导出声明。 相似地，require函数调用被识别为模块导入。例如：
*/
// same as `import module "fs"`
const fs = require("fs");

// same as `export function readFile`
module.exports.readFile = function(f) {
  return fs.readFileSync(f);
}
// 对JavaScript文件里模块语法的支持比在TypeScript里宽泛多了。 大部分的赋值和声明方式都是允许的。