import React from 'react';

export default class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "Unknown"
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
        console.log("author:", this.props.author);
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
    }
}