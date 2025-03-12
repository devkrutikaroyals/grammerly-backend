const express = require("express");
const router = express.Router();
const { loginAdmin } = require("../controllers/adminController");

// Optional GET route for debugging (accessing via browser)
router.get("/login", (req, res) => {
  res.send("This endpoint is available via POST for login.");
});

// POST route for login
router.post("/login", loginAdmin);

module.exports = router;
