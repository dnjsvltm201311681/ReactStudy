const logIn = (payload) => {
  console.log(payload);
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

module.exports = {
  logIn,
  logOut,
};
