const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON and enable CORS
app.use(cors());
app.use(express.json());

// User API Routes
app.use("/api/users", userRoutes);

// Root Route
app.get("/", (req, res) => {
    res.send("User Profile API is running... 🚀");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(✅ Server running on port \);
});
