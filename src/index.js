require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const app = express();
const Question = require("./features/question/question.route");
const User = require("./features/user/user.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/questions", Question);
app.use("/users", User);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Home Route of mock 15 ");
});

app.listen(PORT, async () => {
  await connect();
});

