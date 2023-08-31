// in js objects are basically key value pair

// ot declare object

// let obj = {}  // obj declaration

let person = {
    name : 'Mohit',   // here name is the key and String(Mohit) is value
    age : 20 ,
    phone : 12345
}
console.log(person)


let cap = {
    firstname : 'Steve',
    lastname : 'rogers',
    friends : ['bucky' , 'tony' , 'Dr banner'],
    age : 566,
    address : {
        state : 'maharashtra',
        city : 'mumbai'
    },

    // isAvenger = true

 
    // sayHi is key 
    sayHi : function (){
        console.log('Captain Says hi')
    }
}

console.log(cap)

console.log(cap.firstname)  // Dot notation // access a property of an object  

console.log(cap['firstname'])  // Bracket notation

console.log('my best friend is',cap.friends[3])

console.log(cap.address.city)

cap.sayHi()

// loop -> for in loop

for(let key in cap){
    console.log("key :" , key , 'value :' , cap[key])
}


// cap.isAvenger = false

// cap.movie = ['Age of Ultron' , 'First Avenger']

console.log(cap)