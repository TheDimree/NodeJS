const fs = require("fs")

const data = fs.readFileSync("./index.js","utf-8")

console.log(data);