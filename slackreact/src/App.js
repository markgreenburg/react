import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
        // Bind helper methods
        this.setActiveChannel = this.setActiveChannel.bind(this);
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
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
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

    // Sets the active channel to whatever channel was clicked on in the channel list
    setActiveChannel(id) {
        this.setState({activeChannel: id});
        console.log(this.state.activeChannel);
    }
}

export default App;
