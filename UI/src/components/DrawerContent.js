import React, {Component} from 'react';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider';
import history from '../history';
import {connect} from 'react-redux';
import {pour, getFilteredBucket} from "../actions/bucketActions";
import {toggleDrawer} from '../actions/bucketActions';
import {filter, clearFilters} from "../actions/bucketActions";
import icons from '../icons/tagIcons';


class DrawerContent extends Component {
    render() {
        return (
            <div className={'drawerContentWrapper'}>
                <MenuItem value='general'
                          icon={<img src={icons.general} height={23}
                                     width={23}/>} caption='General Bucket' onClick={this.navigateAndClear.bind(this)}/>
                <MenuDivider/>
                <MenuItem value='places' icon='place' caption='Places Bucket'
                          onClick={this.navigate.bind(this, ['places'])}/>
                <MenuItem value='music' icon={<img
                    src={icons.music} height={20}
                    width={20}/>} caption='Music Bucket' onClick={this.navigate.bind(this, ['music'])}/>
                <MenuItem value='munch'
                          icon={<img src={icons.munch} height={23} width={23}/>}
                          caption='Munch Bucket' onClick={this.navigate.bind(this, ['munch'])}/>
                <MenuItem value='hack' icon={<img
                    src={icons.hack}
                    height={35} width={35}/>} caption='Hack Bucket' onClick={this.navigate.bind(this, ['hack'])}/>
                <MenuItem value='metal' icon={<img
                    src={icons.metal}
                    height={30} width={30}/>} caption='Metal Bucket' onClick={this.navigate.bind(this, ['metal'])}/>
                <MenuDivider/>
                <MenuItem value='pledge' caption='Take the pledge' onClick={() => {
                    this.props.toggleDrawer();
                    history.push('/pledge')
                }}/>
                <MenuItem value='pledge' caption='Suggest a motion'/>
            </div>
        );
    }

    navigate(filters) {
        this.props.toggleDrawer();
        this.props.filter(filters);
        setTimeout(() => {
            this.props.doGetFilteredBucket(this.props.bucket.filters);
            history.push('/buckets');
        }, 100);
    }

    navigateAndClear() {
        this.props.toggleDrawer();
        this.props.clearFilters();
        setTimeout(() => {
            this.props.doPour();
            history.push('/buckets');
        }, 100);
    }
}

const mapStateToProps = (state) => {
    return {
        bucket: state.bucket,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        filter: (filters) => {
            dispatch(filter(filters));
        },
        clearFilters: () => {
            dispatch(clearFilters());
        },
        doPour: () => {
            dispatch(pour());
        },
        doGetFilteredBucket: (filters) => {
            dispatch(getFilteredBucket(filters));
        },
        toggleDrawer: (state) => {
            dispatch(toggleDrawer(state));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
