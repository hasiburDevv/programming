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
/*1. akta function ar vitor a argumnent hisabe arekta function pass kora
2. return */
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
//************************************ callback ************************************
//************************************ callback ************************************
//akta function ar vitor a argumnent hisabe arekta function pass kora ,callback
//here simple is a anonymous function which is callback

function simple (a, b, callB) {
    var x = a + b//in every case this two sum and sub operation needed. so we abstract them means those operation are hidden to user. but the sum and sub result value niye user ki kaj korbe oita tara define korbe 
    var y = a - b
    var result = callB(x, y)
    return result  
}

function sum(x , y){
    return x + y
}

var result = simple(5, 3, sum)
console.log(result);//10

var result1 = simple(5, 3, function(x_arg, y_arg) {
    return x_arg - y_arg 
})
console.log(result1);//6

var result3 = simple(5, 3, function(x_arg, y_arg) {
    return x_arg * y_arg 
})
console.log(result3);//16

//************************************ foreach ************************************
//************************************ foreach ************************************

var arr = [10, 20, 30, 40, 50]
var sum = 0

arr.forEach(function(value, index, arr) {
    console.log(index, value, arr);
})
/*output------------------
0 10 [ 10, 20, 30, 40, 50 ]
1 20 [ 10, 20, 30, 40, 50 ]
2 30 [ 10, 20, 30, 40, 50 ]
3 40 [ 10, 20, 30, 40, 50 ]
4 50 [ 10, 20, 30, 40, 50 ]
*/
//another example-------------------------------------------------------------------------
//another example-------------------------------------------------------------------------
var arr_ = [1, 2, 3, 4]
var sum = 0

arr_.forEach(function(value, index, arr) {
    sum += value
})
console.log(sum);//

//************************************ foreach implementation ************************************

function myForEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)//passing values
    }
}

//calling for_each function....with argument as a callback function
myForEach(arr, function(value, index, arr){
    console.log(value, index, arr);
})
/*output----------
1 0 [ 1, 2, 3, 4 ]
2 1 [ 1, 2, 3, 4 ]
3 2 [ 1, 2, 3, 4 ]
4 3 [ 1, 2, 3, 4 ]*/
// Again calling for_each function....with argument as a callback function
myForEach(arr, function(value, index, arr){
    arr[index] = value + 5
})
console.log(arr);//[ 6, 7, 8, 9 ]

//************************************ Map ************************************
//************************************ Map ************************************
var arr1 = [1, 2, 3]
var sqrArr = arr1.map(function(value){
    return value * value
})

console.log(arr1);//[ 1, 2, 3 ]
console.log(sqrArr);//[ 1, 4, 9 ]

//************************************ Map implementation ************************************
var arr4 = [1, 2, 3, 4, 5, 6]

function myMap(arr2, cb_) {
    var newArr = []
    for (var i = 0; i <arr4.length; i++) {
         var temp = cb_(arr4[i])
        newArr.push(temp)
        }
        return newArr
}

var sResult = myMap(arr4, function(value){
    return value * value
})
console.log(sResult);//[ 1, 4, 9, 16, 25, 36 ]

var qResult = myMap(arr4, function(value){
    return value * value * value
})
console.log(qResult);//[ 1, 8, 27, 64, 125, 216 ]

//************************************ filter ************************************
//************************************ filter ************************************
var arr5 = [4, 8, 1, 3, 5, 6, 4, 3, 9]

var filteredArr = arr5.filter(function(value){
    return value % 2 == 0
})
console.log(filteredArr);//[ 4, 8, 6, 4 ]
//************************************ filter implementation ************************************

var arr6 = [4, 8, 1, 3, 5, 6, 4, 3, 9]

function myFilter(arr6, cb){
    var newFilterArr = []
    for (var i = 0; i <arr6.length; i++){
        if(cb(arr6[i], i, arr6)){
            newFilterArr.push(arr6[i])
        }
    }
    return newFilterArr
}

var evenResult = myFilter(arr6, function(value, index, arr){
    return value % 2 === 0 
})
console.log("even "+evenResult);//even 4,8,6,4

var oddResult = myFilter(arr6, function(value){
    return value % 2 === 1
})
console.log("odd "+oddResult);//odd 1,3,5,3,9

//************************************ reduce ************************************
//************************************ reduce ************************************
var arr7 = [1, 2, 3, 45, 5]

var sum_ = arr7.reduce(function (prev, curr) {
    console.log(prev,curr);
    return prev + curr
})

console.log(sum_);//56
//************************************ reduce implementation by Stack learner ************************************
//************************************ reduce implementation by Stack Learner ************************************

function StackLearnerReduce(arr7, cb, acc){
    for(var i = 0; i< arr7.length; i++) {
        acc = cb(acc, arr7[i])
    }
    return acc
}

var mySumStackLearner = StackLearnerReduce(arr7, function(prev, curr) {
    return prev + curr
}, 0)
console.log("mySumStackLearner "+mySumStackLearner);//56


var myMaxStackLearner = StackLearnerReduce(arr7, function(prev, curr) {
    return Math.max(prev, curr)
}, arr7[0])
console.log("myMaxStackLearner "+myMaxStackLearner);//56

//************************************ reduce implementation by me ************************************
//************************************ reduce implementation by me ************************************

