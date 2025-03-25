// const express = require("express");
// const router = express.Router();
// const { loginAdmin } = require("../controllers/adminController");

// // Optional GET route for debugging (accessing via browser)
// router.get("/login", (req, res) => {
//   res.send("This endpoint is available via POST for login.");
// });

// // POST route for login
// router.post("/login", loginAdmin);

// module.exports = router;
import express from "express";
import { getAdminByEmail, updateProfile, changePassword, deleteAccount, loginAdmin } from "../controllers/adminController.js";

const router = express.Router();

// Admin routes
router.get("/", getAdminByEmail);// GET /api/admin
router.put("/update", updateProfile); // PUT /api/admin/update
router.put("/change-password", changePassword); // PUT /api/admin/change-password
router.delete("/delete", deleteAccount); // DELETE /api/admin/delete
router.post("/login", loginAdmin); // POST /api/admin/login

export default router;