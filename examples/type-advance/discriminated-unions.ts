interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
interface Triangle {
  kind: 'triangle';
  a: number;
  b: number;
  c: number;
}

type Shape = Square | Rectangle | Circle | Triangle;
function assertNever(x: any): never {
  throw new Error("Unexpected object: " + x.kind);
}
function area(s: Shape) {
  switch (s.kind) {
      case "square": return s.size * s.size;
      case "rectangle": return s.height * s.width;
      case "circle": return Math.PI * s.radius ** 2;
      default: return assertNever(s); // error here if there are missing cases
  }
}

let triangle1: Triangle = {
  kind: 'triangle',
  a: 3,
  b: 4,
  c: 5
};
area(triangle1);