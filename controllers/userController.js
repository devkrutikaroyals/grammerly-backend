// const { createClient } = require("@supabase/supabase-js");

// // ✅ Initialize Supabase Client
// const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// // ✅ Fetch all users
// const getAllUsers = async (req, res) => {
//   try {
//     const { data, error } = await supabase
//       .from("users")
//       .select("id, uuid, email, full_name, contact_number, created_at");

//     if (error) {
//       console.error("❌ Error fetching users:", error.message);
//       return res.status(400).json({ error: error.message });
//     }

//     res.status(200).json(data);
//   } catch (err) {
//     console.error("❌ Server Error:", err.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // ✅ Add a new user
// const addUser = async (req, res) => {
//   try {
//     const { email, full_name, contact_number } = req.body;

//     if (!email || !full_name || !contact_number) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // ✅ Insert user without manually adding UUID (Supabase auto-generates it)
//     const { data, error } = await supabase
//       .from("users")
//       .insert([{ email, full_name, contact_number }])
//       .select(); // Fetch inserted user data

//     if (error) {
//       console.error("❌ Error inserting user:", error.message);
//       return res.status(400).json({ error: error.message });
//     }

//     res.status(201).json({ message: "✅ User added successfully", user: data });
//   } catch (err) {
//     console.error("❌ Server Error:", err.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // ✅ Get Total User Count
// const getTotalUsers = async (req, res) => {
//   try {
//     const { count, error } = await supabase
//       .from("users")
//       .select("*", { count: "exact", head: true });

//     if (error) {
//       console.error("❌ Error fetching user count:", error.message);
//       return res.status(400).json({ error: error.message });
//     }

//     res.status(200).json({ totalUsers: count });
//   } catch (err) {
//     console.error("❌ Server Error:", err.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // ✅ Export Controllers
// module.exports = { getAllUsers, addUser, getTotalUsers };


import { createClient } from "@supabase/supabase-js";

// ✅ Initialize Supabase Client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// ✅ Fetch all users
export const getAllUsers = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("id, uuid, email, full_name, contact_number, created_at");

    if (error) {
      console.error("❌ Error fetching users:", error.message);
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error("❌ Server Error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Add a new user
export const addUser = async (req, res) => {
  try {
    const { email, full_name, contact_number } = req.body;

    if (!email || !full_name || !contact_number) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // ✅ Insert user without manually adding UUID (Supabase auto-generates it)
    const { data, error } = await supabase
      .from("users")
      .insert([{ email, full_name, contact_number }])
      .select(); // Fetch inserted user data

    if (error) {
      console.error("❌ Error inserting user:", error.message);
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json({ message: "✅ User added successfully", user: data });
  } catch (err) {
    console.error("❌ Server Error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Get Total User Count
export const getTotalUsers = async (req, res) => {
  try {
    const { count, error } = await supabase
      .from("users")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("❌ Error fetching user count:", error.message);
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ totalUsers: count });
  } catch (err) {
    console.error("❌ Server Error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
