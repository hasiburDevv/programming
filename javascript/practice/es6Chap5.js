// //****************************** Error ******************************
// //****************************** Error ******************************
// // //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
// let n = 10

// if(n > 5) {
//     throw new Error(`N is Greater than n`)//Uncaught Error: N is Greater than n

// }

// //****************************** Error with if else ******************************
// //****************************** Error with if else ******************************

// function changeToInt(v) {
//     let result = Number.parseInt(v)
//     if(!result) {
//         return `Please Provide a value is able to convert in Integer`
//     }
//     return result
// }
// let result = changeToInt(`jh85nmfygm`)
// console.log(result);//Please Provide a value is able to convert in Integer

// //****************************** Error with try catch ******************************
// //****************************** Error with try catch ******************************

// function makeWords() {
//     try {
//         let str = text.trim()
//         let words = str.split(` `)
//     }catch (e){
//         console.log(e.message);
//         console.log(`please provide a valid input`);
//     }
// }

// let words = makeWords(85)
// /*
// text is not defined
// please provide a valid input
// */

// //************************ how it actually works

// try {
//     console.log('I am line 1');
//     throw new Error("I am Your Error")
//     console.log("I am line 2");
// }catch{
//     console.log(`there is an error .....`);
// }
// /*
// I am line 1
// there is an error .....
// */

//****************************** custom error ******************************
//****************************** custom error ******************************

