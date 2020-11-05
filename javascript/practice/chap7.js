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
//akta function ar vitor a argumnent hisabe arekta function pass kora
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
