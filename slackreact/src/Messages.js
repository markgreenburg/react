import React from 'react';
import Message from './Message';
import { token } from '../config';

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        // Bind helper functions
        this.userIdToName = this.userIdToName.bind(this);
        this.fetchMessages = this.fetchMessages.bind(this);
    }

    componentDidMount() {
        this.fetchMessages();
    }

    componentWillReceiveProps() {
        this.fetchMessages();
    }

    userIdToName(id) {
        return this.props.teamUsers.forEach((user) => {
            if (user.id === id) {
                return user.name;
            }
        })
    }

    render() {
            console.log("Messages getting rendered!");
            if (this.state.messages) {
                return(
                    <div>
                        {this.state.messages.map((message, index) => {
                            return <Message key={index}
                                    author={this.userIdToName(message.author)}
                                    text={message.text}
                                    time={message.time} />;
                            }
                        )}
                    </div>
                );
            } else {
                return (
                    <div>Loading...</div>
                );
            }
    }

    fetchMessages () {
        // Fetch last 100 messages for given channel, write them to state
        const baseUrl = "https://slack.com/api/channels.history?token=";
        fetch(baseUrl + token + "&channel=" + this.props.activeChannel)
            .then((result) => result.json())
            .then((jsonResults) => {
                let messageList = jsonResults.messages.map((message) => {
                    return {author: message.user, text: message.text, time: message.ts}
                });
                this.setState({messages: messageList});
            })
            .catch((err) => console.log(err));
    }
}