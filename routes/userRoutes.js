const express = require("express");
const { getAllUsers, addUser, getTotalUsers } = require("../controllers/userController"); // ✅ Fixed Import

const router = express.Router();

// ✅ Route to Fetch Users
router.get("/", getAllUsers);

// ✅ Route to Add User
router.post("/", addUser);

// ✅ Route to Get Total User Count
router.get("/count", getTotalUsers);

module.exports = router;
