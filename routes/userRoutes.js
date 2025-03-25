// const express = require("express");
// const { getAllUsers, addUser, getTotalUsers } = require("../controllers/userController"); // ✅ Fixed Import

// const router = express.Router();

// // ✅ Route to Fetch Users
// router.get("/", getAllUsers);

// // ✅ Route to Add User
// router.post("/", addUser);

// // ✅ Route to Get Total User Count
// router.get("/count", getTotalUsers);

// module.exports = router;

import express from "express";
import supabase from "../lib/supabase.js"; // Import Supabase client

const router = express.Router();

// Example route to fetch users
router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("users").select("*");
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;