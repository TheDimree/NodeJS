const fs = require('node:fs');


//*Reading a file

// fs.readFile('file.txt', 'utf8', function(err, data) {
//     console.log(err, data);
// })

// console.log("This console will run before fs reads the file.");


//!This will solve the above asynchronous flow problem.
// const a = fs.readFileSync('file.txt')
// console.log(a.toString())
// console.log("Finished reading the file.");


//* Writing in a file

// fs.writeFile('file.txt', "This is a data", () => {
//     console.log("Written in the file")
// });

// console.log("Finished writing the file");

// Finished will console before "writing in the file". due to asynchoronous flow.


//! Using Sync for synchronous flow.
const b = fs.writeFileSync('file.txt', "This is a data2", )
console.log(b);
console.log("Finished writing the file");
