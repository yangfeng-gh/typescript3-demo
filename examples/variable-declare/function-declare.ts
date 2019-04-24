type C = { a: string, b?: number }
function f({ a, b }: C): void {

}

function f2({ a, b } = { a: "", b: 0 }): void {
    console.log('a: %s, b: %d', a, b);
}
f2(); // ok, default to { a: "", b: 0 }

function f3({ a, b = 0 } = { a: "" }): void {
    // ...
}
f3({ a: "yes" }); // ok, default b = 0
f3(); // ok, default to {a: ""}, which then defaults b = 0
// f({}); // error, 'a' is required if you supply an argument
