interface Named2 {
    name: string;
}

let m: Named;
// y's inferred type is { name: string; location: string; }
let n = { name: 'Alice', location: 'Seattle' };
m = n;