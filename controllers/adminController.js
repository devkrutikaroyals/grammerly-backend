const { createClient } = require("@supabase/supabase-js");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

exports.loginAdmin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }
  
      // 🔹 Convert email to lowercase to match database records
      const lowerCaseEmail = email.toLowerCase();
  
      const { data: admin, error } = await supabase
        .from("admin")
        .select("id, email, password") 
        .eq("email", lowerCaseEmail) // ✅ Ensure case-insensitive search
        .single();
  
      if (error || !admin) {
        return res.status(401).json({ error: "Admin not found or incorrect email" });
      }
  
      // 🔹 Compare plain text passwords directly
      if (password !== admin.password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      res.json({ message: "Login successful", adminData: admin });
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  