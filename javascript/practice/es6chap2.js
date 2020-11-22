//****************************** iterator basic ******************************
//****************************** iterator basic ******************************

 const arr = [1, 2, 3] 

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//*********** after one iteration iterate can be pause

function createIterator (collection) {
    let i = 0
    return {
        next () {
            return {
                done: i >= collection.length,
                value: collection[i++]
            }
        }
    }
}

let iterate = createIterator(arr)

console.log(iterate.next());//{ done: false, value: 1 }
console.log(iterate.next());//{ done: false, value: 2 }
console.log(iterate.next());//{ done: false, value: 3 }
console.log(iterate.next());//{ done: true, value: undefined }

//****************************** iterator with symbol ******************************
//****************************** iterator with symbol ******************************
//**************example 1 */
arr2 = [4, 5, 6]

let iterateArr = arr2[Symbol.iterator]()

console.log(iterateArr.next());//{ value: 4, done: false }
console.log(iterateArr.next());//{ value: 5, done: false }
console.log(iterateArr.next());//{ value: 6, done: false }
console.log(iterateArr.next());//{ value: undefined, done: true }

//**************example 2 */

let str = "TEXT"

let iterateStr = str[Symbol.iterator]()

console.log(iterateStr.next())//{ value: 'T', done: false }
console.log(iterateStr.next())//{ value: 'E', done: false }
console.log(iterateStr.next())//{ value: 'X', done: false }
console.log(iterateStr.next())//{ value: 'T', done: false }


//****************************** for of loop ******************************
//****************************** for of loop ******************************

for (let v of arr) {
    console.log(v);// 1, 2, 3
}

// //****** for of loop wont work with object */

let obj = {
    a: 10,
    b: 20
}

for (let v of obj) {
    console.log(v);//TypeError: obj is not iterable
}

//****************************** generators ******************************
//****************************** generators ******************************

//******************* iterate over obj -- solution

let obj = {
    start: 1,
    end: 5,

    [Symbol.iterator]: function () {
        let currentValue = this.start
        const self = this
        return {
            next() {
                return {
                    done: currentValue > self.end,
                    value: currentValue > self.end ? undefined : currentValue++  
                }
            }
        } 
    }


}

let iterate = obj[Symbol.iterator]()
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
/*output:
{done: false, value: 1}
{done: false, value: 2}
{done: false, value: 3}
{done: false, value: 4}
{done: false, value: 5}
{done: true, value: undefined}
// */

//******************* iterate using generator --

let obj = {
    start: 1,
    end: 5,

    [Symbol.iterator]: function* () {
        let currentValue = this.start
        while(currentValue <= this.end) {
            yield currentValue++
        }
    }
}

*/
let iterate = obj[Symbol.iterator]()
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
/*output:
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 5, done: false }
{ value: undefined, done: true }
*/


//******************* iterate using generator --example 2
function* generate() {
    yield 1
    yield 2
    yield 3
}
let it = generate()
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
/*output:
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
*/

//******************* iterate using generator --example 3
let arr3 = [10, 21, 23]
function* generate2 (collection) {
    for (let i = 0; i < collection.length; i++) {
        yield collection[i]
    }
}

let itArr = generate2(arr3)

console.log(itArr.next());//{ value: 10, done: false }
console.log(itArr.next());//{ value: 21, done: false }
console.log(itArr.next());//{ value: 23, done: false }
console.log(itArr.next());//{ value: undefined, done: true }
