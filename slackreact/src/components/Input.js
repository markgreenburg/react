import React from 'react';
import { token } from '../config';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" minLength="1" 
                            required onChange={this.handleChange} 
                    />
                </form>
            </div>
        );
    }

    handleChange(event) {
        this.setState({ message: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const baseUrl = "https://slack.com/api/chat.postMessage?token=";
        fetch(baseUrl + token + "&channel=" + this.props.activeChannel
                + "&text=" + encodeURIComponent(this.state.message))
            .then((response) => response.json())
            .then((jsonResponse) => {
                console.log(jsonResponse);
                if (jsonResponse.ok) {
                    this.props.fetchMessages();
                }
            })
            .catch((err) => console.log(err));
    }
}