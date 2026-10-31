import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/user-route.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/backend/user", router);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/stylecart";
const PORT = process.env.PORT || 5001;

// Start server even if MongoDB connection fails
app.listen(PORT, () => {
  console.log(`StyleCart Backend running on port ${PORT}`);
});

// Try to connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.warn("⚠️  MongoDB connection failed. Server running without database.");
    console.warn("   Configure MONGODB_URI in .env to connect to a database");
    console.warn("   Error:", err.message);
  });
