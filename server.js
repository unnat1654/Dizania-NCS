import express from "express";
import "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./Routes/authRoutes.js";
import postRoutes from "./Routes/postRoutes.js";
import connectDB from "./Config/db.js";

//env Configuration
dotenv.config();

//connecting to Database
connectDB();

//REST Object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/v1/auth", authRoutes);
app.use("/v1/post", postRoutes);

//rest api
app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "WELCOME TO DIZANIA",
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bgCyan);
});
