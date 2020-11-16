//************************* property descriptor ***************************
//************************* property descriptor ***************************
//************************* video 124 ***************************

var person = {
    name:'Lallu Mia'
}

Object.defineProperty(person, 'name', {
    enumerable: true,
    writable: true,
    configurable: true 
})

//************************* constructor prototype ***************************
//************************* constructor prototype ***************************

function Person (name) {
    this.name = name
}

Person.prototype.myPI = 3.1416

var p1 = new Person('Shaik Hasina')
var p2 = new Person('Kheleda Zia')

console.log(p1);
console.log(p2);

//************************* constructor prototype ***************************

var arr = []
arr.__proto__
Array.prototype.myBulitInFunc = function () {
    console.log('yeah')
}

console.log(arr);
var another = []
console.log(another);

//************************* instance vs prototype ***************************
//************************* instance vs prototype ***************************

function Square (width) {
    //those are the instance member
    this.width = width
}

//those are the prototype members
Square.prototype = {
    draw: function () {
        console.log('Draw');   
    },
    toString: function () {
        return 'My width is ' +this.width 
    }
}

var sqr1 = new Square(10)
var sqr2 = new Square(5)

console.log(sqr1.toString());

//************************* access instance member from prototype ***************************
//************************* instance vs prototype ***************************

function Square (width) {
    //those are the instance member
    this.width = width
    this.getWidth = function () {
        console.log('Width is ' +this.width);
    }
}

//those are the prototype members
Square.prototype = {
    draw: function () {
        this.getWidth()
        console.log('Draw');   
    },
    toString: function () {
        return 'My width is ' +this.width 
    }
}

var sqr1 = new Square(10)
var sqr2 = new Square(5)

//************************* iterate object and hasOwnProperty ***************************
//************************* iterate object and hasOwnProperty ***************************

console.log(sqr1.hasOwnProperty('width'));//true
console.log(sqr1.hasOwnProperty('getWidth'));//true
console.log(sqr1.hasOwnProperty('draw'));//false

//*******Example
console.log(Object.keys(sqr1));//[ 'width', 'getWidth' ] ****** it will return its own property

//*******Example
for (var i in sqr1) {
    console.log(i);
}
/*output:
width
getWidth
draw
toString
explain::: it will return instance and prototype member using for loop*/

