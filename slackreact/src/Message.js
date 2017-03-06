import React from 'react';

export default class Message extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    image placeholder
                </li>
                <li>
                    {this.props.author}
                </li>
                <li>
                    {this.props.text}
                </li>
                <li>
                    {this.props.time}
                </li>
            </ul>
        );
    }
}