// const { createClient } = require("@supabase/supabase-js");
// const bcrypt = require("bcryptjs");
// require("dotenv").config();

// const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// exports.loginAdmin = async (req, res) => {
//     try {
//       const { email, password } = req.body;
  
//       if (!email || !password) {
//         return res.status(400).json({ error: "Email and password are required" });
//       }
  
//       // 🔹 Convert email to lowercase to match database records
//       const lowerCaseEmail = email.toLowerCase();
  
//       const { data: admin, error } = await supabase
//         .from("admin")
//         .select("id, email, password") 
//         .eq("email", lowerCaseEmail) // ✅ Ensure case-insensitive search
//         .single();
  
//       if (error || !admin) {
//         return res.status(401).json({ error: "Admin not found or incorrect email" });
//       }
  
//       // 🔹 Compare plain text passwords directly
//       if (password !== admin.password) {
//         return res.status(401).json({ error: "Invalid credentials" });
//       }
  
//       res.json({ message: "Login successful", adminData: admin });
//     } catch (err) {
//       console.error("Login error:", err);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   };
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// ✅ Get Admin Profile

export const getAdminByEmail = async (req, res) => {
  try {
    const { email } = req.query; // ✅ Extract email from query params

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const { data, error } = await supabase
      .from("admin")
      .select("*")
      .eq("email", email)
      .single(); // Fetch only one record
      console.log(data);
    if (error || !data) {
      return res.status(404).json({ error: "Admin not found" });
    }


    res.status(200).json(data); // ✅ Send admin data to frontend
  } catch (error) {
    console.error("Error fetching admin:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Update Profile
export const updateProfile = async (req, res) => {
  try {
    const {id,email, name, phone } = req.body;
    console.log("Updating Admin:", email, name, phone);

    const { data, error } = await supabase
      .from("admin")
      .update({ name, phone})
      .eq("email", email) // Use email instead of id
      .select();

    if (error) throw error;

    res.json({ message: "Profile updated successfully", updatedAdmin: data });
  } catch (error) {
    console.error("Update Profile Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};


// ✅ Change Password
export const changePassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    // console.log("Changing Password for Admin ID:", id);

    const { data: admin, error } = await supabase
      .from("admin")
      .select("password")
      .eq("email", email)
      .single();

    if (error || !admin) return res.status(404).json({ error: "Admin not found" });

    // const isMatch = await bcrypt.compare(oldPassword, admin.password);

    if (oldPassword !== admin.password) {
      return res.status(400).json({ error: "Incorrect old password" });
    }console.log(newPassword);

    // const hashedPassword = await bcrypt.hash(newPassword, 10);
    await supabase.from("admin").update({ password: newPassword }).eq("email", email);
    
    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Change Password Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete Account
export const deleteAccount = async (req, res) => {
  try {
    const { id } = req.body;
    console.log("Deleting Admin ID:", id);

    const { error } = await supabase.from("admins").delete().eq("id", id);
    if (error) throw error;

    res.json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("Delete Account Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// ✅ Admin Login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Email and password are required" });

    const lowerCaseEmail = email.toLowerCase();
    console.log("Logging in admin:", lowerCaseEmail);

    const { data: admin, error } = await supabase
      .from("admins")
      .select("id, email, password")
      .eq("email", lowerCaseEmail)
      .single();

    if (error || !admin) return res.status(401).json({ error: "Admin not found or incorrect email" });

    const isPasswordCorrect = await bcrypt.compare(password, admin.password);
    if (!isPasswordCorrect) return res.status(401).json({ error: "Invalid credentials" });

    res.json({ message: "Login successful", adminData: admin });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};