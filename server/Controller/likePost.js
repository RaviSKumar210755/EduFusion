import Post from "../Models/Post.js";

const likePost = async (req, res) => {
  const userId = req.user.userId;
  const postId = req.params.id;
  try {
    let post = await Post.findOne({ _id: postId });

    const isPresent = post.like.map((num) => num === userId).includes(true);

    if (isPresent) {
      const arr = post.like.filter((num) => num !== userId);
      post.like = arr;
      post.likeCount--;
    } else {
      post.like.push(userId);
      post.likeCount++;
    }

    // console.log(post.like);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default likePost;
