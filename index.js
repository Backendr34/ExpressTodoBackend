const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

const todos = [
        { id: 1, title: "Learn Node.js", description : "Study the basics of Node.js", completed: false },
        { id: 2, title: "Build a REST API", description : "Create a simple REST API using Express", completed: false },
        { id: 3, title: "Deploy to Heroku", description : "Deploy the application to Heroku", completed: false }    ,
        { id: 4, title: "Write Tests", description : "Add unit tests for the API endpoints", completed: false },
        { id: 5, title: "Document the API", description : "Create documentation for the API endpoints", completed: false }
        ]


app.get("/", (req, res)=> {
  res.send("Api is working fine")
})


app.get("/todos", (req, res) => {
    res.json(todos)
})

app.get("/todos/:id", (req, res) => {
    const todoId = parseInt(req.params.id, 10)
    const todo =todos.find((t) => t.id === todoId)
    if (todo) {
        res.json(todo)
    } else {
        res.status(404).json({ message: "Todo not found" })
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
