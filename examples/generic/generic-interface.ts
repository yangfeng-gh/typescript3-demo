function identity<T>(arg: T): T {
    return arg;
}

interface GenericIdentityFn {
    <T>(arg: T): T;
}

let myIdentity3: GenericIdentityFn = identity;

interface GenericIdentityFn2<T> {
    (arg: T): T;
}

let myIdentity4: GenericIdentityFn2<number> = identity;

console.log(myIdentity3('abc'), myIdentity4(123));
