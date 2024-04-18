
const express = require('express');
const cors = require('cors')
const userRoutes = require('./src/users/routes');
const todoRoutes = require('./src/todos/routes');

const app = express()
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

app.use(express.json());


app.use(cors())

app.use('/api/v1', [userRoutes, todoRoutes]);

app.get("/", (req, res) => {
    res.send("server is working")
})

