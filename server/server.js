const express = require('express');
const cors = require('cors');
const server = express();
const {runScheduler} = require('./run')
const {addSite} = require('./sites')

server.use(cors())
server.use(express.json())


const PORT = 5000;

server.post('/', function (req, res, next) {
    const url = req.body.link
    const selector = req.body.priceSelector
    addSite({
        url: url,
        selectorPrice: selector
    })
    res.json({msg: "added"})
})

server.listen(PORT, function () {
    runScheduler()
    console.log(`CORS-enabled web server listening on port ${PORT}`)
})