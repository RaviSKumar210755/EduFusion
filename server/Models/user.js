import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    SecretCode: { type: Number, default: 0 },
    email: { type: String, required: true },
    password: { type: String, required: true },
    courses: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
