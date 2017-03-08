import React, { Component } from 'react';
import { token } from '../config';
import Channels from './Channels';
import Messages from './Messages';

class App extends Component {
    constructor() {
        super();
        this.state = {
          channels: [],
          activeChannel: "",
          teamUsers: [],
        };
    }

    componentDidMount() {
        // Grab user's channel list, set active channel to the first channel in the list
        fetch("https://slack.com/api/channels.list?token=" + token)
            .then((result) => result.json())
            .then((jsonResults) => {
                let channelList = jsonResults.channels.map((channel) => {
                    return {channelname: channel.name, channelid: channel.id}
                });
                this.setState({channels: channelList, activeChannel: channelList[0].channelid});
            })
            .catch((err) => console.log(err));
        // Grab user names so that we can push them down through props and display names next to each rendered message
        fetch("https://slack.com/api/users.list?token=" + token)
            .then((result) => result.json())
            .then((jsonResults) => {
                let membersList = jsonResults.members.map((member) => {
                    return {name: member.name, id: member.id, img: member.profile.image_32};
                });
                this.setState({teamUsers: membersList});
            })
            .catch((err) => console.log(err));
        }
  
    render() {
      if (this.state.activeChannel && this.state.teamUsers) {
        return (
          <div className="App">
            <div className="App-header">
                Welcome to the World's Worst Slack Clone (tm)
            </div>
            <Channels setActiveChannel={this.setActiveChannel}
                    channelList={this.state.channels}
                    activeChannel={this.state.activeChannel}
                    handleLiClick={this.handleLiClick}
            />
            <Messages activeChannel={this.state.activeChannel} 
                    teamUsers={this.state.teamUsers} />
          </div>
        );
      } else {
        return (
          <div>Loading Results...</div>
        );
      }
    }
}

export default App;
