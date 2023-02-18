const {MongoClient} = require('mongodb')

let dbConnection
let uri = 'mongodb+srv://admin:APDxO3J9gr6YqcLU@cluster0.bcnih.mongodb.net/?retryWrites=true&w=majority'

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then(client => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}