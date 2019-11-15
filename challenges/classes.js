// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 {
    constructor(attrs){
        this.l = attrs.l;
        this.w = attrs.w;
        this.h = attrs.h;
    }
    volume() {
        return this.l * this.w * this.h;
    }
    surfaceArea() {
        return 2 * ((this.l * this.w) + (this.l * this.h) + (this.w * this.h));
    }
}

const cuboid2 = new CuboidMaker2({
    l: 4,
    w: 5,
    h: 5
});

/*
function CuboidMaker(attrs){
    this.l = attrs.l;
    this.w = attrs.w;
    this.h = attrs.h;
}

CuboidMaker.prototype.volume = function(){
    return this.l * this.w * this.h;
}

CuboidMaker.prototype.surfaceArea = function(){
    return 2 * ((this.l * this.w) + (this.l * this.h) + (this.w * this.h));
}

const cuboid = new CuboidMaker({
    l: 4,
    w: 5,
    h: 5
});
*/

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(`Cuboid2 Volume: ${cuboid2.volume()}`); // 100
console.log(`Cuboid2 Surface Area: ${cuboid2.surfaceArea()}`); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker1 extends CuboidMaker2 {
    constructor(cubeAttrs) {
        super(cubeAttrs);
    }
}

const cube1 = new CubeMaker1({
    l: 5,
    w: 5,
    h: 5
});

console.log(`Cube 1 Volume: ${cube1.volume()}`); // 125
console.log(`Cube 1 Surface Area: ${cube1.surfaceArea()}`); // 150


// ALTERNATELY
class CubeMaker2 extends CuboidMaker2 {
    constructor(cubeAttr) {
        super(cubeAttr);
        this.side = cubeAttr.side;
    }
    cubeVolume(){
        return Math.pow(this.side, 3);
    }
    cubeSurfaceArea(){
        return 6 * (Math.pow(this.side, 2)); 
    }
}

const cube2 = new CubeMaker2({
    side: 5
});

console.log(`Cube 2 Volume: ${cube2.cubeVolume()}`); // 125
console.log(`Cube 2 Surface Area: ${cube2.cubeSurfaceArea()}`); // 150

