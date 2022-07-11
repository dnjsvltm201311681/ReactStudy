const { createStore, applyMiddleware, compose } = require("redux");
const reducer = require("./reducers/reducer");
const { composeWithDevTools } = require("redux-devtools-extension");
const { addPost } = require("./actions/post");
const { logIn, logOut } = require("./actions/user");

const initialState = {
  user: {
    isLoggingIn: false,
    payload: null,
  },
  posts: [],
};

const firstMiddleWare = (store) => (next) => (action) => {
  console.log("액션로깅", action); //기본기능 실행전
  next(action); //기본기능
  console.log("액션끝");
};

const thunkMiddleWare = (store) => (next) => (action) => {
  if (typeof action === "function") {
    //비동기인경우 action을 함수로
    return action(store.dispatch, store.getState());
  }
  return next(action);
};

// const enhancer = compose(
//   applyMiddleware(firstMiddleWare, thunkMiddleWare),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(firstMiddleWare, thunkMiddleWare))
    : composeWithDevTools(applyMiddleware(firstMiddleWare, thunkMiddleWare));

const store = createStore(reducer, initialState, enhancer);

module.exports = store;
