const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/students');
const db = mongoose.connection;

// Define a schema for your data
const studentSchema = new mongoose.Schema({
    student_name: String,
    student_email: String,
    student_address: String,
    student_phone: String,
  });
  
  // Create a model based on the schema
  const Student = mongoose.model('Student', studentSchema);
  
  app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file as the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit', (req, res) => {
    // Create a new Student instance with the data from the request
  const newStudent = new Student({
    student_name: req.body.student_name,
    student_email: req.body.student_email,
    student_address: req.body.student_address,
    student_phone: req.body.student_phone,
  });

  console.log('New student:', newStudent);

  // Save the new student to the database
  newStudent.save().then((savedStudent) => {
    console.log('Student saved:', savedStudent);
    res.status(201).json(savedStudent);
  }).catch((err) => {
    console.error('Error saving student:', err);
    res.status(500).send('Error saving student: ' + err.message);
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
