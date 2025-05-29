const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");

module.exports = (app) => {
  // Middleware
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(morgan("dev"));
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "..", "views"));
};
