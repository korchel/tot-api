const express = require('express');
const cors = require('cors');
const todoRoutes = require('./src/todos/routes');
const pool = require('./db');

const app = express();
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

app.use(express.json());

// app.use(cors());

app.use('/api/v1', todoRoutes);

app.get('/', (req, res) => {
  res.send('server is working');
});

pool.connect((err) => (err ? console.log(err) : console.log('!!!!')));

const createTable = async () => {
  await pool.query(`CREATE TABLE IF NOT EXISTS todo
  (id serial PRIMARY KEY, task VARCHAR (255),
  done BOOLEAN);`);
};

createTable();
