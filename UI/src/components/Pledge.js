import React, {Component} from 'react';
import ListCheckbox from 'react-toolbox/lib/list/ListCheckbox';
import Button from 'react-toolbox/lib/button/Button';

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

    render() {
        return (
            <div className={'pledgeWrapper'}>
                <div className={'pledge'}>
                    <h1>The Pledge</h1>
                    <p>
                        I ______ am here by committed by signing this pledge to fulfill the following obligations by any means necessary:
                    </p>

                    <ul>
                        <li>I _____ am fully committed to go to the H.A.T no matter the circumstances until death do me part.</li>
                        <li>I _____ am here by obligated to gather all the needed funds to go to the H.A.T until the specified date.</li>
                        <li>I _____ am committed to acknowledge any motion that more than 50% of the pledged hacks are committed to, even against my preference.</li>
                        <li>I _____ am obligated to not separate from the group to a time exceeding the minimal separation time.</li>
                        <li>I _____ am swear to not take anything personally, and not to spite fights.</li>
                        <li>I _____ am committed to compromise whenever I can.</li>
                        <li>I _____ am committed to stay within the daily budget (if I don't have additional funds).</li>
                        <li>Each and every hack that pledged, is obligated in helping, advising, and managing all the needed arrangements in order to execute the H.A.T.</li>
                        <li>When a hack have a chance to wet the waffle all other hacks are committed to do anything in their power to help them.</li>
                        <li>BROS B4 HOES!</li>
                        <li>Take care of fallen Hacks.</li>
                        <li>Tell people whats bothering you.</li>
                        <li>Make nothing personal.</li>
                        <li>Do NOT over drink/smoke.</li>
                        <li>Do not over spend.</li>
                        <li>Insurance is necessary.</li>
                        <li>Driver stays sober.</li>
                        <li>ties will be solved randomly.</li>
                    </ul>
                    <ListCheckbox caption={'I accept all the restrictions, obligations, commitments and codes mentioned above.'} checked={this.state.pledged} onChange={this.togglePledge.bind(this)}/>

                    {this.state.pledged? <Button label={'pledge'}/> : undefined}
                </div>
            </div>
        );
    }
}

export default Pledge;
