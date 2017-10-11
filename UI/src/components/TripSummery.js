import React, {Component} from 'react';
import SummeryCard from './SummeryCard';
import './CSS/TripSummery.css';
import {connect} from 'react-redux';
import { fetchMotions } from '../actions/summeryActions';


class TripSummery extends Component {

    componentWillMount() {
        console.log(this.props);
        this.props.doFetch();
    }

    render() {
        return <div className={'wrapper'}>
            {
              (this.props.summery.motions).map((card, index) => {
                    console.log(card)
                    return (<SummeryCard avatar={card.avatar} title={card.title} subtitle={card.subtitle} value={card.value} voted={card.voted} key={index}/>);
                })
            }
        </div>;
    }
}


const mapStateToProps = (state) => {
    return {
        summery: state.summery
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doFetch : ()=> {
            dispatch(fetchMotions());
        }
    };
};

export  default connect(mapStateToProps, mapDispatchToProps)(TripSummery);
