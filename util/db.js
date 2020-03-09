const Pool = require('pg').Pool;

const pool = new Pool({  
    host: 'localhost',  
    user: 'postgres',  
    database: 'web_test',  
    password: 'root',
    port: 5432,
    ssl: false
});  

module.exports = pool;


// const mysql = require('mysql2');
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'artists',
//     password: ''
// });

// module.exports = pool.promise();