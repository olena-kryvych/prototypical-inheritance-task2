"use strict"

function Square(side) {
    this._side = 0;
    this.side(side);
}

Square.prototype.side = function (side) {
    if (side === undefined) return this._side;
    if (typeof side === "number") this._side = side;
};

Square.prototype.getP = function () {
    return this._side * 4;
};

function Cube(side) {
    Square.call(this, side);
}
Cube.prototype = Object.create(Square.prototype);
Cube.prototype.constructor = Cube;
Cube.prototype.getP = function () {
    return this._side * 12;
}

var cube1 = new Cube(5);
console.log("version 1: " + cube1.getP());

Cube.prototype.getP = function () {
    return 3 * Square.prototype.getP.call(this);
}

var cube2 = new Cube(5);
console.log("version 2: " + cube2.getP());