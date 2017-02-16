import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Profile from "./Profile";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            authenticated: false,
            userInfo: {}
        };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUserUpdate = this.handleUserUpdate.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin(state) {
        console.log(state.email, state.password);
        const user = {
            firstName: "Janice",
            lastName: "Bobson",
            email: "janice@me.com",
            avatar: "http://i.pravatar.cc/300"
        };

        this.setState({authenticated: true, userInfo: user});
        // Make POST request to auth API
        // If auth successful, set state.auth to true
        // POST returns user_id
    }

    handleLogout() {
        console.log("User logged out");
        this.setState({authenticated: false});
    }

    handleUserUpdate(user){
        console.log(user.firstName, user.lastName, user.email);
    }

    render() {
        const isAuthenticated = this.state.authenticated;
        let body = null;
        if (isAuthenticated) {
            body = <Profile user={this.state.userInfo} handleUserUpdate={this.handleUserUpdate} />
        } else {
            body = <Login handleLogin={this.handleLogin}/>
        }
        return (
            <div class="container">
                <Header authenticated={this.state.authenticated} handleLogout={this.handleLogout} />
                {body}
                <Footer />
            </div>
        );
    }
}