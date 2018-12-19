import Post from "./model";

module.exports = {
  createPost: async function(post) {
    if (post) {
      return Post.create(post);
    }
  },

  list: async function() {
    let result = await Post.find({});
    return result;
  }
};
