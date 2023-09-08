import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashedpassword) => {
  try {
    return await bcrypt.compare(password, hashedpassword);
  } catch (error) {
    console.log(error);
  }
};
