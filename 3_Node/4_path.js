const path = require('path')

let ext = path.extname('D:\\web mern\\3_Node\\f1.txt')
// this extname method gets the extension name of the file
console.log('Extension name -> ' + ext)

let basename = path.basename('D:\\web mern\\3_Node\\f1.txt')
console.log('BaseName -> ' + basename)

console.log(__dirname)  // gets you the path of the current directory of the file

console.log(__filename)  // gets you the path of the file you are in
