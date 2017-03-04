import React from "react";

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { goog: 0, };
    }

    componentDidMount() {
        fetch("http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=goog")
            .then((response) => response.json())
            .then((data) => this.setState({goog: data.LastPrice}))
            .catch((err) => console.log(err));
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