const Attendance = require("../models/Attendance");

const getAttendance = async (req, res) => {
  const attendance = await Attendance.find()
    .populate("student")
    .sort({ createdAt: -1 });

  res.json(attendance);
};

const markAttendance = async (req, res) => {
  const { student, status, date } = req.body;

  const alreadyMarked = await Attendance.findOne({ student, date });

  if (alreadyMarked) {
    alreadyMarked.status = status;
    const updated = await alreadyMarked.save();
    return res.json(updated);
  }

  const attendance = await Attendance.create({
    student,
    status,
    date,
  });

  res.status(201).json(attendance);
};

const deleteAttendance = async (req, res) => {
  const attendance = await Attendance.findById(req.params.id);

  if (!attendance) {
    return res.status(404).json({ message: "Attendance not found" });
  }

  await attendance.deleteOne();
  res.json({ message: "Attendance deleted" });
};

module.exports = {
  getAttendance,
  markAttendance,
  deleteAttendance,
};