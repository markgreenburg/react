import React from 'react';
import Channel from './Channel';

export default class Channels extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ul>
                {this.props.channelList.map((channel) => {
                    return <Channel key={channel.channelid}
                            channelid={channel.channelid} 
                            channelname={channel.channelname} />;
                })}
            </ul>
        );
    }
}