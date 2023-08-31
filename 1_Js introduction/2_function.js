// Normal Function

// function sayHi(){
//     console.log('function said hi')
// }    // function declaration

// sayHi()   // function invocation


// Parameter in functions

// function add(a , b){
//     console.log("Tbe addition is", a+b)
// }

// add(2,3)         // 2 and 3 are argument


function mul(a , b){
    console.log("The multiplication is",a*b)
}

mul(2 , 4)

function sub(a , b){
    console.log("The subtraction is" ,a-b)
}

sub(5 , 9)


// function as first class citizens

let sayHi = function(){              // anonymous function
    console.log('Hi')         // in js you can assign a function to a variable and can call it
}

sayHi()        //we are calling this later whenever we want


// IIFE (Immediately invoked Function Expression)
let add = (function(a,b){
      return a+b             //console.log(a+b)
})(10,20)

console.log(add)


