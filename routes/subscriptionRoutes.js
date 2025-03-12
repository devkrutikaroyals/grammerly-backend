const express = require("express");
const { getAllSubscriptions, getTotalSubscriptions } = require("../controllers/subscriptionController");

const router = express.Router();

// ✅ Route to Fetch All Subscriptions
router.get("/", getAllSubscriptions);

// ✅ Route to Fetch Subscription Count
router.get("/count", getTotalSubscriptions);

module.exports = router;
