import React from 'react';
import {connect} from 'react-redux';
import history from '../history';
import TripSummery from './TripSummery'

class DashBoard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className={'dashboardWrapper'}>
            <TripSummery/>
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
