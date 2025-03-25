// const express = require("express");
// const { getAllSubscriptions, getTotalSubscriptions } = require("../controllers/subscriptionController");

// const router = express.Router();

// // ✅ Route to Fetch All Subscriptions
// router.get("/", getAllSubscriptions);

// // ✅ Route to Fetch Subscription Count
// router.get("/count", getTotalSubscriptions);

// module.exports = router;

import express from "express";
import { getAllSubscriptions, getTotalSubscriptions } from "../controllers/subscriptionController.js";

const router = express.Router();

// ✅ Route to Fetch All Subscriptions
router.get("/", getAllSubscriptions);

// ✅ Route to Fetch Subscription Count
router.get("/count", getTotalSubscriptions);

export default router; // ✅ Correct ES module export
