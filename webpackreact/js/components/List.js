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
        $.ajax({
            type: "POST",
            url: 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=goog&jsoncallback=callback',
            dataType: 'jsonp',
            success: (response) => {
                this.setState({goog: response.LastPrice});
            },
            error: (err) => console.log(err)
        })
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