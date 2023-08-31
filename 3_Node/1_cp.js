// child process is a node module used to create sub process within a script
// you can differen tasks with your script



const cp = require('child_process')

// console.log('Trying to open calculator')

// cp.execSync('calc')

// console.log('calculator open')



// console.log('opening vs code')

// cp.execSync('code')

// console.log('opened vs code')

let output = cp.execSync('node test.js')
console.log('output -> ' + output)


// cp.execSync('Start chrome https://github.com/')
