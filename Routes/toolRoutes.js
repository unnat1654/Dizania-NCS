import express from "express";
import {
  getSpecificToolController,
  getToolsController,
} from "../Controllers/toolController.js";

const router = express.Router();

//get all tools information{name, logo}
router.get("/get-tools", getToolsController);

//get a specific tool by its _id
router.get("/get-tool/:id", getSpecificToolController);

export default router;
