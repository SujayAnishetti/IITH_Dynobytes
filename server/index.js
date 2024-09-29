const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors()); // Allow requests from your frontend
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // your MySQL username
  password: 'mysqljfsd', // your MySQL password
  database: 'strapi_fa' // your MySQL database
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Endpoint to get all shirts
app.get('/api/shirts', (req, res) => {
  const sql = 'SELECT * FROM shirts';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Fetch all shirts from MySQL database
app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const sql = 'SELECT * FROM shirts WHERE id = ?';
    db.query(sql, [productId], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(result[0]);
    });
  });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
