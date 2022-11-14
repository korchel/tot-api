const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: 'anastasia',
//     host: 'localhost',
//     database: 'users',
//     password: '',
//     port: 5432,
// });

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
})
module.exports = pool;