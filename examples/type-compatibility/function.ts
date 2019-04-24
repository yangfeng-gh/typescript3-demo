let foo = (a: number) => 0;
let bar = (b: number, s: string) => 0;

bar = foo; // OK
// foo = bar; // Error