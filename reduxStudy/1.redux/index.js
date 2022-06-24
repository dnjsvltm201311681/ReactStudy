const { createStore } = require("redux");

//불변성
//히스토리,추적성
const reducer = (prevState, action) => {
  //새로운 state를 만듬
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.payload,
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compB: action.payload,
      };
    case "CHANGE_COMP_C":
      return {
        ...prevState,
        compC: action.payload,
      };
    default: //type 오타를 위한 default
      return prevState;
  }
};

//*****객체
const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

//*****store
const store = createStore(reducer, initialState);

//**리액트에서는 거의사용x
store.subscribe(() => {
  //react-redux 안에 들어있음
  console.log("change"); //화면바꿔주는코드 여기서
});

console.log(store.getState());

//*****action(편의를 위한 기능)
const changeCompA = (payload) => {
  return {
    type: "CHANGE_COMP_A",
    payload, //payload: payload
  };
};

//*****dispatch
store.dispatch(changeCompA("b"));
console.log(store.getState());
