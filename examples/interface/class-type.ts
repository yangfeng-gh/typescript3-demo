interface ClockI {
    currentTime: Date;
    setTime(d: Date): void; // 在接口中描述一个方法，在类里实现它
}

class Clock implements ClockI {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

/*
当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误
因为当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。
我们应该直接操作类的静态部分。
 */
// ClockConstructor为构造函数所用
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
// ClockInterface为实例方法所用
interface ClockInterface {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour?: number, minute?: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
digital.tick();
analog.tick();