import React from 'react';
import {login} from '../actions/loginActions';
import {connect} from 'react-redux';
import history from '../history';
import './CSS/Dashboard.css';

class DashBoard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className={'dashboardWrapper'}>
            <div className={'tripPropContainer'}>
                <div className={'tripPropsForm'}>
                    <p className={'prop'}>H.A.T date:</p>
                    <p>TBD</p>

                    <p className={'prop'}>H.A.T return Date:</p>
                    <p>TBD</p>

                    <p className={'prop'}>H.A.T daily Budget:</p>
                    <p>TBD</p>

                    <p className={'prop'}>H.A.T Cost per Huck:</p>
                    <p>TBD</p>
                </div>


            </div>

            <div className={'dashboardContainer'}>
                <div className={'dashboardForm'}>
                </div>
            </div>
        </div>;
    }

    componentDidMount() {
        if (this.props.login.logged)
            history.push('/login');
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        logout: state.logout
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
