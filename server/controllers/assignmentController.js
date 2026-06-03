const Assignment = require("../models/Assignment");

const getAssignments = async (req, res) => {
  const assignments = await Assignment.find().sort({ createdAt: -1 });
  res.json(assignments);
};

const createAssignment = async (req, res) => {
  const { title, subject, description, deadline, attachmentLink } = req.body;

  const assignment = await Assignment.create({
    title,
    subject,
    description,
    deadline,
    attachmentLink,
  });

  res.status(201).json(assignment);
};

const deleteAssignment = async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);

  if (!assignment) {
    return res.status(404).json({ message: "Assignment not found" });
  }

  await assignment.deleteOne();
  res.json({ message: "Assignment deleted" });
};

module.exports = {
  getAssignments,
  createAssignment,
  deleteAssignment,
};