import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn, logOut } from "./actions/user";

class App extends Component {
  onClick = () => {
    this.props.dispatchLogIn({
      id: "개발자인데요",
      password: "12345",
    });
  };

  onLogout = () => {
    this.props.dispatchLogOut({});
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        {user.isLoggingIn ? (
          <div>로그인 중</div>
        ) : user.data ? (
          <div>{user.data.nickname}</div>
        ) : (
          "로그인 해주세요."
        )}
        {!user.data ? (
          <button onClick={this.onClick}>로그인</button>
        ) : (
          <button onClick={this.onLogout}>로그아웃</button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  posts: state.posts,
}); // reselect

const mapDispatchToProps = (dispatch) => ({
  dispatchLogIn: (data) => dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
