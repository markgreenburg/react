import React from "react";
import Result from "./Result";

export default class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="results container-fluid">
                {
                    this.props.searchResults.map((result, index) => {
                        return (<Result result={result} key={index} />);
                    })
                }
            </div>
        );
    }
}