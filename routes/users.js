const express = require("express");
const router = express.Router();
const users = require("../data/users");

router.route("/")
    .get((req, res) => {
        res.json(users);
    })
    .post((req, res) => {
        console.log("Received POST request body:", req.body); // ✅ Debugging

        // ✅ Check if required fields exist
        const { name, username, email } = req.body;
        if (!name || !username || !email) {
            console.log("❌ Error: Missing required fields!");
            return res.status(400).json({ error: "Missing required fields" });
        }

        // ✅ Prevent duplicate usernames
        if (users.find(user => user.username === username)) {
            console.log("❌ Error: Username already exists!");
            return res.status(400).json({ error: "Username already exists" });
        }

        // ✅ Create new user
        const newUser = {
            id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
            name,
            username,
            email
        };

        users.push(newUser);
        console.log("✅ New user created:", newUser);
        res.status(201).json(newUser);
    });

module.exports = router;
