const express = require('express');
const cors = require('cors');
const server = express();
const {runScheduler} = require('./run')
let {addSite, sites} = require('./sites')

server.use(cors())
server.use(express.json())


const PORT = 5000;

server.get('/get', function (req, res, next) {
    res.json(sites)
})

server.delete("/delete", function (req, res, next) {
    sites = sites.filter(s => s.url !== req.body.url)
    res.json("deleted")
    console.log("deleted " + req.body.url)
})

server.post('/', function (req, res, next) {
    const url = req.body.link
    const selector = req.body.priceSelector
    addSite({
        url: url,
        selectorPrice: selector
    })
    res.json({msg: "added"})
    console.log("added " + url)
    console.log(sites)
})

server.listen(PORT, function () {
    // runScheduler()
    console.log(`CORS-enabled web server listening on port ${PORT}`)
})