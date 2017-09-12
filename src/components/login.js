import React from 'react';
import './login.css';

class Login extends React.Component {
    constructor() {
        super();
    }

    doLogin() {

    }

    render() {
        return (
            <div className='loginForm'>
                <form >
                    <h2>Login</h2>
                    <h4>User Name:</h4>
                    <input />
                    <h4>Password:</h4>
                    <input type="password"/>
                    <br/>
                    <button onClick={this.doLogin.bind(this)}>Login</button>
                </form>
            </div>);
    }

    componentDidMount() {
    }
}

export default Login;
