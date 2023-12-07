import postModel from "../Models/postModel.js";
import { cloudinary } from "../Config/cloudinary.js";

//create post || Method Post
export const createPostController = async (req, res) => {
  const { caption, user, image } = req.body;
  try {
    const { public_id, secure_url } = await cloudinary.uploader.upload(image, {
      folder: "posts",
    });
    const post = new postModel({
      user,
      caption,
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
      .skip(offset + 1)
      .limit(lmt)
      .select("image");

    //if page is 1 then offset is 0 then first-post will be sent otherwise only posts will be sent
    if (!offset) {
      const firstpost = await postModel
        .find({})
        .sort({ createdAt: -1 })
        .limit(1)
        .populate("user", "username");
      res.status(200).send({
        success: true,
        message: "Posts found Successfully",
        posts,
        firstpost,
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Posts found Successfully",
        posts,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting posts",
      error,
    });
  }
};

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
