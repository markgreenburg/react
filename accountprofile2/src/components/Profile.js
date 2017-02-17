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
        this.handleAvatarChange = this.handleAvatarChange.bind(this);
        this.handleUserUpdate = this.handleUserUpdate.bind(this);
    }

       handleFirstNameChange(event){
        let currentInfo = this.state.user;
        currentInfo.fName = event.target.value;
        this.setState({user: currentInfo}, () => console.log(this.state.user));
    }

       handleLastNameChange(event){
        let currentInfo = this.state.user;
        currentInfo.lName = event.target.value;
        this.setState({user: currentInfo}, () => console.log(this.state.user));
    }

       handleAvatarChange(event){
        let currentInfo = this.state.user;
        currentInfo.avatar = event.target.value;
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
                        <input type="text" className="form-control" id="userFirst" value={this.state.user.fName} required onChange={this.handleFirstNameChange}/>
                        <input type="text" className="form-control" id="userLast" value={this.state.user.lName} required onChange={this.handleLastNameChange} />
                        <input type="text" className="form-control" id="userAvatar" value={this.state.user.avatar} required onChange={this.handleAvatarChange} />
                        <p>Email: {this.state.user.email}</p>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        );
    }
}