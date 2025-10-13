import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Splash from "./pages/Splash.jsx";
import "./App.css";

// ✅ Initialize Supabase client using your environment variables
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);

export default function App() {
  const [instruments, setInstruments] = useState([]);

  // ✅ Fetch instruments when component mounts
  useEffect(() => {
    getInstruments();
  }, []);

  // ✅ Define async fetch function
  async function getInstruments() {
    const { data, error } = await supabase.from("waitlist").select();

    if (error) {
      console.error("Error fetching waitlist:", error);
      return;
    }

    setInstruments(data);
  }

  return (
    <div className="App">
      <Splash />
    </div>
  );
}