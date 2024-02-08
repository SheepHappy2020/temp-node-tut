const express = require('express')
const app = express()
const { products, people } = require('./data')


app.get('/', (req, res) => {
    res.status(200).send('<h1>Home Page</h1><a href = "/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProduct)
})

app.get('/api/products/:productID', (req, res) => {
    // console.log(req)
    // console.log(req.params)    // req,params return the value of productID as string, need to change it to number

    const { productID } = req.params

    const singleProduct = products.find((product) => product.id === Number(productID))
    if (!singleProduct) {      // ! undefined = true      ! a value = false
        return res.status(404).send('Product Does Not Exist')
    }

    res.json(singleProduct)
})
// localhost:3000/api/products/1/reviews/2
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    //  console.log(req.params)

    res.send('Hello World')
})

app.get('/api/vi/query', (req, res) => {
    // console.log(req.query);
    const { name, limit } = req.query
    let sortedProducts = [...products]

    if (name) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(name)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('No products matched your search')
        return res.status(200).json({ success: true, data: [] })
    }
    return res.status(200).json(sortedProducts)
})


app.listen(3000, () => {
    console.log('Server is listening on port 3000...')
})