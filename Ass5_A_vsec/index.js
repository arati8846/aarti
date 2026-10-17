const express = require("express");

const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Rahul", marks: 80 },
  { id: 2, name: "Priya", marks: 75 }
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  students.push(req.body);
  res.send("Student added successfully");
});

app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find(s => s.id === id);

  if (student) {
    student.name = req.body.name;
    student.marks = req.body.marks;
    res.send("Student updated successfully");
  } else {
    res.send("Student not found");
  }
});

app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  students = students.filter(s => s.id !== id);

  res.send("Student deleted successfully");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});