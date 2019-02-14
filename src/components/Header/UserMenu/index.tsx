import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { IState, IUser } from "../../../data/interfaces";
import { logOut } from "../../../data/actions/actionCreators";

interface IProps {
    user: IUser;
    logOut: () => void;
}

type IUserMenuProps = IProps & RouteComponentProps;

class UserMenu extends Component<IUserMenuProps> {
    public render() {
        const { user, match } = this.props;
        const loginLink: React.FC<any> = props => <Link to="/login" {...props} />;
        const logoutLink: React.FC<any> = props => <Link to="/logout" {...props} />;
        const manageCategoriesLink: React.FC<any> = props => <Link to="/manage-categories" {...props} />;
        const manageUsersLink: React.FC<any> = props => <Link to="/manage-users" {...props} />;
        const accountLink: React.FC<any> = props => <Link to="/account" {...props} />;
        const placeAdLink: React.FC<any> = props => <Link to="/place-an-ad" {...props} />;

        if (user.role === "admin") {
            return (
                <>
                    <Button component={ manageCategoriesLink }>categories</Button>
                    <Button component={ manageUsersLink }>users</Button>
                    <Button component={ logoutLink } onClick={ this.props.logOut }>
                        Log out
                    </Button>
                </>
            );
        } else if (user.role === "user") {
            return (
                <>
                    <Button component={ placeAdLink }>+ place an ad</Button>
                    <Button component={ accountLink }>account</Button>
                    <Button component={ logoutLink } onClick={ this.props.logOut }>
                        Log out
                    </Button>
                </>
            );
        } else {
            return (
                <Button component={ loginLink }>Sign in</Button>
            );
        }
    };
}

export default withRouter(connect((state: IState) => ({ user: state.user }),{ logOut })(UserMenu));
