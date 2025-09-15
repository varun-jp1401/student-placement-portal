const mysql = require('mysql');
const { promisify } = require('util');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'student_placement_portal'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

const query = promisify(db.query).bind(db);

const Student = {
  create: (studentData) => {
    const sql = 'INSERT INTO students (name, email, password) VALUES (?, ?, ?)';
    return query(sql, [studentData.name, studentData.email, studentData.password]);
  },
  
  findByEmail: (email) => {
    const sql = 'SELECT * FROM students WHERE email = ?';
    return query(sql, [email]);
  }
};

module.exports = Student;