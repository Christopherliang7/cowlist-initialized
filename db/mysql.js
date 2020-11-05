const mysql = require('mysql');

exports.dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cowslist'
})