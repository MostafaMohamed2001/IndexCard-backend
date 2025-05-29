require("dotenv").config();

const express = require("express");
const http = require("http");

const { db, ref } = require("./src/Config/firebase");
const apiRoutes = require("./src/routes");
const globalError = require("./src/middlewares/errorMiddleware");
const ApiError = require("./src/utils/errors/apiError");
const dbConnected = require("./src/Config/dbConnected");
const MiddleWares = require("./src/utils/MiddleWares");

const app = express();
dbConnected();

const server = http.createServer(app);

//MiddWares
MiddleWares(app, express);
// Connected DB

// Routes
apiRoutes(app, ref);

// Error handling
app.use("*", (req, res, next) => {
  next(new ApiError(`Can't find this endpoint: ${req.originalUrl}`, 400));
});
app.use(globalError);

// Handle unhandled rejections
process.on("unhandledRejection", (err) => {
  console.log(`Unhandled rejection: ${err.name} | ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
