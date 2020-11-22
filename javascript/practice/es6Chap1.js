//****************************** template string ******************************
//****************************** template string ******************************

var s = `    you can write 
string whatever you 
want`

console.log(s);

console.log(s.trim());

var age = 23
var name = `Hasibur`

console.log('My name is ' +name+ ' and I am ' +age+ ' years old');
console.log(`My name is ${name} and I am ${age} years old. I am ${age < 18 ? 'not ' : ''}adult`);

console.log(name.padStart(15, '*'));
console.log(name.padEnd(15, '*'));
console.log('S'.repeat(10));

//****************************** Let vs Const vs var ******************************
//****************************** Let vs Const vs var ******************************

let a = 10
a = 11
console.log(a);

//*example**example**example**example**example*
if(true){    
    let value = 10
}

console.log(value);//Uncaught ReferenceError: value is not defined

//*example**example**example**example
for (let i = 0; i<5; i++) {

}
console.log(i);//Uncaught ReferenceError: i is not defined

//****************************** Arrow function ******************************
//****************************** Arrow function ******************************

//traditional way of declaring function
function add (a, b) {
    return a + b
}

let sum = function (m, n) {
    return m + n
}
console.log(sum(2,1));

//using arrow function
let addition = (x, y) => {
    return x + y
}

console.log(addition(2, 4));6

//another example
let sqr = x => x + x
console.log(sqr(2));//4

//****************************** Arrow function and this ******************************
//****************************** Arrow function and this ******************************

let obj = {
    name: `Hasibur`,
    show: function() {
        console.log(this.name);//
        setTimeout(function () {
            console.log(this);// it refers ->  Window {window: Window, self: Window, document: document, name: "", location: Location, …}
            console.log(`Hello, ${this.name}`);//Hello
        },1000)
    }
}
obj.show()

//***************solution: 1

let obj = {
    name: `Hasibur`,
    show: function() {
        let self = this
        setTimeout(function () {
            console.log(`Hello, ${self.name}`);//Hello Hasibur
        },1000)
    }
}
obj.show()

//***************solution: 2
//using arrow function


let obj = {
    name: `Hasibur`,
    show: function() {
        setTimeout(() => {
            console.log(this);//now this will refers parents this -> {name: "Hasibur", show: ƒ} 
            console.log(`Hello, ${this.name}`);//Hello Hasibur
        },1000)
    }
}
obj.show()


//****************************** default parameter ******************************
//****************************** default parameter ******************************

let sqr = (n = 2) => {
    return n*n
}
console.log(sqr());//4

let greet = (name, msg) => {
    console.log(name.length);
    console.log(`${msg}, ${name}`);
}
greet(`hasibur`, `hello`)// hello, hasibur


//****************problem in default parameter
let greet = (name, msg) => {
    console.log(name.length);
    console.log(`${msg}, ${name}`);
}
greet(null, `hello`)// Uncaught TypeError: Cannot read property 'length' of null




//****************************** custom iterable object ******************************
//****************************** custom iterable object ******************************

//******************* iterate over array
let arr = [1, 2, 3, 4]

for (let v of arr) {
    console.log(v);
}

//******************* iterate over string

for (let v of `Hasibur`) {
    console.log(v);
}
/*output
index.js:17 H
index.js:17 a
index.js:17 s
index.js:17 i
index.js:17 b
index.js:17 u
index.js:17 r
*/


//******************* iterate over obj problem
let obj = {
    start: 10,
    end: 20
}

for (let v of obj) {
    console.log(v);//index.js:27 Uncaught TypeError: obj[Symbol.iterator] is not a function
}



//******************* iterate over obj -- solution

let obj = {
    start: 1,
    end: 5,

    [Symbol.iterator]: function () {
        let currentValue = this.start
        const self = this
        return {
            next() {
                return {
                    done: currentValue > self.end,
                    value: currentValue > self.end ? undefined : currentValue++  
                }
            }
        } 
    }


}

for (let v of obj) {
    console.log(v);
}
/*output:
1,2,3,4,5
*/
let iterate = obj[Symbol.iterator]()
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
/*output:
{done: false, value: 1}
{done: false, value: 2}
{done: false, value: 3}
{done: false, value: 4}
{done: false, value: 5}
{done: true, value: undefined}
*/



//****************************** rest and spread ******************************
//****************************** rest and spread ******************************

//********** traditional argument way */
function sum () {
    let sum = 0
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
console.log(sum(1, 2, 3, 4, 5));//15

//********** using rest operator */
//rest returns an array
function sum (...rest) {
    return rest.reduce((a, b) => a + b)
}
console.log(sum(1, 2, 3, 4, 5));//15

//********** using spread operator in array */
let arr = [1, 2, 3, 4]

console.log(...arr);//1 2 3 4 : it spread the array and return singular data


//********** using spread operator in object */

let obj = {
    a: 10,
    b: 20
}

let obj2 = {
    ...obj
}
/*output:
{a: 10, b: 20}
*/

console.log(obj2 === obj);//false

let obj3 = obj

console.log(obj3 === obj);//true


//****************************** Enhance object ******************************
//****************************** Enhance object ******************************

let a = 10, b = 20

let obj = {
    a,
    b,
    print() {
        console.log(this);//{a: 10, b: 20, print: ƒ}
    }
}

obj.print()


//****************************** Destructuring ******************************
//****************************** Destructuring ******************************

//*********************************** traditional way
let person = {
    name: `hasibur`,
    email: `hasibur@gmail.com`,
    age: 23,
    address: {
        city: `Dhaka`,
        country:`Bangladesh`
    }
}

let name = person.name
let email = person.email
let age = person.age
let city = person.address.city
let country = person.address.country

console.log(name, email, age, city, country);//hasibur hasibur@gmail.com 23 Dhaka Bangladesh

//******************************** using object destructuring

let {name, email, age, address: {city, country}} = person

console.log(name, email, age, city, country);//hasibur hasibur@gmail.com 23 Dhaka Bangladesh

//******************************* using object destructuring

let arr = [1, 2, 3, 4, 5]

let [first, second, , , last] = arr

console.log(first, second, last);//1 2 5


//****************************** Object From Entries ******************************
//****************************** Object From Entries ******************************

let obj = {
    a: 10,
    b: 20
}

// console.log(Object.entries(obj));
/*output:
2) [Array(2), Array(2)]
0: (2) ["a", 10]
1: (2) ["b", 20]
*/

let objArr = [
    ['a', 10],
    ['b', 20]
]

console.log(Object.fromEntries(objArr));
/*output:
{a: 10, b: 20}
a: 10
b: 20
*/


//****************************** Symbol ******************************
//****************************** Symbol ******************************

let s1 = Symbol()
let s2 = Symbol()

console.log(s1);//Symbol()
console.log(s2);//Symbol()

console.log(s1 === s2);//false

