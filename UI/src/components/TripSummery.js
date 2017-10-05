import React, {Component} from 'react';
import SummeryCard from './SummeryCard';
import './CSS/TripSummery.css';


class TripSummery extends Component {
    render() {
        return <div className={'wrapper'}>
            <SummeryCard title={'Budget'} subtitle={'daily budget'} value={'75$'}/>
            <SummeryCard title={'Dates'} subtitle={'start and end dates'} value={'1/1 - 2/2'}/>
            <SummeryCard title={'Total Budget'} subtitle={'total minimal budget'} value={'100,000$'}/>
            <SummeryCard title={'Additional places'} subtitle={'places that aren\'t in the US' } value={'Canada'}/>
            <SummeryCard title={'pledged Senators'} subtitle={'people that are committed to the trip 100%'} value={'kaki pipi poopoo'}/>
        </div>;
    }
}

export default TripSummery;
