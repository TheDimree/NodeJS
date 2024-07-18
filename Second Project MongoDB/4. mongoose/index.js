const express = require("express")
require('./config')
const emp = require("./employees.js")

const app = express();
const port = 8008;

//*Middleware
// app.use(express.json())
app.use(express.urlencoded({extended: false})); // It parse the form data into json data.


app.get('/', async(req, res) => {
    let data = await emp.find();
    res.send(data)
})

app.post("/create", async(req, res)=> {
    // const newEmp = {
    //     first_name: req.first_name,
    //     last_name: req.first_name,
    //     email: req.first_name,
    //     gender: req.first_name,
    //     address: req.first_name,
    // }
    // console.log(req.body)
    let data = new emp(req.body)
    let result = await data.save()    
    console.log(result)
    res.send(result)
})

app.delete('/delete/:_id', async(req, res)=> {
    console.log(req.params)
    let data = await emp.deleteOne(req.params)
    res.send("Document Deleted successfully.")
})

app.put("/update/:_id", async(req,res)=> {
    console.log("hello")
    console.log(req.params)
    let data = await emp.updateOne(req.params, {$set: req.body})
    res.send(data)
})

app.listen(port, () => {
    console.log(`Server is running @ port = ${port}`)
})

