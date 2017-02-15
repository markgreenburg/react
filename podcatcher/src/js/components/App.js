import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Results from "./Results";
import toUrl from "../api";
const axios = require("axios");

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchResults: []
        };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    /* Takes search query from Search.js and runs through API */
    handleSearchSubmit(searchString) {
        const self = this;
        const formattedUrl = toUrl(searchString);
        axios.get(formattedUrl)
            .then((response) => {
                self.setState({searchResults: response.data.response.venues});
            })
            .catch((err) => err);
};

    render() {
        return (
            <div>
                <Header onSearchSubmit={this.handleSearchSubmit}/>
                <Results searchResults={this.state.searchResults}/>
                <Footer />
            </div>
        );
    }
}