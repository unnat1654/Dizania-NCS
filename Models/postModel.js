import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.ObjectId,
      ref: "Users",
      required: true,
    },
    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    caption: {
      type: String,
      maxlength: 250,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        user: {
          type: mongoose.ObjectId,
          ref: "Users",
        },
        comment: {
          type: String,
          minlength: 1,
          maxlength: 500,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Posts", postSchema, "Posts");
