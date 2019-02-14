import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from "react-router-dom";
import { logIn } from "../../../data/actions/actionCreators";
import { IState, IUser } from "../../../data/interfaces";

interface IProps {
  user: IUser;
  logIn: (user: IUser) => void;
}

class Login extends Component<IProps & RouteComponentProps & any> {

  public formSubmitHanlder = (e: any) => {
    e.preventDefault();

    const userNameValue = e.target.username.value;
    
    if (userNameValue !== "") {
      const user: IUser = {
        username: userNameValue,
        password: "password",
        role: userNameValue === "admin" ? "admin" : "user",
      };

      this.props.logIn(user);
      this.props.history.push(`/${user.role}/greet`);
    }
  }

  public render() {
    return (
      <div className="main login-page">
      <h1>Login page</h1>
        <form onSubmit={this.formSubmitHanlder}>
          <div className="login-input">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              placeholder="Enter your name"
            />
          </div>
          <div className="login-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value="password"
              disabled
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default connect((state: IState) => ({ user: state.user }),{ logIn })(Login);
