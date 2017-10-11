import React, {Component} from 'react';
import SummeryCard from './SummeryCard';
import './CSS/TripSummery.css';
import {connect} from 'react-redux';


class TripSummery extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return <div className={'wrapper'}>
            {
              (this.props.summery.motions).map((card, index) => {

                    return (<SummeryCard title={card.title} subtitle={card.subtitle} value={card.value} pledged={card.pledged} key={index}/>);
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

    };
};

export  default connect(mapStateToProps, mapDispatchToProps)(TripSummery);
