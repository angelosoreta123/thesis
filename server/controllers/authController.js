const UserModel = require("../models/user")

const register = async (req, res) => {
  const { user, email, pwd } = req.body;
  try {
      // Check if email is already taken
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
          return res.status(409).json({ message: "Email already exists" });
      }
      
      // Create new user
      const newUser = new UserModel({ name: user, email, password: pwd });
      await newUser.save();

      res.status(200).json({ message: "Registration successful" });
  } catch (err) {
      console.error("Registration error:", err);
      return res.status(500).json({ message: "Registration failed. Please try again later." });
  }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        // Compare hashed password
        // Add bcrypt comparison here
        if (password === user.password) {
            return res.status(200).json({ message: "Login successful" });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ message: "Login failed. Please try again later." });
    }
};



const test = (req, res) => {
  res.json ("test is working")
}


module.exports = {
  register,
    login,
};
