//************************* array ***************************
var arr = [1,2,3,4,5]
arr[7] = 20
console.log(arr.length)//11
console.log(arr)//[ 1, 2, 3, 4, 5, <5 empty items>, 20 ]
//another way 
var arr2 = Array(1,2,3)//constructor way
console.log(arr2)//[ 1, 2, 3 ]
//************************* array traverse ***************************
for ( var i = 0; i < arr.length; i++){
    console.log(i+ " " +arr[i])
}
//output:
// 0 1
// 1 2
// 2 3
// 3 4
// 4 5
// 5 undefined
// 6 undefined
// 7 20
//************************* insert remove ***************************
arr.push(9)
console.log(arr)//[ 1, 2, 3, 4, 5, <2 empty items>, 20, 9 ]
arr.unshift(9)
console.log(arr)//[ 9, 1, 2, 3, 4, 5, <2 empty items>, 20, 9 ]
arr.pop()
console.log(arr)//[ 9, 1, 2, 3, 4, 5, <2 empty items>, 20 ]
arr.shift()
console.log(arr)//[ 1, 2, 3, 4, 5, <2 empty items>, 20 ]

arr.splice(3,0,100,101)//insert
console.log(arr)//[ 1, 2, 3, 100, 101, 4, 5, <2 empty items>, 20 ]
arr.splice(2,1,99)//update
console.log(arr)//[ 1, 2, 99, 100, 101, 4, 5, <2 empty items>, 20 ]
arr.splice(2,3)
console.log(arr)//[ 1, 2, 4, 5, <2 empty items>, 20 ]
//************************* search array ***************************
find= 100
isFound = false
for (i = 0; i< arr.length; i++) {
    if( arr[i] === find) {
        console.log("found at index " +i)
        isFound = true
        break
    }
}
if(!isFound){
    console.log("not found")//return not found(in array) [ 1, 2, 4, 5, <2 empty items>, 20 ]
}
//************************* reverse array ***************************
var arr3 = [1,2,3,4,5,6]
for (var i = arr3.length; i>=0; i--){
    console.log(arr3[i])
}
