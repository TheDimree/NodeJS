//* Basic Usage.
// const http = require('http');

// const port = process.env.PORT || 8008;

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     res.statusCode = 200; //HTTP status code for OK, like 404 is for not found.
//     res.setHeader('Content-Type', 'text/html'); //request will be served as HTMl not plain text.
//     res.end("<h1>Hello World!</h1>")
// });

// server.listen(port, ()=>{console.log(`Server is listening on port no: ${port}`)});


//* Website

const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 8008;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html'); //request will be served as HTMl not plain text.
    
    if(req.url=="/") {
        res.statusCode = 200; //HTTP status code for OK, like 404 is for not found.
        const data = fs.readFileSync('./views/homepage.html')
        res.end(data.toString());

    }
    else if(req.url=="/about") {
        res.statusCode = 200; //HTTP status code for OK, like 404 is for not found.
        res.end("<h1>Welcome to About page.</h1>")

    }
    else {
        // res.dimri();    //This statement will crash the server.
        res.statusCode = 404; //HTTP status code for not found.
        res.end("<h1>This page is not found on the server.</h1>")


    }
});

server.listen(port, ()=>{console.log(`Server is listening on port no: ${port}`)});