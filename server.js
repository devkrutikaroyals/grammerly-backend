// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");

// // ✅ Import Routes
// const userRoutes = require("./routes/userRoutes");
// const subscriptionRoutes = require("./routes/subscriptionRoutes");
// const unsubscriptionRoutes = require("./routes/unsubscriptionRoutes");
// const adminRoutes = require("./routes/adminRoutes");

// // ✅ Initialize Express App
// const app = express();
// app.use(express.json());
// app.use(cors());

// // ✅ Load Supabase credentials from .env
// const SUPABASE_URL = process.env.SUPABASE_URL;
// const SUPABASE_KEY = process.env.SUPABASE_KEY;

// if (!SUPABASE_URL || !SUPABASE_KEY) {
//   console.error("❌ Missing SUPABASE_URL or SUPABASE_KEY in .env file");
//   process.exit(1);
// } else {
//   console.log("✅ Supabase Config Loaded Successfully");
// }

// // ✅ Register Routes
// app.use("/api/users", userRoutes);
// app.use("/api/subscriptions", subscriptionRoutes);
// app.use("/api/unsubscriptions", unsubscriptionRoutes);
// app.use("/api/admin", adminRoutes);

// // ✅ Health Check Route
// app.get("/api/health", (req, res) => {
//   res.status(200).json({ status: "success", message: "API is running smoothly 🚀" });
// });

// // ✅ Subscription Count Route for Debugging
// app.get("/api/subscriptions/count", (req, res) => {
//   res.status(200).json({ message: "Subscription count endpoint is working" });
// });

// // ✅ Test API Route
// app.get("/", (req, res) => res.send("🚀 Backend is running..."));

// // ✅ Global Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error("❌ Server Error:", err.stack);
//   res.status(500).json({ error: "Internal Server Error" });
// });

// // ✅ Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";
// import express from "express";
// import cors from "cors";

// // ✅ Fix: Ensure dotenv loads correctly
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// dotenv.config({ path: path.join(__dirname, ".env") });

// // ✅ Load Supabase credentials from .env
// const SUPABASE_URL = process.env.SUPABASE_URL;
// const SUPABASE_KEY = process.env.SUPABASE_KEY;

// if (!SUPABASE_URL || !SUPABASE_KEY) {
//   console.error("❌ Missing SUPABASE_URL or SUPABASE_KEY in .env file");
//   process.exit(1);
// } else {
//   console.log("✅ Supabase Config Loaded Successfully");
// }

// // ✅ Import Routes
// import userRoutes from "./routes/userRoutes.js";
// import subscriptionRoutes from "./routes/subscriptionRoutes.js";
// import unsubscriptionRoutes from "./routes/unsubscriptionRoutes.js";
// import adminRoutes from "./routes/adminRoutes.js";

// // ✅ Initialize Express App
// const app = express();
// app.use(express.json());
// app.use(cors());

// // ✅ Register Routes
// app.use("/api/users", userRoutes);
// app.use("/api/subscriptions", subscriptionRoutes);
// app.use("/api/unsubscriptions", unsubscriptionRoutes);
// app.use("/api/admin", adminRoutes);

// // ✅ Health Check Route
// app.get("/api/health", (req, res) => {
//   res.status(200).json({ status: "success", message: "API is running smoothly 🚀" });
// });

// // ✅ Test API Route
// app.get("/", (req, res) => res.send("🚀 Backend is running..."));

// // ✅ Global Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error("❌ Server Error:", err.stack);
//   res.status(500).json({ error: "Internal Server Error" });
// });

// // ✅ Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));



import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";

// Load environment variables
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });

// Load Supabase credentials from .env
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("❌ Missing SUPABASE_URL or SUPABASE_KEY in .env file");
  process.exit(1);
} else {
  console.log("✅ Supabase Config Loaded Successfully");
}

// Import Routes
import userRoutes from "./routes/userRoutes.js";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";
import unsubscriptionRoutes from "./routes/unsubscriptionRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

// Initialize Express App
const app = express();
app.use(express.json());
app.use(cors());

// Register Routes

app.use("/api/users", userRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/unsubscriptions", unsubscriptionRoutes);
app.use("/api/admin", adminRoutes);

// Health Check Route
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "success", message: "API is running smoothly 🚀" });
});

// Test API Route
app.get("/", (req, res) => res.send("🚀 Backend is running..."));

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));