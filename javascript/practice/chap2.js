//************************* if - else *************************** 
var num1 = 100
var num2 = 200
if (num1 > num2){
    console.log(num1+ ' is greater')
}else if(num1 < num2){
    console.log(num2+' is greater')//if condition is False    
}else{
    console,log("both are same")
}
//************************* switch *************************** 
var date = new Date()
var today = date.getDate()

switch(today){
    case 0:
        console.log("Today is sun")
        break
    case 1:
        console.log("Today is mon")
        break
    case 2:
        console.log("Today is tue")
        break
    case 3:
        console.log("Today is wed")
        break
    case 4:
        console.log("Today is thurs")
        break
    case 5:
            console.log("Today is fri")
            break
    case  6:
            console.log("Today is sat")
            break
    default:
            console.log("error date")
}
//************************* logical operator  *************************** 
var num_check1 = (10 > 12)
console.log(num_check1)//false
var num_check2 = !(10 > 12)
console.log(num_check2)//true
var num_check2 = !!(10 > 12)
console.log(num_check2)//false
//************************* ternary operator  *************************** 
var number = 10
var str = ''

if (number % 2 === 0){
    str = 'even'
}else{
    str = 'odd'
}
console.log(str)//return even
//using ternary operator
var result = number % 2 === 0 ? "even" : "odd"
console.log(result)//return even
//************************* and or shorthand  *************************** 
var name1 = ''
var full_name1 = ''
if (name1.length === 0){
    full_name1 = 'Hasibur'    
}else{
    full_name1 = name1
}
console.log(full_name1)// return hasibur
//using shorthand and operator for decreasing code line----------------------------
var name2 = ''
var full_name2 = name2 || 'Hasibur'
console.log(full_name2)// return hasibur |explain| if the existing variable value is null or empty then alternate variable will be return(hasibur) 
//another example-------------------------------------------------------------
var name2 = 'shanto'
var full_name2 = name2 || 'Hasibur'
console.log(full_name2)// return shanto |explain| if existing variable is not empty then it will return that variable
// example for and--------------------------------------------- 
var isOk = true
if(isOk){
    console.log("yyes its ok")
}
//using shorthand or operator--------------------------------------------------
isOk && console.log("yyes its ok using shorthand") 
//************************* loop  *************************** 
//for loop-----------------------------------------------------
for (var i = 0; i<5; i++){
    if(i%2 == 0)
    console.log(i+ " i love problem")
}
//while loop---------------------------------------------------------
var j = 0
while(j<5){
    if(j%2 == 0)
    console.log(j+ " i love problem")
    j++
}
//actual use of while loop
var is_running = true

while (is_running){
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand == 9){
        console.log('you are eliminate')
        is_running = false
    }else{
        console.log("you got " +rand)
    }
}
//do while loop---------------------------------------------------------
//************************* nested loop  *************************** 
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
for (var i = 1; i <= 5; i++){
     var result = ''
    for(var j = 1; j <= i; j++){
        result += j + ' '
    }        
    console.log(result)
}
//************************* break  *************************** 
while (true){
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand == 9){
        console.log('you are eliminate')
        break
    }else{
        console.log("you got " +rand)
    }
}