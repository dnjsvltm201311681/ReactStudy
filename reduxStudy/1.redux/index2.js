const { createStore, bindActionCreators } = require("redux");

const store = createStore(reducer, initialState);

initialState = {
  user: null,
  posts: [],
};

const login = (payload) => {
  return {
    type: "LOGIN",
    payload,
  };
};

const addpost = (payload) => {
  return {
    type: "ADDPOST",
    payload,
  };
};

store.subscribe(() => {
  console.log("변경여부");
});
store.dispatch(login({ id: 1, name: "cky" }));
store.dispatch(addpost({ userId: 1, id: 1, content: "jedd" }));

const reducer = (prevState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...prevState,
        user: action.payload,
      };
    case "ADDPOST":
      return {
        ...prevState,
        posts: [action.payload],
      };
  }
};
