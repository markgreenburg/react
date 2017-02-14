import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            importantStuff: ""
        };
    }

    /* Takes search query from Search.js and runs through API */
    handleSearchSubmit(searchString) {
        console.log(searchString);
    }

    render() {
        return (
            <div>
                <div class="header">
                    <Header onSearchSubmit={this.handleSearchSubmit}/>
                </div>
                <div class="results-list">
                    Search Results will go here
                </div>
                <div class="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}