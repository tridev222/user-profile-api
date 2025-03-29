const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//----------------------------- Register User----------------------------------------------
const registerUser = async (req, res) => {
    try {
        const { name, email, password, address, bio, profilePic } = req.body;

        if (await User.findOne({ email })) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const user = new User({ name, email, password, address, bio, profilePic });
        await user.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// ---------------------------------Login User-------------------------------------------
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

//---------------------------------Get User Profile-------------------------------
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

module.exports = { registerUser, loginUser, getUserProfile };
