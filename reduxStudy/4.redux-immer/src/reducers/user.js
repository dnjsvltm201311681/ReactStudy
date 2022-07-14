const { produce } = require("immer");

const initialState = {
  isLoggingIn: false,
  data: null,
};

const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case "LOG_IN_REQUEST":
        draft.isLoggingIn = true;
        draft.data = null;
        break;
      case "LOG_IN_SUCESS":
        draft.isLoggingIn = false;
        draft.data = action.data;
        break;
      case "LOG_IN_FAILURE":
        draft.data = null;
        break;
      case "LOG_OUT":
        draft.data = null;
        break;
      default:
        break;
    }
  });
};

module.exports = userReducer;
