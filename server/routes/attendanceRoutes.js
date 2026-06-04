const express = require("express");
const {
  getAttendance,
  markAttendance,
  deleteAttendance,
} = require("../controllers/attendanceController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getAttendance).post(protect, markAttendance);
router.route("/:id").delete(protect, deleteAttendance);

module.exports = router;