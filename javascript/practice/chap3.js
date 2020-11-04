//************************* string *************************** 
var str = 'something'//string literal(explain)using conation, any value assign in a variable called string literal  
var str2 = String('Something')//  string constructor

var n = 10
var str_n = n.toString()// convert anything to string
console.log(typeof(str_n))// return type string  
//another way
var n2 = 10
var str_n2 = String(n2)// convert anything to string
console.log(typeof(str_n2))// return type string  
//************************* Escape Notation *************************** 
var str_ = 'this is \'string\''// or "this is 'string'"
var str__ = 'this is \nstring' // return newline 
//************************* string comparison ***************************
var a = 'aaaZ'
var b = 'aaaz'

console.log(a > b) //return false
console.log('001' == 1)// return true
console.log('001' === 1)// return false
//************************* string method(built-in) ***************************
var name1 = 'I am'
var name2 = 'HR Shanto'

var concat_name = name1.concat(' ', name2)//I am HR Shanto
console.log(concat_name.charAt(0))//I
var d = concat_name.substr(5)//HR Shanto
console.log(concat_name.startsWith('I am'))//true
console.log(concat_name.endsWith('Nayem'))//false
console.log(concat_name.toLowerCase())//i am hr shanto
console.log(concat_name.toUpperCase())//I AM HR SHANTO
console.log('      shanto '.trim())//shanto
console.log(concat_name.split(''))//['I', ' ', 'a', 'm',' ', 'H', 'R', ' ','S', 'h', 'a', 'n','t', 'o']
//************************* string length ***************************
var given_string = 'HR Shanto'
var count = 0

while (true) {
    if (given_string.charAt(count) == ' ') {
        break
    } else {
        count++
    }
}
console.log(count)//return 2(explain) because ' ' its s space empty string 
//another example

var count = 0
while (true) {
    if (given_string.charAt(count) == ''){
        break
    } else {
        count++
    }
}
console.log(count)//return 9(explain) actual empty string
console.log(given_string.length)//return 9