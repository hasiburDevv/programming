//************************* object ***************************
var obj = {}
console.log(typeof(obj))//object
/*------------------------------
properties/key -> value
--------------------------------*/
//<<-----------------Object literal----------------->>
var point = {
    x: 10,
    y: 20
}
point.z = 30
console.log(point)//{ x: 10, y: 20, z: 30 }
//console object by dot notation
console.log(point.x)//10
//console object by array notation
console.log(point['x'])//10
/*------------------*/
var show = 'x'
console.log(point[show])//10
//<<-----------------Object construct----------------->>
var obj_ = Object()
obj_.a = 10
console.log(obj_)//{ a: 10 }
//<<-----------------Object construct----------------->>
//var obj_2 = new Object()
//************************* setting object property ***************************
point.x = 45// update the value of the property
point.a = 16// assign new value in the property 
console.log(point)//{ x: 45, y: 20, z: 30, a: 16 }
/*--------------------------**------------------------------*/
point['y'] = 100
var prop = 'z'
point[prop] = 55
console.log(point)//{ x: 45, y: 100, z: 55, a: 16 }
//************************* remove object property ***************************
delete point.a
console.log(point)//{ x: 45, y: 100, z: 55 }
//************************* compare two object ***************************
var obj1 = {
    a: 2,
    b: 3
} 

var obj2 = {
    a: 2,
    b: 3
} 

if( obj1.a === obj2.a && obj1.b === obj2.b){
    console.log(true)//true
}else {
    console.log(false)
}
/*------another JSON method------*/
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))//true
//************************* iterate object property ***************************
var obj3 = {
    x: 45,
    y: 56,
    z: 53
}
console.log('x' in obj3)//true
/*---------------------------*/
for (var i in obj3) {
    console.log(i+ ': ' +obj3[i] )//x: 45 y: 56 z: 53
    
}
//************************* method object ***************************
console.log(Object.keys(obj3))//[ 'x', 'y', 'z' ]
console.log(Object.values(obj3))//[ 45, 56, 53 ]
console.log(Object.entries(obj3))//[ [ 'x', 45 ], [ 'y', 56 ], [ 'z', 53 ] ]
//************************* object clone ***************************
var newObj = Object.assign({}, obj3)
newObj.x = 100
console.log(obj3)//{ x: 45, y: 56, z: 53 }
console.log(newObj)//{ x: 100, y: 56, z: 53 }