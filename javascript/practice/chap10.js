//************************* prototypical inheritance ***************************
//************************* prototypical inheritance ***************************
//define a Shape constructor or class
function Shape () {

}

Shape.prototype = {
    common: function () {
        console.log('Im common method');
    }
}
//define a Square constructor or class
function Square (width) {
    this.width = width
}
//prototypical inheritance
Square.prototype = Object.create(Shape.prototype)

Square.prototype.draw = function () {
    console.log('Drawing');
}

var sqr = new Square(45)
var shape = new Shape()

//shape -> Shape -> Object
//sqr -> Square -> Object
//sqr -> Square -> Shape -> Object

//define a Circle constructor or class
function Circle () {
}
//prototypical inheritance
Circle.prototype = Object.create(Shape.prototype)

var circle = new Circle()

