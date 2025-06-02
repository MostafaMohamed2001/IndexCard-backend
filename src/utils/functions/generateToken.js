const jwt = require("jsonwebtoken");

const generateToken = (payloadObj) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payloadObj,
      process.env.SECRET_JWT_KEY,
      { expiresIn: process.env.EXPIRE_JWT },
      (err, token) => {
        if (err) {
          console.error("Error generating token:", err);
          return reject(new Error("Token generation failed"));
        }
        resolve(token);
      }
    );
  });
};

module.exports = generateToken;