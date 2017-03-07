import React from 'react';

export default class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: ""
        }
    }

    componentDidMount() {
        const userName = this.props.teamUsers.forEach((user) => {
            if (user.id === this.props.userId) {
                this.setState({ userName: user.name });
                return;
            }
        });
    }

    render() {
        if (this.state.userName) {
            return (
                <ul>
                    <li>
                        {this.state.userName}
                    </li>
                    <li>
                        {this.props.text}
                    </li>
                    <li>
                        {this.props.time}
                    </li>
                    <br />
                </ul>
            );
        } else {
            return (
                <div>Unsupported Message Type</div>
            );
        }
    }
}