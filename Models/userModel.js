import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
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
    },
    likedPosts: [{ type: mongoose.ObjectId, ref: "Posts" }],
  },
  { timestamps: true }
);
export default mongoose.model("Users", userSchema, "Users");
