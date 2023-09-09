import express from "express";
import {
  createPostController,
  getPostsController,
} from "../Controllers/postController.js";
import { checkSignIn } from "../Middlewares/authMiddleware.js";

//router object
const router = express.Router();

//ROUTING

//Create Post
router.post("/create-post", checkSignIn, createPostController);

//Get some Products
router.get("/get-posts/:num", getPostsController);

//export router
export default router;
