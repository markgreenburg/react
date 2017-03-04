import React from "react";

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goog: 0,
            aapl: 0,
            fb: 0
        };
    }

    componentDidMount() {
        fetch("http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=goog")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log("There was a problem getting stock price. Status Code: " + response.status);
                }
            })
            .then((data) => {
                console.log(data);
                this.setState({goog: data.LastPrice});
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <ul>
                <li>Goog: {this.state.goog}</li>
                <li>two</li>
                <li>three</li>
            </ul>
        );
    }
}