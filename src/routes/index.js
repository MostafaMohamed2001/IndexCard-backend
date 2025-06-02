const authUserRoutes = require("./authUserRoutes.js");
const cron = require("node-cron");
const axios = require("axios");

module.exports = (app) => {
  app.use("/api/v1/auth", authUserRoutes);

  // to free server not make a sleep
  app.get("/test", (req, res) => {
    res.send("Hello from world");
  });
  cron.schedule("* * * * *", () => {
    axios
      .get("http://localhost:3000/test")
      .then((response) => {
        console.log(`Called /test: ${response.status} - ${response.data}`);
      })
      .catch((error) => {
        console.error("Error calling /test:", error.message);
      });
  });
};
