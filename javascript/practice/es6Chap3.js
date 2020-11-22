//****************************** set ******************************
//****************************** set ******************************

let set = new Set ([1, 2, 3])
set.add(3)
set.add(4)

console.log((set));//Set(4) { 1, 2, 3, 4 }
console.log(set.size);//4

let iterateSet = set.keys()
console.log(iterateSet.next());//{ value: 1, done: false }
console.log(iterateSet.next());//{ value: 2, done: false }
console.log(iterateSet.next());//{ value: 3, done: false }
console.log(iterateSet.next());//{ value: 4, done: false }
console.log(iterateSet.next());//{ value: undefined, done: true }


//****************************** map ******************************
//****************************** map ******************************

let map = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 25]
])

map.set('d', 30)
console.log(map.size);//4
console.log(map);//Map(4) { 'a' => 10, 'b' => 20, 'c' => 25, 'd' => 30 }
console.log(map.get('b'));//20
console.log(map.values());//[Map Iterator] { 10, 20, 25, 30 }
console.log(map.keys());//[Map Iterator] { 'a', 'b', 'c', 'd' }

//****************************** set ******************************
//****************************** set ******************************




