import React from "react";
import Result from "./Result";

export default class ResultList extends React.Component {
    render() {
      return (
        <ul>
          {
            this.props.list.map((title, index) => {
            return (<Result listItem={title} key={index} />);
            })
          }
        </ul>
      );
  }
}
