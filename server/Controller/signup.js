import User from "../Models/user.js";
import bcrypt from "bcrypt";
const signup = async (req, res) => {
  // const { Name, SecretCode, email, password } = req.body;
  const Name = req.body.name;
  const SecretCode = req.body.secretCode;
  const email = req.body.email;
  const password = req.body.password;
  console.log(req.body);
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(401).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      Name,
      SecretCode,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({ message: "User Created Successfully", newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default signup;
