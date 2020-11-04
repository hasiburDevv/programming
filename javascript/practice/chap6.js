//***************************** function invoking *********************************
function add( a, b){
    return a + b
}
result = (add(2, 3))
console.log(result)//5
//*************************** argument object **********************************
function addAll(){
    var sum = 0
    for (var i = 0; i<arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}

addAll(1,2)//3
addAll(1,2,3,4,5,6,7,8,9)//45
//********************************* return **************************************
function person(name, email) {
    return {
        name: name,
        email: email
    }
    console.log("hm")
}
var p1 = person('HR Shan', 'shan@gmail.com')
console.log(p1)//{ name: 'HR Shan', email: 'shan@gmail.com' }
//********************************* function expression **************************************
/* when function has no name its called anonymous function*/
var addition = function(a,b) {
    return a+b
}
addition(10,40)

setTimeout(function(){
    console.log('I will call after 5 second')
}, 5000)

var another = addition
console.log(another(7, 8))//15
/* here it will execute setTimeout after 5 sec */