import Express from "express";
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  contact: {
    type: String,
    required: true,
    minlength: 10,
  },
  type: {
    type: String,
  },
  status: {
    type: String,
  },
});
export default mongoose.model("User", userSchema);
