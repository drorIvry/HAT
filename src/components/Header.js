import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider';
import {login} from '../actions/loginActions';
import {connect} from 'react-redux';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <AppBar title='H.A.T'>
                <IconMenu icon='more_vert' position='topRight'>
                    <MenuItem type='help' value='help' icon='help' caption='Help'/>
                    <MenuDivider/>
                    <MenuItem type='login' value='login' icon='person' caption={this.props.login.user}/>
                </IconMenu>

            </AppBar>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        logout:state.logout
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: (userName, password) => {
            dispatch(login(userName,password));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
