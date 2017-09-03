import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider';

class Header extends React.Component {
  constructor() {
    super();
    this.state = { logged: false };
  }

  render() {
    return (
      <AppBar title='H.A.T'>
        <IconMenu icon='more_vert' position='topLeft' >
          <MenuItem type='help' value='help' icon='help' caption='Help'/>
          <MenuDivider/>
        </IconMenu>
        
      </AppBar>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Header;
