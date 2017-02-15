import React from "react";

export default class ResultList extends React.Component {
    render() {
    return (
      <ul>
        {this.props.list}
      </ul>
    );
  }
}
