import React from "react";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
import axios from 'axios';

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            search:"home",
            searchResults: []
        };
        this.doSearch = this.doSearch.bind(this);
    }

    doSearch(search,event){
        self = this;
        self.setState({
            search:search
        });
        axios.get(`http://www.reddit.com/r/${search}.json`)
          .then((res) => {
            const posts = res.data.data.children.map(obj => obj.data.title);
            self.setState({searchResults: posts})
          })
          .catch((err) => {
              console.log(err);
          });
    }

    render() {
        return (
            <div>
                <div id="SearchBar">
                    <SearchBar doSearch={this.doSearch} />
                </div>
                <div id="list">
                    <ResultList list={this.state.searchResults} />
                </div>
            </div>
        );

  }
}
