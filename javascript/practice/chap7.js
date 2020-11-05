//********************************* function programming **************************************
//************************************ pure function ************************************
//************************************ pure function ************************************
/* pure function is,when
(i)it returns the same result if given the same arguments
(ii) it does not cause any side observable side effects */

function sqr(n) {
    return n*n
}
console.log(sqr(2));
console.log(sqr(2));
console.log(sqr(2));
//example of a function who cause side effects--------------------------------------------------------------------
var num = 5

function change() {
    num = 100
    console.log(num);//100
}
console.log(num);//5
change()
console.log(num);//100
//************************************ first function ************************************
//************************************ first function ************************************
//1. A function can be Stored in a variable
function add(a, b) {
    return a+b
}

var sum = add
console.log(sum(5,5));//10
console.log(typeof sum);//function
//2. A function can be stored in an array
var arr = [1, 2, 3]
arr.unshift(add)
console.log(arr);//[ [Function: add], 1, 2, 3 ]
console.log(arr[0](5, 3));//8
//3. A function can be stored in an object
var obj = {
    x: add,
    y: 2
}
console.log(obj);//{ x: [Function: add], y: 2 }
console.log(obj.x(17,3));//20
//4. we can create function as need
setTimeout(function ()  {
    console.log('i am inside a 1\'s timer function');//i am inside a 1's timer function
},100)

//************************************ Higher order function ************************************
//************************************ Higher order function ************************************

//************************************ closure ************************************
//************************************ closure ************************************
var num1 = 10

function a(){
    var num2 = 5

    return function () {
        console.log(num2);// bairer scope thake kono data asche vitor ar scope a without passing any argument !!! which is called scope 
    }
}
var abc = a()
console.dir(abc)//[Function (anonymous)]