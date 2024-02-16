import Post from "../Models/CourseDetails.js";
import User from "../Models/user.js";

const addCourse = async (req, res) => {
  const courseId = req.params.id;
  const userId = req.user.userId;
  console.log(courseId, userId);
  try {
    const existingCourse = await Post.findById(courseId);

    if (!existingCourse) {
      return res.status(404).json({ message: "This Course Is Not available" });
    }
    if (existingCourse.status !== "OPEN")
      return res.status(404).json({ message: "This Course Is Not Open Now" });

    const existingUser = await User.findById(userId);

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    if (existingUser.courses.includes(courseId)) {
      return res.status(400).json({ message: "Course already added to user" });
    }

    if (existingCourse.students.includes(userId)) {
      return res.status(400).json({ message: "User already added to Course" });
    }
    const CourseData = {
      courseId,
      name: existingCourse.title,
    };
    const UserData = {
      userId,
      name: existingUser.Name,
    };
    existingUser.courses.push(CourseData);
    existingCourse.students.push(UserData);

    const updatedUser = await existingUser.save();
    const updatedCourse = await existingCourse.save();
    const data = {
      user: updatedUser,
      Course: updatedCourse,
    };
    res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error in Adding Course", error });
  }
};

export default addCourse;
