import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.feabdwdplmspjkijgoiu.supabase.co, import.meta.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlYWJkd2RwbG1zcGpraWpnb2l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NzQ1OTgsImV4cCI6MjA3NTU1MDU5OH0.nrHU2BOvXTpGcfF_SMWehprzA82OBXAcmnX9wljHVP0);

export default function supabase() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("instruments").select();
    setInstruments(data);
  }

  return (
    <ul>
      {instruments.map((instrument) => (
        <li key={instrument.name}>{instrument.name}</li>
      ))}
    </ul>
  );
}

