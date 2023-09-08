import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
} from "../Controllers/authController.js";
//router object
const router = express.Router();

//ROUTING

//REGISTER || Method Post
router.post("/register", registerController);

//LOGIN || Method Post
router.post("/login", loginController);

//Forgot password || Method Patch
router.patch("/forgot-password", forgotPasswordController);
//export router
export default router;
