
// // ****************************** ES6 class ******************************
// // ****************************** ES6 class ******************************

// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }
    
//     name = 'Hasibur'

//     draw() {
//         console.log('Drawing...');
//     }

//     print() {
//         console.log(this.name);
//     }
// }

// let rect = new Rectangle(44, 55)
// console.log(rect);//Rectangle {name: "Hasibur", width: 44, height: 55}
// console.log(typeof Rectangle);//function 
// console.log(rect.name);//Hasibur

// /*output:
// Rectangle {name: "Hasibur", width: 44, height: 55}
// height: 55
// name: "Hasibur"
// width: 44
// __proto__:
// constructor: class Rectangle
// draw: ƒ draw()
// __proto__: Object

// */
// //******** what if ,if we want method in the instance section not inside the prototype  */


// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }
    
//     name = 'Hasibur'
//     //this function is inside the instance
//     test = function () {

//     }

//     //those function are inside the prototype area 
//     draw() {
//         console.log('Drawing...');
//     }

//     print() {
//         console.log(this.name);
//     }
// }

// let rect1 = new Rectangle(4, 5)
// console.log(rect1);//Rectangle {name: "Hasibur", width: 44, height: 55}
// /*output:

// Rectangle {name: "Hasibur", width: 4, height: 5, test: ƒ}
// height: 5
// name: "Hasibur"
// test: ƒ ()
// width: 4
// __proto__:
// constructor: class Rectangle
// draw: ƒ draw()
// print: ƒ print()
// __proto__: Object
// */

 
// // ****************************** private data with Symbol ******************************
// // ****************************** private data with Symbol ******************************

// const _radius = Symbol()
// const _name = Symbol()
// const _draw = Symbol()

// class Circle {
//     constructor(radius, name) {
//         this[_radius] = radius
//         this[_name] = name
//     }

//     [_draw] () {
//         console.log('Drawing...');
//     }
// } 

// let c1 = new Circle (21, 'CRED')

// console.log(c1);
// /*output:
// Circle {Symbol(): 21, Symbol(): "CRED"}
// Symbol(): 21
// Symbol(): "CRED"
// __proto__:
// constructor: class Circle
// Symbol(): ƒ [_draw]()
// __proto__: Object
// */

// console.log(c1._draw);//undefined
// // ****************************** private data with Weak map ******************************
// // ****************************** private data with weak map ******************************

// const _radius = new WeakMap()
// const _name = new WeakMap()
// const _resize = new WeakMap()

// class Circle {
//     constructor(radius, name) {
//         this.size = 100
//         _radius.set(this, radius)
//         _name.set(this, name)

//         _resize.set(this, () => {
//             console.log(this.size);
//         })
//     }

//     draw () {
//         console.log('Drawing...');
//         console.log(_radius.get(this), _name.get(this));
//         _resize.get(this)()
//     }
// } 

// let c1 = new Circle (21, 'CRED')

// c1.draw();
// /*output:
// Drawing...
// 21 "CRED"
// 100
// */

// // ****************************** getter setter ******************************
// // ****************************** getter setter ******************************


// const _radius = new WeakMap()
// const _name = new WeakMap()
// const _resize = new WeakMap()

// class Circle {
//     constructor(radius, name, size) {
//         this.size = size
//         _radius.set(this, radius)
//         _name.set(this, name)

//         _resize.set(this,() => {
//             console.log(this.size);
//         })
//     }

//     get radius() {
//         return _radius.get(this)
//     }

//     set radius(value) {
//         _radius.set(this, value)
//     }

//     draw () {
//         console.log('Drawing...');
//         console.log(_radius.get(this), _name.get(this));
//         _resize.get(this)()
//     }
// } 

// let c1 = new Circle (21, 'CRED', 99)

// c1.draw();
// /*output:
// Drawing...
// 21 "CRED"
// 100
// */
// console.log(c1.radius);//21
// c1.radius = 210
// c1.draw()
// /*output:
// Drawing...
// 210 "CRED"
// 100
// */
// console.log(c1.size); 

// // ****************************** inheritance ******************************
// // ****************************** inheritance ************************************

// class Shape {
//     constructor(color) {
//         this.color = color
//     }
//     draw(){
//         console.log(`Drawing...`);
//     }
// }

// class Rectangle extends Shape {
//     constructor(color, width, height) {
//         super(color)
//         this.width = width
//         this.height = height
//     }

//     calculate () {
//         return this.width * this.height
//     }
// }

// let rect = new Rectangle(`green`, 12, 12)
// console.log(rect);//Rectangle {color: "green", width: 12, height: 12}
// rect.draw()//Drawing...

// ****************************** Method Overriding ******************************
// ****************************** Method Overriding ************************************

class Shape {
    constructor(color) {
        this.color = color
    }
    draw(){
        console.log(`Drawing...`);
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color)
        this.width = width
        this.height = height
    }
    // Method Overriding 
    draw() {
        console.log(`Drawing a Rectangle...`);
    }

    calculate () {
        return this.width * this.height
    }
}

let rect = new Rectangle(`green`, 12, 12)
rect.draw()//Drawing a Rectangle...
