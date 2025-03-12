const express = require("express");
const { getAllUnsubscriptions, getTotalUnsubscriptions } = require("../controllers/unsubscriptionController");

const router = express.Router();

// ✅ Route to Fetch All Unsubscriptions
router.get("/", getAllUnsubscriptions);

// ✅ Route to Fetch Total Unsubscription Count
router.get("/count", getTotalUnsubscriptions);

module.exports = router;
