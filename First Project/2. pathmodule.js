//*Importing packages.

const fs = require("fs");
const path = require("path");


//* Normal File 3 steps

const dirpath = path.join(__dirname, "crud");
const filepath = `${dirpath}/newfile.txt`;
const newFilepath = `${dirpath}/renameNewfile.txt`;

//Writing in a file.
// fs.writeFileSync(filepath, 'Writing in new file.')

const readFile =  fs.readFile("read.txt", "utf8", (err, data) => {
    console.log("Err: ", err, " Data: ",data);
})

fs.rename(filepath, newFilepath, (err) => {
    if(err) {
        throw err;
    }
    console.log("File has been renamed to ",);
})

//*JS file 3 steps

const dirpathJs = path.join(__dirname, "crud");
const filePathJs = `${dirpathJs}/newjsfile.js`;
const newFilePathJs =`${dirpathJs}/renamedJsFile.js`

// fs.open(filePathJs, 'a', function(err,file) {
//     console.log("Js filecreated in crud folder.")
// })

// const appendFile =  fs.appendFile(filePathJs, "This js file has been created for writing purposes only.", (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log("Js File has been appended.");
// })

// fs.rename(filePathJs, newFilePathJs, (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log("File has been renamed to ",);
// })