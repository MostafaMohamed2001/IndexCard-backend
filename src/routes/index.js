const authUserRoutes = require("./authUserRoutes.js");

module.exports = (app) => {
  app.use("/api/v1/auth", authUserRoutes);

  // to free server not make a sleep
  app.get("/test", (req, res) => {
    res.send("Hello from world");
  });
};
