/*
带默认值的参数不需要放在必须参数的后面。
 */
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let r1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let r2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
// let r3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let r4 = buildName("Bob", "Adams");         // ah, just right