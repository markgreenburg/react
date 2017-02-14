import React from "react";

export default class Header extends React.Component {
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