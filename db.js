const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'jcmjedpjiujqhy',
    host: 'ec2-63-32-248-14.eu-west-1.compute.amazonaws.com',
    database: 'd98950ohdghuhu',
    password: 'c5a28858b94178d759762e0dfea3d0283b16b46cb3465f8e82d2341e182e9a0f',
    port: 5432,
});

module.exports = pool;