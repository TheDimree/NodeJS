//* Importing packges.

// const fs = require("fs")
// console.log(fs)

//   fs.readFile( filename, encoding, callback_function )

//   writeFile
//   open(filename, flags, mode, callback(er))
//   appendFile("filename", data, callback(er))
//   rename('oldname', 'newname', callback(er))
//   fs.unlink( path, callback(err))



//   const readFile =  fs.readFile("read.txt", "utf8", (err, data) => {
//     console.log("Err: ", err, " Data: ",data);
//   })

//   const writeFile =  fs.writeFile("write.txt", "This file has been created for writing purposes.", "utf8", (err) => {
//     console.log("Err: ", err);
//   })


//It will create a js file.
// const open = fs.open("abc.js", 'a', function(err) {
//     if(err) {
//         throw err;
//     }
//     console.log("saved");
// })

//It will update data in the file.
// const appendFile =  fs.appendFile("abc.js", "This js file has been created for writing purposes.", (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log("File has been appended.");
// })


//It will rename the filename
// fs.rename('abc.js', 'new.js', (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log("File has been renamed.");
// })

// It will delete the file.
// fs.unlink('new.js', function(err) {
//     if(err) {
//         throw err;
//     }
//     console.log("File is deleted.")
// })