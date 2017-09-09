import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <p>login</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Login;
