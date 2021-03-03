// const mysql = require('mysql');

// class ClasseMysql {
//   constructor(host='127.0.0.1', port='3307', timezone='America/Recife', database='employees', charset='UTF8MB4_0900_AI_CI', user='root', password='root') {
//     //
//     this.connection = mysql.createConnection(host, port, timezone, database, charset, user, password);
//     console.log('Abriu a conexão com o banco...');
//   }

//   getEmp() {
//     var sql = `select * from employees.employees`;
//     return this.query(sql);
//   }


//   query(sql, args) {
//     return new Promise((resolve, reject) => {
//       this.connection.query(sql, args, (err, results, fields) => {
//         if (err) {
//           reject(err);
//         } else {
//           var resultsJSON = {'metadata': {}, 'data': {} };
//           resultsJSON.metadata = fields.map((r)  => Object.assign({}, r));
//           resultsJSON.data     = results.map((r) => Object.assign({}, r));
//           resolve(resultsJSON);
//         }
//       });
//     });
//   }

// }

// module.exports = ClasseMysql;




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