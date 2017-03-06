import React from 'react';
import Message from './Message';

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        }
        this.userIdToName = this.userIdToName.bind(this);
        
    }

    componentWillMount() {
        // Fetch last 100 messages for this channel
        console.log('active channel is:');
        console.log(this.props.activeChannel);
        const baseUrl = "https://slack.com/api/channels.history?token=xoxp-5213863414-110434677206-149596640240-34e3afbe892d74401312cf73da136e88&pretty=1&channel="
        fetch(baseUrl + this.props.activeChannel)
            .then((result) => result.json())
            .then((jsonResults) => {
                console.log('json results:');
                console.log(jsonResults);
                let messageList = jsonResults.messages.map((message) => {
                    return {author: message.user, text: message.text, time: message.ts}
                });
                this.setState({messages: messageList});
            })
            .catch((err) => console.log(err));
    }

    userIdToName(id) {
        return this.props.teamUsers.forEach((user) => {
            if (user.id == id) {
                console.log(user.name);
                return user.name;
            }
        })
    }

    render() {
            console.log("Messages getting rendered!");
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
    }
}
