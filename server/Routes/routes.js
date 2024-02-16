import express from "express";
import signin from "../Controller/signin.js";
import signup from "../Controller/signup.js";
import createCourse from "../Controller/createCourse.js";
import Auth from "../Authentication/Auth.js";
import getCourse from "../Controller/getCourse.js";
import studentAuth from "../Authentication/studentAuth.js";
import addCourse from "../Controller/addCourse.js";
import updateStatus from "../Controller/updateStatus.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/createCourse", Auth, createCourse);
router.get("/getCourse", getCourse);
router.get("/:id/addCourse", studentAuth, addCourse);
router.patch("/:id/updateStatus", Auth, updateStatus);
// router.patch("/:id/like", Auth, likePost);

export default router;
