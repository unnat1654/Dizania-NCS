import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    username: {
      type: mongoose.ObjectId,
      ref: "Users",
      required: true,
    },
    caption: {
      type: String,
      maxlength: 50,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        username: {
          type: mongoose.ObjectId,
          ref: "Users",
        },
        comment: {
          type: String,
          minlength: 1,
          maxlength: 200,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Posts", postSchema, "Posts");
