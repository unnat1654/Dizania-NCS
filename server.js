import express from "express";
import "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./Routes/authRoutes.js";
import postRoutes from "./Routes/postRoutes.js";
import toolRoutes from "./Routes/toolRoutes.js";
import connectDB from "./Config/db.js";
import bodyParser from "body-parser";
//env Configuration
dotenv.config();

//connecting to Database
connectDB();

//REST Object
const app = express();

//middlewares
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/v1/auth", authRoutes);
app.use("/v1/post", postRoutes);
app.use("/v1/tool", toolRoutes);

//rest api
app.get("/123", (req, res) => {
  res.status(200).send({
    success: true,
    message: "WELCOME TO DIZANIA",
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bgCyan);
});
