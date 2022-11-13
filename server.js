const express = require('express');
const userRoutes = require('./src/users/routes');

const app = express()
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

app.use(express.json());

app.use('/api/v1/users', userRoutes);

app.get("/", (req, res) => {
    res.send("hello world")
})