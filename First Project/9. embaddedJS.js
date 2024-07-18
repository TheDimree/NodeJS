const express = require('express')
const path = require('path')
const app = express()
const port = 8008;

//Set EJS as the view engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const user= {
        name:'Bhagesh',
        city: 'Ambala City',
        skills: ['HTML', 'CSS', 'JS', 'React', 'NodeJS']
    }
    res.render('profile', {user})
})

const todoList = [
    // {
    //     id: '1',
    //     name: 'Learn JSS',
    // },
    // {
    //     id: '2',
    //     name: 'Learn React',
    // },
    // {
    //     id: '3',
    //     name: 'Learn Nodejs',
    // }
]
app.get('/todo', (req, res) => {
    res.render('todo', {todoList})

})

app.use(express.urlencoded({extended: false})); // It parse the form data into json data.
app.post('/todo', (req, res) => {
    const task = {
        id: todoList.length + 1,
        name: req.body.task,
    }
    todoList.push(task)
    res.render('todo', {todoList})
})

app.listen(port, function() {
    console.log(`listening on port ${port}`)
})