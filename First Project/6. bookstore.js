const express = require('express');
const app = express();

app.use(express.static('public'))

app.use(express.urlencoded({extended: false})); // It parse the form data into json data.

let booksAr = [  
    {
    "id": "1",
    "book": "Book1",
    "author": "author1" 
    },
    {
    "id": "2",
    "book": "Book2",
    "author": "author2" 
    }
];


app.get("/books", (req, res)=> {
    res.json(booksAr);
})

app.post('/books', (req, res)=>{
    const newBook = {
        id: booksAr.length + 1,
        book: req.body.book_name,
        author: req.body.author_name
    }
    booksAr.push(newBook)
    console.log("array : ", booksAr)
    res.status(201).json(newBook);
});

app.listen(5000, ()=> {
    console.log("Server is started @5000")
})