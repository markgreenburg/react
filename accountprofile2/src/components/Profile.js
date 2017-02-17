import React from "react";
import { Link } from 'react-router';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        };
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUserUpdate = this.handleUserUpdate.bind(this);
    }

       handleFirstNameChange(event){
        let currentInfo = this.state.user;
        currentInfo.firstName = event.target.value;
        this.setState({user: currentInfo}, () => console.log(this.state.user));
    }

       handleLastNameChange(event){
        let currentInfo = this.state.user;
        currentInfo.lastName = event.target.value;
        this.setState({user: currentInfo}, () => console.log(this.state.user));
    }

       handleEmailChange(event){
        let currentInfo = this.state.user;
        currentInfo.email = event.target.value;
        this.setState({user: currentInfo}, () => console.log(this.state.user));
    }

        handleUserUpdate(event){
            event.preventDefault();
            this.props.handleUserUpdate(this.state.user);
        }

    render() {
        return (
            <div className="wrapper">
                <img src={this.props.user.avatar} />
                <form className="form" onSubmit={this.handleUserUpdate}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="userFirst" value={this.state.user.firstName} required onChange={this.handleFirstNameChange}/>
                        <input type="text" className="form-control" id="userLast" value={this.state.user.lastName} required onChange={this.handleLastNameChange} />
                        <input type="email" className="form-control" id="userEmail" value={this.state.user.email} required onChange={this.handleEmailChange} />
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </form>
                Hi, {this.props.user.firstName}!</div>
        );
    }
}