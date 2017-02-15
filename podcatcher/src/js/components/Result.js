import React from "react";

export default class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="result">
                    {this.props.listItem}
            </div>
        );
    }
}