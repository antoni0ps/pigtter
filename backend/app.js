require("dotenv").config();
const express = require("express");
require('express-async-errors')
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const tweetsRouter = require("./controllers/tweets");
const commentsRouter = require("./controllers/comments")

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use(cors());
app.use(express.json());
app.use(express.static('build'))
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/tweets", tweetsRouter);
app.use("/api/comments", commentsRouter);


module.exports = app;
