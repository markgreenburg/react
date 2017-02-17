import React from "react";
import { Link } from 'react-router';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        let logOutLink = null;
        if (this.props.authenticated) {
            logOutLink = <button className="btn btn-primary" onClick={this.props.handleLogout}>Log Out</button>
        }
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Hotel California</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li>{logOutLink}</li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}