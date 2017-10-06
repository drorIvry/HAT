import React, {Component} from 'react';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider';
import history from '../history';

class DrawerContent extends Component {
    render() {
        return (
            <div className={'drawerContentWrapper'}>
                <MenuItem value='general' icon={<img src={'https://d30y9cdsu7xlg0.cloudfront.net/png/29962-200.png'} height={23} width={23} />} caption='General Bucket' />
                <MenuDivider/>
                <MenuItem value='places' icon='place' caption='Places Bucket' />
                <MenuItem value='munch' icon={<img src={'https://cdn0.iconfinder.com/data/icons/huge-business-icons/512/Music_notes.png'} height={20} width={20} />} caption='Munch Bucket' />
                <MenuItem value='munch' icon={<img src={'https://image.flaticon.com/icons/svg/27/27305.svg'} height={23} width={23} />} caption='Munch Bucket' />
                <MenuItem value='hack' icon={<img src={'https://cdn0.iconfinder.com/data/icons/nature-food-and-kitchen/1000/file_light-43-512.png'} height={35} width={35} />} caption='Hack Bucket' />
                <MenuItem value='metal' icon={<img src={'https://cdn4.iconfinder.com/data/icons/heavy-lines-20-music-icons/100/19_horns-512.png'} height={30} width={30} />} caption='Metal Bucket' />


                <MenuDivider/>
                <MenuItem value='pledge' caption='Take the pledge' onClick={()=>{history.push('/pledge')}}/>
                <MenuItem value='pledge' caption='Suggest a motion'/>
            </div>
        );
    }
}

export default DrawerContent;
