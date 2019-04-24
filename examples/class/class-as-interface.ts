class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let p: Point3d = {x: 1, y: 2, z: 3};
// let p2: Point3d = {x: 1}; // Type  '{x: number}' is not assignable to type Point3d