import React, {Component} from 'react';
import ListCheckbox from 'react-toolbox/lib/list/ListCheckbox';
import Button from 'react-toolbox/lib/button/Button';
import ListItem from 'react-toolbox/lib/list/ListItem';
import List from 'react-toolbox/lib/list/List';
import {connect} from 'react-redux';
import {pledge} from '../actions/pledgeAction';
import history from '../history';

import './CSS/pledge.css';

class Pledge extends Component {
    constructor(){
        super();
        this.state={
            pledged:false
        }
    }

    togglePledge(){
        console.log(this.state)
        this.setState({
            pledged:!this.state.pledged
        });
    }

    pledgePressed(){
        this.props.doPledge(this.props.login.user);

        setTimeout(() =>{
            if(this.props.pledge.pledged)
                history.push('/dashboard');
        },500);
    }

    render() {
        return (
            <div className={'pledgeWrapper'}>
                <div className={'pledge'}>
                    <h1>The Pledge</h1>
                    <p>
                        I {this.props.login.user} am here by committed by signing this pledge to fulfill the following obligations by any means necessary:
                    </p>
                    <List>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption={'I '+ this.props.login.user+ ' am fully committed to go to the H.A.T no matter the circumstances until death do me part.'}/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption={'I '+ this.props.login.user+ ' am here by obligated to gather all the needed funds to go to the H.A.T until the specified date.'}/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption={'I '+ this.props.login.user+ ' am committed to acknowledge any motion that more than 50% of the pledged hacks are committed to, even against my preference.'}/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption={'I '+ this.props.login.user+ ' am obligated to not separate from the group to a time exceeding the minimal separation time.'}/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption={'I '+ this.props.login.user+ ' am swear to+ not take anything personally, and not to spite fights.'}/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption={'I '+ this.props.login.user+ ' am committed to compromise whenever I can.'}/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption={'I '+ this.props.login.user+ ' am committed to stay within the daily budget (if I dont have additional funds).'}/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption='Each and every hack that pledged, is obligated in helping, advising, and managing all the needed arrangements in order to execute the H.A.T.'/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption='When a hack have a chance to wet the waffle all other hacks are committed to do anything in their power to help them.'/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption='BROS B4 HOES!'/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption='Take care of fallen Hacks.'/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption='Tell people whats bothering you.'/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption='Make nothing personal.'/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption='Do NOT over drink/smoke.'/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption='Do not over spend.'/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption='Insurance is necessary.'/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption='Driver stays sober.'/>
                        <ListItem leftIcon={<img src={'https://image.flaticon.com/icons/svg/61/61839.svg'} height={20} width={20}/>} caption='ties will be solved randomly.'/>
                    </List>

                    <ListCheckbox caption={'I ' + this.props.login.user +' accept all the restrictions, obligations, commitments and codes mentioned above.'} checked={this.state.pledged} onChange={this.togglePledge.bind(this)}/>

                    {this.state.pledged? <Button className='pledgeButton' label={'pledge'} onClick={this.pledgePressed.bind(this)}/> : undefined}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        pledge:state.pledge
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doPledge: (userName) => {
            dispatch(pledge(userName));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pledge);
