import React from "react";

export default class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const hasCategories = (this.props.result.categories.length > 0 ? 
            true : false);
        const hasUrl = (this.props.result.url ? true : false);
        return (
            <div class="result">
                <div class="result-link">
                    {
                        hasUrl ? 
                            (<a target="_blank" href={this.props.result.url}>{this.props.result.name}</a>) :
                            (this.props.result.name)
                    }
                </div>
                <div class="result-category">
                    {
                        hasCategories ? 
                            this.props.result.categories[0].name : 
                            "Uncategorized"
                    }
                </div>
            </div>
        );
    }
}
