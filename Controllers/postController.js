import postModel from "../Models/postModel.js";
import { cloudinary } from "../Config/cloudinary.js";
import userModel from "../Models/userModel.js";

//create post || Method Post
export const createPostController = async (req, res) => {
  const { caption, tool, user, image } = req.body;
  try {
    const { public_id, secure_url } = await cloudinary.uploader.upload(image, {
      folder: "posts",
    });
    const post = new postModel({
      user,
      caption,
      tool,
      image: { public_id, secure_url },
    });
    await post.save();
    res.status(201).send({
      success: true,
      message: "Post Created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while creating post",
      error,
    });
  }
};

//getting mutliple posts || Method Get
// for discover page
export const getPostsController = async (req, res) => {
  const { p, lmt } = req.query;
  const offset = (p - 1) * lmt;
  try {
    const posts = await postModel
      .find({})
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(lmt)
      .populate("user", "username")
      .select("image user caption");

    res.status(200).send({
      success: true,
      message: "Posts found Successfully",
      posts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting posts",
      error,
    });
  }
};

//getting user posts || Method Get
export const getUserPostsController = async (req, res) => {
  const { uid, p } = req.query;
  try {
    const posts = await postModel
      .find({ _id: uid })
      .sort({ createdAt: -1 })
      .skip(15 * p)
      .limit(15)
      .select("photo");
    res.status(200).send({
      success: true,
      message: "User Posts found Successfully",
      posts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting user posts",
      error,
    });
  }
};

//liking and disliking post || method patch
export const likePostController = async (req, res) => {
  const { like, post_id, user_id } = req.body;
  try {
    const user = await userModel.findOne({ _id: user_id });
    const already_liked = user.likedPosts.indexOf(String(post_id));
    if (already_liked > -1 && like) {
      return res
        .status(200)
        .send({ success: false, message: "Post liked already" });
    }
    const post = await postModel.findOne({ _id: post_id });
    like ? (post.likes = post.likes + 1) : (post.likes = post.likes - 1);
    await post.save();
    if (like) {
      user.likedPosts = [...user.likedPosts, String(post_id)];
    } else {
      user.likedPosts.pull(String(post_id));
    }
    await user.save();
    res.status(200).send({
      success: true,
      message: "Post Liked or disliked Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
