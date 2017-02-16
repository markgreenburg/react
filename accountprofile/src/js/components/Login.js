import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleEmailChange(event){
        this.setState({email: event.target.value});
    }
    
    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    handleLogin(event){
        event.preventDefault();
        this.props.handleLogin(this.state);
    }
    
    render() {
        return(
            <form class="form" onSubmit={this.handleLogin}>
                <div class="form-group">
                    <input type="email" class="form-control" id="userEmail" placeholder="email"  required onChange={this.handleEmailChange}/>
                    <input type="password" class="form-control" id="password" placeholder="password" required onChange={this.handlePasswordChange}/>
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
        );
    }
}