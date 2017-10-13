import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider';
import {loginMock} from '../actions/loginActions';
import {toggleDrawer} from '../actions/bucketActions';
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
                        <MenuItem type='help' value='help' icon='help' caption='About'
                                  onClick={this.redirect.bind(this, '/help')}/>
                        <MenuDivider/>
                        <MenuItem type='login' value='login' icon='person' caption={this.props.login.user}
                                  onClick={this.redirect.bind(this, '/login')}/>
                    </IconMenu>

                </AppBar>

                <Drawer active={this.props.bucket.drawerOpen} onOverlayClick={this.handleToggle}>
                    <DrawerContent/>
                </Drawer>

                <Snackbar
                    action='Dismiss'
                    active={this.state.snackBarActive}
                    label='Please Login'
                    timeout={2000}
                    type='cancel'
                />
            </div>
        );
    }

    redirect(dest) {
        history.push(dest);
    }

    componentWillMount(){
        let tempProps = localStorage.getItem('login');

        console.log(tempProps,((tempProps !== null)), typeof tempProps)

        if(tempProps !== null)
            this.props.doLogin(tempProps);
    }

    handleToggle = () => {
        //if (this.props.login.logged)
            this.props.toggleDrawer();
        //else
        //    this.setState({snackBarActive:true});
    };
};

const mapStateToProps = (state) => {
    return {
        login: state.login,
        logout: state.logout,
        bucket: state.bucket,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: (userName) => {
            dispatch(loginMock(userName));
        },
        toggleDrawer: (state) => {
            dispatch(toggleDrawer(state));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
