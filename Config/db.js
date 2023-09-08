import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_KEY);
    console.log(
      `connected to mongodb database ${connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Error in MongoDB: ${error}`.bgRed.black);
  }
};

export default connectDB;
