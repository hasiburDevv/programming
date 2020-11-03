//**********************print****************************
console.log("hey")//hey
// ********************variable**************************
var name = 'Hasan Masud'
var age = 50// number literal 

console.log(name+ ' is a good actor')//Hasan Masud is a good actor
console.log('his age is '+age)//his age is 50
//*******************reserved word*********************
 //ar false = 50
 //console.log(+false)//SyntaxError: Unexpected token 'false'
//*******************data type*********************
/*permeative type-> which is given by the javascript
object type->user defined datatype using permeative 
let var_name = undefined;
console.log(+var_name); // returns undefined
let number = null;*/
var num_1 = Number('100')
var num_2 = '45.5'
var int_number = 90

console.log("convert string to number "+num_1)//convert string to number 100
console.log("convert int  to float "+Number.parseFloat(int_number))//convert int  to float 90
console.log("convert float  to int "+Number.parseInt(num_2))//convert int  to float 45
console.log(`4` * 4)//16
console.log(`4` + 4)//44
//*************************string*************************** 
var str1 = 'javascript'
var str2 = String('javascript')
var str3 = String(143)

console.log(str1,",",str2,",",str3)//javascript , javascript , 143
//***************************type conversation******************************
var str = '1000'
var n = 10

console.log(Number(str))//return int type 1000
console.log(Number.parseInt(str))// return int type 1000
console.log(n.toString(n))// return string type 10

console.log(Boolean(Infinity))// return true
//False vatue return --> 0, null, undefined, NaN
console.log(Boolean(0))// return false
console.log(Boolean(1))// return true
console.log(Boolean("abce"))// return true
console.log(Boolean(null))// return false
//***************************all operator******************************
var a = 10//dividend
var b = 3//divisor
console.log(a % b)//reminder 1
console.log(a / b)//quotient 3.3333333333333335
a += b
console.log(a)//return 13
console.log(a == b)//return false

var c = '50'
var d = 50
console.log(c == d)//return true
console.log(c === d)//return false because it will check both type and values 
//***************************Math function(built-in)******************************
console.log(Math.E)// 2.718281828459045  
console.log(Math.PI)// 3.141592653589793 

var n = 4.389
console.log(Math.abs(n))// 4.389
console.log(Math.floor(n))// 4
console.log(Math.ceil(n))// 5
console.log(Math.round(n))// 4
console.log(Math.max(400, 100, 54, 789, 1000))//return 1000
//pow(),sqrt()
console.log(Math.random())
console.log(Math.random() * 50+1) //generate random number between 50
//***************************Date function******************************
var date = new Date()
console.log(date)//2020-11-03T15:59:21.338Z
console.log(date.toDateString())
console.log(date.toTimeString())// 22:03:25 GMT+0600 (Bangladesh Standard Time
console.log(date.toLocaleDateString())
console.log(date.toLocaleDateString())

console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getTime())
