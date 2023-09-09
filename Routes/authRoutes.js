import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
  deleteAccountController,
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

//export router
export default router;
