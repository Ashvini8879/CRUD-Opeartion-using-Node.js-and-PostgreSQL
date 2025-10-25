const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'employees_db',
  password: 'ashu4346',        // Add your Password
  port: 5432
});

// POST - Add employee
app.post("/employees", async (req, res) => {
  try {
    const { name, email, details } = req.body;
    const result = await pool.query(
      "INSERT INTO employees (name, email, details) VALUES ($1, $2, $3) RETURNING *",
      [name, email, details]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//  GET - All employees
app.get("/employees", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM employees");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET - One employee
app.get("/employees/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM employees WHERE id = $1", [
      req.params.id,
    ]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// PUT - Update employee
app.put("/employees/:id", async (req, res) => {
  try {
    const { name, email, details } = req.body;
    const result = await pool.query(
      "UPDATE employees SET name=$1, email=$2, details=$3 WHERE id=$4 RETURNING *",
      [name, email, details, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//  DELETE - Remove employee
app.delete("/employees/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM employees WHERE id=$1", [req.params.id]);
    res.send("Employee deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
