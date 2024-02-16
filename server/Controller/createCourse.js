import Post from "../Models/CourseDetails.js";

const newPost = async (req, res) => {
  // const { duration, shedule, location, prerequisites, syllabus } = req.body;

  const title = req.body.name;
  const instructor = req.body.email;
  const desc = req.body.description;
  const status = req.body.enrollment_status;
  const img = req.body.course_image;
  const duration = req.body.duration;
  const shedule = req.body.schedule;
  const location = req.body.location;
  const prerequisites = req.body.prerequisites;
  const syllabus = req.body.syllabus;

  const userId = req.user.userId;
  console.log(userId);
  try {
    const newPostCreated = new Post({
      title,
      instructor,
      desc,
      status,
      img,
      duration,
      shedule,
      location,
      prerequisites,
      syllabus,
      userId,
    });
    await newPostCreated.save();
    res.status(200).json(newPostCreated);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Can not create post in backend" });
  }
};

export default newPost;
