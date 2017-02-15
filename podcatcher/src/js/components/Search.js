import React from "react";
import Results from "./Results";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ""
        };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    /* Get user's search query and save to state */
    handleChange(event) {
        this.setState({searchString: event.target.value});
    };

    /* Pass value of form submit up to header component */
    handleSubmit(event) {
        event.preventDefault();
        const submittedString = this.state.searchString;
        this.setState({searchString: ""});
        this.props.onSearchSubmit(submittedString);
    }

    render() {
        return (
            <form class="navbar-form navbar-right" onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <input type="text" class="form-control" id="searchString" placeholder="Find Venues" value={this.state.searchString} onChange={this.handleChange}/>
                    <button type="submit" class="btn btn-primary">Search</button>
                </div>
            </form>
        );
    }
}
