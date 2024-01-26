const path = require('path')      //import path moduel

//console.log(path.sep)   //seperate property

const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename(filePath)   // want just the file name
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') // return absolute path
//__dirname provide the global path where this file is located,
//then provide rest value(those folders name)
console.log(absolute)                                                                             
