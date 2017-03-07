import React from 'react';
import Message from './Message';
import Input from './Input';
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
                console.log("found author:", user.name);
                return user.name;
            }
        })
    }

    render() {
        if (this.state.messages) {
            return(
                <div>
                    <div>
                        {this.state.messages.map((message, index) => {
                            return <Message key={index}
                                    author={this.userIdToName(message.author)}
                                    text={message.text}
                                    time={message.time} />;
                            }
                        )}
                    </div>
                    <Input activeChannel={this.props.activeChannel}
                            fetchMessages={this.fetchMessages}
                    />
                </div>
            );
        } else {
            return (
                <div>Loading...</div>
            );
        }
    }

    /* Fetch last 100 messages for given channel, write them to state */
    fetchMessages() {
        console.log("fetching messages...");
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