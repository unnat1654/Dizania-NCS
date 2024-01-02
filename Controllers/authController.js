import jwt from "jsonwebtoken";
import userModel from "../Models/userModel.js";
import { hashPassword, comparePassword } from "../Helpers/authHelper.js";
import { compare } from "bcrypt";
import postModel from "../Models/postModel.js";
import profileModel from "../Models/profileModel.js";

//Register Controller || POST
export const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const body = req.body;
    if (!username || username.length < 6) {
      return res.status(400).send({
        success: false,
        message: "Username is required and must be greater than 6 characters.",
        username: username,
      });
    }
    if (!email) {
      return res.status(400).send({
        success: false,
        message: "Email is required",
        email,
      });
    }
    if (!password || password.length < 8) {
      return res.status(400).send({
        success: false,
        message: "Password is required and must be greater than 8 characters.",
      });
    }

    const existingUser = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    //existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exists with entered username or email",
      });
    }
    const hashedpassword = await hashPassword(password);
    const user = await new userModel({
      username,
      email,
      password: hashedpassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while Registering User",
      error,
    });
  }
};

//Login Controller || POST
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password || password.length < 8) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Email Not Found",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(400).send({
        success: false,
        message: "Password Invalid",
      });
    }

    //token
    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Logged in Successfully",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while Logging in user",
      error,
    });
  }
};

//Forgot Password Controller || PATCH
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    if (!email) {
      return res.status(404).send({
        success: false,
        message: "Email is required",
      });
    }
    if (!newPassword) {
      return res.status(404).send({
        success: false,
        message: "New Password is required",
      });
    }
    const user = await userModel.findOne({ email });

    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    const hashedPassword = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashedPassword });

    res.status(200).send({
      success: true,
      message: "Password Changed Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while Updating Password",
      error,
    });
  }
};

export const deleteAccountController = async (req, res) => {};
//   try {
//     const { _id } = req.user;
//     await postModel.deleteMany({ username: _id });
//     await profileModel.deleteOne({ username: _id });
//     const user = await userModel.findByIdAndDelete({ _id });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: true,
//       message: "Error while deleting Account",
//       error,
//     });
//   }
// };

// create profile
export const createProfile = async (req, res) => {
  try {
    const { username, bio, connections, tools, image ,quote} = req.body;

    console.log("From backend",req.body)
    console.log("reached-1");

    const newProfile = new profileModel({
      username,
      displayName: username,
      bio,
      connections,
      tools,
      profilePicture: image,
      quote
    });

    console.log("New Profile",newProfile)

    // Save the profile data to MongoDB
    const savedProfile = await newProfile.save();

    res.status(201).json({
      success: true,
      message: "Profile created successfully",
      profile: savedProfile,
    });
  } catch (error) {
    console.error("Error processing profile creation:", error);
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error", error });
  }
};

export const showProfile = async (req, res) => {
  try {
    const profileData = await profileModel.findOne(/* your query criteria */);

    if (!profileData) {
      return res.status(404).json({ error: "Profile data not found" });
    }

    // Send the profile data as a response
    res.status(200).json({ profile: profileData });
  } catch (error) {
    console.error("Error fetching profile data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
