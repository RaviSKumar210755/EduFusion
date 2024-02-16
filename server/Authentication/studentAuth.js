import jwt from "jsonwebtoken";
import User from "../Models/user.js";

const Auth = async (req, res, next) => {
  console.log("In Student Auth");
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized - Missing token" });
  }
  jwt.verify(token, "HiiIamRavi", async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden - Invalid token" });
    }
    req.user = decoded;
    const userId = req.user.userId;
    try {
      const CheckTeacher = await User.findById(userId);
      if (CheckTeacher.SecretCode === 1)
        return res
          .status(401)
          .json({ message: "Unauthorized - You are not a Student" });
      next();
    } catch (error) {
      console.log(error);
    }
  });
};
export default Auth;
