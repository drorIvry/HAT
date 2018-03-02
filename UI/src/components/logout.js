import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from 'react-toolbox/lib/button/Button';
import {logout} from '../actions/loginActions';
import history from '../history';
import './CSS/logout.css';

class Logout extends Component {
    render() {
        return (
            <div className='logoutContainer'>
                <div className='logoutForm'>
                    <p>are you sure you want to logout?</p>
                    <Button label={'Yes'} icon={'check'} onClick={() => {
                        this.props.doLogout();
                        history.push('/login');
                    }}/>
                    <Button label={'No'} icon={'close'} onClick={() => {
                        history.push('/dashboard')
                    }}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        logout: state.logout
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doLogout: () => {
            dispatch(logout());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);