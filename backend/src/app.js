import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ CORS setup for Vite frontend (localhost:5173)
app.use(
  cors({
    origin: "https://chimerical-madeleine-e8cc31.netlify.app",
    credentials: true,
  })
);

app.use(express.json());

// ✅ Test route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express backend 👋" });
});



// ✅ Test route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express backend 👋" });
});
// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server running on http://localhost:${PORT}`));
