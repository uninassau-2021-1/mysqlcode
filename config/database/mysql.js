"use strict"; 

var mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'app',
  password : 'app',
  database : 'employees',
  port     : '3307', timezone: 'America/Recife'
});

module.exports = connection;
