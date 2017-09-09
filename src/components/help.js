import React from 'react';

class Help extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
  }
}

export default Help;
