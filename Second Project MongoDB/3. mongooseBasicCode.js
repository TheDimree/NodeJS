const mongoose = require('mongoose')
const dummyData = require("./MOCK_DATA.json")

///* Connection
mongoose.connect("mongodb://127.0.0.1:27017/Dummy")

//* Schema
const mySchema = new mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        email: String,
        gender: String,
        address: String,
    }
)

const insertDB = async ()=> {
    const myModel = mongoose.model("Employees", mySchema, "Employees")

    //* Model
    let data = new myModel(
        {
            first_name : "Akshay",
            last_name: "Kumar",
            email: "ak@gmail.com",
            gender: "Male",
            address: "Mumbai",
        }
        // dummyData
    )

    let result= await data.save();
    console.log("Inserted successfully.");
}

const updateDB = async () => {
    const myModel = mongoose.model("Employees", mySchema, "Employees")
    let data = await myModel.updateMany(
        {fist_name:"Bhagesh"},
        {$set : {fist_name:"ABC", job_title:"trainee"}}
    )
    console.log(data)
}

const deleteDB = async () => {
    const myModel = mongoose.model("Employees", mySchema, "Employees")
    let data = await myModel.deleteMany({fist_name:"Akshay"})
    console.log("collection deleted.")
}

const findDB = async () => {
    const myModel = mongoose.model("Employees", mySchema, "Employees")
    let data = await myModel.find();
    console.log(data)
}


insertDB()
updateDB();
deleteDB()
findDB()
