const express = require('express')
const dbconnect = require('./mongodb.js')   //using connection function
const mongodb = require("mongodb")  //using mongodb queries.
const bodyParser = require('body-parser') // middleware

const app = express()
const port = 8008

//* Middleware
app.use(express.json())
app.use(bodyParser.json()) // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.


app.get('/', async (req, res) => {
  let data = await dbconnect()
  data = await data.find().toArray()
  console.log(data)
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})