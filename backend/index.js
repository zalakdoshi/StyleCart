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

mongoose
  .connect(MONGODB_URI)
  .then(() => app.listen(process.env.PORT || 5000))
  .then(() =>
    console.log("Connected To Database And Listening To Port", process.env.PORT || 5000)
  )
  .catch((err) => console.log(err));
