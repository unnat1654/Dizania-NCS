import express from "express";
import {
  createPostController,
  getPostsController,
  getUserPostsController,
} from "../Controllers/postController.js";
import { checkSignIn } from "../Middlewares/authMiddleware.js";

//router object
const router = express.Router();

//ROUTING

//Create Post
router.post("/create-post", checkSignIn, createPostController);

//Get some Posts using query using pagination
// page=> "p",
// posts per page=>"lmt"
router.get("/get-posts", getPostsController);

//Get posts by user using userid query uid, p
router.get("/get-user-posts", getUserPostsController);

//export router
export default router;
