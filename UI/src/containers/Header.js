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

    // route to the login.css page.
    goToLogin(){
        window.location = '/login';
    }

    //route to the help page.
    goToHelp(){
        window.location = '/help';
    }

    render() {
        return (
            <AppBar title='H.A.T'>
                <IconMenu icon='more_vert' position='topRight'>
                    <MenuItem type='help' value='help' icon='help' caption='Help' onClick={this.goToHelp}/>
                    <MenuDivider/>
                    <MenuItem type='login' value='login' icon='person' caption={this.props.login.user} onClick={this.goToLogin}/>
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
        doLogin: (userName) => {
            dispatch(login(userName));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
