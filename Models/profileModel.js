import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    username: {
      type: mongoose.ObjectId,
      ref: "Users",
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      maxlength: 1000,
    },
    star: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
    },
    rank: {
      type: Number,
    },
    competetion: {
      participated: {
        type: Number,
      },
      streak: {
        type: Number,
      },
      maxStreak: {
        type: Number,
      },
    },
    tools: [
      {
        name: {
          type: String,
        },
        slug: {
          type: String,
        },
      },
    ],
    links: {
      instagram: {
        type: String,
      },
      behance: {
        type: String,
      },
      dribble: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      facebook: {
        type: String,
      },
    },
    quote: {
      type: String,
      maxlength: 200,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Profiles", profileSchema, "Profiles");
