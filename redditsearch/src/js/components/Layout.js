import React from "react";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
import Reddit from "./Reddit";
import axios from 'axios';

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            search:"reactjs"
        };
        this.doSearch = this.doSearch.bind(this);
    }

    componentDidMount(){
    }

    doSearch(search,event){
        console.log("doing the search:");
        // console.log(a);
        // console.log(b);
        this.setState({
            search:search
        });

        axios.get(`http://www.reddit.com/r/${search}.json`)
          .then(res => {
            const posts = res.data.data.children.map(obj => obj.data);
            console.log(posts);
          });
    }

    render() {
        var displayShowResults = false;
        let list = <li>Empty List</li>;

        return (
            <div>
            <div id="SearchBar">
                <SearchBar doSearch={this.doSearch} />
            </div>
            <div id="list">
                <ResultList list={list} />
            </div>
            <Reddit subreddit={this.state.search}/>
            </div>

        );

  }
}
