import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            secondsElapsed: 0
        };
    }

    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <div class="header">
                    <Header text="this is the header!"/>
                </div>
                <div class="body">
                    Seconds Elapsed: {this.state.secondsElapsed}
                </div>
                <div class="footer">
                    <Footer text="this is the footer!"/>
                </div>
            </div>
        );
    }
}