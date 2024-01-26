const { log } = require('console');
const { readFile, writeFile } = require('fs') // same as const fs = require('fs'); fs.readFileSync 
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {    //if do not provide encode, it will return buffer  <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 2e>
    if (err) {
        return console.log(err)
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            return console.log(err)
        }
        const second = result;
        writeFile('./content/result-async.txt',
            `Here is the result : ${first} ${second}`,
            { flag: 'a' },
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task')
            }
        )
    })
})

console.log('starting the next task')