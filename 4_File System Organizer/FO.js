// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

//js mein input Array ke from mein jaata hai and that is array is process.argv Array

const help = require('./commands/help')
const organizeModule = require("./commands/organize");
const treeModule = require("./commands/tree");

// const { dir } = require('console');

let inputArr = process.argv.slice(2);

// console.log(inputArr)

//[Node FO.js tree folderpath]

let command = inputArr[0]                          // tree , organize , help

switch(command){

    case 'tree':
        treeModule.treeKey(inputArr[1]);
        break;
    case 'organize':
        organizeModule.organizeKey(inputArr[1]);  
        break;
    case 'help':
        helpModule.helpKey(); 
        break;   
    default:
        console.log('Please enter a valid command')    
        break;
}



















// function organizeFn(dirpath){
//     // console.log(dirpath)
//     // input of directory path
//     let destPath

//     if(dirpath == undefined){
//         console.log('Please Enter a Valid Directory Path')
//         // check whether dirpath is passed or not
//         return;
//     }
//     else{
//         let doesExist = fs.existsSync(dirpath)
//         // console.log(doesExist)
//         // this will tell whether the dirpath exists or not

//         if(doesExist == true){
//             destPath = path.join(dirpath , 'organized_files')

//             // D:\web mern\4_File System Organizer\test folder\organized_files - I want to create a folder in this path

//             if(fs.existsSync(destPath) == false){
//                 fs.mkdirSync(destPath)   // we will only create a folder if it does not already exists
//             }
//             else{
//                 console.log('This folder already exist')
//             }
//         }
//         else{
//             console.log('Please Enter a valid Path')
//         }

//     }
//     organizeHelper(dirpath , destPath)

// }


//  // we are writing this function to categorize our files
// function organizeHelper(src , dest){
//     let childNames = fs.readdirSync(src)  // get all the files and folders inside your src
//     // console.log(childNames)

//     for(let i = 0 ; i < childNames.length ; i++){
//         let childAddress = path.join(src , childNames[i])
//         // console.log(childAddress)
//         let isFile = fs.lstatSync(childAddress).isFile()
//         // console.log(childAddress + " " + isFile)


//         if(isFile == true){
//             let fileCategory = getCategory(childNames[i])
//             console.log(childNames[i] + " belongs to " + fileCategory)

//             sendFiles(childAddress, dest, fileCategory);
//         }

//     }


// }


// function getCategory(name){
//     let ext = path.extname(name)    //.file extension
//     // console.log(ext)
//     ext = ext.slice(1)         // we will take out the extension names of the files
//     // console.log(ext)  

//     for(let type in types){
//         let cTypeArr = types[type];
//         // console.log(cTypeArr)
        
//         for(let i = 0 ; i < cTypeArr.length ; i++){
//             if(ext == cTypeArr[i])            // we matched the extensions with the valurs present in ctypeArr
//                 return type
            
//         }
        
//     }

//     return 'others';
// }


// function sendFiles(srcFilePath , dest , fileCategory){
//     let catPath = path.join(dest , fileCategory)     // here we are making file categories paths

//     if(fs.existsSync(catPath) == false){
//         fs.mkdirSync(catPath)                  // checking for category folder path
//     }


//     let fileName = path.basename(srcFilePath)       // we took out the names of the files
//     let destFilePath = path.join(catPath , fileName)     // here we created a path for the files in category folders

//     fs.copyFileSync(srcFilePath , destFilePath)     // copied files from src to dest

//     fs.unlinkSync(srcFilePath)       // deleted the files from src

//     console.log(fileName + " is copied to " + fileCategory)
// }






