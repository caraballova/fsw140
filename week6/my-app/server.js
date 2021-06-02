const express = require("express");
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'googoo8404',
    database: 'wk6sqldb'
  }
);

db.connect((err) => {
  if (err){
    console.log(err);
  }
  console.log("Successfully connected to SQL DataBase.")
});

app.use(express.json());

app.use("/", require('./routes/sqlRouter'));

app.get('/createtable', (req, res, next) => {
  let sql = 'create table table1 (products VARCHAR(30), price INT)';
  db.query(sql, (err, result) => {
    if(err){
      return next(err);
    }
    console.log(result)
    res.send('Table has been created!')
  })
})

app.get('/insertrow1', (req, res, next) => {
  let sql = 'insert into table1 values ("blueray player", 15)'
  db.query(sql, (err, result) => {
    if(err){
      return next(err);
    }
    console.log(result)
    res.send("INSERTED")
  })
});

app.get('/insertrow2', (req, res, next) => {
  let sql = 'insert into table1 values ("car", 2899)'
  db.query(sql, (err, result) => {
    if(err){
      return next(err);
    }
    console.log(result)
    res.send("INSERTED")
  })
});

app.get('/getdata', (req, res, next) => {
  let sql = "select * from table1";
  db.query(sql, (err, result) => {
    if (err){
      return next(err);
    }
    console.log(result)
    res.send(result)
  })
});

app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "Unauthorized Error"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
});

app.listen(5000, () => {
  console.log("This server is running on Port: 5000")
});