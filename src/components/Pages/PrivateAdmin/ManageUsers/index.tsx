import React from "react";
import { connect } from "react-redux";
import { IAd, IUser, IState } from "../../../../data/interfaces";
import { getUsers, deleteUser } from "../../../../data/actions/actionCreators";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface IManageUserProps {
  ads: IAd[];
  user: IUser;
  users: IUser[];
  getUsers: (ads: IAd[], username: string) => void;
  deleteUser: () => void;
}

class ManageUsers extends React.Component<IManageUserProps & RouteComponentProps> {
  public async componentDidMount() {
    this.props.getUsers(this.props.ads, this.props.user.username);
  }

  public deleteUserHandler = (e: any) => {
    e.preventDefault();

    this.props.deleteUser();
  }

  public render() {
    const { ads } = this.props;

    if (!ads.length) {
      return (
        <div className="main manage-users">
            <h1>There are no registered users yet...</h1>
        </div>
      );
    } else {
      return (
        <main className="main manage-users">
            <h1>Manage App users</h1>
            <section className="users-panel">
              <ul>
                {this.props.users.map((user: IUser) => {
                    return (
                      <li key={user.username}>
                        {user.username}
                        <div className="users-edit-controls">
                          <a href="#" id={user.username} className="edit" title="edit">
                            edit
                          </a>
                          <span> | </span>
                          <a href="#" id={user.username} className="delete" title="delete"  
                              onClick={this.deleteUserHandler}>
                            x
                          </a>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </section>
        </main>
      );
    }
  }
}

const mapStateToProps = (state: IState) => ({
  ads: state.ads,
  user: state.user,
  users: state.users,
});

const mapDispatchToProps = {
  getUsers,
  deleteUser,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageUsers));
