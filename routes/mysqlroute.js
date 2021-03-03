const express = require('express');
const router = express.Router();

const sql = require('../config/database/mysql');

router.get('/', function(req, res, next) {
  sql.query('select * from employees order by emp_no asc limit 0, 5', function(err, result) {
    console.log(result);
    res.send(result);
  });
});

module.exports = router;