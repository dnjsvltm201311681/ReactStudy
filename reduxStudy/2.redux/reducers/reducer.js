const { combineReducers } = require("redux");
const UserReducer = require("./user");
const PostReducer = require("./post");

module.exports = combineReducers({
  user: UserReducer,
  posts: PostReducer,
});
