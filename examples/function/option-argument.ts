/*
JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。
在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能。可选参数必须跟在必须参数后面
 */

function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");  // ah, just right
