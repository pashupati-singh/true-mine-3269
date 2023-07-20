const express = require("express");
const jwt = require("jsonwebtoken");
const TokenBlacklist = require("./path/to/tokenBlacklistModel"); // Replace with the correct path
const app = express();

// Other route handlers and middleware...

// Logout route
app.post("/logout", (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Invaild token" });
  }

  const token = authorization.split(" ")[1];

  // Blacklist the token
  addToBlacklist(token);

  return res.status(200).json({ message: "Logged out successfully" });
});

// Function to add a token to the blacklist
async function addToBlacklist(token) {
  try {
    const existingBlacklist = await TokenBlacklist.findOne();
    if (existingBlacklist) {
      // If the blacklist document already exists, push the token to the array
      existingBlacklist.blacklistedTokens.push(token);
      await existingBlacklist.save();
    } else {
      // If the blacklist document does not exist, create a new one
      await TokenBlacklist.create({ blacklistedTokens: [token] });
    }
  } catch (error) {
    console.error("Error adding token to blacklist:", error);
  }
}

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
