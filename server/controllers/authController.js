const UserModel = require('../models/user');
const { hashPassword } = require("../helpers/auth");
const bcrypt = require('bcrypt');

// Register a new user
const register = async (req, res) => {
  const { user, email, pwd } = req.body;
  try {
    // Check if the email already exists in the database
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      // If the email is already registered, return a 409 (Conflict) status
      return res.status(409).json({ message: 'Email already exists' });
    }
    
    // Hash the provided password before saving it to the database
    const hashedPassword = await hashPassword(pwd);

    // Create a new user instance with the provided name, email, and hashed password
    const newUser = new UserModel({ name: user, email, password: hashedPassword });
    // Save the new user to the database
    await newUser.save();

    // Send a success message upon successful registration
    res.status(200).json({ message: 'Registration successful' });
  } catch (err) {
    // Log registration error and return a 500 (Internal Server Error) status
    console.error('Registration error:', err);
    return res.status(500).json({ message: 'Registration failed. Please try again later.' });
  }
};

// User login (assuming password comparison with hashed password would be done here)
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      // Find the user by email in the database
      const user = await UserModel.findOne({ email });
      if (!user) {
        // If user not found, return a 401 (Unauthorized) status
        return res.status(401).json({ message: "Invalid email or password" });
      }
      
      // Compare the provided password with the hashed password stored in the database
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (isMatch) {
        // If passwords match, return a 200 (OK) status and success message
        return res.status(200).json({ message: "Login successful" });
      } else {
        // If passwords don't match, return a 401 (Unauthorized) status
        return res.status(401).json({ message: "Invalid email or password" });
      }
    } catch (err) {
      // Log login error and return a 500 (Internal Server Error) status
      console.error("Login error:", err);
      return res.status(500).json({ message: "Login failed. Please try again later." });
    }
  };

// Export the register and login functions for use in other modules
module.exports = {
  register,
  login,
};
