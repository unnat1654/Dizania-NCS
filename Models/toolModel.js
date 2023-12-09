import mongoose from "mongoose";

const toolSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  logo: {
    type: String,
  },
});

export default mongoose.model("Tools", toolSchema, "tools");
