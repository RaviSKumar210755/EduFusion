import mongoose from "mongoose";

const CorseDetails = new mongoose.Schema(
  {
    title: { type: String, required: true },
    instructor: { type: String, required: true },
    desc: { type: String, required: true },
    status: { type: String, required: true, default: "OPEN" },
    img: { type: String, required: true },
    duration: { type: String, required: true },
    shedule: { type: String, required: true },
    location: { type: String, required: true },
    prerequisites: { type: String, required: true },
    syllabus: { type: Array, required: true },
    students: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", CorseDetails);

export default Post;
