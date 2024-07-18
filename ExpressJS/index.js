const express = require('express')
const path = require('path')
const app = express()
const port = 8080

app.use(express.static(path.join(__dirname, 'public')))  //serving static files.

//* Custom Middleware
// const myMiddleware = (req, res, next) => {
//   console.log(req)
//   next()
// }

// app.use(myMiddleware)

app.get('/hello/:name', (req, res) => {
  res.send('Hello '+ req.params.name)  //sending a string.
})

//Sending a whole html file.
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'))  //sending a whole html file
})

app.get('/json', (req, res) => {
  res.json({
    'name': 'Bhagesh',
    'city': 'Ambala',
    'age': 28
  })  //sending a json object.
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})