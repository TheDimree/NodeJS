const express = require('express')
const fs = require('fs')
const users = require('./MOCK_DATA.json')
const app = express()
const port = 8008

//* Middlewres
app.use(express.urlencoded({extended: false})); //It parses the form data into JSON.

app.use((req, res, next) => { //this will maintain log whenever the url is hit.
  fs.appendFile('./log.txt', `${Date.now()} : ${req.method} : ${req.path}\n`, (err, data) => {
    if(err) throw err;
    console.log("Log file created successfully.")
    next();
  })
})

//* Routes
app.get('/users', (req, res) => {
  const html = `
    <ul>
      ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `
  return res.send(html);
})

//* REST API
app.get('/api/users', (req, res) => {
  res.setHeader("myName", "Bhagesh Dimri") 
  return res.json(users);
})

//* If route is same and need to use different methods then you can merge them.
app.route('/api/users/:id')
  .get((req, res) => { //:id is a varriable.
    const id = Number(req.params.id);
    const user = users.find(user => user.id == id)
    return res.json(user);
  })
  .patch((req, res)=> {})
  .delete((req, res)=> {
    const id = Number(req.params.id)
    const user = users.find(user => user.id == id)
    if(user) {
      users.splice(id-1,1)
      fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users), (err, data) =>{
        console.log("Document deleted successfully.")
      })
    }

  })


app.post("/api/users", (req, res) =>{
  const body = req.body;
  // console.log("Body:", body) //body is undefined because express does not know how to handle this form data. So use middleware (plug-ins)
  users.push({
    id: users.length + 1,
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title
  })
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=> {
    console.log("Document added successfully.")
  })
   
  // return res.json({"status": "pending"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})