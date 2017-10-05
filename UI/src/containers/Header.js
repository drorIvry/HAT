import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider';
import {login} from '../actions/loginActions';
import Drawer from 'react-toolbox/lib/drawer';
import Snackbar from 'react-toolbox/lib/snackbar/Snackbar';
import {connect} from 'react-redux';
import history from '../history';
import DrawerContent from '../components/DrawerContent';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            drawerActive: false,
            snackBarActive: false
        };
    }

    render() {
        return (
            <div>
                <AppBar title='H.A.T' leftIcon={'menu'} onLeftIconClick={this.handleToggle}>
                    <IconMenu icon='more_vert' position='topRight' theme={{zIndex: 10}}>
                        <MenuItem type='home' value='home' icon='home' caption='home'
                                  onClick={this.redirect.bind(this, '/dashboard')}/>
                        <MenuItem type='help' value='help' icon='help' caption='Help'
                                  onClick={this.redirect.bind(this, '/help')}/>
                        <MenuDivider/>
                        <MenuItem type='login' value='login' icon='person' caption={this.props.login.user}
                                  onClick={this.redirect.bind(this, '/login')}/>
                    </IconMenu>

                </AppBar>

                <Drawer active={this.state.drawerActive} onOverlayClick={this.handleToggle}>
                    <DrawerContent/>
                </Drawer>

                <Snackbar
                    action='Dismiss'
                    active={this.state.snackBarActive}
                    label='Please Login'
                    timeout={2000}
                    onClick={this.handleSnackbarClick}
                    onTimeout={this.handleSnackbarTimeout}
                    type='cancel'
                />
            </div>
        );
    }

    redirect(dest) {
        history.push(dest);
    }

    handleSnackbarClick = () => {
        this.setState({snackBarActive:false});
    };

    handleToggle = () => {
        if (this.props.login.logged)
            this.setState({drawerActive: !this.state.drawerActive});
        else
            this.setState({snackBarActive:true});
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
        doLogin: (userName) => {
            dispatch(login(userName));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
