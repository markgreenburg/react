'use strict';

import React from 'react';
import { Link } from 'react-router';
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Profile from "./Profile";
const axios = require("axios");

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
      const self = this;
      console.log(state.email, state.password);
      axios.post('/login', {
        email: state.email,
        password: state.password
        })
        .then((response) => {
          self.setState({authenticated: true, userInfo: response.data.data});
        })
        .catch((err) => {
          console.log(err);
          self.setState({authenticated: false});
        });
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
            <div className="container">
                <Header authenticated={this.state.authenticated} handleLogout={this.handleLogout} />
                {body}
                <Footer />
            </div>
        );
    }
}