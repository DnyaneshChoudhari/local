// File system module

// **** files ***** //

const fs = require('fs')

const path = require('path')

//1. we will be reading writing updating and deleting files

// reading file

// let content = fs.readFileSync('f1.txt')
// console.log("this is f1 data -> " + content)

// writing to a file
// if the file name that is passed does not exists the a new file will be created with its name and data will be wriiten on that file

// fs.writeFileSync('f2.txt','This data will written in f2')
// fs.writeFileSync('f3.txt', 'new file created automatically')

// append a files
// adds new datat to a prevousuly written file

// fs.appendFileSync('f2.txt' , ' This is a new data')


// delete a file

// fs.unlinkSync('f2.txt')
// console.log('f2 deleted')


//****Directories****//

// crating directory
//use to create new directory or folder

// fs.mkdirSync('myDirectory')
// console.log('Directory createc')

// delete directory

// fs.rmdirSync('myDirectory')
// console.log('Remove directory')


// To check whether a directory exists or not 
// this returns true or false based on whether the passed directory exists or not

// let doesExist = fs.existsSync('myFolder')
// console.log(doesExist)

// let statsofDirectory = fs.lstatSync('myDirectory')
// console.log(statsofDirectory)


// console.log('isFile?' , statsofDirectory.isFile())

// console.log('isDirectory' , statsofDirectory.isDirectory())


// readdirSync
// readdirSync is a method which is used to check content inside a directory

// let folderpath = 'D:\\web mern\\3_Node\\myDirectory'
// let foldercontent = fs.readdirSync(folderpath)
// console.log('Directory content ' + foldercontent)


//Copying Files
//src file , destination path

let srcFilePath = 'D:\\web mern\\3_Node\\myDirectory\\f4.txt'

let destinationPath = 'D:\\web mern\\3_Node\\myDirectory2'

let tobecopiedFileName = path.basename(srcFilePath)
console.log(tobecopiedFileName)

let destPath = path.join(destinationPath , tobecopiedFileName)
console.log(destPath)

fs.copyFileSync(srcFilePath , destPath)
console.log('File Copied')