const express = require("express");
const {
  getAssignments,
  createAssignment,
  deleteAssignment,
} = require("../controllers/assignmentController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getAssignments).post(protect, createAssignment);
router.route("/:id").delete(protect, deleteAssignment);

module.exports = router;