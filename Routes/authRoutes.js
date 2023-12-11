import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
  deleteAccountController,
  createProfile,
  showProfile
} from "../Controllers/authController.js";
import { checkSignIn } from "../Middlewares/authMiddleware.js";

//router object
const router = express.Router();

//ROUTING

//REGISTER || Method Post
router.post("/register", registerController);

//LOGIN || Method Post
router.post("/login", loginController);

//Forgot password || Method Patch
router.patch("/forgot-password", forgotPasswordController);

//Delete account || Method Delete
router.delete("/delete-account", checkSignIn, deleteAccountController);

// Create User Profile || Method Post
router.post("/create-profile",createProfile)

// Get User Profile || Method Get
router.post("show_profile",showProfile)

//export router
export default router;
