const Pool = require('pg').Pool;

const pool = new Pool({  
    host: 'ec2-18-209-187-54.compute-1.amazonaws.com',  
    user: 'xprbzbsspnzqns',  
    database: 'dakcdolm15o21p',  
    password: '0611d0700325758169c8975b70c81ea0b4ed5fb47b3394aa51280f1a0772ee5c',
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