const { createClient } = require("@supabase/supabase-js");

// ✅ Initialize Supabase Client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// ✅ Fetch all unsubscriptions
const getAllUnsubscriptions = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("unsubscriptions")
      .select("id, users(full_name, email), package, end_date, is_blocked, is_deleted");

    if (error) {
      console.error("❌ Error fetching unsubscriptions:", error.message);
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error("❌ Server Error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Fetch total count of unsubscriptions
const getTotalUnsubscriptions = async (req, res) => {
  try {
    const { count, error } = await supabase
      .from("unsubscriptions")
      .select("id", { count: "exact", head: true });

    if (error) {
      console.error("❌ Error fetching unsubscription count:", error.message);
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ totalUnsubscriptions: count });
  } catch (err) {
    console.error("❌ Server Error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Export Controllers
module.exports = { getAllUnsubscriptions, getTotalUnsubscriptions };
