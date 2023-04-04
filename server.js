const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Root',
  database: 'library'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

app.use(express.json());
app.use(cors());

app.get('/books', (req, res) => {
    connection.query('SELECT * FROM books', (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  
