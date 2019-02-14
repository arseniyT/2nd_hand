import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IUser, IState } from '../../../data/interfaces';
import { hanger } from "../../../data/constants/images";
import { Link } from 'react-router-dom';

interface IGreetingProps {
    user: IUser;
}

class GreetingPage extends Component<IGreetingProps> {
  render() {
    return (
      <div className="main greeting-page">
        <h1>Hi, {this.props.user.username}!</h1>
        <h2 className="success">You've successfully logged in to SecondHand App</h2>
        <img width="200" 
             src={hanger}
        />
        <p>Feel free <Link to="/home">to buy & sell</Link> items.</p>
      </div>
    );
  }
}

export default connect((state: IState) => ({ user: state.user }))(GreetingPage);

