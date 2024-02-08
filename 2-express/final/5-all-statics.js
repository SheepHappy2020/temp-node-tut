const express = require('express')
const path = require('path')

const app = express()
// importing static method in express
// setup static and middleware   static assets means a file that server doesn't have to change it
app.use(express.static('./public/')) // 1 path of folder
// use static assets, we do not need to set up the send file option. 
// we can simply dump all files in the public folder

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html')) //same as path.join()
//     adding to static assets
//     SSR (server side render)
// })



app.all('*', (req, res) => {
    app.status(404).send('resource not found')
})

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})