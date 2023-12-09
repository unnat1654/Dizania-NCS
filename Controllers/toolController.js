import toolModel from "../Models/toolModel.js";

export const getToolsController = async (req, res) => {
  try {
    const tools = await toolModel.find();
    res.status(200).send({
      success: true,
      message: "Tools found Successfully",
      tools,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSpecificToolController = async (req, res) => {
  try {
    const { id } = req.params;
    const tools = await toolModel.findOne({ _id: id });
    res.status(200).send({
      success: true,
      message: "Tools found Successfully",
      tools,
    });
  } catch (error) {
    console.log(error);
  }
};
