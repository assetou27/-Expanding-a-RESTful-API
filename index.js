const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// ✅ Ensure body-parser is correctly configured
app.use(express.json()); // ✅ Use Express built-in JSON parser
app.use(express.urlencoded({ extended: true }));

// Import routes
const users = require("./routes/users");
const posts = require("./routes/posts");
const comments = require("./routes/comments");

// ✅ Debugging Middleware to Print Incoming Data
app.use((req, res, next) => {
  console.log(`Request Received: ${req.method} ${req.url}`);
  console.log("Request Body:", req.body);
  next();
});

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/comments", comments);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
