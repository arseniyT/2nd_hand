import React, { Component, ComponentClass, FC } from "react";
import { connect } from "react-redux";
import { IState, IUser } from "../../../data/interfaces";
import { Route, Redirect } from "react-router";
import { Link } from 'react-router-dom';

interface IPrivateRouteProps {
    access: string;
    path: string;
    component: ComponentClass | FC;
    user: IUser;
}

class PrivateRoute extends Component<IPrivateRouteProps> {
    render() {
        const { access, path, component, user } = this.props;

        if (access === user.role) {
            return (
                <Route path={path} component={component} />
            );
        } else if (access !== user.role) {
            return (
                <div className="main access-denied">
                    <h1>Access denied :(</h1>
                    <p>
                        Please, 
                        <Link to="/login"> login </Link> 
                        with <u>correct credentials</u> to view this page content. 
                    </p>   
                </div>
            );
        } else {
            return (
                <Redirect from={path} to="*" />
            );
        }
    }
}

export default connect((state: IState) => ({ user: state.user }))(PrivateRoute);
