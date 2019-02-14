import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getUserAds } from "../../../../data/actions/actionCreators";
import { IState, IUser, IAd } from "../../../../data/interfaces";
import InputField from "../../../custom/InputField";
import { avatar } from "../../../../data/constants/images";

interface IAccountProps {
  ads: IAd[];
  user: IUser;
  userAds: IAd[];
  getUserAds: (user: IUser) => void;
}

class Account extends Component<IAccountProps> {
  public componentDidMount() {
    this.props.getUserAds(this.props.user);
  }

  public render() {
    const userAds = this.props.userAds;
    const userAdsLink: React.FC<any> = props => <Link to="/my-ads" {...props} />;

    return (
        <main className="main user-account-page">
            <h1>User account page</h1>
            <div className="user-account">
                <div className="user-account-info">
                  <div className="user-avatar-column">
                  <img src={avatar} alt="User photo" className="user-avatar" />
                  <InputField id={this.props.user.username}
                              type="file"
                              label="Upload profile image"
                  />
                  </div>
                  <div className="user-info-column">
                      <div>Your name: {this.props.user.username}
                          <a className="edit" href="#">edit</a>
                      </div>
                      <div>Your password: {this.props.user.password}
                          <a className="edit" href="#">edit</a>
                      </div>
                      <div>Your App role: {this.props.user.role}</div>
                      <div>You have {userAds.length} posted ad(s).</div>
                  </div>
                </div>
                <div className="user-account-controls">
                  <Button component={ userAdsLink }>show my ads</Button>
                  <Button title="save changes">Save</Button>
                </div>
            </div>
        </main>
    )
  }
}

const mapStateToProps = (state: IState) => ({
  user: state.user,
  ads: state.ads,
  userAds: state.userAds,
});

const mapDispatchToProps = {
  getUserAds,
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
