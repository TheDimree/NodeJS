const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/";

const database = 'ecom'
const client = new MongoClient(url)

let result, db, collection, response

async function operations() {
    result = await client.connect();
    db = result.db(database)
    collection = db.collection('product')
    
    //* Insert data in the DB
    // let myobj = { name: "S8", price: 130, category: "mobile" };
    // collection.insertOne(myobj, function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    // });

    //*Insert Many
    // let myobj = [{ name: "S25", price: 134, category: "mobile" },
    //             { name: "S26", price: 180, category: "mobile" },
    //             { name: "S27", price: 230, category: "mobile" },
    //             { name: "S28", price: 540, category: "mobile" },
    //             { name: "S29", price: 458, category: "mobile" },
    //             { name: "S30", price: 568, category: "mobile" },
    //             { name: "S31", price: 458, category: "mobile" },
    //             { name: "S32", price: 258, category: "mobile" },
    //             { name: "S33", price: 522, category: "mobile" },
    //             { name: "S34", price: 458, category: "mobile" },
    //             { name: "iphone 18", price: 865, category: "mobile" }
    // ]
    // collection.insertMany(myobj, function(err, res) {
    //     if (err) throw err;
    //     console.log("Number of documents inserted: " + res.insertedCount);
    //   });

    //* Updating the document the name "S9" to name="apple 4s"
    // const myquery = { name: "S9" }; //where name is ...
    // const newvalues = { $set: { name: "apple 4s" } }; //update these fields.
    // collection.updateOne(myquery, newvalues, function (err, res) {
    //     if (err) throw err;
    //     console.log("1 document updated");
    // });

    //* Deleting a document
    // const myquery = { name: 'S10' };
    // collection.deleteOne(myquery, function (err, obj) {
    //     if (err) throw err;
    //     console.log("1 document deleted");
    // });

    const mysort = { price:1 };
    const data = await collection.find().sort(mysort).toArray();
    console.log("data: ", data)

      //* Displaying data.
    // response = await collection.find({}).toArray();
    // console.log("Data: ", response)
}

operations()