import React from 'react';
import './login.css';
import {serverLogin} from "../serverAPI/serverAPI";
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';


class Login extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='loginForm'>
                <div className='loginContainer'>
                    <Input type='text' label={'User Name:'}/>
                    <Input type='password' label={'Password:'}/>
                    <Button label='Login' icon={'person'}/>
                </div>
            </div>);
    }

    componentDidMount() {
    }
}

export default Login;
