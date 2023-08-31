


console.log(a)          // undefined with var
// initialization error with let and const

// Temporal Dead Zone - it is just a area where if you try to access variables defined with 
// let and const before their initialization you wont be able to do it.

greet()

console.log(a)       // undefined
console.log(b)      // cannot run before declaration

var a = 2
let b = 3
console.log(a)     // 2

function greet(){
    console.log('Hello')
}



