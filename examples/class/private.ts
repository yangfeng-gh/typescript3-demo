/*
当成员被标记成 private时，它就不能在声明它的类的外部访问
 */

class Person {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

// new Person("tom").name; // 错误: 'name' 是私有的.

class People {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends People {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let people = new People("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

people = rhino;
// People = employee; // 错误: People 与 Employee 不兼容.
