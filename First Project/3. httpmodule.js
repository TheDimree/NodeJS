const http = require('http');

// http.createServer((request, response) => {
// console.log(request.url, request.method);

//     response.writeHead(200, { 'Content-Type': 'text/html' });
        
//     switch(request.url) {
//         case '/' :
//             response.write("Hello, welcome to server");
//             response.end()
//             break;

//         case '/about' :
//             response.write("Hello, welcome to about page");
//             response.end()
//             break;  
             
//         case '/home' :
//             response.write("Hello, welcome to home page");
//             response.end()
//             break;   
//     }
// }).listen(9088, ()=> {
//     console.log("Server started port @ 9088")
// });


//* Displaying data on webpage
// const data = require('./data');

// console.log("data:",data);

// http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.write(JSON.stringify(data));
//     response.end();
//     }).listen(3003, () => {
//         console.log("Server started port @ 3003");
//     });


//* Displaying html page on webpage. (Server Side rendering)

// const fs = require('fs');

// http.createServer((request, response) => {

//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     fs.readFile("./views/cards.html", null, function (err, data) {
//         if(err) {
//             response.writeHead(404);
//             response.end("Error loading cards.html");
//         }
//         else {
//             response.write(data);
//             response.end();
//         }
//         })
//     }).listen(3003, () => {
//         console.log("Server started port @ 3003");
//     });

const fs = require("fs");

const cards = fs.readFileSync("./views/cards.html", "utf-8");
const data = fs.readFileSync("data.json", "utf-8");

http.createServer(function (req, res) {
    switch(req.url) {
        case "/":
            res.setHeader('Content-Type', 'text/html');
            res.end(cards);
            break;
        case "/api":
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
            break;
        
        default : 
        res.writeHead(404);
        res.end("Bad Request");
    }

    console.log("Server Started")
}).listen(8000);