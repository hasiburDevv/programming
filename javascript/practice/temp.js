var arr7 = [1, 2, 3, 45, 5]

function myReduce(arr7, cb, acc){
    for(var i = 0; i< arr7.length; i++) {
        acc = cb(acc, arr7[i])
    }
    return acc
}

var mySumStackLearner = myReduce(arr7, function(prev, curr) {
    return prev + curr
}, 0)
console.log("mySumStackLearner "+mySumStackLearner);//56