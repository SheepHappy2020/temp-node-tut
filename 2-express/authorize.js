const authorize = (req, res, next) => {
    const { user } = req.query
    if (user === 'john') {
        req.user = { name: 'john', id: 3 }
        next()    //still need to call next , otherwise whole thing will go bananas
    } else {
        res.status(401).send('Unauthorized')
    }

}

module.exports = authorize