
# 📌 Employee CRUD API — Node.js + Express + PostgreSQL

A simple backend REST API built using **Node.js**, **Express**, and **PostgreSQL** that performs full CRUD operations on an `employees` table.

---

## 🚀 Features

✅ Add new employee
✅ Fetch all employees
✅ Fetch employee by ID
✅ Update employee details
✅ Delete employee
✅ JSON field support for employee details (like department & experience)

---

## 🛠️ Tech Stack

| Technology | Purpose                       |
| ---------- | ----------------------------- |
| Node.js    | Runtime environment           |
| Express.js | Web server framework          |
| PostgreSQL | Database                      |
| pg library | PostgreSQL client for Node.js |

---

## 📦 Installation & Setup

### Install Dependencies

```sh
npm install
```

### Setup PostgreSQL Database

Open `pgAdmin` or terminal:

```sql
CREATE DATABASE employees_db;

\c employees_db

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  details JSON
);
```

###  Configure Database Connection

Inside `index.js`, update:

```js
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'employees_db',
  password: 'yourpassword',
  port: 5432
});
```

###  Start the Server

```sh
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 📌 API Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| POST   | `/employees`     | Add a new employee      |
| GET    | `/employees`     | Get all employees       |
| GET    | `/employees/:id` | Get a specific employee |
| PUT    | `/employees/:id` | Update an employee      |
| DELETE | `/employees/:id` | Delete an employee      |

---

## ✅ Example JSON Body for POST & PUT

```json
{
  "name": "Ashvini",
  "email": "ashvini@example.com",
  "details": {
    "department": "IT",
    "experience": 1
  }
}
```

---

## ✅ Testing With Thunder Client 

* Use **POST/PUT** with **Body → JSON**
* Use **GET** in browser and thunder client
* Use **DELETE** for removing employees

---

## 📂 Project Structure

```
employee-crud-express/
│
├── index.js          # Main server file
├── package.json
├── package-lock.json
├── OUTPUT.pdf        # View the OUTPUT.pdf file to see the screenshots
└── README.md

```
 
