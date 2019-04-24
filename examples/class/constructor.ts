class Greeter {
    static standardGreeting = "Hello, origin";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter; // typeof Greeter表示取Greeter类的类型
greeterMaker.standardGreeting = "Hello, modified!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());