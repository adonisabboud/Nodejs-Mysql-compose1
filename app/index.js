const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World!!')
})

 
const db = mysql.createConnection({
    "host": process.env.MYSQL_HOST,
    "user": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE
});

db.connect((err) => {
    if (err) {
        console.error('❌ Connection failed:', err.message);
        return;
    }
    console.log('✅ Connected to the MySQL database...');
}); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
