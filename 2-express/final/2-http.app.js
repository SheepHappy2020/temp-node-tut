const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    // console.log(req.method)
    const url = req.url
    // home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })  //set up Header, start with status code, then pass the header, here pass content type  tell the browser what sending back
        res.write(homePage)                 // res.end('<h1>Home Page</h1>')
        res.end()
    }
    // styles
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })  //path content of the file, not the file itself, we need content-type
        res.write(homeStyle)
        res.end()
    }
    //image.logo
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeImage)
        res.end()
    }
    //logic
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'javascript' })
        res.write(homeLogic)
        res.end()
    }
    //404
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
    }

})

server.listen(3000)   //set up the port