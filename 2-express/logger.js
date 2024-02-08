const logger = (req, res, next) => { // when working on a middleware, must pass it on to a next middleware, unless terming the whole cycle by sending back the response 
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear()
    console.log(method, url, time)
    // res.send('Testing')
    next()
}

module.exports = logger