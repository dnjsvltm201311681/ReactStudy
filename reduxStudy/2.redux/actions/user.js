const logIn = (payload) => {
  return (dispatch, getState) => {
    dispatch(loginRequest(payload));
    try {
      setTimeout(() => {
        dispatch(loginSuccess({ userId: 1, name: "성공이름" }));
      }, 2000);
      //axios.post().then().catch()으로 나중에 대체
    } catch (err) {
      dispatch(loginFailure(err));
    }
  };
};

const loginRequest = (payload) => {
  return {
    type: "LOG_IN_REQUEST",
    payload,
  };
};

const loginSuccess = (payload) => {
  return {
    type: "LOG_IN_SUCCESS",
    payload,
  };
};

const loginFailure = (err) => {
  return {
    type: "LOG_IN_FAILURE",
    err,
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

module.exports = {
  logIn,
  logOut,
};
