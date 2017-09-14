import React from 'react';
import './login.css';
import {serverLogin} from "../serverAPI/serverAPI";
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {error: false};
    }

    render() {
        return (
            <div className='loginForm'>
                <div className='loginContainer'>
                    <Input type='text' label={'User Name:'} onChange={this.handleChange.bind(this, 'userName')}/>
                    <Input type='password' label={'Password:'} onChange={this.handleChange.bind(this, 'password')}/>
                    <Button label='Login' icon={'person'} onClick={this.loginPressed.bind(this)}/>
                </div>
            </div>);
    }

    loginPressed() {
        serverLogin(this.state.userName, this.state.password).then(() =>{
            alert('yay');
        }).catch((error) => {
            console.error(error);
        })
    }

    handleChange = (name, value) => {
        this.setState({...this.state, [name]: value});
    };
}

export default Login;
