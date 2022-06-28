const initialState = [];

const UserReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        payload: action.payload,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        payload: null,
      };
    default:
      return prevState;
  }
};

module.exports = UserReducer;
