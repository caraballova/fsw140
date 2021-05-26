const mysql = require('mysql');
const express = require('express')
const sqlRouter = express.Router()

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'googoo8404',
    database: 'wk6sqldb'
  }
);

// Get all

sqlRouter.get('/alldata', (req, res, next) => {
  let sql = "SELECT * FROM TABLE1"
  db.query(sql, (err, result)=> {
    if(err){
      return next(err);
    }
    res.send(result)
  })
})

module.exports = sqlRouter