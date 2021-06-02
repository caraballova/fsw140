  
const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'googoo8404',
    database: 'salesorders'
  }
);

db.connect((err) => {
  if(err) {
    console.log(err)
  }
  console.log('Successfully connected to the SQL Database.')
});

app.use(express.json());

app.use('/products', require('./routes/productsRouter'));

app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "Unauthorized Error"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
});

app.listen(9000, () => {
  console.log("This server is running on Port: 9000")
});