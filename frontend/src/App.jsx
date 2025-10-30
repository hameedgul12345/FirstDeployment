import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch from backend (port 5000)
    fetch("https://first-deployment-zeta-lac.vercel.app/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend-Backend Connection Test</h1>
      <p>{message ? message : "Loading..."}</p>
    </div>
  );
}

export default App;
