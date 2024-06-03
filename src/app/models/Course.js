import mongoose, { Schema } from "mongoose";
import slug from "mongoose-slug-generator";
mongoose.plugin(slug);

const courseSchema = new Schema({
  name: String,
  discription: String,
  image: String,
  video: String,
  slug: { type: String, slug: "name" }
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
