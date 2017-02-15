import React from 'react';

export default class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li class="result">
          {this.props.listItem}
      </li>
    );
  }
}
