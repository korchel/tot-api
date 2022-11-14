const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'anastasia',
    host: 'localhost',
    database: 'users',
    password: '',
    port: 5432,
});

module.exports = pool;