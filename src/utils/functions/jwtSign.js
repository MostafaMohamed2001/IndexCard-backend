const jwt = require("jsonwebtoken");


const token = async (id) => {
  try {
    return await jwt.sign({ id }, process.env.SECRET_JWT_KEY, {
      expiresIn: process.env.EXPIRE_JWT,
    });
  } catch (error) {
    console.error("Error generating token:", error);
    throw new Error("Token generation failed");
  }
};

module.exports = token;
