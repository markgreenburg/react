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
        this.fetchMessages = this.fetchMessages.bind(this);
    }

    componentDidMount() {
        this.fetchMessages();
    }

    componentWillReceiveProps() {
        this.fetchMessages();
    }

    render() {
        if (this.state.messages) {
            return(
                <div>
                    <div>
                        {this.state.messages.map((message, index) => {
                            return <Message key={index}
                                    teamUsers={this.props.teamUsers}
                                    userId={message.userid}
                                    text={message.text}
                                    time={message.time} 
                            />;
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
                    return {userid: message.user, text: message.text, time: message.ts}
                });
                this.setState({messages: messageList});
            })
            .catch((err) => console.log(err));
    }
}