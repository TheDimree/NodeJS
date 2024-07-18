const http = require("http")
const fs = require("fs")
const url = require("url")

function myHandler(req, res) {
    if(req.url === "/favicon.ico") {
        return res.end()
    }
    
    const log = `${Date.now()}: ${req.method} ${req.url} New request received\n`   // Creating logs for each request
    
    const myURL = url.parse(req.url, true)  // 2nd parameter is for parsing the multiple queries.
    // console.log(myURL)
    
    fs.appendFile('log.txt', log, (err, data) => {  //Non-blocking requests, not using sync
        
        //Mutli route using switch
        switch(myURL.pathname) {    // console myURL and check
            case "/" : 
                if(req.method === "GET") 
                    res.end("Home Page")
            break
            case "/about" : 
            const username = myURL.query.name
            res.end(`Hello ${username}`)
            break
            case "/signup" :    //This is how different http method's routes are created.
                if(req.method === "GET") {
                 res.end("Pleas enter details.")   
                }
                else if(req.method === "POST") 
                    //DB query
                    res.end("You have successfully signed up")
            break
            default : res.end("404 Not found.")
            break
        }
    })
}

const server = http.createServer(myHandler)

server.listen(8008, () => {
    console.log("Server is listening on port 8008")
})