const express = require("express");
const cors = require("cors");
const { addStudent, viewStudentWithBook, viewStudent, updateStudent, deleteStudent } = require("./controller/student.controller");
const { addBook, viewBook, viewBookWithStudent, updateBook, deleteBook } = require("./controller/book.controller");
const { addOrders, viewOrders } = require("./controller/order.controller");
const { loginLibrarian } = require("./controller/librarian.controller");
require('./models/index')
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.json({ message: "Welcome to Library." });
});
//studs
app.post('/add-student', addStudent)
app.get('/view-student', viewStudent)
app.patch('/update-student/:id', updateStudent)
app.delete('/delete-student/:id', deleteStudent)
app.get('/view-student-details/:id', viewStudentWithBook)

//books
app.post('/add-book', addBook)
app.get('/view-book', viewBook)
app.patch('/update-book/:id', updateBook)
app.delete('/delete-book/:id', deleteBook)
app.get('/view-book-details/:id', viewBookWithStudent)

//orders
app.post('/add-order', addOrders)
app.get('/view-order', viewOrders)


app.post('/login-admin', loginLibrarian)


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});