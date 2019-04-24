function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
    console.log(a, b);
}

keepWholeObject({a: 'foo'});
