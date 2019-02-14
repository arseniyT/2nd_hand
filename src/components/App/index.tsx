import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from "../custom/PrivateRoute";
import Header from "../Header";
import Listing from "../Content/Listing";
import Footer from "../Footer";
import Login from "../Pages/Login";
import GreetingPage from "../Pages/Greeting";
import SearchResult from "../Pages/SearchResult";
import ManageCategories from "../Pages/PrivateAdmin/ManageCategories";
import ManageUsers from "../Pages/PrivateAdmin/ManageUsers";
import Account from "../Pages/PrivateUser/Account";
import UserAds from "../Pages/PrivateUser/Account/UserAds";
import PlaceAd from "../Pages/PrivateUser/PlaceAd";

class App extends Component {

    public render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Redirect from="/" to="/home" exact />
                    <Route path="/home" component={ Listing }/>
                    <Route path="/login" component={ Login } />
                    <Route path="/search-result" component={ SearchResult } />
                    <Redirect from="/logout" to="/home" exact />
                    <PrivateRoute access="admin" path="/admin/greet" component={ GreetingPage } />
                    <PrivateRoute access="user" path="/user/greet" component={ GreetingPage } />
                    <PrivateRoute access="admin" path="/manage-categories" component={ ManageCategories } />
                    <PrivateRoute access="admin" path="/manage-users" component={ ManageUsers } />
                    <PrivateRoute access="user" path="/account" component={ Account } />
                    <PrivateRoute access="user" path="/my-ads" component={ UserAds } />
                    <PrivateRoute access="user" path="/place-an-ad" component={ PlaceAd } />
                    <Route path="*" render={() => (
                        <div className="main not-found">
                            <h1>404 Page not found</h1>
                        </div>
                    )}/>
                </Switch>
                <Footer/>
            </>
        );
    }
};

export default App;
