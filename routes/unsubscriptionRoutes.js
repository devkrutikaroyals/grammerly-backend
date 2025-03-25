// const express = require("express");
// const { getAllUnsubscriptions, getTotalUnsubscriptions } = require("../controllers/unsubscriptionController");

// const router = express.Router();

// // ✅ Route to Fetch All Unsubscriptions
// router.get("/", getAllUnsubscriptions);

// // ✅ Route to Fetch Total Unsubscription Count
// router.get("/count", getTotalUnsubscriptions);

// module.exports = router;


import express from "express";
import { getAllUnsubscriptions, getTotalUnsubscriptions } from "../controllers/unsubscriptionController.js";

const router = express.Router();

// ✅ Route to Fetch All Unsubscriptions
router.get("/", getAllUnsubscriptions);

// ✅ Route to Fetch Total Unsubscription Count
router.get("/count", getTotalUnsubscriptions);

export default router; // ✅ Correct ES module export
