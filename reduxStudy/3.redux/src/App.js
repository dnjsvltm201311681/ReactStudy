import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "./actions/user";
function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onClick = useCallback(() => {
    dispatch(
      logIn({
        userId: "1",
        password: "cky",
      })
    );
  }, []);

  const onLogOut = useCallback(() => {
    dispatch(logOut());
  }, []);

  const loginfunc = () => {
    if (user.isLoggingIn) {
      <div>로그인중</div>;
    } else {
      <div>로기인해주세여</div>;
    }
  };
  return (
    <div>
      {console.log("dd", user.payload)}
      {user.isLoggingIn ? (
        <div>로그인 중</div>
      ) : user.payload ? (
        <div>{user.payload.name}</div>
      ) : (
        "로그인해줘요"
      )}
      {!user.payload ? (
        <button onClick={onClick}>로그인</button>
      ) : (
        <button onClick={onLogOut}>로그아웃</button>
      )}
    </div>
  );
}

export default App;
