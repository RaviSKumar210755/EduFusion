import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./Routes/routes.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const uri = "mongodb://127.0.0.1:27017/EduFusion";
// Update with your MongoDB connection URI and database name

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server only after successfully connecting to the database
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Routes
app.use(router);

app.get("/", (req, res) => {
  res.send("Welcome To World of Social Media");
});
