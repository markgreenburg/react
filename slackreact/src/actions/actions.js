import { token } from '../config';

export function changeChannel(newChannel) {
    console.log("changing channels...");
    fetchMessages(newChannel);
    return {
        type: "CHANGE_CHANNEL",
        payload: {
            channel: newChannel,
        },
    }
}

export function fetchMessages(newChannel) {
    console.log("fetching messages");
    return function(dispatch) {
        const baseUrl = "https://slack.com/api/channels.history?token=";
        fetch(baseUrl + token + "&channel=" + this.props.activeChannel)
            .then((result) => result.json())
            .then((jsonResults) => {
                let messageList = jsonResults.messages.map((message) => {
                    return {userid: message.user, text: message.text, time: message.ts}
                });
                dispatch({ type: "FETCH_MESSAGES", payload: messageList });
            })
            .catch((err) => dispatch({ type: "FETCH_ERROR", payload: err }));
    }
}