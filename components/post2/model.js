import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  description: String,
  img: {
    rel: { type: String, default: "" },
    href: { type: String, default: "" },
  },
});

PostSchema.index({ title: 1});
let Post = mongoose.model('Post', PostSchema);

export default Post;