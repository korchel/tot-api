const Pool = require("pg").Pool;

// const pool = new Pool({
//     user: '',
//     host: 'localhost',
//     database: 'postgres',
//     password: '',
//     port: 5432,
// });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  password: process.env.DATABASE_PASSWORD,
  user: process.env.DATABASE_USER,

  ssl: {
    rejectUnauthorized: false,
  },
});
module.exports = pool;