var sumValue = 0
function myReduce(arr7, cb){
    for(var i = 0; i< arr7.length; i++) {
        var result = cb(arr[i] , i, arr7)
    }
    return result
}

var mySum = myReduce(arr7, function(value, index, arr7) {
    return sumValue += arr7[index]
})
console.log("mySum "+mySum);//56
//[1, 2, 3, 45, 5]
var myMax = myReduce(arr7, function(value, index, arr7) {
    for (var i = 0; i < (arr7.length - 1); i++){
        if(arr7[i] > arr7[i+1]){
            var max = arr7[i]
        }else{
            max = arr7[i+1]
        }
    }
    return max
})
console.log("myMax "+myMax);//45

//************************************ find and findIndex ************************************
//************************************ find and findIndex ************************************

arr8 = [7, 8, 9, 4, 5, 6, 1, 20, 3]

var result = arr8.find( function (value) {
    return value === 1
})
console.log(result);//1

var result = arr8.findIndex( function (value) {
    return value === 1
})
console.log(result);//6
//************************************ find implementation ************************************
function myFind (arr8, cb) {
    for ( var i = 0; i < arr8.length; i++){
        if( cb(arr8[i]) ) {
            return arr8[i]// for find index -->> return i
        }
    }
}

var result = myFind( arr8, function( value ) {
    return value === 1
})
console.log(+result);//1

//************************************ Sort  function ************************************
//************************************ Sort function ************************************

var persons = [
    {
        name: 'Abul',
        age: 53
    },
    {
        name: 'Bari',
        age: 23
    },
    {
        name: 'chanchal',
        age: 30
    },
    {
        name: 'Didrul',
        age: 33
    }
]

var arr9 = [4, 5, 6, 8, 6, -2, 5, 0, -1, 7, 5, -9]
arr9.sort()
console.log(arr9);//not correctly sorted when array contain negative values !! [-1, -2, -9, 0, 4, 5,  5,  5, 6, 6, 7,  8]

persons.sort()
console.log(persons);
/* not work with the sort method----------------------------------------------------------------------
[
  { name: 'Abul', age: 53 },
  { name: 'Bari', age: 23 },
  { name: 'chanchal', age: 30 },
  { name: 'Didrul', age: 33 }
]*/

//************************************ Sort using callback function ************************************
//************************************ Sort using callback function ************************************

var arr10 = [4, 5, 6, 8, 6, -2, 5, 0, -1, 7, 5, -9]

arr10.sort( function ( a, b) {
    if(a > b) {
        return 1
    } else if (a < b) {
        return -1
    }else {
        return 0
    }
})

console.log(arr10);//[-9, -2, -1, 0, 4, 5,  5,  5, 6, 6, 7,  8]

persons.sort( function ( a, b) {
    if(a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    }else {
        return 0
    }
})

console.log(persons);
/*output-----------------------------------------
[
  { name: 'Bari', age: 23 },
  { name: 'chanchal', age: 30 },
  { name: 'Didrul', age: 33 },
  { name: 'Abul', age: 53 }
]*/
//************************************ Sort using callback function implementation ************************************


//************************************ some using callback function ************************************
var result4 = arr10.every( function (value) {
    return value >= 0
})
console.log(result4);//false

var result5 = arr10.some( function (value) {
    return value == 0
})
console.log(result5);//true
//************************************ return ************************************
//************************************ return ************************************

function greet (msg) {
    function greeting (name) {
        return msg+ ", " +name+ "!"
    }
    return greeting
}

var gm = greet("Good Morning")
var gn = greet("Good Night")
var hello = greet("Hello")

console.log(typeof gm);//function
console.log(gm('Shanto'));//Good Morning, Shanto!
console.log(gn('Hasibur'));//Good Night, Hasibur!
console.log(hello('Mina'));//Hello, Mina!

//another example--------------------------------------------------------------------------------

/*
function base (b){
    function power(n) {
        var result_ = 1
        for (var i = 0; i <b; i++) {
            result_ *= n
        }
        return result_
    }
    return power 
}
*/
//as base function has only return function. and power didn't call anywhere in the base function we can remove the name 
function base (b){
    return function (n) {
        var result_ = 1
        for (var i = 0; i <b; i++) {
            result_ *= n
        }
        return result_
    }
     
}
var base10 = base(10)
console.log(base10(2));//1024

//************************************ recursive ************************************
//************************************ recursive ************************************

function sayHi(n){
    if(n == 0){
        return 0
    }
    console.log(" hi i am calling");
    sayHi(n-1)
}

sayHi(10)

//************************************ curring ************************************
//************************************ curring ************************************
/* its a higher order function---------its just a organized way of implementation*/
function add(a, b, c) {
    return a + b + c
}
add(41, 51, 61)

function curring(a) {
    return function (b) {
        return function (c) {
            return a + b  + c
        }
    }
}

var result6 = curring(41)(51)(61)
console.log(result6);//153

//************************************ function composition ************************************
//************************************ function composition ************************************

/* akta function ar input akare arekta function daya */

function print(inp) {
    console.log(inp);
}

function multiplyByFive(n) {
    return n * 5
}

function add(a, b) {
    return a + b
}

print(multiplyByFive(add(5, 3)))//40