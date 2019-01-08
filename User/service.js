import User from "./model";
export async function createUser(user) {
  if (user) {
    if (!user._id) {
      console.log("[user] - Creation");
      return User.create({ ...user });
    }
  }
}

export async function getByPage(page, per_page) {
  var start = (parseInt(page) - 1) * parseInt(per_page);
  let result = await User.find({})
    .skip(start)
    .limit(parseInt(per_page));
  return result;
}
