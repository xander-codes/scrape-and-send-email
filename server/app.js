const express = require('express');
const cors = require('cors');
const app = express();
const {runScheduler} = require('./run')

app.use(cors())

const PORT = 5000;

app.get('/', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(PORT, function () {
    runScheduler()
    console.log(`CORS-enabled web server listening on port ${PORT}`)
})