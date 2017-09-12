import React from 'react';
import {login} from '../actions/loginActions';
import {connect} from 'react-redux';

class DashBoard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <p>{this.props.login.logged ? 'logged' : 'not logged: ' + this.props.login.user}</p>;
    }

    componentDidMount() {
        if (!this.props.login.logged)
            window.location = '/login.css';
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
        doLogin: (userName, password) => {
            dispatch(login(userName, password));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
