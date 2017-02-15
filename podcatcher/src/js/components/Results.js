import React from "react";
import Result from "./Result";

export default class Results extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div class="results">
                {
                    this.props.searchResults.map((result, index) => {
                        return (<Result listItem={result} key={index} />);
                    })
                }
            </div>
        );
    }
}