const initialState = [];

const UserReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        ...prevState,
        payload: null,
        isLoggingIn: true,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...prevState,
        payload: action.payload,
        isLoggingIn: false,
      };
    case "LOG_IN_FAILURE":
      return {
        ...prevState,
        payload: null,
        isLoggingIn: false,
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
