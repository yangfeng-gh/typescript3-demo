/*
函数参数是默认可选的

由于在ES2015之前无法指定可选参数，因此.js文件里所有函数参数都被当做是可选的。 使用比预期少的参数调用函数是允许的。
需要注意的一点是，使用过多的参数调用函数会得到一个错误。
*/
function bar(a, b) {
  console.log(a + " " + b);
}

bar(1);       // OK, second argument considered optional
bar(1, 2);
bar(1, 2, 3); // Error, too many arguments

// 使用JSDoc注解的函数会被从这条规则里移除。 使用JSDoc可选参数语法来表示可选性。比如：
/**
 * @param {string} [somebody] - Somebody's name.
 */
function sayHello(somebody) {
  if (!somebody) {
      somebody = 'John Doe';
  }
  console.log('Hello ' + somebody);
}

sayHello();

/*
由arguments推断出的var-args参数声明
如果一个函数的函数体内有对arguments的引用，那么这个函数会隐式地被认为具有一个var-arg参数（比如:(...arg: any[]) => any)）。
使用JSDoc的var-arg语法来指定arguments的类型。
*/
/** @param {...number} args */
function sum(/* numbers */) {
  var total = 0
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}

/*
未指定的类型参数默认为any

由于JavaScript里没有一种自然的语法来指定泛型参数，因此未指定的参数类型默认为any。
*/

/*
在extends语句中：
例如，React.Component被定义成具有两个类型参数，Props和State。
在一个.js文件里，没有一个合法的方式在extends语句里指定它们。默认地参数类型为any：
*/
import { Component } from "react";

class MyComponent extends Component {
    render() {
        this.props.b; // Allowed, since this.props is of type any
    }
}

// 使用JSDoc的@augments来明确地指定类型。例如：
/**
 * @augments {Component<{a: number}, State>}
 */
class MyComponent extends Component {
    render() {
        this.props.b; // Error: b does not exist on {a:number}
    }
}

// 使用JSDoc的@augments来明确地指定类型。例如：
/**
 * @augments {Component<{a: number}, State>}
 */
class MyComponent extends Component {
    render() {
        this.props.b; // Error: b does not exist on {a:number}
    }
}

// 在JSDoc引用中：
// JSDoc里未指定的类型参数默认为any：
/** @type{Array} */
var x = [];

x.push(1);        // OK
x.push("string"); // OK, x is of type Array<any>

/** @type{Array.<number>} */
var y = [];

y.push(1);        // OK
y.push("string"); // Error, string is not assignable to number

// 在函数调用中
// 泛型函数的调用使用arguments来推断泛型参数。有时候，这个流程不能够推断出类型，大多是因为缺少推断的源；在这种情况下，类型参数类型默认为any
var p = new Promise((resolve, reject) => { reject() });
console.log(p); // Promise<any>;
