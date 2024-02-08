const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')

//req => middleware => res
// app.use('/api', logger) //pass in middleware   order matters, we can add path
// if apply path, it's gonna apply to any route after the path, without path, it will apply to all path

// place those path in array, only those path will execute those middleware
// app.use(['/api', '/about'], [logger, authorize]) // execute multiple middleware functions, place them in the array, they will executed in order

// 1 use vs route
// 2 options - our own / express / third party
// app.use([logger, authorize])
app.use(morgan('tiny'))
app.get('/', (req, res) => {   // (path, middle, callback function)
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.status(200).send('About')
})

app.get('/api/products', (req, res) => {
    res.status(200).send('product')
})

app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.status(200).send('Item')
})

app.get('/test/items', (req, res) => {
    res.status(200).send('Test')
})

app.listen(3000, () => {
    console.log('Server is listenging on port 3000')
})

// const logger = (req, res, next) => { // when working on a middleware, must pass it on to a next middleware, unless terming the whole cycle by sending back the response 
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear()
//     console.log(method, url, time)
//     // res.send('Testing')
//     next()
// }

// app.get('/api/items', logger, (req, res) => {
//      res.status(200).send('About')
// })