enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
interface MouseEvent extends Event { h: number; v: number }
interface KeyEvent extends Event { keyCode: number }

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
}

// Unsound, but useful and common
// 非稳健方案，但很有用并且常用
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.h + ',' + e.v));

// Undesirable alternatives in presence of soundness
// 不受欢迎的稳健替代方案
listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).h + ',' + (<MouseEvent>e).v));
listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.h + ',' + e.v)));

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
// listenEvent(EventType.Mouse, (e: number) => console.log(e));