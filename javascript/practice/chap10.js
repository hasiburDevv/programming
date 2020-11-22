//************************* prototypical inheritance ***************************
//************************* prototypical inheritance ***************************
//define a Shape constructor or class
//here Shape is a Parent class
function Shape (color) {
    this.color = color
}

Shape.prototype.common = function () {
    console.log('Im common method');
}

//define a Square constructor or class
function Square (width, color) {
    //Calling Super with Call method
    //which is use for inherit parent class property  
    Shape.call(this, color)
    this.width = width
}
//prototypical inheritance
Square.prototype = Object.create(Shape.prototype)
//reset constructor after inheritance 
Square.prototype.constructor = Square

Square.prototype.draw = function () {
    console.log('Drawing');
}

var sqr = new Square(45, 'green')
var shape = new Shape(1)

//shape -> Shape -> Object
//sqr -> Square -> Object
//sqr -> Square -> Shape -> Object

//define a Circle constructor or class
function Circle (radius, color) {
    Shape.call(this, color)
    this.radius = radius
}
//prototypical inheritance
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

var circle = new Circle(45, 'red')

//************************* Creating Extends Function ***************************
//************************* Creating Extends Function ***************************

function extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}
function Shape (color) {
    this.color = color
}

Shape.prototype.common = function () {
    console.log('Im common method');
}

function Square (width, color) { 
    Shape.call(this, color)
    this.width = width
}

extend(Shape, Square)

Square.prototype.draw = function () {
    console.log('Drawing');
}

var sqr = new Square(45, 'green')
var shape = new Shape('purple')
function Circle (radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

extend(Shape, Circle)

//************************* Method Overriding ***************************
//************************* Method Overriding ***************************

Circle.prototype.common = function () {
    Shape.prototype.common.call(this)
    console.log('I am calling from Circle and i have Overridden');
}
var circle = new Circle(45, 'red')

//************************* polymorphism ***************************
//************************* polymorphism ***************************


function extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}
function Shape (color) {
    this.color = color
}

Shape.prototype.common = function () {
    console.log('Im common method');
}

function Square (width, color) { 
    Shape.call(this, color)
    this.width = width
}

extend(Shape, Square)

Square.prototype.common = function () {
    console.log('I am calling from Square and i have Overridden');
}

Square.prototype.draw = function () {
    console.log('Drawing');
}

var sqr = new Square(45, 'green')
var shape = new Shape('purple')
function Circle (radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

extend(Shape, Circle)

Circle.prototype.common = function () {
    Shape.prototype.common.call(this)
    console.log('I am calling from Circle and i have Overridden');
}
var circle = new Circle(45, 'red')
/*output::::::::

sqr.common()
chap10.js:115 I am calling from Square and i have Overridden
undefined
circle.common()
chap10.js:104 Im common method
chap10.js:133 I am calling from Circle and i have Overridden
undefined
shape.common()
chap10.js:104 Im common method
undefined
*/

var oopArr = [sqr, circle, shape]

for (var i of oopArr){
    i.common()
}//of loop return values instead of key 

// find parents class 
circle instanceof Circle//true
circle instanceof Square//false
circle instanceof Shape//true

//************************* inheritance and composition mixing ***************************
//************************* inheritance and composition mixing ***************************

