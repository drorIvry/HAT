import React, {Component} from 'react';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';
import Button from 'react-toolbox/lib/button/Button';
import {connect} from 'react-redux';
import {pledge} from '../actions/pledgeAction';
import history from '../history';

import './CSS/pledge.css';

class Pledge extends Component {
    constructor() {
        super();
        this.state = {
            pledged: false
        }
    }

    togglePledge() {
        console.log(this.state)
        this.setState({
            pledged: !this.state.pledged
        });
    }

    pledgePressed() {
        this.props.doPledge(this.props.login.user);

        setTimeout(() => {
            if (this.props.pledge.pledged)
                history.push('/dashboard');
        }, 500);
    }

    render() {
        return (
            <div className={'pledgeWrapper'}>
                <h1 className={'pledgeTitle'}>The Pledge</h1>
                <p className={'pledgeText'}>
                    I {this.props.login.user} am here by committed by signing this pledge to fulfill the following
                    obligations by any means necessary:
                </p>

                <div className={'pledgeNested'}>
                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>{'I ' + this.props.login.user + ' am fully committed to go to the H.A.T no matter the circumstances until death do me part.'}</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>{'I ' + this.props.login.user + ' am here by obligated to gather all the needed funds to go to the H.A.T until the specified date.'}</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>{'I ' + this.props.login.user + ' am committed to acknowledge any motion that more than 50% of the pledged hacks are committed to, even against my preference.'}</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>{'I ' + this.props.login.user + ' am obligated to not separate from the group to a time exceeding the minimal separation time.'}</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>{'I ' + this.props.login.user + ' am swear to+ not take anything personally, and not to spite fights.'}</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>{'I ' + this.props.login.user + ' am committed to compromise whenever I can.'}</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>{'I ' + this.props.login.user + ' am committed to stay within the daily budget (if I dont have additional funds).'}</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>{'Each and every hack that pledged, is obligated in helping, advising, and managing all the needed arrangements in order to execute the H.A.T.'}</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>{'When a hack have a chance to wet the waffle all other hacks are committed to do anything in their power to help them.'}</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>'BROS B4 HOES!</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>Take care of fallen Hacks.</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>Tell people whats bothering you.</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>Make nothing personal.</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>Do NOT over drink/smoke.</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>Do not over spend.</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>Insurance is necessary.</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>Driver stays sober.</p>

                    <img className={'pledgeImage'} src={'https://image.flaticon.com/icons/svg/61/61839.svg'} width={20}
                         height={20}/>
                    <p>ties will be solved randomly.</p>
                </div>
                <div className={'pledgeCheckBox'}>
                    <Checkbox checked={this.state.pledged}
                              onChange={this.togglePledge.bind(this)}/>
                    <p>{'I ' + this.props.login.user + ' accept all the restrictions, obligations, commitments and codes mentioned above.'}</p>
                </div>
                {this.state.pledged ? <Button className='pledgeButton' label={'pledge'} primary raised
                                              onClick={this.pledgePressed.bind(this)}/> : undefined}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        pledge: state.pledge
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
