// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
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

const cuboid = new CuboidMaker({
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
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.