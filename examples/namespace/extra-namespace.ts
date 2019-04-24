/*
流行的程序库D3在全局对象d3里定义它的功能。 因为这个库通过一个 <script>标签加载（不是通过模块加载器），它的声明文件使用内部模块来定义它的类型。
为了让TypeScript编译器识别它的类型，我们使用外部命名空间声明。
 */
declare namespace D3 {
    export interface Selectors {
        select: {
            (selector: string): Selection;
            (element: EventTarget): Selection;
        };
    }

    export interface Event {
        x: number;
        y: number;
    }

    export interface Base extends Selectors {
        event: Event;
    }
}

declare var d3: D3.Base;declare namespace D3 {
    export interface Selectors {
        select: {
            (selector: string): Selection;
            (element: EventTarget): Selection;
        };
    }

    export interface Event {
        x: number;
        y: number;
    }

    export interface Base extends Selectors {
        event: Event;
    }
}

declare var d3: D3.Base;