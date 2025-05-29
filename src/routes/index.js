const authUserRoutes = require("./authUserRoutes.js");
module.exports = (app) => {
  app.use("/api/v1/auth", authUserRoutes);
};
