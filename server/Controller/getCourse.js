import Post from "../Models/CourseDetails.js";
const getPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error in Getting Post", error });
  }
};
export default getPost;
