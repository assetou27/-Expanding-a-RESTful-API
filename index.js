const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

const users = require("./routes/users");
const posts = require("./routes/posts");
const comments = require("./routes/comments");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use((req, res, next) => {
  const time = new Date();
  console.log(`request made at ${time.toLocaleDateString()}`);
  console.log(`request type: ${req.method} send to ${req.url}`);
  next();
});

app.use("/users", users);
app.use("/posts", posts);
app.use("/comments", comments);
// const users = require("./data/users");
// const posts = require("./data/posts");

app.get("/", (req, res) => {
  res.send("Base HomePage");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});