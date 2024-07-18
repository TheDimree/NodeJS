const express = require('express');
const path = require('path')

const app = express()
const port = 8008

// app.use(express.static(path.join(__dirname, 'public')))  //serving static files.

app.use(express.urlencoded({extended: false})); //It parses the form data into JSON.

let empAr = [
    {
        "id": "1",
        "name": "Bhagesh Dimri",
        "age": "24",
        "edu": "MCA",
        "sex": "Male",
        "city": "Ambala"
    },
    {
        "id": "2",
        "name": "Krishna",
        "age": "25",
        "edu": "BCA",
        "sex": "Male",
        "city": "Ambala"
    },
    {
        "id": "3",
        "name": "Ruchi",
        "age": "24",
        "edu": "MBA",
        "sex": "Female",
        "city": "Ambala"
    }
]

let newEmpAr =[];

const search = (req, res, next) =>{
        newEmpAr = empAr.filter(obj => obj.name.toLowerCase().startsWith(req.query.item.toLowerCase()));
        // console.log(newEmpAr)
        
        if(newEmpAr.length>0) {
            next();
        }
        else {
            res.send("<h1>No result found.</h1>");
        }
}

app.get('/', (req, res) => {
    console.log(("res: ", res))
    res.sendFile(path.join(__dirname, 'public', 'emppage.html'))  //sending a whole html file
})

app.post('/emp', (req, res) => {
    const newEmp = {
        id: empAr.length + 1,
        name: req.body.name,
        age: req.body.age,
        edu: req.body.edu,
        sex: req.body.sex,
        city: req.body.city
    }
    empAr.push(newEmp)

    let tableHtml = '<table border="1" width="90%" style="border-collapse: collapse; margin: 0 auto;">';
    tableHtml += '<tr style="background-color: #A9A9A9;"><th>ID</th><th>Name</th><th>Age</th><th>Education</th><th>Sex</th><th>City</th></tr>';
    empAr.forEach((data, index) => {
        let rowColor = index % 2 === 0 ? '#ffffff' : '#f2f2f2';
        tableHtml += `<tr style="background-color: ${rowColor};"><td>${data.id}</td><td>${data.name}</td><td>${data.age}</td><td>${data.edu}</td><td>${data.sex}</td><td>${data.city}</td></tr>`;
    });
    tableHtml += '</table>';
    res.send(tableHtml)
    // res.status(201).json(empAr); 
})

app.get('/search', search, (req, res) => {  //using filter search.
    // console.log(newEmpAr)    
    let searchTableHtml = '<table border="1" width="90%" style="border-collapse: collapse; margin: 0 auto;">';
    searchTableHtml += '<tr style="background-color: #A9A9A9;"><th>ID</th><th>Name</th><th>Age</th><th>Education</th><th>Sex</th><th>City</th></tr>';
    newEmpAr.forEach((data, index) => {
        let rowColor = index % 2 === 0 ? '#ffffff' : '#f2f2f2';
        searchTableHtml += `<tr style="background-color: ${rowColor};"><td>${data.id}</td><td>${data.name}</td><td>${data.age}</td><td>${data.edu}</td><td>${data.sex}</td><td>${data.city}</td></tr>`;
    });
    searchTableHtml += '</table>';
    res.send(searchTableHtml)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})