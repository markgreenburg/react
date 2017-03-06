import React from 'react';

export default class Channel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li onClick={() => this.props.setActiveChannel(this.props.channelid)}>{this.props.channelname}</li>
        );
    }
}