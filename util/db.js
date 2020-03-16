const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'remotemysql.com',
    user: 'cbkwVSIx9O',
    database: 'cbkwVSIx9O',
    password: '3cUP6xcG4F'
});

module.exports = pool.promise();
