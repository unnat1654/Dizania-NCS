import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const mongoKey = process.env.MONGO_KEY 
    // || "mongodb://127.0.0.1:27017/Dizania-NCS";
    const { connection } = await mongoose.connect(mongoKey);
    console.log(
      `connected to MongoDB database ${connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Error in MongoDB: ${error}`.bgRed.black);
  }
};

export default connectDB;
