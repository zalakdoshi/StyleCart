import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/user-route.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/backend/user", router);

mongoose
  .connect(
    "mongodb+srv://zalakdoshi2005:zalakdoshi2005@cluster0.rnl5qhl.mongodb.net/Intern_project?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Conected To Database And Listening To Localhost 5000")
  )
  .catch((err) => console.log(err));
