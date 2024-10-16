const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'todos',
//   password: 'password',
//   port: 5432,
// });

const pool = new Pool({
  host: process.env.DATABASE_URL || "localhost",
  password: process.env.DATABASE_PASSWORD || "password",
  user: process.env.DATABASE_USER || "postgres",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
