import React from 'react';
import * as channel from "../actions/actions";
import { connect } from "react-redux";

@connect((store) => store)

export default class Channel extends React.Component {
    constructor(props) {
        super(props);
        this.setActiveChannel = this.setActiveChannel.bind(this);
    }

    setActiveChannel(event) {
        event.preventDefault();
        this.props.dispatch(channel.changeChannel(this.props.channelid));
    }

    render() {
        return(
            <li onClick={this.setActiveChannel}>
                {this.props.channelname}
            </li>
        );
    }
}