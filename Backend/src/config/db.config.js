'use strict';
const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'admin',
    database : 'booskdb'
});
dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = dbConn;
