const { createStore, compose, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const reducer = require("./reducers");
const { addPost } = require("./actions/post");
const { logIn, logOut } = require("./actions/user");

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

const firstMiddleWare = (store) => (next) => (action) => {
  next(action);
};

const thunkMiddleWare = (store) => (next) => (action) => {
  if (typeof action === "function") {
    //비동기
    return action(store.dispatch, store.getState);
  }
  return next(action); //동기
};

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(firstMiddleWare, thunkMiddleWare))
    : composeWithDevTools(applyMiddleware(firstMiddleWare, thunkMiddleWare));

const store = createStore(reducer, initialState, enhancer);

module.exports = store;
