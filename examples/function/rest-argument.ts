/*
剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。
 */

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);