import React from 'react';
import './login.css';
import {serverLogin} from "../serverAPI/serverAPI";
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';
import {connect} from 'react-redux';
import {login} from '../actions/loginActions';
import history from '../router/history';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            error: false,
            userName: 'User Name:',
            password: 'Password:',
            passwordLabel: 'Password:'
        };
    }

    render() {
        return (
            <div className='loginForm'>
                <div className='loginContainer'>
                    <Input type='text' label={this.state.userName} onChange={this.handleChange.bind(this, 'userName')}
                           error={this.props.login.error}/>
                    <Input type='password' label={this.state.passwordLabel}
                           onChange={this.handleChange.bind(this, 'password')} error={this.props.login.error}/>
                    <Button label='Login' icon={'person'} onClick={this.loginPressed.bind(this)}/>
                </div>
            </div>);
    }

    loginPressed() {
        this.props.doLogin(this.state.userName, this.state.password);

        setTimeout(() =>{
            if(this.props.login.logged)
                history.push('/dashboard');
        },500);
    }

    handleChange = (name, value) => {

        if (name === 'password')
            this.setState({...this.state, passwordLabel: ''})

        this.setState({...this.state, [name]: value});
    };
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        logout: state.logout
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: (userName, password) => {
            dispatch(login(userName, password));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);