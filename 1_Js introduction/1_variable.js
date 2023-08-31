// variable declaration

// var , let , const

// var a;               undefined
// console.log(a)
// var a = 2;
// console.log(a)
// var a = 'I am a String'
// console.log(a)

// Js is a dynamically typed language datatype is not specified here

// Datatypes in Javascript - number , String , boolean , undefined , null

// var has some problems
// 1st Problem with var - Redeclartion
// var b = 'hello'
// var b = 'bye'
// console.log(b)

// overcoming Redeclaration

// use let keyword
// let b = 'hello'
// let b = 'bye'
// console.log(b)

// let b = 'hello'
// console.log(b)
// b = 'bye'               // reassigning
// console.log(b)




//loop

// for loop
// Prime no

// var flag = true
// var num = 13
// for(var i = 2 ; i*i <= num ; i++){
//     if(num % i == 0){
//         flag = false
//         break
//     }
// }
// if(flag){
//     console.log('Number is Prime')
// }
// else{
//     console.log('Number is not Prime')
// }


// 2nd problem with var - scoping

// if(10 % 2 == 0){
//     var a = 2              // var keyword is function scoped
//     console.log(a)
// }
// console.log(a)

//const

// const a = 2
// console.log(a)

// const a = 5
// const a = 'I am a String'   // redeclaration is not allowed
// a = 30   // reassignment is not allowed