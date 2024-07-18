const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017/";

const database="ecom"
const client = new MongoClient(url) //nodejs is the client as we're not using the reactjs

async function dbconnect() {
    let result = await client.connect()
    let db = result.db(database)
    return db.collection('product')
}

module.exports = dbconnect;