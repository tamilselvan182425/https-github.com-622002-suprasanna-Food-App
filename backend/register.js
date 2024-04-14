// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Create Express app
const app = express();

// Set up middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
const mongoHost = process.env.HOST || "localhost";
const mongoPort = process.env.MONGO_PORT || "27017";
const mongoUser = process.env.USER || "user";
const mongoPass = process.env.PASS || "pass";
mongoose.connect(
  `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}/myapp?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Define a user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Create a user model
const User = mongoose.model("User", userSchema);

// Define route to handle form submissions
app.post("/register", async (req, res) => {
  // Extract data from the request body
  const { name, email, password } = req.body;

  // Validate data
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password,
    });

    // Save the user to the database
    await newUser.save();
    return res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error while registering user:", error);
    return res.status(500).json({ error: "Failed to register user" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
