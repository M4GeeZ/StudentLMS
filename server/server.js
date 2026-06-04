const assignmentRoutes = require("./routes/assignmentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Student Management System API is running' });
});

app.get("/", (req, res) => {
  res.send("Student LMS Backend is running");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use("/api/assignments", assignmentRoutes); 
app.use("/api/attendance", attendanceRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
