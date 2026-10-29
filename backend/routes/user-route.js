import express from "express";
import {
  getAllUser,
  singup,
  login,
  show,
  update,
} from "../controllers/user-controller.js";

const router = express.Router();

router.get("/", getAllUser);
router.get("/show/:id", show);
// router.delete("/delete/:id", destroy);
router.post("/singup", singup);
router.post("/update/:id", update);
router.post("/login", login);
export default router;
