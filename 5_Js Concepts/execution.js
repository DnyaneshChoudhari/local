//Execution Context - The Environment where JS code is Executed and Evaluated

//Global Execution Context - by default an execution is provided from JS and that is known as
// Global Execution Context in which the whole code will reside


// var a = 2
// var b = 3

// function add(m,n){
//     var sum = m + n
//     return sum
// }

// var sum1 = add(1,2)
// var sum2  = add(a,b)

// console.log(sum1)
// console.log(sum2)


var n = 2

function square(n){
    let square = n * n
    return square
}

var square1 = square(n)
var square2 = square(6)

console.log(square1)