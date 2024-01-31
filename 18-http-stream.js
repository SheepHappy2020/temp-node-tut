var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
        fileStream.pipe(res)                   //pipe is pushing from the read stream into write stream 
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(3000)