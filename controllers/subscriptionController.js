const { createClient } = require("@supabase/supabase-js");

// ✅ Initialize Supabase Client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// ✅ Fetch all subscriptions with user details
const getAllSubscriptions = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("subscriptions")
      .select("id, package, start_date, end_date, users(full_name)");

    if (error) {
      console.error("❌ Error fetching subscriptions:", error.message);
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error("❌ Server Error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Fetch total count of subscriptions
const getTotalSubscriptions = async (req, res) => {
    try {
      const { count, error } = await supabase
        .from("subscriptions")
        .select("*", { count: "exact", head: true }); // Ensure correct count query
  
      if (error) {
        console.error("❌ Error fetching subscription count:", error.message);
        return res.status(400).json({ error: error.message });
      }
  
      res.status(200).json({ totalSubscriptions: count });
    } catch (err) {
      console.error("❌ Server Error:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
// ✅ Export Controllers
module.exports = { getAllSubscriptions, getTotalSubscriptions };
