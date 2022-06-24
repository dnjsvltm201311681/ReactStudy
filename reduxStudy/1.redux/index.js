const { createStore } = require("redux");

//*****redux
const reducer = (prevState, action) => {
  //새로운 state를 만듬
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.payload,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.payload],
      };
    default: //type 오타를 위한 default
      return prevState;
  }
};

//*****객체
//메모리문제에 대하여
//얕은복사로 인해 이전것을 참조하기 때문에 생각보마 메모리 문제가 많이 발생하지 않는다.
const initialState = {
  user: null,
  posts: [],
};

//*****store
const store = createStore(reducer, initialState);

//**리액트에서는 거의사용x
store.subscribe(() => {
  //react-redux 안에 들어있음
  console.log("change"); //화면바꿔주는코드 여기서
});

console.log(store.getState());

//*****action
const logIn = (payload) => {
  return {
    type: "LOG_IN",
    payload,
  };
};
const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};
const addPost = (payload) => {
  return {
    type: "ADD_POST",
    payload,
  };
};

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
