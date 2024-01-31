const { readFileSync, writeFileSync } = require('fs') // same as const fs = require('fs'); fs.readFileSync 
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8') //path and specfic编码, second perameter set the encoding, if do not provide, it will return buffer <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 2e>
const second = readFileSync('./content/second.txt', 'utf8') //

writeFileSync(
    './content/result-sync.txt', //provide file name, if the file not there, the node will create one, 
    `Here is teh result : ${first} ${second}`, //second is the value
    { flag: 'a' }                      // option parameter, set the flag value to a the fill not over write. Just create new value.
)

console.log('done with this task')
console.log('starting the next one ')