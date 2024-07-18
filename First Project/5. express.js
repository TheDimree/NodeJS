//* Normal Routing in Express framework.
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });


//
// app.get('/about', (req, res) => {
//     res.send('About Express');
//   });

//   app.get('/contact', (req, res) => {
//     res.send('Contact Us');
//   });


//* Displaying page in Routes.
// const path = require("path");
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// })
// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/about.html'));
// })
// app.get('/bookstore', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/bookstore.html'));
// })
// app.get('/contact', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/contact.html'));
// })
// app.get('/json', (req, res) => {
//     res.sendFile(path.join(__dirname, './data.json'));
// })
// app.get('/fetchQuery', (req, res) => {
//     res.send(`<input type="text" value=${req.query.name} placeholder="Enter your name">
//     <button></button>`);
// })


// app.listen(8000);

//* Displaying page in Routes.
// const express = require('express');
// const app = express();

// const path = require("path");
// const publicPath = path.join(__dirname,'public')

// app.use(express.static(publicPath));    //built-in middleware.

// app.get('/', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`);
// })
// app.get('/about', (req, res) => {
//     res.sendFile(`${publicPath}/about.html`);})
// app.get('/bookstore', (req, res) => {
//     res.sendFile(`${publicPath}/bookstore.html`);})
// app.get('/contact', (req, res) => {
//     res.sendFile(`${publicPath}/contact.html`);
// })
// app.get('/json', (req, res) => {
//     res.sendFile(path.join(__dirname, './data.json'));
// })
// app.get('/fetchQuery', (req, res) => {  //http://localhost:8000/fetchQuery?name=Bhagesh
//     res.send(`<input type="text" value=${req.query.name} placeholder="Enter your name">
//     <button>Click</button>`);
// })

// app.listen(8008);


//* Conditional Rendering by checking Age
// const express = require('express');
// const app = express();

// const path = require("path");
// const publicPath = path.join(__dirname,'public')

// const checkAge = (req, res, next) => {
//     if(!req.query.age) {
//         res.send(`<h1>Enter your age in the url: ?age=____</h1>`);
//     }
//     else if(req.query.age<18) {
//         res.send(`<h1>You're a minor. Go and do homework</h1>`);
//     }
//     else {
//         // res.send(`<h1>You're minor</h1>`);
//         next();
//     }
// }
// app.use(checkAge);    //using customized filter in middleware.

// app.get('/', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`);
// })
// app.get('/about', (req, res) => {
//     res.sendFile(`${publicPath}/about.html`);})
// app.get('/bookstore', (req, res) => {
//     res.sendFile(`${publicPath}/bookstore.html`);})
// app.get('/contact', (req, res) => {
//     res.sendFile(`${publicPath}/contact.html`);
// })

// app.listen(8008);

//* Conditional Rendering by checking Age
// const express = require('express');
// const app = express();

// const path = require("path");
// const publicPath = path.join(__dirname,'views')

// const checkCountry = (req, res, next) => {
//     if(!req.query.country) {
//         res.send(`<h1>Enter your country name in the url: ?country=____</h1>`);
//     }
//     else if(!(req.query.country==="India" || req.query.country==="USA")) {
//         res.send(`<h1>Your country is not eligible.</h1>`);
//     }
//     else {
//         next();
//     }
// }

// app.use(checkCountry);    //built-in middleware.

// app.get('/', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`);
// })
// app.get('/about', (req, res) => {
//     res.sendFile(`${publicPath}/about.html`);})
// app.get('/books', (req, res) => {
//     res.sendFile(`${publicPath}/bookstore.html`);})
// app.get('/contact', (req, res) => {
//     res.sendFile(`${publicPath}/contact.html`);
// })

// app.listen(8008);   

//* Router level middleware

const express = require('express');
const app = express()
const port = 8008

//Just pass this as arguement in the routes where you need to authorize.
const auth = (req, res, next) =>{
    if(req.query.admin === "true"){
        next();
    }

    else {
        res.send("<h1>You're not allowed");
    }
}
    
app.get('/', auth, (req, res) => {
    res.send("Welcome to Homepage.");
})

app.get('/about', auth, (req, res) => {
    res.send("Welcome to About page.");
})
app.post('/post', auth, (req, res) => { //used for updating database
    res.json({type: "post"})
})
app.put('/put', (req, res) => {
    res.json({type: "put"})
})
app.delete('/delete', (req, res) => {
    res.json({type: "delete"})
})
app.patch('/patch', auth, (req, res) => {
    res.json({name: "patch"})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})