const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO);
    console.log("Connected Successfully To DB");
  } catch (err) {
    console.error("Connection Error:", err);
    process.exit(1);
  }
};
