import React from "react";
import ReactDOM from "react-dom";
import List from "./components/List";

class Demo extends React.Component {
    render() {
        return (
            <div>
                React Stocks
                <List />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, document.getElementById('app'));