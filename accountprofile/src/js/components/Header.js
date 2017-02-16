import React from "react";

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        let logOutLink = null;
        if (this.props.authenticated) {
            logOutLink = <button class="btn btn-primary" onClick={this.props.handleLogout}>Log Out</button>
        }
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Hotel California</a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li>{logOutLink}</li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}