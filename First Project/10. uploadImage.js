// Multer middleware.

const express = require('express')
const path = require('path')
const multer  = require('multer')

const app = express()

let imgArr = [];

// const upload = multer({ dest: 'uploads/' })  //Using DiskStorage now = multer({ storage: myStorage })

//Set EJS as the view engine
app.set('view engine', 'ejs')   //Setting EJS folder "views" as default.
app.use(express.urlencoded({extended: false})); // This middleware parse the form data into json data.
app.use(express.static(path.join(__dirname, 'uploads')))  //serving static files.


const port = 8008;

const myStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${file.originalname}`)
    }
  })
  
const upload = multer({ storage: myStorage }) // OR  upload = multer({ myStorage })

app.get('/', (req, res)=> {
    imgArr = []
    res.render('multerView', {imgArr})
})

//* Uploading Single File
// app.post('/upload', upload.single('profilePic'), function (req, res, next) {
//     console.log(req.file) // It is the `avatar` file
//     console.log(req.body) // It holds the text fields, if there were any
//     res.redirect('/')
// })

//* Uploading multiple files form multiple inputs
// app.post('/upload', upload.fields([{ name: 'profilePic'}, { name: 'petPic'}, { name: 'coverPic'}, { name: 'other'}]), function (req, res, next) {
//     console.log(req.file) // It is the `avatar` file
//     // console.log(req.body) // It holds the text fields, if there were any
//     res.redirect('/')
// })

//* Uploading multiple files from single input
app.post('/upload', upload.fields([{ name: 'pics', maxcount:10}]), function (req, res, next) {
  // console.log("Pics: ", req.files.pics)
   if (!req.files || !req.files.pics) {
    return res.status(400).send('No files were uploaded.'); //! this line ensures that if the server receives a request to upload files but no files are attached to the request, it responds with a 400 status code and a message indicating the absence of files. This helps in providing meaningful feedback to the client about why their request failed and 'return' keyword ensures that the function stops executing further and immediately returns the response to the client. It prevents the execution of any subsequent code in the function.
  }

  imgArr = [] // Clear imgArr before pushing new items

  req.files.pics.forEach((value) => {
    imgArr.push({ path: `/${value.filename}` });
  })
  //console.log(imgArr)

  res.render('multerView', {imgArr})
})

//* ET....
// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function(req, file, cb) {
//             cb(null, 'uploads')
//         },
//         filename: function(req,file, cb) {
//             cb(null, file.fieldname + '-' + Date.now() + '.file.origianlname')
//         }
//     })
// }).single("user_file")

// app.post("/upload", upload, (req, res)=> {
//     res.send("File uploaded successfully")
// })

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
})



// <%= imgArr.length>0 ? imgArr.map(value => `<img src="${value.path}" alt="Uploaded Image" style="max-width: 300px;">`) : `<p>Please Upload Files</p>`%>