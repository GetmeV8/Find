const User = require('../models/User');
const { validateSignUpData } = require("../utils/validation");
const bcrypt = require("bcrypt");


// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single user
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create user
exports.signUp = async (req, res) => {
   try {
    const { firstname,lastname, email, password } = req.body;
    if (!firstname ||!lastname|| !email || !password) {
      return res.status(400).json({ 
        message: "Fill all required fields",
        required: ["firstname","lastname","email", "password"]
      });
    }
    // Check if user already exists                                               
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email Already Exists" });
    }
    await validateSignUpData(req);
    const hashedPassword = await bcrypt.hash(password, 10);
    //Create new user
    const user = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword
    });
  
    await user.save();
    console.log("User created successfully:", user);
    res.status(201).json({ 
      message: "User created successfully", 
      user: {
        id: user._id,
        firstname: user.firstname,
        lastname:user.lastname,
        email: user.email,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error("Error in register route:", error);
    res.status(500).json({ 
      message: "Error creating user", 
      error: error.message 
    });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (req.body.username) user.username = req.body.username;
    if (req.body.email) user.email = req.body.email;
    if (req.body.password) user.password = req.body.password;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await User.deleteOne({ _id: req.params.id });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; 