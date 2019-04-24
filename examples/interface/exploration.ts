/*
TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。
在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 */

function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "size of Object"};
printLabel(myObj);


interface LabelValue {
    label: string;
}

function printLabel2(labelledObj: LabelValue) {
    console.log(labelledObj.label);
}

printLabel2(myObj);