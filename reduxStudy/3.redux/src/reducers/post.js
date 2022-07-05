//reducer을 나누면서 prevState는 더이상 전체 객체가 아닌
//객체의 post부분만을 가르킨다

const initialState = [];
const PostReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...prevState, action.payload];
    default:
      return prevState;
  }
};

module.exports = PostReducer;
