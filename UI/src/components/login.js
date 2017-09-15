import React from 'react';
import './login.css';
import {serverLogin} from "../serverAPI/serverAPI";
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {error: false,
        userName:'User Name:',
        password:'Password:',
        passwordLabel:'Password:'};
    }

    render() {
        return (
            <div className='loginForm'>
                <div className='loginContainer'>
                    <Input type='text' label={this.state.userName} onChange={this.handleChange.bind(this, 'userName')} error={this.state.error}/>
                    <Input type='password' label={this.state.passwordLabel} onChange={this.handleChange.bind(this, 'password')} error={this.state.error}/>
                    <Button label='Login' icon={'person'} onClick={this.loginPressed.bind(this)}/>
                </div>
            </div>);
    }

    loginPressed() {
        serverLogin(this.state.userName, this.state.password).then(() =>{
            alert('yay');
        }).catch((error) => {
            this.setState({...this.state, error:<span>User Name or password are incorrect!</span>})
        })
    }

    handleChange = (name, value) => {

        if(name === 'password')
            this.setState({...this.state, passwordLabel:''})

        this.setState({...this.state, [name]: value});
    };
}

export default Login;
