const express = require('express')
const os = require('os')
const app = express()

console.log("os.freemem() : ", os.freemem())
console.log("os.homedir() : ", os.homedir())
console.log("os.hostname() : ", os.hostname())
console.log("os.networkInterfaces() : ", os.networkInterfaces())
console.log("os.arch() : ", os.arch())
console.log("os.platform() : ", os.platform())
console.log("os.totalmem() : ", os.totalmem())

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})