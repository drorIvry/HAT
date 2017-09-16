import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider';
import {login} from '../actions/loginActions';
import {connect} from 'react-redux';
import history from '../history';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    redirect(dest){
        history.push(dest);
    }

    render() {
        return (
            <AppBar title='H.A.T'>
                <IconMenu icon='more_vert' position='topRight'>
                    <MenuItem type='help' value='help' icon='help' caption='Help' onClick={this.redirect.bind(this,'/help')}/>
                    <MenuDivider/>
                    <MenuItem type='login' value='login' icon='person' caption={this.props.login.user} onClick={this.redirect.bind(this,'/login')}/>
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
