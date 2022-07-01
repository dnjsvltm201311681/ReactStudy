const { createStore, applyMiddleware } = require("redux");
const reducer = require("./reducers/reducer");
const { addPost } = require("./actions/post");
const { logIn, logOut } = require("./actions/user");

//*****객체
const initialState = {
  user: {
    isLoggingIn: true,
    payload: null,
  },
  posts: [],
};

//*****미들웨어
//중첩을  해둔 이유: 사이사이에 실행되는 시점을 위해서
const firstMiddleWare = (store) => (next) => (action) => {
  console.log("액션로깅", action); //기본기능 실행전
  next(action); //기본기능
  console.log("액션끝");
};

//redux thunk는 이게 다임(직접구현한 이것이랑 큰 차이가 없다)
const thunkMiddleWare = (store) => (next) => (action) => {
  if (typeof action === "function") {
    //비동기인경우 action을 함수로
    return action(store.dispatch, store.getState());
  }
  return next(action);
};

//미들웨어 여러개 붙여놓으면 순서대로 실행
const enhancer = applyMiddleware(firstMiddleWare, thunkMiddleWare);

//*****스토어
const store = createStore(reducer, initialState, enhancer);

console.log("1st", store.getState());

//*****dispatch
store.dispatch(logIn({ id: 1, name: "cky", admin: true }));
console.log("2th", store.getState());

// store.dispatch(logOut());
// console.log("3th", store.getState());

// store.dispatch(addPost({ userId: 1, id: 1, content: "hello redux" }));
// console.log("4th", store.getState());

// store.dispatch(addPost({ userId: 1, id: 2, content: "hello redux2222" }));
// console.log("4th", store.getState());

//cls
