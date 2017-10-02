import React, {Component} from 'react';
import './CSS/TripSummery.css';


class TripSummery extends Component {
    render() {
        return <div className={'SummeryWrapper'}>

                <div className={'tripPropsForm'}>
                    <p className={'prop'}>H.A.T date:</p>
                    <p className={'value'}>TBD</p>
                </div>

                <div className={'tripPropsForm'}>
                    <p className={'prop'}>H.A.T return Date:</p>
                    <p className={'value'}>TBD</p>
                </div>

                <div className={'tripPropsForm'}>
                    <p className={'prop'}>H.A.T daily Budget:</p>
                    <p className={'value'} >TBD</p>
                </div>

                <div className={'tripPropsForm'}>
                    <p className={'prop'}>H.A.T Cost per Huck:</p>
                    <p className={'value'}>TBD</p>
                </div>
        </div>;
    }
}

export default TripSummery;
