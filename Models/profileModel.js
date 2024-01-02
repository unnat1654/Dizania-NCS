import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    googleId: String,

    username: {
      type: mongoose.ObjectId,
      ref: "Users",
      required: true,
    },
    displayName: {
      type: String,
    },
    profilePicture: {
      type: String,
      default: "https://www.gravatar.com/avatar/?d=identicon",
    },
    // description: {
    //   type: String,
    //   maxlength: 1000,
    // },
    bio: {
      type: String,
      default:
        "Passionate UI/UX Designer | 🎨 Creating Seamless Experiences |Problem Solver Extraordinaire | Let's Craft Digital Magic! ✨ #UIUXDesign",
    },
    // star: {
    //   type: Number,
    //   enum: [1, 2, 3, 4, 5],
    // },
    stars: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5],
      default: 2,
    },
    rank: {
      type: Number,
      default: 0,
    },
    competetion: {
      participated: {
        type: Number,
        default: 1,
      },
      currStreak: {
        type: Number,
        default: 1,
      },
      maxStreak: {
        type: Number,
        default: 1,
      },
    },
    // tools: [{ type: mongoose.ObjectId, ref: "Tools" }],
    tools: [
      {
        name: {
          type: String,
          default: "figma",
        },
        // slug: {
        //   type: String,
        //   default: "www.figma.com",
        // },
      },
    ],
    most_used: [
      {
        name: {
          type: String,
          default: "figma",
        },
        slug: {
          type: String,
          default: "www.figma.com",
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
    connections: [
      {
        platform: {
          type: String,
          default: "linkedin",
        },
        // url: {
        //   type: String,
        //   default: "www.linkedin.com",
        // },
      },
    ],
    post: [
      {
        img: {
          type: String,
          // default: "./assets/post.png",
        },
        link: {
          type: String,
          default: "www.google.com",
        },
      },
    ],
    numCompetitions: {
      type: Number,
      default: 0,
    },
    quote: {
      type: String,
      default:
        "Designing interfaces isn't just about pixels; it's about creating experiences that leave a lasting impression.",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Profiles", profileSchema, "Profiles");
