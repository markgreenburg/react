import React from "react";
import ReactDOM from "react-dom";
import List from "./components/List";

class Demo extends React.Component {
    render() {
        return (
            <div>
                I am a React component!!!
                Here's a list:
                <List />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, document.getElementById('app'));