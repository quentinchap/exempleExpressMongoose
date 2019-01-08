import mongoose from "mongoose";
const Schema = mongoose.Schema;

var PostSchema = new Schema({
  description: String,
  author: {
    name: String,
    ref: { type: Schema.Types.ObjectId, ref: "User" },
  }
});

PostSchema.index({ name: 1});
let Post = mongoose.model("Post", PostSchema);

export default Post;