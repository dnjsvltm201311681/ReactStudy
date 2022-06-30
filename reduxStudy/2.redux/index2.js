const { createStore } = require("redux");
const reducer = require("./reducers/reducer");
const { addPost } = require("./actions/post");
const { logIn, logOut } = require("./actions/user");
//객체의 뎁스가 action을 나누는 기준이 됨
//때문에 이 구조를 잘짜는것이 중요하다
//최대한 관련있는것은 묶어주고
//메모리에 저장됨(나중에 메모리 관리를 해야되지만 크게 문제는 안된다)
//왜냐하면 얕은복사를 하여 참조를 유지하기 때문에
//그리고 데이터는 화면에 보일졍도만 가져오자
const initialState = {
  user: {
    isLoggingIn: true,
    payload: null,
  },
  posts: [],
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log("change");
});

console.log(store.getState());

//*****dispatch
store.dispatch(logIn({ id: 1, name: "cky", admin: true }));
console.log("2th", store.getState());

store.dispatch(logOut());
console.log("3th", store.getState());

store.dispatch(addPost({ userId: 1, id: 1, content: "hello redux" }));
console.log("4th", store.getState());

store.dispatch(addPost({ userId: 1, id: 2, content: "hello redux2222" }));
console.log("4th", store.getState());

//cls
