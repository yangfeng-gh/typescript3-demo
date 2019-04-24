/*
TypeScript与ECMAScript 2015一样，任何包含顶级import或者export的文件都被当成一个模块。
相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的（因此对模块也是可见的）。
 */

// export interface StringValidator {
//     isAcceptable(s: string): boolean;
// }
//
// export const numberRegexp = /^[0-9]+$/;
//
// export class ZipCodeValidator implements StringValidator {
//     isAcceptable(s: string) {
//         return s.length === 5 && numberRegexp.test(s);
//     }
// }

// 导出原先的验证器但做了重命名
// export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";

// export * from "./StringValidator"; // exports interface StringValidator
// export * from "./LettersOnlyValidator"; // exports class LettersOnlyValidator
// export * from "./ZipCodeValidator";  // exports class ZipCodeValidator