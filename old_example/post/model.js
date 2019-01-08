import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  description: String,
  img: {
    rel: String,
    href: String,
  },
});

PostSchema.index({ name: 1});
let Post = Mongoose.model('Post', PostSchema);

export default Post;