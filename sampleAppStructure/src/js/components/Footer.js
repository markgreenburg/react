import React from "react";

export default class Footer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}