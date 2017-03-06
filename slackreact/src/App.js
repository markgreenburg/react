import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Channels from './Channels';
import Messages from './Messages';

class App extends Component {
  constructor() {
    super();
    this.state = {
      channels: [],
      activeChannel: "",
      teamUsers: [],
    }
    this.setActiveChannel = this.setActiveChannel.bind(this);
  }

    componentWillMount() {
        // Grab user's channel list, set active channel to the first channel in the list
        fetch("https://slack.com/api/channels.list?token=xoxp-5213863414-110434677206-149596640240-34e3afbe892d74401312cf73da136e88&pretty=1")
            .then((result) => result.json())
            .then((jsonResults) => {
                let channelList = jsonResults.channels.map((channel) => {
                    return {channelname: channel.name, channelid: channel.id}
                });
                this.setState({channels: channelList, activeChannel: channelList[0].channelid});
            })
        // Grab user names so that we can push them down through props and display names next to each rendered message
            .then(() => {
              fetch("https://slack.com/api/users.list?token=xoxp-5213863414-110434677206-149596640240-34e3afbe892d74401312cf73da136e88&pretty=1")
                  .then((result) => result.json())
                  .then((jsonResults) => {
                      let membersList = jsonResults.members.map((member) => {
                          return {name: member.name, id: member.id, img: member.profile.image_32};
                      });
                      this.setState({teamUsers: membersList});
                      console.log("app-level state:");
                      console.log(this.state);
                  })
                  .catch((err) => console.log(err));
            })
            .catch((err) => {
              console.log(err);
            });
    }

    setActiveChannel(id) {
        this.setState({activeChannel: id});
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
}

export default App;
