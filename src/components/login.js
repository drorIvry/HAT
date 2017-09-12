import React from 'react';
import './login.css';
import {serverLogin} from "../serverAPI/serverAPI";

class Login extends React.Component {
    constructor() {
        super();
    }

    doLogin() {


        alert("OK");

        serverLogin(this.state.user, this.state.password).then(
            () => {
                console.log("lol")
            }
        ).catch(() => {
            alert("YAY");
        });
    }

    render() {
        return (
            <div className='loginForm'>
                <form>
                    <h2>Login</h2>
                    <h4>User Name:</h4>
                    <input onChange={(event) => {
                        this.setState({user: event.target.value})
                    }}/>
                    <h4>Password:</h4>
                    <input type="password" onChange={(event) => {
                        this.setState({password: event.target.value})
                    }}/>
                    <br/>
                    <button onClick={this.doLogin.bind(this)}>Login</button>
                </form>
            </div>);
    }

    componentDidMount() {
    }
}

export default Login;
