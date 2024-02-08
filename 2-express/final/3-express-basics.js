const express = require('express')
const app = express()        // const app = require('express')

app.get('/', (req, res) => {        // 1 path- resource user request to accesss, it would make sense if we start with roor 

    res.status(200).send('Home Page')           // 2 callback function, will be invoked everytime user is performing a get request on our root/domain
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')   // same as res.send('About') without status()
})

app.all('*', (req, res) => {  // 1 path 2 callback
    res.status(404).send('<h1>Resource not found</h1>')
}) // handle all http verbs, whether get post put delete

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app/use
// app.listen
